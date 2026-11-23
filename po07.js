(function(){
/* Intrighi 7: Le firme (Castelnuovo, comune inventato). Soluzione: il segretario della lista, Renato Olmi.
   La notte prima della consegna ha aggiunto le 42 firme che mancavano, copiando nomi da un vecchio elenco di iscritti del 2015. */
const SC={
 tav:()=>LIB.obj("#e9dfd0","🖊️","Il banchetto del mercato"),
 m1:()=>LIB.doc("Moduli · lunedì sera","#2f6b4f",["Firme raccolte: 360","Ne servono: 400","Mancano: 40","Foto di Rita, 21:10"]),
 nip:()=>LIB.two("#f0d9a0","#7a3b5a","#2f6b4f","Con i nipoti, castagnata"),
 pre:()=>LIB.doc("Prefettura · verifica","#a02822",["Firme consegnate: 402","Firmatari deceduti: 11","Lista ammessa con riserva","Indagine sulla raccolta"]),
 ult:()=>LIB.doc("Ultimo foglio · foto di Rita","#55606b",["42 firme, stessa penna verde","Stessa grafia inclinata","Nomi in ordine alfabetico","Rita usa solo penne blu"]),
 ele:()=>LIB.doc("Elenco iscritti 2015","#33658a",["File nel computer della sezione","Ultima apertura: lunedì 23:40","Utente: segreteria","Nomi da Abate a Zucca"])
};
const MAP=LIB.prov([[320,84,"#d43d55","sezione di Alleanza Civica",-90,-16]]);

LIB.add(67,["Le firme","Il candidato Dessì vuole sapere chi ha falsificato le firme della sua lista","Castelnuovo"],{
 map:MAP,scenes:SC,owner:"Rita Bassi",time:"17:30",date:"gio 13 nov",homeDate:"giovedì 13 novembre",
 appIds:"msg tel mail gal cal note drive",
 late:"Rita è stata convocata in prefettura e deve portare il telefono. Il tempo è finito.",
 brief:"Franco Dessì, candidato sindaco di Alleanza Civica a Castelnuovo, ti ha portato il telefono di Rita Bassi, 64 anni, che ha raccolto le firme per presentare la lista. La prefettura ha scoperto che undici firmatari sono morti da anni. Rita ha autenticato i moduli, e la colpa formale è sua.",
 quote:"«Rita è la persona più onesta che conosco, ma la firma sotto i moduli è la sua. Rischia una denuncia, e io rischio la lista. Lei dice di aver consegnato solo firme vere, raccolte una a una al mercato. Allora quelle undici da dove vengono?»",
 chats:[
  {id:"olmi",name:"Renato Olmi",sub:"Segretario",m:[
   ["lun 21:15",1,"Renato, siamo a 360. Mancano 40 firme e domani alle 12 si consegna. Non ce la facciamo."],
   ["lun 21:20",0,"Portami i moduli in sezione, li conto io stanotte. Domattina te li riporto e consegni tu, tranquilla."],
   ["mar 08:30",0,"Eccoli, tutto a posto. Ce l'abbiamo fatta, alla fine."],
   ["mar 08:35",1,"Come «ce l'abbiamo fatta»? Ieri sera ne mancavano 40."],
   ["",2,"1 messaggio eliminato martedì."],
   ["mar 08:36",0,"Ho completato io, non preoccuparti. Tu firma l'autentica e consegna. Non fare domande, Rita.","olm"]]},
  {id:"bianca",name:"Bianca",sub:"",m:[
   ["mer 23:00",0,"Rita, sono Bianca, la figlia di Renato. Lunedì notte papà è rimasto in sezione fino all'una. Quando è tornato non mi guardava in faccia. Mi dispiace tanto."],
   ["mer 23:10",1,"Bianca, tesoro, non è colpa tua."]]},
  {id:"dessi",name:"Franco Dessì",sub:"Candidato",m:[
   ["mar 12:30",0,"Rita, lista consegnata! 402 firme, sei un mito."],
   ["gio 09:00",0,"Rita, la prefettura dice che ci sono undici morti tra i firmatari. Io lunedì e martedì ero a Roma per il congresso regionale, non ho visto niente. Dimmi che non sai niente."]]},
  {id:"tipo",name:"Tipografia Sole",sub:"",m:[
   ["9 nov",0,"Signora Bassi, i 30 moduli sono pronti. Ricevuta a nome della lista."]]},
  {id:"pino",name:"Pino",sub:"Insieme",m:[
   ["gio 10:00",0,"Rita, sono Pino di Insieme. Lo so che siamo avversari, ma noi con questa storia non c'entriamo. Abbiamo solo letto il comunicato della prefettura."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Prefettura",sub:"Esito della verifica",meta:"mercoledì",body:"Firme consegnate: 402. Soglia: 400.\nFirmatari risultati deceduti: 11.\nTutti gli 11 nomi sono nell'ultimo foglio."},
   {id:"m2",title:"Alleanza Civica · sezione",sub:"Accessi al computer",meta:"giovedì, su richiesta di Rita",body:"Lunedì notte il computer della sezione è stato usato dalle 23:20 all'01:05, con l'utente «segreteria».\nFile aperto: «Elenco iscritti 2015»."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Lun · Mercato",sub:"08:00 - 13:00",body:"Ultimo banchetto."},
   {id:"c2",g:"Questa settimana",title:"Mar · Consegna lista",sub:"12:00",body:"Tribunale."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: le firme che avevo lunedì sera, con uno zero davanti.\nNota sotto: l'anno del vecchio elenco degli iscritti."},
   {id:"n2",title:"Le mie penne",lock:"note",body:"Uso solo penne blu, da quarant'anni, da quando facevo la maestra.\nOgni sera ho fotografato i moduli, così nessuno poteva dire niente.\nIo ho autenticato quello che ho visto. Quello che non ho visto, no."}],
  drive:[
   {id:"d1",title:"Foto moduli",sub:"Cartella",meta:"Ogni sera",body:"Una foto per sera dal 3 al 10 novembre.\nLunedì 10, ore 21:10: 360 firme, tutte in penna blu o nera dei firmatari."}],
  tel:[
   {id:"t1",title:"Renato Olmi",sub:"mar 08:40 · in uscita, 2 min"},
   {id:"t2",title:"Franco Dessì",sub:"gio 09:05 · in entrata, 11 min"}]
 },
 photos:[
  {id:"p1",t:"lun",title:"Banchetto",sc:"tav"},
  {id:"p2",t:"lun 21:10",title:"Lunedì sera",sc:"m1"},
  {id:"p3",t:"ott",title:"Nipoti",sc:"nip"},
  {id:"p4",t:"mer",title:"Prefettura",sc:"pre"},
  {id:"h1",t:"mar 08:40",title:"Ultimo foglio",sc:"ult",lock:"album"},
  {id:"h2",t:"gio 16:00",title:"Dalla sezione",sc:"ele",lock:"album"}],
 pins:{note:"2015",album:"0360"},
 events:[{id:"a",q:3,kind:"call",from:"Renato Olmi",lines:["«Franco? Sei tu con il telefono di Rita?»","«Lascia stare, la responsabilità è sua: ha firmato lei l'autentica. Tu salva la lista e non scavare.»","«Franco?»"]},
         {id:"b",q:8,kind:"sms",from:"Bianca",text:"Signor Dessì, ho registrato una cosa che mio padre ha detto al telefono martedì. Non so ancora a chi darla. Forse a un magistrato."}],
 qs:[
  {t:"400",q:"Quante firme servivano per presentare la lista?",a:["400","quattrocento"],show:"400",hint:"Mail della prefettura.",news:"Ne sono state consegnate 402. Una lista che passa per due firme."},
  {t:"360",q:"Quante firme aveva Rita lunedì sera?",a:["360","trecentosessanta"],show:"360",hint:"Foto dei moduli, lunedì alle 21:10.",news:"Fotografava i moduli ogni sera, nel Drive ci sono tutte le foto."},
  {t:"42",q:"Quante firme sono comparse tra lunedì sera e la consegna?",a:["42","quarantadue"],show:"42",hint:"Consegnate meno raccolte lunedì sera.",news:"In una notte, senza banchetto e senza mercato."},
  {t:"11",q:"Quanti firmatari risultano morti?",a:["11","undici"],show:"Undici",hint:"Esito della verifica.",news:"Tutti nell'ultimo foglio."},
  {t:"Olmi",q:"Chi si è fatto portare i moduli lunedì notte?",any:["olmi","renato","segretari"],show:"Renato Olmi, il segretario",hint:"Chat delle 21:20.",news:"«Li conto io stanotte.» Martedì mattina: «Ce l'abbiamo fatta.» Ora che sai chi li aveva, hai recuperato il messaggio che Olmi ha cancellato.",unlock:"olm"},
  {t:"non fare domande",q:"Che cosa le ha scritto Olmi nel messaggio cancellato, alla fine? «Non fare...»",any:["domand"],show:"«Non fare domande, Rita.»",hint:"Messaggio recuperato.",news:"«Ho completato io.» Lo ha scritto, poi lo ha cancellato."},
  {t:"Roma",q:"Il candidato Franco Dessì: dov'era lunedì e martedì?",any:["roma"],show:"A Roma, al congresso regionale",hint:"Lo scrive lui giovedì.",news:"Non c'era. E Pino, della lista avversaria, ha solo letto il comunicato."},
  {t:"01:00",q:"Fino a che ora Olmi è rimasto in sezione, secondo la figlia?",a:["1","l'una","all'una","01:00","1:00","alle 1","l'1","fino all'una","1.00","0100"],show:"Fino all'una",hint:"Messaggio di Bianca.",news:"Il computer della sezione conferma: usato dalle 23:20 all'01:05."},
  {t:"2015",q:"Quale file è stato aperto quella notte sul computer della sezione? L'elenco iscritti di quale anno?",a:["2015","del 2015"],show:"L'elenco iscritti 2015",hint:"Mail della sezione.",news:"Un elenco di dieci anni fa. Undici di quei nomi nel frattempo sono morti."},
  {t:"verde",q:"Nell'album privato c'è l'ultimo foglio. Di che colore è la penna delle 42 firme?",any:["verd"],show:"Verde",hint:"Il codice dell'album sono le firme di lunedì sera, con uno zero davanti.",news:"Stessa penna, stessa grafia, nomi in ordine alfabetico."},
  {t:"blu",q:"Nella nota protetta Rita scrive che penne usa da quarant'anni. Di che colore?",any:["blu"],show:"Blu",hint:"Il codice è l'anno del vecchio elenco.",news:"«Io ho autenticato quello che ho visto.»"},
  {t:"o",q:"Chi ha falsificato le firme?",o:[["r","Rita Bassi, che ha autenticato"],["o","Renato Olmi, il segretario"],["d","Franco Dessì, il candidato"],["b","Bianca, la figlia di Olmi"],["p","La lista avversaria Insieme"],["t","La tipografia"]],a:"o",show:"Renato Olmi",hint:"Chi aveva i moduli la notte in cui sono comparse 42 firme?",news:""}],
 win:{title:"Le firme le ha aggiunte Renato Olmi, il segretario.",
  steps:["Lunedì alle 21:10 Rita aveva 360 firme su 400, e le ha fotografate.","Olmi si è fatto portare i moduli «per contarli» ed è rimasto in sezione fino all'una.","Quella notte ha aperto l'elenco degli iscritti del 2015 e ha aggiunto 42 firme in penna verde, nomi in ordine alfabetico.","Undici di quei nomi sono di persone morte. Martedì ha scritto a Rita: «Non fare domande», poi ha cancellato il messaggio.","Rita usa solo penne blu. Dessì era a Roma, la lista avversaria non c'entra."],
  end:"Dessì guarda le due foto, la sera del 360 e il foglio verde. «Mi ha salvato la lista con dei morti», dice. Il giorno dopo ritira la candidatura e accompagna Rita in prefettura. Bianca li aspetta fuori, con il telefono in mano."}
});
LIB.tune(67,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="sez";
 e.pins={album:"0360",sez:"0400",note:"4205"};
 e.locks={album:{hint:"Quante ne avevo lunedì sera, con lo zero."},sez:{name:"Mail protetta",hint:"Quante ne servivano, con lo zero."},note:{hint:"Quante ne sono comparse dal nulla, poi i minuti in cui il computer si è spento."}};
 e.spots=[
  {id:"s1",x:320,y:84,label:"Sezione",title:"Sezione di Alleanza Civica",sub:"Castelnuovo",body:"Un computer in segreteria, un armadio con i vecchi elenchi. Le chiavi le hanno il segretario e sua figlia."},
  {id:"s2",x:300,y:66,label:"Mercato",title:"Mercato del lunedì",sub:"Piazza",body:"L'ultimo banchetto per le firme: lunedì fino alle 13."},
  {id:"s3",x:344,y:104,label:"Tribunale",title:"Tribunale · ufficio elettorale",sub:"Castelnuovo",body:"Consegna delle liste martedì mattina. Le firme si contano lì, una per una."}];
 LIB.hints(e,["La prefettura ha scritto la soglia.","Rita fotografa i moduli ogni sera.","Fai un conto.","La verifica ha trovato dei nomi strani.","Qualcuno si è fatto portare i moduli.","Un messaggio cancellato, recuperato.","Il candidato era lontano.","La figlia del segretario ha detto un'ora.","Il computer della sezione ha un registro, chiuso.","L'ultimo foglio è nascosto.","Rita ha scritto delle sue penne.","Chi aveva i moduli la notte in cui sono comparse?"]);
});
})();
