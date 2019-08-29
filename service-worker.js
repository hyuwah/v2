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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9e84a292b75a3d20b34821fca15d3a18"
  },
  {
    "url": "assets/css/0.styles.3b82c730.css",
    "revision": "eff03ac8a437c32bf8bc0f403d3f2ce6"
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
    "url": "assets/js/2.0556b640.js",
    "revision": "999d0ae25a70a7efbf9e521e5ca2559d"
  },
  {
    "url": "assets/js/3.980346f5.js",
    "revision": "c5b63ba819d9458e8fc1893821cd734d"
  },
  {
    "url": "assets/js/4.87d36461.js",
    "revision": "62ed25ac7bfd843e2d4fc5a9c96e7882"
  },
  {
    "url": "assets/js/5.8b127090.js",
    "revision": "4ad4c2fcdc5d31940d480e3c1521a1af"
  },
  {
    "url": "assets/js/6.ceb6b89e.js",
    "revision": "ff435777e7e7bca1b31b874ac3d73ce7"
  },
  {
    "url": "assets/js/7.24e673ef.js",
    "revision": "a948d93624158a62f9b0b7bae10b4d83"
  },
  {
    "url": "assets/js/8.80288b9c.js",
    "revision": "6816a155f0279e885f8acc474516b368"
  },
  {
    "url": "assets/js/app.0920a32a.js",
    "revision": "f44298df5dfe1a3cf46653dcd89d7ed3"
  },
  {
    "url": "index.html",
    "revision": "082e2636384f8b9b116ace6e7cb4b60a"
  },
  {
    "url": "portfolio/index.html",
    "revision": "c3f17d4b116ff17bb5d291ed8e0073c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
