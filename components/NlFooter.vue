<script setup lang="ts">
const { product, nav } = useProductData()
const year = 2026

const platform = [
  { label: 'Ask the lesson', to: '#ask' },
  { label: 'How an answer is made', to: '#pipeline' },
  { label: 'The rendering engine', to: '#engine' },
  { label: 'Assessments', to: '#assessments' }
]
</script>

<template>
  <footer class="relative overflow-hidden bg-nl-stage text-nl-paper">
    <div class="nl-dots-dark absolute inset-0 opacity-50" aria-hidden="true" />

    <div class="nl-wrap relative pt-16 sm:pt-20">
      <div
        class="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <span class="nl-eyebrow text-nl-amber">Take it for a spin</span>
          <h2 class="nl-display nl-d2 mt-5 max-w-xl text-nl-paper">
            See a lesson stop<br />and answer a question.
          </h2>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <a :href="`mailto:${product.email}`" class="nl-btn nl-btn--amber">
            Book a walkthrough
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </a>
          <a href="#ask" class="nl-btn nl-btn--on-dark">Read how it works</a>
        </div>
      </div>

      <div class="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:pr-8">
          <div class="flex items-center gap-2.5">
            <NlLogo :size="30" on-dark />
            <span class="font-nl-display text-lg font-bold">{{ product.name }}</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-white/60">
            An AI-native learning platform. Every lesson is authored with agents and
            rendered at runtime — so a learner can stop it, ask anything, and get a
            generated video answer without losing their place.
          </p>
          <p class="nl-mono mt-5 text-[12px] leading-relaxed text-white/40">
            {{ product.stage }}
          </p>
        </div>

        <div>
          <h4 class="nl-mono text-[11.5px] uppercase tracking-[0.12em] text-white/40">
            Platform
          </h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in platform" :key="link.to">
              <a :href="link.to" class="text-white/70 transition hover:text-nl-amber">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="nl-mono text-[11.5px] uppercase tracking-[0.12em] text-white/40">
            On this page
          </h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in nav" :key="link.to">
              <a :href="link.to" class="text-white/70 transition hover:text-nl-amber">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="nl-mono text-[11.5px] uppercase tracking-[0.12em] text-white/40">
            Get in touch
          </h4>
          <ul class="mt-4 space-y-3 text-sm text-white/70">
            <li class="flex items-center gap-2.5">
              <AppIcon name="mail" class="h-5 w-5 text-nl-amber" />
              <a
                :href="`mailto:${product.email}`"
                class="transition hover:text-nl-amber"
              >
                {{ product.email }}
              </a>
            </li>
            <li class="flex items-center gap-2.5">
              <AppIcon name="map-pin" class="h-5 w-5 text-nl-amber" />
              <span>Kerala, India · Remote-first</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-[13px] text-white/40 sm:flex-row"
      >
        <p>© {{ year }} {{ product.name }}. All rights reserved.</p>
        <div class="flex items-center gap-5">
          <NuxtLink to="/privacy" class="transition hover:text-white/70">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="transition hover:text-white/70">Terms</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
