<script setup lang="ts">
import type { Service } from '~/composables/useSiteData'

defineProps<{ service: Service; index: number; to?: string }>()
</script>

<template>
  <NuxtLink
    :to="to || `/services/${service.slug}`"
    class="srow group block border-t border-slate-200 transition-colors"
  >
    <div class="flex items-center gap-5 py-7 sm:gap-8 sm:py-9">
      <span
        class="hidden w-14 shrink-0 font-display text-sm font-600 text-brand-500 transition-colors group-hover:text-brand-200 sm:block"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </span>

      <div class="min-w-0 flex-1">
        <h3
          class="display-md text-slate-900 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white"
        >
          {{ service.title }}
        </h3>
      </div>

      <p
        class="hidden max-w-xs text-right text-sm text-slate-500 transition-colors group-hover:text-brand-100 md:block"
      >
        {{ service.tagline }}
      </p>

      <span
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-brand-700 sm:h-14 sm:w-14"
      >
        <AppIcon
          name="arrow-right"
          class="h-5 w-5 -rotate-45 transition-transform duration-500 group-hover:rotate-0"
        />
      </span>
    </div>
  </NuxtLink>
</template>
