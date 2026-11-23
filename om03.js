(function(){
/* Omicidi 3: Il lago alle sei (Como). Soluzione: non è un omicidio. Lo scalmo della barca n. 7 era crepato; il presidente del circolo ha nascosto le segnalazioni. */
const SC={
 lake:()=>LIB.obj("#9cc7d6","🚣","Alba sul lago, ottobre"),
 anna:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Anna, il giorno della regata"),
 team:()=>LIB.group(5,"I ragazzi dell'under 17","#2f6b4f"),
 reg:()=>LIB.doc("Registro uscite · sabato","#55606b",["06:00 · Sala P. · singolo n. 4","(il 4 è scritto sopra un 7)","Nessun'altra uscita fino alle 8","Firma del custode"]),
 crack:()=>LIB.obj("#d9d2c4","🔩","Scalmo destro del n. 7 · 3 novembre"),
 prev:()=>LIB.doc("Cantiere nautico Lario","#33658a",["Singolo n. 7","Sostituzione scalmo destro","Preventivo: 280,00 €","Stato: non approvato"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Como e del primo bacino",
 water:[["M200 0Q180 80 210 150Q230 200 200 240",90]],
 parks:[`<ellipse cx="60" cy="60" rx="50" ry="40" fill="#d7e2c9"/>`,`<ellipse cx="350" cy="80" rx="50" ry="50" fill="#d7e2c9"/>`],
 roads:["M60 240H340","M120 200V255","M280 200V255","M90 120L130 230","M310 120L270 230"],
 labels:[[176,252,"Como"],[70,196,"Villa Olmo"],[300,196,"Brunate"],[90,110,"Cernobbio"],[290,110,"Blevio"],[176,60,"lago"]],
 pins:[[150,222,"#33658a","circolo",-44,16],[196,120,"#d43d55","06:27",9,4],[250,230,"#56666e","casa",9,16]]});

LIB.add(23,["Il lago alle sei","Anna vuole sapere chi ha ucciso il fratello Pietro","Como"],{
 map:MAP,scenes:SC,owner:"Pietro Sala",time:"09:10",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail web gal map cal note drive",extraApps:[["remo","Remo","fitness_center","#4fb3a5,#22705f"]],
 late:"Il telefono doveva tornare tra gli effetti personali di Pietro, in procura. Anna ha dovuto riportarlo.",
 brief:"Anna ti ha portato il telefono del fratello Pietro Sala, 39 anni, istruttore di canottaggio a Como. Sabato all'alba è uscito da solo ed è stato trovato in acqua poco dopo le sette. Il telefono era rimasto nell'armadietto del circolo.",
 quote:"«Pietro nuotava come un pesce e conosceva quel lago metro per metro. Non si annega così. Aveva espulso un ragazzo che lo ha minacciato, ha una ex moglie che vuole soldi, un socio che gliene deve. Qualcuno era su quel lago con lui. Mi trovi chi.»",
 chats:[
  {id:"anna",name:"Anna",sub:"Sorella",m:[
   ["ven 21:00",0,"Domani esci anche col freddo?"],
   ["ven 21:05",1,"Alle sei, come sempre. Poi colazione da te?"]]},
  {id:"kevin",name:"Kevin",sub:"",m:[
   ["3 nov",0,"Mi hai buttato fuori davanti a tutti. Te ne pentirai, giuro."],
   ["3 nov",1,"Hai sedici anni e hai messo le mani addosso a un compagno. Torna a gennaio e ne riparliamo."],
   ["ven 22:30",0,"Scusa per quello che ho scritto. Sono in gita a Monaco fino a domenica, quando torno vengo a chiederti scusa di persona."]]},
  {id:"laura",name:"Laura",sub:"",m:[
   ["gio 09:00",0,"Pietro manca ancora l'assegno di ottobre, 350 euro. Non farmi chiamare l'avvocato."],
   ["gio 09:30",1,"Te lo faccio lunedì, promesso. Ho anticipato io la trasferta dei ragazzi."],
   ["gio 09:31",0,"Lunedì. Non un giorno di più."]]},
  {id:"dino",name:"Dino",sub:"",m:[
   ["10 nov",0,"Pietro i 5.000 te li ridò a dicembre, giuro. Sono a Tenerife fino al 30 per quel lavoro."],
   ["10 nov",1,"A dicembre, Dino. Poi basta prestiti."]]},
  {id:"sergio",name:"Sergio",sub:"",m:[
   ["ven 18:00",0,"Domani a Varese i miei battono i tuoi. Tu non vieni nemmeno a vedere?"],
   ["ven 18:10",1,"I miei gareggiano domenica. Sabato mattina sono in acqua io."],
   ["sab 08:40",0,"Sono a Varese dalle sei per i pesi. In bocca al lupo per domani, vecchio."]]},
  {id:"bianchi",name:"Pres. Bianchi",sub:"",m:[
   ["4 nov",0,"Pietro, ti ho detto che ne parliamo a voce."],
   ["",2,"2 risposte eliminate da questa conversazione."],
   ["21 ott",0,"Non scrivermi queste cose per mail. Con l'assicurazione del circolo in rinnovo non possiamo avere barche ferme.","del"],
   ["4 nov",0,"Il preventivo non lo approvo adesso. Usa un'altra barca e non farne un caso. E cancella quella foto.","del"]]},
  {id:"aldo",name:"Aldo custode",sub:"",m:[
   ["sab 05:50",0,"Buongiorno Pietro. Il 4 l'ha preso ieri il cantiere, in rastrelliera c'è solo il 7."],
   ["sab 05:52",1,"Allora prendo il 7. Segnalo sul registro."]]}
 ],
 lists:{
  remo:[
   {id:"x1",g:"Ultimo allenamento",title:"Sabato · singolo",sub:"Inizio 06:02",meta:"Interrotto",body:"Inizio alle 06:02 dal pontile del circolo.\nAndatura regolare, 20 colpi al minuto.\nAlle 06:27 brusco arresto, poi nessun colpo registrato.\nL'orologio ha perso il segnale alle 06:29."},
   {id:"x2",g:"Lago",title:"Altre imbarcazioni rilevate",sub:"Nessuna",body:"Tra le 06:00 e le 07:00 l'app non ha rilevato altri utenti in acqua nel primo bacino."}],
  mail:[
   {id:"m1",title:"A: presidente@circolo",sub:"Segnalazione singolo n. 7",meta:"20 ottobre",body:"Presidente, lo scalmo destro del singolo n. 7 ha una crepa alla base. Va fermato e riparato.\nPietro"},
   {id:"m2",title:"A: presidente@circolo",sub:"Seconda segnalazione singolo n. 7",meta:"3 novembre",body:"La crepa è peggiorata, allego la foto. Se cede in acqua la barca si rovescia di colpo.\nHo chiesto un preventivo al cantiere.\nPietro"},
   {id:"m3",title:"Cantiere nautico Lario",sub:"Preventivo",meta:"4 novembre",body:"Singolo n. 7, sostituzione dello scalmo destro: 280,00 €.\nIn attesa di approvazione del circolo."}],
  map:[
   {id:"g1",g:"Sabato",title:"Circolo, pontile",sub:"Telefono fermo dalle 05:55",meta:"Armadietto",body:"Il telefono è rimasto nell'armadietto del circolo."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Sab · Lago",sub:"06:00",body:"Singolo."},
   {id:"c2",g:"Questa settimana",title:"Dom · Regata ragazzi",sub:"09:00",body:"Varese."},
   {id:"c3",g:"Prossima settimana",title:"Lun · Federazione",sub:"",body:"Scrivere del n. 7."}],
  web:[
   {id:"w1",g:"Cronologia",title:"scalmo crepato rischio ribaltamento singolo",sub:"3 nov"},
   {id:"w2",g:"Cronologia",title:"responsabilità circolo sportivo attrezzatura difettosa",sub:"4 nov"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui l'app segna il brusco arresto.\nNota sotto: il numero della barca e quante volte l'ho segnalata, ciascuno con uno zero davanti."},
   {id:"n2",title:"Il sette",lock:"note",body:"Se Bianchi non ferma il 7 entro sabato lo tolgo io dalla rastrelliera.\nLunedì scrivo alla federazione, con le due mail e la foto.\nNon voglio un ragazzo in acqua su quella barca."}],
  drive:[
   {id:"d1",title:"Registro uscite, foto del custode",sub:"Immagine",meta:"sabato 07:40",body:"Riga delle 06:00: «Sala P., singolo n. 4».\nIl 4 è scritto con un'altra penna sopra un 7."}],
  tel:[
   {id:"t1",title:"Pres. Bianchi",sub:"4 nov · in entrata, 9 min"},
   {id:"t2",title:"Aldo custode",sub:"sab 07:12 · persa"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Alba",sc:"lake"},
  {id:"p2",t:"giu",title:"Con Anna",sc:"anna"},
  {id:"p3",t:"set",title:"I ragazzi",sc:"team"},
  {id:"p4",t:"sab 07:40",title:"Dal custode",sc:"reg"},
  {id:"h1",t:"3 nov",title:"La crepa",sc:"crack",lock:"album"},
  {id:"h2",t:"4 nov",title:"Preventivo",sc:"prev",lock:"album"}],
 pins:{note:"0702",album:"0627"},
 events:[{id:"a",q:5,kind:"call",from:"Pres. Bianchi",lines:["«Signora Anna? Sono Bianchi, del circolo. Condoglianze ancora.»","«Mi dicono che ha lei il telefono di Pietro. Ci sono mail interne del circolo: le cancelli pure, sono cose tecniche.»","«Signora?»"]},
         {id:"b",q:11,kind:"sms",from:"Aldo custode",text:"Signora Anna, quella correzione sul registro non l'ho fatta io. Sabato suo fratello ha preso il 7. Lo giuro sui miei figli."}],
 qs:[
  {t:"06:02",q:"C'è un'app che registra gli allenamenti. A che ora è partito Pietro sabato?",all:["602"],show:"Alle 06:02",hint:"Apri l'app Remo.",news:"Dal pontile del circolo, con andatura regolare. Nessun segno di fretta o di fuga."},
  {t:"06:27",q:"A che ora l'app registra il «brusco arresto»?",all:["627"],show:"Alle 06:27",hint:"È nella stessa scheda.",news:"Venticinque minuti di remata tranquilla, poi di colpo niente."},
  {t:"nessuna",q:"Quante altre imbarcazioni ha rilevato l'app sul lago in quell'ora? Se nessuna, scrivi NESSUNA.",any:["nessun","zero"],a:["0"],show:"Nessuna",hint:"Seconda scheda dell'app.",news:"Pietro era solo sul primo bacino. Se qualcuno lo ha ucciso, non era in barca."},
  {t:"Monaco",q:"Kevin lo aveva minacciato. In quale città era sabato?",any:["monaco"],show:"A Monaco, in gita scolastica",hint:"Leggi il suo ultimo messaggio.",news:"Un sedicenne che ha chiesto scusa venerdì sera, da un altro Paese. Nome da togliere."},
  {t:"350",q:"La ex moglie Laura voleva soldi. Di quanti euro è l'assegno arretrato?",a:["350","350 euro","350€"],show:"350 €",hint:"Chat di giovedì.",news:"Un assegno di ottobre, promesso per lunedì. A Laura Pietro serviva vivo."},
  {t:"Tenerife",q:"Dino gli deve 5.000 euro. Dove si trova fino al 30?",any:["tenerife"],show:"A Tenerife",hint:"Lo scrive lui.",news:"Il debitore è a tremila chilometri. Altro nome da togliere."},
  {t:"Varese",q:"E il rivale Sergio? Dov'era sabato dalle sei del mattino?",any:["varese"],show:"A Varese",hint:"Messaggio di sabato alle 08:40.",news:"Alla pesatura di una gara. I sospettati finiscono qui, e nessuno era sul lago."},
  {t:"7",q:"Allora guardiamo la barca. Con quale singolo è uscito Pietro? Scrivi il numero.",a:["7","sette","n. 7","il 7","numero 7"],show:"Con il n. 7",hint:"Lo dice il custode alle 05:50.",news:"Il 4 era in cantiere. In rastrelliera restava solo il 7."},
  {t:"2",q:"Quante volte Pietro aveva segnalato per iscritto un difetto di quella barca?",a:["2","due","2 volte","due volte"],show:"Due volte",hint:"Guarda la posta inviata.",news:"Il 20 ottobre e il 3 novembre, entrambe al presidente del circolo."},
  {t:"lo scalmo",q:"Quale pezzo era crepato?",any:["scalm"],show:"Lo scalmo destro",hint:"È nell'oggetto delle segnalazioni.",news:"«Se cede in acqua la barca si rovescia di colpo.» Ora che sai che cosa cercare, hai recuperato le due risposte eliminate nella chat con il presidente.",unlock:"del"},
  {t:"l'assicurazione",q:"Perché il presidente non voleva barche ferme? C'era in rinnovo...",any:["assicuraz","polizza"],show:"L'assicurazione del circolo",hint:"Prima risposta recuperata.",news:"«Non scrivermi queste cose per mail.» Sapeva, e non voleva che restasse scritto."},
  {t:"280",q:"Quanto sarebbe costata la riparazione?",a:["280","280 euro","280€","280,00"],show:"280 €",hint:"Preventivo del cantiere.",news:"Duecentottanta euro, mai approvati."},
  {t:"4",q:"Nel registro delle uscite qualcuno ha corretto il numero della barca. Quale numero c'è scritto adesso?",a:["4","quattro","il 4","n. 4"],show:"Il 4",hint:"Il custode ha fotografato il registro: è nel Drive.",news:"Un 4 scritto sopra un 7, con un'altra penna. Qualcuno ha provato a far sparire la barca difettosa da questa storia."},
  {t:"3 novembre",q:"Nell'album privato c'è la foto della crepa. Di che giorno è? Giorno e mese.",all:["3","nov"],show:"Del 3 novembre",hint:"Il codice dell'album è l'ora del brusco arresto.",news:"La stessa foto che il presidente gli aveva chiesto di cancellare."},
  {t:"alla federazione",q:"Nella nota protetta Pietro dice a chi avrebbe scritto lunedì. A chi?",any:["federazione"],show:"Alla federazione",hint:"Il codice: numero della barca e numero delle segnalazioni, ognuno con uno zero davanti.",news:"«Non voglio un ragazzo in acqua su quella barca.» Ci è salito lui, perché sabato non ce n'erano altre."},
  {t:"Bianchi",q:"Chi ha nascosto il difetto e fatto correggere il registro? Scrivi il cognome.",any:["bianchi","presidente"],show:"Il presidente Bianchi",hint:"Chi ha chiesto di non scrivere mail e di cancellare la foto?",news:"Non ha ucciso nessuno con le sue mani. Ma sapeva da quasi un mese."},
  {t:"n",q:"Che cosa è successo a Pietro?",o:[["k","Lo ha ucciso Kevin"],["l","Lo ha ucciso la ex moglie Laura"],["d","Lo ha ucciso Dino"],["s","Lo ha ucciso Sergio"],["n","Non è un omicidio: lo scalmo ha ceduto, e qualcuno lo sapeva"]],a:"n",show:"Non è un omicidio",hint:"Nessuno era sul lago. Che cosa non andava nella barca?",news:""}],
 win:{title:"Non è stato un omicidio. Ma qualcuno sapeva.",
  steps:["Sabato alle 06:27 lo scalmo destro del singolo n. 7 ha ceduto e la barca si è rovesciata. Sul lago non c'era nessun altro.","Pietro aveva segnalato la crepa due volte, il 20 ottobre e il 3 novembre.","Il presidente Bianchi non ha approvato una riparazione da 280 € per non avere barche ferme durante il rinnovo dell'assicurazione.","Dopo l'incidente qualcuno ha corretto il registro: un 4 sopra il 7.","Kevin era a Monaco, Dino a Tenerife, Sergio a Varese, Laura aspettava un assegno."],
  end:"Anna resta in silenzio. «Volevo un assassino», dice. «Era più facile.» Poi indica le due mail. «Queste però non le cancello. E lunedì alla federazione ci scrivo io, al posto suo.»"}
});
LIB.tune(23,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="reg";
 e.pins={album:"0627",reg:"0702",note:"2806"};
 e.locks={album:{hint:"Il minuto in cui il lago si è fermato."},reg:{name:"File protetto",hint:"La barca vera, poi quante volte l'avevo segnalata, con gli zeri."},note:{hint:"Le decine di euro della riparazione, poi l'ora sulla riga corretta."}};
 e.spots=[
  {id:"s1",x:150,y:222,label:"Circolo Canottieri",title:"Circolo Canottieri",sub:"Pontile · rastrelliera",body:"Il custode scrive a mano le uscite su un registro. Le barche sono numerate dall'1 al 12."},
  {id:"s2",x:196,y:120,label:"Primo bacino",title:"Primo bacino",sub:"Al largo",body:"Alle 6:27 di sabato, nessun'altra barca in acqua. Solo nebbia."},
  {id:"s3",x:250,y:230,label:"Casa",title:"Casa di Pietro",sub:"",body:"Sul tavolo, la lettera per la federazione, ancora da spedire."}];
 LIB.hints(e,["Un'app registra ogni uscita.","…e quando si è fermato.","C'era qualcun altro in acqua?","Chi lo minacciava era lontano.","La ex moglie voleva soldi.","Chi gli doveva soldi è in vacanza.","Il rivale ha un alibi sportivo.","Con quale barca è uscito, davvero?","Pietro aveva scritto più volte.","Che cosa era rotto?","Perché nessuno la fermava?","Un cantiere aveva fatto un preventivo.","Il registro delle uscite è stato corretto, ma la foto è chiusa.","La foto della crepa è nascosta.","Pietro aveva deciso a chi scrivere.","Chi ha nascosto il difetto?","Che cosa è successo, davvero?"]);
});
})();
