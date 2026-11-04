# kid7ho.github.io

Personal website of Jin Myoung Hyun, built with Next.js and exported as a static site.

## Update content

Everything shown on the site lives in `src/content/site.ts`, in English and Korean.

- Add a project: add an item to `projects`.
- Add a photo: put the image in `public/` and set `profile.photo`.
- Add LinkedIn: set `profile.linkedin`.
- Update the resume: export the PDFs from Overleaf into `public/resume/`.

## Run locally

```bash
npm install
npm run dev
```

Pushing to `main` builds and deploys the site through GitHub Actions.
