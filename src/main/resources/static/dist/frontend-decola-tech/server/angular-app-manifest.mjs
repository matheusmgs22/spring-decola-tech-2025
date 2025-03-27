
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/users",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-IOIJYNGU.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-IOIJYNGU.js"
    ],
    "route": "/users/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-IOIJYNGU.js"
    ],
    "route": "/users/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-IOIJYNGU.js"
    ],
    "route": "/users/*/edit"
  },
  {
    "renderMode": 1,
    "redirectTo": "/users",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 921, hash: 'b463696f4e1a96d3369856755e502c9493a4d519a6b3ee2545c47679afae9224', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1066, hash: 'ff680a79e8e02db419a47113c29e7492887f0186a3c750bfdd3a887d7eecb37d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RW6E3RMN.css': {size: 392, hash: 'zO7bV0lFt0E', text: () => import('./assets-chunks/styles-RW6E3RMN_css.mjs').then(m => m.default)}
  },
};
