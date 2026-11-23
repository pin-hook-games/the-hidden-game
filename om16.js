(function(){
/* Omicidi 16: Sedici messaggi (Palermo). Soluzione: Totò, il custode della redazione, quello gentile che offre il caffè a tutti.
   Di notte, dal computer della portineria, apriva il file di appunti di Giulia con l'account del collega Saverio (la password era sul post-it che Saverio lascia sotto la tastiera), e li vendeva al capo segreteria dell'assessore.
   Ha mandato a Giulia una foto «di Saverio al bar con il capo segreteria» che in realtà è dell'anno scorso, e un messaggio per farla scendere in garage.
   False piste: il collega Saverio (non risponde ai suoi sedici messaggi perché è in ospedale con il padre), l'assessore, l'ex marito.
   Codici: album = 0214; registro accessi = consiglio finito alle 23:10 = 2310; nota = 45 (centinaia della stampa dimenticata, 4.500) + 22 (turno di notte del custode, dalle 22) = 4522. */
const SC={
 red:()=>LIB.group(5,"La redazione del Giornale di Palermo","#33658a"),
 bar:()=>LIB.two("#f0d9a0","#55606b","#7a3b5a","Foto di Totò: «Saverio e il capo segreteria, stamattina»"),
 meta:()=>LIB.doc("Proprietà della foto","#a02822",["Scattata: 14 settembre 2024","Dispositivo: telefono di S. Lo Verde (Totò)","non «stamattina»","(controllata da Giulia)"]),
 bon:()=>LIB.doc("Stampa dimenticata in portineria","#55606b",["Bonifico ricevuto","4.500 €","da: Studio Ferrara (capo segreteria)","a: S. Lo Verde"]),
 osp:()=>LIB.doc("Da Saverio · foto","#2f6b4f",["Policlinico, cardiologia","«sono qui da tre notti con papà»","«scusa se non rispondo»","giovedì 23:40"]),
 log:()=>LIB.doc("Accessi notturni · dettaglio","#a02822",["3, 9, 17 novembre · 02:14","account: s.cangemi","postazione: PORTINERIA-01","(Saverio non ha mai usato quel PC)"])
};
const MAP=LIB.city("Palermo",[[40,52,"Politeama"],[132,132,"Redazione"],[276,132,"Kalsa"],[40,232,"Porto"],[300,40,"Monte Pellegrino"],[200,200,"Municipio"]],[],[["M0 214Q200 176 400 226",60]]);

LIB.add(36,["Sedici messaggi","Il direttore vuole sapere chi ha tradito la sua giornalista","Palermo"],{
 map:MAP,scenes:SC,owner:"Giulia Mancuso",time:"10:00",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal map cal note drive",
 late:"La procura ha sequestrato il telefono di Giulia. Il direttore ha dovuto consegnarlo.",
 brief:"Giovedì sera Giulia Mancuso, 41 anni, giornalista d'inchiesta, è stata trovata senza vita nel garage della redazione. Stava lavorando a un'inchiesta sui rifiuti. Il direttore ti ha passato il suo telefono: dentro ci sono sedici messaggi a un collega, Saverio, senza risposta.",
 quote:"«Qualcuno passava i suoi appunti alle persone su cui indagava. Il file era condiviso solo con Saverio, e Saverio da giorni non le rispondeva. Il custode, Totò, ha visto Saverio in garage e ce l'ha detto subito. Mi sembra fin troppo chiaro. Lei controlli.»",
 locks:{
  album:{hint:"L'ora in cui qualcuno legge le mie cose, di notte."},
  sis:{name:"Mail protetta",hint:"L'ora in cui è finito il consiglio comunale."},
  note:{hint:"Le centinaia di quella stampa dimenticata, poi l'ora in cui comincia il turno di notte."}},
 chats:[
  {id:"sav",name:"Saverio",sub:"Collega",m:[
   ["lun",1,"Saverio, devo parlarti. Rispondi."],
   ["mar",1,"Saverio ti prego. È importante."],
   ["gio",1,"Sedicesimo messaggio. Saverio, il file."],
   ["gio 23:40",0,"Giulia scusami, sono al Policlinico da tre notti con papà, cardiologia. Il telefono era spento. Che succede?"]]},
  {id:"toto",name:"Totò · portineria",sub:"Custode",m:[
   ["gio 20:50",0,"Dottoressa, guardi chi c'era stamattina al bar con il capo segreteria dell'assessore. Il suo collega. Mi dispiace."],
   ["gio 21:00",1,"Grazie Totò."],
   ["",2,"1 messaggio eliminato da Totò."],
   ["gio 21:05",0,"Dottoressa, Saverio la aspetta giù in garage, dice che le deve parlare. Lo vedo dalla telecamera.","tot"]]},
  {id:"ros",name:"Rosalba",sub:"Capocronista",m:[
   ["gio 21:50",0,"Giulia, chiudiamo le pagine in sei. Tu dove sei?"]]},
  {id:"fab",name:"Fabio",sub:"Ex marito",m:[
   ["gio",0,"I bambini sono con me a Catania fino a domenica, come d'accordo."]]},
  {id:"dir",name:"Direttore",sub:"",m:[
   ["gio",1,"Domani le porto una cosa interna. Grave."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Sistema documenti",sub:"Accessi notturni al file",meta:"mercoledì",lock:"sis",body:"Accessi notturni: 3, 9 e 17 novembre, sempre alle 02:14.\nAccount: s.cangemi.\nPostazione: PORTINERIA-01."},
   {id:"m2",title:"Studio legale dell'assessore",sub:"Diffida",meta:"martedì",body:"La diffida cita un documento che Giulia non ha mai pubblicato: era solo nei suoi appunti."},
   {id:"m3",title:"Consiglio comunale",sub:"Seduta di giovedì",meta:"",body:"Seduta dalle 20:00 alle 23:10. L'assessore è intervenuto alle 20:40 e alle 22:15."},
   {id:"m4",title:"Ufficio del personale",sub:"Turni di portineria",meta:"novembre",body:"Custode notturno: S. Lo Verde (Totò), dalle 22 alle 6, tutte le notti tranne il lunedì."}],
  drive:[
   {id:"d1",g:"Inchiesta",title:"Appunti inchiesta rifiuti",sub:"Condiviso con Saverio Cangemi",body:"Saverio ha sempre lavorato dal portatile. Da una vecchia inchiesta in comune, nel 2023."}],
  map:[
   {id:"g1",g:"Giovedì",title:"Redazione",sub:"Dalle 9:00",body:"Il telefono è rimasto sulla scrivania dalle 21:06."}],
  cal:[
   {id:"c1",g:"Giovedì",title:"S. in garage?",sub:"21:05",body:"Ultima possibilità."},
   {id:"c2",g:"Venerdì",title:"Direttore",sub:"",body:"Cosa interna."}],
  note:[
   {id:"n1",title:"Lista",body:"Chiamare la madre di Saverio\nComprare il latte"},
   {id:"n2",title:"Chi",lock:"note",body:"Gli accessi notturni vengono dal computer della portineria. Saverio non ci ha mai messo piede, lavora solo dal portatile.\nDi notte in portineria c'è Totò. Il post-it di Saverio con la password è sotto la sua vecchia tastiera, giù, da anni.\nLa foto che mi ha mandato Totò è dell'anno scorso.\nDomani lo dico al direttore. Stasera non scendo da sola."}],
  tel:[
   {id:"t1",title:"Totò · portineria",sub:"gio 21:04 · in entrata, 1 min"}]
 },
 spots:[
  {id:"s1",x:132,y:120,label:"Redazione",title:"Redazione del Giornale di Palermo",sub:"Garage al piano -1",body:"La telecamera del garage è rotta da settembre. In portineria c'è un vecchio computer, la postazione PORTINERIA-01."},
  {id:"s2",x:276,y:140,label:"Policlinico",title:"Policlinico · cardiologia",sub:"",body:"Recensione di un familiare: «Tre notti qui dentro, senza campo. Il telefono l'ho riacceso solo giovedì sera.»"},
  {id:"s3",x:200,y:210,label:"Municipio",title:"Palazzo comunale",sub:"Consiglio comunale",body:"Giovedì seduta dalle 20:00 alle 23:10, in diretta streaming."}],
 photos:[
  {id:"p1",t:"ott",title:"La redazione",sc:"red"},
  {id:"p2",t:"gio 20:50",title:"Da Totò",sc:"bar"},
  {id:"p3",t:"gio 23:40",title:"Da Saverio",sc:"osp"},
  {id:"p4",t:"gio",title:"Proprietà della foto",sc:"meta"},
  {id:"h1",t:"mer",title:"Accessi",sc:"log",lock:"album"},
  {id:"h2",t:"gio",title:"In portineria",sc:"bon",lock:"album"}],
 pins:{album:"0214",sis:"2310",note:"4522"},
 events:[{id:"a",q:3,kind:"sms",from:"Totò · portineria",text:"Direttore, sono Totò. Volevo solo dire che giovedì sera ho visto il dottor Cangemi entrare in garage verso le nove. Se serve lo dico ai carabinieri."},
         {id:"b",q:8,kind:"call",from:"Saverio",lines:["«Direttore? Sono Saverio. Sono ancora in ospedale con mio padre.»","«Il file io lo apro solo dal portatile, mai dalla redazione. Quella password l'avevo scritta su un post-it anni fa, sotto la tastiera della portineria, quando ci lavoravo d'estate.»","«Chi ha detto di avermi visto in garage?»"]}],
 qs:[
  {t:"16",q:"Quanti messaggi ha mandato Giulia a Saverio senza risposta?",a:["16","sedici"],show:"Sedici",hint:"Contali, o leggi l'ultimo.",news:"Saverio risponde solo alle 23:40. Troppo tardi."},
  {t:"Policlinico",q:"Perché Saverio non rispondeva?",any:["policlin","ospedal","padre","papa","cardiolog"],show:"Era al Policlinico con il padre",hint:"Ha risposto, e ha mandato una foto.",news:"Tre notti senza campo. Una falsa pista comincia a cadere."},
  {t:"02:14",q:"A che ora della notte veniva aperto il file di appunti?",all:["0214"],show:"Alle 02:14",hint:"Il sistema documenti l'ha scritto, ma la mail è chiusa.",news:"Con l'account di Saverio."},
  {t:"PORTINERIA-01",q:"Da quale postazione?",any:["portineri"],show:"Dal computer della portineria",hint:"Stessa mail.",news:"Saverio lavora solo dal portatile."},
  {t:"Totò",q:"Chi c'è di notte in portineria?",any:["toto","custod","lo verde"],show:"Totò, il custode",hint:"L'ufficio del personale ha i turni.",news:"Dalle 22 alle 6, tutte le notti tranne il lunedì. Ora hai recuperato un messaggio che Totò ha cancellato.",unlock:"tot"},
  {t:"2024",q:"La foto di «Saverio con il capo segreteria» che Totò ha mandato: quando è stata scattata davvero?",any:["2024","settembr","anno scorso"],show:"Il 14 settembre 2024, non «stamattina»",hint:"Giulia ha controllato le proprietà della foto.",news:"Totò ha mentito per incastrare Saverio."},
  {t:"in garage",q:"Dove ha detto Totò a Giulia che Saverio la aspettava?",any:["garag"],show:"Giù in garage",hint:"Un messaggio cancellato, recuperabile se sai chi c'era in portineria.",news:"La telecamera del garage è rotta da settembre."},
  {t:"4500",q:"Quanto ha ricevuto Totò, secondo la stampa dimenticata in portineria?",a:["4500","4.500","4500 euro","4.500 euro","4.500 €"],show:"4.500 €, dallo studio del capo segreteria",hint:"Una stampa dimenticata, nascosta.",news:"I soldi degli appunti venduti."},
  {t:"23:10",q:"A che ora è finito il consiglio comunale in cui era l'assessore?",all:["2310"],show:"Alle 23:10",hint:"Il Comune ha scritto l'orario.",news:"L'assessore era in diretta. Un'altra falsa pista."},
  {t:"t",q:"Chi ha ucciso Giulia?",o:[["s","Saverio, il collega"],["t","Totò, il custode"],["a","L'assessore"],["f","Fabio, l'ex marito"],["r","Rosalba, la capocronista"]],a:"t",show:"Totò, il custode",hint:"Da dove partivano gli accessi, e chi l'ha mandata in garage?",news:""}],
 win:{title:"Giulia l'ha uccisa Totò, il custode della redazione.",
  steps:["Saverio non rispondeva perché era al Policlinico con il padre.","Gli accessi notturni al file, con l'account di Saverio, partivano dal computer della portineria. Di notte in portineria c'è Totò.","La password di Saverio era su un vecchio post-it sotto la tastiera della portineria.","La foto «di stamattina» che Totò ha mandato a Giulia era del settembre 2024. Alle 21:05 le ha scritto che Saverio la aspettava in garage, dove la telecamera è rotta.","In portineria c'era una stampa: 4.500 € dallo studio del capo segreteria dell'assessore."],
  end:"Il direttore porta tutto in procura. Totò viene fermato all'alba mentre apre il portone della redazione, con il caffè in mano. Saverio torna al lavoro dopo il funerale, si siede alla scrivania di Giulia e apre il file. L'inchiesta sui rifiuti esce dieci giorni dopo, con due firme."}
});
})();
