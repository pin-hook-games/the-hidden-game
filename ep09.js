(function(){
/* episodio 9: Due telefoni (Napoli). Soluzione: Nasconde altro. È il telefono delle scommesse: debiti di gioco e un prestasoldi. */
const SC={
 slip:()=>LIB.doc("Stella d'Oro · giocata","#a02822",["Corsa 7 · Agnano","BELLA DI NOTTE · vincente","Puntata: 100,00 €","Esito: non piazzata"]),
 bus:()=>LIB.obj("#f0d9a0","🚌","Linea 151, deposito"),
 lau:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Laura, Mergellina"),
 hrs:()=>LIB.obj("#cfe3c9","🐎","Bella di Notte, corsa 7"),
 pawn:()=>LIB.doc("Banco dei pegni","#55606b",["Polizza n. 2281","Orologio da polso","appartenuto al padre","Prestito: 300,00 €"]),
 sum:()=>LIB.shot("N.",["Sono 3.200, e lo sai.","Salutami la signora Laura."])
};
const MAP=LIB.map({name:"Mappa stilizzata di Napoli",
 water:[["M0 230Q100 190 200 220Q300 250 400 200",40]],
 parks:[`<ellipse cx="330" cy="50" rx="50" ry="30" fill="#d7c9b8"/>`],
 roads:["M30 150H370","M90 60V190","M170 40V200","M250 50V210","M40 100H300","M300 100L360 160"],
 labels:[[30,140,"Fuorigrotta"],[96,54,"Vomero"],[176,34,"Centro storico"],[150,196,"Chiaia"],[60,200,"Mergellina"],[256,146,"Stazione"],[306,44,"Vesuvio"],[316,236,"Golfo"]],
 pins:[[190,120,"#33658a","Casa",9,4],[280,170,"#33658a","deposito",9,4],[50,160,"#d43d55","tre sere a settimana",9,16]]});

EPISODES[9]={...LIB.apps("msg tel web gal map cal note bank",[["bet","Scommesse","dice","#e2574c,#8f1d1d"]]),
 n:9,timer:1800,map:MAP,scenes:SC,owner:"Antonio Esposito · secondo telefono",time:"15:40",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Laura ha trovato un secondo telefono sotto il sedile dell'auto del compagno Antonio, 42 anni, autista di autobus a Napoli. Lui è di turno fino a sera e non sa che lei lo ha preso.",
 quote:"«Un telefono nascosto. Non c'è un nome vero in rubrica: una N., una Stella, una Bella, una Rosa, una certa Mary. Una gli scrive «ti aspetto stasera, non mancare». Tre sere a settimana sparisce e i soldi in casa non bastano mai. Mi dica chi è, e non mi dica che mi sbaglio.»",
 chats:[
  {id:"n",name:"N.",sub:"",m:[
   ["lun 20:05",0,"Ti aspetto stasera, non mancare."],
   ["lun 20:30",1,"Vengo. Ma non ho tutto."],
   ["mer 09:00",0,"Sono 3.200, e lo sai."],
   ["",2,"2 messaggi vocali eliminati."],
   ["mer 21:10",0,"Vocale (0:14): «Antò, con il disturbo fanno 400 in più. Tutto entro sabato, alle 21, al solito bar. Nino non aspetta.»","nin"],
   ["mer 21:12",0,"Vocale (0:06): «E salutami la signora Laura.»","nin"]]},
  {id:"t",name:"T.",sub:"",m:[
   ["mar 19:00",0,"Stasera Bella non può perdere. Corsa 7. Ci metto la casa."],
   ["mar 19:05",1,"L'hai detto pure l'altra volta. Metto cento."],
   ["mar 22:40",0,"Mannaggia. Però stai attento a Nino, quello non scherza."]]},
  {id:"stella",name:"Stella",sub:"",m:[
   ["lun 12:00",0,"Gentile cliente, la aspettiamo: il suo bonus di benvenuto scade venerdì. Sala Stella d'Oro, Fuorigrotta."],
   ["gio 12:00",0,"Stasera corse in diretta e buffet omaggio. Sala Stella d'Oro."]]},
  {id:"zia",name:"Zia Carmela",sub:"",m:[
   ["dom 11:00",0,"Antò, i 500 euro di zia quando me li ridai? Devo fare gli occhiali."],
   ["dom 11:30",1,"A fine mese zia, giuro."],
   ["dom 11:31",0,"Lo giuri da agosto."]]},
  {id:"rosa",name:"Rosa",sub:"",m:[
   ["mar 14:00",0,"Ti ho coperto il turno di sabato. E i 200 che ti ho prestato? Non sono la banca del deposito."],
   ["mar 14:10",1,"Lo so Rosà. Sei una sorella."],
   ["mar 14:11",0,"Una collega, sono. E preoccupata."]]},
  {id:"mary",name:"Mary_91",sub:"",m:[
   ["mer 23:00",0,"Ciao! Sono Mary dell'assistenza clienti. La tua ricarica da 150 € è andata a buon fine."],
   ["mer 23:01",0,"Vuoi impostare un limite di spesa mensile? Rispondi SÌ."],
   ["mer 23:05",1,"No."]]},
  {id:"marino",name:"Dott.ssa Marino",sub:"",m:[
   ["gio 10:00",0,"Buongiorno Antonio, le confermo il primo colloquio martedì 25 alle 17 allo Sportello Azzardo. È gratuito e riservato."],
   ["gio 10:20",1,"Ci sarò. Mi vergogno un poco."],
   ["gio 10:21",0,"Aver chiamato è già la parte difficile."]]}
 ],
 lists:{
  bet:[
   {id:"x0",g:"Conto di gioco",title:"Saldo: 4,50 €",sub:"Iscritto da agosto"},
   {id:"x1",g:"Ricariche di novembre",title:"Ricarica",sub:"19 nov · 150,00 €"},
   {id:"x2",g:"Ricariche di novembre",title:"Ricarica",sub:"14 nov · 200,00 €"},
   {id:"x3",g:"Ricariche di novembre",title:"Ricarica",sub:"11 nov · 100,00 €"},
   {id:"x4",g:"Ricariche di novembre",title:"Ricarica",sub:"6 nov · 100,00 €"},
   {id:"x5",g:"Ricariche di novembre",title:"Ricarica",sub:"3 nov · 50,00 €"},
   {id:"x6",g:"Ultime giocate",title:"Bella di Notte, vincente",sub:"mar 18 · 100,00 € · persa",meta:"Corsa 7",body:"Cavalla di cinque anni, ippodromo di Agnano.\nQuota 6,50. Non piazzata."},
   {id:"x7",g:"Ultime giocate",title:"Multipla calcio, 5 partite",sub:"sab 15 · 50,00 € · persa"}],
  map:[
   {id:"g1",g:"Luoghi frequenti",title:"Fuorigrotta, una sala al piano terra",sub:"Lunedì, martedì e giovedì sera",meta:"3 volte a settimana",body:"Dalle 20:30 circa a dopo le 23.\nL'insegna è una stella gialla."},
   {id:"g2",g:"Luoghi frequenti",title:"Un bar vicino alla stazione",sub:"Il sabato alle 21",meta:"Da settembre",body:"Soste di dieci minuti, sempre di sabato."},
   {id:"g3",g:"Luoghi frequenti",title:"Banco dei pegni, centro storico",sub:"Una visita, 12 novembre",body:"Venti minuti."}],
  bank:[
   {id:"b0",g:"Carta ricaricabile",title:"Saldo: 12,30 €",sub:"Carta usata solo da questo telefono"},
   {id:"b1",g:"Novembre",title:"Banco dei pegni, prestito",sub:"12 nov · + 300,00 €"},
   {id:"b2",g:"Novembre",title:"Scommesse, ricariche del mese",sub:"5 operazioni"},
   {id:"b3",g:"Novembre",title:"Contanti, versamento",sub:"1 nov · + 400,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sab 22 · N.",sub:"21:00",body:"Tutto. Non ce li ho."},
   {id:"c2",g:"Novembre",title:"Mar 25 · Dott.ssa M.",sub:"17:00",body:"Andarci davvero."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come smettere di scommettere",sub:"mer 23:30"},
   {id:"w2",g:"Cronologia",title:"sportello gratuito gioco d'azzardo napoli",sub:"mer 23:40"},
   {id:"w3",g:"Cronologia",title:"bella di notte cavallo pronostico",sub:"mar 18:30"},
   {id:"w4",g:"Cronologia",title:"interessi prestito tra privati è legale",sub:"mer 21:30"}],
  note:[
   {id:"n0",title:"Conti",body:"Settembre: − 900.\nOttobre: − 1.250.\nNovembre: − 1.050.\nTutto preso da N."},
   {id:"n1",title:"Codici",body:"Album privato: quello che ho perso a ottobre.\nLa nota qui sotto: quanto vuole N. adesso, con il disturbo."},
   {id:"n2",title:"Per Laura",lock:"note",body:"Laura pensa che ho un'altra.\nMagari: un'altra almeno costava meno.\nMartedì vado dalla dottoressa. Poi a Laura dico tutto, pure dell'orologio di papà."}],
  tel:[
   {id:"t1",title:"N.",sub:"mer 21:05 · in entrata, 1 min"},
   {id:"t2",title:"Dott.ssa Marino",sub:"gio 09:50 · in uscita, 8 min"},
   {id:"t3",title:"Zia Carmela",sub:"dom 10:55 · persa"}]
 },
 photos:[
  {id:"p1",t:"mar 22:35",title:"Giocata",sc:"slip"},
  {id:"p2",t:"lun 06:10",title:"Lavoro",sc:"bus"},
  {id:"p3",t:"giu",title:"Con Laura",sc:"lau"},
  {id:"p4",t:"mar 18:40",title:"Bella",sc:"hrs"},
  {id:"h1",t:"12 nov",title:"Polizza",sc:"pawn",lock:"album"},
  {id:"h2",t:"mer 21:15",title:"Schermata",sc:"sum",lock:"album"}],
 pins:{note:"3600",album:"1250"},
 qs:[
  {t:"600",q:"Su questo telefono c'è un'app che Laura non ha nominato. Quanti euro ha ricaricato Antonio a novembre?",a:["600","600,00","600 euro","600€"],show:"600 €, in cinque ricariche",hint:"Apri Scommesse e somma le ricariche del mese.",news:"Non è un telefono per le donne. È un telefono per giocare."},
  {t:"un cavallo",q:"«Stasera Bella non può perdere». Chi, o che cosa, è Bella?",any:["cavall"],show:"Una cavalla: Bella di Notte",hint:"Guarda le ultime giocate, e la Galleria.",news:"Bella corre ad Agnano, corsa 7, e martedì non si è nemmeno piazzata. Primo nome da togliere."},
  {t:"Fuorigrotta",q:"Dove passa tre sere a settimana? Scrivi il quartiere.",any:["fuorigrotta"],show:"A Fuorigrotta",hint:"Mappe tiene i luoghi frequenti.",news:"Una sala al piano terra con una stella gialla per insegna."},
  {t:"Stella d'Oro",q:"Come si chiama quella sala? È lo stesso nome di un contatto.",any:["stella"],show:"Sala Stella d'Oro",hint:"Il contatto «Stella» firma i suoi messaggi.",news:"Stella è una sala scommesse che manda promozioni. Secondo nome da togliere."},
  {t:"assistenza clienti",q:"E Mary_91, che gli scrive alle undici di sera? Per quale servizio lavora?",any:["assistenza","clienti","scommess"],show:"L'assistenza clienti delle scommesse",hint:"Si presenta nel primo messaggio.",news:"Gli ha proposto un limite di spesa. Lui ha risposto no."},
  {t:"3200",q:"Quanto ha perso in tutto tra settembre e novembre?",a:["3200","3.200","3200 euro","3.200 euro","3.200 €"],show:"3.200 €",hint:"Ha fatto i conti lui stesso, in una nota. Somma i tre mesi.",news:"Sotto i conti ha scritto: «Tutto preso da N.»"},
  {t:"Nino",q:"Chi è N.? Scrivi il nome.",any:["nino"],show:"Nino",hint:"Un amico lo nomina mettendolo in guardia.",news:"Nino presta soldi. Ora che sai chi è, hai recuperato i suoi due messaggi vocali eliminati.",unlock:"nin"},
  {t:"3600",q:"Quanto pretende adesso Nino, «con il disturbo»?",a:["3600","3.600","3600 euro","3.600 euro","3.600 €"],show:"3.600 €",hint:"Ascolta il primo vocale recuperato e fai la somma.",news:"Quattrocento euro di «disturbo» in pochi giorni. E l'ultimo vocale nomina Laura."},
  {t:"21",q:"«Ti aspetto stasera, non mancare». A che ora lo aspetta Nino sabato?",a:["21","21:00","alle 21","le 21","21.00","ventuno","ore 21"],show:"Alle 21, al solito bar",hint:"È nel vocale e in calendario.",news:"Il messaggio che ha spaventato Laura non era un invito. Era un sollecito."},
  {t:"500",q:"Nino non è l'unico creditore. Quanto deve a zia Carmela?",a:["500","500,00","500 euro","500€"],show:"500 €",hint:"Glieli chiede lei.",news:"Una zia vera, che aspetta da agosto i soldi per gli occhiali."},
  {t:"200",q:"E a Rosa?",a:["200","200,00","200 euro","200€"],show:"200 €",hint:"Lo scrive lei, insieme a un favore.",news:"Rosa è una collega autista: gli copre i turni e gli presta soldi. «Preoccupata», dice."},
  {t:"4300",q:"Quanto deve in tutto, tra Nino, la zia e Rosa?",a:["4300","4.300","4300 euro","4.300 euro","4.300 €"],show:"4.300 €",hint:"Somma i tre debiti, con la cifra aggiornata di Nino.",news:"Ecco dove finiscono i soldi di casa."},
  {t:"orologio",q:"Nell'album privato c'è una polizza del banco dei pegni. Che cosa ha impegnato?",any:["orologio"],show:"L'orologio di suo padre",hint:"Il codice dell'album è la cifra persa a ottobre, senza il punto.",news:"Trecento euro per l'orologio del padre."},
  {t:"25",q:"C'è anche una buona notizia. In quale giorno ha appuntamento con la dott.ssa Marino?",all:["25"],show:"Martedì 25 alle 17",hint:"È in chat e in calendario.",news:"Ha telefonato lui, giovedì mattina, per otto minuti."},
  {t:"azzardo",q:"Di che cosa si occupa lo sportello della dott.ssa Marino?",any:["azzardo","gioco","ludopat","dipenden"],show:"Gioco d'azzardo",hint:"Il nome dello sportello è nel suo messaggio.",news:"Uno sportello gratuito e riservato. Antonio ha scritto: «Mi vergogno un poco.»"},
  {t:"Laura",q:"Nella nota protetta dice a chi racconterà tutto dopo l'appuntamento. A chi?",any:["laura"],show:"A Laura",hint:"Il codice è la cifra che vuole Nino adesso.",news:"«Laura pensa che ho un'altra. Magari: un'altra almeno costava meno.»"},
  {t:"nessuna",q:"N., Stella, Bella, Rosa, Mary, zia Carmela, la dott.ssa Marino. Chi è l'amante di Antonio? Se nessuna, scrivi NESSUNA.",any:["nessun"],show:"Nessuna",hint:"Un creditore, una sala, una cavalla, una collega, un'assistenza, una zia, una psicologa.",news:"Sette nomi e nessuna donna da temere."},
  {t:"a",q:"Il verdetto per Laura.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un'altra. C'è un debito.",news:""}],
 win:{title:"Antonio non tradisce Laura. Gioca, e ha un debito.",
  steps:["Il secondo telefono serve per le scommesse: 600 € di ricariche a novembre, 3.200 € persi in tre mesi.","Bella è una cavalla, Stella una sala scommesse di Fuorigrotta, Mary l'assistenza clienti.","N. è Nino, che presta soldi: ora ne vuole 3.600 entro sabato alle 21.","Antonio deve anche 500 € a zia Carmela e 200 € alla collega Rosa, e ha impegnato l'orologio del padre.","Martedì 25 ha il primo colloquio allo Sportello Azzardo."],
  end:"Laura si aspettava un nome di donna. Resta ferma sulla polizza dell'orologio. «Quello era di suo padre», dice. «Martedì dalla dottoressa lo accompagno io. Ma a Nino, sabato, non ci va da solo.»"}
};
LIB.tune(9,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.note.find(x=>x.id==="n0").lock="con";
 e.pins={album:"1250",con:"2125",note:"0912"};
 e.locks={album:{hint:"Quello che ho perso a ottobre."},con:{name:"Nota protetta",hint:"L'ora in cui mi aspetta lui, poi il giorno della dottoressa."},note:{hint:"Le centinaia perse a settembre, con lo zero, poi quelle di ottobre."}};
 e.spots=[
  {id:"s1",x:50,y:160,label:"Stella d'Oro",title:"Sala Stella d'Oro",sub:"Fuorigrotta · ★ 2,4",body:"Recensione: «Aperta fino all'una. Le facce sono sempre le stesse, e sempre più stanche.»"},
  {id:"s2",x:190,y:90,label:"Banco dei pegni",title:"Banco dei pegni",sub:"Centro storico",body:"Orologi e oro. Polizza di sei mesi, poi l'oggetto va all'asta."},
  {id:"s3",x:280,y:170,label:"Deposito",title:"Deposito dove lavora Antonio",sub:"",body:"Turni regolari. Esce alle 18, ogni sera."}];
 LIB.hints(e,["Un'app che Laura non conosce, con i suoi movimenti.","Bella non è una persona.","Il telefono si ricorda dove va la sera.","Quella sala ha un nome, e anche un contatto.","Mary non è chi sembra.","Antonio ha fatto i conti, sotto chiave.","Un'iniziale in agenda.","Quanto vuole adesso?","Un appuntamento serale.","Una zia gli ha prestato dei soldi.","Anche una collega.","Somma tutti i debiti.","Qualcosa è finito al banco dei pegni.","Un appuntamento importante a fine mese.","Che cosa fa quello sportello?","Antonio ha scritto a chi dirlo.","Ripassa chi sono tutti.","Il verdetto."]);
});
})();
