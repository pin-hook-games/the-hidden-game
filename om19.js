(function(){
/* Omicidi 19: Notte bianca (Trieste). Soluzione: Goran, il buttafuori.
   Gli ingressi in contanti non passavano dal contapersone ufficiale: Goran li faceva entrare dal retro e si teneva i soldi, passando una parte al gestore Walter. Milo aveva fotografato il display e contato con un clicker suo: 1.142 persone, contro le 520 dichiarate.
   Goran dice di essere rimasto alla porta fino alle 4:10, ma dalle 3:02 alle 3:30 la porta ha registrato zero ingressi e la sua app di allenamento lo segna nel retro.
   False piste: il gestore Walter (imbroglione, ma alle 3:05 era in taxi verso casa), il rivale Kaos (a Lubiana), la ex Nika (a Vienna).
   Codici: album = 1142; mail del locale = fine del set 3:00 = 0300; nota = 04 (altre serate) + 30 (minuti in cui la porta torna a contare, 3:30) = 0430. */
const SC={
 floor:()=>LIB.obj("#231a2e","🎧","La pista alle 01:15, piena"),
 sis:()=>LIB.two("#9cc7d6","#7a3b5a","#2f6b4f","Con Petra, Barcola"),
 cnt:()=>LIB.doc("Contapersone all'ingresso · 01:20","#33658a",["Ingressi registrati: 1.142","(foto di Milo)","Display della porta","+ clicker personale: 1.150"]),
 tax:()=>LIB.doc("Ricevuta taxi · mandata da Walter","#55606b",["Partenza dal locale 02:58","arrivo a Opicina 03:20","«così vedi che sono andato via»","firma: tassista n. 8"]),
 por:()=>LIB.doc("Registro della porta · 03:00-03:40","#a02822",["03:02 - 03:30","ingressi registrati: 0","nessun addetto al tornello","03:31 riprende il conteggio"]),
 gor:()=>LIB.shot("App allenamento · Goran",["Sabato 03:05 - 03:25","«camminata», 0,2 km","zona: retro del locale"])
};
const MAP=LIB.city("Trieste",[[40,52,"Barcola"],[132,132,"Piazza Unità"],[276,132,"San Giacomo"],[40,232,"Porto Vecchio"],[300,40,"Opicina"],[200,200,"Rive"]],[],[["M0 0Q120 120 60 260",110]]);

LIB.add(39,["Notte bianca","Petra vuole sapere chi ha ucciso il fratello, Dj Milo","Trieste"],{
 map:MAP,scenes:SC,owner:"Milo Kralj",time:"17:00",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note bank",
 late:"La polizia ha chiesto il telefono per i video della serata. Petra ha dovuto consegnarlo.",
 brief:"Petra ti ha portato il telefono del fratello Milo Kralj, 28 anni, dj. Domenica alle 5:30 le addette alle pulizie lo hanno trovato nel retro del locale dove aveva suonato fino alle tre. Il telefono era nella borsa dei dischi.",
 quote:"«Milo diceva che il gestore, Walter, lo pagava la metà del dovuto. Sabato mi ha scritto «stanotte mi faccio pagare il giusto, ho le prove». Tutti pensano a Walter. Il buttafuori, Goran, dice che non si è mosso dalla porta fino alle quattro. Mi dica lei.»",
 locks:{
  album:{hint:"Gli ingressi veri di sabato."},
  loc:{name:"Mail protetta",hint:"L'ora in cui ho chiuso il set."},
  note:{hint:"Le serate che vedo pagate in banca, con lo zero, poi i minuti in cui la porta ricomincia a contare."}},
 chats:[
  {id:"pet",name:"Petra",sub:"Sorella",m:[
   ["sab 22:00",1,"Stanotte mi faccio pagare il giusto. Ho le prove, foto e clicker."],
   ["sab 22:01",0,"Stai attento, Milo."]]},
  {id:"wal",name:"Walter",sub:"Gestore",m:[
   ["sab 2:50",0,"Milo, i soldi li ha Goran, sistemate tra voi. Io vado a casa, sono distrutto."],
   ["dom 10:00",0,"Petra, sono Walter. Lo so, pagavo poco tuo fratello, e la polizia lo sa. Ma alle tre ero in taxi. Ti mando la ricevuta."]]},
  {id:"gor",name:"Goran",sub:"Buttafuori",m:[
   ["sab 3:01",0,"Milo vieni nel retro che ti do la tua parte. Contanti, come volevi."],
   ["",2,"1 messaggio eliminato da Goran."],
   ["sab 3:24",0,"Se qualcuno chiede, io ero alla porta fino alle quattro. Capito?","gor"],
   ["dom",0,"Petra, condoglianze. Io ero alla porta fino alle 4:10, l'ho già detto alla polizia."]]},
  {id:"kaos",name:"Kaos",sub:"",m:[
   ["sab",0,"Stanotte suono a Lubiana, ti rubo il pubblico da lontano."]]},
  {id:"nika",name:"Nika",sub:"Ex",m:[
   ["ven",0,"Milo, da Vienna ti penso. Fammi sapere come va sabato."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Locale",sub:"Contratto dj",meta:"settembre",body:"Compenso del dj: 3,00 € per ogni ingresso registrato dal contapersone della porta."},
   {id:"m2",title:"Locale",sub:"Rendiconto di sabato",meta:"domenica",lock:"loc",body:"Ingressi dichiarati dal gestore: 520. Compenso dj: 1.560 €.\nAddetto alla porta: Goran K. Fine servizio dichiarata: 4:10.\nFine set del dj: 3:00."},
   {id:"m3",title:"Taxi",sub:"Petra",meta:"sabato",body:"Corsa delle 02:34 dal locale a San Giacomo. «Così vedi che sono andata via presto.»"}],
  map:[
   {id:"g1",g:"Sabato",title:"Il locale",sub:"Fino alle 5:30",body:"In consolle fino alle 3:00, poi nel retro."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Locale, serata dell'8 novembre",sub:"+ 1.410,00 €"},
   {id:"b2",g:"Ottobre",title:"Locale, serata del 25 ottobre",sub:"+ 1.350,00 €"}],
  cal:[
   {id:"c1",g:"Sabato",title:"Serata",sub:"23:00 - 3:00",body:"Fotografare il display."},
   {id:"c2",g:"Lunedì",title:"Sindacato",sub:"",body:"Se non paga."}],
  note:[
   {id:"n1",title:"Scaletta",body:"Apertura lenta\nPicco alle due\nChiudere con il pezzo di Petra"},
   {id:"n2",title:"Numeri",lock:"note",body:"Non è Walter a tenersi i soldi. È Goran: fa entrare in contanti dal retro, senza tornello, e a Walter ne passa una parte.\nStesso trucco in altre quattro serate.\nStanotte gli chiedo la mia parte davanti a tutti. Se fa il furbo, lunedì vado al sindacato con le foto."}],
  tel:[
   {id:"t1",title:"Petra",sub:"sab 22:02 · in uscita, 3 min"}]
 },
 spots:[
  {id:"s1",x:200,y:212,label:"Il locale",title:"Il locale",sub:"Rive · ★ 4,0",body:"Ingresso principale con tornello e contapersone. Sul retro, una porta di servizio senza tornello che dà sul piazzale."},
  {id:"s2",x:300,y:52,label:"Opicina",title:"Casa di Walter",sub:"Opicina",body:"Venti minuti di taxi dal locale."},
  {id:"s3",x:276,y:140,label:"San Giacomo",title:"Casa di Milo",sub:"San Giacomo",body:"Petra è tornata qui alle 2:50 e lo ha aspettato."}],
 photos:[
  {id:"p1",t:"sab 01:15",title:"La pista",sc:"floor"},
  {id:"p2",t:"estate",title:"Con Petra",sc:"sis"},
  {id:"p3",t:"dom",title:"Da Walter",sc:"tax"},
  {id:"p4",t:"sab 01:20",title:"Display",sc:"cnt"},
  {id:"h1",t:"dom",title:"Registro della porta",sc:"por",lock:"album"},
  {id:"h2",t:"dom",title:"Dal telefono di Goran",sc:"gor",lock:"album"}],
 pins:{album:"1142",loc:"0300",note:"0230"},
 events:[{id:"a",q:3,kind:"sms",from:"Goran",text:"Petra, ho saputo che fai domande. Io quella notte non mi sono mosso dalla porta, chiedi a chiunque. Lascia lavorare la polizia."},
         {id:"b",q:7,kind:"call",from:"Walter",lines:["«Petra? Sono Walter. Ti devo dire una cosa che alla polizia non ho detto.»","«I contanti del retro li gestiva Goran. A me ne dava una parte, è vero, e mi vergogno.»","«Milo voleva la sua quota da lui, non da me.»"]}],
 qs:[
  {t:"03:00",q:"A che ora Milo ha chiuso il set?",all:["300"],show:"Alle 3:00",hint:"In calendario c'era l'orario della serata.",news:"Poi è andato nel retro."},
  {t:"Lubiana",q:"Il rivale Kaos: dove suonava sabato?",any:["lubian"],show:"A Lubiana",hint:"Lo scrive lui.",news:"Una falsa pista."},
  {t:"1142",q:"Quanti ingressi segnava il display alle 01:20?",a:["1142","1.142"],show:"1.142",hint:"Milo ha fotografato la porta.",news:"Il gestore ne ha dichiarati 520."},
  {t:"taxi",q:"Dov'era Walter alle 3:05?",any:["taxi","casa","opicina"],show:"In taxi verso casa, a Opicina",hint:"Walter ha mandato una ricevuta.",news:"Partito alle 2:58. Walter imbrogliava, ma alle tre non era lì."},
  {t:"Goran",q:"Chi ha chiamato Milo nel retro alle 3:01, «per la sua parte»?",any:["goran","buttafuor"],show:"Goran, il buttafuori",hint:"Un messaggio di poco dopo la fine del set.",news:"«Contanti, come volevi.»"},
  {t:"4:10",q:"Fino a che ora Goran dice di essere rimasto alla porta?",all:["410"],show:"Fino alle 4:10",hint:"L'ha scritto lui, e il locale l'ha messo nel rendiconto, chiuso.",news:"Ora hai recuperato il messaggio che Goran ha mandato alle 3:24 e poi cancellato.",unlock:"gor"},
  {t:"0",q:"Quanti ingressi ha registrato la porta tra le 3:02 e le 3:30?",a:["0","zero","nessuno"],show:"Zero: nessuno al tornello",hint:"Il registro della porta è nascosto.",news:"Goran non era alla porta."},
  {t:"retro",q:"Dove lo segna la sua app di allenamento dalle 3:05 alle 3:25?",any:["retro","piazzal"],show:"Nel retro del locale",hint:"Una schermata dal telefono di Goran, nascosta.",news:"«Se qualcuno chiede, io ero alla porta.»"},
  {t:"4",q:"In quante altre serate Milo aveva visto lo stesso trucco?",a:["4","quattro","altre quattro"],show:"Quattro",hint:"Milo ha scritto i suoi numeri.",news:"Ingressi in contanti dal retro, senza tornello."},
  {t:"g",q:"Chi ha ucciso Milo?",o:[["w","Walter, il gestore"],["g","Goran, il buttafuori"],["k","Kaos, il rivale"],["n","Nika, la ex"],["p","Petra"]],a:"g",show:"Goran, il buttafuori",hint:"Chi lo ha chiamato nel retro, e chi non era alla porta?",news:""}],
 win:{title:"Milo l'ha ucciso Goran, il buttafuori.",
  steps:["Milo aveva contato 1.142 ingressi; il gestore ne ha dichiarati 520.","Alle 3:01 Goran lo ha chiamato nel retro «per la sua parte, in contanti».","Goran dice di essere rimasto alla porta fino alle 4:10, ma tra le 3:02 e le 3:30 il tornello non ha registrato nessuno e la sua app lo segna nel retro.","Walter imbrogliava con lui, ma alle 2:58 era già in taxi verso Opicina.","Milo aveva scoperto che i contanti del retro li gestiva Goran."],
  end:"Petra porta alla polizia le foto del display e la schermata dell'app di Goran. Walter firma una confessione sui conti. Goran viene fermato al confine con la Slovenia, con duemila euro in contanti nella giacca. Al funerale Petra fa suonare l'ultimo pezzo della scaletta di Milo."}
});
})();
