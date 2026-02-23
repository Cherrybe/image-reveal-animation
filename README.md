# GSAP Image Reveal Demo

A scroll-driven image reveal animation built with Next.js, React, Tailwind CSS, and GSAP ScrollTrigger.

The demo starts with a large center image ("mother") and progressively reveals surrounding images ("children") as the user scrolls.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build production bundle
- `npm run start` — Run production server
- `npm run lint` — Run ESLint

## Project Structure

- `app/page.tsx` — Main page entry
- `components/ImageStackReveal.tsx` — Grid layout and image markup
- `components/useImageRevealAnimation.ts` — GSAP animation + ScrollTrigger timeline
- `public/` — Image assets (`main.jpg`, `img1.jpg` ...)

## How the Animation Works

1. `ImageStackReveal` renders a tall scroll section (`h-[300vh]`) with the image grid.
2. `useImageRevealAnimation` registers a GSAP context scoped to the section.
3. Initial states are set:
	- Children start hidden (`opacity: 0`, reduced scale).
	- Mother starts enlarged (`scale: 3`).
4. A ScrollTrigger timeline (with `scrub` + `pin`) animates:
	- Mother shrinking into place.
	- Children fading/scaling in with stagger.

## Customization

- Change image layout in `components/ImageStackReveal.tsx`.
- Adjust timing and feel in `components/useImageRevealAnimation.ts`:
  - `end` for scroll distance
  - `stagger` for reveal pacing
  - `scale` values for zoom intensity

## Notes

- Ensure all referenced images exist in `public/`.
- This demo uses standard `<img>` tags; you can switch to `next/image` if you want image optimization behavior.
