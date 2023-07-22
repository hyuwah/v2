/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d17838ef773b462118ca67a7e000faf"
  },
  {
    "url": "assets/css/0.styles.394b1c67.css",
    "revision": "93f4627a69f964da8d5c60e4c55d215d"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.586090b3.ttf",
    "revision": "586090b38a233ce0201fb221eb117a36"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.9219a80f.woff",
    "revision": "9219a80f0478e0bfdee5f4c753ce8535"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.b661c28b.eot",
    "revision": "b661c28b0f28606a96722ad2d9588b70"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.bca3a187.woff2",
    "revision": "bca3a1873ac988faff0817eca96b2d86"
  },
  {
    "url": "assets/js/10.346b6f7b.js",
    "revision": "1e8d407239e87aae5e80c851d220059f"
  },
  {
    "url": "assets/js/11.218c0b05.js",
    "revision": "c7ae75b93998b2577bbd9d45dbee9a4e"
  },
  {
    "url": "assets/js/2.bb39de16.js",
    "revision": "9c3082d2c35f8a661453ed8929b30ef2"
  },
  {
    "url": "assets/js/3.33b57e8d.js",
    "revision": "7d1bec6045873e97c71e3311c776e7fd"
  },
  {
    "url": "assets/js/4.dd3435cd.js",
    "revision": "6a96195d68e9237eb6bedb78dd87ba6e"
  },
  {
    "url": "assets/js/5.fcdbae6a.js",
    "revision": "c29148188ed69460006d12ceef2ef734"
  },
  {
    "url": "assets/js/6.74dc5f03.js",
    "revision": "171e0b45b4ec4ee69053f50523b06538"
  },
  {
    "url": "assets/js/7.5fe90a29.js",
    "revision": "0c3496b08ae58719a6e391ecd034391b"
  },
  {
    "url": "assets/js/8.1de13640.js",
    "revision": "f4dc178e3ef50289030fc80ad39fd15b"
  },
  {
    "url": "assets/js/9.cf8b8a2a.js",
    "revision": "95d6d4c9badaa8e3158a6542a7809217"
  },
  {
    "url": "assets/js/app.018540e1.js",
    "revision": "4a42426d5e2961c28c80235962b8f02b"
  },
  {
    "url": "index.html",
    "revision": "13611d3baec2188bdb20d42a96fedf60"
  },
  {
    "url": "portfolio/index.html",
    "revision": "b38ca9b523380be30d19074db2b0054f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
