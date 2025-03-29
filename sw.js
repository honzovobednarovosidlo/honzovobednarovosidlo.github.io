self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('fluid-chat-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js'
        // add other files as needed
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
