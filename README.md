# Cruzian

Marketing site for Cruzian — B2B lead generation and growth systems, Jacksonville, FL.
Live at https://www.thecruzian.com

## Stack
React 19 + TypeScript, Vite, Tailwind, React Router. Deployed on Vercel.

## Commands
```
npm run dev     # local dev server
npm run build   # client build + SSR build + prerender all routes
npm run lint    # eslint
```

`npm run build` prerenders every route to static HTML so crawlers and social
scrapers receive real content. It fails the build if any route renders without
exactly one <title> and one canonical in <head>.
