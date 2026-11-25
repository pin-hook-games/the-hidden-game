/* Foto vere: se in img/ esiste thg-NN-scena.jpg (elencata in THG_IMGS, generata da build.py),
   sostituisce il disegno di quella scena, mantenendo la didascalia originale. */
(function(){
 const list=(typeof window!=="undefined"&&window.THG_IMGS)||[];
 if(!list.length||typeof EPISODES==="undefined")return;
 const ok=new Set(list);
 for(const n in EPISODES){const e=EPISODES[n];if(!e||!e.scenes)continue;
  const nn=String(n).padStart(2,"0");
  for(const sc of Object.keys(e.scenes)){
   const f="thg-"+nn+"-"+sc+".jpg";if(!ok.has(f))continue;
   const orig=e.scenes[sc];let cap="";
   try{const t=[...String(orig()).matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map(m=>m[1].trim()).filter(Boolean);const custom=!/LIB\.(two|group|obj)\(/.test(String(orig));cap=custom?t.join(" · "):(t[t.length-1]||"");}catch(err){}
   e.scenes[sc]=()=>LIB.photo(f,cap);
  }}
})();
