<script setup lang="ts">
const { company } = useSiteData()

useSeoMeta({
  title: 'Account & Data Deletion — Niyabh Labs',
  description:
    'How to delete your account and associated data in mobile applications published by Niyabh Labs.',
  robots: 'noindex, follow'
})

const lastUpdated = 'September 5, 2026'

const apps = [
  {
    id: 'payper-trade',
    name: 'Payper Trade',
    pkg: 'com.niyabhlabs.payper_trade',
    signIn: 'Google sign-in',
    place: 'Account tab → Delete account',
    data:
      'your profile (name, email, profile picture reference) and all practice trading data — virtual funds, orders, positions, trade history, watchlist, and practice-streak days'
  },
  {
    id: 'payper-crypto',
    name: 'Crypto Practice',
    pkg: 'com.niyabhlabs.paypercrypto',
    signIn: 'Google sign-in',
    place: 'Account tab → Delete account',
    data:
      'your profile (name, email, profile picture reference) and all practice trading data — virtual funds, orders, holdings, trade history, watchlist, and practice-streak days'
  },
  {
    id: 'chitfund',
    name: 'ChitFund',
    pkg: '',
    signIn: 'sign-in',
    place: 'the account / settings screen → Delete account',
    data: 'your profile and the chit fund records you created in the app'
  },
  {
    id: 'life-planner',
    name: 'Life Planner',
    pkg: '',
    signIn: 'Google sign-in',
    place: 'the account / settings screen → Delete account',
    data: 'your profile and the tasks, plans, and content you created in the app'
  },
  {
    id: 'trade-book',
    name: 'Trade Book',
    pkg: 'com.tradebook.trade_book',
    signIn: 'sign-in',
    place: 'Profile → Delete account',
    data: 'your profile and the trading journal entries you created in the app'
  }
]

// Deep link: /account-deletion#payper-trade shows only that app (this is the
// URL each Play listing's Data Safety form points at).
const selectedId = ref<string | null>(null)

const syncHash = () => {
  const h = window.location.hash.replace('#', '')
  selectedId.value = apps.some((a) => a.id === h) ? h : null
  if (selectedId.value) form.appId = selectedId.value
}

onMounted(() => {
  syncHash()
  window.addEventListener('hashchange', syncHash)
})
onBeforeUnmount(() => window.removeEventListener('hashchange', syncHash))

const visibleApps = computed(() =>
  selectedId.value ? apps.filter((a) => a.id === selectedId.value) : apps
)

const showAll = () => {
  history.replaceState(null, '', window.location.pathname)
  selectedId.value = null
}

// Email request form — opens the visitor's mail app (Gmail on most phones)
// with everything pre-filled; they just press send.
const form = reactive({ appId: apps[0].id, email: '' })

const submit = () => {
  const app = apps.find((a) => a.id === form.appId) ?? apps[0]
  const subject = `Delete my ${app.name} account`
  const body =
    `Please delete my ${app.name} account and all associated data.\n\n` +
    `My sign-in email: ${form.email}\n\n` +
    `(I am sending this from the same email address I used to sign in.)`
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-slate-100 pt-32 sm:pt-40">
      <div class="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div class="container-px relative pb-12 sm:pb-16">
        <span class="eyebrow">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Legal
        </span>
        <h1 class="mt-6 display-lg text-slate-900">Account &amp; Data Deletion</h1>
        <p class="mt-4 text-sm text-slate-500">Last updated: {{ lastUpdated }}</p>
      </div>
    </section>

    <section class="container-px legal max-w-3xl py-14 sm:py-16">
      <p>
        This page explains how to delete your account and the data associated
        with it in mobile applications published by Niyabh Labs on the Google
        Play Store. Deletion is permanent and cannot be undone.
      </p>

      <h2>{{ selectedId ? visibleApps[0].name : 'Apps' }}</h2>
      <p v-if="selectedId">
        <a href="#" @click.prevent="showAll">← See all Niyabh Labs apps</a>
      </p>
      <template v-for="app in visibleApps" :key="app.id">
        <h3 v-if="!selectedId" :id="app.id">{{ app.name }}</h3>
        <p>
          {{ app.name }}<template v-if="app.pkg">
            (package <code>{{ app.pkg }}</code
            >)</template
          >
          uses {{ app.signIn }}. Your account stores {{ app.data }}.
        </p>
        <p>
          <strong>Fastest way — delete inside the app (instant):</strong>
          open {{ app.place }}, then confirm. Your sign-in record and all the
          data above are permanently deleted immediately. You may be asked to
          sign in again first to verify it's you.
        </p>
      </template>

      <h2>Request deletion by email</h2>
      <p>
        If you have uninstalled the app, use this form. It opens your email app
        with the request pre-filled — just press send.
        <strong>Send it from the same email address you used to sign in</strong>
        (that is how we verify it's you). We will delete your account and all
        associated data within <strong>7 days</strong> and reply to confirm.
      </p>

      <form
        class="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8"
        @submit.prevent="submit"
      >
        <div class="grid gap-5 sm:grid-cols-2">
          <div v-if="!selectedId">
            <label for="del-app" class="mb-1.5 block text-sm font-600 text-slate-700">App *</label>
            <select
              id="del-app"
              v-model="form.appId"
              required
              class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            >
              <option v-for="app in apps" :key="app.id" :value="app.id">
                {{ app.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="del-email" class="mb-1.5 block text-sm font-600 text-slate-700"
              >Your sign-in email *</label
            >
            <input
              id="del-email"
              v-model="form.email"
              type="email"
              required
              placeholder="you@gmail.com"
              class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>
        </div>
        <button type="submit" class="btn-primary mt-6 w-full sm:w-auto">
          Open email &amp; request deletion
        </button>
      </form>

      <h2>What is deleted, and what is kept</h2>
      <ul>
        <li>
          <strong>Deleted:</strong> your sign-in record and everything listed
          for the app above — all data linked to your account.
        </li>
        <li>
          <strong>Kept:</strong> nothing linked to your account. Aggregate or
          anonymized technical data that cannot identify you (for example crash
          statistics), and data held by third-party partners such as Google
          AdMob under
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener"
            >their own policies</a
          >, are not associated with your account and are covered by our
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.
        </li>
      </ul>

      <h2>Other apps</h2>
      <p>
        Niyabh Labs apps not listed here do not require an account; they store
        content only on your device, and uninstalling the app removes it. If a
        future app introduces accounts, its deletion steps will be added to
        this page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about deletion or this page? Contact us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.legal :deep(h2) {
  @apply mt-12 font-display text-2xl font-700 text-slate-900;
}
.legal :deep(h3) {
  @apply mt-8 text-lg font-600 text-slate-900;
}
.legal :deep(p) {
  @apply mt-4 leading-relaxed text-slate-600;
}
.legal :deep(ul) {
  @apply mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-600;
}
.legal :deep(a) {
  @apply text-brand-600 hover:underline;
}
.legal :deep(code) {
  @apply rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-700;
}
</style>
