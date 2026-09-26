<script setup lang="ts">
/**
 * A faithful, non-functional mock of the lesson player walking through the
 * ask-the-lesson flow: the lesson plays, the learner pauses and asks, the answer
 * is generated, the answer plays. It cycles on its own and can be driven by the
 * step pips underneath. Purely presentational — no engine, no audio.
 */
type Phase = 'playing' | 'asking' | 'preparing' | 'answer'

const phases: { key: Phase; label: string; ms: number }[] = [
  { key: 'playing', label: 'Lesson', ms: 5200 },
  { key: 'asking', label: 'Ask', ms: 5200 },
  { key: 'preparing', label: 'Generate', ms: 4200 },
  { key: 'answer', label: 'Answer', ms: 6000 }
]

const index = ref(0)
const phase = computed<Phase>(() => phases[index.value].key)
const auto = ref(true)

let timer: ReturnType<typeof setTimeout> | null = null
let statusTimer: ReturnType<typeof setInterval> | null = null

const statuses = ['Writing your answer', 'Voicing scene 1 of 2', 'Checking the timeline']
const statusIdx = ref(0)

const clearTimer = () => {
  if (timer) clearTimeout(timer)
  timer = null
}

const schedule = () => {
  clearTimer()
  if (!auto.value) return
  timer = setTimeout(() => {
    index.value = (index.value + 1) % phases.length
    schedule()
  }, phases[index.value].ms)
}

// The generating step walks through its own status line.
watch(phase, (p) => {
  if (statusTimer) clearInterval(statusTimer)
  statusTimer = null
  statusIdx.value = 0
  if (p !== 'preparing') return
  statusTimer = setInterval(() => {
    statusIdx.value = Math.min(statusIdx.value + 1, statuses.length - 1)
  }, 1300)
})

const goTo = (i: number) => {
  auto.value = false
  clearTimer()
  index.value = i
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    auto.value = false
    index.value = 1
    return
  }
  schedule()
})

onBeforeUnmount(() => {
  clearTimer()
  if (statusTimer) clearInterval(statusTimer)
})

const question = 'So why is a hard drive a file too?'
const lessonPoints = [
  'A file is just a stream of bytes with a name',
  'Directories are files that list other files',
  'Your keyboard, disk and screen are files too'
]
</script>

<template>
  <div class="w-full">
    <div class="nl-card overflow-hidden !rounded-[18px] p-2.5 sm:p-3">
      <!-- Player top bar -->
      <div class="flex items-center justify-between gap-3 px-2 pb-2.5 pt-1">
        <div class="flex min-w-0 items-center gap-2">
          <NlLogo :size="20" />
          <span class="truncate text-[13px] font-semibold text-nl-ink">
            Linux, the shell and you
          </span>
          <span class="hidden text-nl-line sm:inline">/</span>
          <span class="nl-mono hidden truncate text-[12px] text-nl-faint sm:inline">
            Unit 2 · Everything is a file
          </span>
        </div>
        <span
          class="nl-mono rounded-full bg-nl-amber-soft px-2.5 py-1 text-[10.5px] font-medium tracking-wider text-nl-amber-dark"
        >
          LIVE RENDER
        </span>
      </div>

      <!-- Stage -->
      <div
        class="nl-stage"
        :class="{ 'nl-stage--answering': phase === 'preparing' || phase === 'answer' }"
      >
        <!-- 1 · the lesson itself -->
        <div
          class="nl-scene"
          :data-active="phase === 'playing' || phase === 'asking'"
          :class="phase === 'asking' ? '!opacity-[0.18]' : ''"
        >
          <span class="nl-eyebrow text-nl-amber !text-[10px] sm:!text-[12px]">
            Unit 2 · The shell
          </span>
          <h3
            class="nl-display mt-2 text-[clamp(18px,3.1vw,34px)] text-nl-paper sm:mt-4"
          >
            Everything is a file
          </h3>
          <ul class="mt-3 space-y-1.5 sm:mt-6 sm:space-y-3">
            <li
              v-for="(point, i) in lessonPoints"
              :key="point"
              class="nl-reveal-line items-start gap-2.5 text-[clamp(10px,1.4vw,16px)] text-white/75 sm:gap-3"
              :class="i === 2 ? 'hidden sm:flex' : 'flex'"
              :style="{ animationDelay: `${0.3 + i * 0.5}s` }"
            >
              <span
                class="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full"
                :class="i === 2 ? 'bg-nl-blue' : 'bg-nl-amber'"
              />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>

        <!-- caption, shown while the lesson is playing -->
        <div v-show="phase === 'playing'" class="nl-caption">
          <span>Your disk is reachable as a file called <em>/dev/sda</em>.</span>
        </div>

        <!-- 2 · asking -->
        <div class="nl-scene !justify-end" :data-active="phase === 'asking'">
          <div class="absolute inset-x-0 top-0 flex items-start justify-between p-3 sm:p-4">
            <span
              class="nl-chip nl-chip--dark !py-1 !text-[11px] sm:!text-[12.5px]"
            >
              <span class="inline-flex gap-[3px]">
                <span class="h-2.5 w-[3px] bg-white/70" />
                <span class="h-2.5 w-[3px] bg-white/70" />
              </span>
              Lesson paused at 02:14
            </span>
            <span
              class="nl-chip nl-chip--dark !border-white/25 !py-1 !text-[11px] sm:!text-[12.5px]"
            >
              Back to lesson
            </span>
          </div>

          <div class="flex flex-col items-center gap-2 pb-1 sm:gap-4">
            <span class="nl-chip nl-chip--dark !text-white !text-[11px] sm:!text-[13px]">
              <span class="nl-chip__dot nl-chip__dot--blue" />
              /dev/sda
            </span>
            <span class="nl-eyebrow text-nl-blue-soft !text-[9.5px] sm:!text-[11.5px]">
              Ask about this moment
            </span>
            <p
              class="nl-caret border-b border-white/25 pb-2 text-center font-nl-display text-[clamp(14px,2.6vw,30px)] font-medium leading-tight text-nl-paper"
            >
              {{ question }}
            </p>
            <div class="flex items-center gap-3 sm:gap-4">
              <span
                class="nl-mic-ring flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-nl-blue text-nl-blue-soft sm:h-12 sm:w-12"
              >
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <rect x="10" y="3.5" width="8" height="13" rx="4" />
                  <path d="M6 13a8 8 0 0 0 16 0M14 21v3.5" />
                </svg>
              </span>
              <span
                class="nl-btn nl-btn--sm !bg-nl-paper !text-nl-ink sm:!h-11 sm:!px-6"
              >
                Ask
              </span>
            </div>
            <span class="nl-mono hidden text-[11px] text-white/40 sm:block">
              Enter to ask · Esc to go back
            </span>
          </div>
        </div>

        <!-- 3 · generating the answer -->
        <div
          class="nl-scene items-center !justify-center text-center"
          :data-active="phase === 'preparing'"
        >
          <span class="nl-eyebrow text-nl-blue-soft !text-[9.5px] sm:!text-[11.5px]">
            Your question
          </span>
          <p
            class="mt-3 max-w-[85%] font-nl-display text-[clamp(15px,2.7vw,32px)] font-medium leading-tight text-nl-paper sm:mt-5"
          >
            {{ question }}
          </p>
          <div class="nl-sweep mt-4 sm:mt-7"><span /></div>
          <p class="nl-mono mt-3 text-[11px] text-white/60 sm:mt-4 sm:text-[13px]">
            {{ statuses[statusIdx] }}
          </p>
        </div>

        <!-- 4 · the generated answer, playing -->
        <div class="nl-scene !justify-center" :data-active="phase === 'answer'">
          <div class="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-3 sm:p-4">
            <span
              class="nl-chip !min-w-0 !border-transparent !bg-black/60 !py-1 !pl-1.5 !text-[11px] !text-nl-blue-tint sm:!text-[12.5px]"
            >
              <span
                class="rounded-full bg-nl-blue px-2 py-[2px] text-[10px] font-semibold text-nl-blue-ink sm:text-[11px]"
              >
                Your answer
              </span>
              <span class="truncate">{{ question }}</span>
            </span>
            <span
              class="nl-btn nl-btn--sm !hidden !bg-nl-paper !text-nl-ink sm:!inline-flex"
            >
              Back to lesson at 02:14
            </span>
          </div>

          <!-- a flow diagram, the way the visual plugin draws one -->
          <div class="mt-6 flex items-center justify-center gap-1.5 sm:mt-8 sm:gap-3">
            <template v-for="(box, i) in ['Your program', '/dev/sda', 'Kernel driver', 'The disk']" :key="box">
              <span
                v-if="i > 0"
                class="nl-mono text-[12px] text-nl-blue-soft sm:text-base"
                aria-hidden="true"
              >
                →
              </span>
              <span
                class="nl-reveal-line rounded-lg border px-2 py-1.5 text-center text-[9px] font-medium leading-tight sm:px-3.5 sm:py-2.5 sm:text-[13px]"
                :class="
                  i === 1
                    ? 'border-nl-blue bg-nl-blue/15 text-white'
                    : 'border-white/20 bg-white/[0.06] text-white/70'
                "
                :style="{ animationDelay: `${0.2 + i * 0.35}s` }"
              >
                {{ box }}
              </span>
            </template>
          </div>

          <div class="nl-caption">
            <span>
              Your program only ever talks to a file — the kernel turns that into a disk
              instruction.
            </span>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2 px-1 pb-1 pt-3 sm:gap-3">
        <span
          class="nl-round"
          :class="phase === 'answer' || phase === 'preparing' ? 'bg-nl-blue' : 'bg-nl-amber'"
        >
          <svg
            v-if="phase === 'playing' || phase === 'answer'"
            viewBox="0 0 24 24"
            class="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="7" y="5" width="3.5" height="14" rx="1" />
            <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>

        <span class="nl-mono hidden shrink-0 text-[12px] text-nl-muted sm:block">
          {{ phase === 'answer' ? 'Answer 00:06 / 00:22' : '02:14 / 08:30' }}
        </span>

        <div class="nl-track">
          <div
            class="nl-track__fill"
            :class="[
              phase === 'answer' ? 'nl-track__fill--blue' : '',
              phase === 'playing' ? 'nl-track__fill--running' : '',
              phase === 'answer' ? 'nl-track__fill--answer-running' : ''
            ]"
            :style="phase === 'asking' || phase === 'preparing' ? { width: '26%' } : undefined"
          />
          <!-- earlier answers stay on the lesson timeline -->
          <span class="nl-track__marker" style="left: 12%" />
          <span class="nl-track__marker" style="left: 19%" />
        </div>

        <span
          class="nl-btn nl-btn--sm shrink-0"
          :class="phase === 'asking' ? 'nl-btn--blue' : '!border !border-nl-line !text-nl-blue-deep'"
        >
          <svg
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            stroke-width="2.4"
            stroke-linecap="round"
            class="h-[15px] w-[15px]"
            aria-hidden="true"
          >
            <rect x="10" y="3.5" width="8" height="13" rx="4" />
            <path d="M6 13a8 8 0 0 0 16 0M14 21v3.5" />
          </svg>
          Ask
        </span>
      </div>
    </div>

    <!-- Step pips: legend and manual control in one -->
    <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
      <button
        v-for="(p, i) in phases"
        :key="p.key"
        type="button"
        class="nl-mono rounded-full px-3 py-1.5 text-[11px] uppercase tracking-wider transition"
        :class="
          index === i
            ? 'bg-nl-ink text-nl-paper'
            : 'text-nl-faint hover:bg-nl-ink/[0.06] hover:text-nl-ink'
        "
        :aria-pressed="index === i"
        @click="goTo(i)"
      >
        {{ i + 1 }} · {{ p.label }}
      </button>
    </div>
  </div>
</template>
