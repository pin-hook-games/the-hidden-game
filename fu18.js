(function(){
/* Furti 18: Il borsone (Catania). Soluzione: il presidente Lo Presti.
   Le quote (14.400 €, consegnate da Salvo in 6 volte con ricevuta) non sono mai arrivate in banca. Il presidente gli ha suggerito di lasciare il borsone in macchina, «tanto la portiera non chiude». Il borsone «rubato» era vuoto. Falsa pista: il mutuo di Salvo. */
const SC={
 squ:()=>LIB.group(6,"Polisportiva Etna, under 16","#2f6b4f"),
 ric:()=>LIB.doc("Ricevute firmate dal presidente","#33658a",["6 consegne di quote","da settembre a novembre","totale: 14.400 €","firma: G. Lo Presti"]),
 bor:()=>LIB.obj("#33658a","🎒","Il borsone delle quote"),
 est:()=>LIB.doc("Estratto conto società · screenshot","#a02822",["Versamenti contanti: 0","da settembre","Saldo: 312 €","(mandato dal tesoriere)"]),
 pul:()=>LIB.doc("Pullman Sicilia Bus · sollecito","#55606b",["Trasferte non pagate","settembre-novembre","3.600 €","Polisportiva Etna"]),
 mut:()=>LIB.doc("Banca · rata mutuo","#55606b",["Rata di ottobre","in ritardo di 12 giorni","pagata il 12/11","Salvo Grasso"])
};
const MAP=LIB.city("Catania",[[40,52,"Centro"],[132,132,"Campo Etna"],[276,132,"Ognina"],[40,232,"Porto"],[300,40,"Etna"],[200,200,"Viale"]],
 [[150,140,"#d43d55","campo",9,-10]],[["M0 214Q200 176 400 226",60]]);

LIB.add(58,["Il borsone","I genitori dei ragazzi vogliono sapere dove sono finite le quote della stagione","Catania"],{
 map:MAP,scenes:SC,owner:"Salvo Grasso",time:"19:00",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal map cal note",
 late:"Salvo deve andare ad allenare. Si riprende il telefono.",
 brief:"Salvo Grasso, 40 anni, allena gratis l'under 16 di una polisportiva di Catania. Raccoglieva lui le quote dei genitori e le consegnava al presidente. Martedì dalla sua macchina, davanti al campo, è sparito il borsone con «tutte le quote della stagione». I genitori ti hanno dato il suo telefono.",
 quote:"«Salvo è una brava persona, ma era l'ultimo ad avere il borsone. E qualcuno dice che è in ritardo con il mutuo. Noi abbiamo pagato duecentoquaranta euro a figlio. Vogliamo sapere dove sono.»",
 chats:[
  {id:"pre",name:"Presidente Lo Presti",sub:"",m:[
   ["sett",0,"Salvo, le quote portale a me in contanti, che faccio io il versamento in banca. Ti firmo la ricevuta ogni volta."],
   ["",2,"1 messaggio eliminato."],
   ["lun 22:00",0,"Salvo, domani il borsone con il resto lascialo in macchina sotto il sedile, che passo a prenderlo io. Tanto la portiera dietro non chiude, lo sanno tutti.","pre"],
   ["mer",0,"Salvo, che sfortuna. Comunque i soldi erano nel borsone, l'hai detto tu."]]},
  {id:"tes",name:"Tesoriere",sub:"Polisportiva",m:[
   ["mer",0,"Salvo, ti mando l'estratto conto. Da settembre non è entrato un euro in contanti. Le quote dove le portavi?"],
   ["mer",1,"Al presidente. Ho tutte le ricevute."]]},
  {id:"gen",name:"Genitori under 16",sub:"Gruppo",m:[
   ["mar",0,"Mamma di Luca: Ma il borsone c'era davvero dentro?"],
   ["mar",1,"Dentro c'erano le ultime quote, 600 euro. Il resto lo avevo già dato al presidente, con ricevuta."],
   ["mer",0,"Papà di Ciro: E allora perché il pullman non è pagato da settembre?"]]},
  {id:"pul",name:"Sicilia Bus",sub:"",m:[
   ["ott",0,"Mister, le trasferte da settembre non sono pagate. Il presidente dice sempre la settimana prossima."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Sicilia Bus",sub:"Sollecito",meta:"novembre",body:"Polisportiva Etna: trasferte settembre-novembre non pagate, 3.600 €."},
   {id:"m2",title:"Campo comunale",sub:"Affitto",meta:"novembre",body:"Affitto del campo non pagato da settembre."}],
  map:[
   {id:"g1",g:"Martedì",title:"Campo",sub:"17:00 - 19:30",body:"Macchina parcheggiata davanti al cancello."}],
  cal:[
   {id:"c1",g:"Ogni martedì",title:"Allenamento under 16",sub:"17:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: quanti euro c'erano davvero nel borsone, con uno zero davanti.\nNota sotto: quanto deve la società ai pullman, senza punto."},
   {id:"n2",title:"Per i genitori",lock:"note",body:"Ho consegnato 14.400 € al presidente in sei volte, con la sua firma.\nIn banca non è mai arrivato niente. Il pullman e il campo non sono pagati.\nMartedì nel borsone c'erano 600 €. Era stato lui a dirmi di lasciarlo in macchina.\nIl mutuo l'ho pagato con lo stipendio, in ritardo, come tanti."}],
  tel:[
   {id:"t1",title:"Presidente Lo Presti",sub:"lun 22:05 · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"sett",title:"La squadra",sc:"squ"},
  {id:"p2",t:"mar",title:"Il borsone",sc:"bor"},
  {id:"p3",t:"nov",title:"Mutuo",sc:"mut"},
  {id:"h1",t:"nov",title:"Ricevute",sc:"ric",lock:"album"},
  {id:"h2",t:"mer",title:"Estratto conto",sc:"est",lock:"album"},
  {id:"h3",t:"nov",title:"Pullman",sc:"pul",lock:"album"}],
 pins:{note:"3600",album:"0600"},
 events:[{id:"a",q:3,kind:"sms",from:"Presidente Lo Presti",text:"Salvo, i genitori sono agitati. Se gli dici che il borsone l'hai lasciato aperto tu, finisce qui. Ci penso io a calmarli."},
         {id:"b",q:7,kind:"call",from:"Papà di Ciro",lines:["«Mister? Ah, scusi. Ho chiamato il campo comunale.»","«Mi hanno detto che l'affitto non lo paga nessuno da settembre. E che il presidente si è comprato una barca.»","«Glielo dica al mister.»"]}],
 qs:[
  {t:"600",q:"Quanto c'era davvero nel borsone, martedì?",a:["600","600 euro","600 €","seicento"],show:"600 €, le ultime quote",hint:"Gruppo dei genitori.",news:"Non «tutte le quote della stagione»."},
  {t:"Lo Presti",q:"A chi consegnava Salvo le quote?",any:["presti","president"],show:"Al presidente Lo Presti",hint:"Chat con il presidente.",news:"In contanti, con ricevuta."},
  {t:"6",q:"In quante consegne?",a:["6","sei","6 consegne"],show:"Sei",hint:"Ricevute, nell'album privato: il codice è quanti euro c'erano nel borsone, con uno zero davanti.",news:"Tutte firmate dal presidente."},
  {t:"0",q:"Quanti versamenti in contanti risultano sul conto della società da settembre?",a:["0","zero","nessuno"],show:"Zero",hint:"Chat con il tesoriere.",news:"Saldo 312 €. Ora hai recuperato il messaggio che il presidente ti aveva mandato lunedì sera e poi cancellato.",unlock:"pre"},
  {t:"3600",q:"Quanto deve la società alla ditta dei pullman?",a:["3600","3.600","3600 euro","3.600 euro","3.600 €"],show:"3.600 €",hint:"Mail di Sicilia Bus.",news:"E anche il campo non è pagato."},
  {t:"in macchina",q:"Dove gli aveva detto il presidente di lasciare il borsone?",any:["macchin","sedil","auto"],show:"In macchina, sotto il sedile",hint:"Messaggio recuperato nella chat del presidente.",news:"«Tanto la portiera dietro non chiude.»"},
  {t:"mutuo",q:"La falsa pista: con che cosa è in ritardo Salvo?",any:["mutu"],show:"Con una rata del mutuo",hint:"Galleria.",news:"Dodici giorni, pagata con lo stipendio."},
  {t:"barca",q:"Che cosa si è comprato il presidente, secondo il papà di Ciro?",any:["barc"],show:"Una barca",hint:"La telefonata.",news:"Con quali soldi, viene da chiedersi."},
  {t:"p",q:"Chi ha preso le quote?",o:[["s","Salvo"],["l","Un ladro davanti al campo"],["p","Il presidente Lo Presti"],["t","Il tesoriere"],["g","Un genitore"]],a:"p",show:"Il presidente Lo Presti",hint:"Ricevute e conto vuoto.",news:""}],
 win:{title:"Le quote le ha prese il presidente Lo Presti.",
  steps:["Salvo ha consegnato al presidente le quote in sei volte, con ricevuta firmata.","Sul conto della società da settembre non è entrato un euro in contanti. Pullman e campo non sono pagati.","Nel borsone c'erano solo 600 €. Era stato il presidente a dirgli di lasciarlo in macchina, «tanto la portiera non chiude».","Il ritardo sul mutuo di Salvo è di una rata."],
  end:"I genitori portano le ricevute in procura. La polisportiva cambia presidente, e la nuova è la mamma di Luca. Al primo allenamento di dicembre Salvo trova sulla panchina un borsone nuovo, con un biglietto: «Le quote le teniamo noi. Tu allena.»"}
});
LIB.tune(58,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const m2=e.lists.mail.find(x=>x.id==="m2");m2.lock="cam";m2.body="Affitto del campo non pagato da settembre: 1.800 €.\nAl telefono il presidente ci ha detto che i soldi «li ha l'allenatore».";
 e.pins={album:"0600",cam:"1624",note:"0618"};
 e.locks={album:{hint:"Quello che c'era davvero, con lo zero davanti."},cam:{name:"Mail protetta",hint:"La categoria dei ragazzi, poi la quota senza l'ultimo zero."},note:{hint:"Quante volte ho consegnato, poi le centinaia del campo."}};
 e.spots=[
  {id:"s1",x:150,y:140,label:"Campo Etna",title:"Campo Etna",sub:"Campo comunale",body:"Parcheggio davanti al cancello, nessuna telecamera. Tutti sanno che la portiera dietro dell'auto del mister non chiude."},
  {id:"s2",x:50,y:226,label:"Porto turistico",title:"Porto turistico",sub:"★ 4,3",body:"Recensione: «A ottobre il presidente di una squadra di calcio si è preso un gommone nuovo. Bello, pagato in contanti.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"1800",q:"Quanto deve la società per l'affitto del campo?",a:["1800","1.800","1800 euro","1.800 euro","1.800 €"],show:"1.800 €",hint:"",news:"E al campo il presidente ha detto che i soldi li aveva l'allenatore."});
 LIB.hints(e,["Salvo l'ha detto ai genitori.","Salvo ha sempre fatto firmare qualcuno.","Contale, le firme.","Chi tiene i conti ha guardato la banca.","Chi porta la squadra in trasferta non è stato pagato.","Un messaggio di lunedì sera, poi sparito.","C'è chi guarda Salvo per un'altra ragione.","Un genitore ha fatto qualche telefonata.","Anche il campo ha scritto, chiuso.","Ricevute e conto vuoto."]);
});
})();
