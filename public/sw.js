const staticCacheName = 'test-app-v1';
const dynamicCacheName = 'dyn-app-v1';

const assetUrls = [
  '/',
  '/index.html',
  '/offline.html',
  'https://fakestoreapi.com/products/',
  'https://fakestoreapi.com/products/categories',
  'https://fakestoreapi.com/products/?limit=12',
  'https://fakestoreapi.com/products/?limit=10',
];

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      /* eslint-disable-next-line no-restricted-globals */
      return cache.addAll(assetUrls).then(() => self.skipWaiting());
    })
  );
});
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', (event) => {
  /* eslint-disable-next-line no-restricted-globals */
  event.waitUntil(self.clients.claim());
});

// fetch v1

/* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('fetch', function (event) {
//   if (navigator.onLine) {
//     const fetchRequest = event.request.clone();
//     return fetch(fetchRequest).then(function (response) {
//       if (!response || response.status !== 200 || response.type !== 'basic') {
//         return response;
//       }

//       const responseToCache = response.clone();

//       caches.open(staticCacheName).then(function (cache) {
//         cache.put(event.request, responseToCache);
//       });

//       return response;
//     });
//   } else {
//     event.respondWith(
//       caches.match(event.request).then(function (response) {
//         if (response) {
//           return response;
//         }
//       })
//     );
//   }

//     // event.respondWith((async () => {
//     //   const cachedResponse = await caches.match(event.request);
//     //   if (cachedResponse) {
//     //     return cachedResponse;
//     //   }
//     //   const response = await fetch(event.request);
//     //   if (!response || response.status !== 200 || response.type !== 'basic') {
//     //     return response;
//     //   }
//     //   if (ENABLE_DYNAMIC_CACHING) {
//     //     const responseToCache = response.clone();
//     //     const cache = await caches.open(dynamicCacheName)
//     //     await cache.put(event.request, response.clone());
//     //   }
//     //   return response;
// });

// fetch v2
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
