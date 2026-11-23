(function(){
/* Furti 20 (finale): Colpo grosso (Genova e Milano). Soluzione: il perito Gualtieri.
   Ha usato le perizie degli altri casi (Vicenza, Brescia, Venezia e altri) per imparare allarmi, chiavi e ronde; ha fatto da basista al furto nel caveau della Casa d'aste Lanterna di Genova, con Ennio Bonetti (Brescia) e Renzi (Venezia).
   Indizi: perizie con annotazioni che non servono a un perito, contatti con Bonetti e Renzi, biglietto di sola andata, turni del caveau. Falsa pista: il direttore Ravera che aveva alzato la copertura. */
const SC={
 cav:()=>LIB.obj("#2b3a55","🏦","Il caveau della Casa d'aste Lanterna, dopo"),
 vic:()=>LIB.doc("Perizia Vicenza · annotazioni a margine","#a02822",["Cassaforte: modello e anno","«codice installatore mai cambiato»","Allarme: centrale, ritardo 40 s","(non serve alla pratica)"]),
 bre:()=>LIB.doc("Perizia Brescia · annotazioni a margine","#a02822",["Serratura box: Elettra","«si apre con chiave programmata»","Officina Bonetti: «collaborativo»","porto di Genova: container"]),
 ven:()=>LIB.doc("Perizia Venezia · annotazioni a margine","#a02822",["Ronde ogni 40 minuti","«buco 2:10-2:50 possibile»","Serratura del retro: marca","Renzi: «uomo utile»"]),
 tur:()=>LIB.doc("Turni del caveau · foto","#33658a",["Sabato notte: 1 guardia","cambio turno 3:00-3:20","telecamere: ditta esterna","porta blindata: ritardo 40 s"]),
 big:()=>LIB.doc("Biglietto","#2f6b4f",["Genova → Tangeri","traghetto, solo andata","domenica 11 gennaio, 23:59","cabina singola"])
};
const MAP=LIB.city("Genova",[[40,52,"Centro"],[132,132,"Casa d'aste Lanterna"],[276,132,"Porto"],[40,232,"Milano →"],[300,40,"Righi"],[200,200,"Terminal traghetti"]],
 [[150,140,"#d43d55","Casa d'aste Lanterna",9,-10],[220,200,"#33658a","terminal traghetti",9,-8]],[["M0 214Q200 176 400 226",60]]);

LIB.add(60,["Colpo grosso","L'assicurazione cerca il suo perito, sparito dopo il furto nel caveau di una casa d'aste","Genova e Milano"],{
 map:MAP,scenes:SC,owner:"Carlo Gualtieri",time:"10:00",date:"ven 9 gen",homeDate:"venerdì 9 gennaio",
 appIds:"msg tel mail gal map cal note drive",
 late:"La polizia è arrivata in compagnia di assicurazione e ha chiesto il telefono di Gualtieri. Va consegnato.",
 brief:"Sabato 3 gennaio, di notte, il caveau della Casa d'aste Lanterna, a Genova, è stato svuotato: gioielli e orologi per milioni. Lunedì il perito che segue la pratica per la compagnia, Carlo Gualtieri, 54 anni, non si è presentato al lavoro. Il suo telefono è stato trovato nella sua auto, nel parcheggio dell'ufficio di Milano. La compagnia ti ha dato il telefono.",
 quote:"«Gualtieri è il nostro perito migliore da vent'anni: non sbaglia una stima. Lo hai visto anche tu, nei casi che hai seguito: un orafo a Vicenza, un SUV a Brescia, un negozio di vetri a Venezia, e tanti altri. Il direttore della casa d'aste aveva appena alzato la copertura, e io guarderei lui. Ma prima voglio sapere dov'è il mio perito.»",
 chats:[
  {id:"rav",name:"Ravera",sub:"Direttore Casa d'aste Lanterna",m:[
   ["nov",0,"Gualtieri, come mi ha consigliato lei, abbiamo alzato la copertura per l'asta di dicembre. Mi dice cosa le serve per il sopralluogo?"],
   ["nov",1,"I turni delle guardie, il modello della porta blindata e il nome della ditta delle telecamere. Per la polizza, naturalmente."],
   ["lun",0,"Gualtieri, dov'è? La polizia cerca anche lei."]]},
  {id:"ben",name:"E.B.",sub:"",m:[
   ["",2,"3 messaggi eliminati."],
   ["sab 22:00",0,"Container pronto al porto. Lunedì parte.","eb"]]},
  {id:"ren",name:"R.",sub:"",m:[
   ["sab 3:05",0,"Cambio turno fatto. Le telecamere le ho spente io con l'avviso di manutenzione, come a Venezia. Fino alle 3:20. Entrate.","eb"],
   ["sab 3:22",1,"Fuori. Tutto bene."]]},
  {id:"mog",name:"Moglie",sub:"",m:[
   ["dom",0,"Carlo, dove sei? Non rispondi da ieri. Ho trovato in cassetto un biglietto per Tangeri. Che cosa significa?"]]},
  {id:"cap",name:"Compagnia · ufficio sinistri",sub:"",m:[
   ["mar",0,"Gualtieri, in 6 delle sue perizie dell'ultimo anno sono seguiti furti con lo stesso metodo. Ci richiami."]]}
 ],
 lists:{
  drive:[
   {id:"d1",g:"Perizie",title:"Vicenza · orafo",sub:"novembre",body:"Pratica chiusa: furto finto. A margine: modello della cassaforte, codice installatore, ritardo dell'allarme."},
   {id:"d2",g:"Perizie",title:"Brescia · SUV",sub:"novembre",body:"Pratica chiusa: chiave duplicata in officina. A margine: «Bonetti, collaborativo», «porto di Genova, container»."},
   {id:"d3",g:"Perizie",title:"Venezia · vetri d'arte",sub:"dicembre",body:"Pratica chiusa: guardia giurata. A margine: «Renzi, uomo utile», orari delle ronde, marca della serratura."},
   {id:"d4",g:"Lanterna",title:"Turni caveau",sub:"dicembre",body:"Sabato notte una guardia. Cambio turno 3:00-3:20. Telecamere gestite da ditta esterna. Porta blindata: ritardo 40 secondi."}],
  mail:[
   {id:"m1",title:"Compagnia",sub:"Denuncia furto Lanterna",meta:"domenica",body:"Furto nel caveau tra le 3:00 e le 3:20 di domenica. Nessuna effrazione della porta blindata. Telecamere spente."},
   {id:"m2",title:"Biglietteria traghetti",sub:"Conferma",meta:"dicembre",body:"Genova-Tangeri, solo andata, domenica 11 gennaio alle 23:59. Cabina singola. Passeggero: C. Gualtieri."}],
  map:[
   {id:"g1",g:"Cronologia sabato",title:"Casa d'aste Lanterna",sub:"2:50 - 3:25",body:"Il telefono era davanti al caveau."},
   {id:"g2",g:"Cronologia lunedì",title:"Parcheggio ufficio, Milano",sub:"8:00",body:"Poi spento."}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sopralluogo Lanterna",sub:"10:00",body:"Con Ravera."},
   {id:"c2",g:"Gennaio",title:"Dom 11 · Porto",sub:"23:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'inizio del cambio turno, quattro cifre con lo zero davanti.\nNota sotto: quanti secondi di ritardo ha la porta blindata, con due zeri davanti."},
   {id:"n2",title:"Lista",lock:"note",body:"Ogni perizia, una lezione. Ogni ladro onesto con me, un collega.\nVicenza: le casseforti. Brescia: le chiavi e il porto, con Bonetti. Venezia: le ronde, con Renzi.\nLanterna: 3:00-3:20. Poi Tangeri.\nNessuno controlla il perito."}],
  tel:[
   {id:"t1",title:"E.B.",sub:"sab 22:05 · in uscita, 2 min"},
   {id:"t2",title:"R.",sub:"sab 3:06 · in entrata, 30 s"}]
 },
 photos:[
  {id:"p1",t:"dom",title:"Caveau",sc:"cav"},
  {id:"p2",t:"nov",title:"Vicenza",sc:"vic"},
  {id:"p3",t:"nov",title:"Brescia",sc:"bre"},
  {id:"p4",t:"dic",title:"Venezia",sc:"ven"},
  {id:"h1",t:"dic",title:"Turni",sc:"tur",lock:"album"},
  {id:"h2",t:"dic",title:"Biglietto",sc:"big",lock:"album"}],
 pins:{note:"0040",album:"0300"},
 events:[{id:"a",q:3,kind:"sms",from:"E.B.",text:"Carlo, la polizia è in officina. Non ho detto niente. Il container parte lo stesso?"},
         {id:"b",q:8,kind:"call",from:"Numero marocchino",lines:["«Monsieur Gualtieri? La cabine est confirmée pour dimanche.»","«...Pardon, ce n'est pas lui?»","Ha riattaccato."]}],
 qs:[
  {t:"3:00",q:"Tra quali ore è avvenuto il furto nel caveau? Dimmi l'ora di inizio.",all:["300"],show:"Tra le 3:00 e le 3:20",hint:"Mail della compagnia.",news:"Il cambio turno delle guardie."},
  {t:"Ravera",q:"Chi aveva alzato la copertura, e su consiglio di chi?",any:["ravera","gualtier","direttor"],show:"Il direttore Ravera, su consiglio di Gualtieri",hint:"Chat con Ravera.",news:"La falsa pista porta dritta al perito."},
  {t:"turni",q:"Che cosa aveva chiesto Gualtieri a Ravera «per la polizza»?",any:["turn","guardi","porta","telecam"],show:"I turni delle guardie, la porta blindata, la ditta delle telecamere",hint:"Chat con Ravera.",news:"Non servono a stimare una polizza."},
  {t:"Lanterna",q:"Dove era il telefono di Gualtieri sabato notte tra le 2:50 e le 3:25?",any:["lantern","caveau","aste"],show:"Davanti al caveau della Casa d'aste Lanterna",hint:"Mappe.",news:"Il perito era sul posto."},
  {t:"Vicenza Brescia Venezia",q:"Quali tre vecchi casi ritrovi nelle sue perizie con annotazioni a margine? Scrivi le tre città.",all:["vicenza","brescia","venezia"],show:"Vicenza, Brescia e Venezia",hint:"Drive o Galleria.",news:"Casseforti, chiavi programmate, ronde."},
  {t:"Bonetti",q:"Chi è «E.B.», che prepara il container?",any:["bonetti","ennio"],show:"Ennio Bonetti, il carrozziere di Brescia",hint:"Perizia di Brescia: «Bonetti, collaborativo».",news:"Ora hai recuperato i messaggi di E.B. e di R.",unlock:"eb"},
  {t:"Renzi",q:"Chi è «R.», che ha scritto alle 3:05 che le telecamere dormono?",any:["renzi"],show:"Renzi, la guardia giurata di Venezia",hint:"Perizia di Venezia: «uomo utile».",news:"Lo stesso trucco dell'avviso di manutenzione usato a Venezia."},
  {t:"Tangeri",q:"Dove sta scappando Gualtieri?",any:["tanger","marocc"],show:"A Tangeri, in traghetto",hint:"Mail della biglietteria e album privato: il codice è l'inizio del cambio turno.",news:"Solo andata."},
  {t:"11 gennaio",q:"Quando parte il traghetto? Giorno e mese.",all:["11","gen"],show:"Domenica 11 gennaio, alle 23:59",hint:"Mail della biglietteria.",news:"C'è ancora tempo per fermarlo."},
  {t:"40",q:"Ritardo della porta blindata, in secondi?",a:["40","40 secondi","quaranta"],show:"40 secondi",hint:"Turni del caveau.",news:"Il codice della nota protetta."},
  {t:"g",q:"Chi ha fatto da basista al colpo nel caveau?",o:[["r","Ravera, il direttore"],["g","Gualtieri, il perito, con Bonetti e Renzi"],["b","Bonetti da solo"],["c","La compagnia di assicurazione"],["k","Kevin, il commesso di Venezia"]],a:"g",show:"Gualtieri",hint:"Perizie annotate, telefono davanti al caveau, biglietto per Tangeri.",news:""}],
 win:{title:"Il basista è il perito Gualtieri.",
  steps:["Il furto nel caveau è avvenuto tra le 3:00 e le 3:20, durante il cambio turno. Il telefono di Gualtieri era lì.","Per «la polizza» aveva chiesto a Ravera turni, porta blindata e ditta delle telecamere. Era stato lui a fargli alzare la copertura.","Nelle perizie di Vicenza, Brescia e Venezia annotava casseforti, chiavi programmate, ronde, e nomi «utili».","E.B. è Ennio Bonetti, il carrozziere di Brescia, con il container al porto. R. è Renzi, la guardia di Venezia.","Domenica 11 gennaio alle 23:59 aveva un traghetto di sola andata per Tangeri."],
  end:"Domenica 11 gennaio alle 23:30, al terminal traghetti di Genova, un uomo con un cappotto grigio e una valigia piccola mostra il passaporto. Lo aspettano due agenti e un dirigente della compagnia. Gualtieri non oppone resistenza. Chiede solo una cosa: «Chi ha letto le mie note?» Gli mostrano il tuo nome sulla pratica. Lui sorride: «Bravo. Me lo segno.»"}
});
LIB.tune(60,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d4").lock="per";
 e.pins={album:"0300",per:"0602",note:"4011"};
 e.locks={album:{hint:"Quando si danno il cambio, giù al caveau."},per:{name:"Cartella protetta",hint:"Quante perizie mi hanno contato, poi quanti amici."},note:{hint:"I secondi della porta, poi il giorno della partenza."}};
 e.spots=[
  {id:"s1",x:150,y:140,label:"Casa d'aste Lanterna",title:"Casa d'aste Lanterna",sub:"Caveau al piano interrato",body:"Porta blindata con ritardo d'apertura. Asta di gioielli prevista a febbraio."},
  {id:"s2",x:220,y:200,label:"Terminal traghetti",title:"Terminal traghetti",sub:"Partenze per Tangeri",body:"Una partenza alla settimana, la domenica alle 23:59."},
  {id:"s3",x:300,y:150,label:"Porto container",title:"Porto container",sub:"★ 3,8",body:"Recensione di uno spedizioniere: «I container per l'Africa partono il lunedì. Ogni tanto arriva un carrozziere da Brescia con un carico che nessuno controlla.»"}];
 LIB.hints(e,["La compagnia ha scritto quando.","Qualcuno aveva consigliato di alzare la copertura.","Le domande di un perito dicono molto.","Il telefono si ricorda dove è stato.","Le sue perizie hanno note a margine.","«Collaborativo», ha scritto di qualcuno.","«Uomo utile», ha scritto di un altro.","Un biglietto, solo andata.","…e una data.","La porta blindata ha un difetto, annotato in una cartella chiusa.","Perizie, telefono, biglietto."]);
});
})();
