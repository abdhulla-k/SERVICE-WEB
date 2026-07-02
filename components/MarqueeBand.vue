<script setup lang="ts">
// Infinite horizontal marquee. The track is duplicated so translateX(-50%)
// loops seamlessly. Pauses on hover.
withDefaults(
  defineProps<{
    items: string[]
    reverse?: boolean
    dark?: boolean
  }>(),
  { reverse: false, dark: false }
)
</script>

<template>
  <div class="marquee py-2" :class="reverse ? 'marquee--rev' : ''">
    <div class="marquee__track">
      <template v-for="n in 2" :key="n">
        <span
          v-for="(item, i) in items"
          :key="`${n}-${i}`"
          class="flex items-center"
        >
          <span
            class="px-6 font-display text-2xl font-700 tracking-tight sm:text-3xl md:text-4xl"
            :class="dark ? 'text-white' : 'text-slate-900'"
          >
            {{ item }}
          </span>
          <span
            class="text-2xl sm:text-3xl md:text-4xl"
            :class="dark ? 'text-brand-400' : 'text-brand-500'"
            aria-hidden="true"
          >
            &#10022;
          </span>
        </span>
      </template>
    </div>
  </div>
</template>
