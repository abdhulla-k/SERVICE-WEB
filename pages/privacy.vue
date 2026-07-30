<script setup lang="ts">
const { company } = useSiteData()

useSeoMeta({
  title: 'Privacy Policy — Niyabh Labs',
  description:
    'Privacy Policy for the Niyabh Labs website and mobile applications published by Niyabh Labs.',
  robots: 'noindex, follow'
})

const lastUpdated = 'July 30, 2026'
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
        <h1 class="mt-6 display-lg text-slate-900">Privacy Policy</h1>
        <p class="mt-4 text-sm text-slate-500">Last updated: {{ lastUpdated }}</p>
      </div>
    </section>

    <section class="container-px legal max-w-3xl py-14 sm:py-16">
      <p>
        This Privacy Policy describes how Niyabh Labs ("Niyabh Labs", "we",
        "us", or "our") collects, uses, and shares information when you use our
        website ({{ company.domain }}) and the mobile applications published by
        Niyabh Labs, including apps distributed through the Google Play Store
        (together, the "Services"). By using any of the Services, you agree to
        the practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>
        When you contact us (for example by email or through a contact form) or
        submit feedback in an app, we receive the information you choose to
        provide, such as your name, email address, and the contents of your
        message.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        When you use the Services, we and our third-party partners may
        automatically collect certain information, including:
      </p>
      <ul>
        <li>
          <strong>Device information</strong> — such as device model, operating
          system version, language, screen size, and general (approximate)
          location derived from your IP address.
        </li>
        <li>
          <strong>Identifiers</strong> — such as your device's advertising
          identifier (e.g. Google Advertising ID), app-set identifiers, and
          similar identifiers used for advertising and analytics.
        </li>
        <li>
          <strong>Usage and diagnostics data</strong> — such as the features
          you interact with, session duration, crash logs, and performance
          data, used to understand how the Services are used and to fix
          problems.
        </li>
      </ul>
      <h3>Data stored on your device</h3>
      <p>
        Some of our apps store content you create (for example notes, tasks,
        preferences, or saved items) locally on your device. Unless stated
        otherwise within a specific app, this content stays on your device and
        is removed when you uninstall the app or clear its data.
      </p>

      <h2>2. How We Use Information</h2>
      <p>We may use the information we collect to:</p>
      <ul>
        <li>provide, operate, maintain, and improve the Services;</li>
        <li>display advertising, including personalized or contextual ads;</li>
        <li>measure and analyze how the Services are used;</li>
        <li>diagnose crashes and technical issues;</li>
        <li>respond to your inquiries and support requests;</li>
        <li>enforce our terms and protect the Services and their users; and</li>
        <li>comply with applicable laws and legal processes.</li>
      </ul>

      <h2>3. Advertising</h2>
      <p>
        Our apps are free to use and are supported by advertising. We work with
        third-party advertising networks, including Google AdMob, to display
        ads within our apps. These partners may collect and use device
        identifiers, IP address, and usage information to serve and measure
        ads, which may include ads personalized to your interests where
        permitted.
      </p>
      <p>
        Google's use of advertising data is described in
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener"
          >Google's advertising policies</a
        >
        and
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
          >Google's Privacy Policy</a
        >. On Android devices, you can limit ad personalization or reset or
        delete your advertising ID at any time through your device settings
        (Settings → Google → Ads, or Settings → Privacy → Ads, depending on
        your device).
      </p>

      <h2>4. Analytics and Third-Party Services</h2>
      <p>
        The Services may use third-party services that collect and process
        information under their own privacy policies, including:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
            >Google Play Services</a
          >
        </li>
        <li>
          <a
            href="https://support.google.com/admob/answer/6128543"
            target="_blank"
            rel="noopener"
            >Google AdMob</a
          >
        </li>
        <li>
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener"
            >Firebase (analytics and crash reporting)</a
          >
        </li>
      </ul>
      <p>
        We encourage you to review these policies to understand how those
        providers handle your information.
      </p>

      <h2>5. How We Share Information</h2>
      <p>We may share information:</p>
      <ul>
        <li>
          with service providers, advertising partners, and analytics providers
          that perform services on our behalf or in connection with the
          Services;
        </li>
        <li>
          to comply with applicable law, regulation, legal process, or
          governmental request;
        </li>
        <li>
          to enforce our terms, or to protect the rights, property, or safety
          of Niyabh Labs, our users, or others;
        </li>
        <li>
          in connection with a merger, acquisition, financing, or sale of all
          or part of our business; and
        </li>
        <li>with your consent or at your direction.</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain information for as long as it is needed for the purposes
        described in this policy, to comply with legal obligations, to resolve
        disputes, and to enforce our agreements. Data collected by third-party
        partners is retained according to their own policies.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable measures designed to protect the information we
        handle. However, no method of transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The Services are not directed to children under the age of 13, and we
        do not knowingly collect personal information from children under 13.
        If you believe a child has provided us with personal information,
        please contact us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a> and we
        will take appropriate steps to delete it.
      </p>

      <h2>9. Your Rights and Choices</h2>
      <p>
        Depending on where you live, you may have rights regarding your
        personal information, such as the right to request access to,
        correction of, or deletion of your information. To make a request,
        contact us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>. You can
        also limit ad personalization through your device settings as described
        in Section 3, and uninstalling an app stops all further data collection
        by that app.
      </p>

      <h2>10. International Transfers</h2>
      <p>
        We are based in India, and information may be processed and stored in
        India and in other countries where we or our service providers
        operate, which may have data protection laws different from those in
        your country.
      </p>

      <h2>11. Links to Other Sites and Services</h2>
      <p>
        The Services may contain links to third-party websites or services
        that we do not operate. This policy does not apply to those third
        parties, and we are not responsible for their content or privacy
        practices.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we
        will revise the "Last updated" date at the top of this page. Your
        continued use of the Services after an update means you accept the
        revised policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at
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
</style>
