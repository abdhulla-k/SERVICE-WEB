<script setup lang="ts">
// Counts up from 0 to `value` when scrolled into view. `prefix`/`suffix` wrap
// the number; renders the final value immediately if reduced-motion is set or
// the value isn't numeric (e.g. "<1").
const props = withDefaults(
  defineProps<{
    value: number
    prefix?: string
    suffix?: string
    duration?: number
  }>(),
  { prefix: '', suffix: '', duration: 1600 }
)

const el = ref<HTMLElement | null>(null)
const display = ref(0)

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    display.value = props.value
    return
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        obs.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / props.duration)
          // easeOutExpo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          display.value = props.value * eased
          if (t < 1) requestAnimationFrame(tick)
          else display.value = props.value
        }
        requestAnimationFrame(tick)
      }
    },
    { threshold: 0.4 }
  )
  if (el.value) io.observe(el.value)
})

const rendered = computed(() => {
  const v = display.value
  return Number.isInteger(props.value) ? Math.round(v).toString() : v.toFixed(1)
})
</script>

<template>
  <span ref="el">{{ prefix }}{{ rendered }}{{ suffix }}</span>
</template>
