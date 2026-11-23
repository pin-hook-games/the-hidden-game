(function(){
/* Intrighi 12: I fondi dell'alluvione (San Leone al Mare, comune inventato). Soluzione: l'accusa è costruita.
   Non manca niente: due bonifici da 9.000 € sono scritti due volte nel foglio pubblicato. Il consigliere Cocco lo sapeva da una settimana e ha programmato lo stesso il post. */
const SC={
 all:()=>LIB.obj("#9cc7d6","🌊","San Leone dopo l'alluvione, 2 ottobre"),
 vol:()=>LIB.group(6,"Volontari al lavoro, via del Porto","#55606b"),
 fog:()=>LIB.doc("Foglio pubblicato · entrate","#a02822",["Righe 14 e 15: Fondazione Mare, 9.000","Righe 31 e 32: Banca del Golfo, 9.000","Totale del foglio: 160.000 €","(ogni bonifico scritto due volte)"]),
 tet:()=>LIB.doc("Mutuo per il tetto","#55606b",["Banca: Credito Sardo","Importo: 22.000 €","Firmato a giugno","Rata: 210 € al mese"]),
 est:()=>LIB.doc("Estratto conto della raccolta","#2f6b4f",["Conto «San Leone rinasce»","Entrate: 142.000 €","Uscite documentate: 138.500 €","Saldo: 3.500 €"]),
 pos:()=>LIB.doc("Post programmato","#55606b",["Autore: Bruno Cocco","Creato: 10 novembre, 22:00","Pubblicato: 14 novembre, 09:00","«Dove sono i 18.000 euro?»"])
};
const MAP=LIB.prov([[318,208,"#33658a","municipio",-60,-14],[300,224,"#d43d55","via del Porto",-74,18]]);

LIB.add(72,["I fondi dell'alluvione","Il comitato vuole sapere dove sono finiti 18.000 euro","San Leone al Mare"],{
 map:MAP,scenes:SC,owner:"Nadia Ferro",time:"17:00",date:"sab 15 nov",homeDate:"sabato 15 novembre",
 appIds:"msg tel mail gal cal note bank social",
 late:"L'assemblea del comitato comincia e Nadia vuole il telefono per rispondere. Il tempo è finito.",
 brief:"Il presidente del comitato dei cittadini di San Leone al Mare, Luigi Sanna, ti ha portato il telefono dell'assessora Nadia Ferro, 42 anni. Dopo l'alluvione di ottobre Nadia ha gestito la raccolta fondi. Venerdì il consigliere Bruno Cocco ha scritto che mancano 18.000 euro. Stasera c'è l'assemblea.",
 quote:"«Nadia mi ha dato il telefono lei, e questo mi ha colpito. Però in quei mesi si è rifatta il tetto di casa, e la gente fa due conti. Io rappresento persone che hanno perso tutto. Se i soldi mancano lo dico stasera. Se non mancano, dico anche questo.»",
 chats:[
  {id:"rag",name:"Paola Deiana",sub:"Ragioniera",m:[
   ["7 nov",0,"Assessora, ho trovato l'errore nel foglio pubblicato: due bonifici da 9.000 sono stati scritti due volte, Fondazione Mare e Banca del Golfo. Il foglio dice 160.000, ma i soldi entrati sono 142.000. Sul conto torna tutto al centesimo."],
   ["7 nov",1,"Grazie Paola. Correggiamo il foglio lunedì."],
   ["7 nov",0,"L'ho già spiegato anche al consigliere Cocco stamattina, mi aveva chiesto i conti. Ha detto «capito, grazie»."]]},
  {id:"cocco",name:"Bruno Cocco",sub:"Consigliere",m:[
   ["7 nov",0,"Assessora, la ragioniera mi ha spiegato tutto. Errore di battitura, capita."],
   ["",2,"1 messaggio eliminato il 14 novembre."],
   ["ven 09:20",0,"Non è niente di personale, Nadia. È campagna elettorale.","coc"]]},
  {id:"marito",name:"Gianni",sub:"Marito",m:[
   ["giu",0,"Firmato il mutuo per il tetto. 210 al mese per dieci anni, ma finalmente non piove più in camera."],
   ["giu",1,"Era ora."]]},
  {id:"sanna",name:"Luigi Sanna",sub:"Comitato",m:[
   ["ven 10:00",0,"Assessora, la gente è furiosa. Mi dia il telefono, glielo chiedo da persona onesta."],
   ["ven 10:05",1,"Glielo do. Guardi tutto, anche quello che mi imbarazza."]]},
  {id:"fond",name:"Fondazione Mare",sub:"",m:[
   ["ven 15:00",0,"Gentile assessora, confermiamo di aver fatto un solo bonifico da 9.000 € il 6 ottobre. Ne siamo orgogliosi."]]}
 ],
 lists:{
  bank:[
   {id:"b0",g:"Conto «San Leone rinasce»",title:"Entrate totali",sub:"+ 142.000,00 €"},
   {id:"b1",g:"Conto «San Leone rinasce»",title:"Uscite documentate",sub:"− 138.500,00 €",body:"Fatture di ditte, materiali e contributi alle famiglie, una per una."},
   {id:"b2",g:"Conto «San Leone rinasce»",title:"Saldo",sub:"3.500,00 €"},
   {id:"b3",g:"Conto personale",title:"Rata mutuo tetto",sub:"ogni mese · − 210,00 €"}],
  social:[
   {id:"s1",g:"Feed",title:"@brunococco",sub:"«Dove sono i 18.000 euro?»",meta:"ven 09:00",body:"«La giunta ha perso 18.000 euro dei fondi dell'alluvione. Dove sono, assessora Ferro?»\nPost programmato."},
   {id:"s2",g:"Feed",title:"@sanleone_rinasce",sub:"Il foglio delle entrate",meta:"ottobre",body:"Foglio pubblicato il 30 ottobre: totale 160.000 €."}],
  mail:[
   {id:"m1",title:"Ufficio ragioneria",sub:"Nota sull'errore del foglio",meta:"7 novembre",body:"Le righe 14-15 e 31-32 riportano due volte lo stesso bonifico.\nTotale corretto: 142.000 €, pari all'estratto conto.\nNota inviata in copia al consigliere Cocco, che ne ha chiesto spiegazioni."}],
  cal:[
   {id:"c1",g:"Ottobre",title:"2 ott · Alluvione",sub:"",body:""},
   {id:"c2",g:"Questa settimana",title:"Sab · Assemblea del comitato",sub:"18:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: i soldi entrati davvero, in migliaia, con uno zero davanti.\nNota sotto: il giorno e il mese in cui la ragioniera ha trovato l'errore, quattro cifre."},
   {id:"n2",title:"Il foglio",lock:"note",body:"L'errore è mio: ho firmato il foglio senza ricontrollarlo.\nMa i soldi ci sono tutti, ed ero convinta che Cocco lo sapesse.\nStasera chiedo scusa per il foglio. Per il resto, no."}],
  tel:[
   {id:"t1",title:"Paola Deiana",sub:"7 nov · in entrata, 12 min"},
   {id:"t2",title:"Bruno Cocco",sub:"ven 09:15 · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"2 ott",title:"Alluvione",sc:"all"},
  {id:"p2",t:"ott",title:"Volontari",sc:"vol"},
  {id:"p3",t:"7 nov",title:"Le righe doppie",sc:"fog"},
  {id:"p4",t:"giu",title:"Il mutuo",sc:"tet"},
  {id:"h1",t:"ven",title:"Estratto",sc:"est",lock:"album"},
  {id:"h2",t:"ven 11:00",title:"Mandato da un amico",sc:"pos",lock:"album"}],
 pins:{note:"0711",album:"0142"},
 events:[{id:"a",q:4,kind:"call",from:"Bruno Cocco",lines:["«Sanna? Sono Cocco. Mi dicono che ha il telefono della Ferro.»","«Non si faccia incantare dagli estratti conto, sono facili da sistemare. Stasera all'assemblea la gente vuole risposte, non numeri.»","«Pronto?»"]},
         {id:"b",q:9,kind:"sms",from:"Paola Deiana",text:"Signor Sanna, sono la ragioniera. Le mando la nota del 7 novembre: in copia c'era anche il consigliere Cocco. L'ha letta, mi ha risposto «capito, grazie»."}],
 qs:[
  {t:"18000",q:"Quanti euro mancherebbero secondo il consigliere Cocco?",a:["18000","18.000","18000 euro","18.000 euro","18.000 €","18mila"],show:"18.000 €",hint:"Il suo post su Scatto.",news:"Pubblicato venerdì alle 9:00."},
  {t:"160000",q:"Quale totale riporta il foglio delle entrate pubblicato a ottobre?",a:["160000","160.000","160000 euro","160.000 euro","160.000 €","160mila"],show:"160.000 €",hint:"Su Scatto e in Galleria.",news:"È il numero da cui Cocco fa partire il conto."},
  {t:"142000",q:"Quanti soldi sono entrati davvero sul conto della raccolta?",a:["142000","142.000","142000 euro","142.000 euro","142.000 €","142mila"],show:"142.000 €",hint:"App Banca.",news:"La differenza è esattamente 18.000."},
  {t:"2",q:"Quanti bonifici sono scritti due volte nel foglio?",a:["2","due","2 bonifici","due bonifici"],show:"Due, da 9.000 ciascuno",hint:"Foto delle righe doppie e chat con la ragioniera.",news:"Fondazione Mare e Banca del Golfo. Due per nove fa diciotto."},
  {t:"Fondazione Mare",q:"Uno dei due donatori ha confermato di aver fatto un solo bonifico. Quale?",any:["fondazion","mare"],show:"Fondazione Mare",hint:"Messaggio di venerdì pomeriggio.",news:"Un solo bonifico, il 6 ottobre. Scritto due volte nel foglio."},
  {t:"3500",q:"Quanto resta oggi sul conto della raccolta?",a:["3500","3.500","3500 euro","3.500 euro","3.500 €"],show:"3.500 €",hint:"App Banca.",news:"Entrate meno uscite documentate, al centesimo. Non manca niente."},
  {t:"mutuo",q:"Con che cosa ha pagato Nadia il tetto di casa?",any:["mutuo"],show:"Con un mutuo",hint:"Chat con il marito e foto in Galleria.",news:"Firmato a giugno, quattro mesi prima dell'alluvione. 210 euro al mese."},
  {t:"7 novembre",q:"Quando la ragioniera ha spiegato l'errore a Cocco? Giorno e mese.",all:["7","nov"],show:"Il 7 novembre",hint:"Chat con la ragioniera e mail della ragioneria.",news:"Una settimana prima del post. Lui ha risposto: «Errore di battitura, capita». Ora che lo sai, hai recuperato il messaggio che Cocco ha mandato e cancellato venerdì.",unlock:"coc"},
  {t:"campagna elettorale",q:"Come ha giustificato Cocco il post, nel messaggio cancellato? «Non è niente di personale, è...»",any:["campagna","elettoral"],show:"«È campagna elettorale»",hint:"Messaggio recuperato.",news:"Sapeva che i soldi c'erano. Ha pubblicato lo stesso."},
  {t:"10 novembre",q:"Nell'album privato c'è la scheda del post. Quando è stato creato? Giorno e mese.",all:["10","nov"],show:"Il 10 novembre alle 22:00",hint:"Il codice dell'album sono i soldi entrati davvero, in migliaia, con uno zero davanti.",news:"Tre giorni dopo la spiegazione della ragioniera, programmato per uscire venerdì mattina."},
  {t:"il foglio",q:"Nella nota protetta Nadia scrive per che cosa chiederà scusa stasera.",any:["foglio"],show:"Per il foglio, firmato senza ricontrollarlo",hint:"Il codice è il giorno e il mese in cui la ragioniera ha trovato l'errore.",news:"«Per il resto, no.»"},
  {t:"c",q:"Che cosa è successo ai 18.000 euro?",o:[["n","Li ha presi Nadia Ferro per il tetto"],["r","Li ha presi la ragioniera"],["c","Non mancano: è un errore del foglio, e Cocco lo sapeva"],["f","Non sono mai arrivati dalla Fondazione Mare"]],a:"c",show:"Non mancano. L'accusa è costruita.",hint:"Confronta il foglio con il conto, e guarda quando Cocco lo ha saputo.",news:""}],
 win:{title:"Non manca niente. L'accusa è costruita.",
  steps:["Il foglio pubblicato dice 160.000 €, ma sul conto sono entrati 142.000 €: due bonifici da 9.000 erano scritti due volte.","Le uscite sono documentate una per una. Sul conto restano 3.500 €.","Il 7 novembre la ragioniera ha spiegato l'errore anche a Cocco, che ha risposto «errore di battitura, capita».","Il 10 novembre Cocco ha programmato il post per venerdì mattina. Poi ha scritto a Nadia: «È campagna elettorale.»","Il tetto di Nadia l'ha pagato un mutuo firmato a giugno."],
  end:"Luigi Sanna apre l'assemblea con l'estratto conto proiettato sul muro. «Mancano zero euro», dice. Poi legge la nota della ragioniera, con il nome di chi era in copia. Nadia chiede scusa per il foglio. Cocco, in fondo alla sala, se ne va prima delle domande."}
});
LIB.tune(72,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="rag";
 e.pins={album:"0142",rag:"0210",note:"1014"};
 e.locks={album:{hint:"Quello che è entrato davvero, in migliaia, con lo zero."},rag:{name:"Mail protetta",hint:"Il giorno dell'acqua, poi il mese."},note:{hint:"Il giorno in cui doveva uscire il post, poi la prima riga sbagliata."}};
 e.spots=[
  {id:"s1",x:318,y:208,label:"Municipio",title:"Municipio di San Leone",sub:"Ragioneria al secondo piano",body:"La ragioniera Paola Deiana controlla ogni bonifico, uno per uno."},
  {id:"s2",x:300,y:238,label:"Via del Porto",title:"Via del Porto",sub:"Zona alluvionata",body:"Cantieri aperti con i fondi della raccolta. Un cartello: «Lavori finanziati dalla solidarietà dei cittadini»."},
  {id:"s3",x:346,y:194,label:"Comitato Cocco",title:"Comitato elettorale di Bruno Cocco",sub:"Inaugurato il 1° novembre",body:"Recensione: «Manifesti già stampati: Cocco sindaco. Le elezioni sono tra sei mesi.»"}];
 LIB.hints(e,["Qualcuno l'ha gridato in pubblico.","Il foglio pubblicato dice una cifra.","Il conto ne dice un'altra.","Qualcuno ha trovato delle righe uguali.","Un'offerta arrivata venerdì.","Quanto resta, sul conto?","Nadia ha un debito suo, e lo dice.","La ragioniera ha avvisato qualcuno, ma la mail è chiusa.","Un messaggio recuperato spiega il perché.","Un post programmato, nascosto.","Nadia ammette un errore suo.","Confronta il foglio con il conto, e guarda quando lui l'ha saputo."]);
});
})();
