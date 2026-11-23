(function(){
/* Intrighi 2: La mensa (Monteforte, comune inventato). Soluzione: il dirigente dell'ufficio tecnico, ing. Lupi.
   L'assessora Carla Neri ha firmato un bando con il limite di 15 km; Lupi dopo la firma lo ha cambiato in 3 km, su misura per Ristorazione Valle. */
const SC={
 kid:()=>LIB.group(6,"Mensa della scuola Rodari · ottobre","#f0d9a0"),
 fam:()=>LIB.two("#8fb3c9","#7a3b5a","#55606b","Con Paolo, Monteforte vecchia"),
 pub:()=>LIB.doc("Bando pubblicato · art. 6","#55606b",["Centro cottura","entro 3 km dal municipio","Pena l'esclusione","Albo online, 13 settembre"]),
 tra:()=>LIB.two("#b0764a","#1f3a66","#55606b","Foto di Giorgio · Trattoria del Ponte"),
 fir:()=>LIB.doc("Bando firmato · art. 6","#2f6b4f",["Centro cottura","entro 15 km dal municipio","Firma: C. Neri, assessora","12 settembre, ore 18:00"]),
 ver:()=>LIB.doc("Verbale di gara","#a02822",["Offerte ricevute: 5","Escluse per l'art. 6: 4","Unica ammessa:","Ristorazione Valle srl"])
};
const MAP=LIB.prov([[70,56,"#d43d55","municipio",9,-12],[86,70,"#56666e","Ristorazione Valle, 2,8 km",9,14]]);

LIB.add(62,["La mensa","L'avvocato di Carla Neri vuole capire chi ha truccato il bando","Monteforte"],{
 map:MAP,scenes:SC,owner:"Carla Neri",time:"08:40",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"Carla è stata convocata in procura alle dieci e si è ripresa il telefono. L'avvocato deve andare con quello che ha.",
 brief:"L'avvocato di Carla Neri, 51 anni, assessora alla scuola di Monteforte, ti ha portato il suo telefono. Carla è accusata di aver cucito su misura il bando della mensa scolastica per un'azienda. Alle dieci ha l'interrogatorio.",
 quote:"«Il bando porta la sua firma, il cognato lavora nell'azienda che ha vinto, e per i giornali è finita lì. Carla dice di aver firmato un testo diverso da quello pubblicato. Se è vero, in quel telefono deve esserci qualcosa. Altrimenti la difendo male.»",
 chats:[
  {id:"lupi",name:"Ing. Lupi",sub:"Ufficio tecnico",m:[
   ["12 set 17:30",0,"Assessora, le porto il bando della mensa da firmare alle 18. È la versione concordata."],
   ["12 set 18:05",1,"Firmato. Mi raccomando il limite dei 15 km, così partecipano anche le aziende della valle."],
   ["",2,"2 messaggi eliminati il 12 settembre."],
   ["12 set 22:30",0,"Assessora, carico io la versione definitiva sull'albo stanotte, non si preoccupi. Piccole correzioni di forma.","lup"],
   ["12 set 22:41",0,"Fatto. Buonanotte.","lup"]]},
  {id:"tonino",name:"Tonino",sub:"Cognato",m:[
   ["dom 12:00",0,"Carla mi dispiace per i giornali. Io in magazzino ci sono dal 2019, molto prima di questa gara. Lo dico a chi vuoi."],
   ["dom 12:10",1,"Lo so, Tonì. Non è colpa tua."]]},
  {id:"gio",name:"Giorgio",sub:"Consigliere",m:[
   ["8 set",0,"Carla, ieri sera alla Trattoria del Ponte c'erano Lupi e Gino Pace di Ristorazione Valle. Terza volta in un mese. Te lo dico e basta."],
   ["8 set",1,"Grazie. Sarà una coincidenza."],
   ["sab",0,"Altro che coincidenza."]]},
  {id:"sind",name:"Sindaco Ferrara",sub:"",m:[
   ["sab 09:00",0,"Carla, io ti credo, ma finché non chiarisci ti chiedo di sospenderti dalla giunta. Il bando non l'ho mai letto, l'ho visto pubblicato come voi."],
   ["sab 09:10",1,"Capisco. Lo chiarisco."]]},
  {id:"pace",name:"Gino Pace",sub:"Ristorazione Valle",m:[
   ["20 set",0,"Gentile assessora, grazie per la fiducia nella nostra azienda. Saremo all'altezza."],
   ["20 set",1,"La fiducia è del bando, non mia."]]},
  {id:"mara",name:"Mara",sub:"Segreteria",m:[
   ["12 set 18:10",0,"Assessora, l'ingegnere ha portato via l'originale firmato. Le ho fatto una foto della pagina 6 come mi aveva chiesto lei."],
   ["12 set 18:12",1,"Brava Mara. Mandamela."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Albo online",sub:"Pubblicazione bando mensa",meta:"13 settembre",body:"Bando pubblicato il 13 settembre alle 00:05.\nCaricato dall'utenza: ing. Lupi, ufficio tecnico."},
   {id:"m2",title:"Ufficio gare",sub:"Verbale di aggiudicazione",meta:"20 settembre",body:"Offerte ricevute: 5. Escluse per mancanza del requisito dell'art. 6: 4.\nAggiudicataria: Ristorazione Valle srl, unica ammessa.\nCentro cottura dell'aggiudicataria: 2,8 km dal municipio."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Ristorazione Valle, centro cottura",sub:"2,8 km dal municipio",body:"Unico centro cottura della zona entro 3 km.\nLe altre quattro aziende sono tra 7 e 14 km."}],
  cal:[
   {id:"c1",g:"Settembre",title:"12 set · Firma bando mensa",sub:"18:00",body:"Lupi in ufficio."},
   {id:"c2",g:"Questa settimana",title:"Lun · Procura",sub:"10:00",body:"Con l'avvocato."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: i km del bando che ho firmato e quelli del bando pubblicato, attaccati, con uno zero davanti.\nNota sotto: l'ora in cui è stata caricata la versione modificata, quattro cifre."},
   {id:"n2",title:"Perché i 15 km",lock:"note",body:"Ho voluto 15 km perché partecipassero anche le cooperative della valle.\nCon 3 km resta solo una cucina: quella di Pace.\nNon ho controllato il testo pubblicato. È l'unica colpa che ho."}],
  drive:[
   {id:"d1",title:"Bando mensa, versioni",sub:"2 file",meta:"Ufficio tecnico",body:"Versione 1: firmata 12 settembre 18:00, art. 6 «entro 15 km».\nVersione 2: modificata 12 settembre 22:40 da ing. Lupi, art. 6 «entro 3 km». Nessuna nuova firma."}],
  tel:[
   {id:"t1",title:"Ing. Lupi",sub:"12 set · 22:35 · persa"},
   {id:"t2",title:"Avvocato",sub:"dom 19:00 · in entrata, 22 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Mensa",sc:"kid"},
  {id:"p2",t:"lug",title:"Con Paolo",sc:"fam"},
  {id:"p3",t:"13 set",title:"Pubblicato",sc:"pub"},
  {id:"p4",t:"8 set",title:"Da Giorgio",sc:"tra"},
  {id:"h1",t:"12 set 18:11",title:"Da Mara",sc:"fir",lock:"album"},
  {id:"h2",t:"20 set",title:"Verbale",sc:"ver",lock:"album"}],
 pins:{note:"2240",album:"0153"},
 events:[{id:"a",q:3,kind:"call",from:"Ing. Lupi",lines:["«Avvocato? Sono Lupi, dell'ufficio tecnico.»","«Le carte del bando le ha l'ufficio, quelle sul telefono dell'assessora sono bozze senza valore. Non le porti in procura, confondono e basta.»","«Pronto?»"]},
         {id:"b",q:9,kind:"sms",from:"Mara",text:"Avvocato, se le serve: la foto della pagina 6 l'ho scattata io il 12 alle 18:11, con il mio telefono. Ho ancora l'originale."}],
 qs:[
  {t:"Ristorazione Valle",q:"Quale azienda ha vinto la gara della mensa?",any:["ristorazione","valle"],show:"Ristorazione Valle",hint:"Verbale di aggiudicazione nella Mail.",news:"L'unica ammessa su cinque. Il titolare è Gino Pace."},
  {t:"4",q:"Quante aziende sono state escluse?",a:["4","quattro","4 aziende"],show:"Quattro",hint:"Stesso verbale.",news:"Tutte per lo stesso articolo: il 6."},
  {t:"3 km",q:"Che cosa chiede l'articolo 6 del bando pubblicato? Un centro cottura entro quanti chilometri?",a:["3","3 km","tre","tre km","3 chilometri","tre chilometri"],show:"Entro 3 km dal municipio",hint:"C'è una foto del bando pubblicato in Galleria.",news:"Il centro cottura di Ristorazione Valle è a 2,8 km. Gli altri tra 7 e 14."},
  {t:"2019",q:"Il cognato di Carla lavora in quell'azienda. Da quale anno?",a:["2019","dal 2019"],show:"Dal 2019",hint:"Lo scrive lui.",news:"Magazziniere, assunto sei anni prima della gara. È il dettaglio che piace ai giornali, non una prova."},
  {t:"15 km",q:"Il giorno della firma Carla scrive a Lupi di raccomandarsi un limite. Quanti chilometri?",a:["15","15 km","quindici","quindici km","15 chilometri","quindici chilometri"],show:"15 km",hint:"Chat con l'ing. Lupi, 12 settembre.",news:"«Così partecipano anche le aziende della valle.» Il bando che ha firmato non è quello pubblicato."},
  {t:"Lupi",q:"Chi ha caricato il bando sull'albo online?",any:["lupi"],show:"L'ing. Lupi",hint:"Mail dell'albo online.",news:"Alle 00:05 del 13 settembre, con la sua utenza. Ora che sai chi lo ha caricato, hai recuperato i due messaggi eliminati nella chat con lui.",unlock:"lup"},
  {t:"22:40",q:"A che ora è stata modificata la versione pubblicata?",all:["2240"],show:"Il 12 settembre alle 22:40",hint:"Le due versioni sono nel Drive.",news:"Quattro ore e quaranta dopo la firma, senza una nuova firma. «Piccole correzioni di forma.»"},
  {t:"Gino Pace",q:"Con chi cenava Lupi alla Trattoria del Ponte? Nome e cognome.",all:["gino","pace"],show:"Con Gino Pace, il titolare dell'azienda",hint:"Lo scrive il consigliere Giorgio, e c'è la sua foto.",news:"Tre volte in un mese, prima della gara."},
  {t:"Mara",q:"Chi ha fotografato la pagina 6 del bando firmato?",any:["mara","segreteri"],show:"Mara, della segreteria",hint:"Chat del 12 settembre alle 18:10.",news:"Lupi si era portato via l'originale. Mara ne ha conservato la prova, su richiesta di Carla."},
  {t:"18:00",q:"Nell'album privato c'è quella foto. A che ora risulta firmata la pagina?",a:["18","18:00","alle 18","le 18","18.00","1800"],show:"Alle 18:00",hint:"Il codice dell'album: zero, poi i km firmati e quelli pubblicati attaccati.",news:"Firma di Carla, «entro 15 km». La versione da 3 km non l'ha mai firmata."},
  {t:"una cucina",q:"Nella nota protetta Carla spiega che cosa resta con il limite dei 3 km. Quante cucine?",a:["1","una","una sola","una cucina","una sola cucina"],show:"Una sola: quella di Pace",hint:"Il codice è l'ora della modifica.",news:"«Non ho controllato il testo pubblicato. È l'unica colpa che ho.»"},
  {t:"l",q:"Chi ha truccato il bando?",o:[["c","Carla Neri, l'assessora"],["t","Tonino, il cognato"],["l","L'ing. Lupi, il dirigente"],["s","Il sindaco Ferrara"],["m","Mara, della segreteria"],["g","Giorgio, il consigliere"]],a:"l",show:"L'ing. Lupi",hint:"Chi ha cambiato il testo dopo la firma?",news:""}],
 win:{title:"Il bando l'ha cambiato l'ing. Lupi.",
  steps:["Il 12 settembre alle 18 Carla ha firmato un bando che chiedeva un centro cottura entro 15 km.","Alle 22:40 Lupi ha modificato l'articolo 6 in «entro 3 km», senza nuova firma, e lo ha pubblicato a mezzanotte.","Con 3 km restava una sola cucina, quella di Ristorazione Valle: quattro concorrenti esclusi.","Lupi cenava con il titolare Gino Pace, tre volte nel mese prima della gara.","Il cognato di Carla lavora lì dal 2019, il sindaco non aveva letto il bando, Mara ha salvato la pagina firmata."],
  end:"L'avvocato stampa la foto di Mara e la versione del Drive, una accanto all'altra. «Quindici e tre», dice. «Un numero.» Alle dieci Carla entra in procura con due fogli in mano. Ne esce dopo quaranta minuti, e l'ufficio tecnico riceve una visita il pomeriggio stesso."}
});
LIB.tune(62,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="ver";
 e.pins={album:"0153",ver:"1309",note:"1840"};
 e.locks={album:{hint:"I chilometri che ho voluto, poi quelli che hanno scritto, con uno zero davanti."},ver:{name:"Cartella protetta",hint:"Il giorno e il mese in cui è finito sull'albo."},note:{hint:"L'ora della mia firma, poi i minuti di chi ha cambiato tutto."}};
 e.spots=[
  {id:"s1",x:70,y:56,label:"Municipio",title:"Municipio di Monteforte",sub:"Ufficio tecnico al piano terra",body:"L'ing. Lupi ha le credenziali per pubblicare sull'albo online. L'assessora no."},
  {id:"s2",x:100,y:40,label:"Trattoria del Ponte",title:"Trattoria del Ponte",sub:"★ 4,5",body:"Recensione: «L'ingegnere del Comune e il titolare della Ristorazione Valle, ogni giovedì, sempre al tavolo d'angolo.»"},
  {id:"s3",x:112,y:80,label:"Ristorazione Valle",title:"Ristorazione Valle · centro cottura",sub:"Mense scolastiche",body:"L'unico centro cottura nel raggio di 3 km dalle scuole. Le cooperative della valle sono tutte tra 7 e 14 km."}];
 LIB.hints(e,["L'ufficio gare ha comunicato l'esito.","Stesso documento: quante sono rimaste fuori?","Una foto di una pagina, quella pubblicata.","Il cognato si è difeso da solo.","Il giorno della firma Carla si era raccomandata.","Chi ha le chiavi dell'albo online?","Le versioni del bando sono conservate, sotto chiave.","Un consigliere ha visto una cena.","Qualcuno ha fotografato la pagina firmata.","Quella foto è nascosta.","Carla ha spiegato perché aveva scelto quel limite.","Chi ha cambiato il testo dopo la firma?"]);
});
})();
