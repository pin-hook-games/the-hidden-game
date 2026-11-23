(function(){
/* Furti 11: Fuori sede (Padova). Soluzione: il padrone di casa, Ermanno Rizzo.
   Sapeva che la casa sarebbe rimasta vuota (aveva annunciato un tecnico della caldaia, poi disdetto), è entrato con le sue chiavi; la merce la vende il figlio Riccardo (ricky_pd).
   Movente: vuole gli studenti fuori per mettere la casa negli affitti brevi da gennaio (annuncio pubblicato venerdì 14, il giorno prima del furto).
   False piste: Lorenzo con il mazzo in prestito (a Palermo) e Tobia, che doveva l'affitto (pagato con il bonifico della madre).
   Codici: album = prezzo con lo zero = 0350; mail agenzia = civico 18 + piano 03 = 1803; nota = 14 (giorno dell'annuncio) + 35 = 1435. */
const SC={
 cas:()=>LIB.group(4,"Casa di via Belzoni, settembre","#7a3b5a"),
 lap:()=>LIB.obj("#f0d9a0","💻","Il mio portatile, con l'adesivo del limone"),
 ann:()=>LIB.doc("Annuncio · screenshot","#a02822",["Portatile 14\", come nuovo","adesivo a forma di limone sul coperchio","350 €","venditore: ricky_pd"]),
 por:()=>LIB.obj("#c9b79c","🚪","La porta, domenica sera: nessun segno"),
 sic:()=>LIB.two("#9cc7d6","#7a3b5a","#33658a","Chiara e Lorenzo a Palermo, sabato"),
 bon:()=>LIB.doc("Bonifico · da Tobia","#2f6b4f",["Da: Daniela Zanon (mamma)","A: Tobia Zanon","1.350,00 €","causale: affitto, ultima volta!"])
};
const MAP=LIB.city("Padova",[[40,52,"Portello"],[132,132,"Via Belzoni"],[276,132,"Prato della Valle"],[40,232,"Stazione"],[300,40,"Università"],[200,200,"Arcella"]],[]);

LIB.add(51,["Fuori sede","Il padre di Giada vuole sapere chi ha svuotato l'appartamento degli studenti","Padova"],{
 map:MAP,scenes:SC,owner:"Giada Sartori",time:"18:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal map cal note web",
 late:"Giada deve andare a lezione di laboratorio. Si riprende il telefono.",
 brief:"Nel fine settimana l'appartamento di via Belzoni a Padova, dove Giada Sartori, 21 anni, vive con altri tre studenti, è stato svaligiato: due portatili, una console e un tablet. La porta non ha segni di scasso. Il padre di Giada, che aveva comprato i computer, ti ha dato il telefono della figlia.",
 quote:"«Chi è entrato aveva le chiavi. Il fidanzato di una delle ragazze ha un mazzo in prestito da mesi. E il coinquilino, Tobia, doveva tre mesi di affitto e lunedì li ha pagati tutti insieme. Io comincerei da uno di quei due. Ma voglio essere sicuro prima di fare un nome.»",
 locks:{
  album:{hint:"Quanto chiedono per il mio portatile, con lo zero davanti."},
  agz:{name:"Mail protetta",hint:"Il numero sul portone, poi il piano."},
  note:{hint:"Il giorno in cui qualcuno aveva già deciso, poi il prezzo del portatile senza l'ultimo zero."}},
 chats:[
  {id:"cas",name:"Casa Belzoni",sub:"Gruppo · 4",m:[
   ["gio 21:00",0,"Tobia: Ragazzi chi resta questo weekend? Io vado dai miei a Rovigo."],
   ["gio 21:02",0,"Chiara: Io e Lorenzo a Palermo da venerdì!"],
   ["gio 21:03",0,"Sara: Io a casa a Belluno."],
   ["gio 21:04",1,"Io torno a Treviso. Casa vuota, chiudete bene!"],
   ["dom 19:10",1,"RAGAZZI CI HANNO SVALIGIATI"]]},
  {id:"pad",name:"Sig. Rizzo",sub:"Padrone di casa",m:[
   ["ven 10:00",0,"Giada, sabato mando il tecnico per la caldaia. Entra lui con le mie chiavi. Siete via tutti, vero?"],
   ["ven 10:05",1,"Sì, tutti via fino a domenica sera."],
   ["",2,"1 messaggio eliminato."],
   ["sab 15:02",0,"Fatto tutto, grazie Ricky. Porta tutto all'Arcella.","riz"],
   ["lun",0,"Visto il furto, a gennaio non vi rinnovo il contratto. La casa con voi non è sicura."]]},
  {id:"tob",name:"Tobia",sub:"",m:[
   ["dom",0,"Che casino, Giada. Io sono a Rovigo dai miei, torno domani."],
   ["mar",1,"Tobia, hai pagato tutto l'affitto ieri? Tre mesi?"],
   ["mar",0,"Sì, con un bonifico di mia madre. Mi ha fatto una scenata ma me li ha dati. Ti mando la foto, non voglio che pensiate male."]]},
  {id:"chi",name:"Chiara",sub:"",m:[
   ["dom",0,"Giada, le chiavi di Lorenzo sono qui con noi a Palermo, nel suo zaino. Ti mando la foto di sabato al mare."]]},
  {id:"pap",name:"Papà",sub:"",m:[
   ["dom",0,"Giada, il tuo portatile è quello con l'adesivo del limone, vero? Lo cerco sugli annunci."]]}
 ],
 lists:{
  web:[
   {id:"w1",g:"Cronologia",title:"Portatile 14 pollici · annuncio",sub:"lunedì",body:"«Come nuovo, adesivo a forma di limone sul coperchio.» 350 €. Venditore: ricky_pd, zona Arcella."},
   {id:"w2",g:"Cronologia",title:"ricky_pd · profilo",sub:"",body:"Riccardo R., Padova. «Compro e vendo usato.» Amici in comune: Ermanno Rizzo."}],
  mail:[
   {id:"m1",title:"Questura",sub:"Denuncia",meta:"domenica",body:"Furto in abitazione, via Belzoni 18. Nessun segno di effrazione."},
   {id:"m2",title:"Affitti Brevi Padova",sub:"Visite all'appartamento",meta:"venerdì 14",lock:"agz",body:"Gentile inquilina, il proprietario ci ha indicato il suo contatto per le future visite.\nL'appartamento di via Belzoni sarà disponibile per affitti brevi da gennaio. Annuncio pubblicato oggi, venerdì 14 novembre."}],
  map:[
   {id:"g1",g:"Cronologia",title:"Treviso, casa dei miei",sub:"ven 18:00 - dom 18:00",body:""}],
  cal:[
   {id:"c1",g:"Weekend",title:"Ven-dom · Treviso dai miei",sub:"",body:""},
   {id:"c2",g:"Sabato",title:"Tecnico caldaia (Rizzo)",sub:"",body:""}],
  note:[
   {id:"n1",title:"Lista",body:"Comprare una serratura nuova?\nChiedere a Rizzo il nome del tecnico"},
   {id:"n2",title:"Per papà",lock:"note",body:"Papà, non è stato Tobia, e non è stato Lorenzo.\nIl venerdì Rizzo mi chiede se siamo via, e lo stesso giorno mette la casa negli affitti brevi.\nIl tecnico della caldaia non è mai venuto.\nIl mio portatile lo vende suo figlio.\nVoglio un avvocato, non una lite."}],
  tel:[
   {id:"t1",title:"Termoidraulica Veneta",sub:"mar · in uscita, 3 min"}]
 },
 spots:[
  {id:"s1",x:150,y:130,label:"Via Belzoni 18",title:"Via Belzoni 18",sub:"Terzo piano",body:"Porta blindata, nessun segno di scasso. Le chiavi: quattro studenti, un mazzo «in prestito» e il proprietario."},
  {id:"s2",x:276,y:150,label:"Termoidraulica Veneta",title:"Termoidraulica Veneta",sub:"Caldaie · ★ 4,4",body:"Recensione di un tecnico, sabato: «Ci hanno disdetto un intervento in via Belzoni venerdì sera: il proprietario ha detto che non serviva più.»"},
  {id:"s3",x:200,y:200,label:"Usato Arcella",title:"Usato Arcella",sub:"Compravendita usato · ★ 3,1",body:"Recensione: «Il figlio del titolare vende portatili quasi nuovi a prezzi stranamente bassi.»"}],
 photos:[
  {id:"p1",t:"sett",title:"Noi quattro",sc:"cas"},
  {id:"p2",t:"ott",title:"Il mio portatile",sc:"lap"},
  {id:"p3",t:"dom 19:00",title:"La porta",sc:"por"},
  {id:"p4",t:"sab",title:"Da Chiara",sc:"sic"},
  {id:"p5",t:"mar",title:"Da Tobia",sc:"bon"},
  {id:"h1",t:"lun",title:"Annuncio",sc:"ann",lock:"album"}],
 pins:{album:"0350",agz:"1803",note:"1435"},
 events:[{id:"a",q:3,kind:"sms",from:"Sig. Rizzo",text:"Giada, i carabinieri dicono che sospettate di qualcuno. Io guarderei quel Tobia, che non pagava mai. Fatemi sapere."},
         {id:"b",q:7,kind:"call",from:"Termoidraulica Veneta",lines:["«Pronto, mi aveva chiamato per la caldaia di via Belzoni?»","«No, sabato non siamo venuti. Il signor Rizzo ha disdetto venerdì sera, ha detto che non serviva più.»","«Se vuole la rimetto in calendario, eh.»"]}],
 qs:[
  {t:"Palermo",q:"Dov'era Lorenzo, quello con il mazzo «in prestito», nel fine settimana?",any:["palermo"],show:"A Palermo, con Chiara",hint:"La sua ragazza ha mandato le prove.",news:"Con le chiavi nello zaino. Una falsa pista cade."},
  {t:"limone",q:"Che adesivo c'è sul portatile di Giada?",any:["limon"],show:"Un limone",hint:"Anche suo padre lo sa.",news:"Riconoscibile in un annuncio."},
  {t:"350",q:"A quanto lo vendono nell'annuncio?",a:["350","350 euro","350 €","trecentocinquanta"],show:"350 €",hint:"Qualcuno l'ha cercato in rete.",news:"Venditore: ricky_pd, zona Arcella."},
  {t:"genitori",q:"Tobia ha pagato tre mesi di affitto lunedì. Con quali soldi?",any:["genitor","madre","mamma","bonific"],show:"Con un bonifico di sua madre",hint:"Tobia ha voluto mostrarlo.",news:"L'altra falsa pista cade."},
  {t:"Rizzo",q:"Chi è collegato al venditore ricky_pd? Il cognome.",any:["rizzo","ermanno"],show:"Ermanno Rizzo",hint:"I profili hanno amici in comune.",news:"Lo stesso cognome di chi ha le chiavi di casa. Ora hai recuperato un messaggio cancellato.",unlock:"riz"},
  {t:"padrone di casa",q:"Chi è Ermanno Rizzo per Giada?",any:["padron","propriet"],show:"Il padrone di casa",hint:"Gli scrive per la caldaia.",news:"«Fatto tutto, grazie Ricky.» Mandato a Giada per errore, sabato alle 15:02."},
  {t:"caldaia",q:"Con quale scusa Rizzo ha chiesto se la casa sarebbe stata vuota?",any:["caldai","tecnic","idraul"],show:"Un tecnico per la caldaia",hint:"Un messaggio di venerdì mattina.",news:"«Entra lui con le mie chiavi.»"},
  {t:"no",q:"Il tecnico della caldaia è venuto davvero?",a:["no","nessuno","non e venuto","mai","non è venuto"],show:"No: Rizzo l'ha disdetto venerdì sera",hint:"Chi ripara caldaie lascia recensioni anche lui.",news:"In casa sabato è entrato qualcun altro, con le chiavi del proprietario."},
  {t:"affitti brevi",q:"Che cosa vuole fare Rizzo con l'appartamento da gennaio?",any:["affitt","brev","turist"],show:"Metterlo negli affitti brevi",hint:"Un'agenzia ha scritto a Giada, chiusa a chiave.",news:"Annuncio pubblicato venerdì 14, il giorno prima del furto. E lunedì: «non vi rinnovo il contratto»."},
  {t:"avvocato",q:"Nella nota protetta, che cosa chiede Giada a suo padre?",any:["avvocat"],show:"Un avvocato, non una lite",hint:"Giada ha scritto a suo padre.",news:""},
  {t:"r",q:"Chi ha svuotato l'appartamento?",o:[["l","Lorenzo, con il mazzo in prestito"],["t","Tobia, per l'affitto"],["r","Il padrone di casa, con il figlio, per liberarsi degli studenti"],["s","Sara"],["x","Ladri qualsiasi, con una porta lasciata aperta"]],a:"r",show:"Il padrone di casa, Ermanno Rizzo",hint:"Chi sapeva che la casa era vuota, chi ha le chiavi, chi vende?",news:""}],
 win:{title:"La casa l'ha svuotata il padrone di casa, Ermanno Rizzo.",
  steps:["Lorenzo era a Palermo con il mazzo nello zaino. Tobia ha pagato l'affitto con un bonifico della madre.","Venerdì Rizzo ha chiesto a Giada se erano tutti via «per il tecnico della caldaia». Poi il tecnico l'ha disdetto.","Lo stesso venerdì ha messo l'appartamento negli affitti brevi da gennaio. Lunedì ha comunicato che non rinnova il contratto.","Il portatile con il limone lo vende ricky_pd, suo figlio Riccardo. Sabato alle 15:02 Rizzo ha scritto per errore a Giada: «Fatto tutto, grazie Ricky»."],
  end:"Il padre di Giada va in questura con l'avvocato, il messaggio delle 15:02 e la mail dell'agenzia. All'Usato Arcella trovano i due portatili e la console. Il contratto di via Belzoni, alla fine, lo rinnova un giudice. Tobia, per festeggiare, paga l'affitto con una settimana di anticipo."}
});
})();
