(function(){
/* Intrighi 4: I pacchi (Castelnuovo, comune inventato). Soluzione: l'accusa è costruita.
   I volantini nei pacchi li ha infilati Mirko Sala, volontario da quattro giorni e attivista di Alleanza Civica, che ha avvisato la giornalista prima della distribuzione. */
const SC={
 pac:()=>LIB.obj("#e9dfd0","📦","84 pacchi pronti · venerdì 21:30"),
 vol:()=>LIB.group(6,"I volontari del sabato","#2f6b4f"),
 fly:()=>LIB.doc("Il volantino nei pacchi","#33658a",["Vota Gianni Moro","lista Insieme","«Castelnuovo non lascia indietro nessuno»","Stampato in tipografia Sole"]),
 don:()=>LIB.two("#f0d9a0","#55606b","#231a1e","Con don Mario, festa patronale"),
 cena:()=>LIB.group(5,"Cena di Alleanza Civica · 7 novembre","#7a3b5a"),
 reg:()=>LIB.doc("Registro volontari","#55606b",["Iscritti: 11","Ultimo: Mirko Sala","Iscritto mercoledì 12 novembre","Chiavi magazzino: sabato, ore 6:30"])
};
const MAP=LIB.prov([[320,84,"#d43d55","magazzino della parrocchia",-80,-16]]);

LIB.add(64,["I pacchi","Don Mario non crede che Tonino compri voti","Castelnuovo"],{
 map:MAP,scenes:SC,owner:"Tonino Greco",time:"16:00",date:"dom 16 nov",homeDate:"domenica 16 novembre",
 appIds:"msg tel mail gal cal note social",
 late:"Tonino deve tornare in caserma per un'altra deposizione. Don Mario gli riconsegna il telefono.",
 brief:"Don Mario, parroco di Castelnuovo, ti ha portato il telefono di Tonino Greco, 60 anni, presidente dell'associazione che distribuisce pacchi alimentari. Sabato mattina, dentro i pacchi, c'erano i volantini di un candidato. Una giornalista era già lì a fotografare. Ora lo accusano di comprare voti.",
 quote:"«Tonino è amico d'infanzia di quel candidato, lo sanno tutti, e per questo ci credono. Ma io conosco Tonino da quarant'anni: per lui quei pacchi sono sacri. Lei mi dica come ci sono finiti, quei volantini. Lui non lo sa spiegare.»",
 chats:[
  {id:"vol",name:"Volontari pacchi",sub:"Gruppo · 11",m:[
   ["ven 21:35",1,"[foto] 84 pacchi pronti e chiusi col nastro. Grazie a tutti, domattina alle 9 si distribuisce."],
   ["ven 21:50",0,"Mirko: Domattina apro io il magazzino alle 6:30, così vi trovate tutto pronto. Lasciatemi le chiavi."],
   ["ven 21:52",1,"Grazie Mirko, sei arrivato da poco e già ci dai una mano."],
   ["sab 08:55",0,"Rita: Tonino, i nastri dei pacchi sono stati tagliati e richiusi. Chi li ha aperti?"]]},
  {id:"lisa",name:"Lisa Ferrante",sub:"Giornalista",m:[
   ["sab 09:10",0,"Signor Greco, sono Lisa Ferrante di Borgoverde Oggi. Ho fotografato la distribuzione. Vuole commentare i volantini?"],
   ["sab 09:20",1,"Io quei volantini non li ho mai visti. Lo giuro."],
   ["dom 10:00",0,"Le devo onestà: sabato alle 7:10 mi ha telefonato un volontario dicendo che nei pacchi c'erano volantini. Sono venuta per quello. Non dico chi era, ma era una voce giovane."]]},
  {id:"gianni",name:"Gianni Moro",sub:"Candidato",m:[
   ["sab 12:00",0,"Tonino, sei pazzo? Io non ti ho mai chiesto niente del genere. Quei volantini li ho fatti stampare ma non li ho ancora distribuiti."],
   ["sab 12:05",1,"Non sono stato io, Gianni. Lo sai."],
   ["sab 12:20",0,"Lo so. Ma qualcuno ha preso una scatola dal mio comitato giovedì sera, durante l'apertura al pubblico."]]},
  {id:"don",name:"Don Mario",sub:"",m:[
   ["sab 13:00",0,"Tonino, non ti preoccupare. La verità esce sempre. Portami il telefono, conosco qualcuno."]]},
  {id:"rita",name:"Rita",sub:"Volontaria",m:[
   ["sab 09:00",0,"Tonino io sono arrivata alle 8:30 e il magazzino era già aperto. Mirko era lì da solo, e c'erano scatole vuote della tipografia nel cestino."]]},
  {id:"comm",name:"Comitato Insieme",sub:"Gruppo",m:[
   ["gio 22:00",0,"Volontaria: Stasera all'apertura del comitato è sparita una scatola di volantini da 100. Chi l'ha vista?"]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Feed",title:"@alleanzacivica_castelnuovo",sub:"Cena dei volontari, 7 novembre",meta:"Post",body:"«Grazie ai nostri ragazzi!» Nella foto, secondo da destra, con la maglietta della lista: Mirko Sala."},
   {id:"s2",g:"Feed",title:"@borgoverde_oggi",sub:"Pacchi e volantini: il caso Castelnuovo",meta:"sab 11:00",body:"Articolo con le foto della distribuzione."},
   {id:"s3",g:"Profili",title:"@mirko.sala",sub:"Mirko · Castelnuovo",body:"Bio: «Giovani per Alleanza Civica.»"}],
  mail:[
   {id:"m1",title:"Associazione",sub:"Nuova iscrizione volontario",meta:"mercoledì 12 novembre",body:"Nuovo volontario: Mirko Sala.\nPresentato da: nessuno. Si è proposto da solo dopo l'annuncio in chiesa."},
   {id:"m2",title:"Prefettura",sub:"Convocazione",meta:"sabato",body:"Il sig. Greco è convocato lunedì per chiarimenti sulla distribuzione del 15 novembre."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Ven · Preparazione pacchi",sub:"18:00 - 21:30",body:""},
   {id:"c2",g:"Questa settimana",title:"Sab · Distribuzione",sub:"09:00",body:"84 famiglie."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui ho fotografato i pacchi chiusi venerdì, quattro cifre.\nNota sotto: l'ora in cui Mirko ha detto che avrebbe aperto il magazzino, quattro cifre."},
   {id:"n2",title:"Gianni",lock:"note",body:"Gianni è mio amico da quando avevamo sei anni.\nNon gli ho mai chiesto niente per l'associazione e lui non ha mai chiesto niente a me.\nChi ha messo quei volantini voleva colpire lui, e ha usato me."}],
  tel:[
   {id:"t1",title:"Mirko",sub:"ven 21:55 · in uscita, 1 min"},
   {id:"t2",title:"Lisa Ferrante",sub:"sab 09:12 · in entrata, 4 min"}]
 },
 photos:[
  {id:"p1",t:"ven 21:30",title:"Pronti",sc:"pac"},
  {id:"p2",t:"ott",title:"Volontari",sc:"vol"},
  {id:"p3",t:"sab 09:15",title:"Trovato nei pacchi",sc:"fly"},
  {id:"p4",t:"giu",title:"Don Mario",sc:"don"},
  {id:"h1",t:"sab 15:00",title:"Salvata da Scatto",sc:"cena",lock:"album"},
  {id:"h2",t:"mer",title:"Registro",sc:"reg",lock:"album"}],
 pins:{note:"0630",album:"2130"},
 events:[{id:"a",q:3,kind:"call",from:"Mirko",lines:["«Don Mario? Sono Mirko, il volontario nuovo.»","«Volevo dire che io sabato ho visto Tonino sistemare qualcosa nei pacchi, all'alba. Non volevo dirlo, ma è giusto.»","«Pronto?»"]},
         {id:"b",q:8,kind:"sms",from:"Gianni Moro",text:"Tonino, la volontaria del comitato ha ritrovato chi c'era giovedì all'apertura: tra gli ospiti anche un ragazzo di Alleanza Civica. Non so il nome."}],
 qs:[
  {t:"84",q:"Quanti pacchi sono stati preparati per sabato?",a:["84","ottantaquattro","84 pacchi"],show:"84",hint:"Lo scrive Tonino nel gruppo.",news:"Uno per famiglia, chiusi con il nastro venerdì sera."},
  {t:"21:30",q:"A che ora Tonino ha fotografato i pacchi chiusi?",all:["2130"],show:"Venerdì alle 21:30",hint:"Galleria.",news:"Nella foto non c'è un volantino in vista. I pacchi erano chiusi con il nastro."},
  {t:"tagliati",q:"Che cosa ha notato la volontaria Rita sabato mattina, sui nastri?",any:["tagliat","aperti","richius"],show:"Che erano stati tagliati e richiusi",hint:"Gruppo dei volontari, sabato 08:55.",news:"Qualcuno ha aperto i pacchi tra venerdì sera e sabato mattina."},
  {t:"Mirko",q:"Chi aveva le chiavi del magazzino quella notte?",any:["mirko","sala"],show:"Mirko, il volontario nuovo",hint:"Si era offerto lui di aprire.",news:"Rita lo ha trovato da solo, con scatole vuote della tipografia nel cestino."},
  {t:"06:30",q:"A che ora aveva detto che avrebbe aperto?",a:["6:30","06:30","alle 6:30","alle 06:30","6.30","0630","630","le 6 e mezza","le sei e mezza"],show:"Alle 6:30",hint:"Messaggio delle 21:50 di venerdì.",news:"Due ore e mezza prima della distribuzione."},
  {t:"mercoledì",q:"In quale giorno Mirko si è iscritto all'associazione?",any:["mercoled"],show:"Mercoledì 12 novembre",hint:"Mail dell'associazione.",news:"Tre giorni prima della distribuzione, senza che nessuno lo presentasse."},
  {t:"07:10",q:"A che ora la giornalista è stata avvisata dei volantini?",a:["7:10","07:10","alle 7:10","alle 07:10","7.10","0710","710"],show:"Sabato alle 7:10",hint:"Lo ammette lei domenica.",news:"Quasi due ore prima che si aprisse un solo pacco davanti alle famiglie. Chi chiamava sapeva già che cosa avrebbe trovato."},
  {t:"Alleanza Civica",q:"Mirko compare in una foto su Scatto. A quale lista appartiene?",any:["alleanza","civica"],show:"Ad Alleanza Civica",hint:"Cerca il suo profilo e il post della cena del 7 novembre.",news:"La lista avversaria di Gianni Moro. Con la maglietta, in prima fila."},
  {t:"100",q:"Giovedì sera dal comitato di Insieme era sparita una scatola di volantini. Da quanti?",a:["100","cento","100 volantini"],show:"Da 100",hint:"Gruppo del comitato.",news:"Durante un'apertura al pubblico. Gianni li aveva stampati, ma non distribuiti."},
  {t:"11",q:"Nell'album privato c'è il registro dei volontari. Quanti iscritti in tutto?",a:["11","undici","11 iscritti"],show:"Undici",hint:"Il codice dell'album è l'ora della foto dei pacchi chiusi.",news:"L'ultimo è Mirko, con le chiavi del magazzino per sabato alle 6:30."},
  {t:"sei anni",q:"Nella nota protetta Tonino scrive da quando conosce Gianni. Da che età?",a:["6","sei","6 anni","sei anni","da sei anni","a sei anni","dai sei anni","dai 6 anni"],show:"Da quando avevano sei anni",hint:"Il codice è l'ora in cui Mirko avrebbe aperto il magazzino.",news:"«Chi ha messo quei volantini voleva colpire lui, e ha usato me.»"},
  {t:"c",q:"Che cosa è successo davvero?",o:[["t","Tonino ha comprato voti per Gianni Moro"],["g","Gianni Moro ha chiesto a Tonino di inserire i volantini"],["c","L'accusa è costruita: i volantini li ha messi un attivista avversario"],["r","Rita ha aperto i pacchi"]],a:"c",show:"L'accusa è costruita",hint:"Chi ha aperto il magazzino, ha preso i volantini e ha chiamato la giornalista?",news:""}],
 win:{title:"L'accusa è costruita. I volantini li ha messi Mirko Sala.",
  steps:["Venerdì alle 21:30 gli 84 pacchi erano chiusi con il nastro, senza volantini.","Mirko, iscritto da tre giorni, si è fatto lasciare le chiavi per aprire il magazzino alle 6:30.","Rita ha trovato i nastri tagliati e richiusi, e scatole vuote della tipografia nel cestino.","Alle 7:10 una voce giovane ha avvisato la giornalista. I volantini venivano dalla scatola sparita giovedì dal comitato di Insieme.","Mirko è un attivista di Alleanza Civica. Tonino e Gianni Moro non sapevano niente."],
  end:"Don Mario legge la nota sull'amicizia d'infanzia e sorride appena. «Sei anni», dice. «Ho fatto la prima comunione a tutti e due.» Lunedì in prefettura accompagna Tonino di persona, con la foto delle 21:30 stampata in tasca."}
});
LIB.tune(64,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const m1=e.lists.mail.find(x=>x.id==="m1");m1.lock="vol";m1.body+="\nIscritto mercoledì 12 novembre.";
 e.pins={album:"2130",vol:"0084",note:"1112"};
 e.locks={album:{hint:"Quando ho chiuso l'ultimo pacco."},vol:{name:"Mail protetta",hint:"Le famiglie di sabato, con due zeri davanti."},note:{hint:"Quanti eravamo in tutto, poi il giorno in cui è arrivato lui."}};
 e.spots=[
  {id:"s1",x:320,y:84,label:"Magazzino",title:"Magazzino dell'associazione",sub:"Castelnuovo",body:"Una porta sola, una chiave sola. Sabato all'alba l'ha aperta chi si era offerto."},
  {id:"s2",x:340,y:104,label:"Comitato Insieme",title:"Comitato Insieme",sub:"Castelnuovo",body:"Giovedì sera dal retro è sparita una scatola di volantini. Nessuno ha fatto denuncia."},
  {id:"s3",x:298,y:70,label:"Parrocchia",title:"Parrocchia",sub:"Castelnuovo",body:"Domenica scorsa il parroco ha annunciato a messa che l'associazione cercava volontari."}];
 LIB.hints(e,["Tonino conta tutto.","Una foto, venerdì sera.","Una volontaria ha notato qualcosa sui nastri.","Qualcuno si era offerto di aprire.","…e aveva detto un'ora.","L'associazione sa quando è arrivato, ma la mail è chiusa.","La giornalista ha ammesso una cosa.","Una foto di una cena, su Scatto.","Dal comitato avversario era sparito qualcosa.","Il registro dei volontari è nascosto.","Tonino ha scritto di un amico.","Chi ha aperto il magazzino, e chi ha chiamato la giornalista?"]);
});
})();
