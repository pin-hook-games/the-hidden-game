(function(){
/* Omicidi 1: L'ultimo vocale (Genova). Soluzione: Ernesto Traverso, il restauratore che aveva fatto la perizia.
   I tre cassettoni falsi li aveva fabbricati lui per il socio Bruno. Quando Aldo gli ha detto che il giorno dopo avrebbe portato la perizia all'assicurazione, «dicendo tutto», Traverso è passato in negozio alle 19:40.
   False piste: il socio Bruno (truffatore, ma al Bar Rosa fino alle 19:25 e poi in treno per Savona), il nipote Luca, la cliente Costa.
   Codici: album = 1930; cartella verde = 3 cassettoni + 30 settembre = 0330; nota = 15 (anno in cui sono stati fatti, 2015) + 40 (minuti della visita) = 1540. */
const SC={
 neg:()=>LIB.obj("#c9b79c","🪑","Il negozio, vetrina di ottobre"),
 mar:()=>LIB.two("#9cc7d6","#7a3b5a","#55606b","Con Marina, la mia figlia"),
 cas:()=>LIB.doc("Arrivati il 30 settembre","#33658a",["Tre cassettoni lastronati","«Settecento genovese»","conferiti da B. Ferrando","assicurati per 240.000 €"]),
 per:()=>LIB.doc("Perizia Traverso · bozza","#a02822",["Cassettoni: copie moderne","legno stagionato artificialmente","fattura del 2015","valore reale: 6.000 €"]),
 lab:()=>LIB.doc("Laboratorio Traverso · fattura 2015","#55606b",["Tre cassettoni in stile","lastronatura «antica»","cliente: B. F.","(trovata da Aldo in un raccoglitore)"]),
 bar:()=>LIB.obj("#e9dfd0","☕","Bar Rosa, martedì")
};
const MAP=LIB.city("Genova",[[40,52,"Castelletto"],[132,132,"Caruggi"],[276,132,"Brignole"],[40,232,"Porto antico"],[300,40,"Righi"],[200,200,"Via del Campo"]],[],[["M0 214Q200 176 400 226",60]]);

LIB.add(21,["L'ultimo vocale","Marina non crede alla caduta del padre Aldo","Genova"],{
 map:MAP,scenes:SC,owner:"Aldo Parodi",time:"11:00",date:"gio 13 nov",homeDate:"giovedì 13 novembre",
 appIds:"msg tel mail gal map cal note bank drive",
 late:"La polizia è tornata a chiedere il telefono di Aldo. Marina ha dovuto consegnarlo.",
 brief:"Martedì sera Aldo Parodi, 67 anni, antiquario nei caruggi di Genova, è caduto dalla scala del suo negozio. Per la polizia è un incidente. La figlia Marina no: alle 19:31 il padre le aveva mandato un vocale strano. Ti ha portato il suo telefono.",
 quote:"«Papà mi ha detto: «domani dico tutto, guarda nella cartella verde». Poi più niente. Il suo socio, Bruno, è uno di cui non mi sono mai fidata, e quella sera papà doveva vederlo. Ma non voglio accusare nessuno senza prove.»",
 locks:{
  album:{hint:"L'ora dell'appuntamento di quella sera."},
  ver:{name:"Cartella verde",hint:"Quanti ne sono arrivati, poi il giorno in cui sono entrati."},
  note:{hint:"La fine dell'anno in cui sono stati fatti davvero, poi i minuti in cui il mio telefono si è fermato."}},
 chats:[
  {id:"marina",name:"Marina",sub:"Figlia",m:[
   ["mar 19:31",0,"(vocale) «Marina, domani vado all'assicurazione e dico tutto. Se succede qualcosa, guarda nella cartella verde.»"],
   ["mar 21:00",1,"Papà? Rispondi."]]},
  {id:"bruno",name:"B.",sub:"Socio",m:[
   ["mar 18:00",0,"Aldo, alle sette e mezza al bar. Parliamo da uomini."],
   ["mar 19:20",0,"Se vai all'assicurazione rovini tutti e due. Pensaci stanotte."],
   ["mer 9:00",0,"Aldo? Rispondi."]]},
  {id:"trav",name:"E. Traverso",sub:"Restauratore",m:[
   ["10 nov",0,"Aldo, la perizia è pronta. Ma prima di portarla in giro parliamone, sono cose delicate."],
   ["mar 19:35",1,"Ernesto, domani vado dalla Galli e porto anche la fattura del 2015 del tuo laboratorio. Mi dispiace, ma dico tutto."],
   ["",2,"1 messaggio eliminato da E. Traverso."],
   ["mar 19:36",0,"Arrivo in negozio, aspettami. Ne parliamo a voce, cinque minuti.","tra"]]},
  {id:"luca",name:"Luca",sub:"Nipote",m:[
   ["lun",0,"Zio, almeno il treno me lo rimborsi? Domani vado a Savona per il colloquio."]]},
  {id:"costa",name:"Sig.ra Costa",sub:"Cliente",m:[
   ["lun",0,"La specchiera è rovinata! Rivoglio i miei 400 euro o la faccio nero, signor Parodi."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Ligure Assicura",sub:"Polizza magazzino",meta:"ottobre",body:"Valore assicurato del magazzino aumentato di 160.000 € a ottobre, su richiesta del socio Ferrando."},
   {id:"m2",title:"Dott.ssa Galli, Ligure Assicura",sub:"Appuntamento",meta:"lunedì",body:"Gentile sig. Parodi, la aspetto mercoledì alle 9 per la segnalazione di cui mi ha parlato."},
   {id:"m3",title:"Trenitalia",sub:"Biglietto di Bruno Ferrando",meta:"martedì",body:"(inoltrato da Bruno, mercoledì: «così vedi che non c'entro»)\nGenova Brignole - Savona, martedì, partenza 19:38."}],
  map:[
   {id:"g1",g:"Martedì",title:"Negozio, caruggi",sub:"Dalle 9:00",body:"Nessuno spostamento registrato dopo."},
   {id:"g2",g:"Martedì",title:"Passi e movimento",sub:"Ultimo movimento 19:44",body:"Poi fermo fino al mattino."}],
  bank:[
   {id:"b1",g:"Novembre",title:"E. Traverso, perizia",sub:"10 nov · − 150,00 €"},
   {id:"b2",g:"Marzo",title:"Parodi Luca, prestito",sub:"14 mar · − 3.000,00 €"}],
  cal:[
   {id:"c1",g:"Martedì",title:"B. al bar",sub:"19:30",body:"A serranda giù."},
   {id:"c2",g:"Mercoledì",title:"Assicurazione",sub:"9:00",body:"Portare la perizia. Dire tutto."}],
  drive:[
   {id:"d1",g:"Cartella verde",title:"Cassettoni",sub:"Documenti",lock:"ver",body:"Ingresso del 30 settembre: tre cassettoni conferiti da B. Ferrando.\nIn un raccoglitore del magazzino: fattura del Laboratorio Traverso, 2015, «tre cassettoni in stile, lastronatura antica», cliente «B. F.»."}],
  note:[
   {id:"n1",title:"Spesa",body:"Pane, caffè, colla da legno"},
   {id:"n2",title:"Per Marina",lock:"note",body:"I cassettoni non sono di Bruno e basta. Li ha fatti Ernesto, nel 2015, nel suo laboratorio. Poi lui stesso me li ha periziati come copie, per pararsi.\nSe domani porto la fattura alla Galli, Ernesto non lavora più in tutta la Liguria.\nStasera passa in negozio. Non so perché, ma ho paura più di lui che di Bruno."}],
  tel:[
   {id:"t1",title:"E. Traverso",sub:"mar 19:37 · in entrata, 1 min"}]
 },
 spots:[
  {id:"s1",x:140,y:120,label:"Antichità Parodi",title:"Antichità Parodi & Ferrando",sub:"Caruggi · ★ 4,7",body:"Una scala di legno per il soppalco. Una sola porta sul vicolo."},
  {id:"s2",x:170,y:150,label:"Bar Rosa",title:"Bar Rosa",sub:"★ 4,3",body:"Recensione: «La barista chiude la cassa e manda via tutti alle 19:25. Puntuale.»"},
  {id:"s3",x:270,y:140,label:"Brignole",title:"Stazione Brignole",sub:"",body:"Regionale per Savona delle 19:38: dal Bar Rosa sono dieci minuti a piedi veloci."},
  {id:"s4",x:200,y:210,label:"Laboratorio Traverso",title:"Laboratorio Traverso",sub:"Restauro mobili antichi · ★ 4,8",body:"A cinque minuti dal negozio di Aldo. Recensione: «Un mago. I suoi mobili «antichi» sembrano veri.»"}],
 photos:[
  {id:"p1",t:"ott",title:"Il negozio",sc:"neg"},
  {id:"p2",t:"estate",title:"Con Marina",sc:"mar"},
  {id:"p3",t:"mar 19:25",title:"Dal Bar Rosa",sc:"bar"},
  {id:"p4",t:"30 set",title:"Arrivati",sc:"cas"},
  {id:"h1",t:"10 nov",title:"Perizia",sc:"per",lock:"album"},
  {id:"h2",t:"lun",title:"Nel raccoglitore",sc:"lab",lock:"album"}],
 pins:{album:"1930",ver:"0330",note:"1544"},
 events:[{id:"a",q:3,kind:"sms",from:"Bruno",text:"Marina, so che pensi a me. Io sono un disonesto, è vero, ma martedì alle 19:38 ero sul treno per Savona. Te l'ho mandato il biglietto."},
         {id:"b",q:8,kind:"call",from:"E. Traverso",lines:["«Marina? Sono Ernesto, il restauratore di tuo padre. Condoglianze.»","«Quella perizia, se la trovi... è una bozza, non vale niente. Dammela, la sistemo io.»","«...Non è Marina? Ho sbagliato numero.»"]}],
 qs:[
  {t:"19:30",q:"Aldo aveva un appuntamento quella sera. A che ora?",all:["1930"],show:"Alle 19:30, «B. al bar»",hint:"Un'iniziale in agenda.",news:"B. è Bruno Ferrando, il socio."},
  {t:"19:25",q:"A che ora il Bar Rosa chiude e manda via tutti?",all:["1925"],show:"Alle 19:25",hint:"C'è chi conosce le abitudini della barista.",news:"Bruno dice che lo aspettava lì, poi è andato in stazione."},
  {t:"19:38",q:"A che ora partiva il treno di Bruno per Savona?",all:["1938"],show:"Alle 19:38",hint:"Bruno ha inoltrato una prova.",news:"Alle 19:44 il telefono di Aldo si ferma. Bruno era in treno."},
  {t:"copie",q:"Che cosa sono davvero i tre cassettoni?",any:["copi","fals"],show:"Copie moderne",hint:"Un esperto ha scritto una bozza, nascosta.",news:"Assicurati per 240.000 €, valgono 6.000."},
  {t:"Galli",q:"A chi voleva «dire tutto» Aldo, il giorno dopo?",any:["galli","assicuraz"],show:"Alla dott.ssa Galli, dell'assicurazione",hint:"Una mail e un appuntamento.",news:"Mercoledì alle 9."},
  {t:"Traverso",q:"Chi aveva fatto la perizia?",any:["traverso","ernesto","restaurat"],show:"Ernesto Traverso, il restauratore",hint:"La banca ricorda chi è stato pagato.",news:"150 €. Alle 19:35 Aldo gli scrive che porterà anche una fattura. Ora hai recuperato il messaggio che Traverso ha cancellato.",unlock:"tra"},
  {t:"in negozio",q:"Che cosa risponde Traverso alle 19:36?",any:["negoz","arriv","aspett"],show:"«Arrivo in negozio, aspettami»",hint:"Il messaggio recuperato.",news:"Il laboratorio è a cinque minuti. Alle 19:44 il telefono di Aldo si ferma."},
  {t:"2015",q:"Di che anno è la fattura del Laboratorio Traverso nella cartella verde?",a:["2015","del 2015"],show:"Del 2015",hint:"La cartella verde è chiusa.",news:"«Tre cassettoni in stile, lastronatura antica.» I cassettoni li aveva fabbricati Traverso."},
  {t:"Savona",q:"Il nipote Luca: dov'era martedì?",any:["savona","colloq"],show:"A Savona, per un colloquio",hint:"Aveva chiesto un rimborso.",news:"Una falsa pista."},
  {t:"400",q:"La cliente Costa quanto rivoleva?",a:["400","400 euro","400 €","quattrocento"],show:"400 €",hint:"Una cliente arrabbiata.",news:"Troppo poco per un omicidio."},
  {t:"lavoro",q:"Nella nota protetta: che cosa avrebbe perso Traverso, se Aldo portava la fattura?",any:["lavor","carrier","liguria","mestier"],show:"Il lavoro, in tutta la Liguria",hint:"Aldo l'ha scritto a Marina.",news:"«Ho paura più di lui che di Bruno.»"},
  {t:"t",q:"Chi ha ucciso Aldo?",o:[["b","Bruno, il socio"],["t","Ernesto Traverso, il restauratore"],["l","Luca, il nipote"],["c","La signora Costa"],["x","Nessuno: è caduto"]],a:"t",show:"Ernesto Traverso, il restauratore",hint:"Chi aveva fatto i falsi, e chi è passato in negozio alle 19:40?",news:""}],
 win:{title:"Aldo l'ha ucciso Ernesto Traverso, il restauratore.",
  steps:["Bruno, il socio, è un truffatore: ha assicurato tre copie per 240.000 €. Ma alle 19:38 era sul treno per Savona.","La perizia l'aveva fatta Traverso, che li dichiarava copie. Nella cartella verde c'era però una fattura del suo laboratorio, del 2015: i cassettoni li aveva fabbricati lui.","Alle 19:35 Aldo gli scrive che porterà la fattura all'assicurazione. Alle 19:36 Traverso risponde: «Arrivo in negozio».","Alle 19:44 il telefono di Aldo si ferma per sempre."],
  end:"Marina porta la cartella verde alla dott.ssa Galli, mercoledì alle 9, come avrebbe fatto suo padre. Nel laboratorio di Traverso la polizia trova altri due cassettoni «settecenteschi» ancora da lucidare. Bruno viene arrestato per truffa. Marina riapre il negozio a dicembre, con un cartello: «Qui solo mobili veri»."}
});
})();
