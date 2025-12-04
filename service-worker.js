const CACHE_NAME = 'dfgear-cache-v2.25';
const urlsToCache = [
  '/',
  '/static/images/logo_192.png',
  '/static/images/logo_512.png',
  '/static/fonts/DNFForgedBlade-Light.ttf',
  '/static/fonts/DNFForgedBlade-Medium.ttf',
  '/static/fonts/DNFForgedBlade-Bold.ttf',
  '/static/fonts/DNFBitBitv2.ttf',
  '/static/fonts/NanumGothicLight.ttf',
  '/static/fonts/NanumGothic.ttf',
  '/static/fonts/NanumGothicBold.ttf',
  '/static/fonts/NanumGothicExtraBold.ttf',
  '/static/bootstrap.min.css',
  '/static/js/bootstrap.bundle.js',
  '/static/js/moment.min.js',
  'https://code.jquery.com/jquery-3.6.0.min.js',
  '/static/js/chart.min.js',
  '/static/js/chartSet.js'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }).catch((err) => {
        console.error('Failed to cache', err);
    })
  );
  self.skipWaiting();
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
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put('/index.html', clone);
          });
          return response;
        })
        .catch(() => caches.match('/index.html')) // 오프라인 시 캐시 사용
    );
    return;
  } else {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});