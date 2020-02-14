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
    "revision": "1cfdba361ff9e6fd4345c0df739c428d"
  },
  {
    "url": "assets/css/0.styles.46b106d8.css",
    "revision": "ad48ff7693aa83903121b379733fec89"
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
    "url": "assets/js/2.f3188073.js",
    "revision": "9900aabac3e2d6a514ecaa0a7995fbf9"
  },
  {
    "url": "assets/js/3.839480b0.js",
    "revision": "b669db2a5f9dc4c1ed8fb8683eaff07e"
  },
  {
    "url": "assets/js/4.9d2a2f80.js",
    "revision": "182249547c3157aa4845cfa03b1264e9"
  },
  {
    "url": "assets/js/5.9e2ea973.js",
    "revision": "1298bbe0390acccad959404630e61d95"
  },
  {
    "url": "assets/js/6.12c5d880.js",
    "revision": "51837e476c5267960a2042eba44787cb"
  },
  {
    "url": "assets/js/7.94b641fd.js",
    "revision": "7ac536f9f217f42532691486363a99c5"
  },
  {
    "url": "assets/js/8.4892a3f9.js",
    "revision": "6b2e3df91fd99ac028d159cf39407ab5"
  },
  {
    "url": "assets/js/app.5e5a74f9.js",
    "revision": "26f93ee0efc288c6d1d1be8eae02ebb4"
  },
  {
    "url": "index.html",
    "revision": "2622ef37f87a595942d151ac273bf02f"
  },
  {
    "url": "portfolio/index.html",
    "revision": "b5faf0343f24ba96486ffad0967c5edd"
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
