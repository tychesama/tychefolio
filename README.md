# Tychefolio

Tychefolio is a personal portfolio website for presenting my skills, projects, experience, education, technical interests, and contact information.

The site is planned as a responsive developer portfolio for Joem Idpan, full name Jose Emmanuel Idpan, with a wild western cowboy newspaper style. It should help recruiters, internship reviewers, employers, classmates, collaborators, and developers quickly understand who I am and what I can build.

## Planned Stack

- Astro
- TypeScript
- Tailwind CSS
- MDX
- Astro Content Collections
- Reusable components
- Static site generation
- Optional React islands for small interactive sections

## Planned Domain

`tychefolio.joemtyche.com`

Parent site: `joemtyche.com`

## Site Sections

- Home: short introduction, profile image, call-to-action links, featured highlights
- About: background, current learning goals, career interests, and biography
- Skills: languages, frameworks, tools, platforms, and technologies
- Projects: featured projects, screenshots, descriptions, tech stack, GitHub links, demo links, and status
- Experience: internships, work, academic projects, freelance work, or organization involvement
- Education: school, coursework, achievements, and certifications
- Blog / Notes: optional MDX articles, learning notes, project writeups, and technical reflections
- Contact: email, GitHub, LinkedIn, personal links, and simple contact information

## Current Portfolio Data

The current portfolio content is stored in:

```text
data.json
```

This file currently includes:

- 12 projects
- 3 favorite projects
- 18 technical skills
- 13 tools
- 13 soft skills
- 1 experience entry
- 10 certification, participation, volunteer, or organization entries

Featured projects marked with `favorite: true`:

- Motobai Inventory and Sales Management System
- Tyche Monorepo
- Calasense

Primary project categories from the data:

- Web systems and apps
- Mobile apps
- Desktop games and tools
- Automation and computer vision
- Machine learning
- IoT and embedded projects
- Portfolio and blog work

The first build should read from `data.json` directly or move the same structure into `src/data/portfolio.json`. If the data is moved, keep the field names stable unless the components are updated at the same time.

## Design Direction

The site should feel like an old frontier newspaper, wanted poster, and editorial portfolio mixed together. The look should be bold and memorable, but still readable, accessible, and easy to navigate.

Key visual ideas:

- Parchment, newsprint, warm beige, faded tan, muted brown, and dark ink colors
- Small accent colors such as rust, muted red, or aged gold
- Oversized western or condensed serif headlines
- Thin divider rules, column layouts, badges, labels, stamps, and editorial blocks
- Wanted-poster framing for featured sections or project cards
- Sepia image treatment and newspaper-style image crops
- Strong hierarchy for projects, skills, experience, and contact actions
- Full-width sections without a centered max-width page container

Existing assets should be used before adding new ones. The current visual reference is stored as:

```text
reference_website.webp
```

Filler images are allowed during the build. They should be placed in predictable asset folders so final custom images can be swapped in later without changing the layouts.

Suggested filler image types:

- Sepia portraits
- Project mockup placeholders
- Paper textures
- Desert or frontier details
- Neutral editorial crops

Several `data.json` entries already point to `/assets/...` paths. Keep that convention for the Astro build and place static files under `public/assets/`.

## Getting Started

This repository now contains the first Astro implementation of the portfolio. Use the commands below after dependencies are installed.

```bash
npm install
npm run dev
npm run build
npm run preview
```

If tests and linting are configured:

```bash
npm test
npm run lint
```

## Suggested Project Structure

```text
src/
  components/
    CertificationList.astro
    ExperienceSection.astro
    Header.astro
    Hero.astro
    ProjectCard.astro
    SkillsBoard.astro
  content/
    blog/
    projects/
  data/
    portfolio.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  assets/
    certs/
    job/
    placeholders/
    projects/
data.json
```

## Current Implementation

The first website build is a single-page Astro portfolio with:

- Sticky navigation
- Western newspaper hero section
- Wanted-poster style profile placeholder
- Favorite project ticker
- Portfolio stats from `data.json`
- Project cards generated from all project entries
- Skills grouped by technical skills, tools, and soft skills
- Experience section
- Certification and organization notices
- Contact section
- Temporary filler images under `public/assets/placeholders/`

The project card UI currently uses placeholder images so the layout does not break while final project screenshots are being prepared. The original image paths in `data.json` are preserved for later.

## Data Notes

Project entries include names, tags, descriptions, GitHub links, colors, image paths, tech stacks, collaborators, deployment links, and documentation links.

Some project and certification entries have empty `images`, `documentation`, or link fields. The UI should handle those as normal empty states:

- Use a western newspaper filler image when `images` is empty.
- Hide demo, documentation, certificate, or extra links when the value is missing.
- Show collaborators only when the object has entries.
- Use the `favorite` flag to choose home page highlights.
- Use `tags` to power filters such as platform, type, status, collaboration, language, framework, tool, and domain.
- Use the `color` value as a small accent only, so it does not fight the western newspaper palette.

## Content Guidelines

- Keep the writing clear, accurate, and easy to update.
- Avoid fake claims, exaggerated marketing language, or misleading project descriptions.
- Store repeated content such as projects, skills, experience, and links in data or content files when practical.
- Explain empty states clearly when projects, posts, images, or links are missing.
- Prioritize SEO metadata, semantic HTML, accessibility, fast loading, and responsive behavior.
- Keep the western newspaper theme consistent through typography, layout, colors, borders, and image treatment.
- Treat filler images as temporary assets only. Do not use them to imply fake project details or fake experience.

## Build Roadmap

1. Install dependencies.
2. Run `npm run dev` and review the first-page layout.
3. Replace placeholder images with final custom images.
4. Add dedicated pages for About, Projects, Skills, Experience, Education, Certifications, and Contact if needed.
5. Add filters or grouped views for project type, platform, tech stack, and domain.
6. Add optional MDX blog or notes support.
7. Check accessibility, responsive layout, metadata, image loading, and production build output.
8. Deploy to GitHub Pages or Vercel.

## Status

Active build.
