(function(){
/* Furti 12: Il camper (Rimini). Soluzione: l'ex dipendente Mirco.
   Ha preparato i documenti falsi del «cliente» e sapeva dov'era montato il localizzatore: spento all'area di servizio Montefeltro, come il caso dell'anno prima. Annuncio a Spalato. Falsa pista: il socio Walter e l'assicurazione. */
const SC={
 cam:()=>LIB.car("#f2f2f2","Il camper nuovo, consegnato sabato"),
 doc:()=>LIB.doc("Documento del cliente · foto","#a02822",["«Carta d'identita»","senza accento sulla a","Nome: Daniele Mori","nato a Forlì"]),
 loc:()=>LIB.doc("Localizzatore · ultimo segnale","#33658a",["Sab 23:14","A14, area Montefeltro","poi segnale assente","(anche 2024: stesso punto)"]),
 ann:()=>LIB.doc("Annuncio · Spalato","#55606b",["Camper 2025, 6 posti","come nuovo, km 900","prezzo trattabile","pubblicato martedì"]),
 squ:()=>LIB.group(4,"Noleggio Riviera, estate 2023","#2f6b4f"),
 wal:()=>LIB.doc("Polizza della flotta","#55606b",["Furto camper: franchigia 30%","Rimborso dopo 90 giorni","Sottoscritta: Walter e Sergio","2023"])
};
const MAP=LIB.city("Rimini",[[40,52,"Centro"],[132,132,"Rivazzurra"],[276,132,"A14"],[40,232,"Mare"],[300,40,"Montefeltro"],[200,200,"Porto"]],
 [[130,130,"#d43d55","Noleggio Riviera",9,-10],[310,70,"#33658a","area Montefeltro",-80,-10]]);

LIB.add(52,["Il camper","Sergio vuole sapere chi gli ha portato via il camper nuovo","Rimini"],{
 map:MAP,scenes:SC,owner:"Sergio Bianchini",time:"10:00",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal map cal note web",
 late:"Sergio ha un cliente al banco. Si riprende il telefono.",
 brief:"Sergio Bianchini, 52 anni, ha un noleggio di camper a Rimini. Sabato ha consegnato un camper nuovo a un cliente, Daniele Mori, con un documento in regola. Il camper non è mai tornato e il localizzatore si è spento sabato sera. Sergio ti ha dato il suo telefono.",
 quote:"«Il mio socio Walter dice: tanto c'è l'assicurazione. Ma con la franchigia ci rimettiamo diecimila euro, e lui da un anno parla di chiudere. Non mi va di pensarci. E poi quel localizzatore lo sapevano in tre, dove era montato.»",
 chats:[
  {id:"wal",name:"Walter",sub:"Socio",m:[
   ["dom",0,"Sergio, calma. C'è l'assicurazione, rimborso dopo novanta giorni."],
   ["dom",1,"Con il trenta per cento di franchigia. Ci perdiamo un sacco."],
   ["dom",0,"Lo so. Io sabato ero alla cresima di mia nipote a Cesena tutto il giorno, se te lo stai chiedendo."]]},
  {id:"lav",name:"Noleggio Riviera",sub:"Gruppo di lavoro",m:[
   ["mar 2024",0,"Mirco: Sergio, ma il localizzatore nuovo dove lo montiamo? Sotto il sedile o nel cruscotto?"],
   ["mar 2024",1,"Nel cruscotto, dietro la radio. Non ditelo a nessuno."],
   ["ago 2024",1,"Mirco, da lunedì non abbiamo più bisogno di te. Mi dispiace."]]},
  {id:"car",name:"Carabinieri",sub:"",m:[
   ["lun",0,"Sig. Fabbri, il documento del cliente è falso. Stessa fattura di quello del furto dell'anno scorso a Riccione. E il localizzatore si è spento nello stesso punto, l'area Montefeltro."]]},
  {id:"bar",name:"Barbara",sub:"Ex collega",m:[
   ["mer",0,"Sergio, Mirco adesso lavora in una copisteria a Forlì. Fa anche «documenti», dice lui, ridendo."],
   ["",2,"1 messaggio eliminato."],
   ["mer 20:00",0,"E Mirco l'anno scorso, quando hanno rubato quel camper a Riccione, aveva soldi a palate. Ti giro il suo vecchio messaggio: «Montefeltro, galleria, il segnale muore lì».","mir"]]}
 ],
 lists:{
  web:[
   {id:"w1",g:"Cronologia",title:"Camper 2025 · annuncio Spalato",sub:"martedì",body:"Camper 6 posti, km 900, «come nuovo». Pubblicato martedì. Le foto: è il nostro, c'è il graffio sul gradino."},
   {id:"w2",g:"Cronologia",title:"Furto camper Riccione 2024",sub:"Notizia",body:"Camper noleggiato con documenti falsi, localizzatore spento in A14. Mai ritrovato."}],
  mail:[
   {id:"m1",title:"Assicurazione",sub:"Polizza flotta",meta:"2023",body:"Furto camper: franchigia 30%, rimborso dopo 90 giorni."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Area di servizio Montefeltro",sub:"A14",body:"Ultimo segnale del camper: sabato alle 23:14. Una galleria subito dopo."}],
  cal:[
   {id:"c1",g:"Sabato",title:"Consegna camper · D. Mori",sub:"15:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora dell'ultimo segnale, quattro cifre.\nNota sotto: l'anno del furto di Riccione."},
   {id:"n2",title:"Chi sapeva del cruscotto",lock:"note",body:"Io, Walter e Mirco.\nWalter sabato era a Cesena. Mirco faceva documenti a Forlì, e il «cliente» era nato a Forlì.\nIl documento ha «identita» senza accento. Anche quello di Riccione."}],
  tel:[
   {id:"t1",title:"Carabinieri",sub:"lun · in entrata, 12 min"}]
 },
 photos:[
  {id:"p1",t:"sab",title:"Il camper",sc:"cam"},
  {id:"p2",t:"sab 15:05",title:"Documento",sc:"doc"},
  {id:"p3",t:"2023",title:"La squadra",sc:"squ"},
  {id:"p4",t:"2023",title:"Polizza",sc:"wal"},
  {id:"h1",t:"dom",title:"Localizzatore",sc:"loc",lock:"album"},
  {id:"h2",t:"mar",title:"Spalato",sc:"ann",lock:"album"}],
 pins:{note:"2024",album:"2314"},
 events:[{id:"a",q:3,kind:"sms",from:"Walter",text:"Sergio, se vuoi chiudiamo davvero, ma non così. Io con questa storia non c'entro, te lo giuro sui miei figli."},
         {id:"b",q:7,kind:"call",from:"Numero croato",lines:["«Hello? Camper... Spalato... you sell?»","«Ah, no, sorry. Wrong number. Somebody give me this number for papers of camper.»","Ha riattaccato."]}],
 qs:[
  {t:"identita",q:"Che cosa c'è di sbagliato nella foto del documento del cliente?",any:["accent","identita"],show:"«identita» senza accento",hint:"Galleria.",news:"Un documento falso. Stessa fattura di quello di Riccione."},
  {t:"Forlì",q:"Dove sarebbe nato il «cliente»?",any:["forli"],show:"A Forlì",hint:"Stessa foto.",news:"Ricordatelo."},
  {t:"23:14",q:"A che ora l'ultimo segnale del localizzatore?",all:["2314"],show:"Alle 23:14",hint:"Mappe.",news:"All'area Montefeltro, in A14."},
  {t:"Montefeltro",q:"Dove si è spento?",any:["montefeltr"],show:"All'area di servizio Montefeltro",hint:"Chat dei carabinieri e Mappe.",news:"Lo stesso punto del furto del 2024 a Riccione."},
  {t:"cruscotto",q:"Dov'era montato il localizzatore?",any:["cruscott","radio"],show:"Nel cruscotto, dietro la radio",hint:"Gruppo di lavoro.",news:"Lo sapevano in tre: Sergio, Walter e Mirco."},
  {t:"Cesena",q:"Dov'era Walter sabato?",any:["cesena","cresima"],show:"A Cesena, alla cresima della nipote",hint:"Chat con Walter.",news:"La falsa pista cade."},
  {t:"Mirco",q:"Chi aveva chiesto dove si montava il localizzatore, ed è stato licenziato?",any:["mirco"],show:"Mirco",hint:"Gruppo di lavoro.",news:"Ora hai recuperato il secondo messaggio di Barbara.",unlock:"mir"},
  {t:"copisteria",q:"Dove lavora adesso Mirco?",any:["copister"],show:"In una copisteria a Forlì",hint:"Chat con Barbara.",news:"Dove fa «documenti»."},
  {t:"Spalato",q:"In quale città è in vendita il camper?",any:["spalat","split","croazia"],show:"A Spalato",hint:"Browser.",news:"Riconosciuto dal graffio sul gradino."},
  {t:"m",q:"Chi ha organizzato il furto del camper?",o:[["w","Walter, per l'assicurazione"],["m","Mirco, l'ex dipendente: documenti falsi e localizzatore"],["d","Daniele Mori, da solo"],["b","Barbara"],["s","Sergio stesso"]],a:"m",show:"Mirco",hint:"Chi sapeva del cruscotto, chi fa documenti?",news:""}],
 win:{title:"Il furto l'ha organizzato Mirco, l'ex dipendente.",
  steps:["Il documento del cliente era falso, con «identita» senza accento, come quello del furto di Riccione.","Il localizzatore, montato nel cruscotto, si è spento alle 23:14 all'area Montefeltro, lo stesso punto del 2024.","Dove fosse montato lo sapevano Sergio, Walter e Mirco. Walter era a Cesena.","Mirco fa «documenti» in una copisteria a Forlì, città di nascita del falso cliente.","Il camper è in vendita a Spalato."],
  end:"La polizia croata blocca il camper al porto di Spalato. A Forlì, nella copisteria di Mirco, trovano una cartella con dodici documenti pronti. Walter manda a Sergio un messaggio: «Allora? Chiudiamo o ricominciamo?» Sergio risponde: «Ricominciamo. Ma il localizzatore lo spostiamo.»"}
});
LIB.tune(52,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.push({id:"m2",title:"Barbara",sub:"Ti giro questa",meta:"mercoledì",lock:"bar2",body:"Sergio, Mirco mi aveva mandato per errore una ricevuta della sua copisteria, a ottobre non ci avevo fatto caso:\n«Stampa documento in PVC, nome: Daniele Mori, 2 copie. 14 novembre.»\nÈ il nome del tuo cliente."});
 e.pins={album:"2314",bar2:"0112",note:"1424"};
 e.locks={album:{hint:"Il minuto in cui il camper ha smesso di parlare."},bar2:{name:"Mail protetta",hint:"Il chilometro dell'autostrada dove tutto si spegne."},note:{hint:"Il giorno in cui hanno stampato un nome, poi la fine dell'anno dell'altro furto."}};
 e.spots=[
  {id:"s1",x:130,y:130,label:"Noleggio Riviera",title:"Noleggio Riviera",sub:"Noleggio camper · ★ 4,6",body:"Recensione: «Camper nuovissimi, e con il localizzatore: dicono che non li perdono mai.»"},
  {id:"s2",x:310,y:70,label:"Area Montefeltro",title:"Area di servizio Montefeltro",sub:"A14, km 112",body:"Subito dopo c'è una galleria lunga.\nRecensione: «Qui il telefono non prende mai. Né il telefono né niente.»"},
  {id:"s3",x:90,y:236,label:"Copisteria Express",title:"Copisteria Express, Forlì",sub:"Stampe e plastificazioni · ★ 3,4",body:"Recensione: «Il ragazzo al banco ti stampa qualsiasi cosa, anche quello che non dovrebbe.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"14 novembre",q:"Quando è stato stampato il documento di «Daniele Mori»?",all:["14","nov"],show:"Il 14 novembre, nella copisteria di Mirco",hint:"",news:"Il giorno prima della consegna del camper."});
 LIB.hints(e,["Guarda il documento come lo guarderebbe un carabiniere.","La città di nascita del cliente.","L'ultima volta che il camper ha detto dov'era.","…e dove.","Pochi sapevano dove era nascosto.","Il socio ha un alibi di famiglia.","Qualcuno aveva fatto una domanda strana, al lavoro.","Un'ex collega sa che cosa fa adesso.","Qualcuno vende un camper all'estero.","Una ricevuta arrivata per errore, chiusa con un numero dell'autostrada.","Chi sapeva del cruscotto, chi fa documenti?"]);
});
})();
