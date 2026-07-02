<script setup lang="ts">
const route = useRoute()
const { services, company } = useSiteData()

const index = computed(() => services.findIndex((s) => s.slug === route.params.slug))
const service = computed(() => services[index.value])

// Unknown slug → proper 404 (also keeps prerender output clean).
if (index.value === -1) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found', fatal: true })
}

const others = computed(() => services.filter((s) => s.slug !== route.params.slug).slice(0, 4))

useSeoMeta({
  title: () => `${service.value.title} — Niyabh Labs`,
  description: () => service.value.summary
})
</script>

<template>
  <div v-if="service">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-slate-100 pt-32 sm:pt-40">
      <div class="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        class="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div class="container-px relative pb-16 sm:pb-20">
        <NuxtLink
          to="/services"
          class="reveal inline-flex items-center gap-2 text-sm font-600 text-slate-500 transition hover:text-brand-600"
        >
          <AppIcon name="arrow-right" class="h-4 w-4 rotate-180" />
          All services
        </NuxtLink>

        <div class="mt-6 flex items-center gap-4">
          <span
            class="reveal rv-scale flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow"
          >
            <AppIcon :name="service.icon" class="h-7 w-7" />
          </span>
          <span class="reveal text-sm font-600 text-brand-600" style="transition-delay: 60ms">
            {{ String(index + 1).padStart(2, '0') }} · {{ service.tagline }}
          </span>
        </div>

        <h1 class="reveal rv-clip mt-6 display-xl text-slate-900" style="transition-delay: 80ms">
          {{ service.title }}
        </h1>
        <p class="reveal mt-6 max-w-3xl text-lg leading-relaxed text-slate-500" style="transition-delay: 160ms">
          {{ service.summary }}
        </p>
        <div class="reveal mt-9 flex flex-col gap-3 sm:flex-row" style="transition-delay: 220ms">
          <NuxtLink to="/contact" class="btn-primary">
            Start a project
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
          <a :href="`mailto:${company.email}`" class="btn-ghost">
            <AppIcon name="mail" class="h-4 w-4" />
            Talk to us
          </a>
        </div>
      </div>
    </section>

    <!-- What's included + outcomes -->
    <section class="container-px py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <h2 class="reveal rv-clip display-md text-slate-900">What's included</h2>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li
              v-for="(feature, i) in service.features"
              :key="feature"
              class="reveal flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-card"
              :style="{ transitionDelay: `${i * 50}ms` }"
            >
              <AppIcon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span class="text-sm text-slate-700">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-5">
          <h2 class="reveal rv-clip display-md text-slate-900">Outcomes</h2>
          <ul class="mt-8 space-y-4">
            <li
              v-for="(outcome, i) in service.outcomes"
              :key="outcome"
              class="reveal rv-left flex items-start gap-3"
              :style="{ transitionDelay: `${i * 60}ms` }"
            >
              <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <AppIcon name="check" class="h-3.5 w-3.5" />
              </span>
              <span class="text-slate-600">{{ outcome }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Process (dark) -->
    <section class="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div class="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div class="container-px relative">
        <SectionHeading dark eyebrow="How we work" :title="`Our ${service.title.toLowerCase()} process`" />
        <div class="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(step, i) in service.process"
            :key="step.title"
            class="reveal bg-brand-950 p-8"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <span class="font-display text-4xl font-700 text-brand-500/40">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="mt-5 text-lg font-700 text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deliverables + use cases -->
    <section class="container-px py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 class="reveal rv-clip display-md text-slate-900">What you get</h2>
          <ul class="mt-8 space-y-3">
            <li
              v-for="(d, i) in service.deliverables"
              :key="d"
              class="reveal flex items-start gap-3 border-b border-slate-100 pb-3 text-slate-600"
              :style="{ transitionDelay: `${i * 50}ms` }"
            >
              <AppIcon name="arrow-right" class="mt-1 h-4 w-4 shrink-0 text-brand-500" />
              {{ d }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="reveal rv-clip display-md text-slate-900">Great for</h2>
          <div class="mt-8 flex flex-wrap gap-3">
            <span
              v-for="(u, i) in service.useCases"
              :key="u"
              class="reveal rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-500 text-brand-800"
              :style="{ transitionDelay: `${i * 50}ms` }"
            >
              {{ u }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Other services -->
    <section class="container-px pb-8">
      <div class="max-w-3xl">
        <span class="reveal eyebrow">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Keep exploring
        </span>
        <h2 class="reveal rv-clip mt-5 display-md text-slate-900" style="transition-delay: 60ms">
          Other services
        </h2>
      </div>
      <div class="mt-10 border-b border-slate-200">
        <div
          v-for="(other, i) in others"
          :key="other.slug"
          class="reveal"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <ServiceRow :service="other" :index="services.findIndex((s) => s.slug === other.slug)" />
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
