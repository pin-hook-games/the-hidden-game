(function(){
/* Intrighi 3: La foto (San Leone al Mare, comune inventato). Soluzione: Rocco Melis, alleato della stessa coalizione.
   Ha commissionato un fotomontaggio di Elena accanto a un imprenditore indagato per prenderle il posto in lista. */
const SC={
 ori:()=>LIB.group(3,"Lido Azzurro · 15 agosto, 23:10","#9cc7d6"),
 fal:()=>LIB.group(4,"La foto che gira · «Elena e Saro Greco»","#9cc7d6"),
 lis:()=>LIB.doc("Lista Ponte · ordine","#33658a",["1. Marco Fadda, capolista","2. Elena Costa","3. Rocco Melis","4. Anna Puddu"]),
 kid:()=>LIB.two("#f0d9a0","#7a3b5a","#2f6b4f","Con Sara al mercato"),
 fat:()=>LIB.doc("Studio Pixel · fattura","#a02822",["Cliente: R. Melis","«Elaborazione grafica volantino»","250,00 €","10 novembre"]),
 prof:()=>LIB.doc("Profilo @verita_sanleone","#55606b",["Creato martedì 11 novembre","Post pubblicati: 1","Follower: 0","Primo post: giovedì 09:00"])
};
const MAP=LIB.prov([[318,208,"#d43d55","Lido Azzurro",-96,4],[300,196,"#33658a","casa",-40,-14]]);

LIB.add(63,["La foto","Elena vuole sapere chi ha fatto girare una sua foto falsa","San Leone al Mare"],{
 map:MAP,scenes:SC,owner:"Elena Costa",time:"19:30",date:"ven 14 nov",homeDate:"venerdì 14 novembre",
 appIds:"msg tel mail web gal cal note social",
 late:"Elena deve salire sul palco per il comizio. Ti chiede indietro il telefono.",
 brief:"Elena Costa, 38 anni, candidata della lista Ponte a San Leone al Mare, ti ha consegnato il suo telefono. Da ieri mattina gira una sua foto a una festa d'estate, abbracciata a un imprenditore indagato. Lei dice che quella sera lui non c'era. Il comizio è tra mezz'ora.",
 quote:"«Mi chiedono di ritirarmi. Gli avversari la rilanciano dappertutto e il primo a farlo è stato Aldo Russo. Ma io quella foto ce l'ho, quella vera. Voglio sapere chi ha preso la mia festa e ci ha messo dentro un altro.»",
 chats:[
  {id:"coal",name:"Coalizione Ponte",sub:"Gruppo · 9",m:[
   ["gio 09:30",0,"Marco Fadda: Elena, che storia è questa? Chiarisci entro sera."],
   ["gio 09:40",1,"È un fotomontaggio. Ho l'originale."],
   ["",2,"1 messaggio eliminato giovedì alle 09:03."],
   ["gio 09:02",0,"Rocco Melis: Se Elena si ritira il posto in lista tocca a me, giusto? Chiedo per organizzarmi.","roc"],
   ["gio 10:00",0,"Rocco Melis: Elena, sono con te. Fino alla fine."]]},
  {id:"ivo",name:"Ivo grafico",sub:"",m:[
   ["gio 21:00",0,"Elena, devo dirle una cosa e mi vergogno. Ho fatto un lavoro, una settimana fa, per un volantino «satirico». Mi hanno dato una sua foto e una di Greco. Non sapevo che sarebbe finita così."],
   ["gio 21:05",1,"Chi te lo ha chiesto, Ivo?"],
   ["gio 21:30",0,"Le mando la fattura. Non voglio guai, ma neanche tenermi questa cosa."]]},
  {id:"russo",name:"Aldo Russo",sub:"Avversario",m:[
   ["gio 11:00",0,"Elena, ho condiviso quella foto alle 10:40. Ho sbagliato: ora che ho visto la tua smentita l'ho tolta e chiedo scusa in pubblico. Non l'ho fatta io, l'ho solo vista girare."],
   ["gio 11:10",1,"Grazie Aldo. Tolta è già qualcosa."]]},
  {id:"saro",name:"Avv. di Saro Greco",sub:"",m:[
   ["gio 15:00",0,"Gentile signora, il mio assistito il 15 agosto era a Malta, con biglietti e albergo. Anche lui intende querelare chi ha diffuso la foto."]]},
  {id:"lucia",name:"Lucia",sub:"Amica",m:[
   ["15 ago",0,"[foto] Noi tre al Lido Azzurro! La mandi tu sul gruppo?"],
   ["gio 08:50",0,"Ele ma che cos'è questa foto? Quella sera eravamo io, tu e Paola. Basta. Ce l'ho anch'io."]]},
  {id:"marco",name:"Marco Fadda",sub:"Capolista",m:[
   ["gio 19:00",0,"Elena, se domani la foto è ancora in giro devo chiederti un passo indietro. Mi dispiace."],
   ["gio 19:10",1,"Dammi un giorno, Marco."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"La foto che gira",title:"@verita_sanleone",sub:"Primo post · giovedì 09:00",body:"«Ecco con chi va a ballare la candidata Costa.»\nProfilo creato martedì 11 novembre. Un solo post."},
   {id:"s2",g:"La foto che gira",title:"@aldorusso_sindaco",sub:"Condivisa giovedì alle 10:40",meta:"Rimossa",body:"Condivisa alle 10:40, rimossa alle 11:05 con le scuse."},
   {id:"s3",g:"Il tuo profilo",title:"@elena.costa",sub:"Post del 16 agosto",body:"«Ferragosto con le mie amiche di sempre.» La foto vera, tre persone."}],
  mail:[
   {id:"m1",title:"Ivo · Studio Pixel",sub:"Fattura",meta:"giovedì 21:32",body:"«Questa è la fattura del lavoro. Il cliente me lo ha chiesto di persona, il 7 novembre.»\nCliente: R. Melis. Elaborazione grafica volantino. 250,00 €."},
   {id:"m2",title:"Ponte",sub:"Ordine della lista",meta:"ottobre",body:"1. Marco Fadda. 2. Elena Costa. 3. Rocco Melis. 4. Anna Puddu.\nIn caso di ritiro, i candidati successivi salgono di una posizione."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come riconoscere un fotomontaggio",sub:"gio 09:10"},
   {id:"w2",g:"Cronologia",title:"saro greco indagato appalti porto",sub:"gio 09:15"}],
  cal:[
   {id:"c1",g:"Agosto",title:"15 ago · Lido Azzurro",sub:"21:00",body:"Con Lucia e Paola."},
   {id:"c2",g:"Questa settimana",title:"Ven · Comizio",sub:"20:00",body:"Piazza del porto."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora del primo post della foto falsa, quattro cifre.\nNota sotto: la posizione di Rocco in lista, poi i soldi pagati al grafico."},
   {id:"n2",title:"Rocco",lock:"note",body:"A ottobre Rocco voleva il secondo posto e Marco ha scelto me.\nDa allora mi sorride troppo.\nNon voglio crederci. Ma se è lui, lo dico dal palco."}],
  tel:[
   {id:"t1",title:"Ivo grafico",sub:"gio 20:55 · in entrata, 1 min"},
   {id:"t2",title:"Rocco Melis",sub:"gio 10:02 · in entrata, 3 min"}]
 },
 photos:[
  {id:"p1",t:"15 ago 23:10",title:"Noi tre",sc:"ori"},
  {id:"p2",t:"gio 09:05",title:"Quella che gira",sc:"fal"},
  {id:"p3",t:"ott",title:"La lista",sc:"lis"},
  {id:"p4",t:"set",title:"Con Sara",sc:"kid"},
  {id:"h1",t:"gio 21:32",title:"Da Ivo",sc:"fat",lock:"album"},
  {id:"h2",t:"gio 09:20",title:"Il profilo",sc:"prof",lock:"album"}],
 pins:{note:"3250",album:"0900"},
 events:[{id:"a",q:3,kind:"call",from:"Rocco Melis",lines:["«Elena? Sono Rocco. Come stai, cara?»","«Senti, se ti serve una mano stasera sul palco ci sono. E se decidi di fare un passo indietro, nessuno ti giudica. Pensaci.»","«Elena?»"]},
         {id:"b",q:8,kind:"sms",from:"Lucia",text:"Ele, Paola ha ritrovato anche il video della serata. Ci siamo solo noi tre, e la musica pessima. Te lo mando?"}],
 qs:[
  {t:"Lido Azzurro",q:"Dove è stata scattata la foto della festa?",any:["lido","azzurro"],show:"Al Lido Azzurro, il 15 agosto",hint:"Calendario e Galleria.",news:"Una festa di Ferragosto tra amiche."},
  {t:"3",q:"Quante persone ci sono nella foto originale?",a:["3","tre","3 persone","tre persone"],show:"Tre",hint:"Guarda la foto del 15 agosto in Galleria.",news:"Elena, Lucia e Paola. Nella foto che gira ce n'è una in più."},
  {t:"Malta",q:"Dov'era Saro Greco il 15 agosto, secondo il suo avvocato?",any:["malta"],show:"A Malta",hint:"Messaggio dell'avvocato.",news:"Con biglietti e albergo. Quella sera non poteva essere al Lido Azzurro."},
  {t:"09:00",q:"Chi ha pubblicato per primo la foto? A che ora è uscito il primo post?",all:["900"],show:"Giovedì alle 09:00",hint:"Apri Scatto.",news:"Da un profilo, @verita_sanleone, con un solo post e zero follower."},
  {t:"2",q:"Quanti giorni prima del primo post è stato creato quel profilo?",a:["2","due","2 giorni","due giorni"],show:"Due giorni prima",hint:"Il profilo è stato creato martedì 11.",news:"Un profilo nato per una sola foto."},
  {t:"10:40",q:"Aldo Russo l'ha rilanciata. A che ora?",all:["1040"],show:"Alle 10:40",hint:"Lo scrive lui, e lo dice Scatto.",news:"Un'ora e quaranta dopo. E alle 11:05 l'ha tolta, con le scuse. Non è lui ad averla creata."},
  {t:"Ivo",q:"Chi ha fatto materialmente il fotomontaggio?",any:["ivo","grafic","pixel"],show:"Ivo, il grafico di Studio Pixel",hint:"Leggi la chat di giovedì sera.",news:"«Un volantino satirico», gli avevano detto."},
  {t:"Rocco Melis",q:"Per quale cliente ha lavorato Ivo? Nome e cognome.",all:["rocco","melis"],show:"Rocco Melis",hint:"La fattura è nella Mail.",news:"Un alleato, nella stessa lista. Ora che sai chi è, hai recuperato il messaggio che Rocco ha cancellato nel gruppo della coalizione.",unlock:"roc"},
  {t:"09:02",q:"A che ora Rocco ha scritto il messaggio poi cancellato?",all:["902"],show:"Alle 09:02",hint:"Gruppo Coalizione Ponte.",news:"Due minuti dopo il primo post. «Se Elena si ritira il posto in lista tocca a me, giusto?»"},
  {t:"terzo",q:"In quale posizione è Rocco nella lista?",a:["3°","terzo","al terzo","terzo posto","n. 3","numero 3","3 posto","al terzo posto"],show:"Terzo, subito dopo Elena",hint:"C'è l'ordine della lista nella Mail e in Galleria.",news:"Se Elena si ritira, lui sale al secondo posto."},
  {t:"250",q:"Nell'album privato c'è la fattura. Quanto ha pagato Rocco?",a:["250","250 euro","250€","250,00"],show:"250 €",hint:"Il codice dell'album è l'ora del primo post.",news:"Datata 10 novembre, il giorno prima che nascesse il profilo."},
  {t:"ottobre",q:"Nella nota protetta Elena racconta da quando Rocco «sorride troppo». Da quale mese?",any:["ottobre"],show:"Da ottobre, quando Marco ha scelto lei",hint:"Il codice: la posizione di Rocco in lista, poi i soldi al grafico.",news:"«Se è lui, lo dico dal palco.»"},
  {t:"r",q:"Chi ha fatto girare la foto falsa?",o:[["a","Aldo Russo, l'avversario"],["i","Ivo, il grafico"],["r","Rocco Melis, l'alleato"],["m","Marco Fadda, il capolista"],["g","Saro Greco"],["l","Lucia, l'amica"]],a:"r",show:"Rocco Melis",hint:"Chi ha pagato il montaggio e ci guadagna il posto?",news:""}],
 win:{title:"La foto l'ha commissionata Rocco Melis, l'alleato.",
  steps:["La foto vera del 15 agosto ha tre persone. Saro Greco quella sera era a Malta.","Il montaggio lo ha fatto Ivo, grafico, pagato 250 € da Rocco Melis il 10 novembre.","Il profilo che l'ha pubblicata è nato l'11, il primo post è di giovedì alle 09:00.","Alle 09:02 Rocco ha chiesto nel gruppo se, ritirandosi Elena, il posto toccava a lui, poi ha cancellato il messaggio.","Aldo Russo l'ha solo rilanciata e poi tolta, Marco Fadda chiedeva un chiarimento."],
  end:"Elena sale sul palco con il telefono in mano e la foto vera sullo schermo. Non fa nomi. Mostra le tre amiche, poi la fattura, poi guarda verso la seconda fila, dove Rocco smette di applaudire."}
});
LIB.tune(63,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="fat";
 e.pins={album:"0900",fat:"1508",note:"0711"};
 e.locks={album:{hint:"L'ora in cui quel profilo ha parlato per la prima volta."},fat:{name:"Mail protetta",hint:"Il giorno della festa, poi il mese."},note:{hint:"Il giorno in cui l'ha chiesto di persona, poi il giorno in cui è nato il profilo."}};
 e.spots=[
  {id:"s1",x:330,y:220,label:"Lido Azzurro",title:"Lido Azzurro",sub:"Stabilimento balneare · ★ 4,2",body:"A Ferragosto festa sulla spiaggia. Recensione: «Foto bellissime, e nessun politico, per fortuna.»"},
  {id:"s2",x:300,y:196,label:"Comitato Ponte",title:"Comitato della lista Ponte",sub:"San Leone al Mare",body:"Nella vetrina, la lista dei candidati in ordine."},
  {id:"s3",x:350,y:196,label:"Studio Pixel",title:"Studio Pixel · grafica",sub:"★ 3,3",body:"Recensione: «Ti fa qualsiasi montaggio, basta pagare. Anche cose che non dovrebbe.»"}];
 LIB.hints(e,["Elena si ricorda dov'era a Ferragosto.","Conta le persone nella foto vera.","L'avvocato dell'avversario ha risposto.","Chi l'ha pubblicata per primo, e quando?","Il profilo ha una data di nascita.","Un avversario l'ha rilanciata, poi si è scusato.","Il grafico ha chiamato, e scritto.","Una fattura, chiusa a chiave.","Nella coalizione qualcuno ha scritto troppo presto.","La lista ha un ordine.","La fattura è anche in un posto nascosto.","Elena ha scritto di un sorriso.","Chi ha pagato il montaggio, e chi ci guadagna il posto?"]);
});
})();
