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
    "revision": "ea561529f1609f624ff888d56dbf1f18"
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
    "url": "assets/js/10.c4f61999.js",
    "revision": "6c2e9fcd7a194afb1bdb80c8e25b9a09"
  },
  {
    "url": "assets/js/11.6167a504.js",
    "revision": "b5ff8fdaff73e87471419fb2f068863d"
  },
  {
    "url": "assets/js/2.49b4c939.js",
    "revision": "0fe3a0629c6e4bd276f533bc04c41d83"
  },
  {
    "url": "assets/js/3.d6a8181a.js",
    "revision": "bfa60a2054a931ee660918104e02c0da"
  },
  {
    "url": "assets/js/4.cdf4a68d.js",
    "revision": "c3636d800f13a49430d7345f7cd3a0f7"
  },
  {
    "url": "assets/js/5.9410b060.js",
    "revision": "f35fc94c5d4caf3a744071304f4d9f87"
  },
  {
    "url": "assets/js/6.cc127aec.js",
    "revision": "45874d99ac1c7a2d3a3175640b541ecb"
  },
  {
    "url": "assets/js/7.8faa5ae8.js",
    "revision": "1fb4aeb6d90002b06cd08c8d43e8a2e4"
  },
  {
    "url": "assets/js/8.3f37d692.js",
    "revision": "de596cad87f58f7185e798e2b4b46911"
  },
  {
    "url": "assets/js/9.7db32677.js",
    "revision": "54c100997ec2869fee094614b10c46c9"
  },
  {
    "url": "assets/js/app.7acc4f73.js",
    "revision": "e930ab7346625490d625c11ab9e3bc52"
  },
  {
    "url": "index.html",
    "revision": "c86b9c8ce57cbc1424c2ee55c4a5a01e"
  },
  {
    "url": "portfolio/index.html",
    "revision": "b14c3b0ca7478b5cc702cbac3651f8d3"
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
