(function(){
/* Omicidi 9: Quota 2.400 (Aosta). Soluzione: Didier, socio del rifugio. Ha messo nel sacco una corda ritirata dal servizio per ereditare la quota e vendere. */
const SC={
 hut:()=>LIB.obj("#cfe0ea","🏔️","Il rifugio, 2.400 metri"),
 cha:()=>LIB.two("#8fb3c9","#7a3b5a","#2f6b4f","Con Chantal, estate"),
 start:()=>LIB.doc("Partenza · sabato 06:40","#33658a",["Sacco rosso aperto","Corda con targhetta A-097","Cielo sereno","Scattata da René"]),
 met:()=>LIB.doc("Bollettino · sabato","#2f6b4f",["Sereno, vento debole","Pericolo valanghe: grado 1","Roccia asciutta","Condizioni ottime"]),
 inv:()=>LIB.doc("Inventario corde","#55606b",["A-112, A-118, A-120: in servizio","A-097: ritirata il 2 settembre","«tagliare e buttare»","Firmato: René"]),
 off:()=>LIB.doc("AlpHotels · proposta","#a02822",["Acquisto del rifugio","Offerta: 380.000 €","Servono le firme dei due soci","Risposta di René: no"])
};
const MAP=LIB.map({name:"Mappa stilizzata della valle",
 water:[["M0 220Q120 200 220 230Q320 250 400 220",10]],
 parks:[`<path d="M0 0H400V120Q300 60 200 110Q100 150 0 90Z" fill="#e6ebef"/>`],
 roads:["M40 220Q160 180 220 120","M220 120Q260 90 300 70","M200 232V200"],
 labels:[[176,250,"Aosta"],[226,136,"partenza sentiero"],[300,60,"rifugio"],[250,36,"cresta"],[30,60,"ghiacciaio"],[40,236,"Dora"]],
 pins:[[300,74,"#33658a","rifugio",9,16],[266,44,"#d43d55","09:15",9,-6],[200,214,"#56666e","casa",9,-8]]});

LIB.add(29,["Quota 2.400","Il perito dell'assicurazione non crede all'incidente di René","Aosta"],{
 map:MAP,scenes:SC,owner:"René Bionaz",time:"16:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"La procura ha disposto il sequestro del telefono. Il perito ha dovuto consegnarlo.",
 brief:"Il perito di una compagnia di assicurazione ti ha portato il telefono di René Bionaz, 45 anni, guida alpina e socio di un rifugio sopra Aosta. Sabato mattina è caduto in cresta mentre accompagnava un cliente. La corda ha ceduto. Il telefono era nello zaino.",
 quote:"«Una guida con vent'anni di esperienza, meteo perfetto, via che conosceva a memoria. E una corda che si spezza. Il cliente che era legato con lui ha cambiato versione due volte. La moglie incassa una polizza vita. Prima di pagare voglio sapere se quella corda si è rotta da sola.»",
 chats:[
  {id:"chantal",name:"Chantal",sub:"Moglie",m:[
   ["ven 20:00",0,"Sono arrivata a Lione da mamma. Torno martedì. Domani vai su?"],
   ["ven 20:10",1,"Con un cliente, via facile. Domenica parlo con Didier del rifugio."]]},
  {id:"didier",name:"Didier",sub:"Socio",m:[
   ["ven 23:30",0,"Ti ho preparato io il materiale per domani. Corda nel sacco rosso, già controllata. Dormi."],
   ["sab 06:35",1,"Grazie. Parto."],
   ["",2,"2 messaggi eliminati venerdì."],
   ["ven 22:10",0,"René ripensaci. 380.000. Io ho addosso i debiti dell'albergo di mio padre, non ci dormo.","did"],
   ["ven 22:20",1,"No. E smetti di parlarne con la Brandt alle mie spalle. Il rifugio non si vende finché ci sono io.","did"]]},
  {id:"fabio",name:"Fabio cliente",sub:"",m:[
   ["sab 09:15",0,"Vocale all'emergenza inoltrato: «Sono in cresta sopra il rifugio, la guida è caduta, la corda... la corda si è rotta, non lo vedo più.»"],
   ["sab 14:00",0,"Ho detto ai carabinieri che si era slegato lui. Avevo paura che dessero la colpa a me. Non è vero: la corda si è spezzata da sola, a metà."],
   ["dom 10:00",0,"Ho corretto la deposizione. Scrivo qui perché non so a chi altro dirlo."]]},
  {id:"luc",name:"Luc",sub:"",m:[
   ["1 nov",0,"René ti rubo due clienti quando torno. Sono in Nepal fino a Natale con la spedizione."],
   ["1 nov",1,"Portami una bandierina."]]},
  {id:"brandt",name:"Frau Brandt",sub:"",m:[
   ["gio 11:00",0,"Signor Bionaz, da Zurigo confermo: l'offerta di AlpHotels resta valida fino a fine mese. Servono entrambe le firme."],
   ["gio 11:30",1,"La mia non l'avrà. Buona giornata."]]},
  {id:"notaio",name:"Notaio Perron",sub:"",m:[
   ["mer 09:00",1,"Notaio, mi ricorda che cosa dice il patto tra me e Didier se uno dei due viene a mancare?"],
   ["mer 09:40",0,"Dal 2012: la quota del socio defunto passa per intero al socio superstite, che liquida gli eredi a valore di perizia. Perché me lo chiede?"],
   ["mer 09:45",1,"Curiosità. Grazie."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"AlpHotels",sub:"Proposta d'acquisto",meta:"3 novembre",body:"Offerta per il rifugio: 380.000 €.\nNecessarie le firme di entrambi i soci."},
   {id:"m2",title:"Soccorso alpino",sub:"Bollettino di sabato",meta:"venerdì sera",body:"Sereno, vento debole. Pericolo valanghe: grado 1. Roccia asciutta."},
   {id:"m3",title:"Assicurazione",sub:"Polizza vita",meta:"2015",body:"Polizza vita stipulata nel 2015 a favore di Chantal Bionaz. Nessuna modifica successiva."}],
  map:[
   {id:"g1",g:"Sabato",title:"Partenza dal sentiero",sub:"06:40",meta:"Traccia",body:"Partenza alle 06:40."},
   {id:"g2",g:"Sabato",title:"Cresta sopra il rifugio",sub:"09:15",meta:"Ultima posizione",body:"La traccia si interrompe alle 09:15."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Sab · Cliente Fabio",sub:"06:30",body:"Cresta facile."},
   {id:"c2",g:"Questa settimana",title:"Dom · Didier",sub:"",body:"Proporgli di comprargli la quota."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora della partenza di sabato, quattro cifre.\nNota sotto: il numero della corda che non doveva essere nel sacco, con uno zero davanti."},
   {id:"n2",title:"Rifugio",lock:"note",body:"Didier vuole vendere per i debiti di suo padre.\nIo qui ci ho messo vent'anni.\nDomenica gli propongo di comprargli la quota a rate. Se dice no, pazienza: ma non firmo."}],
  drive:[
   {id:"d1",title:"Inventario corde del rifugio",sub:"Foglio",meta:"Aggiornato il 2 settembre",body:"A-112, A-118, A-120: in servizio.\nA-097: ritirata dal servizio il 2 settembre per usura dell'anima. Nota di René: «tagliare e buttare».\nResponsabile del magazzino: Didier."},
   {id:"d2",title:"Patto sociale 2012",sub:"PDF",meta:"Notaio Perron",body:"Art. 7: in caso di morte di un socio la sua quota passa al socio superstite."}],
  tel:[
   {id:"t1",title:"Didier",sub:"ven 22:25 · in entrata, 12 min"},
   {id:"t2",title:"Notaio Perron",sub:"mer 08:55 · in uscita, 4 min"}]
 },
 photos:[
  {id:"p1",t:"ago",title:"Casa",sc:"hut"},
  {id:"p2",t:"lug",title:"Con Chantal",sc:"cha"},
  {id:"p3",t:"sab 06:40",title:"Si parte",sc:"start"},
  {id:"p4",t:"ven 21:00",title:"Bollettino",sc:"met"},
  {id:"h1",t:"2 set",title:"Inventario",sc:"inv",lock:"album"},
  {id:"h2",t:"3 nov",title:"L'offerta",sc:"off",lock:"album"}],
 pins:{note:"0097",album:"0640"},
 events:[{id:"a",q:4,kind:"call",from:"Didier",lines:["«Buongiorno, sono Didier, il socio di René. Lei è il perito?»","«La corda era nuova, l'ho controllata io. Quella foto della partenza non serve a niente: è sfocata, la cancelli pure.»","«Pronto?»"]},
         {id:"b",q:9,kind:"sms",from:"Frau Brandt",text:"Signor Bionaz, il suo socio mi ha appena scritto che da oggi può firmare da solo. Mi conferma? Non ho capito che cosa sia cambiato."}],
 qs:[
  {t:"1",q:"Partiamo dal meteo. Quale grado di pericolo indicava il bollettino di sabato?",a:["1","uno","grado 1"],show:"Grado 1",hint:"C'è una mail del soccorso alpino.",news:"Sereno, vento debole, roccia asciutta. Il meteo non c'entra."},
  {t:"09:15",q:"A che ora il cliente Fabio ha chiamato i soccorsi?",all:["915"],show:"Alle 09:15",hint:"Il vocale è stato inoltrato nella chat.",news:"«La corda si è rotta.» È la prima cosa che ha detto, a caldo. Poi ha cambiato versione per paura, e l'ha corretta domenica."},
  {t:"Lione",q:"La moglie Chantal incassa una polizza. In quale città era da venerdì?",any:["lione","lyon"],show:"A Lione",hint:"Messaggio di venerdì sera.",news:"Dalla madre, fino a martedì. E la polizza è del 2015, mai modificata."},
  {t:"Nepal",q:"La guida rivale Luc: dove si trova fino a Natale?",any:["nepal"],show:"In Nepal",hint:"Lo scrive lui.",news:"Con una spedizione. Frau Brandt scrive da Zurigo. Nessuno dei due ha toccato quella corda."},
  {t:"A-097",q:"Nella foto della partenza si legge la targhetta della corda. Quale sigla?",a:["a097","a-097","a 097","097"],show:"A-097",hint:"René ha fotografato il sacco aperto alle 06:40.",news:"Una sigla precisa. Il rifugio tiene un inventario di tutte le corde."},
  {t:"2 settembre",q:"Secondo l'inventario, in quale giorno la A-097 è stata ritirata dal servizio? Giorno e mese.",all:["2","sett"],show:"Il 2 settembre",hint:"L'inventario è nel Drive.",news:"Per usura dell'anima. René aveva scritto: «tagliare e buttare». Due mesi e mezzo dopo era nel suo sacco."},
  {t:"Didier",q:"Chi ha preparato il materiale per sabato?",any:["didier","socio"],show:"Didier, il socio",hint:"Messaggio di venerdì alle 23:30.",news:"«Corda nel sacco rosso, già controllata.» È anche il responsabile del magazzino. Ora che sai chi ha fatto il sacco, hai recuperato i due messaggi eliminati nella sua chat.",unlock:"did"},
  {t:"380000",q:"Quanto offre AlpHotels per il rifugio?",a:["380000","380.000","380000 euro","380.000 euro","380.000 €","380mila"],show:"380.000 €",hint:"Mail e messaggi recuperati.",news:"Servono le firme di tutti e due. René ha detto no, giovedì e di nuovo venerdì sera."},
  {t:"del padre",q:"Perché Didier vuole vendere? Ha addosso i debiti dell'albergo di chi?",any:["padre","papa"],show:"Di suo padre",hint:"Primo messaggio recuperato.",news:"«Non ci dormo.» Un'ora e venti dopo ha preparato il sacco."},
  {t:"a Didier",q:"Secondo il patto sociale, a chi passa la quota di René se muore?",any:["didier","socio","superstite"],show:"Al socio superstite: Didier",hint:"Lo spiega il notaio, e c'è il PDF nel Drive.",news:"Con la quota di René, Didier può firmare da solo. René lo aveva chiesto al notaio mercoledì: qualcosa aveva intuito."},
  {t:"tagliare e buttare",q:"Nell'album privato c'è l'inventario fotografato. Che cosa aveva scritto René accanto alla A-097?",any:["tagliare","buttare"],show:"«Tagliare e buttare»",hint:"Il codice dell'album è l'ora della partenza.",news:"Non è stata buttata. È stata conservata."},
  {t:"domenica",q:"Nella nota protetta René scrive quando avrebbe fatto a Didier una proposta. In quale giorno?",any:["domenica"],show:"Domenica",hint:"Il codice è il numero della corda, con uno zero davanti.",news:"Voleva comprargli la quota a rate, per aiutarlo con i debiti. Non ha fatto in tempo."},
  {t:"d",q:"Chi è stato?",o:[["f","Fabio, il cliente"],["c","Chantal, la moglie"],["d","Didier, il socio"],["l","Luc, la guida rivale"],["b","Frau Brandt"],["n","Nessuno: la corda si è rotta da sola"]],a:"d",show:"Didier, il socio",hint:"Chi ha messo nel sacco una corda da buttare?",news:""}],
 win:{title:"È stato Didier, il socio.",
  steps:["La corda di sabato aveva la targhetta A-097: ritirata dal servizio il 2 settembre, da tagliare e buttare.","Il sacco lo ha preparato Didier, responsabile del magazzino, venerdì alle 23:30.","Un'ora prima René gli aveva detto per l'ultima volta che il rifugio non si vendeva.","Per il patto del 2012 la quota di René passa a Didier, che così può accettare da solo i 380.000 € di AlpHotels.","Meteo perfetto, moglie a Lione, rivale in Nepal. Il cliente ha mentito solo per paura."],
  end:"Il perito ingrandisce la foto della partenza finché la targhetta si legge bene. «A-097», dice. «Ha fotografato la prova da solo, venti minuti prima di salire.» Chiude il fascicolo. «La polizza alla signora la paghiamo. Il resto lo mando in procura.»"}
});
LIB.tune(29,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d2").lock="pat";
 e.pins={album:"0640",pat:"2012",note:"9707"};
 e.locks={album:{hint:"L'ora in cui siamo partiti."},pat:{name:"File protetto",hint:"L'anno in cui abbiamo firmato."},note:{hint:"La corda che non doveva uscire, poi l'articolo che conta."}};
 e.spots=[
  {id:"s1",x:300,y:74,label:"Rifugio",title:"Rifugio Bionaz",sub:"2.400 m · ★ 4,9",body:"Deposito delle corde al piano terra. Le prepara chi apre il rifugio la sera prima."},
  {id:"s2",x:266,y:44,label:"Cresta",title:"Cresta sopra il rifugio",sub:"Facile, roccia",body:"Sabato roccia asciutta. La traccia di René si interrompe alle 9:15."},
  {id:"s3",x:200,y:214,label:"Casa",title:"Casa di René",sub:"Fondovalle",body:"Una lettera di AlpHotels sul tavolo, aperta."}];
 LIB.hints(e,["Il soccorso alpino manda un bollettino.","Il cliente ha chiamato.","La moglie era lontana.","La guida rivale è lontanissima.","Una foto della partenza: leggi la targhetta.","L'inventario dice quando è stata ritirata.","Chi ha preparato il materiale?","Un'offerta per il rifugio.","Perché il socio vuole vendere?","Il patto sociale è chiuso.","L'inventario fotografato è nascosto.","René aveva un piano per domenica.","Chi ha messo quella corda nel sacco, e chi ci guadagna?"]);
});
})();
