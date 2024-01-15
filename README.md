# UW Interdisciplinary Honors Portfolio

[![Build Website](https://github.com/kjy5/honors-portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/kjy5/honors-portfolio/actions/workflows/build.yml)
[![Deploy to GitHub Pages](https://github.com/kjy5/honors-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kjy5/honors-portfolio/actions/workflows/deploy.yml)
[![Reformat and Lint](https://github.com/kjy5/honors-portfolio/actions/workflows/reformat-and-lint.yml/badge.svg)](https://github.com/kjy5/honors-portfolio/actions/workflows/reformat-and-lint.yml)
[![Dependency Review](https://github.com/kjy5/honors-portfolio/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/kjy5/honors-portfolio/actions/workflows/dependency-review.yml)
[![DeepSource](https://app.deepsource.com/gh/kjy5/honors-portfolio.svg/?label=active+issues&show_trend=true&token=yG-EGVHpFOii2woS979G59I5)](https://app.deepsource.com/gh/kjy5/honors-portfolio/)

This repository holds code for my honors portfolio.

## To see the website

Go [here](https://kjy5.github.io/honors-portfolio/)

## For documentation

See [the wiki](https://github.com/kjy5/honors-portfolio/wiki)

## To setup for development

1. Install `npm` (probably by installing `node`) or alternatives (like `pnpm`)
2. Clone the repo
3. `npm i` to install dependencies
4. Run code with development server with `npm run dev`
5. Preview production build with `npm run preview`
6. Just build for production `npm run build` (output is in `/dist` folder)

To compute artifact metas, use
the [Artifact Meta Manager](https://kjy5.github.io/artifact-meta-manager/).

**NOTE:** GitHub Actions have been set up to build and deploy to GitHub Pages,
so a production build locally is not needed.
