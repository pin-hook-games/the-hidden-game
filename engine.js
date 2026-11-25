/* ---------------- stato ---------------- */
let E=null;
const fresh=()=>({ep:0,view:"home",sub:null,open:{},qi:0,hints:0,wrong:0,tip:false,bad:false,news:"",unl:{},pin:"",tab:"phone",left:0,running:false,done:false,ev:{},spot:null});
let S=fresh();
const $=id=>document.getElementById(id);
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\n/g,"<br>");
const norm=s=>String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]/g,"");
const svg=sc=>`<svg viewBox="0 0 400 300" role="img" aria-hidden="true">${E.scenes[sc]()}</svg>`;
/* ---------------- salvataggi ----------------
   Tutto sta in una sola voce della memoria del browser: gli incarichi chiusi con le stelle (done)
   e l'indagine lasciata a metà (cur). Se la memoria non è disponibile il gioco funziona lo stesso
   e il menu lo dice; il codice progressi permette di riportare gli incarichi chiusi su un altro dispositivo. */
const SAVE_KEY="ton-save-v1",MAXN=CATS.length*20;
const TUT={id:"tut",from:81,name:"Tutorial",brand:["Come si","gioca"],desc:"Un caso di prova, guidato, per imparare in due minuti."};
const catOf=n=>n>80?TUT:CATS[Math.floor((n-1)/20)],numIn=n=>((n-1)%20)+1,nn=n=>String(numIn(n)).padStart(2,"0");
let MENU_CAT=null;
let SAVE={done:{},cur:null},canStore=true;
(function(){
  try{const r=JSON.parse(localStorage.getItem(SAVE_KEY)||"null");if(r&&typeof r==="object"){SAVE.done=r.done&&typeof r.done==="object"?r.done:{};SAVE.cur=r.cur&&typeof r.cur==="object"?r.cur:null;SAVE.mute=!!r.mute;}
    for(let n=1;n<=MAXN;n++){const o=+localStorage.getItem("ton-ep"+n)||0;if(o>(SAVE.done[n]||0))SAVE.done[n]=o;}
    localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE));
  }catch(e){canStore=false;}
})();
function store(){SAVE.at=Date.now();try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE));canStore=true;}catch(e){canStore=false;}}
/* Seconda copia sull'account Claude di chi gioca (capacità db): serve dove la memoria del browser non resta,
   come nell'app su telefono. Un solo documento privato per persona. Si scrive solo dopo un'azione del giocatore,
   mai per il solo scorrere del timer, e una scrittura alla volta. Se non è disponibile il gioco prosegue con la copia locale. */
let cloud=null,cloudState="off",cloudBusy=false,cloudDirty=false,cloudTimer=0;
const onMenu=()=>!E;
async function cloudFlush(){
  if(!cloud||cloudState!=="on")return;
  if(cloudBusy){cloudDirty=true;return;}
  cloudBusy=true;cloudDirty=false;
  try{await cloud.set(JSON.parse(JSON.stringify({done:SAVE.done,cur:SAVE.cur,at:SAVE.at||Date.now()})));}
  catch(e){if(e&&e.code==="unavailable")cloudDirty=true;else{cloudState="ro";if(onMenu())renderMenu();}}
  cloudBusy=false;
  if(cloudDirty){clearTimeout(cloudTimer);cloudTimer=setTimeout(cloudFlush,3000);}
}
function cloudPush(){if(!cloud||cloudState!=="on")return;clearTimeout(cloudTimer);cloudTimer=setTimeout(cloudFlush,1000);}
async function cloudInit(){
  try{
    if(typeof window==="undefined"||!window.claude||typeof window.claude.use!=="function")return;
    cloudState="loading";if(onMenu())renderMenu();
    const [user,db]=await Promise.all([window.claude.use("user"),window.claude.use("db")]);
    const uid=user&&db?await user.id():null;
    if(!uid){cloudState="off";if(onMenu())renderMenu();return;}
    const ref=db.doc("data/users/"+uid+"/save");
    const snap=await Promise.race([ref.get(),new Promise((_,no)=>setTimeout(()=>no({code:"unavailable"}),10000))]);
    const r=snap&&snap.exists?snap.data():null;
    let pull=false,push=!r;
    if(r){
      const rd=r.done&&typeof r.done==="object"?r.done:{};
      for(let n=1;n<=MAXN;n++){const a=+rd[n]||0,b=+SAVE.done[n]||0;if(a>b){SAVE.done[n]=a;pull=true;}else if(b>a)push=true;}
      if((+r.at||0)>(SAVE.at||0)){if(JSON.stringify(r.cur||null)!==JSON.stringify(SAVE.cur||null)){SAVE.cur=r.cur&&typeof r.cur==="object"?JSON.parse(JSON.stringify(r.cur)):null;pull=true;}}
      else if(JSON.stringify(r.cur||null)!==JSON.stringify(SAVE.cur||null))push=true;
    }
    cloud=ref;cloudState="on";
    if(pull){const at=SAVE.at;try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE));}catch(e){canStore=false;}SAVE.at=at;}
    if(push){SAVE.at=SAVE.at||Date.now();cloudPush();}
    if(onMenu())renderMenu();
  }catch(e){cloudState="off";if(onMenu())renderMenu();}
}
const KEEP=["el","ep","qi","hints","wrong","tip","news","unl","open","left","view","sub","tab","ev"];
function persist(localOnly){
  if(!E||!S.ep||S.done){return;}
  const c={};KEEP.forEach(k=>c[k]=S[k]);c.at=Date.now();SAVE.cur=c;store();
  if(localOnly!==true)cloudPush();
}
function dropCur(){if(SAVE.cur){SAVE.cur=null;store();}cloudPush();}
const curOf=n=>SAVE.cur&&SAVE.cur.ep===n&&(SAVE.cur.qi>0||SAVE.cur.left<(EPISODES[n]&&EPISODES[n].timer||0))?SAVE.cur:null;
/* codice progressi: le stelle dei 20 incarichi in base 4, scritte in base 36 con una cifra di controllo */
function makeCode(){
  let v=0n;for(let n=MAXN;n>=1;n--)v=v*4n+BigInt(Math.min(3,SAVE.done[n]||0));
  const b=v.toString(36).toUpperCase();let k=0;for(const ch of b)k=(k*31+ch.charCodeAt(0))%36;
  return b+k.toString(36).toUpperCase();
}
function readCode(txt){
  const c=String(txt).toUpperCase().replace(/[^0-9A-Z]/g,"");if(c.length<2)return false;
  const b=c.slice(0,-1);let k=0;for(const ch of b)k=(k*31+ch.charCodeAt(0))%36;
  if(k.toString(36).toUpperCase()!==c.slice(-1))return false;
  let v=0n;try{for(const ch of b)v=v*36n+BigInt(parseInt(ch,36));}catch(e){return false;}
  const st=[];for(let n=1;n<=MAXN;n++){st.push(Number(v%4n));v/=4n;}
  if(v!==0n)return false;
  for(let n=1;n<=MAXN;n++){if(st[n-1]&&!st.slice(n-numIn(n),n-1).every(x=>x>0))return false;}
  st.forEach((x,i)=>{if(x>(SAVE.done[i+1]||0))SAVE.done[i+1]=x;});store();cloudPush();return true;
}
const DONE=new Set();
const isDone=n=>DONE.has(n)||best(n)>0;
const canPlay=n=>!!EPISODES[n]&&(numIn(n)===1||isDone(n-1));
const best=n=>SAVE.done[n]||0;
const saveBest=(n,s)=>{if(s>best(n)){SAVE.done[n]=s;}store();cloudPush();};
let toastTimer;
function toast(msg){const t=$("toast");t.textContent=msg;t.className="toast on";clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.className="toast",2600);}

/* ---------------- telefonate e messaggi in arrivo ----------------
   Gli eventi stanno in EVENTS (events.js). Alla prima apertura dell'incarico finiscono dentro i dati del telefono,
   nascosti da una chiave: quando l'evento scatta la chiave si apre e la telefonata o il messaggio restano consultabili. */
let RING=null,ringTimer=0,ringLoop=0,bannerTimer=0,AC=null,bannerEv=null;
function tone(f,at,len,vol){
  try{
    if(typeof window==="undefined")return;const C=window.AudioContext||window.webkitAudioContext;if(!C||SAVE.mute)return;
    AC=AC||new C();if(AC.state==="suspended")AC.resume();
    const o=AC.createOscillator(),g=AC.createGain();o.type="sine";o.frequency.value=f;g.gain.value=0;
    g.gain.setValueAtTime(0,AC.currentTime+at);g.gain.linearRampToValueAtTime(vol||.12,AC.currentTime+at+.02);g.gain.linearRampToValueAtTime(0,AC.currentTime+at+len);
    o.connect(g);g.connect(AC.destination);o.start(AC.currentTime+at);o.stop(AC.currentTime+at+len+.05);
  }catch(e){}
}
function buzz(p){try{if(!SAVE.mute&&typeof navigator!=="undefined"&&navigator.vibrate)navigator.vibrate(p);}catch(e){}}
function ringOnce(){tone(880,0,.35);tone(660,0,.35);tone(880,.5,.35);tone(660,.5,.35);buzz([350,150,350]);}
function injectEvents(n){
  if(E._ev)return;E._ev=true;E.events=E.events||(typeof EVENTS!=="undefined"&&EVENTS[n])||[];
  E.events.forEach(ev=>{
    const k="ev_"+ev.id;
    if(ev.kind==="call"){if(E.lists.tel)E.lists.tel.unshift({id:k,u:k,title:ev.from,sub:"adesso · in entrata",meta:"Durante l'indagine",body:"Chiamata arrivata mentre avevi tu il telefono.\n"+ev.lines.join("\n")});}
    else{let c=E.chats.find(x=>x.name===ev.from);if(!c){c={id:k,name:ev.from,sub:"",u:k,m:[]};E.chats.unshift(c);}c.m.push(["adesso",0,ev.text,k]);ev.chat=c.id;}
  });
}
function fireEvents(){
  if(!E||!S.ep||S.done||RING)return;
  const ev=(E.events||[]).find(e=>!S.ev[e.id]&&S.qi>=e.q&&S.qi<E.qs.length);if(!ev)return;
  S.ev[ev.id]=1;S.unl["ev_"+ev.id]=true;persist();
  if(ev.kind==="call")ringStart(ev);else smsShow(ev);
}
function ringStart(ev){
  RING=ev;setTab("phone");render(true);
  $("ringSub").textContent="Chiamata in arrivo";$("ringName").textContent=ev.from;$("ringText").innerHTML="";
  $("ringBtns").innerHTML=`<button type="button" class="rb no" data-act="decline" aria-label="Rifiuta la chiamata">Rifiuta</button><button type="button" class="rb yes" data-act="pickup" aria-label="Rispondi alla chiamata">Rispondi</button>`;
  $("ring").hidden=false;$("ring").className="ring shake";
  ringOnce();clearInterval(ringLoop);ringLoop=setInterval(ringOnce,2200);
  clearTimeout(ringTimer);ringTimer=setTimeout(()=>ringEnd(true),22000);
}
function ringQuiet(){clearInterval(ringLoop);clearTimeout(ringTimer);buzz(0);if(typeof VOICE!=="undefined")VOICE.stop();}
function ringPick(){
  if(!RING)return;ringQuiet();$("ring").className="ring";
  $("ringSub").textContent="In chiamata · ascolti senza parlare";
  $("ringText").innerHTML=RING.lines.map(l=>`<p>${esc(l)}</p>`).join("");
  $("ringBtns").innerHTML=`<button type="button" class="rb no" data-act="hangup">Chiudi</button>`;if(typeof VOICE!=="undefined")VOICE.call(RING.from,RING.lines,$("ringText"));
}
function ringEnd(missed){
  if(!RING)return;ringQuiet();$("ring").hidden=true;RING=null;render(true);
  toast(missed?"Chiamata persa. La trovi nell'app Telefono, con quello che hanno detto in segreteria.":"Chiamata chiusa. Resta nel registro dell'app Telefono.");
  setTimeout(fireEvents,1500);
}
function smsShow(ev){
  bannerEv=ev;tone(1320,0,.12,.1);tone(1760,.14,.18,.1);buzz(200);
  $("banName").textContent=ev.from;$("banText").textContent=ev.text;$("banner").hidden=false;
  render(true);clearTimeout(bannerTimer);bannerTimer=setTimeout(()=>{$("banner").hidden=true;},8000);
}
function loadEpisode(n){
  E=EPISODES[n];injectEvents(n);
  $("stTime").textContent=phoneTime()||E.time;$("stDate").textContent=E.date;
  $("fStamp").textContent=`${catOf(E.n).name} · incarico n. ${nn(E.n)} · ${SEASON[E.n-1][2]} · telefono di ${E.owner.split(" ")[0]}`;
  $("fTitle").textContent=SEASON[E.n-1][0];$("fBrief").textContent=E.brief;$("fQuote").textContent=E.quote;
  $("fTime").textContent=E.timer?`Hai ${Math.round(E.timer/60)} minuti prima di doverlo restituire. Il tempo parte appena tocchi il telefono. Ogni risposta sbagliata toglie 45 secondi, ogni suggerimento un minuto.`:"";
}
const bar=(title,back)=>`<div class="bar"><button type="button" class="back" data-act="go" data-v="${back||"home"}">‹ Indietro</button><h2>${title}</h2></div>`;
const lockHint=w=>{const h=E.locks&&E.locks[w]&&E.locks[w].hint;return h?`<p class="lhint"><span>Suggerimento del codice</span>${esc(h)}</p>`:"";};
const pinPad=w=>`<div class="pin"><b>${E.lockName[w]||"Contenuto protetto"}</b>${lockHint(w)}<div class="dots" aria-live="polite">${"●".repeat(S.pin.length)}${"○".repeat(4-S.pin.length)}</div>
  <div class="keys">${[1,2,3,4,5,6,7,8,9].map(k=>`<button type="button" data-act="key" data-w="${w}" data-k="${k}">${k}</button>`).join("")}<span></span><button type="button" data-act="key" data-w="${w}" data-k="0">0</button><button type="button" data-act="key" data-w="${w}" data-k="x" aria-label="Cancella">⌫</button></div>
  <span class="meta">Codice di 4 cifre</span></div>`;
const locked=e=>e.lock&&!S.open[e.lock];

/* ---------------- elenco episodi ---------------- */
const THEME={trad:["#2a1620","#45202f"],omi:["#0b0d12","#232733"],furti:["#0e211b","#1d3a30"],pol:["#121e2b","#26384c"]};
function setTheme(id){const t=THEME[id]||["#0f1a2b","#1d3150"];const r=document.documentElement;if(r&&r.style&&r.style.setProperty){r.style.setProperty("--desk",t[0]);r.style.setProperty("--desk-2",t[1]);}}
function thumb(n){const ep=EPISODES[n];if(!ep)return "";if(ep.cover)return `<img src="img/${ep.cover}" alt="">`;const ok=(ep.photos||[]).filter(x=>!x.lock&&ep.scenes[x.sc]);const p=ok.find(x=>!/LIB\.(doc|shot)\(/.test(String(ep.scenes[x.sc])))||ok[0];if(!p)return "";try{return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ep.scenes[p.sc]()}</svg>`;}catch(err){return "";}}
function renderMenu(){
  const cat=MENU_CAT&&CATS.find(c=>c.id===MENU_CAT);
  const epsIn=c=>Array.from({length:20},(_,i)=>c.from+i);
  setTheme(cat&&cat.id);
  if(!cat){
    $("brand").innerHTML=`The Hidden <span>Game</span>`;
    $("lead").textContent="Sei un investigatore privato. Ti affidano un telefono e una domanda: fruga tra chat, foto, pagamenti e posizioni, e rispondi all'indagine una domanda dopo l'altra. Scegli il tipo di caso.";
    $("catStamp").textContent="Tipi di caso";
    $("eps").innerHTML=(EPISODES[81]?`<button type="button" class="ep open tutbtn" data-act="play" data-n="81"><span class="n">?</span><span><b>Come si gioca</b><small>Caso di prova guidato · 2 minuti${isDone(81)?" · completato":""}</small></span><span class="st">${isDone(81)?"Rigioca":"Inizia"}</span></button>`:"")+CATS.map((c,i)=>{
      const ns=epsIn(c),ready=ns.filter(n=>EPISODES[n]).length,done=ns.filter(n=>isDone(n)).length,cu=SAVE.cur&&ns.includes(SAVE.cur.ep)&&curOf(SAVE.cur.ep);
      return `<button type="button" class="ep cat${ready?" open":""}" data-act="cat" data-c="${c.id}" ${ready?"":"disabled"}><span class="cover">${(typeof CAT_IMG!=="undefined"&&CAT_IMG[c.id])?`<img src="${CAT_IMG[c.id]}" alt="">`:(typeof CAT_ART!=="undefined"?CAT_ART[c.id]||"":"")}</span><span class="n">${String(i+1).padStart(2,"0")}</span><span><b>${c.name}</b><small>${c.desc}</small><small class="cprog">${ready?`${done} di ${ready} casi chiusi${ready<20?" · altri in arrivo":""}`:"In preparazione"}</small></span><span class="st">${cu?"Riprendi":ready?"Apri":"In arrivo"}</span></button>`;
    }).join("");
  }else{
    $("brand").innerHTML=`${cat.brand[0]} <span>${cat.brand[1]}</span>`;
    $("lead").textContent=cat.desc;
    $("catStamp").textContent=`${cat.name} · 20 incarichi`;
    $("eps").innerHTML=`<button type="button" class="link back" data-act="cats">‹ Tutti i tipi di caso</button>`+epsIn(cat).map(n=>{
      const s=SEASON[n-1]||["Incarico "+nn(n),"","In preparazione"];
      const ok=canPlay(n),b=best(n),cu=ok&&curOf(n),st=cu?"Riprendi":ok?(b?"★".repeat(b)+"☆".repeat(3-b):isDone(n)?"Chiuso":"Gioca"):EPISODES[n]?"Bloccato":"In arrivo";
      if(cu)return `<button type="button" class="ep open cur" data-act="play" data-n="${n}"><span class="th">${thumb(n)}<span class="n">${nn(n)}</span></span><span><b>${s[0]}</b><small>In corso: domanda ${Math.min(cu.qi+1,EPISODES[n].qs.length)} di ${EPISODES[n].qs.length}${EPISODES[n].timer?" · restano "+fmt(Math.max(0,cu.left|0)):""}</small></span><span class="st">${st}</span></button>`;
      return `<button type="button" class="ep${ok?" open":""}" data-act="play" data-n="${n}" ${ok?"":"disabled"}><span class="th">${thumb(n)}<span class="n">${nn(n)}</span></span><span><b>${s[0]}</b><small>${s[2]}${ok||!EPISODES[n]?(s[1]?" · "+s[1]:""):" · chiudi prima l'incarico "+nn(n-1)}</small></span><span class="st">${st}</span></button>`;
    }).join("");
  }
  const tot=Object.keys(SAVE.done).filter(k=>SAVE.done[k]>0).length,stars=Object.values(SAVE.done).reduce((a,b)=>a+(+b||0),0);
  const box=$("saves");if(box)box.innerHTML=`<div class="stamp">Salvataggi</div>
    <p>${cloudState==="on"?"I progressi si salvano da soli sul tuo account Claude, a ogni risposta: li ritrovi su qualsiasi dispositivo in cui apri questa pagina con lo stesso account.":cloudState==="loading"?"Sto cercando i tuoi salvataggi...":canStore?"I progressi si salvano da soli su questo dispositivo, a ogni risposta. Il salvataggio sull'account non è attivo in questa pagina: se la memoria del telefono si svuota, usa il codice qui sotto.":"Su questo dispositivo non è possibile salvare: i progressi durano finché la pagina resta aperta. Annota il codice qui sotto."}</p>
    <p class="meta">Account: ${{on:"attivo",loading:"in caricamento",ro:"sola lettura, non posso scrivere",off:"non disponibile"}[cloudState]} · Dispositivo: ${canStore?"attivo":"non disponibile"}</p>
    <p class="meta">Incarichi chiusi: ${tot} su ${Object.keys(EPISODES).filter(k=>k<=80).length} · Stelle: ${stars} su ${Object.keys(EPISODES).filter(k=>k<=80).length*3}</p>
    ${tot?`<p>Codice progressi: <b class="code">${makeCode()}</b><br><small>Scrivilo su un altro dispositivo per ritrovare gli incarichi chiusi e le stelle.</small></p>`:""}
    <p><button type="button" class="link mutebtn" data-act="mute">${SAVE.mute?"Suoni e vibrazione: spenti. Tocca per accenderli":"Suoni e vibrazione delle chiamate: accesi. Tocca per spegnerli"}</button></p>
    <div class="coderow"><input id="codeIn" type="text" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Hai un codice? Scrivilo qui" aria-label="Codice progressi"><button type="button" class="btn" data-act="useCode">Usa</button></div>
    <p class="meta" id="codeMsg" role="status"></p>`;
}

/* ---------------- viste del telefono ---------------- */
function listView(app){
  let h=bar(E.names[app])+(app==="map"&&E.map?mapBox():"")+`<div class="list${app==="map"?" timeline":""}">`,g=null;
  E.lists[app].filter(e=>!e.u||S.unl[e.u]).forEach(e=>{
    if(e.g&&e.g!==g){g=e.g;h+=`<div class="grp">${g}</div>`;}
    const sub=locked(e)?"Protetto da codice":(e.sub||(e.body?e.body.split("\n")[0]:""));
    const inner=`<b>${e.title}</b><span>${esc(sub)}</span>${e.meta&&!locked(e)?`<small>${e.meta}</small>`:""}`;
    const ms=app==="map"&&!locked(e)&&typeof MAPX!=="undefined"&&MAPX.match(E,e);const go=ms?`<span class="tlgo" data-act="spot" data-s="${ms.id}" data-mfocus="${ms.id}" role="button" aria-label="Mostra sulla mappa">📍</span>`:"";
    h+=e.body?`<button type="button" class="row" data-act="open" data-s="${e.id}">${inner}${go}</button>`:`<div class="row still">${inner}${go}</div>`;
  });
  return h+"</div>";
}
function mapBox(){
  const sp=(E.spots||[]).filter(s=>!s.u||S.unl[s.u]);
  const pins=sp.map(s=>`<button type="button" class="spot${S.spot===s.id?" on":""}${s.lock&&!S.open[s.lock]?" lk":""}" style="left:${(s.x/4).toFixed(2)}%;top:${(s.y/2.6).toFixed(2)}%" data-act="spot" data-s="${s.id}" aria-label="${esc(s.title)}"><i>${s.lock&&!S.open[s.lock]?"🔒":(typeof MAPX!=="undefined"?MAPX.icon(s):(s.icon||"i"))}</i><em>${esc(s.label||s.title)}</em></button>`).join("");
  let card="";const s=sp.find(x=>x.id===S.spot);
  if(s)card=s.lock&&!S.open[s.lock]?`<div class="spotcard"><b>${esc(s.title)}</b>${pinPad(s.lock)}</div>`:`<div class="spotcard"><b>${esc(s.title)}</b>${s.sub?`<div class="meta">${esc(s.sub)}</div>`:""}<p>${esc(s.body)}</p>${s.sc&&E.scenes[s.sc]?`<div class="shot">${svg(s.sc)}</div>`:""}</div>`;
  else if(sp.length)card=`<p class="maptip">Tocca i punti sulla mappa per vedere che cosa c'è.</p>`;
  const mp=typeof MAPX!=="undefined"?(E._mapx||(E._mapx=MAPX.enrich(E.map,E.n))):E.map;
  const X=typeof MAPX!=="undefined";
  return `${X?MAPX.search(E):""}<div class="mapbox${X&&MAPX.night()?" night":""}"><div class="mapzoom" style="${X?MAPX.state(E.n):""}"><div class="mapwrap">${mp}${X?MAPX.routeSvg(E):""}${pins}</div></div>${X?MAPX.controls():""}</div>${X?MAPX.dayChips(E):""}${card}`;
}
function vnote(t,who){const txt=t.replace(/^\(vocale\)\s*/i,"").replace(/^«|»$/g,"");const sec=Math.max(2,Math.round(txt.length/14));return `<button type="button" class="vplay" data-act="voice" data-who="${esc(who)}" data-t="${esc(txt)}" aria-label="Ascolta il messaggio vocale">▶</button><span class="wave"></span><span class="dur">0:${String(sec).padStart(2,"0")}</span><details class="tr"><summary>Trascrizione</summary>${esc(txt)}</details>`;}
function detailView(app){
  const e=E.lists[app].find(x=>x.id===S.sub);
  if(locked(e))return bar(E.names[app],app)+pinPad(e.lock);
  const audible=(app==="rec"||app==="seg"||app==="tel"&&/«|segreteria/i.test(e.title+" "+e.body));
  return bar(E.names[app],app)+`<div class="pad"><div><b>${e.title}</b>${e.meta?`<div class="meta">${e.meta}</div>`:""}</div>${audible?`<button type="button" class="vplay big" data-act="voice" data-who="${esc(e.title)}" data-t="${esc(e.body)}">▶ Ascolta</button>`:""}<p>${esc(e.body)}</p></div>`;
}
function render(keepScroll){
  if(!E)return;
  const v=$("view"),y=v.scrollTop;let h="";
  if(S.view==="home"){
    h=`<div class="home"><div><div class="clock">${phoneTime()}</div><div class="date">${E.homeDate}</div></div>
    <div class="owner">Telefono di ${E.owner.split(" ")[0]}</div>
    ${typeof HOMEP!=="undefined"?HOMEP.render(E,icon):`<div class="apps">${E.apps.map(a=>`<button type="button" class="app" data-act="go" data-v="${a[0]}"><i style="background:${a[3]}">${icon(a[2])}</i>${a[1]}</button>`).join("")}</div>`}</div>`;
  }
  else if(S.view==="msg"&&!S.sub){
    h=bar("Messaggi")+`<div class="list">${E.chats.filter(c=>!c.u||S.unl[c.u]).map(c=>{const vis=c.m.filter(m=>!m[3]||S.unl[m[3]]),l=vis[vis.length-1]||c.m[0];return `<button type="button" class="row" data-act="open" data-s="${c.id}"><b>${c.name}</b><span>${c.lock&&!S.open[c.lock]?"Chat protetta da codice":esc(l[2])}</span><small>${l[0]}${c.sub?" · "+c.sub:""}</small></button>`}).join("")}</div>`;
  }
  else if(S.view==="msg"){
    const c=E.chats.find(x=>x.id===S.sub);
    if(c.lock&&!S.open[c.lock]){h=bar(c.name,"msg")+pinPad(c.lock);}else h=bar(c.name,"msg")+`<div class="chat">${c.m.filter(m=>!m[3]||S.unl[m[3]]).map(m=>m[1]===2?`<div class="sys">${esc(m[2])}</div>`:`<div class="bub${m[1]?" me":""}${m[3]?" rec":""}${/^\(vocale\)/i.test(m[2])?" vn":""}">${/^\(vocale\)/i.test(m[2])?vnote(m[2],m[1]?E.owner:c.name):esc(m[2])}<small>${m[0]}${m[3]?(m[3].slice(0,3)==="ev_"?" · nuovo":" · recuperato"):""}</small></div>`).join("")}</div>`;
  }
  else if(S.view==="gal"&&S.sub==="lock"){
    h=bar("Galleria","gal")+pinPad("album");
  }
  else if(S.view==="gal"&&!S.sub){
    const tile=p=>`<button type="button" class="shot" data-act="open" data-s="${p.id}" aria-label="${p.title}, ${p.t}">${svg(p.sc)}<em>${p.t}</em></button>`;
    const hid=E.photos.filter(p=>p.lock);
    h=bar("Galleria")+`<div class="grp">Recenti</div><div class="grid2">${E.photos.filter(p=>!p.lock).map(tile).join("")}</div>`+
      (hid.length?`<div class="grp">Album nascosto</div>`+(S.open.album?`<div class="grid2">${hid.map(tile).join("")}</div>`:`<button type="button" class="lockbtn" data-act="open" data-s="lock">Protetto da codice. Tocca per sbloccare</button>`):"");
  }
  else if(S.view==="gal"){
    const p=E.photos.find(x=>x.id===S.sub);
    h=bar(p.title,"gal")+`<div class="pad"><div class="shot">${svg(p.sc)}<em>${p.t}</em></div><div class="meta">${p.t}</div></div>`;
  }
  else if(E.lists[S.view]){const AV=typeof APPV!=="undefined"&&APPV[S.view];h=S.sub?(AV&&AV.detail?AV.detail(S.view):detailView(S.view)):(AV&&AV.list?AV.list(S.view):listView(S.view));}
  v.dataset.app=S.view;v.parentNode.dataset.home=S.view==="home"?"1":"0";
  v.innerHTML=h;v.scrollTop=keepScroll?y:0;
}

/* ---------------- indagine: una domanda alla volta ---------------- */
function renderSide(){
  if(!E)return;
  const tot=E.qs.length,q=E.qs[S.qi];
  $("tCase").textContent=`Indagine ${Math.min(S.qi,tot)}/${tot}`;
  $("prog").style.width=(S.qi/tot*100)+"%";
  if(q){
    const field=q.o?`<select id="ans" aria-label="La tua risposta"><option value="">Scegli</option>${q.o.map(o=>`<option value="${o[0]}">${o[1]}</option>`).join("")}</select>`
                   :`<input id="ans" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="60" placeholder="Scrivi la risposta" aria-label="La tua risposta">`;
    $("qbox").innerHTML=(S.news?`<div class="news"><b>Scoperta</b>${esc(S.news)}</div>`:"")+`<div class="qn">Domanda ${S.qi+1} di ${tot}</div><p class="qt">${q.q}</p>${field}
      <div class="acts"><button type="button" class="btn red" data-act="answer">Rispondi</button><button type="button" class="btn" data-act="hint" ${S.tip?"disabled":""}>${S.tip?"Suggerimento usato":"Suggerimento"}</button></div>
      <div class="fb${S.bad?" bad":S.tip?" tip":""}" role="status">${S.bad?"Non è la risposta giusta. Hai perso 45 secondi.":S.tip?q.hint:"Un suggerimento costa un minuto. Ogni due, una stella."}</div>`;
  }else $("qbox").innerHTML=`<div class="qn">Indagine chiusa</div><p class="qt">Hai risposto a tutte le domande.</p>`;
  $("log").innerHTML=S.qi?E.qs.slice(0,S.qi).map((x,i)=>`<li><b>${i+1}. ${x.show}</b>${x.news||""}</li>`).reverse().join(""):`<li class="empty">Ancora niente. Le risposte giuste restano qui come appunti.</li>`;
}
function answer(){
  const q=E.qs[S.qi],el=$("ans");if(!q||!el)return;
  const v=el.value;if(!String(v).trim())return;
  startTimer();
  const n=norm(v);
  const ok=q.o?v===q.a:((q.all&&q.all.every(t=>n.includes(t))&&n.length<=40)||(q.any&&q.any.some(t=>n.includes(t))&&n.length<=30)||(Array.isArray(q.a)&&q.a.some(x=>norm(x)===n)));
  if(ok){
    S.news=q.news||"";if(q.unlock){S.unl[q.unlock]=true;toast("Nuovo materiale sul telefono.");buzz(60);render(true);}
    S.qi++;S.tip=false;S.bad=false;
    if(S.qi>=E.qs.length){finish();return;}
    persist();renderSide();setTimeout(fireEvents,2200);
  }else{
    S.wrong++;S.bad=true;buzz([90,60,90]);
    if(E.timer&&S.running){S.left=Math.max(0,S.left-45);renderTimer();if(S.left<=0){timeUp();return;}}
    persist();renderSide();
  }
}
function hint(){
  if(S.tip)return;
  /* Qui andrà l'annuncio con ricompensa prima di mostrare il suggerimento. */
  S.tip=true;S.bad=false;S.hints++;
  if(E.timer&&S.running){S.left=Math.max(0,S.left-60);renderTimer();if(S.left<=0){timeUp();return;}}
  persist();renderSide();
}
function finish(){
  const stars=Math.max(1,3-Math.floor(S.wrong/3)-Math.floor(S.hints/2));
  saveBest(E.n,stars);DONE.add(E.n);S.running=false;S.done=true;dropCur();renderSide();
  const nx=EPISODES[E.n+1]&&numIn(E.n)<20?`<button type="button" class="btn red" data-act="play" data-n="${E.n+1}">Incarico successivo: ${SEASON[E.n][0]}</button>`:"";
  $("card").innerHTML=`<div class="stamp">Incarico n. ${nn(E.n)} · chiuso</div><h2>${E.win.title}</h2><div class="stars" aria-label="${stars} stelle su 3">${"★".repeat(stars)}${"☆".repeat(3-stars)}</div>
    <ol>${E.win.steps.map(s=>`<li>${s}</li>`).join("")}</ol><p>${E.win.end}</p>
    <p class="meta">Risposte sbagliate: ${S.wrong} · Suggerimenti: ${S.hints}${E.timer?` · Tempo rimasto: ${fmt(S.left)}`:""}</p>
    <div class="acts">${nx}<button type="button" class="btn solid" data-act="doneMenu">Torna agli incarichi</button></div>`;
  /* Qui andrà l'annuncio a schermo intero tra un episodio e il successivo. */
  $("verdict").classList.add("on");
}
function setTab(t){
  S.tab=t;document.body.dataset.tab=t;
  $("tPhone").setAttribute("aria-selected",t==="phone");$("tCase").setAttribute("aria-selected",t==="case");
}
function setScreen(s){document.body.dataset.screen=s;}
function play(n,restart){setTheme(catOf(n).id);
  const c=!restart&&curOf(n);
  S=fresh();S.ep=n;loadEpisode(n);S.left=E.timer||0;
  if(c){KEEP.forEach(k=>{if(c[k]!==undefined)S[k]=c[k];});S.ep=n;if(!(S.qi>=0&&S.qi<E.qs.length))S.qi=0;if(E.timer&&!(S.left>0))S.left=E.timer;if(!E.names[S.view]&&S.view!=="home")S.view="home";S.sub=null;S.tab="case";}
  else if(SAVE.cur&&(restart||SAVE.cur.ep!==n)){SAVE.cur=null;store();cloudPush();}
  setScreen("game");setTab("case");renderSide();render();renderTimer();
  if(c)toast("Indagine ripresa da dove l'avevi lasciata.");
}
function toMenu(){if(RING){ringQuiet();$("ring").hidden=true;RING=null;}$("banner").hidden=true;persist();if(E)MENU_CAT=catOf(E.n).id;S.ep=0;S.running=false;E=null;renderMenu();setScreen("menu");renderTimer();}

/* ---------------- timer ---------------- */
const fmt=t=>String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0");
function renderTimer(){
  const t=$("timer");
  if(!E||!E.timer){t.hidden=true;return;}
  t.hidden=false;
  t.textContent=fmt(S.left)+(S.running||S.done||S.left<=0?"":" · in pausa");
  t.className="timer"+(S.left<=120?" low":"");
}
function startTimer(){
  if(E&&E.timer&&!S.running&&!S.done&&S.left>0){S.running=true;renderTimer();}
}
function timeUp(){
  S.running=false;S.done=true;dropCur();
  $("card").innerHTML=`<div class="stamp">Incarico n. ${nn(E.n)} · fallito</div><h2>Tempo scaduto.</h2><p>${E.late||(E.owner.split(" ")[0]+" sta cercando il telefono. Il cliente ha dovuto riprenderlo di corsa, prima che tu potessi chiudere l'indagine.")}</p><p>Sei arrivato alla domanda ${Math.min(S.qi+1,E.qs.length)} di ${E.qs.length}. Puoi ricominciare l'incarico da capo.</p>
  <div class="acts"><button type="button" class="btn solid" data-act="retry">Riprova da capo</button><button type="button" class="btn" data-act="doneMenu">Torna agli incarichi</button></div>`;
  $("verdict").classList.add("on");
}
function phoneTime(){if(!E||!E.time)return "";const [h,m]=E.time.split(":").map(Number);const el=E.timer?(E.timer-(S.left||0)):(S.el||0);const t=((h*60+m+Math.floor(Math.max(0,el)/60))%1440+1440)%1440;return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0");}
function tick(){
  if(E&&S.ep&&!S.done){if(!E.timer)S.el=(S.el||0)+1;const pt=phoneTime();const st=$("stTime");if(st&&st.textContent!==pt){st.textContent=pt;const ck=document.querySelector(".home .clock");if(ck)ck.textContent=pt;}}
  if(!E||!E.timer||!S.running)return;
  if(S.left>0)S.left--;
  if(S.left===120)toast("Mancano due minuti alla riconsegna.");
  if(S.left%5===0)persist(true);
  renderTimer();
  if(S.left<=0)timeUp();
}
setInterval(tick,1000);

/* ---------------- eventi ---------------- */
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-act]");if(!b||b.disabled)return;const a=b.dataset.act;
  if(a==="play"){$("verdict").classList.remove("on");play(+b.dataset.n);}
  else if(a==="pickup"){ringPick();}
  else if(a==="voice"){if(typeof VOICE!=="undefined")VOICE.play(b.dataset.t,b.dataset.who,b);}
  else if(a==="decline"){ringEnd(true);}
  else if(a==="hangup"){ringEnd(false);}
  else if(a==="banner"){$("banner").hidden=true;if(bannerEv&&E){setTab("phone");S.view="msg";S.sub=bannerEv.chat||null;S.pin="";render();}}
  else if(a==="mute"){SAVE.mute=!SAVE.mute;store();cloudPush();renderMenu();}
  else if(a==="cat"){MENU_CAT=b.dataset.c;renderMenu();$("menu").scrollTop=0;}
  else if(a==="cats"){MENU_CAT=null;renderMenu();$("menu").scrollTop=0;}
  else if(a==="menu"){toMenu();}
  else if(a==="doneMenu"){$("verdict").classList.remove("on");toMenu();}
  else if(a==="retry"){$("verdict").classList.remove("on");play(E.n,true);}
  else if(a==="restart"){if(b.dataset.sure){delete b.dataset.sure;b.textContent="Ricomincia questo incarico";play(E.n,true);}else{b.dataset.sure="1";b.textContent="Sicuro? Tocca di nuovo per ricominciare";}}
  else if(a==="useCode"){const ok=readCode($("codeIn").value);if(ok){renderMenu();$("codeMsg").textContent="Codice accettato: incarichi e stelle ripristinati.";}else{$("codeMsg").textContent="Codice non valido. Controlla di averlo copiato tutto.";}}
  else if(a==="go"){S.view=b.dataset.v;S.sub=null;S.pin="";S.spot=null;startTimer();render();}
  else if(a==="open"){S.sub=b.dataset.s;S.pin="";startTimer();render();}
  else if(a==="tab"){setTab(b.dataset.t);if(b.dataset.t==="phone")startTimer();}
  else if(a==="answer"){answer();}
  else if(a==="hint"){hint();}
  else if(a==="spot"){S.spot=S.spot===b.dataset.s?null:b.dataset.s;S.pin="";startTimer();render(true);}
  else if(a==="key"){
    const k=b.dataset.k,w=b.dataset.w;startTimer();
    if(k==="x")S.pin=S.pin.slice(0,-1);else if(S.pin.length<4)S.pin+=k;
    if(S.pin.length===4){
      if(S.pin===E.pins[w]){S.open[w]=true;toast("Codice corretto.");buzz([40,60,40]);if(w==="album")S.sub=null;persist();}
      else{toast("Codice sbagliato.");buzz([120,80,120,80,120]);}
      S.pin="";
    }
    render();
  }
});
document.addEventListener("keydown",e=>{
  if(e.key==="Enter"&&e.target&&e.target.id==="ans"){e.preventDefault();answer();}
});
function start(saved){
  if(saved&&saved.ep&&EPISODES[saved.ep]&&typeof saved.qi==="number"){
    S=Object.assign(fresh(),saved);loadEpisode(S.ep);
    if(E.timer&&!(S.left>0)&&!S.done)S.left=E.timer; /* partita ripresa senza tempo valido: il conto riparte da capo */
    S.running=false;S.bad=false;setScreen("game");setTab(S.tab==="phone"?"phone":"case");renderSide();render();renderTimer();
  }else{renderMenu();setScreen("menu");}
}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){persist(true);clearTimeout(cloudTimer);cloudFlush();}});
if(window.addEventListener)window.addEventListener("pagehide",()=>persist(true));
cloudInit();
window.claude?.hot?.snapshot?.(()=>S);
if(window.claude?.hot?.ready)window.claude.hot.ready(start);else start(window.claude?.hot?.data??{});
