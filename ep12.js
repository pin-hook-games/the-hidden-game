(function(){
/* episodio 12: Lezioni private (Cagliari). Soluzione: Non tradisce. Paola prende lezioni di guida: a 44 anni non ha mai avuto la patente. */
const SC={
 shop:()=>LIB.obj("#f3e3e8","👗","Negozio, vetrina d'autunno"),
 quiz:()=>LIB.doc("Quiz · scheda 31","#2f6b4f",["Errori: 2 su 30","Esito: IDONEA","Schede precedenti:","6 errori, poi 3, poi 2"]),
 enr:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Enrico, Poetto"),
 car:()=>LIB.car("#c0392b","SCUOLA GUIDA"),
 pink:()=>LIB.doc("Autorizzazione a esercitarsi","#d9708a",["Melis Paola","Categoria: B","Teoria superata il 14 ottobre","Valida 12 mesi"]),
 panda:()=>LIB.car("#f0a63a","dal cugino Mauro")
};
const MAP=LIB.map({name:"Mappa stilizzata di Cagliari",
 water:[["M0 240Q150 200 260 240",40],["M330 120Q390 170 400 250",30]],
 parks:[`<ellipse cx="270" cy="110" rx="34" ry="24" fill="#d7e2c9"/>`,`<ellipse cx="50" cy="90" rx="40" ry="22" fill="#cfe0ea"/>`],
 roads:["M40 170H320","M110 60V200","M190 50V200","M260 140V210","M80 110H230","M260 140L330 100"],
 labels:[[120,54,"Castello"],[92,196,"Marina"],[170,104,"Villanova"],[236,84,"Monte Urpinu"],[280,190,"Bonaria"],[340,96,"Poetto"],[20,70,"Stagno"],[120,236,"Porto"],[30,160,"Stampace"]],
 pins:[[150,130,"#33658a","Casa",9,4],[120,180,"#33658a","negozio",9,-8],[286,120,"#d43d55","martedì 15-17",-30,26],[270,176,"#56666e","autoscuola",-60,-8]]});

EPISODES[12]={...LIB.apps("msg tel mail web gal map cal note bank"),
 n:12,timer:1800,map:MAP,scenes:SC,owner:"Paola Melis",time:"10:15",date:"mer 19 nov",homeDate:"mercoledì 19 novembre",
 brief:"Enrico ti ha portato il telefono della moglie Paola, 44 anni, commessa in un negozio di abbigliamento a Cagliari. Lei è al lavoro e ha dimenticato il telefono in borsa a casa: quella grande, che usa il martedì.",
 quote:"«Chiamate di un minuto a un numero che non ho in rubrica. Prelievi in contanti ogni martedì, sempre la stessa cifra. E ogni martedì due ore di buco, dalle tre alle cinque. Ho letto un messaggio: «martedì solita ora, porto io la macchina». Vent'anni di matrimonio. Mi dica solo il nome.»",
 chats:[
  {id:"enrico",name:"Enrico",sub:"Marito",m:[
   ["mar 14:40",0,"Passo a prenderti alle 17?"],
   ["mar 14:45",1,"No no, oggi faccio inventario fino a tardi. Torno col bus."],
   ["mar 17:20",0,"Il negozio ha il telefono staccato."],
   ["mar 17:35",1,"Eravamo in magazzino."]]},
  {id:"gianni",name:"Gianni",sub:"",m:[
   ["lun 18:00",0,"Martedì solita ora, porto io la macchina. Stavolta facciamo la salita."],
   ["lun 18:05",1,"La salita no, ti prego."],
   ["lun 18:06",0,"La salita sì. Fidati di me, ormai le mani le sai mettere."],
   ["",2,"1 messaggio vocale eliminato."],
   ["mar 17:10",0,"Vocale (0:18): «Paola, oggi bene la partenza in salita. Sulla retromarcia invece guardi troppo il volante: specchietti, specchietti, specchietti. Martedì prossimo solo parcheggi.»","aut"]]},
  {id:"franco",name:"Franco",sub:"",m:[
   ["lun 12:00",0,"Martedì pomeriggio ti copro io anche stavolta. Siamo a cinque: il sesto lo paghi in pasticcini."],
   ["lun 12:05",1,"Sei un amico. Alla titolare ho detto dentista."],
   ["lun 12:06",0,"Cinque dentisti in cinque settimane. Hai una bocca difficile."]]},
  {id:"mauro",name:"Mauro",sub:"",m:[
   ["dom 19:00",0,"Cugina, la Panda te la tengo fino a Natale. 2.500 e ci metto le gomme nuove."],
   ["dom 19:10",1,"Tienila. Ma a Enrico neanche una parola."],
   ["dom 19:11",0,"Muto. Però prima impara a usarla 😄"]]},
  {id:"robi",name:"Robi",sub:"",m:[
   ["dom 21:00",0,"Zia, scheda 31: due errori! Sei più brava di me che l'ho presa a diciannove anni."],
   ["dom 21:05",1,"Merito del nipote che mi interroga. Giovedì ripassiamo le precedenze?"],
   ["dom 21:06",0,"Giovedì dopo cena. Porta i dolci."]]},
  {id:"lai",name:"Dott. Lai",sub:"",m:[
   ["3 ott",0,"Signora Melis, il certificato medico è pronto. Vista perfetta, può ritirarlo in studio."],
   ["3 ott",1,"Grazie dottore, passo domani."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Autoscuola Bonaria",sub:"Ricevuta di iscrizione",meta:"29 settembre",body:"Iscrizione al corso per la categoria B: 120,00 €.\nGuide: 28,00 € l'ora, da pagare in contanti all'istruttore.\nPer informazioni: 070 555 0142.\nIl titolare, Sig. Piras"},
   {id:"m2",title:"Autoscuola Bonaria",sub:"Esame di guida",meta:"17 novembre",body:"Gentile sig.ra Melis, l'esame di guida è fissato per giovedì 4 dicembre alle 9:30.\nEsaminatore: ing. Sanna.\nSi presenti con l'istruttore Gianni."},
   {id:"m3",title:"Motorizzazione",sub:"Esito esame di teoria",meta:"14 ottobre",body:"Esame di teoria superato il 14 ottobre.\nL'autorizzazione a esercitarsi alla guida è valida dodici mesi."}],
  map:[
   {id:"g1",g:"Cronologia · martedì 18",title:"Negozio, Marina",sub:"09:00 - 14:50",meta:"Permanenza",body:"In negozio fino alle 14:50."},
   {id:"g2",g:"Cronologia · martedì 18",title:"Monte Urpinu, strade del colle",sub:"15:05 - 17:05",meta:"In movimento",body:"Due ore in auto, a bassa velocità.\nMolte fermate e ripartenze, tre inversioni, una lunga sosta in un parcheggio."},
   {id:"g3",g:"Cronologia · martedì 18",title:"Bonaria, un ufficio al piano terra",sub:"17:08 - 17:15",meta:"Permanenza",body:"Sette minuti."}],
  bank:[
   {id:"b1",g:"Prelievi",title:"Prelievo in contanti",sub:"mar 18 nov · − 56,00 €"},
   {id:"b2",g:"Prelievi",title:"Prelievo in contanti",sub:"mar 11 nov · − 56,00 €"},
   {id:"b3",g:"Prelievi",title:"Prelievo in contanti",sub:"mar 4 nov · − 56,00 €"},
   {id:"b4",g:"Prelievi",title:"Prelievo in contanti",sub:"mar 28 ott · − 56,00 €"},
   {id:"b5",g:"Prelievi",title:"Prelievo in contanti",sub:"mar 21 ott · − 56,00 €"},
   {id:"b6",g:"Pagamenti",title:"Autoscuola Bonaria",sub:"29 set · − 120,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ogni martedì · G.",sub:"15:00 - 17:00",body:"Dal 21 ottobre. Al negozio: dentista."},
   {id:"c2",g:"Dicembre",title:"Gio 4 · IL GIORNO",sub:"09:30",body:"Poi andare a prendere Enrico al lavoro."},
   {id:"c3",g:"Promemoria",title:"Foglio rosa in borsa",sub:"Ogni martedì",body:"Senza non si guida."}],
  web:[
   {id:"w1",g:"Cronologia",title:"partenza in salita senza far spegnere il motore",sub:"lun 22:10"},
   {id:"w2",g:"Cronologia",title:"patente a 44 anni è tardi",sub:"28 set"},
   {id:"w3",g:"Cronologia",title:"quiz patente b precedenze",sub:"dom 21:30"}],
  note:[
   {id:"n1",title:"Borsa del martedì",body:"Foglio rosa, occhiali, contanti.\nAlbum privato: quello che prelevo il martedì, scritto due volte.\nLa nota qui sotto: giorno e mese dell'esame."},
   {id:"n2",title:"Per Enrico",lock:"note",body:"Da vent'anni dico a tutti che guidare non mi piace.\nLa verità è che la patente non l'ho mai presa, e più passava il tempo più mi vergognavo.\nIl 4 dicembre vengo a prenderti al lavoro. Guido io."}],
  tel:[
   {id:"t1",title:"070 555 0142",sub:"lun 17:55 · in uscita, 1 min"},
   {id:"t2",title:"070 555 0142",sub:"10 nov · in uscita, 1 min"},
   {id:"t3",title:"070 555 0142",sub:"3 nov · in entrata, 1 min"},
   {id:"t4",title:"Enrico",sub:"mar 17:18 · persa"}]
 },
 photos:[
  {id:"p1",t:"lun",title:"Vetrina",sc:"shop"},
  {id:"p2",t:"dom 20:58",title:"Scheda 31",sc:"quiz"},
  {id:"p3",t:"lug",title:"Con Enrico",sc:"enr"},
  {id:"p4",t:"mar 15:02",title:"Si parte",sc:"car"},
  {id:"h1",t:"15 ott",title:"Finalmente",sc:"pink",lock:"album"},
  {id:"h2",t:"dom",title:"La mia",sc:"panda",lock:"album"}],
 pins:{note:"0412",album:"5656"},
 qs:[
  {t:"Autoscuola Bonaria",q:"Il numero sconosciuto è 070 555 0142. A quale attività appartiene?",any:["bonaria","autoscuola","scuolaguida"],show:"All'Autoscuola Bonaria",hint:"Lo stesso numero compare in fondo a una ricevuta nella Mail.",news:"Un'autoscuola. Ora che sai chi chiama, hai recuperato il messaggio vocale eliminato nella chat con Gianni.",unlock:"aut"},
  {t:"56",q:"Quanti euro preleva Paola ogni martedì?",a:["56","56,00","56 euro","56€"],show:"56 €",hint:"In Banca i prelievi sono tutti uguali.",news:"Sempre 56, sempre in contanti. L'autoscuola vuole le guide pagate così, all'istruttore."},
  {t:"2",q:"Quante ore di guida paga con quei soldi, ogni volta?",a:["2","due","2 ore","due ore"],show:"Due ore",hint:"La tariffa oraria è nella ricevuta di iscrizione. Dividi.",news:"Due ore a 28 euro l'ora: le stesse due ore di buco, dalle tre alle cinque."},
  {t:"10",q:"Quante ore di guida ha fatto finora, in tutto?",a:["10","dieci","10 ore","dieci ore"],show:"Dieci ore",hint:"Conta i martedì con il prelievo e moltiplica.",news:"Cinque martedì, dal 21 ottobre. E cinque sono anche i turni che le ha coperto Franco."},
  {t:"Monte Urpinu",q:"Dove passa quelle due ore? Scrivi la zona.",any:["urpinu"],show:"Sulle strade di Monte Urpinu",hint:"Mappe conserva la cronologia di ieri.",news:"Fermate, ripartenze, inversioni, un parcheggio. Non è un appuntamento: è una lezione."},
  {t:"retromarcia",q:"Nel vocale recuperato, quale manovra deve ancora migliorare?",any:["retromarcia"],show:"La retromarcia",hint:"Ascolta Gianni fino in fondo.",news:"Gianni è l'istruttore. «Porto io la macchina» perché è quella con i doppi comandi."},
  {t:"14",q:"La teoria l'ha già passata. In quale giorno di ottobre?",all:["14"],show:"Il 14 ottobre",hint:"C'è una mail della Motorizzazione.",news:"Promossa al primo colpo. Da allora in borsa tiene il foglio rosa."},
  {t:"2",q:"Quanti errori ha fatto nell'ultima scheda di quiz?",a:["2","due","2 errori","due errori"],show:"Due",hint:"C'è una foto in Galleria, e un messaggio di chi la interroga.",news:"Sei errori, poi tre, poi due. Si esercita ancora anche se l'esame di teoria è passato."},
  {t:"nipote",q:"Chi è Robi, che la interroga dopo cena?",any:["nipote"],show:"Suo nipote",hint:"Guarda come si chiamano a vicenda.",news:"Un ragazzo che la patente l'ha presa a diciannove anni. Primo nome da togliere."},
  {t:"4 dicembre",q:"Quando è l'esame di guida? Giorno e mese.",all:["4","dic"],show:"Giovedì 4 dicembre alle 9:30",hint:"L'autoscuola l'ha comunicato per posta elettronica.",news:"In calendario l'ha chiamato «IL GIORNO»."},
  {t:"esaminatore",q:"Che ruolo ha l'ing. Sanna?",any:["esamin"],show:"È l'esaminatore",hint:"È nella stessa mail.",news:"L'ingegnere della Motorizzazione. Il Sig. Piras, invece, è il titolare dell'autoscuola."},
  {t:"certificato medico",q:"Il dott. Lai le scrive che una cosa «è pronta». Che cosa?",any:["certificat"],show:"Il certificato medico per la patente",hint:"Leggi il suo messaggio.",news:"La visita della vista, a inizio ottobre. Vista perfetta."},
  {t:"5",q:"Franco scherza sui «dentisti». Quante volte l'ha coperta in negozio?",a:["5","cinque","5 volte","cinque volte"],show:"Cinque",hint:"Lo dice lui.",news:"Franco è il collega. Sa tutto e si fa pagare in pasticcini."},
  {t:"una Panda",q:"Mauro le «tiene» qualcosa fino a Natale. Che cosa?",any:["panda","macchina","utilitaria"],show:"Una Panda",hint:"Lo scrive lui.",news:"Il cugino le vende la sua prima auto: 2.500 euro, gomme nuove comprese."},
  {t:"B",q:"Nell'album privato c'è il foglio rosa. Per quale categoria di patente?",a:["b","categoria b","patente b"],show:"Categoria B",hint:"Il codice dell'album è la cifra del martedì, scritta due volte.",news:"Accanto c'è la foto della Panda, con la didascalia «La mia»."},
  {t:"20",q:"Nella nota protetta spiega tutto. Da quanti anni lo nasconde?",a:["20","venti","20 anni","vent'anni","venti anni"],show:"Da vent'anni",hint:"Il codice è la data dell'esame, giorno e mese.",news:"«Il 4 dicembre vengo a prenderti al lavoro. Guido io.»"},
  {t:"nessuno",q:"Gianni, Franco, Mauro, Robi, il dott. Lai, l'ing. Sanna, il Sig. Piras. Chi è l'amante di Paola? Se nessuno, scrivi NESSUNO.",any:["nessun"],show:"Nessuno",hint:"Istruttore, collega, cugino, nipote, medico, esaminatore, titolare.",news:"Sette uomini e una patente."},
  {t:"n",q:"Il verdetto per Enrico. Una sorpresa che non toglie nulla alla coppia non conta come «Nasconde altro».",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"n",show:"Non tradisce",hint:"Che cosa perde Enrico da questo segreto?",news:""}],
 win:{title:"Paola non tradisce Enrico. Impara a guidare.",
  steps:["Il numero sconosciuto è dell'Autoscuola Bonaria. Gianni è l'istruttore, e «porto io la macchina» è l'auto con i doppi comandi.","Ogni martedì Paola preleva 56 €: due ore di guida a 28 € l'ora, sulle strade di Monte Urpinu.","Ha passato la teoria il 14 ottobre e ha l'esame di guida giovedì 4 dicembre.","Il collega Franco la copre in negozio, il nipote Robi la interroga, il cugino Mauro le tiene da parte una Panda.","Per vent'anni ha detto che guidare non le piaceva. Non aveva mai preso la patente."],
  end:"Enrico ride, poi smette. «Vent'anni che la porto ovunque. Pensavo le piacesse farsi portare.» Si asciuga gli occhi. «Il 4 dicembre faccio finta di non sapere niente. Ma esco dal lavoro con mezz'ora di anticipo.»"}
};
LIB.tune(12,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 const m2=e.lists.mail.find(x=>x.id==="m2");m2.lock="esa";m2.body+="\nPresentarsi alle 9:40.";
 e.pins={album:"5656",esa:"1410",note:"5640"};
 e.locks={album:{hint:"Quello che prelevo il martedì, due volte."},esa:{name:"Mail protetta",hint:"Il giorno in cui ho passato la teoria, poi il mese."},note:{hint:"Quello che prelevo il martedì, poi i minuti dell'esame."}};
 e.spots=[
  {id:"s1",x:270,y:176,label:"Autoscuola Bonaria",title:"Autoscuola Bonaria",sub:"★ 4,8",body:"Recensione: «Istruttore paziente, anche con chi comincia tardi. Guide il martedì pomeriggio.»"},
  {id:"s2",x:286,y:120,label:"Monte Urpinu",title:"Monte Urpinu",sub:"Strade del colle",body:"Strade larghe e poco traffico: qui le autoscuole fanno fare manovra."},
  {id:"s3",x:120,y:180,label:"Negozio",title:"Il negozio di Paola",sub:"Marina",body:"Il martedì chiude alle 15. «Dal dentista», dice ai colleghi."}];
 LIB.hints(e,["Il numero sconosciuto ha un nome, da qualche parte.","La banca racconta i martedì.","Quante ore con quei soldi?","Fai il conto delle settimane.","Il telefono si ricorda dove gira.","Un vocale recuperato.","La teoria è già fatta.","Le schede di quiz.","Chi la interroga a casa?","Una data importante, chiusa a chiave.","Chi è l'ingegnere?","Il medico ha preparato qualcosa.","Un collega la copre.","Qualcuno le tiene un'auto.","Il foglio rosa è nascosto.","Paola spiega tutto, sotto chiave.","Ripassa chi sono tutti.","Il verdetto."]);
});
})();
