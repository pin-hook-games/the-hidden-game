(function(){
/* Intrighi 10: Il sondaggio (Monteforte, comune inventato). Soluzione: il consulente Arrighi.
   Ha ribaltato i numeri del sondaggio di Sofia e lo ha venduto ai giornali prima che le interviste fossero chiuse. Lavora per due candidati opposti. */
const SC={
 ist:()=>LIB.group(4,"Istituto Polis · l'ufficio","#33658a"),
 ori:()=>LIB.doc("Sondaggio · file originale","#2f6b4f",["Interviste: 800","Conti (Alleanza Civica): 46%","Ferrara (Lista Monteforte): 41%","Indecisi: 13%"]),
 pub:()=>LIB.doc("Il Corriere di Valle · venerdì","#a02822",["«Ferrara vola: 47 a 40»","Fonte: Istituto Polis","Arrivato in redazione","giovedì alle 10:00"]),
 mat:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Matteo, cena di compleanno"),
 c2:()=>LIB.doc("Due incarichi","#55606b",["Arrighi · consulenza comunicazione","per D. Conti: dal 1° settembre","per G. Ferrara: dal 15 settembre","entrambi in corso"]),
 fat:()=>LIB.doc("Fattura Arrighi","#a02822",["A: Il Corriere di Valle","«Cessione dati di sondaggio»","2.000,00 €","Emessa giovedì"])
};
const MAP=LIB.prov([[70,56,"#d43d55","Istituto Polis",9,-12]]);

LIB.add(70,["Il sondaggio","Il prof. Danieli vuole sapere chi ha ribaltato il sondaggio del suo istituto","Monteforte"],{
 map:MAP,scenes:SC,owner:"Sofia Leone",time:"12:00",date:"sab 15 nov",homeDate:"sabato 15 novembre",
 appIds:"msg tel mail gal cal note drive",
 late:"Sofia deve andare in radio a spiegare il sondaggio. Le serve il telefono.",
 brief:"Il prof. Danieli, titolare dell'Istituto Polis di Monteforte, ti ha portato il telefono della sua analista Sofia Leone, 33 anni. Venerdì un giornale ha pubblicato un sondaggio dell'istituto con i risultati ribaltati. Il fidanzato di Sofia è candidato nella lista che ne esce bene.",
 quote:"«In trent'anni non ho mai pubblicato un numero falso. Sofia dice che quei numeri non sono suoi. Ma è lei che ha il file, e il ragazzo è candidato con Ferrara. Voglio crederle. Me lo deve dimostrare il telefono, non io.»",
 chats:[
  {id:"dan",name:"Prof. Danieli",sub:"",m:[
   ["gio 20:30",1,"Professore, interviste chiuse alle 20. Conti avanti di cinque punti. Domattina le mando il rapporto."],
   ["ven 08:00",0,"Sofia, il Corriere scrive 47 a 40 per Ferrara. Che cosa hai mandato?"],
   ["ven 08:05",1,"Niente! Il rapporto non è ancora uscito da qui."]]},
  {id:"mat",name:"Matteo",sub:"Fidanzato",m:[
   ["ven 08:30",0,"Sofia, giuro che io quel sondaggio non l'ho mai visto. Anzi, mi imbarazza: sembra un favore a noi."],
   ["ven 08:35",1,"Lo so, Matteo. Il file non te l'ho mai mandato."]]},
  {id:"arr",name:"Arrighi",sub:"Partner commerciale",m:[
   ["1 set",0,"Sofia, da oggi sono partner commerciale dell'istituto: mi date accesso alla cartella dei sondaggi, così li vendo meglio."],
   ["1 set",1,"Il professore mi ha detto. Ma niente esce senza la sua firma."],
   ["",2,"2 messaggi eliminati giovedì."],
   ["gio 09:40",0,"Sofia, due decimali in più o in meno non cambiano la scienza. Il cliente ha fretta.","arr"],
   ["gio 09:45",0,"Lascia stare, ci penso io. Tu goditi la giornata.","arr"]]},
  {id:"red",name:"Corriere di Valle",sub:"Redazione",m:[
   ["ven 11:00",0,"Dottoressa Leone, il sondaggio ci è arrivato giovedì alle 10 dal vostro partner commerciale, con fattura. Se c'è un errore pubblichiamo la rettifica."]]},
  {id:"conti",name:"Daria Conti",sub:"",m:[
   ["ven 12:00",0,"Dottoressa, il mio consulente mi dice di stare tranquilla, che «i numeri si aggiustano». Lo stesso consulente, ho scoperto ieri, lavora anche per Ferrara."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Istituto Polis",sub:"Calendario della rilevazione",meta:"ottobre",body:"Interviste telefoniche: da lunedì 10 a giovedì 13 novembre, chiusura alle 20:00.\nCampione: 800 residenti."},
   {id:"m2",title:"Drive",sub:"Cartella Sondaggi · accessi",meta:"settembre",body:"Accesso concesso a: s.leone (analista), danieli (titolare), a.arrighi (partner commerciale, dal 1° settembre)."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Gio · Chiusura interviste",sub:"20:00",body:""},
   {id:"c2",g:"Questa settimana",title:"Sab · Radio Valle",sub:"13:00",body:"Spiegare il sondaggio."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: le interviste del campione, con uno zero davanti.\nNota sotto: l'ora in cui il file è arrivato al giornale, quattro cifre."},
   {id:"n2",title:"Il file",lock:"note",body:"Giovedì alle 10 le interviste erano ancora aperte. Nessun numero poteva essere definitivo.\nChi ha venduto quel file ha venduto un numero che non esisteva ancora.\nE lo ha anche ribaltato."}],
  drive:[
   {id:"d1",title:"Sondaggio_Monteforte.xlsx",sub:"Versione originale",meta:"giovedì 20:15",body:"Salvato da s.leone dopo la chiusura delle interviste.\nConti 46%, Ferrara 41%, indecisi 13%."},
   {id:"d2",title:"Sondaggio_Monteforte_def.xlsx",sub:"Copia modificata",meta:"giovedì 09:52",body:"Salvata da a.arrighi alle 09:52, con le interviste ancora in corso.\nFerrara 47%, Conti 40%, indecisi 13%."}],
  tel:[
   {id:"t1",title:"Arrighi",sub:"gio 09:38 · in entrata, 2 min"},
   {id:"t2",title:"Prof. Danieli",sub:"ven 08:02 · in entrata, 9 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Ufficio",sc:"ist"},
  {id:"p2",t:"gio 20:15",title:"Il file vero",sc:"ori"},
  {id:"p3",t:"ven 07:50",title:"Il giornale",sc:"pub"},
  {id:"p4",t:"set",title:"Con Matteo",sc:"mat"},
  {id:"h1",t:"ven 12:10",title:"Da Daria Conti",sc:"c2",lock:"album"},
  {id:"h2",t:"ven 11:05",title:"Dalla redazione",sc:"fat",lock:"album"}],
 pins:{note:"1000",album:"0800"},
 events:[{id:"a",q:3,kind:"call",from:"Arrighi",lines:["«Professore, è lei col telefono di Sofia? Che pasticcio.»","«Sarà stato un errore di trascrizione della ragazza. Io il file l'ho solo inoltrato, in buona fede. Non facciamone un caso.»","«Professore?»"]},
         {id:"b",q:9,kind:"sms",from:"Matteo",text:"Sofia, ho chiesto a Ferrara chi gli fa la comunicazione. Mi ha detto Arrighi. Dal 15 settembre."}],
 qs:[
  {t:"800",q:"Quante interviste conta il campione?",a:["800","ottocento","800 interviste"],show:"800",hint:"Mail sul calendario della rilevazione.",news:"Interviste da lunedì a giovedì, chiusura giovedì alle 20."},
  {t:"Conti",q:"Nel file originale di Sofia chi è in vantaggio?",any:["conti","daria"],show:"Daria Conti, 46 a 41",hint:"Foto del file e Drive.",news:"Cinque punti di vantaggio per Conti."},
  {t:"Ferrara",q:"E nel sondaggio pubblicato dal giornale?",any:["ferrara"],show:"Ferrara, 47 a 40",hint:"Foto del giornale in Galleria.",news:"Il vincitore è stato ribaltato."},
  {t:"20:00",q:"A che ora si sono chiuse le interviste giovedì?",a:["20","20:00","alle 20","le 20","20.00","alle otto","le otto"],show:"Alle 20:00",hint:"Calendario della rilevazione.",news:"Prima di quell'ora nessun numero era definitivo."},
  {t:"10:00",q:"A che ora il giornale ha ricevuto il sondaggio?",a:["10","10:00","alle 10","le 10","10.00","alle dieci","le dieci"],show:"Giovedì alle 10:00",hint:"Lo scrive la redazione.",news:"Dieci ore prima della chiusura. Chi lo ha mandato ha venduto numeri che non esistevano ancora."},
  {t:"09:52",q:"A che ora è stata salvata la copia modificata?",all:["952"],show:"Giovedì alle 09:52",hint:"Drive.",news:"Otto minuti prima dell'invio al giornale, con le interviste ancora in corso."},
  {t:"a.arrighi",q:"Con quale utente è stata salvata?",any:["aarrighi","arrighi"],show:"a.arrighi",hint:"Stessa scheda del Drive.",news:"Il partner commerciale dell'istituto dal 1° settembre. Ora che hai il nome, hai recuperato i due messaggi che Arrighi ha cancellato giovedì.",unlock:"arr"},
  {t:"due decimali",q:"Come ha giustificato Arrighi la modifica a Sofia? «... in più o in meno non cambiano la scienza.»",any:["decimal"],show:"«Due decimali in più o in meno»",hint:"Messaggi recuperati.",news:"Sei punti, non due decimali. «Il cliente ha fretta.»"},
  {t:"Matteo",q:"Il fidanzato di Sofia è candidato con Ferrara. Come si chiama?",any:["matteo"],show:"Matteo",hint:"Chat.",news:"Dice di non aver mai visto il file. E nel Drive non ha nessun accesso."},
  {t:"2",q:"Daria Conti ha scoperto una cosa sul suo consulente. Per quanti candidati lavora Arrighi?",a:["2","due","per due","2 candidati","due candidati"],show:"Per due: Conti e Ferrara",hint:"Messaggio di Conti, e c'è un documento nell'album.",news:"Uno contro l'altro, nella stessa elezione."},
  {t:"2000",q:"Nell'album privato c'è la fattura di Arrighi al giornale. Quanto ha incassato?",a:["2000","2.000","2000 euro","2.000 euro","2.000 €","2.000,00"],show:"2.000 €",hint:"Il codice dell'album sono le interviste, con uno zero davanti.",news:"«Cessione dati di sondaggio.» Dati falsi, venduti come veri."},
  {t:"non esisteva ancora",q:"Nella nota protetta Sofia scrive che Arrighi ha venduto un numero che...",any:["esistev","ancora"],show:"«Non esisteva ancora»",hint:"Il codice è l'ora in cui il file è arrivato al giornale.",news:"«E lo ha anche ribaltato.»"},
  {t:"a",q:"Chi ha ribaltato il sondaggio?",o:[["s","Sofia Leone, l'analista"],["m","Matteo, il fidanzato"],["d","Il prof. Danieli"],["a","Arrighi, il partner commerciale"],["c","Daria Conti"],["r","La redazione del giornale"]],a:"a",show:"Arrighi",hint:"Chi ha salvato la copia modificata e l'ha venduta?",news:""}],
 win:{title:"Il sondaggio l'ha ribaltato Arrighi.",
  steps:["Nel file di Sofia, salvato giovedì alle 20:15, Conti era avanti 46 a 41.","Alle 09:52 di giovedì, con le interviste ancora aperte, Arrighi ha salvato una copia con Ferrara avanti 47 a 40.","Alle 10 l'ha mandata al giornale con una fattura da 2.000 €.","Arrighi era partner commerciale dell'istituto e lavora come consulente sia per Conti sia per Ferrara.","Matteo non aveva accesso al file, Sofia non l'ha mai mandato."],
  end:"Il professor Danieli chiama la redazione davanti a te e detta la rettifica parola per parola. Poi revoca l'accesso di Arrighi alla cartella. «Trent'anni», dice. «E me lo rovina un uomo che lavora per tutti.» Sofia va in radio alle 13 con il file vero."}
});
LIB.tune(70,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d2").lock="def";
 e.pins={album:"0800",def:"2000",note:"2052"};
 e.locks={album:{hint:"Quante persone abbiamo sentito, con lo zero."},def:{name:"File protetto",hint:"L'ora in cui si chiudevano le interviste."},note:{hint:"Le centinaia incassate per il sondaggio, poi i minuti del salvataggio sbagliato."}};
 e.spots=[
  {id:"s1",x:70,y:56,label:"Istituto Polis",title:"Istituto Polis",sub:"Ricerche e sondaggi · ★ 4,4",body:"Recensione: «Seri, lenti, precisi. Non danno un numero prima di averlo.»"},
  {id:"s2",x:96,y:36,label:"Radio Valle",title:"Radio Valle",sub:"Monteforte",body:"Sabato Sofia sarà in onda per spiegare il sondaggio."},
  {id:"s3",x:180,y:120,label:"Rete Ascolto",title:"Rete Ascolto srl",sub:"Borgoverde",body:"La società del «partner commerciale» dell'istituto, dal 1° settembre."}];
 LIB.hints(e,["L'istituto ha scritto quanto è grande il campione.","Il file di Sofia dice chi vince.","Il giornale dice un'altra cosa.","Le interviste avevano un orario.","La redazione ha detto quando l'ha ricevuto.","Una seconda copia, chiusa a chiave.","Stessa copia: chi l'ha salvata?","Qualcuno si è giustificato, poi ha cancellato.","Il fidanzato di Sofia ha un nome.","Una candidata ha scoperto qualcosa sul suo consulente.","Una fattura nascosta.","Sofia ha scritto un pensiero, chiuso.","Chi ha salvato la copia modificata e l'ha venduta?"]);
});
})();
