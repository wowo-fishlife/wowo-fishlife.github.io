
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/haxibami/haxibami.github.io/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-grad-essay-js": preferDefault(require("/home/haxibami/haxibami.github.io/portfolio/src/pages/grad_essay.js")),
  "component---src-pages-index-js": preferDefault(require("/home/haxibami/haxibami.github.io/portfolio/src/pages/index.js"))
}

