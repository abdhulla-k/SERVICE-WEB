<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout>
    <section class="container-px flex min-h-[70vh] flex-col items-center justify-center py-20 pt-32 text-center">
      <span class="eyebrow">
        <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
        Error {{ error?.statusCode || 404 }}
      </span>
      <h1 class="mt-5 text-4xl font-700 text-slate-900 sm:text-5xl">
        This page wandered off.
      </h1>
      <p class="mt-4 max-w-md text-slate-500">
        The page you're looking for doesn't exist or has moved. Let's get you
        back on track.
      </p>
      <NuxtLink to="/" class="btn-primary mt-8">
        Back to home
        <AppIcon name="arrow-right" class="h-4 w-4" />
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>
