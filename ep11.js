(function(){
/* episodio 11: L'app di incontri (Rimini). Soluzione: Tradisce. Il profilo è vecchio, ma è attivo: ha già visto Denise e sabato vede Sveva. */
const SC={
 bar:()=>LIB.obj("#f0d9a0","☕","Bar Riviera, apertura"),
 sea:()=>LIB.obj("#9cc7d6","🏖️","Bagno 62, ottobre"),
 giu:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Giulia, un anno insieme"),
 sh:()=>LIB.doc("Turni Bar Riviera","#b0764a",["Sabato 22 novembre","Apertura: Matteo, 6 - 14","Chiusura: Ale, 18 - 2","Firmato: il titolare"]),
 orig:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Originale: lei è stata tagliata"),
 match:()=>LIB.shot("Scintilla",["Sveva: Sabato 21:30 al Molo 22?","Tu: Ci sono. Camicia blu."])
};
const MAP=LIB.map({name:"Mappa stilizzata di Rimini e Riccione",
 water:[["M0 20Q200 70 400 150",60]],
 roads:["M20 110Q200 150 380 240","M60 130V240","M140 150V250","M230 180V255","M30 200H250"],
 extra:`<rect x="52" y="196" width="26" height="10" rx="2" fill="#7d756b"/>`,
 labels:[[70,104,"Marina Centro"],[30,150,"Centro storico"],[84,206,"Stazione"],[150,140,"Bellariva"],[240,170,"Miramare"],[310,232,"Riccione"],[250,60,"Adriatico"]],
 pins:[[40,176,"#33658a","Casa",9,4],[110,128,"#33658a","bar",9,-8],[90,112,"#d43d55","sab 21:30",-66,-8],[340,222,"#d43d55","gio 13",9,-8]]});

EPISODES[11]={...LIB.apps("msg tel web gal map cal note bank",[["sci","Scintilla","heart","#ff7b8a,#d43d55"],["turni","Turni","work","#4fb3a5,#22705f"]]),
 n:11,timer:1800,map:MAP,scenes:SC,owner:"Matteo Bianchi",time:"09:40",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Giulia ti ha portato il telefono del fidanzato Matteo, 31 anni, barista a Rimini. Lui è al bar per il turno del mattino e ha lasciato a casa il telefono personale.",
 quote:"«Ho visto una notifica di Scintilla, l'app di incontri. Lui giura che è roba vecchia, di prima che ci conoscessimo, e che non l'ha mai disinstallata per pigrizia. La data di iscrizione gli dà ragione, l'ho vista anch'io. Voglio solo esserne sicura.»",
 chats:[
  {id:"giulia",name:"Giulia",sub:"Fidanzata",m:[
   ["gio 13 · 19:00",1,"Stasera calcetto con i ragazzi, faccio tardi."],
   ["gio 13 · 19:02",0,"Ok amore. Vinci!"],
   ["mer 21:00",1,"Sabato chiudo io il bar, finisco alle 2. Non aspettarmi sveglia."],
   ["mer 21:03",0,"Ancora la chiusura? Uffa. Va bene."]]},
  {id:"ale",name:"Ale bar",sub:"",m:[
   ["mar 15:00",0,"Sabato la chiusura la faccio io, come da turni. Tu apri alle 6."],
   ["mar 15:05",1,"Perfetto. Se Giulia passa, io sabato sera sono lì con te, ok?"],
   ["mar 15:06",0,"Non mettermi in mezzo, Matte."]]},
  {id:"greta",name:"Greta",sub:"",m:[
   ["lun 07:50",0,"Buongiorno! Mi tieni da parte il solito? Cappuccino d'orzo e una pasta alla crema, passo alle 8:15."],
   ["lun 07:52",1,"Pronto sul bancone."],
   ["lun 08:30",0,"Sei il mio barista preferito 😘"]]},
  {id:"fede",name:"Fede",sub:"",m:[
   ["dom 18:00",0,"Matteo, è un anno e mezzo. Ridammi le chiavi del motorino o cambio la serratura e ti mando il conto."],
   ["dom 18:20",1,"Te le lascio al bar domani."],
   ["dom 18:21",0,"Finalmente."]]},
  {id:"mamma",name:"Mamma",sub:"",m:[
   ["mer 12:00",0,"Domenica venite a pranzo? A Giulia faccio i cappelletti."],
   ["mer 12:10",1,"Veniamo."]]}
 ],
 lists:{
  sci:[
   {id:"x0",g:"Il tuo profilo",title:"Matteo, 31",sub:"Rimini · Single",meta:"Attivo oggi",body:"Stato: single.\nBio: «Barista. Ti preparo il caffè migliore della Riviera.»\nIscritto dal marzo 2023.\nUltima foto caricata: 9 novembre 2025.\nAbbonamento Scintilla Più: attivo, rinnovo automatico."},
   {id:"x1",g:"Conversazioni di novembre",title:"Sveva, 28",sub:"Sabato 21:30 al Molo 22?",meta:"mer 22:40",body:"lun · lei: «Il caffè migliore della Riviera? Dimostralo.»\nmar · tu: «Sabato sera sei libera?»\nmer · lei: «Sabato 21:30 al Molo 22, a Marina Centro?»\nmer · tu: «Ci sono. Camicia blu, così mi riconosci.»"},
   {id:"x2",g:"Conversazioni di novembre",title:"Noemi, 30",sub:"Ciao!",meta:"8 nov",body:"lei: «Ciao! Bella la foto al mare.»\ntu: «Grazie! Di dove sei?»\nlei: «Cesena.»\nNessun altro messaggio."},
   {id:"x3",g:"Conversazioni di novembre",title:"Carla_xx",sub:"Guadagna da casa",meta:"5 nov",body:"lei: «Ciao bello, vuoi guadagnare 500 € al giorno da casa? Clicca qui.»\nProfilo rimosso da Scintilla per pubblicità."},
   {id:"x4",g:"Archiviate",title:"1 conversazione archiviata",sub:"Nascosta",meta:"Da aprire",body:"Una conversazione archiviata a mano il 14 novembre.\nPer aprirla bisogna sapere con chi ha già un appuntamento."},
   {id:"x5",g:"Archiviata · recuperata",u:"sv",title:"Denise, 33",sub:"È stato bello giovedì",meta:"14 nov",body:"10 nov · tu: «Giovedì ti porto a Riccione, conosco un posto.»\n10 nov · lei: «Giovedì 13 va bene. Passo io?»\n14 nov · lei: «È stato bello giovedì. Quando lo rifacciamo?»\n14 nov · tu: «Presto. Ma scrivimi solo qui.»"}],
  turni:[
   {id:"r1",g:"Questa settimana",title:"Giovedì 20",sub:"Apertura: Matteo · Chiusura: Luca"},
   {id:"r2",g:"Questa settimana",title:"Sabato 22",sub:"Apertura: Matteo, 6 - 14 · Chiusura: Ale, 18 - 2"},
   {id:"r3",g:"Settimana scorsa",title:"Giovedì 13",sub:"Apertura: Matteo, 6 - 14 · Chiusura: Ale"}],
  map:[
   {id:"g1",g:"Cronologia · giovedì 13",title:"Riccione, un ristorante sul porto",sub:"20:40 - 23:15",meta:"Permanenza",body:"Arrivo alle 20:40 in auto, due persone a bordo dal casello."},
   {id:"g2",g:"Cronologia · giovedì 13",title:"Campo da calcetto, Bellariva",sub:"Nessuna visita",body:"L'ultima visita al campo è del 2 ottobre."},
   {id:"g3",g:"Luoghi salvati",title:"Molo 22, Marina Centro",sub:"Salvato mercoledì",meta:"Salvato",body:"Locale sul porto canale."}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Scintilla Più, abbonamento",sub:"1 nov · − 12,99 €"},
   {id:"b2",g:"Movimenti",title:"Ristorante, Riccione",sub:"13 nov · − 78,00 €"},
   {id:"b3",g:"Movimenti",title:"Scintilla Più, abbonamento",sub:"1 ott · − 12,99 €"},
   {id:"b4",g:"Movimenti",title:"Scintilla Più, abbonamento",sub:"1 set · − 12,99 €"},
   {id:"b5",g:"Movimenti",title:"Camicia blu",sub:"18 nov · − 39,90 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sab 22 · S.",sub:"21:30",body:"A G.: chiusura."},
   {id:"c2",g:"Novembre",title:"Dom 23 · Pranzo dai miei",sub:"13:00",body:"Con Giulia."},
   {id:"c3",g:"Ricorrenze",title:"8 giugno · Anniversario con Giulia",sub:"Dal 2024",body:"Insieme da giugno 2024."}],
  web:[
   {id:"w1",g:"Cronologia",title:"molo 22 rimini prenotare",sub:"mer 22:45"},
   {id:"w2",g:"Cronologia",title:"nascondere notifiche app incontri",sub:"dom 23:10"},
   {id:"w3",g:"Cronologia",title:"ristorante riccione porto romantico",sub:"10 nov"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: quanto pago al mese per Scintilla, senza la virgola.\nLa nota qui sotto: l'ora dell'appuntamento di sabato."},
   {id:"n2",title:"Sab",lock:"note",body:"Dire a G. che faccio la chiusura.\nCamicia blu.\nSe con S. va male, c'è sempre D."}],
  tel:[
   {id:"t1",title:"Giulia",sub:"mer 20:55 · in uscita, 4 min"},
   {id:"t2",title:"Numero non salvato",sub:"gio 13 · 20:10 · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"lun 06:05",title:"Bar",sc:"bar"},
  {id:"p2",t:"ott",title:"Mare",sc:"sea"},
  {id:"p3",t:"8 giu",title:"Con Giulia",sc:"giu"},
  {id:"p4",t:"mar",title:"Turni",sc:"sh"},
  {id:"h1",t:"9 nov",title:"Foto profilo",sc:"orig",lock:"album"},
  {id:"h2",t:"mer 22:41",title:"Schermata",sc:"match",lock:"album"}],
 pins:{note:"2130",album:"1299"},
 qs:[
  {t:"2023",q:"Matteo dice che il profilo è vecchio. In quale anno si è iscritto a Scintilla?",a:["2023","marzo 2023","nel 2023"],show:"Nel 2023",hint:"Apri l'app e guarda il profilo.",news:"Marzo 2023. Fin qui dice la verità."},
  {t:"giugno 2024",q:"E da quando sta con Giulia? Scrivi mese e anno.",all:["giugno","2024"],show:"Da giugno 2024",hint:"C'è una ricorrenza in calendario.",news:"Il profilo è nato quindici mesi prima di lei. Chi si ferma qui gli dà ragione."},
  {t:"9 novembre",q:"Ma un profilo abbandonato non si aggiorna. In quale giorno ha caricato l'ultima foto? Giorno e mese.",all:["9","nov"],show:"Il 9 novembre di quest'anno",hint:"È scritto sul profilo, sotto la data di iscrizione.",news:"Undici giorni fa. Il profilo è vecchio, ma è vivo."},
  {t:"12,99",q:"Sta anche pagando. Quanto gli costa Scintilla ogni mese?",a:["12,99","12.99","12,99 euro","12,99€","12,99 €"],show:"12,99 €",hint:"L'addebito si ripete in Banca il primo del mese.",news:"Un abbonamento rinnovato ogni mese, anche dopo l'anniversario con Giulia."},
  {t:"single",q:"Quale stato sentimentale dichiara sul profilo?",any:["single","libero"],show:"Single",hint:"È la prima riga del profilo.",news:"Single, a Rimini, con il caffè migliore della Riviera."},
  {t:"Sveva",q:"Con chi ha un appuntamento questa settimana? Scrivi il nome.",any:["sveva"],show:"Con Sveva",hint:"Leggi le conversazioni di novembre.",news:"Sabato sera. Ora che sai con chi esce, hai aperto la conversazione che aveva archiviato a mano.",unlock:"sv"},
  {t:"Molo 22",q:"Dove si vedono? Scrivi il nome del locale.",any:["molo"],show:"Al Molo 22, a Marina Centro",hint:"Lo propone lei.",news:"Lui ha salvato il posto in Mappe e ha comprato una camicia blu."},
  {t:"le 2",q:"Che cosa ha raccontato a Giulia? Fino a che ora dice di lavorare sabato?",a:["2","le 2","alle 2","02:00","2:00","le due","alle due","due","2 di notte"],show:"Fino alle 2",hint:"Glielo ha scritto mercoledì sera.",news:"«Sabato chiudo io il bar.» Gliel'ha scritto mercoledì sera, mentre su Scintilla fissava l'ora con Sveva."},
  {t:"Ale",q:"Chi fa davvero la chiusura del bar sabato?",any:["ale"],show:"Ale",hint:"C'è un'app con i turni, e Ale lo conferma in chat.",news:"Matteo sabato apre alle 6 e stacca alle 14. Ale è la collega, e non vuole essere messa in mezzo."},
  {t:"13",q:"Nella conversazione archiviata c'è Denise. In quale giorno di novembre si sono visti?",all:["13"],show:"Giovedì 13",hint:"Leggi la conversazione recuperata.",news:"«È stato bello giovedì.» Non è più un'intenzione: è già successo."},
  {t:"Riccione",q:"Dove era Matteo quella sera, secondo Mappe? Scrivi la città.",any:["riccione"],show:"A Riccione",hint:"Cronologia di giovedì 13.",news:"Un ristorante sul porto, due persone in auto, 78 euro di conto."},
  {t:"calcetto",q:"E a Giulia, quella sera, che cosa aveva detto di fare?",any:["calcett","calcio","partita"],show:"Calcetto con i ragazzi",hint:"È nella chat con lei.",news:"L'ultima visita al campo è del 2 ottobre. «Vinci!», gli ha risposto lei."},
  {t:"cappuccino d'orzo",q:"Controlliamo le altre. Greta gli manda i baci: che cosa ordina sempre?",any:["orzo","cappuccin"],show:"Cappuccino d'orzo e una pasta alla crema",hint:"Lo scrive lei.",news:"Una cliente del mattino. Il bacio è per il cappuccino."},
  {t:"le chiavi",q:"E Fede, che gli scrive di domenica? Che cosa rivuole?",any:["chiav"],show:"Le chiavi del motorino",hint:"È il suo primo messaggio.",news:"Una ex di un anno e mezzo fa, che vuole solo le sue chiavi."},
  {t:"pubblicità",q:"Su Scintilla c'è anche Carla_xx. Che cos'era quel profilo?",any:["pubblicit","spam","truff","falso","finto","bot"],show:"Pubblicità: un profilo finto",hint:"Leggi che cosa scrive e che fine ha fatto.",news:"Rimosso dall'app. Noemi di Cesena, invece, è vera ma si è fermata a tre messaggi."},
  {t:"Giulia",q:"Nell'album privato c'è l'originale della foto profilo. Chi è stata tagliata via?",any:["giulia","fidanzata"],show:"Giulia",hint:"Il codice dell'album è il prezzo dell'abbonamento, senza la virgola.",news:"La foto caricata il 9 novembre è quella del loro anniversario, con lei tagliata fuori."},
  {t:"blu",q:"La nota protetta è il piano di sabato. Di che colore è la camicia?",any:["blu"],show:"Blu",hint:"Il codice è l'ora dell'appuntamento.",news:"«Se con S. va male, c'è sempre D.»"},
  {t:"Denise",q:"Sveva, Denise, Noemi, Carla, Ale, Greta, Fede. Con chi ha già tradito Giulia, incontrandola di nascosto?",any:["denise"],show:"Con Denise",hint:"Con una ha un appuntamento. Con un'altra è già uscito.",news:"Sveva è la prossima. Denise c'è già stata."},
  {t:"t",q:"Il verdetto per Giulia.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"La data di iscrizione non è tutta la storia.",news:""}],
 win:{title:"Matteo tradisce Giulia. Il profilo è vecchio, lui no.",
  steps:["Si è iscritto a Scintilla nel 2023, prima di conoscere Giulia: su questo non mente.","Ma paga l'abbonamento ogni mese, si dichiara single e il 9 novembre ha caricato una foto nuova, tagliando via lei.","Giovedì 13 ha portato Denise a cena a Riccione, dicendo a Giulia che giocava a calcetto.","Sabato alle 21:30 vede Sveva al Molo 22. La chiusura del bar la fa Ale.","Greta è una cliente, Fede una ex che rivuole le chiavi, Carla un profilo finto."],
  end:"Giulia guarda la foto originale, quella con lei dentro. «L'anniversario», dice. «Ha usato la foto dell'anniversario.» Poi sorride, per niente allegra: «Sabato alle 21:30 al Molo 22 ci vado io. Con la camicia blu.»"}
};
LIB.tune(11,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.turni.find(x=>x.id==="r2").lock="tur";
 e.pins={album:"1299",tur:"0614",note:"2418"};
 e.locks={album:{hint:"Quanto pago al mese per quell'app, senza la virgola."},tur:{name:"Turno protetto",hint:"Il mio turno del mattino: quando comincio e quando finisco."},note:{hint:"La fine dell'anno in cui ci siamo messi insieme, poi l'ora in cui attacca Ale."}};
 e.spots=[
  {id:"s1",x:90,y:112,label:"Molo 22",title:"Molo 22",sub:"Marina Centro · ★ 4,4",body:"Recensione: «Cocktail sul porto canale, tavolini a due. Perfetto per un primo appuntamento.»"},
  {id:"s2",x:340,y:222,label:"Riccione",title:"Ristorante sul porto di Riccione",sub:"★ 4,5",body:"Giovedì 13 un tavolo per due prenotato a nome Bianchi."},
  {id:"s3",x:110,y:128,label:"Il bar",title:"Il bar dove lavora Matteo",sub:"",body:"Turni di apertura e chiusura appesi accanto alla cassa."}];
 LIB.hints(e,["Il profilo ha una data di nascita.","Da quanto stanno insieme?","Un profilo abbandonato non cambia foto.","L'abbonamento costa.","Che cosa dichiara?","Un appuntamento questa settimana.","Un locale sul porto.","Che cosa ha detto a Giulia?","I turni del bar sono pubblici, ma uno è chiuso.","Una conversazione archiviata.","Il telefono si ricorda dov'era quella sera.","Che cosa aveva raccontato a Giulia?","Una cliente affettuosa.","Un amico rivuole qualcosa.","Un profilo strano.","La foto originale è nascosta.","Il piano di sabato è chiuso.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
