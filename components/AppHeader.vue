<script setup lang="ts">
const { company, nav } = useSiteData()
const open = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    open.value = false
  }
)
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50">
    <div class="container-px pt-4 sm:pt-5">
      <div
        class="pointer-events-auto mx-auto flex items-center justify-between gap-4 rounded-full border border-slate-200/70 bg-white/80 px-3 py-2.5 shadow-card backdrop-blur-xl sm:px-4"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2.5 pl-1.5"
          aria-label="Niyabh Labs home"
        >
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-glow"
          >
            <AppIcon name="bolt" class="h-4.5 w-4.5" />
          </span>
          <span class="font-display text-base font-700 tracking-tight text-slate-900">
            {{ company.name }}
          </span>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-0.5 md:flex">
          <NuxtLink
            v-for="link in nav"
            :key="link.to"
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-700"
            active-class="bg-slate-100 text-brand-700"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="hidden md:block">
          <NuxtLink to="/contact" class="btn-primary !px-5 !py-2.5">
            Start a project
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>

        <!-- Mobile toggle -->
        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 md:hidden"
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
          class="pointer-events-auto mx-auto mt-3 rounded-3xl border border-slate-200/70 bg-white/95 p-3 shadow-card backdrop-blur-xl md:hidden"
        >
          <div class="flex flex-col gap-1">
            <NuxtLink
              v-for="link in nav"
              :key="link.to"
              :to="link.to"
              class="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              active-class="bg-brand-50 text-brand-700"
            >
              {{ link.label }}
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-primary mt-1 w-full">
              Start a project
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
