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
    "revision": "e53e1bccf180ff59dbe9a00223926159"
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
    "url": "assets/js/10.d6c628bd.js",
    "revision": "da5aa97e8863eb97a2627840008837ee"
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
    "url": "assets/js/3.e4912a7a.js",
    "revision": "4fd7aea12d1f11b76c65f62a541a9a92"
  },
  {
    "url": "assets/js/4.d8203b85.js",
    "revision": "382ae6f4c96197c22f5ec89bf7ccd866"
  },
  {
    "url": "assets/js/5.43d66a55.js",
    "revision": "3510411cdea554d3059e1538742eef7b"
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
    "url": "assets/js/9.ad21ae89.js",
    "revision": "cdbb261ba6ef7565d1f99cd5741aca65"
  },
  {
    "url": "assets/js/app.f1023247.js",
    "revision": "9a81ba51ef43b8870974068d269fdbcf"
  },
  {
    "url": "index.html",
    "revision": "d263ae268747b01aae3222fc5ca48ab7"
  },
  {
    "url": "portfolio/index.html",
    "revision": "9072aea584810aa97dc5283b5cf896bd"
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
