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
    "revision": "64ffcf32e0f0ac0245f691fe709cfcc7"
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
    "url": "assets/js/10.37958711.js",
    "revision": "62862c6df02ab126e8d8928818c302ee"
  },
  {
    "url": "assets/js/11.c138ea0d.js",
    "revision": "74682642c34bf46ab2e827feff958710"
  },
  {
    "url": "assets/js/2.387a41ca.js",
    "revision": "90d6ddd47def1f18d7fb7bb42a788681"
  },
  {
    "url": "assets/js/3.251c728e.js",
    "revision": "55ffabfec7403c797fd663d1efa14ddf"
  },
  {
    "url": "assets/js/4.4851d90a.js",
    "revision": "c730c8bef60ba9de887470758be7b96f"
  },
  {
    "url": "assets/js/5.02ed2016.js",
    "revision": "9ba314402b66f09e7ede0c95313b2c0d"
  },
  {
    "url": "assets/js/6.7327b17c.js",
    "revision": "b72a4acc053a0a36e9fe8bdb1745fd2b"
  },
  {
    "url": "assets/js/7.fe374663.js",
    "revision": "31b9f35edfbea0a13b58fa11075a7dab"
  },
  {
    "url": "assets/js/8.c16a36e6.js",
    "revision": "ae849fbf105383dede83acca27137761"
  },
  {
    "url": "assets/js/9.deff5040.js",
    "revision": "5543157c713ac15c843327efdea5d91b"
  },
  {
    "url": "assets/js/app.37af7bd8.js",
    "revision": "1aff5a2a3a678c0c7559d085c5ee2b32"
  },
  {
    "url": "index.html",
    "revision": "89d43cb54b27015ac13b123515b915f1"
  },
  {
    "url": "portfolio/index.html",
    "revision": "9cbae2313a84d2c3fb3e8f5449093401"
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
