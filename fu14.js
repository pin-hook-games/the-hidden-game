(function(){
/* Furti 14: La collezione (Torino). Soluzione: nessun furto. La moglie Silvana ha messo gli orologi in una cassetta di sicurezza prima di chiedere la separazione, su consiglio dell'avvocata.
   Allarme disinserito con il codice di Silvana, cassetta n. 214, elenco con i valori scritto da lei, appuntamento con l'avv. Ferraris. Falsa pista: il figlio Andrea e il bar. */
const SC={
 vet:()=>LIB.obj("#2b3a55","⌚","La vetrina, prima"),
 vuo:()=>LIB.obj("#c9b79c","🗄️","La vetrina vuota, martedì sera"),
 and:()=>LIB.two("#9cc7d6","#33658a","#7a3b5a","Con Andrea, la sua laurea"),
 ele:()=>LIB.doc("Elenco orologi · scritto da Silvana","#7a3b5a",["12 pezzi","valore totale stimato","«da tutelare»","S."]),
 cas:()=>LIB.doc("Banca · contratto","#33658a",["Cassetta di sicurezza n. 214","intestataria: Silvana Gallo","attivata martedì","ore 11:30"]),
 bar:()=>LIB.obj("#f0d9a0","☕","Il bar che Andrea vuole aprire")
};
const MAP=LIB.city("Torino",[[40,52,"Crocetta"],[132,132,"San Salvario"],[276,132,"Po"],[40,232,"Lingotto"],[300,40,"Collina"],[200,200,"Valentino"]],
 [[60,60,"#d43d55","casa",9,-10],[200,60,"#33658a","banca",9,-10]]);

LIB.add(54,["La collezione","Ugo ha trovato la vetrina degli orologi vuota e sospetta del figlio","Torino"],{
 map:MAP,scenes:SC,owner:"Ugo Gallo",time:"20:00",date:"mer 19 nov",homeDate:"mercoledì 19 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"Ugo vuole chiamare i carabinieri e si riprende il telefono.",
 brief:"Martedì sera Ugo Gallo, 63 anni, collezionista di orologi, ha trovato vuota la vetrina del suo studio, a Torino: dodici pezzi spariti. Nessun allarme è scattato. Ugo sospetta il figlio Andrea, che il mese scorso gli aveva chiesto di venderne uno per aprire un bar. Ti ha dato il suo telefono.",
 quote:"«L'allarme non ha suonato, la porta non è forzata. Ha le chiavi solo la famiglia. Andrea quell'orologio lo voleva vendere, abbiamo litigato. Mia moglie dice di non saperne niente, ma ultimamente è sempre fuori. Prima di chiamare i carabinieri voglio sapere se è stato mio figlio.»",
 chats:[
  {id:"and",name:"Andrea",sub:"Figlio",m:[
   ["ott",0,"Papà, venderne uno solo. Per il bar mi servono 20.000."],
   ["ott",1,"Gli orologi non si vendono. Discorso chiuso."],
   ["mer",0,"Papà, martedì ero a Milano per il corso da barista, dalle 9 alle 18. Te lo mando l'attestato. Come puoi pensare che sia stato io?"]]},
  {id:"sil",name:"Silvana",sub:"Moglie",m:[
   ["mar 9:40",0,"Ugo, oggi ho la parrucchiera e poi pranzo con Marta. Torno tardi."],
   ["mar 21:00",1,"Silvana, gli orologi! La vetrina è vuota!"],
   ["mar 21:15",0,"Non so cosa dirti, Ugo. Parliamone domani, con calma."],
   ["",2,"1 messaggio eliminato."],
   ["mer 7:30",0,"Ugo, non sono spariti. Li ho messi io al sicuro. Te lo spiegherà la mia avvocata. Non chiamare i carabinieri, ti prego.","sil"]]},
  {id:"all",name:"Allarme casa",sub:"Notifiche",m:[
   ["mar 10:05",0,"Sistema disinserito: codice «Silvana»."],
   ["mar 10:20",0,"Sistema inserito: codice «Silvana»."]]},
  {id:"mar",name:"Marta",sub:"Amica di Silvana",m:[
   ["mar",0,"Ugo, ciao! Silvana sta bene? Doveva venire a pranzo martedì ma ha disdetto all'ultimo."]]}
 ],
 lists:{
  drive:[
   {id:"d1",g:"Casa (condivisa)",title:"orologi_elenco.pdf",sub:"caricato da Silvana",body:"12 pezzi, con valori. In fondo: «da tutelare. S.»"},
   {id:"d2",g:"Casa (condivisa)",title:"Studio legale Ferraris",sub:"caricato da Silvana",body:"Appuntamento confermato lunedì 10 novembre. Oggetto: separazione. Nota: «mettere in sicurezza i beni di valore prima di comunicarlo»."}],
  mail:[
   {id:"m1",title:"Banca",sub:"Conto cointestato",meta:"martedì 11:35",body:"Gentili clienti, vi informiamo che sul rapporto cointestato è stata attivata la cassetta di sicurezza n. 214, intestataria Silvana Gallo, oggi alle 11:30."}],
  map:[
   {id:"g1",g:"Cronologia martedì",title:"Circolo del tennis",sub:"9:00 - 13:00",body:"Ugo era fuori casa."}],
  cal:[
   {id:"c1",g:"Martedì",title:"Tennis",sub:"9:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui l'allarme è stato disinserito, quattro cifre.\nNota sotto: il numero della cassetta, con uno zero davanti."},
   {id:"n2",title:"Lettera di Silvana, ricevuta oggi",lock:"note",body:"Ugo, da tre anni parli più con gli orologi che con me.\nLunedì sono stata dall'avvocata. Mi ha detto di mettere in sicurezza le cose di valore prima di dirtelo, perché sei capace di venderle per ripicca.\nGli orologi sono nella cassetta 214, tutti e dodici. Nessuno ti ha rubato niente.\nAndrea non c'entra. Chiedigli scusa."}],
  tel:[
   {id:"t1",title:"Silvana",sub:"mar 21:05 · in uscita, 2 min"}]
 },
 photos:[
  {id:"p1",t:"sett",title:"La vetrina",sc:"vet"},
  {id:"p2",t:"mar 21:00",title:"Vuota",sc:"vuo"},
  {id:"p3",t:"2023",title:"Con Andrea",sc:"and"},
  {id:"p4",t:"ott",title:"Il bar",sc:"bar"},
  {id:"h1",t:"mar",title:"Elenco",sc:"ele",lock:"album"},
  {id:"h2",t:"mar",title:"Contratto",sc:"cas",lock:"album"}],
 pins:{note:"0214",album:"1005"},
 events:[{id:"a",q:3,kind:"sms",from:"Andrea",text:"Papà, ti ho mandato l'attestato del corso. Se vuoi, vengo a casa e ne parliamo. Ma non accusarmi senza guardarmi in faccia."},
         {id:"b",q:7,kind:"call",from:"Studio legale Ferraris",lines:["«Buonasera, cercavo il signor Gallo. Sono l'avvocata Ferraris, rappresento la signora Silvana.»","«Volevo solo comunicare che i beni sono custoditi, in attesa di un accordo. Non c'è stato nessun furto.»","«Gli chieda di chiamarmi, per favore.»"]}],
 qs:[
  {t:"12",q:"Quanti orologi mancano?",a:["12","dodici","12 orologi","12 pezzi"],show:"12",hint:"Brief e Drive.",news:"Tutta la collezione."},
  {t:"Milano",q:"Dov'era Andrea martedì?",any:["milano","corso","barist"],show:"A Milano, al corso da barista",hint:"Chat con Andrea.",news:"Dalle 9 alle 18. La falsa pista cade."},
  {t:"10:05",q:"A che ora è stato disinserito l'allarme martedì?",all:["1005"],show:"Alle 10:05",hint:"Notifiche dell'allarme.",news:"E reinserito alle 10:20."},
  {t:"Silvana",q:"Con quale codice?",any:["silvan","moglie"],show:"Con il codice «Silvana»",hint:"Stesse notifiche.",news:"Ugo era al tennis."},
  {t:"pranzo",q:"Silvana aveva detto di avere parrucchiera e pranzo con Marta. Che cosa ha disdetto all'ultimo?",any:["pranz","marta"],show:"Il pranzo con Marta",hint:"Chat con Marta.",news:"Dove era invece?"},
  {t:"214",q:"Qual è il numero della cassetta di sicurezza attivata martedì?",a:["214","n 214","n. 214","cassetta 214","la 214"],show:"La n. 214, intestata a Silvana",hint:"Mail della banca. E l'album: il codice è l'ora dell'allarme.",news:"Attivata alle 11:30. Ora hai recuperato il messaggio di Silvana delle 7:30.",unlock:"sil"},
  {t:"Ferraris",q:"Come si chiama l'avvocata di Silvana?",any:["ferrar"],show:"Avv. Ferraris",hint:"Drive.",news:"Appuntamento il 10 novembre. Oggetto: separazione."},
  {t:"separazione",q:"Per che cosa Silvana è andata dall'avvocata?",any:["separaz","divorz","lasciar"],show:"Per la separazione",hint:"Drive.",news:"«Mettere in sicurezza i beni prima di comunicarlo.»"},
  {t:"chiedergli scusa",q:"Nella lettera protetta, che cosa chiede Silvana a Ugo di fare con Andrea?",any:["scus"],show:"Chiedergli scusa",hint:"Il codice: il numero della cassetta con uno zero davanti.",news:"«Andrea non c'entra.»"},
  {t:"n",q:"Che cosa è successo agli orologi?",o:[["a","Li ha rubati Andrea"],["l","Ladri esperti senza far scattare l'allarme"],["n","Nessun furto: li ha messi Silvana in una cassetta di sicurezza"],["m","Li ha venduti Marta"],["u","Ugo per l'assicurazione"]],a:"n",show:"Nessun furto",hint:"Codice dell'allarme e cassetta 214.",news:""}],
 win:{title:"Nessun furto. Gli orologi li ha messi al sicuro Silvana.",
  steps:["Martedì l'allarme è stato disinserito alle 10:05 con il codice di Silvana. Ugo era al tennis, Andrea a Milano.","Alle 11:30 è stata attivata la cassetta di sicurezza 214, intestata a Silvana.","Silvana aveva un appuntamento con l'avvocata per la separazione, che le ha consigliato di mettere i beni in sicurezza.","Gli orologi ci sono tutti e dodici."],
  end:"Ugo non chiama i carabinieri. Chiama Andrea, e restano al telefono un'ora. Alla fine, a sorpresa, gli chiede quanto costa una macchina per il caffè. Poi chiama l'avvocata Ferraris, e per la prima volta da anni chiede a Silvana di cenare insieme, solo per parlare."}
});
LIB.tune(54,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const d2=e.lists.drive.find(x=>x.id==="d2");d2.lock="fer";
 e.lists.cal.push({id:"c2",g:"Giugno",title:"21 giugno · Anniversario",sub:"(da non dimenticare, Ugo)",body:""});
 e.pins={album:"1005",fer:"2106",note:"3010"};
 e.locks={album:{hint:"Quando la casa ha smesso di fare la guardia."},fer:{name:"File protetto",hint:"La data che lui dimentica sempre."},note:{hint:"I minuti in banca, poi il giorno dall'avvocata."}};
 e.spots=[
  {id:"s1",x:60,y:60,label:"Casa",title:"Casa Gallo",sub:"Crocetta",body:"Allarme con codici personali: «Ugo», «Silvana», «Andrea». Nessuna finestra forzata."},
  {id:"s2",x:200,y:60,label:"Banca",title:"Banca · cassette di sicurezza",sub:"Aperto 8:30-13 · ★ 4,2",body:"Recensione: «Riservatissimi. Martedì mattina c'era una signora elegante con una borsa da viaggio, nessuno le ha chiesto niente.»"},
  {id:"s3",x:300,y:40,label:"Circolo tennis",title:"Circolo del tennis",sub:"Collina",body:"Ugo ci gioca ogni martedì, dalle 9 alle 13. Tutti lo sanno, in famiglia."}];
 e.qs.splice(e.qs.length-1,0,{t:"10 novembre",q:"Quando Silvana è stata dall'avvocata? Giorno e mese.",all:["10","nov"],show:"Lunedì 10 novembre",hint:"",news:"Otto giorni prima della vetrina vuota."});
 LIB.hints(e,["Conta quello che manca.","Il figlio si è difeso con un attestato.","La casa ha un registro di chi entra.","Ogni codice ha un nome.","Un'amica ha notato un'assenza.","La banca scrive a tutti e due.","Qualcuno ha caricato dei documenti nella cartella di famiglia, chiusa.","…e per quale motivo.","Una lettera arrivata oggi.","Chi ha disinserito l'allarme, e dov'è andata dopo?","Allarme, cassetta, avvocata."]);
});
})();
