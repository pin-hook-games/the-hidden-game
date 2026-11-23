(function(){
/* Intrighi 13: Il vice (Borgoverde, comune inventato). Soluzione: il vicesindaco Carini.
   Ricatta la sindaca Laura Bindi con una vecchia foto che solo lui aveva visto, per farle ritirare la revoca della concessione alla cava di un suo cliente. */
const SC={
 giu:()=>LIB.group(5,"La giunta il giorno dell'insediamento","#33658a"),
 pao:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Paolo, vent'anni insieme"),
 cav:()=>LIB.obj("#d9c7a8","⛰️","La cava di Monte Bruno, il fronte franato"),
 ric:()=>LIB.shot("Numero sconosciuto",["Lalla, ritira la delibera sulla cava","o la foto del 2004 la vedono tutti."]),
 tab:()=>LIB.doc("Tabaccheria Centrale","#55606b",["Via Garibaldi 12, Borgoverde","SIM ricaricabile attivata","lunedì 10 novembre, ore 13:05","Pagata in contanti"]),
 stu:()=>LIB.doc("Studio Carini · clienti","#a02822",["Cave Lete srl","Consulenza dal 2021","Compenso annuo: 24.000 €","Sede dello studio: via Garibaldi 14"])
};
const MAP=LIB.prov([[180,120,"#33658a","municipio",9,-12],[164,104,"#d43d55","via Garibaldi",-60,-6],[40,40,"#56666e","cava di Monte Bruno",9,14]]);

LIB.add(73,["Il vice","Paolo vuole sapere chi ricatta la moglie, la sindaca Bindi","Borgoverde"],{
 map:MAP,scenes:SC,owner:"Laura Bindi",time:"07:30",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"Laura deve entrare in consiglio e decidere se ritirare la delibera. Ti chiede il telefono.",
 brief:"Paolo ti ha portato il telefono della moglie, Laura Bindi, 49 anni, sindaca di Borgoverde. Da lunedì un numero sconosciuto la ricatta: se non ritira la revoca della concessione di una cava, farà girare una vecchia foto. Oggi alle 9 il consiglio vota.",
 quote:"«Laura mi ha raccontato tutto ieri sera, piangendo. La foto è di vent'anni fa, una festa, niente di grave, ma in campagna elettorale la massacrerebbero. Lei pensa al suo ex, che è ricomparso proprio adesso. Io non so. So solo che quella foto l'hanno vista in pochissimi.»",
 chats:[
  {id:"ric",name:"Numero sconosciuto",sub:"",m:[
   ["lun 13:40",0,"Lalla, ritira la delibera sulla cava, o la foto del 2004 la vedono tutti."],
   ["mar 21:00",0,"Giovedì in consiglio. Hai tempo fino alle 9."],
   ["mer 07:00",1,"Chi sei?"],
   ["mer 07:30",0,"Uno che ti conosce bene, Lalla."]]},
  {id:"car",name:"Carini",sub:"Vicesindaco",m:[
   ["mer 19:00",1,"Gianni, mi stanno ricattando per la delibera della cava. Non so che fare."],
   ["mer 19:20",0,"Laura, ti conosco dall'università. Per quieto vivere io cederei: la cava si può revocare anche tra un anno, la tua reputazione no."],
   ["",2,"1 messaggio eliminato mercoledì."],
   ["mer 19:25",0,"Ritirala e non pensarci più, Lalla. Fidati di me.","lal"]]},
  {id:"marco",name:"Marco Ruiu",sub:"Ex compagno",m:[
   ["dom",0,"Laura, ho visto che sei diventata sindaca, complimenti. Ti scrivo da Berlino. Nessun secondo fine, giuro."],
   ["dom",1,"Grazie, Marco."],
   ["mer 10:00",0,"Mi chiedi di quella foto? Io non l'ho mai avuta. L'avevi tu, nel tuo album. Non l'ho mai nemmeno vista stampata."]]},
  {id:"sorella",name:"Anna",sub:"Sorella",m:[
   ["mer 22:00",0,"Lalla, la foto della festa di laurea? Ce l'hai solo tu. A me non l'hai mai fatta vedere, mi hai solo raccontato. Chi l'ha vista?"],
   ["mer 22:10",1,"Gianni. Gliel'ho fatta vedere io, anni fa, ridendo, quando eravamo amici e basta."]]},
  {id:"geo",name:"Ufficio tecnico",sub:"",m:[
   ["4 nov",0,"Sindaca, la frana al fronte della cava di Monte Bruno conferma: la concessione a Cave Lete va revocata. Ci sono case a duecento metri."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Segreteria",sub:"Ordine del giorno del consiglio",meta:"lunedì",body:"Giovedì ore 9: revoca della concessione della cava di Monte Bruno a Cave Lete srl, per motivi di sicurezza."},
   {id:"m2",title:"Operatore telefonico",sub:"Risposta alla denuncia",meta:"mercoledì",body:"Il numero che la contatta è una SIM ricaricabile attivata lunedì 10 novembre alle 13:05 presso la Tabaccheria Centrale, via Garibaldi 12, Borgoverde."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Via Garibaldi 12",sub:"Tabaccheria Centrale",body:"Al pianoterra del palazzo accanto al civico 14."},
   {id:"g2",g:"Luoghi",title:"Via Garibaldi 14",sub:"Studio Carini, commercialisti",body:"Lo studio del vicesindaco."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Gio · Consiglio comunale",sub:"09:00",body:"Revoca cava."},
   {id:"c2",g:"Questa settimana",title:"Lun · Pranzo con Gianni",sub:"13:00",body:"Bar sotto il suo studio."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'anno della foto del ricatto.\nNota sotto: il civico della tabaccheria e quello dello studio di Carini, attaccati."},
   {id:"n2",title:"Gianni",lock:"note",body:"A Gianni ho mostrato quella foto vent'anni fa, all'università, e abbiamo riso.\nLui mi chiama Lalla da sempre. Lo fanno in tre: mamma, Anna e lui.\nNon voglio che sia lui. Ma tutto porta a lui."}],
  drive:[
   {id:"d1",title:"Dichiarazioni di interessi della giunta",sub:"PDF",meta:"Luglio",body:"Vicesindaco Gianni Carini, commercialista.\nClienti con rapporti con il Comune: Cave Lete srl (consulenza dal 2021).\nNota: si asterrà sulle delibere che riguardano la cava."}],
  tel:[
   {id:"t1",title:"Carini",sub:"mer 19:30 · in entrata, 14 min"},
   {id:"t2",title:"Anna",sub:"mer 22:15 · in uscita, 20 min"}]
 },
 photos:[
  {id:"p1",t:"giu",title:"Insediamento",sc:"giu"},
  {id:"p2",t:"ago",title:"Con Paolo",sc:"pao"},
  {id:"p3",t:"4 nov",title:"La frana",sc:"cav"},
  {id:"p4",t:"lun 13:41",title:"Schermata",sc:"ric"},
  {id:"h1",t:"mer",title:"Dall'operatore",sc:"tab",lock:"album"},
  {id:"h2",t:"mer 23:00",title:"Trovato online",sc:"stu",lock:"album"}],
 pins:{note:"1214",album:"2004"},
 events:[{id:"a",q:3,kind:"sms",from:"Numero sconosciuto",text:"Lalla, vedo che hai dato il telefono a qualcuno. Mancano due ore. Non fare la furba."},
         {id:"b",q:8,kind:"call",from:"Carini",lines:["«Laura? Ah, Paolo, ciao.»","«Senti, dille di non fare sciocchezze stamattina. Ritirare la delibera non è una sconfitta, è prudenza. Io ci sono, glielo dico da amico.»","«Paolo?»"]}],
 qs:[
  {t:"Cave Lete",q:"Quale azienda perderebbe la concessione con la delibera di oggi?",any:["cave","lete"],show:"Cave Lete srl",hint:"Ordine del giorno nella Mail.",news:"Una cava franata a duecento metri dalle case."},
  {t:"2004",q:"Di quale anno è la foto con cui la ricattano?",a:["2004","del 2004"],show:"Del 2004",hint:"Primo messaggio del ricatto.",news:"Una festa di laurea di vent'anni fa."},
  {t:"Lalla",q:"Con quale soprannome la chiama il ricattatore?",any:["lalla"],show:"«Lalla»",hint:"Rileggi i messaggi del numero sconosciuto.",news:"Un nome che non usa nessuno in Comune."},
  {t:"3",q:"Quante persone la chiamano così, secondo Laura?",a:["3","tre","in tre","3 persone","tre persone"],show:"Tre: la madre, la sorella e una terza",hint:"Lo scrive nella nota protetta. Il codice: civico della tabaccheria e civico dello studio di Carini, attaccati.",news:"La terza è Gianni Carini, il vicesindaco, amico dall'università."},
  {t:"Berlino",q:"Laura pensava al suo ex, Marco Ruiu. Da quale città scrive?",any:["berlino","berlin"],show:"Da Berlino",hint:"Chat di domenica.",news:"E la foto non l'ha mai avuta, né vista stampata."},
  {t:"Carini",q:"A chi ha mostrato quella foto Laura, anni fa? Lo dice alla sorella.",any:["carini","gianni"],show:"A Gianni Carini",hint:"Chat con Anna.",news:"«Ridendo, quando eravamo amici e basta.» Ora che lo sai, hai recuperato il messaggio che Carini le ha mandato e poi cancellato.",unlock:"lal"},
  {t:"Lalla",q:"Nel messaggio cancellato, come la chiama Carini?",any:["lalla"],show:"«Lalla»",hint:"Messaggio recuperato.",news:"Lo stesso soprannome del ricattatore, scritto sei minuti dopo il consiglio di cedere «per quieto vivere»."},
  {t:"Tabaccheria Centrale",q:"Dove è stata attivata la SIM del ricattatore?",any:["tabacc"],show:"Alla Tabaccheria Centrale, via Garibaldi 12",hint:"Risposta dell'operatore.",news:"Lunedì 10 novembre alle 13:05."},
  {t:"14",q:"A quale civico di via Garibaldi c'è lo studio di Carini?",a:["14","al 14","civico 14","numero 14"],show:"Al 14",hint:"Mappe.",news:"Il palazzo accanto alla tabaccheria."},
  {t:"pranzo",q:"Lunedì alle 13 Laura aveva un appuntamento con Carini. Che cosa?",any:["pranz"],show:"Pranzo, al bar sotto il suo studio",hint:"Calendario.",news:"La SIM è stata attivata alle 13:05, a dieci metri."},
  {t:"24000",q:"Nell'album privato c'è l'elenco clienti dello studio Carini. Quanto paga Cave Lete ogni anno?",a:["24000","24.000","24000 euro","24.000 euro","24.000 €"],show:"24.000 €",hint:"Il codice dell'album è l'anno della foto.",news:"Un cliente dal 2021. Carini aveva dichiarato che si sarebbe astenuto sulla cava."},
  {t:"c",q:"Chi ricatta la sindaca?",o:[["m","Marco Ruiu, l'ex"],["c","Gianni Carini, il vicesindaco"],["a","Anna, la sorella"],["l","Cave Lete, senza intermediari"],["u","L'ufficio tecnico"]],a:"c",show:"Gianni Carini",hint:"Chi conosceva la foto, usa quel soprannome e lavora per la cava?",news:""}],
 win:{title:"Il ricattatore è Gianni Carini, il vicesindaco.",
  steps:["Il ricatto chiede di salvare la concessione di Cave Lete, cliente dello studio Carini da 24.000 € l'anno.","La foto del 2004 l'aveva vista solo Carini, e il soprannome «Lalla» lo usano in tre: madre, sorella e lui.","La SIM è stata attivata alle 13:05 di lunedì alla tabaccheria al civico 12, accanto allo studio di Carini al 14, mentre i due pranzavano lì sotto.","Mercoledì sera Carini le ha consigliato di cedere e le ha scritto «Lalla» in un messaggio poi cancellato.","Marco Ruiu è a Berlino e la foto non l'ha mai avuta."],
  end:"Paolo legge la nota della moglie e chiude gli occhi. «Vent'anni di cene di Natale», dice. Alle 9 Laura entra in consiglio. Mette ai voti la revoca della cava e, prima del voto, chiede al vicesindaco di uscire dall'aula. Lui esce. Non rientra."}
});
LIB.tune(73,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="dic";
 e.pins={album:"2004",dic:"1305",note:"2421"};
 e.locks={album:{hint:"L'anno della foto."},dic:{name:"File protetto",hint:"Il minuto in cui è nato quel numero."},note:{hint:"Le migliaia all'anno, poi da quando lo pagano."}};
 e.spots=[
  {id:"s1",x:180,y:120,label:"Tabaccheria Centrale",title:"Tabaccheria Centrale",sub:"Via Garibaldi 12 · ★ 4,1",body:"Recensione: «Ti attivano una SIM in cinque minuti. Basta un documento, anche se non lo guardano tanto.»"},
  {id:"s2",x:198,y:108,label:"Studio Carini",title:"Studio Carini · commercialista",sub:"Via Garibaldi 14",body:"Il vicesindaco riceve qui il pomeriggio. Il bar sotto lo studio è il suo ufficio informale."},
  {id:"s3",x:150,y:96,label:"Cava Monte Bruno",title:"Cava di Monte Bruno",sub:"Cave Lete srl",body:"A ottobre una frana sul fronte nord. Le prime case sono a duecento metri."}];
 LIB.hints(e,["Il consiglio di giovedì ha un ordine del giorno.","Il ricatto cita un anno.","Il ricattatore usa un nome affettuoso.","Laura ricorda chi ha visto quella foto.","L'ex di Laura era lontano.","Un'amica ha fatto un nome.","Un messaggio recuperato usa quel nome.","L'operatore sa dove è nata la SIM.","Dove si trova, rispetto a qualcun altro?","Un appuntamento fisso, in calendario.","Le dichiarazioni della giunta sono chiuse, e un documento è nascosto.","Chi conosceva la foto, usa quel soprannome e lavora per la cava?"]);
});
})();
