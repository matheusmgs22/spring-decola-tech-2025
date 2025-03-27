
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
      "chunk-SW2HCYYG.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SW2HCYYG.js"
    ],
    "route": "/users/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SW2HCYYG.js"
    ],
    "route": "/users/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SW2HCYYG.js"
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
    'index.csr.html': {size: 921, hash: '57fb193f43c2df9d04586642525c46dc575ca4ab013db371f3702e18e9c71392', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1066, hash: '9d68ed3972e91eefba11b7ac8bc5bcaec0704582c9ff6480b132275445ea3ea6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RW6E3RMN.css': {size: 392, hash: 'zO7bV0lFt0E', text: () => import('./assets-chunks/styles-RW6E3RMN_css.mjs').then(m => m.default)}
  },
};
