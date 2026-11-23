(function(){
/* Omicidi 15: La palestra chiude alle 23 (Bologna). Soluzione: Loris, il fornitore di integratori. Alex aveva fatto analizzare il prodotto dopo il ricovero di un cliente. */
const SC={
 gym:()=>LIB.obj("#dfe5ea","🏋️","Sala pesi, giovedì sera"),
 team:()=>LIB.group(4,"Lo staff della palestra","#33658a"),
 jar:()=>LIB.obj("#f0d9a0","🧪","PowerMax, barattolo da 500 g"),
 mat:()=>LIB.shot("Mattia",["Esco lunedì, sto meglio","Non è colpa tua, Alex"]),
 ref:()=>LIB.doc("LabSport · referto","#a02822",["Campione: PowerMax","Sostanza non dichiarata","e vietata nello sport","Costo analisi: 180,00 €"]),
 cons:()=>LIB.doc("Consegna in contanti","#55606b",["40 barattoli PowerMax","Consegnati il 3 ottobre","Nessuna fattura","Firma: L. Benassi"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Bologna",
 water:[],
 parks:[`<ellipse cx="320" cy="210" rx="56" ry="30" fill="#d7e2c9"/>`],
 roads:["M200 130m-80 0a80 80 0 1 0 160 0a80 80 0 1 0 -160 0","M200 130H380","M200 130V20","M200 130L60 230","M200 130L40 60"],
 extra:`<rect x="192" y="122" width="16" height="16" rx="3" fill="#b0764a"/>`,
 labels:[[212,126,"Due Torri"],[206,30,"Stazione"],[300,120,"San Donato"],[60,60,"Borgo Panigale"],[60,224,"Saragozza"],[296,200,"Colli"]],
 pins:[[310,140,"#d43d55","palestra",9,16],[150,180,"#33658a","casa di Alex",9,16]]});

LIB.add(35,["La palestra chiude alle 23","Il titolare della palestra vuole sapere chi ha ucciso il suo istruttore","Bologna"],{
 map:MAP,scenes:SC,owner:"Alex Monti",time:"14:10",date:"sab 15 nov",homeDate:"sabato 15 novembre",
 appIds:"msg tel mail gal map cal note drive",extraApps:[["badge","Accessi","fitness_center","#4fb3a5,#22705f"]],
 late:"La polizia ha chiesto il telefono. Il titolare ha dovuto consegnarlo insieme ai registri della palestra.",
 brief:"Il titolare di una palestra di Bologna ti ha portato il telefono di Alex Monti, 33 anni, personal trainer. Venerdì mattina lo hanno trovato nello spogliatoio del personale. Giovedì sera era rimasto dopo la chiusura delle 23. Il telefono era nel suo armadietto.",
 quote:"«C'è un marito geloso che lo aveva aspettato fuori due volte, e la polizia è partita da lì. Ma Alex giovedì mi ha scritto «resto dopo la chiusura, ho un appuntamento, poi le spiego una cosa brutta». Una cosa brutta. Se riguarda la mia palestra, voglio saperla prima degli altri.»",
 chats:[
  {id:"renzo",name:"Renzo titolare",sub:"",m:[
   ["gio 21:30",1,"Renzo resto dopo la chiusura, ho un appuntamento. Poi domani le spiego una cosa brutta che riguarda i prodotti che vendiamo al banco."],
   ["gio 21:40",0,"Mi preoccupi. Chiudi tu l'allarme."]]},
  {id:"paola",name:"Paola R.",sub:"Cliente",m:[
   ["mer 10:00",0,"Alex mi scuso per mio marito. Gli ho spiegato che tra me e lei ci sono solo gli squat. Ha capito, e si vergogna."],
   ["mer 10:10",1,"Nessun problema, Paola."],
   ["ven 12:00",0,"Ho saputo. Lo dico qui perché resti scritto: giovedì sera mio marito era con me al saggio di nostra figlia, fino a mezzanotte."]]},
  {id:"mattia",name:"Mattia",sub:"Cliente",m:[
   ["8 nov",0,"Alex sono al pronto soccorso, il cuore mi andava a mille. Mi hanno chiesto che cosa prendo. Gli ho detto del PowerMax."],
   ["8 nov",1,"Arrivo. Smetti subito di prenderlo e tieni il barattolo."],
   ["gio 18:00",0,"Esco lunedì, sto meglio. Non è colpa tua. Mio fratello è arrabbiato, ma con chi quella roba la produce."]]},
  {id:"loris",name:"Loris integratori",sub:"",m:[
   ["mar 09:00",0,"Alex ti servono altri barattoli? Ho il prezzo buono."],
   ["",2,"3 messaggi eliminati giovedì."],
   ["gio 12:10",1,"Ho fatto analizzare il PowerMax. Lo sai che cosa c'è dentro. Domani porto il referto ai carabinieri del NAS.","pm"],
   ["gio 12:20",0,"Calmati. I barattoli avanzati me li ridai, ti rimborso e ci dimentichiamo tutto.","pm"],
   ["gio 12:25",1,"No. Se vuoi parlarne sono in palestra stasera dopo la chiusura. Ma domani vado.","pm"]]},
  {id:"giulia",name:"Giulia",sub:"Collega",m:[
   ["gio 20:50",0,"Io stacco alle 21 e corro: treno per Rimini alle 21:38. Mi hai fregato tre clienti questo mese ma ti voglio bene lo stesso."],
   ["gio 20:55",1,"Buon fine settimana, Giuli."]]},
  {id:"katia",name:"Katia reception",sub:"",m:[
   ["gio 23:02",0,"Ho chiuso la cassa e la porta principale. Esco dal retro, l'allarme è tuo. Sei sicuro di voler restare solo?"],
   ["gio 23:03",1,"Aspetto una persona, dieci minuti."]]}
 ],
 lists:{
  badge:[
   {id:"x1",g:"Giovedì sera",title:"Giulia · uscita",sub:"21:04"},
   {id:"x2",g:"Giovedì sera",title:"Katia · uscita dal retro",sub:"23:05"},
   {id:"x3",g:"Giovedì sera",title:"Badge di servizio n. 7 · ingresso dal retro",sub:"23:20",meta:"Fornitori",body:"I badge di servizio sono dati ai fornitori per le consegne fuori orario."},
   {id:"x4",g:"Giovedì sera",title:"Badge di servizio n. 7 · uscita",sub:"23:48"},
   {id:"x5",g:"Giovedì sera",title:"Alex · uscita",sub:"Nessuna uscita registrata"}],
  mail:[
   {id:"m1",title:"LabSport",sub:"Referto di analisi",meta:"mercoledì",body:"Il campione di PowerMax contiene una sostanza non dichiarata in etichetta e vietata nello sport.\nCosto dell'analisi: 180,00 €, pagati da A. Monti."},
   {id:"m2",title:"Trenitalia",sub:"Inoltro da Giulia",meta:"giovedì",body:"Bologna - Rimini, giovedì, partenza 21:38. «Così non dici che invento scuse per non fare la chiusura.»"}],
  map:[
   {id:"g1",g:"Giovedì",title:"Palestra",sub:"dalle 14:00",meta:"Ultima posizione",body:"Il telefono è rimasto nell'armadietto del personale."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Gio · L.",sub:"23:15",body:"Dopo la chiusura."},
   {id:"c2",g:"Questa settimana",title:"Ven · NAS",sub:"09:00",body:"Referto e barattoli."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui è entrato il badge di servizio giovedì, quattro cifre.\nNota sotto: i barattoli comprati senza fattura, scritti con quattro cifre."},
   {id:"n2",title:"Da fare",lock:"note",body:"Ho venduto quella roba a undici clienti senza sapere che cosa c'era dentro.\nMattia è finito in ospedale.\nLi chiamo uno per uno, poi denuncio. Anche se mi costa il lavoro."}],
  drive:[
   {id:"d0",title:"Assegnazione badge di servizio",sub:"Protetto",meta:"Da aprire",body:"Elenco dei badge dati ai fornitori.\nPer consultarlo serve sapere quale prodotto c'entra."},
   {id:"d1",u:"pm",title:"Badge di servizio",sub:"Elenco",meta:"Recuperato",body:"Badge n. 3: lavanderia.\nBadge n. 5: manutenzione attrezzi.\nBadge n. 7: fornitore integratori, Loris Benassi (PowerMax)."}],
  tel:[
   {id:"t1",title:"Loris integratori",sub:"gio 12:30 · in entrata, 8 min"},
   {id:"t2",title:"LabSport",sub:"mer 16:00 · in entrata, 4 min"}]
 },
 photos:[
  {id:"p1",t:"gio 20:00",title:"Sala",sc:"gym"},
  {id:"p2",t:"set",title:"Staff",sc:"team"},
  {id:"p3",t:"8 nov",title:"Quello di Mattia",sc:"jar"},
  {id:"p4",t:"gio 18:00",title:"Mattia",sc:"mat"},
  {id:"h1",t:"mer",title:"Referto",sc:"ref",lock:"album"},
  {id:"h2",t:"3 ott",title:"Consegna",sc:"cons",lock:"album"}],
 pins:{note:"0040",album:"2320"},
 events:[{id:"a",q:4,kind:"call",from:"Loris integratori",lines:["«Renzo? Sono Loris, quello degli integratori. Che brutta storia.»","«Senti, Alex aveva dei barattoli miei in armadietto e delle carte di un laboratorio. Passo io a ritirare tutto, così vi tolgo il pensiero.»","«Renzo?»"]},
         {id:"b",q:9,kind:"sms",from:"Katia reception",text:"Renzo, uscendo dal retro giovedì ho incrociato il furgone bianco degli integratori che entrava nel parcheggio. Erano le undici e cinque."}],
 qs:[
  {t:"23:20",q:"La palestra chiude alle 23. A che ora è stato usato un badge dopo la chiusura?",all:["2320"],show:"Alle 23:20",hint:"Apri l'app Accessi.",news:"Dal retro, quando dentro c'era solo Alex."},
  {t:"7",q:"Quale badge? Scrivi il numero.",a:["7","sette","n. 7","numero 7","il 7"],show:"Il badge di servizio n. 7",hint:"Stessa riga.",news:"Non è il badge di un socio né di un dipendente. È uno di quelli dati ai fornitori."},
  {t:"23:48",q:"A che ora è uscito quel badge?",all:["2348"],show:"Alle 23:48",hint:"Riga successiva.",news:"Ventotto minuti dentro. Alex non risulta mai uscito."},
  {t:"al saggio",q:"Il marito geloso di Paola: dov'era giovedì sera?",any:["saggio"],show:"Al saggio della figlia",hint:"Lo scrive Paola venerdì.",news:"Fino a mezzanotte, con la moglie. E mercoledì aveva già chiesto scusa. Nome da togliere."},
  {t:"Rimini",q:"La collega Giulia, a cui Alex aveva «fregato tre clienti»: per quale città ha preso il treno delle 21:38?",any:["rimini"],show:"Per Rimini",hint:"Chat e biglietto inoltrato.",news:"Uscita alle 21:04. La receptionist Katia è uscita alle 23:05, prima dell'ingresso del badge."},
  {t:"PowerMax",q:"Un cliente, Mattia, è finito al pronto soccorso. Quale prodotto prendeva?",any:["powermax","power max"],show:"PowerMax",hint:"Lo scrive lui l'8 novembre.",news:"Un integratore venduto al banco della palestra. Ora che sai di che cosa si tratta, hai recuperato i tre messaggi eliminati nella chat con Loris e un elenco nel Drive.",unlock:"pm"},
  {t:"180",q:"Alex ha fatto analizzare il prodotto. Quanto ha pagato di tasca sua?",a:["180","180 euro","180€","180,00"],show:"180 €",hint:"Mail del laboratorio.",news:"«Sostanza non dichiarata in etichetta e vietata nello sport.»"},
  {t:"NAS",q:"A chi avrebbe portato il referto venerdì mattina?",any:["carabinier"],a:["nas","al nas","ai nas","il nas"],show:"Ai carabinieri del NAS",hint:"Messaggi recuperati e Calendario.",news:"Loris gli ha offerto un rimborso per «dimenticare tutto». Alex ha detto no, e gli ha dato appuntamento dopo la chiusura."},
  {t:"Loris Benassi",q:"A chi è assegnato il badge di servizio n. 7? Nome e cognome.",all:["loris","benassi"],show:"A Loris Benassi, il fornitore",hint:"Elenco recuperato nel Drive.",news:"L'unico badge entrato giovedì dopo le 23 è il suo."},
  {t:"ottobre",q:"Nell'album privato c'è la ricevuta della consegna. In quale mese Loris ha portato i barattoli?",any:["ottobre"],show:"A ottobre",hint:"Il codice dell'album è l'ora d'ingresso del badge di servizio.",news:"Quaranta barattoli, in contanti e senza fattura. Nell'album c'è anche il referto."},
  {t:"11",q:"Nella nota protetta Alex conta i clienti a cui ha venduto il prodotto. Quanti?",a:["11","undici","11 clienti","undici clienti"],show:"Undici",hint:"Il codice sono i barattoli senza fattura, scritti con quattro cifre.",news:"«Li chiamo uno per uno, poi denuncio. Anche se mi costa il lavoro.»"},
  {t:"l",q:"Chi è stato?",o:[["r","Il marito di Paola"],["l","Loris, il fornitore"],["m","Il fratello di Mattia"],["g","Giulia, la collega"],["k","Katia, della reception"],["t","Renzo, il titolare"],["x","Nessuno: è stato un malore"]],a:"l",show:"Loris, il fornitore",hint:"Di chi era il badge delle 23:20?",news:""}],
 win:{title:"È stato Loris Benassi, il fornitore.",
  steps:["Loris vendeva alla palestra un integratore, PowerMax, con dentro una sostanza vietata. Un cliente è finito in ospedale.","Alex lo ha fatto analizzare a sue spese e giovedì gli ha scritto che venerdì sarebbe andato al NAS.","Gli ha dato appuntamento in palestra dopo la chiusura.","Alle 23:20 è entrato dal retro il badge di servizio n. 7, assegnato a Loris. È uscito alle 23:48.","Il marito geloso era a un saggio, Giulia su un treno, Katia era uscita alle 23:05."],
  end:"Il titolare legge la nota di Alex. «Undici clienti», dice. «Li avrebbe chiamati tutti.» Posa il telefono. «Li chiamo io, oggi stesso. E quei barattoli dal banco li tolgo con le mie mani.»"}
});
LIB.tune(35,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="lab";
 e.pins={album:"2320",lab:"2138",note:"4018"};
 e.locks={album:{hint:"Il minuto in cui qualcuno è entrato dal retro dopo la chiusura."},lab:{name:"Mail protetta",hint:"L'ora del treno della collega."},note:{hint:"I barattoli senza fattura, poi le decine pagate per l'analisi."}};
 e.spots=[
  {id:"s1",x:310,y:140,label:"Palestra",title:"Palestra",sub:"Chiude alle 23 · ★ 4,3",body:"Porta sul retro per i fornitori, si apre con i badge di servizio."},
  {id:"s2",x:150,y:180,label:"Casa di Alex",title:"Casa di Alex",sub:"",body:"In cucina, una scatola di barattoli di PowerMax mai aperti."},
  {id:"s3",x:200,y:60,label:"Stazione",title:"Stazione centrale",sub:"",body:"Treno per Rimini delle 21:38, partito puntuale."}];
 LIB.hints(e,["Un badge è stato usato dopo la chiusura.","Quale?","…e quando è uscito.","Il marito geloso ha un alibi.","La collega era su un treno.","Un cliente è finito al pronto soccorso.","Il laboratorio ha risposto, ma la mail è chiusa.","A chi avrebbe portato il referto?","I badge di servizio hanno un intestatario.","La ricevuta della consegna è nascosta.","Alex ha contato i clienti.","Chi è entrato dal retro, e chi temeva i NAS?"]);
});
})();
