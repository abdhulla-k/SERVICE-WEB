<script setup lang="ts">
/**
 * Lightweight, dependency-free icon component.
 * All icons use a 24x24 viewBox and stroke the current text color.
 */
const props = defineProps<{ name: string }>()

// Each entry is the inner markup of a 24x24, stroke-based icon.
const icons: Record<string, string> = {
  tune: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  robot:
    '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M8 2h8"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="14" r="1.2"/><path d="M2 13v3M22 13v3"/>',
  sparkles:
    '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5 10.1 7.6 12 3z"/><path d="M19 14l.8 2 2 .8-2 .8L19 20l-.8-2-2-.8 2-.8.8-2z"/>',
  cloud:
    '<path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.3A3.5 3.5 0 0117.5 18H7z"/>',
  workflow:
    '<rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h6a3 3 0 013 3v3"/>',
  compass:
    '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>',
  chart:
    '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 3 4-6"/>',
  shield:
    '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  rocket:
    '<path d="M5 15c-1 2-1 4-1 4s2 0 4-1M14 4c3 0 6 3 6 6 0 5-6 9-6 9l-4-4s4-6 9-6"/><circle cx="15" cy="9" r="1.4"/>',
  chat:
    '<path d="M21 15a3 3 0 01-3 3H8l-4 3V6a3 3 0 013-3h11a3 3 0 013 3v9z"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone:
    '<path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  'map-pin':
    '<path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  users:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0112 0M16 5.5a3 3 0 010 6M18 20a6 6 0 00-3-5.2"/>',
  layers:
    '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17l9 5 9-5"/>',
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  heart:
    '<path d="M12 20s-7-4.5-9.5-9A5 5 0 0112 6a5 5 0 019.5 5c-2.5 4.5-9.5 9-9.5 9z"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7"/>',
  github:
    '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 00-.8-2.3c2.6-.3 5.3-1.3 5.3-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6.3 2.6 5.3 2.9 5.3 2.9a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 003.9 9.3c0 4.6 2.7 5.7 5.3 6a3 3 0 00-.8 2.2V21"/>',
  twitter:
    '<path d="M4 4l7 9M4 20l7-8M20 4l-7 8M13 12l7 8"/>'
}

const inner = computed(() => icons[props.name] || icons.sparkles)
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="inner"
  />
</template>
