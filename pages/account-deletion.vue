<script setup lang="ts">
const { company } = useSiteData()

useSeoMeta({
  title: 'Account & Data Deletion — Niyabh Labs',
  description:
    'How to delete your account and associated data in mobile applications published by Niyabh Labs.',
  robots: 'noindex, follow'
})

const lastUpdated = 'August 3, 2026'
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
        Play Store. Each app that supports sign-in is listed below with its
        deletion steps. Deletion is permanent and cannot be undone.
      </p>

      <h2 id="payper-trade">Payper Trade</h2>
      <p>
        Payper Trade (package <code>dev.abdhu.payper_trade</code>) is a virtual
        trading practice app that uses Google sign-in. Your account stores your
        name, email address, profile picture reference, and your practice
        trading data: virtual funds, orders, positions, trade history,
        watchlist, and practice-streak days.
      </p>

      <h3>Delete from inside the app (instant)</h3>
      <ul>
        <li>Open Payper Trade and go to the <strong>Account</strong> tab.</li>
        <li>Tap <strong>Delete account</strong>.</li>
        <li>Confirm in the dialog. You may be asked to sign in with Google again to verify it's you.</li>
      </ul>
      <p>
        Your sign-in record and all practice data listed above are permanently
        deleted immediately, and the app returns to the sign-in screen.
      </p>

      <h3>Delete without the app installed (email request)</h3>
      <p>
        If you have uninstalled the app, email us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a> with the
        subject <em>"Delete my Payper Trade account"</em>. To verify your
        identity, send the request
        <strong>from the same Google account email you used to sign in</strong>.
        We will delete your account and all associated data within
        <strong>7 days</strong> and reply to confirm once it is done.
      </p>

      <h3>What is deleted, and what is kept</h3>
      <ul>
        <li>
          <strong>Deleted:</strong> your sign-in record (name, email, profile
          picture reference) and all practice trading data — virtual funds,
          orders, positions, trade history, watchlist, and streaks.
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
          >, are not associated with your Payper Trade account and are covered
          by our <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.
        </li>
      </ul>

      <h2>Other Niyabh Labs apps</h2>
      <p>
        Our other apps currently do not require an account or sign-in; they
        store content only on your device, and uninstalling the app removes it.
        If a future app introduces accounts, its deletion steps will be added
        to this page. For any deletion or privacy request about any of our
        apps, email
        <a :href="`mailto:${company.email}`">{{ company.email }}</a> and name
        the app in your message.
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
