(function(){
/* Intrighi 9: I rimborsi (Borgoverde, comune inventato). Soluzione: il tesoriere del gruppo, Alberto Vanni.
   Presentava ricevute di trasferte a Roma a nome dei consiglieri, firmando con il tablet del gruppo, e incassava sul proprio conto. */
const SC={
 grp:()=>LIB.group(5,"Gruppo consiliare Insieme","#33658a"),
 cons:()=>LIB.doc("Verbale del consiglio","#55606b",["Martedì 14 ottobre, ore 18 - 22","Presenti: 19","tra cui S. Valli (interviene alle 20:15)","Borgoverde, sala consiliare"]),
 tax:()=>LIB.doc("Ricevuta taxi · Roma","#b0764a",["2 ottobre","Importo reale: 23,00 €","Chiesto a rimborso: 35,00 €","(mancia «da regolamento»?)"]),
 fam:()=>LIB.two("#8fb3c9","#7a3b5a","#2f6b4f","Con Gloria, Borgoverde vecchia"),
 tab:()=>LIB.obj("#dfe5ea","📱","Il tablet del gruppo, sul tavolo del tesoriere"),
 ibn:()=>LIB.doc("Bonifico del 2023","#2f6b4f",["Quota cena di Natale","Ordinante: Vanni Alberto","IBAN ...4417","Beneficiario: S. Valli"])
};
const MAP=LIB.prov([[180,120,"#d43d55","sala consiliare",9,-12]]);

LIB.add(69,["I rimborsi","Sergio Valli vuole dimostrare di non aver gonfiato i rimborsi","Borgoverde"],{
 map:MAP,scenes:SC,owner:"Sergio Valli",time:"08:00",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal map cal note bank",
 late:"Sergio deve consegnare il telefono alla Guardia di Finanza alle 8:30. Il tempo è finito.",
 brief:"Sergio Valli, 58 anni, capogruppo di Insieme a Borgoverde, ti ha dato il suo telefono. La Corte dei conti contesta nove rimborsi per trasferte a Roma che lui dice di non aver mai fatto. Alle 8:30 deve presentarsi alla Guardia di Finanza.",
 quote:"«Quelle ricevute portano il mio nome e la mia firma digitale. Io a Roma ci sono andato due volte in un anno, non undici. Non sono un santo, ma così no. Se è stato qualcuno del gruppo, lo voglio sapere io prima dei finanzieri.»",
 chats:[
  {id:"vanni",name:"Alberto Vanni",sub:"Tesoriere",m:[
   ["lun 18:00",0,"Sergio, per la Corte dei conti non ti preoccupare: tanto ci sono le ricevute, è tutto in ordine."],
   ["lun 18:10",1,"Alberto, quelle ricevute io non le ho mai viste."],
   ["",2,"2 messaggi eliminati a marzo."],
   ["mar 3",0,"Per i rimborsi non perdete tempo: le ricevute le preparo io per tutti e firmo col tablet del gruppo.","van"],
   ["mar 3",0,"Voi pensate a fare politica, alla burocrazia ci penso io.","van"]]},
  {id:"gloria",name:"Gloria",sub:"Moglie",m:[
   ["gio 21:00",0,"Il 14 ottobre eri in consiglio fino alle dieci, ti ho visto in streaming mentre stiravo. Lo dico a chi vuoi."],
   ["gio 21:05",1,"Grazie Gloria."]]},
  {id:"marta",name:"Marta Rosi",sub:"Consigliera",m:[
   ["mer 10:00",0,"Sergio, anche a me contestano tre trasferte a Roma che non ho mai fatto. Io non so nemmeno come si firma col tablet."],
   ["mer 10:05",1,"Allora non sono l'unico."]]},
  {id:"osteria",name:"Osteria del Tevere",sub:"",m:[
   ["gio 15:00",0,"Buongiorno, ci ha chiesto se lei è mai stato da noi. In archivio non c'è nessuna prenotazione a nome Valli. Le ricevute a suo nome sono state richieste per telefono da un certo Alberto."]]},
  {id:"corte",name:"Corte dei conti",sub:"",m:[
   ["7 nov",0,"Contestazione: 9 rimborsi per trasferte a Roma, totale 3.870,00 €, liquidati sull'IBAN che termina con 4417."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Corte dei conti",sub:"Elenco rimborsi contestati",meta:"7 novembre",body:"9 trasferte a Roma tra marzo e ottobre, tutte con ricevute di due soli ristoranti: Osteria del Tevere e Da Mimmo.\nFirma digitale apposta dal dispositivo «Tablet gruppo Insieme».\nTotale: 3.870,00 €."},
   {id:"m2",title:"Segreteria del Comune",sub:"Dispositivi assegnati",meta:"gennaio",body:"Tablet gruppo Insieme: in consegna al tesoriere, Alberto Vanni.\nTelefono di Sergio Valli: personale, non usato per firme."}],
  map:[
   {id:"g1",g:"Viaggi a Roma nel 2025",title:"Roma",sub:"2 visite",body:"Il telefono è stato a Roma solo il 2 aprile e il 2 ottobre."},
   {id:"g2",g:"14 ottobre",title:"Borgoverde, sala consiliare",sub:"18:00 - 22:10",body:"Uno dei giorni della «trasferta a Roma» contestata."}],
  bank:[
   {id:"b0",g:"Conto",title:"IBAN del conto",sub:"Termina con 2290"},
   {id:"b1",g:"Rimborsi ricevuti nel 2025",title:"Rimborso trasferta 2 aprile",sub:"+ 182,00 €"},
   {id:"b2",g:"Rimborsi ricevuti nel 2025",title:"Rimborso trasferta 2 ottobre",sub:"+ 175,00 €"}],
  cal:[
   {id:"c1",g:"Ottobre",title:"14 ott · Consiglio comunale",sub:"18:00",body:""},
   {id:"c2",g:"Questa settimana",title:"Ven · Guardia di Finanza",sub:"08:30",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: le ultime quattro cifre dell'IBAN dove sono finiti i rimborsi.\nNota sotto: le ultime quattro cifre del mio IBAN."},
   {id:"n2",title:"Il taxi",lock:"note",body:"Il 2 ottobre a Roma il taxi era 23 euro e ne ho chiesti 35. Dodici euro.\nMi vergogno, li restituisco domani.\nMa quei 3.870 non sono miei, e lo sa chi li ha presi."}],
  tel:[
   {id:"t1",title:"Alberto Vanni",sub:"lun 18:15 · in entrata, 5 min"},
   {id:"t2",title:"Osteria del Tevere",sub:"gio 14:50 · in uscita, 3 min"}]
 },
 photos:[
  {id:"p1",t:"set",title:"Gruppo",sc:"grp"},
  {id:"p2",t:"14 ott",title:"Verbale",sc:"cons"},
  {id:"p3",t:"2 ott",title:"Taxi",sc:"tax"},
  {id:"p4",t:"lug",title:"Con Gloria",sc:"fam"},
  {id:"h1",t:"gio",title:"Il tablet",sc:"tab",lock:"album"},
  {id:"h2",t:"2023",title:"Ritrovato",sc:"ibn",lock:"album"}],
 pins:{note:"2290",album:"4417"},
 events:[{id:"a",q:4,kind:"call",from:"Alberto Vanni",lines:["«Sergio, ascoltami bene. Ai finanzieri di' solo che le ricevute le hai fatte tu, è più semplice.»","«Una sanzione e finisce lì. Se cominciate a tirare in ballo il tablet ci andiamo di mezzo tutti.»","«Sergio?»"]},
         {id:"b",q:9,kind:"sms",from:"Marta Rosi",text:"Sergio, ho controllato: anche i miei rimborsi contestati sono finiti su un IBAN che finisce con 4417. Il mio finisce con 8830."}],
 qs:[
  {t:"9",q:"Quanti rimborsi contesta la Corte dei conti?",a:["9","nove","9 rimborsi"],show:"Nove",hint:"Messaggio della Corte e Mail.",news:"Trasferte a Roma tra marzo e ottobre."},
  {t:"3870",q:"Per quanti euro in tutto?",a:["3870","3.870","3870 euro","3.870 euro","3.870 €","3870,00","3.870,00"],show:"3.870 €",hint:"Stessa contestazione.",news:"Più di un mese di indennità."},
  {t:"2",q:"Quante volte è stato davvero a Roma Sergio nel 2025?",a:["2","due","2 volte","due volte"],show:"Due",hint:"Mappe tiene l'elenco dei viaggi.",news:"Il 2 aprile e il 2 ottobre, entrambi rimborsati regolarmente sul suo conto."},
  {t:"consiglio comunale",q:"Dov'era Sergio il 14 ottobre, giorno di una delle trasferte contestate?",any:["consiglio","consiliare","borgoverde"],show:"In consiglio comunale a Borgoverde",hint:"Mappe, verbale in Galleria, e lo conferma la moglie.",news:"Dalle 18 alle 22:10, con un intervento alle 20:15 messo a verbale."},
  {t:"Osteria del Tevere",q:"Le ricevute vengono sempre da due ristoranti. Uno è Da Mimmo. Qual è l'altro?",any:["tevere"],show:"Osteria del Tevere",hint:"Mail della Corte.",news:"L'osteria non ha nessuna prenotazione a nome Valli. Le ricevute le ha chieste «un certo Alberto»."},
  {t:"tablet",q:"Da quale dispositivo è stata apposta la firma digitale?",any:["tablet"],show:"Dal tablet del gruppo Insieme",hint:"Stessa mail.",news:"Non dal telefono di Sergio."},
  {t:"Vanni",q:"A chi è in consegna il tablet del gruppo?",any:["vanni","alberto","tesorier"],show:"Ad Alberto Vanni, il tesoriere",hint:"Mail della segreteria.",news:"Ora che sai chi ha il tablet, hai recuperato i due messaggi che Vanni aveva scritto a marzo e poi cancellato.",unlock:"van"},
  {t:"per tutti",q:"Nel messaggio recuperato, per chi diceva di preparare le ricevute Vanni?",any:["tutti"],show:"«Per tutti»",hint:"Messaggi del 3 marzo.",news:"«Firmo col tablet del gruppo.» Anche Marta Rosi ha tre trasferte che non ha mai fatto."},
  {t:"4417",q:"Su quale IBAN sono stati liquidati i rimborsi contestati? Ultime quattro cifre.",a:["4417"],show:"...4417",hint:"Messaggio della Corte.",news:"L'IBAN di Sergio finisce con 2290."},
  {t:"Alberto Vanni",q:"Nell'album privato c'è un vecchio bonifico. Di chi è l'IBAN che finisce con 4417? Nome e cognome.",all:["alberto","vanni"],show:"Di Alberto Vanni",hint:"Il codice dell'album sono le ultime quattro cifre dell'IBAN dei rimborsi.",news:"La quota della cena di Natale del 2023, pagata da quel conto."},
  {t:"12",q:"Nella nota protetta Sergio ammette un errore suo. Di quanti euro?",a:["12","dodici","12 euro","dodici euro","12€"],show:"Dodici euro, su un taxi",hint:"Il codice sono le ultime quattro cifre del suo IBAN.",news:"«Li restituisco domani.» Dodici euro non sono 3.870."},
  {t:"v",q:"Chi ha preso i soldi dei rimborsi?",o:[["s","Sergio Valli, il capogruppo"],["v","Alberto Vanni, il tesoriere"],["m","Marta Rosi, la consigliera"],["o","L'Osteria del Tevere"],["g","Gloria, la moglie"]],a:"v",show:"Alberto Vanni",hint:"Chi aveva il tablet e di chi è l'IBAN?",news:""}],
 win:{title:"I rimborsi li ha incassati Alberto Vanni, il tesoriere.",
  steps:["Nove trasferte a Roma per 3.870 €, con ricevute di due soli ristoranti e firma dal tablet del gruppo.","Il tablet era in consegna a Vanni, che a marzo scriveva: «Le ricevute le preparo io per tutti».","Il 14 ottobre, giorno di una «trasferta», Sergio era in consiglio comunale a Borgoverde.","I soldi sono finiti sull'IBAN che termina con 4417: quello di Vanni. Anche Marta Rosi ha rimborsi falsi sullo stesso conto.","L'unico errore di Sergio: dodici euro su un taxi."],
  end:"Sergio stampa tutto e ci aggiunge un foglio: la ricevuta del taxi del 2 ottobre e un bonifico di dodici euro al Comune. «Questo è mio», dice ai finanzieri. «Il resto no.» Esce alle 9:10. Alberto Vanni viene convocato alle 10."}
});
LIB.tune(69,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const m2=e.lists.mail.find(x=>x.id==="m2");m2.lock="seg";m2.body+="\nTablet n. 07.";
 e.pins={album:"4417",seg:"0902",note:"2207"};
 e.locks={album:{hint:"La fine dell'IBAN dove sono finiti i soldi."},seg:{name:"Mail protetta",hint:"Le trasferte contestate, poi quelle vere, con gli zeri."},note:{hint:"L'inizio della fine del mio IBAN, poi il numero del tablet."}};
 e.spots=[
  {id:"s1",x:180,y:120,label:"Sala consiliare",title:"Sala consiliare di Borgoverde",sub:"Consiglio comunale",body:"Il 14 ottobre seduta dalle 18 alle 23. Il verbale registra Sergio Valli presente e intervenuto due volte."},
  {id:"s2",x:206,y:142,label:"Da Mimmo",title:"Trattoria Da Mimmo",sub:"Borgoverde · ★ 4,0",body:"Recensione: «Qui si fanno le cene di partito. Ricevute? Ne danno quante ne vuoi.»"},
  {id:"s3",x:380,y:16,label:"Roma →",title:"Osteria del Tevere, Roma",sub:"★ 3,6",body:"Recensione: «Un signore di Borgoverde si fa dare blocchetti di ricevute in bianco. Il titolare ride e glieli dà.»"}];
 LIB.hints(e,["La Corte dei conti ha contato.","…e sommato.","Il telefono di Sergio si ricorda i viaggi.","Uno di quei giorni Sergio era a casa, in pubblico.","Le ricevute vengono sempre dagli stessi posti.","Chi ha firmato digitalmente, e con cosa?","La segreteria sa chi ha il tablet, ma la mail è chiusa.","Un vecchio messaggio di marzo.","La Corte ha scritto dove sono finiti i soldi.","Un vecchio bonifico, nascosto.","Sergio ha ammesso un errore suo.","Chi aveva il tablet, e di chi è l'IBAN?"]);
});
})();
