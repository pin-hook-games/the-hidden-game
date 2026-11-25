/* Difficoltà crescente. In ogni categoria i casi 1-5 restano come sono;
   6-10 = livello 1, 11-15 = livello 2, 16-20 = livello 3.
   Aggiunge contenuti realistici di contorno (chat, mail, note, chiamate, segreteria, banca, calendario, foto)
   in modo deterministico per caso, così gli indizi veri sono sepolti nel rumore.
   Le note contengono anche numeri a quattro cifre che NON sono i codici del caso. */
(function(){
if(typeof EPISODES==="undefined"||typeof LIB==="undefined")return;
const rng=s=>()=>{s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff;};
const pick=(r,a)=>a[Math.floor(r()*a.length)];
const shuffle=(r,a)=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const DAYS=["lun","mar","mer","gio","ven","sab","dom"];
const hh=r=>String(7+Math.floor(r()*15)).padStart(2,"0")+":"+String(Math.floor(r()*60)).padStart(2,"0");
const day=r=>pick(r,DAYS)+" "+hh(r);

const CHATS=[
 ["Mamma","",[[0,"Hai mangiato?"],[1,"Sì mamma"],[0,"Domenica vieni a pranzo? Faccio le lasagne"],[1,"Vediamo, ti dico"],[0,"Ricordati di chiamare la zia, compie gli anni"],[0,"Hai visto che freddo? Copriti"]]],
 ["Condominio","Gruppo",[[0,"Amministratore: giovedì dalle 8 alle 12 manca l'acqua per lavori"],[0,"Sig.ra Bruno: qualcuno ha lasciato di nuovo la bici nell'androne"],[0,"Ferri int. 4: chi ha parcheggiato davanti al passo carrabile?"],[1,"Non io"],[0,"Amministratore: assemblea il 12, ordine del giorno in bacheca"],[0,"Sig.ra Bruno: l'ascensore fa un rumore strano"]]],
 ["Corriere","",[[0,"Il suo pacco è in consegna oggi tra le 14 e le 18"],[0,"Nessuno al citofono. Lascio al vicino?"],[1,"Sì grazie, al secondo piano"],[0,"Consegnato"]]],
 ["Calcetto mercoledì","Gruppo",[[0,"Chi c'è mercoledì?"],[0,"Io ci sono"],[1,"Ci sono"],[0,"Siamo 9, manca uno"],[0,"Porto il pallone nuovo"],[0,"Campo 2 alle 21, non fate tardi"]]],
 ["Zia Pina","",[[0,"Tanti auguri a te e famiglia"],[1,"Grazie zia, un abbraccio"],[0,"Quando passate a trovarmi?"],[0,"Ti ho mandato la ricetta della parmigiana"]]],
 ["Palestra","",[[0,"Promemoria: il tuo abbonamento scade a fine mese"],[0,"Nuovo corso di pilates il martedì alle 19"],[1,"Posso spostare la lezione di giovedì?"],[0,"Certo, ti metto venerdì alle 18"]]],
 ["Dentista","Studio",[[0,"Le ricordiamo l'appuntamento per la pulizia"],[1,"Confermo"],[0,"Grazie, a presto"]]],
 ["Officina Moretti","",[[0,"La macchina è pronta, può passare dopo le 17"],[1,"Quanto le devo?"],[0,"Tagliando più pastiglie, 280"],[1,"Va bene, passo domani"]]],
 ["Amici del liceo","Gruppo",[[0,"Allora questa cena? Sono tre mesi che ne parliamo"],[0,"Sabato 18 va bene a tutti?"],[1,"Per me sì"],[0,"Io no, matrimonio di mio cugino"],[0,"Allora il 25"],[0,"Prenoto io, pizzeria solita"]]],
 ["Papà","",[[0,"Ti ho lasciato le chiavi della cantina sotto lo zerbino"],[1,"Grazie pà"],[0,"Hai sentito la partita?"],[0,"Domani passo a sistemare la tapparella"]]],
 ["Fisioterapista","",[[0,"Esercizi da fare ogni mattina, ti mando il video"],[1,"Ricevuto"],[0,"Ci vediamo martedì"]]],
 ["Lavoro · ufficio","Gruppo",[[0,"Riunione spostata alle 15"],[0,"Chi ha preso il caricatore della sala B?"],[1,"Io, lo riporto"],[0,"Ricordatevi le ferie da inserire entro venerdì"],[0,"C'è la torta in cucina, compleanno di Sara"]]],
 ["Fratello","",[[0,"Mi presti il trapano?"],[1,"Te lo lascio da mamma"],[0,"Grande. Sabato ci sei per il compleanno di papà?"],[1,"Certo"]]],
 ["Vicina","",[[0,"Mi hanno lasciato un pacco suo"],[1,"Grazie, passo stasera"],[0,"Le ho anche innaffiato le piante, erano secche"]]],
 ["Banca","Avvisi",[[0,"Accesso effettuato all'app da un nuovo dispositivo"],[0,"Addebito carta: Supermercato, 64,30 €"],[0,"Il tuo estratto conto è disponibile"]]],
 ["Parrucchiera","",[[0,"Confermo sabato alle 10"],[1,"Perfetto"],[0,"Se vuoi anticipare si è liberato un posto alle 9"]]],
 ["Amica","",[[0,"Allora? Com'è andata?"],[1,"Te lo racconto a voce"],[0,"Dai che sono curiosa"],[0,"Caffè domani?"],[1,"Alle 8 al solito bar"]]],
 ["Agenzia viaggi","",[[0,"Le inviamo il preventivo per la settimana in Puglia"],[1,"Grazie, ci penso"],[0,"Il prezzo è bloccato fino a venerdì"]]]
];
const MAILS=[
 ["Newsletter Supermercato","Offerte della settimana","Sconto del 30% su pasta e detersivi. Valido fino a domenica."],
 ["Energia Casa","La tua bolletta è disponibile","Importo: 87,40 €. Scadenza: 28 del mese. Addebito diretto attivo."],
 ["Spedizioni","Il tuo ordine è stato spedito","Consegna prevista entro 2 giorni lavorativi. Codice di tracciamento disponibile nell'app."],
 ["Comune","Avviso pagamento TARI","Seconda rata in scadenza. Paga entro il 16 per evitare sanzioni."],
 ["Streaming","Nuove uscite questo mese","Tre serie nuove e un film in prima visione. Buona visione."],
 ["Assicurazione","Rinnovo polizza auto","La sua polizza scade tra 30 giorni. Rinnovi online in pochi minuti."],
 ["Libreria online","Ti potrebbe interessare","In base ai tuoi acquisti: gialli italiani, edizione tascabile."],
 ["Operatore telefonico","Hai quasi finito i giga","Hai usato il 90% del traffico dati. Attiva l'opzione extra."],
 ["Banca","Comunicazione importante","Abbiamo aggiornato le condizioni del conto. Nessuna azione richiesta."],
 ["Palestra","Ti aspettiamo!","Non ti vediamo da due settimane. Torna con un amico: la prima lezione è gratis."],
 ["Sconosciuto","Hai vinto un buono!","Clicca qui per ritirare il tuo buono da 500 euro. Offerta valida 24 ore."],
 ["Ufficio personale","Cedolino del mese","È disponibile il cedolino nell'area riservata."],
 ["Ottica","È ora del controllo","Sono passati due anni dal tuo ultimo controllo della vista."],
 ["Treni","Biglietto acquistato","Andata e ritorno, posto 7A. Ricordati di fare il check-in."],
 ["Farmacia","Il tuo ordine è pronto","Puoi ritirarlo in farmacia da domani."]
];
const NOTES=[
 ["Spesa","latte\npane\nuova\ncaffè\ndetersivo piatti\nmele"],
 ["Da fare","pagare bollo auto\nchiamare idraulico\nregalo per Marco\nrinnovare carta d'identità"],
 ["Ricetta tiramisù","4 uova\n500 g mascarpone\nsavoiardi\ncaffè\ncacao amaro"],
 ["Film da vedere","quello consigliato da Luca\nla serie spagnola\nil documentario sul mare"],
 ["Regali Natale","mamma: sciarpa\npapà: libro\nnipoti: lego"],
 ["Taglie","scarpe 42\ngiacca M\npantaloni 48"],
 ["Idee vacanze","Sardegna a giugno?\nPraga a ottobre\nweekend in montagna"],
 ["Libri","finire quello sul comodino\ncomprare il nuovo giallo"]
];
const CODE_NOTES=[["Cancello garage","Codice cancello: #"],["Bici","Lucchetto bici: #"],["Wi-fi ospiti","Rete: CASA_ospiti\nPassword: luna#"],["Cassetta postale","Combinazione: #"],["Allarme casa","Codice: # (cambiarlo!)"],["Armadietto palestra","n. 31, combinazione #"],["Portone condominio","Tastierino: #"]];
const TEL=["Mamma","Papà","Numero sconosciuto","Ufficio","Officina Moretti","Studio dentistico","Corriere","Fratello","Amica","Banca","Call center","Vicina","Zia Pina"];
const VOICE=[
 ["Segreteria · Studio dentistico","Buongiorno, la chiamiamo per spostare l'appuntamento di giovedì. Ci richiami quando può."],
 ["Segreteria · Numero sconosciuto","Salve, la contattiamo per un'offerta sulla fibra, la richiameremo."],
 ["Segreteria · Mamma","Sono io, non rispondi mai. Richiamami quando puoi, niente di grave."],
 ["Segreteria · Officina Moretti","La macchina è pronta, può passare a ritirarla."],
 ["Segreteria · Corriere","Ho un pacco per lei, ripasso domani mattina."],
 ["Segreteria · Ufficio","Ciao, è per la riunione di domani: si sposta alle dieci."]
];
const BANK=[["Supermercato","− 64,30 €"],["Benzina","− 50,00 €"],["Farmacia","− 18,40 €"],["Bar","− 3,20 €"],["Abbonamento streaming","− 12,99 €"],["Ristorante","− 46,00 €"],["Bonifico in entrata","+ 120,00 €"],["Prelievo","− 100,00 €"],["Negozio online","− 29,90 €"],["Bolletta luce","− 87,40 €"]];
const CAL=[["Dentista","10:30"],["Cena da mamma","20:00"],["Calcetto","21:00"],["Riunione condominio","18:30"],["Tagliando auto","8:30"],["Compleanno zia","tutto il giorno"],["Palestra","19:00"],["Colloquio insegnanti","17:00"]];
const WEB=["meteo domani","orari farmacia di turno","ricetta parmigiana","risultati partita","come smacchiare il vino","offerte voli","traduzione inglese","prezzo benzina oggi","film stasera in tv","negozi aperti domenica"];
const PHOTOS=[["#c9b79a","🍝","Pranzo della domenica"],["#9cc7d6","🌅","Tramonto dal balcone"],["#7a9a5a","🐶","Il cane dei vicini"],["#e9e2d6","☕","Colazione al bar"],["#33658a","🏟️","Allo stadio"],["#a8c3a0","🌳","Passeggiata al parco"],["#d9a46b","🎂","Compleanno in ufficio"],["#55606b","🚗","Parcheggio, per ricordarmi dove"]];

LIB.hard=(n,tier)=>{const e=EPISODES[n];if(!e||e._hard)return;e._hard=tier;
 const r=rng(n*7919+tier*31);const has=id=>(e.apps||[]).some(a=>a[0]===id);
 const used=new Set(Object.values(e.pins||{}).map(String));
 const code=()=>{let c;do{c=String(1000+Math.floor(r()*9000));}while(used.has(c));used.add(c);return c;};
 // chat di contorno, mescolate tra quelle vere
 if(e.chats){const add=shuffle(r,CHATS).slice(0,3+tier*3).map((c,i)=>({id:"x"+i,name:c[0],sub:c[1],m:c[2].slice(0,3+tier+Math.floor(r()*2)).map(x=>[day(r),x[0],(x[0]===0&&/^(Mamma|Papà|Zia Pina|Amica|Fratello|Vicina)$/.test(c[0])&&r()<.55?"(vocale) ":"")+x[1]])}));
  const all=e.chats.slice();for(const c of add)all.splice(1+Math.floor(r()*all.length),0,c);e.chats=all;
  // chiacchiere più vecchie in cima alle chat vere: l'indizio non è più il primo messaggio
  const small=[[0,"Ci sei?"],[1,"Sì dimmi"],[0,"Niente, ti chiamo dopo"],[1,"Ok"],[0,"Buongiorno"],[1,"Buongiorno!"],[0,"Hai visto il meteo?"],[1,"Piove tutto il giorno"],[0,"Grazie ancora per ieri"],[1,"Figurati"]];
  for(const c of e.chats){if(String(c.id).startsWith("x")||!c.m||c.lock)continue;const k=tier*2;const pre=[];for(let i=0;i<k;i++){const s=small[(i+n)%small.length];pre.push(["sett. scorsa",s[0],s[1]]);}c.m=pre.concat(c.m);}}
 const L=e.lists=e.lists||{};
 if(has("mail")){L.mail=L.mail||[];const add=shuffle(r,MAILS).slice(0,2+tier*3).map((m,i)=>({id:"xm"+i,title:m[0],sub:m[1],meta:pick(r,DAYS),body:m[2]}));L.mail=shuffle(r,L.mail.concat(add));}
 if(has("note")){L.note=L.note||[];const add=shuffle(r,NOTES).slice(0,1+tier).map((x,i)=>({id:"xn"+i,title:x[0],body:x[1]}));
  shuffle(r,CODE_NOTES).slice(0,tier+(tier>1?1:0)).forEach((x,i)=>add.push({id:"xc"+i,title:x[0],body:x[1].replace("#",code())}));
  L.note=shuffle(r,L.note.concat(add));}
 if(has("tel")){L.tel=L.tel||[];const add=[];for(let i=0;i<3+tier*4;i++){const who=pick(r,TEL);add.push({id:"xt"+i,title:who,sub:day(r)+" · "+pick(r,["in entrata","in uscita","persa"])+(r()<.6?", "+(1+Math.floor(r()*9))+" min":"")});}
  if(tier>=2)shuffle(r,VOICE).slice(0,tier).forEach((v,i)=>add.push({id:"xv"+i,title:v[0],sub:day(r),body:v[1]}));
  L.tel=L.tel.concat(add);}
 if(has("bank")){L.bank=L.bank||[];const add=shuffle(r,BANK).slice(0,2+tier*2).map((b,i)=>({id:"xb"+i,g:"Movimenti",title:b[0],sub:pick(r,DAYS)+" · "+b[1]}));L.bank=L.bank.concat(add);}
 if(has("cal")){L.cal=L.cal||[];const add=shuffle(r,CAL).slice(0,1+tier).map((c,i)=>({id:"xk"+i,g:"Altri impegni",title:c[0],sub:c[1],body:""}));L.cal=L.cal.concat(add);}
 if(has("web")){L.web=L.web||[];const add=shuffle(r,WEB).slice(0,2+tier*2).map((w,i)=>({id:"xw"+i,g:"Cronologia",title:w,sub:day(r)}));L.web=shuffle(r,L.web.concat(add));}
 if(e.photos&&e.scenes){shuffle(r,PHOTOS).slice(0,tier).forEach((p,i)=>{const k="x"+i;e.scenes[k]=()=>LIB.obj(p[0],p[1],p[2]);e.photos.splice(Math.floor(r()*e.photos.length),0,{id:"xp"+i,t:pick(r,DAYS),title:p[2],sc:k});});}
 // false piste "sospette" ma innocenti (livelli 2-3): segreti che sembrano colpe e non lo sono
 if(tier>=2&&e.chats){const FL=[
   {id:"xs1",name:"Michela",sub:"",m:[["sab 22:40",0,"Mi raccomando, non deve saperne niente nessuno"],["sab 22:41",1,"Tranquilla, muta come un pesce"],["",2,"1 messaggio eliminato."],["dom 10:02",0,"Allora venerdì alle 21 da me, entra dal retro così non ti vede"],["dom 10:05",1,"Ok. Cancello tutto"],["ven 23:50",0,"Che serata! La festa a sorpresa per Ste è venuta benissimo 🎉"]]},
   {id:"xs2",name:"Numero sconosciuto",sub:"",m:[["mer 7:12",0,"Ho le chiavi, passo quando non c'è nessuno"],["mer 7:15",1,"Sì, dopo le 9 la casa è vuota"],["mer 18:30",0,"Fatto. Fattura per la caldaia nella cassetta della posta. Idraulico Ferretti"]]},
   {id:"xs3",name:"Roby",sub:"",m:[["gio 13:01",0,"Hai ritirato i soldi?"],["gio 13:20",1,"Sì, 500 in contanti come mi hai detto"],["gio 13:21",0,"Perfetto, domani glieli porto io"],["lun 9:00",0,"Il meccanico ha detto che con 500 si chiude tutto, grazie del prestito!"]]}];
  shuffle(r,FL).slice(0,tier-1).forEach(c=>{const all=e.chats;all.splice(1+Math.floor(r()*all.length),0,c);});}
 if(e.timer)e.timer+=tier*300;
};
for(let n=1;n<=80;n++){const k=(n-1)%20+1;if(k>=6&&EPISODES[n])LIB.hard(n,k<=10?1:k<=15?2:3);}
})();
