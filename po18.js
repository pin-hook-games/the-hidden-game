(function(){
/* Intrighi 18: Il giornale (Monteforte, comune inventato). Soluzione: l'editore, Carlo Gentile, ha firmato con Ecoval un contratto
   di pubblicità da 60.000 euro, procurato da Arrighi (Rete Ascolto srl), e ha ordinato di non scrivere più della discarica.
   Falsa pista: la casa al mare di Silvio, comprata con il mutuo e l'eredità della madre. */
const SC={
 red:()=>LIB.group(5,"Redazione dell'Eco di Monteforte","#33658a"),
 dis:()=>LIB.obj("#b7c48a","🚛","La discarica, ottobre"),
 cas:()=>LIB.obj("#9cc7d6","🏠","La casetta al mare, rogito a settembre"),
 pag:()=>LIB.doc("Eco di Monteforte · menabò","#a02822",["Pag. 3: «Discarica, la Regione","sapeva»  →  TOLTO (C.G.)","Al suo posto: pubblicità","Ecoval, pagina intera"]),
 con:()=>LIB.doc("Contratto pubblicitario","#2f6b4f",["Ecoval spa / Eco di Monteforte","60.000 € · 12 mesi","Firmato: Carlo Gentile, editore","Intermediario: Rete Ascolto srl"]),
 fir:()=>LIB.doc("Dimissioni · bozza","#55606b",["Al direttore responsabile","non può essere chiesto di tacere","S. Marra","(non ancora consegnata)"])
};
const MAP=LIB.prov([[70,56,"#33658a","redazione",9,-14],[96,40,"#d43d55","discarica",9,-8]]);

LIB.add(78,["Il giornale","Lisa Ferrante vuole sapere perché il suo direttore ha smesso di scrivere della discarica","Monteforte"],{
 map:MAP,scenes:SC,owner:"Silvio Marra",time:"19:30",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal cal note bank",
 late:"Silvio è tornato in redazione a cercare il telefono. Lisa deve rimetterlo sulla scrivania.",
 brief:"Lisa Ferrante, cronista dell'Eco di Monteforte, ti ha portato il telefono del suo direttore, Silvio Marra, dimenticato in sala riunioni. Da tre settimane il giornale non scrive una riga sulla discarica, la storia che Lisa segue da un anno. In redazione dicono che Silvio si è comprato una casa al mare.",
 quote:"«Silvio era quello che mi diceva di non mollare mai. Poi un lunedì mi ha tolto il pezzo sulla discarica dalla pagina tre, senza spiegazioni. E sei settimane fa ha comprato una casa al mare. Fa due più due, mi dicono. Io non voglio fare due più due: voglio sapere.»",
 chats:[
  {id:"gen",name:"Carlo Gentile",sub:"Editore",m:[
   ["3 nov 9:00",0,"Silvio, da oggi la discarica non è una notizia. Abbiamo altre priorità."],
   ["3 nov 9:05",1,"Carlo, Lisa ha i documenti della Regione. È la storia dell'anno."],
   ["3 nov 9:10",0,"Il giornale è mio. Se non ti va bene, la porta la conosci."],
   ["",2,"1 messaggio eliminato il 3 novembre."],
   ["3 nov 9:12",0,"Abbiamo firmato con Ecoval, sessantamila. Senza quei soldi a gennaio chiudiamo e Lisa è la prima a casa. Fattelo bastare.","gen"]]},
  {id:"lisa",name:"Lisa",sub:"Cronista",m:[
   ["3 nov",0,"Silvio, perché hai tolto il pezzo? Dimmi solo questo."],
   ["3 nov",1,"Non posso, Lisa. Non ancora. Tieni tutto, non buttare niente."]]},
  {id:"ban",name:"Mutuo casa",sub:"Banca",m:[
   ["set",0,"Gentile cliente, il mutuo di 80.000 € è stato erogato. Prima rata a ottobre."]]},
  {id:"sor",name:"Anna",sub:"Sorella",m:[
   ["set",0,"Silvio, la mamma voleva che con i soldi suoi tu ti prendessi la casetta al mare. Hai fatto bene."],
   ["set",1,"Mi manca tanto, Anna."]]},
  {id:"arr",name:"N. Arrighi",sub:"",m:[
   ["4 nov",0,"Direttore, piacere di conoscerla. Il signor Gentile è stato molto ragionevole. Spero lo sarà anche lei. Le pagine di Ecoval escono il martedì."]]}
 ],
 lists:{
  bank:[
   {id:"b1",g:"Settembre",title:"Rogito casa",sub:"− 120.000,00 €",body:"Pagamento al notaio per l'acquisto."},
   {id:"b2",g:"Settembre",title:"Mutuo erogato",sub:"+ 80.000,00 €",body:""},
   {id:"b3",g:"Agosto",title:"Successione · Marra Giovanna",sub:"+ 40.000,00 €",body:"Quota di eredità della madre."}],
  mail:[
   {id:"m1",title:"Amministrazione Eco",sub:"Conti al 30 ottobre",meta:"ottobre",body:"Senza nuove entrate la cassa basta fino a gennaio."},
   {id:"m2",title:"Ordine dei giornalisti",sub:"Il direttore responsabile",meta:"giovedì",body:"Risposta al quesito del dott. Marra: l'editore non può imporre al direttore responsabile di non pubblicare notizie vere e di interesse pubblico."}],
  cal:[
   {id:"c1",g:"Novembre",title:"3 nov · Riunione con l'editore",sub:"9:00",body:""},
   {id:"c2",g:"Prossima settimana",title:"Lun · Consegna lettera",sub:"9:00",body:"Da Gentile."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese in cui mi hanno tolto la pagina tre, quattro cifre.\nNota sotto: i migliaia del contratto con Ecoval, con due zeri davanti."},
   {id:"n2",title:"Per Lisa",lock:"note",body:"Lunedì do le dimissioni e porto il contratto all'Ordine.\nIl pezzo sulla discarica esce lo stesso, firmato da te, su un altro giornale. Ho già chiamato.\nScusa per queste tre settimane. Dovevo avere le prove in mano prima di parlare."}],
  tel:[
   {id:"t1",title:"Ordine dei giornalisti",sub:"mer · in uscita, 18 min"},
   {id:"t2",title:"Carlo Gentile",sub:"3 nov 9:15 · in uscita, 1 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Redazione",sc:"red"},
  {id:"p2",t:"ott",title:"Sopralluogo",sc:"dis"},
  {id:"p3",t:"set",title:"La casetta",sc:"cas"},
  {id:"h1",t:"3 nov",title:"Menabò",sc:"pag",lock:"album"},
  {id:"h2",t:"mer",title:"Contratto",sc:"con",lock:"album"},
  {id:"h3",t:"gio",title:"Bozza",sc:"fir",lock:"album"}],
 pins:{note:"0060",album:"0311"},
 events:[{id:"a",q:3,kind:"sms",from:"Lisa",text:"Ce l'hai fatta a guardare? Io intanto riscrivo il pezzo per la terza volta. Non mi arrendo, come mi hai insegnato tu."},
         {id:"b",q:8,kind:"call",from:"Carlo Gentile",lines:["«Silvio, il martedì esce la pagina Ecoval, hai capito?»","«...Chi è? Questo non è Silvio.»","«Mi passi il direttore. Subito.»"]}],
 qs:[
  {t:"3 novembre",q:"In quale giorno Silvio ha tolto il pezzo sulla discarica? Giorno e mese.",all:["3","nov"],show:"Lunedì 3 novembre",hint:"Chat con l'editore e con Lisa.",news:"Riunione con l'editore alle 9."},
  {t:"Carlo Gentile",q:"Chi gli ha ordinato di toglierlo? Nome e cognome.",all:["carlo","gentile"],show:"Carlo Gentile, l'editore",hint:"Chat con l'editore.",news:"«Il giornale è mio.» Ora che sai chi ha dato l'ordine, hai recuperato il messaggio che Gentile ha mandato e poi cancellato.",unlock:"gen"},
  {t:"Ecoval",q:"Con quale azienda ha firmato il giornale, secondo il messaggio recuperato?",any:["ecoval"],show:"Ecoval",hint:"Messaggio recuperato.",news:"L'azienda della discarica."},
  {t:"60000",q:"Quanto vale il contratto?",a:["60000","60.000","60 mila","sessantamila","60000 euro","60.000 euro","60.000 €"],show:"60.000 €",hint:"Messaggio recuperato e album privato.",news:"Senza quei soldi, a gennaio il giornale chiude."},
  {t:"pubblicità",q:"Nel menabò del 3 novembre, che cosa ha preso il posto del pezzo a pagina tre?",any:["pubblic","pagina"],show:"Una pagina intera di pubblicità Ecoval",hint:"Album privato: il codice è il giorno e il mese del 3 novembre.",news:"Sigla di chi l'ha tolto: C.G."},
  {t:"Rete Ascolto",q:"Chi ha fatto da intermediario nel contratto?",all:["rete","ascolto"],show:"Rete Ascolto srl",hint:"Contratto nell'album.",news:"La società di Arrighi. Lo stesso che il 4 novembre scrive a Silvio."},
  {t:"Arrighi",q:"Chi scrive a Silvio il giorno dopo per dirgli che Gentile è stato «ragionevole»?",any:["arrighi"],show:"N. Arrighi",hint:"Chat.",news:"«Le pagine di Ecoval escono il martedì.»"},
  {t:"120000",q:"La casa al mare: quanto è costata?",a:["120000","120.000","120 mila","centoventimila","120000 euro","120.000 euro","120.000 €"],show:"120.000 €",hint:"Banca.",news:"Rogito a settembre, prima della storia della pagina tre."},
  {t:"madre",q:"Con che cosa l'ha pagata, oltre al mutuo di 80.000 €?",any:["eredit","madre","mamma","successione"],show:"Con l'eredità della madre",hint:"Banca e chat con la sorella.",news:"40.000 € di successione ad agosto. La casa non c'entra niente."},
  {t:"Ordine",q:"A chi ha chiesto Silvio se l'editore poteva imporgli di tacere?",any:["ordin"],show:"All'Ordine dei giornalisti",hint:"Mail e telefonate.",news:"Risposta: no."},
  {t:"dimissioni",q:"Nella nota protetta per Lisa, che cosa farà Silvio lunedì?",any:["dimett","dimission"],show:"Darà le dimissioni e porterà il contratto all'Ordine",hint:"Il codice: le migliaia del contratto, con due zeri davanti.",news:"E il pezzo di Lisa uscirà su un altro giornale, firmato da lei."},
  {t:"e",q:"Perché l'Eco ha smesso di scrivere della discarica?",o:[["s","Silvio è stato comprato: la casa al mare"],["e","L'editore Gentile ha venduto il silenzio a Ecoval, tramite Arrighi"],["l","Lisa non aveva prove"],["r","La Regione ha minacciato una querela"],["d","Silvio ha perso interesse"]],a:"e",show:"L'editore ha venduto il silenzio",hint:"Chi ha dato l'ordine, che cosa ha firmato, e con che soldi è stata comprata la casa?",news:""}],
 win:{title:"Il silenzio l'ha venduto l'editore, non il direttore.",
  steps:["Il 3 novembre l'editore Carlo Gentile ha ordinato a Silvio di togliere il pezzo di Lisa. Al suo posto, una pagina di pubblicità Ecoval.","Gentile aveva firmato con Ecoval un contratto da 60.000 €. Intermediario: Rete Ascolto srl, la società di Arrighi.","Il giorno dopo Arrighi ha scritto a Silvio per complimentarsi della «ragionevolezza» dell'editore.","La casa al mare è costata 120.000 €, pagata a settembre con un mutuo e con l'eredità della madre.","Silvio ha raccolto le prove, ha chiesto all'Ordine e lunedì darà le dimissioni."],
  end:"Lisa rimette il telefono sulla scrivania, aperto sulla nota. Dieci minuti dopo Silvio la chiama: «L'hai letta, vero?» «Sì.» «Allora prepara il pezzo. Questa volta lo firmi tu.»"}
});
LIB.tune(78,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="ord";
 e.pins={album:"0311",ord:"8040",note:"6004"};
 e.locks={album:{hint:"Il giorno in cui mi hanno tolto la pagina tre."},ord:{name:"Mail protetta",hint:"Le migliaia del mutuo, poi quelle dell'eredità."},note:{hint:"Le migliaia del contratto, poi il giorno in cui si è fatto vivo il consulente."}};
 e.spots=[
  {id:"s1",x:70,y:56,label:"Eco di Monteforte",title:"Redazione dell'Eco di Monteforte",sub:"Settimanale · ★ 4,2",body:"Recensione: «Da tre settimane non scrivono più della discarica. Strano, era il loro cavallo di battaglia.»"},
  {id:"s2",x:100,y:36,label:"Valle Scura",title:"Discarica di Valle Scura",sub:"Ecoval spa",body:"La storia che Lisa segue da un anno."},
  {id:"s3",x:318,y:208,label:"La casetta",title:"Casetta al mare",sub:"San Leone al Mare",body:"Recensione del bar vicino: «Il direttore ci viene da settembre, con la sorella. Dice che era il sogno di sua madre.»"}];
 LIB.hints(e,["Lisa ricorda il giorno.","Chi ha dato l'ordine?","Un messaggio recuperato nomina un'azienda.","…e una cifra.","Che cosa ha preso il posto del pezzo?","Il contratto ha un intermediario.","Il giorno dopo si è fatto vivo qualcuno.","La casa al mare: quanto?","…e con quali soldi.","Silvio ha chiesto un parere, ma la risposta è chiusa.","Silvio ha scritto a Lisa.","Chi ha dato l'ordine, che cosa ha firmato, e con che soldi è stata comprata la casa?"]);
});
})();
