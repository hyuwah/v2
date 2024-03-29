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
    "revision": "121452ed5565fabd341dd54b89eba7c4"
  },
  {
    "url": "assets/css/0.styles.ef58834c.css",
    "revision": "2b3aa55183b8a0a16cd892c3bb1b48fe"
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
    "url": "assets/js/10.88c093f7.js",
    "revision": "fa77f6ac8f8203650307f2d893592bbc"
  },
  {
    "url": "assets/js/11.4d81927b.js",
    "revision": "c068a007196bf8c1c2c903bb9d4017fa"
  },
  {
    "url": "assets/js/2.7e4666cd.js",
    "revision": "ae0b78d4223b891f15bfbbefa8db7d43"
  },
  {
    "url": "assets/js/3.52418f30.js",
    "revision": "ee97576daff773a8c456d3691e23e0d6"
  },
  {
    "url": "assets/js/4.d06bcec8.js",
    "revision": "605dd2761809e3c094b2e6cb098d16e3"
  },
  {
    "url": "assets/js/5.80633850.js",
    "revision": "8d2b331b7a487a821de962ca6a364127"
  },
  {
    "url": "assets/js/6.26623d9f.js",
    "revision": "b0e99aaabe772470adb683eafae76887"
  },
  {
    "url": "assets/js/7.bc7e0045.js",
    "revision": "d25946d18c8b9cf4bae054ab3debb104"
  },
  {
    "url": "assets/js/8.fda32ce8.js",
    "revision": "91d96f116ebae78d45487dbdca858e29"
  },
  {
    "url": "assets/js/9.c6ad9158.js",
    "revision": "33f2cdbf7f6346ddb3d2b647115c385b"
  },
  {
    "url": "assets/js/app.5b3f189a.js",
    "revision": "c4a3ba088f2f2672b91ffcc7a93ad298"
  },
  {
    "url": "index.html",
    "revision": "a94324207bc7e805aba3d6de927c662a"
  },
  {
    "url": "portfolio/index.html",
    "revision": "17badd98329442d68626f9d7ca426916"
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
