/* Voci per chiamate, segreterie e messaggi vocali.
   Usa la sintesi vocale del telefono (Web Speech API): nessun file audio, funziona anche offline
   se il telefono ha la voce italiana installata. Voce maschile o femminile dal nome di chi parla,
   tono e velocità in base all'emozione della frase (felice, preoccupata, arrabbiata, triste, neutra). */
(function(){
const SS=typeof window!=="undefined"&&window.speechSynthesis;
let voices=[];const load=()=>{try{voices=SS.getVoices().filter(v=>/^it/i.test(v.lang));}catch(e){}};
if(SS){load();try{SS.onvoiceschanged=load;}catch(e){}}
const FEM_V=/alice|elsa|federica|paola|isabella|bianca|carla|lucia|silvia|emma|female|donna|google italiano/i;
const MAL_V=/luca|diego|cosimo|giorgio|roberto|alessandro|giuseppe|male|uomo|benigno|calogero/i;
const MALE_A=/^(luca|andrea|nicola|mattia|elia|tobia|enea|battista|tonino?|toto|totò|kosta|ilia)$/i;
const FEM_E=/^(adele|irene|daniele?la|beatrice|alice|agnese|carole|chantal|rachele|matilde|nicole|simone?tta)$/i;
const hash=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))|0;return Math.abs(h);};
function gender(name){
 const n=String(name||"").replace(/[^\p{L}\s.']/gu," ").trim();
 if(/\b(sig\.?ra|signora|dott\.?ssa|prof\.?ssa|avv\.?ssa|zia|nonna|mamma|suor|sorella|figlia|moglie)\b/i.test(n))return "f";
 if(/\b(sig\.?|signor|dott\.?|prof\.?|avv\.?|zio|nonno|pap[aà]|don|geom\.?|ing\.?|ass\.?|fratello|figlio|marito|maestro)\b/i.test(n))return "m";
 const w=(n.split(/\s+/).find(x=>x.length>1&&!/\./.test(x))||"").toLowerCase();
 if(!w)return hash(name)%2?"f":"m";
 if(MALE_A.test(w))return "m";if(FEM_E.test(w))return "f";
 if(/a$/.test(w))return "f";
 if(/^(numero|privato|sconosciuto|banca|corriere|studio|ufficio)/.test(w))return hash(name)%2?"f":"m";
 return "m";
}
function mood(t){
 if(/basta|smettila|non farmi|hai capito\?|vergogn|maledett|stai zitt|subito!|non ti permettere|!!/i.test(t))return "angry";
 if(/mi dispiace|condoglianz|purtroppo|piango|addio|non c'è più|lutto/i.test(t))return "sad";
 if(/scusa|paura|preoccup|ti prego|aiuto|non so|dove sei|rispondi|pronto\?|grave|ospedale|polizia|carabinieri|\.\.\.|…|stai attent|non dire/i.test(t))return "worried";
 if(/auguri|grazie|che bello|evviva|🎉|❤|amore|festa|bravissim|ahah|😂|sorpresa|finalmente|che gioia|ciao bell/i.test(t))return "happy";
 return "neutral";
}
const MOOD={happy:{p:1.18,r:1.08},worried:{p:1.08,r:1.14},angry:{p:.86,r:1.12},sad:{p:.86,r:.84},neutral:{p:1,r:1}};
function pick(g,who){
 if(!voices.length)load();
 const f=voices.filter(v=>FEM_V.test(v.name)),m=voices.filter(v=>MAL_V.test(v.name));
 const pool=g==="f"?(f.length?f:voices):(m.length?m:voices);
 const v=pool.length?pool[hash(who)%pool.length]:null;
 const dedicated=g==="f"?f.length>0:m.length>0;
 return {v,shift:dedicated?1:(g==="f"?1.12:.78)};
}
const clean=t=>String(t).replace(/^\(vocale\)\s*/i,"").replace(/[«»"“”]/g,"").replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu,"").trim();
function muted(){try{return typeof SAVE!=="undefined"&&SAVE.mute;}catch(e){return false;}}
function say(text,who,onend){
 if(!SS||muted()||!clean(text)){onend&&setTimeout(onend,clean(text).length*45);return;}
 const g=gender(who),{v,shift}=pick(g,who),md=MOOD[mood(text)],jit=1+((hash(who)%9)-4)*.015;
 const u=new SpeechSynthesisUtterance(clean(text));u.lang="it-IT";if(v)u.voice=v;
 u.pitch=Math.max(.1,Math.min(2,md.p*shift*jit));u.rate=Math.max(.5,Math.min(1.6,md.r));
 u.onend=u.onerror=()=>onend&&onend();try{SS.speak(u);}catch(e){onend&&onend();}
}
let token=0;
window.VOICE={
 gender,mood,
 available:()=>!!SS,
 stop(){token++;try{SS&&SS.cancel();}catch(e){}document.querySelectorAll(".speaking").forEach(x=>x.classList.remove("speaking"));},
 /* chiamata: legge una frase alla volta, salta le righe di racconto senza virgolette */
 call(who,lines,box){this.stop();const my=token;const ps=box?[...box.querySelectorAll("p")]:[];
  const next=i=>{if(my!==token||i>=lines.length)return;const t=lines[i];
   if(!/[«"“]/.test(t)){setTimeout(()=>next(i+1),400);return;}
   ps.forEach(p=>p.classList.remove("speaking"));if(ps[i])ps[i].classList.add("speaking");
   say(t,who,()=>{if(ps[i])ps[i].classList.remove("speaking");setTimeout(()=>next(i+1),450);});};
  setTimeout(()=>next(0),500);},
 play(text,who,btn){const was=btn&&btn.classList.contains("speaking");this.stop();if(was)return;
  const my=token;if(btn)btn.classList.add("speaking");say(text,who,()=>{if(my===token&&btn)btn.classList.remove("speaking");});}
};
})();
