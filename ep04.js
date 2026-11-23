(function(){
/* ---------------- episodio 4: Trasferta a Milano (Milano e Bologna) ----------------
   Soluzione: Nasconde altro. Davide è stato a Milano tutti e tre i giorni. A Bologna c'era la sua auto,
   prestata all'amico Fabio Neri, che tradisce la moglie Claudia con Katia e ha prenotato a nome di Davide. */
const SC={
 stand:()=>LIB.stand("TECNOPACK · B14","17:42"),
 dinner:()=>LIB.group(6,"Cena clienti · mer 21:48"),
 selfie:()=>LIB.two("#cfd8df","#7a3b5a","#1f3a66","Stand B14, primo giorno"),
 pan:()=>LIB.gift("#c0392b","Per Ele, dalla stazione"),
 fab:()=>LIB.two("#b0764a","#a0522d","#55606b","mer 23:05 · «Grazie fratello»"),
 rho:()=>LIB.doc("Hotel Fiera Nord, Rho","#33658a",["Sala Davide · Tecnopack","Camera 318","Ospiti: 1","Notti: 18 e 19 novembre","Check-out: gio 20, 07:45"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Milano, con riquadro su Bologna",
 water:[["M70 226Q110 200 150 176",7],["M150 176V250",7]],
 parks:[`<ellipse cx="140" cy="108" rx="26" ry="16" fill="#d7e2c9"/>`],
 roads:["M150 60A70 70 0 1 1 149 60","M150 20A110 110 0 0 1 258 150","M150 130L20 40","M150 130H262","M150 130V30","M150 130L60 220"],
 extra:`<rect x="142" y="122" width="16" height="16" rx="3" fill="#b0764a"/><rect x="176" y="44" width="26" height="10" rx="2" fill="#7d756b"/><rect x="272" y="20" width="118" height="110" rx="8" fill="#f6f2ec" stroke="#b8ada0"/><path d="M286 78H376M330 40V118" stroke="#fff" stroke-width="5"/><text x="282" y="36" font-family="sans-serif" font-size="10" font-weight="700" fill="#231a1e">BOLOGNA</text><text x="290" y="120" font-family="sans-serif" font-size="9" fill="#6b5d62">Santo Stefano</text><rect x="272" y="150" width="118" height="46" rx="8" fill="#f6f2ec" stroke="#b8ada0"/><text x="282" y="168" font-family="sans-serif" font-size="10" font-weight="700" fill="#231a1e">PIACENZA</text><text x="282" y="184" font-family="sans-serif" font-size="9" fill="#6b5d62">casa e stazione</text>`,
 labels:[[160,126,"Duomo"],[206,52,"Centrale"],[108,104,"Sempione"],[96,212,"Navigli"],[14,34,"Rho Fiera"],[216,150,"Porta Venezia"]],
 pins:[[28,48,"#33658a","fiera, mar-gio",9,16],[52,70,"#33658a","hotel",9,4],[120,196,"#56666e","cena mer",9,4],[344,84,"#d43d55","auto, mer notte",-58,-10]]});

EPISODES[4]={
 n:4,timer:1800,map:MAP,scenes:SC,owner:"Davide Sala",time:"06:30",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 brief:"Irene ti ha portato il telefono del marito Davide, 41 anni, commerciale di un'azienda di imballaggi di Piacenza. Lui è rientrato ieri sera da tre giorni di fiera a Milano e dorme ancora: hai tempo finché non si sveglia.",
 quote:"«Doveva essere a Milano. Ma il localizzatore della nostra macchina dice Bologna, due notti. E nella sua posta c'è la conferma di un albergo di Bologna: camera doppia, a suo nome. Gli ho chiesto dov'era l'auto e mi ha risposto che era in stazione. Voglio il nome di lei.»",
 apps:[["msg","Messaggi","forum","linear-gradient(160deg,#58d5c9,#1f8fd1)"],["tel","Telefono","call","linear-gradient(160deg,#6fd47a,#1f9a4d)"],["mail","Mail","mail","linear-gradient(160deg,#5aa9ff,#2563d8)"],["web","Browser","public","linear-gradient(160deg,#8fd3ff,#3b82c4)"],
  ["gal","Galleria","photo_library","linear-gradient(160deg,#ffb86b,#e0527a)"],["map","Mappe","map","linear-gradient(160deg,#7fd08a,#2f8f9d)"],["cal","Calendario","calendar_month","linear-gradient(160deg,#ff7b6b,#d93a3a)"],["note","Note","sticky_note_2","linear-gradient(160deg,#ffd76a,#f0a020)"],
  ["auto","TrovaAuto","car","linear-gradient(160deg,#7c8aa0,#39445a)"],["treni","Treni","train","linear-gradient(160deg,#e2574c,#a02822)"],["bank","Banca","account_balance","linear-gradient(160deg,#4a5d7a,#1f2c44)"],["drive","Drive","folder","linear-gradient(160deg,#f6c453,#d98a1f)"]],
 names:{msg:"Messaggi",tel:"Telefono",mail:"Mail",web:"Browser",gal:"Galleria",map:"Mappe",cal:"Calendario",note:"Note",auto:"TrovaAuto",treni:"Treni",bank:"Banca",drive:"Drive"},
 chats:[
  {id:"irene",name:"Irene",sub:"Moglie",m:[
   ["mar 08:10",1,"Arrivato. La fiera è enorme."],
   ["mer 22:15",0,"Tutto bene? Dove sei?"],
   ["mer 23:12",1,"In hotel a Rho, distrutto. Buonanotte."],
   ["gio 07:30",0,"La macchina dov'è? In garage non c'è."],
   ["gio 07:41",1,"In stazione, al parcheggio. Perché?"],
   ["gio 07:42",0,"Niente."]]},
  {id:"fabio",name:"Fabio",sub:"",m:[
   ["lun 18:20",0,"Mi presti la macchina da martedì? La mia è dal carrozziere."],
   ["lun 18:31",1,"Va bene. Chiavi nella cassetta della posta."],
   ["",2,"4 messaggi eliminati."],
   ["lun 21:40",0,"Ho prenotato a Bologna a nome tuo, la conferma arriva a te: Claudia mi controlla la posta. Coprimi anche stavolta.","fab"],
   ["lun 21:44",1,"Fabio, è la terza. A giugno e a settembre mi ero già giurato basta.","fab"],
   ["lun 21:45",0,"L'ultima, giuro. Katia ci tiene: è il suo compleanno.","fab"],
   ["mer 23:05",0,"[foto] Katia dice grazie per la macchina.","fab"],
   ["gio 19:02",0,"Macchina di nuovo nel tuo garage, pieno fatto. Grazie fratello."]]},
  {id:"claudia",name:"Claudia",sub:"",m:[
   ["gio 08:10",0,"Davide scusa il disturbo. Fabio è con te in fiera, vero? Ha il telefono spento da ieri."],
   ["gio 08:14",1,"Sì, è qui allo stand, sta parlando con un cliente. Ti faccio richiamare."],
   ["gio 08:15",0,"Grazie, meno male. Mi ero preoccupata."]]},
  {id:"marta",name:"Marta",sub:"",m:[
   ["mar 18:35",0,"Stand B14 a posto. Io stasera torno a Monza, a domani alle 8."],
   ["mer 17:45",0,"Bella la foto! Mandala anche al capo."],
   ["mer 23:30",0,"Serata lunga ma l'ingegnere firma. Sei stato bravo. Notte!"],
   ["gio 12:10",0,"Smontiamo alle 16?"],
   ["gio 12:11",1,"Sì. Ho il treno alle 18:20."]]},
  {id:"ferri",name:"Ing. Ferri",sub:"",m:[
   ["mar 15:20",0,"Buongiorno Davide, confermo la cena di domani. Saremo in sei: porto anche l'ufficio acquisti."],
   ["mar 15:25",1,"Perfetto ingegnere. Ho prenotato per le 20:30 sui Navigli."],
   ["gio 09:05",0,"Grazie della serata. Lunedì le mando l'ordine. Giulia Ferri"]]},
  {id:"sabrina",name:"Sabrina",sub:"",m:[
   ["gio 11:20",0,"Buongiorno Sig. Sala, sono Sabrina dell'Hotel Portico Rosso. Nella sua camera è rimasto un caricabatterie."],
   ["gio 11:32",1,"Grazie. Passerà a ritirarlo il sig. Neri."],
   ["gio 11:33",0,"Benissimo. Arrivederci e grazie di averci scelto."]]},
  {id:"noemi",name:"Noemi",sub:"",m:[
   ["lun 16:00",0,"Buongiorno, sono Noemi dell'agenzia Vetrina. Domani alle 8:30 sono allo stand B14."],
   ["lun 16:05",1,"Perfetto, chieda di Marta."],
   ["gio 16:20",0,"Grazie, è stato un piacere lavorare con voi. La fattura arriva dall'agenzia."]]},
  {id:"ele",name:"Ele ❤",sub:"",m:[
   ["mer 19:40",0,"Papà mi porti il panettone piccolo della stazione?"],
   ["mer 19:42",1,"Promesso."],
   ["mer 19:43",0,"E sabato vieni alla mia partita?"],
   ["mer 19:44",1,"Certo, capitano."]]}
 ],
 lists:{
  auto:[
   {id:"x0",g:"Adesso",title:"Garage di casa, Piacenza",sub:"Ferma da gio 19:00",meta:"Posizione attuale",body:"Il veicolo è nel garage di casa da giovedì alle 19:00."},
   {id:"x1",g:"Storico",title:"Partenza da Piacenza",sub:"mar 18 · 09:40",meta:"Movimento",body:"Il veicolo esce dal garage di casa alle 09:40 di martedì 18."},
   {id:"x2",g:"Storico",title:"Bologna, zona Via Mazzini",sub:"mar 18 · 11:15",meta:"Sosta lunga",body:"Fermo in strada da martedì 11:15 a mercoledì 21:10."},
   {id:"x3",g:"Storico",title:"Bologna, Hotel Portico Rosso",sub:"mer 19 · 21:25",meta:"Parcheggio",body:"Fermo nel parcheggio dell'hotel, zona Santo Stefano, da mercoledì 21:25 a giovedì 17:10."},
   {id:"x4",g:"Storico",title:"Rientro a Piacenza",sub:"gio 20 · 19:00",meta:"Movimento",body:"Partenza da Bologna alle 17:10, arrivo nel garage alle 19:00."}],
  treni:[
   {id:"r1",g:"I tuoi biglietti",title:"Piacenza → Milano Centrale",sub:"mar 18 · 07:12 - 08:05",meta:"Usato",body:"Regionale veloce, 1 adulto.\nPartenza 07:12, arrivo 08:05.\nBiglietto convalidato a bordo."},
   {id:"r2",g:"I tuoi biglietti",title:"Milano Centrale → Piacenza",sub:"gio 20 · 18:20 - 19:13",meta:"Usato",body:"Regionale veloce, 1 adulto.\nPartenza 18:20, arrivo 19:13.\nBiglietto convalidato a bordo."},
   {id:"r3",g:"Storico",title:"Nessun altro viaggio a novembre",sub:""}],
  mail:[
   {id:"m1",title:"Hotel Portico Rosso",sub:"Conferma di prenotazione",meta:"17 novembre",body:"Camera doppia, 2 ospiti, notte del 19 novembre.\nIntestata a: Sala Davide.\nPagata con carta che termina con 7731.\nCheck-in effettuato mercoledì 19 alle 21:30.\nBologna, zona Santo Stefano."},
   {id:"m2",title:"Hotel Fiera Nord",sub:"Conferma di prenotazione",meta:"3 novembre",body:"Prenotazione aziendale Tecnopack per Sala Davide.\nNotti del 18 e del 19 novembre, Rho.\nPagamento con carta aziendale."},
   {id:"m3",title:"Agenzia Vetrina",sub:"Fattura hostess",meta:"20 novembre",body:"Servizio hostess per fiera, sig.na Noemi.\n140,00 € al giorno per 3 giorni, orario 8:30 - 18.\nPagamento a 30 giorni."},
   {id:"m4",title:"Fiera dell'Imballaggio",sub:"Pass espositore",meta:"10 novembre",body:"Tecnopack, padiglione 7, stand B14.\nEspositori registrati: Sala Davide, Brambilla Marta.\nIngressi registrati: martedì, mercoledì e giovedì."},
   {id:"m5",title:"Al Naviglio Vecchio",sub:"Prenotazione confermata",meta:"18 novembre",body:"Mercoledì 19 alle 20:30, tavolo per 6.\nA nome Tecnopack."}],
  map:[
   {id:"g1",g:"Cronologia · martedì 18",title:"Milano Centrale",sub:"08:05",meta:"Arrivo",body:"Arrivo in stazione alle 08:05."},
   {id:"g2",g:"Cronologia · martedì 18",title:"Rho Fiera",sub:"08:50 - 18:30",meta:"Permanenza",body:"In fiera tutto il giorno."},
   {id:"g3",g:"Cronologia · mercoledì 19",title:"Rho Fiera",sub:"08:30 - 18:40",meta:"Permanenza",body:"In fiera tutto il giorno."},
   {id:"g4",g:"Cronologia · mercoledì 19",title:"Navigli, un ristorante",sub:"20:25 - 22:40",meta:"Permanenza",body:"Arrivo alle 20:25, uscita alle 22:40."},
   {id:"g5",g:"Cronologia · mercoledì 19",title:"Hotel Fiera Nord, Rho",sub:"23:10",meta:"Arrivo",body:"Arrivo in hotel alle 23:10. Nessuno spostamento fino alle 07:50."},
   {id:"g6",g:"Cronologia · giovedì 20",title:"Rho Fiera",sub:"08:20 - 16:30",meta:"Permanenza",body:"In fiera fino allo smontaggio."},
   {id:"g7",g:"Luoghi visitati nel 2025",title:"Bologna",sub:"Nessuna visita",body:"Questo telefono non è mai stato a Bologna quest'anno."}],
  bank:[
   {id:"b0",g:"Carte",title:"Carta personale",sub:"Termina con 2046"},
   {id:"b1",g:"Novembre",title:"Neri Fabio, benzina e autostrada",sub:"20 nov · + 60,00 €"},
   {id:"b2",g:"Novembre",title:"Bar della stazione, Milano Centrale",sub:"20 nov · − 6,50 €"},
   {id:"b3",g:"Novembre",title:"Biglietti del treno",sub:"17 nov · − 19,60 €"},
   {id:"b4",g:"Novembre",title:"Scuola calcio, quota di Elena",sub:"10 nov · − 45,00 €"},
   {id:"b5",g:"Novembre",title:"Tecnopack, stipendio",sub:"10 nov · + 2.150,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Mar 18 - gio 20 · Fiera, Milano",sub:"Tutto il giorno",body:"Stand B14 con Marta. Treno delle 07:12."},
   {id:"c2",g:"Novembre",title:"Mer 19 · Cena clienti",sub:"20:30",body:"Ing. Ferri e ufficio acquisti. Tavolo per 6."},
   {id:"c3",g:"Novembre",title:"Sab 22 · Partita di Ele",sub:"15:00",body:"Under 13. Portare le arance."},
   {id:"c4",g:"Novembre",title:"Dom 23 · Parlare con F.",sub:"",body:"Basta."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come dire di no a un amico",sub:"lun 22:10"},
   {id:"w2",g:"Cronologia",title:"mentire per un amico è complicità",sub:"gio 08:40"},
   {id:"w3",g:"Cronologia",title:"regalo bambina 12 anni calcio",sub:"mer 13:05"},
   {id:"w4",g:"Cronologia",title:"ristorante navigli gruppi",sub:"lun 11:20"},
   {id:"w5",g:"Cronologia",title:"treni piacenza milano centrale",sub:"10 nov"}],
  note:[
   {id:"n1",title:"Fiera",body:"Stand B14, padiglione 7.\nAlbum privato: il numero dello stand, scritto due volte.\nLa nota qui sotto: l'ora del treno dell'andata."},
   {id:"n2",title:"Cose che non posso dire a Irene",lock:"note",body:"1. Che la macchina ce l'aveva Fabio.\n2. Che a Bologna con lui c'era Katia.\n3. Che ho detto a Claudia che era con me.\nDomenica gli parlo. Non lo copro più."}],
  drive:[
   {id:"d1",title:"Nota spese fiera",sub:"Foglio",meta:"20 novembre",body:"Treno andata e ritorno.\nHotel a Rho, due notti.\nCena clienti, 6 coperti.\nNessuna spesa di carburante o autostrada."},
   {id:"d2",title:"Turni stand B14",sub:"PDF",meta:"12 novembre",body:"Davide e Marta: presenti martedì, mercoledì e giovedì, dalle 9 alle 18.\nHostess: dalle 8:30 alle 18."}],
  tel:[
   {id:"t1",title:"Fabio",sub:"lun 21:35 · in entrata, 6 min"},
   {id:"t2",title:"Irene",sub:"mer 22:10 · persa"},
   {id:"t3",title:"Claudia",sub:"gio 08:09 · persa"},
   {id:"t4",title:"Hotel Portico Rosso",sub:"gio 11:18 · persa"},
   {id:"t5",title:"Ele ❤",sub:"gio 18:10 · in uscita, 4 min"}]
 },
 photos:[
  {id:"p1",t:"mer 17:42",title:"Lo stand",sc:"stand"},
  {id:"p2",t:"mer 21:48",title:"Cena clienti",sc:"dinner"},
  {id:"p3",t:"mar 09:30",title:"Con Marta",sc:"selfie"},
  {id:"p4",t:"gio 18:02",title:"Promessa mantenuta",sc:"pan"},
  {id:"h1",t:"mer 23:05",title:"Da Fabio",sc:"fab",lock:"album"},
  {id:"h2",t:"gio 07:45",title:"Ricevuta",sc:"rho",lock:"album"}],
 pins:{note:"0712",album:"1414"},lockName:{note:"Nota protetta",album:"Album privato"},
 qs:[
  {q:"Partiamo da lui. A che ora è arrivato Davide a Milano Centrale martedì 18?",all:["805"],show:"Alle 08:05",hint:"C'è un'app con i biglietti del treno.",news:"Il biglietto è stato convalidato a bordo: martedì mattina Davide era su quel treno."},
  {q:"E l'auto? Quando è uscita dal garage di Piacenza, da quanti minuti Davide era già a Milano?",a:["95","95 minuti","95 min","1 ora e 35","1 ora e 35 minuti","un'ora e 35","un'ora e 35 minuti","1h35"],show:"95 minuti",hint:"Confronta l'ora di arrivo del treno con la prima riga dello storico di TrovaAuto.",news:"L'auto si è mossa quando lui era già in fiera. Qualcun altro era al volante."},
  {q:"In quale città ha passato la notte di mercoledì l'auto?",any:["bologna"],show:"A Bologna",hint:"Lo storico del localizzatore.",news:"Nel parcheggio dell'Hotel Portico Rosso, in zona Santo Stefano. Fin qui Irene ha ragione."},
  {q:"La conferma dell'albergo è a nome di Davide. Con quale carta è stata pagata? Scrivi le ultime quattro cifre.",a:["7731"],show:"Carta che termina con 7731",hint:"È scritto nella conferma.",news:"La carta di Davide termina con 2046. Quella camera l'ha pagata un'altra persona."},
  {q:"Dove ha dormito davvero Davide mercoledì notte? Scrivi il nome dell'hotel.",any:["fieranord","fiera nord"],show:"All'Hotel Fiera Nord, a Rho",hint:"Mappe registra l'ultimo arrivo della giornata.",news:"Alle 23:10 il suo telefono entra in un hotel di Rho e non si muove fino al mattino."},
  {q:"Serve una prova che il telefono fosse con lui. A che ora è stata scattata la foto della cena di mercoledì?",all:["2148"],show:"Alle 21:48",hint:"In Galleria ogni foto ha l'orario.",news:"Una tavolata con i clienti sui Navigli. Davide è nella foto."},
  {q:"Quanti minuti prima di quella foto qualcuno ha fatto il check-in a Bologna a suo nome?",a:["18","18 minuti","diciotto","18 min"],show:"18 minuti prima, alle 21:30",hint:"L'ora del check-in è nella conferma dell'albergo.",news:"Nessuno fa Bologna-Milano in diciotto minuti. A Bologna c'era qualcuno che usava il suo nome."},
  {q:"Chi aveva l'auto? Scrivi nome e cognome.",all:["fabio","neri"],show:"Fabio Neri",hint:"Il nome è in una chat, il cognome in un bonifico.",news:"L'amico Fabio. Ora che sai con chi parlava, hai recuperato i 4 messaggi eliminati: sono nella chat con lui.",unlock:"fab"},
  {q:"«Coprimi anche stavolta». Quante altre volte Davide lo aveva già coperto?",a:["2","due","2 volte","due volte"],show:"Due: a giugno e a settembre",hint:"Lo dice Davide stesso nei messaggi recuperati.",news:"Questa è la terza. Davide si era ripromesso di smettere, e non l'ha fatto."},
  {q:"Chi era la donna nella camera di Bologna? Scrivi il nome.",any:["katia"],show:"Katia",hint:"Fabio la nomina due volte.",news:"Katia festeggiava il compleanno. Non compare in nessun'altra parte del telefono: Davide non la conosce nemmeno."},
  {q:"Fabio è sposato. A che ora di giovedì Davide ha mentito a sua moglie Claudia?",all:["814"],show:"Alle 08:14",hint:"Claudia gli ha scritto per sapere dove fosse il marito.",news:"«È qui allo stand.» Davide non tradisce, ma ha mentito due volte nello stesso mattino: a Claudia e a Irene."},
  {q:"Sabrina gli scrive di un oggetto rimasto «nella sua camera». Che cosa?",any:["caricabatter","caricatore"],show:"Un caricabatterie",hint:"Leggi la chat con Sabrina.",news:"Sabrina lavora alla reception di Bologna. Davide risponde che passerà «il sig. Neri»: sa benissimo di chi è."},
  {q:"Passiamo alle altre. A quale stand ha lavorato Davide con Marta?",a:["b14","b 14","stand b14","b-14"],show:"Stand B14",hint:"È nelle note, nel pass e nelle chat.",news:"Marta Brambilla è la collega. Ogni sera è tornata a Monza, e la foto insieme è scattata allo stand."},
  {q:"L'ing. Ferri lo ringrazia «della serata». Quante persone c'erano a quella cena?",a:["6","sei","6 persone","sei persone"],show:"Sei",hint:"Lo dicono lei, il ristorante e il calendario.",news:"L'ingegner Giulia Ferri è una cliente. Alla cena c'era tutto l'ufficio acquisti."},
  {q:"E Noemi? Quanto è costato in tutto il suo lavoro alla fiera?",a:["420","420,00","420 euro","420€","420,00 €"],show:"420 €: tre giorni a 140",hint:"C'è una fattura dell'agenzia con la tariffa giornaliera.",news:"Noemi è la hostess dello stand, pagata dall'azienda tramite agenzia."},
  {q:"Chi è «Ele ❤» per Davide?",any:["figlia"],show:"Sua figlia Elena",hint:"Guarda come lo chiama lei.",news:"Elena ha dodici anni, gioca a calcio e voleva il panettone piccolo della stazione."},
  {q:"Nell'album privato c'è la ricevuta dell'hotel di Rho. Quanti ospiti risultano in camera?",a:["1","uno","un ospite","1 ospite","una persona","solo lui"],show:"Uno",hint:"Il codice dell'album è il numero dello stand, scritto due volte.",news:"Una camera per uno, due notti. Nell'album c'è anche la foto che Fabio gli ha mandato da Bologna."},
  {q:"La nota protetta elenca ciò che non può dire a Irene. In quale giorno ha deciso di parlare con Fabio?",any:["domenica"],show:"Domenica",hint:"Il codice della nota è l'ora del treno dell'andata.",news:"«Non lo copro più.» L'ha scritto anche in calendario, con una parola sola: basta."},
  {q:"In quale dei tre giorni Davide è stato a Bologna? Se in nessuno, scrivi NESSUNO.",any:["nessun","mai"],show:"Nessuno",hint:"Mappe tiene anche l'elenco dei luoghi visitati nell'anno.",news:"Il suo telefono non è mai stato a Bologna. C'è stata solo la sua auto."},
  {q:"Chi tradisce davvero in questa storia? Scrivi il nome.",any:["fabio"],show:"Fabio",hint:"Chi ha prenotato, pagato e dormito a Bologna?",news:"Fabio tradisce Claudia. Davide gli ha prestato l'auto, il nome e una bugia."},
  {q:"Il verdetto per Irene.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Davide non ha un'altra, ma non è innocente.",news:""}],
 win:{title:"Davide non tradisce Irene. Copre chi lo fa.",
  steps:["Davide ha preso il treno delle 07:12 ed è rimasto a Milano tre giorni: fiera, cena con i clienti, hotel di Rho in camera singola.","L'auto è uscita dal garage alle 09:40, quando lui era già a Milano da 95 minuti. La guidava l'amico Fabio Neri.","Fabio ha prenotato a Bologna a nome di Davide e ha pagato con la propria carta. Con lui c'era Katia.","Giovedì alle 08:14 Davide ha mentito a Claudia, la moglie di Fabio. Era la terza volta che lo copriva.","Marta è la collega, l'ing. Ferri una cliente, Noemi la hostess, Sabrina la reception ed Ele è sua figlia."],
  end:"Irene tira un sospiro, poi si ferma. «Quindi mi ha mentito sulla macchina per proteggere Fabio.» Prende il telefono. «Claudia è una mia amica. Adesso il problema ce l'ho io.»"}
};
LIB.tune(4,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="hot";
 e.pins={album:"1414",hot:"0714",note:"0131"};
 e.locks={album:{hint:"Il nostro stand, scritto due volte."},hot:{name:"Mail protetta",hint:"Il padiglione, poi lo stand senza la lettera."},note:{hint:"Gli ospiti nella mia camera, con lo zero, poi la fine della carta usata a Bologna."}};
 e.spots=[
  {id:"s1",x:28,y:48,label:"Rho Fiera",title:"Rho Fiera",sub:"Padiglione 7",body:"Fiera dell'imballaggio, dal martedì al giovedì, dalle 9 alle 18."},
  {id:"s2",x:52,y:72,label:"Hotel Fiera Nord",title:"Hotel Fiera Nord",sub:"Rho · ★ 3,6",body:"Recensione: «Comodo per la fiera. Le camere singole sono minuscole.»"},
  {id:"s3",x:120,y:196,label:"Al Naviglio Vecchio",title:"Al Naviglio Vecchio",sub:"Navigli · ★ 4,4",body:"Mercoledì sera un tavolo da sei a nome di un'azienda di imballaggi."},
  {id:"s4",x:344,y:84,label:"Bologna",title:"Hotel Portico Rosso",sub:"Bologna, Santo Stefano · ★ 4,2",body:"Recensione: «Mercoledì sera è arrivata una coppia con una macchina targata Piacenza. Lui non si è tolto gli occhiali da sole nemmeno alla reception.»"}];
 LIB.hints(e,["Il viaggio in treno ha un orario.","Confronta il treno e il garage.","L'auto si ricorda dove ha dormito.","Una carta che non è la sua.","Il telefono di Davide si ricorda dove ha dormito lui.","Una foto con l'ora.","Confronta due orari.","Qualcuno gli ha restituito i soldi della benzina.","Un amico gli chiede di coprirlo, di nuovo.","Un nome in una nota chiusa.","Una bugia alla moglie dell'amico.","Una collega ha lasciato qualcosa.","Dove lavorava?","Una cena di lavoro.","Un servizio pagato a giornata.","Un cuore accanto a un nome.","La ricevuta dell'hotel è nascosta.","Davide ha scritto quando parlare.","In quale giorno è stato a Bologna?","Chi tradisce davvero?","Il verdetto."]);
});
})();
