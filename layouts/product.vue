<template>
  <div class="nl flex min-h-screen flex-col">
    <NlHeader />
    <main class="flex-1">
      <slot />
    </main>
    <NlFooter />
  </div>
</template>
