(function(){
/* Furti 15: Vigilia (Venezia). Soluzione: la guardia giurata Renzi.
   Buco di 40 minuti nel registro delle ronde (2:10-2:50), una telecamera spenta «per manutenzione» che nessuno aveva chiesto, una barca noleggiata a nome del cognato, i pezzi su un mercatino online. Falsa pista: il commesso stagionale Kevin. Gualtieri fa la perizia. */
const SC={
 neg:()=>LIB.obj("#33658a","🏺","Il negozio, Calle dei Fabbri"),
 ron:()=>LIB.doc("Registro ronde · 24-25 dicembre","#55606b",["1:30 · Calle dei Fabbri ✓","2:10 · Campo San Luca ✓","2:50 · Rialto ✓","(40 minuti senza timbrature)"]),
 avv:()=>LIB.doc("Avviso tecnico","#a02822",["Telecamera 3, Calle dei Fabbri","spenta per manutenzione","24 dic, 2:00 - 3:00","richiesta da: «vigilanza»"]),
 bar:()=>LIB.doc("Noleggio barche · ricevuta","#2f6b4f",["Barca a motore, 24 dic","ore 1:00 - 4:00","a nome: Luigi Pavan","pagato in contanti"]),
 mer:()=>LIB.doc("Mercatino online · screenshot","#7a3b5a",["Vaso in vetro sommerso blu","firmato «A.Z. 2019»","Coppa a filigrana rossa","venditore: luigi_pv"]),
 kev:()=>LIB.two("#f0d9a0","#7a3b5a","#2f6b4f","Kevin, il commesso di Natale, con la famiglia")
};
const MAP=LIB.city("Venezia",[[40,52,"Cannaregio"],[132,132,"Calle dei Fabbri"],[276,132,"Rialto"],[40,232,"Giudecca"],[300,40,"Fondamenta Nuove"],[200,200,"San Marco"]],
 [[150,150,"#d43d55","il negozio",9,-10],[280,150,"#33658a","Rialto",9,-8]],[["M0 214Q200 176 400 226",40],["M200 0Q240 120 210 250",14]]);

LIB.add(55,["Vigilia","Alvise vuole sapere chi gli ha svuotato il negozio di vetri la notte di Natale","Venezia"],{
 map:MAP,scenes:SC,owner:"Alvise Zennaro",time:"11:00",date:"sab 27 dic",homeDate:"sabato 27 dicembre",
 appIds:"msg tel mail gal map cal note web",
 late:"Alvise deve andare in questura a firmare la denuncia integrativa. Si riprende il telefono.",
 brief:"La notte tra il 24 e il 25 dicembre il negozio di vetri d'arte di Alvise Zennaro, 55 anni, a Venezia, è stato svuotato: trentadue pezzi firmati. La serratura è stata aperta, l'allarme tagliato. In zona fa la ronda una guardia giurata. Alvise ti ha dato il suo telefono.",
 quote:"«Tutti mi dicono: il ragazzo che hai preso per Natale. Tre settimane in negozio e sa dove sono le cose. Ma io a Kevin voglio bene. E il perito dell'assicurazione, un certo Gualtieri, ha fatto delle domande strane, sulla barca, sugli orari della ronda. Come se gli interessasse più del dovuto.»",
 chats:[
  {id:"ren",name:"Renzi",sub:"Vigilanza notturna",m:[
   ["24 dic 23:00",0,"Buon Natale sig. Zennaro, stanotte ci penso io al suo negozio. Giro ogni quaranta minuti."],
   ["25 dic 8:00",0,"Sig. Zennaro, che disastro. Io sono passato alle 1:30 ed era tutto chiuso. Alle 2:50 ero a Rialto."],
   ["",2,"1 messaggio eliminato."],
   ["26 dic",0,"Sig. Zennaro, se l'assicurazione chiede, la telecamera 3 era in manutenzione da giorni. Non dipende da me.","ren"]]},
  {id:"kev",name:"Kevin",sub:"Commesso",m:[
   ["24 dic 19:00",0,"Buona vigilia, capo! Io stanotte sono a Mestre dai miei, messa di mezzanotte con la nonna."],
   ["25 dic",0,"Capo, sono distrutto per il negozio. Ditemi cosa posso fare."]]},
  {id:"tec",name:"Ditta telecamere",sub:"",m:[
   ["26 dic",0,"Sig. Zennaro, noi non abbiamo fatto nessuna manutenzione alla telecamera 3. L'avviso risulta inviato dal numero della vigilanza notturna, la notte del 24."]]},
  {id:"gua",name:"Perito Gualtieri",sub:"",m:[
   ["26 dic",0,"Sig. Zennaro, mi dica gli orari della ronda e il nome della guardia. Mi servono. E l'ultima volta che ha visto la barca di un parente della guardia in canale."],
   ["26 dic",1,"Perché la barca?"],
   ["26 dic",0,"Per curiosità professionale. Mi annoto tutto."]]}
 ],
 lists:{
  web:[
   {id:"w1",g:"Cronologia",title:"Mercatino online · vetro sommerso",sub:"cercato venerdì",body:"Vaso in vetro sommerso blu firmato «A.Z. 2019», coppa a filigrana rossa. Venditore: luigi_pv."},
   {id:"w2",g:"Cronologia",title:"Luigi Pavan",sub:"",body:"Cognato di Renzi, vigilanza notturna. Ha una barca a motore."}],
  mail:[
   {id:"m1",title:"Vigilanza Lagunare",sub:"Registro ronde",meta:"26 dicembre",body:"Guardia Renzi, notte 24-25 dicembre:\n1:30 Calle dei Fabbri\n2:10 Campo San Luca\n2:50 Rialto\nTra le 2:10 e le 2:50 nessuna timbratura."},
   {id:"m2",title:"Noleggio barche Cannaregio",sub:"Ricevuta",meta:"26 dicembre",body:"Barca a motore noleggiata il 24 dicembre dalle 1:00 alle 4:00, a nome Luigi Pavan, pagata in contanti."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Calle dei Fabbri",sub:"Il negozio",body:"Dà su un rio: una barca può attraccare sotto la finestra del retro."}],
  cal:[
   {id:"c1",g:"Dicembre",title:"24 dic · Chiusura negozio",sub:"19:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui è sparita la guardia, quattro cifre con lo zero davanti.\nNota sotto: l'anno della firma sul vaso blu."},
   {id:"n2",title:"Per la questura",lock:"note",body:"Renzi annuncia ronde ogni quaranta minuti, e tra le 2:10 e le 2:50 sparisce.\nLa telecamera 3 viene spenta con un avviso dal numero della vigilanza.\nSuo cognato noleggia una barca dalle 1 alle 4, e vende i miei vetri online.\nKevin era a Mestre con la nonna."}],
  tel:[
   {id:"t1",title:"Ditta telecamere",sub:"26 dic · in uscita, 7 min"}]
 },
 photos:[
  {id:"p1",t:"nov",title:"Il negozio",sc:"neg"},
  {id:"p2",t:"dic",title:"Kevin",sc:"kev"},
  {id:"p3",t:"26 dic",title:"Ronde",sc:"ron"},
  {id:"h1",t:"26 dic",title:"Avviso",sc:"avv",lock:"album"},
  {id:"h2",t:"26 dic",title:"Barca",sc:"bar",lock:"album"},
  {id:"h3",t:"ven",title:"Mercatino",sc:"mer",lock:"album"}],
 pins:{note:"2019",album:"0210"},
 events:[{id:"a",q:3,kind:"sms",from:"Kevin",text:"Capo, la nonna dice che se serve viene lei in questura a dire che ero con lei. Ha 88 anni e una gran voglia di vedere la questura."},
         {id:"b",q:7,kind:"call",from:"Gualtieri",lines:["«Sono Gualtieri. Un'ultima domanda: la serratura del retro, che marca era?»","«Grazie. Ho tutto quello che mi serve.»","«Per la pratica, intendo. Buone feste.»"]}],
 qs:[
  {t:"Mestre",q:"Dov'era Kevin, il commesso, la notte di Natale?",any:["mestre","nonna","messa"],show:"A Mestre, dalla nonna",hint:"Chat con Kevin.",news:"La falsa pista cade."},
  {t:"40",q:"Ogni quanti minuti diceva di passare Renzi?",a:["40","quaranta","40 minuti","ogni 40"],show:"Ogni 40 minuti",hint:"Chat con Renzi.",news:"«Stanotte ci penso io.»"},
  {t:"2:10",q:"Da che ora non ci sono più timbrature nel registro?",all:["210"],show:"Dalle 2:10",hint:"Mail della vigilanza.",news:"Fino alle 2:50. Quaranta minuti di buco."},
  {t:"telecamera 3",q:"Quale telecamera era spenta «per manutenzione»?",a:["3","telecamera 3","la 3","la telecamera 3","tre","la tre"],show:"La telecamera 3",hint:"Chat con Renzi o con la ditta.",news:"Nessuno aveva chiesto manutenzione."},
  {t:"vigilanza",q:"Da quale numero è partito l'avviso di manutenzione?",any:["vigilanz","renzi"],show:"Dal numero della vigilanza notturna",hint:"Chat con la ditta telecamere.",news:"Ora hai recuperato il messaggio che Renzi ha mandato il 26.",unlock:"ren"},
  {t:"Luigi Pavan",q:"A nome di chi è stata noleggiata la barca, la notte del 24?",all:["pavan"],show:"Luigi Pavan",hint:"Mail del noleggio.",news:"Dalle 1:00 alle 4:00, in contanti."},
  {t:"cognato",q:"Chi è Luigi Pavan per Renzi?",any:["cognat"],show:"Il cognato",hint:"Browser.",news:"Il negozio dà su un rio: la barca attracca sotto il retro."},
  {t:"luigi_pv",q:"Chi vende i vetri di Alvise sul mercatino online?",any:["luigipv"],show:"luigi_pv",hint:"Browser, o album privato: il codice è l'ora del buco nelle ronde.",news:"Il vaso blu firmato «A.Z. 2019»."},
  {t:"2019",q:"Che anno è firmato sul vaso blu?",a:["2019"],show:"2019",hint:"Mercatino.",news:"Il codice della nota."},
  {t:"r",q:"Chi ha organizzato il furto?",o:[["k","Kevin, il commesso"],["r","Renzi, la guardia giurata, con il cognato"],["g","Il perito Gualtieri"],["d","La ditta delle telecamere"],["a","Alvise, per l'assicurazione"]],a:"r",show:"Renzi",hint:"Ronde, telecamera, barca.",news:""}],
 win:{title:"Il furto l'ha organizzato Renzi, la guardia giurata.",
  steps:["Kevin era a Mestre con la nonna.","Nel registro di Renzi mancano le timbrature tra le 2:10 e le 2:50.","La telecamera 3 è stata spenta con un avviso partito dal numero della vigilanza.","Il cognato Luigi Pavan ha noleggiato una barca dalle 1 alle 4, e ora vende i vetri online come luigi_pv."],
  end:"La questura trova diciannove pezzi nel magazzino di Pavan. Alvise li rimette in vetrina il 6 gennaio, e a Kevin offre un contratto vero. Gualtieri manda una mail con la stima del danno, precisa al centesimo. In fondo, una riga di troppo: «La serratura del retro la cambi. Non si sa mai.»"}
});
LIB.tune(55,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="nol";
 e.pins={album:"0210",nol:"4040",note:"5004"};
 e.locks={album:{hint:"Quando la guardia ha smesso di timbrare."},nol:{name:"Mail protetta",hint:"Ogni quanto passava, detto due volte."},note:{hint:"Quando la ronda ricompare, poi quando torna la barca."}};
 e.spots=[
  {id:"s1",x:150,y:150,label:"Il negozio",title:"Vetri d'arte Zennaro",sub:"Calle dei Fabbri",body:"Il retro dà su un rio: una barca può accostare sotto la finestra senza che nessuno la veda dalla calle."},
  {id:"s2",x:280,y:150,label:"Rialto",title:"Punto di timbratura · Rialto",sub:"Vigilanza Lagunare",body:"Qui le guardie passano il badge. Da Calle dei Fabbri sono cinque minuti a piedi."},
  {id:"s3",x:50,y:60,label:"Noleggio Cannaregio",title:"Noleggio barche Cannaregio",sub:"★ 3,5",body:"Recensione: «Noleggiano anche di notte, senza fare domande, se paghi in contanti.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"4:00",q:"A che ora è stata riconsegnata la barca noleggiata?",all:["400"],show:"Alle 4:00",hint:"",news:"Tre ore: dall'una alle quattro."});
 LIB.hints(e,["Il commesso ha un alibi con la nonna.","La guardia ha fatto una promessa, la vigilia.","Il registro delle ronde ha un buco.","Una telecamera era spenta.","Chi l'ha chiesto, quello spegnimento?","Una barca, a nome di qualcuno, chiusa.","Che cosa è quel qualcuno per la guardia?","I vetri sono finiti in vendita.","C'è una firma sul vetro.","Chi noleggia le barche segna l'ora del rientro.","Ronde, telecamera, barca."]);
});
})();
