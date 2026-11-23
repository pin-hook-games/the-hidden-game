(function(){
/* episodio 6: Il regalo sbagliato (Roma). Soluzione: Tradisce, con la collega Livia Serra. Il reso riguarda un orologio, non la collana. */
const SC={
 box:()=>LIB.gift("#1f3a66","Gioielleria Aurelia"),
 team:()=>LIB.group(5,"Studio Ferrante · foto di Natale","#55606b"),
 fam:()=>LIB.two("#8fb3c9","#7a3b5a","#2f6b4f","Con Chiara, saggio di danza"),
 reso:()=>LIB.doc("Gioielleria Aurelia · RESO","#7a3b5a",["Scontrino n. 4471","Orologio da polso","Reso del 10 novembre","Rimborso: 240,00 €"]),
 neck:()=>LIB.obj("#cfe0ea","📿","«La porto sotto il camice»"),
 card:()=>LIB.doc("Biglietto","#b0764a",["Alla mia L.,","per i nostri otto mesi.","P."])
};
const MAP=LIB.map({name:"Mappa stilizzata di Roma",
 water:[["M150 0Q130 60 170 100Q200 140 160 190Q140 230 170 260",13]],
 parks:[`<ellipse cx="250" cy="40" rx="50" ry="26" fill="#d7e2c9"/>`,`<ellipse cx="60" cy="180" rx="44" ry="30" fill="#d7e2c9"/>`],
 roads:["M180 110H380","M230 30V240","M300 60V230","M190 170H360","M20 90H140","M90 40V150","M40 220H150"],
 extra:`<circle cx="106" cy="92" r="9" fill="#b0764a"/><ellipse cx="270" cy="160" rx="13" ry="9" fill="none" stroke="#b0764a" stroke-width="4"/>`,
 labels:[[92,78,"San Pietro"],[56,60,"Prati"],[232,24,"Villa Borghese"],[308,52,"Parioli"],[246,150,"Colosseo"],[196,104,"Centro"],[36,172,"Monteverde"],[180,214,"Trastevere"],[330,224,"San Giovanni"],[124,30,"Tevere"]],
 pins:[[330,70,"#33658a","Casa",9,4],[70,100,"#33658a","Studio",-44,4],[70,206,"#d43d55","mar e gio sera",9,4],[214,128,"#56666e","gioielleria",9,4]]});

EPISODES[6]={...LIB.apps("msg tel mail web gal map cal note bank drive"),
 n:6,timer:1800,map:MAP,scenes:SC,owner:"Paolo Ferrante",time:"07:10",date:"ven 14 nov",homeDate:"venerdì 14 novembre",
 brief:"Anna ti ha portato il telefono del marito Paolo, 45 anni, dentista con uno studio in Prati, a Roma. Lui è in piscina fino alle otto, come ogni venerdì.",
 quote:"«Nel suo cappotto ho trovato lo scontrino di una gioielleria: una collana. Io non ho ricevuto nessuna collana. Gliel'ho chiesto e mi ha fatto vedere un secondo scontrino: un reso. Dice che era per me, che ha sbagliato modello e l'ha riportata. Sembra tutto a posto. Allora perché non ci credo?»",
 chats:[
  {id:"anna",name:"Anna",sub:"Moglie",m:[
   ["mar 19:05",1,"Stasera cena dello studio, non aspettarmi."],
   ["mar 19:06",0,"Di nuovo? Va bene."],
   ["gio 19:10",1,"Altra cena di lavoro, con i fornitori. Faccio tardi."],
   ["gio 23:55",0,"Sei ancora fuori?"]]},
  {id:"marzia",name:"Marzia",sub:"",m:[
   ["lun 17:40",0,"Dottore, le ricordo che domani lo studio è chiuso tutto il giorno per la disinfestazione. Ho spostato i pazienti."],
   ["lun 17:45",1,"Grazie Marzia."],
   ["mer 09:10",0,"La cena dello studio la prenoto per venerdì 28, va bene per tutti."],
   ["mer 09:12",1,"Perfetto. Sei preziosa."]]},
  {id:"livia",name:"L. Serra",sub:"",m:[
   ["lun 12:30",0,"Il paziente delle 15 è tuo o mio?"],
   ["lun 12:31",1,"Tuo. Io ho la protesi della signora Conti."],
   ["",2,"5 messaggi eliminati."],
   ["ven 7 · 20:15",0,"È bellissima. Non dovevi.","liv"],
   ["ven 7 · 20:16",1,"Dovevo. Otto mesi, da quel congresso di Firenze a marzo.","liv"],
   ["ven 7 · 20:18",0,"La porto sotto il camice, così nessuno chiede.","liv"],
   ["mar 23:50",0,"Stasera è stato perfetto. Il Glicine è il nostro posto.","liv"],
   ["mer 07:30",1,"Giovedì di nuovo. Ad Anna dico i fornitori.","liv"]]},
  {id:"conti",name:"Sig.ra Conti",sub:"",m:[
   ["mar 10:20",0,"Dottore caro ❤ la dentiera nuova è una meraviglia. Mangio di nuovo le noci!"],
   ["mar 10:25",1,"Ne sono felice, signora. Piano con le noci."],
   ["mar 10:26",0,"Sabato compio 81 anni e le porto i cannoli ❤❤"]]},
  {id:"giulia",name:"Giulia",sub:"",m:[
   ["mer 11:00",0,"Buongiorno dottore, sono Giulia di Dentalnova. Passo giovedì alle 13 con il nuovo catalogo degli impianti?"],
   ["mer 11:20",1,"Giovedì alle 13 va bene, dieci minuti."],
   ["gio 13:20",0,"Grazie del tempo. Le lascio i campioni in segreteria."]]},
  {id:"robi",name:"Robi",sub:"",m:[
   ["dom 2 nov",1,"Per il compleanno di mamma ho preso un orologio ma non la convince. Lo cambio?"],
   ["dom 2 nov",0,"Fratellino, mamma vuole i soldi per la crociera, altro che orologio. Riportalo."],
   ["lun 10 nov",1,"Reso fatto."]]},
  {id:"chiara",name:"Chiara ❤",sub:"",m:[
   ["gio 16:00",0,"Papà sabato vieni al saggio? Mamma dice che hai sempre cene."],
   ["gio 16:10",1,"Sabato ci sono, promesso."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Gioielleria Aurelia",sub:"Il suo ordine è pronto",meta:"6 novembre",body:"Collana in oro con pendente a goccia: 890,00 €.\nIncisione richiesta sul retro del pendente: «L.»\nRitiro in negozio da venerdì 7 novembre.\nElena, Gioielleria Aurelia"},
   {id:"m2",title:"Gioielleria Aurelia",sub:"Conferma di reso",meta:"10 novembre",body:"Reso dello scontrino n. 4471: orologio da polso, 240,00 €.\nRimborso sulla carta entro tre giorni.\nGli articoli con incisione non possono essere resi."},
   {id:"m3",title:"Trattoria Il Glicine",sub:"Prenotazione confermata",meta:"12 novembre",body:"Tavolo per due, giovedì 13 novembre alle 20:45.\nA nome Ferrante. Il solito tavolo in veranda."},
   {id:"m4",title:"Dentalnova",sub:"Catalogo impianti",meta:"12 novembre",body:"Gentile dottore, in allegato il catalogo.\nGiulia Marini, informatrice Dentalnova"}],
  map:[
   {id:"g1",g:"Cronologia · martedì 11",title:"Casa, Parioli",sub:"fino alle 19:40",meta:"Permanenza",body:"A casa per tutto il giorno, fino alle 19:40."},
   {id:"g2",g:"Cronologia · martedì 11",title:"Monteverde, una trattoria",sub:"20:30 - 22:20",meta:"Permanenza",body:"Arrivo alle 20:30."},
   {id:"g3",g:"Cronologia · martedì 11",title:"Monteverde, un palazzo a trecento metri",sub:"22:30 - 23:40",meta:"Permanenza",body:"Fino alle 23:40. Poi rientro ai Parioli."},
   {id:"g4",g:"Cronologia · giovedì 13",title:"Monteverde, la stessa trattoria",sub:"20:40 - 22:30",meta:"Permanenza",body:"Stesso tavolo, stessa ora."},
   {id:"g5",g:"Cronologia · venerdì 7",title:"Gioielleria, in centro",sub:"13:10 - 13:25",meta:"Permanenza",body:"Quindici minuti in negozio."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Trattoria Il Glicine",sub:"13 nov · − 104,00 €"},
   {id:"b2",g:"Novembre",title:"Trattoria Il Glicine",sub:"11 nov · − 96,00 €"},
   {id:"b3",g:"Novembre",title:"Gioielleria Aurelia, rimborso",sub:"10 nov · + 240,00 €"},
   {id:"b4",g:"Novembre",title:"Gioielleria Aurelia",sub:"7 nov · − 890,00 €"},
   {id:"b5",g:"Novembre",title:"Gioielleria Aurelia",sub:"1 nov · − 240,00 €"},
   {id:"b6",g:"Ottobre",title:"Trattoria Il Glicine",sub:"21 ott · − 88,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Mar 11 · Cena studio",sub:"20:30",body:"Nessun invitato."},
   {id:"c2",g:"Novembre",title:"Gio 13 · Cena fornitori",sub:"20:45",body:"Nessun invitato."},
   {id:"c3",g:"Novembre",title:"Sab 15 · Saggio di Chiara",sub:"17:00",body:"Non mancare."},
   {id:"c4",g:"Novembre",title:"Ven 28 · Cena dello studio",sub:"20:30",body:"Creato da Marzia. Invitati: tutto lo studio."}],
  web:[
   {id:"w1",g:"Cronologia",title:"collana pendente goccia oro incisione",sub:"2 nov"},
   {id:"w2",g:"Cronologia",title:"si può rendere un gioiello inciso",sub:"8 nov"},
   {id:"w3",g:"Cronologia",title:"trattoria monteverde veranda",sub:"20 ott"}],
  note:[
   {id:"n1",title:"Varie",body:"Saggio di Chiara sabato.\nAlbum privato: il prezzo della collana, con uno zero davanti.\nLa nota qui sotto: il giorno della vera cena dello studio e il giorno del reso."},
   {id:"n2",title:"Se Anna trova lo scontrino",lock:"note",body:"Dire che la collana era per lei.\nDire che il modello era sbagliato.\nMostrarle il reso: non leggerà che cosa c'è scritto sopra."}],
  drive:[
   {id:"d1",title:"Rubrica dello studio",sub:"Foglio",meta:"Settembre",body:"Marzia Leoni, segreteria, abita a San Giovanni.\nDott.ssa Livia Serra, ortodontista, abita a Monteverde.\nIvana Russo, igienista, abita a Ostia."},
   {id:"d2",title:"Congressi 2025",sub:"PDF",meta:"Gennaio",body:"Firenze, 14 - 16 marzo: partecipano il dott. Ferrante e la dott.ssa Serra."}],
  tel:[
   {id:"t1",title:"L. Serra",sub:"gio 23:58 · in uscita, 9 min"},
   {id:"t2",title:"Anna",sub:"gio 23:50 · persa"},
   {id:"t3",title:"Gioielleria Aurelia",sub:"6 nov · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"ven 7",title:"Pacchetto",sc:"box"},
  {id:"p2",t:"dic 2024",title:"Lo studio",sc:"team"},
  {id:"p3",t:"giu",title:"Con Chiara",sc:"fam"},
  {id:"p4",t:"lun 10",title:"Reso",sc:"reso"},
  {id:"h1",t:"ven 7 · 20:14",title:"Da L.",sc:"neck",lock:"album"},
  {id:"h2",t:"ven 7",title:"Biglietto",sc:"card",lock:"album"}],
 pins:{note:"2810",album:"0890"},
 qs:[
  {t:"890",q:"Cominciamo dallo scontrino. Quanto è costata la collana?",a:["890","890,00","890 euro","890€","890,00 €"],show:"890 €",hint:"C'è una mail della gioielleria e un addebito in Banca.",news:"Una collana d'oro con pendente a goccia, ritirata venerdì 7."},
  {t:"L",q:"La gioielleria ha fatto un'incisione sul pendente. Quale lettera?",a:["l","l."],show:"«L.»",hint:"È nella mail in cui avvisano che l'ordine è pronto.",news:"La moglie si chiama Anna. Sul pendente c'è una L."},
  {t:"orologio",q:"Passiamo al reso che ha mostrato ad Anna. Quale oggetto è stato restituito?",any:["orologio"],show:"Un orologio da polso",hint:"Leggi la conferma di reso fino in fondo.",news:"Il reso è vero, ma riguarda un altro acquisto. La collana incisa non si può nemmeno restituire."},
  {t:"650",q:"Quanti euro di differenza ci sono tra la collana e l'oggetto reso?",a:["650","650,00","650 euro","650€"],show:"650 €",hint:"Sottrai il rimborso dal prezzo della collana.",news:"Anna ha visto la parola «reso» e non l'importo. Era esattamente quello che Paolo voleva."},
  {t:"sorella",q:"Per chi era l'orologio? Lo spiega Robi. Chi è Robi per Paolo?",any:["sorella"],show:"Sua sorella",hint:"Guarda come lo chiama.",news:"L'orologio era per il compleanno della madre. Robi è la sorella Roberta: primo nome da togliere."},
  {t:"disinfestazione",q:"Martedì 11 Paolo ha scritto «cena dello studio». Perché quel giorno lo studio era chiuso?",any:["disinfest"],show:"Per la disinfestazione",hint:"Lo scrive la segretaria.",news:"Studio chiuso tutto il giorno, pazienti spostati. Nessuna cena di lavoro."},
  {t:"28",q:"In quale giorno del mese è davvero la cena dello studio?",all:["28"],show:"Venerdì 28 novembre",hint:"L'ha prenotata Marzia, ed è in calendario con gli invitati.",news:"Marzia è la segretaria e organizza tutto alla luce del sole. Secondo nome da togliere."},
  {t:"Monteverde",q:"Dove ha passato allora la sera di martedì? Scrivi il quartiere.",any:["monteverde"],show:"A Monteverde",hint:"Mappe conserva la cronologia.",news:"Una trattoria, poi un palazzo a trecento metri fino alle 23:40."},
  {t:"200",q:"Quanto ha speso in quella trattoria nelle due sere di questa settimana?",a:["200","200,00","200 euro","200€"],show:"200 €",hint:"In Banca ci sono due pagamenti a novembre. Quello di ottobre non conta.",news:"Tavolo per due, «il solito», in veranda. Il locale lo conosce da tempo."},
  {t:"Livia Serra",q:"Chi dello studio abita a Monteverde? Scrivi nome e cognome.",all:["livia","serra"],show:"La dott.ssa Livia Serra",hint:"Nel Drive c'è la rubrica dello studio.",news:"L'ortodontista. Ora che sai chi è «L.», hai recuperato i 5 messaggi eliminati nella chat con lei.",unlock:"liv"},
  {t:"camice",q:"Dove porta la collana Livia, perché nessuno faccia domande? Sotto il...",any:["camice"],show:"Sotto il camice",hint:"Lo scrive lei nei messaggi recuperati.",news:"La collana è al collo di una collega, ogni giorno, a due metri da Marzia."},
  {t:"marzo",q:"Da quanto va avanti? In quale mese è cominciata?",any:["marzo"],show:"A marzo, a un congresso a Firenze",hint:"Paolo lo dice quando le dà la collana. Il Drive conferma il congresso.",news:"Otto mesi. Il regalo festeggiava proprio quelli."},
  {t:"81",q:"Controlliamo le altre. La signora Conti gli manda i cuori. Quanti anni compie sabato?",a:["81","ottantuno","81 anni"],show:"81",hint:"Lo scrive lei.",news:"Una paziente con la dentiera nuova, innamorata solo delle noci."},
  {t:"Dentalnova",q:"E Giulia? Per quale azienda lavora?",any:["dentalnova"],show:"Dentalnova",hint:"Si presenta nel primo messaggio.",news:"Un'informatrice con il catalogo degli impianti. Dieci minuti, all'una, in studio."},
  {t:"8",q:"Nell'album privato c'è il biglietto del regalo. Quanti mesi festeggia?",a:["8","otto","8 mesi","otto mesi"],show:"Otto",hint:"Il codice dell'album è il prezzo della collana con uno zero davanti.",news:"«Alla mia L.» Nell'album c'è anche la foto che Livia gli ha mandato con la collana al collo."},
  {t:"il reso",q:"La nota protetta è il suo piano. Che cosa deve mostrare ad Anna?",any:["reso"],show:"Il reso",hint:"Il codice è fatto di due giorni: la vera cena dello studio e il reso.",news:"«Non leggerà che cosa c'è scritto sopra.» Aveva preparato la scusa prima ancora di essere scoperto."},
  {t:"Livia",q:"Marzia, Livia, la signora Conti, Giulia, Robi, Elena della gioielleria, Chiara. Chi è l'amante di Paolo? Se nessuna, scrivi NESSUNA.",any:["livia","serra"],show:"Livia Serra",hint:"Chi porta una L. al collo?",news:"Sei spiegazioni innocenti e una collana."},
  {t:"t",q:"Il verdetto per Anna.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"C'è un'altra persona.",news:""}],
 win:{title:"Paolo tradisce Anna. Con Livia Serra.",
  steps:["La collana da 890 € ha una «L.» incisa: è per la dott.ssa Livia Serra, ortodontista dello studio.","Il reso che ha mostrato ad Anna riguarda un orologio da 240 €, comprato per la madre.","Martedì lo studio era chiuso per la disinfestazione: la «cena dello studio» era un tavolo per due a Monteverde, dove abita Livia.","La storia è cominciata a marzo, a un congresso a Firenze.","Marzia è la segretaria, la signora Conti una paziente di 81 anni, Giulia un'informatrice, Robi la sorella, Chiara la figlia."],
  end:"Anna rilegge la conferma di reso. «Orologio da polso», dice. «Bastava leggere.» Si alza. «Sabato c'è il saggio di Chiara. Ci va lui, da solo. Io ho un appuntamento con un avvocato.»"}
};
LIB.tune(6,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 const d1=e.lists.drive.find(x=>x.id==="d1");d1.lock="rub";d1.body+="\nIndirizzo di Livia Serra: via Ozanam 31.";
 e.pins={album:"0890",rub:"4471",note:"0831"};
 e.locks={album:{hint:"Il prezzo di quel regalo, con lo zero."},rub:{name:"File protetto",hint:"Il numero dello scontrino del reso."},note:{hint:"I mesi scritti sul biglietto, con lo zero, poi il civico di lei."}};
 e.spots=[
  {id:"s1",x:70,y:206,label:"Il Glicine",title:"Trattoria Il Glicine",sub:"Monteverde · ★ 4,5",body:"Recensione: «Il martedì e il giovedì sera ci sono sempre gli stessi due, lui in giacca, lei con i capelli raccolti. Tavolo in fondo.»"},
  {id:"s2",x:214,y:128,label:"Gioielleria Aurelia",title:"Gioielleria Aurelia",sub:"Centro · ★ 4,8",body:"Incisioni in giornata. Resi accettati entro dieci giorni, con scontrino."},
  {id:"s3",x:70,y:100,label:"Studio Ferrante",title:"Studio dentistico Ferrante",sub:"Parioli",body:"Sei persone in studio, tra medici, igieniste e segreteria."}];
 LIB.hints(e,["Uno scontrino dice quanto.","Il pendente porta un segno.","Un reso dice un'altra cosa.","Fai la differenza.","Un amico spiega l'orologio.","La scusa del martedì non regge.","Qualcun altro ha organizzato la vera cena.","Il telefono si ricorda dove è stato.","Somma le due sere.","La rubrica dello studio è chiusa.","Dove si porta un gioiello senza farsi notare?","Da quando?","Una paziente affettuosa.","Una rappresentante.","Un biglietto nascosto.","Il piano di Paolo è scritto.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
