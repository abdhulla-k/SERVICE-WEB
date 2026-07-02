<script setup lang="ts">
import type { Service } from '~/composables/useSiteData'

defineProps<{ service: Service; detailed?: boolean }>()
</script>

<template>
  <NuxtLink
    :to="`/services/${service.slug}`"
    class="card group flex h-full flex-col hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
  >
    <div
      class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"
    >
      <AppIcon :name="service.icon" class="h-6 w-6" />
    </div>

    <h3 class="mt-5 text-xl font-700 text-slate-900">{{ service.title }}</h3>
    <p class="mt-1 text-sm font-600 text-brand-600">{{ service.tagline }}</p>
    <p class="mt-3 text-sm leading-relaxed text-slate-500">
      {{ service.description }}
    </p>

    <ul v-if="detailed" class="mt-5 space-y-2.5">
      <li
        v-for="feature in service.features.slice(0, 4)"
        :key="feature"
        class="flex items-start gap-2.5 text-sm text-slate-600"
      >
        <AppIcon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
        <span>{{ feature }}</span>
      </li>
    </ul>

    <span
      class="mt-6 inline-flex items-center gap-2 text-sm font-600 text-brand-700 group-hover:gap-3"
    >
      Explore service
      <AppIcon name="arrow-right" class="h-4 w-4 transition-all" />
    </span>
  </NuxtLink>
</template>
