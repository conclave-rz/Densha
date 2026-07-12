/* Densha service worker · v16.1 (network-first shell, self-update) */
const CACHE='densha-v16.1';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable.png'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  // precache NO atomico: si falta un icono, no rompe todo el cache
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(a=>c.add(a).catch(()=>{})))));
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('message',e=>{ if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting(); });

function networkFirst(req){
  return fetch(req).then(res=>{
    const copy=res.clone();
    caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
    return res;
  }).catch(()=>caches.match(req).then(hit=>hit||caches.match('./index.html')));
}
function cacheFirst(req){
  return caches.match(req).then(hit=>hit||fetch(req).then(res=>{
    const copy=res.clone();
    caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
    return res;
  }));
}
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  const p=url.pathname;
  // La app y la version SIEMPRE desde la red primero -> nunca se queda pegada en la version vieja
  if(req.mode==='navigate' || p.endsWith('version.json') || p.endsWith('index.html') || p.endsWith('/')){
    e.respondWith(networkFirst(req));
    return;
  }
  // recursos estaticos (fuentes, iconos, imagenes): cache primero
  e.respondWith(cacheFirst(req));
});
