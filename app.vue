<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- No-JS fallback: if the reveal engine never runs, show everything. -->
<style>
.no-js .reveal {
  opacity: 1;
}
.no-js .reveal.rv-clip {
  -webkit-mask-image: none;
  mask-image: none;
}
</style>
