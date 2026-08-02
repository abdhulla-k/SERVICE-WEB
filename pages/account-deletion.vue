<script setup lang="ts">
const { company } = useSiteData()

useSeoMeta({
  title: 'Account & Data Deletion — Niyabh Labs',
  description:
    'How to delete your account and associated data in mobile applications published by Niyabh Labs.',
  robots: 'noindex, follow'
})

const lastUpdated = 'August 3, 2026'

const apps = [
  {
    id: 'payper-trade',
    name: 'Payper Trade',
    pkg: 'dev.abdhu.payper_trade',
    signIn: 'Google sign-in',
    place: 'Account tab → Delete account',
    data:
      'your profile (name, email, profile picture reference) and all practice trading data — virtual funds, orders, positions, trade history, watchlist, and practice-streak days'
  },
  {
    id: 'payper-crypto',
    name: 'Payper Crypto',
    pkg: 'dev.abdhu.paypercrypto',
    signIn: 'Google sign-in',
    place: 'Account tab → Delete account',
    data:
      'your profile (name, email, profile picture reference) and all practice trading data — virtual funds, orders, positions, trade history, and watchlist'
  },
  {
    id: 'chitfund',
    name: 'ChitFund',
    pkg: 'com.abdhu.chitfund_app',
    signIn: 'sign-in',
    place: 'the account / settings screen → Delete account',
    data: 'your profile and the chit fund records you created in the app'
  },
  {
    id: 'life-planner',
    name: 'Life Planner',
    pkg: 'com.abdhulla.sprig',
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
        Play Store. The apps that support sign-in are listed below. Deletion is
        permanent and cannot be undone.
      </p>

      <h2>How deletion works (all apps)</h2>
      <h3>Delete from inside the app (instant)</h3>
      <p>
        Every Niyabh Labs app with sign-in has a <strong>Delete account</strong>
        option in its account or settings screen (exact location per app below).
        Confirming it permanently deletes your sign-in record and all content
        listed for that app, immediately. You may be asked to sign in again
        first to verify it's you.
      </p>
      <h3>Delete without the app installed (email request)</h3>
      <p>
        If you have uninstalled an app, email us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a> with a
        subject like <em>"Delete my [app name] account"</em>. To verify your
        identity, send the request
        <strong>from the same email address you used to sign in</strong> and
        name the app. We will delete your account and all associated data
        within <strong>7 days</strong> and reply to confirm once it is done.
      </p>
      <h3>What is deleted, and what is kept</h3>
      <ul>
        <li>
          <strong>Deleted:</strong> your sign-in record and everything listed
          under the app below — all data linked to your account.
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

      <h2>Apps</h2>
      <template v-for="app in apps" :key="app.id">
        <h3 :id="app.id">{{ app.name }}</h3>
        <p>
          {{ app.name }} (package <code>{{ app.pkg }}</code
          >) uses {{ app.signIn }}. Your account stores {{ app.data }}.
          <br />
          <strong>In-app:</strong> {{ app.place }}, then confirm.
          <br />
          <strong>By email:</strong> follow the email steps above, naming
          "{{ app.name }}".
        </p>
      </template>

      <h2>Other apps</h2>
      <p>
        Niyabh Labs apps not listed above do not require an account; they store
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
