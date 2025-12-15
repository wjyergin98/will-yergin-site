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

## Updating content

- Edit `src/content/projects.ts` for project cards.
- Add project media under `public/projects/<slug>/...`
- Resume is served from `public/WilliamJYerginResume.pdf`
