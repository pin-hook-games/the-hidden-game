(function(){
/* episodio 17: Il bonifico del 5 (Perugia). Soluzione: Nasconde altro. Il bonifico è il mantenimento di un figlio nato prima del matrimonio, che ora ha 19 anni. */
const SC={
 site:()=>LIB.obj("#dfe5ea","🏗️","Cantiere Bianchi, il tetto"),
 ter:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Teresa, Corso Vannucci"),
 dip:()=>LIB.doc("Diploma di maturità","#33658a",["Ferri Matteo","Liceo scientifico","Voto: 92 / 100","Luglio 2025"]),
 bon:()=>LIB.doc("Bonifico periodico","#4a5d7a",["Ogni 5 del mese","A: Ferri Lucia","Importo: 350,00 €","Causale: M. · novembre"]),
 kid:()=>LIB.obj("#f6e3b0","🚲","2010 · sul retro: «Per papà»"),
 tri:()=>LIB.doc("Tribunale di Perugia","#55606b",["Decreto del 2006","Riconoscimento del figlio","Assegno mensile al minore","fino all'indipendenza economica"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Perugia e dintorni",
 water:[["M0 230Q120 200 240 240",8]],
 parks:[`<ellipse cx="330" cy="150" rx="50" ry="30" fill="#d7e2c9"/>`],
 roads:["M100 40Q160 100 120 180","M120 110H260","M260 110L340 150","M180 60V200","M60 150H200"],
 extra:`<rect x="112" y="92" width="18" height="18" rx="3" fill="#b0764a"/>`,
 labels:[[136,104,"Corso Vannucci"],[70,36,"Porta Sant'Angelo"],[186,56,"Monteluce"],[60,196,"Stazione"],[190,196,"Ponte San Giovanni"],[316,140,"Assisi"],[290,96,"verso Foligno"],[30,224,"Tevere"]],
 pins:[[150,140,"#33658a","Casa e studio",9,4],[340,160,"#d43d55","sab 22 · 11:00",-80,22],[196,72,"#56666e","università",9,4]]});

EPISODES[17]={...LIB.apps("msg tel mail web gal map cal note bank drive"),
 n:17,timer:1800,map:MAP,scenes:SC,owner:"Giovanni Baldoni",time:"07:45",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 brief:"Teresa ti ha portato il telefono del marito Giovanni, 52 anni, geometra a Perugia. Lui è in cantiere dalle sette e il telefono personale lo tiene nel cassetto dello studio, di cui lei ha la chiave.",
 quote:"«Ogni 5 del mese parte un bonifico verso una certa Lucia Ferri. Io non conosco nessuna Lucia Ferri. Ho trovato l'estratto conto per caso. Con lei si scrive con una tenerezza che con me non usa più. Sedici anni di matrimonio. Chi è questa donna?»",
 chats:[
  {id:"teresa",name:"Teresa",sub:"Moglie",m:[
   ["gio 20:00",0,"Sabato mattina andiamo al mercato?"],
   ["gio 20:15",1,"Sabato ho un sopralluogo ad Assisi. Torno per pranzo."],
   ["gio 20:16",0,"Di sabato?"]]},
  {id:"lucia",name:"Lucia F.",sub:"",m:[
   ["lun 21:00",0,"Ha preso 28 al primo esame. Era così felice che ha chiamato me prima degli amici."],
   ["lun 21:10",1,"Che meraviglia. Sei stata brava tu, in tutti questi anni."],
   ["lun 21:12",0,"Lo siamo stati in due, a modo nostro. Tu non hai mai saltato un mese."],
   ["mer 19:00",0,"Ti ha scritto, vero? Non ti ho detto niente per non forzarti. Decide lui, ormai è grande."],
   ["mer 19:20",1,"Mi ha scritto. Ho pianto in macchina come un cretino."]]},
  {id:"num",name:"Numero non salvato",sub:"",m:[
   ["",2,"Conversazione archiviata."],
   ["mar 22:10",0,"Ciao Giovanni. Sono Matteo. A giugno ho compiuto 19 anni.","mat"],
   ["mar 22:11",0,"Non ti chiedo niente. Vorrei solo conoscerti. Ho la tua foto del 2010 sul comodino.","mat"],
   ["mer 07:00",1,"Ciao Matteo. Ho letto il tuo messaggio venti volte. Sì.","mat"],
   ["mer 07:05",0,"Sabato alle 11 ad Assisi, davanti alla basilica? Viene anche Elisa, la mia ragazza, se non ti dispiace.","mat"],
   ["mer 07:06",1,"Ci sarò.","mat"]]},
  {id:"marchetti",name:"Avv. Marchetti",sub:"",m:[
   ["gio 10:00",0,"Geometra, l'assegno è dovuto finché il ragazzo studia. Ma il mio consiglio da avvocata di famiglia è un altro: lo dica a sua moglie prima che lo scopra da un estratto conto."],
   ["gio 10:30",1,"Lo so. Sono sedici anni che lo so."]]},
  {id:"paola",name:"Paola",sub:"",m:[
   ["gio 21:00",0,"Fratello, mamma chiede sempre di «quel bambino». Io lo so dal 2006 e sto zitta. Ma Teresa merita di saperlo da te."],
   ["gio 21:20",1,"Sabato lo vedo. Poi glielo dico."]]},
  {id:"rita",name:"Rita",sub:"",m:[
   ["gio 08:30",0,"Geometra, la signora Bianchi ha chiamato tre volte per il tetto. Dice che lei è l'unico di cui si fida."],
   ["gio 08:40",1,"Passo oggi alle 15. Grazie Rita."]]},
  {id:"bianchi",name:"Sig.ra Bianchi",sub:"",m:[
   ["gio 16:10",0,"Grazie della visita, caro. Le ho lasciato una crostata in studio ❤"],
   ["gio 16:15",1,"Troppo gentile. Lunedì cominciamo il tetto."]]}
 ],
 lists:{
  bank:[
   {id:"b0",g:"Bonifico periodico",title:"A: Ferri Lucia",sub:"Ogni 5 del mese · 350,00 €",meta:"Attivo",body:"Importo: 350,00 €.\nCausale di questo mese: «M. · novembre».\nPrimo bonifico in archivio: 5 gennaio 2007.\nNessun mese saltato."},
   {id:"b1",g:"2025",title:"Ferri Lucia · M. · novembre",sub:"5 nov · − 350,00 €"},
   {id:"b2",g:"2025",title:"Ferri Lucia · M. · ottobre",sub:"5 ott · − 350,00 €"},
   {id:"b3",g:"2025",title:"Ferri Lucia · M. · settembre",sub:"5 set · − 350,00 €"},
   {id:"b4",g:"2025",title:"Da gennaio ad agosto",sub:"8 bonifici · − 350,00 € ciascuno"},
   {id:"b5",g:"2025",title:"Libreria universitaria",sub:"2 ott · − 180,00 €"}],
  mail:[
   {id:"m1",title:"Università di Perugia",sub:"Contributo libri di testo",meta:"2 ottobre",body:"Ricevuta per l'acquisto dei testi del primo anno di Ingegneria.\nStudente: Ferri Matteo. Pagante: Baldoni Giovanni."},
   {id:"m2",title:"Studio legale Marchetti",sub:"Assegno di mantenimento",meta:"19 novembre",body:"L'assegno stabilito dal decreto del 2006 resta dovuto fino all'indipendenza economica del figlio.\nAvv. Marchetti, diritto di famiglia"}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Assisi, piazza della basilica",sub:"Salvato mercoledì",meta:"Sabato alle 11",body:"35 minuti in auto."},
   {id:"g2",g:"Cronologia",title:"Assisi",sub:"Nessuna visita quest'anno",body:"Nessuna sosta ad Assisi o a casa di Lucia Ferri negli ultimi dodici mesi."}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sab 22 · M.",sub:"11:00",body:"Assisi. A Teresa: sopralluogo."},
   {id:"c2",g:"Ogni mese",title:"Il 5 · Bonifico",sub:"",body:"Controllare che sia partito."},
   {id:"c3",g:"Ricorrenze",title:"12 settembre · Anniversario",sub:"Dal 2009",body:"Matrimonio con Teresa: 12 settembre 2009."},
   {id:"c4",g:"Ricorrenze",title:"18 giugno · M.",sub:"Dal 2006",body:"Ogni anno. Nessuna nota."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come dire a mia moglie che ho un figlio",sub:"mer 23:40"},
   {id:"w2",g:"Cronologia",title:"primo incontro con un figlio adulto cosa dire",sub:"mer 07:30"},
   {id:"w3",g:"Cronologia",title:"ingegneria perugia primo anno esami",sub:"lun 21:30"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il voto del diploma, scritto due volte.\nLa nota qui sotto: l'anno del decreto."},
   {id:"n2",title:"Per Teresa",lock:"note",body:"Quando ci siamo conosciuti ti ho detto che i figli non erano nei miei piani.\nUno c'era già, e aveva due anni.\nNon te l'ho detto il primo giorno, e ogni giorno dopo è diventato più difficile.\nSono diciannove anni che ho un figlio e sedici che lo nascondo a te. Sabato lo vedo per la prima volta da quando andava in bicicletta."}],
  drive:[
   {id:"d1",title:"Decreto_2006.pdf",sub:"PDF scansionato",meta:"Tribunale di Perugia",body:"Decreto del 2006.\nRiconoscimento del figlio Matteo, nato il 18 giugno 2006, e assegno mensile alla madre, Ferri Lucia.\nI genitori non hanno mai convissuto."},
   {id:"d2",title:"Cantiere Bianchi",sub:"Cartella",meta:"Novembre",body:"Rifacimento del tetto. Inizio lavori lunedì 24."}],
  tel:[
   {id:"t1",title:"Lucia F.",sub:"mer 19:25 · in uscita, 22 min"},
   {id:"t2",title:"Avv. Marchetti",sub:"gio 09:50 · in uscita, 11 min"},
   {id:"t3",title:"Numero non salvato",sub:"mar 22:05 · persa"}]
 },
 photos:[
  {id:"p1",t:"gio 15:20",title:"Tetto",sc:"site"},
  {id:"p2",t:"set",title:"Con Teresa",sc:"ter"},
  {id:"p3",t:"lug",title:"Ricevuta da L.",sc:"dip"},
  {id:"p4",t:"5 nov",title:"Partito",sc:"bon"},
  {id:"h1",t:"2010",title:"Lui",sc:"kid",lock:"album"},
  {id:"h2",t:"2006",title:"Decreto",sc:"tri",lock:"album"}],
 pins:{note:"2006",album:"9292"},
 qs:[
  {t:"350",q:"Cominciamo dal bonifico. Di quanti euro è?",a:["350","350,00","350 euro","350€"],show:"350 €",hint:"In Banca c'è la scheda del bonifico periodico.",news:"Trecentocinquanta euro, ogni 5 del mese, a Lucia Ferri. Teresa ha visto giusto."},
  {t:"2007",q:"Da quale anno partono i bonifici in archivio?",a:["2007","gennaio 2007","dal 2007"],show:"Dal 2007",hint:"È nella scheda del bonifico periodico.",news:"Diciotto anni senza saltare un mese. Un'amante di solito non ha una rata fissa."},
  {t:"3850",q:"Quanto ha versato nel 2025, da gennaio a novembre?",a:["3850","3.850","3850 euro","3.850 euro","3.850 €"],show:"3.850 €",hint:"Undici mesi per l'importo del bonifico.",news:"Sempre la stessa cifra, sempre lo stesso giorno."},
  {t:"M",q:"Ogni bonifico ha una causale che comincia con una lettera. Quale?",a:["m","m."],show:"«M.»",hint:"Leggi i movimenti del 2025.",news:"Non «L.» come Lucia. «M.»"},
  {t:"Matteo",q:"Nella chat con Lucia parlano sempre di un «lui». Come si chiama? Lo trovi in una ricevuta.",any:["matteo"],show:"Matteo",hint:"L'università ha mandato una ricevuta con il nome dello studente.",news:"Matteo Ferri. Ora che sai chi è «M.», hai aperto la conversazione archiviata con il numero non salvato.",unlock:"mat"},
  {t:"19",q:"Quanti anni ha Matteo?",a:["19","diciannove","19 anni"],show:"19",hint:"Lo scrive lui nel primo messaggio.",news:"«Non ti chiedo niente. Vorrei solo conoscerti.»"},
  {t:"per nome",q:"Come si rivolge a Giovanni? Scrivi la parola che usa.",any:["giovanni","nome"],show:"Lo chiama «Giovanni»",hint:"Leggi come comincia il primo messaggio.",news:"Non «papà». Non ancora."},
  {t:"2006",q:"Nel Drive c'è un documento del tribunale. Di quale anno?",a:["2006"],show:"Del 2006",hint:"Un PDF scansionato.",news:"Riconoscimento del figlio e assegno mensile alla madre. I genitori non hanno mai convissuto."},
  {t:"3",q:"Giovanni e Teresa si sono sposati nel 2009. Quanti anni prima del matrimonio è nato Matteo?",a:["3","tre","3 anni","tre anni"],show:"Tre anni prima",hint:"L'anniversario è in calendario, la data di nascita nel decreto.",news:"Matteo esisteva già quando Teresa ha conosciuto suo marito. Non c'è stato nessun tradimento. C'è stato un silenzio."},
  {t:"92",q:"Lucia gli ha mandato la foto del diploma. Con quale voto si è diplomato Matteo?",a:["92","92/100","92 su 100","novantadue"],show:"92 su 100",hint:"È in Galleria.",news:"Giovanni tiene le foto dei suoi traguardi, ricevute dalla madre."},
  {t:"Ingegneria",q:"Che cosa studia adesso?",any:["ingegner"],show:"Ingegneria, a Perugia",hint:"Ricevuta dell'università.",news:"I libri del primo anno glieli ha pagati Giovanni. Figlio di un geometra, studia ingegneria nella stessa città."},
  {t:"Assisi",q:"Dove si vedranno per la prima volta? Scrivi la città.",any:["assisi"],show:"Ad Assisi, sabato alle 11",hint:"Lo propone Matteo. A Teresa ha parlato di un sopralluogo.",news:"Il «sopralluogo» di sabato è questo."},
  {t:"la sua ragazza",q:"Matteo porterà Elisa. Chi è?",any:["ragazza","fidanzata"],show:"La sua ragazza",hint:"Lo dice lui.",news:"Un'altra donna che non c'entra niente."},
  {t:"diritto di famiglia",q:"Di che cosa si occupa l'avv. Marchetti?",any:["famiglia"],show:"Diritto di famiglia",hint:"È nella firma della sua mail.",news:"Gli ha dato un consiglio non richiesto: dirlo alla moglie prima che lo scopra da un estratto conto."},
  {t:"sorella",q:"Paola lo sa dal 2006. Chi è per Giovanni?",any:["sorella"],show:"Sua sorella",hint:"Guarda come lo chiama.",news:"Rita è la segretaria dello studio, la signora Bianchi una cliente con il tetto da rifare e una crostata nel forno."},
  {t:"Per papà",q:"Nell'album privato c'è una foto del 2010. Che cosa c'è scritto sul retro?",any:["papa"],show:"«Per papà»",hint:"Il codice dell'album è il voto del diploma, scritto due volte.",news:"La stessa foto che Matteo tiene sul comodino. L'ultima volta che si sono visti aveva quattro anni."},
  {t:"2",q:"Nella nota protetta c'è la confessione. Quanti anni aveva Matteo quando Giovanni ha conosciuto Teresa?",a:["2","due","2 anni","due anni"],show:"Due anni",hint:"Il codice è l'anno del decreto.",news:"«Non te l'ho detto il primo giorno, e ogni giorno dopo è diventato più difficile.»"},
  {t:"nessuna",q:"Lucia, l'avv. Marchetti, Paola, Rita, la signora Bianchi, Elisa. Chi è l'amante di Giovanni? Se nessuna, scrivi NESSUNA.",any:["nessun"],show:"Nessuna",hint:"La madre di suo figlio, un'avvocata, una sorella, una segretaria, una cliente, la ragazza di Matteo.",news:"La tenerezza con Lucia riguarda una persona sola, ed è Matteo."},
  {t:"a",q:"Il verdetto per Teresa.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un'altra donna. C'è un figlio.",news:""}],
 win:{title:"Giovanni non tradisce Teresa. Ha un figlio di diciannove anni.",
  steps:["Il bonifico da 350 € del 5 è l'assegno di mantenimento stabilito da un decreto del 2006.","«M.» è Matteo Ferri, nato tre anni prima del matrimonio con Teresa. Lucia è sua madre.","Con Lucia Giovanni parla solo del ragazzo: il diploma con 92, il primo esame a Ingegneria.","Martedì Matteo gli ha scritto per conoscerlo. Sabato alle 11 si vedono ad Assisi.","La sorella Paola lo sa dal 2006. L'avvocata gli ha consigliato di dirlo a Teresa."],
  end:"Teresa posa la foto del bambino in bicicletta. Non piange. «Sedici anni», dice. «Avrei detto di sì. Era questo che non ha mai capito: gli avrei detto di sì.» Sabato alle 11, davanti alla basilica, potrebbero essere in quattro."}
};
LIB.tune(17,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.drive.find(x=>x.id==="d1").lock="dec";
 e.pins={album:"9292",dec:"0535",note:"1018"};
 e.locks={album:{hint:"Il voto del diploma, scritto due volte."},dec:{name:"File protetto",hint:"Il giorno del bonifico, con lo zero, poi la cifra in decine."},note:{hint:"La fine dell'anno di quella foto, poi il giorno in cui è nato lui."}};
 e.spots=[
  {id:"s1",x:340,y:160,label:"Assisi",title:"Piazza della basilica",sub:"Assisi",body:"Sabato 22 alle 11. Un posto a metà strada, dove nessuno dei due è di casa."},
  {id:"s2",x:150,y:140,label:"Casa e studio",title:"Casa e studio di Giovanni",sub:"",body:"Geometra. Sabato «sopralluogo», dice il calendario."},
  {id:"s3",x:196,y:72,label:"Università",title:"Università · Ingegneria",sub:"",body:"Un ragazzo del primo anno ha comprato i libri con una ricevuta pagata da fuori."}];
 LIB.hints(e,["Un bonifico che si ripete.","Da quando?","Somma quest'anno.","La causale ha una lettera.","Lei parla sempre di un «lui».","Quanti anni ha?","Come lo chiama?","Un documento del tribunale, chiuso.","Fai la differenza tra due anni.","Una foto del diploma.","Che cosa studia?","Dove si vedranno?","Chi porterà?","Che cosa fa l'avvocata?","Chi lo sa da sempre?","Una vecchia foto nascosta.","La confessione è chiusa.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
