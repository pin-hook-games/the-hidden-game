(function(){
/* Omicidi 17: Farmacia di turno (Perugia). Soluzione: la collaboratrice Monica, con il compagno. Doveva essere un furto a farmacia vuota: il dottore era rimasto per l'inventario. */
const SC={
 far:()=>LIB.obj("#cfe3c9","⚕️","Farmacia Baldi, il banco"),
 dau:()=>LIB.two("#8fb3c9","#7a3b5a","#777","Con Elena, laurea in farmacia"),
 inv:()=>LIB.doc("Inventario · mercoledì","#33658a",["Scaffali A - F contati","Ore 22:30: scaffale G","Appunti a mano","«Finisco a mezzanotte»"]),
 fus:()=>LIB.shot("Sig.ra Fusi",["Mio marito è al pronto soccorso","da stasera alle nove. Le chiede scusa."]),
 cas:()=>LIB.doc("Foglio di cassa","#55606b",["Cassa 1: fondo cassa, 200 €","Cassa 2: incasso non versato, 3.400 €","Lo sanno: Monica, Elio","Versamento: giovedì mattina"]),
 cam:()=>LIB.doc("Telecamera del retro · 22:39","#231a1e",["Due persone alla porta di servizio","Una con il giubbotto della farmacia","Una con il casco in testa","Uscita di corsa alle 22:52"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Perugia",
 water:[["M0 230Q120 200 240 240",8]],
 parks:[`<ellipse cx="330" cy="150" rx="50" ry="30" fill="#d7e2c9"/>`],
 roads:["M100 40Q160 100 120 180","M120 110H260","M260 110L340 150","M180 60V200","M60 150H200"],
 labels:[[136,104,"Corso Vannucci"],[70,36,"Porta Sant'Angelo"],[186,56,"Monteluce"],[60,196,"Stazione"],[190,196,"Ponte San Giovanni"],[30,224,"Tevere"]],
 pins:[[150,150,"#d43d55","farmacia",9,4],[200,80,"#33658a","casa del dottore",9,4],[90,190,"#56666e","ospedale",9,-8]]});

LIB.add(37,["Farmacia di turno","Elena vuole sapere chi ha ucciso il padre, il dottor Baldi","Perugia"],{
 map:MAP,scenes:SC,owner:"Renzo Baldi",time:"16:30",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["all","Allarme","home","#e2574c,#a02822"]],
 late:"I carabinieri sono tornati per il telefono. Elena ha dovuto consegnarlo.",
 brief:"Elena ti ha portato il telefono del padre, il dottor Renzo Baldi, 60 anni, farmacista a Perugia. Mercoledì notte qualcuno è entrato in farmacia dal retro. Il dottore era ancora dentro. Giovedì alle 7 lo ha trovato il fattorino del grossista. Dalla cassa mancano dei soldi.",
 quote:"«Per i carabinieri è una rapina finita male, fatta da qualcuno di passaggio. C'era un cliente che papà aveva mandato via senza ricetta e che aveva urlato in negozio. Ma chi entra da fuori non sa quale cassa aprire. E papà quella sera non doveva nemmeno essere lì.»",
 chats:[
  {id:"elena",name:"Elena",sub:"Figlia",m:[
   ["mer 19:55",1,"Stasera resto in farmacia per l'inventario, faccio mezzanotte. Non aspettarmi per la tisana."],
   ["mer 20:00",0,"Papà hai sessant'anni, gli scaffali possono aspettare."],
   ["mer 20:02",1,"Gli scaffali sì. L'ispezione di lunedì no."]]},
  {id:"monica",name:"Monica",sub:"Collaboratrice",m:[
   ["mer 15:00",0,"Dottore, stasera chiude lei alle otto e va a casa, giusto? Io devo scappare alle sette."],
   ["mer 15:05",1,"Chiudo io alle otto, vai tranquilla."],
   ["mer 15:06",0,"Perfetto. Quindi dalle otto non c'è nessuno."],
   ["mer 19:50",1,"Monica, cambio programma: resto per l'inventario fino a mezzanotte. Domani trovi i conteggi sul banco. (consegnato, non letto)"]]},
  {id:"fusi",name:"Sig.ra Fusi",sub:"",m:[
   ["mer 21:30",0,"Dottore, mio marito è al pronto soccorso da stasera alle nove per la pressione. Le chiede scusa per le urla di lunedì: aveva ragione lei, senza ricetta era pericoloso."],
   ["mer 21:40",1,"Signora, gli dica di stare tranquillo. Domani passo io a trovarlo."]]},
  {id:"pieri",name:"Dott. Pieri",sub:"",m:[
   ["mar 10:00",0,"Renzo, la causa tra noi la chiudiamo con una transazione. Sono a Milano fino a venerdì, il mio avvocato ti manda la bozza."],
   ["mar 10:20",1,"Era ora, Giorgio. Firmo volentieri."]]},
  {id:"elio",name:"Elio magazzino",sub:"",m:[
   ["lun 08:00",0,"Dottore sono arrivato in Puglia da mia madre, torno lunedì prossimo. L'incasso di questi giorni mettetelo in cassa 2 come sempre, la 1 è solo fondo cassa."],
   ["lun 08:10",1,"Buone ferie, Elio."]]},
  {id:"ahmed",name:"Ahmed grossista",sub:"",m:[
   ["gio 07:02",0,"Dottore la porta del retro è aperta e non risponde nessuno. Entro?"],
   ["gio 07:04",0,"Chiamo il 112."]]}
 ],
 lists:{
  all:[
   {id:"x1",g:"Mercoledì",title:"Protezione perimetrale inserita",sub:"20:10 · codice 1, titolare",body:"Il dottore resta dentro e protegge porte e finestre."},
   {id:"x2",g:"Mercoledì",title:"Protezione disattivata dall'esterno",sub:"22:41 · codice utente 3",meta:"Tastiera del retro",body:"Codice digitato sulla tastiera esterna della porta di servizio.\nNessun allarme scattato."},
   {id:"x3",g:"Utenti",title:"Elenco dei codici",sub:"Protetto",meta:"Da aprire",body:"Per vedere a chi appartiene ogni codice serve indicare quale è stato usato."},
   {id:"x4",g:"Utenti · recuperato",u:"cod",title:"Codici assegnati",sub:"3 utenti",body:"Codice 1: dott. Baldi.\nCodice 2: Elio, magazzino.\nCodice 3: Monica, collaboratrice."},
   {id:"x5",g:"Telecamera del retro · recuperato",u:"cod",title:"Mercoledì 22:39",sub:"Due persone",body:"Due persone alla porta di servizio. Una indossa il giubbotto verde della farmacia, l'altra ha il casco in testa.\nEscono di corsa alle 22:52."}],
  mail:[
   {id:"m1",title:"Azienda sanitaria",sub:"Ispezione programmata",meta:"lunedì",body:"L'ispezione della farmacia è fissata per lunedì 24. Si richiede l'inventario aggiornato."},
   {id:"m2",title:"Banca",sub:"Versamenti",meta:"novembre",body:"Ultimo versamento dell'incasso: lunedì.\nL'incasso di martedì e mercoledì, 3.400 €, non risulta ancora versato."}],
  map:[
   {id:"g1",g:"Mercoledì",title:"Farmacia",sub:"dalle 08:00",meta:"Ultima posizione",body:"Il telefono non ha lasciato la farmacia."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Mer · Inventario",sub:"20:00 - 24:00",body:"Deciso all'ultimo."},
   {id:"c2",g:"Questa settimana",title:"Gio · Versamento in banca",sub:"08:30",body:"Cassa 2."},
   {id:"c3",g:"Questa settimana",title:"Ven · Parlare con Monica",sub:"13:00",body:"Aumento."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui è stata disattivata la protezione mercoledì sera, quattro cifre.\nNota sotto: gli euro che c'erano in cassa 2."},
   {id:"n2",title:"Monica",lock:"note",body:"Monica mi chiede anticipi da tre mesi. Il compagno ha perso il lavoro.\nVenerdì le propongo un aumento: se lo merita, e così smette di preoccuparsi.\nNon glielo dico prima, voglio vedere la faccia."}],
  tel:[
   {id:"t1",title:"Elena",sub:"mer 19:58 · in entrata, 3 min"},
   {id:"t2",title:"Monica",sub:"mer 19:52 · in uscita, nessuna risposta"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Il banco",sc:"far"},
  {id:"p2",t:"lug",title:"Con Elena",sc:"dau"},
  {id:"p3",t:"mer 22:30",title:"A che punto sono",sc:"inv"},
  {id:"p4",t:"mer 21:30",title:"Dalla sig.ra Fusi",sc:"fus"},
  {id:"h1",t:"mar",title:"Cassa",sc:"cas",lock:"album"},
  {id:"h2",t:"mer 22:39",title:"Dal retro",sc:"cam",lock:"album"}],
 pins:{note:"3400",album:"2241"},
 events:[{id:"a",q:3,kind:"call",from:"Monica",lines:["«Elena? Sono Monica. Non riesco a smettere di piangere.»","«Senti, sul telefono del dottore c'è l'app dell'allarme con i nostri codici. Per la privacy bisognerebbe disinstallarla, lo fai tu?»","«Elena?»"]},
         {id:"b",q:8,kind:"sms",from:"Ahmed grossista",text:"Signora Elena, giovedì alle 7 nel parcheggio del retro c'era uno scooter che non avevo mai visto. Quando sono uscito non c'era più."}],
 qs:[
  {t:"20:10",q:"La farmacia ha un'app per l'allarme. A che ora il dottore ha inserito la protezione, restando dentro?",all:["2010"],show:"Alle 20:10",hint:"Apri l'app Allarme.",news:"Porte e finestre protette, lui al lavoro sugli scaffali."},
  {t:"22:41",q:"A che ora la protezione è stata disattivata dall'esterno?",all:["2241"],show:"Alle 22:41",hint:"Seconda riga.",news:"Dalla tastiera del retro, senza far scattare niente. Chi è entrato conosceva un codice valido."},
  {t:"3",q:"Con quale codice utente?",a:["3","tre","codice 3","il 3"],show:"Con il codice 3",hint:"Stessa riga.",news:"Ora che sai quale codice è stato usato, hai aperto l'elenco degli utenti e la registrazione della telecamera del retro.",unlock:"cod"},
  {t:"Monica",q:"A chi è assegnato il codice 3?",any:["monica","collaboratric"],show:"A Monica, la collaboratrice",hint:"Elenco recuperato nell'app Allarme.",news:"Il codice 2 è di Elio, che è in ferie in Puglia. Il codice 3 è stato digitato da qualcuno che lo aveva."},
  {t:"2",q:"Quante persone riprende la telecamera del retro alle 22:39?",a:["2","due","2 persone","due persone"],show:"Due",hint:"Registrazione recuperata.",news:"Una con il giubbotto verde della farmacia, una con il casco. Sono uscite di corsa undici minuti dopo."},
  {t:"le otto",q:"Monica aveva chiesto conferma: a che ora il dottore avrebbe chiuso e sarebbe andato a casa?",a:["20","20:00","alle 20","le 20","alle otto","le otto","otto","8","alle 8","le 8"],show:"Alle otto",hint:"Chat di mercoledì pomeriggio.",news:"«Quindi dalle otto non c'è nessuno.» Non è una domanda da collega. È un sopralluogo."},
  {t:"n",q:"Alle 19:50 il dottore le ha scritto che restava fino a mezzanotte. Monica ha letto quel messaggio?",o:[["s","Sì, e ha risposto"],["n","No: consegnato ma non letto"],["x","Non si può sapere"]],a:"n",show:"No: non letto",hint:"Guarda lo stato del messaggio.",news:"Lui l'ha anche chiamata alle 19:52, senza risposta. Chi è entrato alle 22:41 credeva la farmacia vuota."},
  {t:"2",q:"Dalla cassa mancano dei soldi. Quale cassa conteneva l'incasso non versato? Scrivi il numero.",a:["2","due","cassa 2","la 2"],show:"La cassa 2",hint:"Lo dice Elio, e c'è una mail della banca.",news:"La 1 ha solo il fondo cassa. Un ladro di passaggio le avrebbe aperte tutte e due."},
  {t:"3400",q:"Quanti euro c'erano?",a:["3400","3.400","3400 euro","3.400 euro","3.400 €"],show:"3.400 €",hint:"Mail della banca.",news:"L'incasso di due giorni, da versare giovedì mattina. Lo sapeva solo il personale."},
  {t:"al pronto soccorso",q:"Il cliente che aveva urlato, il signor Fusi: dov'era mercoledì dalle nove di sera?",any:["prontosoccorso","ospedale","soccorso"],show:"Al pronto soccorso",hint:"Ha scritto la moglie.",news:"E ha chiesto scusa. L'ex socio Pieri era a Milano, e stava chiudendo la causa con una transazione."},
  {t:"Monica ed Elio",q:"Nell'album privato c'è il foglio di cassa. Chi sapeva dell'incasso in cassa 2, oltre al dottore? Scrivi i due nomi.",all:["monica","elio"],show:"Monica ed Elio",hint:"Il codice dell'album è l'ora in cui è stata disattivata la protezione.",news:"Elio era a seicento chilometri. Resta una persona sola."},
  {t:"un aumento",q:"Nella nota protetta il dottore scrive che cosa voleva proporre a Monica venerdì. Che cosa?",any:["aument"],show:"Un aumento",hint:"Il codice sono gli euro della cassa 2.",news:"«Così smette di preoccuparsi.» Due giorni dopo. Bastava aspettare due giorni."},
  {t:"m",q:"Chi è stato?",o:[["f","Il signor Fusi, il cliente"],["m","Monica, con il compagno"],["p","Il dott. Pieri, l'ex socio"],["e","Elio, il magazziniere"],["a","Ahmed, il fattorino"],["x","Un rapinatore di passaggio"]],a:"m",show:"Monica, con il compagno",hint:"Di chi era il codice, e chi sapeva della cassa 2?",news:""}],
 win:{title:"È stata Monica, con il compagno.",
  steps:["Mercoledì pomeriggio Monica si è fatta confermare che dalle otto la farmacia sarebbe stata vuota.","Alle 19:50 il dottore le ha scritto che restava per l'inventario. Lei non ha mai letto il messaggio.","Alle 22:41 la protezione è stata disattivata dal retro con il codice 3: il suo. La telecamera riprende due persone.","È stata svuotata solo la cassa 2, quella con i 3.400 € non versati. Lo sapevano in due, e uno era in Puglia.","Il signor Fusi era al pronto soccorso, il dott. Pieri a Milano."],
  end:"Elena legge la nota sull'aumento e la rilegge. «Venerdì», dice. «Glielo avrebbe detto oggi.» Chiude il telefono con tutte e due le mani. «Doveva essere un furto. Lo so. Non cambia niente.»"}
});
LIB.tune(37,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.all.find(x=>x.id==="x4").lock="cod";
 e.pins={album:"2241",cod:"2010",note:"2403"};
 e.locks={album:{hint:"Il minuto in cui la protezione è caduta."},cod:{name:"Elenco protetto",hint:"L'ora in cui ho protetto porte e finestre."},note:{hint:"Il giorno dell'ispezione, poi il codice di chi ha aperto, con lo zero."}};
 e.spots=[
  {id:"s1",x:150,y:150,label:"Farmacia Baldi",title:"Farmacia Baldi",sub:"★ 4,6",body:"Porta di servizio sul retro, con tastiera per il codice. Le telecamere guardano il retro."},
  {id:"s2",x:200,y:80,label:"Casa del dottore",title:"Casa del dott. Baldi",sub:"",body:"Mercoledì sera la moglie lo aspettava per cena alle nove. Ha chiamato alle 23."},
  {id:"s3",x:90,y:190,label:"Ospedale",title:"Pronto soccorso",sub:"",body:"Mercoledì il signor Fusi è registrato dalle 21:00 all'1:00, per una crisi d'ansia."}];
 LIB.hints(e,["L'allarme ha un'app.","Quando è stata tolta la protezione?","Con quale codice?","I codici hanno un nome, ma l'elenco è chiuso.","La telecamera del retro.","Una collaboratrice aveva chiesto un orario.","Il dottore le aveva scritto qualcosa.","La banca sa cosa non è stato versato.","…e quanto.","Il cliente arrabbiato ha un alibi.","Il foglio di cassa è nascosto.","Il dottore voleva proporle qualcosa.","Chi sapeva dei soldi, e chi aveva il codice?"]);
});
})();
