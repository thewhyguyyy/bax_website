# Beyond Ability X — Website

Marketing site for Beyond Ability X (beyondabilityx.com), built with Next.js and deployed as a static export.

## Branch structure

- **`site-rebuild`** — source code. This is the branch to work from.
- **`main`** — compiled static output only (the result of `npm run build` inside `site-src/`). Hostinger's Git integration deploys directly from this branch. It is not meant to be edited by hand; see [Deploying](#deploying) below.

## Stack

- Next.js 16 (App Router), static export (`output: "export"`)
- Tailwind CSS v4 (CSS-first config, see `site-src/app/globals.css`)
- Framer Motion for scroll/carousel animation
- No backend — form submissions post to a Google Apps Script endpoint (`site-src/content/form.js`)

## Project structure

```
site-src/
├── app/                # Routes (one folder per page) + layout, sitemap, robots
├── components/         # Reusable UI components
├── content/site.js     # All copy and structured content — edit here, not in components
└── public/             # Images, video, fonts
```

Content (copy, team roster, event data, pillar descriptions, etc.) lives in `site-src/content/site.js` as plain exported objects/arrays. Components read from it; there's no CMS.

## Local development

```bash
cd site-src
npm install
npm run dev
```

## Deploying

Static export has no server runtime, so `next start` does not apply.

```bash
cd site-src
npm run build        # outputs to site-src/out/
```

Copy the contents of `site-src/out/` to the repo root of the `main` branch (excluding `.htaccess`), commit, and push. Hostinger picks up the push and deploys automatically. The `.htaccess` file on `main` handles clean-URL rewrites (`/about` → `about.html`) and is not part of the Next.js build — don't overwrite it.

A quick way to do this without disturbing your working branch:

```bash
git worktree add /tmp/deploy main
rsync -a --delete --exclude .git --exclude .htaccess site-src/out/ /tmp/deploy/
cd /tmp/deploy && git add -A && git commit -m "Deploy: <what changed>" && git push origin main
git worktree remove /tmp/deploy
```
