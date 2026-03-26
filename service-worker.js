const CACHE_NAME = 'dfgear-cache-v3.26';
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
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // 캐싱 완료 후 skipWaiting
      .catch((err) => console.error('Failed to cache', err))
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => !cacheWhitelist.includes(name))
            .map((name) => {
              console.log('불필요한 캐시 삭제 중...', name);
              return caches.delete(name);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // navigate 요청 - Network First
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }
  if (event.request.method === 'GET') { 
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;

        return fetch(event.request).then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
      }).catch(() => caches.match(event.request))
    );
  }
});