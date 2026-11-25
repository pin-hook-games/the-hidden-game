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
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-decoy]");if(!b)return;e.stopPropagation();if(typeof S!=="undefined"&&typeof render==="function"){S.view="x_"+b.dataset.decoy;S.sub=null;render();}},true);
document.addEventListener("click",e=>{const d=e.target.closest&&e.target.closest(".pdots i");if(!d)return;const el=document.querySelector(".pages");const k=[...d.parentNode.children].indexOf(d);if(el)el.scrollTo({left:k*el.clientWidth,behavior:"smooth"});},true);

/* ---- schermate delle app di contorno: informazioni realistiche, nessun indizio ---- */
const H=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const cityOf=()=>{const c=(typeof SEASON!=="undefined"&&E&&SEASON[E.n-1]&&SEASON[E.n-1][2])||"Città";return c.split(/ e |,/)[0].trim();};
const R=()=>rng(((typeof E!=="undefined"&&E)?E.n:1)*977+13);
const hhmm=()=>typeof phoneTime==="function"?phoneTime():"12:00";
const addH=(t,d)=>{const [h,m]=t.split(":").map(Number);const x=((h+d)%24+24)%24;return String(x).padStart(2,"0")+":"+String(m).padStart(2,"0");};
const row=(a,b,c)=>`<div class="xr"><span>${a}</span><b>${b}</b>${c?`<small>${c}</small>`:""}</div>`;
const SC={
 meteo(){const r=R(),t=8+Math.floor(r()*12),cond=["Nuvoloso","Sereno","Pioggia leggera","Parzialmente nuvoloso","Nebbia"][Math.floor(r()*5)],ic={Nuvoloso:"☁️",Sereno:"☀️","Pioggia leggera":"🌧️","Parzialmente nuvoloso":"⛅",Nebbia:"🌫️"}[cond];const h0=+hhmm().slice(0,2);
  return `<div class="xs meteo"><div class="mt-c">${H(cityOf())}</div><div class="mt-t">${t}°</div><div class="mt-d">${cond} · Max ${t+4}° Min ${t-5}°</div>
  <div class="mt-h">${Array.from({length:8},(_,i)=>`<span><small>${i?String((h0+i)%24).padStart(2,"0"):"Ora"}</small>${["☁️","⛅","☀️","🌧️"][Math.floor(r()*4)]}<b>${t+Math.round(r()*4-2)}°</b></span>`).join("")}</div>
  <div class="mt-w">${["Oggi","Dom","Lun","Mar","Mer","Gio"].map(d=>`<div><span>${d}</span><i>${["☁️","⛅","☀️","🌧️"][Math.floor(r()*4)]}</i><small>${t-5+Math.round(r()*3)}°</small><em style="--a:${20+r()*50}%"></em><small>${t+2+Math.round(r()*4)}°</small></div>`).join("")}</div></div>`;},
 clock(){const t=hhmm();return `<div class="xs xclock"><h3>Orologio</h3>${row("Roma",t,"Oggi")}${row("Londra",addH(t,-1),"Oggi, −1 h")}${row("New York",addH(t,-6),"−6 h")}${row("Tokyo",addH(t,8),"+8 h")}<h4>Sveglie</h4>${row("06:45","Feriali",`<i class="sw on"></i>`)}${row("08:30","Sabato",`<i class="sw"></i>`)}</div>`;},
 cam(){return `<div class="xs cam"><div class="vf"><i></i><i></i><i></i><i></i><span>1×</span></div><div class="cmodes"><span>VIDEO</span><b>FOTO</b><span>RITRATTO</span></div><div class="shut"><span class="th"></span><button type="button" class="sh" onclick="this.closest('.cam').classList.remove('fl');void this.offsetWidth;this.closest('.cam').classList.add('fl')"></button><span class="fl2">↻</span></div></div>`;},
 set(){const r=R();return `<div class="xs set"><div class="xp">${typeof E!=="undefined"?H(E.owner.split(" · ")[0]):""}<small>Account, iCloud e altro</small></div>${row("✈️ Uso in aereo","",`<i class="sw"></i>`)}${row("📶 Wi‑Fi",["CASA_5G","FASTWEB-2.4","TIM-81923","Vodafone-A3"][Math.floor(r()*4)])}${row("🔵 Bluetooth","Attivo")}${row("🔋 Batteria",(40+Math.floor(r()*55))+"%")}${row("🔔 Notifiche","")}${row("🔒 Privacy e sicurezza","")}${row("⚙️ Generali","")}</div>`;},
 music(){const r=R();const t=["Strade di notte","Mare d'inverno","Ritorno a casa","Sabato","Luci sul porto","Domenica lenta"];return `<div class="xs music"><div class="np"><span style="background:hsl(${r()*360},60%,55%)"></span><b>${t[Math.floor(r()*6)]}</b><small>Playlist · In riproduzione</small></div><h4>Ascoltati di recente</h4><div class="alb">${t.map(x=>`<div><span style="background:hsl(${r()*360},55%,${45+r()*20}%)"></span><small>${x}</small></div>`).join("")}</div></div>`;},
 calc(){return `<div class="xs calc"><div class="cd" data-calc>0</div><div class="ck">${["C","±","%","÷","7","8","9","×","4","5","6","−","1","2","3","+","0",",","="].map(k=>`<button type="button" data-ck="${k}" class="${/[÷×−+=]/.test(k)?"op":/[C±%]/.test(k)?"fn":""}${k==="0"?" z":""}">${k}</button>`).join("")}</div></div>`;},
 health(){const r=R(),st=2000+Math.floor(r()*8000);return `<div class="xs health"><h3>Riepilogo</h3><div class="hc"><small>Passi</small><b>${st.toLocaleString("it-IT")}</b><div class="bars">${Array.from({length:7},()=>`<i style="height:${20+r()*80}%"></i>`).join("")}</div></div>${row("Distanza",(st*0.00075).toFixed(1).replace(".",",")+" km")}${row("Piani saliti",Math.floor(r()*12))}${row("Sonno",(5+Math.floor(r()*3))+" h "+Math.floor(r()*60)+" min")}${row("Battito a riposo",(55+Math.floor(r()*20))+" bpm")}</div>`;},
 wallet(){const r=R();return `<div class="xs wallet"><div class="wc" style="background:linear-gradient(135deg,#1c1c1e,#3a3a3c)"><small>Carta di debito</small><b>•••• ${1000+Math.floor(r()*9000)}</b></div><div class="wc" style="background:linear-gradient(135deg,#0a84ff,#5e5ce6);margin-top:12px"><small>Tessera trasporti</small><b>Credito residuo ${(r()*20).toFixed(2).replace(".",",")} €</b></div><p class="xn">I movimenti del conto sono nell'app della banca.</p></div>`;},
 podcast(){const p=["Storie dal mare","Cinque minuti di economia","Il giallo della settimana","Cucina di casa","Parole in viaggio"];return `<div class="xs pod"><h3>Podcast</h3>${p.map((x,i)=>row(`<span class="pc" style="background:hsl(${i*70},60%,55%)"></span>${x}`,"",i?`Ep. ${10+i*3} · ${20+i*5} min`:"In ascolto · 12 min rimanenti")).join("")}</div>`;},
 store(){return `<div class="xs store"><h3>Aggiornamenti</h3><p class="xn">Tutte le app sono aggiornate.</p><h4>In evidenza</h4>${["Ricette veloci","Meteo Plus","Scacchi online","Diario di viaggio"].map((x,i)=>row(`<span class="pc" style="background:hsl(${i*90+20},65%,55%)"></span>${x}`,"OTTIENI")).join("")}</div>`;},
 files(){return `<div class="xs files"><h3>File</h3>${row("📁 Documenti","3 elementi")}${row("📁 Download","Vuota")}${row("📁 Scansioni","Vuota")}${row("🗑️ Eliminati di recente","Vuota")}</div>`;},
 tv(){return `<div class="xs tv"><h3>Continua a guardare</h3><div class="alb">${["Il faro","Commissario a Sud","Cuochi in gara","La valle"].map((x,i)=>`<div><span style="background:linear-gradient(160deg,hsl(${i*80},45%,40%),#111)"></span><small>${x} · ep. ${2+i}</small></div>`).join("")}</div></div>`;},
 books(){return `<div class="xs books"><h3>In lettura</h3>${row("📕 Il silenzio del porto","38%")}${row("📗 Una stagione in collina","12%")}<h4>Da leggere</h4>${row("📘 Lettere da Trieste","")}</div>`;},
 home(){return `<div class="xs dom"><h3>Casa</h3>${["Soggiorno · Luce","Cucina · Luce","Camera · Luce","Termostato · 20°"].map((x,i)=>row(x,"",`<i class="sw${i%2?" on":""}"></i>`)).join("")}</div>`;},
 fit(){const r=R();return `<div class="xs fit"><div class="rings"><i style="--p:${40+r()*50}"></i><i style="--p:${20+r()*60}"></i><i style="--p:${30+r()*60}"></i></div>${row("Movimento",Math.floor(200+r()*300)+" kcal")}${row("Esercizio",Math.floor(5+r()*40)+" min")}${row("In piedi",Math.floor(4+r()*8)+" ore")}<h4>Allenamenti</h4>${row("🚶 Camminata",(1+r()*4).toFixed(1).replace(".",",")+" km","Ieri")}</div>`;},
 trad(){return `<div class="xs trad"><div class="tr2"><small>Italiano</small><b>Dov'è la stazione?</b></div><div class="tr2"><small>Inglese</small><b>Where is the station?</b></div></div>`;}
};
const NAMES=Object.fromEntries(DECOY.map(d=>[d[0],d[1]]));
window.HOMEP.screen=id=>(typeof bar==="function"?bar(NAMES[id]||"App"):"")+(SC[id]?SC[id]():`<p class="xn">Niente di utile qui.</p>`);
let cv="0",acc=null,op=null,fresh=true;
document.addEventListener("click",e=>{const k=e.target.closest&&e.target.closest("[data-ck]");if(!k)return;const d=document.querySelector("[data-calc]");const v=k.dataset.ck;const num=()=>parseFloat(cv.replace(",","."));const f=x=>{const s=String(+x.toFixed(8)).replace(".",",");return s.length>12?(+x).toExponential(4).replace(".",","):s;};
 if(/[0-9]/.test(v)){cv=fresh||cv==="0"?v:cv+v;fresh=false;}else if(v===","){if(!cv.includes(","))cv=(fresh?"0":cv)+",";fresh=false;}else if(v==="C"){cv="0";acc=null;op=null;fresh=true;}else if(v==="±"){cv=f(-num());}else if(v==="%"){cv=f(num()/100);}
 else{const n=num();if(op!==null&&!fresh){acc=op==="+"?acc+n:op==="−"?acc-n:op==="×"?acc*n:n===0?NaN:acc/n;cv=isNaN(acc)?"Errore":f(acc);}else if(acc===null||fresh)acc=n;op=v==="="?null:v;if(v==="=")acc=null;fresh=true;}
 if(d)d.textContent=cv;},true);
})();
