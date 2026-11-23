(function(){
/* Intrighi 17: La notte dello spoglio (Borgoverde, comune inventato). Soluzione: nessun broglio.
   Nel verbale della sezione 7 lo scrutatore Nicola ha scritto 13 invece di 44: 31 voti "mancanti" che non mancano.
   Il candidato sconfitto, Enzo Bellini, lo sapeva dalle 2:00 e ha convocato lo stesso la conferenza stampa: l'accusa è montata. */
const SC={
 seg:()=>LIB.group(3,"Seggio 7 · scuola Manzoni, ore 23","#33658a"),
 ver:()=>LIB.doc("Verbale sezione 7 · pag. 3","#a02822",["Lista Ponte (Bellini): 13","Lista Insieme: 402","Bianche: 9  Nulle: 6","Totale votanti: 461"]),
 sch:()=>LIB.doc("Tabella di scrutinio · conteggio a mano","#2f6b4f",["Ponte: IIII IIII ... = 44","Insieme: 402","Bianche 9, nulle 6","Totale: 461 + 31 = 492"]),
 caf:()=>LIB.obj("#f0d9a0","☕","Il caffè delle 4, dopo lo spoglio"),
 sms:()=>LIB.shot("Bellini · 2:04",["Ho visto il 13. È un errore, lo so.","Ma domani la conferenza la faccio lo stesso."]),
 rip:()=>LIB.doc("Riconteggio · Ufficio centrale","#55606b",["Sezione 7: schede votate 492","Ponte: 44","Insieme: 402","Nessuna scheda mancante"])
};
const MAP=LIB.prov([[180,120,"#33658a","seggio 7",9,-14],[150,104,"#d43d55","municipio",-62,-6]]);

LIB.add(77,["La notte dello spoglio","Paolo Riva, presidente di seggio, è accusato di aver fatto sparire 31 voti","Borgoverde"],{
 map:MAP,scenes:SC,owner:"Paolo Riva",time:"16:00",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal cal note",extraApps:[["news","Notizie","newspaper","#e26b4c,#8a2a1a"]],
 late:"Paolo è stato chiamato in prefettura per essere ascoltato. Il telefono deve venire con lui.",
 brief:"Al ballottaggio di Borgoverde Enzo Bellini (lista Ponte) ha perso per 27 voti. Il giorno dopo in conferenza stampa ha accusato il presidente del seggio 7, Paolo Riva, 31 anni, insegnante: nel suo verbale mancherebbero 31 voti. Paolo ti ha dato il telefono per capire che cosa è successo davvero quella notte.",
 quote:"«Io non ho rubato niente. Ma il verbale l'ho firmato io, e lì c'è scritto 13. Bellini dice che i voti sono spariti nel mio seggio, e i giornali gli credono. Ho firmato alle due di notte, ero stanco morto. Mi aiuti a capire dove ho sbagliato, se ho sbagliato.»",
 chats:[
  {id:"nic",name:"Nicola",sub:"Scrutatore",m:[
   ["dom 23:50",0,"Paolo, io ricopio i totali sul verbale, tu intanto chiudi le buste?"],
   ["dom 23:51",1,"Sì, vai."],
   ["lun 9:00",0,"Paolo, ho visto il giornale. Credo di aver fatto un casino io. Sulla tabella c'è 44, sul verbale ho scritto 13. Ho ricopiato la riga sbagliata. Mi dispiace da morire."],
   ["lun 9:02",1,"Nicola, la tabella dov'è? L'hai fotografata?"],
   ["lun 9:05",0,"Sì, te la mando. Le schede sono tutte nel plico, sigillato."]]},
  {id:"bel",name:"Enzo Bellini",sub:"Lista Ponte",m:[
   ["lun 1:58",1,"Avvocato Bellini, il suo rappresentante di lista mi ha chiesto il verbale. Gli ho dato copia."],
   ["",2,"1 messaggio eliminato da Enzo Bellini."],
   ["lun 2:06",0,"Riva, so che è un errore di trascrizione. Ma è politica, non è niente di personale.","bel"],
   ["lun 11:00",0,"Riva, ci vediamo in tribunale."]]},
  {id:"rap",name:"Teo",sub:"Rappresentante di lista Ponte",m:[
   ["lun 2:01",0,"Paolo, ho mandato la foto del verbale a Bellini. Gli ho detto anche che sulla tabella c'era 44, l'ho visto io. Mi ha risposto che lo sa."],
   ["mar",0,"Mi ha tolto dal gruppo della lista perché ho detto ai giornalisti che è un errore di trascrizione. Io c'ero, Paolo. Nessuno ha rubato niente."]]},
  {id:"mam",name:"Mamma",sub:"",m:[
   ["mar",0,"Paolo, al mercato la gente mi guarda. Dimmi che non è vero."],
   ["mar",1,"Non è vero, mamma. È un numero ricopiato male. Lo dimostro."]]}
 ],
 lists:{
  news:[
   {id:"w1",g:"Cronaca di Borgoverde",title:"Bellini: «31 voti spariti nel seggio 7»",sub:"lunedì, ore 11",body:"Conferenza stampa del candidato sconfitto alle 11: «Il verbale del seggio 7 è la prova. Chiederò l'annullamento.»"},
   {id:"w2",g:"Cronaca di Borgoverde",title:"Riconteggio: nessuna scheda mancante",sub:"mercoledì",body:"L'Ufficio centrale ha riaperto il plico della sezione 7: 492 schede, 44 a Ponte. «Errore materiale di trascrizione.» Bellini ha comunque perso, per 27 voti."}],
  mail:[
   {id:"m1",title:"Prefettura",sub:"Convocazione",meta:"oggi",body:"Il sig. Paolo Riva è convocato oggi alle 17 per essere ascoltato sul verbale della sezione 7."},
   {id:"m2",title:"Ufficio centrale",sub:"Esito del riconteggio",meta:"mercoledì",body:"Sezione 7, schede votate: 492. Lista Ponte: 44.\nSul verbale: 13. Differenza: 31.\nNessuna scheda mancante, plico integro."}],
  cal:[
   {id:"c1",g:"Domenica",title:"Seggio 7 · spoglio",sub:"23:00 - 2:00",body:""},
   {id:"c2",g:"Oggi",title:"Prefettura",sub:"17:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui Bellini ha scritto a Teo che lo sapeva, quattro cifre.\nNota sotto: il numero di schede nel plico, con uno zero davanti."},
   {id:"n2",title:"Per la prefettura",lock:"note",body:"Ho firmato senza ricontrollare la riga di Ponte. È colpa mia, non di Nicola.\nMa nessuno ha toccato una scheda.\nE chi lo sapeva alle due di notte ha scelto di accusarmi alle undici del mattino."}],
  tel:[
   {id:"t1",title:"Nicola",sub:"lun 9:10 · in uscita, 20 min"},
   {id:"t2",title:"Teo",sub:"lun 2:20 · in entrata, 4 min"}]
 },
 photos:[
  {id:"p1",t:"dom 23:00",title:"Il seggio",sc:"seg"},
  {id:"p2",t:"lun 1:55",title:"Verbale",sc:"ver"},
  {id:"p3",t:"lun 9:06",title:"Da Nicola",sc:"sch"},
  {id:"p4",t:"lun 4:00",title:"Dopo",sc:"caf"},
  {id:"h1",t:"lun",title:"Da Teo",sc:"sms",lock:"album"},
  {id:"h2",t:"mer",title:"Riconteggio",sc:"rip",lock:"album"}],
 pins:{note:"0492",album:"0204"},
 events:[{id:"a",q:3,kind:"sms",from:"Numero sconosciuto",text:"Ladro. A Borgoverde i voti si contano, non si rubano. Vergognati."},
         {id:"b",q:8,kind:"call",from:"Teo",lines:["«Paolo? Ah, scusi. Sono Teo, il rappresentante di Ponte.»","«Se oggi in prefettura vi serve, io ripeto tutto: alle due ho detto a Bellini del 44, e lui mi ha risposto che lo sapeva.»","«Gli dica che ho tenuto lo screenshot.»"]}],
 qs:[
  {t:"13",q:"Quanti voti a Ponte sono scritti sul verbale della sezione 7?",a:["13","tredici"],show:"13",hint:"Foto del verbale in Galleria.",news:"Il numero da cui è partita l'accusa."},
  {t:"44",q:"E quanti ne risultano dalla tabella di scrutinio contata a mano?",a:["44","quarantaquattro"],show:"44",hint:"La foto che ha mandato Nicola.",news:"La differenza è 31: proprio i voti «spariti»."},
  {t:"Nicola",q:"Chi ha ricopiato i totali sul verbale?",any:["nicola"],show:"Nicola, lo scrutatore",hint:"Chat con Nicola.",news:"«Ho ricopiato la riga sbagliata.»"},
  {t:"492",q:"Quante schede c'erano nel plico al riconteggio?",a:["492"],show:"492",hint:"Mail dell'Ufficio centrale e notizie.",news:"Nessuna scheda mancante. Plico integro."},
  {t:"27",q:"Con il riconteggio, per quanti voti ha perso Bellini?",a:["27","27 voti","ventisette"],show:"Per 27 voti",hint:"Notizie.",news:"Ha perso lo stesso, anche con i suoi 31 voti restituiti."},
  {t:"Teo",q:"Chi ha detto a Bellini, quella notte, che sulla tabella c'era 44?",any:["teo","rappresentant"],show:"Teo, il suo rappresentante di lista",hint:"Chat con Teo.",news:"«Mi ha risposto che lo sa.» Ora che sai chi ha avvisato Bellini, hai recuperato il messaggio che Bellini aveva mandato a Paolo e poi cancellato.",unlock:"bel"},
  {t:"2:04",q:"A che ora Bellini ha scritto a Teo di aver visto il 13 ed essere sicuro che era un errore?",all:["204"],show:"Alle 2:04",hint:"Album privato: il codice è quell'ora, quattro cifre.",news:"«Ma domani la conferenza la faccio lo stesso.»"},
  {t:"11",q:"A che ora ha fatto la conferenza stampa in cui ha parlato di voti spariti?",a:["11","alle 11","11:00","ore 11","le 11"],show:"Alle 11 del mattino",hint:"Notizie.",news:"Nove ore dopo aver saputo che era un errore."},
  {t:"lo ha tolto dal gruppo",q:"Che cosa ha fatto Bellini a Teo quando ha parlato con i giornalisti?",any:["grupp","tolt","cacciat","esclus","rimoss"],show:"Lo ha tolto dal gruppo della lista",hint:"Chat con Teo.",news:"Chi diceva la verità è stato messo fuori."},
  {t:"riga",q:"Nella nota protetta Paolo ammette che cosa non ha ricontrollato prima di firmare?",any:["riga","ponte","verbal","total"],show:"La riga di Ponte",hint:"Il codice è il numero di schede nel plico, con uno zero davanti.",news:"Un errore suo, di firma. Non un furto."},
  {t:"no",q:"Qualcuno ha toccato le schede nel seggio 7?",a:["no","nessuno","no nessuno","mai"],show:"No",hint:"Plico integro, 492 schede.",news:""},
  {t:"m",q:"Che cosa è successo nel seggio 7?",o:[["r","Paolo Riva ha fatto sparire 31 voti"],["n","Nicola ha rubato i voti per Insieme"],["m","Errore di trascrizione: Bellini lo sapeva e ha montato l'accusa"],["p","Il plico è stato manomesso dopo"],["i","Teo ha alterato la tabella"]],a:"m",show:"Errore di trascrizione, accusa montata",hint:"Schede contate al riconteggio e messaggio delle 2:04.",news:""}],
 win:{title:"Nessun broglio. Un 13 al posto di 44, e un'accusa montata.",
  steps:["Sulla tabella di scrutinio Ponte aveva 44 voti. Nicola, ricopiando, ha scritto 13 sul verbale; Paolo ha firmato senza ricontrollare.","Il riconteggio ha trovato 492 schede, nessuna mancante. Bellini ha perso comunque, per 27 voti.","Alle 2:01 Teo, il suo rappresentante di lista, gli aveva detto del 44. Alle 2:04 Bellini ha risposto che lo sapeva.","Alle 11 ha convocato lo stesso la conferenza sui «voti spariti», e ha tolto Teo dal gruppo quando ha detto la verità."],
  end:"In prefettura Paolo ammette l'errore di firma e consegna lo screenshot delle 2:04. Il giorno dopo la Cronaca di Borgoverde titola: «Bellini sapeva». Al mercato, la madre di Paolo trova un mazzo di fiori senza biglietto. È di Nicola."}
});
LIB.tune(77,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="uff";
 e.pins={album:"0204",uff:"0723",note:"3111"};
 e.locks={album:{hint:"Il minuto in cui lui ha ammesso di sapere."},uff:{name:"Mail protetta",hint:"Il numero del seggio con lo zero, poi l'ora in cui abbiamo cominciato a contare."},note:{hint:"I voti che sembravano spariti, poi l'ora della conferenza."}};
 e.spots=[
  {id:"s1",x:180,y:120,label:"Seggio 7",title:"Seggio 7 · scuola Manzoni",sub:"Borgoverde",body:"Spoglio dalle 23 alle 2. Il plico è stato sigillato davanti ai rappresentanti di lista."},
  {id:"s2",x:150,y:104,label:"Ufficio centrale",title:"Municipio · Ufficio centrale",sub:"Borgoverde",body:"Qui si riaprono i plichi quando qualcuno contesta un verbale."},
  {id:"s3",x:204,y:142,label:"Hotel Centrale",title:"Hotel Centrale · sala riunioni",sub:"★ 3,9",body:"Recensione del portiere di notte: «Lunedì alle 2:30 un candidato ha prenotato la sala per una conferenza stampa alle 11. Sembrava già sapere cosa dire.»"}];
 LIB.hints(e,["Il verbale è in una foto.","Chi ha contato a mano ha mandato un'altra foto.","Chi ha ricopiato i numeri?","Il plico è stato riaperto.","Quanto ha perso, alla fine?","Qualcuno ha avvisato lo sconfitto quella notte.","Una risposta delle due di notte, nascosta.","A che ora ha parlato ai giornalisti?","Che cosa è successo a chi ha detto la verità?","Paolo ha scritto per la prefettura.","Qualcuno ha toccato le schede?","Schede contate e messaggio delle due di notte."]);
});
})();
