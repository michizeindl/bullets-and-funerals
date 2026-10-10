// Service Worker: legt das Spiel beim ersten Aufruf im Handy ab, damit es danach auch ohne Internet läuft.
// Strategie „erst Netz, dann Ablage“: mit Internet immer der neueste Stand, ohne Internet die abgelegte Fassung.
// Kommen Dateien dazu, hier in DATEIEN eintragen und VERSION hochzählen.
const VERSION = 'bf-1';
const DATEIEN = [
  './',
  'index.html',
  'manifest.webmanifest',
  'assets/rye.woff2',
  'assets/favicon.png',
  'assets/apple-touch-icon.png',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/hintergrund.webp',
  'assets/lazy-larry.webp',
  'assets/clumsy-clyde.webp',
  'assets/bacon-bob.webp',
  'assets/greasy-gus.webp',
  'assets/crazy-cora.webp',
  'assets/smokin-sally.webp',
  'assets/terrible-ted.webp',
  'assets/killer-kate.webp',
  'assets/spieler-gelb-frau.webp',
  'assets/spieler-gelb-mann.webp',
  'assets/spieler-gruen-frau.webp',
  'assets/spieler-gruen-mann.webp',
  'assets/spieler-gelb-frau-sieg.webp',
  'assets/spieler-gelb-mann-sieg.webp',
  'assets/spieler-gruen-frau-sieg.webp',
  'assets/spieler-gruen-mann-sieg.webp',
  'assets/startmelodie.mp3',
  'assets/schuss.mp3',
  'assets/zieh.mp3',
  'assets/hahn.mp3',
  'assets/foul.mp3',
  'assets/aufprall.mp3',
  'assets/kasse.mp3',
  'assets/klick.mp3',
  'assets/wind.mp3',
  'assets/gameover.mp3',
  'assets/finale.mp3',
  'assets/schrei.mp3',
  'assets/husten.mp3',
  'assets/yeehaw-mann.mp3',
  'assets/yeehaw-frau.mp3',
  'assets/yeehaw-clint.mp3',
  'assets/yeehaw-molly.mp3',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

// alte Ablagen früherer Versionen wegräumen
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok && !req.headers.has('range')) { const kopie = res.clone(); caches.open(VERSION).then(c => c.put(req, kopie)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
