(function(){
/* Omicidi 20: Il testimone (Ancona). Soluzione: «zio» Tonino Paolucci, il vecchio pescivendolo del porto che tutti adorano.
   Rubava gasolio dalle cisterne della cooperativa con la sua Ape; Sergio Pace, guardia notturna del varco 3, lo aveva scoperto e lo aspettava quella notte.
   Davide, il rider che ha trovato il corpo, alle 2:01 ha fotografato l'Ape che quasi lo investiva uscendo dal varco.
   False piste: Davide stesso (piccoli precedenti, era lì), il collega Marco (litigi sui turni, a casa con il citofono che lo registra), i ragazzi del muretto (a Senigallia).
   Codici: album = 0201; registro varco = varco 03 + valutazione 49 = 0349; nota = 06 (cisterna) + 35 (ingresso dell'Ape alle 1:35) = 0635. */
const SC={
 ape:()=>LIB.doc("Foto · 2:01 · varco 3","#a02822",["Un'Ape che esce di corsa","sulla fiancata: «Pescheria Tonino»","nel cassone: taniche blu","(scattata da Davide)"]),
 por:()=>LIB.obj("#1c2633","⚓","Il porto di notte, banchina 3"),
 sis:()=>LIB.two("#9cc7d6","#7a3b5a","#33658a","Con Giulia, mia sorella"),
 piz:()=>LIB.obj("#f0d9a0","🍕","L'ordine delle 1:20, mai consegnato"),
 poz:()=>LIB.doc("Foto · 2:12","#55606b",["Pozza di gasolio sull'asfalto","davanti alla cisterna n. 6","odore fortissimo","(Davide aspettava il 112)"]),
 ton:()=>LIB.group(3,"Festa del pesce, zio Tonino offre a tutti","#2f6b4f")
};
const MAP=LIB.city("Ancona",[[40,52,"Passetto"],[132,132,"Centro"],[276,132,"Stazione"],[40,232,"Porto antico"],[300,40,"Guasco"],[200,200,"Banchine"]],[],[["M0 200Q200 160 400 210",70]]);

LIB.add(40,["Il testimone","Giulia vuole dimostrare che suo fratello Davide ha solo trovato il corpo","Ancona"],{
 map:MAP,scenes:SC,owner:"Davide Rinaldi",time:"15:00",date:"dom 23 nov",homeDate:"domenica 23 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["corse","Rapido","two_wheeler","#f0a63a,#c2410c"]],
 late:"La polizia ha chiesto di nuovo il telefono di Davide. Giulia ha dovuto consegnarlo.",
 brief:"Sabato alle 2:08 Davide Rinaldi, 19 anni, rider, ha chiamato il 112: al varco 3 del porto di Ancona la guardia notturna, Sergio Pace, era a terra senza vita. Davide era lì per consegnare una pizza. Ha due piccoli precedenti per furto, e il portafoglio di Sergio è sparito. La polizia sospetta di lui. Sua sorella Giulia ti ha portato il suo telefono.",
 quote:"«Mio fratello ha fatto delle stupidaggini a sedici anni, è vero. Ma uno che ruba non chiama il 112 e aspetta la polizia. Lui dice che ha visto qualcosa, ma era sotto shock e non si ricorda. Il telefono si ricorda per lui.»",
 locks:{
  album:{hint:"Il minuto in cui qualcosa mi è quasi venuto addosso."},
  var:{name:"Mail protetta",hint:"Il numero del varco, con lo zero, poi la mia valutazione da rider senza la virgola."},
  note:{hint:"Il numero della cisterna, con lo zero, poi i minuti in cui quel mezzo è entrato."}},
 chats:[
  {id:"giu",name:"Giulia",sub:"Sorella",m:[
   ["sab 2:15",1,"Giulia è morto un signore al porto io ho chiamato l'ambulanza ma"],
   ["sab 2:16",0,"Davide dove sei? Arrivo."],
   ["dom",0,"Ho parlato con la moglie di Sergio. Mi ha detto che sabato lui le aveva scritto: «stanotte becco chi ruba il gasolio alla cooperativa». Te lo inoltro."],
   ["dom",0,"«Stanotte becco chi ruba il gasolio. È uno che non ti aspetti. Ti racconto domattina.»"]]},
  {id:"mar",name:"Marco · vigilanza",sub:"Collega di Sergio",m:[
   ["dom",0,"Sono Marco, il collega di Sergio. So che dicono che litigavamo per i turni. È vero. Ma sabato notte ero a casa con mia moglie, il citofono registra tutto, l'ho dato alla polizia."]]},
  {id:"rid",name:"Rider Ancona",sub:"Gruppo",m:[
   ["sab 1:22",0,"Kevin: Chi prende l'ordine per la guardiola del varco 3? Io sono a Torrette."],
   ["sab 1:23",1,"Lo prendo io, sono in centro."],
   ["dom",0,"Kevin: Davide, i ragazzi del muretto sabato erano tutti a Senigallia per il concerto. Non dare retta a chi dice che sono stati loro."]]},
  {id:"avv",name:"Avv. Mancini",sub:"Avvocato di Davide",m:[
   ["dom",0,"Giulia mi ha girato il numero. La polizia mi ha dato il registro degli ingressi del varco 3: te lo mando per mail. Guarda bene chi è entrato prima di te."]]},
  {id:"ton",name:"Zio Tonino",sub:"",m:[
   ["dom",0,"Davide figlio mio, che brutta storia. Se ti serve qualcosa, passa in pescheria. E non raccontare troppo alla polizia, che quelli ti rigirano le parole."]]}
 ],
 lists:{
  corse:[
   {id:"x1",g:"Sabato",title:"Ordine 1:20 · Guardiola varco 3",sub:"Cliente: Sergio P.",body:"Una margherita e una birra. Ordinato da Sergio P. alle 1:20.\nRitiro alle 1:40 in centro."},
   {id:"x2",g:"Sabato",title:"Consegna · 2:05",sub:"Cliente non risponde",body:"Arrivo al varco alle 2:00. Alle 2:05 il cliente non risponde. Alle 2:08 il rider segnala un'emergenza."},
   {id:"x3",g:"Profilo",title:"Davide R.",sub:"Valutazione 4,9",body:"Rider da marzo. Nessun reclamo."}],
  mail:[
   {id:"m1",title:"Cooperativa Pescatori",sub:"Avviso ai soci",meta:"novembre",body:"Dalle cisterne della banchina mancano 800 litri di gasolio da settembre. Chi vede qualcosa lo segnali alla guardia del varco 3."},
   {id:"m2",title:"Avv. Mancini",sub:"Registro del varco 3",meta:"domenica",lock:"var",body:"Sabato notte, varco 3:\n1:35 · ingresso · Ape Piaggio, «Pescheria Tonino», titolare A. Paolucci\n2:00 · ingresso · scooter, rider (Davide Rinaldi)\n2:01 · uscita · Ape Piaggio, «Pescheria Tonino»\nNessun altro ingresso tra l'una e le tre."}],
  map:[
   {id:"g1",g:"Cronologia sabato",title:"Centro, pizzeria",sub:"1:40",body:""},
   {id:"g2",g:"Cronologia sabato",title:"Porto, varco 3",sub:"2:00 - 3:30",body:"Poi in questura."}],
  cal:[
   {id:"c1",g:"Lunedì",title:"Avvocato",sub:"10:00",body:""}],
  note:[
   {id:"n1",title:"Cose da dire alla polizia",body:"Ho chiamato subito.\nIl portafoglio non l'ho visto.\nC'era odore di gasolio."},
   {id:"n2",title:"Quello che ho visto",lock:"note",body:"Me lo ricordo adesso, guardando le foto. Alle 2:01 un'Ape mi è quasi venuta addosso uscendo dal varco. Era quella di zio Tonino. Quella che ci regala il pesce alla festa.\nNel cassone c'erano le taniche. Alla cisterna 6 c'era la pozza di gasolio.\nNon ci volevo credere. Non ci voglio credere."}],
  tel:[
   {id:"t1",title:"112",sub:"sab 2:08 · in uscita, 6 min"},
   {id:"t2",title:"Giulia",sub:"sab 2:14 · in uscita, 2 min"}]
 },
 spots:[
  {id:"s1",x:200,y:190,label:"Varco 3",title:"Guardiola del varco 3",sub:"Porto",body:"Una sbarra e una guardiola con la luce accesa tutta la notte. Ogni mezzo che entra viene registrato."},
  {id:"s2",x:240,y:176,label:"Cisterne",title:"Cisterne della cooperativa",sub:"Banchina dei pescherecci",body:"Sei cisterne numerate. Di notte non c'è nessuno, tranne la guardia."},
  {id:"s3",x:60,y:226,label:"Pescheria Tonino",title:"Pescheria Tonino",sub:"Porto antico · ★ 4,9",body:"Recensione: «Zio Tonino è un santo: alla festa del pesce offre a tutti. Ha un'Ape vecchissima che fa un rumore incredibile.»"},
  {id:"s4",x:132,y:120,label:"Pizzeria",title:"Pizzeria del centro",sub:"Aperta fino alle 2",body:"L'ordine delle 1:20 per la guardiola è stato ritirato alle 1:40."}],
 photos:[
  {id:"p1",t:"ott",title:"Il porto",sc:"por"},
  {id:"p2",t:"estate",title:"Con Giulia",sc:"sis"},
  {id:"p3",t:"sab 1:40",title:"Ordine",sc:"piz"},
  {id:"p4",t:"agosto",title:"Festa del pesce",sc:"ton"},
  {id:"h1",t:"sab 2:01",title:"Al varco",sc:"ape",lock:"album"},
  {id:"h2",t:"sab 2:12",title:"Cisterna",sc:"poz",lock:"album"}],
 pins:{album:"0201",var:"0349",note:"0635"},
 events:[{id:"a",q:3,kind:"call",from:"Zio Tonino",lines:["«Davide? Ah, non sei Davide.»","«Gli dica che se ha bisogno di qualcosa ci sono io. E che le foto di quella notte è meglio non farle girare, che la gente chiacchiera.»","«Mi raccomando, eh.»"]},
         {id:"b",q:8,kind:"sms",from:"Giulia",text:"La polizia ha ritrovato il portafoglio di Sergio. Era in un cassone di pesce, in una pescheria del porto antico. Che cosa c'entra una pescheria?"}],
 qs:[
  {t:"2:08",q:"A che ora Davide ha chiamato il 112?",all:["208"],show:"Alle 2:08",hint:"Chi chiama per primo lascia una traccia.",news:"Un ladro non chiama il 112 e non aspetta la polizia."},
  {t:"Sergio",q:"Chi aveva ordinato la pizza che Davide doveva consegnare?",any:["sergio","guardia"],show:"Sergio, la guardia, dalla guardiola",hint:"L'app delle consegne ricorda ogni cliente.",news:"Ordine delle 1:20. Sergio sapeva che sarebbe stata una notte lunga."},
  {t:"casa",q:"Il collega Marco, che litigava con Sergio: dov'era quella notte?",any:["casa","moglie","citofon"],show:"A casa, con il citofono che lo registra",hint:"Si è difeso da solo.",news:"Una falsa pista cade."},
  {t:"Senigallia",q:"E i ragazzi del muretto, su cui girano voci?",any:["senigall","concert"],show:"A Senigallia, a un concerto",hint:"Un collega rider li conosce.",news:"Un'altra falsa pista."},
  {t:"gasolio",q:"Che cosa voleva scoprire Sergio quella notte?",any:["gasol","cistern","furt"],show:"Chi rubava il gasolio alla cooperativa",hint:"La moglie di Sergio ha detto qualcosa a Giulia.",news:"«È uno che non ti aspetti.»"},
  {t:"800",q:"Quanti litri di gasolio mancano alla cooperativa?",a:["800","800 litri","ottocento"],show:"800 litri, da settembre",hint:"La cooperativa ha scritto ai soci.",news:"Qualcuno con un mezzo e delle taniche."},
  {t:"Ape",q:"Che cosa ha fotografato Davide alle 2:01, appena arrivato?",any:["ape","motocarr","treruote"],show:"Un'Ape che usciva di corsa dal varco",hint:"Davide fotografa le cose che gli fanno paura. Quelle foto sono nascoste.",news:"Nel cassone, taniche blu."},
  {t:"Pescheria Tonino",q:"Che cosa c'è scritto sulla fiancata?",any:["tonino","pescher"],show:"«Pescheria Tonino»",hint:"Stessa foto.",news:"Lo zio Tonino, quello che regala il pesce alla festa."},
  {t:"1:35",q:"A che ora l'Ape era entrata nel porto?",all:["135"],show:"Alle 1:35",hint:"L'avvocato ha avuto un registro, chiuso.",news:"Ventisei minuti prima di uscire. Nessun altro è entrato tra l'una e le tre, tranne Davide alle 2:00."},
  {t:"6",q:"Davanti a quale cisterna c'era la pozza di gasolio?",a:["6","sei","la 6","cisterna 6","la sei"],show:"La cisterna 6",hint:"Davide ha fatto un'altra foto aspettando il 112.",news:"Sergio lo aveva sorpreso lì."},
  {t:"pescheria",q:"Dove è stato ritrovato il portafoglio di Sergio?",any:["pescher","cassone","pesce"],show:"In una cassetta del pesce, in una pescheria del porto antico",hint:"Giulia ha avuto una notizia.",news:"Non nelle tasche di Davide."},
  {t:"t",q:"Chi ha ucciso Sergio Pace?",o:[["d","Davide, il rider"],["m","Marco, il collega"],["r","I ragazzi del muretto"],["t","Zio Tonino, il pescivendolo, sorpreso a rubare gasolio"],["n","Nessuno: un malore"]],a:"t",show:"Zio Tonino, il pescivendolo",hint:"Chi è entrato prima di Davide, e che cosa portava nel cassone?",news:""}],
 win:{title:"Sergio l'ha ucciso zio Tonino, il pescivendolo del porto.",
  steps:["Davide è arrivato alle 2:00 per consegnare la pizza ordinata da Sergio, e alle 2:08 ha chiamato il 112.","Marco era a casa, i ragazzi del muretto a Senigallia.","Sergio quella notte voleva sorprendere chi rubava gasolio: 800 litri da settembre.","Alle 1:35 era entrata l'Ape della Pescheria Tonino, uscita di corsa alle 2:01 con le taniche. Davide l'ha fotografata.","Davanti alla cisterna 6 c'era una pozza di gasolio. Il portafoglio di Sergio era in una pescheria del porto antico."],
  end:"Giulia porta le foto all'avvocato Mancini, che le porta in questura. Tonino non scappa: lo trovano in pescheria all'alba, a pulire il pesce come ogni mattina. «Volevo solo spaventarlo», dice. Davide torna a fare consegne la settimana dopo. Al varco 3 non ci passa più."}
});
})();
