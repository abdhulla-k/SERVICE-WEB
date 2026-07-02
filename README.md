# Niyabh Labs — Landing Site

Modern, mobile-responsive marketing site for **Niyabh Labs**, an AI-first IT
services company. Built with **Nuxt 3** + **Tailwind CSS**, statically generated,
and deployed to **GitHub Pages**.

## Pages

| Route        | Page                                                             |
| ------------ | --------------------------------------------------------------- |
| `/`          | Home — hero, stats, services preview, why-us, process, CTA      |
| `/services`  | Services — detailed cards, industries, engagement models        |
| `/about`     | About — mission, vision, values, story timeline                 |
| `/contact`   | Contact — enquiry form, contact info, FAQ                       |

## Tech stack

- [Nuxt 3](https://nuxt.com) — Vue framework, static site generation
- [Tailwind CSS](https://tailwindcss.com) via `@nuxtjs/tailwindcss`
- Green (emerald) brand theme, `Inter` + `Space Grotesk` fonts
- Zero runtime dependencies beyond Nuxt/Tailwind; icons are inline SVG

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
```

## Build / preview the static site

```bash
npm run generate   # outputs static files to .output/public
npm run preview    # preview the generated site locally
```

## Editing content

Almost all site content lives in one place:

- **`composables/useSiteData.ts`** — company name, email, nav, social links,
  and the full list of services. Edit here and every page updates.
- Page-specific copy (stats, FAQs, timeline, values) lives at the top of each
  file in `pages/`.
- Brand colors and fonts: **`tailwind.config.js`**.

## Deployment (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push
to `main`.

### One-time setup

1. Push this project to a GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push to `main`. The site builds and deploys automatically.

### Custom domain (configured)

- `public/CNAME` is set to **`niyabhlabs.com`**. In **Settings → Pages → Custom
  domain**, confirm `niyabhlabs.com`, and add these DNS records at your registrar:
  - Four `A` records for the apex domain pointing to GitHub Pages IPs
    (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
  - Optionally a `CNAME` record for `www` → `<username>.github.io`.
- The site's base URL stays `/` for a custom domain or user/org page.

### Deploying to a project page instead (username.github.io/&lt;repo&gt;)

If you drop the custom domain and serve from a repo subpath:

1. Delete `public/CNAME`.
2. In `.github/workflows/deploy.yml`, set the build env:
   `NUXT_APP_BASE_URL: /<repo>/`.
3. Re-deploy.

## Contact form

The site is fully static (no backend), so the contact form opens the visitor's
email client pre-filled to `info@niyabhlabs.com`. To collect submissions
automatically instead, sign up for [Formspree](https://formspree.io) or
[Getform](https://getform.io) and, in `pages/contact.vue`, replace the
`handleSubmit()` body with a `fetch()` POST to your form endpoint.
