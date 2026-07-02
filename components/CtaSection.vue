<script setup lang="ts">
const { company } = useSiteData()
</script>

<template>
  <section class="container-px py-16 sm:py-24">
    <div
      class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-20 text-center sm:px-16 sm:py-24"
    >
      <div class="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-400/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-900/40 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-3xl">
        <h2 class="reveal rv-clip display-lg !text-white">
          Let's build something intelligent.
        </h2>
        <p class="reveal mt-6 text-lg text-brand-50" style="transition-delay: 100ms">
          Tell us about your product and goals. We'll come back with a pragmatic,
          build-ready plan — usually within one business day.
        </p>
        <div
          class="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style="transition-delay: 180ms"
        >
          <NuxtLink to="/contact" class="btn-white">
            Start a project
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
          <a
            :href="`mailto:${company.email}`"
            class="btn border border-white/40 text-white hover:bg-white/10"
          >
            <AppIcon name="mail" class="h-4 w-4" />
            {{ company.email }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
