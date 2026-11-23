(function(){
/* Furti 6: Nonna Ada (Genova). Soluzione: Franco Pastorino, compagno di Rosa, la donna delle pulizie.
   Ada parla in vivavoce; Rosa pulisce il martedì e il giovedì 9-12 e lascia il telefono in chiamata con casa. I dettagli della truffa (Panda gialla, Giulia) Matteo li aveva detti solo alla nonna giovedì alle 10:30. Falsa pista: il prestito chiesto da Matteo. */
const SC={
 non:()=>LIB.two("#9cc7d6","#7a3b5a","#55606b","Con nonna Ada, Boccadasse"),
 pan:()=>LIB.car("#e6c84a","La Panda gialla, dopo il tamponamento"),
 reg:()=>LIB.doc("Chiamate di nonna · screenshot di mamma","#33658a",["Gio 10:30 · Matteo · 12 min","Gio 10:44 · Rosa (casa) · 0 min","Mar 9:15 · Matteo · 5 min","Mar 9:25 · Rosa (casa) · 0 min"]),
 oro:()=>LIB.doc("Compro Oro Savona · vetrina online","#a02822",["Spilla a rondine, oro e smalto","Collana a grani","Fede incisa «A. e G. 1961»","Novità della settimana"]),
 spi:()=>LIB.obj("#f0d9a0","🕊️","La spilla a rondine della nonna"),
 ros:()=>LIB.two("#c9b79c","#7a3b5a","#2f6b4f","Rosa e Franco al compleanno della nonna")
};
const MAP=LIB.city("Genova",[[40,52,"Centro"],[132,132,"Foce"],[276,132,"Boccadasse"],[40,232,"Porto"],[300,40,"Righi"],[200,200,"Corso Italia"]],
 [[300,150,"#d43d55","casa di Ada",9,-10],[60,120,"#33658a","casa di Rosa",9,-8]],[["M0 214Q200 176 400 226",60]]);

LIB.add(46,["Nonna Ada","Un finto nipote ha portato via i gioielli di nonna Ada. I carabinieri sospettano del nipote vero","Genova"],{
 map:MAP,scenes:SC,owner:"Matteo Repetto",time:"18:00",date:"mer 19 nov",homeDate:"mercoledì 19 novembre",
 appIds:"msg tel mail gal map cal note web",
 late:"Matteo è stato convocato in caserma per una seconda deposizione. Il telefono va con lui.",
 brief:"Sabato una telefonata: «Nonna, sono Matteo, ho tamponato con la Panda gialla, Giulia è ferita, serve un avvocato.» Un'ora dopo un «collega dell'avvocato» ha ritirato da Ada, 83 anni, tutti i gioielli. Il chiamante sapeva cose che Matteo, 24 anni, aveva detto solo alla nonna. Per questo i carabinieri sospettano di lui. Sua madre ti ha dato il suo telefono.",
 quote:"«Mio figlio non farebbe mai una cosa del genere a sua nonna. Ma quei dettagli, la Panda gialla, il nome della ragazza, li sapevano solo lui e lei. E la settimana prima le aveva chiesto un prestito. Mi dica come è possibile.»",
 chats:[
  {id:"mam",name:"Mamma",sub:"",m:[
   ["dom",0,"Matteo, ti mando lo screenshot delle chiamate della nonna. Guarda: dopo ogni tua telefonata c'è una chiamata da «Rosa casa», dieci minuti dopo, di zero secondi."],
   ["dom",1,"Rosa chiama la nonna? Ma Rosa la vede due volte a settimana."]]},
  {id:"non",name:"Nonna Ada",sub:"",m:[
   ["gio 10:42",0,"Matteo caro, che spavento la Panda! Per fortuna Giulia non si è fatta niente. Ti ho sentito bene in vivavoce, mentre Rosa lavava i vetri."],
   ["lun",0,"Il prestito te lo do volentieri, sono 500 euro, non 5.000."]]},
  {id:"giu",name:"Giulia",sub:"",m:[
   ["gio",0,"Il tamponamento l'hai detto a qualcuno? A tua madre no, vero? Non voglio che si preoccupi."],
   ["gio",1,"Solo alla nonna, al telefono."]]},
  {id:"ros",name:"Rosa",sub:"Pulizie di nonna",m:[
   ["lun",0,"Matteo, io non chiamo mai la nonna da casa. A casa il telefono fisso lo usa solo Franco, il mio compagno."],
   ["lun",0,"Il martedì e il giovedì quando vengo da vostra nonna lui mi chiama sempre, per sapere a che ora finisco. Lascio il cellulare acceso in tasca.","ros"]]},
  {id:"cc",name:"Carabinieri",sub:"",m:[
   ["dom",0,"Sig. Repetto, si presenti in caserma per chiarimenti sul prestito chiesto alla nonna."]]}
 ],
 lists:{
  web:[
   {id:"w1",g:"Cronologia",title:"Compro Oro Savona · novità",sub:"cercato martedì",body:"Vetrina online: spilla a rondine in oro e smalto, collana a grani, fede incisa «A. e G. 1961».\nPubblicate lunedì."},
   {id:"w2",g:"Cronologia",title:"Franco Pastorino",sub:"Elenco telefonico",body:"Via Gianelli, stessa casa di Rosa. Telefono fisso: lo stesso di «Rosa casa»."}],
  mail:[
   {id:"m1",title:"Mamma",sub:"Elenco gioielli della nonna",meta:"domenica",body:"Spilla a rondine, collana a grani d'oro, la fede del nonno incisa «A. e G. 1961», due anelli."}],
  map:[
   {id:"g1",g:"Cronologia sabato",title:"Università, Albaro",sub:"9:00 - 13:00",body:"Durante la telefonata alla nonna, Matteo era a lezione."}],
  cal:[
   {id:"c1",g:"Sabato",title:"Esame di diritto",sub:"9:00",body:"Aula 3, Albaro."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora della mia telefonata di giovedì alla nonna, quattro cifre.\nNota sotto: le ultime due cifre dell'incisione della fede e le prime due, al contrario: 61 e 19."},
   {id:"n2",title:"Per i carabinieri",lock:"note",body:"Sabato alle 10 ero in aula 3 all'esame, con 40 testimoni.\nLa Panda gialla e Giulia li ho detti solo alla nonna, giovedì alle 10:30, in vivavoce, mentre c'era Rosa.\nDieci minuti dopo, da casa di Rosa, qualcuno chiama la nonna. Quel telefono lo usa Franco.\nLa fede del nonno è in vetrina a Savona."}],
  tel:[
   {id:"t1",title:"Nonna Ada",sub:"gio 10:30 · in uscita, 12 min"},
   {id:"t2",title:"Mamma",sub:"dom · in entrata, 30 min"}]
 },
 photos:[
  {id:"p1",t:"estate",title:"Con la nonna",sc:"non"},
  {id:"p2",t:"gio",title:"La Panda",sc:"pan"},
  {id:"p3",t:"marzo",title:"Compleanno",sc:"ros"},
  {id:"p4",t:"2020",title:"La spilla",sc:"spi"},
  {id:"h1",t:"dom",title:"Da mamma",sc:"reg",lock:"album"},
  {id:"h2",t:"mar",title:"Savona",sc:"oro",lock:"album"}],
 pins:{note:"6119",album:"1030"},
 events:[{id:"a",q:3,kind:"call",from:"Nonna Ada",lines:["«Matteo? Ah, non sei tu. Sei l'amico che lo aiuta?»","«Gli dica che non sono arrabbiata. Io lo so che non è stato lui. Lui mi chiama sempre ‹nonnina›, quello al telefono diceva ‹nonna› e basta.»","«E gli dica di mangiare.»"]},
         {id:"b",q:8,kind:"sms",from:"Rosa",text:"Matteo, Franco è andato a Savona lunedì, dice per lavoro. Ho paura di quello che sto pensando. Non dire niente a nessuno ancora, ti prego."}],
 qs:[
  {t:"Panda gialla",q:"Quale auto ha nominato il finto nipote?",any:["panda"],show:"La Panda gialla",hint:"Brief e Galleria.",news:"Un dettaglio vero: Matteo aveva davvero tamponato."},
  {t:"Giulia",q:"E come si chiama la ragazza che ha nominato?",any:["giulia"],show:"Giulia",hint:"Chat.",news:"Giulia non voleva che si sapesse. Matteo l'aveva detto solo alla nonna."},
  {t:"10:30",q:"A che ora Matteo ha raccontato tutto alla nonna, giovedì?",all:["1030"],show:"Alle 10:30",hint:"Telefono.",news:"Lei era in vivavoce, e Rosa lavava i vetri."},
  {t:"esame",q:"Dov'era Matteo sabato mattina, durante la telefonata del truffatore?",any:["esam","aula","univers","lezion","albaro"],show:"A un esame all'università",hint:"Calendario e Mappe.",news:"Con quaranta testimoni."},
  {t:"500",q:"Il prestito chiesto da Matteo la settimana prima: quanto?",a:["500","500 euro","500 €","cinquecento"],show:"500 €",hint:"Chat con la nonna.",news:"La falsa pista dei carabinieri. Non 5.000."},
  {t:"Rosa casa",q:"Nello screenshot di mamma: chi chiama la nonna dieci minuti dopo ogni telefonata di Matteo?",any:["rosa"],show:"«Rosa (casa)», chiamate di zero secondi",hint:"Il codice dell'album è l'ora della telefonata di giovedì.",news:"Ma Rosa dice di non chiamare mai da casa. Ora hai recuperato il suo secondo messaggio.",unlock:"ros"},
  {t:"Franco",q:"Chi usa il telefono fisso di casa di Rosa?",any:["franco","pastorino","compagn"],show:"Franco, il suo compagno",hint:"Chat con Rosa e Browser.",news:"E il martedì e il giovedì chiama Rosa mentre è dalla nonna, e lei tiene il cellulare acceso in tasca."},
  {t:"Savona",q:"In quale città sono comparsi i gioielli?",any:["savona"],show:"A Savona, in un compro oro",hint:"Browser e album privato.",news:"Pubblicati lunedì, il giorno in cui Franco è andato a Savona."},
  {t:"1961",q:"Che anno è inciso sulla fede del nonno?",a:["1961","61"],show:"1961, «A. e G.»",hint:"Mail della mamma o vetrina online.",news:"Riconoscibile senza dubbi."},
  {t:"f",q:"Chi ha organizzato la truffa?",o:[["m","Matteo"],["r","Rosa"],["f","Franco, il compagno di Rosa, che ascoltava le chiamate"],["g","Giulia"],["c","Il compro oro"]],a:"f",show:"Franco, il compagno di Rosa",hint:"Chi poteva sentire la telefonata di giovedì e chi chiama dal fisso di Rosa?",news:""}],
 win:{title:"La truffa l'ha organizzata Franco, il compagno di Rosa.",
  steps:["Panda gialla e Giulia: Matteo li aveva detti solo alla nonna, giovedì alle 10:30, in vivavoce.","Rosa era lì a pulire. Franco la chiamava sempre in quelle ore, e lei teneva il telefono acceso in tasca.","Dieci minuti dopo ogni telefonata di Matteo, dal fisso di casa di Rosa partiva una chiamata alla nonna: Franco controllava che fosse in casa.","Sabato Matteo era a un esame. Il prestito chiesto era di 500 €.","La fede «A. e G. 1961» è in vetrina a Savona, dove Franco era lunedì."],
  end:"I carabinieri recuperano i gioielli al compro oro di Savona. Rosa si presenta in caserma da sola, prima che la chiamino. Domenica nonna Ada invita Matteo e Giulia a pranzo, e appunta la spilla a rondine sul golf."}
});
LIB.tune(46,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail[0].body+="\nRosa viene il martedì e il giovedì, dalle 9 alle 12.";
 e.lists.mail.push({id:"m2",title:"Compro Oro Savona",sub:"Risposta a mamma",meta:"martedì",lock:"oro",body:"Gentile signora, abbiamo controllato: i pezzi sono stati portati lunedì da un signore con documento regolare. Franco Pastorino, via Gianelli 44, Genova.\nLi teniamo da parte per i carabinieri."});
 e.pins={album:"1030",oro:"0912",note:"6144"};
 e.locks={album:{hint:"Quando le ho raccontato tutto, giovedì."},oro:{name:"Mail protetta",hint:"Le ore in cui la nonna non è mai sola, dall'inizio alla fine."},note:{hint:"Un anno sull'oro, poi un numero sulla porta di chi l'ha venduto."}};
 e.spots=[
  {id:"s1",x:300,y:150,label:"Casa di nonna Ada",title:"Casa di nonna Ada",sub:"Boccadasse",body:"Recensione del bar sotto casa: «La signora del terzo piano parla al telefono in vivavoce così forte che la sentiamo dai tavolini.»"},
  {id:"s2",x:60,y:120,label:"Via Gianelli",title:"Via Gianelli",sub:"Dove abitano Rosa e Franco",body:"Una via di case basse. Telefono fisso nel corridoio."},
  {id:"s3",x:360,y:40,label:"Savona →",title:"Compro Oro Savona",sub:"45 km · compro oro",body:"Recensione: «Pagano subito e in contanti. Non fanno troppe domande.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"Gianelli",q:"In quale via abita chi ha venduto i gioielli al compro oro?",any:["gianell"],show:"Via Gianelli 44, la casa di Rosa e Franco",hint:"",news:"Il compro oro li tiene da parte per i carabinieri."});
 LIB.hints(e,["Il truffatore conosceva un'auto.","…e una ragazza.","Una telefonata di giovedì, lunga.","Sabato mattina Matteo era davanti a quaranta persone.","La nonna gli ha risposto, sui soldi.","Mamma ha guardato le chiamate della nonna.","In quella casa il telefono fisso non lo usa lei.","Qualcuno ha cercato i gioielli in rete.","Il nonno aveva fatto incidere qualcosa.","Il compro oro ha risposto, ma la risposta è chiusa.","Chi poteva sentire quella telefonata, e chi chiama da quel numero?"]);
});
})();
