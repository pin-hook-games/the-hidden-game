(function(){
/* Furti 17: Backstage (Milano). Soluzione: Pina Ferraro, la sarta storica della casa di moda.
   Le hanno appena comunicato la fine del contratto dopo trent'anni. Nel fine settimana cuce per Atelier Rho: ha fatto uscire 12 capi in due portabiti di Rho, «non segnarli, li conto io», con un corriere prenotato dalla sua sartoria. Li vende la nipote Martina su @archivio.mi.
   False piste: la modella Ines (abito preso con permesso) e la stylist Greta (vende vintage, ma alle 21 era all'after party, fotografata).
   Codici: album = 2040; mail corriere = 14 in uscita + 12 previsti = 1412; nota = 30 (minuti del ritiro) + 07 (giorni del profilo) = 3007. */
const SC={
 bac:()=>LIB.group(6,"Backstage, ore 20:40: i capi sono appesi","#231a2e"),
 rel:()=>LIB.obj("#c9b79c","👗","Rella 4, i dodici capi del campionario"),
 lis:()=>LIB.doc("Lista portabiti · ingresso/uscita","#33658a",["Ingresso: 12 portabiti","Uscita: 14 portabiti","2 con logo «Atelier Rho»","Atelier Rho non era in sfilata"]),
 ine:()=>LIB.two("#e2a0c0","#7a3b5a","#33658a","Ines alla festa, con il permesso scritto"),
 gre:()=>LIB.two("#231a2e","#7a3b5a","#e2a0c0","Greta all'after party, 20:58, foto dei fotografi"),
 pin:()=>LIB.obj("#efe6da","🧵","Il tavolo di Pina, dietro le quinte"),
 pro:()=>LIB.shot("@archivio.mi",["Pezzi d'archivio, mai indossati","profilo creato 7 giorni fa · gestito da Martina F."])
};
const MAP=LIB.city("Milano",[[40,52,"Brera"],[132,132,"Tortona"],[276,132,"Porta Venezia"],[40,232,"Navigli"],[300,40,"Parco"],[200,200,"Darsena"]],[]);

LIB.add(57,["Backstage","La casa di moda vuole sapere dove sono finiti dodici capi del campionario","Milano"],{
 map:MAP,scenes:SC,owner:"Noa Bianchi",time:"12:00",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note social",
 late:"Noa ha un altro casting e si riprende il telefono.",
 brief:"Alla fine di una sfilata a Milano, dalla rella 4 sono spariti dodici capi del campionario. Noa Bianchi, 27 anni, assistente di backstage, era la responsabile della lista dei portabiti. La casa di moda ti ha dato il suo telefono.",
 quote:"«Una modella, Ines, si era già portata a casa un abito per una festa. E la stylist, Greta, vende vintage su internet, lo sanno tutti. Io voglio sapere dove sono i miei dodici capi, e chi li ha fatti uscire.»",
 locks:{
  album:{hint:"L'ultima volta che li ho visti tutti al loro posto."},
  cor:{name:"Mail protetta",hint:"Quanti sono usciti, poi quanti dovevano essere."},
  note:{hint:"I minuti del ritiro, poi quanti giorni ha quel profilo."}},
 chats:[
  {id:"pin",name:"Pina",sub:"Sarta",m:[
   ["sab 20:50",0,"Noa, quei due portabiti di Atelier Rho sono miei, me li porto via stasera. Non segnarli, li conto io. Tu pensa alle uscite."],
   ["sab 20:51",1,"Va bene Pina, grazie!"],
   ["",2,"1 messaggio eliminato."],
   ["dom 9:00",0,"Noa, se ti chiedono dei portabiti di Rho, di' che erano vuoti. Io trent'anni qui li ho dati, ma loro mi mandano via con una mail.","pin"]]},
  {id:"ine",name:"Ines",sub:"Modella",m:[
   ["ott",0,"Noa, grazie per il permesso per l'abito alla festa! L'ho riportato lunedì, stirato."],
   ["sab",0,"Io sono uscita alle 21:00 con solo la mia borsa, ti giuro."]]},
  {id:"gre",name:"Greta",sub:"Stylist",m:[
   ["sab 20:45",0,"Noa, io scappo all'after, ci sono i giornalisti. Il backstage è tuo e di Pina."],
   ["dom",0,"Mi hanno detto che sospettano di me perché vendo vintage. Alle 21 ero in terrazza davanti a venti fotografi. Ti mando la foto."]]},
  {id:"pro",name:"Produzione",sub:"",m:[
   ["dom",0,"Noa, i dodici capi della rella 4 non ci sono. La tua lista dice 14 portabiti in uscita e 12 in ingresso. Due in più?"],
   ["dom",1,"Due di Atelier Rho. Me li ha detti Pina, erano suoi."],
   ["dom",0,"Atelier Rho non era in sfilata."]]},
  {id:"tea",name:"Backstage team",sub:"Gruppo",m:[
   ["ven",0,"Pina: Ragazzi, mia nipote Martina mi ha aperto un profilo per vendere le mie stoffe. Seguitela!"],
   ["ven",0,"Pina: Ah, e a dicembre vado in pensione. Me l'hanno comunicato per mail, dopo trent'anni. Così."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Profili",title:"@archivio.mi",sub:"Pezzi d'archivio",body:"Creato 7 giorni fa. «Pezzi d'archivio, mai indossati. DM per prezzi.» Gestito da Martina F."},
   {id:"s2",g:"Post",title:"@archivio.mi · ieri",sub:"Nuovi arrivi",body:"Un cappotto con il ricamo del campionario, appeso su un portabiti «Atelier Rho»."},
   {id:"s3",g:"Profili",title:"@greta.styling",sub:"Vintage",body:"Abiti vintage anni '90, tutti con fattura d'acquisto."}],
  mail:[
   {id:"m1",title:"Corriere Express",sub:"Conferma ritiro",meta:"sabato",lock:"cor",body:"Ritiro all'uscita artisti alle 21:30: 2 portabiti «Atelier Rho».\nPrenotato da: Sartoria P. Ferraro.\n(Noa era indicata come referente per il backstage)"},
   {id:"m2",title:"Produzione",sub:"Lista portabiti",meta:"sabato 22:00",body:"Ingresso 12, uscita 14. Due portabiti Atelier Rho non registrati."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Location sfilata",sub:"Tortona",body:"Uscita artisti sul retro."}],
  cal:[
   {id:"c1",g:"Sabato",title:"Sfilata",sub:"19:30",body:""},
   {id:"c2",g:"Sabato",title:"After party, terrazza",sub:"21:00",body:""}],
  note:[
   {id:"n1",title:"Da ricordare",body:"Ringraziare Pina per le riparazioni dell'ultimo minuto"},
   {id:"n2",title:"Per la produzione",lock:"note",body:"Alle 20:40 i dodici capi erano appesi.\nGreta alle 21 era in terrazza. Ines è uscita con la sua borsa.\nPina mi ha detto di non segnare i portabiti di Rho. Il corriere l'ha prenotato la sua sartoria.\n@archivio.mi lo gestisce sua nipote Martina.\nMi fa male scriverlo. Mi ha insegnato a cucire un orlo."}],
  tel:[
   {id:"t1",title:"Produzione",sub:"dom · in entrata, 20 min"}]
 },
 spots:[
  {id:"s1",x:60,y:140,label:"Location sfilata",title:"Location sfilata",sub:"Tortona · ex fabbrica",body:"Uscita artisti sul retro, senza telecamere. Da lì escono portabiti e bauli a fine serata."},
  {id:"s2",x:276,y:150,label:"Atelier Rho",title:"Atelier Rho · sartoria",sub:"Sartoria · ★ 4,7",body:"Recensione: «La signora Pina, la sarta del fine settimana, è un angelo. Ha mani d'oro.»"},
  {id:"s3",x:300,y:40,label:"After party",title:"Terrazza Parco",sub:"Evento privato sabato dalle 20:55",body:"Recensione: «After party della sfilata pieno di fotografi. C'era anche la stylist, regina della serata.»"}],
 photos:[
  {id:"p1",t:"sab 20:40",title:"Backstage",sc:"bac"},
  {id:"p2",t:"sab 19:00",title:"Rella 4",sc:"rel"},
  {id:"p3",t:"ott",title:"Ines",sc:"ine"},
  {id:"p4",t:"sab 22:00",title:"Lista",sc:"lis"},
  {id:"p5",t:"dom",title:"Da Greta",sc:"gre"},
  {id:"h1",t:"dom",title:"Profilo",sc:"pro",lock:"album"},
  {id:"h2",t:"sab",title:"Il tavolo di Pina",sc:"pin",lock:"album"}],
 pins:{album:"2040",cor:"1412",note:"3007"},
 events:[{id:"a",q:3,kind:"sms",from:"Pina",text:"Noa cara, ti vedo preoccupata. Non è colpa tua, figurati. Ci sono persone che vendono vintage, lo sappiamo."},
         {id:"b",q:7,kind:"call",from:"Ines",lines:["«Noa? No... Ah, lei è quello che indaga.»","«Le dico una cosa: alle 21:25 ho visto la signora Pina spingere due portabiti verso l'uscita artisti. Pensavo fossero stoffe sue.»","«Una signora così, chi ci penserebbe mai.»"]}],
 qs:[
  {t:"12",q:"Quanti capi sono spariti?",a:["12","dodici","12 capi"],show:"12",hint:"La casa di moda li ha contati.",news:"Tutti dalla rella 4."},
  {t:"20:40",q:"A che ora Noa li ha fotografati ancora appesi?",all:["2040"],show:"Alle 20:40",hint:"Noa fotografa tutto.",news:"Dopo, il backstage è rimasto a lei e a qualcun altro."},
  {t:"permesso",q:"La modella Ines: con che cosa aveva preso l'abito per la festa?",any:["permess"],show:"Con il permesso, e l'ha riportato",hint:"Ines ha ringraziato.",news:"Sabato è uscita alle 21 con la sua borsa. Una falsa pista cade."},
  {t:"terrazza",q:"Dov'era Greta, la stylist, alle 21?",any:["terrazz","after","party","festa","fotograf"],show:"All'after party in terrazza, davanti ai fotografi",hint:"Greta si è difesa con una foto.",news:"Vende vintage, ma con fattura. L'altra falsa pista cade."},
  {t:"14",q:"Quanti portabiti risultano in uscita?",a:["14","quattordici"],show:"14, contro 12 in ingresso",hint:"La produzione ha fatto un conto che non torna.",news:"Due in più."},
  {t:"Atelier Rho",q:"Con quale logo sono i due portabiti in più?",any:["atelier","rho"],show:"«Atelier Rho»",hint:"Atelier Rho non era in sfilata.",news:"Qualcuno li ha portati in sala."},
  {t:"Pina",q:"Chi ha detto a Noa di non segnarli?",any:["pina","sarta"],show:"Pina, la sarta",hint:"Alle 20:50, un messaggio gentile.",news:"«Li conto io.» Ora hai recuperato il suo messaggio di domenica mattina.",unlock:"pin"},
  {t:"Sartoria P. Ferraro",q:"Chi ha prenotato il corriere delle 21:30?",any:["ferraro","sartoria"],show:"Sartoria P. Ferraro, cioè Pina",hint:"Una conferma arrivata per errore a Noa, chiusa.",news:"Pina nel fine settimana cuce per Atelier Rho."},
  {t:"Martina",q:"Chi gestisce @archivio.mi?",any:["martina"],show:"Martina F.",hint:"I profili dicono chi li gestisce.",news:"Profilo creato sette giorni fa."},
  {t:"nipote",q:"Chi è Martina per Pina?",any:["nipot"],show:"La nipote",hint:"Pina ne ha parlato nel gruppo del team.",news:"«Mia nipote Martina mi ha aperto un profilo.»"},
  {t:"pensione",q:"Che cosa era stato comunicato a Pina, pochi giorni prima?",any:["pension","contratt","mail","manda"],show:"La pensione a dicembre, con una mail, dopo trent'anni",hint:"Si è sfogata con il team.",news:"«Io trent'anni qui li ho dati.»"},
  {t:"p",q:"Chi ha fatto uscire i capi?",o:[["n","Noa"],["i","Ines"],["g","Greta, la stylist"],["p","Pina, la sarta, nei portabiti di Atelier Rho"],["c","Il corriere"]],a:"p",show:"Pina, la sarta",hint:"Portabiti in più, corriere, profilo.",news:""}],
 win:{title:"I capi li ha fatti uscire Pina, la sarta.",
  steps:["Alle 20:40 i dodici capi erano sulla rella 4. Ines è uscita alle 21 con la sua borsa, Greta era all'after party davanti ai fotografi.","In uscita i portabiti erano 14: due di Atelier Rho, che non era in sfilata. Pina aveva detto a Noa di non segnarli.","Alle 21:30 un corriere prenotato dalla Sartoria P. Ferraro li ha ritirati.","Un cappotto è comparso su @archivio.mi, gestito dalla nipote Martina.","Pina aveva appena saputo, con una mail, che a dicembre l'avrebbero mandata in pensione."],
  end:"La produzione non chiama la polizia: chiama Pina. Lei arriva con i dieci capi rimasti, piegati con la carta velina, e una lettera di dimissioni scritta a mano. Il direttore la legge, la strappa, e le offre un contratto da consulente. Noa le porta un caffè. Pina le insegna un altro orlo."}
});
})();
