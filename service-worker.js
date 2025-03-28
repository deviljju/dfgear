const CACHE_NAME = 'dfgear-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/common.css',
  '/static/index.css',
  '/static/common.js',
  '/static/index.js',
  '/static/images/logo_192.png',
  '/static/images/logo_512.png',
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }).catch((err) => {
        console.error('Failed to cache', err);
    })
  );
});
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('불필요한 캐시 삭제 중...', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});