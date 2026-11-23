(function(){
/* Intrighi 1: Fuori onda (Borgoverde, comune inventato). Soluzione: l'addetto stampa Dario Fumagalli ha scaricato la registrazione e l'ha passata, tagliata.
   Ha già in tasca un contratto con la lista avversaria che parte dopo il voto. */
const SC={
 com:()=>LIB.group(5,"Comitato Insieme · inaugurazione","#33658a"),
 ann:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Anna, festa della vendemmia"),
 fil:()=>LIB.shot("Borgoverde Oggi · mercoledì 08:00",["«Il quartiere Fornaci lo sacrifichiamo,","tanto lì non ci votano.» (0:12)"]),
 tre:()=>LIB.doc("Biglietto del treno","#2f8f6b",["Borgoverde → Milano Centrale","martedì, partenza 18:34","1 adulto","inoltrato da Elisa alle 18:22"]),
 con:()=>LIB.doc("Lettera d'incarico","#a02822",["Alleanza Civica · comunicazione","Incaricato: Dario Fumagalli","Decorrenza: 1° dicembre","Firmata il 6 novembre"]),
 acc:()=>LIB.doc("Drive · attività del file","#33658a",["Riunione 18 novembre.m4a","Caricato da M. Sarti alle 18:42","Scaricato da d.fumagalli","martedì alle 23:50"])
};
const MAP=LIB.prov([[180,120,"#d43d55","comitato",-60,-14],[206,150,"#56666e","Fornaci",9,14]]);

LIB.add(61,["Fuori onda","Anna vuole sapere chi ha tradito il marito Michele","Borgoverde"],{
 map:MAP,scenes:SC,owner:"Michele Sarti",time:"09:15",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail web gal cal note drive",extraApps:[["rec","Registratore","mic","#e2574c,#a02822"]],
 late:"Michele è rientrato dal giro dei mercati e si è ripreso il telefono. L'indagine si ferma qui.",
 brief:"Anna ti ha portato il telefono del marito, Michele Sarti, 46 anni, candidato sindaco della lista Insieme a Borgoverde. Mercoledì mattina un sito locale ha pubblicato dodici secondi di una sua riunione privata. Si vota domenica. Michele è al mercato fino alle dieci.",
 quote:"«In quell'audio sembra che disprezzi un intero quartiere. Lui giura che la frase era un'altra. In quella stanza c'erano solo tre persone, e una ha venduto mio marito. Mi dica chi, prima di domenica. Lui non vuole credere che sia uno dei suoi.»",
 chats:[
  {id:"anna",name:"Anna",sub:"Moglie",m:[
   ["mer 08:10",0,"Michele hai visto Borgoverde Oggi?"],
   ["mer 08:12",1,"Sì. È tagliata. Io stavo citando loro, non parlando per me."],
   ["mer 08:13",0,"Allora dimostralo."]]},
  {id:"dario",name:"Dario",sub:"Addetto stampa",m:[
   ["mar 17:40",0,"Riunione alle sei nel tuo ufficio, siamo io, tu ed Elisa. Registri tu come sempre?"],
   ["mar 17:41",1,"Sì, poi la carico nella cartella condivisa."],
   ["mer 08:30",0,"Che disastro. Sarà stato l'autista, Bruno: ti aveva giurato vendetta."],
   ["",2,"2 messaggi eliminati martedì notte."],
   ["mar 23:45",0,"Michele, la cartella Riunioni la tengo io in copia, per sicurezza. Non serve che tu la apra stasera.","rec"],
   ["mar 23:52",0,"Tutto a posto. Buonanotte capo.","rec"]]},
  {id:"elisa",name:"Elisa",sub:"Capo campagna",m:[
   ["mar 18:20",0,"Michele scusa, scappo: ho il treno per Milano alle 18:34, domani ho la visita di mia madre. Mi raccontate voi il resto."],
   ["mar 18:22",0,"[biglietto] Così vedi che non me la invento."],
   ["mer 08:20",0,"Sono a Milano e leggo adesso. Io alle 18:20 ero già fuori, ma ti giuro su mia madre che non ho mai fatto uscire niente."]]},
  {id:"bruno",name:"Bruno",sub:"Ex autista",m:[
   ["ott",0,"Mi hai licenziato per tre ritardi. Te ne pentirai, Michele."],
   ["mer 09:00",0,"Ho visto l'audio. Non sono stato io: da tre settimane guido camion da Genova a Rotterdam, in quella stanza non ci sono più entrato. Però un po' ci godo, lo ammetto."]]},
  {id:"bindi",name:"Laura Bindi",sub:"Alleanza Civica",m:[
   ["mer 10:00",0,"Michele, io quell'audio non l'ho chiesto e non lo userò nei comizi. Non vinco così. Ci vediamo al confronto di venerdì."],
   ["mer 10:05",1,"Ti credo, Laura. A venerdì."]]},
  {id:"arrighi",name:"Arrighi",sub:"Consulente",m:[
   ["mer 11:00",0,"Candidato, se vuole questo audio sparisce dai social in quarantotto ore. Ho le persone giuste. Prezzo da amici."],
   ["mer 11:30",1,"No grazie, Arrighi."],
   ["mer 11:31",0,"Come vuole. La mia offerta vale per tutti, sa com'è."]]}
 ],
 lists:{
  rec:[
   {id:"r0",g:"Memo",title:"Riunione 18 novembre",sub:"Integrale · protetta",meta:"Da aprire",body:"Registrazione di 40 minuti, dalle 18:00 alle 18:40.\nPer ascoltare il punto giusto bisogna sapere quale quartiere cercare."},
   {id:"r1",g:"Memo · punto ritrovato",u:"mem",title:"Minuto 31, ore 18:31",sub:"0:20",body:"Dario: «Facciamo la loro proposta sul piano traffico?»\nMichele: «Se facciamo come dice Alleanza Civica, il quartiere Fornaci lo sacrifichiamo, tanto lì non ci votano: questo pensano loro, ed è proprio quello che io non farò.»\nIl sito ha pubblicato solo le parole centrali."}],
  mail:[
   {id:"m1",title:"Borgoverde Oggi",sub:"Richiesta di commento",meta:"mercoledì 07:30",body:"Gentile candidato, alle 08:00 pubblichiamo un audio ricevuto martedì alle 23:58 da un indirizzo anonimo.\nVuole commentare?\nLisa Ferrante, redazione"},
   {id:"m2",title:"Drive",sub:"Cartella condivisa «Riunioni»",meta:"settembre",body:"La cartella Riunioni è condivisa con: d.fumagalli (addetto stampa).\nNessun altro ha accesso."}],
  web:[
   {id:"w1",g:"Cronologia",title:"Borgoverde Oggi · l'audio del candidato Sarti",sub:"mer 08:05"},
   {id:"w2",g:"Cronologia",title:"come dimostrare che un audio è stato tagliato",sub:"mer 08:40"}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Mar · Riunione strategia",sub:"18:00 - 18:40",body:"Io, Dario, Elisa. Ufficio."},
   {id:"c2",g:"Questa settimana",title:"Ven · Confronto con L. Bindi",sub:"21:00",body:"Teatro comunale."},
   {id:"c3",g:"Questa settimana",title:"Dom · Elezioni",sub:"",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui il file è stato scaricato martedì notte, quattro cifre.\nNota sotto: il minuto della frase incriminata e le persone nella stanza, attaccati: tre cifre, poi zero."},
   {id:"n2",title:"Dario",lock:"note",body:"A ottobre Dario mi ha chiesto un aumento. Gli ho detto: dopo il voto.\nÈ bravo, e lo sa. Forse troppo.\nSe ho torto su di lui, smetto di fare politica."}],
  drive:[
   {id:"d1",title:"Riunione 18 novembre.m4a",sub:"Audio",meta:"Attività",body:"Caricato da m.sarti martedì alle 18:42.\nScaricato da d.fumagalli martedì alle 23:50.\nNessun altro accesso."}],
  tel:[
   {id:"t1",title:"Dario",sub:"mer 08:25 · in entrata, 6 min"},
   {id:"t2",title:"Elisa",sub:"mer 08:18 · in entrata, 4 min"}]
 },
 photos:[
  {id:"p1",t:"set",title:"Comitato",sc:"com"},
  {id:"p2",t:"ott",title:"Con Anna",sc:"ann"},
  {id:"p3",t:"mer 08:01",title:"Schermata",sc:"fil"},
  {id:"p4",t:"mar 18:22",title:"Da Elisa",sc:"tre"},
  {id:"h1",t:"mer 13:00",title:"Arrivata da un amico in Comune",sc:"con",lock:"album"},
  {id:"h2",t:"mer 09:10",title:"Attività",sc:"acc",lock:"album"}],
 pins:{note:"3130",album:"2350"},
 events:[{id:"a",q:4,kind:"call",from:"Dario",lines:["«Anna? Sono Dario. Michele mi ha detto che hai il suo telefono.»","«Fammi un favore: nella cartella Riunioni ci sono file riservati della campagna. Non aprirli, rischi di far casino. Ci penso io.»","«Anna?»"]},
         {id:"b",q:9,kind:"sms",from:"Lisa Ferrante",text:"Signora Sarti, non posso rivelare fonti. Posso dirle solo che il file che mi è arrivato si chiamava «Riunione 18 novembre». Lo stesso nome che gli aveva dato suo marito."}],
 qs:[
  {t:"Fornaci",q:"Nell'audio pubblicato Michele parla di un quartiere. Quale?",any:["fornac"],show:"Le Fornaci",hint:"C'è una schermata in Galleria e una pagina nel Browser.",news:"«Lo sacrifichiamo, tanto lì non ci votano.» Dodici secondi. Ora che sai quale passaggio cercare, hai trovato il punto giusto nella registrazione integrale.",unlock:"mem"},
  {t:"Alleanza Civica",q:"Nella registrazione integrale, di chi sta riportando il pensiero Michele?",any:["alleanza","civica"],show:"Di Alleanza Civica, la lista avversaria",hint:"Apri il Registratore.",news:"«È proprio quello che io non farò.» La frase vera dice il contrario di quella pubblicata."},
  {t:"18:31",q:"A che ora della riunione è stata detta quella frase?",all:["1831"],show:"Alle 18:31",hint:"È nel titolo del punto ritrovato.",news:"Minuto 31 di 40."},
  {t:"3",q:"Quante persone c'erano nella stanza?",a:["3","tre","3 persone","tre persone"],show:"Tre",hint:"Lo dicono Dario e il Calendario.",news:"Michele, Dario ed Elisa. Uno dei tre ha fatto uscire l'audio."},
  {t:"18:20",q:"A che ora Elisa ha lasciato la riunione?",all:["1820"],show:"Alle 18:20",hint:"Lo scrive lei, e manda il biglietto del treno.",news:"Undici minuti prima della frase. Alle 18:34 era su un treno per Milano."},
  {t:"Genova",q:"L'ex autista Bruno aveva giurato vendetta. Da quale città parte il suo lavoro adesso?",any:["genova"],show:"Da Genova",hint:"Leggi il suo messaggio di mercoledì.",news:"Camion fino a Rotterdam da tre settimane. In quella stanza non ci è mai entrato. E Dario è stato il primo a fare il suo nome."},
  {t:"23:58",q:"A che ora la redazione ha ricevuto l'audio?",all:["2358"],show:"Martedì alle 23:58",hint:"Mail di Lisa Ferrante.",news:"Da un indirizzo anonimo, cinque ore dopo la riunione."},
  {t:"Dario Fumagalli",q:"Con chi è condivisa la cartella Riunioni, dove Michele carica le registrazioni? Nome e cognome.",all:["dario","fumagalli"],show:"Con Dario Fumagalli",hint:"Mail del Drive e scheda del file.",news:"Ora hai recuperato due messaggi che Dario ha mandato quella notte. Nessun altro ha accesso. Né Elisa, né Bruno, né gli avversari.",unlock:"rec"},
  {t:"23:50",q:"A che ora Dario ha scaricato il file?",all:["2350"],show:"Martedì alle 23:50",hint:"Attività del file nel Drive.",news:"Otto minuti prima che l'audio arrivasse in redazione. Cinque minuti prima aveva scritto a Michele: «Non serve che tu la apra stasera.»"},
  {t:"1 dicembre",q:"Nell'album privato c'è un incarico firmato da Dario con Alleanza Civica. Da quale giorno decorre?",a:["1 dicembre","1° dicembre","primo dicembre","dal 1 dicembre","1/12","01/12","1 dic"],show:"Dal 1° dicembre",hint:"Il codice dell'album è l'ora del download.",news:"Firmato il 6 novembre, con decorrenza dopo il voto. Dario lavorava già per gli avversari."},
  {t:"ottobre",q:"Nella nota protetta Michele racconta una richiesta di Dario. In quale mese?",any:["ottobre"],show:"A ottobre: un aumento",hint:"Il codice: il minuto della frase, le persone nella stanza, poi uno zero.",news:"«Gli ho detto: dopo il voto.» Dario ha trovato chi pagava prima."},
  {t:"d",q:"Chi ha passato l'audio al sito?",o:[["e","Elisa, la capo campagna"],["b","Bruno, l'ex autista"],["d","Dario Fumagalli, l'addetto stampa"],["l","Laura Bindi, l'avversaria"],["a","Arrighi, il consulente"],["f","Lisa Ferrante, la giornalista"]],a:"d",show:"Dario Fumagalli",hint:"Chi ha scaricato il file otto minuti prima dell'invio?",news:""}],
 win:{title:"È stato Dario Fumagalli, l'addetto stampa.",
  steps:["Nella registrazione integrale Michele cita gli avversari per dire il contrario: il sito ha pubblicato solo le parole centrali.","La frase è delle 18:31. Elisa era uscita alle 18:20 per prendere un treno.","La cartella delle riunioni era condivisa solo con Dario, che ha scaricato il file alle 23:50. La redazione lo ha ricevuto alle 23:58.","Dal 6 novembre Dario aveva un incarico con Alleanza Civica, in vigore dal 1° dicembre.","Bruno guida camion da Genova, Laura Bindi non ha usato l'audio, Arrighi voleva solo vendere un servizio."],
  end:"Anna ascolta il minuto 31 per intero. «Diceva il contrario», ripete. Poi manda il file integrale a Lisa Ferrante. Venerdì sera, al confronto, Michele lo fa ascoltare dal palco. Dario non si presenta."}
});
LIB.tune(61,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="drv";
 e.pins={album:"2350",drv:"1840",note:"0142"};
 e.locks={album:{hint:"Il minuto in cui qualcuno si è portato a casa la riunione."},drv:{name:"File protetto",hint:"Il giorno della riunione, poi quanto è durata."},note:{hint:"Il primo giorno di un nuovo lavoro, poi i minuti in cui ho caricato il file."}};
 e.spots=[
  {id:"s1",x:180,y:120,label:"Comitato Insieme",title:"Comitato elettorale Insieme",sub:"Borgoverde",body:"Ufficio riunioni al primo piano, una sola porta. Martedì sera c'erano tre persone."},
  {id:"s2",x:150,y:150,label:"Stazione",title:"Stazione di Borgoverde",sub:"Treni regionali",body:"Partenza delle 18:30 per Cagliari: chi lascia il comitato alle 18:20 fa appena in tempo."},
  {id:"s3",x:206,y:100,label:"Borgoverde Oggi",title:"Redazione di Borgoverde Oggi",sub:"Sito di notizie · ★ 3,7",body:"Recensione: «Pubblicano tutto quello che arriva di notte, senza chiedersi da dove viene.»"}];
 LIB.hints(e,["Il giornale ha pubblicato una frase, e qualcuno l'ha salvata.","La riunione è stata registrata tutta.","Il punto giusto della registrazione ha un orario.","Chi c'era, quel martedì?","Una di loro è andata via prima, con un treno.","L'ex autista ha scritto da lontano.","Il giornale dice quando l'ha ricevuto.","Le registrazioni stanno in una cartella condivisa.","Ogni file si ricorda chi l'ha scaricato, ma quella scheda è chiusa.","Qualcuno ha firmato un incarico con gli avversari.","Michele ha scritto un ricordo, chiuso.","Chi ha scaricato il file pochi minuti prima che arrivasse al giornale?"]);
});
})();
