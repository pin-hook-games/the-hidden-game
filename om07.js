(function(){
/* Omicidi 7: Vendemmia (Verona). Soluzione: l'enologo Marco. Imbottigliava vino sfuso con le etichette della cantina e Guido aveva il referto del laboratorio. */
const SC={
 vine:()=>LIB.obj("#cfe3c9","🍇","Ultimo giorno di vendemmia"),
 ter:()=>LIB.two("#8fb3c9","#7a3b5a","#55606b","Con Teresa, trent'anni di cantina"),
 fest:()=>LIB.group(5,"Festa del paese · domenica","#b0764a"),
 lab:()=>LIB.doc("Enolab · referto","#33658a",["Lotto 24B","Profilo non compatibile","con uve della Valpolicella","Ricevuto giovedì ore 9:10"]),
 truck:()=>LIB.doc("Telecamera cortile","#231a1e",["Notte del 10 novembre, ore 02:15","Autobotte «Trasporti Salento»","12.000 litri","Apre il cancello: badge M."]),
 bol:()=>LIB.doc("Bolla di trasporto","#55606b",["Vino rosso sfuso","2 consegne da 12.000 L","3 e 10 novembre","Destinatario: M. Dal Bosco"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Verona e della Valpolicella",
 water:[["M120 260Q150 200 220 190Q300 180 330 260",12]],
 parks:[`<ellipse cx="120" cy="60" rx="110" ry="46" fill="#d7e2c9"/>`],
 roads:["M60 110H360","M110 60V200","M220 80V190","M300 110V240","M40 160H200"],
 labels:[[90,40,"Valpolicella"],[60,104,"Negrar"],[226,74,"Fumane"],[200,236,"Verona"],[306,104,"Parona"],[30,154,"Sant'Ambrogio"]],
 pins:[[110,90,"#d43d55","cantina Zanella",9,-8],[150,140,"#33658a","casa",9,4],[130,120,"#56666e","Pro Loco",9,18]]});

LIB.add(27,["Vendemmia","Teresa vuole sapere chi ha ucciso il marito Guido","Verona"],{
 map:MAP,scenes:SC,owner:"Guido Zanella",time:"07:50",date:"sab 15 nov",homeDate:"sabato 15 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["badge","Cantina","work","#7a3b5a,#3d1a2b"]],
 late:"I carabinieri sono tornati per il telefono. Teresa non ha potuto trattenerlo oltre.",
 brief:"Teresa ti ha portato il telefono del marito Guido Zanella, 58 anni, titolare di una cantina in Valpolicella. Venerdì mattina il cantiniere lo ha trovato in fondo a una vasca vuota. Per i carabinieri può essere scivolato. Il telefono era nel suo ufficio.",
 quote:"«Guido in cantina ci è nato. Giovedì sera è uscito dicendo «devo dire una cosa a una persona». Domenica alla festa aveva litigato con suo fratello Ettore davanti a tutto il paese, per la solita storia dell'eredità. Tutti pensano a Ettore. Io voglio esserne sicura.»",
 chats:[
  {id:"teresa",name:"Teresa",sub:"Moglie",m:[
   ["gio 20:40",1,"Vocale (0:08): «Teresa, stasera glielo dico. Ha famiglia anche lui, magari capisce. Non aspettarmi per cena.»"],
   ["gio 20:42",0,"A chi? Guido?"],
   ["gio 23:30",0,"Guido rispondi."]]},
  {id:"ettore",name:"Ettore",sub:"Fratello",m:[
   ["dom 22:10",0,"Mi hai umiliato davanti a tutti. La cantina era anche di papà."],
   ["lun 08:00",1,"Hai venduto la tua parte nel 2009, Ettore. Ma hai ragione sul tono. Vieni a pranzo domenica."],
   ["lun 08:30",0,"Vengo. Giovedì sera ho la riunione della Pro Loco fino a tardi, ci sentiamo venerdì."]]},
  {id:"marco",name:"Marco enologo",sub:"",m:[
   ["mer 17:00",0,"Guido il 24B è il nostro Ripasso migliore da anni, fidati."],
   ["",2,"2 messaggi eliminati giovedì."],
   ["gio 09:30",1,"Marco, ho il referto del 24B. Stasera alle 9 in cantina. Da soli.","lot"],
   ["gio 09:41",0,"Non fare stupidaggini. Con quel vino ti ho salvato l'annata dopo la grandine. Nessuno se ne accorge.","lot"]]},
  {id:"dragan",name:"Dragan cantina",sub:"",m:[
   ["gio 18:25",0,"Capo ho finito i travasi, stacco alle 18:30. La vasca 6 è vuota e aperta per il lavaggio di domani, attento alla passerella."],
   ["gio 18:26",1,"Grazie Dragan. A domani."],
   ["ven 06:40",0,"Capo la luce della 6 è accesa e il suo telefono suona in ufficio. Dov'è?"]]},
  {id:"hoff",name:"Herr Hoffmann",sub:"",m:[
   ["mar 10:00",0,"Signor Zanella, due clienti dicono che il Ripasso 24B non è come gli altri anni. Sono rientrato a Monaco, mi mandi le analisi o sospendo l'ordine."],
   ["mar 10:30",1,"Ha ragione a chiedere. Le faccio fare da un laboratorio esterno, a mie spese."]]},
  {id:"nadia",name:"Nadia",sub:"",m:[
   ["ott",0,"Signor Guido volevo dirle che a Trento mi trovo bene. Grazie per la lettera di referenze, anche se mi ha licenziata lei."],
   ["ott",1,"Te la meritavi, la lettera. Il licenziamento un po' meno: è stato Marco a insistere."]]},
  {id:"renzo",name:"Renzo",sub:"",m:[
   ["mer 12:00",0,"Guido per i pali sul confine ne parliamo quando torno. Sono a caccia in Slovenia fino a domenica."],
   ["mer 12:10",1,"Va bene. Buona caccia."]]}
 ],
 lists:{
  badge:[
   {id:"x1",g:"Accessi · giovedì",title:"Dragan · uscita",sub:"18:30"},
   {id:"x2",g:"Accessi · giovedì",title:"Marco Dal Bosco · ingresso",sub:"21:02"},
   {id:"x3",g:"Accessi · giovedì",title:"Guido Zanella · ingresso",sub:"21:10"},
   {id:"x4",g:"Accessi · giovedì",title:"Marco Dal Bosco · uscita",sub:"21:55"},
   {id:"x5",g:"Accessi · giovedì",title:"Guido Zanella · uscita",sub:"Nessuna uscita registrata"},
   {id:"x6",g:"Accessi notturni · novembre",title:"Cancello carraio",sub:"3 e 10 novembre, ore 02:15",meta:"Badge di Marco",body:"Due aperture notturne del cancello carraio, entrambe con il badge di Marco Dal Bosco.\nNessuna consegna in calendario in quelle date."}],
  mail:[
   {id:"m1",title:"Enolab",sub:"Referto analisi, lotto 24B",meta:"giovedì 9:10",body:"Il campione del lotto 24B ha un profilo non compatibile con uve della Valpolicella.\nIl vino proviene con ogni probabilità da un'altra zona."},
   {id:"m2",title:"Pro Loco",sub:"Verbale della riunione",meta:"venerdì",body:"Riunione di giovedì dalle 20:30 alle 23:15.\nPresenti: 14 soci, tra cui Zanella Ettore, che ha tenuto la cassa fino alla chiusura."},
   {id:"m3",title:"Consorzio",sub:"Promemoria",meta:"ottobre",body:"Chi imbottiglia come denominazione vino di altra provenienza perde il marchio per l'intera azienda."}],
  map:[
   {id:"g1",g:"Giovedì",title:"Casa",sub:"fino alle 21:00",meta:"Permanenza",body:"A casa fino alle 21:00."},
   {id:"g2",g:"Giovedì",title:"Cantina",sub:"dalle 21:10",meta:"Ultima posizione",body:"Il telefono è rimasto in ufficio dalle 21:12."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Gio · M.",sub:"21:00",body:"Cantina. Portare il referto."},
   {id:"c2",g:"Questa settimana",title:"Ven · Lavaggio vasca 6",sub:"07:00",body:"Dragan."},
   {id:"c3",g:"Questa settimana",title:"Dom · Ettore a pranzo",sub:"13:00",body:"Fare pace."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui si apre il cancello di notte, quattro cifre.\nNota sotto: l'ora in cui Marco è entrato giovedì, quattro cifre."},
   {id:"n2",title:"Che cosa faccio",lock:"note",body:"Se denuncio, perdo il marchio e trent'anni di lavoro.\nSe taccio, sono complice.\nGli do una possibilità: ritira lui le bottiglie del 24B e si dimette. Altrimenti lunedì vado al consorzio."}],
  tel:[
   {id:"t1",title:"Enolab",sub:"gio 09:15 · in uscita, 7 min"},
   {id:"t2",title:"Marco enologo",sub:"gio 09:45 · in entrata, 11 min"},
   {id:"t3",title:"Teresa",sub:"gio 23:28 · persa"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Vendemmia",sc:"vine"},
  {id:"p2",t:"set",title:"Con Teresa",sc:"ter"},
  {id:"p3",t:"dom",title:"La festa",sc:"fest"},
  {id:"p4",t:"gio 09:12",title:"Referto",sc:"lab"},
  {id:"h1",t:"gio 14:00",title:"Dalla telecamera",sc:"truck",lock:"album"},
  {id:"h2",t:"gio 14:20",title:"Nel suo cassetto",sc:"bol",lock:"album"}],
 pins:{note:"2102",album:"0215"},
 events:[{id:"a",q:3,kind:"sms",from:"Ettore",text:"Teresa, so che cosa dice il paese. Giovedì ero alla Pro Loco fino alle undici e un quarto, con la cassa in mano. Chiedi a chi vuoi."},
         {id:"b",q:8,kind:"call",from:"Marco enologo",lines:["«Teresa, sono Marco. Che disgrazia.»","«Senti, nel telefono di Guido ci sono analisi di lavoro sbagliate, roba che può danneggiare la cantina. Dallo a me, me ne occupo io.»","«Teresa?»"]}],
 qs:[
  {t:"21:10",q:"La cantina registra gli ingressi con il badge. A che ora è entrato Guido giovedì sera?",all:["2110"],show:"Alle 21:10",hint:"Apri l'app Cantina.",news:"E non risulta nessuna uscita. Da quella sera Guido non ha più lasciato la cantina."},
  {t:"Marco",q:"Chi era già dentro quando è arrivato?",any:["marco","dalbosco","enolog"],show:"Marco Dal Bosco, l'enologo",hint:"Guarda chi è entrato otto minuti prima.",news:"Entrato alle 21:02. Sono rimasti soli."},
  {t:"21:55",q:"A che ora è uscito Marco?",all:["2155"],show:"Alle 21:55",hint:"Stessa lista.",news:"Quarantacinque minuti. Poi più nessuno fino al mattino, quando Dragan ha trovato la luce accesa."},
  {t:"18:30",q:"Il cantiniere Dragan lo ha trovato. A che ora era uscito giovedì?",all:["1830"],show:"Alle 18:30",hint:"Badge e chat.",news:"Due ore e mezza prima. È lui ad aver avvisato che la vasca 6 era vuota e aperta."},
  {t:"Pro Loco",q:"Il fratello Ettore aveva litigato con lui. Dov'era giovedì dalle 20:30?",any:["proloco","riunione"],show:"Alla riunione della Pro Loco",hint:"C'è un verbale nella Mail.",news:"Fino alle 23:15, con la cassa in mano e tredici testimoni. E Guido lo aveva invitato a pranzo per fare pace."},
  {t:"Monaco",q:"L'importatore Hoffmann minacciava di sospendere l'ordine. In quale città era rientrato?",any:["monaco"],show:"A Monaco",hint:"Messaggio di martedì.",news:"È stato lui a far nascere il dubbio. Nadia lavora a Trento, Renzo è a caccia in Slovenia."},
  {t:"24B",q:"Di quale lotto si lamentavano i clienti tedeschi?",a:["24b","24 b","lotto 24b"],show:"Del lotto 24B",hint:"Lo scrive Hoffmann.",news:"Guido lo ha fatto analizzare a sue spese. Ora che sai che cosa cercava, hai recuperato i due messaggi eliminati nella chat con Marco.",unlock:"lot"},
  {t:"9:10",q:"A che ora è arrivato il referto del laboratorio, giovedì?",all:["910"],show:"Alle 9:10",hint:"Mail di Enolab.",news:"«Profilo non compatibile con uve della Valpolicella.» Venti minuti dopo Guido ha convocato Marco."},
  {t:"02:15",q:"Di notte qualcuno apriva il cancello carraio. A che ora?",a:["02:15","2:15","alle 2:15","alle 02:15","02.15","2.15","0215","le 2 e un quarto","le due e un quarto"],show:"Alle 02:15",hint:"In fondo alla lista degli accessi.",news:"Il 3 e il 10 novembre, con il badge di Marco. Nessuna consegna in calendario."},
  {t:"24000",q:"Nell'album privato c'è la bolla di trasporto. Quanti litri di vino sfuso sono arrivati in tutto?",a:["24000","24.000","24000 litri","24.000 litri","24mila"],show:"24.000 litri",hint:"Il codice dell'album è l'ora delle aperture notturne. Poi somma le due consegne.",news:"Due autobotti dal Salento, intestate a Marco. Vino comprato sfuso e imbottigliato come Ripasso."},
  {t:"la grandine",q:"Nei messaggi recuperati Marco si giustifica: avrebbe «salvato l'annata» dopo che cosa?",any:["grandin"],show:"Dopo la grandine",hint:"Secondo messaggio recuperato.",news:"«Nessuno se ne accorge.» Se ne sono accorti a Monaco."},
  {t:"si dimette",q:"Nella nota protetta Guido scrive la possibilità che voleva dargli: ritirare le bottiglie e...",any:["dimett","dimission","andarsene","andar via"],show:"Dimettersi",hint:"Il codice è l'ora in cui Marco è entrato giovedì.",news:"«Altrimenti lunedì vado al consorzio.» Marco rischiava il lavoro e una denuncia per frode."},
  {t:"m",q:"Chi è stato?",o:[["e","Ettore, il fratello"],["m","Marco, l'enologo"],["d","Dragan, il cantiniere"],["h","Hoffmann, l'importatore"],["n","Nadia, l'ex dipendente"],["r","Renzo, il vicino"],["x","Nessuno: è scivolato"]],a:"m",show:"Marco, l'enologo",hint:"Chi era solo con lui dalle 21:10 alle 21:55?",news:""}],
 win:{title:"È stato Marco Dal Bosco, l'enologo.",
  steps:["Marco aveva fatto entrare di notte 24.000 litri di vino sfuso e li aveva imbottigliati come lotto 24B.","Giovedì alle 9:10 il laboratorio ha confermato a Guido che quel vino non era della Valpolicella.","Guido lo ha convocato in cantina alle 21. Voleva che ritirasse le bottiglie e si dimettesse.","I badge dicono che sono rimasti soli dalle 21:10 alle 21:55, accanto alla vasca 6 aperta.","Ettore era alla Pro Loco fino alle 23:15. Hoffmann era a Monaco."],
  end:"Teresa riascolta il vocale: «Ha famiglia anche lui, magari capisce.» Scuote la testa. «Gli voleva dare una possibilità.» Poi prende il referto. «Domenica Ettore viene a pranzo lo stesso. Glielo devo.»"}
});
LIB.tune(27,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="lab";
 e.pins={album:"0215",lab:"1423",note:"2409"};
 e.locks={album:{hint:"Quando si apre il cancello, di notte."},lab:{name:"Mail protetta",hint:"I soci presenti, poi l'ora in cui è finita la riunione."},note:{hint:"Le migliaia di litri arrivati di notte, poi l'ora del referto."}};
 e.spots=[
  {id:"s1",x:110,y:90,label:"Cantina Zanella",title:"Cantina Zanella",sub:"Valpolicella · ★ 4,6",body:"Il cancello carraio sul retro si apre solo con il badge. Di notte, nessun custode."},
  {id:"s2",x:150,y:140,label:"Casa",title:"Casa di Guido",sub:"",body:"A cinque minuti dalla cantina."},
  {id:"s3",x:130,y:120,label:"Pro Loco",title:"Sede della Pro Loco",sub:"",body:"Giovedì riunione dalle 20:30 alle 23:15. Quattordici soci, verbale firmato."}];
 LIB.hints(e,["La cantina registra chi entra.","Chi era già dentro?","…e quando è uscito.","Chi l'ha trovato, quando era uscito?","Il fratello ha un alibi con quattordici testimoni.","L'importatore era lontano.","I clienti tedeschi si lamentavano di qualcosa.","Il laboratorio ha risposto, ma la mail è chiusa.","Il cancello carraio si apre di notte.","La bolla di trasporto è nascosta.","Messaggi recuperati: una giustificazione.","Guido ha scritto cosa voleva fare.","Chi era in cantina con lui, e chi rischiava tutto?"]);
});
})();
