<script setup lang="ts">
const { company } = useSiteData()

useSeoMeta({
  title: 'About — Niyabh Labs',
  description:
    'Niyabh Labs is a remote-first AI engineering studio helping teams design, build, and ship production-grade AI systems.'
})

const values = [
  {
    icon: 'target',
    title: 'Outcomes over hype',
    text: 'We care about the metric that matters to your business — not the demo. Every project is anchored to a real result.'
  },
  {
    icon: 'shield',
    title: 'Trust by design',
    text: 'Guardrails, evals, and transparency are non-negotiable. We build AI you can actually put in front of users.'
  },
  {
    icon: 'bolt',
    title: 'Bias for action',
    text: 'Small senior team, short feedback loops. We prototype fast, learn faster, and cut what does not work.'
  },
  {
    icon: 'heart',
    title: 'Craft & care',
    text: 'From data pipelines to pixels, we sweat the details. Quality is the cheapest thing to get right early.'
  }
]

const timeline = [
  {
    year: '2024',
    title: 'Founded',
    text: 'Niyabh Labs starts with a simple thesis: most teams need help turning AI potential into shipped, reliable products.'
  },
  {
    year: '2025',
    title: 'AI product practice',
    text: 'Expanded into end-to-end product engineering — fine-tuning, agents, and full-stack delivery under one roof.'
  },
  {
    year: '2026',
    title: 'Scaling delivery',
    text: 'Growing our senior pod and MLOps capability to ship and operate AI systems at production scale.'
  }
]

const facts = [
  { value: company.founded, label: 'Founded' },
  { value: 'Remote', label: 'First, by design' },
  { value: '8', label: 'Service lines' },
  { value: 'AI', label: 'At the core' }
]
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="relative overflow-hidden border-b border-slate-100 pt-32 sm:pt-40">
      <div class="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        class="absolute -left-16 top-0 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div class="container-px relative grid items-end gap-12 pb-16 sm:pb-20 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <span class="reveal eyebrow">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
            About us
          </span>
          <h1 class="reveal rv-clip mt-6 display-xl text-slate-900" style="transition-delay: 60ms">
            An AI-first<br />engineering studio.
          </h1>
          <p class="reveal mt-6 max-w-xl text-lg leading-relaxed text-slate-500" style="transition-delay: 140ms">
            We're a remote-first team of engineers, ML practitioners, and product
            builders who love shipping intelligent software that holds up in the
            real world.
          </p>
          <div class="reveal mt-8 flex flex-col gap-3 sm:flex-row" style="transition-delay: 220ms">
            <NuxtLink to="/contact" class="btn-primary">
              Work with us
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/services" class="btn-ghost">Our services</NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 lg:col-span-5">
          <div
            v-for="(f, i) in facts"
            :key="f.label"
            class="reveal card"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <p class="text-3xl font-700 text-brand-700">{{ f.value }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ f.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission / Vision -->
    <section class="container-px py-20 sm:py-28">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="reveal card border-brand-100 bg-brand-50/60">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
            <AppIcon name="target" class="h-6 w-6" />
          </div>
          <h3 class="mt-6 text-2xl font-700 text-slate-900">Our mission</h3>
          <p class="mt-3 leading-relaxed text-slate-600">
            To make advanced AI genuinely useful for everyday businesses — by
            building systems that are accurate, trustworthy, and maintainable long
            after launch.
          </p>
        </div>
        <div class="reveal card" style="transition-delay: 100ms">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
            <AppIcon name="eye" class="h-6 w-6" />
          </div>
          <h3 class="mt-6 text-2xl font-700 text-slate-900">Our vision</h3>
          <p class="mt-3 leading-relaxed text-slate-600">
            A world where every capable team can adopt AI with confidence — with a
            partner who handles the hard engineering so they can focus on their
            customers.
          </p>
        </div>
      </div>
    </section>

    <!-- Values (dark) -->
    <section class="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div class="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div class="container-px relative">
        <SectionHeading dark eyebrow="Our values" title="What we stand for" />
        <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            class="reveal rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-brand-400/40 hover:bg-white/[0.08]"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <AppIcon :name="value.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-5 text-lg font-700 text-white">{{ value.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="container-px py-20 sm:py-28">
      <SectionHeading center eyebrow="Our story" title="How we got here" />
      <div class="mx-auto mt-14 max-w-3xl">
        <div
          v-for="(item, i) in timeline"
          :key="item.year"
          class="reveal relative flex gap-6 pb-10 last:pb-0"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <div class="flex flex-col items-center">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-700 text-white"
            >
              {{ item.year.slice(2) }}
            </span>
            <span
              v-if="i < timeline.length - 1"
              class="mt-1 w-px flex-1 bg-brand-200"
              aria-hidden="true"
            />
          </div>
          <div class="pt-2">
            <p class="text-sm font-600 text-brand-600">{{ item.year }}</p>
            <h3 class="mt-1 text-xl font-700 text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 leading-relaxed text-slate-500">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
