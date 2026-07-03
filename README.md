# Kyle Versa Portfolio

A minimal static portfolio site built with Next.js and Tailwind CSS, designed for deployment on Vercel.

## Pages

- `/` — Scrolling home page with intro sections and project links
- `/projects` — Full project index by category
- `/projects/[slug]` — Individual project pages
- `/contact` — About, email, LinkedIn, and contact form

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

Most site content lives in two files:

- `src/content/site.ts` — name, email, LinkedIn, about text
- `src/content/home-sections.ts` — home page scroll sections, copy, and image paths
- `src/content/projects.ts` — project titles, categories, image paths, YouTube links

### Adding a project later

1. Drop images into `public/images/projects/your-project-slug/`
2. Add a new entry to the `projects` array in `src/content/projects.ts`
3. Rebuild or redeploy

### Replacing placeholder images

Images were extracted from your Format PDF exports in `Downloads/PORTFOLIO PDF/Portfolio Archive/website scans/`. To refresh them, replace files in `public/images/` using the same filenames, or drop new PDFs and ask Cursor to re-extract.

Home page images live in `public/images/home/sections/`.

### Unreliable Narrator video

Your trailer file (`Unreliable Narrator trailer.mov`) is too large to host directly on Vercel. Upload it to YouTube or Vimeo, then add the link to the `videos` array for `the-unreliable-narrator` in `src/content/projects.ts`.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Deploy with the default Next.js settings

## LinkedIn URL

Update the placeholder LinkedIn URL in `src/content/site.ts` if needed.
