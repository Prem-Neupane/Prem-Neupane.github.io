/**
 * Re-syncs the hand-maintained files into build/ after `react-scripts build`.
 *
 * `react-scripts build` empties build/ first, which deletes files that CRA does
 * not generate but that must be published: CNAME (custom domain), resume.pdf,
 * resume.html, sitemap.xml, the extra favicons and media/. Without this step a
 * `gh-pages -b master -d build` publish loses the custom domain and the resume.
 *
 * Usage:  node ./scripts/sync-build.js            # repo root -> build/
 *         node ./scripts/sync-build.js --mirror   # also mirror build/ back to the repo root
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const build = path.join(root, "build");
const mirror = process.argv.includes("--mirror");

if (!fs.existsSync(build)) {
  console.error("build/ does not exist. Run `npm run build` first.");
  process.exit(1);
}

const copyFile = (from, to) => {
  const src = path.join(root, from);
  if (!fs.existsSync(src)) {
    console.warn(`  skip   ${from} (not found)`);
    return 0;
  }
  fs.mkdirSync(path.dirname(path.join(root, to)), { recursive: true });
  fs.copyFileSync(src, path.join(root, to));
  console.log(`  copy   ${from} -> ${to}`);
  return 1;
};

const copyDir = (from, to) => {
  const src = path.join(root, from);
  if (!fs.existsSync(src)) {
    console.warn(`  skip   ${from}/ (not found)`);
    return 0;
  }
  fs.cpSync(src, path.join(root, to), { recursive: true });
  console.log(`  copy   ${from}/ -> ${to}/`);
  return 1;
};

console.log("syncing hand-maintained files into build/");

// must exist for the site to work at all
const required = ["CNAME", "resume.pdf"];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error(`  FATAL  ${file} is missing from the repo root`);
    process.exit(1);
  }
}

copyFile("CNAME", "build/CNAME");
copyFile("404.html", "build/404.html");
copyFile("resume.pdf", "build/resume.pdf");
copyFile("resume.html", "build/resume.html");
copyFile("sitemap.xml", "build/sitemap.xml");
copyFile("robots.txt", "build/robots.txt");
copyFile("site.webmanifest", "build/site.webmanifest");
copyFile("favicon.ico", "build/favicon.ico");
copyFile("google9c61764a2e1e04d7.html", "build/google9c61764a2e1e04d7.html");
copyDir("favicons", "build/favicons");
copyDir("media", "build/media");

// sanity check: the publish target must have an entry point
for (const file of ["index.html", "static", "CNAME", "resume.pdf"]) {
  if (!fs.existsSync(path.join(build, file))) {
    console.error(`  FATAL  build/${file} is missing, refusing to publish`);
    process.exit(1);
  }
}

if (mirror) {
  console.log("mirroring build/ back into the repo root");
  fs.rmSync(path.join(root, "static"), { recursive: true, force: true });
  copyDir("build/static", "static");
  copyFile("build/index.html", "index.html");
  copyFile("build/404.html", "404.html");
  copyFile("build/asset-manifest.json", "asset-manifest.json");
}

console.log("done");
