<script setup lang="ts">
// Same infinite-marquee mechanics as the rest of the site (.marquee lives in
// tailwind.css), dressed in the platform palette and type.
defineProps<{ items: string[] }>()
</script>

<template>
  <div class="marquee py-1.5">
    <div class="marquee__track">
      <template v-for="n in 2" :key="n">
        <span v-for="(item, i) in items" :key="`${n}-${i}`" class="flex items-center">
          <span
            class="px-6 font-nl-display text-[26px] font-bold tracking-tight text-nl-ink sm:text-[34px] md:text-[40px]"
          >
            {{ item }}
          </span>
          <span class="text-[22px] text-nl-amber sm:text-[28px]" aria-hidden="true">
            &#10022;
          </span>
        </span>
      </template>
    </div>
  </div>
</template>
