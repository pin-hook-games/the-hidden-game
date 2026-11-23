(function(){
/* Omicidi 10: La cliente perfetta (Firenze). Soluzione: il cliente, il marito Tommaso. La seguiva con un'app nascosta e ha preso l'appuntamento alla villa con un numero usa e getta. */
const SC={
 villa:()=>LIB.obj("#cfe3c9","🏛️","La villa di Fiesole, in vendita"),
 tom:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Tommaso, anniversario"),
 fl:()=>LIB.obj("#f3e3e8","💐","In agenzia, dal sig. Baroni"),
 ag:()=>LIB.group(4,"L'agenzia, brindisi di ottobre","#b0764a"),
 con:()=>LIB.doc("Contratto di locazione","#33658a",["Conduttrice: Chiara Landi","unica intestataria","Decorrenza: 1 dicembre","Firmato il 10 novembre"]),
 app:()=>LIB.doc("App nascoste · 1","#a02822",["«Localizza»","Installata il 12 febbraio","Condivide la posizione con:","Tommaso"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Firenze e Fiesole",
 water:[["M0 190Q90 176 170 190Q250 206 400 172",14]],
 parks:[`<ellipse cx="290" cy="40" rx="80" ry="34" fill="#d7e2c9"/>`],
 roads:["M20 130H380","M60 90V180","M140 70V180","M210 60V186","M290 70V176","M210 60L290 30"],
 labels:[[190,116,"Duomo"],[96,88,"S. M. Novella"],[306,94,"Campo di Marte"],[270,26,"Fiesole"],[62,210,"San Frediano"],[150,236,"Boboli"]],
 pins:[[296,36,"#d43d55","villa, gio 18:00",-90,18],[214,144,"#33658a","agenzia",9,4],[330,116,"#33658a","casa",9,4]]});

LIB.add(30,["La cliente perfetta","Tommaso chiede giustizia per la moglie Chiara","Firenze"],{
 map:MAP,scenes:SC,owner:"Chiara Landi",time:"10:40",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note drive",extraApps:[["casa","Casa","home","#ff8f6b,#d9482f"]],
 late:"Tommaso ha richiamato: rivuole il telefono subito, ha cambiato idea sull'indagine.",
 brief:"Tommaso ti ha portato il telefono della moglie Chiara Landi, 36 anni, agente immobiliare a Firenze. Giovedì alle 18 aveva un appuntamento per mostrare una villa vuota a Fiesole. L'hanno trovata lì venerdì mattina. Il telefono era in agenzia, in carica.",
 quote:"«C'era un cliente che la tormentava: fiori in agenzia, messaggi a tutte le ore. E una collega che le invidiava le provvigioni. Io giovedì ero in palestra, come sempre. Voglio il nome di chi le ha dato quell'appuntamento. Voglio giustizia.»",
 chats:[
  {id:"tom",name:"Tommaso",sub:"Marito",m:[
   ["gio 12:00",0,"Dove pranzi?"],
   ["gio 12:05",1,"In agenzia."],
   ["gio 12:06",0,"Lo so. Volevo vedere se me lo dicevi."],
   ["gio 16:40",0,"Stasera fai tardi?"],
   ["gio 16:45",1,"Ho una visita a Fiesole alle 18. Torno per le otto."]]},
  {id:"ferri",name:"Sig. Ferri",sub:"351 555 0199",m:[
   ["mer 21:10",0,"Buonasera, sono interessato alla villa di Fiesole. Posso vederla giovedì alle 18? Vengo da solo e preferirei non ci fossero altri visitatori."],
   ["mer 21:20",1,"Buonasera sig. Ferri. Giovedì alle 18 va bene. Mi lascia un nome completo e un documento per l'agenzia?"],
   ["mer 21:22",0,"Li porto domani. A domani."]]},
  {id:"baroni",name:"Sig. Baroni",sub:"",m:[
   ["mar 23:10",0,"Chiara, le rose sono arrivate? Quando ha un minuto per me?"],
   ["mer 09:00",1,"Sig. Baroni, la ringrazio ma le chiedo di scrivermi solo per l'appartamento."],
   ["gio 07:30",0,"Capito, mi scusi. Sono a Londra per lavoro fino a sabato, al rientro firmo la proposta e la lascio in pace."]]},
  {id:"ilaria",name:"Ilaria",sub:"Collega",m:[
   ["gio 15:00",0,"La villa di Fiesole doveva essere mia. Ma brava tu. Io dalle 17:30 sono dal notaio per il rogito Bianchi, se serve chiama dopo le 19."],
   ["gio 15:05",1,"Offro io l'aperitivo, se la vendo."]]},
  {id:"guidi",name:"Conte Guidi",sub:"",m:[
   ["lun 10:00",0,"Cara signora, le chiavi della villa le ha solo lei. Io sono a Montecatini per le cure fino a fine mese. A ottantadue anni lascio fare ai giovani."],
   ["lun 10:10",1,"Stia tranquillo, conte."]]},
  {id:"meli",name:"Sig. Meli",sub:"",m:[
   ["2024",0,"Ho ricevuto il risarcimento. Considero chiusa la questione dell'infiltrazione. Buon lavoro."],
   ["2024",1,"Grazie a lei, sig. Meli."]]},
  {id:"nesi",name:"Sig.ra Nesi",sub:"",m:[
   ["10 nov",0,"Chiara, contratto registrato. Le chiavi il 1° dicembre. Suo marito lo sa che si trasferisce da sola?"],
   ["10 nov",1,"Non ancora. La prego, se chiama non gli dica niente."]]}
 ],
 lists:{
  casa:[
   {id:"x1",g:"Allarme di casa · giovedì",title:"Inserito",sub:"17:20 · Tommaso",body:"Allarme inserito alle 17:20 dal codice di Tommaso: la casa è vuota."},
   {id:"x2",g:"Allarme di casa · giovedì",title:"Disinserito",sub:"19:40 · Tommaso",body:"Allarme disinserito alle 19:40 dal codice di Tommaso."},
   {id:"x3",g:"Abbonamento palestra · piano famiglia",title:"Ingressi di giovedì",sub:"Nessuno",body:"Tommaso: nessun ingresso giovedì.\nUltimo ingresso: martedì alle 18:10."},
   {id:"x4",g:"Dispositivo",title:"App nascoste",sub:"1 app",meta:"Impostazioni",body:"«Localizza», installata il 12 febbraio.\nNon compare nella schermata principale.\nCondivide la posizione di questo telefono, in tempo reale, con: Tommaso."}],
  mail:[
   {id:"m1",title:"Agenzia",sub:"Agenda condivisa di giovedì",meta:"giovedì",body:"17:30 - 19:00 Ilaria: rogito Bianchi dal notaio.\n18:00 Chiara: villa di Fiesole, sig. Ferri (documento da registrare)."},
   {id:"m2",title:"Compagnia aerea",sub:"Inoltro dal sig. Baroni",meta:"mercoledì",body:"Firenze - Londra, giovedì 06:50. Ritorno sabato.\n«Così vede che non la disturbo più. B.»"}],
  map:[
   {id:"g1",g:"Giovedì",title:"Agenzia, centro",sub:"09:00 - 17:25",meta:"Permanenza",body:"Il telefono è rimasto in agenzia, in carica, dalle 17:25 in poi. Chiara è uscita senza."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Gio · Villa Fiesole",sub:"18:00",body:"Sig. Ferri. Da solo."},
   {id:"c2",g:"Dicembre",title:"Lun 1 · Chiavi",sub:"",body:"Finalmente."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora dell'appuntamento di giovedì, quattro cifre.\nNota sotto: le ultime quattro cifre del numero del sig. Ferri."},
   {id:"n2",title:"Perché me ne vado",lock:"note",body:"Tommaso sa sempre dove sono.\nAll'inizio pensavo fosse premura. Poi ha cominciato a chiedermelo per vedere se mentivo.\nIl 1° dicembre me ne vado. Non glielo dico prima: ho paura di come reagisce."}],
  drive:[
   {id:"d0",title:"Backup di famiglia",sub:"Protetto",meta:"Da aprire",body:"Vecchi backup condivisi tra i due telefoni.\nPer aprirli serve sapere quale app li ha creati."},
   {id:"d1",u:"bk",title:"Contatti di Tommaso, backup di marzo",sub:"Rubrica",meta:"Recuperato",body:"Tommaso, personale.\nTommaso, ufficio.\n«SIM lavoro 2»: 351 555 0199.\nBackup creato dall'app Localizza."}],
  tel:[
   {id:"t1",title:"351 555 0199",sub:"mer 21:05 · in entrata, 1 min"},
   {id:"t2",title:"Sig.ra Nesi",sub:"10 nov · in uscita, 5 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Fiesole",sc:"villa"},
  {id:"p2",t:"giu",title:"Con Tommaso",sc:"tom"},
  {id:"p3",t:"mar",title:"Rose",sc:"fl"},
  {id:"p4",t:"ott",title:"Agenzia",sc:"ag"},
  {id:"h1",t:"10 nov",title:"Mio",sc:"con",lock:"album"},
  {id:"h2",t:"9 nov",title:"L'ho trovata",sc:"app",lock:"album"}],
 pins:{note:"0199",album:"1800"},
 events:[{id:"a",q:5,kind:"call",from:"Tommaso",lines:["«Allora? Ha trovato Baroni? È lui, glielo dico io.»","«Non serve guardare nelle impostazioni o nei vecchi backup, lì non c'è niente. Si concentri sui messaggi.»","«Mi sente?»"]},
         {id:"b",q:10,kind:"sms",from:"Ilaria",text:"Non so chi abbia questo telefono. Chiara mi aveva detto una cosa sola, la settimana scorsa: «se mi succede qualcosa, non è un cliente».",}],
 qs:[
  {t:"18:00",q:"A che ora era l'appuntamento alla villa di Fiesole?",all:["1800"],a:["18","alle 18","le 18"],show:"Alle 18",hint:"Calendario e chat.",news:"Una visita a una villa vuota, al tramonto, con un cliente mai visto."},
  {t:"0199",q:"Chi l'ha chiesto si è presentato come «sig. Ferri». Quali sono le ultime quattro cifre del suo numero?",a:["0199","199"],show:"0199",hint:"Sono sotto il nome della chat.",news:"Ha scritto mercoledì sera, ha chiesto di essere solo e non ha mai lasciato un documento."},
  {t:"Londra",q:"Tommaso accusa il signor Baroni, quello dei fiori. In quale città era giovedì?",any:["londra","london"],show:"A Londra",hint:"Lo scrive lui, e ha inoltrato il biglietto.",news:"Volo delle 06:50, ritorno sabato. Insistente, ma lontano."},
  {t:"dal notaio",q:"E la collega Ilaria? Dov'era dalle 17:30 alle 19?",any:["notai","rogito"],show:"Dal notaio, per un rogito",hint:"Chat e agenda dell'agenzia.",news:"Con clienti e notaio come testimoni. E dopo ha scritto una frase che conviene ricordare."},
  {t:"Montecatini",q:"Il proprietario della villa, il conte Guidi: dove si trova fino a fine mese?",any:["montecatini"],show:"A Montecatini",hint:"Messaggio di lunedì.",news:"Ottantadue anni, alle terme. Il signor Meli ha chiuso la sua vecchia lite nel 2024."},
  {t:"17:20",q:"Tommaso dice che giovedì era in palestra. A che ora ha inserito l'allarme di casa, uscendo?",all:["1720"],show:"Alle 17:20",hint:"C'è un'app Casa con l'allarme e l'abbonamento della palestra.",news:"È rientrato alle 19:40. Fiesole è a venticinque minuti."},
  {t:"nessuno",q:"Quanti ingressi in palestra risultano per Tommaso giovedì? Se nessuno, scrivi NESSUNO.",any:["nessun","zero"],a:["0"],show:"Nessuno",hint:"Stessa app, piano famiglia.",news:"L'ultimo ingresso è di martedì. Il cliente che ti ha assunto ti ha mentito sull'alibi."},
  {t:"Localizza",q:"Nelle impostazioni del telefono c'è un'app nascosta. Come si chiama?",any:["localizza"],show:"«Localizza»",hint:"App Casa, sezione Dispositivo.",news:"Non compare nella schermata principale. Ora che la conosci, hai aperto i vecchi backup di famiglia nel Drive.",unlock:"bk"},
  {t:"Tommaso",q:"Con chi condivide la posizione di Chiara, in tempo reale?",any:["tommaso","marito"],show:"Con Tommaso",hint:"È scritto sotto il nome dell'app.",news:"«Lo so. Volevo vedere se me lo dicevi.» Lo scriveva lui stesso, giovedì a pranzo."},
  {t:"febbraio",q:"Da quale mese?",any:["febbraio"],show:"Da febbraio",hint:"Data di installazione.",news:"Nove mesi. Sapeva dov'era ogni giorno: anche il 10 novembre, dalla signora Nesi."},
  {t:"SIM lavoro 2",q:"Nel backup dei contatti di Tommaso c'è il numero che finisce per 0199. Con quale nome è salvato?",any:["sim","lavoro"],show:"«SIM lavoro 2»",hint:"Apri il backup recuperato nel Drive.",news:"Il «signor Ferri» non esiste. Il numero è una seconda SIM di Tommaso."},
  {t:"1 dicembre",q:"Nell'album privato c'è un contratto firmato da Chiara. Da che giorno decorre? Giorno e mese.",a:["1 dicembre","1° dicembre","primo dicembre","1 dic","1/12","01/12","dal 1 dicembre","lunedì 1 dicembre"],show:"Dal 1° dicembre",hint:"Il codice dell'album è l'ora dell'appuntamento.",news:"Un appartamento intestato solo a lei. Nell'album c'è anche la schermata dell'app nascosta: l'aveva scoperta il 9 novembre."},
  {t:"dove sono",q:"Nella nota protetta Chiara spiega perché se ne va. Che cosa «sa sempre» Tommaso?",any:["dove"],show:"Dove si trova",hint:"Il codice sono le ultime quattro cifre del numero del sig. Ferri.",news:"«Non glielo dico prima: ho paura di come reagisce.» Lui lo aveva già visto sulla mappa."},
  {t:"t",q:"Chi è stato?",o:[["b","Il signor Baroni"],["i","Ilaria, la collega"],["g","Il conte Guidi"],["m","Il signor Meli"],["t","Tommaso, il marito: il tuo cliente"],["n","La signora Nesi"],["f","Un vero signor Ferri, mai identificato"]],a:"t",show:"Tommaso, il tuo cliente",hint:"Di chi è il numero che ha preso l'appuntamento?",news:""}],
 win:{title:"È stato Tommaso. Ti ha assunto il colpevole.",
  steps:["Da febbraio Tommaso seguiva Chiara con un'app nascosta nel suo telefono.","Il 10 novembre l'ha vista firmare un contratto d'affitto intestato solo a lei, con decorrenza 1° dicembre.","Mercoledì sera un «signor Ferri» ha chiesto di vedere la villa da solo: il numero è una seconda SIM di Tommaso.","Giovedì Tommaso è uscito di casa alle 17:20 ed è rientrato alle 19:40. In palestra non è mai entrato.","Baroni era a Londra, Ilaria dal notaio, il conte a Montecatini."],
  end:"Non riconsegni il telefono a Tommaso. Lo porti in questura, con il backup aperto sulla riga «SIM lavoro 2». Da questo incarico in poi leggi due volte quello che dice un cliente, prima di credergli."}
});
LIB.tune(30,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.casa.find(x=>x.id==="x4").lock="app";
 e.pins={album:"1800",app:"1720",note:"0112"};
 e.locks={album:{hint:"L'ora dell'appuntamento alla villa."},app:{name:"Impostazione protetta",hint:"L'ora in cui la casa è rimasta vuota."},note:{hint:"Il giorno in cui avrei avuto le chiavi, poi il giorno in cui ha cominciato a seguirmi."}};
 e.spots=[
  {id:"s1",x:214,y:144,label:"Agenzia",title:"Agenzia immobiliare",sub:"Centro · ★ 4,3",body:"Chiara ha lasciato il telefono in carica sulla scrivania alle 17:25."},
  {id:"s2",x:296,y:36,label:"Villa a Fiesole",title:"Villa dei conti Guidi",sub:"In vendita",body:"Disabitata fino a fine mese. Il cancello si apre con il codice che l'agenzia dà al cliente."},
  {id:"s3",x:330,y:116,label:"Casa",title:"Casa di Chiara e Tommaso",sub:"",body:"Allarme con codici personali. Il vicino dice che Tommaso giovedì è uscito in macchina, non in tuta."}];
 LIB.hints(e,["L'agenda dell'agenzia.","Il cliente misterioso aveva un numero.","Il fiorista era lontano.","La collega era da un notaio.","Il proprietario della villa è lontano.","La casa sa quando è rimasta vuota.","La palestra conta gli ingressi.","Le impostazioni nascondono qualcosa, sotto chiave.","Con chi si condivide la posizione?","Da quando?","Un vecchio backup dei contatti.","Un contratto nascosto.","Chiara ha scritto perché se ne andava.","Chi sapeva sempre dov'era, e aveva un numero in più?"]);
});
})();
