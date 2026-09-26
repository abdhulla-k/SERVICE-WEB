// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/tailwind.css', '~/assets/css/product-theme.css'],

  // Static generation for GitHub Pages.
  // Deploying to a user/org page or a custom domain => baseURL stays '/'.
  // If you switch to a project page (username.github.io/<repo>), set
  //   NUXT_APP_BASE_URL=/<repo>/  (or change baseURL below).
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en', class: 'no-js' },
      script: [
        // Remove the no-js class before paint so the reveal engine takes over.
        { children: "document.documentElement.classList.remove('no-js')" }
      ],
      title: 'Niyabh Labs — AI Fine-Tuning, Agentic Apps & IT Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Niyabh Labs is an AI-first IT services company. We build custom LLM fine-tuning, agentic AI applications, and end-to-end software solutions for ambitious teams.'
        },
        { name: 'theme-color', content: '#059669' },
        // Open Graph
        { property: 'og:title', content: 'Niyabh Labs — AI & IT Services' },
        {
          property: 'og:description',
          content:
            'Custom LLM fine-tuning, agentic AI applications, and full-stack product engineering.'
        },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap'
        },
        // Learning-platform type stack
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },

  // Prerender every route so GitHub Pages serves fully static HTML.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/services',
        '/about',
        '/contact',
        '/services/fine-tuning',
        '/services/agentic-apps',
        '/services/agentic-automation',
        '/services/ai-product-engineering',
        '/services/ai-first-development',
        '/services/mlops-cloud',
        '/services/automation',
        '/services/consulting',
        // Legal pages — intentionally not linked from the site UI,
        // reachable only by direct URL (used for Google Play listings).
        '/privacy',
        '/terms'
      ]
    }
  },

  ssr: true
})
