const VERSION='onward-cache-2026-06-30r';
const CORE=['./','onward.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png','icon-512-maskable.png','launch-iphone17pro.png'];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE).catch(function(){});}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){if(k!==VERSION)return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){var req=e.request;if(req.method!=='GET')return;e.respondWith(caches.match(req).then(function(hit){var net=fetch(req).then(function(res){if(res&&res.status===200&&res.type==='basic'){var copy=res.clone();caches.open(VERSION).then(function(c){c.put(req,copy);});}return res;}).catch(function(){return hit;});return hit||net;}));});

self.addEventListener('message',function(e){if(e.data==='skipWaiting')self.skipWaiting();});
