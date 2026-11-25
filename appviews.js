/* App più realistiche: Banca, Mail, Internet, Telefono, Calendario, Note.
   Usano gli stessi dati dei casi (E.lists[app]); cambia solo l'aspetto. Indizi e codici restano identici. */
(function(){
const h=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const br=s=>h(s).replace(/\n/g,"<br>");
const hash=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))|0;return Math.abs(x);};
const COL=["#ff9f0a","#30b0c7","#5e5ce6","#ff375f","#34c759","#0a84ff","#bf5af2","#ff6b3d","#64d2ff","#a2845e"];
const av=(name,sz)=>{const n=String(name||"?").replace(/^[^\p{L}]+/u,"");const ini=(n.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("")||"?").toUpperCase();return `<span class="av" style="background:${COL[hash(name)%COL.length]};${sz?`width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.4)}px`:""}">${h(ini)}</span>`;};
const vis=app=>E.lists[app].filter(e=>!e.u||S.unl[e.u]);
const isLocked=e=>e.lock&&!S.open[e.lock];
const row=(e,inner,cls)=>e.body||isLocked(e)?`<button type="button" class="${cls}" data-act="open" data-s="${h(e.id)}">${inner}</button>`:`<div class="${cls} still">${inner}</div>`;
const groups=(list,fn)=>{let g=null,out="";list.forEach(e=>{if(e.g&&e.g!==g){g=e.g;out+=`<div class="ag">${h(g)}</div>`;}out+=fn(e);});return out;};
const lockedDetail=(app,e)=>bar(E.names[app],app)+pinPad(e.lock);
const find=app=>E.lists[app].find(x=>x.id===S.sub);

/* ---------- BANCA ---------- */
const AMT=/([+−-])\s?([\d.]+,\d{2})\s?€/;
function money(e){const t=[e.sub,e.title,e.meta].join(" · ");const m=t.match(AMT);if(!m)return null;return {sign:m[1]==="+"?"+":"−",v:m[2]};}
const BICON=[[/stipendio|bonifico in entrata|accredito|rimborso|\+/i,"💶"],[/supermerc|spesa|coop|conad|alimentari/i,"🛒"],[/benzina|carburante|distributore/i,"⛽"],[/bar|caff|pasticc/i,"☕"],[/ristorante|trattoria|osteria|pizzeria|cena|pranzo/i,"🍽️"],[/albergo|hotel|b&b|camera/i,"🏨"],[/farmacia/i,"💊"],[/treno|biglietto|volo|taxi|autostrada|pedaggio/i,"🚆"],[/bolletta|luce|gas|telefon/i,"💡"],[/prelievo|bancomat|contanti/i,"🏧"],[/fiori|fiorista/i,"💐"],[/gioiell|orolog/i,"💍"],[/streaming|abbonamento/i,"📺"],[/bonifico/i,"↗️"],[/scommess|bet|gioco/i,"🎲"],[/libr/i,"📚"],[/negozio|online|amazon|shop/i,"🛍️"]];
const bicon=e=>{const t=e.title+" "+(e.sub||"");for(const [re,i] of BICON)if(re.test(t))return i;return "💳";};
const dateOf=e=>String(e.sub||"").split("·").map(x=>x.trim()).filter(x=>!AMT.test(x)).join(" · ");
function bankList(app){
 const L=vis(app),last4=String(1000+hash(E.owner)%9000);
 const clue=L.some(e=>/saldo|disponibil/i.test([e.title,e.sub,e.body].join(" ")));
 const bal=(1200+hash(E.owner+"b")%3600)+","+String(hash(E.owner)%100).padStart(2,"0");
 const rows=groups(L,e=>{if(isLocked(e))return row(e,`<span class="bi">🔒</span><span class="bt"><b>Movimento protetto</b><small>Tocca per sbloccare</small></span>`,"bk-row");
  const m=money(e);return row(e,`<span class="bi">${bicon(e)}</span><span class="bt"><b>${h(e.title)}</b><small>${h(dateOf(e)||e.meta||"")}</small></span>${m?`<span class="ba ${m.sign==="+"?"in":"out"}">${m.sign} ${m.v} €</span>`:`<span class="ba">${h(e.sub||"")}</span>`}`,"bk-row");});
 return bar(E.names[app])+`<div class="bk"><div class="bk-card"><small>Conto corrente</small>${clue?"<b>Saldo nascosto</b>":`<b>${bal.replace(/\B(?=(\d{3})+(?!\d))/g,".")} €</b>`}<span>IT•• •••• •••• ${last4} · ${h(E.owner.split(" · ")[0])}</span></div><div class="bk-acts"><span>↗<i>Invia</i></span><span>↙<i>Ricevi</i></span><span>💳<i>Carte</i></span><span>📊<i>Spese</i></span></div><div class="bk-h">Movimenti</div><div class="bk-list">${rows}</div></div>`;
}
function bankDetail(app){const e=find(app);if(isLocked(e))return lockedDetail(app,e);const m=money(e),last4=String(1000+hash(E.owner)%9000);
 return bar(E.names[app],app)+`<div class="bk-det"><span class="bi big">${bicon(e)}</span><div class="bd-amt ${m&&m.sign==="+"?"in":""}">${m?m.sign+" "+m.v+" €":h(e.sub||"")}</div><div class="bd-t">${h(e.title)}</div><div class="bd-grid"><span>Data</span><b>${h(dateOf(e)||e.g||"—")}</b><span>Stato</span><b>Contabilizzato</b><span>Metodo</span><b>${m&&m.sign==="+"?"Bonifico":"Carta ••"+last4}</b>${e.meta?`<span>Info</span><b>${h(e.meta)}</b>`:""}</div>${e.body?`<div class="bd-note">${br(e.body)}</div>`:""}</div>`;}

/* ---------- MAIL ---------- */
function mailList(app){const L=vis(app);
 const rows=L.map((e,i)=>{const lk=isLocked(e);const prev=lk?"🔒 Messaggio protetto da codice":String(e.body||"").replace(/\n/g," ").slice(0,90);
  return row(e,`${av(e.title)}<span class="mt"><span class="m1"><b>${h(e.title)}</b><small>${h(e.meta||"")}</small></span><span class="m2">${h(e.sub||"(nessun oggetto)")}</span><span class="m3">${h(prev)}</span></span>${i<2&&!S.open["r_"+e.id]?`<i class="dot"></i>`:""}`,"ml-row");}).join("");
 return bar(E.names[app])+`<div class="ml"><div class="ml-h">Posta in arrivo</div><div class="ml-s">🔍 Cerca</div>${rows||`<p class="empty">Nessun messaggio</p>`}</div>`;}
function mailDetail(app){const e=find(app);if(isLocked(e))return lockedDetail(app,e);S.open["r_"+e.id]=true;
 return bar(E.names[app],app)+`<div class="ml-det"><h3>${h(e.sub||e.title)}</h3><div class="md-from">${av(e.title,38)}<span><b>${h(e.title)}</b><small>a me · ${h(e.meta||"")}</small></span></div><div class="md-body">${br(e.body)}</div><div class="md-acts"><span>↩ Rispondi</span><span>↪ Inoltra</span></div></div>`;}

/* ---------- INTERNET ---------- */
const isQuery=t=>!/\.[a-z]{2,4}\b/i.test(t)&&/^[a-zà-ù0-9'" ?¿,.-]+$/i.test(t)&&t===t.toLowerCase();
const slug=t=>String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,28);
function url(e){if(/\.[a-z]{2,4}\b/i.test(e.title))return e.title.toLowerCase();return isQuery(e.title)?"cerca?q="+e.title.trim().replace(/\s+/g,"+"):"www."+slug(e.title)+".it";}
function webList(app){const L=vis(app);
 const rows=groups(L,e=>row(e,`<span class="fav">${isQuery(e.title)?"🔍":h((e.title.replace(/^[^\p{L}]+/u,"")[0]||"•").toUpperCase())}</span><span class="wt"><b>${h(e.title)}</b><small>${h(url(e))}</small></span><span class="wtime">${h(e.sub||"")}</span>`,"wb-row"));
 return bar(E.names[app])+`<div class="wb"><div class="wb-bar"><span>🔒</span><span class="wb-u">Cerca o inserisci un indirizzo</span><span class="wb-tabs">${Math.max(2,L.length)}</span></div><div class="wb-h">Cronologia</div>${rows||`<p class="empty">Cronologia vuota</p>`}</div>`;}
function webDetail(app){const e=find(app);if(isLocked(e))return lockedDetail(app,e);
 return bar(E.names[app],app)+`<div class="wb"><div class="wb-bar"><span>🔒</span><span class="wb-u on">${h(url(e))}</span><span class="wb-tabs">↻</span></div><div class="wb-page"><h3>${h(e.title)}</h3>${e.meta?`<small>${h(e.meta)}</small>`:""}<div>${br(e.body)}</div></div></div>`;}

/* ---------- TELEFONO ---------- */
function telKind(e){const t=(e.sub||"")+" "+(e.title||"");return /persa|non risposta|mancata/i.test(t)?"miss":/uscita/i.test(t)?"out":/segreteria/i.test(t)?"vm":"in";}
function telList(app){const L=vis(app);
 const rows=L.map(e=>{const k=telKind(e);const parts=String(e.sub||"").split("·").map(x=>x.trim());
  return row(e,`<span class="tk">${k==="out"?"↗":k==="miss"?"↙":k==="vm"?"⏺":"↙"}</span><span class="tt"><b class="${k==="miss"?"miss":""}">${h(e.title)}</b><small>${h(parts.slice(1).join(" · ")||(k==="out"?"In uscita":k==="miss"?"Persa":"Cellulare"))}</small></span><span class="ttime">${h(parts[0]||"")}</span><span class="ti">ⓘ</span>`,"tl-row");}).join("");
 return bar(E.names[app])+`<div class="tl"><div class="tl-seg"><span class="on">Tutte</span><span>Perse</span></div><div class="tl-h">Recenti</div>${rows||`<p class="empty">Nessuna chiamata</p>`}</div>`;}
function telDetail(app){const e=find(app);if(isLocked(e))return lockedDetail(app,e);const audible=/«|segreteria/i.test(e.title+" "+e.body);
 return bar(E.names[app],app)+`<div class="tl-det">${av(e.title,72)}<h3>${h(e.title)}</h3><div class="td-acts"><span>💬<i>messaggio</i></span><span>📞<i>chiama</i></span><span>✉️<i>mail</i></span></div><div class="td-card"><small>${h(e.sub||"")}</small>${e.meta?`<small>${h(e.meta)}</small>`:""}${audible?`<button type="button" class="vplay big" data-act="voice" data-who="${h(e.title)}" data-t="${h(e.body)}">▶ Ascolta</button>`:""}<p>${br(e.body)}</p></div></div>`;}

/* ---------- CALENDARIO ---------- */
function calList(app){const L=vis(app);
 const rows=groups(L,e=>row(e,`<span class="ct">${h((String(e.sub||"").match(/\d{1,2}[:.]\d{2}/)||[""])[0])}</span><span class="cb" style="border-color:${COL[hash(e.title)%COL.length]}"><b>${isLocked(e)?"🔒 Evento privato":h(e.title)}</b><small>${h(e.sub||"")}</small></span>`,"cl-row"));
 return bar(E.names[app])+`<div class="cl"><div class="cl-h">${h(E.homeDate||E.date||"")}</div>${rows||`<p class="empty">Nessun evento</p>`}</div>`;}
function calDetail(app){const e=find(app);if(isLocked(e))return lockedDetail(app,e);
 return bar(E.names[app],app)+`<div class="cl-det"><span class="cbar" style="background:${COL[hash(e.title)%COL.length]}"></span><h3>${h(e.title)}</h3><p class="cwhen">${h(e.g||"")} ${h(e.sub||"")}</p>${e.body?`<div class="cnote"><small>Note</small><div>${br(e.body)}</div></div>`:""}</div>`;}

/* ---------- NOTE ---------- */
function noteList(app){const L=vis(app);
 const rows=L.map(e=>{const lk=isLocked(e);const first=lk?"Nota bloccata":String(e.body||"").split("\n").find(x=>x.trim())||"";
  return row(e,`<b>${lk?"🔒 ":""}${h(e.title)}</b><span><i>${h(e.meta||"")}</i>${h(first.slice(0,70))}</span>`,"nt-row");}).join("");
 return bar(E.names[app])+`<div class="nt"><div class="nt-h">Note</div><div class="nt-c">${L.length} note</div><div class="nt-list">${rows||`<p class="empty">Nessuna nota</p>`}</div></div>`;}
function noteDetail(app){const e=find(app);if(isLocked(e))return lockedDetail(app,e);
 return bar(E.names[app],app)+`<div class="nt-det"><small>${h(e.meta||E.date||"")}</small><h3>${h(e.title)}</h3><div>${br(e.body)}</div></div>`;}

window.APPV={bank:{list:bankList,detail:bankDetail},mail:{list:mailList,detail:mailDetail},web:{list:webList,detail:webDetail},tel:{list:telList,detail:telDetail},cal:{list:calList,detail:calDetail},note:{list:noteList,detail:noteDetail}};
})();
