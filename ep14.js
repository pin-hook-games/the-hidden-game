(function(){
/* episodio 14: Ritorno di fiamma (Palermo). Soluzione: Tradisce, con l'ex moglie Daniela. La chat sulla casa è la copertura. */
const SC={
 rest:()=>LIB.obj("#f0d9a0","🍝","Trattoria Lo Cascio, sala"),
 fish:()=>LIB.obj("#cfe0ea","🐟","Mercato, banco di Rosalia"),
 el:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Elena, dieci anni di nozze"),
 house:()=>LIB.obj("#f6e3b0","🏠","La casa di Mondello, in vendita"),
 cef:()=>LIB.two("#9cc7d6","#a0522d","#1f3a66","Cefalù · «Come vent'anni fa»"),
 rec:()=>LIB.doc("Baglio dei Mori, Cefalù","#b0764a",["Camera matrimoniale, 2 ospiti","25 ottobre: 160,00 €","15 novembre: 175,00 €","Pagato in contanti"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Palermo",
 water:[["M260 0Q300 80 400 110",60]],
 parks:[`<ellipse cx="90" cy="50" rx="50" ry="26" fill="#d7e2c9"/>`,`<ellipse cx="40" cy="200" rx="34" ry="40" fill="#d7c9b8"/>`],
 roads:["M150 20V240","M210 60V240","M60 130H300","M80 190H300","M150 80H240"],
 labels:[[60,44,"La Favorita"],[156,74,"Libertà"],[160,124,"Politeama"],[216,184,"Kalsa"],[156,236,"Stazione"],[250,150,"Cala"],[70,184,"Zisa"],[150,14,"verso Mondello"],[330,50,"Golfo"],[10,236,"Monreale"]],
 pins:[[230,200,"#33658a","trattoria",9,16],[110,150,"#33658a","Casa",-40,4],[176,88,"#d43d55","6 soste",9,4],[236,216,"#56666e","mercato",9,16]]});

EPISODES[14]={...LIB.apps("msg tel mail web gal map cal note bank drive",[["seg","Segnale","mic","#5b6ee1,#2b348f"]]),
 n:14,timer:1800,map:MAP,scenes:SC,owner:"Simone Lo Cascio",time:"09:30",date:"sab 22 nov",homeDate:"sabato 22 novembre",
 brief:"Elena ti ha portato il telefono del marito Simone, 47 anni, titolare di una trattoria alla Kalsa, a Palermo. Lui è al mercato del pesce e il telefono personale lo lascia sempre in cassa.",
 quote:"«Daniela, la sua ex moglie, è tornata a vivere a Palermo a settembre. Da allora lui è altrove con la testa. Ho letto la loro chat: parlano solo della vendita di una vecchia casa che hanno ancora in comune. Niente di niente. Sarà la mia gelosia. Me lo dica lei, così la smetto.»",
 chats:[
  {id:"elena",name:"Elena",sub:"Moglie",m:[
   ["mar 14:50",1,"Vado dal fornitore del pesce, torno per le cinque e mezza."],
   ["ven 14:45",1,"Fornitore. A dopo."],
   ["sab 15 · 08:00",1,"Parto per la fiera del vino a Marsala. Torno domani."],
   ["sab 15 · 08:02",0,"Da solo?"],
   ["sab 15 · 08:05",1,"Con chi vuoi che vada."]]},
  {id:"daniela",name:"Daniela",sub:"",m:[
   ["lun 10:00",0,"L'agenzia ha un'offerta per Mondello: 310.000. Che dici?"],
   ["lun 10:20",1,"Accettiamo. Sentiamo il notaio."],
   ["mer 11:00",0,"Rogito fissato per martedì 2 dicembre alle 11."],
   ["mer 11:05",1,"Ci sarò. Porto i documenti."]]},
  {id:"rosalia",name:"Rosalia pesce",sub:"",m:[
   ["ven 15:40",0,"Simone, ti ho aspettato alle tre al mercato come d'accordo. Non sei venuto."],
   ["ven 15:41",0,"È la terza volta questo mese. Se non ti interessa il pesce spada dimmelo, che lo do a un altro."],
   ["ven 18:10",1,"Scusami Rosalia, un imprevisto. Lunedì passo."]]},
  {id:"teresa",name:"Teresa",sub:"",m:[
   ["mar 17:30",0,"Simò, ti ho visto in via Libertà. Con Daniela. Sottobraccio."],
   ["mar 17:45",1,"Era per la casa."],
   ["mar 17:46",0,"Sono tua sorella, non una cretina. Per la casa ci si dà la mano, non il braccio."]]},
  {id:"marzia",name:"Marzia",sub:"",m:[
   ["gio 23:10",0,"Capo, martedì e venerdì pomeriggio ho aperto io la sala, di nuovo. Mi spettano gli straordinari."],
   ["gio 23:20",1,"Hai ragione. Te li metto in busta."]]},
  {id:"agata",name:"Agata",sub:"",m:[
   ["lun 09:00",0,"Simone, mancano le fatture dei fornitori di novembre. E ci sono due prelievi in contanti senza giustificativo, il 24 ottobre e il 14 novembre."],
   ["lun 09:30",1,"Spese mie. Mettile come personali."],
   ["lun 09:31",0,"Da commercialista te lo segno. Da amica di Elena preferisco non sapere."]]},
  {id:"vitale",name:"Dott.ssa Vitale",sub:"",m:[
   ["mer 12:00",0,"Buongiorno, confermo l'atto per il 2 dicembre. Mi servono i documenti di entrambi i venditori."],
   ["mer 12:10",1,"Li porta la signora Daniela in settimana."]]}
 ],
 lists:{
  seg:[
   {id:"x0",g:"Conversazioni",title:"1 conversazione protetta",sub:"Messaggi a scomparsa",meta:"Da aprire",body:"Una conversazione con i messaggi a scomparsa attivi.\nPer recuperarla bisogna sapere con chi è."},
   {id:"x1",g:"Recuperati · D.",u:"dan",title:"19 settembre",sub:"Non dovevamo",body:"lei: «Non dovevamo.»\ntu: «Lo so. Ma ti ho pensata per sette anni.»"},
   {id:"x2",g:"Recuperati · D.",u:"dan",title:"7 ottobre",sub:"Martedì e venerdì",body:"tu: «Martedì e venerdì dalle tre alle cinque da te. A casa dico che vado dal fornitore.»\nlei: «E per parlarci usiamo solo questa. Sull'altra chat, solo la casa.»"},
   {id:"x3",g:"Recuperati · D.",u:"dan",title:"14 novembre",sub:"Domani Cefalù",body:"tu: «Domani Cefalù, come a ottobre. A Elena ho detto Marsala.»\nlei: «Come vent'anni fa.»"},
   {id:"x4",g:"Recuperati · D.",u:"dan",title:"20 novembre",sub:"Dopo il rogito",body:"lei: «Dopo il 2 dicembre non avremo più la scusa della casa.»\ntu: «Allora dovrò scegliere.»"}],
  mail:[
   {id:"m1",title:"Agenzia Cuffaro",sub:"Proposta d'acquisto",meta:"17 novembre",body:"Villino di Mondello, proprietà Lo Cascio - Ferrante in parti uguali.\nOfferta: 310.000 €.\nSig.ra Cuffaro, agente immobiliare"},
   {id:"m2",title:"Studio notarile Vitale",sub:"Dati dei venditori",meta:"19 novembre",body:"Venditore 1: Lo Cascio Simone, residente alla Kalsa.\nVenditrice 2: Ferrante Daniela, residente in zona Libertà dal 10 settembre."},
   {id:"m3",title:"Fiera del vino di Marsala",sub:"Newsletter",meta:"1 novembre",body:"L'edizione di quest'anno si terrà dal 5 al 7 dicembre."}],
  map:[
   {id:"g1",g:"Soste ripetute · novembre",title:"Zona Libertà, lo stesso portone",sub:"6 soste",meta:"15:00 - 17:00",body:"Martedì 4, venerdì 7, martedì 11, venerdì 14, martedì 18, venerdì 21.\nSempre dalle 15 alle 17 circa."},
   {id:"g2",g:"Soste ripetute · novembre",title:"Mercato del pesce",sub:"1 sosta",meta:"lun 17",body:"Una sola visita nel mese, di lunedì mattina."},
   {id:"g3",g:"Fine settimana",title:"Cefalù",sub:"sab 15 - dom 16 novembre",meta:"Una notte",body:"Un baglio fuori dal paese. Stesso posto del 25 ottobre.\nNessuna visita a Marsala."}],
  bank:[
   {id:"b1",g:"Prelievi",title:"Prelievo in contanti",sub:"14 nov · − 180,00 €"},
   {id:"b2",g:"Prelievi",title:"Prelievo in contanti",sub:"24 ott · − 160,00 €"},
   {id:"b3",g:"Pagamenti",title:"Fioraio, zona Libertà",sub:"18 nov · − 35,00 €"},
   {id:"b4",g:"Pagamenti",title:"Mercato del pesce, Rosalia",sub:"17 nov · − 420,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ogni mar e ven · Fornitore",sub:"15:00 - 17:00",body:"Evento ricorrente creato il 7 ottobre."},
   {id:"c2",g:"Novembre",title:"Sab 15 · Marsala",sub:"Tutto il giorno",body:""},
   {id:"c3",g:"Dicembre",title:"Mar 2 · Rogito",sub:"11:00",body:"Notaio Vitale."}],
  web:[
   {id:"w1",g:"Cronologia",title:"baglio cefalù camera matrimoniale",sub:"13 nov"},
   {id:"w2",g:"Cronologia",title:"messaggi a scomparsa come si attivano",sub:"7 ott"},
   {id:"w3",g:"Cronologia",title:"tornare con la ex moglie dopo sette anni",sub:"20 nov"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese del primo messaggio su Segnale.\nLa nota qui sotto: il giorno del rogito e il numero delle soste di novembre."},
   {id:"n2",title:"Dopo il 2",lock:"note",body:"Dopo il rogito non avremo più scuse per vederci.\nElena mi ha tirato su quando ero a pezzi.\nDaniela è quella per cui ero a pezzi.\nDevo scegliere, e non ne sono capace."}],
  drive:[
   {id:"d1",title:"Ordini fornitori",sub:"Foglio",meta:"Novembre",body:"Pesce: Rosalia, consegna concordata il venerdì alle 15 al mercato.\nNovembre: tre ritiri saltati, uno fatto di lunedì."}],
  tel:[
   {id:"t1",title:"Daniela",sub:"ven 14:40 · in uscita, 1 min"},
   {id:"t2",title:"Rosalia pesce",sub:"ven 15:20 · persa"},
   {id:"t3",title:"Elena",sub:"sab 15 · 21:00 · persa"}]
 },
 photos:[
  {id:"p1",t:"gio",title:"Sala",sc:"rest"},
  {id:"p2",t:"lun 17 · 07:40",title:"Mercato",sc:"fish"},
  {id:"p3",t:"giu",title:"Con Elena",sc:"el"},
  {id:"p4",t:"set",title:"Mondello",sc:"house"},
  {id:"h1",t:"dom 16 nov",title:"Noi",sc:"cef",lock:"album"},
  {id:"h2",t:"dom 16 nov",title:"Conto",sc:"rec",lock:"album"}],
 pins:{note:"0206",album:"1909"},
 qs:[
  {t:"Mondello",q:"Elena ha letto la chat con Daniela. Dove si trova la casa che stanno vendendo?",any:["mondello"],show:"A Mondello",hint:"È nella chat e nella proposta dell'agenzia.",news:"Un villino in comune, un'offerta, un rogito. La chat è pulita. Fin troppo: non c'è nemmeno un «come stai»."},
  {t:"6",q:"Lasciamo le parole e guardiamo gli spostamenti. Quante soste ha fatto Simone allo stesso portone, a novembre?",a:["6","sei","6 soste","sei soste"],show:"Sei",hint:"Mappe tiene l'elenco delle soste ripetute.",news:"Sei volte nello stesso posto, sempre dalle tre alle cinque."},
  {t:"martedì e venerdì",q:"In quali giorni della settimana?",all:["mart","ven"],show:"Il martedì e il venerdì",hint:"Leggi le date delle soste.",news:"Gli stessi giorni in cui scrive a Elena «vado dal fornitore»."},
  {t:"3",q:"E il fornitore lo ha visto? Quante volte, questo mese, Simone non si è presentato da Rosalia?",a:["3","tre","3 volte","tre volte"],show:"Tre volte",hint:"Rosalia glielo rinfaccia, e c'è un foglio nel Drive.",news:"Rosalia vende pesce e lo aspetta invano il venerdì alle tre. È l'alibi, non l'amante."},
  {t:"Libertà",q:"In quale zona si trova quel portone?",any:["liberta"],show:"In zona Libertà",hint:"È nel titolo della sosta.",news:"Dall'altra parte della città rispetto al mercato."},
  {t:"Daniela",q:"Chi abita in zona Libertà da settembre? Scrivi il nome.",any:["daniela","ferrante"],show:"Daniela, la ex moglie",hint:"Il notaio ha scritto la residenza dei due venditori.",news:"Residente lì dal 10 settembre. Ora che sai con chi è, hai recuperato la conversazione a scomparsa nell'app Segnale.",unlock:"dan"},
  {t:"settembre",q:"Su Segnale la storia è un'altra. In quale mese è ricominciata?",any:["settembre"],show:"A settembre",hint:"Guarda la data del primo messaggio recuperato.",news:"Il 19 settembre, nove giorni dopo il ritorno di lei. «Ti ho pensata per sette anni.»"},
  {t:"la casa",q:"Si sono dati una regola: sull'altra chat si parla solo di...",any:["casa","vendita","mondello"],show:"Solo della casa",hint:"È nel messaggio del 7 ottobre.",news:"La chat che Elena ha letto è stata scritta perché qualcuno la leggesse."},
  {t:"Teresa",q:"Qualcuno li ha visti insieme per strada. Chi?",any:["teresa","sorella"],show:"Teresa, la sorella di Simone",hint:"Gli ha scritto martedì pomeriggio.",news:"«Per la casa ci si dà la mano, non il braccio.»"},
  {t:"Cefalù",q:"Sabato 15 ha detto a Elena che andava a Marsala. Dove è stato davvero?",any:["cefalu"],show:"A Cefalù",hint:"Mappe registra il fine settimana.",news:"Un baglio fuori dal paese. La fiera del vino di Marsala, peraltro, è a dicembre."},
  {t:"2",q:"Quante volte è stato in quel baglio?",a:["2","due","2 volte","due volte"],show:"Due: il 25 ottobre e il 15 novembre",hint:"Mappe dice «stesso posto del...». E ci sono due prelievi senza giustificativo.",news:"Due notti fuori, pagate in contanti. I prelievi sono del giorno prima."},
  {t:"335",q:"Nell'album privato c'è il conto del baglio. Quanto ha speso in tutto per le due notti?",a:["335","335,00","335 euro","335€"],show:"335 €",hint:"Il codice dell'album è la data del primo messaggio su Segnale, giorno e mese.",news:"Nell'album c'è anche una foto dei due a Cefalù, con la didascalia «Come vent'anni fa»."},
  {t:"commercialista",q:"Agata ha notato quei prelievi. Che lavoro fa?",any:["commercialist","contabil"],show:"La commercialista",hint:"Lo dice lei.",news:"Ed è amica di Elena. «Preferisco non sapere.»"},
  {t:"straordinari",q:"Marzia gli scrive alle undici di sera. Che cosa chiede?",any:["straordinar","soldi","pagat"],show:"Gli straordinari",hint:"Leggi il suo messaggio.",news:"La cameriera apre la sala al posto suo ogni martedì e venerdì pomeriggio. Vuole essere pagata, niente di più."},
  {t:"notaio",q:"E la dott.ssa Vitale? Qual è la sua professione?",any:["notai"],show:"La notaia",hint:"C'è una mail del suo studio.",news:"La notaia del rogito. La sig.ra Cuffaro è l'agente immobiliare."},
  {t:"il rogito",q:"Nella nota protetta c'è una scadenza. Dopo quale evento «non avranno più scuse»?",any:["rogito","vendita","atto"],show:"Dopo il rogito del 2 dicembre",hint:"Il codice è fatto di due numeri: il giorno del rogito e le soste di novembre.",news:"«Devo scegliere, e non ne sono capace.»"},
  {t:"Daniela",q:"Daniela, Rosalia, Teresa, Marzia, Agata, la dott.ssa Vitale, la sig.ra Cuffaro. Chi è l'amante di Simone? Se nessuna, scrivi NESSUNA.",any:["daniela"],show:"Daniela",hint:"La falsa pista era la chat. La pista vera è tutto il resto.",news:"La sola chat che Elena ha letto era l'unica innocente."},
  {t:"t",q:"Il verdetto per Elena.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"Non era gelosia.",news:""}],
 win:{title:"Simone tradisce Elena. Con la ex moglie Daniela.",
  steps:["La chat con Daniela parla solo della casa di Mondello perché così hanno deciso: per il resto usano Segnale, con i messaggi a scomparsa.","Ogni martedì e venerdì dalle 15 alle 17 Simone è in zona Libertà, dove Daniela abita dal 10 settembre. A casa dice «fornitore».","La fornitrice Rosalia lo ha aspettato invano tre volte.","Il 25 ottobre e il 15 novembre hanno dormito in un baglio a Cefalù. A Elena aveva detto Marsala.","La sorella Teresa li ha visti. Agata è la commercialista, Marzia la cameriera, Vitale la notaia."],
  end:"Elena annuisce piano. «Allora non era gelosia», dice. «Era memoria.» Guarda la data del rogito. «Il 2 dicembre vendono la casa. Dal 3 lui potrà scegliere con comodo. Io ho già scelto.»"}
};
LIB.tune(14,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="ord";
 e.pins={album:"1909",ord:"0212",note:"3515"};
 e.locks={album:{hint:"Il giorno e il mese del primo messaggio che scompare."},ord:{name:"File protetto",hint:"Il giorno del notaio, con lo zero, poi il mese."},note:{hint:"Le ultime due cifre del conto del baglio, poi l'ora delle consegne del venerdì."}};
 e.spots=[
  {id:"s1",x:176,y:88,label:"Zona Libertà",title:"Un portone in zona Libertà",sub:"",body:"Martedì e venerdì pomeriggio, dalle tre alle cinque, un'auto parcheggiata sempre nello stesso posto."},
  {id:"s2",x:236,y:216,label:"Mercato del pesce",title:"Mercato del pesce",sub:"★ 4,4",body:"Recensione di Rosalia: «Le consegne ai ristoranti le faccio io, il venerdì alle 15. I titolari li vedo una volta al mese.»"},
  {id:"s3",x:110,y:150,label:"Casa",title:"Casa di Simone ed Elena",sub:"Kalsa",body:"Elena ha letto una chat che parlava solo della casa di Mondello."},
  {id:"s4",x:364,y:36,label:"Cefalù →",title:"Baglio fuori Cefalù",sub:"★ 4,8",body:"Recensione: «Camere romantiche, cena a lume di candela. Torniamo sempre.»"}];
 LIB.hints(e,["Elena sa di una casa da vendere.","Il telefono si ricorda dove si ferma.","…e in quali giorni.","Il fornitore conferma, ma il file è chiuso.","Dove è quel portone?","Chi abita lì?","L'altra app racconta un'altra storia.","Una regola tra loro due.","Qualcuno li ha visti insieme.","Sabato 15 non era dove diceva.","Quante volte?","Il conto è nascosto.","Chi ha notato i prelievi?","Una collaboratrice scrive tardi.","Chi è la dottoressa?","Una data in una nota chiusa.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
