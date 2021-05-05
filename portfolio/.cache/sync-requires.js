
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-grad-essay-js": preferDefault(require("/home/haxibami/haxibami.github.io/portfolio/src/pages/grad_essay.js")),
  "component---src-pages-index-js": preferDefault(require("/home/haxibami/haxibami.github.io/portfolio/src/pages/index.js"))
}

