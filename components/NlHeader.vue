<script setup lang="ts">
const { product, nav } = useProductData()
const open = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-colors duration-300"
    :class="
      scrolled
        ? 'border-nl-line bg-nl-surface/90 backdrop-blur-xl'
        : 'border-transparent bg-nl-paper'
    "
  >
    <div class="nl-wrap flex h-[62px] items-center justify-between gap-6">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="Niyabh Labs home">
        <NlLogo :size="28" />
        <span class="font-nl-display text-[19px] font-bold tracking-tight text-nl-ink">
          {{ product.name }}
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 lg:flex">
        <a
          v-for="link in nav"
          :key="link.to"
          :href="link.to"
          class="rounded-lg px-3 py-2 text-[14.5px] font-medium text-nl-muted transition hover:bg-nl-ink/[0.05] hover:text-nl-ink"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <span class="nl-chip nl-mono !text-[11.5px] !tracking-wider">
          <span class="nl-chip__dot" />
          Proof of concept
        </span>
        <a :href="`mailto:${product.email}`" class="nl-btn nl-btn--ink nl-btn--sm">
          Get a walkthrough
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-nl-ink transition hover:bg-nl-ink/[0.06] lg:hidden"
        :aria-expanded="open"
        aria-label="Toggle navigation menu"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="open"
        class="border-t border-nl-line bg-nl-surface lg:hidden"
        @click="open = false"
      >
        <div class="nl-wrap flex flex-col gap-1 py-4">
          <a
            v-for="link in nav"
            :key="link.to"
            :href="link.to"
            class="rounded-lg px-3 py-3 text-base font-medium text-nl-ink transition hover:bg-nl-ink/[0.05]"
          >
            {{ link.label }}
          </a>
          <a
            :href="`mailto:${product.email}`"
            class="nl-btn nl-btn--ink mt-2 w-full"
          >
            Get a walkthrough
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
