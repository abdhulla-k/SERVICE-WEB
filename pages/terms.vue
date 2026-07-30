<script setup lang="ts">
const { company } = useSiteData()

useSeoMeta({
  title: 'Terms of Service — Niyabh Labs',
  description:
    'Terms of Service for the Niyabh Labs website and mobile applications published by Niyabh Labs.',
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
        <h1 class="mt-6 display-lg text-slate-900">Terms of Service</h1>
        <p class="mt-4 text-sm text-slate-500">Last updated: {{ lastUpdated }}</p>
      </div>
    </section>

    <section class="container-px legal max-w-3xl py-14 sm:py-16">
      <p>
        These Terms of Service ("Terms") govern your use of the Niyabh Labs
        website ({{ company.domain }}) and the mobile applications published by
        Niyabh Labs, including apps distributed through the Google Play Store
        (together, the "Services"). By accessing or using any of the Services,
        you agree to be bound by these Terms. If you do not agree, do not use
        the Services.
      </p>

      <h2>1. Who We Are</h2>
      <p>
        The Services are operated by Niyabh Labs, based in Kerala, India. You
        can reach us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
      </p>

      <h2>2. Use of the Services</h2>
      <p>
        You may use the Services only in compliance with these Terms and all
        applicable laws. If you use our apps through the Google Play Store,
        your use is also subject to the Google Play Terms of Service.
      </p>

      <h2>3. License</h2>
      <p>
        Subject to these Terms, we grant you a limited, non-exclusive,
        non-transferable, revocable license to install and use our apps on
        devices you own or control, for your personal, non-commercial use. We
        reserve all rights not expressly granted to you.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          copy, modify, distribute, sell, or lease any part of the Services;
        </li>
        <li>
          reverse engineer, decompile, or attempt to extract the source code of
          the Services, except where permitted by law;
        </li>
        <li>
          use the Services in any way that is unlawful, harmful, or interferes
          with their operation or with other users;
        </li>
        <li>
          circumvent, disable, or interfere with security features or
          advertising in the Services; or
        </li>
        <li>
          use automated means to access or collect data from the Services
          without our prior written permission.
        </li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        The Services, including all software, design, text, graphics, logos,
        and other content (excluding content you create within an app), are
        owned by Niyabh Labs or its licensors and are protected by
        intellectual-property laws. Content you create and store within an app
        remains yours.
      </p>

      <h2>6. Advertising and Third-Party Services</h2>
      <p>
        The Services are supported by advertising and may display ads served
        by third-party networks, including Google AdMob. The Services may also
        contain links to, or integrate with, third-party websites and
        services. We do not control and are not responsible for third-party
        content, products, or services, and your dealings with third parties
        are solely between you and them. How data is handled in connection
        with advertising is described in our
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.
      </p>

      <h2>7. Informational Content Only — No Professional Advice</h2>
      <p>
        Content available through the Services — including educational
        materials, practice questions, market or price information, results,
        calculators, and any other data — is provided for general
        informational and educational purposes only. It does not constitute
        financial, investment, legal, tax, medical, or other professional
        advice, and it should not be relied upon as such.
      </p>
      <ul>
        <li>
          Any trading- or finance-related content is not a recommendation to
          buy, sell, or hold any asset. Trading and investing involve risk,
          including the possible loss of capital. Always do your own research
          or consult a qualified professional before making financial
          decisions.
        </li>
        <li>
          Any results, listings, or reference data shown in the Services are
          provided for convenience and may be incomplete, delayed, or
          inaccurate. Always verify important information with the relevant
          official source before acting on it.
        </li>
        <li>
          Educational and exam-preparation content does not guarantee any
          particular outcome or result.
        </li>
      </ul>

      <h2>8. Availability and Changes to the Services</h2>
      <p>
        We may update, modify, suspend, or discontinue any part of the
        Services at any time, with or without notice. We do not guarantee that
        the Services, or any content or feature within them, will always be
        available or uninterrupted.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The Services are provided "as is" and "as available", without
        warranties of any kind, whether express or implied, including implied
        warranties of merchantability, fitness for a particular purpose,
        accuracy, and non-infringement. We do not warrant that the Services
        will be error-free, secure, or free of viruses or other harmful
        components.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Niyabh Labs and its
        owners, employees, and partners will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for any
        loss of profits, data, goodwill, or other intangible losses, arising
        out of or relating to your use of, or inability to use, the Services.
        To the maximum extent permitted by law, our total aggregate liability
        for all claims relating to the Services will not exceed the amount you
        paid us (if any) to use the Services in the twelve months before the
        claim arose.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Niyabh Labs from any claims,
        liabilities, damages, losses, and expenses (including reasonable legal
        fees) arising out of or related to your use of the Services or your
        violation of these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at any time if
        you violate these Terms or if we discontinue the Services. You may
        stop using the Services at any time by uninstalling our apps. Sections
        that by their nature should survive termination (including Sections 5,
        7, 9, 10, 11, and 13) will survive.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, without regard to
        conflict-of-law principles. Any disputes arising out of or relating to
        these Terms or the Services will be subject to the exclusive
        jurisdiction of the courts located in Kerala, India.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. When we do, we will
        update the "Last updated" date at the top of this page. Your continued
        use of the Services after an update means you accept the revised
        Terms.
      </p>

      <h2>15. Severability</h2>
      <p>
        If any provision of these Terms is held to be unenforceable, the
        remaining provisions will remain in full force and effect.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        If you have questions about these Terms, contact us at
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.legal :deep(h2) {
  @apply mt-12 font-display text-2xl font-700 text-slate-900;
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
