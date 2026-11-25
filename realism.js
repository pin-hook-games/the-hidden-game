/* Telefono più vero: foto profilo, chat realistiche (date, spunte, non letti), schermata di blocco con notifiche
   e codice, pallini rossi sulle app, notifiche durante la partita (anche «Dov'è: qualcuno cerca questo telefono»),
   batteria che scende, centro di controllo, Contatti, Social, modalità notte nei casi serali. */
(function(){
const hash=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))|0;return Math.abs(x);};
const X=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const DAYW=/^(lun|mar|mer|gio|ven|sab|dom|ieri|oggi|adesso|sett|\d{1,2}\s?(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)|estate|inverno|domenica|luned|marted|mercoled|gioved|venerd|sabato)/i;
const GROUP=/gruppo|condominio|amici|famiglia|team|riunione|staff|genitori|calcetto|coro |comitato|classe|ufficio ·|lavoro ·|sezione|lista /i;
const BIZ=/banca|studio|pasticceria|corriere|officina|palestra|comune|agenzia|hotel|albergo|ristorante|farmacia|assicuraz|poste|operatore|assistenza|curia|tipografia|osteria|compagnia|segreteria|polizia|sindacato|noleggio|lido|negozio|scuola|centro|laboratorio|istituto|avvisi|spedizioni|treni|newsletter|supermercato|energia|streaming|libreria|ottica|dentista|parrucchiera|fisioterapista|taxi|bus|trattoria|bar |locale|caf|rider|vigilanza|risorse umane|mutuo|tribunale|prefettura|redazione|giornale|sicilia bus|backstage|foto matrimonio|insieme|ponte|università|assicurazione|osteria/i;
const SKIN=["#f6d3b8","#eac09a","#d8a77b","#b97f55","#8d5a3b","#f1c7a5"],HAIR=["#2b1d16","#4a2f20","#7a4b2a","#b07a3c","#d9b26f","#8c8c8c","#1c1c1c","#5a3825"],BG=["#cfe3ff","#ffd9cf","#d8f3dc","#efe0ff","#fff1c1","#d6f5f2","#ffe0ef","#e2e8f0"];
function avatar(name,size){size=size||40;const n=String(name||"?"),k=hash(n);
 if(GROUP.test(n)||/Gruppo/.test(n))return `<span class="rav" style="width:${size}px;height:${size}px;background:#8e8e93;font-size:${size*.5}px">👥</span>`;
 if(BIZ.test(n)){const ic=/banca|mutuo/i.test(n)?"🏦":/corriere|spedizioni/i.test(n)?"📦":/taxi/i.test(n)?"🚕":/treni|bus/i.test(n)?"🚆":/palestra/i.test(n)?"🏋️":/farmacia/i.test(n)?"💊":/polizia|vigilanza/i.test(n)?"🛡️":/scuola|università|istituto/i.test(n)?"🏫":/pasticceria|bar|caf/i.test(n)?"☕":/ristorante|trattoria|osteria/i.test(n)?"🍴":/hotel|albergo/i.test(n)?"🛎️":/giornale|redazione/i.test(n)?"📰":"🏢";
  return `<span class="rav" style="width:${size}px;height:${size}px;background:hsl(${k%360},55%,52%);font-size:${size*.48}px">${ic}</span>`;}
 const g=typeof VOICE!=="undefined"?VOICE.gender(n):(k%2?"f":"m"),sk=SKIN[k%SKIN.length],hr=HAIR[(k>>3)%HAIR.length],bg=BG[(k>>5)%BG.length],sh=`hsl(${(k>>7)%360},45%,45%)`,old=/nonn|zi[ao] |sig|don |dott|prof|signor/i.test(n)||(k>>11)%7===0;
 const hair=g==="f"?`<path d="M9 21c0-9 5-14 11-14s11 5 11 14v10h-4v-9c-2-3-5-5-7-8-2 3-6 5-7 8v9H9z" fill="${old?"#bdbdbd":hr}"/>`:((k>>9)%5===0?"":`<path d="M11 18c0-7 4-11 9-11s9 4 9 11c-2-3-5-4-9-4s-7 1-9 4z" fill="${old?"#9e9e9e":hr}"/>`);
 const beard=g==="m"&&(k>>13)%4===0?`<path d="M14 23c1 5 4 7 6 7s5-2 6-7c-2 2-4 2-6 2s-4 0-6-2z" fill="${hr}" opacity=".85"/>`:"";
 const glasses=(k>>15)%5===0?`<g fill="none" stroke="#333" stroke-width="1"><circle cx="16.5" cy="20" r="2.6"/><circle cx="23.5" cy="20" r="2.6"/><path d="M19.1 20h1.8"/></g>`:"";
 return `<span class="rav" style="width:${size}px;height:${size}px"><svg viewBox="0 0 40 40" width="${size}" height="${size}"><rect width="40" height="40" fill="${bg}"/><path d="M5 40c1-8 7-12 15-12s14 4 15 12z" fill="${sh}"/><rect x="17" y="24" width="6" height="6" fill="${sk}"/><ellipse cx="20" cy="19" rx="8" ry="9.5" fill="${sk}"/>${hair}${beard}${glasses}<circle cx="17" cy="19.5" r=".9" fill="#2b2b2b"/><circle cx="23" cy="19.5" r=".9" fill="#2b2b2b"/><path d="M17.5 24.2q2.5 1.6 5 0" stroke="#9a5a4a" stroke-width=".9" fill="none" stroke-linecap="round"/></svg></span>`;}

/* ---------- chat ---------- */
const visM=c=>c.m.filter(m=>!m[3]||S.unl[m[3]]);
const isUnread=c=>!S.open["c_"+c.id]&&visM(c).some(m=>m[1]===0);
const chats=()=>E.chats.filter(c=>!c.u||S.unl[c.u]);
function chatList(){
 return bar("Messaggi")+`<div class="rc-h">Chat</div><div class="rc-s">🔍 Cerca</div><div class="rcl">${chats().map(c=>{const v=visM(c),l=v[v.length-1]||c.m[0]||["",0,""];const lk=c.lock&&!S.open[c.lock];const un=isUnread(c);
  const prev=lk?"🔒 Chat protetta da codice":(/^\(vocale\)/i.test(l[2])?"🎤 Messaggio vocale":(l[1]===1?"Tu: ":"")+l[2]);
  return `<button type="button" class="rc-row${un?" un":""}" data-act="open" data-s="${X(c.id)}">${avatar(c.name,48)}<span class="rc-t"><span class="rc-1"><b>${X(c.name)}</b><small>${X(String(l[0]||"").replace(/^sett\. scorsa$/,"lun"))}</small></span><span class="rc-2"><span>${X(prev)}</span>${un?`<i>${Math.min(9,v.filter(m=>m[1]===0).length)}</i>`:""}</span></span></button>`;}).join("")}</div>`;}
function chatView(c){
 S.open["c_"+c.id]=true;
 if(c.lock&&!S.open[c.lock])return bar(c.name,"msg")+pinPad(c.lock);
 const v=visM(c);let lastDay=null,out="";
 const seen=(hash(c.name)%4)?"online":"ultimo accesso oggi alle "+(typeof phoneTime==="function"?phoneTime():"");
 v.forEach((m,i)=>{const t=String(m[0]||"");const tk=t.split(/\s+/);const day=DAYW.test(t)?(/^\d/.test(tk[0])&&tk[1]&&!/\d[:.]\d/.test(tk[1])?tk[0]+" "+tk[1]:tk[0]).replace(/^sett\.$/,"Settimana scorsa"):null;
  if(day&&day!==lastDay){lastDay=day;out+=`<div class="rday">${X(day.charAt(0).toUpperCase()+day.slice(1))}</div>`;}
  if(m[1]===2){out+=`<div class="sys">${X(m[2])}</div>`;return;}
  const vn=/^\(vocale\)/i.test(m[2]);const time=(t.match(/\d{1,2}[:.]\d{2}/)||[""])[0];
  out+=`<div class="bub${m[1]?" me":""}${m[3]?" rec":""}${vn?" vn":""}">${vn?vnote(m[2],m[1]?E.owner:c.name):esc(m[2])}<small>${X(time||t)}${m[3]?(m[3].slice(0,3)==="ev_"?" · nuovo":" · recuperato"):""}${m[1]?` <span class="tick">✓✓</span>`:""}</small></div>`;});
 return `<div class="bar rc-bar"><button type="button" class="back" data-act="go" data-v="msg">‹</button>${avatar(c.name,34)}<span class="rc-who"><b>${X(c.name)}</b><small>${X(c.sub||seen)}</small></span><span class="rc-ic">📞</span></div><div class="chat">${out}</div>`;}

/* ---------- pallini rossi ---------- */
function badge(id){try{if(!E||!S)return 0;
 if(id==="msg")return chats().filter(isUnread).length;
 if(id==="mail")return (E.lists.mail||[]).filter(e=>(!e.u||S.unl[e.u])&&!S.open["r_"+e.id]).length>0?Math.min(9,(E.lists.mail||[]).filter(e=>!S.open["r_"+e.id]).length):0;
 if(id==="tel")return S.open.telSeen?0:(E.lists.tel||[]).filter(e=>(!e.u||S.unl[e.u])&&/persa|non risposta/i.test(e.sub||"")).length;
 return 0;}catch(e){return 0;}}

/* ---------- blocco ---------- */
function code(){const used=new Set(Object.values(E.pins||{}).map(String));let c=String(1000+(hash("lk"+E.n)%9000));while(used.has(c))c=String((+c+137)%9000+1000);return c;}
function notifs(){const out=[];const cs=chats().filter(c=>!(c.lock&&!S.open[c.lock]));
 cs.slice(0,5).forEach(c=>{const v=visM(c).filter(m=>m[1]===0);const l=v[v.length-1];if(l)out.push(["msg","Messaggi",c.name,/^\(vocale\)/i.test(l[2])?"🎤 Messaggio vocale":l[2],l[0]]);});
 (E.lists.tel||[]).filter(e=>/persa/i.test(e.sub||"")).slice(0,1).forEach(e=>out.push(["tel","Telefono",e.title,"Chiamata persa",String(e.sub||"").split("·")[0]]));
 (E.lists.mail||[]).filter(e=>!e.lock).slice(0,1).forEach(e=>out.push(["mail","Mail",e.title,e.sub||"",e.meta||""]));
 return out.slice(0,3);}
function lock(){const ns=notifs();const pin=S._lk||"";
 const icon=a=>({msg:"💬",tel:"📞",mail:"✉️"}[a]||"🔔");
 return `<div class="home lock"><div class="lk-top">🔒</div><div><div class="clock">${phoneTime()}</div><div class="date">${E.homeDate}</div></div>
 <div class="lk-n">${ns.map(n=>`<div class="lk-card"><span class="lk-ic">${icon(n[0])}</span><span class="lk-b"><span class="lk-1"><b>${X(n[1])}</b><small>${X(String(n[4]||"").slice(0,12))}</small></span><b class="lk-w">${X(n[2])}</b><span class="lk-t">${X(String(n[3]).slice(0,80))}</span></span></div>`).join("")}</div>
 <div class="lk-pad"><div class="lk-msg">Inserisci il codice<small>Te l'ha dato il cliente: lo trovi nella scheda «Indagine»</small></div><div class="lk-dots">${[0,1,2,3].map(i=>`<i class="${i<pin.length?"on":""}"></i>`).join("")}</div>
 <div class="lk-keys">${["1","2","3","4","5","6","7","8","9","","0","⌫"].map(k=>k?`<button type="button" data-lk="${k}">${k}</button>`:"<span></span>").join("")}</div></div></div>`;}
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-lk]");if(!b||typeof S==="undefined")return;e.stopPropagation();const k=b.dataset.lk;S._lk=S._lk||"";
 if(k==="⌫")S._lk=S._lk.slice(0,-1);else if(S._lk.length<4)S._lk+=k;
 if(S._lk.length===4){if(S._lk===code()){S.unlocked=true;S._lk="";if(typeof buzz==="function")buzz([30,40,30]);if(typeof persist==="function")persist();}else{if(typeof buzz==="function")buzz([120,60,120]);S._lk="";const p=document.querySelector(".lk-pad");if(p){p.classList.remove("shake");void p.offsetWidth;p.classList.add("shake");}setTimeout(()=>render(true),350);return;}}
 render(true);},true);

/* ---------- notifiche in diretta, batteria ---------- */
function banner(app,title,text,sound){const ph=document.querySelector(".phone");if(!ph)return;let b=document.createElement("div");b.className="rbanner";
 b.innerHTML=`<span class="rb-ic">${{dove:"📍",bat:"🔋",news:"📰",promo:"🛍️",meteo:"🌤️"}[app]||"🔔"}</span><span><b>${X(title)}</b><span>${X(text)}</span></span>`;ph.appendChild(b);
 requestAnimationFrame(()=>b.classList.add("on"));setTimeout(()=>{b.classList.remove("on");setTimeout(()=>b.remove(),500);},5200);
 if(typeof buzz==="function")buzz(sound?[300,120,300,120,300]:120);
 if(sound&&typeof tone==="function"){for(let i=0;i<6;i++){tone(1180,i*.32,.14,.12);tone(1560,i*.32+.15,.12,.1);}}}
function elapsed(){return E.timer?(E.timer-(S.left||0)):(S.el||0);}
function battery(){const st=30+hash("bat"+E.n)%60;return Math.max(3,st-Math.floor(elapsed()/40));}
function liveEvents(){const el=elapsed(),cat=Math.floor((E.n-1)/20),alive=cat!==1&&E.n<=80,own=String(E.owner||"").split(/[ ·]/)[0];
 const L=[[240,"news","Notizie","Traffico in tangenziale: code di 4 km in direzione centro."],[540,alive?"dove":"promo",alive?"Dov'è":"Offerte",alive?`${own} sta cercando questo telefono dalla posizione di casa.`:"Solo oggi: spedizione gratuita su tutto il catalogo."],[900,"meteo","Meteo","Pioggia in arrivo tra circa un'ora."],[1320,alive?"dove":"news",alive?"Dov'è":"Notizie",alive?`È stato riprodotto un suono su questo telefono. ${own} lo sta cercando.`:"Ultima ora: sciopero dei trasporti venerdì."]];
 S.ev=S.ev||{};for(const [t,app,ti,tx] of L){const k="rb"+t;if(el>=t&&!S.ev[k]){S.ev[k]=1;if(typeof persist==="function")persist();banner(app,ti,tx,app==="dove"&&/suono/.test(tx));break;}}
 const b=battery();if(b<=10&&!S.ev.bat10){S.ev.bat10=1;banner("bat","Batteria scarica","Batteria al 10%. Collega il caricabatterie.");}}
function tick(){try{if(!E||!S||!S.ep||S.done)return;const sb=document.getElementById("stBat");const b=battery();if(sb)sb.innerHTML=`${b}% <i class="batt${b<=20?" low":""}"><i style="width:${b}%"></i></i>`;
 const night=(()=>{const h=+String(typeof phoneTime==="function"?phoneTime():"12").slice(0,2);return h>=20||h<7;})();const ph=document.querySelector(".phone");if(ph)ph.classList.toggle("night",night);
 if(S.unlocked&&S.running!==false)liveEvents();}catch(e){}}

/* ---------- centro di controllo ---------- */
document.addEventListener("click",e=>{const st=e.target.closest&&e.target.closest(".status");const cc=document.querySelector(".rcc");
 if(st&&!cc){const ph=document.querySelector(".phone");if(!ph)return;const d=document.createElement("div");d.className="rcc";const m=typeof SAVE!=="undefined"&&SAVE.mute;
  d.innerHTML=`<div class="cc-grid"><div class="cc-blk"><span class="on">✈️</span><span class="on b">📶</span><span class="on b">🛜</span><span class="on b">🔵</span></div><div class="cc-blk np"><small>In riproduzione</small><b>Nessun brano</b></div><span class="cc-t">🔒</span><span class="cc-t">🌙</span><span class="cc-sl"><i style="height:70%"></i><b>☀️</b></span><span class="cc-sl"><i style="height:${m?0:55}%"></i><b>${m?"🔇":"🔊"}</b></span><span class="cc-t">🔦</span><span class="cc-t">⏱️</span><span class="cc-t">🧮</span><span class="cc-t">📷</span></div><p>Tocca fuori per chiudere</p>`;ph.appendChild(d);requestAnimationFrame(()=>d.classList.add("on"));e.stopPropagation();return;}
 if(cc&&!e.target.closest(".cc-grid")){cc.classList.remove("on");setTimeout(()=>cc.remove(),250);e.stopPropagation();}},true);

/* ---------- Contatti e Social (schermate) ---------- */
function people(){const seen=new Map();const add=(n,rel)=>{n=String(n||"").trim();if(!n||seen.has(n)||/^(Numero sconosciuto|Privato)$/i.test(n))return;seen.set(n,rel||"");};
 chats().forEach(c=>add(c.name,c.sub));(E.lists.tel||[]).forEach(e=>add(e.title,""));(E.lists.mail||[]).forEach(e=>add(e.title,""));
 return [...seen.entries()].sort((a,b)=>a[0].localeCompare(b[0],"it"));}
const phone=n=>{const k=hash(n);return `+39 3${20+k%79} ${String(k%1000).padStart(3,"0")} ${String((k>>10)%10000).padStart(4,"0")}`;};
function contactsScreen(){const sub=S.sub;const P=people();
 if(sub&&sub.startsWith("ct_")){const n=decodeURIComponent(sub.slice(3));const rel=(P.find(p=>p[0]===n)||[])[1];const biz=BIZ.test(n)||GROUP.test(n);
  return bar("Contatti","x_contacts")+`<div class="xs ctd">${avatar(n,96)}<h3>${X(n)}</h3><div class="td-acts"><span>💬<i>messaggio</i></span><span>📞<i>chiama</i></span><span>📹<i>video</i></span><span>✉️<i>mail</i></span></div>
  <div class="xr"><span>cellulare</span><b>${biz?"—":phone(n)}</b></div>${rel?`<div class="xr"><span>note</span><b>${X(rel)}</b></div>`:""}</div>`;}
 let L="",cur="";P.forEach(([n])=>{const f=n.normalize("NFD").replace(/[^A-Za-z]/g,"").charAt(0).toUpperCase()||"#";if(f!==cur){cur=f;L+=`<div class="ag">${f}</div>`;}L+=`<button type="button" class="rc-row" data-ct="${X(encodeURIComponent(n))}">${avatar(n,36)}<span class="rc-t"><b>${X(n)}</b></span></button>`;});
 return bar("Contatti")+`<div class="xs ctl"><h3>Contatti</h3><div class="ct-me">${avatar(E.owner,52)}<span><b>${X(String(E.owner).split(" · ")[0])}</b><small>La mia scheda</small></span></div>${L}</div>`;}
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-ct]");if(!b)return;e.stopPropagation();S.view="x_contacts";S.sub="ct_"+b.dataset.ct;render();},true);
function socialScreen(){const ph=(E.photos||[]).filter(p=>!p.lock||S.open[p.lock]).filter(p=>E.scenes[p.sc]&&!/LIB\.(doc|shot|docFlat)\(/.test(String(E.scenes[p.sc]))&&!/^(Screenshot|Documento|Ricevuta)/i.test(p.title));const own=String(E.owner).split(" · ")[0];const handle=own.toLowerCase().normalize("NFD").replace(/[^a-z ]/g,"").replace(/ /g,".");
 const sub=S.sub;if(sub&&sub.startsWith("sp_")){const p=ph.find(x=>x.id===sub.slice(3));if(p){const k=hash(p.id+E.n);const names=people().map(x=>x[0]).filter(n=>!BIZ.test(n)&&!GROUP.test(n));const com=["Che bella! 😍","Bellissima","Ma dove siete?","❤️❤️","Che ricordi!","Top 🔥"];
  return bar("Social","x_social")+`<div class="sp"><div class="sp-h">${avatar(own,30)}<b>${X(handle)}</b></div><div class="sp-img">${svg(p.sc)}</div><div class="sp-a">♡ 💬 ↗</div><div class="sp-l"><b>${20+k%180} Mi piace</b></div><div class="sp-c"><b>${X(handle)}</b> ${X(p.title)}</div>${names.slice(0,2+k%2).map((n,i)=>`<div class="sp-c"><b>${X(n.split(" ")[0].toLowerCase())}</b> ${com[(k+i)%com.length]}</div>`).join("")}<div class="sp-t">${X(p.t||"")}</div></div>`;}}
 return bar("Social")+`<div class="so"><div class="so-h">${avatar(own,76)}<div class="so-n"><span><b>${ph.length}</b>post</span><span><b>${200+hash(own)%900}</b>follower</span><span><b>${150+hash(own+"f")%500}</b>seguiti</span></div></div><div class="so-b"><b>${X(own)}</b><small>@${X(handle)}</small></div><div class="so-g">${ph.map(p=>`<button type="button" data-sp="${X(p.id)}">${svg(p.sc)}</button>`).join("")}</div></div>`;}
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-sp]");if(!b)return;e.stopPropagation();S.view="x_social";S.sub="sp_"+b.dataset.sp;render();},true);

window.REAL={avatar,chatList,chatView,badge,lock,code,tick,contactsScreen,socialScreen};
/* il codice di sblocco va nel brief di ogni caso */
if(typeof EPISODES!=="undefined")setTimeout(()=>{},0);
})();
