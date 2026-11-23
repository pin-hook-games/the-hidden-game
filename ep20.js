(function(){
/* episodio 20: Doppia vita (Genova e Livorno). Soluzione: Tradisce. La donna delle foto è la moglie Elena, sposata nel 2016 a Livorno.
   L'amante, senza saperlo, è Camilla: la cliente, che sta per sposarlo. */
const SC={
 cam:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Camilla, Boccadasse"),
 wom:()=>LIB.two("#f0d9a0","#a0522d","#1f3a66","Terrazza Mascagni, ottobre"),
 car:()=>LIB.car("#55606b","campionario"),
 pl:()=>LIB.doc("Nozze Costa - Parodi","#c0417a",["Sabato 13 dicembre, ore 11","Genova, Palazzo Tursi","Manca: certificato di","stato libero dello sposo"]),
 wed:()=>LIB.two("#f3e3e8","#fbf7ee","#231a1e","Livorno · 14 maggio 2016"),
 draw:()=>LIB.obj("#f6e3b0","🖍️","Viola, 6 anni: «Per papà»")
};
const MAP=LIB.map({name:"Mappa stilizzata della costa tra Genova e Livorno",
 water:[["M0 110Q120 150 200 190Q280 230 330 260",120]],
 roads:["M40 40Q160 60 260 120Q330 160 380 240","M40 40V10","M380 240V200"],
 extra:`<circle cx="60" cy="44" r="12" fill="#e2d6c4" stroke="#b0764a" stroke-width="3"/><circle cx="372" cy="226" r="12" fill="#e2d6c4" stroke="#b0764a" stroke-width="3"/>`,
 labels:[[78,34,"Genova"],[100,60,"Boccadasse"],[190,84,"La Spezia"],[300,150,"Pisa"],[316,216,"Livorno"],[330,250,"Ardenza"],[90,190,"Mar Ligure"],[220,112,"due ore d'auto"]],
 pins:[[70,56,"#33658a","lun - ven",9,22],[366,238,"#d43d55","ogni fine settimana",-112,-18]]});

EPISODES[20]={...LIB.apps("msg tel mail web gal map cal note bank drive",[["acc","Account","users","#7c8aa0,#39445a"]]),
 n:20,timer:1800,map:MAP,scenes:SC,owner:"Riccardo Costa",time:"07:00",date:"sab 22 nov",homeDate:"sabato 22 novembre",
 brief:"Camilla ti ha portato il telefono di Riccardo, 39 anni, rappresentante di attrezzature nautiche. Si sposano a Genova tra tre settimane. Lui è partito all'alba per l'ennesima trasferta a Livorno e ha dimenticato sul comodino il telefono che usa a Genova.",
 quote:"«Troppe trasferte a Livorno, sempre nel fine settimana. E una donna, sempre la stessa, che compare nelle sue foto: bionda, sui quarant'anni. Lui dice che è una cliente. Mancano tre settimane al matrimonio. Voglio sapere chi è la sua amante prima di dire sì.»",
 chats:[
  {id:"camilla",name:"Camilla",sub:"Fidanzata",m:[
   ["ven 21:00",1,"Domattina parto presto per Livorno. Torno lunedì sera."],
   ["ven 21:02",0,"Ancora? Abbiamo la prova del menù domenica."],
   ["ven 21:05",1,"Amore, è lavoro. Falla con tua madre."]]},
  {id:"marta",name:"Marta",sub:"",m:[
   ["gio 10:00",0,"Riccardo, per le nozze manca solo il tuo certificato di stato libero. Il Comune lo aspetta da un mese: senza quello non si celebra."],
   ["gio 10:30",1,"Lo porto la settimana prossima."],
   ["gio 10:31",0,"Lo dici da ottobre. Da wedding planner te lo ripeto: è l'unico documento che non posso procurarti io."]]},
  {id:"parodi",name:"Sig.ra Parodi",sub:"",m:[
   ["mer 18:00",0,"Riccardo caro, ti ho fatto sistemare l'orologio del mio povero marito. Vorrei che lo portassi all'altare."],
   ["mer 18:20",1,"Signora, non so che cosa dire."],
   ["mer 18:21",0,"Dì che tratterai bene mia figlia."]]},
  {id:"giorgia",name:"Giorgia",sub:"",m:[
   ["lun 09:00",0,"Il capo chiede perché prendi ferie tutti i lunedì da un anno. E perché a Livorno fatturi a un cliente solo. Io ti copro, ma dammi una versione."],
   ["lun 09:20",1,"Motivi di famiglia. Grazie Gio."]]},
  {id:"bini",name:"Dott.ssa Bini",sub:"",m:[
   ["mar 11:00",0,"Buongiorno Costa, per il cantiere nautico confermo l'ordine di dicembre. Ci vediamo il primo martedì del mese, come sempre."],
   ["mar 11:10",1,"A martedì 2, dottoressa."]]},
  {id:"sara",name:"Sara",sub:"",m:[
   ["dom 16 · 12:00",0,"Riccardo, sono a Livorno dai miei zii. Ti ho appena visto sul lungomare dell'Ardenza con una bionda e una bambina per mano. Sono la testimone di Camilla. Hai ventiquattr'ore per spiegarmi."],
   ["dom 16 · 12:40",1,"È una cliente con sua figlia. Non dire niente a Cami, la agiteresti per nulla."],
   ["dom 16 · 12:41",0,"Una cliente che ti bacia?"]]}
 ],
 lists:{
  acc:[
   {id:"x0",g:"Account su questo telefono",title:"Riccardo · Genova",sub:"In uso",meta:"Principale",body:"Rubrica: 212 contatti."},
   {id:"x1",g:"Account su questo telefono",title:"Secondo account",sub:"Disconnesso sabato alle 06:40",meta:"Protetto",body:"Un secondo account, con un'altra rubrica e un altro calendario.\nPer entrare bisogna sapere chi è la donna delle foto."},
   {id:"y1",g:"Secondo account · rubrica",u:"acc",title:"Casa",sub:"Elena",body:"Contatto salvato come «Casa».\nUltimo messaggio, venerdì: «Viola ti aspetta sveglia. Io pure. Guida piano.»"},
   {id:"y2",g:"Secondo account · rubrica",u:"acc",title:"Viola ❤",sub:"Tablet di Viola",body:"Ultimo vocale, giovedì: «Papà sabato mi porti al mare anche se fa freddo? Ho fatto un disegno per te. Ho sei anni e mezzo, lo so scrivere il tuo nome.»"},
   {id:"y3",g:"Secondo account · rubrica",u:"acc",title:"Suocera Livorno",sub:"Madre di Elena",body:"Ultimo messaggio: «Domenica pranzo da noi. Nove anni di matrimonio e ancora non hai imparato a venire puntuale.»"},
   {id:"y4",g:"Secondo account · calendario",u:"acc",title:"Verde: Livorno · Blu: Genova",sub:"Novembre",body:"Giorni verdi a novembre: tutti i sabati, le domeniche e i lunedì.\nGiorni blu: dal martedì al venerdì.\nSabato 13 dicembre è segnato in tutti e due i colori."}],
  mail:[
   {id:"m1",title:"Comune di Genova",sub:"Pubblicazioni di matrimonio",meta:"20 ottobre",body:"Per completare la pratica manca il certificato di stato libero del sig. Costa Riccardo.\nIn mancanza, il matrimonio del 13 dicembre non potrà essere celebrato."},
   {id:"m2",title:"Scuola dell'infanzia Ardenza",sub:"Colloquio con i genitori",meta:"17 novembre",body:"Gentili sig. Costa e sig.ra Martini, il colloquio per Viola è fissato per lunedì 24 novembre alle 8:30."}],
  map:[
   {id:"g1",g:"Fine settimana · ottobre e novembre",title:"Livorno, Ardenza, lo stesso indirizzo",sub:"6 fine settimana",meta:"Dal sabato al lunedì",body:"Negli ultimi due mesi: sei fine settimana, sempre allo stesso indirizzo dell'Ardenza, dal sabato mattina al lunedì sera."},
   {id:"g2",g:"Fine settimana · ottobre e novembre",title:"Genova",sub:"2 fine settimana",body:"Soltanto due fine settimana passati a Genova."},
   {id:"g3",g:"Clienti a Livorno",title:"Cantiere nautico, porto",sub:"1 visita al mese, di martedì",body:"L'unica sosta di lavoro a Livorno: il primo martedì del mese, un'ora."}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Scuola dell'infanzia Ardenza, retta",sub:"5 nov · − 210,00 €"},
   {id:"b2",g:"Movimenti",title:"Acconto ricevimento, Genova",sub:"3 nov · − 1.500,00 €"},
   {id:"b3",g:"Movimenti",title:"Mutuo casa, Livorno",sub:"1 nov · − 640,00 €"},
   {id:"b4",g:"Movimenti",title:"Affitto, Genova",sub:"1 nov · − 720,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sab 22 - lun 24 · Livorno",sub:"Lavoro",body:""},
   {id:"c2",g:"Dicembre",title:"Mar 2 · Dott.ssa Bini",sub:"10:00",body:"Cantiere."},
   {id:"c3",g:"Dicembre",title:"Sab 13 · Nozze",sub:"11:00",body:"Palazzo Tursi."}],
  web:[
   {id:"w1",g:"Cronologia",title:"certificato di stato libero se già sposato",sub:"gio 23:50"},
   {id:"w2",g:"Cronologia",title:"bigamia che cosa si rischia",sub:"gio 23:58"},
   {id:"w3",g:"Cronologia",title:"come annullare un matrimonio senza dire perché",sub:"ven 00:20"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'anno delle mie nozze. Quelle vere.\nLa nota qui sotto: giorno e mese delle prossime."},
   {id:"n2",title:"Senza uscita",lock:"note",body:"A Elena dico che a Genova ci sto per lavoro.\nA Camilla dico che a Livorno ci vado per lavoro.\nIl 13 dicembre una delle due lo scoprirà. O tutte e due.\nNon so più come uscirne."}],
  drive:[
   {id:"d1",title:"Clienti Toscana",sub:"Foglio aziendale",meta:"Ottobre",body:"Livorno: 1 cliente attivo, il cantiere nautico della dott.ssa Bini.\nVisite previste: una al mese."},
   {id:"d2",title:"Stato di famiglia.pdf",sub:"Comune di Livorno",meta:"Scansione del 2024",body:"Costa Riccardo, stato civile: coniugato.\nConiuge: Martini Elena. Figlia: Costa Viola.\nResidenza: Livorno, quartiere Ardenza."}],
  tel:[
   {id:"t1",title:"Camilla",sub:"ven 20:55 · in entrata, 6 min"},
   {id:"t2",title:"Sara",sub:"dom 16 · 12:45 · persa"},
   {id:"t3",title:"Comune di Genova",sub:"19 nov · persa"}]
 },
 photos:[
  {id:"p1",t:"set",title:"Con Cami",sc:"cam"},
  {id:"p2",t:"ott",title:"Livorno",sc:"wom"},
  {id:"p3",t:"lun",title:"Lavoro",sc:"car"},
  {id:"p4",t:"gio",title:"Da Marta",sc:"pl"},
  {id:"h1",t:"2016",title:"Noi",sc:"wed",lock:"album"},
  {id:"h2",t:"dom 16",title:"Viola",sc:"draw",lock:"album"}],
 pins:{note:"1312",album:"2016"},
 qs:[
  {t:"6",q:"Camilla dice «troppe trasferte». Quanti fine settimana ha passato Riccardo a Livorno negli ultimi due mesi?",a:["6","sei","6 fine settimana"],show:"Sei",hint:"Mappe li conta per te.",news:"Sei su otto, sempre dal sabato al lunedì, sempre allo stesso indirizzo."},
  {t:"Ardenza",q:"In quale quartiere di Livorno?",any:["ardenza"],show:"All'Ardenza",hint:"È nella stessa riga.",news:"Un quartiere di case, non di alberghi."},
  {t:"1",q:"Sarà lavoro? Quanti clienti attivi ha a Livorno?",a:["1","uno","un cliente","1 cliente","uno solo"],show:"Uno solo",hint:"C'è un foglio aziendale nel Drive, e lo dice anche una collega.",news:"Il cantiere nautico della dott.ssa Bini: un'ora, il primo martedì del mese. I fine settimana non c'entrano."},
  {t:"lunedì",q:"Giorgia lo copre con il capo. Quale giorno della settimana prende sempre di ferie?",any:["lunedi"],show:"Il lunedì",hint:"Lo scrive lei.",news:"Da un anno. Giorgia è una collega e chiede solo «una versione»."},
  {t:"Elena",q:"Chi è la donna delle foto? Scrivi il nome. Lo trovi in un documento.",any:["elena","martini"],show:"Elena Martini",hint:"Nel Drive c'è la scansione di un documento del Comune di Livorno.",news:"Ora che sai chi è, sei entrato nel secondo account del telefono: un'altra rubrica e un altro calendario.",unlock:"acc"},
  {t:"Casa",q:"Con quale nome è salvata Elena nel secondo account?",a:["casa"],show:"«Casa»",hint:"Apri la rubrica del secondo account.",news:"Non «amore», non un nome finto. «Casa»."},
  {t:"sua figlia",q:"Nel secondo account c'è «Viola ❤». Chi è per Riccardo?",any:["figlia"],show:"Sua figlia",hint:"Ascolta come lo chiama.",news:"Sei anni e mezzo. La scuola dell'infanzia dell'Ardenza convoca «i genitori»: il sig. Costa e la sig.ra Martini."},
  {t:"coniugato",q:"Che cosa c'è scritto alla voce «stato civile» nel documento del Comune di Livorno?",any:["coniugat","sposat"],show:"Coniugato",hint:"Rileggi lo stato di famiglia nel Drive.",news:"Elena non è l'amante. È la moglie."},
  {t:"2016",q:"In quale anno si sono sposati? Lo dice la suocera, a modo suo, e ti serve per l'album.",a:["2016"],show:"Nel 2016",hint:"La suocera parla di nove anni di matrimonio. Fai il conto.",news:"Nove anni, una figlia, un mutuo. A Livorno Riccardo ha una famiglia."},
  {t:"Livorno",q:"Nell'album privato c'è la foto delle nozze. In quale città?",any:["livorno"],show:"A Livorno, il 14 maggio 2016",hint:"Il codice dell'album è l'anno che hai appena trovato.",news:"Accanto c'è un disegno di Viola, con scritto «Per papà»."},
  {t:"stato libero",q:"Torniamo a Genova. Quale documento Riccardo non ha ancora consegnato per le nozze?",any:["statolibero","libero"],show:"Il certificato di stato libero",hint:"Lo chiedono il Comune e la wedding planner.",news:"Non lo consegna da ottobre perché non può averlo: è già sposato. Marta è la wedding planner."},
  {t:"10",q:"Nel secondo calendario i giorni sono di due colori. Quanti giorni «verdi» ci sono stati finora a novembre, compreso oggi? Verde vuol dire sabato, domenica e lunedì.",a:["10","dieci","10 giorni"],show:"Dieci",hint:"Novembre comincia di sabato. Conta sabati, domeniche e lunedì fino a sabato 22.",news:"Verde Livorno, blu Genova. Due vite sullo stesso calendario."},
  {t:"lavoro",q:"La nota protetta è una confessione. Quale scusa usa con tutte e due?",any:["lavoro"],show:"Il lavoro",hint:"Il codice è la data delle prossime nozze, giorno e mese.",news:"«Il 13 dicembre una delle due lo scoprirà. O tutte e due.»"},
  {t:"un orologio",q:"La signora Parodi gli ha fatto un regalo per l'altare. Che cosa?",any:["orologio"],show:"L'orologio del marito",hint:"Leggi la sua chat.",news:"La madre di Camilla. Gli ha chiesto una cosa sola: trattare bene sua figlia."},
  {t:"testimone",q:"Sara lo ha visto all'Ardenza con una bionda e una bambina. Che ruolo ha Sara alle nozze?",any:["testimone"],show:"È la testimone di Camilla",hint:"Lo scrive lei.",news:"Gli ha dato ventiquattr'ore sei giorni fa. Non ha ancora parlato."},
  {t:"Camilla",q:"Camilla ti ha chiesto chi è l'amante. Elena, Marta, Giorgia, la dott.ssa Bini, Sara, la signora Parodi, Camilla: chi è, in questa storia, «l'altra»?",any:["camilla","cliente"],show:"Camilla",hint:"Chi delle due è arrivata dopo, senza sapere dell'altra?",news:"La moglie è Elena, dal 2016. L'altra, senza saperlo, è la donna che ti ha assunto."},
  {t:"c",q:"Chi è la persona tradita?",o:[["a","Soltanto Camilla"],["b","Soltanto Elena"],["c","Elena e Camilla, tutte e due"],["d","Nessuna: è un equivoco"]],a:"c",show:"Elena e Camilla, tutte e due",hint:"Chi delle due sa dell'altra?",news:"Resta il verdetto."},
  {t:"t",q:"Il verdetto per Camilla.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"Due volte.",news:""}],
 win:{title:"Riccardo tradisce. Ma l'amante è Camilla.",
  steps:["Sei fine settimana su otto all'Ardenza, sempre allo stesso indirizzo. A Livorno ha un solo cliente, che vede un'ora al mese.","La donna delle foto è Elena Martini: sua moglie dal 14 maggio 2016. Hanno una figlia, Viola, di sei anni e mezzo.","Il secondo account del telefono è la vita di Livorno: «Casa», la suocera, il calendario verde.","Il certificato di stato libero per le nozze di Genova non arriva da ottobre, perché non può esistere.","Marta è la wedding planner, Giorgia una collega, la dott.ssa Bini la cliente, Sara la testimone che lo ha visto."],
  end:"Camilla non parla per un minuto intero. «Io cercavo l'amante», dice. «Ero io.» Si toglie l'anello e lo posa sul tavolo. «Mi serve un numero di telefono. Quello salvato come Casa. Credo che io e la signora Elena dobbiamo prendere un caffè.»  FINE DELLA PRIMA STAGIONE."}
};
LIB.tune(20,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 const d2=e.lists.drive.find(x=>x.id==="d2");d2.lock="sta";d2.body+="\nFiglia: Viola, nata nel 2019.";
 e.pins={album:"2016",sta:"0106",note:"1619"};
 e.locks={album:{hint:"L'anno delle nozze vere."},sta:{name:"File protetto",hint:"I clienti che ho davvero laggiù, con lo zero, poi i fine settimana che ci passo."},note:{hint:"La fine dell'anno delle nozze vere, poi quella dell'anno in cui è nata lei."}};
 e.spots=[
  {id:"s1",x:366,y:238,label:"Ardenza",title:"Livorno, Ardenza",sub:"",body:"Lo stesso portone, quasi ogni fine settimana. Sul citofono: «Costa · Martini»."},
  {id:"s2",x:70,y:56,label:"Genova",title:"Genova",sub:"",body:"Dal lunedì al venerdì. Palazzo Tursi, il 13 dicembre, è prenotato per un matrimonio."},
  {id:"s3",x:330,y:200,label:"Cantiere nautico",title:"Cantiere nautico",sub:"Livorno",body:"L'unico cliente toscano. Riccardo ci passa il primo martedì del mese, non nei fine settimana."}];
 LIB.hints(e,["Conta i fine settimana fuori.","In quale quartiere?","Quanto lavoro c'è davvero laggiù?","Una collega lo copre.","Un documento dice un nome.","Come l'ha salvata nell'altro account?","Chi è Viola?","Un documento dice lo stato civile, ma è chiuso.","La suocera conta gli anni.","Una foto nascosta.","Un certificato che manca.","Due colori nel calendario.","Una confessione chiusa.","Un regalo per l'altare.","Qualcuno l'ha visto.","Ripassa chi sono tutte.","Chi è tradita?","Il verdetto."]);
});
})();
