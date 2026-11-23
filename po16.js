(function(){
/* Intrighi 16: Le spiagge (San Leone al Mare, comune inventato). Soluzione: il responsabile del demanio, geom. Franco Atzori.
   Ha corretto a mano il punteggio della gara: tolto 10 punti a Remo sul criterio dell'accessibilità. La società vincitrice è intestata a suo nipote. */
const SC={
 lid:()=>LIB.obj("#9cc7d6","🏖️","Lido Remo, trent'anni di estati"),
 g1:()=>LIB.doc("Griglia · seduta pubblica","#2f6b4f",["Lido Remo: 82 punti","Sole e Mare srl: 79","Gigi Serra: 70","(accessibilità Remo: 15)"]),
 ram:()=>LIB.obj("#f0d9a0","♿","La passerella fino al mare, 2023"),
 fam:()=>LIB.two("#9cc7d6","#7a3b5a","#2f6b4f","Con la nipote, estate"),
 g2:()=>LIB.doc("Griglia · pubblicata il giorno dopo","#a02822",["Lido Remo: 72 punti","Sole e Mare srl: 79","Gigi Serra: 70","(accessibilità Remo: 5) · firma: F. Atzori"]),
 vis:()=>LIB.doc("Visura · Sole e Mare srl","#55606b",["Costituita a luglio","Socio unico: Davide Pinna, 24 anni","Professione: studente","Capitale: 10.000 €"])
};
const MAP=LIB.prov([[318,208,"#33658a","municipio",-60,-14],[350,230,"#d43d55","Lido Remo",9,4]]);

LIB.add(76,["Le spiagge","Remo Costa vuole sapere come ha perso la concessione dopo trent'anni","San Leone al Mare"],{
 map:MAP,scenes:SC,owner:"Remo Costa",time:"11:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal map cal note social",
 late:"Remo deve andare dall'avvocato a firmare il ricorso. Si riprende il telefono.",
 brief:"Remo Costa, 61 anni, ha gestito per trent'anni il Lido Remo a San Leone al Mare. A ottobre la gara per la nuova concessione l'ha vinta una società nata a luglio. Remo era presente all'apertura dei punteggi e giura che aveva vinto lui. Ti ha dato il telefono.",
 quote:"«Ero lì, alla seduta pubblica. Ho fotografato il foglio: 82 io, 79 loro. Il giorno dopo online c'era 72. Dieci punti spariti in una notte. Tutti dicono che è stato il mio rivale di sempre, Gigi Serra. Ma Gigi è arrivato terzo. Chi ci guadagna davvero?»",
 chats:[
  {id:"atz",name:"Geom. Atzori",sub:"Demanio",m:[
   ["15 ott",0,"Signor Costa, la griglia pubblicata è quella definitiva. In seduta c'era un errore di calcolo, l'ho corretto io."],
   ["15 ott",1,"Un errore di dieci punti, solo sui miei?"],
   ["",2,"1 messaggio eliminato il 14 ottobre."],
   ["14 ott 23:10",0,"Remo, trent'anni sono tanti. È ora di riposarsi. Lo dico da amico.","atz"]]},
  {id:"gigi",name:"Gigi Serra",sub:"",m:[
   ["16 ott",0,"Remo, ci siamo fatti la guerra per vent'anni, ma questa non è roba mia. Io sono arrivato terzo, ho perso anch'io. E quelli di Sole e Mare non li conosce nessuno."],
   ["16 ott",1,"Lo so, Gigi. Stavolta siamo dalla stessa parte."]]},
  {id:"avv",name:"Avv. Loi",sub:"",m:[
   ["lun 10:00",0,"Remo, per il ricorso serve capire chi c'è dietro Sole e Mare. Ho chiesto la visura."],
   ["lun 18:00",0,"Socio unico un ragazzo di 24 anni, studente. Con diecimila euro di capitale vince una spiaggia. Strano."]]},
  {id:"nip",name:"Sara",sub:"Nipote",m:[
   ["dom 20:00",0,"Zio, ho trovato il profilo di quel Davide Pinna. Guarda chi c'è nella foto del suo compleanno."],
   ["dom 20:05",1,"Mandamela."]]},
  {id:"ass",name:"Ass. Cardia",sub:"",m:[
   ["17 ott",0,"Signor Costa, la commissione ha lavorato correttamente. Io non entro nei punteggi, li cura il responsabile del demanio."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Profili",title:"@davide.pinna",sub:"Davide · 24 anni",body:"Bio: «Studente di economia. Futuro imprenditore del mare.»"},
   {id:"s2",g:"Post",title:"@davide.pinna · compleanno",sub:"«Grazie zio Franco per tutto!»",meta:"luglio",body:"«Grazie zio Franco per tutto, senza di te non ce l'avrei fatta!»\nNella foto, con il braccio sulla sua spalla: il geom. Franco Atzori."}],
  mail:[
   {id:"m1",title:"Comune · demanio",sub:"Esito della gara",meta:"15 ottobre",body:"Concessione Lido Remo: aggiudicata a Sole e Mare srl, 79 punti.\nSecondo: Lido Remo, 72. Terzo: Gigi Serra, 70.\nGriglia firmata dal responsabile del demanio, geom. Franco Atzori."},
   {id:"m2",title:"Ditta Fadda",sub:"Fattura passerella",meta:"2023",body:"Passerella in legno fino alla battigia e sedia da mare per persone disabili.\n6.400,00 €."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Lido Remo",sub:"Concessione fino al 31 dicembre",body:"Poi passa a Sole e Mare srl."}],
  cal:[
   {id:"c1",g:"Ottobre",title:"14 ott · Seduta pubblica",sub:"10:00",body:"Apertura punteggi."},
   {id:"c2",g:"Questa settimana",title:"Mar · Avvocato",sub:"12:00",body:"Ricorso."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il mio punteggio in seduta e quello pubblicato, attaccati.\nNota sotto: quanto ho speso per la passerella."},
   {id:"n2",title:"Trent'anni",lock:"note",body:"La passerella l'ho fatta per mio fratello, che è in carrozzina.\nQuei quindici punti me li sono guadagnati legno per legno.\nSe me li tolgono, che mi dicano almeno perché."}],
  tel:[
   {id:"t1",title:"Geom. Atzori",sub:"15 ott · in uscita, 2 min"},
   {id:"t2",title:"Avv. Loi",sub:"lun 18:05 · in entrata, 15 min"}]
 },
 photos:[
  {id:"p1",t:"ago",title:"Il lido",sc:"lid"},
  {id:"p2",t:"14 ott 10:40",title:"In seduta",sc:"g1"},
  {id:"p3",t:"2023",title:"La passerella",sc:"ram"},
  {id:"p4",t:"ago",title:"Con Sara",sc:"fam"},
  {id:"h1",t:"15 ott",title:"Online",sc:"g2",lock:"album"},
  {id:"h2",t:"lun",title:"Visura",sc:"vis",lock:"album"}],
 pins:{note:"6400",album:"8272"},
 events:[{id:"a",q:3,kind:"call",from:"Geom. Atzori",lines:["«Signor Costa? Ah, non è lui. Chi parla?»","«Gli dica che un ricorso costa caro e che la griglia è firmata. Se insiste, il prossimo controllo sulle sue licenze non sarà così gentile.»","«Pronto?»"]},
         {id:"b",q:8,kind:"sms",from:"Gigi Serra",text:"Remo, ho chiesto in giro. Davide Pinna è il figlio della sorella di Atzori. Al bar lo sanno tutti, nessuno lo dice."}],
 qs:[
  {t:"82",q:"Che punteggio aveva Remo alla seduta pubblica?",a:["82","82 punti","ottantadue"],show:"82",hint:"Foto della griglia in Galleria.",news:"Davanti a Sole e Mare, che ne aveva 79."},
  {t:"72",q:"E nella griglia pubblicata il giorno dopo?",a:["72","72 punti","settantadue"],show:"72",hint:"Mail dell'esito e album privato. Il codice dell'album: punteggio in seduta e punteggio pubblicato, attaccati.",news:"Dieci punti in meno, solo a lui."},
  {t:"accessibilità",q:"Su quale criterio sono spariti i punti?",any:["accessib","disabil"],show:"L'accessibilità",hint:"Confronta le due griglie.",news:"Da 15 a 5. Proprio dove Remo era più forte."},
  {t:"6400",q:"Quanto aveva speso Remo per la passerella e la sedia da mare?",a:["6400","6.400","6400 euro","6.400 euro","6.400 €"],show:"6.400 €",hint:"Fattura nella Mail.",news:"Non era un errore di calcolo: era il lavoro più costoso del lido."},
  {t:"terzo",q:"Il rivale Gigi Serra: in quale posizione è arrivato?",a:["3","terzo","al terzo","3°","terzo posto","al terzo posto"],show:"Terzo",hint:"Griglie e chat con Gigi.",news:"Ha perso anche lui. Non ci guadagna niente."},
  {t:"Franco Atzori",q:"Chi ha firmato la griglia pubblicata? Nome e cognome.",all:["franco","atzori"],show:"Il geom. Franco Atzori, responsabile del demanio",hint:"Mail dell'esito.",news:"«Un errore di calcolo, l'ho corretto io.» Ora che sai chi ha firmato, hai recuperato il messaggio che Atzori ha mandato a Remo e poi cancellato.",unlock:"atz"},
  {t:"23:10",q:"A che ora della notte prima della pubblicazione Atzori ha scritto a Remo «è ora di riposarsi»?",all:["2310"],show:"Il 14 ottobre alle 23:10",hint:"Messaggio recuperato.",news:"La sera della seduta, prima di «correggere»."},
  {t:"24",q:"Chi c'è dietro Sole e Mare? Quanti anni ha il socio unico?",a:["24","24 anni","ventiquattro"],show:"24: Davide Pinna, studente",hint:"Chat con l'avvocato e visura nell'album.",news:"Società nata a luglio, diecimila euro di capitale."},
  {t:"zio Franco",q:"Nel post di compleanno di Davide Pinna, chi ringrazia?",all:["zio","franco"],show:"«Zio Franco»",hint:"Apri Scatto.",news:"Nella foto c'è il geom. Atzori, con il braccio sulla sua spalla."},
  {t:"nipote",q:"Che cosa è Davide Pinna per Franco Atzori?",any:["nipot"],show:"Il nipote",hint:"Post di Scatto, e Gigi lo conferma.",news:"Il figlio della sorella. La spiaggia va al nipote del funzionario che dà i punti."},
  {t:"fratello",q:"Nella nota protetta Remo racconta per chi ha costruito la passerella.",any:["fratell"],show:"Per suo fratello, in carrozzina",hint:"Il codice è quanto ha speso per la passerella.",news:"«Quei quindici punti me li sono guadagnati legno per legno.»"},
  {t:"a",q:"Chi ha truccato i punteggi?",o:[["g","Gigi Serra, il rivale"],["a","Il geom. Atzori, responsabile del demanio"],["c","L'assessore Cardia"],["d","Davide Pinna, da solo"],["e","Nessuno: è stato un errore di calcolo"]],a:"a",show:"Il geom. Atzori",hint:"Chi ha firmato la griglia corretta e di chi è nipote il vincitore?",news:""}],
 win:{title:"I punti li ha tolti il geom. Franco Atzori.",
  steps:["In seduta pubblica Remo aveva 82 punti e Sole e Mare 79. Remo ha fotografato il foglio.","Il giorno dopo la griglia firmata da Atzori dava a Remo 72: dieci punti in meno sull'accessibilità, dove Remo aveva speso 6.400 € per una passerella.","Sole e Mare è nata a luglio, socio unico Davide Pinna, 24 anni, studente.","Davide ringrazia «zio Franco» sui social: è il nipote di Atzori.","Gigi Serra è arrivato terzo e ha perso anche lui."],
  end:"Remo firma il ricorso con le due griglie e la foto del compleanno allegate. Poi chiama Gigi: «Stasera un caffè?» Per la prima volta in vent'anni, Gigi dice di sì."}
});
LIB.tune(76,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="esi";
 e.pins={album:"8272",esi:"1410",note:"1079"};
 e.locks={album:{hint:"Il mio punteggio in seduta, poi quello del giorno dopo."},esi:{name:"Mail protetta",hint:"Il giorno della seduta pubblica, poi il mese."},note:{hint:"Le migliaia di capitale di quella società, poi i punti con cui ha vinto."}};
 e.spots=[
  {id:"s1",x:350,y:230,label:"Lido Remo",title:"Lido Remo",sub:"Stabilimento · ★ 4,8",body:"Recensione: «L'unico lido dove mio padre in carrozzina arriva fino all'acqua.»"},
  {id:"s2",x:318,y:208,label:"Demanio",title:"Comune · ufficio demanio",sub:"San Leone al Mare",body:"Il responsabile firma le griglie dei punteggi. In seduta pubblica si legge, il giorno dopo si pubblica."},
  {id:"s3",x:300,y:190,label:"Bar Spiaggia",title:"Bar Spiaggia di Gigi Serra",sub:"★ 4,0",body:"Recensione: «Gigi brontola sempre contro Remo, ma quest'anno brontola contro il Comune.»"}];
 LIB.hints(e,["Remo ha fotografato il foglio in seduta.","Il giorno dopo il foglio era diverso.","Confronta le due griglie.","Remo ha speso molto per una cosa.","Il rivale ha perso anche lui.","Chi ha firmato la griglia corretta? L'esito è chiuso.","Un messaggio notturno, poi cancellato.","Chi c'è dietro la società vincitrice?","Un compleanno, in pubblico.","Che cosa è quel ragazzo per il funzionario?","Remo ha scritto per chi ha costruito la passerella.","Chi ha firmato la griglia, e di chi è nipote il vincitore?"]);
});
})();
