(function(){
/* Intrighi 8: La delibera delle 23:58 (San Leone al Mare, comune inventato). Soluzione: il vicesindaco Ferri.
   Dopo la seduta ha fatto resettare la password di un impiegato in ferie e ha sostituito la tavola 3: un'area verde diventata edificabile, sul terreno del cognato. */
const SC={
 aul:()=>LIB.group(7,"Consiglio comunale · lunedì sera","#33658a"),
 t1:()=>LIB.doc("Tavola 3 · votata","#2f6b4f",["Area ex colonia","Destinazione: verde pubblico","Votata lunedì alle 21:40","Unanimità"]),
 sky:()=>LIB.obj("#e6ebef","⛷️","Mattia al rifugio · lunedì 23:30"),
 cat:()=>LIB.two("#9cc7d6","#7a3b5a","#1f3a66","Con Giulio, Capo Sud"),
 t2:()=>LIB.doc("Tavola 3 · pubblicata","#a02822",["Area ex colonia","Destinazione: edificabile","File modificato lunedì 23:58","Utente: m.loi"]),
 vis:()=>LIB.doc("Visura · area ex colonia","#55606b",["Proprietà: Immobiliare Golfo","Socio unico: Ugo Pala","Acquistata a settembre","come terreno vincolato"])
};
const MAP=LIB.prov([[318,208,"#33658a","municipio",-60,-14],[346,226,"#d43d55","ex colonia",9,4]]);

LIB.add(68,["La delibera delle 23:58","Il consigliere Serra ha visto che la delibera pubblicata non è quella votata","San Leone al Mare"],{
 map:MAP,scenes:SC,owner:"Ada Romano",time:"09:00",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal cal note",extraApps:[["atti","Atti","folder","#4a5d7a,#1f2c44"]],
 late:"Ada deve entrare in ufficio e aprire la seduta di giunta. Ti chiede indietro il telefono.",
 brief:"Il consigliere Pino Serra ti ha portato il telefono di Ada Romano, 47 anni, segretaria comunale di San Leone al Mare. La delibera 112, votata lunedì sera, è stata pubblicata con un allegato diverso. Ada è l'unica che può pubblicare gli atti, e per questo la accusano.",
 quote:"«Io ero in aula: la tavola 3 diceva verde pubblico. Quella online dice edificabile. Ada giura di aver pubblicato la versione giusta e di non sapere niente del resto. Me l'ha dato lei, il telefono. Vuole che si sappia chi è stato prima della giunta di stamattina.»",
 chats:[
  {id:"ferri",name:"Vicesindaco Ferri",sub:"",m:[
   ["lun 22:00",0,"Ada, ottimo lavoro stasera. La pubblicazione la fai domattina con calma."],
   ["lun 22:05",1,"L'ho già pubblicata alle 19:30, prima della seduta, come da regolamento. Stasera aggiorno solo l'esito del voto."],
   ["",2,"2 messaggi eliminati lunedì notte."],
   ["lun 23:30",0,"Ada, c'è un errore di grafica nella tavola 3. La sistemo io, non ti disturbo.","fer"],
   ["lun 23:31",0,"Non serve che controlli. Buonanotte.","fer"]]},
  {id:"mattia",name:"Mattia Loi",sub:"Ufficio atti",m:[
   ["lun 23:35",0,"[foto] Dottoressa, saluti dal rifugio! Domani si scia, torno lunedì prossimo. Non mi cercate 😄"],
   ["mer 10:00",0,"Mi dicono che lunedì notte il mio utente ha modificato una tavola. Io ero a duemila metri senza computer. E la password non la cambio da mesi: non l'ho cambiata io."]]},
  {id:"serra",name:"Pino Serra",sub:"Consigliere",m:[
   ["mar 09:00",0,"Ada, la tavola 3 online non è quella votata. Che succede?"],
   ["mar 09:20",1,"Non lo so, Pino. Controllo subito."]]},
  {id:"it",name:"Assistenza informatica",sub:"",m:[
   ["mar 11:00",1,"Chi ha chiesto un reset della password di m.loi lunedì sera?"],
   ["mar 11:30",0,"Richiesta telefonica alle 23:40 dal numero del vicesindaco Ferri. Ha detto che era un'urgenza per la pubblicazione e che l'utente era in ferie."]]},
  {id:"sind",name:"Sindaca Pes",sub:"",m:[
   ["mar 12:00",0,"Ada, io lunedì sono andata via subito dopo il voto, ero a Cagliari all'alba. Fai tutte le verifiche."]]}
 ],
 lists:{
  atti:[
   {id:"x1",g:"Delibera 112",title:"Pubblicazione",sub:"lun 19:30 · utente a.romano",body:"Testo e allegati pubblicati da Ada alle 19:30."},
   {id:"x2",g:"Delibera 112",title:"Esito del voto",sub:"lun 22:10 · utente a.romano",body:"Aggiornato l'esito: approvata all'unanimità alle 21:40."},
   {id:"x3",g:"Delibera 112",title:"Tavola 3 sostituita",sub:"lun 23:58 · utente m.loi",meta:"Modifica",body:"Allegato tavola 3 sostituito.\nUtente: m.loi.\nDispositivo: computer portatile non registrato in Comune."}],
  mail:[
   {id:"m1",title:"Registrazione della seduta",sub:"Lunedì, minuto 92",meta:"martedì",body:"Il presidente legge: «Tavola 3, area ex colonia, destinata a verde pubblico.»\nVoto alle 21:40, unanimità."},
   {id:"m2",title:"Ufficio personale",sub:"Ferie",meta:"novembre",body:"Mattia Loi: ferie dal 17 al 23 novembre."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Lun · Consiglio comunale",sub:"20:00",body:"Delibera 112."},
   {id:"c2",g:"Questa settimana",title:"Gio · Giunta",sub:"09:30",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora della modifica della tavola 3, quattro cifre.\nNota sotto: il numero della delibera, con uno zero davanti."},
   {id:"n2",title:"Ferri",lock:"note",body:"Lunedì notte Ferri mi ha scritto di non controllare.\nIn ventidue anni nessuno mi ha mai detto di non controllare.\nL'area ex colonia è dell'Immobiliare Golfo. Il socio, Ugo Pala, ha sposato la sorella di Ferri: è suo cognato.\nOggi in giunta lo dico, con le carte davanti."}],
  tel:[
   {id:"t1",title:"Vicesindaco Ferri",sub:"lun 23:29 · in entrata, 1 min"},
   {id:"t2",title:"Assistenza informatica",sub:"mar 11:05 · in uscita, 6 min"}]
 },
 photos:[
  {id:"p1",t:"lun 20:00",title:"Seduta",sc:"aul"},
  {id:"p2",t:"lun 19:25",title:"Tavola 3, prima",sc:"t1"},
  {id:"p3",t:"lun 23:35",title:"Da Mattia",sc:"sky"},
  {id:"p4",t:"ago",title:"Con Giulio",sc:"cat"},
  {id:"h1",t:"mar 09:15",title:"Tavola 3, adesso",sc:"t2",lock:"album"},
  {id:"h2",t:"mar 15:00",title:"Visura",sc:"vis",lock:"album"}],
 pins:{note:"0112",album:"2358"},
 events:[{id:"a",q:4,kind:"call",from:"Vicesindaco Ferri",lines:["«Ada? Ah, consigliere Serra, buongiorno.»","«Guardi, è un errore informatico, l'ha fatto quel ragazzo dell'ufficio atti. Non tiriamo in mezzo la segretaria, le faccio il favore di chiudere la cosa io.»","«Mi sente?»"]},
         {id:"b",q:9,kind:"sms",from:"Mattia Loi",text:"Dottoressa, al rifugio hanno il registro delle presenze e le foto della cena. Alle 23:58 ero al tavolo con altri dodici. Glielo mando."}],
 qs:[
  {t:"112",q:"Quale numero ha la delibera contestata?",a:["112","n. 112","numero 112","la 112"],show:"112",hint:"App Atti.",news:"Approvata all'unanimità lunedì alle 21:40."},
  {t:"verde pubblico",q:"Nella tavola 3 votata in aula, come è destinata l'area ex colonia?",any:["verde"],show:"Verde pubblico",hint:"Registrazione della seduta e foto in Galleria.",news:"Lo ha letto il presidente al minuto 92."},
  {t:"19:30",q:"A che ora Ada ha pubblicato la delibera?",all:["1930"],show:"Lunedì alle 19:30",hint:"App Atti, prima riga.",news:"Prima della seduta, come da regolamento. Alle 22:10 ha aggiornato solo l'esito del voto."},
  {t:"23:58",q:"A che ora è stata sostituita la tavola 3?",all:["2358"],show:"Alle 23:58",hint:"App Atti, ultima riga.",news:"Da un portatile non registrato in Comune."},
  {t:"m.loi",q:"Con quale utente è stata fatta la modifica?",any:["mloi","loi"],show:"m.loi",hint:"Stessa riga.",news:"L'utente di Mattia Loi, dell'ufficio atti. Non quello di Ada."},
  {t:"al rifugio",q:"Dov'era Mattia Loi lunedì notte?",any:["rifugi","montagna","sciare","sci"],show:"Al rifugio, in ferie",hint:"Ha mandato una foto alle 23:35.",news:"Ferie dal 17 al 23, a duemila metri, senza computer. E dice di non aver cambiato la password."},
  {t:"23:40",q:"A che ora qualcuno ha chiesto all'assistenza di resettare la password di m.loi?",all:["2340"],show:"Alle 23:40",hint:"Chat con l'assistenza informatica.",news:"Diciotto minuti prima della modifica."},
  {t:"Ferri",q:"Da quale numero è arrivata la richiesta?",any:["ferri","vicesindaco"],show:"Dal vicesindaco Ferri",hint:"Stessa chat.",news:"«Un'urgenza per la pubblicazione, l'utente è in ferie.» Ora che lo sai, hai recuperato i due messaggi che Ferri ha mandato ad Ada e poi cancellato.",unlock:"fer"},
  {t:"errore di grafica",q:"Come ha giustificato Ferri la modifica, nel messaggio cancellato? «Un errore di...»",any:["grafic"],show:"«Un errore di grafica»",hint:"Messaggi recuperati.",news:"«Non serve che controlli.» Lo ha scritto alle 23:31, nove minuti prima di chiedere il reset."},
  {t:"Cagliari",q:"La sindaca Pes: dov'era all'alba di martedì?",any:["cagliari"],show:"A Cagliari",hint:"Messaggio di martedì.",news:"Andata via subito dopo il voto."},
  {t:"edificabile",q:"Nell'album privato c'è la tavola 3 pubblicata. Come è diventata l'area?",any:["edificabil","costruir"],show:"Edificabile",hint:"Il codice dell'album è l'ora della modifica.",news:"Da verde pubblico a edificabile, in una notte."},
  {t:"cognato",q:"L'area è dell'Immobiliare Golfo, socio Ugo Pala. Che cosa è Ugo Pala per il vicesindaco?",any:["cognat"],show:"Il cognato",hint:"Ada lo ha scritto nella nota protetta. Il codice è il numero della delibera, con uno zero davanti.",news:"Comprata a settembre come terreno vincolato. Con la tavola nuova vale dieci volte tanto."},
  {t:"f",q:"Chi ha cambiato la delibera?",o:[["a","Ada Romano, la segretaria"],["m","Mattia Loi, l'impiegato"],["f","Il vicesindaco Ferri"],["s","La sindaca Pes"],["p","Pino Serra, il consigliere"],["i","L'assistenza informatica"]],a:"f",show:"Il vicesindaco Ferri",hint:"Chi ha chiesto il reset della password di un impiegato in ferie?",news:""}],
 win:{title:"La tavola 3 l'ha cambiata il vicesindaco Ferri.",
  steps:["In aula la tavola 3 destinava l'area ex colonia a verde pubblico. Ada ha pubblicato quella, alle 19:30.","Alle 23:30 Ferri le ha scritto di un «errore di grafica» e di non controllare, poi ha cancellato i messaggi.","Alle 23:40 ha fatto resettare la password di Mattia Loi, in ferie al rifugio, e alle 23:58 la tavola è stata sostituita con quell'utente.","Nella nuova tavola l'area è edificabile. Appartiene all'Immobiliare Golfo di Ugo Pala, il cognato di Ferri.","Mattia era a cena con altri dodici, la sindaca a Cagliari."],
  end:"Pino Serra riconsegna il telefono ad Ada alle 9:25. Lei entra in giunta con due fogli: la tavola delle 19:30 e quella delle 23:58. Li mette davanti al vicesindaco, che per la prima volta in ventidue anni non trova niente da dire."}
});
LIB.tune(68,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.atti.find(x=>x.id==="x3").lock="att";
 e.pins={album:"2358",att:"0112",note:"5840"};
 e.locks={album:{hint:"Il minuto in cui la tavola è cambiata."},att:{name:"Atto protetto",hint:"Il numero della delibera, con lo zero davanti."},note:{hint:"I minuti di chi ha cambiato la tavola, poi i minuti in cui ha chiesto una password."}};
 e.spots=[
  {id:"s1",x:318,y:208,label:"Municipio",title:"Municipio di San Leone",sub:"Segreteria comunale",body:"Solo la segretaria pubblica gli atti. Ma chiunque abbia un'utenza dell'ufficio tecnico può sostituire un allegato."},
  {id:"s2",x:66,y:44,label:"Rifugio Monte Lete",title:"Rifugio Monte Lete",sub:"1.400 m · ★ 4,8",body:"Recensione: «Niente segnale dopo le 22, solo il wifi della sala. Perfetto per staccare.»"},
  {id:"s3",x:346,y:226,label:"Ex colonia",title:"Area ex colonia",sub:"San Leone al Mare",body:"Un cartello nuovo sul cancello: «Proprietà privata · Immobiliare Golfo».",u:"fer"}];
 LIB.hints(e,["Ogni delibera ha un numero.","In aula è stato letto ad alta voce.","Ada sa quando ha pubblicato.","Gli atti si ricordano ogni modifica, ma quella riga è chiusa.","Stessa riga: con quale nome?","Il titolare di quel nome era lontano, con una foto.","L'assistenza informatica ha ricevuto una richiesta.","…da quale numero?","Qualcuno si è giustificato, poi ha cancellato.","La sindaca era lontana.","La tavola pubblicata è nascosta.","Ada ha scritto chi c'è dietro il terreno.","Chi ha chiesto la password di un impiegato in ferie?"]);
});
})();
