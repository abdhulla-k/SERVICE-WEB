// Scroll-reveal engine. Elements carrying a `.reveal` class (rendered in the
// SSR HTML so there's no flash) get `.is-visible` toggled when they scroll into
// view. Re-scans after each client-side navigation.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  let io: IntersectionObserver | null = null

  const ensure = () => {
    if (io) return io
    io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    return io
  }

  const scan = () => {
    const obs = ensure()
    document
      .querySelectorAll('.reveal:not(.is-visible)')
      .forEach((el) => obs.observe(el))
  }

  // Initial paint + every route change (double rAF so the new DOM is committed).
  nuxtApp.hook('app:mounted', () => requestAnimationFrame(scan))
  nuxtApp.hook('page:finish', () =>
    requestAnimationFrame(() => requestAnimationFrame(scan))
  )
})
