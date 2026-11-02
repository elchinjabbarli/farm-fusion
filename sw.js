/**
 * Farm Fusion Service Worker — tam çevrimdışı oynanış.
 * Sürüm: 1.0.0 (package.json / src/version.ts / README ile aynı tutulmalı)
 */
const CACHE = 'farm-fusion-v1.0.0';
const ASSETS = [
  './', './index.html', './css/main.css', './dist/main.js', './manifest.webmanifest',
  './icons/favicon.png', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './fonts/comfortaa-400-latin.woff2', './fonts/comfortaa-400-latin-ext.woff2',
  './fonts/comfortaa-500-latin.woff2', './fonts/comfortaa-500-latin-ext.woff2',
  './fonts/comfortaa-700-latin.woff2', './fonts/comfortaa-700-latin-ext.woff2',
  './fonts/quicksand-500-latin.woff2', './fonts/quicksand-500-latin-ext.woff2',
  './fonts/quicksand-600-latin.woff2', './fonts/quicksand-600-latin-ext.woff2',
  './fonts/quicksand-700-latin.woff2', './fonts/quicksand-700-latin-ext.woff2',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // HTML: ağ önceli (güncel sürüm), yoksa önbellek
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request)));
    return;
  }
  // diğerleri: önbellek önceli — ?v=1.0.0 sorgusu eşleşmeyi bozmasın
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return r;
    }))
  );
});
