(function(){
/* episodio 16: La collega nuova (Trieste). Soluzione: Nasconde altro. A Ilaria hanno offerto un posto a Utrecht da gennaio, e non sa come dirlo a Vittoria. */
const SC={
 lab:()=>LIB.obj("#dfe5ea","🔬","Laboratorio, terzo piano"),
 han:()=>LIB.two("#cfd8df","#7a3b5a","#c9a15a","Con Hanna, il giorno della notizia"),
 vit:()=>LIB.two("#9cc7d6","#7a3b5a","#1f3a66","Con Vittoria, in barca a Barcola"),
 sea:()=>LIB.obj("#9cc7d6","⛵","La barca di Vittoria"),
 off:()=>LIB.doc("Universiteit Utrecht","#c0392b",["Offerta di contratto","Cossutta Ilaria · ricercatrice","Tre anni, dal 12 gennaio","Risposta entro il 30 novembre"]),
 flat:()=>LIB.obj("#f6e3b0","🏡","Utrecht · 3 stanze, per due")
};
const MAP=LIB.map({name:"Mappa stilizzata di Trieste",
 water:[["M0 0Q120 120 60 260",110]],
 parks:[`<ellipse cx="340" cy="70" rx="60" ry="40" fill="#d7e2c9"/>`],
 roads:["M130 60Q200 110 180 240","M150 110H360","M170 170H340","M240 60V230","M310 110V240"],
 extra:`<rect x="150" y="118" width="40" height="26" fill="#e2d6c4" stroke="#b0764a"/>`,
 labels:[[150,112,"Piazza Unità"],[116,50,"Barcola"],[200,84,"Stazione"],[250,160,"San Giacomo"],[316,60,"Carso"],[316,104,"Università"],[196,236,"Porto"],[30,150,"Golfo"]],
 pins:[[250,190,"#33658a","Casa",9,4],[340,124,"#33658a","istituto",9,16],[186,214,"#56666e","lavoro di Vittoria",9,-8]]});

EPISODES[16]={...LIB.apps("msg tel mail web gal map cal note bank drive"),
 n:16,timer:1800,map:MAP,scenes:SC,owner:"Ilaria Cossutta",time:"08:40",date:"sab 22 nov",homeDate:"sabato 22 novembre",
 brief:"Vittoria ti ha portato il telefono della compagna Ilaria, 35 anni, ricercatrice in un istituto di fisica a Trieste. Ilaria è a nuotare, come ogni sabato mattina.",
 quote:"«A ottobre in istituto è arrivata una collega nuova, Hanna. Da allora Ilaria rientra tardi, è evasiva, e ha dei «colloqui» in agenda che non mi spiega. Ho visto un messaggio a Hanna: «senza di te non ce l'avrei fatta». Stiamo insieme da sei anni. Voglio sapere se devo preoccuparmi.»",
 chats:[
  {id:"vittoria",name:"Vittoria",sub:"Compagna",m:[
   ["gio 19:30",0,"Cena alle otto?"],
   ["gio 19:45",1,"Faccio tardi, ho un colloquio. Mangia pure."],
   ["gio 19:46",0,"Un colloquio con chi, alle otto di sera?"],
   ["gio 21:30",1,"Poi ti spiego. Giuro."]]},
  {id:"hanna",name:"Hanna",sub:"",m:[
   ["13 nov · 21:40",1,"È andata. Senza di te non ce l'avrei fatta."],
   ["13 nov · 21:42",0,"Ce l'avresti fatta eccome. Io ti ho solo corretto l'inglese della candidatura e raccontato com'è il mio vecchio dipartimento."],
   ["19 nov · 10:00",0,"Allora? Hai risposto a Eva?"],
   ["19 nov · 10:05",1,"No. Prima devo dirlo a Vittoria e non trovo le parole."],
   ["19 nov · 10:06",0,"Hai tempo fino al 30. Non aspettare il 29."]]},
  {id:"devetak",name:"Prof.ssa Devetak",sub:"",m:[
   ["5 nov · 09:00",0,"Ilaria, ho mandato la lettera di referenze. Mi dispiace perderti, ma è l'occasione giusta."],
   ["5 nov · 09:10",1,"Grazie. Le chiedo ancora riservatezza, a casa non ne ho parlato."]]},
  {id:"chiara",name:"Chiara",sub:"",m:[
   ["mer 15:00",0,"Buongiorno Ilaria, sono Chiara dell'agenzia. La casa con tre stanze è ancora libera da gennaio: 1.400 al mese. La blocco?"],
   ["mer 15:20",1,"Mi dia fino a fine mese. Non dipende solo da me."]]},
  {id:"sara",name:"Sara",sub:"",m:[
   ["mar 18:00",0,"Ila, per i 40 di Vitto a febbraio facciamo il fine settimana in barca a sorpresa? Non dirle niente!"],
   ["mar 18:30",1,"Sara... a febbraio non so dove saremo. Ti richiamo."],
   ["mar 18:31",0,"Come sarebbe? Sono sua sorella, mi fai preoccupare."]]},
  {id:"marta",name:"Marta",sub:"",m:[
   ["2022",0,"Ho trovato i tuoi libri di fisica in cantina. Te li spedisco?"],
   ["2022",1,"Sì, grazie. Stammi bene."]]}
 ],
 lists:{
  mail:[
   {id:"m0",g:"Bozze",title:"3 bozze nascoste",sub:"Mai inviate",meta:"Da aprire",body:"Bozze salvate in una cartella protetta.\nPer aprirla bisogna sapere chi ha firmato l'offerta."},
   {id:"z1",g:"Bozze recuperate · a Vittoria",u:"utr",title:"Bozza 1 · 14 novembre",sub:"Devo dirti una cosa",body:"«Vitto, devo dirti una cosa e non so da dove cominciare.»"},
   {id:"z2",g:"Bozze recuperate · a Vittoria",u:"utr",title:"Bozza 2 · 17 novembre",sub:"Mi hanno offerto",body:"«Mi hanno offerto un posto a Utrecht. Tre anni. Non ho ancora detto sì.»"},
   {id:"z3",g:"Bozze recuperate · a Vittoria",u:"utr",title:"Bozza 3 · 20 novembre",sub:"Tu hai tutto qui",body:"«Tu hai il porto, la barca, tua madre. Io ho un'occasione che non torna. Ho cercato una casa per due. Vieni con me?»"},
   {id:"m1",g:"Posta in arrivo",title:"Universiteit Utrecht",sub:"Offerta di contratto",meta:"14 novembre",body:"Gentile dott.ssa Cossutta,\nsiamo lieti di offrirle un contratto di ricerca di tre anni, con inizio il 12 gennaio.\nAttendiamo la sua risposta entro il 30 novembre.\nProf. Eva Jansen, direttrice del dipartimento"},
   {id:"m2",g:"Posta in arrivo",title:"Universiteit Utrecht",sub:"Colloqui di selezione",meta:"20 ottobre",body:"Tre colloqui in videochiamata: 28 ottobre, 6 novembre e 13 novembre, alle 20:00 ora italiana."},
   {id:"m3",g:"Posta in arrivo",title:"Istituto di Fisica",sub:"Benvenuta, Hanna de Vries",meta:"6 ottobre",body:"Diamo il benvenuto alla dott.ssa Hanna de Vries, che arriva dall'Università di Utrecht per un anno di ricerca.\nHanna è qui con il marito Pieter e i due figli."}],
  map:[
   {id:"g1",g:"Cronologia · giovedì 13",title:"Istituto, Università",sub:"08:30 - 21:35",meta:"Permanenza",body:"In istituto fino alle 21:35. Nessun altro spostamento."},
   {id:"g2",g:"Ricerche",title:"Utrecht, Paesi Bassi",sub:"Quartieri vicino al porto fluviale",body:"Ricerca salvata: «casa per due, vicino all'acqua»."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Traduzione giurata dei titoli",sub:"10 nov · − 140,00 €"},
   {id:"b2",g:"Novembre",title:"Corso di olandese, base",sub:"17 nov · − 95,00 €"}],
  cal:[
   {id:"c1",g:"Ottobre",title:"Mar 28 · Colloquio",sub:"20:00",body:"Online."},
   {id:"c2",g:"Novembre",title:"Gio 6 · Colloquio",sub:"20:00",body:"Online."},
   {id:"c3",g:"Novembre",title:"Gio 13 · Colloquio",sub:"20:00",body:"Online. L'ultimo."},
   {id:"c4",g:"Novembre",title:"Dom 30 · RISPONDERE",sub:"",body:"Prima: Vittoria."},
   {id:"c5",g:"Febbraio",title:"Compleanno di Vittoria, 40",sub:"",body:""}],
  web:[
   {id:"w1",g:"Cronologia",title:"utrecht casa in affitto due persone",sub:"mer 23:10"},
   {id:"w2",g:"Cronologia",title:"lavoro portuale utrecht rotterdam italiani",sub:"mer 23:40"},
   {id:"w3",g:"Cronologia",title:"come chiedere alla compagna di trasferirsi all'estero",sub:"gio 22:00"},
   {id:"w4",g:"Cronologia",title:"relazione a distanza trieste olanda voli",sub:"gio 22:20"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: giorno e mese in cui dovrei cominciare.\nLa nota qui sotto: il giorno della scadenza e il numero dei colloqui, con uno zero in mezzo."},
   {id:"n2",title:"Pro e contro",lock:"note",body:"Pro: il posto che sogno da dieci anni.\nContro: Vittoria lavora al porto, ha la barca, ha sua madre a Muggia.\nNon posso chiederle di lasciare tutto. Non posso nemmeno partire senza chiederglielo."}],
  drive:[
   {id:"d1",title:"Candidatura_Utrecht_def.pdf",sub:"PDF",meta:"Revisione di Hanna",body:"Lettera di candidatura, corretta da Hanna il 20 ottobre."},
   {id:"d2",title:"Casa Utrecht",sub:"Scheda dell'agenzia",meta:"Mercoledì",body:"Tre stanze, per due persone, a dieci minuti dal porto fluviale.\n1.400 € al mese, libera da gennaio."}],
  tel:[
   {id:"t1",title:"Hanna",sub:"13 nov · 21:36 · in uscita, 6 min"},
   {id:"t2",title:"Prof.ssa Devetak",sub:"14 nov · in entrata, 9 min"},
   {id:"t3",title:"Vittoria",sub:"gio 20:10 · persa"}]
 },
 photos:[
  {id:"p1",t:"lun",title:"Lab",sc:"lab"},
  {id:"p2",t:"14 nov",title:"Hanna",sc:"han"},
  {id:"p3",t:"ago",title:"Noi",sc:"vit"},
  {id:"p4",t:"lug",title:"La barca",sc:"sea"},
  {id:"h1",t:"14 nov",title:"Offerta",sc:"off",lock:"album"},
  {id:"h2",t:"mer",title:"Casa?",sc:"flat",lock:"album"}],
 pins:{note:"3003",album:"1201"},
 qs:[
  {t:"3",q:"Partiamo dai «colloqui». Quanti ne ha avuti Ilaria tra ottobre e novembre?",a:["3","tre","3 colloqui","tre colloqui"],show:"Tre",hint:"Sono tutti in calendario.",news:"Tre colloqui alle otto di sera, tutti online. Giovedì 13 non si è mossa dall'istituto fino alle 21:35."},
  {t:"Utrecht",q:"Con chi erano quei colloqui? Scrivi la città dell'università.",any:["utrecht"],show:"Con l'Università di Utrecht",hint:"C'è una mail che elenca le tre date.",news:"Colloqui di selezione, alle 20 ora italiana. Non erano appuntamenti."},
  {t:"Utrecht",q:"E Hanna, la collega nuova? Da quale università arriva?",any:["utrecht"],show:"Da Utrecht",hint:"L'istituto ha mandato una mail di benvenuto.",news:"Hanna de Vries viene proprio da lì, ed è a Trieste con il marito Pieter e i due figli."},
  {t:"la candidatura",q:"«Senza di te non ce l'avrei fatta». In che cosa l'ha aiutata Hanna?",any:["candidatur","inglese","domanda","colloqui","lettera"],show:"Con la candidatura",hint:"Lo spiega Hanna stessa nella risposta.",news:"Le ha corretto l'inglese e raccontato il dipartimento. Il messaggio che ha spaventato Vittoria era un grazie."},
  {t:"3",q:"Com'è andata? Per quanti anni è il contratto che le hanno offerto?",a:["3","tre","3 anni","tre anni"],show:"Tre anni",hint:"Leggi l'offerta nella Mail.",news:"Un contratto di ricerca di tre anni in Olanda."},
  {t:"12 gennaio",q:"Da quando? Giorno e mese.",all:["12","gen"],show:"Dal 12 gennaio",hint:"È nella stessa mail.",news:"Tra meno di due mesi."},
  {t:"30",q:"Entro quale giorno di novembre deve rispondere?",all:["30"],show:"Entro il 30 novembre",hint:"Mail e calendario.",news:"Otto giorni. In calendario ha scritto: «Prima: Vittoria.»"},
  {t:"Jansen",q:"Chi ha firmato l'offerta? Scrivi il cognome.",any:["jansen"],show:"La prof. Eva Jansen",hint:"È in fondo alla mail.",news:"«Eva» è la direttrice del dipartimento. Ora che sai chi è, hai aperto la cartella delle bozze mai inviate.",unlock:"utr"},
  {t:"Vittoria",q:"A chi sono indirizzate le tre bozze?",any:["vittoria","vitto","compagna"],show:"A Vittoria",hint:"Guarda il titolo della cartella recuperata.",news:"Ci prova dal 14 novembre, il giorno stesso dell'offerta. Tre tentativi, nessuno inviato."},
  {t:"Vieni con me?",q:"Con quale domanda finisce l'ultima bozza?",any:["vieniconme","vieni"],show:"«Vieni con me?»",hint:"Bozza del 20 novembre.",news:"Non sta progettando di andarsene da sola."},
  {t:"2",q:"Lo conferma la casa. Per quante persone la sta cercando?",a:["2","due","2 persone","due persone","per due"],show:"Per due",hint:"Browser, Mappe e la scheda dell'agenzia nel Drive.",news:"Tre stanze vicino al porto fluviale. Ha cercato perfino lavoro portuale per italiani."},
  {t:"1400",q:"Quanto costa al mese quella casa?",a:["1400","1.400","1400 euro","1.400 euro","1.400 €"],show:"1.400 €",hint:"Lo scrive Chiara.",news:"Chiara è l'agente che gliela tiene bloccata fino a fine mese."},
  {t:"referenze",q:"La prof.ssa Devetak sa tutto. Che cosa ha mandato a Utrecht per lei?",any:["referenz","lettera","raccomandaz"],show:"Una lettera di referenze",hint:"Lo scrive il 5 novembre.",news:"La sua responsabile, a cui dispiace perderla."},
  {t:"sorella",q:"Sara le chiede di «non dirle niente». Chi è Sara per Vittoria?",any:["sorella"],show:"Sua sorella",hint:"Lo dice lei stessa.",news:"Sta organizzando i quarant'anni di Vittoria, a febbraio. Ilaria le ha risposto che non sa dove saranno."},
  {t:"2022",q:"E Marta? In quale anno è l'ultimo messaggio?",a:["2022"],show:"Nel 2022",hint:"Guarda la data.",news:"Una ex, e una scatola di libri di fisica."},
  {t:"3",q:"Nell'album privato c'è la casa di Utrecht. Quante stanze ha?",a:["3","tre","3 stanze","tre stanze"],show:"Tre",hint:"Il codice dell'album è la data in cui dovrebbe cominciare, giorno e mese.",news:"Accanto c'è la foto dell'offerta. Sotto la casa ha scritto solo un punto interrogativo."},
  {t:"al porto",q:"Nella nota protetta elenca i «contro». Dove lavora Vittoria?",any:["porto"],show:"Al porto",hint:"Il codice: il giorno della scadenza, uno zero, il numero dei colloqui.",news:"«Non posso chiederle di lasciare tutto. Non posso nemmeno partire senza chiederglielo.»"},
  {t:"nessuna",q:"Hanna, la prof.ssa Devetak, la prof. Jansen, Chiara, Sara, Marta. Con chi ha una storia Ilaria? Se con nessuna, scrivi NESSUNA.",any:["nessun"],show:"Con nessuna",hint:"Una collega sposata, una responsabile, una direttrice, un'agente, una cognata, una ex.",news:"Nessun'altra. C'è un'altra città."},
  {t:"a",q:"Il verdetto per Vittoria.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un tradimento. C'è una decisione che riguarda tutte e due.",news:""}],
 win:{title:"Ilaria non tradisce Vittoria. Le hanno offerto Utrecht.",
  steps:["I «colloqui» erano tre selezioni in videochiamata con l'Università di Utrecht.","Hanna arriva proprio da lì: le ha corretto la candidatura. È a Trieste con marito e figli.","Il 14 novembre è arrivata l'offerta: tre anni, dal 12 gennaio, risposta entro il 30 novembre.","Ilaria ha scritto tre bozze a Vittoria senza inviarle. L'ultima finisce con «Vieni con me?»","Ha cercato una casa per due vicino a un porto. Sara è la sorella di Vittoria, Chiara un'agente, Marta una ex."],
  end:"Vittoria legge l'ultima bozza due volte. «Una casa vicino al porto», dice. «Ha cercato una casa vicino al porto.» Rimette il telefono sul tavolo. «Quando torna dalla piscina non le dico niente. Aspetto che me lo chieda lei. Ha tempo fino al 30.»"}
};
LIB.tune(16,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d2").lock="cas";
 e.pins={album:"1201",cas:"2135",note:"0314"};
 e.locks={album:{hint:"Il giorno in cui dovrei cominciare."},cas:{name:"File protetto",hint:"L'ora in cui sono uscita dall'istituto."},note:{hint:"Le stanze, con lo zero, poi le centinaia dell'affitto."}};
 e.spots=[
  {id:"s1",x:340,y:124,label:"Istituto",title:"Istituto di Fisica",sub:"",body:"Ilaria resta spesso fino a tardi. La collega nuova, Hanna, ha l'ufficio accanto."},
  {id:"s2",x:250,y:190,label:"Casa",title:"Casa di Ilaria e Vittoria",sub:"",body:"Sul frigo, una cartolina di Amsterdam di anni fa."},
  {id:"s3",x:186,y:214,label:"Porto",title:"Il porto",sub:"",body:"Qui lavora Vittoria, sulla barca di famiglia."}];
 LIB.hints(e,["Conta i colloqui in agenda.","Con chi erano?","La collega nuova arriva da...","In che cosa l'ha aiutata?","L'offerta ha una durata.","…e una data d'inizio.","C'è una scadenza per rispondere.","Chi ha firmato?","Tre bozze nascoste.","L'ultima finisce con una domanda.","Una casa cercata per quante persone?","Quanto costa? La scheda è chiusa.","Una professoressa ha aiutato.","Sara è di famiglia.","Un vecchio nome.","La casa è nascosta.","Pro e contro, sotto chiave.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
