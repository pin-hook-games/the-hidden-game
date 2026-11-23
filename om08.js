(function(){
/* Omicidi 8: Il turno di Sara (Napoli). Soluzione: Pasquale, la guardia giurata del parcheggio P2.
   Le chiavi dell'armadio farmaci di notte restano al banco della guardia: era lui a prendere le fiale e a rivenderle. Sara lo aveva capito confrontando il registro delle chiavi con i suoi conteggi.
   Ha accusato Rosario dicendo di aver visto uscire la sua Panda alle 22:31: ma la Panda di Rosario è in officina da lunedì.
   False piste: il collega Rosario (scambi di turno per stare con Sara), il fidanzato Ciro (a Posillipo per una proposta), il signor Esposito.
   Codici: album = fiale lunedì 40 + mercoledì 31 = 4031; registro chiavi = ripiano 02 + fiale sparite 06 = 0206; nota = 50 (minuti dell'ultima foto, 21:50) + 14 (permesso della Panda, n. 14) = 5014. */
const SC={
 rep:()=>LIB.group(4,"Il terzo piano, cambio turno","#33658a"),
 cir:()=>LIB.two("#9cc7d6","#7a3b5a","#33658a","Con Ciro, Mergellina"),
 a1:()=>LIB.doc("Armadio farmaci · lunedì","#2f6b4f",["Ripiano 2","fiale in carico: 40","foto di Sara, 21:45","(conteggio a fine turno)"]),
 a2:()=>LIB.doc("Armadio farmaci · mercoledì 21:50","#a02822",["Ripiano 2","fiale in carico: 31","attese: 37","mancano 6"]),
 off:()=>LIB.doc("Officina Esposito · ricevuta","#55606b",["Fiat Panda grigia","targa coperta","in riparazione da lunedì","ritiro previsto venerdì"]),
 ann:()=>LIB.obj("#f0d9a0","💍","L'anello che Ciro voleva darle")
};
const MAP=LIB.city("Napoli",[[40,52,"Vomero"],[132,132,"Ospedale"],[276,132,"Centro"],[40,232,"Posillipo"],[300,40,"Capodimonte"],[200,200,"Porto"]],[],[["M0 214Q200 176 400 226",60]]);

LIB.add(28,["Il turno di Sara","La sorella di Sara vuole sapere chi l'ha aspettata al parcheggio","Napoli"],{
 map:MAP,scenes:SC,owner:"Sara Coppola",time:"12:00",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"La polizia ha richiesto il telefono di Sara. Carmela ha dovuto consegnarlo.",
 brief:"Mercoledì sera Sara Coppola, 31 anni, infermiera, è stata trovata senza vita nel parcheggio del personale dell'ospedale, dopo il turno. La guardia giurata dice di aver visto uscire di corsa la Panda di un collega, Rosario. La sorella Carmela ti ha portato il telefono di Sara.",
 quote:"«Rosario le stava sempre addosso, chiedeva di fare i turni con lei. La guardia l'ha visto scappare. Sembra tutto chiaro. Ma Sara mi aveva detto che stava preparando una segnalazione per la direzione, e non mi ha mai detto contro chi.»",
 locks:{
  album:{hint:"Le fiale di lunedì, poi quelle di mercoledì."},
  chi:{name:"Mail protetta",hint:"Il ripiano, poi le fiale sparite, con gli zeri."},
  note:{hint:"I minuti dell'ultima foto all'armadio, poi il numero del permesso della Panda."}},
 chats:[
  {id:"ciro",name:"Ciro",sub:"Fidanzato",m:[
   ["mer 22:05",0,"Amore, a che ora arrivi? Il tavolo è pronto."],
   ["mer 23:10",0,"Sara? Ti ho chiamata nove volte."]]},
  {id:"car",name:"Carmela",sub:"Sorella",m:[
   ["mar",0,"Ciro mi ha chiesto la tua misura dell'anello. Non ti dico altro!"]]},
  {id:"ros",name:"Rosario",sub:"Collega",m:[
   ["lun",0,"Sara, ho chiesto di nuovo la notte con te. Lo so che sono pesante. Mi piaci, tutto qui. Non lo farò più."],
   ["mer 20:00",0,"Stasera vado via in bus, la Panda è dal meccanico da lunedì. Ci vediamo giovedì."]]},
  {id:"pas",name:"Pasquale · vigilanza",sub:"Guardia P2",m:[
   ["mer 21:55",0,"Dottoressa, le chiavi dell'armadio le lascia al banco come sempre? Ci penso io stanotte."],
   ["mer 21:56",1,"Stasera le tengo io, Pasquale. Devo controllare una cosa."],
   ["",2,"1 messaggio eliminato da Pasquale."],
   ["mer 22:20",0,"Dottoressa, la aspetto al P2 per riprendere le chiavi, ho il registro da firmare.","pas"]]},
  {id:"dir",name:"Direzione sanitaria",sub:"",m:[
   ["mar",0,"Dott.ssa Coppola, la aspettiamo giovedì alle 9 con la sua segnalazione."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Alla direzione sanitaria",sub:"Bozza",meta:"martedì",body:"Segnalo ammanchi ripetuti di fiale dal ripiano 2 dell'armadio farmaci del terzo piano, sempre di notte.\nAllego i miei conteggi e il registro delle chiavi."},
   {id:"m2",title:"Ufficio vigilanza",sub:"Registro delle chiavi · ottobre-novembre",meta:"lunedì",lock:"chi",body:"Le chiavi dell'armadio farmaci del terzo piano, di notte, restano al banco della guardia del P2.\nRitiri notturni registrati: 9, tutti firmati «P. Iovine» (vigilanza).\nNelle stesse notti, i conteggi di Sara segnano ammanchi."},
   {id:"m3",title:"Permessi parcheggio",sub:"P2 personale",meta:"",body:"Permesso n. 14: Fiat Panda grigia, Amato Rosario, terzo piano."}],
  map:[
   {id:"g1",g:"Mercoledì",title:"Ospedale, terzo piano",sub:"Fino alle 22:15",body:""},
   {id:"g2",g:"Posizione condivisa",title:"Ciro",sub:"Posillipo, 21:30 - 23:10",body:""}],
  cal:[
   {id:"c1",g:"Mercoledì",title:"Turno",sub:"14 - 22",body:"Poi Posillipo (non dovrei saperlo)."},
   {id:"c2",g:"Giovedì",title:"Direzione sanitaria",sub:"9:00",body:"Consegnare a mano."}],
  drive:[
   {id:"d1",g:"Documenti",title:"Conteggi",sub:"Foglio",body:"Ammanchi di fiale nelle notti del 3, 7, 10, 12, 14, 17 e 19 novembre.\nUltimi conteggi a fine turno: lunedì 40, mercoledì 31."}],
  note:[
   {id:"n1",title:"Da fare",body:"Scarpe nuove\nRicaricare la tessera del bus"},
   {id:"n2",title:"Pasquale",lock:"note",body:"Pensavo fosse Rosario, perché fa le notti. Poi ho guardato il registro: le chiavi di notte le prende sempre Pasquale.\nNelle stesse notti mancano le fiale. È lui.\nGiovedì lo porto alla direzione. Stasera le chiavi le tengo io."}],
  tel:[
   {id:"t1",title:"Ciro",sub:"mer 22:05 - 23:10 · 9 chiamate perse"}]
 },
 spots:[
  {id:"s1",x:132,y:120,label:"Ospedale · P2",title:"Ospedale · parcheggio P2",sub:"Personale",body:"Una sola uscita, con la sbarra. Il banco della guardia è accanto, e di notte custodisce anche le chiavi dei reparti."},
  {id:"s2",x:40,y:220,label:"Posillipo",title:"Ristorante sul mare",sub:"Posillipo · ★ 4,7",body:"Recensione: «Mercoledì un ragazzo ha aspettato fino a mezzanotte con un anello sul tavolo. Lei non è mai arrivata.»"},
  {id:"s3",x:276,y:150,label:"Officina Esposito",title:"Officina Esposito",sub:"Meccanico · ★ 4,4",body:"Recensione: «Da lunedì ho la Panda di un infermiere. Venerdì è pronta.»"}],
 photos:[
  {id:"p1",t:"ott",title:"Il reparto",sc:"rep"},
  {id:"p2",t:"estate",title:"Con Ciro",sc:"cir"},
  {id:"p3",t:"mer",title:"Da Rosario",sc:"off"},
  {id:"p4",t:"mar",title:"Da Carmela",sc:"ann"},
  {id:"h1",t:"lun 21:45",title:"Lunedì",sc:"a1",lock:"album"},
  {id:"h2",t:"mer 21:50",title:"Mercoledì",sc:"a2",lock:"album"}],
 pins:{album:"4031",chi:"0206",note:"5014"},
 events:[{id:"a",q:3,kind:"call",from:"Pasquale · vigilanza",lines:["«Signora Carmela? Sono Pasquale, la guardia.»","«Volevo dirle che io la Panda di quello là l'ho vista bene, alle 22:31. Grigia, uscita di corsa.»","«...Ah, non è la signora? Va be'.»"]},
         {id:"b",q:8,kind:"sms",from:"Rosario",text:"Carmela, sono Rosario. Io mercoledì sono uscito alle 22:05 e ho preso il bus 180, ho ancora il biglietto. La mia Panda è dal meccanico da lunedì. Non so cosa abbia visto la guardia, ma non era la mia."}],
 qs:[
  {t:"22",q:"A che ora staccava Sara mercoledì?",a:["22","alle 22","22:00","le 22"],show:"Alle 22",hint:"Il turno ha un orario.",news:"Poi doveva andare a Posillipo."},
  {t:"Posillipo",q:"Il fidanzato Ciro, che l'ha chiamata nove volte: dov'era?",any:["posillip"],show:"A Posillipo, ad aspettarla",hint:"Condividono la posizione.",news:"Con un anello sul tavolo. Una falsa pista."},
  {t:"6",q:"Sara contava le fiale. Quante ne mancavano mercoledì?",a:["6","sei"],show:"Sei",hint:"Due foto dell'armadio, nascoste.",news:"Dal ripiano 2."},
  {t:"direzione sanitaria",q:"A chi stava per consegnare la segnalazione?",any:["direzion","sanitari"],show:"Alla direzione sanitaria, giovedì alle 9",hint:"Una bozza e un appuntamento.",news:"Contro chi?"},
  {t:"Rosario",q:"Di chi è la Panda grigia con il permesso n. 14?",any:["rosario","amato"],show:"Di Rosario Amato",hint:"I permessi del parcheggio.",news:"La guardia dice di averla vista uscire alle 22:31."},
  {t:"officina",q:"Dov'era la Panda di Rosario mercoledì sera?",any:["officin","meccanic"],show:"In officina, dal lunedì",hint:"Rosario l'aveva scritto prima, e c'è una ricevuta.",news:"Rosario è tornato in bus. La guardia ha mentito."},
  {t:"Pasquale",q:"Chi custodisce di notte le chiavi dell'armadio farmaci?",any:["pasqual","guardi","vigilanz","iovine"],show:"Pasquale, la guardia del P2",hint:"Le chiavi hanno un registro. È chiuso.",news:"Nove ritiri notturni, tutti suoi. Nelle stesse notti mancano le fiale."},
  {t:"le chiavi",q:"Che cosa voleva farsi lasciare Pasquale da Sara alle 21:55?",any:["chiav"],show:"Le chiavi dell'armadio",hint:"Pasquale le ha scritto.",news:"«Stasera le tengo io.» Ora hai recuperato il messaggio che Pasquale ha cancellato.",unlock:"pas"},
  {t:"al P2",q:"Dove le dà appuntamento alle 22:20?",any:["p2","parchegg"],show:"Al parcheggio P2, «per il registro»",hint:"Il messaggio recuperato.",news:"Sara è uscita dal reparto alle 22:15."},
  {t:"giovedì",q:"Nella nota protetta: quando voleva portarlo alla direzione?",any:["giov"],show:"Giovedì",hint:"Sara ha scritto il suo nome.",news:"«Stasera le chiavi le tengo io.»"},
  {t:"p",q:"Chi ha ucciso Sara?",o:[["r","Rosario, il collega"],["c","Ciro, il fidanzato"],["p","Pasquale, la guardia del parcheggio"],["e","Il signor Esposito"],["x","Uno sconosciuto"]],a:"p",show:"Pasquale, la guardia",hint:"Chi aveva le chiavi nelle notti degli ammanchi, e chi ha mentito sulla Panda?",news:""}],
 win:{title:"Sara l'ha uccisa Pasquale, la guardia del parcheggio.",
  steps:["Dall'armadio del terzo piano sparivano fiale, sempre di notte. Sara le contava e mercoledì ne mancavano sei.","Di notte le chiavi dell'armadio restano al banco della guardia del P2: nove ritiri, tutti di Pasquale, nelle stesse notti degli ammanchi.","Mercoledì Sara ha tenuto le chiavi. Alle 22:20 Pasquale le ha dato appuntamento al P2.","Ha detto di aver visto uscire la Panda di Rosario alle 22:31, ma la Panda era in officina da lunedì e Rosario era sul bus."],
  end:"Carmela porta alla polizia le foto dell'armadio e il registro delle chiavi. Nell'armadietto di Pasquale, in fondo a un borsone, ci sono trentadue fiale. Ciro restituisce l'anello alla gioielleria. Rosario chiede di non fare più le notti."}
});
})();
