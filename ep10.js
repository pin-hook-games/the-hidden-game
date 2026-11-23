(function(){
/* episodio 10: La babysitter (Bari). Soluzione: Non tradisce. Michele e la babysitter organizzano la festa a sorpresa per i 40 anni di Roberta. */
const SC={
 kids:()=>LIB.obj("#f6e3b0","🧸","Sabato, sei ore di castelli"),
 site:()=>LIB.obj("#dfe5ea","📐","Cantiere di Poggiofranco"),
 fam:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Roby, lungomare"),
 terr:()=>LIB.obj("#9cc7d6","🌅","Terrazza Levante, sopralluogo"),
 cake:()=>LIB.obj("#f3e3e8","🎂","Prova n. 2: pistacchio"),
 inv:()=>LIB.doc("Roby fa 40!","#c0417a",["Sabato 29 novembre","ore 20:30","Terrazza Levante","Acqua in bocca"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Bari",
 water:[["M0 30Q200 60 400 20",46]],
 roads:["M60 110H360","M100 80V240","M180 80V240","M260 80V240","M40 170H340","M60 220H300"],
 extra:`<path d="M150 74Q180 50 210 74" fill="#e2d6c4" stroke="#b0764a" stroke-width="3"/>`,
 labels:[[156,92,"Bari Vecchia"],[186,134,"Murat"],[270,104,"Madonnella"],[60,160,"Libertà"],[190,196,"Carrassi"],[40,236,"Poggiofranco"],[300,40,"Lungomare"],[270,212,"San Pasquale"]],
 pins:[[200,190,"#33658a","Casa",9,-8],[60,214,"#33658a","cantiere",9,-8],[170,150,"#d43d55","mar 11",9,4],[320,90,"#d43d55","gio 20",9,16]]});

EPISODES[10]={...LIB.apps("msg tel mail web gal map cal note bank drive"),
 n:10,timer:1800,map:MAP,scenes:SC,owner:"Michele De Santis",time:"07:30",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 brief:"Roberta ti ha portato il telefono del marito Michele, 40 anni, architetto a Bari. Lui sta accompagnando i bambini a scuola e torna tra mezz'ora.",
 quote:"«Con la babysitter si scrivono di continuo, e la chat ogni mattina è vuota. Due pomeriggi nessuno dei due rispondeva al telefono: martedì 11 e ieri. Sabato le ha scritto «sei stata fantastica oggi». Lei ha ventitré anni. Io ne faccio quaranta tra una settimana e mi sento una stupida.»",
 chats:[
  {id:"roby",name:"Roby",sub:"Moglie",m:[
   ["mar 11 · 16:20",0,"Ti ho chiamato tre volte. Dove sei?"],
   ["mar 11 · 17:40",1,"In cantiere, non prendeva. Scusa."],
   ["gio 16:10",0,"Di nuovo irraggiungibile?"],
   ["gio 17:55",1,"Sopralluogo, telefono in macchina."]]},
  {id:"giorgia",name:"Giorgia",sub:"Babysitter",m:[
   ["",2,"Chat svuotata ogni sera."],
   ["sab 20:15",1,"Sei stata fantastica oggi.","grp"],
   ["sab 20:16",0,"Sei ore di castelli di cuscini! Ma lei non ha sospettato niente?","grp"],
   ["sab 20:18",1,"Niente. Cancella tutto ogni sera: Roby ti prende il telefono per le foto dei bimbi.","grp"],
   ["mar 11 · 18:00",0,"Per me la numero 2, quella al pistacchio. La 1 era troppo dolce.","grp"],
   ["gio 18:10",0,"La terrazza è perfetta. Lunedì stampo i segnaposto.","grp"]]},
  {id:"gruppo",name:"Non dirlo a Roby",sub:"Gruppo · 14 partecipanti",m:[
   ["lun 21:00",1,"Aggiornamento: siamo a 42 invitati. Chi manca risponda entro mercoledì."],
   ["lun 21:05",0,"Paola: Io la porto alla terrazza con la scusa di un aperitivo tra amiche."],
   ["lun 21:07",0,"Ilaria: Atterro da Milano sabato alle 17:40. Non vedo l'ora!"],
   ["lun 21:10",0,"Nonna Lina: I bambini la sera del 29 li tengo io. Fate tardi."],
   ["lun 21:12",0,"Sabina: Per le foto arrivo alle 20, prima di tutti."]]},
  {id:"titti",name:"Titti",sub:"",m:[
   ["lun 10 · 12:00",0,"Architetto, domani alle 15:30 vi aspetto per l'assaggio. Portate la ragazza che ha buon gusto."],
   ["mar 11 · 18:05",1,"Deciso: la numero 2. Per 45 persone."],
   ["mar 11 · 18:06",0,"Pistacchio, ottima scelta. Ritiro sabato 29 alle 18."]]},
  {id:"paola",name:"Paola",sub:"",m:[
   ["mer 22:00",0,"Roby mi ha chiamato in lacrime. Pensa che tu abbia un'altra. Diglielo, ti prego."],
   ["mer 22:10",1,"Mancano dieci giorni. Reggi."],
   ["mer 22:11",0,"Sei un pazzo. Un pazzo romantico, ma un pazzo."]]},
  {id:"greco",name:"Dott.ssa Greco",sub:"",m:[
   ["gio 08:30",0,"Buongiorno, confermo la visita di controllo di Tommaso lunedì alle 16. Porti il libretto delle vaccinazioni."],
   ["gio 08:40",1,"Grazie dottoressa. Viene la babysitter con mia moglie."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Terrazza Levante",sub:"Conferma evento privato",meta:"13 novembre",body:"Sabato 29 novembre dalle 20:30, sala e terrazza in esclusiva.\nPreventivo: 1.200,00 €. Caparra ricevuta: 300,00 €.\nSopralluogo fissato per giovedì 20 alle 16."},
   {id:"m2",title:"Pasticceria Titti",sub:"Assaggio torte",meta:"10 novembre",body:"Martedì 11 novembre alle 15:30 nel nostro laboratorio in zona Murat.\nDue proposte da assaggiare."},
   {id:"m3",title:"Sabina Foto",sub:"Preventivo servizio",meta:"14 novembre",body:"Servizio fotografico per festa privata, tre ore: 250,00 €."}],
  map:[
   {id:"g1",g:"Cronologia · martedì 11",title:"Murat, un laboratorio di pasticceria",sub:"15:28 - 17:35",meta:"Permanenza",body:"Arrivo alle 15:28, uscita alle 17:35."},
   {id:"g2",g:"Cronologia · giovedì 20",title:"Lungomare, una terrazza",sub:"15:55 - 17:50",meta:"Permanenza",body:"Arrivo alle 15:55, uscita alle 17:50."},
   {id:"g3",g:"Cronologia · sabato 15",title:"Cantiere, Poggiofranco",sub:"14:00 - 20:00",meta:"Permanenza",body:"In cantiere dalle 14 alle 20. A casa c'era la babysitter."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Giorgia, babysitter",sub:"15 nov · − 60,00 €"},
   {id:"b2",g:"Novembre",title:"Terrazza Levante, caparra",sub:"13 nov · − 300,00 €"},
   {id:"b3",g:"Novembre",title:"Pasticceria Titti, acconto",sub:"11 nov · − 50,00 €"},
   {id:"b4",g:"Novembre",title:"Volo Milano - Bari per Ilaria",sub:"9 nov · − 84,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Mar 11 · T.",sub:"15:30",body:"Con G."},
   {id:"c2",g:"Novembre",title:"Gio 20 · Sopralluogo",sub:"16:00",body:"Con G. Misurare la terrazza."},
   {id:"c3",g:"Novembre",title:"Sab 29 · ★",sub:"20:30",body:"Compleanno di Roby: 40."}],
  web:[
   {id:"w1",g:"Cronologia",title:"festa a sorpresa 40 anni idee",sub:"2 nov"},
   {id:"w2",g:"Cronologia",title:"discorso compleanno moglie",sub:"mer 23:10"},
   {id:"w3",g:"Cronologia",title:"come non farsi scoprire quando si organizza una sorpresa",sub:"mer 23:30"}],
  note:[
   {id:"n1",title:"Lista",body:"Segnaposto: Giorgia.\nAlbum privato: giorno e mese della festa.\nLa nota qui sotto: numero degli invitati e numero dei partecipanti al gruppo."},
   {id:"n2",title:"Discorso",lock:"note",body:"Quindici anni fa ti ho chiesto di ballare e mi hai detto «solo una».\nNe abbiamo ballate parecchie.\nBuon compleanno, Roby. Scusa per queste tre settimane: ne valeva la pena."}],
  drive:[
   {id:"d1",title:"Invitati_def",sub:"Foglio",meta:"Aggiornato lunedì",body:"42 invitati confermati, 3 in forse.\nDa fuori: Ilaria da Milano, i cugini da Lecce."},
   {id:"d2",title:"Tariffe Giorgia",sub:"Nota",meta:"Settembre",body:"10 € l'ora."}],
  tel:[
   {id:"t1",title:"Giorgia",sub:"gio 15:40 · in uscita, 1 min"},
   {id:"t2",title:"Roby",sub:"gio 16:05 · persa"},
   {id:"t3",title:"Terrazza Levante",sub:"mer 11:00 · in uscita, 5 min"}]
 },
 photos:[
  {id:"p1",t:"sab 19:50",title:"Salotto",sc:"kids"},
  {id:"p2",t:"sab 16:00",title:"Lavoro",sc:"site"},
  {id:"p3",t:"ago",title:"Con Roby",sc:"fam"},
  {id:"p4",t:"gio 16:30",title:"Vista",sc:"terr"},
  {id:"h1",t:"mar 11 · 16:10",title:"Assaggio",sc:"cake",lock:"album"},
  {id:"h2",t:"lun",title:"Invito",sc:"inv",lock:"album"}],
 pins:{note:"4214",album:"2911"},
 qs:[
  {t:"6",q:"Partiamo dal «sei stata fantastica oggi» di sabato. Per quante ore Giorgia ha tenuto i bambini quel giorno?",a:["6","sei","6 ore","sei ore"],show:"Sei ore",hint:"C'è un pagamento in Banca e una tariffa nel Drive. E Mappe dice dov'era lui.",news:"Sessanta euro a dieci euro l'ora. Sabato lui era in cantiere dalle 14 alle 20, lei a casa con i bambini."},
  {t:"Murat",q:"Martedì 11 erano irraggiungibili tutti e due. In quale quartiere si trovava Michele?",any:["murat"],show:"In zona Murat",hint:"Mappe conserva la cronologia di quel pomeriggio.",news:"Non era in cantiere, come ha scritto a Roberta. Era in un laboratorio, per due ore."},
  {t:"Titti",q:"Di chi è quel laboratorio? Scrivi il nome dell'attività.",any:["titti"],show:"Pasticceria Titti",hint:"C'è una mail con l'invito, e un contatto in chat.",news:"Una pasticceria. Titti gli ha chiesto di portare «la ragazza che ha buon gusto»."},
  {t:"Terrazza Levante",q:"E ieri pomeriggio? Come si chiama il posto sul lungomare?",any:["levante"],show:"Terrazza Levante",hint:"C'è una conferma nella Mail e un appuntamento in calendario.",news:"Un sopralluogo in un locale prenotato in esclusiva. Due bugie a Roberta, e nessuna camera d'albergo."},
  {t:"900",q:"Quanto resta da pagare alla Terrazza Levante?",a:["900","900,00","900 euro","900€"],show:"900 €",hint:"Togli la caparra dal preventivo.",news:"Milleduecento euro per una serata. Non è il conto di una scappatella."},
  {t:"Roberta",q:"Per chi è tutto questo? Scrivi il nome.",any:["roberta","roby","moglie"],show:"Per Roberta",hint:"Il nome del gruppo, il calendario e una ricerca nel Browser.",news:"Una festa a sorpresa. Ora che lo sai, hai recuperato la chat con Giorgia che veniva svuotata ogni sera.",unlock:"grp"},
  {t:"40",q:"Quanti anni compie Roberta?",a:["40","quaranta","40 anni"],show:"Quaranta",hint:"È scritto in calendario.",news:"Gli stessi quarant'anni che la fanno sentire «una stupida»."},
  {t:"29",q:"In quale giorno di novembre è la festa?",all:["29"],show:"Sabato 29",hint:"Calendario e conferma del locale.",news:"Tra otto giorni. Michele ha chiesto a tutti di resistere."},
  {t:"14",q:"Quante persone sono nel gruppo «Non dirlo a Roby»?",a:["14","quattordici"],show:"14",hint:"È scritto sotto il nome del gruppo.",news:"Quattordici complici, tra cui la migliore amica e la suocera."},
  {t:"42",q:"E quanti sono gli invitati confermati?",a:["42","quarantadue"],show:"42",hint:"Lo scrive lui nel gruppo, e c'è un foglio nel Drive.",news:"Quarantadue persone che mentono a Roberta da tre settimane."},
  {t:"pistacchio",q:"Perché la chat con Giorgia viene svuotata? Lo dice lui. E che gusto ha scelto lei per la torta?",any:["pistacch"],show:"Pistacchio",hint:"Leggi i messaggi recuperati.",news:"Roberta prende il telefono di Giorgia per guardare le foto dei bambini: per questo si cancella tutto."},
  {t:"aperitivo",q:"Con quale scusa Paola porterà Roberta alla terrazza?",any:["aperitiv"],show:"Un aperitivo tra amiche",hint:"Lo scrive nel gruppo.",news:"Paola è la migliore amica. Mercoledì Roberta l'ha chiamata in lacrime e lei non ha ceduto."},
  {t:"Milano",q:"Da quale città arriva Ilaria?",any:["milano"],show:"Da Milano",hint:"Lo scrive lei, e Michele le ha pagato il volo.",news:"Un'amica che arriva in aereo sabato alle 17:40. Il biglietto è nei movimenti."},
  {t:"fotografa",q:"Che lavoro fa Sabina?",any:["fotograf","foto"],show:"La fotografa",hint:"C'è un preventivo nella Mail.",news:"Arriverà alle 20, prima di tutti."},
  {t:"pediatra",q:"E la dott.ssa Greco, che gli scrive alle otto e mezza del mattino?",any:["pediatr","medico","dottoressa"],show:"È la pediatra dei bambini",hint:"Leggi di chi è la visita.",news:"Una visita di controllo per Tommaso, lunedì. Nonna Lina invece terrà i bambini la sera della festa."},
  {t:"20:30",q:"Nell'album privato c'è l'invito. A che ora comincia la festa?",all:["2030"],show:"Alle 20:30",hint:"Il codice dell'album è la data della festa, giorno e mese.",news:"«Acqua in bocca.» Accanto c'è la foto della torta scelta da Giorgia."},
  {t:"15",q:"La nota protetta è il discorso. Da quanti anni dura, tra lui e Roberta?",a:["15","quindici","15 anni"],show:"Quindici anni",hint:"Il codice è fatto di due numeri: gli invitati e i partecipanti al gruppo.",news:"«Scusa per queste tre settimane: ne valeva la pena.»"},
  {t:"nessuna",q:"Giorgia, Titti, Paola, Ilaria, Sabina, la dott.ssa Greco, nonna Lina. Chi è l'amante di Michele? Se nessuna, scrivi NESSUNA.",any:["nessun"],show:"Nessuna",hint:"Babysitter, pasticcera, amica, ospite, fotografa, pediatra, suocera.",news:"Sette donne, tutte al lavoro per la stessa."},
  {t:"n",q:"Il verdetto per Roberta. Una sorpresa in suo onore non conta come «Nasconde altro».",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"n",show:"Non tradisce",hint:"Per chi è il segreto?",news:""}],
 win:{title:"Michele non tradisce Roberta. Le prepara una festa.",
  steps:["Sabato 29 Roberta compie quarant'anni: Michele ha prenotato la Terrazza Levante per 42 invitati.","Martedì 11 lui e Giorgia assaggiavano torte da Titti; giovedì 20 facevano il sopralluogo sul lungomare.","La chat viene svuotata ogni sera perché Roberta usa il telefono di Giorgia per le foto dei bambini.","«Sei stata fantastica» arriva dopo sei ore di babysitter, mentre lui era in cantiere.","Nel gruppo «Non dirlo a Roby» ci sono l'amica Paola, Ilaria da Milano, la fotografa Sabina e nonna Lina."],
  end:"Roberta si copre la bocca con la mano. «Io adesso come faccio a fare la faccia sorpresa?» Poi ti guarda, seria: «Lei non mi ha mai vista. E questo telefono torna sul mobile, esattamente dov'era.»"}
};
LIB.tune(10,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="inv";
 e.pins={album:"2911",inv:"0250",note:"2042"};
 e.locks={album:{hint:"Il giorno e il mese della festa."},inv:{name:"File protetto",hint:"Quanto costa la fotografa, con lo zero."},note:{hint:"L'ora in cui comincia, poi gli invitati confermati."}};
 e.spots=[
  {id:"s1",x:170,y:150,label:"Pasticceria Titti",title:"Pasticceria Titti",sub:"Murat · ★ 4,9",body:"Recensione: «Le torte per i compleanni importanti le fa solo su appuntamento, con assaggio.»"},
  {id:"s2",x:320,y:90,label:"Terrazza Levante",title:"Terrazza Levante",sub:"Lungomare · ★ 4,6",body:"Sala e terrazza per feste private. Sopralluoghi su appuntamento."},
  {id:"s3",x:60,y:214,label:"Cantiere",title:"Cantiere di Poggiofranco",sub:"",body:"Michele ci lavora dalle 14 alle 20."}];
 LIB.hints(e,["Quel «fantastica oggi» ha un orario e una durata.","Il telefono si ricorda dove sono stati, martedì.","Di chi è quel posto?","E ieri?","Quanto resta da pagare?","Per chi è tutto questo?","Quanti anni compie?","Quando?","Un gruppo con un nome curioso.","La lista degli invitati è chiusa.","Perché quella chat viene svuotata?","Una scusa per portarla lì.","Un'invitata arriva da lontano.","Che lavoro fa Sabina?","E la dottoressa del mattino?","L'invito è nascosto.","Il discorso è chiuso.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
