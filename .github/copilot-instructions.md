# Repository instructions

## Build, test, and lint

Use Node 20 for the CRA 4 / Webpack 4 toolchain; the `start` and `build` scripts set the legacy OpenSSL provider needed by Webpack.

- `npm start` — run the development server.
- `npm run build` — create the production site in `build/`.
- `npm run sync:build` — copy hand-maintained publishing files into `build/` after a build.
- `npm test -- --watchAll=false` — run the Jest suite once.
- `npm test -- --watchAll=false --runTestsByPath src/pages/Home.test.js` — run one test file (replace with the target file).
- `npm test -- --watchAll=false --runTestsByPath src/pages/Home.test.js -t "test name"` — run a named test in that file.

There are no checked-in test files or standalone lint script. The project uses the `react-app` and `react-app/jest` ESLint configurations; CRA checks lint during its build.

For publishing, `npm run deploy` runs the build and sync, then force-pushes `build/` to the `master` Pages branch. See `PUBLISHING.md` before changing this flow. `node_modules/` is tracked, so stage specific changed paths rather than using `git add -A`.

## Architecture

`src/index.js` mounts the React app and loads the shared stylesheet and Bootstrap/Slick CSS. `src/App.js` owns the active section: its tab list feeds `NavigationTabBar`, and its switch renders the matching page. Pages are lazy-loaded inside a shared `Suspense` boundary; the navigation and footer surround the selected page. Adding a section therefore involves updating both the tab list and the page switch in `App.js`.

The page modules in `src/pages/` hold portfolio content and compose reusable cards and headings from `src/components/`. Most content is defined directly in page JSX or local arrays rather than fetched from an API. Shared layout and visual rules live in `src/index.css`; Bootstrap components provide much of the grid and responsive layout.

## Repository conventions

- Import bundled images from `src/assets/`. For portfolio images, keep matching `.webp` and `.jpg` versions and render them with `<picture>`, using WebP as the source and JPEG as the fallback.
- Treat `build/` as generated output. Update source files or the hand-maintained files at the repository root, then rebuild and run `npm run sync:build`; do not make fixes only inside `build/`. The optional `--mirror` sync also updates historical root copies of CRA output, so use it only when those copies need refreshing.
- The repository root is the source for hand-maintained deployment files such as `CNAME`, résumé files, favicons, and media. `public/` contains CRA public assets. Keep both in sync with the publishing flow when changing published resources.
