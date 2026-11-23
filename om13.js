(function(){
/* Omicidi 13: Buonanotte papà (Bari). Soluzione: il geometra Vito Sisto. Firmava collaudi falsi e il costruttore lo aveva portato davanti alla crepa. Il figlio Nicola è innocente. */
const SC={
 site:()=>LIB.obj("#dfe5ea","🏗️","Lotto B, il cantiere"),
 fam:()=>LIB.two("#8fb3c9","#55606b","#1f3a66","Con papà, posa della prima pietra"),
 crack:()=>LIB.obj("#d9d2c4","🧱","Pilastro 12 · inoltrata da papà, 20:10"),
 pub:()=>LIB.doc("Pub Il Trabucco, Monopoli","#b0764a",["Martedì ore 22:15","2 birre, 1 panino","Totale 19,00 €","Carta di N. Lorusso"]),
 coll:()=>LIB.doc("Verbale di collaudo","#55606b",["Lotto B · pilastro 12","Esito: conforme","Data: 4 agosto","Firma: geom. V. Sisto"]),
 fer:()=>LIB.doc("Impresa Lorusso · avviso","#33658a",["Chiusura per ferie","dal 1° al 24 agosto","Cantiere fermo, nessun accesso","Getti ripresi il 26 agosto"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Bari e della costa",
 water:[["M0 30Q200 60 400 120",50]],
 roads:["M40 110Q200 130 380 200","M100 110V240","M200 130V250","M40 190H260"],
 labels:[[150,92,"Bari"],[60,160,"Poggiofranco"],[206,196,"Japigia"],[330,186,"Monopoli"],[290,60,"Adriatico"],[250,150,"40 km"]],
 pins:[[80,200,"#d43d55","cantiere, 21:40",9,16],[360,196,"#33658a","Nicola, 22:15",-90,22],[150,120,"#56666e","casa",9,16]]});

LIB.add(33,["Buonanotte papà","La madre di Nicola vuole scagionare il figlio","Bari"],{
 map:MAP,scenes:SC,owner:"Nicola Lorusso",time:"08:30",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal map cal note bank drive",
 late:"Nicola è stato convocato in questura con il telefono. La madre ha dovuto restituirglielo.",
 brief:"La madre ti ha portato il telefono del figlio Nicola Lorusso, 29 anni. Martedì sera suo padre Michele, costruttore, è morto cadendo da un solaio del cantiere di Poggiofranco. La mattina padre e figlio avevano litigato davanti agli operai. Nicola è indagato.",
 quote:"«Hanno litigato per l'azienda, è vero, e mezzo cantiere li ha sentiti. Ma Nicola non avrebbe mai alzato un dito su suo padre. Lui dice che quella sera era a Monopoli. Se in questo telefono c'è qualcosa che lo dimostra, la prego, lo trovi.»",
 chats:[
  {id:"papa",name:"Papà",sub:"",m:[
   ["mar 08:40",1,"L'azienda la stai lasciando morire. Sei stanco e non lo ammetti."],
   ["mar 08:42",0,"E tu la vuoi vendere al primo che passa. Ne riparliamo."],
   ["mar 20:10",0,"[foto] Guarda il pilastro 12. Ti sembra «conforme»?"],
   ["mar 20:15",1,"No. Chi l'ha collaudato?"],
   ["mar 21:40",0,"Sono in cantiere con Vito, mi fa vedere lui la crepa da vicino. Domani parliamo io e te, con calma. Buonanotte."],
   ["",2,"1 messaggio vocale eliminato per errore."],
   ["mar 20:20",0,"Vocale (0:14): «Nicola, se i collaudi sono falsi come penso, Vito ci manda in galera tutti. Stasera lo metto davanti alla crepa e voglio vedere che faccia fa.»","pil"]]},
  {id:"vito",name:"Geom. Vito",sub:"",m:[
   ["mer 07:30",0,"Nicola, una disgrazia. Io ieri sera sono andato via alle nove, tuo padre voleva restare a controllare da solo."],
   ["mer 07:40",1,"Alle nove? Mi ha scritto alle 21:40 che eri con lui."],
   ["mer 07:45",0,"Si sarà confuso. Era molto agitato per la lite con te."]]},
  {id:"pasq",name:"Pasquale capocantiere",sub:"",m:[
   ["mar 21:50",0,"[foto] È nata! 3 chili e 200. Sono in ospedale da stamattina, domani non vengo."],
   ["mar 21:55",1,"Auguri Pasquà! Dai un bacio alla piccola."]]},
  {id:"detullio",name:"Ing. De Tullio",sub:"",m:[
   ["lun 11:00",0,"Nicola, la mia offerta per rilevare l'impresa resta valida. Sono a Milano fino a venerdì per il salone, ne parliamo al rientro."],
   ["lun 11:20",1,"Ingegnere, mio padre non vende. E in fondo neanche io."]]},
  {id:"saverio",name:"Saverio",sub:"",m:[
   ["ott",0,"Nicò, dì a tuo padre che in Germania mi pagano il doppio. Nessun rancore, ma i contributi me li doveva."],
   ["ott",1,"Glielo dico. Hai ragione sui contributi."]]},
  {id:"carbone",name:"Avv. Carbone",sub:"",m:[
   ["mar 09:00",0,"Se entro fine mese non mi consegnate l'appartamento del Lotto B faccio causa. Oggi e domani sono a Lecce per un'udienza, mi richiami giovedì."],
   ["mar 09:10",1,"La richiamo giovedì, avvocato."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Impresa Lorusso",sub:"Chiusura estiva",meta:"luglio",body:"Il cantiere del Lotto B resta chiuso per ferie dal 1° al 24 agosto.\nNessun accesso, nessun getto, nessuna prova sui materiali."},
   {id:"m2",title:"Cantiere Lotto B",sub:"Registro del custode",meta:"mercoledì",body:"Martedì sera: ingresso del geom. Sisto alle 21:05, uscita alle 22:20.\nIngresso del sig. Lorusso Michele alle 21:15. Nessuna uscita."}],
  map:[
   {id:"g1",g:"Martedì",title:"Monopoli, un pub sul porto",sub:"21:10 - 23:30",meta:"Permanenza",body:"Arrivo alle 21:10, partenza alle 23:30.\nIl cantiere di Poggiofranco è a 40 chilometri."},
   {id:"g2",g:"Martedì",title:"Cantiere, Poggiofranco",sub:"07:30 - 09:00",meta:"Permanenza",body:"Solo la mattina."}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Pub Il Trabucco, Monopoli",sub:"mar 22:15 · − 19,00 €"},
   {id:"b2",g:"Movimenti",title:"Benzina, statale 16",sub:"mar 20:50 · − 40,00 €"}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Mar · Pub con Dario",sub:"21:00",body:"Monopoli."},
   {id:"c2",g:"Questa settimana",title:"Mer · Papà",sub:"09:00",body:"Parlare con calma."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora dell'ultimo messaggio di papà, quattro cifre.\nNota sotto: il numero del pilastro, scritto con quattro cifre."},
   {id:"n2",title:"Martedì",lock:"note",body:"Stamattina gli ho detto cose brutte davanti a tutti.\nNon volevo vendere. Volevo che si riposasse.\nL'ultima parola che mi ha scritto è buonanotte."}],
  drive:[
   {id:"d1",title:"Collaudi Lotto B",sub:"Cartella condivisa",meta:"3 file",body:"Tre verbali di collaudo dei pilastri 10, 11 e 12, tutti «conformi».\nDate: 3, 4 e 5 agosto.\nTutti firmati dal geom. V. Sisto."}],
  tel:[
   {id:"t1",title:"Papà",sub:"mar 20:12 · in entrata, 5 min"},
   {id:"t2",title:"Mamma",sub:"mer 06:10 · in entrata, 2 min"}]
 },
 photos:[
  {id:"p1",t:"set",title:"Cantiere",sc:"site"},
  {id:"p2",t:"2019",title:"Con papà",sc:"fam"},
  {id:"p3",t:"mar 20:10",title:"Da papà",sc:"crack"},
  {id:"p4",t:"mar 22:15",title:"Scontrino",sc:"pub"},
  {id:"h1",t:"mar 20:30",title:"Collaudo",sc:"coll",lock:"album"},
  {id:"h2",t:"lug",title:"Ferie",sc:"fer",lock:"album"}],
 pins:{note:"0012",album:"2140"},
 events:[{id:"a",q:3,kind:"call",from:"Geom. Vito",lines:["«Signora Lorusso, è lei? Sono Vito.»","«Nicola ha delle foto del cantiere nel telefono: per la sicurezza dell'impresa è meglio cancellarle, prima che le veda la polizia e pensi male.»","«Signora?»"]},
         {id:"b",q:9,kind:"sms",from:"Pasquale capocantiere",text:"Signora, io ad agosto ero in ferie come tutti. Nessuno ha collaudato niente, il cantiere era chiuso col lucchetto. Lo metto per iscritto."}],
 qs:[
  {t:"21:40",q:"A che ora il padre ha scritto a Nicola l'ultimo messaggio?",all:["2140"],show:"Alle 21:40",hint:"Chat con papà.",news:"«Domani parliamo io e te, con calma. Buonanotte.» Non sembra il messaggio di un padre che sta litigando con il figlio."},
  {t:"Vito",q:"Con chi dice di essere in cantiere, in quel messaggio?",any:["vito","sisto","geometra"],show:"Con Vito, il geometra",hint:"Stesso messaggio.",news:"Vito invece ha scritto a Nicola di essere andato via «alle nove». Uno dei due orari è falso."},
  {t:"22:20",q:"A che ora risulta uscito il geometra dal cantiere, secondo il custode?",all:["2220"],show:"Alle 22:20",hint:"C'è una mail con il registro del custode.",news:"Entrato alle 21:05, uscito alle 22:20. Ha mentito di un'ora e venti. E Michele non è mai uscito."},
  {t:"Monopoli",q:"Dov'era Nicola alle 22:15?",any:["monopoli"],show:"A Monopoli",hint:"Mappe, Banca e uno scontrino in Galleria.",news:"In un pub sul porto, dalle 21:10 alle 23:30, con la carta strisciata alle 22:15."},
  {t:"40",q:"Quanti chilometri ci sono tra Monopoli e il cantiere?",a:["40","quaranta","40 km","40 chilometri"],show:"40",hint:"Lo dice Mappe.",news:"Nicola non poteva essere sul solaio. La lite del mattino resta una lite."},
  {t:"in ospedale",q:"Il capocantiere Pasquale dov'era martedì sera?",any:["ospedal","nata","nascit","parto"],show:"In ospedale: gli è nata una figlia",hint:"Ha mandato una foto alle 21:50.",news:"Tre chili e duecento. L'ing. De Tullio era a Milano, Saverio lavora in Germania, l'avv. Carbone era a Lecce."},
  {t:"12",q:"Quale pilastro aveva fotografato il padre? Scrivi il numero.",a:["12","il 12","pilastro 12","dodici"],show:"Il pilastro 12",hint:"Messaggio delle 20:10.",news:"Una crepa su un pilastro dichiarato «conforme». Ora che sai che cosa guardava, hai recuperato il vocale eliminato nella chat con papà.",unlock:"pil"},
  {t:"in galera",q:"Nel vocale il padre dice dove li manda tutti Vito, se i collaudi sono falsi. Dove?",any:["galera","prigione","carcere"],show:"In galera",hint:"Ascolta il vocale recuperato.",news:"«Stasera lo metto davanti alla crepa.» Lo ha fatto. Era l'appuntamento delle 21."},
  {t:"3",q:"Quanti verbali di collaudo ha firmato Vito per il Lotto B?",a:["3","tre","3 verbali","tre verbali"],show:"Tre",hint:"Cartella condivisa nel Drive.",news:"Pilastri 10, 11 e 12, tutti «conformi», datati 3, 4 e 5 agosto."},
  {t:"24",q:"Ma il cantiere era chiuso per ferie. Fino a quale giorno di agosto?",all:["24"],show:"Fino al 24 agosto",hint:"C'è una mail dell'impresa.",news:"Nessun accesso e nessuna prova dal 1° al 24. I collaudi di inizio agosto non possono essere stati fatti."},
  {t:"4 agosto",q:"Nell'album privato c'è il verbale del pilastro 12. Che data porta? Giorno e mese.",all:["4","ago"],show:"4 agosto",hint:"Il codice dell'album è l'ora dell'ultimo messaggio del padre.",news:"Firmato in un giorno in cui il cantiere era chiuso con il lucchetto."},
  {t:"buonanotte",q:"Nella nota protetta Nicola scrive l'ultima parola che gli ha mandato suo padre. Quale?",any:["buonanotte","buona notte"],show:"«Buonanotte»",hint:"Il codice è il numero del pilastro, con gli zeri davanti.",news:"«Non volevo vendere. Volevo che si riposasse.»"},
  {t:"v",q:"Chi è stato?",o:[["n","Nicola, il figlio"],["v","Vito, il geometra"],["p","Pasquale, il capocantiere"],["d","L'ing. De Tullio"],["s","Saverio, l'ex operaio"],["c","L'avv. Carbone"],["x","Nessuno: è caduto da solo"]],a:"v",show:"Vito, il geometra",hint:"Chi era con lui sul solaio e ha mentito sull'orario?",news:""}],
 win:{title:"È stato il geometra Vito Sisto. Nicola è innocente.",
  steps:["Michele aveva trovato una crepa nel pilastro 12, che risultava collaudato e «conforme».","I tre collaudi di Vito sono datati 3, 4 e 5 agosto, quando il cantiere era chiuso per ferie.","Martedì sera Michele lo ha portato davanti alla crepa. Alle 21:40 ha scritto al figlio che era con lui.","Vito ha detto di essere uscito alle nove. Il custode lo ha visto uscire alle 22:20.","Nicola era a Monopoli, a 40 chilometri, con uno scontrino delle 22:15."],
  end:"La madre legge la nota di Nicola e chiude gli occhi. «Buonanotte», dice. «Almeno si sono salutati.» Raddrizza la schiena. «Adesso mio figlio in questura ci entra a testa alta. E il geometra spiegherà i suoi agosti.»"}
});
LIB.tune(33,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="cus";
 e.pins={album:"2140",cus:"1203",note:"0405"};
 e.locks={album:{hint:"L'ora del suo ultimo messaggio."},cus:{name:"Mail protetta",hint:"Il pilastro della foto, poi quanti verbali ha firmato."},note:{hint:"Il giorno d'agosto di quel verbale, poi i minuti in cui è entrato il geometra."}};
 e.spots=[
  {id:"s1",x:80,y:200,label:"Cantiere Lotto B",title:"Cantiere Lotto B",sub:"Poggiofranco",body:"Il custode annota a mano chi entra e chi esce dopo le 18."},
  {id:"s2",x:360,y:196,label:"Il Trabucco",title:"Pub Il Trabucco",sub:"Monopoli · ★ 4,5",body:"Recensione: «Martedì due ragazzi al bancone fino a tardi. Uno guardava sempre il telefono, e a un certo punto piangeva.»"},
  {id:"s3",x:150,y:120,label:"Casa",title:"Casa Lorusso",sub:"",body:"Il padre usciva spesso la sera per il cantiere."}];
 LIB.hints(e,["L'ultimo messaggio ha un orario.","Con chi diceva di essere?","Il custode annota tutto, ma la mail è chiusa.","Dov'era il figlio?","Quanto è lontano?","Il capocantiere ha un alibi.","Il padre aveva fotografato qualcosa.","Un vocale dice molto.","I collaudi sono in una cartella.","Ma il cantiere, in agosto, era aperto?","Il verbale nascosto ha una data.","Nicola ha scritto l'ultima parola di suo padre.","Chi era in cantiere con lui, e chi rischiava il carcere?"]);
});
})();
