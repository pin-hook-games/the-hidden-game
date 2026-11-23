(function(){
/* Omicidi 4: Stanza 212 (Rimini). Soluzione: Paola Sarti, collega della vittima, registrata nella 214 come «Rossi». Il portiere Ivan è innocente. */
const SC={
 hall:()=>LIB.obj("#e9dfd0","🛎️","Il banco della reception, turno di notte"),
 park:()=>LIB.car("#55606b","FP 482 KR"),
 heat:()=>LIB.obj("#cfd8df","🌡️","Stanza 305, termosifone guasto"),
 fam:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Ivan con la figlia, Ferragosto"),
 keys:()=>LIB.doc("Registro tessere · notte","#33658a",["23:40 emessa tessera 214 (Rossi)","01:58 porta 212 aperta con tessera 214","02:36 porta 214 aperta dall'interno","Nessun'altra apertura al secondo piano"]),
 old:()=>LIB.doc("Registro parcheggio · ottobre","#55606b",["Targa FP 482 KR","Ospite: Sarti Paola","Azienda: Tecnofarma","Stanza 118 · 2 notti"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Rimini",
 water:[["M0 20Q200 60 400 110",60]],
 roads:["M20 110Q200 150 380 200","M80 120V240","M180 140V250","M280 170V255","M30 200H300"],
 labels:[[70,104,"Marina Centro"],[30,150,"Centro storico"],[90,216,"Stazione"],[190,134,"lungomare"],[250,60,"Adriatico"],[290,196,"Miramare"]],
 pins:[[130,128,"#d43d55","Hotel Bellariva",9,-8],[70,190,"#56666e","casa di Ivan",9,-8]]});

LIB.add(24,["Stanza 212","L'avvocata di Ivan, portiere di notte, vuole scagionarlo","Rimini"],{
 map:MAP,scenes:SC,owner:"Ivan Petrov",time:"11:30",date:"mer 19 nov",homeDate:"mercoledì 19 novembre",
 appIds:"msg tel mail gal map cal note drive",extraApps:[["centr","Centralino","call","#7c8aa0,#39445a"]],
 late:"L'udienza di convalida è cominciata. L'avvocata è dovuta entrare in aula con quello che aveva.",
 brief:"L'avvocata d'ufficio ti ha portato il telefono di servizio di Ivan Petrov, 51 anni, portiere di notte dell'Hotel Bellariva di Rimini. Nella notte tra lunedì e martedì un rappresentante, Carlo Mele, è stato ucciso nella stanza 212, tra le 2:10 e le 2:30. Ivan è in stato di fermo e l'udienza è tra mezz'ora.",
 quote:"«Ivan era l'unico sveglio in albergo, aveva litigato con la vittima per una mancia e ha un vecchio precedente per rissa. Per la procura basta. Lui giura che a quell'ora era al banco. Questo è il telefono della reception notturna: se c'è una prova che non si è mosso, è qui dentro.»",
 chats:[
  {id:"mele",name:"Ospite 212, sig. Mele",sub:"",m:[
   ["lun 20:15",0,"Lei è un maleducato. Due euro di mancia non le bastano? Parlerò col direttore."],
   ["lun 20:20",1,"Mi scusi, sig. Mele. Ho risposto male, è stata una giornata lunga."],
   ["lun 23:10",0,"Reception: se arriva la mia collega Paola Sarti ditele che scendo io alle 8. Non datele il numero della mia stanza, per nessun motivo."],
   ["lun 23:12",1,"Certamente."]]},
  {id:"dir",name:"Dir. Fabbri",sub:"",m:[
   ["lun 20:40",0,"Petrov, il 212 si è lamentato di lei. È il secondo richiamo quest'anno. Al terzo ci salutiamo."],
   ["lun 20:45",1,"Ha ragione direttore. Non succederà più."],
   ["mar 03:05",1,"Direttore venga subito. Il 212. Ho chiamato il 112."],
   ["mar 03:06",0,"Arrivo, sono a casa a Riccione. Venti minuti."]]},
  {id:"nadia",name:"Nadia piani",sub:"",m:[
   ["lun 21:55",0,"Ivan io stacco alle 22. Il passepartout è in cassaforte in direzione come sempre, ho firmato."],
   ["lun 21:56",1,"Ok. Buonanotte."]]},
  {id:"samir",name:"Samir consegne",sub:"",m:[
   ["mar 01:48",0,"Pizza per la 108, sono fuori."],
   ["mar 01:49",1,"Ti apro. Primo piano, non salire oltre."],
   ["mar 01:54",0,"Consegnato, esco. Notte capo."]]},
  {id:"weber",name:"Ospite 305, sig. Weber",sub:"",m:[
   ["mar 02:12",0,"Il termosifone fa un rumore terribile. Vi chiamo."],
   ["mar 02:33",0,"Grazie per la pazienza al telefono. Ora va."]]},
  {id:"elisa",name:"Sig.ra Mele",sub:"",m:[
   ["mar 09:20",0,"Sono la moglie di Carlo Mele, vi scrivo da Bologna, parto ora. Mio marito mi aveva detto che a Rimini avrebbe finalmente riavuto i 40.000 euro prestati a una collega. Qualcuno l'ha vista?"]]},
  {id:"rossi",name:"Ospite 214, sig.ra Rossi",sub:"",m:[
   ["lun 23:42",1,"Sig.ra Rossi, le ricordo il documento per la registrazione."],
   ["lun 23:44",0,"Lo porto domattina, è in macchina. Ho pagato in contanti, non basta?"]]}
 ],
 lists:{
  centr:[
   {id:"x1",g:"Chiamate interne · notte tra lunedì e martedì",title:"Stanza 305 → reception",sub:"02:14 - 02:31",meta:"Risposta dal banco",body:"Chiamata dalle 02:14 alle 02:31.\nRisposta dal telefono fisso del banco, piano terra.\nIl fisso non ha cordless: chi risponde è al banco."},
   {id:"x2",g:"Chiamate interne · notte tra lunedì e martedì",title:"Stanza 108 → reception",sub:"01:40 - 01:41",meta:"Risposta dal banco",body:"«Arriva una pizza, fatelo salire.»"},
   {id:"x3",g:"Chiamate interne · notte tra lunedì e martedì",title:"Stanza 212 → reception",sub:"Nessuna chiamata",body:"Nessuna chiamata dalla 212 dopo le 23:10."}],
  mail:[
   {id:"m1",title:"Direzione",sub:"Turni di novembre",meta:"1 novembre",body:"Notte: Petrov, dalle 22 alle 6, da solo.\nPiani: Nadia, dalle 14 alle 22."},
   {id:"m2",title:"Prenotazioni",sub:"Arrivo senza prenotazione, stanza 214",meta:"lunedì 23:40",body:"Ospite: «Rossi», una notte, pagamento in contanti.\nDocumento: non ancora registrato."}],
  map:[
   {id:"g1",g:"Notte tra lunedì e martedì",title:"Hotel Bellariva, piano terra",sub:"22:00 - 06:00",meta:"Telefono di servizio",body:"Il telefono di servizio non ha lasciato il piano terra per tutta la notte, tranne alle 03:02 (secondo piano, due minuti)."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Lun - ven · Notte",sub:"22:00 - 06:00",body:"Da solo."}],
  note:[
   {id:"n1",title:"Passaggio consegne",body:"Fotografo ogni notte il registro tessere e il parcheggio, per il collega del mattino.\nAlbum riservato: l'ora dell'ultima apertura della 212, quattro cifre.\nNota sotto: il numero della stanza della sig.ra Rossi, con uno zero davanti."},
   {id:"n2",title:"Per l'avvocata",lock:"note",body:"1. Con Mele ho litigato per la mancia, è vero.\n2. Alle 2:14 ero al telefono con la 305: c'è il centralino.\n3. La signora della 214 non ha mai dato il documento.\n4. Non ho parlato subito della rissa del 2019 perché ho paura di perdere il posto. Ho una figlia."}],
  drive:[
   {id:"dk",title:"Registro tessere, notte",sub:"Foto delle 05:50",meta:"Passaggio consegne",body:"23:40 emessa la tessera della 214 (ospite Rossi).\n01:58 porta 212 aperta con la tessera della 214.\n02:36 porta 214 aperta dall'interno.\nNessun'altra apertura al secondo piano fino alle 03:02 (tessera di servizio)."},
   {id:"d0",title:"Registro parcheggio, archivio",sub:"Protetto",meta:"Da aprire",body:"Archivio delle targhe dei mesi scorsi.\nPer cercare serve sapere di chi si sta parlando."},
   {id:"d1",u:"reg",title:"Registro parcheggio · ottobre",sub:"Targa FP 482 KR",meta:"Recuperato",body:"FP 482 KR: ospite Sarti Paola, azienda Tecnofarma, stanza 118, due notti a ottobre.\nLa stessa targa è stata fotografata lunedì alle 23:45, accanto al nome «Rossi»."}],
  tel:[
   {id:"t1",title:"112",sub:"mar 03:04 · in uscita, 3 min"},
   {id:"t2",title:"Dir. Fabbri",sub:"mar 03:05 · in uscita, 1 min"}]
 },
 photos:[
  {id:"p1",t:"lun 22:05",title:"Banco",sc:"hall"},
  {id:"p2",t:"lun 23:45",title:"Parcheggio, posto 9",sc:"park"},
  {id:"p3",t:"mar 02:35",title:"305",sc:"heat"},
  {id:"p4",t:"ago",title:"Con Sofia",sc:"fam"},
  {id:"h1",t:"mar 05:50",title:"Registro tessere",sc:"keys",lock:"album"},
  {id:"h2",t:"ott",title:"Archivio",sc:"old",lock:"album"}],
 pins:{note:"0214",album:"0158"},
 events:[{id:"a",q:4,kind:"call",from:"Ospite 214, sig.ra Rossi",lines:["«Reception? Sono la signora Rossi, sono partita presto.»","«Ho lasciato un caricatore in camera. Non importa, buttatelo. E non serve registrare il documento, vero? Tanto ho pagato.»","«Pronto?»"]},
         {id:"b",q:10,kind:"sms",from:"Dir. Fabbri",text:"Avvocata, se ha lei il telefono: Petrov è un testone ma in dodici anni non ha mai lasciato il banco. Glielo dico da uno che voleva licenziarlo."}],
 qs:[
  {t:"01:58",q:"Ivan fotografa ogni notte il registro delle tessere. A che ora è stata aperta per l'ultima volta la porta della 212?",all:["158"],show:"Alle 01:58",hint:"Ivan salva il registro anche nel Drive, per il collega del mattino.",news:"Dodici minuti prima dell'intervallo indicato dal medico legale. Qualcuno è entrato, e la vittima non ha chiamato la reception."},
  {t:"214",q:"Con la tessera di quale stanza è stata aperta la 212?",a:["214","la 214","stanza 214"],show:"Con la tessera della 214",hint:"È nella stessa riga del registro.",news:"Non con il passepartout, e non con una tessera della reception. Con la tessera di un'altra ospite."},
  {t:"Rossi",q:"A quale nome è registrata la 214?",any:["rossi"],show:"«Rossi»",hint:"C'è una mail delle prenotazioni e una chat.",news:"Arrivata alle 23:40 senza prenotazione, per una notte sola."},
  {t:"in contanti",q:"Come ha pagato la signora Rossi?",any:["contant","cash"],show:"In contanti, senza documento",hint:"Lo scrive lei.",news:"Nessuna carta, nessun documento. Di lei resta solo un cognome qualunque."},
  {t:"17",q:"E Ivan? Per quanti minuti è rimasto al telefono con la stanza 305, quella notte?",a:["17","17 minuti","diciassette"],show:"17 minuti, dalle 02:14 alle 02:31",hint:"Apri l'app Centralino e fai il conto.",news:"Ha risposto dal fisso del banco, che non ha cordless. Per quasi tutto l'intervallo del delitto era al piano terra."},
  {t:"il termosifone",q:"Di che cosa si lamentava il signor Weber della 305?",any:["termosif","riscald","calorif"],show:"Del termosifone",hint:"Chat con la 305.",news:"Weber lo conferma per iscritto alle 02:33. È un testimone che non conosce nessuno dei due."},
  {t:"108",q:"Alle 01:48 è entrato un fattorino. A quale stanza ha consegnato?",a:["108","la 108","stanza 108"],show:"Alla 108, al primo piano",hint:"Chat con Samir.",news:"Entrato alle 01:49, uscito alle 01:54. Quattro minuti prima che la 212 venisse aperta."},
  {t:"22",q:"Nadia ha il passepartout. A che ora ha finito il turno?",a:["22","22:00","alle 22","le 22","22.00"],show:"Alle 22",hint:"Lo scrive lei.",news:"Il passepartout era in cassaforte in direzione, firmato. E la 212 non è stata aperta con quello."},
  {t:"Riccione",q:"Il direttore voleva licenziare Ivan. Dov'era alle 03:06?",any:["riccione"],show:"A casa, a Riccione",hint:"Chat di martedì notte.",news:"Venti minuti di strada. E non aveva motivo di volere morto un cliente."},
  {t:"40000",q:"La moglie della vittima ha scritto alla reception. Quanti euro doveva riavere Carlo Mele a Rimini?",a:["40000","40.000","40000 euro","40.000 euro","40.000 €","40mila"],show:"40.000 €",hint:"Messaggio di martedì mattina.",news:"Prestati a una collega. Lei scriveva da Bologna: un movente, ma non per sé."},
  {t:"Paola Sarti",q:"Mele aveva chiesto di non dare il numero della sua stanza a una persona. Chi? Nome e cognome.",all:["paola","sarti"],show:"Paola Sarti, la collega",hint:"Rileggi i messaggi dell'ospite 212.",news:"«Per nessun motivo.» Ora che hai un nome, hai aperto l'archivio del parcheggio nel Drive.",unlock:"reg"},
  {t:"Tecnofarma",q:"L'auto fotografata lunedì alle 23:45 era già stata qui a ottobre. A quale azienda era intestata la registrazione?",any:["tecnofarma"],show:"Tecnofarma",hint:"Apri il registro recuperato nel Drive.",news:"Stessa targa, FP 482 KR. A ottobre l'ospite si chiamava Sarti Paola. Lunedì si è fatta chiamare Rossi."},
  {t:"02:36",q:"Sempre nel registro tessere: a che ora la porta della 214 si è aperta per l'ultima volta?",all:["236"],show:"Alle 02:36",hint:"Terza riga del registro tessere.",news:"Dall'interno, e nessuno è più rientrato. La «signora Rossi» è partita senza fare il check-out."},
  {t:"118",q:"Nell'album riservato c'è il vecchio registro del parcheggio. In quale stanza aveva dormito Paola Sarti a ottobre?",a:["118","la 118","stanza 118"],show:"Nella 118",hint:"Il codice dell'album è l'ora dell'ultima apertura della 212, quattro cifre.",news:"Conosceva già l'albergo, i piani e gli orari del portiere."},
  {t:"2019",q:"Nella nota protetta Ivan ammette una cosa che aveva taciuto. Di quale anno è la rissa?",a:["2019"],show:"Del 2019",hint:"Il codice è il numero della stanza della sig.ra Rossi, con uno zero davanti.",news:"Ha taciuto per paura di perdere il posto, non per nascondere un delitto."},
  {t:"p",q:"Chi è stato?",o:[["i","Ivan, il portiere"],["p","Paola Sarti, la collega nella 214"],["f","Il direttore Fabbri"],["n","Nadia, dei piani"],["s","Samir, il fattorino"],["w","Il signor Weber della 305"],["e","La moglie della vittima"]],a:"p",show:"Paola Sarti",hint:"Di chi era la tessera che ha aperto la 212?",news:""}],
 win:{title:"È stata Paola Sarti. Ivan è innocente.",
  steps:["La 212 è stata aperta alle 01:58 con la tessera della stanza 214, non con il passepartout.","La 214 era stata presa alle 23:40 da una «signora Rossi», in contanti e senza documento.","L'auto della signora Rossi ha la stessa targa registrata a ottobre a Paola Sarti, collega della vittima, che gli doveva 40.000 €.","Dalle 02:14 alle 02:31 Ivan era al telefono fisso del banco con la stanza 305.","Il fattorino è uscito alle 01:54, Nadia aveva staccato alle 22, il direttore era a Riccione."],
  end:"L'avvocata fotografa il registro delle tessere e chiude la cartella. «Diciassette minuti al telefono per un termosifone», dice. «È la telefonata più utile della sua vita.» Entra in aula con cinque minuti di anticipo."}
});
LIB.tune(24,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="dk").lock="tes";
 e.pins={album:"0158",tes:"0212",note:"1836"};
 e.locks={album:{hint:"Il minuto in cui una porta si è aperta con la tessera sbagliata."},tes:{name:"File protetto",hint:"La stanza dove è successo, con lo zero davanti."},note:{hint:"La stanza di ottobre, poi i minuti in cui la 214 si è riaperta."}};
 e.spots=[
  {id:"s1",x:130,y:128,label:"Hotel Bellariva",title:"Hotel Bellariva",sub:"★★★ · ★ 3,8",body:"Reception al piano terra. Ascensore di servizio sul retro, vicino al parcheggio.\nRecensione: «Il portiere di notte è gentile, ma è sempre al telefono.»"},
  {id:"s2",x:70,y:190,label:"Casa di Ivan",title:"Casa di Ivan",sub:"",body:"Un monolocale a dieci minuti dall'hotel."},
  {id:"s3",x:300,y:60,label:"Riccione →",title:"Riccione",sub:"",body:"Recensione di una discoteca: «Il direttore di un hotel di Rimini qui ogni lunedì, fino alle quattro.»"}];
 LIB.hints(e,["Ivan fotografa un registro ogni notte, ma il file è chiuso.","Con quale tessera?","A che nome è quella stanza?","Come ha pagato?","Ivan ha un alibi al telefono.","Di cosa si lamentava l'ospite?","Un fattorino è entrato di notte.","La cameriera ha il passepartout.","Il direttore era lontano.","La moglie della vittima ha scritto.","La vittima aveva chiesto riservatezza su qualcuno.","Un'auto era già stata qui.","Quando si è riaperta quella porta?","Il vecchio registro del parcheggio è nascosto.","Ivan ha ammesso una cosa.","Chi era nella stanza accanto, con un nome falso?"]);
});
})();
