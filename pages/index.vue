<script setup lang="ts">
const { company, services } = useSiteData()

useSeoMeta({
  title: 'Niyabh Labs — AI Fine-Tuning, Agentic Apps & IT Services',
  description:
    'Niyabh Labs is an AI-first IT services company building custom LLM fine-tuning, agentic AI applications, and full-stack products for ambitious teams.'
})

const marquee = [
  'LLM Fine-Tuning',
  'Agentic AI',
  'MLOps',
  'RAG Pipelines',
  'Automation',
  'AI Strategy'
]

const stats = [
  { value: 20, suffix: '+', label: 'AI systems shipped' },
  { value: 8, suffix: '', label: 'Core service lines' },
  { value: 100, suffix: '%', label: 'Remote-first delivery' },
  { value: 1, prefix: '<', suffix: ' day', label: 'Avg. response time' }
]

const differentiators = [
  {
    icon: 'target',
    title: 'Outcome-obsessed',
    text: 'We measure success in business metrics, not model benchmarks. Every engagement ships something you can use.'
  },
  {
    icon: 'shield',
    title: 'Production-grade',
    text: 'Evals, guardrails, and monitoring from day one. Our AI systems are built to be trusted in production.'
  },
  {
    icon: 'bolt',
    title: 'Fast & pragmatic',
    text: 'Small senior team, no bloat. We move quickly and choose the simplest thing that works.'
  }
]

const steps = [
  {
    n: '01',
    title: 'Discover',
    text: 'We map your workflows and pinpoint the highest-ROI places where AI actually moves the needle.'
  },
  {
    n: '02',
    title: 'Design',
    text: 'Architecture, data strategy, and evals defined up front — so we build the right thing once.'
  },
  {
    n: '03',
    title: 'Build',
    text: 'Production-grade engineering with guardrails, observability, and a tight feedback loop.'
  },
  {
    n: '04',
    title: 'Ship & scale',
    text: 'We deploy, monitor, and keep improving — models, prompts, and infra evolve with your data.'
  }
]
</script>

<template>
  <div>
    <!-- ── Hero ─────────────────────────────────────────── -->
    <section class="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div class="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="absolute -right-16 top-32 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden="true"
      />

      <div class="container-px relative grid items-center gap-14 pb-16 lg:grid-cols-12 lg:pb-24">
        <div class="lg:col-span-7">
          <span class="reveal eyebrow">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
            AI &amp; IT Services · {{ company.location }}
          </span>

          <h1 class="mt-6 display-xl text-slate-900">
            <span class="block reveal rv-clip">We build</span>
            <span
              class="block reveal rv-clip bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent"
              style="transition-delay: 110ms"
            >
              intelligent software
            </span>
            <span class="block reveal rv-clip" style="transition-delay: 220ms">
              that ships.
            </span>
          </h1>

          <p
            class="reveal mt-7 max-w-xl text-lg leading-relaxed text-slate-500"
            style="transition-delay: 300ms"
          >
            {{ company.name }} is an AI-first engineering studio. From custom
            LLM fine-tuning to autonomous agents and full-stack products, we turn
            frontier AI into reliable systems your business can depend on.
          </p>

          <div
            class="reveal mt-9 flex flex-col gap-3 sm:flex-row"
            style="transition-delay: 380ms"
          >
            <NuxtLink to="/contact" class="btn-primary">
              Start a project
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/services" class="btn-ghost">Explore services</NuxtLink>
          </div>
        </div>

        <!-- Animated AI core -->
        <div class="reveal rv-scale relative w-full lg:col-span-5" style="transition-delay: 200ms">
          <HeroVisual />
        </div>
      </div>
    </section>

    <!-- ── Marquee band ─────────────────────────────────── -->
    <section class="border-y border-slate-200 bg-white py-4">
      <MarqueeBand :items="marquee" />
    </section>

    <!-- ── What we do (interactive rows) ────────────────── -->
    <section class="container-px py-20 sm:py-28">
      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-8">
          <span class="reveal eyebrow">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
            What we do
          </span>
          <h2 class="reveal rv-clip mt-5 display-lg text-slate-900" style="transition-delay: 60ms">
            AI services,<br />end to end.
          </h2>
        </div>
        <p class="reveal max-w-sm text-slate-500 lg:col-span-4" style="transition-delay: 120ms">
          A senior team that takes you from idea to a production AI system — and
          keeps it running. Hover a service to explore.
        </p>
      </div>

      <div class="mt-14 border-b border-slate-200">
        <div
          v-for="(service, i) in services"
          :key="service.slug"
          class="reveal"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <ServiceRow :service="service" :index="i" />
        </div>
      </div>
    </section>

    <!-- ── Dark: why us + stats ─────────────────────────── -->
    <section class="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div class="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        class="absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div class="container-px relative">
        <SectionHeading
          dark
          eyebrow="Why Niyabh Labs"
          title="Frontier AI, engineered responsibly"
        />

        <div class="mt-14 grid gap-5 md:grid-cols-3">
          <div
            v-for="(item, i) in differentiators"
            :key="item.title"
            class="reveal rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-brand-400/40 hover:bg-white/[0.07]"
            :style="{ transitionDelay: `${i * 90}ms` }"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white"
            >
              <AppIcon :name="item.icon" class="h-6 w-6" />
            </div>
            <h3 class="mt-6 text-xl font-700 text-white">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ item.text }}</p>
          </div>
        </div>

        <div
          class="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 lg:grid-cols-4"
        >
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="reveal"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <p class="display-md text-brand-300">
              <CountUp
                :value="stat.value"
                :prefix="stat.prefix || ''"
                :suffix="stat.suffix"
              />
            </p>
            <p class="mt-2 text-sm text-slate-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Process ──────────────────────────────────────── -->
    <section class="container-px py-20 sm:py-28">
      <div class="max-w-3xl">
        <span class="reveal eyebrow">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          How we work
        </span>
        <h2 class="reveal rv-clip mt-5 display-lg text-slate-900" style="transition-delay: 60ms">
          A clear path from<br />idea to impact.
        </h2>
        <p class="reveal mt-5 text-lg text-slate-500" style="transition-delay: 120ms">
          No black boxes. You get visibility, evals, and working software at every
          stage.
        </p>
      </div>

      <div class="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, i) in steps"
          :key="step.n"
          class="reveal group bg-white p-8 transition-colors hover:bg-brand-50"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <span class="font-display text-5xl font-700 text-brand-200 transition-colors group-hover:text-brand-500">
            {{ step.n }}
          </span>
          <h3 class="mt-6 text-xl font-700 text-slate-900">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-500">{{ step.text }}</p>
        </div>
      </div>
    </section>

    <!-- ── CTA ──────────────────────────────────────────── -->
    <CtaSection />
  </div>
</template>
