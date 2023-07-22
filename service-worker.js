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
    "revision": "5c80b52f318914b99296fea8d7d12796"
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
    "url": "assets/js/10.b2a9298b.js",
    "revision": "8df281d9fb6d5d61c8a1d50f10408831"
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
    "url": "assets/js/3.0b057167.js",
    "revision": "b9e16362f747d4d7fbce1520439da1d2"
  },
  {
    "url": "assets/js/4.5eca3c43.js",
    "revision": "298c77e27b98fa57ac7ac72aaea8edea"
  },
  {
    "url": "assets/js/5.c76c364b.js",
    "revision": "30273892b7aae42a31435f5379f43bce"
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
    "url": "assets/js/9.ce7056ad.js",
    "revision": "fbb78b4bbf2ae11ffe4797dde36154cc"
  },
  {
    "url": "assets/js/app.3ffc67e2.js",
    "revision": "c3216d3529b0a2de4f186b3b0312a6a4"
  },
  {
    "url": "index.html",
    "revision": "2b06f3975ead9ab6d2da614169386188"
  },
  {
    "url": "portfolio/index.html",
    "revision": "b77eb3e481b1a2b7fbaa84155599a3a1"
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
