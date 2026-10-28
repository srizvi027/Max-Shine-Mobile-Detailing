# Max Shine Mobile Detailing

One-page Next.js (App Router) site. No backend, no database, Vercel-ready.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

Deploy: push to GitHub and import the repo in Vercel (no settings needed).

## Edit

- **Text, phone, links, services, gallery list:** `src/content.js`
- **Photos:** replace files in `public/images/` keeping the same names
  (`work-1.jpg` … `work-4.jpg`, `hero.jpg`, `hero-mobile.jpg`, `cta.jpg`, `cta-mobile.jpg`)
  or change the paths in `src/content.js`. Add more gallery items there (4–6 looks best).
- **Logo:** `public/images/logo.png` (also used as the favicon at `src/app/icon.png`)
- **Colors:** CSS variables at the top of `src/app/globals.css`
- **Intro loader:** `src/components/Loader.js` + "Loader" block in `globals.css`.
  The animated logo intro plays on each page load; reduced-motion preferences
  get a static logo and quick fade.
