(function(){
/* ---------------- episodio 5: L'account segreto (Verona) ----------------
   Soluzione: Non tradisce. Il secondo profilo, @linea.storta, è dove Elisa pubblica in anonimo le sue illustrazioni.
   Il giovedì frequenta un corso serale, e un editore le ha proposto un albo. Aspetta i mille follower per dirlo a Nicola. */
const SC={
 fox:()=>LIB.art("fox"),
 trip:()=>LIB.group(7,"Gita con la 2B · Lago di Garda","#6fa3c7"),
 desk:()=>LIB.desk(),
 lake:()=>LIB.two("#6fa3c7","#7a3b5a","#2f6b4f","Con Nicola, agosto"),
 nic:()=>LIB.art("portrait"),
 cover:()=>LIB.art("cover")
};
const MAP=LIB.map({name:"Mappa stilizzata di Verona",
 water:[["M0 70Q70 30 120 70Q150 110 200 96Q250 40 300 90Q330 150 270 190Q230 230 260 260",13]],
 parks:[`<ellipse cx="350" cy="60" rx="44" ry="30" fill="#d7e2c9"/>`],
 roads:["M30 150H230","M60 110V240","M130 120V240","M190 120V230","M20 200H210","M300 110H400","M330 90V240","M290 200H400"],
 extra:`<ellipse cx="150" cy="170" rx="20" ry="13" fill="none" stroke="#b0764a" stroke-width="5"/><rect x="196" y="126" width="14" height="14" rx="3" fill="#b0764a"/>`,
 labels:[[126,198,"Arena"],[176,120,"Piazza Erbe"],[40,104,"San Zeno"],[110,36,"Borgo Trento"],[306,136,"Veronetta"],[340,224,"Borgo Venezia"],[232,150,"Adige"],[324,50,"Colline"],[70,232,"Porta Nuova"]],
 pins:[[150,44,"#33658a","Casa",9,4],[360,206,"#33658a","Scuola",-44,-8],[318,152,"#d43d55","giovedì 17-19",9,4],[204,150,"#56666e","sab 10:30",-52,16]]});

EPISODES[5]={
 n:5,timer:1800,map:MAP,scenes:SC,owner:"Elisa Marchi",time:"09:05",date:"ven 21 nov",homeDate:"venerdì 21 novembre",
 brief:"Nicola ti ha portato il telefono della moglie Elisa, 36 anni, insegnante di lettere in una scuola media di Verona. Lei è in classe fino alle due e stamattina ha dimenticato il telefono sul mobile dell'ingresso.",
 quote:"«Ha un secondo profilo, con un nome inventato. Centinaia di messaggi privati, quasi tutti da uomini. Uno le scrive ogni sera. Il giovedì sparisce dalle cinque alle sette e dice che è il doposcuola, ma il doposcuola finisce alle cinque. E sabato ha un appuntamento con un certo S. Mi dica lei che cosa devo pensare.»",
 apps:[["msg","Messaggi","forum","linear-gradient(160deg,#58d5c9,#1f8fd1)"],["tel","Telefono","call","linear-gradient(160deg,#6fd47a,#1f9a4d)"],["mail","Mail","mail","linear-gradient(160deg,#5aa9ff,#2563d8)"],["web","Browser","public","linear-gradient(160deg,#8fd3ff,#3b82c4)"],
  ["gal","Galleria","photo_library","linear-gradient(160deg,#ffb86b,#e0527a)"],["map","Mappe","map","linear-gradient(160deg,#7fd08a,#2f8f9d)"],["cal","Calendario","calendar_month","linear-gradient(160deg,#ff7b6b,#d93a3a)"],["note","Note","sticky_note_2","linear-gradient(160deg,#ffd76a,#f0a020)"],
  ["social","Scatto","photo_camera","linear-gradient(160deg,#a47bff,#5a3fd0)"],["bank","Banca","account_balance","linear-gradient(160deg,#4a5d7a,#1f2c44)"],["tav","Tavola","brush","linear-gradient(160deg,#ff9a8b,#c0417a)"],["drive","Drive","folder","linear-gradient(160deg,#f6c453,#d98a1f)"]],
 names:{msg:"Messaggi",tel:"Telefono",mail:"Mail",web:"Browser",gal:"Galleria",map:"Mappe",cal:"Calendario",note:"Note",social:"Scatto",bank:"Banca",tav:"Tavola",drive:"Drive"},
 chats:[
  {id:"nicola",name:"Nicola",sub:"Marito",m:[
   ["mer 21:50",0,"Chi ti scrive sempre a quest'ora?"],
   ["mer 21:52",1,"Nessuno. Notifiche."],
   ["gio 16:40",0,"Fai tardi anche oggi?"],
   ["gio 16:45",1,"Sì, doposcuola. Per le sette e mezza sono a casa."],
   ["gio 16:46",0,"Va bene."]]},
  {id:"bertani",name:"Bertani",sub:"",m:[
   ["gio 08:10",0,"Oggi al doposcuola ti copro io anche stavolta. Sei a quota quattro: mi devi una cena 😄"],
   ["gio 08:15",1,"Sei un santo. La cena è promessa."],
   ["gio 08:16",0,"Porto Carla, così finalmente vi conoscete. E tu porta Nicola."]]},
  {id:"samuele",name:"Samuele",sub:"",m:[
   ["mer 18:05",0,"Buonasera Elisa, sono Samuele. Allora sabato: la prima volta meglio di persona, come d'accordo."],
   ["mer 18:20",1,"Va bene. A casa non lo sa ancora nessuno, la prego di non chiamare."],
   ["mer 18:22",0,"Massima discrezione. Porti i disegni."]]},
  {id:"piero",name:"Piero",sub:"",m:[
   ["mar 17:10",0,"Prof, i pennini giapponesi arrivano martedì prossimo. Le tengo da parte anche la carta da 300 grammi?"],
   ["mar 17:25",1,"Sì grazie Piero. Passo dopo scuola."],
   ["mar 17:26",0,"L'aspetto. Per lei il negozio resta aperto anche oltre l'orario."]]},
  {id:"dade",name:"Dade",sub:"",m:[
   ["gio 22:05",0,"Allora, a quanto siamo?"],
   ["gio 22:06",1,"964."],
   ["gio 22:07",0,"Dai che ci sei. E poi glielo dici?"],
   ["gio 22:08",1,"A mille. Promesso."],
   ["gio 22:10",0,"Sorellina, secondo me Nicola sarebbe solo fiero. Il tablet intanto te lo tengo io."]]},
  {id:"doc",name:"Docenti 2B",sub:"Gruppo",m:[
   ["gio 13:02",0,"Preside: Ricordo il consiglio di classe di martedì 25 alle 15."],
   ["gio 13:10",0,"Bertani: Presente. Marchi, porti tu i tabelloni?"],
   ["gio 13:12",1,"Li porto io."]]}
 ],
 lists:{
  social:[
   {id:"s0",g:"Profilo 1",title:"@elisa.marchi",sub:"212 follower · 87 post",body:"Bio: «Insegno lettere. Verona.»\nUltimo post: la gita con la 2B."},
   {id:"s1",g:"Profilo 2",title:"@linea.storta",sub:"964 follower · 143 post",body:"Bio: «Disegno storto, di sera. Obiettivo: mille. Poi lo dico a tutti.»\nNessun nome, nessuna foto del volto.\nProfilo creato il 14 febbraio.\nMessaggi privati ricevuti: 318."},
   {id:"s2",g:"Messaggi di @linea.storta",title:"@ombra_blu",sub:"Rispondimi almeno stasera",meta:"Ogni sera",body:"ven 14 · lui: «Buonanotte, artista misteriosa.»\nsab 15 · lui: «Chi sei davvero?»\ndom 16 · lui: «Ti penso quando disegni.»\ndom 16 · lei: «Grazie, gentile. Rispondo solo ai messaggi di lavoro.»\nlun 17 · lui: «Fredda. Mi piace.»\nmar 18 · lui: «Verona, vero? Si capisce dai ponti.»\nmer 19 · lui: «Un caffè e sparisco.»\ngio 20 · lui: «Rispondimi almeno stasera.»\nConversazione silenziata da lunedì 17."},
   {id:"s3",g:"Messaggi di @linea.storta",title:"@marco.inchiostro",sub:"Facciamo qualcosa insieme?",meta:"12 nov",body:"lui: «Facciamo una fanzine a quattro mani? Io i testi, tu i disegni. Venti pagine, cento copie.»\nlei: «Volentieri, ma dopo Natale. Prima devo parlarne con una persona.»\nlui: «Capito. Ti aspetto.»"},
   {id:"s4",g:"Messaggi di @linea.storta",title:"@theo_reads",sub:"5 messaggi",meta:"Segnalato",body:"lui: «Sei una donna, vero?»\nlui: «Mandami una foto tua, non un disegno.»\nlui: «Perché non rispondi?»\nlui: «Maleducata.»\nlui: «Ti trovo lo stesso.»\nNessuna risposta. Account segnalato il 9 novembre."},
   {id:"s5",g:"Messaggi di @linea.storta",title:"Richieste nascoste",sub:"3 richieste",meta:"Da aprire",body:"3 richieste di messaggio da un account che non segui.\nPer aprirle bisogna sapere chi le manda."},
   {id:"e1",g:"Richieste recuperate · @edizioni.adige",u:"ed",title:"Samuele Corsi · 3 nov",sub:"Vorremmo proporle un albo",body:"«Buongiorno, sono Samuele Corsi di Edizioni Adige. Seguiamo il suo profilo da mesi: vorremmo proporle un albo illustrato tutto suo.»"},
   {id:"e2",g:"Richieste recuperate · @edizioni.adige",u:"ed",title:"Samuele Corsi · 10 nov",sub:"Capisco la riservatezza",body:"«Capisco la riservatezza. Per questo la prima volta preferiamo vederci di persona, senza agenti di mezzo.»"},
   {id:"e3",g:"Richieste recuperate · @edizioni.adige",u:"ed",title:"Samuele Corsi · 17 nov",sub:"Sabato in Piazza Erbe",body:"«Sabato 22 alle 10:30 al caffè sotto i portici di Piazza Erbe. Ci saremo io e la direttrice, Paola Zeni.»"}],
  mail:[
   {id:"m1",title:"Bottega del Segno",sub:"Iscrizione confermata",meta:"29 settembre",body:"Corso serale di illustrazione, da ottobre a maggio.\nOgni giovedì dalle 17 alle 19, in Veronetta.\nQuota mensile: 80,00 €."},
   {id:"m2",title:"Colori del Borgo",sub:"Il suo ordine",meta:"18 novembre",body:"Pennini giapponesi, confezione da 10: in arrivo martedì 25.\nCarta da 300 grammi: disponibile.\nPiero"},
   {id:"m3",title:"Samuele Corsi",sub:"Bozza di accordo",meta:"19 novembre",body:"Gentile Elisa,\nin allegato la bozza di accordo. Ne parliamo sabato con calma.\nSamuele Corsi, editor\nEdizioni Adige, Verona"},
   {id:"m4",title:"Scatto",sub:"@linea.storta cresce",meta:"16 novembre",body:"Il tuo profilo @linea.storta ha superato i 950 follower.\nIl tuo post più salvato: «N., il mio preferito»."},
   {id:"m5",title:"Segreteria scolastica",sub:"Doposcuola del giovedì",meta:"14 novembre",body:"Doposcuola del giovedì, dalle 16 alle 17.\nIl prof. Bertani sostituisce la prof.ssa Marchi su sua richiesta."}],
  map:[
   {id:"g1",g:"Cronologia · giovedì 20",title:"Scuola, Borgo Venezia",sub:"07:50 - 15:55",meta:"Permanenza",body:"A scuola fino alle 15:55."},
   {id:"g2",g:"Cronologia · giovedì 20",title:"Veronetta, una bottega al piano terra",sub:"17:02 - 19:05",meta:"Permanenza",body:"Arrivo alle 17:02, uscita alle 19:05.\nLo stesso indirizzo compare ogni giovedì da ottobre."},
   {id:"g3",g:"Cronologia · giovedì 20",title:"Casa, Borgo Trento",sub:"19:28",meta:"Arrivo",body:"Rientro a casa alle 19:28."},
   {id:"g4",g:"Luoghi salvati",title:"Colori del Borgo",sub:"Cartoleria e belle arti",meta:"Salvato",body:"Negozio di belle arti vicino a scuola."},
   {id:"g5",g:"Luoghi salvati",title:"Caffè in Piazza Erbe",sub:"Sabato",meta:"Salvato",body:"Salvato mercoledì 19."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Colori del Borgo",sub:"18 nov · − 64,90 €"},
   {id:"b2",g:"Novembre",title:"Colori del Borgo",sub:"12 nov · − 22,00 €"},
   {id:"b3",g:"Novembre",title:"Stipendio",sub:"10 nov · + 1.640,00 €"},
   {id:"b4",g:"Novembre",title:"Colori del Borgo",sub:"4 nov · − 38,50 €"},
   {id:"b5",g:"Novembre",title:"Bottega del Segno, quota di novembre",sub:"3 nov · − 80,00 €"},
   {id:"b6",g:"Ottobre",title:"Colori del Borgo",sub:"21 ott · − 41,00 €"},
   {id:"b7",g:"Ottobre",title:"Bottega del Segno, quota di ottobre",sub:"1 ott · − 80,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ogni giovedì · B.d.S.",sub:"17:00 - 19:00",body:"Evento ricorrente, da ottobre.\nPromemoria: non dirlo in sala professori."},
   {id:"c2",g:"Novembre",title:"Sab 22 · S.",sub:"10:30",body:"Piazza Erbe. Portare la cartella."},
   {id:"c3",g:"Novembre",title:"Mar 25 · Consiglio di classe",sub:"15:00",body:"Portare i tabelloni. Poi da Piero."},
   {id:"c4",g:"Dicembre",title:"Sab 6 · Cena da Bertani",sub:"20:00",body:"Con Carla e Nicola."}],
  web:[
   {id:"w1",g:"Cronologia",title:"contratto albo illustrato esordienti",sub:"mer 22:40"},
   {id:"w2",g:"Cronologia",title:"come dire a mio marito un segreto bello",sub:"mer 22:10"},
   {id:"w3",g:"Cronologia",title:"silenziare una conversazione su scatto",sub:"lun 21:30"},
   {id:"w4",g:"Cronologia",title:"segnalare un utente molesto",sub:"9 nov"},
   {id:"w5",g:"Cronologia",title:"paura di essere presi in giro per un hobby",sub:"2 nov"}],
  note:[
   {id:"n1",title:"Promemoria",body:"Tabelloni per il 25.\nAlbum delle bozze: il giorno in cui ho aperto il profilo, giorno e mese.\nLa nota qui sotto: quanti ne mancano a mille, scritto due volte."},
   {id:"n2",title:"Per quando arrivo a mille",lock:"note",body:"Dirlo a Nicola quando arrivo a mille follower.\nFargli vedere per primo il suo ritratto.\nNon gliel'ho detto perché ho paura che rida, come quella volta dei quadri a casa di sua madre.\nSe ride anche stavolta, pazienza. Ma preferirei di no."}],
  tav:[
   {id:"v1",g:"Lavori recenti",title:"Volpe storta, versione 3",sub:"Modificato gio 19:40",body:"Pubblicato su @linea.storta: 412 mi piace."},
   {id:"v2",g:"Lavori recenti",title:"Ritratto N.",sub:"Modificato dom 16:20",body:"Il più salvato del profilo: 212 salvataggi.\nL'originale è nell'album delle bozze."},
   {id:"v3",g:"Lavori recenti",title:"Prova di copertina",sub:"Modificato mer 23:15",body:"File preparato per sabato."},
   {id:"v4",g:"Dispositivi",title:"Tavoletta grafica",sub:"Ultima sincronizzazione: casa di Davide",body:"La tavoletta si collega da un indirizzo diverso da casa."}],
  drive:[
   {id:"d1",title:"Registro 2B",sub:"Foglio",meta:"Aggiornato gio",body:"Verifiche di novembre e assenze."},
   {id:"d2",title:"Orario docenti",sub:"PDF",meta:"Settembre",body:"Prof.ssa Marchi: giovedì lezioni fino alle 16, poi doposcuola 16 - 17."},
   {id:"d3",title:"Cartella per sabato",sub:"Cartella",meta:"12 file",body:"Dodici tavole scelte e una prova di copertina."}],
  tel:[
   {id:"t1",title:"Dade",sub:"gio 22:00 · in entrata, 3 min"},
   {id:"t2",title:"Nicola",sub:"gio 19:10 · persa"},
   {id:"t3",title:"Bottega del Segno",sub:"mar 12:30 · in entrata, 1 min"},
   {id:"t4",title:"Colori del Borgo",sub:"mar 17:05 · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"gio 19:40",title:"Volpe",sc:"fox"},
  {id:"p2",t:"ott",title:"Gita",sc:"trip"},
  {id:"p3",t:"dom 15:10",title:"Tavolo",sc:"desk"},
  {id:"p4",t:"ago",title:"Al lago",sc:"lake"},
  {id:"h1",t:"dom 16:20",title:"Nicola, domenica sul divano",sc:"nic",lock:"album"},
  {id:"h2",t:"mer 23:15",title:"Copertina",sc:"cover",lock:"album"}],
 pins:{note:"3636",album:"1402"},lockName:{note:"Nota protetta",album:"Album delle bozze"},
 qs:[
  {q:"Il secondo profilo esiste. Quanti follower ha?",a:["964","964 follower"],show:"964",hint:"In Scatto ci sono due profili. Guarda il secondo.",news:"Si chiama @linea.storta, non ha nome né volto, e ha ricevuto 318 messaggi privati. Nicola ha visto giusto, fin qui."},
  {q:"Che cosa pubblica Elisa su quel profilo? Scrivi una parola.",any:["illustrazion","disegn"],show:"Le sue illustrazioni",hint:"Leggi la bio, poi apri la Galleria e l'app Tavola.",news:"Disegni firmati con un nome inventato. Resta da capire se sono davvero suoi, e chi sono tutti quegli uomini."},
  {q:"Se disegna, compra materiale. Quanti euro ha speso a novembre da Colori del Borgo?",a:["125,40","125.40","125,4","125,40 euro","125,40€","125,40 €"],show:"125,40 €",hint:"In Banca ci sono tre pagamenti a novembre. Quello di ottobre non conta.",news:"Tre acquisti in un mese in un negozio di belle arti. I disegni sono suoi."},
  {q:"Piero le tiene aperto il negozio «oltre l'orario». Che cosa aspetta Elisa da lui martedì?",any:["pennin"],show:"I pennini giapponesi",hint:"Lo dice lui in chat e lo conferma una mail del negozio.",news:"Piero è il negoziante, ed è gentile con la sua cliente migliore. Primo nome da togliere."},
  {q:"@ombra_blu le scrive ogni sera. Quante volte gli ha risposto Elisa nell'ultima settimana?",a:["1","una","una volta","1 volta","una sola","una sola volta"],show:"Una volta sola",hint:"Conta le righe che cominciano con «lei».",news:"«Rispondo solo ai messaggi di lavoro.» Sette messaggi di lui, una risposta fredda di lei."},
  {q:"E dopo quella risposta? Che cosa ha fatto Elisa alla conversazione con @ombra_blu?",any:["silenzi","mut"],show:"L'ha silenziata",hint:"È scritto in fondo alla conversazione, e c'è una ricerca nel Browser dello stesso giorno.",news:"L'ammiratore della sera parla da solo da lunedì. Secondo nome da togliere."},
  {q:"Passiamo al giovedì. In quale quartiere si trova Elisa dalle 17 alle 19?",any:["veronetta"],show:"In Veronetta",hint:"Mappe conserva la cronologia di ieri.",news:"Una bottega al piano terra, ogni giovedì da ottobre. Il doposcuola finisce alle 17 e si fa a scuola."},
  {q:"Che cosa frequenta in quella bottega? Scrivi di che cosa si tratta.",any:["corso","illustrazion"],show:"Un corso serale di illustrazione",hint:"C'è una mail di iscrizione e una quota mensile in Banca.",news:"Bottega del Segno, 80 € al mese. Non è un uomo: è una scuola."},
  {q:"Bertani dice che lei gli deve una cena. Quante volte l'ha coperta al doposcuola?",a:["4","quattro","4 volte","quattro volte"],show:"Quattro",hint:"Lo scrive lui stesso.",news:"Il collega la sostituisce per lasciarla andare al corso. Alla cena porterà la moglie Carla, e vuole che venga anche Nicola."},
  {q:"Resta «S.», l'appuntamento di sabato. Per quale casa editrice lavora Samuele?",any:["adige"],show:"Edizioni Adige",hint:"Samuele le ha scritto anche per posta elettronica, con la firma completa.",news:"Un editor. Ora che sai chi è, hai aperto le 3 richieste nascoste su Scatto: sono in fondo ai messaggi di @linea.storta.",unlock:"ed"},
  {q:"Che cosa le ha proposto Edizioni Adige?",any:["albo","libro"],show:"Un albo illustrato tutto suo",hint:"Leggi la prima delle richieste recuperate.",news:"La seguono da mesi senza sapere chi sia. «Di persona» vuol dire senza agenti, non senza testimoni."},
  {q:"Chi altro ci sarà sabato in Piazza Erbe? Scrivi il cognome.",any:["zeni"],show:"La direttrice, Paola Zeni",hint:"È nell'ultima richiesta recuperata.",news:"Un caffè alle 10:30 con l'editor e la direttrice editoriale. Terzo e quarto nome da togliere."},
  {q:"@marco.inchiostro vuole fare qualcosa «a quattro mani». Che cosa?",any:["fanzine"],show:"Una fanzine",hint:"Apri la sua conversazione.",news:"Un altro illustratore. Elisa ha rimandato a dopo Natale: prima vuole parlarne «con una persona»."},
  {q:"@theo_reads è il più insistente. Che cosa ha fatto Elisa al suo account?",any:["segnal"],show:"Lo ha segnalato",hint:"Guarda l'ultima riga della conversazione.",news:"Cinque messaggi, nessuna risposta e una segnalazione. È il motivo per cui il profilo non ha né nome né volto."},
  {q:"Qualcuno conosce il segreto. Chi è Dade per Elisa?",any:["fratello"],show:"Suo fratello Davide",hint:"Guarda come la chiama lui, e dove si collega la tavoletta.",news:"Il fratello le tiene la tavoletta grafica a casa sua. È l'unico a sapere, e fa il tifo per Nicola."},
  {q:"Elisa si è data un traguardo. Quanti follower le mancano?",a:["36","trentasei","36 follower"],show:"36",hint:"Il traguardo è nella bio del profilo. Fai la sottrazione.",news:"Mille follower, poi lo dice a tutti. Ne mancano trentasei."},
  {q:"Nella nota protetta spiega perché non l'ha ancora detto a Nicola. Di che cosa ha paura? Che lui...",any:["rida","ride","ridere","giro","derid"],show:"Che rida di lei",hint:"Il codice è il numero che hai appena trovato, scritto due volte.",news:"C'è un precedente: dei quadri, a casa della suocera. Elisa non nasconde un uomo. Nasconde un talento a chi ha riso una volta."},
  {q:"Nell'album delle bozze c'è il disegno più salvato del profilo. Chi è ritratto?",any:["nicola","marito"],show:"Nicola, che dorme sul divano",hint:"Il codice dell'album è la data in cui ha aperto il profilo, giorno e mese.",news:"Il post più amato di @linea.storta si intitola «N., il mio preferito». Quasi mille sconosciuti hanno già visto Nicola dormire."},
  {q:"Piero, @ombra_blu, Bertani, Samuele, @marco.inchiostro, @theo_reads, Dade. Chi è l'amante di Elisa? Se nessuno, scrivi NESSUNO.",any:["nessun"],show:"Nessuno",hint:"Negoziante, ammiratore, collega, editor, illustratore, molestatore, fratello.",news:"Sette uomini e nessun amante."},
  {q:"Il verdetto per Nicola. Un segreto che non toglie nulla alla coppia non conta come «Nasconde altro».",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"n",show:"Non tradisce",hint:"Che cosa perde Nicola da questo segreto?",news:""}],
 win:{title:"Elisa non tradisce Nicola. Disegna.",
  steps:["@linea.storta è il profilo dove Elisa pubblica in anonimo le sue illustrazioni: 964 follower, e a mille lo dirà a tutti.","Il giovedì dalle 17 alle 19 frequenta un corso serale in Veronetta. Il collega Bertani la sostituisce al doposcuola.","«S.» è Samuele Corsi, editor di Edizioni Adige: sabato le propone un albo illustrato, insieme alla direttrice.","All'ammiratore della sera ha risposto una volta, poi lo ha silenziato. Il più insistente è stato segnalato.","Lo sa solo il fratello Davide. Il disegno più salvato del profilo è un ritratto di Nicola che dorme."],
  end:"Nicola guarda a lungo il proprio ritratto. «Dormo con la bocca aperta», dice. Poi apre Scatto dal suo telefono, cerca @linea.storta e preme Segui. «Novecentosessantacinque. Gliene mancano trentacinque.»"}
};
LIB.tune(5,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 const m3=e.lists.mail.find(x=>x.id==="m3");m3.lock="acc";m3.body+="\nAnticipo proposto: 1.800 €.";
 e.pins={album:"1402",acc:"1201",note:"5018"};
 e.locks={album:{hint:"Il giorno in cui è nato il mio secondo profilo."},acc:{name:"Mail protetta",hint:"Le tavole scelte per sabato, poi la copertina."},note:{hint:"Quanti ne mancano a mille, poi le centinaia dell'anticipo."}};
 e.spots=[
  {id:"s1",x:318,y:152,label:"Bottega del Segno",title:"Bottega del Segno",sub:"Veronetta · corsi serali",body:"Recensione: «Il corso di illustrazione del giovedì è il migliore della città. Gente che di giorno fa tutt'altro.»"},
  {id:"s2",x:340,y:190,label:"Colori del Borgo",title:"Colori del Borgo",sub:"Belle arti · ★ 4,9",body:"Recensione: «Piero chiude alle 19, ma per i clienti fissi tiene aperto. Pennini introvabili.»"},
  {id:"s3",x:204,y:150,label:"Caffè in Piazza Erbe",title:"Caffè in Piazza Erbe",sub:"★ 4,3",body:"Sabato alle 10:30 un tavolo prenotato a nome Corsi, Edizioni Adige."}];
 LIB.hints(e,["Un secondo profilo ha dei numeri.","Che cosa ci mette dentro?","I soldi raccontano un hobby.","Il negoziante è gentile, per un motivo preciso.","Un ammiratore notturno.","…e quello che lei ha fatto dopo.","Il telefono si ricorda dove va il giovedì.","Che cosa si fa in una bottega, la sera?","Un collega insiste per una cena.","Una lettera iniziale in agenda.","Una proposta di lavoro, chiusa a chiave.","Chi altro ci sarà?","Un collega disegnatore propone qualcosa.","Il più insistente ha avuto una risposta.","Qualcuno conosce il segreto.","Un traguardo in numeri.","Una nota chiusa spiega il perché.","Le bozze nascoste.","Ripassa chi sono tutti.","Il verdetto."]);
});
})();
