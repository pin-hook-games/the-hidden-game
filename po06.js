(function(){
/* Intrighi 6: Trecento profili (Monteforte, comune inventato). Soluzione: li paga l'azienda dei rifiuti Ecoval, tramite il consulente Arrighi.
   Il sindaco non sapeva; Luca, il social manager, aveva rifiutato di coordinarli. */
const SC={
 gra:()=>LIB.doc("Analisi di Luca","#33658a",["Profili coordinati: 300","Pubblicano ogni sera alle 21:00","tutti entro 4 minuti","Bersaglio: Daria Conti"]),
 sin:()=>LIB.two("#8fb3c9","#55606b","#1f3a66","Con il sindaco Ferrara, inaugurazione"),
 mem:()=>LIB.shot("Monteforte Meme · 2021",["Pagina chiusa nel 2022","«Grazie a tutti, è stato bello»"]),
 cam:()=>LIB.obj("#cfe3c9","🚛","Camion Ecoval in piazza"),
 inv:()=>LIB.doc("Rete Ascolto srl · fattura","#a02822",["Cliente: Ecoval spa","«Ascolto della rete»","4.000 € al mese","da settembre"]),
 sca:()=>LIB.doc("Contratto rifiuti","#55606b",["Comune di Monteforte - Ecoval","Scadenza: 31 dicembre","Rinnovo senza gara: possibile","Gara nuova: proposta da D. Conti"])
};
const MAP=LIB.prov([[70,56,"#d43d55","municipio",9,-12]]);

LIB.add(66,["Trecento profili","Il sindaco Ferrara giura di non sapere chi paga i profili falsi","Monteforte"],{
 map:MAP,scenes:SC,owner:"Luca Pinna",time:"10:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal cal note social",
 late:"Il sindaco ha la conferenza stampa e rivuole il suo social manager con il telefono. Fine del tempo.",
 brief:"Il sindaco di Monteforte, Ferrara, ti ha portato il telefono di Luca Pinna, 29 anni, che gestisce i suoi profili social. Da settembre trecento profili falsi attaccano ogni sera la consigliera di opposizione Daria Conti. Tutti pensano che li gestisca Luca, per conto del sindaco.",
 quote:"«Io non ne so niente, e voglio dimostrarlo prima della conferenza stampa. Luca ha le capacità per farlo e una volta gestiva pagine anonime: è il colpevole perfetto. Lui dice di no. Se è stato lui lo licenzio oggi. Se non è stato lui, voglio sapere chi.»",
 chats:[
  {id:"sin",name:"Sindaco Ferrara",sub:"",m:[
   ["mar 3 nov",1,"Sindaco, ho trovato trecento profili che attaccano Conti. Non sono nostri. Li segnalo?"],
   ["mar 3 nov",0,"Segnala tutto alla polizia postale, oggi stesso. Non voglio nemmeno che si pensi che siamo noi."],
   ["lun 18:00",0,"Luca, domani conferenza stampa. Dimmi la verità."]]},
  {id:"arr",name:"Arrighi",sub:"Consulente",m:[
   ["4 set",0,"Luca, avrei un lavoretto per te: coordinare qualche profilo, niente di illegale. 1.500 al mese, in contanti."],
   ["4 set",1,"No grazie. Io lavoro per il Comune."],
   ["",2,"2 messaggi eliminati il 4 settembre."],
   ["4 set",0,"Peccato. Comunque il sindaco non serve che lo sappia: lavoriamo per lui, ma lui non deve sapere niente.","arr"],
   ["4 set",0,"Ci pensa chi ha più interesse di tutti a fargli vincere le elezioni. E a rinnovare certi contratti.","arr"]]},
  {id:"daria",name:"Daria Conti",sub:"Opposizione",m:[
   ["dom 22:00",0,"Pinna, lo so che non è lei. Lei mi ha anche segnalata quando ho sbagliato un dato, senza cattiveria. Ma qualcuno mi vuole fuori: guardi a chi do fastidio con la gara dei rifiuti."]]},
  {id:"post",name:"Polizia postale",sub:"",m:[
   ["5 nov",0,"Denuncia ricevuta, n. 4471. Le chiediamo l'elenco dei profili e gli orari di pubblicazione."],
   ["5 nov",1,"Ve li mando oggi."]]},
  {id:"vale",name:"Vale",sub:"Ex socia",m:[
   ["dom",0,"Luca, mi hanno chiesto della pagina Monteforte Meme. Ho detto la verità: l'abbiamo chiusa nel 2022 e da allora non facciamo più niente del genere."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Inserzioni",title:"Trasparenza pubblicitaria",sub:"Chi paga i post sponsorizzati",body:"I post dei profili che attaccano Conti sono sponsorizzati da: Rete Ascolto srl.\nTotale speso da settembre: 6.100 €."},
   {id:"s2",g:"Profili",title:"@contidimissioni_ora e altri 299",sub:"Creati tra il 1° e il 10 settembre",body:"Nessuna foto vera, nessun amico reale."}],
  mail:[
   {id:"m1",title:"Registro imprese",sub:"Visura Rete Ascolto srl",meta:"lunedì",body:"Rete Ascolto srl, costituita ad agosto.\nAmministratore unico: Arrighi.\nUnico cliente dichiarato: Ecoval spa."},
   {id:"m2",title:"Comune",sub:"Ordine del giorno del consiglio",meta:"settembre",body:"Mozione Conti: «Nuova gara per il servizio rifiuti alla scadenza del contratto Ecoval, 31 dicembre.»"}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Mar · Conferenza stampa",sub:"11:00",body:""},
   {id:"c2",g:"Dicembre",title:"31 dic · Scadenza contratto Ecoval",sub:"",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il numero della denuncia alla polizia postale.\nNota sotto: quanto mi offriva Arrighi al mese."},
   {id:"n2",title:"Ecoval",lock:"note",body:"Ogni sera alle 21 partono trecento post contro Conti.\nConti è l'unica che chiede una gara vera sui rifiuti.\nChi ha paura della gara non è il sindaco. È chi la perderebbe."}],
  tel:[
   {id:"t1",title:"Arrighi",sub:"4 set · in entrata, 3 min"},
   {id:"t2",title:"Polizia postale",sub:"5 nov · in uscita, 7 min"}]
 },
 photos:[
  {id:"p1",t:"3 nov",title:"I numeri",sc:"gra"},
  {id:"p2",t:"giu",title:"Col sindaco",sc:"sin"},
  {id:"p3",t:"2022",title:"Bei tempi",sc:"mem"},
  {id:"p4",t:"ott",title:"Piazza",sc:"cam"},
  {id:"h1",t:"lun",title:"Trovata online",sc:"inv",lock:"album"},
  {id:"h2",t:"set",title:"Il contratto",sc:"sca",lock:"album"}],
 pins:{note:"1500",album:"4471"},
 events:[{id:"a",q:4,kind:"call",from:"Arrighi",lines:["«Sindaco? Ah, no, è il telefono di Pinna. Mi scusi.»","«Già che ci sono: quella vecchia chat con me non conta niente, parlavamo di un'altra cosa. Se il ragazzo vuole, la cancelli pure.»","«Pronto?»"]},
         {id:"b",q:9,kind:"sms",from:"Daria Conti",text:"Pinna, mi è appena arrivata una proposta: ritirare la mozione sulla gara dei rifiuti «in cambio di pace sui social». Indovini chi la manda."}],
 qs:[
  {t:"300",q:"Quanti profili attaccano Daria Conti?",a:["300","trecento","300 profili"],show:"Trecento",hint:"C'è l'analisi di Luca in Galleria.",news:"Creati tutti nei primi dieci giorni di settembre."},
  {t:"21:00",q:"A che ora pubblicano?",all:["2100"],a:["21","alle 21","le 21","alle nove","le nove"],show:"Ogni sera alle 21:00",hint:"Stessa analisi.",news:"Tutti entro quattro minuti. Non sono persone: è una macchina."},
  {t:"2022",q:"Luca gestiva una pagina anonima. In quale anno l'ha chiusa?",a:["2022","nel 2022"],show:"Nel 2022",hint:"Lo dice la ex socia, e c'è una schermata.",news:"Il passato che lo rende il colpevole perfetto. Ma sono tre anni fa."},
  {t:"polizia postale",q:"A chi ha segnalato i profili Luca, su ordine del sindaco?",any:["postale","polizia"],show:"Alla polizia postale",hint:"Chat con il sindaco e con la polizia.",news:"Il 3 novembre, il giorno stesso in cui li ha trovati. Chi gestisce i profili non li denuncia."},
  {t:"1500",q:"Arrighi a settembre aveva offerto a Luca un lavoro. Per quanti euro al mese?",a:["1500","1.500","1500 euro","1.500 euro","1.500 €"],show:"1.500 €, in contanti",hint:"Chat con Arrighi.",news:"«Coordinare qualche profilo.» Luca ha detto no. Ora che sai che cosa offriva, hai recuperato i due messaggi eliminati di Arrighi.",unlock:"arr"},
  {t:"non deve sapere",q:"Che cosa scrive Arrighi del sindaco nel messaggio recuperato? Che lui...",any:["sapere","nonsa"],show:"«Non deve sapere niente»",hint:"Primo messaggio recuperato.",news:"«Lavoriamo per lui, ma lui non deve sapere.» Il sindaco è il pretesto, non il cliente."},
  {t:"Rete Ascolto",q:"Chi paga i post sponsorizzati dei profili?",any:["rete","ascolto"],show:"Rete Ascolto srl",hint:"Su Scatto c'è la trasparenza delle inserzioni.",news:"Seimilacento euro da settembre."},
  {t:"Arrighi",q:"Chi amministra Rete Ascolto srl?",any:["arrighi"],show:"Arrighi",hint:"C'è una visura nella Mail.",news:"Una società nata ad agosto, un mese prima dei profili."},
  {t:"Ecoval",q:"Chi è l'unico cliente di Rete Ascolto?",any:["ecoval"],show:"Ecoval, l'azienda dei rifiuti",hint:"Stessa visura.",news:"L'azienda che ha il contratto dei rifiuti del Comune."},
  {t:"31 dicembre",q:"Quando scade il contratto dei rifiuti con Ecoval?",all:["31","dic"],show:"Il 31 dicembre",hint:"Mail del Comune e Calendario.",news:"Daria Conti chiede una gara nuova. I profili la attaccano da quando ha presentato la mozione."},
  {t:"4000",q:"Nell'album privato c'è una fattura di Rete Ascolto. Quanto paga Ecoval al mese?",a:["4000","4.000","4000 euro","4.000 euro","4.000 €"],show:"4.000 € al mese",hint:"Il codice dell'album è il numero della denuncia.",news:"«Ascolto della rete.» Si chiama così, sulle fatture."},
  {t:"la gara",q:"Nella nota protetta Luca scrive chi ha paura di qualcosa. Di che cosa?",any:["gara"],show:"Della gara",hint:"Il codice è quanto gli offriva Arrighi al mese.",news:"«Chi ha paura della gara non è il sindaco. È chi la perderebbe.»"},
  {t:"e",q:"Chi paga i trecento profili?",o:[["l","Luca Pinna, il social manager"],["f","Il sindaco Ferrara"],["d","Daria Conti, per fare la vittima"],["e","Ecoval, tramite Arrighi"],["v","Vale, l'ex socia"]],a:"e",show:"Ecoval, tramite Arrighi",hint:"Segui chi paga le inserzioni, e chi paga chi le paga.",news:""}],
 win:{title:"I profili li paga Ecoval, attraverso Arrighi.",
  steps:["Trecento profili nati a settembre pubblicano ogni sera alle 21 contro Daria Conti, che chiede una gara nuova sui rifiuti.","Le inserzioni le paga Rete Ascolto srl, società di Arrighi nata ad agosto con un solo cliente: Ecoval, che ha il contratto in scadenza il 31 dicembre.","Ecoval paga 4.000 € al mese per «ascolto della rete».","A settembre Arrighi aveva offerto a Luca 1.500 € al mese per coordinare i profili: «il sindaco non deve sapere». Luca ha rifiutato.","A novembre Luca li ha denunciati alla polizia postale, su ordine del sindaco."],
  end:"Il sindaco legge il messaggio di Arrighi due volte. «Lavoriamo per lui», ripete, «ma lui non deve sapere.» Alla conferenza stampa non parla di Luca. Annuncia che il servizio rifiuti andrà a gara, e consegna la fattura di Rete Ascolto ai giornalisti."}
});
LIB.tune(66,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="vis";
 e.pins={album:"4471",vis:"2100",note:"4008"};
 e.locks={album:{hint:"Il numero che mi hanno dato quando ho denunciato."},vis:{name:"Mail protetta",hint:"L'ora in cui partono tutti insieme."},note:{hint:"Le centinaia al mese della fattura, poi il mese in cui è nata la società."}};
 e.spots=[
  {id:"s1",x:70,y:56,label:"Municipio",title:"Municipio di Monteforte",sub:"Ufficio stampa del sindaco",body:"Dove Luca gestisce i social. Il sindaco passa di lì solo per firmare."},
  {id:"s2",x:100,y:36,label:"Ecoval",title:"Ecoval spa · impianto",sub:"Rifiuti · ★ 2,1",body:"Recensione di un dipendente: «Il contratto con il Comune scade a dicembre, ma i capi sono tranquilli. Dicono che è tutto sistemato.»"},
  {id:"s3",x:180,y:120,label:"Rete Ascolto",title:"Rete Ascolto srl",sub:"Borgoverde",body:"Una targa d'ottone su un portone. Nessuno risponde al citofono."}];
 LIB.hints(e,["Luca ha analizzato i profili.","…e quando pubblicano.","Una vecchia socia sa del passato di Luca.","Il sindaco gli ha dato un ordine.","Qualcuno gli aveva offerto un lavoro.","Un messaggio recuperato dice molto del sindaco.","Le inserzioni hanno un pagatore, ed è pubblico.","Le società hanno una visura, chiusa.","Stessa visura: per chi lavora?","Il Comune ha una scadenza.","Una fattura nascosta.","Luca ha scritto di chi ha paura.","Segui chi paga le inserzioni, e chi paga chi le paga."]);
});
})();
