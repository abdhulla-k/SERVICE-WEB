<script setup lang="ts">
// The platform mark: an ink tile with an amber play triangle — the same mark
// the player carries in its top bar.
withDefaults(defineProps<{ size?: number; onDark?: boolean }>(), {
  size: 30,
  onDark: false
})
</script>

<template>
  <!-- Sized with style rather than width/height props: Vue sets numeric props
       on the SVG element itself, which is read-only and warns on hydration. -->
  <svg
    :style="{ width: `${size}px`, height: `${size}px` }"
    viewBox="0 0 26 26"
    aria-hidden="true"
    class="shrink-0"
  >
    <rect width="26" height="26" rx="7" :fill="onDark ? '#f6f4ef' : '#1B1A17'" />
    <path d="M10 8.5v9l7.5-4.5z" fill="#E98B3A" />
  </svg>
</template>
