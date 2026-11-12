# Kevin Xu — Portfolio Website

A responsive, accessible, single-page portfolio inspired by the **two-column, sticky-introduction layout** of [Brittany Chiang's portfolio](https://brittanychiang.com/). All site code, illustrations, copy, colors, and visual details in this project are newly written.

## What is included

- Sticky left-hand intro / scrolling right-hand content on desktops
- Mobile-friendly navigation and responsive layout
- About, Experience, Selected Work, Engineering Approach, and Contact sections
- Scroll-aware active navigation and a scroll progress indicator
- Keyboard-accessible links, visible focus styles, skip link, and reduced-motion support
- Subtle pointer spotlight and project-card hover effects
- Metadata, social preview image, favicon, and Vercel configuration
- **Zero dependencies**: pure HTML, CSS, and JavaScript; no Node.js or build step needed

## Run it locally

**Fastest option:** open `index.html` in your browser.

For a local web server (optional):

```bash
# In the project folder (requires Python 3)
python -m http.server 3000
```

Visit http://localhost:3000.

> You can also double-click `index.html` to preview locally because CSS and JavaScript assets use relative paths.

## Deploy on Vercel (using GitHub)

1. Create a **new GitHub repository** (e.g. `kevin-portfolio`).
2. Upload all the files and the `assets/` folder to the repository root.
3. Open https://vercel.com/new and import that repository.
4. Framework Preset: **Other** (not Next.js).
5. Root Directory: `./`.
6. Build Command: **leave empty** (override it if your dashboard automatically adds a command).
7. Output Directory: **leave blank / default** (the site lives in the repository root).
8. Click **Deploy**.

Vercel can serve this project as a static website without installing dependencies.

**Alternative:** install [Vercel CLI](https://vercel.com/docs/cli), then run `vercel` from this folder.

## Where to edit content

| Want to change... | Edit... |
| --- | --- |
| Name, headline, About text | `index.html` (intro and About sections) |
| Work history | `index.html` (`#experience` section) |
| Case studies | `index.html` (`#work` section) |
| LinkedIn, GitHub, website | `index.html` (search for URLs) |
| Colors, typography, layout | `assets/styles.css` (top-level `:root` variables) |
| Interactive behavior | `assets/script.js` |
| Browser tab icon | `assets/favicon.svg` |
| Social share image | `assets/og-cover.png` |

### Add your resume link (optional)

1. Put your approved public resume in the project root as `resume.pdf`.
2. Add a link to `index.html` where you'd like it displayed:

```html
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View résumé ↗</a>
```

**Do not upload confidential work examples, unapproved employer assets, or an unreviewed resume.**

### Use your own custom domain

In Vercel, open **Project → Settings → Domains** and add your domain. Update the `og:url` and social metadata if you add it in the future.

## A note about the content

The portfolio uses broadly described, resume-based experience from Netflix, AWS, and Cisco. The three selected-work cards are **illustrative professional case studies**, not claims of public open-source repositories or external demos. Verify the wording against your current resume before publishing.

## Credits

The visual structure is inspired by [Brittany Chiang](https://brittanychiang.com/). This is an independently written implementation, not a fork or copy of her source code.
