(function(){
/* episodio 19: Il profumo (Parma). Soluzione: Non tradisce. Tommaso fa il volontario: accompagna in auto persone anziane alle visite. */
const SC={
 gar:()=>LIB.obj("#cfe3c9","🌱","L'orto, finalmente in pensione"),
 lid:()=>LIB.two("#8fb3c9","#7a3b5a","#55606b","Con Lidia, quarant'anni di nozze"),
 fl:()=>LIB.obj("#f3e3e8","💐","Violette, il venerdì"),
 car:()=>LIB.car("#33658a","IL PONTE"),
 th:()=>LIB.doc("Biglietto","#7a3b5a",["Al mio cavaliere del venerdì,","grazie di non avere mai fretta.","Adele, 86 anni","(e il profumo è Violetta di Parma)"]),
 sh:()=>LIB.doc("Associazione Il Ponte","#2f6b4f",["Turni di novembre · Ferrari T.","Martedì: sig.ra Bice, fisioterapia","Venerdì: sig.ra Adele, ospedale","7 accompagnamenti fatti"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Parma",
 water:[["M190 0Q170 130 200 260",12]],
 parks:[`<ellipse cx="110" cy="80" rx="46" ry="28" fill="#d7e2c9"/>`,`<ellipse cx="300" cy="200" rx="40" ry="24" fill="#d7e2c9"/>`],
 roads:["M30 130H370","M100 130V240","M260 40V230","M40 190H170","M220 80H360","M330 80V230"],
 extra:`<rect x="234" y="118" width="16" height="16" rx="3" fill="#b0764a"/>`,
 labels:[[76,74,"Parco Ducale"],[60,184,"Oltretorrente"],[254,112,"Duomo"],[270,74,"Stazione"],[30,124,"Ospedale Maggiore"],[280,196,"Cittadella"],[200,20,"torrente Parma"],[336,150,"San Lazzaro"]],
 pins:[[310,150,"#33658a","Casa",9,-8],[110,200,"#d43d55","mar e ven, 8:15",9,16],[50,140,"#d43d55","ospedale",9,16],[160,150,"#56666e","fioraia",9,16]]});

EPISODES[19]={...LIB.apps("msg tel mail web gal map cal note bank",[["turni","Il Ponte","users","#4fb3a5,#22705f"]]),
 n:19,timer:1800,map:MAP,scenes:SC,owner:"Tommaso Ferrari",time:"15:30",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Lidia ti ha portato il telefono del marito Tommaso, 58 anni, in pensione da sei mesi dopo una vita in fabbrica a Parma. Lui è all'orto fino al tramonto e il telefono lo dimentica sempre sulla credenza.",
 quote:"«Torna a casa con addosso un profumo da donna, sempre lo stesso, dolce. Compra fiori dalla fioraia sotto casa e a me non arrivano. Il martedì e il venerdì mattina sparisce e dice «faccio un giro». E in rubrica c'è una Adele con il cuore. Quarant'anni di matrimonio: proprio adesso doveva rimbambire?»",
 chats:[
  {id:"lidia",name:"Lidia",sub:"Moglie",m:[
   ["mar 08:00",1,"Esco, faccio un giro. Torno per pranzo."],
   ["mar 08:01",0,"Un giro dove?"],
   ["mar 12:40",1,"In giro."],
   ["ven 14 · 12:50",0,"Hai un odore di violetta addosso che si sente dalle scale."]]},
  {id:"adele",name:"Adele ❤",sub:"",m:[
   ["gio 18:00",0,"Tommaso caro, domani visita alle 9. Mi metto il cappotto buono."],
   ["gio 18:05",1,"Alle 8:15 sono sotto casa sua, signora Adele. Con calma, che le scale le facciamo insieme."],
   ["ven 14 · 13:00",0,"Grazie delle violette. Alla mia età nessuno mi portava fiori da quando è morto il mio Aldo, nel 1998."]]},
  {id:"gabri",name:"Gabriella",sub:"",m:[
   ["lun 10:00",0,"Tommaso, confermi martedì la signora Bice e venerdì la signora Adele? Sei il più puntuale dei nostri autisti."],
   ["lun 10:10",1,"Confermo tutti e due."],
   ["lun 10:11",0,"A novembre sei a 7 accompagnamenti. Sabato 13 dicembre c'è la festa dell'associazione: porta tua moglie!"],
   ["lun 10:30",1,"Vediamo. Mia moglie non lo sa ancora."]]},
  {id:"bice",name:"Sig.ra Bice",sub:"",m:[
   ["lun 17:00",0,"Giovanotto, martedì la fisioterapia è spostata alle 10. A 79 anni mi fanno ancora fare ginnastica."],
   ["lun 17:10",1,"Allora passo alle 9:30, signora Bice."]]},
  {id:"nadia",name:"Nadia",sub:"",m:[
   ["ven 14 · 20:00",0,"Buonasera Tommaso, sono Nadia, la figlia di Adele. Vivo a Torino e non riesco a scendere ogni settimana. Mamma parla solo di lei. Grazie, davvero."],
   ["ven 14 · 20:20",1,"Sua madre è una signora d'altri tempi. È un piacere."]]},
  {id:"ornella",name:"Ornella fiori",sub:"",m:[
   ["gio 17:00",0,"Tommaso, il solito mazzetto di violette per domani? 15 euro come sempre."],
   ["gio 17:05",1,"Il solito. Passo alle otto."],
   ["gio 17:06",0,"Fortunata la signora ❤"]]},
  {id:"carla",name:"Carla",sub:"",m:[
   ["ven 14 · 13:30",0,"Tommaso scusa se mi permetto: stamattina ho visto una signora scendere dalla tua macchina davanti all'ospedale. Lidia lo sa?"],
   ["ven 14 · 13:45",1,"Carla, la signora ha 86 anni. Ma grazie del pensiero."]]}
 ],
 lists:{
  turni:[
   {id:"x0",g:"Il tuo profilo",title:"Volontario autista",sub:"Iscritto dal 1° ottobre",meta:"Attivo",body:"Associazione Il Ponte: accompagnamento di persone anziane a visite e terapie.\nPer vedere i turni bisogna sapere il nome dell'associazione: la tessera è intestata così."},
   {id:"x1",g:"Turni di novembre",u:"pon",title:"Martedì 4, 11, 18",sub:"Sig.ra Bice · fisioterapia",body:"Ritiro in Cittadella, fisioterapia alle 9 (martedì 18 alle 10)."},
   {id:"x2",g:"Turni di novembre",u:"pon",title:"Venerdì 7 e 14",sub:"Sig.ra Adele · ospedale",body:"Ritiro in Oltretorrente alle 8:15, visita in ospedale alle 9."},
   {id:"x3",g:"Turni di novembre",u:"pon",title:"Lunedì 10 e mercoledì 12",sub:"Sostituzioni",body:"Due sostituzioni di un collega malato: sig. Aldo e sig.ra Pina."},
   {id:"x4",g:"Turni di novembre",u:"pon",title:"Totale a oggi",sub:"7 accompagnamenti",body:"Tre martedì, due venerdì, due sostituzioni."}],
  mail:[
   {id:"m1",title:"Associazione Il Ponte",sub:"Benvenuto tra i volontari",meta:"1 ottobre",body:"Caro Tommaso, grazie di esserti unito a noi.\nTessera n. 118, volontario autista.\nGabriella, coordinatrice"},
   {id:"m2",title:"Ospedale Maggiore",sub:"Promemoria visite",meta:"17 novembre",body:"Paziente: sig.ra Adele M.\nReparto di Geriatria, dott.ssa Rossi.\nVenerdì 21 novembre alle 9:00. Accompagnatore: Ferrari T."}],
  map:[
   {id:"g1",g:"Cronologia · venerdì 14",title:"Fioraia, Oltretorrente",sub:"08:00 - 08:06",meta:"Sosta",body:"Sei minuti."},
   {id:"g2",g:"Cronologia · venerdì 14",title:"Oltretorrente, un palazzo senza ascensore",sub:"08:15 - 08:35",meta:"Sosta",body:"Venti minuti: il tempo delle scale."},
   {id:"g3",g:"Cronologia · venerdì 14",title:"Ospedale Maggiore",sub:"08:50 - 11:40",meta:"Permanenza",body:"In sala d'attesa di Geriatria."},
   {id:"g4",g:"Cronologia · venerdì 14",title:"Oltretorrente, lo stesso palazzo",sub:"12:00 - 12:15",meta:"Sosta",body:"Poi a casa per pranzo."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Ornella fiori",sub:"14 nov · − 15,00 €"},
   {id:"b2",g:"Novembre",title:"Ornella fiori",sub:"7 nov · − 15,00 €"},
   {id:"b3",g:"Novembre",title:"Benzina",sub:"10 nov · − 50,00 €"},
   {id:"b4",g:"Ottobre",title:"Ornella fiori",sub:"31 ott · − 15,00 €"},
   {id:"b5",g:"Ottobre",title:"Ornella fiori",sub:"24 ott · − 15,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ogni martedì · B.",sub:"09:00",body:""},
   {id:"c2",g:"Novembre",title:"Ogni venerdì · A.",sub:"08:15",body:"Prima da Ornella."},
   {id:"c3",g:"Dicembre",title:"Sab 13 · Festa del Ponte",sub:"16:00",body:"Chiederlo a Lidia. Se non ride."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come aiutare una persona anziana a salire in macchina",sub:"2 ott"},
   {id:"w2",g:"Cronologia",title:"violetta di parma profumo storia",sub:"ven 14"},
   {id:"w3",g:"Cronologia",title:"volontariato dopo la pensione sentirsi utili",sub:"28 set"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: gli anni della signora Adele e quelli della signora Bice, attaccati.\nLa nota qui sotto: gli accompagnamenti di novembre, con uno zero davanti, e gli euro di fiori di tutto ottobre e novembre."},
   {id:"n2",title:"Lidia",lock:"note",body:"Quando le ho detto che volevo fare il volontario ha riso.\n«Tu? Ma se non porti fuori nemmeno la spazzatura.»\nAveva ragione, per quarant'anni. Adesso ho tempo.\nGlielo dico alla festa del 13 dicembre, se viene."}],
  tel:[
   {id:"t1",title:"Gabriella",sub:"lun 09:55 · in entrata, 5 min"},
   {id:"t2",title:"Adele ❤",sub:"gio 17:55 · in entrata, 3 min"},
   {id:"t3",title:"Nadia",sub:"ven 14 · 19:50 · in entrata, 7 min"}]
 },
 photos:[
  {id:"p1",t:"mer",title:"Orto",sc:"gar"},
  {id:"p2",t:"giu",title:"Con Lidia",sc:"lid"},
  {id:"p3",t:"ven 14 · 08:05",title:"Per lei",sc:"fl"},
  {id:"p4",t:"1 ott",title:"Il cartello",sc:"car"},
  {id:"h1",t:"ven 14",title:"Da conservare",sc:"th",lock:"album"},
  {id:"h2",t:"lun",title:"Turni",sc:"sh",lock:"album"}],
 pins:{note:"0760",album:"8679"},
 qs:[
  {t:"martedì e venerdì",q:"In quali mattine sparisce Tommaso?",all:["mart","ven"],show:"Il martedì e il venerdì",hint:"Lo dice Lidia, e il calendario lo conferma.",news:"Due mattine fisse, con due iniziali: B. e A."},
  {t:"Oltretorrente",q:"Venerdì scorso, dopo la fioraia, dove si è fermato alle 8:15? Scrivi il quartiere.",any:["oltretorrente"],show:"In Oltretorrente",hint:"Mappe conserva la cronologia di venerdì 14.",news:"Venti minuti sotto un palazzo senza ascensore. «Il tempo delle scale», annota Mappe."},
  {t:"all'ospedale",q:"E poi dove ha passato quasi tre ore?",any:["ospedal","geriatr"],show:"All'Ospedale Maggiore",hint:"È la riga successiva.",news:"In sala d'attesa, non in una camera d'albergo. Poi di nuovo allo stesso palazzo, e a casa per pranzo."},
  {t:"86",q:"Chi abita in quel palazzo? È Adele ❤. Quanti anni ha?",a:["86","ottantasei","86 anni"],show:"86",hint:"Lo scrive lui a una vicina curiosa.",news:"La signora Adele, vedova dal 1998. Il cuore accanto al nome ha un'altra spiegazione."},
  {t:"Il Ponte",q:"Chi gli ha affidato la signora Adele? Scrivi il nome dell'associazione.",any:["ponte"],show:"L'associazione Il Ponte",hint:"C'è una mail di benvenuto, e un cartello fotografato.",news:"Volontario autista dal 1° ottobre. Ora che conosci il nome sulla tessera, hai aperto i turni di novembre nell'app dell'associazione.",unlock:"pon"},
  {t:"coordinatrice",q:"Gabriella gli scrive spesso. Che ruolo ha?",any:["coordinat","responsabil"],show:"È la coordinatrice",hint:"Firma la mail di benvenuto.",news:"Lo considera il più puntuale dei suoi autisti."},
  {t:"7",q:"Quanti accompagnamenti ha fatto a novembre?",a:["7","sette","7 accompagnamenti"],show:"Sette",hint:"Lo dicono Gabriella e l'app dei turni.",news:"Tre martedì, due venerdì e due sostituzioni di un collega malato."},
  {t:"60",q:"Passiamo ai fiori. Quanto ha speso dalla fioraia tra ottobre e novembre?",a:["60","60,00","60 euro","60€"],show:"60 €",hint:"In Banca ci sono quattro acquisti uguali.",news:"Quindici euro ogni venerdì: un mazzetto di violette."},
  {t:"Adele",q:"Per chi sono i fiori? Scrivi il nome.",any:["adele"],show:"Per la signora Adele",hint:"Lei lo ringrazia, e la fioraia sa del «solito mazzetto».",news:"«Nessuno mi portava fiori da quando è morto il mio Aldo.» Ornella è la fioraia e pensa a una fortunata: lo è, a modo suo."},
  {t:"Violetta di Parma",q:"E il profumo che Lidia sente dalle scale? Come si chiama?",any:["violetta"],show:"Violetta di Parma",hint:"Lidia ne riconosce l'odore, e lui ne ha cercato la storia nel Browser.",news:"È il profumo della signora Adele. Resta addosso a chi le dà il braccio per quattro rampe di scale."},
  {t:"fisioterapia",q:"Il martedì tocca alla signora Bice. Dove la accompagna?",any:["fisioterap","ginnastica"],show:"A fisioterapia",hint:"Lo scrive lei.",news:"Settantanove anni e una ginnastica che non le va giù. Lo chiama «giovanotto»."},
  {t:"Geriatria",q:"In quale reparto lavora la dott.ssa Rossi?",any:["geriatr"],show:"In Geriatria",hint:"C'è un promemoria dell'ospedale.",news:"È il medico della signora Adele. Tommaso figura come accompagnatore."},
  {t:"Torino",q:"Nadia lo ringrazia. Da quale città scrive?",any:["torino"],show:"Da Torino",hint:"Si presenta nel messaggio.",news:"È la figlia di Adele, e non riesce a scendere ogni settimana."},
  {t:"Adele",q:"Carla ha visto «una signora» scendere dalla sua auto davanti all'ospedale. Chi era?",any:["adele"],show:"La signora Adele",hint:"Lui le risponde con un'età.",news:"Carla è una vicina. Il pettegolezzo che gira nel palazzo riguarda una donna di 86 anni."},
  {t:"cavaliere",q:"Nell'album privato c'è un biglietto. Come lo chiama Adele? «Al mio...»",any:["cavaliere"],show:"«Al mio cavaliere del venerdì»",hint:"Il codice dell'album: l'età di Adele e l'età di Bice, attaccate.",news:"«Grazie di non avere mai fretta.»"},
  {t:"13",q:"Nella nota protetta dice quando lo racconterà a Lidia. In quale giorno di dicembre?",all:["13"],show:"Sabato 13 dicembre, alla festa",hint:"Il codice: gli accompagnamenti di novembre con uno zero davanti, poi gli euro di fiori.",news:"Non gliel'ha detto perché lei ha riso: «Tu, volontario? Ma se non porti fuori nemmeno la spazzatura.»"},
  {t:"nessuna",q:"Adele, Gabriella, la signora Bice, Nadia, Ornella, Carla, la dott.ssa Rossi. Chi è l'amante di Tommaso? Se nessuna, scrivi NESSUNA.",any:["nessun"],show:"Nessuna",hint:"Due passeggere, una coordinatrice, una figlia, una fioraia, una vicina, un medico.",news:"Sette donne e nessun tradimento."},
  {t:"n",q:"Il verdetto per Lidia. Un segreto che non toglie nulla alla coppia non conta come «Nasconde altro».",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"n",show:"Non tradisce",hint:"Che cosa perde Lidia da questo segreto?",news:""}],
 win:{title:"Tommaso non tradisce Lidia. Fa il volontario.",
  steps:["Dal 1° ottobre è autista dell'associazione Il Ponte: accompagna persone anziane alle visite.","Il martedì porta la signora Bice, 79 anni, a fisioterapia. Il venerdì la signora Adele, 86, in ospedale.","I fiori sono violette per Adele, quindici euro ogni venerdì.","Il profumo è Violetta di Parma: quello di Adele, che sale quattro rampe di scale al suo braccio.","Non l'ha detto a Lidia perché quando gliene ha parlato lei ha riso."],
  end:"Lidia legge il biglietto del «cavaliere del venerdì» e sta zitta a lungo. «Ho riso», dice. «Me lo ricordo.» Chiude la borsa. «Il 13 dicembre ci vado, a quella festa. E alla signora Adele le violette gliele porto io.»"}
};
LIB.tune(19,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="pon";
 e.pins={album:"8679",pon:"1312",note:"0711"};
 e.locks={album:{hint:"Gli anni della signora del venerdì, poi quelli della signora del martedì."},pon:{name:"Mail protetta",hint:"Il giorno della festa dell'associazione, poi il mese."},note:{hint:"Gli accompagnamenti di novembre, con lo zero, poi il numero della mia tessera."}};
 e.spots=[
  {id:"s1",x:110,y:200,label:"Palazzo",title:"Un palazzo senza ascensore",sub:"Oltretorrente",body:"Terzo piano. Una signora molto anziana scende le scale solo il venerdì, a braccetto."},
  {id:"s2",x:50,y:140,label:"Ospedale",title:"Ospedale Maggiore",sub:"Geriatria",body:"Sala d'attesa al primo piano. Visite il venerdì mattina."},
  {id:"s3",x:160,y:150,label:"Fioraia",title:"Fioraia Ornella",sub:"★ 4,9",body:"Recensione: «Un signore compra violette ogni venerdì alle otto. Dice che sono per una signora di ottantasei anni.»"},
  {id:"s4",x:310,y:150,label:"Casa",title:"Casa di Tommaso e Lidia",sub:"",body:"Lidia dice di sentire un profumo nuovo sulle scale, il venerdì."}];
 LIB.hints(e,["In quali mattine esce?","Il telefono si ricorda dove si ferma.","…e dove resta tre ore.","Chi abita lì?","Chi gliel'ha affidata? La mail è chiusa.","Chi gli scrive spesso?","Conta gli accompagnamenti.","La fioraia, da ottobre.","Per chi sono i fiori?","Un profumo con un nome.","Dove va il martedì?","Chi è la dottoressa?","Qualcuno lo ringrazia da lontano.","Chi ha visto la vicina?","Un biglietto nascosto.","Tommaso ha scritto quando dirlo.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
