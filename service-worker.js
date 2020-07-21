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
    "revision": "b07ba6551814fed862ee9131b39bd187"
  },
  {
    "url": "assets/css/0.styles.8e8e907e.css",
    "revision": "340672e634f448c53ae85125077bbffb"
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
    "url": "assets/js/10.45f36da2.js",
    "revision": "4416e17b780ec7ec3dc9f49602539702"
  },
  {
    "url": "assets/js/11.6968a7df.js",
    "revision": "8201206f64068f5a80de91e48ddf15d2"
  },
  {
    "url": "assets/js/2.16791500.js",
    "revision": "37d19423aba1761bcf8d058b0836e694"
  },
  {
    "url": "assets/js/3.5e49da9a.js",
    "revision": "d1a072b77acad32107fb4fdf56932bb2"
  },
  {
    "url": "assets/js/4.1529ab11.js",
    "revision": "4edaad7cfeae28f363d5382f61ee66db"
  },
  {
    "url": "assets/js/5.a84406d6.js",
    "revision": "c0fe52bbac860a62170b13e441bc379f"
  },
  {
    "url": "assets/js/6.448a09a1.js",
    "revision": "e1a804df170862b50ac548e3781f3a5b"
  },
  {
    "url": "assets/js/7.c168f0c2.js",
    "revision": "a979366cc59343b84b8b287b7eebb2da"
  },
  {
    "url": "assets/js/8.02e188d0.js",
    "revision": "95a16fe08b27e5dcdb8a106387c0c0b9"
  },
  {
    "url": "assets/js/9.bd751bf7.js",
    "revision": "d357081902ef3b7444085e032f8014b8"
  },
  {
    "url": "assets/js/app.186beef1.js",
    "revision": "14803a7a1abf69f6c15504f77f678edd"
  },
  {
    "url": "index.html",
    "revision": "b3a783a41043de6308c4ad09a993ef59"
  },
  {
    "url": "portfolio/index.html",
    "revision": "a8372abde4c5ca31d8cefc5bf71a6014"
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
