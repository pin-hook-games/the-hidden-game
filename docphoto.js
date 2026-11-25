/* Documenti e ricevute come «fotografie»: un foglio stampato, un po' storto, con ombra e luce,
   appoggiato su una superficie vera (img/thg-bg-*.jpg se ci sono, altrimenti legno disegnato).
   Il testo resta quello del caso, identico: gli indizi non cambiano. */
(function(){
if(typeof LIB==="undefined")return;
const hash=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))|0;return Math.abs(x);};
const X=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
let uid=0;
LIB.docFlat=LIB.doc;
LIB.doc=(head,col,lines)=>{
 const id="dp"+(++uid),k=hash(head+lines.join("|"));
 const bgs=(typeof window!=="undefined"&&window.THG_IMGS||[]).filter(f=>/^thg-bg-/.test(f));
 const bg=bgs.length?`<image href="img/${bgs[k%bgs.length]}" x="0" y="0" width="400" height="300" preserveAspectRatio="xMidYMid slice"/>`
  :`<defs><linearGradient id="${id}w" x1="0" y1="0" x2="1" y2=".2"><stop offset="0" stop-color="#6b4a32"/><stop offset=".5" stop-color="#7d5739"/><stop offset="1" stop-color="#5e4029"/></linearGradient></defs><rect width="400" height="300" fill="url(#${id}w)"/>${Array.from({length:14},(_,i)=>`<path d="M0 ${12+i*21}Q200 ${6+i*21+(i%3)*4} 400 ${14+i*21}" stroke="rgba(0,0,0,.08)" stroke-width="${1+i%2}" fill="none"/>`).join("")}`;
 const maxc=Math.max(head.length*1.15,...lines.map(l=>String(l).length));
 const fs=maxc>40?11.5:13,cw=fs*.62;
 const w=Math.min(372,Math.max(210,maxc*cw+44)),hgt=Math.min(286,62+lines.length*(fs+9)+22);
 const x0=200-w/2,y0=150-hgt/2,rot=((k%7)-3)*.9;
 const txt=lines.map((l,i)=>`<text x="${x0+20}" y="${y0+64+i*(fs+9)}" font-family="'Courier New',Courier,monospace" font-size="${fs}" fill="#2b2b2b">${X(l)}</text>`).join("");
 return `${bg}<defs><filter id="${id}s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="3" dy="5" stdDeviation="5" flood-color="#000" flood-opacity=".38"/></filter>
<linearGradient id="${id}p" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffef9"/><stop offset="1" stop-color="#efece3"/></linearGradient>
<radialGradient id="${id}l" cx=".25" cy=".15" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></radialGradient></defs>
<g transform="rotate(${rot} 200 150)"><g filter="url(#${id}s)"><path d="M${x0} ${y0}H${x0+w}V${y0+hgt-6}${Array.from({length:Math.floor(w/10)},(_,i)=>`L${x0+w-(i+.5)*10} ${y0+hgt-(i%2?0:6)}`).join("")}L${x0} ${y0+hgt-4}Z" fill="url(#${id}p)"/></g>
<rect x="${x0}" y="${y0}" width="${w}" height="5" fill="${col}" opacity=".85"/>
<text x="200" y="${y0+32}" text-anchor="middle" font-family="'Courier New',Courier,monospace" font-weight="700" font-size="${Math.min(16,fs+2)}" fill="#1d1d1d">${X(head)}</text>
<line x1="${x0+16}" y1="${y0+44}" x2="${x0+w-16}" y2="${y0+44}" stroke="#9a968c" stroke-width="1" stroke-dasharray="4 3"/>${txt}</g>
<rect width="400" height="300" fill="url(#${id}l)"/>`;
};
})();
