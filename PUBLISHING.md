# Publishing

How the site is built, where it is published, and what to do after changing content.

Custom domain: `https://www.premneupane.com.np` (`CNAME` at the repo root).

## Repo layout

| Branch | Role |
| --- | --- |
| `main` | Source of truth. `src/`, `public/`, `package.json`, and committed build artifacts. |
| `master` | The branch GitHub Pages actually serves. |

There is no CI in this repo today. Nothing builds on push; the published site only changes when
someone runs the deploy command below.

## The build

Node 20 with the legacy OpenSSL provider is required. Webpack 4 (inside `react-scripts` 4) uses an
MD4 hash that OpenSSL 3 refuses, so the flag is mandatory:

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm use 20

npm run build     # -> build/
npm run sync:build
```

`package.json` already sets `NODE_OPTIONS=--openssl-legacy-provider` in the `start` and `build`
scripts, so a plain `npm run build` is enough once Node 20 is active. Node 16 also works but has to
be selected explicitly with `nvm use 16`.

### Why `sync:build` exists

`react-scripts build` empties `build/` first. That deletes files CRA does not generate but which
must be published:

- `CNAME` (the custom domain; without it the site is served from `prem-neupane.github.io`)
- `404.html` (SPA fallback, from `rafgraph/spa-github-pages`)
- `resume.pdf` and `resume.html`
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, `google9c61764a2e1e04d7.html`
- the extra `favicons/` and `media/` files that are not in `public/`

`npm run sync:build` copies those from the repo root into `build/`, then asserts that
`build/index.html`, `build/static/`, `build/CNAME` and `build/resume.pdf` all exist. It exits
non-zero rather than let a broken build get published. Add `--mirror` to also copy `build/`
back into the repo root, which is how the historical copies of `index.html`, `404.html`,
`asset-manifest.json` and `static/` at the root of `main` are kept in step.

## Flow A: gh-pages (current, use this)

```bash
npm run deploy
```

`predeploy` runs the build and the sync, then `gh-pages` force-pushes `build/` to `master`:

```
node ./node_modules/gh-pages/bin/gh-pages.js -b master -d build
```

Note the scripts call the binaries through `node <path>` instead of `node_modules/.bin/gh-pages`.
`node_modules` is committed to this repository and its files have lost their executable bit, so
`sh: gh-pages: Permission denied` is the usual failure. Fixing it with `chmod -R +x node_modules`
would rewrite the mode of ~48k tracked files; calling `node` directly avoids that entirely.

Consequences of this flow, all of them intended:

- `master` is replaced by the contents of `build/`, so `src/`, `node_modules/` and
  `package.json` disappear from `master`. They remain on `main`, which is the branch you edit.
- The published site becomes a clean copy of `build/` instead of a full copy of the repository.
- `gh-pages` force-pushes. If the live site looks wrong afterwards, redeploy rather than trying to
  hand-patch `master`.

Verify after deploying:

```bash
curl -sI https://www.premneupane.com.np/ | head -1
curl -s  https://www.premneupane.com.np/ | grep -o '<title>[^<]*</title>'
curl -sI https://www.premneupane.com.np/resume.pdf | head -1
```

## Flow B: GitHub Actions (no local push needed)

Add `.github/workflows/deploy.yml` and switch Settings → Pages → Source to **GitHub Actions**.
The workflow has to run the same sync step, otherwise the published site loses the `CNAME` and the
résumé:

```yaml
name: Deploy Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install
        run: |
          npm install --no-save --legacy-peer-deps
          chmod +x node_modules/.bin/react-scripts

      - name: Build
        env:
          CI: true
          NODE_OPTIONS: --openssl-legacy-provider
        run: npm run build

      - name: Sync hand-maintained files into build/
        run: node ./scripts/sync-build.js

      - uses: actions/configure-pages@v5

      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Two things about the checkout in Flow B. The committed `node_modules` restores without its
executable bits (Git stores only one mode bit, and the working copy here was materialised without
it), so the `chmod` above is required, and `npm install` should be a fallback only: it rewrites
48k files. If you commit a `package-lock.json`, use `npm ci` and drop the `chmod` for the
installed tree, but keep `sync:build` in the pipeline.

## After changing content

1. `npm run build && npm run sync:build`
2. `npm run deploy`
3. `curl` the three URLs above
4. If a page changed, `git add` the specific paths and commit to `main`. Never `git add -A` here:
   `node_modules` and `node_modules/.cache` are tracked, so an accidental add produces a diff of
   tens of thousands of files.

## Assets

Every image is committed twice, as `.webp` and `.jpg`, under `src/assets/webp/` and
`src/assets/jpg/`, and rendered as a `<picture>` element with a `<source type="image/webp">` and an
`<img>` fallback. Add both formats for any new image.

`public/` is the source directory for the build; `media/`, `favicons/`, `resume.pdf` and
`resume.html` at the repo root are the published copies that `sync:build` pushes into `build/`.
Change them in the root and re-sync, do not edit them inside `build/`.
