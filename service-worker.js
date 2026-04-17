const CACHE_NAME = 'dfgear-cache-v4.18';
const FONT_CACHE_NAME = 'dfgear-fonts'; // 폰트 전용 영구 캐시 (CACHE_NAME 변경과 무관)

const CACHE_LIMIT = 80; // 최대 캐시 항목 수

const FONT_EXTENSIONS = ['.ttf', '.woff', '.woff2', '.png', '.jpg', '.svg', '.ico' ];

function isFont(url) {
  return FONT_EXTENSIONS.some(ext => url.pathname.endsWith(ext));
}

function isStaticAsset(url) {
  return url.pathname.startsWith('/static/');
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
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME && key !== FONT_CACHE_NAME)
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

  if (isFont(url)) {
    event.respondWith(cacheFirst(event.request, FONT_CACHE_NAME));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(event.request, CACHE_NAME));
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

async function cacheFirst(request, cacheName) {
  const cacheKey = buildCacheKey(request);
  const cached = await caches.match(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(cacheKey, response.clone());
      if (cacheName !== FONT_CACHE_NAME) {
        trimCache(cacheName, CACHE_LIMIT);
      }
    }
    return response;
  } catch {
    console.warn('[SW] 오프라인 - 리소스 없음:', request.url);
    return new Response('', { status: 408, statusText: 'Request Timeout' });
  }
}
