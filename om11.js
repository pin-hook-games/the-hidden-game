(function(){
/* Omicidi 11: Capolinea (Roma). Soluzione: Ezio, il passeggero della fermata 14 che gli prestava soldi a strozzo. Mario stava per denunciarlo. */
const SC={
 bus:()=>LIB.obj("#f0d9a0","🚌","La N8, deposito, ore 23"),
 sim:()=>LIB.two("#8fb3c9","#55606b","#1f3a66","Con Simone, la domenica allo stadio"),
 vid:()=>LIB.shot("Video del 12 novembre",["«Oh autista, sveglia!»","(tre ragazzi, risate)"]),
 bar:()=>LIB.obj("#e9dfd0","☕","Da Nando, chiude a mezzanotte"),
 f14:()=>LIB.doc("Fermata 14 · foto di Mario","#a02822",["Ore 01:30, tutte le sere","Giubbotto rosso","Sale sempre da solo","Scende solo al capolinea"]),
 nota:()=>LIB.doc("Quanto devo a F14","#231a1e",["1 settembre: 2.000","15 settembre: 2.400","1 ottobre: 2.900 · 15 ottobre: 3.500","1 novembre: 4.200"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Roma",
 water:[["M150 0Q130 60 170 100Q200 140 160 190Q140 230 170 260",13]],
 parks:[`<ellipse cx="250" cy="40" rx="50" ry="26" fill="#d7e2c9"/>`],
 roads:["M180 110H380","M230 30V240","M300 60V230","M190 170H360","M20 90H140","M90 40V150"],
 labels:[[196,104,"Termini"],[246,150,"San Giovanni"],[320,224,"Tuscolano"],[340,104,"Tiburtina"],[36,172,"Monteverde"],[180,214,"Ostiense"],[340,60,"capolinea"]],
 pins:[[360,76,"#d43d55","capolinea, 01:52",-104,-10],[300,150,"#56666e","fermata 14",9,4],[250,200,"#33658a","casa",9,4]]});

LIB.add(31,["Capolinea","Simone vuole sapere chi ha ucciso il padre Mario","Roma"],{
 map:MAP,scenes:SC,owner:"Mario Proietti",time:"09:00",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 appIds:"msg tel mail gal map cal note",extraApps:[["corse","Corse","two_wheeler","#e2574c,#a02822"]],
 late:"I carabinieri hanno chiesto il telefono. Simone ha dovuto portarlo in caserma.",
 brief:"Simone ti ha portato il telefono del padre Mario Proietti, 55 anni, autista dei notturni a Roma. Nella notte tra mercoledì e giovedì un collega lo ha trovato senza vita sull'autobus fermo al capolinea, a fine corsa. Il telefono era nel cruscotto.",
 quote:"«Una settimana fa tre ragazzi lo hanno insultato e ripreso, il video ha girato dappertutto. Tutti pensano a loro. Ma papà negli ultimi mesi era un altro: non dormiva, contava i soldi. E aveva un contatto salvato come «Fermata 14». Chi salva una fermata in rubrica?»",
 chats:[
  {id:"simone",name:"Simone",sub:"Figlio",m:[
   ["mer 19:00",0,"Papà domenica vieni a pranzo? La piccola ti vuole far vedere l'apparecchio nuovo."],
   ["mer 19:10",1,"Vengo. E domenica ti devo dire una cosa che ho fatto. Niente di cui vergognarsi, alla fine."]]},
  {id:"f14",name:"Fermata 14",sub:"",m:[
   ["",2,"Conversazione svuotata mercoledì alle 22:40."],
   ["1 nov",0,"Siamo a 4.200. Il 15 diventano 5.000.","f14"],
   ["mer 18:00",0,"Stasera salgo alla solita ora. Porta tutto o porta le chiavi della macchina.","f14"],
   ["mer 18:20",1,"Non porto niente, Ezio. Domattina alle 8 sono dai carabinieri. Ho tenuto tutti i conti.","f14"],
   ["mer 18:21",0,"Ne parliamo al capolinea.","f14"]]},
  {id:"franco",name:"Franco collega",sub:"",m:[
   ["mer 22:00",0,"Mario stanotte ti seguo io con la corsa dopo. Se arrivo e sei ancora al capolinea ti offro il caffè della macchinetta."],
   ["gio 02:31",0,"Mario sono arrivato alle 02:28, hai le luci accese e non scendi. Che fai, dormi?"]]},
  {id:"madre",name:"Madre di uno dei ragazzi",sub:"",m:[
   ["mar 10:00",0,"Signor Proietti, sono la mamma di uno dei tre del video. Mi vergogno per lui. Vuole chiederle scusa di persona."],
   ["mar 10:30",1,"Signora, sono ragazzi. Lo mandi sabato al deposito, gli faccio vedere com'è un turno di notte."],
   ["gio 08:00",0,"Ho saputo. Mercoledì sera i tre erano al concerto all'Eur, li ho accompagnati io e sono rientrati alle 2. Lo dico per chi indaga."]]},
  {id:"rita",name:"Rita",sub:"",m:[
   ["lun 12:00",0,"Mario, da Pescara ti mando la solita foto del mare. Stai mangiando? Simone dice che sei dimagrito."],
   ["lun 12:10",1,"Mangio, Rita. Grazie che ti preoccupi ancora."]]},
  {id:"serra",name:"Dott. Serra",sub:"",m:[
   ["lun 09:00",0,"Proietti, visto il video ho revocato la sospensione: lei si è comportato correttamente. Mi scuso per la fretta."],
   ["lun 09:10",1,"Grazie dottore."]]},
  {id:"nando",name:"Nando bar",sub:"",m:[
   ["mer 23:50",0,"Mario io chiudo a mezzanotte. Il cornetto te lo lascio sulla macchinetta del capolinea come sempre."]]}
 ],
 lists:{
  corse:[
   {id:"x1",g:"Ultima corsa · linea N8",title:"Fermata 14",sub:"01:31 · sale 1 passeggero",body:"Alle 01:31 sale un passeggero. Nessun altro a bordo."},
   {id:"x2",g:"Ultima corsa · linea N8",title:"Fermate 15 - 22",sub:"Nessuna salita, nessuna discesa",body:"Nessuna porta aperta fino al capolinea."},
   {id:"x3",g:"Ultima corsa · linea N8",title:"Capolinea",sub:"Arrivo 01:52 · a bordo: 1",body:"Arrivo alle 01:52.\nPasseggeri a bordo all'arrivo: 1.\nPorta anteriore aperta alle 02:06."},
   {id:"x4",g:"Corsa successiva",title:"Franco · arrivo al capolinea",sub:"02:28",body:"Arrivo alle 02:28."}],
  mail:[
   {id:"m1",title:"Stazione dei carabinieri",sub:"Appuntamento",meta:"mercoledì",body:"Sig. Proietti, la aspetto giovedì alle 8 per la denuncia. Porti gli appunti con le cifre e le date.\nMaresciallo Conti"},
   {id:"m2",title:"Studio dentistico",sub:"Ricevuta",meta:"1 settembre",body:"Apparecchio ortodontico per la nipote: 2.000,00 €, pagati in contanti dal nonno."}],
  map:[
   {id:"g1",g:"Notte tra mercoledì e giovedì",title:"Capolinea",sub:"dalle 01:52",meta:"Ultima posizione",body:"Il telefono è rimasto sul cruscotto."}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Gio · Maresciallo C.",sub:"08:00",body:"Portare i conti."},
   {id:"c2",g:"Questa settimana",title:"Sab · Il ragazzo del video",sub:"22:00",body:"Giro in deposito."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora di arrivo al capolinea dell'ultima corsa, quattro cifre.\nNota sotto: quanto devo adesso a F14."},
   {id:"n0",title:"Quanto devo a F14",body:"1 settembre: 2.000.\n15 settembre: 2.400.\n1 ottobre: 2.900.\n15 ottobre: 3.500.\n1 novembre: 4.200.\nNon ho mai firmato niente."},
   {id:"n2",title:"Per Simone",lock:"note",body:"I 2.000 li ho chiesti per l'apparecchio della piccola e non te l'ho detto, perché eri senza lavoro.\nNon è colpa tua. È colpa mia che mi sono fidato di uno che sale sul mio autobus.\nGiovedì denuncio."}],
  tel:[
   {id:"t1",title:"Fermata 14",sub:"mer 18:25 · in entrata, 2 min"},
   {id:"t2",title:"Carabinieri",sub:"mer 11:00 · in uscita, 9 min"}]
 },
 photos:[
  {id:"p1",t:"mer 22:55",title:"Si parte",sc:"bus"},
  {id:"p2",t:"ott",title:"Con Simone",sc:"sim"},
  {id:"p3",t:"12 nov",title:"Quel video",sc:"vid"},
  {id:"p4",t:"lun",title:"Nando",sc:"bar"},
  {id:"h1",t:"10 nov · 01:30",title:"Lui",sc:"f14",lock:"album"},
  {id:"h2",t:"1 nov",title:"I conti",sc:"nota",lock:"album"}],
 pins:{note:"4200",album:"0152"},
 events:[{id:"a",q:3,kind:"call",from:"Fermata 14",lines:["«Mario?»","«...Chi è? Ah. Condoglianze. Ero un conoscente.»","«Senta, suo padre mi doveva dei soldi. Ne parliamo con calma, tra noi, senza carte.»"]},
         {id:"b",q:9,kind:"sms",from:"Franco collega",text:"Simone, una cosa che ho detto anche ai carabinieri: quando sono arrivato, uno col giubbotto rosso si allontanava a piedi dal capolinea."}],
 qs:[
  {t:"01:52",q:"L'app delle corse registra l'ultima. A che ora è arrivato Mario al capolinea?",all:["152"],show:"Alle 01:52",hint:"Apri l'app Corse.",news:"Il collega Franco lo ha trovato alle 02:28. In mezzo ci sono trentasei minuti."},
  {t:"1",q:"Quanti passeggeri c'erano a bordo all'arrivo?",a:["1","uno","un passeggero","1 passeggero"],show:"Uno",hint:"Riga del capolinea.",news:"Un solo passeggero, rimasto sul bus fino alla fine. La porta si è aperta alle 02:06."},
  {t:"14",q:"A quale fermata era salito?",a:["14","alla 14","fermata 14","la 14"],show:"Alla fermata 14",hint:"Scorri le fermate della corsa.",news:"«Fermata 14» è anche il nome di un contatto. Ora che hai collegato le due cose, hai recuperato la conversazione che Mario aveva svuotato.",unlock:"f14"},
  {t:"Ezio",q:"Come si chiama davvero «Fermata 14»?",any:["ezio"],show:"Ezio",hint:"Mario lo chiama per nome nei messaggi recuperati.",news:"«Porta tutto o porta le chiavi della macchina.» Non è un amico."},
  {t:"2200",q:"Mario teneva i conti. Di quanti euro è cresciuto il debito dal 1° settembre al 1° novembre?",a:["2200","2.200","2200 euro","2.200 euro","2.200 €"],show:"2.200 €: da 2.000 a 4.200",hint:"C'è una nota con le cifre. Fai la sottrazione.",news:"Più che raddoppiato in due mesi, senza una firma. Si chiama usura."},
  {t:"Conti",q:"Con chi aveva appuntamento Mario giovedì alle 8? Scrivi il cognome.",any:["conti","maresciallo","carabinier"],show:"Con il maresciallo Conti",hint:"Mail e Calendario.",news:"Per la denuncia, con gli appunti. Ezio lo ha saputo mercoledì alle 18:20, da Mario stesso."},
  {t:"al capolinea",q:"Che cosa gli ha risposto Ezio? «Ne parliamo...»",any:["capolinea"],show:"«Ne parliamo al capolinea»",hint:"Ultimo messaggio recuperato.",news:"Sette ore dopo è salito alla fermata 14 ed è sceso solo al capolinea."},
  {t:"al concerto",q:"E i tre ragazzi del video? Dov'erano mercoledì sera?",any:["concert","eur"],show:"A un concerto all'Eur",hint:"Lo scrive la madre di uno di loro.",news:"Accompagnati e riportati a casa alle 2. Mario li aveva già perdonati: ne aspettava uno sabato al deposito."},
  {t:"02:28",q:"Il collega Franco: a che ora è arrivato al capolinea?",all:["228"],show:"Alle 02:28",hint:"App Corse, corsa successiva.",news:"Con un altro autobus pieno di tracciati. È lui che ha dato l'allarme."},
  {t:"Pescara",q:"La ex moglie Rita: da quale città gli scrive?",any:["pescara"],show:"Da Pescara",hint:"Messaggio di lunedì.",news:"Si preoccupa ancora per lui. Il dott. Serra aveva revocato la sospensione, e il bar di Nando chiude a mezzanotte."},
  {t:"rosso",q:"Nell'album privato Mario teneva una foto scattata di nascosto. Di che colore è il giubbotto dell'uomo?",any:["ross"],show:"Rosso",hint:"Il codice dell'album è l'ora di arrivo al capolinea.",news:"«Sale sempre da solo, scende solo al capolinea.» Mario stava raccogliendo prove da settimane."},
  {t:"l'apparecchio",q:"Nella nota protetta spiega al figlio perché aveva chiesto quei soldi. Per pagare che cosa?",any:["apparecchi","denti","dentist"],show:"L'apparecchio della nipote",hint:"Il codice è la cifra che doveva a novembre.",news:"«Perché eri senza lavoro.» Duemila euro per i denti di una bambina."},
  {t:"e",q:"Chi è stato?",o:[["r","I tre ragazzi del video"],["e","Ezio, il passeggero della fermata 14"],["f","Franco, il collega"],["t","Rita, la ex moglie"],["s","Il dott. Serra"],["n","Nando, il barista"],["x","Nessuno: è stato un malore"]],a:"e",show:"Ezio",hint:"Chi era l'unico a bordo al capolinea?",news:""}],
 win:{title:"È stato Ezio, il passeggero della fermata 14.",
  steps:["Mario aveva chiesto 2.000 € a un passeggero abituale. In due mesi erano diventati 4.200.","Mercoledì alle 18:20 gli ha scritto che giovedì alle 8 lo avrebbe denunciato. Risposta: «Ne parliamo al capolinea».","Alle 01:31 un solo passeggero è salito alla fermata 14. Alle 01:52 era ancora a bordo, da solo con Mario.","Franco è arrivato alle 02:28 e ha visto un uomo con un giubbotto rosso allontanarsi.","I tre ragazzi del video erano a un concerto. Rita vive a Pescara."],
  end:"Simone legge la nota fino alla fine. «L'apparecchio», dice. «Lo ha pagato lui, e io pensavo fosse stato il dentista a farci lo sconto.» Si asciuga la faccia. «I conti li porto io al maresciallo. Alle otto, come doveva fare lui.»"}
});
LIB.tune(31,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.note.find(x=>x.id==="n0").lock="deb";
 e.pins={album:"0152",deb:"1422",note:"2035"};
 e.locks={album:{hint:"L'ora in cui la corsa è finita."},deb:{name:"Nota protetta",hint:"La sua fermata, poi l'ultima prima del capolinea."},note:{hint:"Le centinaia dell'apparecchio, poi le centinaia di metà ottobre."}};
 e.spots=[
  {id:"s1",x:360,y:76,label:"Capolinea",title:"Capolinea",sub:"Piazzale degli autobus",body:"Di notte la biglietteria è chiusa e la sua telecamera spenta."},
  {id:"s2",x:300,y:150,label:"Fermata 14",title:"Fermata 14 · bar",sub:"★ 3,8",body:"Recensione del barista: «Un signore anziano aspetta sempre l'ultima corsa qui davanti. Mai una sera che non ci sia.»"},
  {id:"s3",x:250,y:200,label:"Casa",title:"Casa di Mario",sub:"",body:"Sul frigo, il disegno della nipote con l'apparecchio ai denti."}];
 LIB.hints(e,["L'app delle corse registra l'arrivo.","Quanti erano a bordo?","Dove era salito?","Il soprannome nasconde un nome.","Mario teneva i conti, sotto chiave.","Un appuntamento importante giovedì.","Una risposta breve, recuperata.","I ragazzi del video hanno un alibi.","Il collega è arrivato dopo.","La ex scrive da lontano.","Una foto scattata di nascosto.","Mario ha scritto al figlio.","Chi era a bordo, e chi stava per essere denunciato?"]);
});
})();
