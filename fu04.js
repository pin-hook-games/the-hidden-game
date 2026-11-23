(function(){
/* Furti 4: L'incasso del sabato (Bologna). Soluzione: Bruno, il cuoco, quello che difende Lucia.
   È rimasto dopo la chiusura «a pulire la cappa», è uscito dalla porta della cucina alle 0:58 con uno zaino, e lunedì ha versato 4.000 € di caparra per un food truck.
   Ha mandato a Lucia solo il fermo immagine di Elisa, per indirizzarla. False piste: Lucia (caparra in contanti) ed Elisa (fidanzato con debiti, ma pagati con i suoi risparmi; in osteria due minuti, per il cappotto).
   Codici: album = minuti della chiusura (52) + minuti dell'uscita di Lucia (55) = 5255; registro telecamere = 02 retro + 03 cucina = 0203; nota = 10 (entrata di Elisa, album) + 58 (uscita dell'ultimo, registro) = 1058. */
const SC={
 cas:()=>LIB.doc("Chiusura cassa · sabato","#2f6b4f",["Contanti: 4.800 €","Ora: 23:52","Busta in cassaforte","Firma: Lucia"]),
 sta:()=>LIB.group(5,"Lo staff dell'Osteria Due Torri","#7a3b5a"),
 cap:()=>LIB.doc("Ricevuta caparra","#33658a",["Affitto via del Pratello","Caparra: 1.200 € contanti","Ricevuto da: Lucia Monti","20 ottobre"]),
 tip:()=>LIB.obj("#f0d9a0","🫙","Il barattolo delle mance, un anno"),
 cam:()=>LIB.doc("Fermo immagine · mandato da Bruno","#a02822",["Telecamera retro","Domenica 0:10","Elisa entra","«guarda chi è entrato»"]),
 nic:()=>LIB.shot("@nico.vibes",["Debito saldato, ripartiamo da zero","grazie amore, i tuoi risparmi 🖤"])
};
const MAP=LIB.city("Bologna",[[40,52,"Due Torri"],[132,132,"Pratello"],[276,132,"Santo Stefano"],[40,232,"Saragozza"],[300,40,"Giardini"],[200,200,"Viali"]],[]);

LIB.add(44,["L'incasso del sabato","Lucia è accusata di aver preso 4.800 euro dalla cassa","Bologna"],{
 map:MAP,scenes:SC,owner:"Lucia Monti",time:"16:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal map cal note social",
 late:"Lucia deve andare al colloquio per un nuovo lavoro. Si riprende il telefono.",
 brief:"Lucia Monti, 26 anni, cameriera all'Osteria Due Torri di Bologna, ha chiuso la cassa sabato notte. Domenica mattina la busta con l'incasso, 4.800 euro, non c'era più. Il titolare l'ha licenziata. Lucia ti ha dato il suo telefono perché trovi chi è stato.",
 quote:"«Il titolare dice che sono stata io, perché il mese scorso ho pagato in contanti la caparra di casa nuova: erano le mie mance. Bruno, il cuoco, è l'unico che mi ha difesa. Mi ha anche mandato un fermo immagine della telecamera: dopo di me è entrata Elisa, la figlia del titolare, che ha un fidanzato pieno di debiti. Ma io non voglio accusare nessuno a vuoto.»",
 locks:{
  album:{hint:"I minuti della chiusura, poi i minuti in cui ho chiuso la porta dietro di me."},
  tec:{name:"Registro telecamere",hint:"Le due telecamere che guardano dietro, con lo zero davanti."},
  note:{hint:"Quando è entrata lei, poi quando è uscito l'ultimo."}},
 chats:[
  {id:"tit",name:"Sig. Gardini",sub:"Titolare",m:[
   ["sab 23:53",1,"Chiusura fatta. 4.800. Busta in cassaforte. Buonanotte!"],
   ["dom 10:00",0,"Lucia, la cassaforte è vuota. Le chiavi le hai solo tu e io."],
   ["dom 10:30",0,"E la caparra in contanti di un mese fa? Non farmi ridere. Sei licenziata."]]},
  {id:"sta",name:"Staff Due Torri",sub:"Gruppo",m:[
   ["sab 23:50",0,"Bruno: Andate pure, io resto a pulire la cappa. La porta della cucina la chiudo io."],
   ["sab 23:58",0,"Elisa: Ragazzi ho lasciato il cappotto in osteria, passo a prenderlo. Lucia, la chiave del retro è sempre sotto il vaso?"],
   ["sab 23:59",1,"Sì, sotto il vaso. Bruno è ancora dentro, comunque."],
   ["dom 11:00",0,"Bruno: Ma che è successo? Lucia non ruberebbe mai."]]},
  {id:"bru",name:"Bruno",sub:"Cuoco",m:[
   ["dom 12:00",0,"Lucia, io ti credo. La chiave della cassaforte è appesa in ufficio da sempre, lo sa anche Elisa."],
   ["dom 12:05",0,"Il tecnico mi ha girato un fermo immagine della telecamera del retro. Guarda chi è entrato a mezzanotte e dieci. Non lo dire a Gardini da parte mia, eh."],
   ["dom 12:06",1,"Ma tu a che ora sei andato via?"],
   ["dom 12:20",0,"Subito dopo di te, più o meno. Ero distrutto."]]},
  {id:"eli",name:"Elisa",sub:"Figlia del titolare",m:[
   ["lun",0,"Lucia, mi dispiace tantissimo. Io sabato sono passata solo per il cappotto, due minuti. Bruno era in cucina con la musica alta."],
   ["lun",0,"Lo so cosa pensi di Nico. I suoi debiti li ho pagati io, con i risparmi dell'estate. Papà non lo sa."]]},
  {id:"pad",name:"Padrone di casa",sub:"",m:[
   ["20 ott",0,"Ricevuta la caparra di 1.200 €, grazie. Le chiavi il primo novembre."]]},
  {id:"mam",name:"Mamma",sub:"",m:[
   ["dom",0,"Tesoro, ti ricordi che il barattolo delle mance l'hai aperto davanti a me? Erano più di mille euro."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Post",title:"@nico.vibes · lunedì",sub:"«Debito saldato»",body:"«Debito saldato, ripartiamo da zero. Grazie amore, i tuoi risparmi.»"},
   {id:"s2",g:"Post",title:"@bruno.cucina · lunedì",sub:"«Ci siamo!»",body:"«Caparra versata! A marzo parte Bruno su Ruote, il mio food truck. 4.000 € e un sogno.»\nFoto: lui sorridente davanti a un furgone bianco."},
   {id:"s3",g:"Post",title:"@bruno.cucina · ottobre",sub:"Storia",body:"«Mi mancano gli ultimi quattromila e poi mollo tutto e apro il mio.»"}],
  mail:[
   {id:"m1",title:"Osteria Due Torri",sub:"Lettera di licenziamento",meta:"lunedì",body:"Si comunica il licenziamento per giusta causa: ammanco di 4.800 € dalla cassaforte."},
   {id:"m2",title:"Tecnico videosorveglianza",sub:"Registro completo di sabato notte",meta:"oggi",lock:"tec",body:"Come richiesto, il registro completo delle telecamere.\nT2 retro · 0:10 entra una ragazza · 0:12 esce, con un cappotto in mano.\nT3 cucina · 0:40-0:55 obiettivo coperto da un panno.\nT3 cucina · 0:58 la porta della cucina si apre dall'interno: esce un uomo con uno zaino, grembiule bianco."}],
  map:[
   {id:"g1",g:"Cronologia sabato",title:"Osteria",sub:"17:00 - 23:55",body:""},
   {id:"g2",g:"Cronologia sabato",title:"Casa, via del Pratello",sub:"0:15",body:""}],
  cal:[
   {id:"c1",g:"Ottobre",title:"20 ott · Caparra",sub:"",body:""},
   {id:"c2",g:"Oggi",title:"Colloquio",sub:"17:00",body:""}],
  note:[
   {id:"n1",title:"Da fare",body:"Scrivere al tecnico per il registro completo\nChiedere referenze a Elisa"},
   {id:"n2",title:"Per Gardini",lock:"note",body:"Elisa è entrata alle 0:10 ed è uscita alle 0:12 con il suo cappotto.\nBruno è rimasto dentro. Ha coperto la telecamera della cucina e alle 0:58 è uscito con uno zaino.\nLunedì ha versato 4.000 € di caparra per il suo furgone.\nE a me ha mandato solo la foto di Elisa.\nMi fidavo di lui più che di chiunque."}],
  tel:[
   {id:"t1",title:"Tecnico videosorveglianza",sub:"oggi 11:00 · in uscita, 6 min"}]
 },
 spots:[
  {id:"s1",x:170,y:60,label:"Osteria Due Torri",title:"Osteria Due Torri",sub:"Trattoria · ★ 4,6",body:"Tre telecamere: 1 sala, 2 retro, 3 cucina. La porta della cucina dà su un vicolo laterale.\nRecensione: «Il cuoco Bruno è un artista. Resta fino a tardi a pulire tutto.»"},
  {id:"s2",x:90,y:140,label:"Casa di Lucia",title:"Casa di Lucia",sub:"Via del Pratello",body:"Dieci minuti a piedi dall'osteria."},
  {id:"s3",x:300,y:150,label:"Furgoni Emilia",title:"Furgoni Emilia",sub:"Furgoni usati · ★ 4,0",body:"Recensione di lunedì: «Un cuoco simpaticissimo ha lasciato la caparra per un food truck tutta in contanti, banconote da cinquanta. Auguri!»"}],
 photos:[
  {id:"p1",t:"sab 23:52",title:"Chiusura",sc:"cas"},
  {id:"p2",t:"estate",title:"Staff",sc:"sta"},
  {id:"p3",t:"20 ott",title:"Caparra",sc:"cap"},
  {id:"p4",t:"ott",title:"Mance",sc:"tip"},
  {id:"h1",t:"dom 12:05",title:"Da Bruno",sc:"cam",lock:"album"},
  {id:"h2",t:"lun",title:"Screenshot",sc:"nic",lock:"album"}],
 pins:{album:"5255",tec:"0203",note:"1058"},
 events:[{id:"a",q:3,kind:"sms",from:"Bruno",text:"Lucia, hai fatto vedere il fermo immagine a qualcuno? Fallo vedere al tuo investigatore. Elisa ha dei problemi, lo sanno tutti."},
         {id:"b",q:8,kind:"call",from:"Tecnico videosorveglianza",lines:["«Signorina Monti? Ah, no. Le può dire una cosa?»","«Il suo collega cuoco mi aveva chiesto solo il fermo delle 0:10. Il resto non l'ha voluto.»","«Il registro intero gliel'ho mandato per mail. Strano che non l'abbia chiesto anche lui.»"]}],
 qs:[
  {t:"4800",q:"Quanto c'era nella busta della chiusura?",a:["4800","4.800","4800 euro","4.800 euro","4.800 €"],show:"4.800 €",hint:"Lucia documenta tutto, ogni sera.",news:"Busta in cassaforte, alle 23:52."},
  {t:"1200",q:"La caparra in contanti che il titolare le rinfaccia: quanto era?",a:["1200","1.200","1200 euro","1.200 euro","1.200 €","milleduecento"],show:"1.200 €",hint:"Il padrone di casa ha confermato.",news:"Un mese prima del furto."},
  {t:"mance",q:"Con quali soldi l'aveva pagata?",any:["manc","barattol"],show:"Con le mance di un anno",hint:"Sua madre era presente.",news:"La pista del titolare non regge."},
  {t:"Elisa",q:"Chi ha scritto nel gruppo che sarebbe passata in osteria dopo la chiusura?",any:["elisa"],show:"Elisa, la figlia del titolare",hint:"Lo staff si scrive tutto.",news:"«Ho lasciato il cappotto.» È lei che Bruno indica."},
  {t:"Bruno",q:"Chi era ancora dentro quando Lucia è uscita?",any:["bruno","cuoco"],show:"Bruno, il cuoco",hint:"Qualcuno si era offerto di chiudere.",news:"«Io resto a pulire la cappa.» Ma a Lucia ha detto di essere uscito «subito dopo di lei»."},
  {t:"0:10",q:"Nel fermo immagine che Bruno ha mandato a Lucia, a che ora entra Elisa?",all:["010"],show:"Alle 0:10",hint:"Lucia ha nascosto quell'immagine. Il codice è fatto di minuti suoi.",news:"«Guarda chi è entrato.» Bruno ha chiesto al tecnico solo questo."},
  {t:"0:12",q:"Secondo il registro completo delle telecamere, a che ora esce Elisa?",all:["012"],show:"Alle 0:12",hint:"Qualcuno ha mandato tutto, non solo un fotogramma. Le telecamere hanno un numero.",news:"Due minuti dentro."},
  {t:"cappotto",q:"Che cosa ha in mano Elisa quando esce?",any:["cappott"],show:"Il suo cappotto",hint:"Stesso registro.",news:"Era davvero passata per il cappotto."},
  {t:"0:58",q:"A che ora la porta della cucina si apre dall'interno?",all:["058"],show:"Alle 0:58",hint:"La terza telecamera ha visto poco, ma non niente.",news:"Esce un uomo con uno zaino e il grembiule bianco. Prima, per un quarto d'ora, l'obiettivo era coperto da un panno."},
  {t:"risparmi",q:"Nico ha saldato il suo debito. Con quali soldi?",any:["risparm","estat"],show:"Con i risparmi di Elisa",hint:"Elisa l'ha confessato a Lucia.",news:"La falsa pista di Bruno cade."},
  {t:"food truck",q:"Per che cosa ha versato una caparra Bruno, lunedì?",any:["food","truck","furgon","ruote"],show:"Per il suo food truck, «Bruno su Ruote»",hint:"Bruno ama raccontarsi in pubblico.",news:"4.000 € in contanti, banconote da cinquanta. In ottobre gli mancavano «gli ultimi quattromila»."},
  {t:"b",q:"Chi ha preso l'incasso?",o:[["l","Lucia"],["e","Elisa, per i debiti di Nico"],["b","Bruno, il cuoco, che poi ha indicato Elisa"],["g","Il titolare, per l'assicurazione"],["n","Nico"]],a:"b",show:"Bruno, il cuoco",hint:"Chi era dentro per ultimo, e chi ha scelto quale immagine mostrare?",news:""}],
 win:{title:"L'incasso l'ha preso Bruno, il cuoco che difendeva Lucia.",
  steps:["Lucia ha chiuso la cassa alle 23:52 ed è uscita alle 23:55. Bruno è rimasto dentro «a pulire la cappa».","Bruno le ha mandato solo il fermo immagine di Elisa alle 0:10. Nel registro completo Elisa esce alle 0:12, con il cappotto.","La telecamera della cucina è stata coperta dalle 0:40 alle 0:55. Alle 0:58 dalla porta della cucina esce un uomo con zaino e grembiule.","Lunedì Bruno ha versato 4.000 € in contanti di caparra per il suo food truck.","I debiti di Nico li ha pagati Elisa con i suoi risparmi. La caparra di Lucia, con le mance."],
  end:"Lucia manda al signor Gardini il registro del tecnico e il post di Bruno. Gardini non risponde per due giorni. Il terzo scrive: «Torna, se vuoi. E scusami.» Bruno non si presenta più in cucina. Il furgone bianco resta dal concessionario, con un cartello: «Caparra sequestrata.»"}
});
})();
