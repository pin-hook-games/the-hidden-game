(function(){
/* Furti 1: Il quadro della Galleria Vento (Milano). Soluzione: Bruno Galli, il tecnico luci ingaggiato per la serata.
   Il quadro doveva restare coperto da una tenda fino allo svelamento delle 22. Alle 17:05 Bruno chiede a Sofia di lasciargli la sala per tarare le luci al buio;
   alle 17:22 Sofia, dal bar di fronte, fotografa il suo furgone che carica la cassa 7 «imballi vuoti». Biglietto sulla consolle: «M.K. 45, ritiro dopo le 22, Lambrate».
   False piste: il corriere (ripartito alle 15:10) e Sofia stessa (prestito negato, fuori dalla sala nel momento chiave).
   Codici: cartella «Evento» = casse consegnate (06) + cassa da non aprire (07) = 0607; album = ora in cui Sofia lascia la sala = 1705; nota = 45 (biglietto, album) + 12 (civico della ditta, cartella) = 4512. */
const SC={
 mar:()=>LIB.obj("#9cc7d6","🖼️","«Marea», appesa alle 16:40"),
 ten:()=>LIB.obj("#2a2230","🎭","La tenda nera chiusa, 16:45"),
 bol:()=>LIB.doc("Bolla del corriere","#55606b",["Consegna 6 casse","Arrivo 14:30","Ripartito 15:10","Firma: S. Rinaldi"]),
 fur:()=>LIB.doc("Foto dal bar · 17:22","#a02822",["Furgone bianco in doppia fila","adesivo «GALLI LIGHT»","caricano la cassa n. 7","etichetta: IMBALLI VUOTI"]),
 sal:()=>LIB.group(5,"Inaugurazione, 19:30: la tenda è ancora chiusa","#33658a"),
 big:()=>LIB.doc("Biglietto sulla consolle luci","#2f6b4f",["M.K. · 45","ritiro dopo le 22","Lambrate","(scritto a matita)"]),
 vuo:()=>LIB.obj("#e9e4da","⬜","Ore 22: la tenda si apre sul muro vuoto")
};
const MAP=LIB.city("Milano",[[40,52,"Brera"],[132,132,"Navigli"],[276,132,"Porta Romana"],[40,232,"Tortona"],[300,40,"Lambrate"],[200,200,"Darsena"]],
 []);

LIB.add(41,["Il quadro della Galleria Vento","Ottone Vento vuole sapere chi ha portato via «Marea» prima dello svelamento","Milano"],{
 map:MAP,scenes:SC,owner:"Sofia Rinaldi",time:"22:40",date:"gio 13 nov",homeDate:"giovedì 13 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"Sofia è tornata in galleria a chiedere del suo telefono. Ottone ha dovuto ridarglielo.",
 brief:"Alle 22, all'inaugurazione della Galleria Vento di Milano, il gallerista Ottone Vento ha aperto la tenda che copriva il quadro della serata, «Marea». Dietro c'era il muro vuoto. Sotto una panca ha trovato il telefono della sua allestitrice, Sofia Rinaldi, che è uscita a cercare un taxi. Te l'ha passato subito.",
 quote:"«Sofia ha appeso il quadro e ha chiuso la tenda. Poi per mezz'ora non si è vista, e il mese scorso la banca le ha negato un prestito. Non voglio pensarci. C'è anche il corriere del pomeriggio, che non mi piaceva. Dimmi chi è stato prima che arrivi l'assicurazione.»",
 locks:{
  album:{hint:"Il minuto in cui mi hanno chiesto di uscire dalla sala."},
  ev:{name:"Cartella «Evento»",hint:"Quante ne sono arrivate oggi, e quella che nessuno doveva aprire."},
  note:{hint:"Un numero scritto a matita, poi un civico."}},
 chats:[
  {id:"ott",name:"Ottone",sub:"Galleria",m:[
   ["13:00",0,"Sofia, «Marea» sulla parete grande. Tenda chiusa fino alle 22: lo svelamento è il momento della serata."],
   ["16:41",1,"Appesa. Ti mando la foto."],
   ["16:46",1,"Tenda chiusa. Nessuno la vede fino alle 22."],
   ["17:24",1,"Il furgone delle luci blocca il passo carrabile, mi chiamano i vicini. Ti mando la foto."],
   ["22:05",0,"Sofia. Il muro è vuoto. Dove sei?"]]},
  {id:"bru",name:"Bruno · luci",sub:"Tecnico per la serata",m:[
   ["17:05",0,"Sofia, mi lasci la sala venti minuti? Devo tarare le luci al buio, con te dentro sbaglio le ombre. Chiudo io la porta."],
   ["17:06",1,"Va bene, sono al bar qui davanti."],
   ["17:26",0,"Fatto, puoi rientrare. Luci perfette. Non aprite la tenda prima delle 22, eh: l'effetto è tutto lì."]]},
  {id:"cor",name:"Corriere Lampo",sub:"",m:[
   ["14:30",0,"Siamo davanti con 6 casse."],
   ["15:10",0,"Consegnato e firmato. Ripartiamo per Bergamo, buona inaugurazione."]]},
  {id:"sis",name:"Marta",sub:"Sorella",m:[
   ["mer",0,"Sofi, la banca ha detto di no per lo studio?"],
   ["mer",1,"No. Ma va bene così, mi hanno offerto un posto in una galleria di Torino. Comincio a gennaio."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Ottone Vento",sub:"Scaletta",meta:"mercoledì",body:"14:30 arrivo casse.\n16:30 «Marea» in parete, tenda chiusa.\n17:00 luci: tecnico esterno, Galli Light.\n19:30 apertura.\n22:00 svelamento."},
   {id:"m2",title:"Banca",sub:"Esito richiesta prestito",meta:"lunedì",body:"Gentile sig.ra Rinaldi, la sua richiesta di 40.000 € per l'apertura di uno studio non è stata accolta."}],
  drive:[
   {id:"d1",g:"Condivisi",title:"Evento 13 novembre",sub:"Contratti e fornitori",lock:"ev",body:"Luci: Galli Light di Bruno Galli, via Rombon 12, Lambrate.\nReferenze fornite: «M. Keller, collezionista, Zurigo»."},
   {id:"d2",g:"Mio Drive",title:"Torino",sub:"Contratto di lavoro",body:"Assunzione da gennaio presso una galleria di Torino. Firmato martedì."}],
  map:[
   {id:"g1",g:"Cronologia di oggi",title:"Galleria Vento",sub:"13:00 - 17:05",body:""},
   {id:"g2",g:"Cronologia di oggi",title:"Bar Solferino",sub:"17:06 - 17:25",body:""},
   {id:"g3",g:"Cronologia di oggi",title:"Galleria Vento",sub:"17:26 - 22:10",body:""}],
  cal:[
   {id:"c1",g:"Oggi",title:"Inaugurazione",sub:"19:30",body:""},
   {id:"c2",g:"Gennaio",title:"Primo giorno a Torino",sub:"",body:""}],
  note:[
   {id:"n1",title:"Lista della spesa",body:"Nastro biadesivo\nGanci\nCaffè per Ottone"},
   {id:"n2",title:"Quello che ho visto",lock:"note",body:"Dal bar ho fotografato il furgone delle luci perché bloccava il passo carrabile. Non ci ho pensato.\nPoi, alle 21, sulla consolle ho trovato quel biglietto: M.K., 45, Lambrate.\nNei contratti, le referenze di Bruno: un collezionista di Zurigo. Si chiama Keller.\nLo dico a Ottone appena ritrovo il telefono."}],
  tel:[
   {id:"t1",title:"Ottone",sub:"oggi 22:04 · in entrata, persa"}]
 },
 spots:[
  {id:"s1",x:180,y:60,title:"Galleria Vento",sub:"Galleria d'arte · aperta fino alle 23",body:"Ingresso su via Solferino. Sul retro c'è un passo carrabile: le casse entrano ed escono da lì."},
  {id:"s2",x:214,y:76,title:"Bar Solferino",sub:"Bar · ★ 4,3",body:"Proprio di fronte alla galleria.\nRecensione: «Dalla vetrata vedi tutta la via. Ottimo per aspettare qualcuno.»"},
  {id:"s3",x:70,y:226,title:"Magazzino della galleria",sub:"Via Tortona, box 12",body:"Qui Ottone tiene cornici e piedistalli. Oggi nessuno ci è passato."},
  {id:"s4",x:322,y:44,title:"Spedizioni Lambrate",sub:"Spedizioni internazionali · ★ 3,9",u:"rev",body:"Recensione di stasera: «Alle 22:30 un furgone con scritto Galli Light ha occupato l'ingresso per mezz'ora: dovevano spedire una cassa in Svizzera. Personale gentile, il tecnico un po' meno.»"}],
 photos:[
  {id:"p1",t:"16:40",title:"In parete",sc:"mar"},
  {id:"p2",t:"16:45",title:"Tenda",sc:"ten"},
  {id:"p3",t:"15:10",title:"Bolla",sc:"bol"},
  {id:"p4",t:"17:22",title:"Dal bar",sc:"fur"},
  {id:"p5",t:"22:00",title:"Lo svelamento",sc:"vuo"},
  {id:"h1",t:"19:30",title:"Inaugurazione",sc:"sal",lock:"album"},
  {id:"h2",t:"21:02",title:"Consolle",sc:"big",lock:"album"}],
 pins:{note:"4512",album:"1705",ev:"0607"},
 events:[{id:"a",q:3,kind:"sms",from:"Ottone",text:"Chiunque abbia il telefono di Sofia: lei è qui fuori a cercarlo. Le dico di aspettare un quarto d'ora."},
         {id:"b",q:8,kind:"call",from:"Numero svizzero",lines:["«Bruno? ...Ah. Pardon, chi parla?»","«Ho sbagliato numero. Mi scusi.»","Ha riattaccato. Prefisso +41."]}],
 qs:[
  {t:"16:40",q:"A che ora il quadro era al suo posto, l'ultima volta che qualcuno l'ha visto?",all:["1640"],show:"Alle 16:40",hint:"Chi l'ha appeso ne ha tenuto traccia.",news:"Cinque minuti dopo la tenda è stata chiusa: fino alle 22 nessuno poteva accorgersi di niente."},
  {t:"svelamento",q:"Che cosa doveva succedere alle 22?",any:["svel","tend","scopr","apri"],show:"Lo svelamento: si apriva la tenda",hint:"La serata aveva un programma.",news:"Chiunque l'abbia preso aveva cinque ore di vantaggio."},
  {t:"15:10",q:"A che ora è ripartito il corriere?",all:["1510"],show:"Alle 15:10",hint:"Ha firmato qualcuno, e lui ha salutato.",news:"Prima che il quadro fosse appeso. Non è lui."},
  {t:"bar",q:"Dov'era Sofia nel pomeriggio, quando è uscita dalla sala?",any:["bar","solferin"],show:"Al bar di fronte, dalle 17:06 alle 17:25",hint:"Il telefono si ricorda dove è stato.",news:"Fuori dalla sala proprio nel momento in cui il quadro è sparito. Ma perché era uscita?"},
  {t:"Bruno",q:"Chi le ha chiesto di lasciare la sala, e perché?",any:["bruno","tecnic","luci"],show:"Bruno, il tecnico delle luci: «tarare al buio»",hint:"Qualcuno voleva la sala tutta per sé.",news:"«Chiudo io la porta.» Venti minuti da solo con il quadro."},
  {t:"imballi vuoti",q:"Che cosa caricano sul furgone, nella foto che Sofia ha fatto dal bar?",any:["imball","vuot","cass"],show:"La cassa n. 7, «imballi vuoti»",hint:"Una foto scattata per lamentarsi del parcheggio.",news:"Sofia l'ha mandata a Ottone per il passo carrabile, senza pensarci."},
  {t:"Galli Light",q:"Di chi è il furgone?",any:["gallilight","galli"],show:"Di Galli Light, la ditta di Bruno",hint:"Sulla fiancata c'è scritto. E c'è scritto anche nel programma della serata.",news:"Ora un posto sulla mappa ha una recensione nuova.",unlock:"rev"},
  {t:"Svizzera",q:"Dove doveva andare la cassa spedita stasera?",any:["svizz","zurig"],show:"In Svizzera",hint:"In città c'è chi lascia recensioni su tutto.",news:"Alle 22:30, mentre Ottone guardava il muro vuoto."},
  {t:"Keller",q:"Per chi lavora davvero Bruno? Il nome del collezionista.",any:["keller"],show:"M. Keller, collezionista di Zurigo",hint:"Chi fornisce un servizio, a volte, lascia delle referenze. E qualcuno ha lasciato un biglietto.",news:"M.K. sul biglietto della consolle. 45 sono le migliaia."},
  {t:"Torino",q:"La falsa pista: perché a Sofia non servono più i soldi del prestito?",any:["torin","lavor","assunt","galleria"],show:"Ha già un lavoro a Torino da gennaio",hint:"Ha risposto a sua sorella.",news:"Il movente che Ottone le attribuiva non c'è."},
  {t:"b",q:"Chi ha portato via «Marea»?",o:[["c","Il corriere"],["s","Sofia Rinaldi, l'allestitrice"],["b","Bruno Galli, il tecnico delle luci, per un collezionista svizzero"],["o","Ottone, per l'assicurazione"],["k","Un ospite dell'inaugurazione"]],a:"b",show:"Bruno Galli, il tecnico delle luci",hint:"Chi è rimasto solo con il quadro, e dove è andata la cassa?",news:""}],
 win:{title:"«Marea» l'ha portata via Bruno Galli, il tecnico delle luci.",
  steps:["Alle 16:40 il quadro era appeso, alle 16:45 coperto dalla tenda fino allo svelamento delle 22. Il corriere era ripartito alle 15:10.","Alle 17:05 Bruno ha chiesto a Sofia di lasciargli la sala «per tarare le luci al buio».","Alle 17:22 Sofia, dal bar di fronte, ha fotografato il furgone Galli Light che caricava la cassa 7, «imballi vuoti».","Sulla consolle c'era un biglietto: «M.K. 45, ritiro dopo le 22, Lambrate». Tra le referenze di Bruno c'è un collezionista di Zurigo, M. Keller.","Alle 22:30 un furgone Galli Light spediva una cassa in Svizzera. Sofia ha già un lavoro a Torino: il prestito non le serviva più."],
  end:"Ottone chiama i carabinieri con la foto del furgone. A Lambrate la cassa 7 è ancora sul bancale dello spedizioniere, con un'etichetta per Zurigo. Quando Sofia rientra, Ottone le restituisce il telefono e le chiede scusa. Lei gli porta il caffè della lista della spesa."}
});
})();
