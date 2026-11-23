(function(){
/* episodio 7: Turno di notte (Padova). Soluzione: Nasconde altro. Marta frequenta un corso serale di sviluppo web per cambiare lavoro. */
const SC={
 ward:()=>LIB.group(4,"Reparto, turno del mattino","#cfe0ea"),
 rain:()=>LIB.car("#55606b","dott. Riva"),
 fl:()=>LIB.obj("#f3e3e8","💐","«Grazie per mia madre. Pietro»"),
 st:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Stefano, Prato della Valle"),
 code:()=>LIB.doc("Dispensa 9 · JavaScript","#2f6b4f",["function saluta(nome){","  return 'Ciao ' + nome;","}","// esercizio per giovedì"]),
 test:()=>LIB.doc("Accademia Digitale Brenta","#33658a",["Verifica intermedia","Zanon Marta","Voto: 28 / 30","prof. Belli"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Padova",
 water:[["M0 60Q120 40 200 70Q300 100 400 60",9],["M250 90Q270 160 240 260",7]],
 parks:[`<ellipse cx="170" cy="210" rx="34" ry="24" fill="#d7e2c9"/>`],
 roads:["M40 120H360","M100 30V240","M180 80V180","M300 100V240","M60 180H330","M180 20V60"],
 extra:`<rect x="168" y="22" width="26" height="10" rx="2" fill="#7d756b"/>`,
 labels:[[200,30,"Stazione"],[104,20,"Arcella"],[306,94,"Portello"],[190,112,"Centro"],[140,250,"Prato della Valle"],[306,170,"Ospedale"],[30,236,"Guizza"],[190,150,"Il Santo"]],
 pins:[[80,150,"#33658a","Casa",9,4],[322,188,"#33658a","reparto",-48,16],[330,108,"#d43d55","mar e gio sera",-80,24]]});

EPISODES[7]={...LIB.apps("msg tel mail web gal map cal note bank drive"),
 n:7,timer:1800,map:MAP,scenes:SC,owner:"Marta Zanon",time:"14:20",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 brief:"Stefano ti ha portato il telefono della moglie Marta, 33 anni, infermiera all'ospedale di Padova. Lei riposa prima del turno di notte e ha lasciato il telefono in carica in cucina.",
 quote:"«Dice che fa la notte il martedì e il giovedì. Ho chiamato in reparto: questo mese di notti ne ha pochissime. E due settimane fa l'ho vista scendere dalla macchina di un medico, alle dieci e mezza di sera. Rientra stanca, col computer nello zaino, e non mi guarda in faccia.»",
 chats:[
  {id:"stefano",name:"Stefano",sub:"Marito",m:[
   ["mar 18:10",1,"Stanotte sono di turno. Ci vediamo domattina."],
   ["mar 18:12",0,"Un'altra notte. Va bene."],
   ["gio 18:05",1,"Notte anche oggi. Non aspettarmi."],
   ["gio 18:30",0,"Ma non l'avevi fatta martedì?"]]},
  {id:"riva",name:"Dott. Riva",sub:"",m:[
   ["ven 7 · 08:10",1,"Grazie del passaggio di ieri sera, con quel diluvio sarei arrivata a nuoto."],
   ["ven 7 · 08:15",0,"Figurati, ero di strada. Salutami Stefano."],
   ["lun 11:00",0,"Mi cambi il letto 4 al 6? Grazie."]]},
  {id:"gianni",name:"Gianni caposala",sub:"",m:[
   ["lun 09:00",0,"Marta, ho visto la tua richiesta di tempo parziale da gennaio. Ne parliamo?"],
   ["lun 09:20",1,"Sì Gianni. Per ora resti tra noi, per favore."],
   ["lun 09:21",0,"Tranquilla. Mi spiace perderti a metà."]]},
  {id:"sofia",name:"Sofia",sub:"",m:[
   ["",2,"Conversazione archiviata."],
   ["mar 22:20",0,"Oggi il prof. Belli era una furia. Hai capito gli array?","cor"],
   ["mar 22:24",1,"A metà. Giovedì ripassiamo insieme prima di entrare?","cor"],
   ["gio 13 · 22:30",0,"Verifica di Belli: tu 28, io 22. Ti odio, con affetto.","cor"],
   ["gio 22:15",0,"L'esame finale è il 12 dicembre. Tre settimane!","cor"],
   ["gio 22:16",1,"Io il 12 ho chiesto ferie. In reparto non lo sa nessuno.","cor"]]},
  {id:"tom",name:"Tom",sub:"",m:[
   ["mer 23:10",0,"Ti ho corretto il codice del progetto finale: due errori soli. Sei la più brava del gruppo."],
   ["mer 23:15",1,"Grazie Tom! Giovedì ti porto il caffè."],
   ["mer 23:16",0,"Dovere di tutor. Ma il caffè lo accetto."]]},
  {id:"pietro",name:"Pietro",sub:"",m:[
   ["dom 17:00",0,"Gentile Marta, sono Pietro Carraro, il figlio della signora del letto 6. Le ho fatto recapitare dei fiori in reparto."],
   ["dom 17:30",1,"Non doveva. Sua madre è stata una paziente dolcissima."],
   ["dom 17:31",0,"L'ha assistita come una figlia. Grazie."]]},
  {id:"andrea",name:"Andrea",sub:"",m:[
   ["gio 12:05",0,"Buongiorno Marta, sono Andrea Meneghin. Le confermo lunedì 24 alle 9 da noi. Chieda di me in portineria."],
   ["gio 12:20",1,"Perfetto. A casa non ne ho ancora parlato, la prego di usare solo questo numero."],
   ["gio 12:21",0,"Certo. In bocca al lupo."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Accademia Digitale Brenta",sub:"Iscrizione confermata",meta:"8 settembre",body:"Corso serale «Sviluppo web», da settembre a dicembre.\nMartedì e giovedì dalle 19 alle 22, sede del Portello.\nIscrizione 150,00 €, poi 180,00 € al mese."},
   {id:"m2",title:"Softlab Veneto",sub:"Colloquio conoscitivo",meta:"19 novembre",body:"Gentile Marta,\nabbiamo ricevuto il suo progetto dal tutor del corso e vorremmo conoscerla.\nLunedì 24 novembre alle 9.\nAndrea Meneghin, selezione del personale"},
   {id:"m3",title:"Ufficio personale",sub:"Richiesta tempo parziale",meta:"14 novembre",body:"Abbiamo ricevuto la sua richiesta di tempo parziale dal 1° gennaio.\nSarà valutata dal coordinatore di reparto."}],
  map:[
   {id:"g1",g:"Cronologia · giovedì 20",title:"Ospedale",sub:"07:00 - 14:10",meta:"Permanenza",body:"Turno del mattino."},
   {id:"g2",g:"Cronologia · giovedì 20",title:"Portello, un edificio vicino all'università",sub:"18:52 - 22:08",meta:"Permanenza",body:"Arrivo alle 18:52, uscita alle 22:08.\nLo stesso indirizzo compare ogni martedì e giovedì da settembre."},
   {id:"g3",g:"Cronologia · giovedì 20",title:"Casa",sub:"22:35",meta:"Arrivo",body:"Rientro alle 22:35."},
   {id:"g4",g:"Cronologia · giovedì 6",title:"Portello",sub:"18:50 - 22:05",meta:"Permanenza",body:"Uscita alle 22:05 sotto la pioggia. Tragitto di ritorno in auto, 14 minuti."}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Accademia Digitale Brenta, rata",sub:"3 nov · − 180,00 €"},
   {id:"b2",g:"Movimenti",title:"Accademia Digitale Brenta, rata",sub:"1 ott · − 180,00 €"},
   {id:"b3",g:"Movimenti",title:"Accademia Digitale Brenta, rata",sub:"15 set · − 180,00 €"},
   {id:"b4",g:"Movimenti",title:"Accademia Digitale Brenta, iscrizione",sub:"8 set · − 150,00 €"},
   {id:"b5",g:"Movimenti",title:"Computer portatile, usato",sub:"10 set · − 320,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ogni mar e gio · A.D.B.",sub:"19:00 - 22:00",body:"A Stefano: notte."},
   {id:"c2",g:"Novembre",title:"Lun 24 · A. M.",sub:"09:00",body:"Portare il progetto stampato."},
   {id:"c3",g:"Dicembre",title:"Ven 12 · Esame",sub:"Ferie chieste",body:"Se va bene, dirglielo."}],
  web:[
   {id:"w1",g:"Cronologia",title:"cambiare lavoro a 33 anni da infermiera a programmatrice",sub:"mer 23:40"},
   {id:"w2",g:"Cronologia",title:"come dire al marito che lascio il posto fisso",sub:"gio 23:05"},
   {id:"w3",g:"Cronologia",title:"array javascript spiegati semplici",sub:"mar 22:50"}],
  note:[
   {id:"n1",title:"Promemoria",body:"Dispense 8 e 9 da ripassare.\nAlbum privato: il voto dell'ultima verifica, scritto due volte.\nLa nota qui sotto: il giorno dell'esame e il giorno del colloquio."},
   {id:"n2",title:"Per Stefano, dopo",lock:"note",body:"Stefano dice che lasciare il posto fisso è una follia.\nNon gli ho detto del corso perché avrebbe detto la stessa cosa.\nGlielo dico quando ho un contratto in mano, non prima."}],
  drive:[
   {id:"d1",title:"Piano turni di novembre",sub:"PDF del reparto",meta:"28 ottobre",body:"Zanon Marta.\nNotti: lunedì 3, mercoledì 12, venerdì 21.\nTutti gli altri giorni: mattino o pomeriggio.\nNessuna notte di martedì o di giovedì."},
   {id:"d2",title:"Progetto finale",sub:"Cartella",meta:"Corretto da Tom",body:"Un sito per prenotare le visite ai parenti in reparto.\nNote del tutor: «Due errori soli. Lo mando a un'azienda che conosco.»"}],
  tel:[
   {id:"t1",title:"Sofia",sub:"gio 18:40 · in uscita, 2 min"},
   {id:"t2",title:"Andrea",sub:"gio 12:00 · in entrata, 3 min"},
   {id:"t3",title:"Stefano",sub:"gio 21:15 · persa"}]
 },
 photos:[
  {id:"p1",t:"lun 13:50",title:"Colleghe",sc:"ward"},
  {id:"p2",t:"gio 6 · 22:07",title:"Passaggio",sc:"rain"},
  {id:"p3",t:"dom",title:"In reparto",sc:"fl"},
  {id:"p4",t:"ago",title:"Con Stefano",sc:"st"},
  {id:"h1",t:"mar 21:10",title:"Dispensa 9",sc:"code",lock:"album"},
  {id:"h2",t:"gio 13 nov",title:"Verifica",sc:"test",lock:"album"}],
 pins:{note:"1224",album:"2828"},
 qs:[
  {t:"3",q:"Stefano ha ragione sui turni? Quante notti ha Marta a novembre nel piano del reparto?",a:["3","tre","3 notti","tre notti"],show:"Tre",hint:"Il piano turni è un PDF nel Drive.",news:"Tre notti in tutto il mese, e nessuna di martedì o di giovedì. Le notti che racconta a casa non esistono."},
  {t:"Portello",q:"Dove va allora il martedì e il giovedì sera? Scrivi il quartiere.",any:["portello"],show:"Al Portello",hint:"Mappe conserva la cronologia di ieri.",news:"Un edificio vicino all'università, due sere a settimana, da settembre."},
  {t:"22:08",q:"A che ora è uscita da lì ieri sera?",all:["2208"],show:"Alle 22:08",hint:"È nella stessa riga della cronologia.",news:"Tre ore abbondanti, poi dritta a casa. Nessuna notte fuori."},
  {t:"Accademia Digitale Brenta",q:"Che cosa c'è in quell'edificio? Scrivi il nome.",any:["brenta"],show:"L'Accademia Digitale Brenta",hint:"C'è una mail di iscrizione, e una sigla nel calendario.",news:"Una scuola serale. Ora che sai dove va, hai riaperto la conversazione archiviata con Sofia.",unlock:"cor"},
  {t:"sviluppo web",q:"Che corso frequenta? Scrivi di che cosa.",any:["web","programm","svilupp","informatic"],show:"Sviluppo web",hint:"È nella mail di iscrizione.",news:"Un'infermiera che la sera impara a programmare. Ecco il computer nello zaino."},
  {t:"690",q:"Quanto ha speso finora per la scuola, iscrizione compresa?",a:["690","690,00","690 euro","690€"],show:"690 €",hint:"In Banca ci sono l'iscrizione e tre rate. Il computer non conta.",news:"Soldi suoi, da un conto che Stefano non guarda."},
  {t:"6",q:"E il medico? In quale giorno di novembre il dott. Riva l'ha riaccompagnata?",a:["6","il 6","giovedì 6","gio 6","6 novembre","giovedì 6 novembre","il 6 novembre"],show:"Giovedì 6",hint:"Lei lo ringrazia il giorno dopo.",news:"Una sola volta, all'uscita dal corso. Il dottore «era di strada» e manda i saluti a Stefano."},
  {t:"pioveva",q:"Perché quella sera ha accettato il passaggio? Che tempo faceva?",any:["piov","pioggia","diluvi","temporal","acqua"],show:"Diluviava",hint:"Lo dice lei nel messaggio, e Mappe lo conferma.",news:"Un passaggio sotto il diluvio. Stefano ha visto la scena e non il motivo. Primo nome da togliere."},
  {t:"12",q:"Sofia è una compagna di corso. In quale giorno di dicembre hanno l'esame finale?",all:["12"],show:"Venerdì 12 dicembre",hint:"È nella conversazione che hai appena riaperto.",news:"Marta ha chiesto ferie per quel giorno. In reparto non lo sa nessuno."},
  {t:"il codice",q:"Tom le scrive alle undici di sera che è «la più brava». Che cosa le ha corretto?",any:["codice","progetto"],show:"Il codice del progetto finale",hint:"Leggi il suo primo messaggio.",news:"Tom è il tutor del corso. È stato lui a mandare il progetto a un'azienda."},
  {t:"28",q:"Quanto ha preso nell'ultima verifica del prof. Belli? Scrivi il voto.",all:["28"],show:"28 su 30",hint:"Sofia lo scrive con una punta d'invidia.",news:"Ventotto su trenta, la migliore del gruppo."},
  {t:"JavaScript",q:"Nell'album privato ci sono le dispense fotografate. Quale linguaggio sta studiando?",any:["javascript"],show:"JavaScript",hint:"Il codice dell'album è il voto dell'ultima verifica, scritto due volte.",news:"Dispense fotografate di nascosto, da ripassare in pausa in reparto."},
  {t:"sua madre",q:"Pietro le ha mandato dei fiori. Chi ha assistito Marta, per meritarli?",any:["madre","mamma"],show:"La madre di Pietro",hint:"Lo scrive lui.",news:"Il figlio di una paziente. I fiori sono arrivati in reparto, davanti a tutti."},
  {t:"Softlab",q:"Andrea le chiede di usare «solo questo numero». Per quale azienda lavora?",any:["softlab"],show:"Softlab Veneto",hint:"Le ha scritto anche per posta elettronica.",news:"Andrea Meneghin seleziona il personale. Non è un appuntamento: è un colloquio di lavoro."},
  {t:"lunedì 24 alle 9",q:"Quando è il colloquio? Scrivi giorno del mese e ora.",all:["24","9"],show:"Lunedì 24 alle 9",hint:"È in chat, nella mail e in calendario.",news:"Tra tre giorni. Stefano non ne sa niente."},
  {t:"part-time",q:"Che cosa ha chiesto Marta al caposala Gianni, da gennaio?",any:["parttime","parziale","mezza","meta"],show:"Il tempo parziale",hint:"Gianni ne parla in chat e c'è una mail dell'ufficio personale.",news:"Si sta preparando l'uscita un passo alla volta. Gianni è il caposala, e gli dispiace perderla."},
  {t:"contratto",q:"Nella nota protetta dice quando lo dirà a Stefano. Quando avrà in mano un...",any:["contratto"],show:"Un contratto",hint:"Il codice è fatto di due giorni: l'esame e il colloquio.",news:"«Stefano dice che lasciare il posto fisso è una follia.» Ha mentito sui turni per non sentirselo ripetere."},
  {t:"nessuno",q:"Il dott. Riva, Gianni, Tom, il prof. Belli, Pietro, Andrea. Chi è l'amante di Marta? Se nessuno, scrivi NESSUNO.",any:["nessun"],show:"Nessuno",hint:"Un passaggio, un caposala, un tutor, un docente, un parente, un selezionatore.",news:"Sei uomini e nessun amante."},
  {t:"a",q:"Il verdetto per Stefano.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un altro, ma c'è una scelta di vita tenuta nascosta.",news:""}],
 win:{title:"Marta non tradisce Stefano. Sta cambiando mestiere.",
  steps:["Il piano del reparto dice tre notti a novembre, nessuna di martedì o giovedì.","Quelle sere Marta è al Portello, all'Accademia Digitale Brenta: corso serale di sviluppo web, dalle 19 alle 22.","Il dott. Riva l'ha riaccompagnata una volta sola, giovedì 6, sotto il diluvio.","Lunedì 24 ha un colloquio alla Softlab Veneto e ha chiesto il tempo parziale da gennaio.","Tom è il tutor, Sofia una compagna di corso, Pietro il figlio di una paziente."],
  end:"Stefano resta in silenzio. «Le ho detto che era una follia», ammette. «Una volta sola. Evidentemente è bastata.» Chiede se può tenere una copia del voto: ventotto su trenta."}
};
LIB.tune(7,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="sof";
 e.pins={album:"2828",sof:"0180",note:"0924"};
 e.locks={album:{hint:"Il voto dell'ultima verifica, due volte."},sof:{name:"Mail protetta",hint:"La rata del corso, con lo zero."},note:{hint:"Il numero della dispensa nascosta, con lo zero, poi il giorno del colloquio."}};
 e.spots=[
  {id:"s1",x:330,y:108,label:"Accademia Brenta",title:"Accademia Digitale Brenta",sub:"Portello · ★ 4,7",body:"Corsi serali il martedì e il giovedì, dalle 19 alle 22. Recensione: «Ho cambiato lavoro a 40 anni grazie a loro.»"},
  {id:"s2",x:322,y:188,label:"Ospedale",title:"Ospedale · reparto",sub:"",body:"Il piano turni di novembre è appeso in sala infermieri."},
  {id:"s3",x:80,y:150,label:"Casa",title:"Casa di Marta e Stefano",sub:"",body:"Sul tavolo della cucina, un portatile usato che prima non c'era."}];
 LIB.hints(e,["Il piano turni dice la verità.","Il telefono si ricorda dove va.","…e quando esce.","Che cosa c'è in quell'edificio?","Che cosa si studia lì?","La banca racconta le rate.","Il medico l'ha accompagnata una volta.","Quella sera il tempo era brutto.","Una compagna di corso ha un'idea.","Un compagno di corso le fa i complimenti.","Una verifica, un voto.","Le dispense sono nascoste.","Fiori di ringraziamento.","Un'azienda chiede un numero riservato, chiusa a chiave.","Un colloquio in agenda.","Una richiesta all'ufficio personale.","Una nota chiusa dice quando.","Ripassa chi sono tutti.","Il verdetto."]);
});
})();
