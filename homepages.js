/* Home con più pagine, dock e app di contorno, come un telefono vero.
   Le app del caso sono distribuite tra le pagine (alcune in seconda pagina); le app di contorno
   aprono solo un messaggio breve: non contengono indizi. */
(function(){
const DECOY=[["meteo","Meteo","🌤️","#4fa3ff,#1d6fd6"],["clock","Orologio","⏰","#3a3a3c,#1c1c1e"],["cam","Fotocamera","📷","#8e8e93,#48484a"],["set","Impostazioni","⚙️","#aeaeb2,#636366"],["music","Musica","🎵","#ff6b8b,#ff2d55"],["calc","Calcolatrice","🧮","#ff9f0a,#c76b00"],["health","Salute","❤️","#ffffff,#f2f2f7"],["wallet","Wallet","👛","#2c2c2e,#000000"],["podcast","Podcast","🎙️","#bf5af2,#7d2ae8"],["store","Store","🛍️","#5ac8fa,#0a84ff"],["files","File","🗂️","#64d2ff,#0a84ff"],["tv","TV","📺","#1c1c1e,#3a3a3c"],["books","Libri","📖","#ff9f0a,#ff6b00"],["home","Domotica","🏡","#ffd60a,#ff9f0a"],["fit","Fitness","🏃","#30d158,#0c8f3b"],["trad","Traduttore","🌐","#0a84ff,#003a8c"]];
const MSG={meteo:c=>`Meteo ${c}: 14°, nuvoloso. Domani pioggia.`,clock:()=>"Sveglie: 6:45, giorni feriali.",cam:()=>"La fotocamera non serve: le foto sono già in Galleria.",set:()=>"Impostazioni: nessuna modifica recente.",music:()=>"Ultimo ascolto: una playlist di canzoni italiane.",calc:()=>"Calcolatrice: ultimo risultato 0.",health:()=>"Passi di oggi: 3.412.",wallet:()=>"Carta di pagamento ••••. Nessuna transazione qui: guarda l'app della banca.",podcast:()=>"Nessun episodio in corso.",store:()=>"Nessun aggiornamento in sospeso.",files:()=>"Cartella vuota.",tv:()=>"Nessuna serie in corso.",books:()=>"Nessun libro aperto.",home:()=>"Nessun dispositivo collegato.",fit:()=>"Anelli di oggi: 40%.",trad:()=>"Nessuna traduzione recente."};
const hash=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))|0;return Math.abs(x);};
const rng=s=>()=>{s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff;};
const PER=16;let cur=0,curEp=0;
function layout(E){
 const r=rng(E.n*131+7);const apps=E.apps.slice();
 const dockIds=["tel","msg","web","gal"].filter(id=>apps.some(a=>a[0]===id)).slice(0,4);
 const dock=dockIds.map(id=>apps.find(a=>a[0]===id));
 const rest=apps.filter(a=>!dockIds.includes(a[0]));
 const nDec=E.n>80?4:8+Math.floor(r()*4);
 const dec=DECOY.slice().sort(()=>r()-.5).slice(0,nDec).map(d=>Object.assign([d[0],d[1],d[2],`linear-gradient(160deg,${d[3]})`],{decoy:true}));
 // pagina 1: circa due terzi delle app del caso, pagina 2: le altre; le app di contorno riempiono
 const p2n=E.n>80?0:Math.floor(rest.length/3);const order=rest.slice().sort(()=>r()-.5);
 const on2=order.slice(0,p2n),on1=rest.filter(a=>!on2.includes(a));
 const p1=on1.concat(dec.slice(0,Math.max(0,Math.min(dec.length,PER-on1.length-6)))).sort(()=>r()-.5);
 const p2=on2.concat(dec.slice(p1.length-on1.length)).sort(()=>r()-.5);
 return {dock,pages:[p1,p2].filter(p=>p.length)};
}
function tile(a,ic){return a.decoy?`<button type="button" class="app" data-decoy="${a[0]}"><i style="background:${a[3]}"><span class="emo">${a[2]}</span></i>${a[1]}</button>`
 :`<button type="button" class="app" data-act="go" data-v="${a[0]}"><i style="background:${a[3]}">${ic(a[2])}</i>${a[1]}</button>`;}
window.HOMEP={
 render(E,ic){if(curEp!==E.n){cur=0;curEp=E.n;}const L=layout(E);if(cur>=L.pages.length)cur=0;
  return `<div class="pages" data-cur="${cur}">${L.pages.map(p=>`<div class="hpage"><div class="apps">${p.map(a=>tile(a,ic)).join("")}</div></div>`).join("")}</div>
  ${L.pages.length>1?`<div class="pdots">${L.pages.map((_,i)=>`<i class="${i===cur?"on":""}"></i>`).join("")}</div>`:""}
  <div class="dock">${L.dock.map(a=>tile(a,ic)).join("")}</div>`;}
};
function sync(el){const i=Math.round(el.scrollLeft/Math.max(1,el.clientWidth));if(i!==cur){cur=i;const d=el.parentNode.querySelectorAll(".pdots i");d.forEach((x,k)=>x.classList.toggle("on",k===i));}}
document.addEventListener("scroll",e=>{const el=e.target;if(el&&el.classList&&el.classList.contains("pages"))sync(el);},true);
if(typeof MutationObserver!=="undefined")new MutationObserver(()=>{const el=document.querySelector(".pages");if(el&&!el._ok){el._ok=1;const c=+el.dataset.cur||0;if(c)el.scrollLeft=c*el.clientWidth;}}).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-decoy]");if(!b)return;e.stopPropagation();const f=MSG[b.dataset.decoy];const city=(typeof E!=="undefined"&&E&&typeof SEASON!=="undefined"&&SEASON[E.n-1]&&SEASON[E.n-1][2])||"oggi";if(typeof toast==="function")toast(f?f(city):"Niente di utile qui.");},true);
document.addEventListener("click",e=>{const d=e.target.closest&&e.target.closest(".pdots i");if(!d)return;const el=document.querySelector(".pages");const k=[...d.parentNode.children].indexOf(d);if(el)el.scrollTo({left:k*el.clientWidth,behavior:"smooth"});},true);
})();
