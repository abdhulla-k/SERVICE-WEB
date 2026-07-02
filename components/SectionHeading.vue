<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  dark?: boolean
}>()
</script>

<template>
  <div :class="['max-w-3xl', center ? 'mx-auto text-center' : '']">
    <span v-if="eyebrow" class="reveal" :class="dark ? 'eyebrow-dark' : 'eyebrow'">
      <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {{ eyebrow }}
    </span>
    <h2
      class="reveal rv-clip mt-5 display-md"
      :class="dark ? '!text-white' : ''"
      style="transition-delay: 60ms"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="reveal mt-5 text-lg leading-relaxed"
      :class="dark ? 'text-slate-300' : 'text-slate-500'"
      style="transition-delay: 120ms"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
