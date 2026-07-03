// Service Worker：离线可用 + 更新优先（network-first）
const CACHE = 'espanol-v6';
const ASSETS = [
  './', './index.html', './css/style.css',
  './js/data.js', './js/data2.js', './js/data3.js', './js/data4.js', './js/data5.js', './js/app.js',
  './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // GitHub API 请求不缓存，直连
  if (req.url.includes('api.github.com')) return;
  // network-first：优先取最新，失败回退缓存（保证改动能刷新，也保证离线可用）
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
