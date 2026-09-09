// Build-time prerender: renders each route to static HTML so crawlers and
// social scrapers get real content instead of an empty <div id="root">.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "dist");

// Keep in sync with the <Route> list in src/App.tsx and public/sitemap.xml.
const staticRoutes = [
  "/", "/about", "/services", "/packages", "/industries",
  "/success-stories", "/calculator", "/blog", "/contact",
];

// Blog detail pages, read straight from the same source the app uses.
const blogSrc = fs.readFileSync(path.join(__dirname, "src/data/blogData.ts"), "utf8");
const blogRoutes = [...blogSrc.matchAll(/^\s*id:\s*"([^"]+)"/gm)].map((m) => `/blog/${m[1]}`);

const routes = [...staticRoutes, ...blogRoutes];

const { render } = await import("./dist-ssr/entry-server.js");

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

// Drop the placeholder head tags from the shell — each route supplies its own.
// Leaving them in is what produced two <title> tags on every page.
const shell = template
  .replace(/^\s*<title data-rh="true">[\s\S]*?<\/title>\s*$/gm, "")
  .replace(/^\s*<(?:meta|link)[^>]*\sdata-rh="true"[^>]*\/?>\s*$/gm, "")
  .replace(/^\s*<meta\s*\n\s*data-rh="true"[\s\S]*?\/>\s*$/gm, "");

let ok = 0;
const failed = [];

for (const url of routes) {
  try {
    const { html: rawHtml, head: helmetHead } = render(url);

    // React 19 treats <title>/<meta>/<link>/ld+json as hoistable and emits them
    // at the front of the render output rather than handing them to Helmet.
    // Lift them out of the body string and into the real <head>.
    const HOISTABLE =
      /^\s*(?:<(?:link|meta)\b[^>]*?\/?>|<title\b[^>]*>[\s\S]*?<\/title>|<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>)/;

    let html = rawHtml;
    const hoisted = [];
    for (;;) {
      const m = html.match(HOISTABLE);
      if (!m) break;
      hoisted.push(m[0].trim());
      html = html.slice(m[0].length);
    }

    const head = [helmetHead, hoisted.join("\n    ")].filter(Boolean).join("\n    ");

    const page = shell
      .replace("</head>", `  ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outDir = url === "/" ? DIST : path.join(DIST, url);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), page);

    const headHtml = page.slice(0, page.indexOf("</head>"));
    const bodyHtml = page.slice(page.indexOf("</head>"));
    const titles = (headHtml.match(/<title/g) || []).length;
    const canon = (headHtml.match(/rel="canonical"/g) || []).length;
    const strayTitle = /<title/.test(bodyHtml);
    if (titles !== 1 || canon !== 1 || strayTitle) {
      failed.push(
        `${url} — head: ${titles} <title>, ${canon} canonical` +
          (strayTitle ? "; STRAY <title> in body" : ""),
      );
    } else {
      ok++;
      console.log(`  ✓ ${url.padEnd(46)} ${(page.length / 1024).toFixed(0)} kB`);
    }
  } catch (err) {
    failed.push(`${url} — ${err.message}`);
  }
}

console.log(`\nprerendered ${ok}/${routes.length} routes`);
if (failed.length) {
  console.error("FAILED:\n  " + failed.join("\n  "));
  process.exit(1);
}
