(function(){
/* ---------------- episodio 3: Lei cancella le chat (Firenze) ----------------
   Soluzione: Nasconde altro. Non c'è nessun altro: Giorgia ha firmato per un monolocale in San Frediano
   e sabato 29, mentre Luca è a Livorno, se ne va. Andrea è un'agente immobiliare, ed è una donna. */
const SC={
 room:()=>LIB.room(),
 boxes:()=>LIB.boxes(),
 inv:()=>LIB.doc("Filippo e Marta","#b0764a",["Sabato 13 dicembre","ore 16:30","Fiesole","prova di stampa n. 3"]),
 old:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Luca, estate 2021"),
 keys:()=>LIB.keys(),
 contract:()=>LIB.doc("Contratto di locazione","#33658a",["Conduttore: Conti Giorgia","unica intestataria","Durata: 4 anni","Canone: 780,00 € al mese","Firmato il 19 novembre"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Firenze",
 water:[["M0 150Q90 136 170 150Q250 166 400 132",14]],
 parks:[`<ellipse cx="150" cy="222" rx="60" ry="26" fill="#d7e2c9"/>`,`<ellipse cx="40" cy="120" rx="34" ry="16" fill="#d7e2c9"/>`],
 roads:["M20 90H380","M60 50V140","M140 30V140","M210 20V146","M290 30V136","M100 176H330","M190 160V250","M0 60H120","M300 60H400"],
 extra:`<rect x="196" y="82" width="16" height="16" rx="8" fill="#b0764a"/><rect x="118" y="52" width="26" height="10" rx="2" fill="#7d756b"/>`,
 labels:[[190,76,"Duomo"],[96,48,"S. M. Novella"],[232,116,"Santa Croce"],[306,54,"Campo di Marte"],[62,170,"San Frediano"],[150,196,"Santo Spirito"],[128,232,"Boboli"],[22,30,"Rifredi"],[352,126,"Arno"],[12,112,"Cascine"]],
 pins:[[334,76,"#33658a","Casa",-34,-8],[214,104,"#33658a","Studio",9,4],[84,184,"#d43d55","la casa scelta",9,4],[168,176,"#56666e","mer 18:02",9,14],[258,104,"#56666e","sab 15",9,4],[40,44,"#56666e","sab 15",9,4]]});

EPISODES[3]={
 n:3,timer:1800,map:MAP,scenes:SC,owner:"Giorgia Conti",time:"08:15",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Luca ti ha portato il telefono della fidanzata Giorgia, 29 anni, grafica in uno studio di Firenze. Lei è uscita a correre lungo l'Arno senza telefono: tra mezz'ora è di ritorno.",
 quote:"«Ha cambiato il codice, ma l'ho vista digitarlo. Svuota le conversazioni, una intera con sua sorella. In agenda c'è scritto «da Andrea, ore 18». E poi c'è un tale Tommi che le scrive che «non lo saprà nessuno». Stiamo insieme da cinque anni: voglio sapere chi è.»",
 apps:[["msg","Messaggi","forum","linear-gradient(160deg,#58d5c9,#1f8fd1)"],["tel","Telefono","call","linear-gradient(160deg,#6fd47a,#1f9a4d)"],["mail","Mail","mail","linear-gradient(160deg,#5aa9ff,#2563d8)"],["web","Browser","public","linear-gradient(160deg,#8fd3ff,#3b82c4)"],
  ["gal","Galleria","photo_library","linear-gradient(160deg,#ffb86b,#e0527a)"],["map","Mappe","map","linear-gradient(160deg,#7fd08a,#2f8f9d)"],["cal","Calendario","calendar_month","linear-gradient(160deg,#ff7b6b,#d93a3a)"],["note","Note","sticky_note_2","linear-gradient(160deg,#ffd76a,#f0a020)"],
  ["social","Scatto","photo_camera","linear-gradient(160deg,#a47bff,#5a3fd0)"],["bank","Banca","account_balance","linear-gradient(160deg,#4a5d7a,#1f2c44)"],["casa","CasaFacile","home","linear-gradient(160deg,#ff8f6b,#d9482f)"],["drive","Drive","folder","linear-gradient(160deg,#f6c453,#d98a1f)"]],
 names:{msg:"Messaggi",tel:"Telefono",mail:"Mail",web:"Browser",gal:"Galleria",map:"Mappe",cal:"Calendario",note:"Note",social:"Scatto",bank:"Banca",casa:"CasaFacile",drive:"Drive"},
 chats:[
  {id:"luca",name:"Luca",sub:"Fidanzato",m:[
   ["lun 20:10",0,"Hai cambiato il codice del telefono?"],
   ["lun 20:14",1,"Sì, ce l'hanno chiesto in studio per sicurezza."],
   ["mar 13:02",0,"Il 29 sono a Livorno per la partita con i ragazzi. Torno domenica sera."],
   ["mar 13:20",1,"Ok. Divertiti."],
   ["mer 22:40",0,"Sei strana ultimamente."],
   ["mer 22:41",1,"Sono solo stanca."]]},
  {id:"andrea",name:"Andrea",sub:"",m:[
   ["mar 10:15",0,"Ciao Giorgia, confermo domani alle 18 da me. Porta un documento."],
   ["mar 10:20",1,"Perfetto. A domani."],
   ["mer 19:05",0,"Fatto! Sei stata bravissima. In bocca al lupo per tutto il resto 🤍"],
   ["mer 19:07",1,"Grazie Andrea. Mi tremavano le mani."]]},
  {id:"tommi",name:"Tommi",sub:"",m:[
   ["lun 17:30",0,"Ciao, sono Tommaso. Sabato 29 alle 9 va bene? A chi citofono?"],
   ["lun 17:36",1,"Citofona Conti. Puntuale, ti prego: deve essere tutto finito entro pranzo."],
   ["lun 17:38",0,"Tranquilla. Non lo saprà nessuno prima del tempo 😉"]]},
  {id:"filippo",name:"Filippo",sub:"",m:[
   ["mar 12:40",0,"Sei un tesoro. Marta non deve vedere niente fino a sabato!"],
   ["mar 12:44",1,"Tranquillo, stasera ti mando l'ultima prova."],
   ["mar 12:45",0,"Ti devo un pranzo. Anzi due."],
   ["mer 09:10",0,"Ti ho fatto il bonifico. Sono bellissime."]]},
  {id:"sarti",name:"Sig. Sarti",sub:"",m:[
   ["mer 20:30",0,"Signorina, bonifico ricevuto. Per me può entrare anche qualche giorno prima."],
   ["mer 20:41",1,"Grazie, è gentile. Ma devo aspettare il 29."]]},
  {id:"leo",name:"Leo ❤",sub:"",m:[
   ["dom 18:02",0,"Nota vocale (0:12): «Zia Gio, quando vieni a vedere il mio dinosauro?»"],
   ["dom 18:10",1,"Sabato no, amore. Quello dopo sì. E avrò una cosa nuova da farti vedere."]]},
  {id:"dario",name:"Dario",sub:"",m:[
   ["mar 21:15",0,"Gio, per il 6 mi serve una mano. Non dirlo a Luca!"],
   ["mar 21:20",1,"Dimmi."],
   ["mar 21:22",0,"Festa a sorpresa per i suoi 32. Tu lo porti al locale alle 21 con una scusa."],
   ["mar 21:40",1,"Dario... non so se il 6 ci sarò."],
   ["mar 21:41",0,"Come, non ci sarai?"]]},
  {id:"marti",name:"Marti",sub:"",m:[
   ["",2,"Questa conversazione è stata svuotata mercoledì alle 23:50."],
   ["dom 12 ott",1,"Marti, devo dirti una cosa. Voglio lasciare Luca.","sis"],
   ["dom 12 ott",0,"Cosa?? C'è un altro?","sis"],
   ["dom 12 ott",1,"No. Non c'è nessuno. È che non lo amo più, da un pezzo.","sis"],
   ["dom 12 ott",0,"E lui lo sa?","sis"],
   ["dom 12 ott",1,"No. Ogni volta che ci provo mi guarda e non ci riesco.","sis"],
   ["lun 17 nov",0,"Hai firmato?","sis"],
   ["lun 17 nov",1,"Mercoledì. Poi cancello tutto: ogni tanto mi prende il telefono.","sis"],
   ["mer 23:45",0,"Glielo devi dire prima di sabato 29, Gio. Non con un biglietto.","sis"],
   ["mer 23:48",1,"Lo so. Ho scritto una lettera. Non riesco a dargliela.","sis"]]}
 ],
 lists:{
  casa:[
   {id:"a0",g:"Ricerca salvata",title:"Monolocale o bilocale, Firenze",sub:"Fino a 850 € · 1 persona",meta:"Attiva dal 14 ottobre",body:"Zona: entro 20 minuti a piedi dal centro.\nBudget: fino a 850 € al mese.\nInquilini: 1 persona.\nAnimali: no."},
   {id:"a1",g:"Annunci salvati",title:"Monolocale, Via dell'Orto 11",sub:"San Frediano · 34 mq · 780 €",meta:"Proposta accettata",body:"Monolocale arredato al secondo piano, 34 mq.\n780 € al mese, spese escluse.\nProprietario: Sig. Guido Sarti.\nStato: proposta accettata dal proprietario."},
   {id:"a2",g:"Annunci salvati",title:"Monolocale, zona Santa Croce",sub:"28 mq · 850 €",meta:"Visitato",body:"28 mq, piano terra.\n850 € al mese.\nLa tua nota: «Troppo caro e buio.»"},
   {id:"a3",g:"Annunci salvati",title:"Bilocale, Rifredi",sub:"40 mq · 690 €",meta:"Visitato",body:"40 mq, terzo piano senza ascensore.\n690 € al mese.\nLa tua nota: «Troppo lontano dallo studio.»"},
   {id:"a4",g:"Messaggi dell'agenzia",title:"Casa Arno Immobiliare",sub:"Intestazione del contratto",meta:"14 novembre",body:"«Come richiesto, il contratto sarà intestato solo a lei. Nessun garante, basta la sua busta paga.»"}],
  mail:[
   {id:"m1",title:"Casa Arno Immobiliare",sub:"Proposta accettata: firma del contratto",meta:"14 novembre",body:"Gentile Giorgia,\nil proprietario ha accettato. Firmiamo mercoledì 19 alle 18 nella nostra agenzia in Santo Spirito.\nAlla firma si versano due mensilità di caparra più la prima mensilità, con un unico bonifico al proprietario.\nDott.ssa Andrea Rossi, agente immobiliare"},
   {id:"m2",title:"Traslochi Arno",sub:"Preventivo n. 204 accettato",meta:"17 novembre",body:"Sabato 29 novembre, ore 9:00.\nDa Via Masaccio (Campo di Marte) a Via dell'Orto 11 (San Frediano).\nSolo effetti personali, nessun mobile: 14 scatoloni e una scrivania.\n190,00 €, pagamento alla consegna.\nTommaso Neri"},
   {id:"m3",title:"Banca del Giglio",sub:"Il tuo nuovo conto è attivo",meta:"3 novembre",body:"Conto personale aperto il 3 novembre.\nIntestataria unica: Conti Giorgia.\nLe comunicazioni arrivano solo a questo indirizzo."},
   {id:"m4",title:"Filippo Galli",sub:"Re: partecipazioni",meta:"18 novembre",body:"Giorgia, la prova n. 3 è perfetta. Marta piangerà.\nTi pago domani, come d'accordo.\nSe poi ci fai anche il tableau ti sposo io. Scherzo: mi sposo già!"},
   {id:"m5",title:"Scatto",sub:"Hai bloccato un account",meta:"2 novembre",body:"Hai bloccato @jacopo.m.\nNon potrà più vedere i tuoi post né scriverti."}],
  map:[
   {id:"g1",g:"Cronologia · sabato 15",title:"Rifredi",sub:"09:40 - 10:05",meta:"Permanenza",body:"25 minuti in un palazzo al terzo piano."},
   {id:"g2",g:"Cronologia · sabato 15",title:"Zona Santa Croce",sub:"11:10 - 11:30",meta:"Permanenza",body:"20 minuti a un piano terra."},
   {id:"g3",g:"Cronologia · sabato 15",title:"San Frediano, Via dell'Orto",sub:"12:15 - 13:20",meta:"Permanenza",body:"Più di un'ora. È la sosta più lunga della giornata."},
   {id:"g4",g:"Cronologia · mercoledì 19",title:"Studio, vicino a Santa Croce",sub:"09:00 - 17:40",meta:"Permanenza",body:"In studio fino alle 17:40."},
   {id:"g5",g:"Cronologia · mercoledì 19",title:"Santo Spirito, un ufficio al piano terra",sub:"18:02 - 18:55",meta:"Permanenza",body:"Arrivo alle 18:02, uscita alle 18:55.\nL'insegna dell'ufficio non compare nella cronologia."},
   {id:"g6",g:"Cronologia · mercoledì 19",title:"Casa, Via Masaccio",sub:"19:30",meta:"Arrivo",body:"Rientro a casa alle 19:30."}],
  bank:[
   {id:"b1",g:"Conto personale · aperto il 3 novembre",title:"Sarti Guido, caparra e prima mensilità",sub:"19 nov · − 2.340,00 €"},
   {id:"b2",g:"Conto personale · aperto il 3 novembre",title:"Da stipendio",sub:"17 nov · + 800,00 €"},
   {id:"b3",g:"Conto personale · aperto il 3 novembre",title:"Galli Filippo, partecipazioni",sub:"19 nov · + 180,00 €"},
   {id:"b4",g:"Conto personale · aperto il 3 novembre",title:"Da stipendio",sub:"10 nov · + 700,00 €"},
   {id:"b5",g:"Conto personale · aperto il 3 novembre",title:"Da risparmi",sub:"3 nov · + 900,00 €"},
   {id:"b6",g:"Conto comune con Luca",title:"Affitto Via Masaccio",sub:"5 nov · − 1.050,00 €"},
   {id:"b7",g:"Conto comune con Luca",title:"Supermercato",sub:"15 nov · − 86,40 €"},
   {id:"b8",g:"Conto comune con Luca",title:"Ferramenta, scatole e nastro",sub:"15 nov · − 31,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sab 15 · Giro",sub:"Mattina",body:"Tre posti. Decidere entro lunedì."},
   {id:"c2",g:"Novembre",title:"Mer 19 · Da Andrea",sub:"18:00",body:"Portare documento e ultima busta paga."},
   {id:"c3",g:"Novembre",title:"Sab 29 · T.",sub:"09:00",body:"Luca fuori fino a domenica sera."},
   {id:"c4",g:"Dicembre",title:"Lun 1 · Chiavi",sub:"",body:"Da oggi è mia."},
   {id:"c5",g:"Dicembre",title:"Sab 6 · Compleanno Luca",sub:"Tutto il giorno",body:"Ricorrenza annuale: 6 dicembre."},
   {id:"c6",g:"Dicembre",title:"Sab 13 · Matrimonio Filippo e Marta",sub:"16:30",body:"Fiesole. Invito per due."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come lasciare qualcuno senza ferirlo",sub:"mer 23:58"},
   {id:"w2",g:"Cronologia",title:"disdetta contratto affitto cointestato",sub:"mar 13:40"},
   {id:"w3",g:"Cronologia",title:"trasloco piccolo firenze prezzi",sub:"14 nov"},
   {id:"w4",g:"Cronologia",title:"monolocale firenze arredato una persona",sub:"14 ott"},
   {id:"w5",g:"Cronologia",title:"recuperare chat cancellate",sub:"13 ott"},
   {id:"w6",g:"Cronologia",title:"è normale non sentire più niente dopo cinque anni",sub:"11 ott"}],
  note:[
   {id:"n1",title:"Da fare",body:"Dirlo prima a M.\nScatoloni dal ferramenta.\nAlbum privato: il compleanno di Luca, giorno e mese.\nLa nota qui sotto: il giorno in cui me ne vado e il civico nuovo."},
   {id:"n2",title:"Per L.",lock:"note",body:"Luca,\nnon c'è nessun altro, e questo forse è peggio.\nSono mesi che resto per abitudine e per paura di farti male.\nSabato, quando torni, non mi trovi. Meriti qualcuno che resti perché lo vuole.\nPerdonami."}],
  social:[
   {id:"s0",g:"Il tuo profilo",title:"@gio.conti",sub:"1.204 follower · 318 post",body:"Bio: «Grafica. Firenze. Caratteri tipografici e cani degli altri.»\nAccount bloccati: 1 (@jacopo.m, dal 2 novembre)."},
   {id:"s1",g:"Feed",title:"@martina.conti",sub:"Leo compie 6 anni!",meta:"Post · 2 nov",body:"«Leo compie 6 anni! Grazie alla zia Gio per il dinosauro.»\nBio del profilo: «Mamma di Leo. Sorella maggiore di professione.»"},
   {id:"s2",g:"Feed",title:"@luca.bandini",sub:"Cinque anni insieme",meta:"Post · 9 nov",body:"«Cinque anni insieme. La mia roccia.»\n61 mi piace. Giorgia non ha messo mi piace."},
   {id:"s3",g:"Feed",title:"@filippo.galli",sub:"Meno 30!",meta:"Post · 13 nov",body:"«Meno 30 al sì. Le partecipazioni le fa la collega più brava del mondo.»"},
   {id:"s4",g:"Messaggi privati",title:"@jacopo.m",sub:"Conversazione bloccata",meta:"2 nov",body:"lui: «Ho visto che non metti più foto con lui.»\nlui: «Se torni single, sai dove trovarmi.»\nlui: «Dai, rispondi.»\nlui: «Sempre la solita.»\nHai bloccato questo account il 2 novembre."},
   {id:"s5",g:"Messaggi privati",title:"@dario.b",sub:"Locandina festa",meta:"18 nov",body:"lui: «Mi fai tu la locandina per il 6? "+"Trentadue e non sentirli"+".»\nNessuna risposta."}],
  drive:[
   {id:"d1",title:"Partecipazioni_Filippo_Marta_def.pdf",sub:"PDF",meta:"18 novembre",body:"Partecipazioni di nozze, prova n. 3 approvata.\nCliente: Filippo Galli. Compenso: 180 €."},
   {id:"d2",title:"Busta paga ottobre.pdf",sub:"PDF",meta:"Inviata a Casa Arno Immobiliare",body:"Documento condiviso il 14 novembre con: Casa Arno Immobiliare."},
   {id:"d3",title:"Elenco scatoloni",sub:"Foglio",meta:"16 novembre",body:"Libri: 5. Vestiti: 4. Studio: 3. Cucina: 2.\nLa scrivania è mia. Il divano resta a lui."}],
  tel:[
   {id:"t1",title:"Marti",sub:"mer 23:20 · in uscita, 24 min"},
   {id:"t2",title:"Andrea",sub:"mer 17:50 · in entrata, 1 min"},
   {id:"t3",title:"Sig. Sarti",sub:"mer 20:25 · in entrata, 2 min"},
   {id:"t4",title:"Tommi",sub:"lun 17:25 · in entrata, 3 min"},
   {id:"t5",title:"Luca",sub:"mer 13:05 · persa"}]
 },
 photos:[
  {id:"p1",t:"sab 12:40",title:"Stanza",sc:"room"},
  {id:"p2",t:"dom 16:10",title:"In cantina",sc:"boxes"},
  {id:"p3",t:"mar 19:30",title:"Prova n. 3",sc:"inv"},
  {id:"p4",t:"2021",title:"Con Luca",sc:"old"},
  {id:"h1",t:"mer 19:02",title:"Mie",sc:"keys",lock:"album"},
  {id:"h2",t:"mer 18:50",title:"Firmato",sc:"contract",lock:"album"}],
 pins:{note:"2911",album:"0612"},lockName:{note:"Nota protetta",album:"Album privato"},
 qs:[
  {q:"In agenda c'è «Da Andrea, ore 18». Qual è il cognome di Andrea?",any:["rossi"],show:"Rossi",hint:"Andrea le ha scritto anche per posta elettronica, e lì firma per esteso.",news:"Andrea Rossi firma «Dott.ssa». È una donna."},
  {q:"Che lavoro fa la dott.ssa Andrea Rossi?",any:["immobiliar","agente"],show:"Agente immobiliare",hint:"Guarda la firma in fondo alla sua mail.",news:"Luca cercava un rivale e ha trovato un'agenzia. Resta da capire che cosa cerca Giorgia."},
  {q:"Giorgia ha visitato tre case. In quale quartiere si trova quella che ha scelto?",any:["frediano"],show:"San Frediano",hint:"Nell'app degli annunci una delle tre ha uno stato diverso dalle altre.",news:"Un monolocale in Via dell'Orto, dall'altra parte dell'Arno rispetto a casa."},
  {q:"Per quante persone ha impostato la ricerca?",a:["1","una","uno","una persona","1 persona","una sola","solo lei","da sola","sola"],show:"Una persona",hint:"La ricerca salvata ha dei filtri.",news:"Una persona sola, e un contratto intestato soltanto a lei. Luca non è nei piani."},
  {q:"Quanti euro ha versato in tutto alla firma del contratto?",a:["2340","2.340","2340,00","2.340,00","2340 euro","2.340 euro","2340€","2.340 €"],show:"2.340 €: tre mensilità da 780",hint:"La mail dell'agenzia dice quante mensilità, l'annuncio dice quanto vale una.",news:"Il «da Andrea» di mercoledì era la firma. Il Sig. Sarti è il proprietario e ha già incassato."},
  {q:"Da dove sono usciti quei soldi? Quanti euro restano sul conto personale dopo quel pagamento?",a:["240","240,00","240 euro","240€","240,00 €"],show:"240 €",hint:"Somma tutte le entrate del conto aperto il 3 novembre e togli il bonifico.",news:"Un conto aperto di nascosto tre settimane fa, riempito in fretta e svuotato in un giorno."},
  {q:"Chi è Tommi? Per quale giorno del mese è fissato il suo lavoro?",all:["29"],show:"Sabato 29 novembre, alle 9",hint:"Tommaso ha mandato un preventivo.",news:"Tommaso Neri fa traslochi. «Non lo saprà nessuno» lo dice a tutti i clienti che glielo chiedono."},
  {q:"Che cosa porta via? Quanti scatoloni ha dichiarato?",a:["14","quattordici","14 scatoloni","quattordici scatoloni"],show:"14 scatoloni e una scrivania",hint:"È scritto nel preventivo, e torna con un elenco nel Drive.",news:"Solo le sue cose, nessun mobile. Il divano resta a lui."},
  {q:"Perché proprio quel sabato? In quale città sarà Luca il 29?",any:["livorno"],show:"A Livorno",hint:"Glielo ha scritto lui stesso.",news:"Ha scelto l'unico fine settimana in cui Luca è via. Lui torna domenica sera in una casa mezza vuota."},
  {q:"Nelle note c'è scritto «dirlo prima a M.». Chi è M.? Scrivi il nome intero e chi è per Giorgia.",all:["martina","sorella"],show:"Martina, la sorella",hint:"Il contatto è abbreviato. Il nome intero e la parentela sono su Scatto.",news:"Ora che sai con chi parlava, hai recuperato la conversazione svuotata: è in Messaggi, nella chat con Marti.",unlock:"sis"},
  {q:"La domanda di Luca l'ha già fatta Martina. In quale mese Giorgia le ha detto per la prima volta di volerlo lasciare?",any:["ottobre"],show:"A ottobre",hint:"I messaggi recuperati hanno una data.",news:"«Non c'è nessuno. È che non lo amo più.» Lo ha scritto a chi non aveva motivo di ingannare."},
  {q:"Controlliamo comunque gli altri. Che cosa sta preparando Giorgia per Filippo?",any:["partecipazion","invit"],show:"Le partecipazioni di nozze",hint:"C'è un file nel Drive e un pagamento in entrata.",news:"Filippo si sposa il 13 dicembre con Marta. Il «tesoro» è una grafica che lavora gratis fino a mezzanotte."},
  {q:"E «Leo ❤»? Quanti anni ha?",a:["6","sei","6 anni","sei anni"],show:"Sei anni",hint:"Sua madre ha pubblicato un post.",news:"Leo è il nipote, figlio di Martina. Il cuore è meritato."},
  {q:"Jacopo le ha scritto quattro volte. Che cosa ha fatto Giorgia al suo account?",any:["blocc"],show:"Lo ha bloccato",hint:"Lo dice il suo profilo, e una mail di Scatto.",news:"Jacopo aspettava che tornasse single. È stato bloccato il 2 novembre."},
  {q:"Dario le chiede di non dire niente a Luca. Che cosa sta organizzando per il 6 dicembre?",any:["festa","sorpresa","compleanno"],show:"La festa a sorpresa per Luca",hint:"Leggi la chat fino in fondo.",news:"Dario è il migliore amico di Luca. Giorgia gli ha risposto che il 6 forse non ci sarà, e ora sai perché."},
  {q:"Nell'album privato c'è il contratto. Per quanti anni ha firmato?",a:["4","quattro","4 anni","quattro anni"],show:"Quattro anni",hint:"Il codice dell'album è una data. La nota «Da fare» dice quale, il calendario dice il numero.",news:"Quattro anni, unica intestataria. Non è una fuga di qualche settimana."},
  {q:"La nota «Per L.» è protetta. Qual è l'ultima parola della lettera?",any:["perdonami"],show:"«Perdonami.»",hint:"Il codice è fatto di due numeri: il giorno del trasloco e il civico della casa nuova.",news:"La lettera c'è già. Manca il coraggio di consegnarla."},
  {q:"Andrea, Tommaso, Filippo, il Sig. Sarti, Jacopo, Leo, Dario. Chi è l'amante di Giorgia? Se nessuno, scrivi NESSUNO.",any:["nessun"],show:"Nessuno",hint:"Ognuno dei sette ha una spiegazione. Una l'ha scritta lei stessa alla sorella.",news:"Sette nomi, sette spiegazioni. Non c'è un altro uomo."},
  {q:"Allora che cosa nasconde Giorgia a Luca?",o:[["a","Una storia con un collega"],["b","Ha deciso di lasciarlo e ha già una casa sua"],["c","Un debito con la banca"],["d","Un lavoro in un'altra città"]],a:"b",show:"Ha deciso di lasciarlo e ha già una casa sua",hint:"Metti insieme il contratto, il trasloco e la lettera.",news:"Ora resta solo il verdetto."},
  {q:"Il verdetto per Luca.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un'altra persona, ma c'è un segreto grande.",news:""}],
 win:{title:"Giorgia non tradisce Luca. Sta per lasciarlo.",
  steps:["Andrea è la dott.ssa Andrea Rossi, agente immobiliare. Mercoledì alle 18 Giorgia ha firmato per un monolocale in San Frediano: quattro anni, intestato solo a lei.","Ha aperto un conto personale il 3 novembre e ha versato 2.340 € al proprietario, il Sig. Sarti.","Tommi è Tommaso Neri, traslochi: sabato 29, mentre Luca è a Livorno, porta via 14 scatoloni e una scrivania.","Alla sorella Martina lo ha detto a ottobre: «Non c'è nessuno. È che non lo amo più.»","Filippo si sposa con Marta, Leo è il nipote di sei anni, Jacopo è bloccato e Dario sta organizzando il compleanno di Luca."],
  end:"Luca resta a lungo sulla lettera che non ha mai ricevuto. «Avrei preferito un altro», dice piano. «Con un altro almeno avrei saputo con chi prendermela.»"}
};
LIB.tune(3,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.casa.find(x=>x.id==="a1").lock="ann";
 e.pins={album:"0612",ann:"0850",note:"1104"};
 e.locks={album:{hint:"Il compleanno di lui."},ann:{name:"Annuncio protetto",hint:"Il budget massimo che mi ero data, con lo zero."},note:{hint:"Il civico della casa nuova, poi gli anni del contratto, con lo zero."}};
 e.spots=[
  {id:"s1",x:84,y:184,label:"Via dell'Orto",title:"Via dell'Orto 11",sub:"San Frediano",body:"Un portone verde, secondo piano. Sul citofono c'è già un nome scritto a matita: «Conti»."},
  {id:"s2",x:168,y:176,label:"Santo Spirito",title:"Ufficio al piano terra",sub:"Santo Spirito",body:"Nessuna insegna sulla porta. Dentro, una scrivania e due sedie."},
  {id:"s3",x:334,y:76,label:"Casa",title:"Casa di Via Masaccio",sub:"Campo di Marte",body:"Il contratto d'affitto è a nome di due persone."}];
 LIB.hints(e,["Un appuntamento in agenda, e una mail.","Che cosa fa chi l'aspetta?","Il telefono si ricorda dove si è fermato più a lungo.","Come ha impostato la ricerca?","Somma quello che è uscito alla firma.","Un conto nuovo, solo suo.","Un lavoro fissato per un sabato preciso.","Ha fatto una lista.","Perché proprio quel giorno?","Un'iniziale in una nota da fare.","La sorella ha già fatto la domanda.","Un lavoro per un cliente amico.","Un cuore accanto a un nome.","Un pretendente insistente.","Un amico organizza qualcosa.","Il contratto è nascosto.","Una lettera chiusa.","Ripassa chi sono tutti.","Che cosa nasconde, allora?","Il verdetto."]);
});
})();
