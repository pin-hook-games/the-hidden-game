(function(){
/* Furti 2: Cassaforte aperta (Vicenza). Soluzione: il furto è finto, è stato Renato.
   Ha portato la merce in un box a ore due giorni prima, aveva alzato la polizza, l'allarme è stato spento con il suo codice. Prima perizia di Gualtieri. */
const SC={
 lab:()=>LIB.obj("#c9b79c","💍","Il laboratorio, via Contrà Porti"),
 inv:()=>LIB.doc("Inventario · 3 novembre","#33658a",["Anelli: 24","Collane: 18","Bracciali: 20","Totale pezzi: 62"]),
 den:()=>LIB.doc("Denuncia · 12 novembre","#a02822",["Pezzi sottratti: 140","Valore dichiarato: 238.000 €","Nessun segno di scasso","Cassaforte aperta"]),
 box:()=>LIB.doc("Deposito Facile · ricevuta","#55606b",["Box 17","Ingresso: 10 nov, 21:15","Pagamento: contanti","Nome: R. Dalla Via"]),
 all:()=>LIB.doc("Centrale allarme · registro","#2f6b4f",["12 nov 00:47","Disinserimento","Codice utente 1","(titolare)"]),
 api:()=>LIB.two("#c9b79c","#7a3b5a","#2f6b4f","Con Kevin, l'apprendista, 2023")
};
const MAP=LIB.city("Vicenza",[[40,52,"Centro"],[132,132,"Contrà Porti"],[276,132,"Stazione"],[40,232,"Zona industriale"],[300,40,"Monte Berico"],[200,200,"Bacchiglione"]],
 [[160,120,"#d43d55","laboratorio",9,-10],[70,226,"#33658a","Deposito Facile",9,-8]]);

LIB.add(42,["Cassaforte aperta","L'assicurazione vuole sapere come sono spariti i gioielli di un orafo","Vicenza"],{
 map:MAP,scenes:SC,owner:"Renato Dalla Via",time:"15:00",date:"sab 15 nov",homeDate:"sabato 15 novembre",
 appIds:"msg tel mail gal map cal note bank",
 late:"Renato ha chiesto indietro il telefono: «Ci sono i miei clienti lì dentro.»",
 brief:"Il perito assicurativo Gualtieri ti ha portato il telefono di Renato Dalla Via, 57 anni, orafo, che lo ha consegnato «per collaborare». Mercoledì notte dal suo laboratorio sono spariti 140 pezzi, senza segni di scasso. Renato accusa un ex apprendista licenziato, che conosceva la combinazione.",
 quote:"«Faccio questo lavoro da trent'anni, e un furto così pulito l'ho visto poche volte. Nessuna porta forzata, cassaforte aperta con la combinazione. Lui dice: il ragazzo che ho licenziato. Io dico: guardi bene. Io intanto prendo appunti.» Gualtieri sorride, e scrive qualcosa su un taccuino.",
 chats:[
  {id:"kev",name:"Kevin",sub:"Ex apprendista",m:[
   ["set",0,"Signor Renato, mi spiace come è finita. Le restituisco le chiavi per posta."],
   ["gio",0,"Mi hanno chiamato i carabinieri. Io mercoledì notte ero a Padova a lavorare, al turno di notte. Hanno il cartellino."]]},
  {id:"com",name:"Commercialista",sub:"",m:[
   ["ott",0,"Renato, il laboratorio ha 90.000 € di debiti con i fornitori. A gennaio non riesci a pagare."],
   ["ott",1,"Ho un'idea. Ti spiego a voce."]]},
  {id:"ass",name:"Agente assicurazione",sub:"",m:[
   ["13 ott",1,"Volevo alzare la copertura del laboratorio."],
   ["13 ott",0,"Fatto: da 80.000 a 250.000 €. Decorre da subito."]]},
  {id:"dep",name:"Deposito Facile",sub:"",m:[
   ["",2,"1 messaggio eliminato."],
   ["10 nov 21:20",0,"Gentile cliente, il box 17 è attivo. Codice di accesso: 1710. Buon deposito.","dep"]]},
  {id:"mog",name:"Moglie",sub:"",m:[
   ["mar",0,"Dove vai stasera così tardi?"],
   ["mar",1,"Al laboratorio a fare l'inventario. Torno presto."]]}
 ],
 lists:{
  bank:[
   {id:"b1",g:"Ottobre",title:"Premio assicurativo",sub:"− 3.900,00 €",body:"Aumento copertura laboratorio."},
   {id:"b2",g:"Novembre",title:"Prelievo contanti",sub:"− 300,00 €",body:"10 nov, sportello Viale Milano."}],
  mail:[
   {id:"m1",title:"Centrale allarme",sub:"Registro eventi",meta:"giovedì",body:"12 nov ore 00:47: disinserimento con codice utente 1 (titolare).\nNessun allarme intrusione."},
   {id:"m2",title:"Perito Gualtieri",sub:"Richiesta documenti",meta:"venerdì",body:"Gentile sig. Dalla Via, mi invii l'ultimo inventario fotografico e il codice dei dipendenti. Mi annoto anche la marca della cassaforte e quella dell'allarme, per la pratica."}],
  map:[
   {id:"g1",g:"Cronologia",title:"Deposito Facile",sub:"10 nov · 21:10 - 21:50",body:"Zona industriale."},
   {id:"g2",g:"Cronologia",title:"Laboratorio",sub:"12 nov · 00:40 - 00:55",body:""}],
  cal:[
   {id:"c1",g:"Novembre",title:"Lun 10 · Inventario",sub:"21:00",body:""},
   {id:"c2",g:"Novembre",title:"Gio 13 · Denuncia",sub:"9:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui ho disinserito, quattro cifre.\nNota sotto: il codice del box."},
   {id:"n2",title:"Piano",lock:"note",body:"Lunedì porto la merce al box 17. Mercoledì notte apro e lascio la cassaforte aperta.\nL'assicurazione paga 238.000, pago i fornitori e riprendo i pezzi a primavera, uno alla volta.\nSe chiedono, c'è Kevin."}],
  tel:[
   {id:"t1",title:"Agente assicurazione",sub:"13 ott · in uscita, 8 min"},
   {id:"t2",title:"Carabinieri",sub:"12 nov 7:30 · in uscita, 4 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Laboratorio",sc:"lab"},
  {id:"p2",t:"3 nov",title:"Inventario",sc:"inv"},
  {id:"p3",t:"13 nov",title:"Denuncia",sc:"den"},
  {id:"p4",t:"2023",title:"Con Kevin",sc:"api"},
  {id:"h1",t:"10 nov 21:16",title:"Ricevuta",sc:"box",lock:"album"},
  {id:"h2",t:"12 nov",title:"Allarme",sc:"all",lock:"album"}],
 pins:{note:"1710",album:"0047"},
 events:[{id:"a",q:3,kind:"call",from:"Gualtieri",lines:["«Sono Gualtieri. Le ricordo una cosa: in queste pratiche contano le date.»","«Guardi quando è stata alzata la polizza, e quando è stato fatto l'ultimo inventario.»","«Io intanto mi segno il modello della cassaforte. Per scrupolo.»"]},
         {id:"b",q:8,kind:"sms",from:"Commercialista",text:"Renato, tutto bene? Ho letto del furto. Non dirmi che era questa la tua idea."}],
 qs:[
  {t:"140",q:"Quanti pezzi ha denunciato Renato?",a:["140","centoquaranta","140 pezzi"],show:"140",hint:"Foto della denuncia.",news:"Valore dichiarato: 238.000 €."},
  {t:"62",q:"Quanti pezzi c'erano nell'inventario fotografato il 3 novembre?",a:["62","sessantadue","62 pezzi"],show:"62",hint:"Galleria.",news:"Meno della metà di quelli denunciati, nove giorni prima."},
  {t:"250000",q:"A quanto ha alzato la copertura un mese prima?",a:["250000","250.000","250 mila","250000 euro","250.000 euro","250.000 €","duecentocinquantamila"],show:"Da 80.000 a 250.000 €",hint:"Chat con l'agente e Banca.",news:"Decorrenza immediata, il 13 ottobre."},
  {t:"90000",q:"Quanti debiti ha il laboratorio con i fornitori?",a:["90000","90.000","90 mila","90000 euro","90.000 euro","90.000 €","novantamila"],show:"90.000 €",hint:"Chat con il commercialista.",news:"«A gennaio non riesci a pagare.» «Ho un'idea.»"},
  {t:"Padova",q:"Dove era Kevin, l'ex apprendista, la notte del furto?",any:["padova","lavor","turno"],show:"A Padova, al turno di notte",hint:"Chat con Kevin.",news:"Con il cartellino. La falsa pista cade."},
  {t:"00:47",q:"A che ora è stato disinserito l'allarme?",all:["0047"],show:"Alle 00:47",hint:"Mail della centrale.",news:"Con il codice utente 1."},
  {t:"titolare",q:"Di chi è il codice utente 1?",any:["titolar","renato","lui"],show:"Del titolare: Renato",hint:"Mail della centrale e album privato. Il codice dell'album è quell'ora.",news:"E le Mappe mettono il suo telefono al laboratorio dalle 00:40 alle 00:55."},
  {t:"Deposito Facile",q:"Dove è andato Renato la sera del 10 novembre, quando diceva di fare l'inventario?",any:["deposit","box","magazzin"],show:"Al Deposito Facile",hint:"Mappe.",news:"Ora sai dove cercare: hai recuperato il messaggio del deposito con il codice del box.",unlock:"dep"},
  {t:"17",q:"Quale box?",a:["17","box 17","diciassette","il 17"],show:"Box 17",hint:"Messaggio recuperato o ricevuta.",news:"Codice di accesso 1710."},
  {t:"Kevin",q:"Nella nota protetta, chi Renato pensava di far accusare?",any:["kevin","apprendist"],show:"Kevin",hint:"Il codice è quello del box.",news:"«Se chiedono, c'è Kevin.»"},
  {t:"f",q:"Che cosa è successo nel laboratorio?",o:[["k","Kevin ha aperto la cassaforte"],["f","Il furto è finto: Renato ha nascosto la merce per incassare l'assicurazione"],["l","Un ladro esperto con un codice clonato"],["m","La moglie di Renato"],["g","Il perito Gualtieri"]],a:"f",show:"Furto finto",hint:"Inventario, polizza, codice dell'allarme, box 17.",news:""}],
 win:{title:"Il furto è finto. È stato Renato.",
  steps:["Renato ha denunciato 140 pezzi; nell'inventario del 3 novembre ce n'erano 62.","Il 13 ottobre ha alzato la polizza da 80.000 a 250.000 €. Ha 90.000 € di debiti.","Il 10 novembre ha portato la merce nel box 17 del Deposito Facile.","Il 12 alle 00:47 ha disinserito l'allarme con il suo codice. Kevin era al turno di notte a Padova."],
  end:"Gualtieri chiude il taccuino. «Bel lavoro. Mi segno il box, la cassaforte e l'allarme: non si sa mai.» Nel box 17 i carabinieri trovano i 140 pezzi. Kevin riceve una lettera di scuse, scritta dalla moglie di Renato."}
});
LIB.tune(42,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.push({id:"m3",title:"Oro Bortolan",sub:"Padova",meta:"novembre",lock:"of",body:"Renato, come d'accordo: a primavera ti ritiro i pezzi al 60% del valore, un po' alla volta, senza fattura.\nPassa da me in via Roma 38, dopo le 19."});
 e.pins={album:"0047",of:"8025",note:"1738"};
 e.locks={album:{hint:"Quando il laboratorio ha smesso di fare la guardia."},of:{name:"Mail protetta",hint:"Quanto valeva la polizza prima e dopo ottobre, senza zeri."},note:{hint:"Dove li ho messi, poi dove li riprenderanno."}};
 e.spots=[
  {id:"s1",x:160,y:120,title:"Laboratorio Dalla Via",sub:"Orafo · ★ 4,8",body:"Recensione: «Renato chiude alle 19 in punto. Mai visto aperto di notte.»"},
  {id:"s2",x:70,y:226,title:"Deposito Facile",sub:"Box a ore · aperto 24 ore su 24",body:"Accesso con codice personale.\nRecensione: «Nessuno ti chiede niente, puoi entrare anche di notte. Comodissimo.»"},
  {id:"s3",x:330,y:60,label:"Logistica Nord",title:"Logistica Nord, Padova",sub:"Magazzino · turni 22-6",body:"Recensione di un dipendente: «I cartellini sono controllati al minuto. Dal turno di notte non scappi.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"Bortolan",q:"A chi pensava di rivendere i pezzi, a primavera?",any:["bortolan"],show:"A Oro Bortolan, a Padova, senza fattura",hint:"",news:"Il 60% del valore, un po' alla volta. Il piano era completo."});
 LIB.hints(e,["La cifra che ha messo nero su bianco ai carabinieri.","Nove giorni prima qualcuno li ha contati, uno per uno.","Un mese prima, una telefonata a chi lo assicura.","Chi gli tiene i conti non era tranquillo.","Il ragazzo ha un lavoro che lascia traccia.","C'è una macchina che registra chi entra e chi esce.","Ogni codice ha un proprietario.","Quella sera non è rimasto dove diceva.","Chi affitta spazi manda sempre un benvenuto.","Nel suo piano c'era un nome di riserva.","Riprenderli, d'accordo. Ma da chi?","Inventario, polizza, allarme, box."]);
});
})();
