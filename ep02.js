(function(){
/* Tradimenti 2: Il martedì (Torino). Soluzione: tradisce, con Enrico Bassi, il maestro del coro, che «la riaccompagna a casa» dopo le prove.
   Falsa pista: il collega Luca Marchetti, che le manda vocali insistenti e a cui lei risponde di smetterla.
   Il «convegno a Genova» del 22-23 è un fine settimana a Camogli, dove il maestro ha un concerto.
   Codici: album = 21 ottobre = 2110; mail dell'albergo = anniversario 9 maggio = 0905; nota = 22 (giorno della partenza) + 14 (anno del matrimonio) = 2214. */
const SC={
 coro:()=>LIB.group(6,"Coro San Salvario, prova generale","#7a3b5a"),
 noi:()=>LIB.two("#9cc7d6","#7a3b5a","#33658a","Con Pietro, dieci anni fa"),
 luca:()=>LIB.shot("Luca Marchetti",["Ti guardo dall'altra parte del tavolo","e non sento una parola"]),
 ded:()=>LIB.doc("«Lettere a un amore» · dedica","#a02822",["«A S., che canta solo per me.","Dal 21 ottobre, ogni martedì.»","E.","(la sua calligrafia da direttore)"]),
 cam:()=>LIB.obj("#9cc7d6","🌊","Camogli, la foto del sito dell'albergo")
};
const MAP=LIB.city("Torino",[[40,52,"Vanchiglia"],[132,132,"Centro"],[276,132,"Lingotto"],[40,232,"Valentino"],[300,40,"Crocetta"],[200,200,"San Salvario"]],[]);

LIB.add(2,["Il martedì","Pietro vuole sapere dove va sua moglie il martedì sera","Torino"],{
 map:MAP,scenes:SC,owner:"Sara Ferraris",time:"07:40",date:"ven 14 nov",homeDate:"venerdì 14 novembre",
 appIds:"msg tel mail web gal map cal note bank drive",
 late:"Sara si è svegliata e cerca il suo telefono. Pietro deve rimetterlo sul comodino.",
 brief:"Pietro Gallo ti ha portato il telefono della moglie, Sara Ferraris, 41 anni, contabile in uno studio di architettura a Torino. Il martedì sera va alle prove del coro e rientra sempre più tardi. Per il 22 e 23 novembre ha annunciato un «convegno a Genova». Pietro ha venti minuti prima che lei si svegli.",
 quote:"«C'è un collega, Luca, che le manda vocali a tutte le ore. Il martedì torna alle undici e mezza e dice che le prove si allungano. E un convegno di contabili a Genova di sabato non l'ho mai sentito. Se è Luca, voglio saperlo.»",
 locks:{
  album:{hint:"Il giorno e il mese del primo martedì «nostro»."},
  far:{name:"Mail protetta",hint:"Il nostro anniversario: giorno e mese."},
  note:{hint:"Il giorno in cui partiamo, poi la fine dell'anno del mio matrimonio."}},
 chats:[
  {id:"pie",name:"Pietro",sub:"Marito",m:[
   ["mar 23:00",1,"Le prove si sono allungate, il maestro ci ha tenuti fino a tardi. Arrivo."],
   ["mer",1,"Il 22 e 23 sono al convegno a Genova, te l'avevo detto?"]]},
  {id:"luca",name:"Luca Marchetti",sub:"Collega",m:[
   ["mer",0,"(vocale) «Riunione infinita. Ti guardo dall'altra parte del tavolo e non sento una parola.»"],
   ["mer",1,"Luca, smettila. Sono sposata e non mi interessa. Te l'ho già detto."],
   ["gio",0,"Scusa. Non lo faccio più."]]},
  {id:"enr",name:"Maestro Enrico",sub:"Coro San Salvario",m:[
   ["21 ott 22:20",0,"Ti riaccompagno io, piove."],
   ["mar 22:18",0,"Ti aspetto in macchina. Solito giro."],
   ["",2,"2 messaggi eliminati."],
   ["mar 23:12",0,"Sabato a Camogli canto solo per te. La camera è vista mare, come volevi.","enr"],
   ["mar 23:13",1,"Ho detto a Pietro di Genova. Non ce la faccio più a mentire, ma non ce la faccio a smettere.","enr"]]},
  {id:"rita",name:"Rita",sub:"Collega",m:[
   ["gio",0,"Sara, ma questo convegno a Genova? In studio nessuno ne sa niente, e sabato è chiuso."]]},
  {id:"coro",name:"Coro San Salvario",sub:"Gruppo",m:[
   ["mar 21:00",0,"Maestro: Prove dalle 21 alle 22:15, puntuali."],
   ["mer",0,"Maestro: Sabato 22 sarò in concerto a Camogli, le prove di martedì prossimo le salto."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Albergo Il Faro Verde",sub:"Prenotazione",meta:"12 novembre",lock:"far",body:"Camera matrimoniale vista mare, 2 adulti.\nArrivo sabato 22 novembre, partenza domenica 23.\nCamogli. Prenotazione a nome Bassi Enrico, caparra pagata con la carta di Sara Ferraris."},
   {id:"m2",title:"Studio Arca",sub:"Calendario di novembre",meta:"",body:"Sabato 22 e domenica 23: studio chiuso. Nessuna trasferta né convegno in programma."}],
  web:[
   {id:"w1",g:"Cronologia",title:"camogli cosa vedere in due giorni",sub:"mer 21:22"},
   {id:"w2",g:"Cronologia",title:"come capire se è amore o solo una fuga",sub:"gio 23:31"}],
  map:[
   {id:"g1",g:"Martedì 11",title:"Sala prove del coro, San Salvario",sub:"20:55 - 22:17",body:""},
   {id:"g2",g:"Martedì 11",title:"Crocetta, un palazzo",sub:"22:30 - 23:15",body:"Lo stesso indirizzo, tutti i martedì da fine ottobre."},
   {id:"g3",g:"Martedì 11",title:"Casa, San Salvario",sub:"23:21",body:""}],
  bank:[
   {id:"b1",g:"Novembre",title:"Albergo Il Faro Verde, caparra",sub:"12 nov · − 90,00 €"},
   {id:"b2",g:"Novembre",title:"Libreria del Po",sub:"8 nov · − 24,00 €"}],
  cal:[
   {id:"c1",g:"Ogni martedì",title:"Coro",sub:"21:00",body:""},
   {id:"c2",g:"Novembre",title:"Sab 22 - dom 23 · Convegno Genova",sub:"",body:"Nota: «E.»"},
   {id:"c3",g:"Maggio",title:"9 maggio · Anniversario",sub:"",body:"Matrimonio con Pietro, dal 2014."}],
  drive:[
   {id:"d1",g:"Coro",title:"Rubrica del coro",sub:"",body:"Maestro Enrico Bassi, abita in Crocetta, via Sacchi. Riaccompagna a casa chi abita lungo la sua strada."}],
  note:[
   {id:"n1",title:"Cose da fare",body:"Sifone del bagno\nChiavi a Pietro"},
   {id:"n2",title:"Bozza",lock:"note",body:"Il martedì è l'unica sera in cui mi sento leggera.\nNessuno sospetterebbe di lui: ha sessant'anni, dirige il coro della parrocchia, tutti lo chiamano «maestro».\nPietro pensa a Luca. Lascio che ci pensi.\nDopo Camogli devo decidere."}],
  tel:[
   {id:"t1",title:"Maestro Enrico",sub:"mar 22:17 · in entrata, 1 min"}]
 },
 spots:[
  {id:"s1",x:200,y:212,label:"Sala prove",title:"Coro San Salvario · sala prove",sub:"Parrocchia",body:"Prove il martedì dalle 21 alle 22:15. Recensione: «Il maestro è severissimo, ma poi accompagna tutte a casa.»"},
  {id:"s2",x:300,y:52,label:"Crocetta",title:"Via Sacchi, Crocetta",sub:"",body:"Un palazzo signorile. Al secondo piano, una targa: «M° E. Bassi»."},
  {id:"s3",x:276,y:150,label:"Studio Arca",title:"Studio Arca",sub:"Lingotto",body:"Sabato 22 e domenica 23 chiuso."},
  {id:"s4",x:40,y:66,label:"Vanchiglia",title:"Casa di Luca Marchetti",sub:"Vanchiglia",body:"Il telefono di Sara non ci è mai stato."}],
 photos:[
  {id:"p1",t:"ott",title:"Il coro",sc:"coro"},
  {id:"p2",t:"2015",title:"Con Pietro",sc:"noi"},
  {id:"p3",t:"mer",title:"Da Luca",sc:"luca"},
  {id:"h1",t:"8 nov",title:"La dedica",sc:"ded",lock:"album"},
  {id:"h2",t:"12 nov",title:"Camogli",sc:"cam",lock:"album"}],
 pins:{album:"2110",far:"0905",note:"2214"},
 events:[{id:"a",q:3,kind:"sms",from:"Luca Marchetti",text:"Sara, scusa ancora per il vocale. Ho capito, non ti scrivo più fuori orario."},
         {id:"b",q:8,kind:"call",from:"Maestro Enrico",lines:["«Sara? Ti chiamo presto, scusa. Sabato parto alle nove, ti prendo davanti al Valentino.»","«...Pronto? Chi parla?»","Ha riattaccato."]}],
 qs:[
  {t:"coro",q:"Dove dice Sara di andare il martedì sera?",any:["coro","prov"],show:"Alle prove del coro",hint:"È in calendario.",news:"E ci va davvero: il telefono arriva in sala prove alle 20:55."},
  {t:"22:15",q:"A che ora finiscono le prove?",all:["2215"],show:"Alle 22:15",hint:"Il maestro è puntuale e lo scrive.",news:"Ma Sara a casa arriva alle 23:21."},
  {t:"Crocetta",q:"Dove va dopo le prove?",any:["crocett","sacchi"],show:"In Crocetta, ogni martedì da fine ottobre",hint:"Il telefono si ricorda dove si ferma.",news:"Dalle 22:30 alle 23:15."},
  {t:"Luca",q:"Pietro sospetta del collega che le manda vocali. Come si chiama?",any:["luca","marchetti"],show:"Luca Marchetti",hint:"Pietro l'ha nominato.",news:"Abita in Vanchiglia. Il telefono di Sara non ci è mai stato."},
  {t:"smettila",q:"Che cosa ha risposto Sara a Luca?",any:["smett","sposat","interess"],show:"«Smettila, sono sposata e non mi interessa»",hint:"Leggi la sua risposta.",news:"Luca è un corteggiatore respinto. Falsa pista."},
  {t:"Enrico Bassi",q:"Chi abita in Crocetta?",any:["enrico","bassi","maestr"],show:"Enrico Bassi, il maestro del coro",hint:"Il coro ha una rubrica.",news:"Quello che «riaccompagna a casa» chi abita lungo la sua strada. Ora hai recuperato due messaggi cancellati.",unlock:"enr"},
  {t:"le prove",q:"Che cosa ha detto Sara a Pietro alle 23:00 di martedì?",any:["prov","allung","tard"],show:"Che le prove si erano allungate",hint:"Un messaggio al marito.",news:"Le prove erano finite alle 22:15."},
  {t:"Camogli",q:"Dove andrà davvero il 22 e 23 novembre?",any:["camogl"],show:"A Camogli",hint:"Un albergo ha scritto, la mail è chiusa.",news:"Camera matrimoniale vista mare, a nome del maestro, caparra pagata da Sara."},
  {t:"no",q:"Esiste il convegno a Genova?",a:["no","non esiste","nessuno","nessun convegno"],show:"No: lo studio è chiuso",hint:"Lo studio ha un calendario, e una collega si è insospettita.",news:"Il maestro quel sabato ha un concerto a Camogli."},
  {t:"21 ottobre",q:"Da quale martedì è cominciato tutto? Giorno e mese.",all:["21","ott"],show:"Dal 21 ottobre",hint:"«Ti riaccompagno io, piove.»",news:"«Dal 21 ottobre, ogni martedì», scrive lui nella dedica di un libro."},
  {t:"e",q:"Chi è l'amante?",o:[["l","Luca Marchetti, il collega"],["e","Enrico Bassi, il maestro del coro"],["r","Rita, la collega"],["p","Nessuno"]],a:"e",show:"Il maestro del coro",hint:"Dove va dopo le prove, e chi la riaccompagna?",news:""},
  {t:"t",q:"Il verdetto per Pietro.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"C'è un'altra persona.",news:""}],
 win:{title:"Sara tradisce Pietro. Con il maestro del coro.",
  steps:["Il martedì Sara va davvero alle prove, che finiscono alle 22:15.","Dalle 22:30 alle 23:15 è in Crocetta, a casa del maestro Enrico Bassi, che «la riaccompagna». A Pietro scrive che le prove si sono allungate.","Il collega Luca le manda vocali, ma lei lo ha respinto.","Il «convegno a Genova» non esiste: il 22 e 23 è a Camogli, dove il maestro ha un concerto, in una camera vista mare.","Tutto è cominciato il 21 ottobre: «Ti riaccompagno io, piove.»"],
  end:"Pietro rimette il telefono sul comodino e va in cucina a fare il caffè. Quando Sara si alza, le chiede soltanto: «Il maestro canta bene, a Camogli?» Sara si siede. Per la prima volta da settimane, il martedì successivo non va alle prove."}
});
})();
