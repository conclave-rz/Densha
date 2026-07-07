/* Densha service worker · offline-first */
const CACHE = 'densha-v7';
const FONT_CACHE = 'densha-fonts-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Fuentes de Google: stale-while-revalidate (quedan cacheadas tras la primera visita)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONT_CACHE).then(async (c) => {
        const cached = await c.match(e.request);
        const fresh = fetch(e.request).then((res) => {
          if (res && res.status === 200) c.put(e.request, res.clone());
          return res;
        }).catch(() => cached);
        return cached || fresh;
      })
    );
    return;
  }

  // App shell: cache-first, con index.html como fallback de navegación
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((cached) =>
        cached ||
        fetch(e.request).catch(() =>
          e.request.mode === 'navigate' ? caches.match('./index.html') : undefined
        )
      )
    );
  }
});
