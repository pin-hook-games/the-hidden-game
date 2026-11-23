(function(){
/* Furti 3: L'auto del dentista (Brescia). Soluzione: il carrozziere Ennio Bonetti.
   Durante il tagliando (durato un giorno in più) ha duplicato la chiave elettronica. Alle 3:12 l'auto si apre con la «chiave 2». Altre due auto di clienti dell'officina sparite. Ultima posizione: porto di Genova. */
const SC={
 suv:()=>LIB.car("#2b3a55","Il SUV, nel box"),
 app:()=>LIB.doc("App dell'auto · eventi","#33658a",["Sab 3:12 · Apertura","con chiave 2","Sab 3:14 · Avvio motore","Sab 6:40 · Ultima posizione: porto di Genova"]),
 tag:()=>LIB.doc("Officina Bonetti · fattura","#55606b",["Tagliando + carrozzeria","Ingresso: 13 ottobre","Riconsegna: 15 ottobre","Chiavi elettroniche: 2"]),
 cog:()=>LIB.two("#c9b79c","#33658a","#7a3b5a","Con Luca, il cognato"),
 grp:()=>LIB.shot("Pazienti · gruppo",["Anche a me hanno rubato la macchina!","l'avevo fatta controllare da Bonetti"]),
 key:()=>LIB.doc("Concessionaria · chiavi registrate","#a02822",["Chiave 1: con il cliente","Chiave 2: programmata il 14/10","presso centro esterno","non consegnata al cliente"])
};
const MAP=LIB.city("Brescia",[[40,52,"Centro"],[132,132,"Lamarmora"],[276,132,"San Polo"],[40,232,"Zona Sud"],[300,40,"Castello"],[200,200,"Tangenziale"]],
 [[170,60,"#d43d55","casa e box",9,-10],[80,226,"#33658a","Officina Bonetti",9,-8]]);

LIB.add(43,["L'auto del dentista","Marco vuole dimostrare all'assicurazione come gli è sparito il SUV dal box","Brescia"],{
 map:MAP,scenes:SC,owner:"Marco Ferrari",time:"18:30",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["auto","Auto","two_wheeler","#5aa9ff,#2563d8"]],
 late:"Marco ha un paziente urgente. Si riprende il telefono per le chiamate.",
 brief:"Marco Ferrari, 48 anni, dentista, sabato mattina ha trovato il box chiuso e vuoto: il SUV non c'era più. L'assicurazione non gli crede, perché non ci sono segni di scasso. Il perito Gualtieri ha già fatto un sopralluogo. Marco ti ha dato il suo telefono.",
 quote:"«Il box ha il codice, la macchina ha la chiave elettronica, la chiave ce l'ho io. Il perito mi guarda come se l'avessi venduta io. E l'unico che sa il codice del box è mio cognato, che il mese scorso mi aveva chiesto la macchina in prestito. Non voglio credere che sia lui.»",
 chats:[
  {id:"luc",name:"Luca",sub:"Cognato",m:[
   ["ott",0,"Marco, mi presti il SUV per il trasloco? Il codice del box è sempre quello?"],
   ["sab",0,"Marco ho saputo. Io venerdì notte ero a Verona, alla festa di mia figlia. Ci sono cento persone che mi hanno visto."]]},
  {id:"ben",name:"Officina Bonetti",sub:"Ennio",m:[
   ["13 ott",0,"Dottore, la macchina è qui. Domani sera è pronta."],
   ["14 ott",0,"Mi serve un giorno in più, aspettiamo un pezzo. Se mi lascia anche la seconda chiave, controllo la batteria."],
   ["14 ott",1,"La seconda chiave non ce l'ho più, l'ho persa l'anno scorso."],
   ["15 ott",0,"Pronta. Tutto a posto."]]},
  {id:"paz",name:"Pazienti amici",sub:"Gruppo",m:[
   ["dom",0,"Elena: Ho letto di Marco. A Gianni hanno rubato l'auto a settembre, a me a luglio. Tutte e due appena uscite da Bonetti."],
   ["dom",1,"Davvero? Anche voi da Bonetti?"],
   ["dom",0,"Gianni: Sì, tagliando. Due settimane dopo, sparita. Senza un graffio al garage."]]},
  {id:"per",name:"Perito Gualtieri",sub:"",m:[
   ["sab",0,"Dottore, mi dica il nome dell'officina dove fa i tagliandi, e il modello della serratura del box. Mi servono per la pratica."],
   ["sab",1,"Officina Bonetti. Il box ha una serratura Elettra."]]},
  {id:"con",name:"Concessionaria",sub:"",m:[
   ["",2,"1 messaggio non letto, archiviato."],
   ["lun 11:00",0,"Dottore, dal registro chiavi risulta una chiave 2 programmata il 14 ottobre presso un centro esterno, su richiesta dell'officina Bonetti. Lei ne era al corrente?","con"]]}
 ],
 lists:{
  auto:[
   {id:"a1",g:"Eventi",title:"Sab 3:12 · Apertura",sub:"Chiave 2",body:"Apertura porte con chiave 2."},
   {id:"a2",g:"Eventi",title:"Sab 3:14 · Avvio",sub:"",body:""},
   {id:"a3",g:"Eventi",title:"Sab 6:40 · Ultima posizione",sub:"Porto di Genova",body:"Poi il segnale si perde."}],
  mail:[
   {id:"m1",title:"Assicurazione",sub:"Pratica in sospeso",meta:"oggi",body:"In assenza di segni di effrazione la pratica resta sospesa. Il perito Gualtieri ha chiesto approfondimenti."},
   {id:"m2",title:"Officina Bonetti",sub:"Fattura",meta:"15 ottobre",body:"Tagliando + piccola carrozzeria.\nIngresso 13/10, riconsegna 15/10."}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Officina Bonetti",sub:"Zona Sud",body:""}],
  cal:[
   {id:"c1",g:"Ottobre",title:"13 ott · Auto da Bonetti",sub:"8:00",body:""},
   {id:"c2",g:"Ottobre",title:"14 ott · Ritiro auto",sub:"18:00",body:"Spostato al 15."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora dell'apertura, quattro cifre.\nNota sotto: il giorno e il mese in cui è stata programmata la chiave 2, quattro cifre."},
   {id:"n2",title:"Per l'assicurazione",lock:"note",body:"Io ho una sola chiave, la 1. La 2 l'ho persa l'anno scorso e la concessionaria l'aveva disattivata.\nLa nuova chiave 2 è nata il 14 ottobre, il giorno in più del tagliando.\nTre auto, la stessa officina."}],
  tel:[
   {id:"t1",title:"Officina Bonetti",sub:"14 ott · in entrata, 2 min"},
   {id:"t2",title:"Concessionaria",sub:"lun 11:10 · in uscita, 9 min"}]
 },
 photos:[
  {id:"p1",t:"ago",title:"Il SUV",sc:"suv"},
  {id:"p2",t:"15 ott",title:"Fattura",sc:"tag"},
  {id:"p3",t:"2024",title:"Con Luca",sc:"cog"},
  {id:"p4",t:"dom",title:"Dal gruppo",sc:"grp"},
  {id:"h1",t:"sab",title:"App",sc:"app",lock:"album"},
  {id:"h2",t:"lun",title:"Registro chiavi",sc:"key",lock:"album"}],
 pins:{note:"1410",album:"0312"},
 events:[{id:"a",q:3,kind:"call",from:"Ennio Bonetti",lines:["«Dottore? Ho saputo della macchina, che brutta storia.»","«Se le serve un'auto sostitutiva gliela do io, eh. Lei però non si agiti con l'assicurazione, queste cose si sistemano.»","«...Pronto? Non è il dottore?»"]},
         {id:"b",q:7,kind:"sms",from:"Gualtieri",text:"Dottore, ho letto il registro delle chiavi. Le credo. Mi segno il nome dell'officina, e il porto: queste cose mi interessano."}],
 qs:[
  {t:"3:12",q:"A che ora si è aperta l'auto, sabato notte?",all:["312"],show:"Alle 3:12",hint:"App Auto.",news:"Nessuna effrazione: si è aperta come se avessero la chiave."},
  {t:"chiave 2",q:"Con quale chiave?",a:["2","chiave 2","la 2","due","chiave due","la seconda","seconda","la chiave 2"],show:"Con la chiave 2",hint:"App Auto.",news:"Ma Marco ha solo la chiave 1."},
  {t:"porto di Genova",q:"Dove è stata l'ultima posizione dell'auto?",any:["genova","porto"],show:"Al porto di Genova",hint:"App Auto.",news:"Alle 6:40, poi il segnale si perde."},
  {t:"Verona",q:"Dov'era il cognato Luca venerdì notte?",any:["verona","festa"],show:"A Verona, alla festa della figlia",hint:"Chat con Luca.",news:"Cento testimoni. La falsa pista cade."},
  {t:"Bonetti",q:"In quale officina Marco ha fatto il tagliando?",any:["bonetti","ennio"],show:"Officina Bonetti, di Ennio",hint:"Fattura e chat.",news:"Un giorno in più, «aspettiamo un pezzo»."},
  {t:"15 ottobre",q:"Quando gli è stata riconsegnata l'auto? Giorno e mese.",all:["15","ott"],show:"Il 15 ottobre, invece del 14",hint:"Fattura e calendario.",news:"Il 14 Ennio aveva chiesto anche la seconda chiave."},
  {t:"altri due",q:"A quanti altri clienti dell'officina è sparita l'auto?",a:["2","due","altri due","a due","due clienti"],show:"Due: Elena a luglio, Gianni a settembre",hint:"Gruppo dei pazienti.",news:"Tutti e due appena usciti da Bonetti. Ora hai riletto il messaggio della concessionaria che era finito in archivio.",unlock:"con"},
  {t:"14 ottobre",q:"Secondo la concessionaria, quando è stata programmata una nuova chiave 2? Giorno e mese.",all:["14","ott"],show:"Il 14 ottobre",hint:"Messaggio della concessionaria.",news:"Su richiesta dell'officina Bonetti, presso un centro esterno."},
  {t:"tre",q:"Nella nota protetta: quante auto, la stessa officina?",a:["3","tre","tre auto"],show:"Tre",hint:"Il codice: giorno e mese della chiave 2.",news:"Il giorno in più del tagliando."},
  {t:"e",q:"Chi ha rubato il SUV?",o:[["l","Luca, il cognato"],["m","Marco, per l'assicurazione"],["e","Ennio Bonetti, il carrozziere: ha duplicato la chiave"],["c","La concessionaria"],["n","Un ladro con un disturbatore di segnale"]],a:"e",show:"Ennio Bonetti",hint:"Chi ha avuto l'auto il giorno in cui è nata la chiave 2?",news:""}],
 win:{title:"Il SUV l'ha fatto sparire Ennio Bonetti.",
  steps:["L'auto si è aperta alle 3:12 con la chiave 2. Marco ha solo la chiave 1.","Il tagliando da Bonetti è durato un giorno in più: il 14 ottobre una nuova chiave 2 è stata programmata su richiesta dell'officina.","Ad altri due clienti di Bonetti è sparita l'auto, poco dopo il tagliando.","L'ultima posizione è il porto di Genova. Il cognato Luca era a Verona."],
  end:"L'assicurazione riapre la pratica. Al porto di Genova la guardia di finanza trova il SUV in un container per l'Africa, con altre due auto: una di Elena e una di Gianni. Gualtieri manda a Marco un messaggio: «Ottimo. Mi segno tutto.»"}
});
LIB.tune(43,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.chats.find(c=>c.id==="luc").m.splice(1,0,["ott",1,"Sì, sempre 2209. Riportala piena, eh."]);
 e.lists.auto.push({id:"a4",g:"Archivio",title:"Viaggi di ottobre",sub:"Archivio protetto",lock:"arc",body:"13 ott 8:00 · casa → Carrozzeria Bonetti\n14 ott 21:40 · Carrozzeria Bonetti → Centro chiavi Brixia\n14 ott 23:10 · Centro chiavi Brixia → Carrozzeria Bonetti\n15 ott 18:00 · Carrozzeria Bonetti → casa"});
 e.pins={album:"0312",arc:"2209",note:"1421"};
 e.locks={album:{hint:"Il minuto in cui la macchina ha obbedito a qualcun altro."},arc:{name:"Archivio viaggi",hint:"Lo stesso del box: lo sa anche mio cognato."},note:{hint:"Il giorno dell'altra chiave, poi l'ora di un giro che io non ho fatto."}};
 e.spots=[
  {id:"s1",x:170,y:60,label:"Casa",title:"Casa e box",sub:"Box con codice · serratura Elettra",body:"Nessun segno sulla saracinesca. Chi è entrato aveva il codice, oppure non ne aveva bisogno: l'auto si apre da sola con la chiave giusta."},
  {id:"s2",x:80,y:226,label:"Bonetti",title:"Carrozzeria Bonetti",sub:"Carrozzeria · ★ 4,1",body:"Recensione: «Lavoro ottimo, ma mi hanno tenuto l'auto un giorno in più senza spiegare. Due settimane dopo me l'hanno rubata.»"},
  {id:"s3",x:270,y:120,label:"Centro chiavi",title:"Centro chiavi Brixia",sub:"Duplicazione chiavi auto · chiude alle 19",body:"Recensione: «Per le officine amiche aprono anche di sera. Gentilissimi.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"centro chiavi",q:"La sera del 14 ottobre l'auto era in officina. Dove è andata, di notte?",any:["brixia","centrochiavi"],show:"Al Centro chiavi Brixia, dalle 21:40 alle 23:10",hint:"",news:"Con l'auto di Marco, mentre era «in attesa di un pezzo»."});
 LIB.hints(e,["L'auto tiene un suo diario.","Le chiavi registrate non sono tutte uguali.","L'ultimo posto in cui l'auto si è fatta sentire.","Il cognato ha un alibi pieno di gente.","Prima del furto l'auto era stata in mani esperte.","La fattura dice una cosa, il calendario un'altra.","Altri pazienti parlano tra loro.","Un messaggio era finito dove nessuno guarda.","Il dentista ha messo tutto per iscritto.","Anche le notti in officina lasciano traccia, in un archivio chiuso.","Chi ha avuto l'auto il giorno in cui è nata l'altra chiave?"]);
});
})();
