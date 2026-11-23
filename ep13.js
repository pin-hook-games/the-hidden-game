(function(){
/* episodio 13: Il capo scrive di notte (Milano). Soluzione: Nasconde altro. Noemi non ricambia: conserva i messaggi per fare una segnalazione. */
const SC={
 off:()=>LIB.obj("#dfe5ea","🗂️","Studio Colli, scrivania"),
 al:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Alessio, Navigli"),
 taxi:()=>LIB.obj("#f6e3b0","🚕","Pietro mi ha chiamato il taxi"),
 irene:()=>LIB.two("#cfd8df","#7a3b5a","#a0522d","Pausa pranzo con Irene"),
 s1:()=>LIB.shot("Dott. Colli · 8 set · 00:12",["Ancora sveglia?","Pensavo a lei."]),
 s2:()=>LIB.doc("Per lo sportello","#33658a",["14 schermate con data e ora","Dall'8 settembre al 19 novembre","Risposte mie: solo di lavoro","Testimone: Marco B."])
};
const MAP=LIB.map({name:"Mappa stilizzata di Milano",
 water:[["M70 226Q110 200 150 176",7],["M150 176V250",7]],
 parks:[`<ellipse cx="120" cy="100" rx="26" ry="16" fill="#d7e2c9"/>`],
 roads:["M160 60A70 70 0 1 1 159 60","M160 130L40 50","M160 130H340","M160 130V20","M160 130L230 240","M160 130L60 220"],
 extra:`<rect x="152" y="122" width="16" height="16" rx="3" fill="#b0764a"/>`,
 labels:[[172,126,"Duomo"],[170,28,"Centrale"],[86,96,"Sempione"],[90,212,"Navigli"],[236,236,"Porta Romana"],[250,120,"Porta Venezia"],[300,150,"Città Studi"]],
 pins:[[110,190,"#33658a","Casa",9,-8],[210,110,"#33658a","studio",9,-8],[222,220,"#d43d55","lun 24 · 18:00",9,-8]]});

EPISODES[13]={...LIB.apps("msg tel mail web gal map cal note drive",[["rec","Registratore","mic","#e2574c,#a02822"]]),
 n:13,timer:1800,map:MAP,scenes:SC,owner:"Noemi Ricci",time:"08:05",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Alessio ti ha portato il telefono della fidanzata Noemi, 27 anni, assistente in uno studio di commercialisti a Milano. Lei è in palestra prima del lavoro e lascia sempre il telefono a casa.",
 quote:"«Il suo capo le scrive dopo mezzanotte. Frasi che un capo non scrive. E lei non lo blocca, non cancella niente, anzi: tiene tutto. Se una cosa ti dà fastidio la cancelli, no? Io dico che le fa piacere. Mi dimostri che sbaglio.»",
 chats:[
  {id:"colli",name:"Dott. Colli",sub:"Titolare",m:[
   ["3 nov · 00:20",0,"Ancora sveglia? Io sì."],
   ["3 nov · 09:02",1,"Buongiorno dottore. Il bilancio Rossetti è sulla sua scrivania."],
   ["5 nov · 00:41",0,"Oggi era molto elegante."],
   ["7 nov · 01:05",0,"Dovrebbe sorridere di più in riunione. Con me."],
   ["7 nov · 09:10",1,"Buongiorno. Le ricordo la scadenza dell'F24 di lunedì."],
   ["10 nov · 00:15",0,"Non mi risponde mai la sera."],
   ["12 nov · 00:47",0,"Domani venga con il vestito di giovedì."],
   ["12 nov · 09:05",1,"Buongiorno dottore. La pratica Bianchi è pronta per la firma."],
   ["14 nov · 00:33",0,"Una cena, noi due. Nessuno deve saperlo."],
   ["14 nov · 09:00",1,"Buongiorno. Per le questioni non di lavoro la prego di non scrivermi."],
   ["17 nov · 00:58",0,"Non faccia la difficile. Il suo contratto scade a gennaio."],
   ["18 nov · 01:12",0,"Ci pensi bene."],
   ["19 nov · 00:09",0,"Sto ancora aspettando."]]},
  {id:"irene",name:"Irene",sub:"",m:[
   ["14 nov · 13:10",0,"Non cancellare niente. Niente. Fai le schermate con data e ora e salvale fuori dal telefono."],
   ["14 nov · 13:12",1,"Lo sto facendo da settembre. Ma se le tengo Alessio pensa che mi piaccia."],
   ["14 nov · 13:14",0,"Se le cancelli, è la tua parola contro la sua. A me è successo due anni fa: non avevo niente in mano."],
   ["17 nov · 14:00",0,"Ti ho preso appuntamento allo sportello. Lunedì alle 18."]]},
  {id:"marco",name:"Marco",sub:"",m:[
   ["12 nov · 18:40",0,"Ho sentito che cosa ti ha detto in riunione. Non va bene."],
   ["12 nov · 18:45",1,"Lo so. Sto raccogliendo tutto."],
   ["12 nov · 18:46",0,"Se serve, io testimonio. Scrivilo pure."]]},
  {id:"tosi",name:"Avv. Tosi",sub:"",m:[
   ["18 nov · 10:00",0,"Buongiorno Noemi, sono l'avvocata dello sportello. Lunedì porti il contratto di lavoro e tutte le schermate, in ordine di data."],
   ["18 nov · 10:10",1,"Le ho già ordinate. Sono 14."]]},
  {id:"davide",name:"Davide HR",sub:"",m:[
   ["",2,"Nessun messaggio inviato."],
   ["bozza",1,"Buongiorno Davide, vorrei segnalarle in via riservata... (bozza non inviata, 10 novembre)"]]},
  {id:"simone",name:"Simone",sub:"",m:[
   ["dic 2023",0,"Buon Natale Noe. Senza rancore."],
   ["dic 2023",1,"Buon Natale anche a te."]]},
  {id:"luca",name:"Luca",sub:"",m:[
   ["dom 20:00",0,"Sorella, mamma dice che sei dimagrita. Tutto bene al lavoro?"],
   ["dom 20:10",1,"Periodo pesante. Poi ti racconto."]]}
 ],
 lists:{
  rec:[
   {id:"r0",g:"Memo vocali",title:"4 registrazioni",sub:"Bloccate",meta:"Da aprire",body:"Quattro appunti vocali protetti.\nPer ascoltarli bisogna sapere a chi sono destinati."},
   {id:"r1",g:"Memo recuperati",u:"sp",title:"Appunto · 3 novembre",sub:"0:40",body:"«Oggi, 3 novembre. Primo messaggio del mese, a mezzanotte e venti. Ho risposto alle nove, solo sul bilancio.»"},
   {id:"r2",g:"Memo recuperati",u:"sp",title:"Appunto · 12 novembre",sub:"1:05",body:"«In riunione, davanti a Marco, ha commentato il mio vestito. Marco ha sentito tutto.»"},
   {id:"r3",g:"Memo recuperati",u:"sp",title:"Appunto · 14 novembre",sub:"0:50",body:"«Gli ho scritto di non contattarmi per questioni non di lavoro. Ho la schermata.»"},
   {id:"r4",g:"Memo recuperati",u:"sp",title:"Appunto · 17 novembre",sub:"0:35",body:"«Ha nominato la scadenza del mio contratto. Per l'avvocata questo è il punto più importante.»"}],
  mail:[
   {id:"m1",title:"Sportello Ascolto Lavoro",sub:"Conferma appuntamento",meta:"17 novembre",body:"Colloquio riservato e gratuito lunedì 24 novembre alle 18.\nSede di Porta Romana.\nSarà presente l'avv. Tosi."},
   {id:"m2",title:"Studio Colli",sub:"Contratto a termine",meta:"gennaio",body:"Contratto di assistente a tempo determinato.\nScadenza: 31 gennaio."}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Sportello Ascolto Lavoro",sub:"Porta Romana",meta:"Salvato lunedì",body:"Dodici minuti in tram dallo studio."},
   {id:"g2",g:"Cronologia · ultime sere",title:"Casa, Navigli",sub:"Ogni sera dalle 19:30",body:"Nessuna uscita serale negli ultimi trenta giorni, tranne due cene con Alessio."}],
  cal:[
   {id:"c1",g:"Novembre",title:"Lun 24 · Sportello",sub:"18:00",body:"Portare contratto e schermate. Ad Alessio: straordinario."},
   {id:"c2",g:"Gennaio",title:"Sab 31 · Scadenza contratto",sub:"",body:"Prima di allora."}],
  web:[
   {id:"w1",g:"Cronologia",title:"capo scrive di notte cosa fare",sub:"8 set"},
   {id:"w2",g:"Cronologia",title:"conservare messaggi come prova",sub:"9 set"},
   {id:"w3",g:"Cronologia",title:"sportello molestie lavoro milano gratuito",sub:"14 nov"},
   {id:"w4",g:"Cronologia",title:"come dirlo al fidanzato senza che faccia una scenata",sub:"mer 23:00"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: quante schermate ho, e quanti messaggi notturni mi ha mandato a novembre.\nLa nota qui sotto: giorno e ora dello sportello."},
   {id:"n2",title:"Per Alessio",lock:"note",body:"Non te l'ho detto perché andresti in studio a fare una scenata.\nPerderei il posto prima di poter fare la segnalazione, e lui direbbe che è tutta gelosia tua.\nDopo lunedì ti dico tutto. Tengo i messaggi perché sono l'unica cosa che ho."}],
  drive:[
   {id:"d1",title:"Per lo sportello",sub:"Cartella · 14 file",meta:"Aggiornata mercoledì",body:"14 schermate, dall'8 settembre al 19 novembre, rinominate con data e ora.\nUn file di appunti con i nomi dei testimoni."}],
  tel:[
   {id:"t1",title:"Irene",sub:"17 nov · in entrata, 14 min"},
   {id:"t2",title:"Dott. Colli",sub:"18 nov · 23:50 · persa"},
   {id:"t3",title:"Portineria, Pietro",sub:"12 nov · 20:10 · in uscita, 1 min"}]
 },
 photos:[
  {id:"p1",t:"lun",title:"Ufficio",sc:"off"},
  {id:"p2",t:"sab",title:"Con Alessio",sc:"al"},
  {id:"p3",t:"12 nov · 20:15",title:"Taxi",sc:"taxi"},
  {id:"p4",t:"14 nov",title:"Irene",sc:"irene"},
  {id:"h1",t:"8 set",title:"La prima",sc:"s1",lock:"album"},
  {id:"h2",t:"mer",title:"Indice",sc:"s2",lock:"album"}],
 pins:{note:"2418",album:"1409"},
 qs:[
  {t:"9",q:"Contiamo. Quanti messaggi le ha mandato il dott. Colli dopo mezzanotte, a novembre?",a:["9","nove","9 messaggi"],show:"Nove",hint:"Apri la chat con lui e conta quelli di lui. Le risposte di lei non contano.",news:"Nove messaggi tra mezzanotte e l'una e un quarto. Su questo Alessio ha ragione."},
  {t:"0",q:"A quanti di quei messaggi Noemi ha risposto di notte?",a:["0","zero","nessuno","a nessuno","mai"],show:"A nessuno",hint:"Guarda l'orario delle sue risposte.",news:"Mai di notte. Risponde solo la mattina dopo, in orario d'ufficio."},
  {t:"09:05",q:"A che ora ha risposto al messaggio delle 00:47 del 12 novembre?",all:["905"],show:"Alle 09:05",hint:"È la riga subito sotto.",news:"«La pratica Bianchi è pronta per la firma.» Lui parla di vestiti, lei di pratiche."},
  {t:"14",q:"Il 14 novembre lei gli scrive qualcosa di diverso. In quale giorno di novembre gli ha chiesto di non scriverle più?",all:["14"],show:"Il 14 novembre",hint:"È l'unica sua risposta che non parla di una pratica.",news:"Glielo ha chiesto per iscritto. Tre giorni dopo lui ha nominato la scadenza del contratto."},
  {t:"collega",q:"Perché allora non cancella niente? Glielo ha consigliato Irene. Chi è Irene per Noemi?",any:["colleg","amica"],show:"Una collega",hint:"Leggi la loro chat: Irene parla di qualcosa che è successo anche a lei.",news:"«Se le cancelli, è la tua parola contro la sua.» Tenere i messaggi non è un segno di piacere: è una prova."},
  {t:"14",q:"Quante schermate ha raccolto finora?",a:["14","quattordici","14 schermate"],show:"14",hint:"C'è una cartella nel Drive, e lo scrive anche a un'avvocata.",news:"Quattordici schermate con data e ora, dall'8 settembre. Ha cominciato il giorno dopo il primo messaggio."},
  {t:"sportello",q:"Per chi le sta raccogliendo? Dove ha appuntamento lunedì?",any:["sportello","ascolto"],show:"Allo Sportello Ascolto Lavoro",hint:"C'è una conferma nella Mail e un evento in calendario.",news:"Uno sportello riservato e gratuito. Ora che sai a chi sono destinati, hai aperto i quattro appunti vocali nel Registratore.",unlock:"sp"},
  {t:"Porta Romana",q:"In quale zona di Milano si trova lo sportello?",any:["portaromana","romana"],show:"A Porta Romana",hint:"Mail e Mappe.",news:"Dodici minuti in tram dallo studio. Ad Alessio dirà che fa straordinario."},
  {t:"il contratto",q:"Che cosa le ha chiesto di portare l'avv. Tosi, oltre alle schermate?",any:["contratto"],show:"Il contratto di lavoro",hint:"È nel suo messaggio.",news:"L'avvocata dello sportello. Il contratto conta perché scade il 31 gennaio, e lui lo ha usato come minaccia."},
  {t:"testimoniare",q:"Nel secondo appunto vocale c'è Marco. Che cosa si è offerto di fare?",any:["testimon"],show:"Di testimoniare",hint:"Lo scrive anche in chat.",news:"Marco è un collega che ha sentito tutto in riunione. Altro nome da togliere."},
  {t:"mai",q:"Davide è delle risorse umane. Quando gli ha scritto Noemi? Se non lo ha fatto, scrivi MAI.",any:["mai","bozza"],show:"Mai: c'è solo una bozza",hint:"Apri la chat con lui.",news:"Una bozza del 10 novembre, mai inviata. Davide lavora per lo stesso studio del dott. Colli."},
  {t:"2023",q:"E Simone? In quale anno è l'ultimo messaggio?",a:["2023","dicembre 2023"],show:"Nel 2023",hint:"Guarda la data.",news:"Un ex, e un augurio di Natale di due anni fa."},
  {t:"portiere",q:"Pietro compare in una chiamata e in una foto. Che lavoro fa?",any:["portin","portier","custod"],show:"Il portiere dello stabile",hint:"Guarda come è salvato il numero.",news:"La sera del 12 novembre le ha chiamato un taxi perché non uscisse da sola."},
  {t:"8 settembre",q:"Nell'album privato c'è la prima schermata. Di che giorno è? Giorno e mese.",all:["8","sett"],show:"Dell'8 settembre",hint:"Il codice dell'album è fatto di due numeri: le schermate e i messaggi notturni di novembre.",news:"Dura da più di due mesi. L'indice che ha preparato per l'avvocata è ordinato come un fascicolo."},
  {t:"lunedì",q:"Nella nota protetta dice quando parlerà con Alessio. Dopo quale giorno della settimana?",any:["lunedi"],show:"Dopo lunedì",hint:"Il codice è il giorno e l'ora dell'appuntamento allo sportello.",news:"«Andresti in studio a fare una scenata. Perderei il posto prima di poter fare la segnalazione.»"},
  {t:"nessuno",q:"Il dott. Colli, Marco, Davide, Simone, Pietro, Luca. Con chi ha una storia Noemi? Se con nessuno, scrivi NESSUNO.",any:["nessun"],show:"Con nessuno",hint:"Uno la importuna. Gli altri sono un testimone, un ufficio, un ex, un portiere, un fratello.",news:"Nessuna storia. C'è un uomo che insiste e una donna che prepara le carte."},
  {t:"b",q:"Allora che cosa nasconde Noemi ad Alessio?",o:[["a","Una relazione con il capo"],["b","Sta raccogliendo prove per segnalare il capo"],["c","Un nuovo lavoro in un altro studio"],["d","Niente: Alessio si è inventato tutto"]],a:"b",show:"Sta raccogliendo prove per segnalare il capo",hint:"Schermate, appunti, un testimone, un'avvocata.",news:"Resta il verdetto."},
  {t:"a",q:"Il verdetto per Alessio.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un tradimento. C'è qualcosa che lei non gli ha detto.",news:""}],
 win:{title:"Noemi non tradisce Alessio. Sta preparando una segnalazione.",
  steps:["Il dott. Colli le ha mandato nove messaggi notturni a novembre. Lei non ha mai risposto di notte, e mai su altro che il lavoro.","Il 14 novembre gli ha chiesto per iscritto di smettere. Tre giorni dopo lui ha nominato la scadenza del suo contratto.","Su consiglio della collega Irene conserva tutto: 14 schermate dall'8 settembre e quattro appunti vocali.","Lunedì 24 alle 18 ha appuntamento allo Sportello Ascolto Lavoro con l'avv. Tosi. Marco è pronto a testimoniare.","Non lo ha detto ad Alessio per paura di una scenata che le sarebbe costata il posto e la segnalazione."],
  end:"Alessio non dice niente per un po'. «Ho pensato che le facesse piacere», dice alla fine. «Lei teneva le prove e io tenevo il muso.» Chiede a che ora è lo sportello, lunedì. «Non entro. La aspetto fuori.»"}
};
LIB.tune(13,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="spo";
 e.pins={album:"1409",spo:"1411",note:"0819"};
 e.locks={album:{hint:"Quante prove ho, poi quanti messaggi notturni a novembre."},spo:{name:"File protetto",hint:"Il giorno in cui gli ho scritto basta, poi il mese."},note:{hint:"Il giorno della prima prova, con lo zero, poi il giorno dell'ultima."}};
 e.spots=[
  {id:"s1",x:222,y:220,label:"Sportello",title:"Sportello Ascolto Lavoro",sub:"Porta Romana · ★ 4,9",body:"Recensione: «Ascoltano senza giudicare. Mi hanno aiutata a mettere in fila le prove.»"},
  {id:"s2",x:210,y:110,label:"Studio Colli",title:"Studio Colli",sub:"",body:"Recensione di un'ex dipendente: «Il titolare scrive di notte. Non rispondete.»"},
  {id:"s3",x:110,y:190,label:"Casa",title:"Casa di Noemi e Alessio",sub:"Navigli",body:"Nessuna uscita serale nell'ultimo mese, tranne due."}];
 LIB.hints(e,["Conta i messaggi notturni.","Lei ha risposto, di notte?","Quando risponde, lo fa di giorno.","Un giorno lei cambia tono.","Una collega le ha dato un consiglio.","Le prove sono raccolte in un posto chiuso.","Per chi le raccoglie?","Dove si trova?","Un'avvocata le ha chiesto qualcosa.","Un collega si è offerto di aiutarla.","Le risorse umane, mai.","Un vecchio nome, un vecchio anno.","Chi è Pietro?","La prima prova è nascosta.","Noemi ha scritto quando parlerne.","Ripassa chi sono tutti.","Che cosa nasconde?","Il verdetto."]);
});
})();
