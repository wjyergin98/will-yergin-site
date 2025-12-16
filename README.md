# will-yergin-site

A fast, minimal Next.js + Tailwind personal site optimized for recruiters and hiring managers.

## Local dev (Windows 11 / macOS / Linux)

1. Install Node.js (LTS recommended).
2. In this folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (recommended)

- Vercel: import the GitHub repo and deploy. Default settings work.
- Alternatively: Cloudflare Pages (Next.js preset).

## Content updates

- Project index data: `src/content/projects.ts`
- Homepage featured media: `src/content/featuredSlides.ts`
- Project pages (static routes): `src/app/projects/<slug>/page.tsx`
- Project media: `public/projects/<slug>/*.png`
- Resume: `public/WilliamJYerginResume.pdf`

