/* Densha service worker · v16 */
const CACHE='densha-v16';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable.png'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  // version.json siempre desde la red (para detectar actualizaciones)
  if(url.pathname.endsWith('version.json')){
    e.respondWith(fetch(req).catch(()=>caches.match(req)));
    return;
  }
  // cache-first para el resto
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
    const copy=res.clone();
    caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
    return res;
  }).catch(()=>caches.match('./index.html'))));
});
