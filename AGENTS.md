# AGENTS.md

## Project Overview
- **Project:** Tychefolio — a personal portfolio website that showcases my skills, projects, experience, education, technical interests, and contact information.
- **Product type:** Personal portfolio website / static developer website
- **Target user:** Recruiters, internship reviewers, employers, classmates, collaborators, and developers who want to view my work.
- **My skill level:** Intermediate
- **Tech stack:** Astro, TypeScript, Tailwind CSS, MDX, Astro Content Collections, reusable components, static site generation, optional React islands for small interactive sections, GitHub Pages or Vercel deployment.
- **Project status:** Active build
- **Planned domain:** tychefolio.joemtyche.com
- **Parent site/company:** joemtyche.com

## Product Direction
- Build this as a practical personal portfolio focused on clearly presenting my background, skills, projects, and experience.
- Prioritize sections that help visitors quickly understand who I am, what I can build, and what projects I have worked on.
- Keep pages focused. Avoid repeating the same personal introduction or project explanation in multiple places.
- Prefer simple language, clear labels, and easy navigation.
- Design the website around real portfolio needs: showcasing projects, linking to demos, linking to GitHub, and providing contact information.
- Avoid exaggerated marketing language. Keep the tone professional, direct, and personal.
- Explain empty states clearly when project data, blog posts, or links are missing.

## Design Direction
- **Visual reference:** `reference_website.webp`
- **Theme:** Wild western cowboy newspaper style for a developer portfolio.
- The site should feel like an old frontier newspaper, wanted poster, and editorial portfolio mixed together.
- Use parchment, newsprint, warm beige, faded tan, muted brown, dark ink, and small accent colors such as rust or muted red.
- Use strong condensed serif or western-style display typography for major headings, page titles, project names, and callouts.
- Use readable body typography for project descriptions, biography text, and contact information.
- Favor newspaper-style layouts: columns, thin divider rules, oversized headlines, image strips, labels, badges, issue metadata, and editorial blocks.
- Use western details with restraint: wanted-poster framing, stamp marks, small star or spur-like accents, ticket labels, and border rules.
- Keep the design expressive, but do not let the theme make the content hard to read.
- Use clear navigation, strong hierarchy, consistent spacing, and obvious actions.
- Make the site responsive for desktop, tablet, and mobile screens.
- Use a full-width/full-bleed layout. Do not wrap the whole page in centered `container`, `max-w-*`, or `mx-auto` layouts that create large empty side margins.
- Sections should span the viewport naturally with small internal padding for readability.
- Use filler images while the final portfolio images are not ready.
- Filler images should match the newspaper/western direction when possible: sepia portraits, project mockup placeholders, paper textures, desert or frontier details, and neutral editorial crops.
- Clearly structure image paths so final images can be swapped in later without changing page layouts.

## Collaboration Note
- The project owner may edit the code while work is happening.
- Always check `git status --short` before editing.
- Do not overwrite or revert changes made outside the current task.

## Planned Information Architecture
- **Home**
  - Hero section, short introduction, profile image, call-to-action buttons, featured highlights.
- **About**
  - Personal background, current learning goals, career interests, and short biography.
- **Skills**
  - Programming languages, frameworks, tools, platforms, and technologies.
- **Projects**
  - Featured projects, project images, descriptions, tech stack, GitHub links, live demo links, and project status.
- **Experience**
  - Internship experience, relevant work, academic projects, freelance work, or organization involvement.
- **Education**
  - School, course, relevant coursework, achievements, and certifications.
- **Blog / Notes**
  - Optional MDX-based articles, learning notes, project writeups, and technical reflections.
- **Contact**
  - Email, GitHub, LinkedIn, personal links, and simple contact information.

## Commands
- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Test:** `npm test`
- **Lint:** `npm run lint`

## Do
- Read existing code before modifying anything.
- Match existing patterns, naming, and style.
- Handle errors clearly. Do not hide failures.
- Keep changes small and scoped to what was asked.
- Run the relevant checks after changes.
- Ask clarifying questions before guessing when the risk is high.
- Keep portfolio content accurate, readable, and easy to update.
- Prefer accessible, keyboard-friendly UI for navigation, buttons, links, cards, and forms.
- Store repeated content such as projects, skills, experience, and links in data or content files when practical.
- Prioritize SEO metadata, responsive layout, fast loading, and clean semantic HTML.
- Preserve the western newspaper theme through layout, typography, color, borders, and image treatment.
- Use placeholder or filler images until final custom images are available.

## Don't
- Install new dependencies without asking.
- Delete or overwrite files without confirming.
- Hardcode secrets, API keys, credentials, or private personal data.
- Rewrite working code unless explicitly asked.
- Push, deploy, or force-push without permission.
- Make changes outside the scope of the request.
- Add CRM, dashboard, authentication, database, admin panel, or backend features unless explicitly requested.
- Use fake claims, fake experience, or misleading project descriptions.
- Add heavy animations or effects that make the site slower or harder to read.
- Let decorative western styling overpower readability, accessibility, or navigation.
- Treat filler images as final project evidence or make fake claims based on placeholder images.

## When Stuck
- If a task is large, break it into steps and confirm the plan first.
- If you cannot fix an error in 2 attempts, stop and explain the issue.
- Include what you tried, what failed, and what you recommend next.

## Testing
- Run existing tests after any change.
- Add at least one test for new features when practical.
- Never skip or delete tests to make things pass.
- For portfolio workflows, test navigation, responsive layout, project cards, external links, image loading, empty states, and contact-related UI.
- Check that important pages have useful titles, descriptions, and accessible headings.
- Check that large display headlines still fit on mobile and do not overlap images or adjacent content.

## Git
- Keep commits small and focused.
- Use descriptive commit messages.
- Never force push.
- Do not revert unrelated user changes.

## Response Style
- Always respond with clear and concise messages.
- Use plain English when explaining to the user.
- Avoid long sentences, complex words, or long paragraphs.
- Mention changed files and checks run.
