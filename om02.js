(function(){
/* Omicidi 2: Allergia (Torino). Soluzione: Noemi, la giovane cameriera di sala che tutti adorano.
   Elena aveva scoperto che rubava bottiglie di Barolo dalla cantina e le rivendeva online; lunedì voleva parlarle.
   Sabato alle 16:10 Noemi, sola in osteria ad aprire la sala, ha cambiato l'olio nella lista della spesa dal tablet della cucina, dove è collegato il profilo di Dario. Alle 18:10 ha chiesto dove fosse la penna salvavita, poi l'ha spostata.
   False piste: il sous-chef Dario (furioso per il locale nuovo, ma alle 16:10 era al mercato) e il marito Sandro (con l'amante a Moncalieri).
   Codici: album = 14 bottiglie + annata 16 = 1416; voce della lista = 12 coperti + primo alle 21 = 1221; nota = 85 (prezzo dell'annuncio) + 10 (minuti della modifica) = 8510. */
const SC={
 kit:()=>LIB.obj("#e9dfd0","🍳","La brigata prima del servizio"),
 san:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Sandro, Superga"),
 menu:()=>LIB.doc("Cena privata · Villa Morelli","#7a3b5a",["12 coperti · sabato ore 20:30","Primo: tajarin, olio a crudo","alle 21:05","Chef: Elena Riva"]),
 mer:()=>LIB.shot("Dario",["Sono al mercato, fila infinita","(foto delle 16:05, Porta Palazzo)"]),
 noe:()=>LIB.two("#e9dfd0","#7a3b5a","#f0a63a","Noemi, la nostra stella di sala"),
 ann:()=>LIB.doc("Annuncio online · screenshot","#a02822",["Barolo 2016, bottiglia singola","85 €, spedizione in giornata","venditore: noemi_t","(trovato da Elena giovedì)"]),
 bot:()=>LIB.obj("#f0d9a0","🫙","Sul passe, senza etichetta · 20:50")
};
const MAP=LIB.city("Torino",[[40,52,"Porta Palazzo"],[132,132,"Centro"],[276,132,"San Salvario"],[40,232,"Crocetta"],[300,40,"Collina"],[200,200,"Moncalieri →"]],[]);

LIB.add(22,["Allergia","Sandro è sospettato per la morte della moglie Elena","Torino"],{
 map:MAP,scenes:SC,owner:"Elena Riva",time:"10:05",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["spesa","Spesa","work","#4fb3a5,#22705f"]],
 late:"I carabinieri sono venuti a prendere il telefono. Sandro non ha potuto trattenerlo oltre.",
 brief:"Sandro ti ha portato il telefono della moglie Elena Riva, 44 anni, chef. Sabato sera, durante una cena privata in una villa in collina, ha avuto una reazione allergica ed è morta prima dell'arrivo dell'ambulanza. Tra mezz'ora il telefono va consegnato ai carabinieri.",
 quote:"«Elena era allergica da sempre e in cucina controllava tutto due volte. Adesso guardano me, perché ho un'altra e lo sanno tutti. Oppure Dario, il suo vice, che era furioso perché lei apriva un locale senza di lui. Ma io sabato non ero nemmeno lì. Mi aiuti a capire chi.»",
 locks:{
  album:{hint:"Le bottiglie sparite dalla cantina, poi l'annata."},
  lis:{name:"Voce protetta",hint:"I coperti della cena, poi l'ora del primo piatto."},
  note:{hint:"Il prezzo di quell'annuncio, poi i minuti della modifica."}},
 chats:[
  {id:"sandro",name:"Sandro",sub:"Marito",m:[
   ["sab 19:40",0,"Stasera faccio tardi anch'io, non aspettarmi."],
   ["sab 19:45",1,"Lo so dove fai tardi, Sandro. Ne parliamo domenica."]]},
  {id:"dario",name:"Dario",sub:"Sous-chef",m:[
   ["ven 23:10",0,"Ho saputo del locale nuovo. Dopo otto anni lo vengo a sapere da Giorgio."],
   ["ven 23:16",0,"Senza di me non avresti nemmeno una stella da perdere. Vedremo quanto ti dura."],
   ["sab 15:30",0,"La spesa la ritiro io al mercato, tu pensa al brasato."],
   ["sab 16:05",0,"Sono al mercato, fila infinita. Ti mando la foto."],
   ["sab 21:22",0,"Cercate la penna in macchina di Elena, nell'armadietto non c'è!"]]},
  {id:"noemi",name:"Noemi sala",sub:"",m:[
   ["sab 15:55",0,"Chef, apro io l'osteria alle 16 per sistemare la sala e caricare il furgone, come sempre!"],
   ["sab 18:10",0,"Chef, la penna è sempre nell'armadietto 3, vero? Lo chiedo per il foglio sicurezza."],
   ["sab 18:12",1,"Sempre lì. Ne ho una sola, non spostatela."],
   ["sab 21:20",0,"L'armadietto 3 è vuoto!! Dov'è la penna??"]]},
  {id:"beppe",name:"Beppe fornitore",sub:"",m:[
   ["sab 16:40",0,"Chef, consegnato a Dario al banco del mercato. C'era un litro di olio di arachidi in lista, l'ho messo. Strano per te, ma la lista dice così."]]},
  {id:"giorgio",name:"Giorgio",sub:"Socio",m:[
   ["ven 18:00",0,"Preliminare firmato. Trenta per cento io. A Dario l'ho accennato, spero di non aver fatto danni."]]}
 ],
 lists:{
  spesa:[
   {id:"x0",g:"Lista condivisa · cena di sabato",title:"Olio per il condimento a crudo",sub:"Modificata sabato",lock:"lis",body:"Voce originale, inserita da Elena giovedì: «olio di semi di girasole, 1 L».\nModificata sabato alle 16:10 dal profilo di Dario.\nDispositivo: Tablet cucina (osteria)."},
   {id:"x1",g:"Lista condivisa · cena di sabato",title:"Tajarin freschi",sub:"Inserita da Elena",body:"2 kg. Nessuna modifica."},
   {id:"x3",g:"Dispositivi collegati",title:"Tablet cucina (osteria)",sub:"Profilo: Dario",body:"Il tablet resta sempre in cucina, sul bancone. Dario non si è mai scollegato."}],
  mail:[
   {id:"m1",title:"Villa Morelli",sub:"Conferma cena privata",meta:"giovedì",body:"Sabato alle 20:30, dodici coperti.\nPrimo servito alle 21:05 come da scaletta."},
   {id:"m2",title:"Inventario cantina",sub:"Foglio di Elena",meta:"giovedì",body:"Barolo 2016: in carico 36, in cantina 22. Mancano 14 bottiglie.\nChi ha le chiavi della cantina: Elena, Noemi (per il servizio)."}],
  map:[
   {id:"g1",g:"Cronologia · sabato",title:"Villa in collina",sub:"17:30 - 21:40",body:""},
   {id:"g2",g:"Posizione condivisa · famiglia",title:"Sandro",sub:"Moncalieri, 20:10 - 23:00",body:"La villa è a 14 chilometri."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Sab · Cena Morelli",sub:"20:30",body:"Noemi apre l'osteria alle 16."},
   {id:"c2",g:"Questa settimana",title:"Lun · Parlare con N.",sub:"15:00",body:"Le bottiglie. Prima di andare dai carabinieri."}],
  note:[
   {id:"n1",title:"Sicurezza",body:"Allergia: arachidi, anche in tracce.\nPenna salvavita: armadietto 3 della cucina, una sola."},
   {id:"n2",title:"Lunedì",lock:"note",body:"Lunedì parlo con Noemi delle bottiglie. Le ho viste in vendita con il suo nome.\nLe voglio bene, è brava. Le chiederò di restituire i soldi e di andarsene, senza denunce.\nA Dario invece devo dire che nel locale nuovo non viene. Non so quale delle due cose sia più difficile."}],
  tel:[
   {id:"t1",title:"Giorgio",sub:"ven 17:50 · in entrata, 8 min"}]
 },
 spots:[
  {id:"s1",x:132,y:120,label:"Osteria Riva",title:"Osteria Riva",sub:"Centro · ★ 4,4",body:"Sabato pomeriggio chiusa al pubblico. Dalle 16 dentro c'è solo chi prepara la sala e carica il furgone."},
  {id:"s2",x:50,y:66,label:"Porta Palazzo",title:"Mercato di Porta Palazzo",sub:"★ 4,5",body:"Recensione di Beppe: «Il sabato pomeriggio i cuochi ritirano qui la spesa al banco. Fila lunghissima, almeno mezz'ora.»"},
  {id:"s3",x:300,y:52,label:"Villa Morelli",title:"Villa Morelli",sub:"Collina",body:"Cucina al piano terra. Lo staff lascia giacche e borse negli armadietti del corridoio."},
  {id:"s4",x:200,y:212,label:"Moncalieri",title:"Trattoria del Castello",sub:"Moncalieri · ★ 4,1",body:"Recensione: «Sabato sera una coppia al tavolo 4: lui con la fede, lei no.»"}],
 photos:[
  {id:"p1",t:"sab 17:50",title:"Brigata",sc:"kit"},
  {id:"p2",t:"mag",title:"Con Sandro",sc:"san"},
  {id:"p3",t:"gio",title:"Menu",sc:"menu"},
  {id:"p4",t:"sab 16:05",title:"Da Dario",sc:"mer"},
  {id:"p5",t:"estate",title:"Noemi",sc:"noe"},
  {id:"h1",t:"gio",title:"Trovato online",sc:"ann",lock:"album"},
  {id:"h2",t:"sab 20:50",title:"Che olio è?",sc:"bot",lock:"album"}],
 pins:{album:"1416",lis:"1221",note:"8510"},
 events:[{id:"a",q:3,kind:"sms",from:"Noemi sala",text:"Sandro, sono Noemi. Ho saputo che guardano Dario. Lui era arrabbiatissimo con la chef, lo sappiamo tutti. Io non ci voglio credere."},
         {id:"b",q:8,kind:"call",from:"Dario",lines:["«Sandro? ...No? Senta, chiunque sia.»","«Io alle quattro ero al mercato con Beppe, c'è anche la foto. Quel tablet in cucina lo usano tutti, il mio profilo è sempre lì.»","«Io Elena la odiavo, sabato. Ma non così.»"]}],
 qs:[
  {t:"arachidi",q:"A che cosa era allergica Elena?",any:["arachid"],show:"Alle arachidi",hint:"Lo ha scritto lei.",news:"Anche in tracce. E aveva una sola penna salvavita."},
  {t:"Dario",q:"Nella lista della spesa l'olio è stato cambiato. Con quale profilo?",any:["dario"],show:"Con il profilo di Dario",hint:"La lista ha una cronologia, chiusa.",news:"Il vice furioso per il locale nuovo. Sembra chiuso il caso."},
  {t:"16:10",q:"A che ora è stata fatta la modifica?",all:["1610"],show:"Alle 16:10",hint:"Stessa voce.",news:"Quattro ore prima della cena."},
  {t:"tablet",q:"Da quale dispositivo?",any:["tablet","cucina"],show:"Dal tablet della cucina dell'osteria",hint:"Stessa voce, ultima riga.",news:"Un tablet sempre sul bancone, con il profilo di Dario sempre collegato."},
  {t:"mercato",q:"Dov'era Dario alle 16:10?",any:["mercat","palazzo"],show:"Al mercato di Porta Palazzo",hint:"Lui ha mandato una prova, e il fornitore conferma.",news:"Foto delle 16:05, ritiro con Beppe alle 16:40. Non poteva toccare il tablet in osteria."},
  {t:"Noemi",q:"Chi era in osteria alle 16:10?",any:["noemi"],show:"Noemi, che apriva la sala",hint:"Qualcuno apre sempre alle 16.",news:"Sola, con il tablet sul bancone."},
  {t:"Moncalieri",q:"Il marito: dov'era durante la cena?",any:["moncalier"],show:"A Moncalieri, con l'altra",hint:"La famiglia condivide la posizione.",news:"Un pessimo marito con un ottimo alibi."},
  {t:"3",q:"In quale armadietto doveva trovarsi la penna salvavita?",a:["3","tre","armadietto 3","il 3"],show:"Nel 3",hint:"Elena l'ha scritto, e qualcuno l'ha chiesto.",news:"Alle 18:12 era lì. Alle 21:20 non c'era più."},
  {t:"Noemi",q:"Chi ha chiesto alle 18:10 dove fosse la penna?",any:["noemi"],show:"Noemi, «per il foglio sicurezza»",hint:"Una domanda gentile, poco prima della cena.",news:"E alle 21:20 è stata lei a dare l'allarme."},
  {t:"14",q:"Quante bottiglie di Barolo mancano dalla cantina?",a:["14","quattordici"],show:"14",hint:"Elena teneva un inventario.",news:"Le chiavi della cantina le hanno Elena e Noemi."},
  {t:"noemi_t",q:"Con quale nome le vendevano online?",any:["noemit"],show:"«noemi_t»",hint:"Elena aveva trovato un annuncio. È nascosto.",news:"Lunedì Elena voleva parlarle. «Prima di andare dai carabinieri.»"},
  {t:"n",q:"Chi è stato?",o:[["s","Sandro, il marito"],["d","Dario, il sous-chef"],["n","Noemi, la cameriera di sala"],["b","Beppe, il fornitore"],["g","Giorgio, il socio"],["x","Nessuno: è stato un incidente"]],a:"n",show:"Noemi, la cameriera di sala",hint:"Chi poteva usare il tablet alle 16:10, sapeva della penna e aveva da perdere lunedì?",news:""}],
 win:{title:"È stata Noemi, la cameriera di sala.",
  steps:["L'olio è stato cambiato alle 16:10 dal tablet della cucina, con il profilo di Dario sempre collegato.","Dario a quell'ora era al mercato: foto delle 16:05, ritiro con Beppe alle 16:40. In osteria c'era solo Noemi.","Alle 18:10 Noemi ha chiesto dove fosse la penna. Alle 21:20 l'armadietto era vuoto, ed è stata lei a dare l'allarme.","Dalla cantina mancavano 14 bottiglie di Barolo, in vendita online come «noemi_t». Lunedì Elena voleva parlarle.","Sandro era a Moncalieri con un'altra donna. Dario era furioso, ma non c'entra."],
  end:"Sandro guarda la nota di Elena. «Voleva solo che restituisse i soldi», dice. «Senza denunce.» I carabinieri trovano la penna salvavita nella tasca di una giacca da cameriera, appesa nell'armadietto 7 della villa. Dario va al funerale e cucina per tutti, in silenzio."}
});
})();
