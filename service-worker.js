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
    "revision": "1ecf55bbf0a23bab8647a93118ccb7f9"
  },
  {
    "url": "assets/css/0.styles.f3d145e1.css",
    "revision": "06430d798a7f283713f5b6c71abb8d20"
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
    "url": "assets/js/10.3b53249c.js",
    "revision": "6886904916e33f628862b35a6893e638"
  },
  {
    "url": "assets/js/11.bfc79b0c.js",
    "revision": "5e5f3e46497b436e2541537b5a4dfc1e"
  },
  {
    "url": "assets/js/2.7b701b53.js",
    "revision": "a28fe4ba754ade457d63462aa3aabb17"
  },
  {
    "url": "assets/js/3.8f924098.js",
    "revision": "32a039aa7e5e0d51b9318f9328cdbb04"
  },
  {
    "url": "assets/js/4.3773e22b.js",
    "revision": "6e95bbde98ada4ecfa7ebea800c42ece"
  },
  {
    "url": "assets/js/5.39daf526.js",
    "revision": "a72bfec977cb7ac17cd5bad66c63d2bb"
  },
  {
    "url": "assets/js/6.c5913619.js",
    "revision": "ccd4f686bed29103bbca6a4fc5b7723f"
  },
  {
    "url": "assets/js/7.f37b84a6.js",
    "revision": "10944a8c34a9ca119a9b4449c5e154ee"
  },
  {
    "url": "assets/js/8.bf42c912.js",
    "revision": "004a4bf78ebe10c497c5f9b4b65a9cf1"
  },
  {
    "url": "assets/js/9.2e7c3731.js",
    "revision": "79fd4f277129e2a9b99e84a4a7afc08a"
  },
  {
    "url": "assets/js/app.86f41eff.js",
    "revision": "901a5adb03b0b823fb8b7bf112cf54bc"
  },
  {
    "url": "index.html",
    "revision": "00a98de7891fbdba6525c76adf26a9dd"
  },
  {
    "url": "portfolio/index.html",
    "revision": "b97ee3f11788bbd8891382b772cf4290"
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
