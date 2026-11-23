(function(){
/* Furti 9: La ricetta (Parma). Soluzione: il responsabile ricerca Corradi.
   Ha usato l'utenza di Irene alle 9:40 del 6 novembre dal PC del laboratorio 2 mentre lei era in treno per Bari, ha copiato la formula su una chiavetta (inventario) e ha già firmato con la concorrente Gustalia. Falsa pista: la foto della lavagna. */
const SC={
 lav:()=>LIB.doc("Lavagna del laboratorio · foto","#55606b",["Appunti di processo","temperature e tempi","(niente dosi)","foto per studiare"]),
 tre:()=>LIB.doc("Biglietto del treno","#33658a",["Parma → Bari","6 novembre, partenza 7:10","arrivo 14:55","Irene Bocchi"]),
 acc:()=>LIB.doc("Registro accessi · file FORMULA_X","#a02822",["6 nov 9:40 · utente i.bocchi","postazione: PC laboratorio 2","operazione: copia","dispositivo esterno: USB"]),
 inv:()=>LIB.doc("Inventario chiavette","#2f6b4f",["Chiavetta n. 6","ritirata: 5 nov","da: F. Corradi","non restituita"]),
 pro:()=>LIB.shot("Profilo di F. Corradi",["Nuova avventura in Gustalia!","Direttore R&S da gennaio"]),
 tea:()=>LIB.group(5,"Il gruppo ricerca, Parma","#7a3b5a")
};
const MAP=LIB.city("Parma",[[40,52,"Centro"],[132,132,"Oltretorrente"],[276,132,"Stazione"],[40,232,"Zona industriale"],[300,40,"Cittadella"],[200,200,"Tangenziale"]],
 [[70,226,"#d43d55","azienda",9,-8],[276,150,"#33658a","stazione",9,-8]]);

LIB.add(49,["La ricetta","La madre di Irene vuole capire perché sua figlia è stata licenziata","Parma"],{
 map:MAP,scenes:SC,owner:"Irene Bocchi",time:"20:00",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal map cal note social",
 late:"Irene ha bisogno del telefono per un colloquio di lavoro domattina.",
 brief:"La formula di un prodotto di un'azienda alimentare di Parma è finita alla concorrenza. Dal registro risulta che il file è stato copiato con l'utenza di Irene Bocchi, 25 anni, stagista. L'hanno licenziata. La madre ti ha dato il suo telefono.",
 quote:"«Mia figlia ha fotografato una lavagna per studiare, e quella foto è finita in una chat di colleghi. Basta questo per dire che ha venduto una ricetta? Lei dice che la sua password la conoscevano anche altri. Mi dica la verità, qualunque sia.»",
 chats:[
  {id:"cor",name:"Dott. Corradi",sub:"Responsabile ricerca",m:[
   ["set",0,"Irene, per le analisi del lunedì usa pure il PC del laboratorio 2. La password scrivila sul post-it, così se manchi la uso io."],
   ["5 nov",0,"Domani sei a Bari dalla nonna, vero? Tranquilla, ci penso io."],
   ["",2,"1 messaggio eliminato."],
   ["12 nov",0,"Irene, mi dispiace. Non dire alla direzione del post-it, peggioreresti la tua posizione.","cor"]]},
  {id:"lab",name:"Laboratorio",sub:"Gruppo",m:[
   ["ott",1,"Ho fatto la foto alla lavagna per ripassare, ve la giro."],
   ["ott",0,"Marta: Grazie! Ma non c'è niente delle dosi, vero?"],
   ["ott",1,"No, solo temperature e tempi."]]},
  {id:"non",name:"Nonna",sub:"Bari",m:[
   ["6 nov 15:10",0,"Sei arrivata? Ti aspetto con le orecchiette!"],
   ["6 nov 15:12",1,"Appena scesa, nonna!"]]},
  {id:"hr",name:"Risorse umane",sub:"",m:[
   ["12 nov",0,"Sig.ra Bocchi, il 6 novembre alle 9:40 la sua utenza ha copiato la formula su un dispositivo esterno. Il contratto è risolto."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Profili",title:"Federico Corradi",sub:"Responsabile R&S",body:"Aggiornato il 3 novembre: «Nuova avventura in Gustalia! Direttore R&S da gennaio.»"},
   {id:"s2",g:"Profili",title:"Gustalia",sub:"Azienda alimentare",body:"Annuncio del 18 novembre: «In arrivo il nostro nuovo prodotto». Lo stesso della formula."}],
  mail:[
   {id:"m1",title:"IT aziendale",sub:"Registro accessi",meta:"12 novembre",body:"FORMULA_X: 6 nov 9:40, utente i.bocchi, PC laboratorio 2, copia su USB."},
   {id:"m2",title:"Magazzino",sub:"Inventario chiavette",meta:"13 novembre",body:"Chiavetta n. 6 ritirata il 5 novembre da F. Corradi, non restituita."}],
  map:[
   {id:"g1",g:"Cronologia 6 novembre",title:"Stazione di Parma",sub:"7:00",body:""},
   {id:"g2",g:"Cronologia 6 novembre",title:"In treno, vicino ad Ancona",sub:"9:40",body:""},
   {id:"g3",g:"Cronologia 6 novembre",title:"Bari",sub:"15:00",body:""}],
  cal:[
   {id:"c1",g:"Novembre",title:"Gio 6 · Bari dalla nonna",sub:"treno 7:10",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora della copia del file, quattro cifre.\nNota sotto: il giorno e il mese in cui Corradi ha aggiornato il profilo, quattro cifre."},
   {id:"n2",title:"Per mamma",lock:"note",body:"Il 6 alle 9:40 ero in treno vicino ad Ancona.\nLa password del PC 2 era sul post-it perché me l'aveva chiesto Corradi.\nIl 3 novembre lui aveva già scritto che va in Gustalia, e il 5 ha preso la chiavetta 6."}],
  tel:[
   {id:"t1",title:"Nonna",sub:"6 nov 15:15 · in uscita, 5 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Lavagna",sc:"lav"},
  {id:"p2",t:"6 nov",title:"Biglietto",sc:"tre"},
  {id:"p3",t:"estate",title:"Il gruppo",sc:"tea"},
  {id:"h1",t:"12 nov",title:"Accessi",sc:"acc",lock:"album"},
  {id:"h2",t:"13 nov",title:"Chiavette",sc:"inv",lock:"album"},
  {id:"h3",t:"3 nov",title:"Profilo",sc:"pro",lock:"album"}],
 pins:{note:"0311",album:"0940"},
 events:[{id:"a",q:3,kind:"sms",from:"Marta",text:"Irene, la direzione mi ha chiesto della tua foto alla lavagna. Ho detto la verità: non c'erano le dosi. Ti voglio bene."},
         {id:"b",q:8,kind:"call",from:"Dott. Corradi",lines:["«Irene? Volevo dirti che ho messo una buona parola per te.»","«...Chi parla? Questo è il numero di Irene?»","«Lasci perdere. Ho sbagliato.»"]}],
 qs:[
  {t:"dosi",q:"Che cosa NON c'era nella foto della lavagna?",any:["dos"],show:"Le dosi",hint:"Gruppo del laboratorio.",news:"Solo temperature e tempi. La falsa pista non regge."},
  {t:"9:40",q:"A che ora è stato copiato il file, il 6 novembre?",all:["940"],show:"Alle 9:40",hint:"Chat con le risorse umane.",news:"Con l'utenza di Irene, dal PC del laboratorio 2."},
  {t:"7:10",q:"A che ora era partito il treno di Irene per Bari?",all:["710"],show:"Alle 7:10",hint:"Galleria.",news:"Alle 9:40 era in treno."},
  {t:"Ancona",q:"Dove era Irene alle 9:40, secondo le Mappe?",any:["ancona","treno"],show:"In treno, vicino ad Ancona",hint:"Mappe.",news:"Non poteva essere al PC del laboratorio a Parma."},
  {t:"post-it",q:"Dove era scritta la sua password?",any:["postit","post"],show:"Su un post-it",hint:"Chat con Corradi.",news:"Glielo aveva chiesto lui. Ora hai recuperato il messaggio che Corradi le ha mandato il 12.",unlock:"cor"},
  {t:"Corradi",q:"Chi le aveva chiesto di scriverla sul post-it?",any:["corradi","federico"],show:"Il dott. Corradi",hint:"Stessa chat.",news:"E il 12 le dice di non parlarne alla direzione."},
  {t:"6",q:"Quale chiavetta ha ritirato Corradi il 5 novembre e non ha restituito?",a:["6","la 6","n 6","numero 6","sei","chiavetta 6"],show:"La n. 6",hint:"Mail del magazzino, o album privato. Il codice è l'ora della copia.",news:"Il giorno prima della copia."},
  {t:"Gustalia",q:"Per quale azienda va a lavorare Corradi?",any:["gustal"],show:"Gustalia, la concorrente",hint:"Scatto.",news:"Ha aggiornato il profilo il 3 novembre. Gustalia annuncia «il nuovo prodotto» il 18."},
  {t:"c",q:"Chi ha passato la formula?",o:[["i","Irene"],["m","Marta, con la foto della lavagna"],["c","Corradi, con la password di Irene"],["g","Un hacker di Gustalia"],["d","La direzione"]],a:"c",show:"Corradi",hint:"Dove era Irene alle 9:40, e chi aveva la sua password?",news:""}],
 win:{title:"La formula l'ha passata Corradi.",
  steps:["Il file è stato copiato il 6 novembre alle 9:40 con l'utenza di Irene. Lei era in treno vicino ad Ancona.","La password era su un post-it, su richiesta di Corradi.","Il 5 Corradi ha ritirato la chiavetta 6 e non l'ha resa.","Il 3 novembre aveva già annunciato di andare in Gustalia, che ora lancia il prodotto.","La foto della lavagna non conteneva le dosi."],
  end:"L'avvocato della famiglia manda all'azienda il biglietto del treno, le Mappe e il messaggio sul post-it. Una settimana dopo l'azienda ritira il licenziamento e denuncia Corradi. Irene, però, il colloquio di sabato l'ha già fatto, e le è andato bene."}
});
LIB.tune(49,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.chats.find(c=>c.id==="hr").m.push(["12 nov",0,"La sua matricola 3816 è stata disattivata."]);
 e.lists.mail.push({id:"m3",title:"Gustalia · Risorse umane",sub:"Inoltrato per errore",meta:"4 novembre",lock:"gus",body:"(Inoltrato dal dott. Corradi al gruppo del laboratorio, poi «richiamato»)\nGentile dott. Corradi, confermiamo l'assunzione dal 7 gennaio. Il bonus d'ingresso è legato alla consegna del «progetto X» entro il 15 novembre."});
 e.pins={album:"0940",gus:"3816",note:"0515"};
 e.locks={album:{hint:"Il minuto in cui io ero su un treno, e il mio nome no."},gus:{name:"Mail protetta",hint:"Il numero che mi hanno tolto insieme al lavoro."},note:{hint:"Il giorno in cui ha preso una cosa piccola, poi la sua scadenza."}};
 e.spots=[
  {id:"s1",x:70,y:226,label:"Alimenti Parma",title:"Alimenti Parma",sub:"Laboratorio 2 al piano terra",body:"Recensione di un ex dipendente: «Password sui post-it attaccati ai monitor. Un classico.»"},
  {id:"s2",x:276,y:150,label:"Stazione",title:"Stazione di Parma",sub:"Frecciarossa per Bari, 7:10",body:"Il treno delle 7:10 non ferma a Parma dopo le 7:12. Alle 9:40 è tra Rimini e Ancona."},
  {id:"s3",x:310,y:40,label:"Gustalia",title:"Gustalia · ricerca e sviluppo",sub:"Azienda alimentare",body:"Recensione: «Stanno per lanciare un prodotto identico a quello di un'azienda di Parma. Coincidenze.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"15 novembre",q:"Entro quando doveva consegnare il «progetto X», Corradi, per avere il bonus?",all:["15","nov"],show:"Entro il 15 novembre",hint:"",news:"La formula è uscita il 6. Il bonus era a portata di mano."});
 LIB.hints(e,["Che cosa c'era, e che cosa no, in quella foto.","L'azienda ha scritto quando.","Il viaggio dalla nonna ha lasciato un pezzo di carta.","Il telefono sapeva dov'era.","Una password non è segreta se è scritta.","Chi gliel'aveva chiesto?","In magazzino tengono un inventario.","Profili professionali che cambiano troppo presto.","Un inoltro sbagliato, chiuso con un numero che non le serve più.","Dov'era Irene alle 9:40, e chi aveva la sua password?"]);
});
})();
