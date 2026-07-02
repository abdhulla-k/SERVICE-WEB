<script setup lang="ts">
const { services } = useSiteData()

useSeoMeta({
  title: 'Services — Niyabh Labs',
  description:
    'Explore Niyabh Labs services: LLM fine-tuning, agentic app development, AI product engineering, MLOps & cloud, intelligent automation, and AI strategy consulting.'
})

const industries = [
  { icon: 'chart', label: 'Fintech' },
  { icon: 'heart', label: 'Healthcare' },
  { icon: 'chat', label: 'Customer support' },
  { icon: 'database', label: 'Data & SaaS' },
  { icon: 'users', label: 'HR & recruiting' },
  { icon: 'layers', label: 'Logistics' }
]

const engagements = [
  {
    icon: 'target',
    title: 'Fixed-scope project',
    text: 'A defined deliverable with a clear timeline and price. Best for MVPs, prototypes, and well-understood builds.'
  },
  {
    icon: 'users',
    title: 'Dedicated team',
    text: 'An embedded senior AI/engineering pod working alongside yours, month to month, with full transparency.'
  },
  {
    icon: 'compass',
    title: 'Advisory & fractional',
    text: 'Ongoing architecture, strategy, and code review to keep your in-house team moving in the right direction.'
  }
]
</script>

<template>
  <div>
    <!-- Header -->
    <section class="relative overflow-hidden border-b border-slate-100 pt-32 sm:pt-40">
      <div class="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        class="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div class="container-px relative pb-16 sm:pb-20">
        <span class="reveal eyebrow">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Services
        </span>
        <h1 class="reveal rv-clip mt-6 display-xl text-slate-900" style="transition-delay: 60ms">
          Everything you<br />need to ship AI.
        </h1>
        <p class="reveal mt-6 max-w-2xl text-lg leading-relaxed text-slate-500" style="transition-delay: 140ms">
          Eight focused service lines that cover the full lifecycle — from
          strategy and data, to models, apps, automation, and the cloud
          infrastructure underneath.
        </p>
      </div>
    </section>

    <!-- Detailed service cards -->
    <section class="container-px py-20 sm:py-28">
      <div class="grid gap-6 lg:grid-cols-2">
        <div
          v-for="(service, i) in services"
          :key="service.slug"
          class="reveal"
          :style="{ transitionDelay: `${(i % 2) * 90}ms` }"
        >
          <ServiceCard :service="service" detailed />
        </div>
      </div>
    </section>

    <!-- Industries (dark band) -->
    <section class="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div class="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div class="container-px relative">
        <SectionHeading dark center eyebrow="Industries" title="Domains we've delivered in" />
        <div class="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div
            v-for="(ind, i) in industries"
            :key="ind.label"
            class="reveal flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-brand-400/40 hover:bg-white/[0.08]"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300"
            >
              <AppIcon :name="ind.icon" class="h-5 w-5" />
            </span>
            <span class="text-sm font-600 text-slate-200">{{ ind.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement models -->
    <section class="container-px py-20 sm:py-28">
      <SectionHeading
        center
        eyebrow="Engagement models"
        title="Work with us the way that fits"
        subtitle="Whether you need a one-off build or an ongoing partner, we shape the engagement around your goals."
      />
      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div
          v-for="(e, i) in engagements"
          :key="e.title"
          class="reveal card hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
            <AppIcon :name="e.icon" class="h-6 w-6" />
          </div>
          <h3 class="mt-6 text-xl font-700 text-slate-900">{{ e.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-500">{{ e.text }}</p>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
