# Portfolio v2


## 👋 Introduction

This is the repository for my portfolio (version 2). I have created this portfolio with [create-astro](https://astro.build/) and published it to Github Pages. A live demo can be viewed here [here](https://jun-low.github.io/).

## 🧑‍🚀 Functionality

All functionality has been built of November 23rd, 2022. I have plans to add more micro-interactions and projects in the future, such as improving a11y, adding parallax scrolling for mobile, and adding more intro page transitions.

Features:

- ✅ Tailwind CSS for styling
- ✅ Themeable Dark mode
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs
- ✅ OpenGraph data for social media sharing
- ✅ Sitemap support
- ✅ Responsive support (layout, images, typography)
- ✅ [Astro Prettier](https://github.com/withastro/prettier-plugin-astro) setup

## 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

```bash
├── public/
├── src/
│   ├── assets/ # Images for the website
│   ├── components/ # File used for DOM rendering
│   ├── icons/ # Icons for the website
│   ├── layouts/ # Shared layout for the website
│   └── pages/ # Main page
│   └── styles/ # Theme css with light and dark mode
├── .prettierrc.json # Lint styles config file
├── astro.config.mjs # Astro config tools file
├── package-lock.json # Npm package manager file
├── package.json # Npm package manager file
├── README.md - This file.
├── tailwind.config.cjs # Tailwind config file
└── tsconfig.json # Typescript config
```

Astro looks for `.astro` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

#### Running in Development Mode

Clone the repository before running in development mode: `git clone git@github.com:jun-low/portfolio-v2.git`

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## ✍️ Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/) and [Astro Moon Landing](https://github.com/mhyfritz/astro-landing-page).
