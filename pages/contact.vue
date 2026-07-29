<script setup lang="ts">
const { company, social } = useSiteData()

useSeoMeta({
  title: 'Contact — Niyabh Labs',
  description:
    'Get in touch with Niyabh Labs. Tell us about your AI project and we will get back to you within one business day.'
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: ''
})

const submitted = ref(false)

const serviceOptions = [
  'LLM Fine-Tuning',
  'Agentic App Development',
  'AI Product Engineering',
  'MLOps & Cloud',
  'Intelligent Automation',
  'AI Strategy & Consulting',
  'Not sure yet'
]

const budgetOptions = ['Under $5k', '$5k – $20k', '$20k – $50k', '$50k+', "Let's discuss"]

/**
 * Static site (GitHub Pages) with no backend: opens the visitor's email client
 * pre-filled. Swap for a Formspree/Getform endpoint to auto-collect (see README).
 */
function handleSubmit() {
  const subject = encodeURIComponent(`New enquiry from ${form.name || 'website visitor'}`)
  const body = encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      '',
      'Message:',
      form.message
    ].join('\n')
  )
  submitted.value = true
  window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
}

const contactCards = [
  { icon: 'mail', label: 'Email us', value: company.email, href: `mailto:${company.email}` },
  { icon: 'map-pin', label: 'Location', value: company.location, href: null },
  { icon: 'chat', label: 'Response time', value: 'Within 1 business day', href: null }
]

const faqs = [
  {
    q: 'How do engagements usually start?',
    a: 'With a short discovery call. We learn your goals, then send a written proposal with scope, timeline, and pricing — typically within a couple of days.'
  },
  {
    q: 'Do you work with early-stage teams?',
    a: 'Absolutely. We tailor scope and budget to your stage, from quick prototypes to production systems.'
  },
  {
    q: 'Which models and clouds do you use?',
    a: 'We are model- and cloud-agnostic — open-weight or frontier models on AWS, GCP, or Azure. We recommend what best fits your accuracy, latency, and cost needs.'
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Yes. We frequently embed with in-house engineers, share our workflows, and hand off cleanly documented systems.'
  }
]
</script>

<template>
  <div>
    <!-- Header -->
    <section class="relative overflow-hidden border-b border-slate-100 pt-32 sm:pt-40">
      <div class="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        class="absolute -right-16 -top-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div class="container-px relative pb-16 sm:pb-20">
        <span class="reveal eyebrow">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Contact
        </span>
        <h1 class="reveal rv-clip mt-6 display-xl text-slate-900" style="transition-delay: 60ms">
          Let's talk about<br />your project.
        </h1>
        <p class="reveal mt-6 max-w-xl text-lg leading-relaxed text-slate-500" style="transition-delay: 140ms">
          Tell us what you're building. We'll reply within one business day with
          next steps.
        </p>
      </div>
    </section>

    <section class="container-px py-20 sm:py-24">
      <div class="grid gap-10 lg:grid-cols-5">
        <!-- Info column -->
        <div class="lg:col-span-2">
          <div class="space-y-4">
            <a
              v-for="(card, i) in contactCards"
              :key="card.label"
              :href="card.href || undefined"
              class="reveal rv-left flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition"
              :class="card.href ? 'hover:border-brand-200' : 'cursor-default'"
              :style="{ transitionDelay: `${i * 80}ms` }"
            >
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <AppIcon :name="card.icon" class="h-5 w-5" />
              </span>
              <div>
                <p class="text-sm font-600 text-slate-900">{{ card.label }}</p>
                <p class="mt-0.5 text-sm text-slate-500">{{ card.value }}</p>
              </div>
            </a>
          </div>

          <!--
          <div class="reveal mt-8" style="transition-delay: 240ms">
            <p class="text-sm font-600 text-slate-900">Follow along</p>
            <div class="mt-3 flex gap-2">
              <a
                v-for="s in social"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.label"
                class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-brand-300 hover:text-brand-600"
              >
                <AppIcon :name="s.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>
          -->
        </div>

        <!-- Form column -->
        <div class="lg:col-span-3">
          <form
            class="reveal rv-right rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8"
            @submit.prevent="handleSubmit"
          >
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="mb-1.5 block text-sm font-600 text-slate-700">Name *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Your full name"
                  class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label for="email" class="mb-1.5 block text-sm font-600 text-slate-700">Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label for="company" class="mb-1.5 block text-sm font-600 text-slate-700">Company</label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  placeholder="Company name"
                  class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label for="budget" class="mb-1.5 block text-sm font-600 text-slate-700">Budget</label>
                <select
                  id="budget"
                  v-model="form.budget"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="" disabled>Select a range</option>
                  <option v-for="b in budgetOptions" :key="b" :value="b">{{ b }}</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label for="service" class="mb-1.5 block text-sm font-600 text-slate-700">Service of interest</label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="" disabled>Select a service</option>
                  <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="mb-1.5 block text-sm font-600 text-slate-700">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Tell us about your project, goals, and timeline…"
                  class="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>
            </div>

            <button type="submit" class="btn-primary mt-6 w-full sm:w-auto">
              Send message
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </button>

            <p
              v-if="submitted"
              class="mt-4 flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800"
            >
              <AppIcon name="check" class="h-4 w-4" />
              Thanks! Your email client should open — just hit send and we'll be in touch.
            </p>
            <p class="mt-4 text-xs text-slate-400">
              Prefer email? Reach us directly at
              <a :href="`mailto:${company.email}`" class="text-brand-600 hover:underline">{{ company.email }}</a>.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div class="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div class="container-px relative">
        <SectionHeading dark center eyebrow="FAQ" title="Questions, answered" />
        <div class="mx-auto mt-12 max-w-3xl space-y-3">
          <details
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="reveal group rounded-2xl border border-white/10 bg-white/5 p-5"
            :style="{ transitionDelay: `${i * 70}ms` }"
          >
            <summary
              class="flex cursor-pointer items-center justify-between text-base font-600 text-white marker:content-none"
            >
              {{ faq.q }}
              <AppIcon
                name="arrow-right"
                class="h-5 w-5 shrink-0 text-brand-400 transition group-open:rotate-90"
              />
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>
