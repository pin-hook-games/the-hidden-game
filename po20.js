(function(){
/* Intrighi 20 (finale): Tutti gli uomini di Arrighi (tutti e quattro i comuni inventati).
   Il telefono di Nicola Arrighi, dimenticato in un taxi, arriva alla giornalista Lisa Ferrante.
   Soluzione: Arrighi non lavora per un partito. Lo paga il «Tavolo»: tre imprenditori, Dario Sechi (Ecoval), Piero Lai (Cave Lete) e il costruttore Ugo Pala.
   L'uomo dentro le istituzioni è il vicesindaco di Borgoverde, Gianni Carini. Falsa pista: il funzionario regionale Barra, che è solo un pagato. */
const SC={
 tav:()=>LIB.group(4,"Ristorante Il Faro, saletta privata · 28 settembre","#33658a"),
 fog:()=>LIB.doc("Lavori 2025-26 · foglio interno","#a02822",["Fotomontaggio San Leone ✓","Profili falsi Monteforte ✓","Sondaggio rovesciato ✓","Discarica: protocollo ✓ · Eco ✓ · Fabbri ✗"]),
 tax:()=>LIB.obj("#f0d9a0","🚕","Taxi 14, sedile posteriore"),
 rip:()=>LIB.doc("Ripartizione mensile","#2f6b4f",["Sechi (Ecoval): 10.000","Lai (Cave Lete): 10.000","Pala (costruzioni): 10.000","→ Rete Ascolto srl"]),
 car:()=>LIB.two("#55606b","#7a3b5a","#33658a","Con G.C., dopo cena"),
 ban:()=>LIB.doc("Busta · per G.C.","#55606b",["Novembre","«Come sempre»","(foto scattata da N.A.","per ricordo)"])
};
const MAP=LIB.prov([[70,56,"#d43d55","discarica",9,-14],[180,120,"#33658a","Il Faro",9,-12],[320,84,"#2f6b4f","Castelnuovo",9,-14],[318,208,"#7a3b5a","San Leone",-60,-14]]);

LIB.add(80,["Tutti gli uomini di Arrighi","Lisa Ferrante ha il telefono di Arrighi per una notte. Chi c'è dietro?","tutta la provincia"],{
 map:MAP,scenes:SC,owner:"Nicola Arrighi",time:"23:30",date:"dom 23 nov",homeDate:"domenica 23 novembre",
 appIds:"msg tel mail web gal map cal note bank drive",
 late:"Il tassista è tornato: Arrighi ha chiamato la compagnia dei taxi. Il telefono deve tornare nel taxi 14.",
 brief:"Stasera un tassista di Borgoverde ha trovato un telefono sul sedile posteriore e, riconoscendo il nome sulla custodia, l'ha portato a Lisa Ferrante, la cronista che da un anno scrive della discarica. È di Nicola Arrighi. Lisa ce l'ha fino all'alba, poi il tassista lo riconsegna. Lei vuole una sola cosa: chi paga Arrighi.",
 quote:"«Il suo nome l'ho trovato in sei storie diverse: un fotomontaggio, trecento profili falsi, un sondaggio, un protocollo sparito, il mio giornale, il dossier su Fabbri. Tutti pensano che lavori per un partito, o per quello della Regione, Barra. Io penso che sopra di lui ci sia qualcun altro. Ho una notte.»",
 chats:[
  {id:"tav",name:"Tavolo",sub:"Gruppo · 4",m:[
   ["28 set 21:00",0,"Sechi: Stasera al Faro, saletta. Solo noi."],
   ["28 set 23:40",0,"Lai: Bene così. Ognuno la sua parte, ogni mese, a Rete Ascolto."],
   ["3 nov",0,"Pala: L'Eco ha smesso di scrivere. Ottimo lavoro, Nicola."],
   ["21 nov",0,"Sechi: Il dossier su Fabbri è stato un disastro. Il grafico parla. Sistemalo."],
   ["",2,"2 messaggi eliminati."],
   ["21 nov 23:00",1,"Il grafico lo sistemo io. Ma ricordatevi che se cado io, io parlo. Ho le foto della busta di G.C.","tav"]]},
  {id:"gc",name:"G.C.",sub:"",m:[
   ["4 nov",0,"Ho fatto leggere alla sindaca la storia della foto del 2004. Giovedì la cava resta aperta."],
   ["4 nov",1,"Bravo. Lai ringrazia. La busta è al solito posto."],
   ["19 nov",0,"La Bindi è andata dai carabinieri. Ho bisogno di aiuto."]]},
  {id:"bar",name:"Dott. Barra",sub:"Regione",m:[
   ["ott",0,"Fatto. Il protocollo 2231 non c'è più. Quando arriva il resto?"],
   ["ott",1,"Quando lo decide il Tavolo, Sergio. Tu esegui."]]},
  {id:"pon",name:"Lista Ponte",sub:"",m:[
   ["giu",0,"Arrighi, ci fa un sondaggio per il ballottaggio?"],
   ["giu",1,"Mi spiace, sono pieno fino a dicembre."]]},
  {id:"ins",name:"Insieme · segreteria",sub:"",m:[
   ["mag",0,"Dott. Arrighi, per la campagna di Castelnuovo cercavamo un consulente..."],
   ["mag",1,"Non lavoro per i partiti. Lavoro per chi paga."]]}
 ],
 lists:{
  bank:[
   {id:"b1",g:"Rete Ascolto srl · novembre",title:"Bonifico Ecoval spa",sub:"+ 10.000,00 €",body:"Causale: consulenza."},
   {id:"b2",g:"Rete Ascolto srl · novembre",title:"Bonifico Cave Lete srl",sub:"+ 10.000,00 €",body:"Causale: consulenza."},
   {id:"b3",g:"Rete Ascolto srl · novembre",title:"Bonifico Pala Costruzioni",sub:"+ 10.000,00 €",body:"Causale: consulenza."},
   {id:"b4",g:"Rete Ascolto srl · novembre",title:"Studio grafico M.L.",sub:"− 950,00 €",body:"Fattura n. 41."},
   {id:"b5",g:"Rete Ascolto srl · ottobre",title:"Prelievo contanti",sub:"− 3.000,00 €",body:"Nota: «G.C.»"}],
  drive:[
   {id:"d1",g:"Riservato",title:"Lavori 2025-26",sub:"Foglio",body:"Fotomontaggio San Leone ✓\nProfili falsi Monteforte ✓\nSondaggio Monteforte rovesciato ✓\nDiscarica, protocollo 2231 ✓\nEco di Monteforte, pagina tre ✓\nDossier Fabbri ✗ (il grafico)"}],
  web:[
   {id:"w1",g:"Ricerca",title:"Pala Costruzioni",sub:"Registro imprese",body:"Titolare: Ugo Pala. Proprietario del terreno diventato edificabile con la delibera delle 23:58 di San Leone."},
   {id:"w2",g:"Ricerca",title:"Cave Lete srl",sub:"Registro imprese",body:"Amministratore: Piero Lai. Concessione della cava di Monte Bruno, Borgoverde."},
   {id:"w3",g:"Ricerca",title:"Ecoval spa",sub:"Registro imprese",body:"Amministratore delegato: Dario Sechi. Gestore della discarica di Monteforte."}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Il Faro",sub:"Ristorante, Borgoverde",body:"Saletta privata. «Il Tavolo»."}],
  mail:[
   {id:"m1",title:"Compagnia taxi",sub:"Oggetto smarrito",meta:"23:20",body:"Gentile cliente, abbiamo registrato la sua segnalazione. Il taxi 14 riconsegnerà l'oggetto domattina alle 7."}],
  cal:[
   {id:"c1",g:"Settembre",title:"28 set · Tavolo, Il Faro",sub:"21:00",body:""},
   {id:"c2",g:"Ogni mese",title:"Il 5 · Busta G.C.",sub:"",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album: il giorno e il mese della cena al Faro, quattro cifre.\nNota sotto: quanto entra ogni mese da tutto il Tavolo, in migliaia, con due zeri davanti."},
   {id:"n2",title:"Assicurazione",lock:"note",body:"Se mi scaricano: le foto della busta di Carini sono nel Drive personale, cartella «Faro».\nSechi, Lai e Pala hanno firmato tutti e tre la mail di settembre: «Rete Ascolto si occupa della comunicazione del Tavolo».\nIo ho eseguito. Loro hanno deciso."}],
  tel:[
   {id:"t1",title:"G.C.",sub:"19 nov · in entrata, 12 min"},
   {id:"t2",title:"Sechi",sub:"21 nov · in entrata, 20 min"}]
 },
 photos:[
  {id:"p1",t:"23 nov 23:05",title:"Taxi",sc:"tax"},
  {id:"p2",t:"ott",title:"Il foglio",sc:"fog"},
  {id:"h1",t:"28 set",title:"Il Faro",sc:"tav",lock:"album"},
  {id:"h2",t:"28 set",title:"Ripartizione",sc:"rip",lock:"album"},
  {id:"h3",t:"5 nov",title:"Busta",sc:"ban",lock:"album"},
  {id:"h4",t:"28 set 23:50",title:"Dopo cena",sc:"car",lock:"album"}],
 pins:{note:"0030",album:"2809"},
 events:[{id:"a",q:3,kind:"call",from:"Sechi",lines:["«Nicola, dove sei finito? ...Pronto?»","«Chi parla? Questo è il telefono di Arrighi.»","«...Ha sbagliato numero.»"]},
         {id:"b",q:7,kind:"sms",from:"G.C.",text:"Nicola, domattina la Bindi va dal magistrato. Se fanno il mio nome, il tuo viene subito dopo. Rispondi."},
         {id:"c",q:10,kind:"sms",from:"Silvio Marra",text:"Lisa, Bianca Olmi, Ivo Marras e Andrea Fabbri sono con me. Domattina alle 9 in procura. Ci sei?"}],
 qs:[
  {t:"6",q:"Nel foglio «Lavori 2025-26», quanti lavori ci sono?",a:["6","sei"],show:"Sei",hint:"Drive o Galleria.",news:"Fotomontaggio, profili falsi, sondaggio, protocollo, giornale, dossier. Tutte le storie di Lisa."},
  {t:"Fabbri",q:"Quale lavoro è segnato come fallito?",any:["fabbri","dossier","grafic"],show:"Il dossier su Fabbri",hint:"La ✗ nel foglio.",news:"Per via del grafico."},
  {t:"no",q:"Arrighi lavora per un partito?",a:["no","nessuno","no nessuno","mai"],show:"No",hint:"Chat con Insieme e con Ponte.",news:"«Non lavoro per i partiti. Lavoro per chi paga.»"},
  {t:"Tavolo",q:"Come si chiama il gruppo di chi lo paga?",any:["tavol"],show:"Il Tavolo",hint:"Messaggi.",news:"Quattro nel gruppo: Arrighi più tre. Ora che sai chi sono, hai recuperato l'ultimo messaggio di Arrighi al Tavolo.",unlock:"tav"},
  {t:"28 settembre",q:"In quale sera si sono riuniti al Faro? Giorno e mese.",all:["28","set"],show:"28 settembre",hint:"Calendario e chat del Tavolo.",news:"La data è anche il codice dell'album: dentro c'è la ripartizione."},
  {t:"Sechi Lai Pala",q:"Chi sono i tre del Tavolo? Basta il cognome di tutti e tre.",all:["sechi","lai","pala"],show:"Dario Sechi (Ecoval), Piero Lai (Cave Lete), Ugo Pala (costruzioni)",hint:"Banca, ripartizione nell'album, Browser.",news:"La discarica, la cava, il terreno della delibera delle 23:58."},
  {t:"10000",q:"Quanto versa ognuno ogni mese a Rete Ascolto?",a:["10000","10.000","10 mila","diecimila","10000 euro","10.000 euro","10.000 €"],show:"10.000 € a testa",hint:"Banca.",news:"Trentamila al mese per comprare silenzi, foto e sondaggi."},
  {t:"chiede soldi",q:"Il dott. Barra della Regione: chiede soldi o dà ordini?",any:["soldi","chied","pagat","esegu"],show:"Chiede soldi: è un pagato, non un capo",hint:"Chat con Barra.",news:"«Quando lo decide il Tavolo, Sergio. Tu esegui.» La falsa pista di Lisa."},
  {t:"Carini",q:"Chi è «G.C.», l'uomo che riceve la busta ogni mese?",all:["carini"],show:"Gianni Carini, vicesindaco di Borgoverde",hint:"Chat con G.C.: parla della sindaca, della foto del 2004 e della cava.",news:"Lo stesso che ricattava la sindaca Bindi per tenere aperta la cava di Lai."},
  {t:"5",q:"Che giorno del mese Carini riceve la busta?",a:["5","il 5","5 del mese","cinque"],show:"Il 5 di ogni mese",hint:"Calendario.",news:"E Arrighi ha fotografato ogni busta."},
  {t:"Faro",q:"Nella nota protetta, in quale cartella Arrighi tiene le foto della busta di Carini?",any:["faro"],show:"Nella cartella «Faro»",hint:"Il codice: l'entrata mensile del Tavolo in migliaia, con due zeri davanti.",news:"«Io ho eseguito. Loro hanno deciso.» La sua assicurazione è la prova contro tutti."},
  {t:"t",q:"Chi c'è dietro Arrighi?",o:[["p","Un partito"],["b","Il dott. Barra della Regione"],["t","Il Tavolo: Sechi, Lai e Pala, con Carini dentro il Comune"],["s","Solo Ecoval"],["n","Nessuno: lavora da solo"]],a:"t",show:"Il Tavolo, con Carini",hint:"Chi paga, chi decide, chi riceve la busta.",news:""}],
 win:{title:"Dietro Arrighi c'è il Tavolo. E dentro il Comune, Carini.",
  steps:["Il foglio «Lavori 2025-26» mette in fila sei storie: il fotomontaggio, i profili falsi, il sondaggio, il protocollo sparito, l'Eco, il dossier su Fabbri.","Arrighi non lavora per i partiti. Ogni mese Ecoval (Sechi), Cave Lete (Lai) e Pala Costruzioni versano 10.000 € a testa a Rete Ascolto.","Il Tavolo si è riunito al Faro il 28 settembre. Barra è soltanto pagato per eseguire.","Il 5 di ogni mese il vicesindaco Gianni Carini riceve una busta. Arrighi l'ha fotografata, per assicurarsi.","«Se cado io, io parlo»: le prove contro il Tavolo le ha tenute Arrighi stesso."],
  end:"Alle 6:50 Lisa riconsegna il telefono al tassista, spento, con dentro ogni cosa dov'era. Alle 9 in procura è in prima fila, con Silvio, Bianca, Ivo, Andrea e la sindaca Bindi. Il suo pezzo esce il giorno dopo su tre giornali. Titolo: «Il Tavolo»."}
});
LIB.tune(80,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.chats.find(c=>c.id==="gc").lock="gc";
 e.pins={album:"2809",gc:"1407",note:"1928"};
 e.locks={album:{hint:"La sera della cena."},gc:{name:"Chat protetta",hint:"Il numero del taxi, poi l'ora in cui lo riporta."},note:{hint:"Il giorno in cui G.C. ha chiesto aiuto, poi il giorno della cena."}};
 e.spots=[
  {id:"s1",x:180,y:120,label:"Il Faro",title:"Ristorante Il Faro",sub:"Borgoverde · ★ 4,4",body:"Recensione: «La saletta privata la prenotano sempre gli stessi quattro signori. Pagano in contanti.»"},
  {id:"s2",x:152,y:142,label:"Taxi",title:"Posteggio taxi",sub:"Borgoverde",body:"Il taxi 14 fa il turno di notte. Domattina alle 7 riconsegna un oggetto smarrito."},
  {id:"s3",x:346,y:226,label:"Ex colonia",title:"Area ex colonia",sub:"San Leone al Mare",body:"Cartello sul cancello: «Prossima apertura cantiere · Pala Costruzioni»."}];
 LIB.hints(e,["Un foglio interno mette in fila i lavori.","Uno è andato male.","Lavora per i partiti?","Chi lo paga ha un nome di gruppo.","Una cena in una saletta.","Chi versa soldi? Banca, ripartizione, ricerche.","Quanto, ogni mese?","Il funzionario regionale chiede o ordina?","Chi è G.C.? La chat è chiusa.","Un appuntamento fisso.","La sua assicurazione è scritta in una nota.","Chi paga, chi decide, chi riceve la busta."]);
});
})();
