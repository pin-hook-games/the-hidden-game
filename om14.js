(function(){
/* Omicidi 14: Check-in online (Cagliari). Soluzione: l'ex socio Gianluca. Le prenotazioni in nero passavano dal suo conto ed Efisio stava regolarizzando tutto. */
const SC={
 bas:()=>LIB.obj("#f0d9a0","🏠","Appartamento Bastione, terrazzo"),
 mar:()=>LIB.two("#9cc7d6","#7a3b5a","#1f3a66","Con Marina, Poetto"),
 rev:()=>LIB.shot("Recensione di Mr. Novak · 06:20",["Great flat! Writing from the gate.","Flight at 06:55. Key left inside."]),
 fer:()=>LIB.obj("#9cc7d6","⛴️","Tore sul traghetto, venerdì sera"),
 fog:()=>LIB.doc("Foglio G · estate","#a02822",["Prenotazioni fuori portale: 23","Incassate su conto G. Pinna","Totale: 9.200 €","Più richieste: Bastione"]),
 lock:()=>LIB.doc("Serratura Bastione · sabato","#33658a",["05:10 chiusa dall'ospite","05:30 aperta: proprietario","05:42 aperta: profilo socio_GL","06:05 chiusa dall'esterno"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Cagliari",
 water:[["M0 240Q150 200 260 240",40],["M330 120Q390 170 400 250",30]],
 parks:[`<ellipse cx="270" cy="110" rx="34" ry="24" fill="#d7e2c9"/>`],
 roads:["M40 170H320","M110 60V200","M190 50V200","M260 140V210","M80 110H230"],
 labels:[[120,54,"Castello"],[92,196,"Marina"],[170,104,"Villanova"],[236,84,"Monte Urpinu"],[340,96,"Poetto"],[120,236,"Porto"],[30,160,"Stampace"],[20,60,"Elmas"]],
 pins:[[140,90,"#d43d55","Bastione",9,-8],[40,80,"#56666e","aeroporto",9,16],[200,150,"#33658a","casa",9,4]]});

LIB.add(34,["Check-in online","Marina vuole sapere chi ha ucciso il compagno Efisio","Cagliari"],{
 map:MAP,scenes:SC,owner:"Efisio Murgia",time:"09:40",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note drive",extraApps:[["chiavi","Chiavi","home","#7c8aa0,#39445a"]],
 late:"La polizia ha chiesto il telefono per estrarre i dati delle serrature. Marina ha dovuto consegnarlo.",
 brief:"Marina ti ha portato il telefono del compagno Efisio Murgia, 50 anni, che affittava tre appartamenti ai turisti a Cagliari. Sabato alle 10 la donna delle pulizie lo ha trovato senza vita nell'appartamento Bastione. L'ospite straniero era partito all'alba senza salutare nessuno.",
 quote:"«Cercano tutti quell'ospite, un certo Novak, che è sparito alle cinque del mattino. Ma Efisio in quei giorni aveva un pensiero fisso: voleva «mettere tutto in regola». Mi ha detto che qualcuno non l'avrebbe presa bene. Non mi ha detto chi.»",
 chats:[
  {id:"marina",name:"Marina",sub:"Compagna",m:[
   ["ven 22:00",1,"Domattina presto passo al Bastione, l'ospite parte all'alba e alle 11 arriva una coppia. Poi colazione insieme?"],
   ["ven 22:05",0,"Alle nove al bar. Non fare tardi."],
   ["sab 09:20",0,"Efisio? Ti aspetto."]]},
  {id:"gian",name:"Gianluca",sub:"",m:[
   ["mer 19:00",0,"Mi dicono che vuoi andare dalla commercialista."],
   ["mer 19:10",1,"Lunedì. Dichiaro tutto, anche quello che gestivi tu."],
   ["",2,"3 messaggi eliminati venerdì."],
   ["ven 20:10",0,"Se porti quel foglio alla Melis mi rovini. Sono 9.200 euro di nero, tutti sul mio conto.","gl"],
   ["ven 20:15",1,"Dovevi pensarci prima. Io non voglio problemi con la finanza.","gl"],
   ["ven 20:30",0,"Vediamoci domattina presto al Bastione, prima che arrivi la donna delle pulizie. Ti faccio una proposta.","gl"]]},
  {id:"novak",name:"Mr. Novak",sub:"Ospite",m:[
   ["sab 05:05",0,"Good morning, I leave now for the airport. Key inside, door closed. Thank you!"],
   ["sab 05:28",1,"Safe trip! I am coming to check the flat."],
   ["sab 06:20",0,"At the gate, flight at 06:55. I left you five stars."]]},
  {id:"atzeni",name:"Sig.ra Atzeni",sub:"Vicina",m:[
   ["gio 08:00",0,"Signor Murgia, un'altra festa sul terrazzo e chiamo i vigili. Glielo dico da Sassari, sono da mia figlia fino a lunedì, ma le telecamere me le guarda mio nipote."],
   ["gio 08:20",1,"Ha ragione, signora. Ho messo il divieto di feste nell'annuncio."]]},
  {id:"rosa",name:"Rosa pulizie",sub:"",m:[
   ["ven 18:00",0,"Efisio domani arrivo col bus delle dieci meno un quarto, alle 10 sono al Bastione."],
   ["sab 10:04",0,"Efisio la porta è chiusa da fuori ma dentro c'è la luce. Apro col mio codice."]]},
  {id:"tore",name:"Tore",sub:"Fratello",m:[
   ["ven 19:30",0,"[foto] Sono sul traghetto per Civitavecchia. I 3.000 te li ridò dopo Natale, giuro."],
   ["ven 19:40",1,"Quando puoi, Tore. Buon viaggio."]]},
  {id:"melis",name:"Dott.ssa Melis",sub:"",m:[
   ["mer 17:00",1,"Dottoressa, voglio regolarizzare tutto: anche le prenotazioni che gestiva il mio ex socio fuori dal portale. Lunedì le porto il foglio."],
   ["mer 17:30",0,"Fa bene. Lunedì alle 15. Porti il foglio e gli estratti conto."]]}
 ],
 lists:{
  chiavi:[
   {id:"x1",g:"Bastione · sabato",title:"Porta chiusa dall'interno e uscita",sub:"05:10 · codice ospite",body:"L'ospite esce e chiude."},
   {id:"x2",g:"Bastione · sabato",title:"Porta aperta",sub:"05:30 · codice proprietario",body:"Entra Efisio."},
   {id:"x3",g:"Bastione · sabato",title:"Porta aperta",sub:"05:42 · profilo socio_GL",meta:"Profilo vecchio",body:"Profilo «socio_GL», creato nel 2022 e mai cancellato.\nNon usato da marzo."},
   {id:"x4",g:"Bastione · sabato",title:"Porta chiusa dall'esterno",sub:"06:05 · profilo socio_GL",body:"Qualcuno esce e chiude da fuori. Efisio non ha più aperto."},
   {id:"x5",g:"Bastione · sabato",title:"Porta aperta",sub:"10:04 · codice pulizie",body:"Entra Rosa."}],
  mail:[
   {id:"m1",title:"Portale affitti",sub:"Nuova recensione",meta:"sabato 06:20",body:"Mr. Novak ha lasciato 5 stelle.\nRecensione inviata dalla rete dell'aeroporto di Elmas."},
   {id:"m2",title:"Camera di commercio",sub:"Scioglimento società",meta:"marzo",body:"La società tra Murgia Efisio e Pinna Gianluca è sciolta dal 31 marzo."}],
  map:[
   {id:"g1",g:"Sabato",title:"Casa",sub:"fino alle 05:15",meta:"Permanenza",body:"Partenza alle 05:15."},
   {id:"g2",g:"Sabato",title:"Appartamento Bastione",sub:"dalle 05:30",meta:"Ultima posizione",body:"Il telefono non si è più mosso."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Sab · Bastione",sub:"05:30",body:"Controllo, poi G.?"},
   {id:"c2",g:"Prossima settimana",title:"Lun · Dott.ssa Melis",sub:"15:00",body:"Foglio G ed estratti."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui sabato si è aperta la porta con il profilo vecchio, quattro cifre.\nNota sotto: gli euro in nero finiti sul conto di G."},
   {id:"n2",title:"Decisione",lock:"note",body:"Con Gianluca ho chiuso a marzo perché faceva il furbo con le prenotazioni.\nNon voglio problemi con la finanza: dichiaro tutto e pago.\nMarina ha ragione, si dorme meglio."}],
  drive:[
   {id:"d0",title:"Foglio G",sub:"Protetto",meta:"Da aprire",body:"Foglio con le prenotazioni fuori portale.\nPer aprirlo serve sapere di chi è la «G»."},
   {id:"d1",u:"gl",title:"Foglio G, estate",sub:"Recuperato",meta:"23 righe",body:"23 prenotazioni fuori portale tra giugno e settembre.\nTutte incassate sul conto di Gianluca Pinna.\nTotale: 9.200 €."}],
  tel:[
   {id:"t1",title:"Gianluca",sub:"ven 20:35 · in entrata, 4 min"},
   {id:"t2",title:"Marina",sub:"sab 09:25 · persa"}]
 },
 photos:[
  {id:"p1",t:"ago",title:"Bastione",sc:"bas"},
  {id:"p2",t:"lug",title:"Con Marina",sc:"mar"},
  {id:"p3",t:"sab 06:20",title:"Cinque stelle",sc:"rev"},
  {id:"p4",t:"ven 19:30",title:"Da Tore",sc:"fer"},
  {id:"h1",t:"mer",title:"Foglio G",sc:"fog",lock:"album"},
  {id:"h2",t:"sab",title:"Registro",sc:"lock",lock:"album"}],
 pins:{note:"9200",album:"0542"},
 events:[{id:"a",q:4,kind:"call",from:"Gianluca",lines:["«Marina, sono Gianluca. Ho saputo, è terribile.»","«Senti, Efisio aveva un foglio con dei conti vecchi nostri, roba senza valore. Se lo trovi nel telefono cancellalo, ti evita solo grane con la finanza.»","«Marina?»"]},
         {id:"b",q:9,kind:"sms",from:"Mr. Novak",text:"I just read the news. I am shocked. When I left at 5:10 a man was parking a grey scooter in front of the building. I can describe him to the police."}],
 qs:[
  {t:"05:10",q:"La serratura del Bastione registra tutto. A che ora è uscito l'ospite Novak?",all:["510"],show:"Alle 05:10",hint:"Apri l'app Chiavi.",news:"Ha chiuso ed è andato via, come aveva scritto cinque minuti prima."},
  {t:"06:55",q:"Per che ora aveva il volo?",all:["655"],show:"Per le 06:55",hint:"Lo scrive lui dal gate.",news:"Alle 06:20 era già oltre i controlli: la recensione è partita dalla rete dell'aeroporto. Non è scappato, aveva un aereo."},
  {t:"05:30",q:"A che ora è entrato Efisio?",all:["530"],show:"Alle 05:30",hint:"Seconda riga della serratura.",news:"Con il codice del proprietario, per preparare l'appartamento ai prossimi ospiti."},
  {t:"socio_GL",q:"Dodici minuti dopo la porta si apre di nuovo. Con quale profilo?",any:["sociogl","socio"],show:"Con il profilo «socio_GL»",hint:"Terza riga.",news:"Un profilo creato nel 2022 e mai cancellato, fermo da marzo."},
  {t:"Gianluca Pinna",q:"A chi appartiene quel profilo? Scrivi nome e cognome.",all:["gianluca","pinna"],show:"A Gianluca Pinna, l'ex socio",hint:"Il nome è in chat, il cognome in una mail della Camera di commercio.",news:"La società è sciolta dal 31 marzo, ma il suo codice funzionava ancora. Ora che sai chi è «G», hai recuperato i tre messaggi eliminati e il foglio nel Drive.",unlock:"gl"},
  {t:"06:05",q:"A che ora quel profilo ha richiuso la porta dall'esterno?",all:["605"],show:"Alle 06:05",hint:"Quarta riga.",news:"Ventitré minuti dentro con Efisio. Poi nessuno fino a Rosa, alle 10:04."},
  {t:"23",q:"Quante prenotazioni fuori portale ci sono nel foglio G?",a:["23","ventitré","ventitre","23 prenotazioni"],show:"23",hint:"Foglio recuperato nel Drive.",news:"Tutte tra giugno e settembre, tutte incassate sul conto di Gianluca."},
  {t:"9200",q:"Per quanti euro in tutto?",a:["9200","9.200","9200 euro","9.200 euro","9.200 €"],show:"9.200 €",hint:"Foglio e messaggi recuperati.",news:"«Mi rovini.» Per Gianluca quel foglio voleva dire una denuncia fiscale."},
  {t:"lunedì",q:"In quale giorno Efisio avrebbe portato il foglio alla commercialista?",any:["lunedi"],show:"Lunedì alle 15",hint:"Chat con la dott.ssa Melis e Calendario.",news:"Gianluca aveva tempo fino al fine settimana."},
  {t:"Sassari",q:"La vicina Atzeni minacciava di chiamare i vigili. Da quale città scriveva?",any:["sassari"],show:"Da Sassari",hint:"Messaggio di giovedì.",news:"Dalla figlia fino a lunedì. Il fratello Tore era sul traghetto per Civitavecchia da venerdì sera."},
  {t:"10",q:"A che ora è arrivata Rosa al Bastione?",a:["10","10:00","alle 10","le 10","10:04","10.04"],show:"Alle 10",hint:"Lo aveva scritto venerdì, e la serratura lo conferma.",news:"Con il bus delle dieci meno un quarto. Ha trovato la porta chiusa da fuori."},
  {t:"Bastione",q:"Nell'album privato c'è una foto del foglio G. Qual è l'appartamento più richiesto fuori portale?",any:["bastione"],show:"Il Bastione",hint:"Il codice dell'album è l'ora in cui si è aperta la porta con il profilo vecchio.",news:"Lo stesso appartamento in cui Gianluca ha chiesto di vedersi «prima che arrivi la donna delle pulizie»."},
  {t:"marzo",q:"Nella nota protetta Efisio scrive quando ha chiuso con Gianluca. In quale mese?",any:["marzo"],show:"A marzo",hint:"Il codice sono gli euro in nero.",news:"«Non voglio problemi con la finanza: dichiaro tutto e pago.»"},
  {t:"g",q:"Chi è stato?",o:[["n","Mr. Novak, l'ospite"],["g","Gianluca, l'ex socio"],["a","La signora Atzeni"],["r","Rosa, delle pulizie"],["t","Tore, il fratello"],["m","La dott.ssa Melis"],["x","Nessuno: è stato un incidente"]],a:"g",show:"Gianluca, l'ex socio",hint:"Di chi era il codice delle 05:42?",news:""}],
 win:{title:"È stato Gianluca Pinna, l'ex socio.",
  steps:["L'ospite Novak è uscito alle 05:10 ed era al gate alle 06:20, con un volo alle 06:55.","Alle 05:42 la porta è stata aperta con «socio_GL», il vecchio profilo di Gianluca, e richiusa da fuori alle 06:05.","Efisio voleva dichiarare 23 prenotazioni in nero, 9.200 €, finite tutte sul conto di Gianluca.","Venerdì sera Gianluca gli ha chiesto di vedersi al Bastione «prima che arrivi la donna delle pulizie».","La vicina era a Sassari, Tore sul traghetto, Rosa è arrivata alle 10."],
  end:"Marina guarda le righe della serratura. «Un codice vecchio», dice. «Gli avevo detto di cancellarlo a marzo. Diceva sempre domani.» Chiude il telefono. «Lunedì alle 15 dalla dottoressa Melis ci vado io. Il foglio glielo porto lo stesso.»"}
});
LIB.tune(34,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="cdc";
 e.pins={album:"0542",cdc:"0655",note:"2331"};
 e.locks={album:{hint:"Il minuto in cui si è aperta la porta con il vecchio profilo."},cdc:{name:"Mail protetta",hint:"L'ora del volo dell'ospite."},note:{hint:"Le prenotazioni in nero, poi il giorno in cui la società è finita."}};
 e.spots=[
  {id:"s1",x:140,y:90,label:"Bastione",title:"Appartamento Bastione",sub:"Casa vacanze · ★ 4,9",body:"Serratura elettronica con profili personali. I profili vecchi, se nessuno li cancella, funzionano ancora."},
  {id:"s2",x:40,y:80,label:"Aeroporto",title:"Aeroporto di Cagliari",sub:"",body:"Volo delle 6:55. L'ospite era al gate alle 6:10."},
  {id:"s3",x:200,y:150,label:"Casa",title:"Casa di Efisio",sub:"",body:"Partito alle 5:15 per il controllo del sabato mattina."}];
 LIB.hints(e,["La serratura registra tutto.","L'ospite aveva un volo.","Quando è entrato Efisio?","Dodici minuti dopo, un altro profilo.","Di chi è quel profilo? La camera di commercio lo sa, ma la mail è chiusa.","Quando è uscito?","Un foglio di prenotazioni.","…e quanto valevano.","Un appuntamento in calendario.","La vicina era lontana.","La donna delle pulizie è arrivata dopo.","La foto del foglio è nascosta.","Efisio ha scritto quando ha chiuso con lui.","Chi aveva ancora le chiavi, e chi temeva la commercialista?"]);
});
})();
