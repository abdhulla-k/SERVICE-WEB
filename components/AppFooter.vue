<script setup lang="ts">
const { company, nav, social, services } = useSiteData()
const year = 2026
</script>

<template>
  <footer class="relative overflow-hidden bg-brand-950 text-white">
    <div class="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />
    <div
      class="absolute -bottom-24 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
      aria-hidden="true"
    />

    <div class="container-px relative pt-16 sm:pt-20">
      <!-- Oversized brand + CTA -->
      <div class="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span class="eyebrow-dark">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Let's talk
          </span>
          <h2 class="reveal rv-clip mt-5 display-lg !text-white">
            Ready to build<br />with AI?
          </h2>
        </div>
        <NuxtLink to="/contact" class="btn bg-brand-500 text-white hover:bg-brand-400">
          Start a project
          <AppIcon name="arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <!-- Link columns -->
      <div class="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:pr-6">
          <NuxtLink to="/" class="flex items-center gap-2.5">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white"
            >
              <AppIcon name="bolt" class="h-5 w-5" />
            </span>
            <span class="font-display text-lg font-700 text-white">
              {{ company.name }}
            </span>
          </NuxtLink>
          <p class="mt-4 text-sm leading-relaxed text-slate-400">
            {{ company.tagline }}. We help teams design, build, and ship
            production-grade AI systems.
          </p>
          <div class="mt-5 flex gap-2">
            <a
              v-for="s in social"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-400/40 hover:text-brand-300"
            >
              <AppIcon :name="s.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-600 uppercase tracking-wider text-slate-500">Company</h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in nav" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-300 transition hover:text-brand-300">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-600 uppercase tracking-wider text-slate-500">Services</h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="s in services.slice(0, 5)" :key="s.slug">
              <NuxtLink to="/services" class="text-slate-300 transition hover:text-brand-300">
                {{ s.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-600 uppercase tracking-wider text-slate-500">Get in touch</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-300">
            <li class="flex items-center gap-2.5">
              <AppIcon name="mail" class="h-5 w-5 text-brand-400" />
              <a :href="`mailto:${company.email}`" class="transition hover:text-brand-300">
                {{ company.email }}
              </a>
            </li>
            <li class="flex items-center gap-2.5">
              <AppIcon name="map-pin" class="h-5 w-5 text-brand-400" />
              <span>{{ company.location }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row"
      >
        <p>© {{ year }} {{ company.legalName }}. All rights reserved.</p>
        <p>Built with Nuxt &amp; Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>
