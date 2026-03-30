const CACHE_NAME = 'dfgear-cache-v3.29';

const CACHE_LIMIT = 80; // 최대 캐시 항목 수

const STATIC_ASSETS = [
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
  '/static/js/jquery-3.6.0.min.js',
  '/static/js/chart.min.js',
  '/static/js/chartSet.js'
];

// 정적 자산 판별
const STATIC_EXTENSIONS = ['.ttf', '.woff', '.woff2', '.png', '.jpg', '.svg', '.ico', '.css'];

function isStaticAsset(url) {
  return STATIC_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
    || url.pathname.startsWith('/static/');
}

function buildCacheKey(request) {
  const url = new URL(request.url);
  url.search = '';
  return new Request(url.toString(), { method: request.method, headers: request.headers });
}

async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    const deleteCount = keys.length - maxItems;
    await Promise.all(keys.slice(0, deleteCount).map(key => cache.delete(key)));
    console.log(`[SW] 캐시 정리: ${deleteCount}개 삭제 (현재 ${maxItems}개 유지)`);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => console.error('[SW] 프리캐시 실패:', err))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => {
              console.log('[SW] 구버전 캐시 삭제:', key);
              return caches.delete(key);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});


self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;

  if (!url.protocol.startsWith('http')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

});


async function networkFirst(request) {
  const cacheKey = buildCacheKey(request);
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(cacheKey, response.clone());
      trimCache(CACHE_NAME, CACHE_LIMIT);
    }
    return response;
  } catch {
    const cached = await caches.match(cacheKey);
    return cached || await caches.match('/index.html');
  }
}

async function cacheFirst(request) {
  const cacheKey = buildCacheKey(request); // ✅ Fix 4
  const cached = await caches.match(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(cacheKey, response.clone());
      trimCache(CACHE_NAME, CACHE_LIMIT); // ✅ Fix 5
    }
    return response;
  } catch {
    console.warn('[SW] 오프라인 - 리소스 없음:', request.url);
    return new Response('', { status: 408, statusText: 'Request Timeout' });
  }
}