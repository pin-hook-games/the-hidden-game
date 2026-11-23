(function(){
/* Omicidi 12: Il coro (Trento). Soluzione: la tesoriera Irma. Aveva svuotato la cassa e il maestro aveva chiesto l'estratto conto alla banca. */
const SC={
 coro:()=>LIB.group(7,"Coro Monte Bondone · concerto d'autunno","#33658a"),
 ste:()=>LIB.two("#8fb3c9","#55606b","#1f3a66","Con Stefano, Vienna"),
 tre:()=>LIB.doc("Biglietto del treno","#2f8f6b",["Trento → Bolzano","sabato, partenza 21:40","1 adulto","inviato nel gruppo da Gianni"]),
 ther:()=>LIB.obj("#e9dfd0","🫖","Il thermos rosso del maestro"),
 rend:()=>LIB.doc("Rendiconto all'assemblea","#55606b",["Saldo di cassa dichiarato: 6.200 €","Firma: la tesoriera","Unica firma sul conto: 1","Nessun revisore"]),
 bank:()=>LIB.doc("Cassa Rurale · saldo","#a02822",["Conto del coro","Saldo al sabato: 310,00 €","Prelievi in contanti: 41 in tre anni","Estratto completo da lunedì"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Trento",
 water:[["M120 0Q100 120 140 260",14]],
 parks:[`<ellipse cx="50" cy="120" rx="46" ry="70" fill="#d7e2c9"/>`],
 roads:["M160 60H360","M200 30V240","M280 40V230","M160 150H350","M160 210H320"],
 labels:[[206,54,"Stazione"],[206,144,"Duomo"],[286,104,"Buonconsiglio"],[20,110,"Monte Bondone"],[96,30,"Adige"],[290,204,"Povo"]],
 pins:[[230,170,"#d43d55","sala del coro",9,16],[300,80,"#33658a","casa del maestro",-110,-8]]});

LIB.add(32,["Il coro","La vicepresidente del coro vuole capire che cosa è successo al maestro","Trento"],{
 map:MAP,scenes:SC,owner:"Bruno Dalpiaz",time:"11:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["rec","Registratore","mic","#e2574c,#a02822"]],
 late:"Il figlio del maestro è arrivato da Vienna e ha chiesto il telefono del padre. La vicepresidente ha dovuto consegnarlo.",
 brief:"La vicepresidente del Coro Monte Bondone ti ha portato il telefono del maestro Bruno Dalpiaz, 67 anni. Sabato sera, al rinfresco dopo il concerto, si è sentito male ed è morto in ospedale. Le analisi parlano di una sostanza vegetale tossica.",
 quote:"«Il maestro beveva solo il suo tè, da un thermos. Quella sera aveva escluso un tenore dall'assolo, e quello gli ha scritto «questa me la paga». C'era anche la storia della sala con il parroco. Io non voglio accusare nessuno del coro senza saperlo. Ma voglio saperlo.»",
 chats:[
  {id:"gruppo",name:"Coro Monte Bondone",sub:"Gruppo · 42 coristi",m:[
   ["sab 17:00",0,"Irma: Il thermos rosso del maestro è pronto: tè con le erbe del mio giardino, come sempre. Non toccatelo, è solo suo!"],
   ["sab 17:05",0,"Elda: Io porto lo strudel. Irma, tranquilla, il thermos non lo tocca nessuno."],
   ["sab 21:20",0,"Gianni: Bel concerto anche senza il mio assolo. Scappo, ho il treno per Bolzano alle 21:40. [foto del biglietto]"],
   ["sab 21:35",0,"Paolo: Io resto all'organo fino alle dieci, così il rinfresco ha la musica."]]},
  {id:"gianni",name:"Gianni",sub:"",m:[
   ["gio 22:00",0,"Maestro, togliermi l'assolo a due giorni dal concerto. Questa me la paga."],
   ["ven 08:00",1,"Gianni, avevi la febbre e stonavi. A Natale l'assolo è tuo, promesso."],
   ["ven 08:10",0,"Ha ragione lei. Mi scusi per ieri sera. A Natale la faccio piangere."]]},
  {id:"irma",name:"Irma",sub:"Tesoriera",m:[
   ["mer 10:00",1,"Irma, per l'assemblea ho chiesto alla banca l'estratto degli ultimi tre anni. Lo ritiro lunedì."],
   ["mer 10:20",0,"Maestro non serve, i conti li porto io come sempre. La banca fa solo confusione."],
   ["mer 10:25",1,"Lo ritiro lo stesso. È una formalità."],
   ["sab 12:00",0,"Stasera dopo il concerto le spiego tutto con calma. Intanto le preparo il suo tè."]]},
  {id:"luca",name:"Don Luca",sub:"",m:[
   ["ven 15:00",0,"Maestro, per la sala ha ragione lei: resta al coro il martedì. Sabato non riesco a venire, ho un matrimonio a Rovereto alle 21."],
   ["ven 15:10",1,"Grazie, don Luca. Pace fatta."]]},
  {id:"stefano",name:"Stefano",sub:"Figlio",m:[
   ["sab 09:00",0,"Papà in bocca al lupo per stasera. Da Vienna non riesco a scendere, guardo il video."],
   ["sab 09:10",1,"Te lo manda Elda. Canteremo anche per te."]]},
  {id:"elda",name:"Elda",sub:"",m:[
   ["sab 22:10",0,"Maestro dove l'hanno portata? Ha bevuto solo il suo tè e ha detto che era più amaro del solito."]]}
 ],
 lists:{
  rec:[
   {id:"r0",g:"Memo",title:"1 appunto protetto",sub:"«Per l'assemblea»",meta:"Da aprire",body:"Appunto vocale di sabato mattina.\nPer ascoltarlo bisogna sapere di quali conti parla."},
   {id:"r1",g:"Memo recuperato",u:"mem",title:"Appunto · sabato 10:20",sub:"0:21",body:"«Appunto per l'assemblea. La banca mi ha anticipato il saldo: sul conto ci sono 310 euro, non 6.200. Prima di dirlo ai coristi ne parlo con Irma stasera, dopo il concerto. Voglio sentire da lei.»"}],
  mail:[
   {id:"m1",title:"Cassa Rurale",sub:"Saldo anticipato",meta:"sabato 10:05",body:"Gentile maestro, come da sua richiesta le anticipo il saldo del conto del coro: 310,00 €.\nL'estratto dei tre anni sarà pronto lunedì."},
   {id:"m2",title:"Verbale dell'assemblea 2024",sub:"Rendiconto di cassa",meta:"dicembre 2024",body:"La tesoriera dichiara un saldo di 6.200 €.\nQuote: 120 € l'anno per ciascuno dei 42 coristi.\nUnica firma sul conto: la tesoriera."}],
  map:[
   {id:"g1",g:"Sabato",title:"Sala del coro",sub:"18:00 - 22:05",meta:"Permanenza",body:"Concerto alle 20:00, rinfresco dalle 21:15."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Sab · Concerto",sub:"20:00",body:"Poi parlare con I."},
   {id:"c2",g:"Prossima settimana",title:"Lun · Banca",sub:"09:00",body:"Ritirare l'estratto."},
   {id:"c3",g:"Dicembre",title:"Assemblea",sub:"",body:"Rendiconto."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: quanto versano in tutto i coristi in un anno.\nNota sotto: quello che c'è davvero sul conto, con uno zero davanti."},
   {id:"n2",title:"Irma",lock:"note",body:"Irma è con noi da ventidue anni.\nSe ha un problema la aiutiamo, ma quei soldi sono dei coristi.\nLe chiedo di restituire a rate e di lasciare la cassa. Se accetta, niente denuncia."}],
  tel:[
   {id:"t1",title:"Cassa Rurale",sub:"sab 09:50 · in uscita, 6 min"},
   {id:"t2",title:"Irma",sub:"sab 11:40 · in entrata, 9 min"}]
 },
 photos:[
  {id:"p1",t:"sab 19:40",title:"Prima di entrare",sc:"coro"},
  {id:"p2",t:"ago",title:"Con Stefano",sc:"ste"},
  {id:"p3",t:"sab 21:20",title:"Da Gianni",sc:"tre"},
  {id:"p4",t:"sab 21:25",title:"Il mio tè",sc:"ther"},
  {id:"h1",t:"dic 2024",title:"Rendiconto",sc:"rend",lock:"album"},
  {id:"h2",t:"sab 10:06",title:"Saldo vero",sc:"bank",lock:"album"}],
 pins:{note:"0310",album:"5040"},
 events:[{id:"a",q:4,kind:"call",from:"Irma",lines:["«Anna, sei tu? Che tragedia, non ci dormo.»","«Ascolta, nel telefono del maestro ci sono cose della banca che lui non aveva capito. Non farle girare, creano solo sospetti inutili.»","«Anna?»"]},
         {id:"b",q:8,kind:"sms",from:"Elda",text:"Anna, ti scrivo qui perché non so che fare. Sabato Irma ha lavato il thermos rosso prima ancora che arrivasse l'ambulanza."}],
 qs:[
  {t:"Irma",q:"Il maestro beveva solo dal suo thermos. Chi gliel'ha preparato sabato?",any:["irma","tesorier"],show:"Irma, la tesoriera",hint:"Lo scrive lei nel gruppo del coro.",news:"«Tè con le erbe del mio giardino. Non toccatelo, è solo suo.» Lo prepara sempre lei: può non voler dire niente."},
  {t:"Bolzano",q:"Il tenore Gianni aveva scritto «questa me la paga». Per quale città ha preso il treno delle 21:40?",any:["bolzano"],show:"Per Bolzano",hint:"Ha mandato il biglietto nel gruppo.",news:"È uscito prima del rinfresco. E venerdì mattina aveva chiesto scusa: l'assolo di Natale era già suo."},
  {t:"Rovereto",q:"Don Luca aveva litigato con lui per la sala. Dov'era sabato alle 21?",any:["rovereto"],show:"A Rovereto, per un matrimonio",hint:"Messaggio di venerdì.",news:"E la lite era chiusa: «Pace fatta». Il figlio Stefano è a Vienna, l'organista Paolo ha suonato fino alle dieci."},
  {t:"5040",q:"Passiamo ai soldi. Quanti euro versano in tutto i coristi in un anno?",a:["5040","5.040","5040 euro","5.040 euro","5.040 €"],show:"5.040 €",hint:"Il verbale dell'assemblea dice la quota e il numero dei coristi.",news:"Quarantadue quote da 120 euro. Una cifra piccola, ma ogni anno."},
  {t:"6200",q:"Quale saldo di cassa ha dichiarato la tesoriera all'ultima assemblea?",a:["6200","6.200","6200 euro","6.200 euro","6.200 €"],show:"6.200 €",hint:"Stesso verbale.",news:"Dichiarato a voce e firmato solo da lei. Sul conto c'è un'unica firma."},
  {t:"310",q:"Quanto c'è davvero sul conto, secondo la banca?",a:["310","310 euro","310€","310,00"],show:"310 €",hint:"La banca ha scritto sabato mattina.",news:"Ora che conosci i due numeri, hai aperto l'appunto vocale protetto nel Registratore.",unlock:"mem"},
  {t:"5890",q:"Quanti euro mancano rispetto al saldo dichiarato?",a:["5890","5.890","5890 euro","5.890 euro","5.890 €"],show:"5.890 €",hint:"Sottrai il saldo vero da quello dichiarato.",news:"Quasi seimila euro spariti in quarantuno prelievi in contanti."},
  {t:"dopo il concerto",q:"Nell'appunto vocale il maestro dice quando ne avrebbe parlato con Irma. Quando?",any:["concerto","stasera","sabato"],show:"Sabato sera, dopo il concerto",hint:"Ascolta il memo recuperato.",news:"Glielo aveva già fatto capire mercoledì, chiedendo l'estratto. Sabato a mezzogiorno lei gli ha scritto: «Intanto le preparo il suo tè»."},
  {t:"lunedì",q:"In quale giorno il maestro avrebbe ritirato l'estratto completo?",any:["lunedi"],show:"Lunedì",hint:"Chat con Irma, mail della banca e Calendario.",news:"Lunedì tutti avrebbero saputo. Sabato era l'ultima sera utile."},
  {t:"1",q:"Nell'album privato c'è il vecchio rendiconto. Quante firme ci sono sul conto del coro?",a:["1","una","una sola","1 firma","una firma"],show:"Una sola",hint:"Il codice dell'album è il totale delle quote di un anno.",news:"Solo la tesoriera poteva prelevare. Nessun revisore, per ventidue anni di fiducia."},
  {t:"22",q:"Nella nota protetta il maestro scrive da quanti anni Irma è nel coro. Quanti?",a:["22","ventidue","22 anni","ventidue anni"],show:"Ventidue",hint:"Il codice è il saldo vero, con uno zero davanti.",news:"«Se accetta, niente denuncia.» Voleva solo che restituisse a rate."},
  {t:"i",q:"Chi è stato?",o:[["g","Gianni, il tenore"],["i","Irma, la tesoriera"],["l","Don Luca"],["s","Stefano, il figlio"],["e","Elda, il soprano"],["p","Paolo, l'organista"],["n","Nessuno: è stato un malore"]],a:"i",show:"Irma, la tesoriera",hint:"Chi ha preparato il tè e aveva tempo fino a lunedì?",news:""}],
 win:{title:"È stata Irma, la tesoriera.",
  steps:["Sul conto del coro c'erano 310 €, non i 6.200 dichiarati: mancavano 5.890 €, prelevati in contanti dall'unica persona con la firma.","Mercoledì il maestro le aveva detto che lunedì avrebbe ritirato l'estratto della banca.","Sabato mattina ha saputo il saldo vero e ha deciso di parlarle dopo il concerto.","Il tè del thermos rosso lo ha preparato lei, «con le erbe del mio giardino». Il maestro lo ha trovato più amaro del solito.","Gianni era sul treno per Bolzano, don Luca a Rovereto, Stefano a Vienna."],
  end:"La vicepresidente ascolta l'appunto del maestro. «Voleva sentire da lei», ripete. «Le avrebbe perdonato tutto.» Chiude il telefono. «All'assemblea il rendiconto lo leggo io. Ma prima passo dai carabinieri con l'estratto.»"}
});
LIB.tune(32,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="ban";
 e.pins={album:"5040",ban:"4212",note:"6210"};
 e.locks={album:{hint:"Quanto entra in un anno, tutto insieme."},ban:{name:"Mail protetta",hint:"Quanti cantiamo, poi la quota in decine."},note:{hint:"Le centinaia dichiarate all'assemblea, poi le ultime due cifre del conto vero."}};
 e.spots=[
  {id:"s1",x:230,y:170,label:"Sala del coro",title:"Sala del coro",sub:"",body:"Rinfresco dalle 21:15. Il thermos del maestro sul leggio, come sempre. Chi glielo riempie è sempre la stessa persona."},
  {id:"s2",x:300,y:80,label:"Casa del maestro",title:"Casa del maestro",sub:"",body:"Sulla scrivania, il calendario con «Lun · Banca» cerchiato in rosso."},
  {id:"s3",x:180,y:120,label:"Cassa Rurale",title:"Cassa Rurale",sub:"★ 4,1",body:"Recensione di un impiegato: «Sabato un signore distinto è venuto a chiedere il saldo del conto del coro. È uscito scuro in volto.»"}];
 LIB.hints(e,["Il thermos ha sempre la stessa mano.","Il tenore era lontano.","Il parroco era lontano.","Fai un conto: coristi per quota.","L'assemblea ha un verbale.","La banca ha risposto, ma la mail è chiusa.","Fai la differenza.","Un appunto vocale.","Il calendario dice quando.","Il vecchio rendiconto è nascosto.","Il maestro ha scritto di lei.","Chi gli ha dato il thermos, e chi temeva lunedì?"]);
});
})();
