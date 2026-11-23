(function(){
/* episodio 18: Tutte le storie viste (Lecce). Soluzione: Tradisce, con Manuel (@manu.rdl). Si sono visti due domeniche a Gallipoli. */
const SC={
 sal:()=>LIB.obj("#f3e3e8","💅","Centro estetico, postazione 2"),
 die:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Diego, Sant'Oronzo"),
 kev:()=>LIB.two("#cfd8df","#7a3b5a","#2f6b4f","Con Kevin, pausa caffè"),
 st:()=>LIB.obj("#9cc7d6","🗼","Storia di @manu.rdl · il faro"),
 selfie:()=>LIB.two("#9cc7d6","#7a3b5a","#55606b","26 ottobre · stesso faro"),
 tk:()=>LIB.doc("Biglietto regionale","#2f8f6b",["Lecce → Gallipoli","domenica 16 novembre","Partenza 09:52","1 adulto, sola andata"])
};
const MAP=LIB.map({name:"Mappa stilizzata del Salento",
 water:[["M0 120Q20 200 90 260",70],["M360 0Q400 100 380 260",60]],
 roads:["M200 40L90 190","M200 40L330 150","M200 40V10","M190 60H240","M90 190L220 240"],
 extra:`<circle cx="200" cy="44" r="12" fill="#e2d6c4" stroke="#b0764a" stroke-width="3"/>`,
 labels:[[216,40,"Lecce"],[100,186,"Gallipoli"],[300,144,"Otranto"],[226,236,"Maglie"],[20,90,"Ionio"],[330,60,"Adriatico"],[150,110,"ferrovia"]],
 pins:[[200,44,"#33658a","Casa",-40,-8],[84,196,"#d43d55","26 ott e 16 nov",9,18],[334,154,"#56666e","la cugina",-60,18]]});

EPISODES[18]={...LIB.apps("msg tel mail web gal map cal note social bank",[["treni","Treni","train","#e2574c,#a02822"]]),
 n:18,timer:1800,map:MAP,scenes:SC,owner:"Alessia Greco",time:"13:10",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Diego ti ha portato il telefono della fidanzata Alessia, 26 anni, estetista a Lecce. Lei ha clienti fino alle due e tiene il telefono nell'armadietto, di cui lui conosce la combinazione.",
 quote:"«C'è un tizio su Scatto, @manu.rdl. Lei guarda ogni sua storia, appena esce, e risponde a tutte. Anche alle tre di notte, con me che dormo accanto. Le ho lette: battute, faccine, niente di più. Sarà solo uno che la fa ridere. Ma perché alle tre di notte?»",
 chats:[
  {id:"diego",name:"Diego",sub:"Fidanzato",m:[
   ["sab 25 ott",1,"Domani vado da Federica a Otranto, torno la sera."],
   ["sab 25 ott",0,"Salutami tua cugina."],
   ["sab 15 nov",1,"Domani di nuovo a Otranto, Fede ha bisogno di una mano col trasloco."],
   ["sab 15 nov",0,"Vengo anch'io ad aiutare?"],
   ["sab 15 nov",1,"No no, roba tra cugine."]]},
  {id:"fede",name:"Fede cugina",sub:"",m:[
   ["lun 17 · 09:00",0,"Ale ma domenica dov'eri? Diego mi ha scritto «grazie di aver ospitato Alessia». Io ti aspettavo da ottobre."],
   ["lun 17 · 09:20",1,"Ti spiego a voce. Reggimi il gioco, ti prego."],
   ["lun 17 · 09:21",0,"Gli ho risposto con un pollice. Ma non mi piace per niente. E quale trasloco?"]]},
  {id:"kevin",name:"Kevin",sub:"",m:[
   ["mar 13:00",0,"Amo stasera aperitivo? Porto Antonio, vuole conoscere la famosa collega."],
   ["mar 13:05",1,"Stasera sì! Finalmente lo vedo, questo fidanzato."],
   ["mar 13:06",0,"Ti avviso: è più bello di me. Non provarci 😂"]]},
  {id:"rizzo",name:"Sig. Rizzo",sub:"",m:[
   ["lun 18:00",0,"Alessia, da gennaio vorrei passarti a tempo indeterminato. Ne parliamo venerdì dopo la chiusura?"],
   ["lun 18:10",1,"Davvero? Grazie! Venerdì va benissimo."]]},
  {id:"mirko",name:"Mirko",sub:"",m:[
   ["dom 9 nov",0,"Hai ancora la mia felpa grigia. La rivoglio."],
   ["dom 9 nov",1,"Te la lascio in negozio. E non scrivermi più."]]},
  {id:"toto",name:"Totò",sub:"",m:[
   ["mer 20:00",0,"Sorè, mamma dice che domenica non sei andata da zia a Otranto. Che storia è?"],
   ["mer 20:30",1,"Totò fatti i fatti tuoi."]]},
  {id:"fabri",name:"Dj Fabri",sub:"",m:[
   ["mer 12:00",0,"Bella! Sabato serata al Sound. Ti metto in lista con 2 ingressi omaggio, tu e Diego."],
   ["mer 12:10",1,"Grazie Fabri, ti faccio sapere."]]}
 ],
 lists:{
  social:[
   {id:"s0",g:"Il tuo profilo",title:"@ale.greco",sub:"2.310 follower",body:"Bio: «Estetista. Lecce. Unghie e tramonti.»"},
   {id:"s1",g:"Attività",title:"Storie di @manu.rdl",sub:"Viste: tutte · Risposte: 12 a novembre",meta:"Ultima alle 03:12",body:"Da settembre hai visto ogni storia di questo account entro dieci minuti dalla pubblicazione.\nRisposte a novembre: 12.\nLa più tarda: mercoledì 19 alle 03:12."},
   {id:"s2",g:"Risposte alle storie · @manu.rdl",title:"Settembre e inizio ottobre",sub:"Battute",meta:"dal 14 set",body:"14 set · tu: «Ma chi te l'ha tagliata quella barba, un nemico?»\n22 set · lui: «Parla quella con le unghie da strega.»\n3 ott · tu: «Bello il faro. Dov'è?»\n3 ott · lui: «Gallipoli. Casa mia.»"},
   {id:"s3",g:"Risposte alle storie · @manu.rdl",title:"Da qui in poi: messaggi temporanei",sub:"Non più visibili",meta:"dal 20 ott",body:"Dal 20 ottobre la conversazione è passata ai messaggi temporanei.\nPer recuperarli bisogna sapere chi è davvero @manu.rdl."},
   {id:"v1",g:"Messaggi temporanei recuperati",u:"man",title:"20 ottobre",sub:"Ci vediamo?",body:"lui: «Basta faccine. Ci vediamo?»\ntu: «Domenica. Dico che vado da mia cugina.»"},
   {id:"v2",g:"Messaggi temporanei recuperati",u:"man",title:"27 ottobre",sub:"Ieri",body:"tu: «Ieri non volevo più risalire sul treno.»\nlui: «La prossima volta resti fino a sera.»"},
   {id:"v3",g:"Messaggi temporanei recuperati",u:"man",title:"17 novembre",sub:"Due volte",body:"lui: «Due volte in un mese e già mi manchi.»\ntu: «Anche tu. E mi sento uno schifo.»"},
   {id:"v4",g:"Messaggi temporanei recuperati",u:"man",title:"19 novembre · 03:12",sub:"Sabato vengo io",body:"lui: «Sabato 29 vengo io a Lecce.»\ntu: «Sei pazzo. Diego abita con me.»\nlui: «Appunto. È ora che tu scelga.»"},
   {id:"s4",g:"Profili",title:"@manu.rdl",sub:"Manuel R. · Gallipoli",meta:"Profilo",body:"«Manuel. Gallipoli. Barche d'estate, bar d'inverno.»\nStoria in evidenza: il faro, 26 ottobre."},
   {id:"s5",g:"Profili",title:"@kevin.hairlab",sub:"Kevin · Lecce",meta:"Profilo",body:"«Parrucchiere. Innamorato di Antonio dal 2022.»"}],
  treni:[
   {id:"r1",g:"I tuoi biglietti",title:"Lecce → Gallipoli",sub:"dom 16 nov · 09:52",meta:"Usato",body:"Regionale, 1 adulto. Partenza 09:52, arrivo 10:58."},
   {id:"r2",g:"I tuoi biglietti",title:"Gallipoli → Lecce",sub:"dom 16 nov · 19:40",meta:"Usato",body:"Regionale, 1 adulto. Partenza 19:40."},
   {id:"r3",g:"I tuoi biglietti",title:"Lecce → Gallipoli, andata e ritorno",sub:"dom 26 ott · 10:20",meta:"Usato",body:"Ritorno alle 16:05."},
   {id:"r4",g:"Storico",title:"Nessun biglietto per Otranto",sub:"Negli ultimi dodici mesi"}],
  map:[
   {id:"g1",g:"Cronologia · domenica 16",title:"Gallipoli, lungomare e faro",sub:"11:05 - 19:30",meta:"Permanenza",body:"Tutto il giorno a Gallipoli."},
   {id:"g2",g:"Cronologia · domenica 26 ottobre",title:"Gallipoli, lungomare e faro",sub:"11:30 - 15:50",meta:"Permanenza",body:"Poco più di quattro ore."},
   {id:"g3",g:"Luoghi",title:"Otranto",sub:"Ultima visita: agosto",body:"Nessuna visita a Otranto dopo agosto."}],
  mail:[
   {id:"m1",title:"Centro Estetico Rizzo",sub:"Proposta di contratto",meta:"17 novembre",body:"Trasformazione a tempo indeterminato dal 1° gennaio.\nIl titolare, Sig. Rizzo"}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Biglietti del treno",sub:"15 nov · − 9,80 €"},
   {id:"b2",g:"Movimenti",title:"Biglietti del treno",sub:"25 ott · − 9,80 €"},
   {id:"b3",g:"Movimenti",title:"Bar del faro, Gallipoli",sub:"16 nov · − 14,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Dom 16 · «Fede»",sub:"Tutto il giorno",body:""},
   {id:"c2",g:"Novembre",title:"Ven 21 · Rizzo",sub:"19:30",body:"Contratto!"},
   {id:"c3",g:"Novembre",title:"Sab 29 · ???",sub:"",body:"Non può venire qui."}],
  web:[
   {id:"w1",g:"Cronologia",title:"treni lecce gallipoli domenica",sub:"15 nov"},
   {id:"w2",g:"Cronologia",title:"messaggi temporanei scatto si possono recuperare",sub:"20 ott"},
   {id:"w3",g:"Cronologia",title:"amare due persone è possibile",sub:"mer 03:30"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora della mia risposta più tarda, quattro cifre.\nLa nota qui sotto: le due domeniche, in ordine."},
   {id:"n2",title:"Io",lock:"note",body:"Diego è buono e mi vuole bene davvero.\nManu mi fa ridere come non ridevo da anni.\nNon so scegliere, e intanto mento a tutti e due."}],
  tel:[
   {id:"t1",title:"Fede cugina",sub:"lun 17 · 09:25 · in uscita, 11 min"},
   {id:"t2",title:"Numero di Gallipoli",sub:"mer 19 · 03:20 · in entrata, 18 min"}]
 },
 photos:[
  {id:"p1",t:"lun",title:"Lavoro",sc:"sal"},
  {id:"p2",t:"ago",title:"Con Diego",sc:"die"},
  {id:"p3",t:"mar 19:30",title:"Kevin",sc:"kev"},
  {id:"p4",t:"3 ott",title:"Salvata",sc:"st"},
  {id:"h1",t:"26 ott · 13:10",title:"Noi",sc:"selfie",lock:"album"},
  {id:"h2",t:"dom 16",title:"Biglietto",sc:"tk",lock:"album"}],
 pins:{note:"2616",album:"0312"},
 qs:[
  {t:"12",q:"Diego ha ragione sulle storie? A quante storie di @manu.rdl ha risposto Alessia a novembre?",a:["12","dodici","12 storie"],show:"A dodici",hint:"Scatto tiene il conto nell'attività.",news:"Le guarda tutte entro dieci minuti e risponde a una su due."},
  {t:"03:12",q:"A che ora è la risposta più tarda?",all:["312"],show:"Alle 03:12",hint:"È nella stessa scheda.",news:"Mercoledì notte, con Diego che dormiva accanto."},
  {t:"settembre",q:"Quando è cominciato lo scambio? Scrivi il mese.",any:["settembre"],show:"A settembre",hint:"Leggi le prime risposte alle storie.",news:"Barba, unghie, un faro. Battute e basta: è quello che ha letto Diego."},
  {t:"20",q:"Poi qualcosa cambia. Da quale giorno di ottobre i messaggi diventano temporanei?",all:["20"],show:"Dal 20 ottobre",hint:"È scritto dove la conversazione si interrompe.",news:"Da quel giorno i messaggi si cancellano da soli. Diego ha letto solo la parte che doveva restare."},
  {t:"Otranto",q:"Domenica 26 ottobre e domenica 16 novembre: dove ha detto a Diego di andare?",any:["otranto"],show:"A Otranto, dalla cugina",hint:"È nella chat con lui.",news:"Due domeniche «da Federica», la seconda per un trasloco."},
  {t:"Gallipoli",q:"E dove è stata davvero? Scrivi la città.",any:["gallipoli"],show:"A Gallipoli",hint:"Mappe e l'app dei treni.",news:"Dall'altra parte del Salento. Nessun biglietto per Otranto negli ultimi dodici mesi."},
  {t:"16",q:"La cugina le chiede «ma domenica dov'eri?». Di quale domenica di novembre parla?",all:["16"],show:"Di domenica 16",hint:"Gliel'ha scritto il lunedì dopo.",news:"Federica non la vede da ottobre, e non sta traslocando. Diego l'ha ringraziata per un'ospitalità mai avvenuta."},
  {t:"09:52",q:"A che ora è partito il treno di domenica 16?",all:["952"],show:"Alle 09:52",hint:"Il biglietto è nell'app Treni.",news:"Andata alle 09:52, ritorno alle 19:40. Un giorno intero."},
  {t:"Manuel",q:"Chi è @manu.rdl? Scrivi il nome vero.",any:["manuel"],show:"Manuel, di Gallipoli",hint:"Apri il suo profilo.",news:"Barche d'estate, bar d'inverno. Ora che sai chi è, hai recuperato i messaggi temporanei.",unlock:"man"},
  {t:"il faro",q:"Nella storia in evidenza di Manuel e in una foto salvata da lei c'è lo stesso sfondo. Che cosa?",any:["faro"],show:"Il faro di Gallipoli",hint:"Galleria e profilo di lui.",news:"«Bello il faro. Dov'è?» A ottobre lo chiedeva. A novembre ci era già stata due volte."},
  {t:"2",q:"Quante volte si sono visti di persona?",a:["2","due","2 volte","due volte"],show:"Due",hint:"Lo dice lui nei messaggi recuperati, e tornano i biglietti.",news:"«Due volte in un mese e già mi manchi.»"},
  {t:"29",q:"Che cosa ha annunciato Manuel alle 03:12? In quale giorno vuole venire a Lecce?",all:["29"],show:"Sabato 29",hint:"È l'ultimo messaggio recuperato.",news:"«È ora che tu scelga.» Ecco che cosa la teneva sveglia alle tre."},
  {t:"Antonio",q:"Controlliamo gli altri. Kevin la chiama «amo». Come si chiama il suo fidanzato?",any:["antonio"],show:"Antonio",hint:"Lo scrive in chat e sul profilo.",news:"Kevin è il collega parrucchiere, innamorato di Antonio dal 2022."},
  {t:"contratto a tempo indeterminato",q:"Il Sig. Rizzo vuole vederla «dopo la chiusura». Che cosa le propone?",any:["indeterminato","contratto","assunzion"],show:"Il contratto a tempo indeterminato",hint:"C'è anche una mail.",news:"Il titolare del centro estetico. Una buona notizia, per una volta."},
  {t:"la felpa",q:"E Mirko? Che cosa rivuole?",any:["felpa"],show:"La felpa grigia",hint:"Leggi il suo messaggio.",news:"Un ex. Totò invece è il fratello, e Dj Fabri offre due ingressi: uno per lei e uno per Diego."},
  {t:"26 ottobre",q:"Nell'album privato c'è un selfie in due. Di che giorno è? Giorno e mese.",all:["26","ott"],show:"Del 26 ottobre",hint:"Il codice dell'album è l'ora della risposta più tarda, quattro cifre.",news:"Lei e Manuel davanti al faro, la prima domenica. Accanto, il biglietto della seconda."},
  {t:"2",q:"Nella nota protetta lo ammette. A quante persone sta mentendo?",a:["2","due","a due","tutti e due","a tutti e due"],show:"A tutti e due",hint:"Il codice sono le due domeniche, in ordine.",news:"«Non so scegliere, e intanto mento a tutti e due.»"},
  {t:"Manuel",q:"Manuel, Kevin, il Sig. Rizzo, Mirko, Totò, Dj Fabri. Chi è l'amante di Alessia? Se nessuno, scrivi NESSUNO.",any:["manuel","manu"],show:"Manuel",hint:"Con chi era a Gallipoli?",news:"È nata online, ma non è rimasta online."},
  {t:"t",q:"Il verdetto per Diego.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"Non erano solo faccine.",news:""}],
 win:{title:"Alessia tradisce Diego. Con Manuel.",
  steps:["Fino a inizio ottobre le risposte alle storie di @manu.rdl sono solo battute. Dal 20 ottobre passano ai messaggi temporanei.","Domenica 26 ottobre e domenica 16 novembre Alessia ha preso il treno per Gallipoli, dicendo a Diego che andava dalla cugina a Otranto.","La cugina Federica non la vede da ottobre, e lo ha scritto.","Nell'album c'è un selfie con Manuel davanti allo stesso faro delle sue storie.","Kevin è un collega fidanzato con Antonio, Rizzo il titolare, Mirko un ex, Totò il fratello."],
  end:"Diego guarda il selfie davanti al faro. «Le tre di notte», dice. «Almeno adesso so perché.» Poi legge l'ultimo messaggio. «Sabato 29 viene qui. Bene. Così lo conosco anch'io.»"}
};
LIB.tune(18,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.treni.find(x=>x.id==="r1").lock="tre";
 e.pins={album:"0312",tre:"2111",note:"2658"};
 e.locks={album:{hint:"Il minuto della mia risposta più tarda."},tre:{name:"Biglietto protetto",hint:"Il giorno del mio contratto, poi il mese."},note:{hint:"Il giorno di quel selfie, poi i minuti in cui arriva il treno."}};
 e.spots=[
  {id:"s1",x:84,y:196,label:"Gallipoli",title:"Lungomare di Gallipoli",sub:"Faro",body:"Recensione: «Al tramonto, sotto il faro, ci sono solo coppie.»"},
  {id:"s2",x:200,y:44,label:"Casa",title:"Casa di Alessia e Diego",sub:"Lecce",body:"Diego lavora la domenica mattina."},
  {id:"s3",x:334,y:154,label:"La cugina",title:"Casa della cugina",sub:"",body:"La cugina che chiede sempre «ma domenica dov'eri?»."},
  {id:"s4",x:380,y:236,label:"Otranto",title:"Otranto",sub:"",body:"L'amica Fede ci abita. Ad Alessia non risulta nessuna visita da agosto."}];
 LIB.hints(e,["Conta le storie a cui ha risposto.","La risposta più tarda ha un orario.","Quando è cominciato?","Un giorno cambia il tono.","Che cosa ha detto a Diego?","Dove è stata davvero?","La cugina chiede di una domenica.","Il treno ha un orario, ma il biglietto è chiuso.","Un nome dietro un soprannome.","Un luogo in due foto.","Quante volte di persona?","Un annuncio notturno.","Un ragazzo che la chiama «amo».","Il titolare vuole vederla.","Un ex rivuole qualcosa.","Un selfie nascosto.","Una confessione chiusa.","Ripassa chi sono tutti.","Il verdetto."]);
});
})();
