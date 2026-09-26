<script setup lang="ts">
const {
  product,
  marquee,
  problems,
  askSteps,
  askDetails,
  askMetrics,
  pipeline,
  streamFrames,
  engineFeatures,
  plugins,
  diagramTemplates,
  contentModel,
  questionTypes,
  surfaces,
  stats,
  faqs
} = useProductData()

definePageMeta({ layout: 'product' })

useSeoMeta({
  title: 'Niyabh Labs — pause the lesson, ask anything, watch the answer',
  description:
    'Niyabh Labs is an AI-native learning platform. Lessons are generated and rendered at runtime, so a learner can pause mid-lesson, ask a question by voice or text, and get the answer back as a new video — then carry on from the exact moment they stopped.'
})

useHead({
  meta: [
    { name: 'theme-color', content: '#f6f4ef' },
    { property: 'og:title', content: 'Niyabh Labs — lessons that answer back' },
    {
      property: 'og:description',
      content:
        'An AI-native learning platform where every lesson is generated, and every question gets its own video answer.'
    }
  ]
})
</script>

<template>
  <div>
    <!-- ── Hero ───────────────────────────────────────────────────────── -->
    <section class="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <div class="nl-dots absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        class="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-nl-amber/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="absolute -right-24 top-40 h-96 w-96 rounded-full bg-nl-blue/15 blur-3xl"
        aria-hidden="true"
      />

      <div class="nl-wrap relative">
        <div class="mx-auto max-w-3xl text-center">
          <span class="reveal nl-eyebrow text-nl-amber-dark">AI-native learning platform</span>

          <h1 class="nl-display nl-d1 mt-6 text-nl-ink">
            <span class="block reveal rv-clip">Pause the lesson.</span>
            <span class="block reveal rv-clip" style="transition-delay: 110ms">
              Ask anything.
            </span>
            <span
              class="block reveal rv-clip text-nl-amber-dark"
              style="transition-delay: 220ms"
            >
              Watch the answer.
            </span>
          </h1>

          <p class="reveal nl-lead mt-7" style="transition-delay: 300ms">
            {{ product.name }} lessons are not recorded — they are written by agents and
            rendered in the browser as they play. So when a learner stops mid-lesson and
            asks a question, the answer comes back as a <em>new video</em> in the same
            player, in the same visual language, and the lesson carries on from the exact
            moment it stopped.
          </p>

          <div
            class="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style="transition-delay: 380ms"
          >
            <a href="#ask" class="nl-btn nl-btn--amber">
              See how it works
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </a>
            <a href="#surfaces" class="nl-btn nl-btn--ghost">For creators</a>
          </div>

          <p class="reveal nl-mono mt-6 text-[12.5px] text-nl-faint" style="transition-delay: 440ms">
            First sound of an answer in ~5 seconds · whole answer in ~12
          </p>
        </div>

        <!-- The player, walking through the flow -->
        <div
          class="reveal rv-scale mx-auto mt-12 max-w-[980px] sm:mt-16"
          style="transition-delay: 200ms"
        >
          <NlPlayerMock />
        </div>
      </div>
    </section>

    <!-- ── Marquee ────────────────────────────────────────────────────── -->
    <section class="mt-16 border-y border-nl-line bg-nl-surface py-4 sm:mt-24">
      <NlMarquee :items="marquee" />
    </section>

    <!-- ── Why ────────────────────────────────────────────────────────── -->
    <section class="nl-wrap py-20 sm:py-28">
      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-7">
          <span class="reveal nl-eyebrow text-nl-amber-dark">Why we built it</span>
          <h2 class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink" style="transition-delay: 60ms">
            Learning stalls at the<br />question nobody answers.
          </h2>
        </div>
        <p class="reveal nl-lead lg:col-span-5" style="transition-delay: 120ms">
          Static content has one job — deliver the same thing to everyone. Learning needs
          the opposite: content that reacts to the person in front of it.
        </p>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-3">
        <div
          v-for="(item, i) in problems"
          :key="item.title"
          class="reveal nl-card nl-card--hover p-7"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <span
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-nl-amber-soft text-nl-amber-dark"
          >
            <AppIcon :name="item.icon" class="h-5 w-5" />
          </span>
          <h3 class="nl-display mt-6 text-[20px] text-nl-ink">{{ item.title }}</h3>
          <p class="mt-3 text-[14.5px] leading-relaxed text-nl-muted">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- ── Ask the lesson ─────────────────────────────────────────────── -->
    <section id="ask" class="scroll-mt-20 border-y border-nl-line bg-nl-surface py-20 sm:py-28">
      <div class="nl-wrap">
        <div class="max-w-3xl">
          <span class="reveal nl-eyebrow text-nl-blue-deep">The flagship feature</span>
          <h2 class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink" style="transition-delay: 60ms">
            Ask the lesson.
          </h2>
          <p class="reveal nl-lead mt-5" style="transition-delay: 120ms">
            Not a chat window bolted onto a video. The learner asks in the player, about
            the exact moment they are looking at, and the platform replies in the only
            format the lesson speaks: a narrated, animated video — generated on the spot.
          </p>
        </div>

        <div class="mt-14 grid gap-px overflow-hidden rounded-2xl border border-nl-line bg-nl-line sm:grid-cols-2">
          <div
            v-for="(step, i) in askSteps"
            :key="step.n"
            class="reveal group bg-nl-paper p-7 transition-colors hover:bg-white sm:p-9"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <span
              class="nl-mono text-[13px] tracking-widest"
              :class="step.accent === 'blue' ? 'text-nl-blue-deep' : 'text-nl-amber-dark'"
            >
              {{ step.n }}
            </span>
            <h3 class="nl-display mt-4 text-[22px] text-nl-ink">{{ step.title }}</h3>
            <p class="mt-3 text-[14.5px] leading-relaxed text-nl-muted">{{ step.text }}</p>
          </div>
        </div>

        <!-- measured timings -->
        <div class="mt-10 grid gap-5 sm:grid-cols-3">
          <div
            v-for="(m, i) in askMetrics"
            :key="m.label"
            class="reveal rounded-2xl border border-nl-line bg-nl-paper px-6 py-7 text-center"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <p class="nl-display text-[38px] leading-none text-nl-blue-deep">{{ m.value }}</p>
            <p class="mt-3 text-[13.5px] text-nl-muted">{{ m.label }}</p>
          </div>
        </div>
        <p class="reveal nl-mono mt-4 text-center text-[12px] text-nl-faint">
          Measured on the interactive-lesson proof of concept
        </p>

        <!-- the details that make it usable -->
        <div class="mt-14 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          <div
            v-for="(detail, i) in askDetails"
            :key="detail"
            class="reveal flex items-start gap-3 border-t border-nl-line pt-4"
            :style="{ transitionDelay: `${i * 50}ms` }"
          >
            <AppIcon name="check" class="mt-[3px] h-4 w-4 shrink-0 text-nl-amber-dark" />
            <span class="text-[14.5px] leading-relaxed text-nl-muted">{{ detail }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── How an answer is made ──────────────────────────────────────── -->
    <section id="pipeline" class="nl-wrap scroll-mt-20 py-20 sm:py-28">
      <div class="grid gap-14 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <span class="reveal nl-eyebrow text-nl-amber-dark">Under the hood</span>
          <h2 class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink" style="transition-delay: 60ms">
            How an answer<br />gets made.
          </h2>
          <p class="reveal nl-lead mt-5" style="transition-delay: 120ms">
            Five stages, all of them streaming. Nothing waits for the stage after it to
            finish before the learner sees something happen.
          </p>

          <ol class="mt-12 space-y-8">
            <li
              v-for="(step, i) in pipeline"
              :key="step.n"
              class="reveal relative flex gap-5 pl-1"
              :style="{ transitionDelay: `${i * 70}ms` }"
            >
              <span
                class="nl-mono flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-nl-line bg-nl-surface text-[12.5px] text-nl-amber-dark"
              >
                {{ step.n }}
              </span>
              <div class="border-b border-nl-line pb-7">
                <h3 class="nl-display text-[21px] text-nl-ink">{{ step.title }}</h3>
                <p class="mt-2.5 text-[14.5px] leading-relaxed text-nl-muted">
                  {{ step.text }}
                </p>
              </div>
            </li>
          </ol>
        </div>

        <!-- the wire, as it actually streams -->
        <div class="lg:col-span-5">
          <div class="reveal rv-right lg:sticky lg:top-24">
            <div class="nl-card--dark overflow-hidden p-6 sm:p-7">
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-nl-amber" />
                <span class="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span class="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span class="nl-mono ml-2 text-[11.5px] uppercase tracking-widest text-white/40">
                  one answer, on the wire
                </span>
              </div>

              <ul class="nl-mono mt-7 space-y-5 text-[12.5px] leading-relaxed">
                <li v-for="frame in streamFrames" :key="frame.label" class="flex gap-3">
                  <span
                    class="w-4 shrink-0"
                    :class="frame.dir === 'out' ? 'text-nl-amber' : 'text-nl-blue-soft'"
                    aria-hidden="true"
                  >
                    {{ frame.dir === 'out' ? '▸' : '◂' }}
                  </span>
                  <span class="min-w-0">
                    <span
                      class="block font-medium"
                      :class="frame.dir === 'out' ? 'text-nl-amber' : 'text-nl-blue-soft'"
                    >
                      {{ frame.label }}
                    </span>
                    <span class="mt-1 block text-white/50">{{ frame.note }}</span>
                  </span>
                </li>
              </ul>

              <p
                class="mt-7 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-white/55"
              >
                Two players run side by side, because the lesson must not restart. The
                lesson is paused and kept in memory while the answer plays in its own
                engine — then handed back at the exact millisecond it stopped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── The engine ─────────────────────────────────────────────────── -->
    <section
      id="engine"
      class="relative scroll-mt-20 overflow-hidden bg-nl-stage py-20 text-nl-paper sm:py-28"
    >
      <div class="nl-dots-dark absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        class="absolute -right-32 top-0 h-96 w-96 rounded-full bg-nl-amber/10 blur-3xl"
        aria-hidden="true"
      />

      <div class="nl-wrap relative">
        <div class="max-w-3xl">
          <span class="reveal nl-eyebrow text-nl-amber">The rendering engine</span>
          <h2
            class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-paper"
            style="transition-delay: 60ms"
          >
            Not a video file.<br />A timeline of commands.
          </h2>
          <p
            class="reveal mt-5 text-[17px] leading-relaxed text-white/60"
            style="transition-delay: 120ms"
          >
            Every lesson and every answer is played by the same framework-agnostic
            TypeScript engine. It maps a script of timed actions onto an animation loop
            synced to the narration — which is precisely why new content can be generated
            into a lesson that is already playing.
          </p>
        </div>

        <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(f, i) in engineFeatures"
            :key="f.title"
            class="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-nl-amber/40 hover:bg-white/[0.06]"
            :style="{ transitionDelay: `${i * 70}ms` }"
          >
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-nl-amber text-nl-ink"
            >
              <AppIcon :name="f.icon" class="h-5 w-5" />
            </span>
            <h3 class="nl-display mt-6 text-[20px]">{{ f.title }}</h3>
            <p class="mt-3 text-[14.5px] leading-relaxed text-white/55">{{ f.text }}</p>
          </div>
        </div>

        <!-- plugins -->
        <div class="mt-20">
          <div class="flex flex-wrap items-end justify-between gap-4">
            <h3 class="reveal nl-display nl-d3 text-nl-paper">Nine plugins do the drawing</h3>
            <p class="reveal nl-mono text-[12px] uppercase tracking-widest text-white/40">
              the core only owns time and state
            </p>
          </div>

          <div class="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(p, i) in plugins"
              :key="p.name"
              class="reveal bg-nl-stage2 p-6 transition-colors hover:bg-[#2b2b27]"
              :style="{ transitionDelay: `${i * 45}ms` }"
            >
              <p class="nl-display text-[17px] text-nl-amber">{{ p.name }}</p>
              <p class="mt-2 text-[13.5px] leading-relaxed text-white/55">{{ p.text }}</p>
            </div>
          </div>
        </div>

        <!-- visual templates -->
        <div class="mt-16 rounded-2xl border border-white/10 p-7 sm:p-9">
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-5">
              <h3 class="reveal nl-display text-[21px] text-nl-paper">
                Diagrams the writer is allowed to ask for
              </h3>
              <p class="reveal mt-3 text-[14.5px] leading-relaxed text-white/55">
                The visual plugin publishes a machine-readable catalogue of what it can
                draw. The model that writes lessons and answers is handed that catalogue —
                so it can never ask for a diagram the engine cannot render.
              </p>
            </div>
            <div class="flex flex-wrap gap-2.5 lg:col-span-7">
              <span
                v-for="(t, i) in diagramTemplates"
                :key="t"
                class="reveal nl-chip nl-chip--dark"
                :style="{ transitionDelay: `${i * 50}ms` }"
              >
                <span class="nl-chip__dot" />
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Content model ──────────────────────────────────────────────── -->
    <section id="content" class="nl-wrap scroll-mt-20 py-20 sm:py-28">
      <div class="max-w-3xl">
        <span class="reveal nl-eyebrow text-nl-amber-dark">How a course is built</span>
        <h2 class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink" style="transition-delay: 60ms">
          An article in.<br />A lesson out.
        </h2>
        <p class="reveal nl-lead mt-5" style="transition-delay: 120ms">
          Content is authored as writing, because writing is what agents and humans can
          both reason about. The video the learner watches is generated from it.
        </p>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-3">
        <div
          v-for="(level, i) in contentModel"
          :key="level.label"
          class="reveal nl-card nl-card--hover relative p-7"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <span class="nl-mono text-[12px] uppercase tracking-widest text-nl-faint">
            Level {{ i + 1 }}
          </span>
          <h3 class="nl-display mt-3 text-[24px] text-nl-ink">{{ level.label }}</h3>
          <p class="mt-3 text-[14.5px] leading-relaxed text-nl-muted">{{ level.text }}</p>
        </div>
      </div>

      <div
        class="reveal mt-8 flex flex-col gap-6 rounded-2xl border border-nl-line bg-nl-surface p-7 sm:flex-row sm:items-center sm:gap-10 sm:p-9"
      >
        <div class="flex flex-wrap items-center gap-3 sm:flex-nowrap sm:shrink-0">
          <span class="nl-chip !bg-nl-paper">
            <span class="nl-chip__dot" />
            Article
          </span>
          <span class="nl-mono text-nl-faint" aria-hidden="true">→</span>
          <span class="nl-chip !bg-nl-paper">
            <span class="nl-chip__dot nl-chip__dot--blue" />
            Topic script
          </span>
          <span class="nl-mono text-nl-faint" aria-hidden="true">→</span>
          <span class="nl-chip !border-nl-ink !bg-nl-ink !text-nl-paper">
            <span class="nl-chip__dot" />
            Rendered lesson
          </span>
        </div>
        <p class="text-[14.5px] leading-relaxed text-nl-muted">
          The written source stays the source of truth. Regenerate the lesson and every
          learner gets the better version — no re-shoot, no re-edit, no re-upload.
        </p>
      </div>
    </section>

    <!-- ── Assessments ────────────────────────────────────────────────── -->
    <section
      id="assessments"
      class="scroll-mt-20 border-y border-nl-line bg-nl-surface py-20 sm:py-28"
    >
      <div class="nl-wrap">
        <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7">
            <span class="reveal nl-eyebrow text-nl-blue-deep">Assessments</span>
            <h2
              class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink"
              style="transition-delay: 60ms"
            >
              The video stops until<br />you answer.
            </h2>
          </div>
          <p class="reveal nl-lead lg:col-span-5" style="transition-delay: 120ms">
            An assessment is not a quiz page after the lesson. It is an action inside the
            lesson that halts the animation loop — the lesson genuinely cannot continue
            until the learner responds, and the submission is recorded against their
            progress.
          </p>
        </div>

        <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="(q, i) in questionTypes"
            :key="q.name"
            class="reveal nl-card nl-card--hover !bg-nl-paper p-6"
            :style="{ transitionDelay: `${i * 70}ms` }"
          >
            <span
              class="nl-mono flex h-8 w-8 items-center justify-center rounded-lg bg-nl-blue-tint text-[12px] text-nl-blue-deep"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="nl-display mt-5 text-[17px] leading-tight text-nl-ink">
              {{ q.name }}
            </h3>
            <p class="mt-2.5 text-[13.5px] leading-relaxed text-nl-muted">{{ q.text }}</p>
          </div>
        </div>

        <p class="reveal nl-mono mt-8 text-[12px] text-nl-faint">
          Generated from the article alongside the lesson · published together · timed
          submissions tracked per learner
        </p>
      </div>
    </section>

    <!-- ── Two surfaces ───────────────────────────────────────────────── -->
    <section id="surfaces" class="nl-wrap scroll-mt-20 py-20 sm:py-28">
      <div class="max-w-3xl">
        <span class="reveal nl-eyebrow text-nl-amber-dark">Two surfaces, one platform</span>
        <h2 class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink" style="transition-delay: 60ms">
          One place to author.<br />One place to learn.
        </h2>
        <p class="reveal nl-lead mt-5" style="transition-delay: 120ms">
          Creators work in the Studio with agents doing the heavy lifting. Learners get
          the published result. Nothing half-built ever reaches a learner — every piece of
          content is a draft until it is deliberately published.
        </p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <div
          v-for="(s, i) in surfaces"
          :key="s.key"
          class="reveal flex flex-col rounded-2xl border p-7 sm:p-9"
          :class="
            s.key === 'studio'
              ? 'border-nl-line bg-nl-surface'
              : 'border-transparent bg-nl-ink text-nl-paper'
          "
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <span
            class="nl-eyebrow"
            :class="s.key === 'studio' ? 'text-nl-amber-dark' : 'text-nl-blue-soft'"
          >
            {{ s.eyebrow }}
          </span>
          <h3
            class="nl-display nl-d3 mt-4"
            :class="s.key === 'studio' ? 'text-nl-ink' : 'text-nl-paper'"
          >
            {{ s.title }}
          </h3>
          <p
            class="mt-4 text-[15px] leading-relaxed"
            :class="s.key === 'studio' ? 'text-nl-muted' : 'text-white/60'"
          >
            {{ s.text }}
          </p>

          <ul class="mt-8 space-y-3.5">
            <li v-for="point in s.points" :key="point" class="flex items-start gap-3">
              <AppIcon
                name="check"
                class="mt-[3px] h-4 w-4 shrink-0"
                :class="s.key === 'studio' ? 'text-nl-amber-dark' : 'text-nl-blue-soft'"
              />
              <span
                class="text-[14.5px] leading-relaxed"
                :class="s.key === 'studio' ? 'text-nl-muted' : 'text-white/65'"
              >
                {{ point }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── Numbers ────────────────────────────────────────────────────── -->
    <section class="border-y border-nl-line bg-nl-surface py-16 sm:py-20">
      <div class="nl-wrap grid grid-cols-2 gap-10 lg:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <p class="nl-display text-[clamp(2.4rem,4.4vw,3.4rem)] leading-none text-nl-amber-dark">
            <CountUp :value="stat.value" :prefix="stat.prefix || ''" :suffix="stat.suffix" />
          </p>
          <p class="mt-3 text-[13.5px] leading-relaxed text-nl-muted">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- ── FAQ ────────────────────────────────────────────────────────── -->
    <section id="faq" class="nl-wrap scroll-mt-20 py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <span class="reveal nl-eyebrow text-nl-amber-dark">Questions</span>
          <h2
            class="reveal rv-clip nl-display nl-d2 mt-5 text-nl-ink"
            style="transition-delay: 60ms"
          >
            The honest answers.
          </h2>
          <p class="reveal mt-5 text-[15px] leading-relaxed text-nl-muted">
            The platform is in active development and the ask-the-lesson flow runs today
            as a proof of concept. These are the things people ask us first.
          </p>
        </div>

        <div class="lg:col-span-8">
          <details
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="nl-faq reveal border-b border-nl-line py-5"
            :style="{ transitionDelay: `${i * 40}ms` }"
          >
            <summary class="nl-display text-[18px] leading-snug text-nl-ink sm:text-[20px]">
              <span>{{ faq.q }}</span>
              <span class="nl-faq__sign" aria-hidden="true" />
            </summary>
            <p class="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-nl-muted">
              {{ faq.a }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────────────────────────── -->
    <section class="nl-wrap pb-20 sm:pb-28">
      <div
        class="relative overflow-hidden rounded-[26px] bg-nl-ink px-6 py-20 text-center text-nl-paper sm:px-16"
      >
        <div class="nl-dots-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          class="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-nl-amber/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-nl-blue/20 blur-3xl"
          aria-hidden="true"
        />

        <div class="relative mx-auto max-w-2xl">
          <h2 class="reveal rv-clip nl-display nl-d2 text-nl-paper">
            Come and interrupt a lesson.
          </h2>
          <p class="reveal mt-6 text-[17px] leading-relaxed text-white/65" style="transition-delay: 100ms">
            The fastest way to understand {{ product.name }} is to watch someone stop a
            lesson mid-sentence, ask something awkward, and get a real answer back.
            We will walk you through it.
          </p>
          <div
            class="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style="transition-delay: 180ms"
          >
            <a :href="`mailto:${product.email}`" class="nl-btn nl-btn--amber">
              <AppIcon name="mail" class="h-4 w-4" />
              Book a walkthrough
            </a>
            <a href="#ask" class="nl-btn nl-btn--on-dark">Start from the top</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
