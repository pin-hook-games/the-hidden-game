(function(){
/* Furti 13: Il conto di papà (Napoli). Soluzione: il cliente, il figlio Enzo.
   Ha installato l'app della banca «per aiutare» e da un suo dispositivo si è fatto 23 bonifici da 1.000 € con causale «spesa», sempre la domenica delle sue visite. Falsa pista: la vicina Assunta, che ha la delega per la pensione. */
const SC={
 gen:()=>LIB.two("#f0d9a0","#55606b","#7a3b5a","Gennaro con Enzo, festa del papà"),
 sco:()=>LIB.doc("Scontrini di Assunta","#2f6b4f",["Spesa del martedì: 38,40 €","Farmacia: 12,10 €","Resto: 49,50 € restituiti","«tutto al centesimo, Genna'»"]),
 dis:()=>LIB.doc("App banca · dispositivi autorizzati","#33658a",["1. Questo telefono","2. Galaxy A54 · «Enzo»","autorizzato il 2 maggio","(da Enzo, per aiutare)"]),
 bon:()=>LIB.doc("Bonifici · giugno-novembre","#a02822",["23 bonifici da 1.000 €","causale: «spesa»","sempre di domenica","dispositivo: Galaxy A54"]),
 vic:()=>LIB.two("#9cc7d6","#7a3b5a","#2f6b4f","Assunta, la vicina, e il caffè delle 11"),
 pre:()=>LIB.doc("Pensione · ritiro con delega","#55606b",["Assunta Esposito","ritira ogni mese","e consegna a Gennaro","firma di ricevuta"])
};
const MAP=LIB.city("Napoli",[[40,52,"Vomero"],[132,132,"Sanità"],[276,132,"Centro storico"],[40,232,"Mergellina"],[300,40,"Capodimonte"],[200,200,"Porto"]],
 [[150,120,"#d43d55","casa di Gennaro",9,-10]],[["M0 214Q200 176 400 226",60]]);

LIB.add(53,["Il conto di papà","Enzo accusa la vicina di aver svuotato il conto del padre","Napoli"],{
 map:MAP,scenes:SC,owner:"Gennaro Russo",time:"11:00",date:"dom 23 nov",homeDate:"domenica 23 novembre",
 appIds:"msg tel mail gal cal note bank",
 late:"Gennaro vuole il telefono: aspetta la telefonata della nipote.",
 brief:"Dal conto di Gennaro Russo, 79 anni, pensionato, in sei mesi sono spariti 23.000 euro. Il figlio Enzo ti ha portato il telefono del padre. È convinto che sia stata Assunta, la vicina che lo aiuta con la spesa e ritira la pensione per lui.",
 quote:"«Mio padre non usa l'app, non sa neanche cos'è un bonifico. Assunta ha la delega, entra e esce da casa sua. Chi altro può essere? Trovi le prove, così la denunciamo.» Enzo parla veloce, e guarda spesso il telefono.",
 chats:[
  {id:"enz",name:"Enzo",sub:"Figlio",m:[
   ["2 mag",0,"Papà, ti ho messo l'app della banca. Così se ti serve qualcosa la faccio io dal mio telefono."],
   ["2 mag",1,"Grazie figlio mio, io non ci capisco niente."],
   ["dom",0,"Papà, oggi passo alle 10, come ogni domenica."]]},
  {id:"ass",name:"Assunta",sub:"Vicina",m:[
   ["mar",0,"Genna', la spesa: 38,40. La farmacia 12,10. Ti ho lasciato il resto nel barattolo, 49,50. Ti mando gli scontrini come sempre."],
   ["ven",0,"La pensione l'ho ritirata, è nel cassetto, contala."]]},
  {id:"nip",name:"Nipote Sofia",sub:"",m:[
   ["sab",0,"Nonno, papà mi ha detto di non chiamarti più per i soldi. Ma io i soldi non te li ho mai chiesti. Ha perso di nuovo alle scommesse?"]]},
  {id:"ban",name:"Banca",sub:"Avvisi",m:[
   ["",2,"Notifiche archiviate."],
   ["dom 10:42",0,"Bonifico di 1.000 € disposto dal dispositivo Galaxy A54 «Enzo». Causale: spesa.","ban"]]}
 ],
 lists:{
  bank:[
   {id:"b1",g:"Dispositivi autorizzati",title:"Galaxy A54 · «Enzo»",sub:"dal 2 maggio",body:"Autorizzato da Enzo Russo."},
   {id:"b2",g:"Movimenti",title:"23 bonifici da 1.000 €",sub:"giugno-novembre",body:"Causale «spesa». Tutti di domenica, tra le 10 e le 12. Beneficiario: conto intestato a E. Russo."},
   {id:"b3",g:"Movimenti",title:"Pensione",sub:"ogni mese",body:"Ritirata allo sportello con delega da A. Esposito."}],
  mail:[
   {id:"m1",title:"Banca",sub:"Riepilogo",meta:"novembre",body:"Saldo in calo di 23.000 € da giugno."}],
  cal:[
   {id:"c1",g:"Ogni domenica",title:"Enzo",sub:"10:00",body:""},
   {id:"c2",g:"Ogni martedì",title:"Assunta · spesa",sub:"",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese in cui è stata messa l'app, quattro cifre.\nNota sotto: quante migliaia sono sparite, con due zeri davanti."},
   {id:"n2",title:"Scritto da Sofia sul telefono del nonno",lock:"note",body:"Nonno, l'ho capito anch'io. I bonifici sono di domenica, quando c'è papà.\nAssunta ti porta gli scontrini anche per dieci centesimi.\nPapà ha di nuovo le scommesse. Non lo denunciare, ti prego. Parlagli."}],
  tel:[
   {id:"t1",title:"Enzo",sub:"ogni domenica · in entrata"}]
 },
 photos:[
  {id:"p1",t:"marzo",title:"Con Enzo",sc:"gen"},
  {id:"p2",t:"mar",title:"Scontrini",sc:"sco"},
  {id:"p3",t:"estate",title:"Assunta",sc:"vic"},
  {id:"p4",t:"ven",title:"Pensione",sc:"pre"},
  {id:"h1",t:"2 mag",title:"Dispositivi",sc:"dis",lock:"album"},
  {id:"h2",t:"nov",title:"Bonifici",sc:"bon",lock:"album"}],
 pins:{note:"0023",album:"0205"},
 events:[{id:"a",q:3,kind:"call",from:"Enzo",lines:["«Allora, l'ha trovata la prova contro Assunta?»","«...Come, guarda la banca? La banca non c'entra, è lei che ha la delega.»","«Mi richiami quando ha qualcosa su di lei.»"]},
         {id:"b",q:7,kind:"sms",from:"Assunta",text:"Genna', ho saputo che Enzo dice in giro che ti rubo. Da domani la spesa non te la faccio più. Mi dispiace, dopo trent'anni."}],
 qs:[
  {t:"23000",q:"Quanto è sparito dal conto?",a:["23000","23.000","23 mila","ventitremila","23000 euro","23.000 euro","23.000 €"],show:"23.000 €",hint:"Mail della banca.",news:"In sei mesi."},
  {t:"23",q:"In quanti bonifici?",a:["23","ventitre"],show:"23 bonifici da 1.000 €",hint:"Banca.",news:"Causale «spesa»."},
  {t:"domenica",q:"In quale giorno della settimana partono sempre?",any:["domenic"],show:"Di domenica",hint:"Banca.",news:"Tra le 10 e le 12."},
  {t:"Enzo",q:"Chi passa sempre da Gennaro la domenica alle 10?",any:["enzo","figli"],show:"Enzo",hint:"Calendario e chat.",news:"Il cliente."},
  {t:"49,50",q:"Quanto resto ha lasciato Assunta nel barattolo martedì?",all:["4950"],show:"49,50 €",hint:"Chat con Assunta e scontrini.",news:"Conti al centesimo. La pensione la lascia nel cassetto."},
  {t:"Galaxy A54",q:"Da quale dispositivo partono i bonifici?",any:["galaxy","a54"],show:"Dal Galaxy A54 «Enzo»",hint:"Banca, dispositivi autorizzati.",news:"Ora hai riaperto le notifiche archiviate della banca.",unlock:"ban"},
  {t:"2 maggio",q:"Quando Enzo ha installato l'app? Giorno e mese.",all:["2","mag"],show:"Il 2 maggio",hint:"Chat con Enzo.",news:"«Così se ti serve qualcosa la faccio io dal mio telefono.»"},
  {t:"scommesse",q:"Secondo la nipote Sofia, perché Enzo ha bisogno di soldi?",any:["scommess","gioc"],show:"Le scommesse",hint:"Chat con Sofia.",news:"«Di nuovo.»"},
  {t:"parlargli",q:"Nella nota protetta, che cosa chiede Sofia al nonno invece di denunciare?",any:["parl"],show:"Di parlargli",hint:"Il codice: le migliaia sparite, con due zeri davanti.",news:"«Non lo denunciare, ti prego.»"},
  {t:"e",q:"Chi ha preso i soldi di Gennaro?",o:[["a","Assunta, la vicina"],["e","Enzo, il figlio, dall'app che ha installato"],["s","Sofia, la nipote"],["b","Un errore della banca"],["h","Un hacker"]],a:"e",show:"Enzo",hint:"Dispositivo, giorno della settimana.",news:""}],
 win:{title:"I soldi li ha presi Enzo. Il cliente.",
  steps:["23 bonifici da 1.000 €, causale «spesa», tutti di domenica tra le 10 e le 12.","Partono dal Galaxy A54 «Enzo», autorizzato il 2 maggio quando ha installato l'app «per aiutare».","La domenica alle 10 Enzo è da suo padre.","Assunta porta gli scontrini al centesimo. La delega è solo per la pensione.","Enzo ha di nuovo debiti di scommesse."],
  end:"Non consegni a Enzo la prova contro Assunta. Restituisci il telefono a Gennaro, aperto sulla nota di Sofia. Domenica, quando Enzo arriva alle 10, trova il padre seduto con Assunta e Sofia. Sul tavolo c'è il telefono. Il caffè lo fa Assunta, come sempre."}
});
LIB.tune(53,e=>{
 LIB.drop(e,"note","n1");
 if(!e.names.map){e.apps.splice(4,0,["map","Mappe","map","linear-gradient(160deg,#7fd08a,#2f8f9d)"]);e.names.map="Mappe";e.lists.map=[];}
 e.map=LIB.city("Napoli",[[40,52,"Vomero"],[132,132,"Sanità"],[276,132,"Centro storico"],[40,232,"Mergellina"],[300,40,"Capodimonte"],[200,200,"Porto"]],[],[["M0 214Q200 176 400 226",60]]);
 e.lists.mail.push({id:"m2",title:"Banca",sub:"Accessi all'app · dettaglio",meta:"novembre",lock:"acc",body:"Dispositivo Galaxy A54 «Enzo»:\naccessi ogni domenica tra le 10:30 e le 11:15.\nPosizione dell'accesso: via Foria 61."});
 e.pins={album:"0205",acc:"6102",note:"1023"};
 e.locks={album:{hint:"Il giorno in cui mio figlio mi ha aiutato col telefono."},acc:{name:"Mail protetta",hint:"Il numero del mio portone, poi il mio piano."},note:{hint:"L'ora in cui entra, poi quante volte l'ha fatto."}};
 e.spots=[
  {id:"s1",x:150,y:110,label:"Casa di Gennaro",title:"Casa di Gennaro",sub:"Via Foria 61, secondo piano",body:"Assunta abita sul pianerottolo di fronte, da trent'anni."},
  {id:"s2",x:276,y:150,label:"Punto Gioco",title:"Punto Gioco",sub:"Sala scommesse · ★ 2,9",body:"Recensione: «La domenica a mezzogiorno c'è sempre lo stesso signore sulla cinquantina, arriva da via Foria. Perde, e ricomincia.»"},
  {id:"s3",x:110,y:150,label:"Mercato",title:"Mercato rionale",sub:"Martedì e venerdì",body:"Recensione di un banco: «La signora Assunta fa la spesa per mezzo palazzo, e vuole sempre lo scontrino.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"via Foria",q:"Da dove si collega il Galaxy di Enzo, ogni domenica?",any:["foria","casa"],show:"Da casa di Gennaro, via Foria 61",hint:"",news:"Mentre beve il caffè con suo padre."});
 LIB.hints(e,["La banca ha mandato un riepilogo.","Conta i movimenti uguali.","Guarda il calendario dei movimenti.","C'è qualcuno che viene sempre in quel giorno.","Assunta è precisa fino al centesimo.","La banca sa chi è autorizzato.","Qualcuno ha detto al padre cosa aveva installato.","La nipote ha capito prima di tutti.","Sofia ha scritto qualcosa sul telefono del nonno.","La banca registra anche da dove ci si collega, ma la mail è chiusa.","Dispositivo, giorno della settimana, posizione."]);
});
})();
