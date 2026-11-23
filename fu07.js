(function(){
/* Furti 7: Pacco 4471 (Piacenza). Soluzione: il caporeparto Bassi.
   Stampa una seconda etichetta con lo stesso numero e fa uscire i pacchi come resi, caricati su un furgone che non è della flotta. Falsa pista: Stefan vende telefoni usati online, con ricevute. */
const SC={
 ban:()=>LIB.doc("Bancale 22 · fine turno 21:50","#33658a",["Pacco 4471 · smartphone","Pacco 4472 · smartphone","Pacco 4473 · tablet","(foto di Stefan)"]),
 eti:()=>LIB.doc("Due etichette","#a02822",["4471 · consegna Milano","4471 · RESO al fornitore","stessa ora di stampa: 21:58","stampante postazione 3"]),
 fur:()=>LIB.car("#f2f2f2","Il furgone al portone 9, 22:20"),
 mag:()=>LIB.group(6,"Il turno B, centro logistico","#55606b"),
 ven:()=>LIB.doc("Vendite online di Stefan","#2f6b4f",["iPhone usato · 280 €","con ricevuta d'acquisto","Galaxy usato · 190 €","con ricevuta d'acquisto"]),
 tur:()=>LIB.doc("Resi del mese · per turno","#55606b",["Turno A: 1","Turno B (Bassi): 14","Turno C: 0","Totale: 15"])
};
const MAP=LIB.city("Piacenza",[[40,52,"Centro"],[132,132,"Le Mose"],[276,132,"Autostrada"],[40,232,"Po"],[300,40,"Parco"],[200,200,"Polo logistico"]],
 [[220,190,"#d43d55","centro logistico",9,-10]]);

LIB.add(47,["Pacco 4471","Stefan è sospettato dei telefoni che spariscono dal magazzino","Piacenza"],{
 map:MAP,scenes:SC,owner:"Stefan Popescu",time:"14:00",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal map cal note",
 late:"Stefan entra in turno e deve lasciare il telefono nell'armadietto. Il sindacato glielo restituisce.",
 brief:"Da un centro logistico vicino a Piacenza spariscono telefoni nuovi: quindici pacchi in un mese. L'azienda ha sospeso Stefan Popescu, 35 anni, magazziniere del turno B, perché vende telefoni usati online. Il sindacato che lo difende ti ha passato il suo telefono.",
 quote:"«L'azienda ha trovato i suoi annunci e ha fatto due più due. Ma Stefan ha le ricevute di ogni telefono che vende. E ha un'abitudine strana: a fine turno fotografa i bancali. Dice che da quando è arrivato il nuovo caporeparto non si fida di nessuno.»",
 chats:[
  {id:"bas",name:"Bassi",sub:"Caporeparto",m:[
   ["mar 21:52",0,"Stefan, il bancale 22 lo chiudo io. Tu vai pure a casa, sei stanco."],
   ["mar 21:53",1,"Ho già fatto la foto, lo chiudo in un minuto."],
   ["mar 21:54",0,"Ho detto vai a casa."],
   ["",2,"1 messaggio eliminato."],
   ["mar 22:30",0,"Stefan, le foto dei bancali non si fanno, è vietato. Cancellale. È un consiglio.","bas"]]},
  {id:"ion",name:"Ionel",sub:"Collega turno B",m:[
   ["mar 22:25",0,"Stefan, al portone 9 c'è un furgone bianco senza logo. Bassi carica dei resi. A quest'ora?"],
   ["mar 22:26",0,"Targa GH 512 XZ. Non è nostro, i nostri hanno tutti il logo."]]},
  {id:"sin",name:"Sindacato",sub:"",m:[
   ["mer",0,"Stefan, l'azienda dice: annunci di telefoni online. Ci mandi le ricevute?"],
   ["mer",1,"Le ho tutte. Compro usati dai privati e li rivendo. Ve le mando."]]},
  {id:"log",name:"Ufficio logistica",sub:"",m:[
   ["mer",0,"Sig. Popescu, il pacco 4471 risulta consegnato a Milano e anche reso al fornitore. Due etichette con lo stesso numero. Ne sa qualcosa?"]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Ufficio logistica",sub:"Resi del mese",meta:"mercoledì",body:"15 resi di smartphone al fornitore, nessuno arrivato a destinazione.\nPer turno: A 1, B 14, C 0."},
   {id:"m2",title:"Flotta aziendale",sub:"Elenco targhe",meta:"ottobre",body:"Furgoni aziendali: GA 101 AB, GA 102 AB, GA 103 AB, GA 104 AB. Tutti con logo."}],
  map:[
   {id:"g1",g:"Cronologia martedì",title:"Centro logistico",sub:"14:00 - 21:58",body:"Poi casa."}],
  cal:[
   {id:"c1",g:"Turni",title:"Turno B",sub:"14:00 - 22:00",body:"Caporeparto: Bassi."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora della mia foto al bancale 22, quattro cifre.\nNota sotto: il numero del pacco."},
   {id:"n2",title:"Per il sindacato",lock:"note",body:"Martedì alle 21:50 il 4471 era sul bancale 22 con l'etichetta per Milano.\nBassi mi ha mandato a casa. Alle 21:58 la postazione 3 stampa un'altra etichetta 4471, «reso».\nAlle 22:20 un furgone che non è della flotta carica i resi al portone 9.\nIo alle 21:58 timbravo l'uscita."}],
  tel:[
   {id:"t1",title:"Ionel",sub:"mar 22:28 · in entrata, 3 min"}]
 },
 photos:[
  {id:"p1",t:"mar 21:50",title:"Bancale 22",sc:"ban"},
  {id:"p2",t:"ott",title:"Turno B",sc:"mag"},
  {id:"p3",t:"mer",title:"Ricevute",sc:"ven"},
  {id:"p4",t:"mer",title:"Resi",sc:"tur"},
  {id:"h1",t:"mer",title:"Etichette",sc:"eti",lock:"album"},
  {id:"h2",t:"mar 22:20",title:"Portone 9",sc:"fur",lock:"album"}],
 pins:{note:"4471",album:"2150"},
 events:[{id:"a",q:3,kind:"sms",from:"Bassi",text:"Stefan, mi dispiace per la sospensione. Se dici che hai sbagliato tu, magari l'azienda chiude un occhio. Pensaci."},
         {id:"b",q:7,kind:"call",from:"Ionel",lines:["«Stefan? Ah, il sindacato. Bene.»","«Stanotte il furgone bianco è tornato. Bassi era di nuovo al portone 9.»","«Io la foto alla targa l'ho fatta. Ditemi a chi mandarla.»"]}],
 qs:[
  {t:"15",q:"Quanti pacchi di smartphone sono «spariti» come resi nel mese?",a:["15","quindici","15 pacchi"],show:"15",hint:"Mail della logistica.",news:"Nessuno arrivato a destinazione."},
  {t:"14",q:"Quanti di questi sono usciti nel turno B?",a:["14","quattordici"],show:"14 su 15",hint:"Stessa mail, o la foto in Galleria.",news:"Il turno di Bassi. E di Stefan."},
  {t:"ricevute",q:"Che cosa ha Stefan per ogni telefono che vende online?",any:["ricevut","scontrin"],show:"La ricevuta d'acquisto",hint:"Galleria e chat con il sindacato.",news:"Compra usati dai privati. La falsa pista cade."},
  {t:"21:50",q:"A che ora Stefan ha fotografato il bancale 22, martedì?",all:["2150"],show:"Alle 21:50",hint:"Galleria.",news:"C'era il pacco 4471, destinazione Milano."},
  {t:"Bassi",q:"Chi gli ha detto di andare a casa e ha chiuso il bancale?",any:["bassi","caporepart"],show:"Bassi, il caporeparto",hint:"Chat.",news:"«Ho detto vai a casa.» Ora hai recuperato il messaggio delle 22:30.",unlock:"bas"},
  {t:"cancellarle",q:"Che cosa voleva Bassi che Stefan facesse con le foto dei bancali?",any:["cancell"],show:"Che le cancellasse",hint:"Messaggio recuperato.",news:"«È un consiglio.»"},
  {t:"21:58",q:"A che ora è stata stampata la seconda etichetta 4471, quella del reso?",all:["2158"],show:"Alle 21:58, postazione 3",hint:"Album privato: il codice è l'ora della foto al bancale.",news:"Mentre Stefan timbrava l'uscita."},
  {t:"portone 9",q:"Da quale portone è uscito il furgone?",any:["9","nove"],show:"Dal portone 9",hint:"Chat con Ionel.",news:"Alle 22:20."},
  {t:"GH 512 XZ",q:"Il furgone fa parte della flotta aziendale? Dimmi la targa.",all:["gh512xz"],show:"GH 512 XZ: non è della flotta",hint:"Chat con Ionel e mail della flotta.",news:"I furgoni aziendali sono GA 101-104, tutti con logo."},
  {t:"b",q:"Chi fa sparire i telefoni?",o:[["s","Stefan"],["i","Ionel"],["b","Bassi, il caporeparto, con etichette doppie"],["l","L'ufficio logistica"],["c","Il corriere di Milano"]],a:"b",show:"Bassi",hint:"Etichetta doppia, turno, furgone.",news:""}],
 win:{title:"I telefoni li fa sparire Bassi, il caporeparto.",
  steps:["14 dei 15 «resi» sono usciti nel turno B, quello di Bassi.","Martedì alle 21:50 Stefan fotografa il 4471 sul bancale. Bassi lo manda a casa.","Alle 21:58 la postazione 3 stampa una seconda etichetta 4471, «reso».","Alle 22:20 i resi partono dal portone 9 su un furgone che non è della flotta.","Stefan vende usati, con le ricevute. Bassi gli chiede di cancellare le foto."],
  end:"Il sindacato porta in azienda le foto, la targa e il registro della postazione 3. Il giorno dopo Bassi non si presenta al lavoro. Stefan torna in turno lunedì. A fine turno fotografa il bancale, per abitudine. Ionel ride."}
});
LIB.tune(47,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.push({id:"m3",title:"IT magazzino",sub:"Registro postazione 3",meta:"mercoledì",lock:"p3",body:"Martedì\n21:58 · stampa etichetta 4471 RESO · utente bassi.m\n22:03 · stampa etichetta 4472 RESO · utente bassi.m\n22:04 · logout"});
 e.pins={album:"2150",p3:"5129",note:"5803"};
 e.locks={album:{hint:"L'ultima foto prima che mi mandassero via."},p3:{name:"Mail protetta",hint:"I numeri dello sconosciuto, poi la sua porta."},note:{hint:"I minuti delle due stampe che non ho fatto io."}};
 e.spots=[
  {id:"s1",x:220,y:190,label:"Portone 9",title:"Centro logistico · portone 9",sub:"Rampa dei resi",body:"L'unica rampa senza telecamera. Lo sanno tutti quelli del turno B."},
  {id:"s2",x:276,y:120,label:"Area camion",title:"Area sosta camion",sub:"★ 3,2",body:"Recensione di un camionista: «Ogni martedì sera un furgone bianco senza logo entra al polo logistico. In bolla non c'è mai.»"},
  {id:"s3",x:60,y:60,label:"Casa di Stefan",title:"Casa di Stefan",sub:"Centro",body:"Alle 22:10 di martedì il telefono di Stefan era già qui."}];
 e.qs.splice(e.qs.length-1,0,{t:"bassi.m",q:"Con quale utente sono state stampate le etichette del reso?",any:["bassim"],show:"bassi.m, l'utente del caporeparto",hint:"",news:"Alle 21:58 e alle 22:03. Stefan era già fuori."});
 LIB.hints(e,["L'ufficio ha contato i resi.","…e li ha divisi per turno.","Ogni telefono che vende ha una storia di carta.","Stefan ha un'abitudine, a fine turno.","Qualcuno aveva fretta di mandarlo a casa.","Un consiglio arrivato a fine turno, poi sparito.","Due etichette, due orari.","Un collega ha visto qualcosa alla rampa.","Confronta con la flotta.","Anche le stampanti si ricordano chi le usa.","Etichetta doppia, turno, furgone."]);
});
})();
