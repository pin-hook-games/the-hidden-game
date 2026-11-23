(function(){
/* Intrighi 11: Il concorso (Castelnuovo, comune inventato). Soluzione: Peppino Sanna, il custode del municipio, padrino di cresima del vincitore.
   La griglia (con l'errore «186 ter») l'ha scritta l'avv. Brunetti, ma la busta è stata sigillata alle 20 davanti alla segretaria e chiusa nella cassaforte della stanza 12.
   Alle 6:40 il custode ha aperto la cassaforte «per controllare l'allarme» e ha richiuso la busta con un nastro diverso; alle 7 prendeva il caffè con Luca Gatti.
   Falsa pista: Brunetti, socio di studio del padre del vincitore (e il sindaco).
   Codici: album = 0186; registro cassaforte = stanza 12, primo piano = 1201; nota = 20 (busta sigillata alle 20) + 40 (riaperta alle 6:40) = 2040. */
const SC={
 gra:()=>LIB.doc("Graduatoria · agente di polizia locale","#33658a",["Posti: 1","1. Luca Gatti · 30/30","2. Marta Villa · 27/30","3. Omar Fadda · 25/30"]),
 cen:()=>LIB.group(3,"Cena dello Studio Brunetti & Gatti · 2022","#b0764a"),
 ver:()=>LIB.doc("Verbale di consegna","#55606b",["Durata della prova: 120 minuti","Gatti Luca: consegna dopo 20 minuti","Villa Marta: dopo 115 minuti","Presidente: avv. Brunetti"]),
 bus:()=>LIB.doc("Busta delle tracce · foto agli atti","#55606b",["Sera: nastro rosso del Comune","Mattina: nastro trasparente","sigillo con le firme spostato","di un centimetro"]),
 cre:()=>LIB.two("#f0d9a0","#55606b","#33658a","Cresima di Luca Gatti, 2012, con il padrino"),
 com:()=>LIB.doc("Compito del vincitore · domanda 4","#a02822",["«... come previsto dall'art. 186 ter","del Codice della strada...»","(l'articolo giusto è il 186 bis)","Valutazione: corretta"]),
 gri:()=>LIB.doc("Griglia di correzione · domanda 4","#a02822",["Risposta attesa:","«art. 186 ter del Codice della strada»","Redatta da: avv. Brunetti","la sera prima della prova"])
};
const MAP=LIB.prov([]);

LIB.add(71,["Il concorso","Marta Villa vuole fare ricorso contro il vincitore","Castelnuovo"],{
 map:MAP,scenes:SC,owner:"Marta Villa",time:"16:00",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note",
 late:"L'avvocato di Marta chiude lo studio e deve depositare il ricorso così com'è. Il tempo è finito.",
 brief:"Marta Villa, 28 anni, è arrivata seconda al concorso per un posto da agente di polizia locale a Castelnuovo. C'era un solo posto. Ha ottenuto l'accesso agli atti e ti ha dato il suo telefono: dentro c'è tutto quello che ha raccolto. Domani scade il termine per il ricorso.",
 quote:"«Il vincitore ha consegnato dopo venti minuti un compito perfetto. Io ne ho usati centoquindici e ho preso 27. Il presidente della commissione è socio di studio di suo padre: per me è chiaro. Ma il mio avvocato dice che per un ricorso serve sapere come le risposte sono arrivate a lui, non solo chi gliele voleva dare.»",
 locks:{
  album:{hint:"L'articolo su cui ho sfidato il vincitore, con lo zero davanti."},
  reg:{name:"Mail protetta",hint:"La stanza dove dorme la cassaforte, poi il piano."},
  note:{hint:"Quando l'hanno chiusa, poi i minuti in cui qualcuno l'ha riaperta."}},
 chats:[
  {id:"ele",name:"Elena",sub:"Segretaria della commissione",m:[
   ["ven 18:00",0,"Marta, ti ho mandato gli atti come da richiesta. Io non posso dire di più."],
   ["",2,"2 messaggi eliminati venerdì sera."],
   ["ven 21:30",0,"Te lo dico una volta sola: le domande e la griglia le ha scritte Brunetti da solo, la sera prima. Ma la busta l'abbiamo sigillata insieme, alle 20, con il nastro rosso, e l'ho chiusa io nella cassaforte del segretario.","bru"],
   ["ven 21:31",0,"La mattina il nastro era trasparente. L'ho fatto mettere a verbale, nessuno ci ha badato.","bru"]]},
  {id:"bru",name:"Avv. Brunetti",sub:"Presidente della commissione",m:[
   ["sab 11:00",0,"Signorina Villa, so che mi accusa. La busta l'ho sigillata davanti alla segretaria e non l'ho più vista fino alla prova. Si chieda chi ha le chiavi della cassaforte, non chi è socio di chi."]]},
  {id:"omar",name:"Omar",sub:"Terzo classificato",m:[
   ["sab",0,"Marta, anch'io ho visto Gatti alzarsi dopo venti minuti. Sorrideva. Se fai ricorso firmo anch'io."],
   ["dom",0,"Ti mando una foto dal profilo di Gatti, una cresima di tanti anni fa. Guarda chi è il padrino."]]},
  {id:"avv",name:"Avv. Deriu",sub:"Il suo avvocato",m:[
   ["dom 10:00",0,"Marta, per il ricorso non basta il sospetto. Serve dimostrare come le risposte sono uscite dalla busta."],
   ["dom 10:10",1,"Ho chiesto il registro della cassaforte. Me lo mandano per mail."]]},
  {id:"luca",name:"Luca Gatti",sub:"",m:[
   ["sab 09:00",0,"Marta, so che sei arrabbiata. Ho studiato tanto anch'io."],
   ["sab 09:10",1,"Allora spiegami l'articolo 186."],
   ["sab 09:30",0,"Non ti devo spiegare niente."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Comune · accesso agli atti",sub:"Documenti del concorso",meta:"venerdì",body:"In allegato: graduatoria, verbale di consegna, compiti dei primi tre classificati, griglia di correzione, foto della busta.\nPresidente della commissione: avv. Brunetti."},
   {id:"m2",title:"Ordine degli avvocati",sub:"Albo · studio associato",meta:"sabato",body:"Studio Brunetti & Gatti, Castelnuovo.\nSoci: avv. Brunetti e avv. Mario Gatti, dal 2009."},
   {id:"m3",title:"Comune · segreteria",sub:"Registro della cassaforte",meta:"lunedì",lock:"reg",body:"Giorno prima della prova\n20:05 · chiusura cassaforte · Elena Usai (busta tracce)\nGiorno della prova\n6:40 · apertura cassaforte · Peppino Sanna, custode · «controllo allarme»\n6:52 · chiusura cassaforte · Peppino Sanna\n8:45 · apertura cassaforte · Elena Usai"}],
  map:[
   {id:"g1",g:"Luoghi",title:"Municipio di Castelnuovo",sub:"Aula della prova",body:""}],
  cal:[
   {id:"c1",g:"Ottobre",title:"Prova scritta",sub:"9:00 - 11:00",body:""},
   {id:"c2",g:"Questa settimana",title:"Mar · Scadenza ricorso",sub:"",body:""}],
  note:[
   {id:"n1",title:"Da portare all'avvocato",body:"Compito di Gatti\nGriglia\nFoto della busta"},
   {id:"n2",title:"Perché lo faccio",lock:"note",body:"Mio padre faceva il vigile a Castelnuovo. Lo voglio fare anch'io, ma vincendo.\nPensavo fosse stato Brunetti. Invece la busta l'ha aperta Peppino, che mi regalava le caramelle quando passavo in Comune con papà.\nSe vinco il ricorso, lo dedico a mio padre lo stesso."}],
  tel:[
   {id:"t1",title:"Avv. Deriu",sub:"dom 10:15 · in uscita, 18 min"},
   {id:"t2",title:"Elena",sub:"ven 21:28 · in entrata, 2 min"}]
 },
 spots:[
  {id:"s1",x:320,y:84,label:"Municipio",title:"Municipio di Castelnuovo",sub:"Uffici e aula consiliare",body:"Ufficio del segretario: stanza 12, primo piano. Lì c'è la cassaforte.\nIl portone apre alle 7:30. Il custode ha le chiavi di tutto."},
  {id:"s2",x:292,y:106,label:"Bar del Corso",title:"Bar del Corso",sub:"Aperto dalle 6:30 · ★ 4,4",body:"Recensione: «Il giorno del concorso dei vigili, alle 7, il custode del Comune era qui con un ragazzo in tuta. Parlavano fitto, e il ragazzo prendeva appunti su un tovagliolo.»"},
  {id:"s3",x:350,y:112,label:"Studio Brunetti & Gatti",title:"Studio Brunetti & Gatti",sub:"Studio legale · ★ 3,9",body:"Recensione di un cliente: «I due soci ormai non si parlano più. Brunetti sta aprendo uno studio da solo.»"}],
 photos:[
  {id:"p1",t:"ott",title:"Graduatoria",sc:"gra"},
  {id:"p2",t:"sab",title:"Dal profilo dello studio",sc:"cen"},
  {id:"p3",t:"ven",title:"Verbale",sc:"ver"},
  {id:"p4",t:"ven",title:"La busta",sc:"bus"},
  {id:"p5",t:"dom",title:"Da Omar",sc:"cre"},
  {id:"h1",t:"dom 21:00",title:"Compito di Gatti",sc:"com",lock:"album"},
  {id:"h2",t:"dom 21:02",title:"Griglia",sc:"gri",lock:"album"}],
 pins:{album:"0186",reg:"1201",note:"2040"},
 events:[{id:"a",q:3,kind:"call",from:"Peppino Sanna",lines:["«Marta? Sono Peppino, del Comune. Mi hanno detto del ricorso.»","«Lascia stare, figlia mia. Brunetti è un osso duro, ti fai solo del male.»","«...Pronto? Chi è lei?»"]},
         {id:"b",q:10,kind:"sms",from:"Omar",text:"Marta, ho riguardato il mio compito: alla domanda 4 ho scritto 186 bis e mi hanno tolto due punti. Chi ha scritto quella griglia ha sbagliato, e chi l'ha copiata l'aveva in mano."}],
 qs:[
  {t:"20",q:"Dopo quanti minuti ha consegnato il vincitore, su centoventi?",a:["20","venti","20 minuti","dopo 20 minuti","venti minuti"],show:"Dopo 20 minuti",hint:"Qualcuno ha messo a verbale i tempi.",news:"Marta ne ha usati centoquindici, e ha preso 27. Lui 30."},
  {t:"Brunetti",q:"Chi presiedeva la commissione?",any:["brunetti"],show:"L'avv. Brunetti",hint:"Il Comune ha mandato gli atti.",news:"Ora hai recuperato i due messaggi che la segretaria della commissione ha cancellato.",unlock:"bru"},
  {t:"la sera prima",q:"Secondo la segretaria, quando Brunetti ha scritto domande e griglia?",any:["sera","prima","vigilia"],show:"La sera prima, da solo",hint:"La segretaria ha parlato una volta sola.",news:"Brunetti sembra il colpevole perfetto."},
  {t:"soci",q:"Che legame c'è tra Brunetti e il padre del vincitore?",any:["soci","studio"],show:"Sono soci di studio",hint:"Gli avvocati sono iscritti a un albo.",news:"Studio Brunetti & Gatti, dal 2009. Ma secondo chi li conosce, non si parlano più."},
  {t:"186 bis",q:"Il compito del vincitore cita un articolo sbagliato del Codice della strada. Qual è quello giusto?",any:["186bis"],show:"Il 186 bis",hint:"Marta ha nascosto i documenti più importanti.",news:"Gatti ha scritto «186 ter», ed è stata valutata corretta."},
  {t:"186 ter",q:"E che cosa dice la griglia di correzione alla domanda 4?",any:["186ter","ter"],show:"«Art. 186 ter»",hint:"Stesso posto.",news:"Lo stesso errore. Gatti ha visto la griglia prima della prova."},
  {t:"20:00",q:"A che ora è stata sigillata la busta con domande e griglia?",a:["20:00","alle 20:00","ore 20:00","alle 20","le 20","ore 20","20.00"],show:"Alle 20, davanti alla segretaria",hint:"La segretaria ha raccontato com'è andata, quella sera.",news:"Dopo, Brunetti non l'ha più vista. La busta è finita in cassaforte."},
  {t:"trasparente",q:"Com'era il nastro della busta la mattina della prova?",any:["traspar","divers"],show:"Trasparente, invece che rosso",hint:"C'è una foto della busta tra gli atti.",news:"Qualcuno l'ha aperta e richiusa nella notte."},
  {t:"Peppino Sanna",q:"Chi ha aperto la cassaforte la mattina della prova, prima della segretaria?",any:["peppino","sanna","custod"],show:"Peppino Sanna, il custode, alle 6:40",hint:"La cassaforte tiene un registro, mandato a Marta e chiuso.",news:"«Controllo allarme.» Dodici minuti, dalle 6:40 alle 6:52."},
  {t:"padrino",q:"Che cosa è Peppino Sanna per Luca Gatti?",any:["padrin","cresim"],show:"Il suo padrino di cresima",hint:"Una foto vecchia, dal profilo del vincitore.",news:"Alle 7 erano insieme al bar, e il ragazzo prendeva appunti su un tovagliolo."},
  {t:"due punti",q:"Omar alla domanda 4 ha scritto l'articolo giusto. Quanti punti gli hanno tolto?",a:["2","due","2 punti","due punti"],show:"Due punti",hint:"Il terzo classificato ha ricontrollato.",news:"Chi ha risposto giusto è stato punito."},
  {t:"s",q:"Chi ha passato le risposte al vincitore?",o:[["s","Peppino Sanna, il custode del Comune, suo padrino"],["b","L'avv. Brunetti, presidente della commissione"],["e","Elena, la segretaria"],["o","Omar, il terzo classificato"],["g","Nessuno: Gatti ha studiato"]],a:"s",show:"Peppino Sanna, il custode",hint:"La griglia l'ha scritta uno, ma la busta chi l'ha aperta?",news:""}],
 win:{title:"Le risposte le ha passate Peppino Sanna, il custode del municipio.",
  steps:["Luca Gatti ha consegnato dopo 20 minuti un compito con lo stesso errore della griglia: «186 ter».","La griglia l'aveva scritta Brunetti, socio del padre del vincitore. Ma la busta era stata sigillata alle 20 davanti alla segretaria e chiusa in cassaforte.","Alle 6:40 il custode ha aperto la cassaforte «per controllare l'allarme». La mattina il nastro della busta era trasparente invece che rosso.","Peppino Sanna è il padrino di cresima di Luca Gatti. Alle 7 erano insieme al bar, e il ragazzo prendeva appunti."],
  end:"L'avvocato Deriu allega al ricorso il registro della cassaforte e la foto della busta. Brunetti, a sorpresa, firma una dichiarazione a favore di Marta. Il concorso viene annullato e rifatto a febbraio. Marta lo vince, con 29. Peppino va in pensione in anticipo, senza festa."}
});
})();
