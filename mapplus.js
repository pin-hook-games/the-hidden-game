/* Mappa più realistica: nomi delle vie, negozi e servizi sullo sfondo, bussola, scala,
   icone dei luoghi, zoom e trascinamento (dita o pulsanti). Tutto disegnato qui, niente mappe esterne. */
(function(){
const VIE=["Via Roma","Corso Garibaldi","Via Mazzini","Via Cavour","Viale della Libertà","Via Dante","Corso Vittorio Emanuele","Via Verdi","Via XX Settembre","Via Matteotti","Via Manzoni","Viale Europa","Via del Porto","Via San Francesco","Via Marconi","Via Gramsci","Corso Italia","Via dei Mille"];
const POI=["🍴","☕","🛒","💊","⛽","🏦","🅿️","🍕","🍦","🏫","⛪","🚌","🛍️","🏨","📮","🥖"];
const rng=s=>()=>{s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff;};
function enrich(svg,seed){
 if(!svg||svg.includes('data-x="1"'))return svg;
 const r=rng(seed*7+3);const F=`font-family="-apple-system,'SF Pro Text','Helvetica Neue',Arial,sans-serif" paint-order="stroke" stroke="#fff" stroke-linejoin="round"`;
 // nomi delle vie lungo le strade dritte
 const names=[];let k=Math.floor(r()*VIE.length);const used=[];
 for(const m of svg.matchAll(/<path d="M(\d+(?:\.\d+)?) (\d+(?:\.\d+)?)([HV])(\d+(?:\.\d+)?)"\/>/g)){
  const x=+m[1],y=+m[2],t=m[3],e=+m[4];const key=t+(t==="H"?y:x);if(used.includes(key))continue;used.push(key);
  const nm=VIE[(k++)%VIE.length];
  if(t==="H"){const cx=x+(e-x)*(.3+r()*.4);names.push(`<text x="${cx.toFixed(0)}" y="${(y+2.5).toFixed(1)}" text-anchor="middle">${nm}</text>`);}
  else{const cy=y+(e-y)*(.3+r()*.4);names.push(`<text x="${(x+2.5).toFixed(1)}" y="${cy.toFixed(0)}" text-anchor="middle" transform="rotate(-90 ${(x+2.5).toFixed(1)} ${cy.toFixed(0)})">${nm}</text>`);}
 }
 // negozi e servizi
 const pois=[];for(let i=0;i<14;i++){const x=12+r()*376,y=12+r()*236;pois.push(`<g opacity=".55"><circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="5.2" fill="#fff" stroke="#c7c7cc" stroke-width=".8"/><text x="${x.toFixed(0)}" y="${(y+2.6).toFixed(1)}" font-size="6.5" text-anchor="middle">${POI[Math.floor(r()*POI.length)]}</text></g>`);}
 // alberi nei parchi
 const trees=[];for(const m of svg.matchAll(/<ellipse cx="(\d+)" cy="(\d+)" rx="(\d+)" ry="(\d+)" fill="#cdeac0"\/>/g)){const cx=+m[1],cy=+m[2],rx=+m[3],ry=+m[4];for(let i=0;i<Math.min(14,rx*ry/120);i++){const a=r()*6.28,d=Math.sqrt(r())*.8;trees.push(`<circle cx="${(cx+Math.cos(a)*rx*d).toFixed(1)}" cy="${(cy+Math.sin(a)*ry*d).toFixed(1)}" r="${(2+r()*1.6).toFixed(1)}" fill="#a9d49a"/>`);}}
 const compass=`<g transform="translate(378 22)"><circle r="11" fill="rgba(255,255,255,.92)" stroke="#d1d1d6"/><path d="M0 -8L3.2 1H-3.2Z" fill="#ff3b30"/><path d="M0 8L3.2 -1H-3.2Z" fill="#8e8e93"/><text y="-12.5" font-size="6" text-anchor="middle" font-weight="700" fill="#1d1d1f">N</text></g>`;
 const scale=`<g transform="translate(10 246)" font-size="6.5" fill="#3a3a3c"><rect width="40" height="3" fill="#3a3a3c"/><rect x="20" width="20" height="3" fill="#fff" stroke="#3a3a3c" stroke-width=".6"/><text y="-2.5">0</text><text x="33" y="-2.5">200 m</text></g>`;
 const layer=`<g data-x="1">${trees.join("")}<g ${F} font-size="5.6" font-weight="500" font-style="italic" fill="#8e8e93" stroke-width="1.6">${names.join("")}</g>${pois.join("")}</g>`;
 // sotto le etichette dei quartieri (prima del primo gruppo di testo), sopra le strade
 const i=svg.indexOf("<g font-family");const body=i>0?svg.slice(0,i)+layer+svg.slice(i):svg.replace("</svg>",layer+"</svg>");
 return body.replace("</svg>",compass+scale+"</svg>");
}
const ICONS=[[/casa|abitazion|appartament|villa|palazzo/i,"🏠"],[/bar|caff|pasticc/i,"☕"],[/ristorante|trattoria|osteria|pizzeria|pranzo|cena/i,"🍴"],[/ospedal|clinica|ambulator|pronto soccorso/i,"🏥"],[/chiesa|parrocchia|duomo|basilica/i,"⛪"],[/hotel|albergo|b&b|camera/i,"🛏️"],[/porto|banchina|molo|darsena|varco/i,"⚓"],[/stazione|treno|binario/i,"🚉"],[/aeroporto/i,"✈️"],[/ufficio|studio|agenzia|redazione|comune|municipio/i,"💼"],[/palestra|piscina|campo|stadio/i,"🏋️"],[/negozio|boutique|gioiell|mercato|supermercato/i,"🛍️"],[/parcheggio|garage|box/i,"🅿️"],[/scuola|universit|liceo|conservatorio/i,"🏫"],[/banca|caveau/i,"🏦"],[/farmacia/i,"💊"],[/spiaggia|lido|bagno|mare/i,"🏖️"],[/cantiere|discarica|cava/i,"🏗️"],[/locale|discoteca|club/i,"🎧"],[/parco|giardin|orto|bosco/i,"🌳"],[/rifugio|monte|cresta/i,"🏔️"],[/cantina|vigna/i,"🍇"],[/galleria|museo/i,"🖼️"]];
function icon(s){if(s.icon)return s.icon;const t=[s.title,s.label,s.sub].join(" ");for(const [re,ic] of ICONS)if(re.test(t))return ic;return "📍";}
/* zoom e trascinamento */
const V={z:1,x:0,y:0,ep:0};
function apply(){const el=document.querySelector(".mapzoom");if(!el)return;el.style.transform=`translate(${V.x}px,${V.y}px) scale(${V.z})`;el.style.setProperty("--iz",(1/V.z).toFixed(3));}
function clamp(){const box=document.querySelector(".mapbox");if(!box)return;const w=box.clientWidth,h=box.clientHeight;V.z=Math.max(1,Math.min(4,V.z));V.x=Math.min(0,Math.max(w-w*V.z,V.x));V.y=Math.min(0,Math.max(h-h*V.z,V.y));}
function zoomAt(f,cx,cy){const nz=Math.max(1,Math.min(4,V.z*f));const k=nz/V.z;V.x=cx-(cx-V.x)*k;V.y=cy-(cy-V.y)*k;V.z=nz;clamp();apply();}
const pts=new Map();let moved=false,last=null,pinch=null;
document.addEventListener("pointerdown",e=>{const box=e.target.closest&&e.target.closest(".mapbox");if(!box||e.target.closest(".mapctl"))return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=false;last={x:e.clientX,y:e.clientY};if(pts.size===2){const [a,b]=[...pts.values()];pinch={d:Math.hypot(a.x-b.x,a.y-b.y)};}},{passive:true});
document.addEventListener("pointermove",e=>{if(!pts.has(e.pointerId))return;const box=document.querySelector(".mapbox");if(!box)return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(pts.size===2&&pinch){const [a,b]=[...pts.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);const rc=box.getBoundingClientRect();zoomAt(d/pinch.d,(a.x+b.x)/2-rc.left,(a.y+b.y)/2-rc.top);pinch.d=d;moved=true;return;}
 if(V.z>1&&last){const dx=e.clientX-last.x,dy=e.clientY-last.y;if(Math.abs(dx)+Math.abs(dy)>3)moved=true;V.x+=dx;V.y+=dy;clamp();apply();}last={x:e.clientX,y:e.clientY};},{passive:true});
const up=e=>{pts.delete(e.pointerId);if(pts.size<2)pinch=null;if(!pts.size)last=null;};
document.addEventListener("pointerup",up);document.addEventListener("pointercancel",up);
document.addEventListener("click",e=>{if(moved&&e.target.closest&&e.target.closest(".mapbox")&&!e.target.closest(".mapctl")){e.stopPropagation();e.preventDefault();moved=false;}},true);
document.addEventListener("wheel",e=>{const box=e.target.closest&&e.target.closest(".mapbox");if(!box)return;e.preventDefault();const rc=box.getBoundingClientRect();zoomAt(e.deltaY<0?1.15:1/1.15,e.clientX-rc.left,e.clientY-rc.top);},{passive:false});
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-mz]");if(!b)return;e.stopPropagation();const box=document.querySelector(".mapbox");const w=box?box.clientWidth:300,h=box?box.clientHeight:200;const m=b.dataset.mz;if(m==="0"){V.z=1;V.x=0;V.y=0;apply();}else zoomAt(m==="+"?1.5:1/1.5,w/2,h/2);},true);
window.MAPX={enrich,icon,
 state(ep){if(V.ep!==ep){V.z=1;V.x=0;V.y=0;V.ep=ep;}return `transform:translate(${V.x}px,${V.y}px) scale(${V.z});--iz:${(1/V.z).toFixed(3)}`;},
 controls:()=>`<div class="mapctl"><button type="button" data-mz="+" aria-label="Ingrandisci">+</button><button type="button" data-mz="-" aria-label="Riduci">−</button><button type="button" data-mz="0" aria-label="Vista intera">⤢</button></div>`};
})();
