// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-grad-essay-js": () => import("./../../../src/pages/grad_essay.js" /* webpackChunkName: "component---src-pages-grad-essay-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

