const CACHE='rtl-v2';
const CORE=['./','./index.html','./laptop.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const page=e.request.mode==='navigate'||e.request.destination==='document';
  e.respondWith(caches.open(CACHE).then(async c=>{
    if(page){
      try{const r=await fetch(e.request);if(r&&r.ok)c.put(e.request,r.clone());return r}
      catch(x){return (await c.match(e.request))||(await c.match('./index.html'))}
    }
    const hit=await c.match(e.request);
    const net=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone());return r}).catch(()=>hit);
    return hit||net;
  }));
});
