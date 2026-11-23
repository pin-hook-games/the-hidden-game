(function(){
/* episodio 15: Il calcetto del giovedì (Catania). Soluzione: Tradisce, con la collega Martina Greco. Il campo è chiuso da settembre e gli amici lo coprono. */
const SC={
 team:()=>LIB.group(6,"Real Colletto · torneo 2024","#2f6b4f"),
 off:()=>LIB.obj("#dfe5ea","💻","Ufficio, rilascio di venerdì"),
 bea:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Bea, Etna"),
 sign:()=>LIB.doc("Centro Sportivo Ognina","#a02822",["CAMPO CHIUSO PER LAVORI","dal 15 settembre","Riapertura prevista: gennaio","Ci scusiamo per il disagio"]),
 bag:()=>LIB.obj("#cfd8df","🎒","Nel bagagliaio da settembre"),
 mar:()=>LIB.two("#b0764a","#7a3b5a","#1f3a66","Aci Castello · gio 13")
};
const MAP=LIB.map({name:"Mappa stilizzata di Catania",
 water:[["M300 0Q330 120 290 260",70]],
 parks:[`<ellipse cx="80" cy="30" rx="70" ry="22" fill="#d7c9b8"/>`],
 roads:["M150 20V250","M80 90H250","M60 160H250","M210 60V230","M90 220H240","M210 60L250 20"],
 labels:[[50,26,"verso l'Etna"],[156,84,"Borgo"],[156,154,"Centro"],[100,214,"Stazione"],[216,110,"Ognina"],[224,24,"Aci Castello"],[330,140,"Ionio"],[60,150,"Cibali"]],
 pins:[[120,170,"#33658a","Casa",9,-8],[170,110,"#33658a","ufficio",-52,-8],[232,130,"#56666e","campo, chiuso",-80,16],[246,36,"#d43d55","giovedì sera",-74,16]]});

EPISODES[15]={...LIB.apps("msg tel mail web gal map cal note bank drive"),
 n:15,timer:1800,map:MAP,scenes:SC,owner:"Andrea Privitera",time:"07:20",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 brief:"Bea ti ha portato il telefono del fidanzato Andrea, 30 anni, programmatore a Catania. Lui è sotto la doccia, poi fa colazione al bar: hai mezz'ora.",
 quote:"«Ogni giovedì calcetto con gli amici. Torna a mezzanotte, profumato, e la borsa non la vedo mai: dice che la lascia in macchina. Ho chiesto a Ciccio com'era andata la partita e mi ha risposto «bene» guardando per terra. Ho le foto della squadra, però. Sono tutti lì, in maglia.»",
 chats:[
  {id:"bea",name:"Bea",sub:"Fidanzata",m:[
   ["gio 19:40",1,"Vado al campo. Non aspettarmi."],
   ["gio 19:41",0,"Vincete!"],
   ["gio 23:50",1,"5 a 3 per noi. Ho fatto doppietta."],
   ["gio 23:51",0,"Bravo il mio bomber ❤"]]},
  {id:"giovedi",name:"Giovedì",sub:"Gruppo · 5 partecipanti",m:[
   ["gio 6 · 19:00",1,"Ragazzi, stasera se Bea chiede: 4 a 4, pareggio."],
   ["gio 6 · 19:02",0,"Nino: Ricevuto."],
   ["gio 13 · 19:00",1,"Stasera: 2 a 1 per loro. Abbiamo perso, sono nervoso."],
   ["gio 13 · 19:05",0,"Ciccio: Andrea, a me questa cosa non piace."],
   ["gio 20 · 18:55",1,"Stasera: 5 a 3 per noi, io doppietta."],
   ["gio 20 · 19:10",0,"Ciccio: No. Io a Bea non mento più. Ti do tempo fino a domenica, poi glielo dico io."],
   ["gio 20 · 19:12",0,"Nino: Ciccio ha ragione. Il campo è chiuso da due mesi, prima o poi ci passa davanti."]]},
  {id:"marti",name:"Marti UX",sub:"",m:[
   ["mer 16:00",0,"Mi mandi le schermate del login entro stasera?"],
   ["mer 16:05",1,"Fatto. Controlla la cartella."],
   ["",2,"Conversazione personale archiviata."],
   ["lug",0,"Roma è stata un errore bellissimo.","mar"],
   ["lug",1,"Non è stato un errore.","mar"],
   ["set",1,"Il campo chiude per lavori. Il giovedì resta libero: lo tengo per noi.","mar"],
   ["gio 20 · 18:30",0,"Ylenia stasera fa la notte in ospedale. Casa libera, porta il sushi.","mar"],
   ["gio 20 · 18:31",1,"Alle 20:40 sono da te.","mar"]]},
  {id:"lucia",name:"Lucia bar",sub:"",m:[
   ["10 nov",1,"Lucia, il bar del campo è aperto?"],
   ["10 nov",0,"Macché, gioia. Lavori fino a Natale, riapriamo a gennaio. Mi mancate, tu e le tue aranciate."]]},
  {id:"sara",name:"Sara",sub:"",m:[
   ["lun 09:00",0,"Andrea, confermo la call settimanale ogni lunedì alle 9:30. Mi servono i tempi di consegna."],
   ["lun 09:05",1,"Presente."]]},
  {id:"fede",name:"Federica",sub:"",m:[
   ["2021",0,"Ti ho lasciato le tue cose in portineria. In bocca al lupo."],
   ["2021",1,"Grazie. Anche a te."]]},
  {id:"nonna",name:"Nonna Tina ❤",sub:"",m:[
   ["dom 10:00",0,"Andreuccio domenica faccio 85 anni, vieni con la Beatrice? Faccio la pasta alla Norma."],
   ["dom 10:05",1,"Veniamo nonna ❤"]]},
  {id:"giusy",name:"Giusy",sub:"",m:[
   ["gio 20 · 22:00",0,"Andrea sono Giusy, la sorella di Ciccio. Mio fratello è tornato a casa nero. Che gli hai fatto fare?"],
   ["ven 00:10",1,"Niente Giusy. Gli parlo io."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Centro Sportivo Ognina",sub:"Chiusura per lavori",meta:"8 settembre",body:"Il campo da calcetto resterà chiuso per il rifacimento del manto dal 15 settembre.\nLe quote già versate saranno rimborsate.\nRiapertura prevista a gennaio."},
   {id:"m2",title:"Centro Sportivo Ognina",sub:"Rimborso quota",meta:"30 settembre",body:"Rimborso della quota d'autunno: 90,00 €."},
   {id:"m3",title:"Sushi Scogliera",sub:"Ordine confermato",meta:"20 novembre",body:"Ordine per due persone, 45,00 €.\nConsegna alle 20:45 ad Aci Castello, citofono Greco - Russo."}],
  map:[
   {id:"g1",g:"Cronologia · giovedì 20",title:"Ufficio",sub:"09:00 - 19:30",meta:"Permanenza",body:"In ufficio fino alle 19:30."},
   {id:"g2",g:"Cronologia · giovedì 20",title:"Aci Castello, un palazzo sul lungomare",sub:"20:40 - 23:30",meta:"Permanenza",body:"Arrivo alle 20:40, uscita alle 23:30.\nLo stesso indirizzo compare ogni giovedì dal 18 settembre."},
   {id:"g3",g:"Luoghi",title:"Centro Sportivo Ognina",sub:"Ultima visita: 11 settembre",body:"Nessuna visita dopo l'11 settembre."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Sushi Scogliera",sub:"20 nov · − 45,00 €"},
   {id:"b2",g:"Novembre",title:"Sushi Scogliera",sub:"13 nov · − 42,00 €"},
   {id:"b3",g:"Novembre",title:"Sushi Scogliera",sub:"6 nov · − 38,00 €"},
   {id:"b4",g:"Settembre",title:"Centro Sportivo Ognina, rimborso",sub:"30 set · + 90,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ogni giovedì · Calcetto",sub:"20:30",body:"Evento ricorrente. Ultima modifica: 12 settembre, tolto l'indirizzo del campo."},
   {id:"c2",g:"Novembre",title:"Dom 23 · Nonna Tina, 85",sub:"13:00",body:"Con Bea."},
   {id:"c3",g:"Novembre",title:"Lun · Call con Sara",sub:"09:30",body:"Cliente. Tempi di consegna."}],
  web:[
   {id:"w1",g:"Cronologia",title:"sushi aci castello consegna",sub:"gio 18:35"},
   {id:"w2",g:"Cronologia",title:"amico minaccia di dire tutto alla mia ragazza",sub:"gio 23:55"},
   {id:"w3",g:"Cronologia",title:"risultati credibili partita calcetto",sub:"6 nov"}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il risultato di ieri sera e, attaccate, le ultime due cifre dell'anno della foto di squadra.\nLa nota qui sotto: giorno e mese in cui ha chiuso il campo."},
   {id:"n2",title:"Domenica",lock:"note",body:"Ciccio ha ragione e lo odio per questo.\nO lo dico io a Bea entro domenica, o glielo dice lui.\nDomenica c'è il compleanno della nonna. Non posso farlo lì."}],
  drive:[
   {id:"d1",title:"Rubrica del team",sub:"Foglio aziendale",meta:"Ottobre",body:"Andrea Privitera, sviluppo, abita a Catania centro.\nMartina Greco, UX, abita ad Aci Castello.\nSara Leone, cliente, sede di Milano."},
   {id:"d2",title:"Trasferte 2025",sub:"PDF",meta:"Luglio",body:"Roma, 8 - 10 luglio: Privitera e Greco, presentazione al cliente."}],
  tel:[
   {id:"t1",title:"Ciccio",sub:"gio 23:40 · persa"},
   {id:"t2",title:"Marti UX",sub:"gio 18:28 · in entrata, 2 min"},
   {id:"t3",title:"Bea",sub:"gio 19:38 · in uscita, 1 min"}]
 },
 photos:[
  {id:"p1",t:"giu 2024",title:"La squadra",sc:"team"},
  {id:"p2",t:"mer",title:"Lavoro",sc:"off"},
  {id:"p3",t:"ago",title:"Con Bea",sc:"bea"},
  {id:"p4",t:"11 set",title:"Cartello",sc:"sign"},
  {id:"h1",t:"12 set",title:"Borsa",sc:"bag",lock:"album"},
  {id:"h2",t:"gio 13 · 21:30",title:"Da M.",sc:"mar",lock:"album"}],
 pins:{note:"1509",album:"5324"},
 qs:[
  {t:"2024",q:"Bea ha le foto della squadra. Di quale anno sono?",a:["2024","giugno 2024","del 2024"],show:"Del 2024",hint:"Guarda la data in Galleria, e la scritta sulla foto.",news:"L'ultima foto in maglia ha un anno e mezzo. Non ce n'è una di quest'autunno."},
  {t:"15 settembre",q:"E il campo? Da quale giorno è chiuso per lavori? Giorno e mese.",all:["15","sett"],show:"Dal 15 settembre",hint:"Il centro sportivo ha mandato una mail, e c'è la foto di un cartello.",news:"Chiuso per il rifacimento del manto. Hanno perfino rimborsato la quota."},
  {t:"gennaio",q:"Quando riapre? Lo dice anche Lucia.",any:["gennaio"],show:"A gennaio",hint:"Mail del centro sportivo e chat con Lucia.",news:"Lucia è la barista del campo, e ha nostalgia delle aranciate. Primo nome da togliere."},
  {t:"5 a 3",q:"Eppure ieri sera Andrea ha «vinto». Con quale risultato?",all:["5","3"],show:"5 a 3, con doppietta",hint:"Lo ha scritto a Bea a mezzanotte meno dieci.",news:"Lo stesso identico risultato era stato deciso alle 18:55 nel gruppo «Giovedì», prima ancora dell'ora della partita."},
  {t:"Ciccio",q:"Nel gruppo gli amici concordano che cosa dire a Bea. Chi si è rifiutato di continuare?",any:["ciccio"],show:"Ciccio",hint:"Leggi l'ultimo giovedì.",news:"«Io a Bea non mento più.» Ecco perché guardava per terra. Giusy è sua sorella, e chiede solo che cosa sia successo."},
  {t:"Aci Castello",q:"Dov'era davvero Andrea ieri sera? Scrivi la località.",any:["castello"],show:"Ad Aci Castello",hint:"Mappe conserva la cronologia.",news:"Un palazzo sul lungomare, ogni giovedì dal 18 settembre: il primo giovedì dopo la chiusura del campo."},
  {t:"2 ore e 50",q:"Quanto tempo ci è rimasto? Scrivi ore e minuti.",all:["2","50"],a:["170","170 minuti"],show:"2 ore e 50 minuti",hint:"Dall'arrivo all'uscita.",news:"Dalle 20:40 alle 23:30. Poi a casa, «profumato»."},
  {t:"Martina Greco",q:"Chi abita ad Aci Castello? Scrivi nome e cognome.",all:["martina","greco"],show:"Martina Greco",hint:"C'è una rubrica aziendale nel Drive, e un cognome sul citofono del sushi.",news:"La collega che si occupa di UX. Ora che sai chi è, hai aperto la conversazione personale archiviata nella chat «Marti UX».",unlock:"mar"},
  {t:"luglio",q:"Da quando va avanti? In quale mese è cominciata?",any:["luglio"],show:"A luglio, in trasferta a Roma",hint:"Messaggi recuperati, e un PDF delle trasferte nel Drive.",news:"«Roma è stata un errore bellissimo.» Quattro mesi."},
  {t:"125",q:"Il giovedì cenano a casa di lei. Quanto ha speso Andrea in sushi a novembre?",a:["125","125,00","125 euro","125€"],show:"125 €",hint:"In Banca ci sono tre ordini, uno per giovedì.",news:"Tre giovedì, tre ordini per due persone, consegnati al citofono Greco - Russo."},
  {t:"turno di notte",q:"Russo è Ylenia, la coinquilina. Perché ieri sera la casa era libera?",any:["notte","ospedale","turno","lavor"],show:"Ylenia faceva la notte in ospedale",hint:"Lo scrive Martina.",news:"Ylenia è la coinquilina di Martina, non c'entra niente."},
  {t:"9:30",q:"Controlliamo le altre. A che ora è la call del lunedì con Sara?",all:["930"],show:"Alle 9:30",hint:"Lo scrive lei.",news:"Una cliente di Milano che vuole i tempi di consegna."},
  {t:"85",q:"E «Nonna Tina ❤»? Quanti anni compie domenica?",a:["85","ottantacinque","85 anni"],show:"85",hint:"Lo scrive lei.",news:"La nonna, che domenica aspetta lui e Bea per la pasta alla Norma. Federica è una ex del 2021."},
  {t:"la borsa",q:"Nell'album privato c'è una foto del bagagliaio. Che cosa c'è dentro da settembre?",any:["borsa","borsone","zaino"],show:"La borsa da calcetto",hint:"Il codice dell'album: il risultato di ieri sera e le ultime due cifre dell'anno della foto di squadra.",news:"La borsa non è mai uscita dalla macchina. Accanto, una foto con Martina ad Aci Castello."},
  {t:"domenica",q:"Nella nota protetta c'è un ultimatum. Entro quale giorno deve dirlo a Bea?",any:["domenica"],show:"Entro domenica",hint:"Il codice è la data di chiusura del campo, giorno e mese.",news:"«Ciccio ha ragione e lo odio per questo.»"},
  {t:"Martina",q:"Martina, Lucia, Sara, Federica, nonna Tina, Giusy, Ylenia. Chi è l'amante di Andrea? Se nessuna, scrivi NESSUNA.",any:["martina","marti","greco"],show:"Martina Greco",hint:"Chi ordina sushi con lui ogni giovedì?",news:"Il calcetto del giovedì non si gioca da settembre."},
  {t:"t",q:"Il verdetto per Bea.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"C'è un'altra persona.",news:""}],
 win:{title:"Andrea tradisce Bea. Con Martina Greco.",
  steps:["Il campo è chiuso per lavori dal 15 settembre. Le foto di squadra sono del 2024.","Nel gruppo «Giovedì» gli amici concordano il risultato da dire a Bea. Ciccio si è rifiutato di continuare.","Ogni giovedì dalle 20:40 Andrea è ad Aci Castello, a casa della collega Martina Greco.","La storia è cominciata a luglio, in trasferta a Roma.","Lucia è la barista del campo, Sara una cliente, Ylenia la coinquilina, Giusy la sorella di Ciccio, Tina la nonna."],
  end:"Bea guarda la foto della squadra. «Giugno 2024. C'ero anch'io, a quel torneo.» Si alza. «Ciccio gli ha dato tempo fino a domenica. Io gliene do fino a quando esce dalla doccia.»"}
};
LIB.tune(15,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m3").lock="sus";
 e.pins={album:"5324",sus:"8523",note:"4550"};
 e.locks={album:{hint:"Il risultato di ieri sera, poi la fine dell'anno della foto di squadra."},sus:{name:"Mail protetta",hint:"Gli anni della nonna, poi il giorno della festa."},note:{hint:"Il prezzo di quella cena, poi i minuti oltre le due ore."}};
 e.spots=[
  {id:"s1",x:246,y:36,label:"Aci Castello",title:"Un palazzo sul lungomare",sub:"Aci Castello",body:"Il citofono: «Greco · Russo». Ogni giovedì sera, un'auto parcheggiata qui fino a tardi."},
  {id:"s2",x:232,y:130,label:"Centro Sportivo",title:"Centro Sportivo Ognina",sub:"★ 4,0",body:"Cartello sul cancello: «Campo di calcetto chiuso per lavori fino a gennaio»."},
  {id:"s3",x:170,y:110,label:"Ufficio",title:"Ufficio di Andrea",sub:"",body:"Il giovedì esce alle 19:30."}];
 LIB.hints(e,["Le foto della squadra hanno un anno.","Il campo ha un cartello.","Quando riapre?","Un risultato raccontato a Bea.","Nel gruppo qualcuno è a disagio.","Il telefono si ricorda dov'era.","Dall'arrivo alla partenza.","La rubrica del team dice dove abitano.","Una trasferta di lavoro, d'estate.","Cene a domicilio, ma la conferma è chiusa.","La coinquilina era via.","Una call di lavoro.","Un cuore accanto a un nome.","Il bagagliaio è nascosto.","Un ultimatum in una nota chiusa.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
