// generato da build.py — versione 054e943aad
const CACHE="thg-054e943aad";
const ASSETS=["./", "index.html", "manifest.webmanifest", "core.js", "engine.js", "ep01.js", "ep02.js", "ep03.js", "ep04.js", "ep05.js", "ep06.js", "ep07.js", "ep08.js", "ep09.js", "ep10.js", "ep11.js", "ep12.js", "ep13.js", "ep14.js", "ep15.js", "ep16.js", "ep17.js", "ep18.js", "ep19.js", "ep20.js", "events.js", "fu01.js", "fu02.js", "fu03.js", "fu04.js", "fu05.js", "fu06.js", "fu07.js", "fu08.js", "fu09.js", "fu10.js", "fu11.js", "fu12.js", "fu13.js", "fu14.js", "fu15.js", "fu16.js", "fu17.js", "fu18.js", "fu19.js", "fu20.js", "lib.js", "om01.js", "om02.js", "om03.js", "om04.js", "om05.js", "om06.js", "om07.js", "om08.js", "om09.js", "om10.js", "om11.js", "om12.js", "om13.js", "om14.js", "om15.js", "om16.js", "om17.js", "om18.js", "om19.js", "om20.js", "po01.js", "po02.js", "po03.js", "po04.js", "po05.js", "po06.js", "po07.js", "po08.js", "po09.js", "po10.js", "po11.js", "po12.js", "po13.js", "po14.js", "po15.js", "po16.js", "po17.js", "po18.js", "po19.js", "po20.js", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k.startsWith("thg-")).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("message",e=>{if(e.data==="skip")self.skipWaiting();});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET")return;
  const u=new URL(r.url);
  if(u.origin===location.origin){
    e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r)));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
    e.respondWith(caches.open("thg-fonts").then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{c.put(r,res.clone());return res;}))));
  }
});
