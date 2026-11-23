(function(){
/* episodio 8: Il compagno di liceo (Bergamo). Soluzione: Tradisce, con l'ex compagna Valentina Rota. Il convegno di Brescia non esiste. */
const SC={
 din:()=>LIB.group(7,"5ªB vent'anni dopo · 27 settembre"),
 gym:()=>LIB.obj("#dfe5ea","🏋️","Pacchetto 10 lezioni con Giada"),
 fam:()=>LIB.two("#8fb3c9","#7a3b5a","#1f3a66","Con Silvia, Città Alta"),
 prog:()=>LIB.doc("Convegno Ingegneria Sostenibile","#2f6b4f",["Brescia, 22 - 23 novembre","Sabato 9:30 apertura","Domenica 12:00 chiusura","File creato il 12 novembre"]),
 cls:()=>LIB.group(6,"5ªB · giugno 2005","#b0764a"),
 lake:()=>LIB.obj("#9cc7d6","🚤","Inviata e poi cancellata: «Il nostro lago»")
};
const MAP=LIB.map({name:"Mappa stilizzata di Bergamo e del lago d'Iseo",
 water:[["M330 40Q360 100 340 170Q330 220 350 260",22]],
 parks:[`<ellipse cx="110" cy="60" rx="70" ry="30" fill="#d7e2c9"/>`],
 roads:["M30 150H250","M120 90V240","M190 110V230","M60 200H240","M250 150L320 190"],
 extra:`<path d="M70 70Q110 40 150 70" fill="none" stroke="#b0764a" stroke-width="5"/><rect x="108" y="206" width="26" height="10" rx="2" fill="#7d756b"/>`,
 labels:[[84,58,"Città Alta"],[130,146,"Città Bassa"],[140,224,"Stazione"],[30,190,"Longuelo"],[200,104,"Redona"],[296,30,"Lago d'Iseo"],[270,206,"Sarnico"],[356,120,"Lovere"]],
 pins:[[60,170,"#33658a","Casa",9,-8],[170,170,"#33658a","Ufficio",9,16],[316,192,"#d43d55","22 - 23 nov",-74,-10]]});

EPISODES[8]={...LIB.apps("msg tel mail web gal map cal note social bank drive"),
 n:8,timer:1800,map:MAP,scenes:SC,owner:"Federico Locatelli",time:"06:50",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 brief:"Silvia ti ha portato il telefono del marito Federico, 38 anni, ingegnere a Bergamo. Lui è uscito a correre sui colli e rientra tra mezz'ora.",
 quote:"«A settembre c'è stata la cena dei vent'anni dal diploma. Da allora scrive ogni giorno a una ex compagna. Ho letto le prime settimane: solo ricordi di scuola, niente di male. Mi sono sentita stupida e ho smesso di leggere. Ma sabato parte per un convegno, e ha comprato una camicia nuova.»",
 chats:[
  {id:"silvia",name:"Silvia",sub:"Moglie",m:[
   ["mer 20:10",1,"Sabato e domenica ho il convegno a Brescia. Dormo là."],
   ["mer 20:12",0,"Di domenica? Con chi vai?"],
   ["mer 20:15",1,"Con Marika, la collega. Roba noiosa."]]},
  {id:"vale",name:"Vale 5B",sub:"",m:[
   ["29 set",0,"Ma ti ricordi la Gotti quando ti ha sequestrato il walkman?"],
   ["29 set",1,"Me lo ha ridato a giugno! Con la cassetta dentro."],
   ["8 ott",0,"Ho ritrovato la foto della gita a Praga."],
   ["8 ott",1,"Mandala nel gruppo, ridono tutti."],
   ["",2,"Da qui in poi 6 messaggi eliminati."],
   ["20 ott",0,"Posso dirti una cosa? In questi vent'anni mi sei mancato.","val"],
   ["20 ott",1,"Anche tu. Più di quanto dovrei dire.","val"],
   ["3 nov",1,"Sabato 22 andiamo al lago? Dico a casa che ho un convegno.","val"],
   ["3 nov",0,"Sei matto. Sì.","val"],
   ["12 nov",1,"Prenotato a Sarnico. Ho anche preparato un programma finto, nel caso.","val"],
   ["mer 23:40",0,"[foto eliminata] Il nostro lago. Tre giorni.","val"]]},
  {id:"gruppo",name:"5ªB vent'anni dopo",sub:"Gruppo",m:[
   ["28 set",0,"Chiara: Grazie a tutti! Eravamo in 19, un record."],
   ["28 set",0,"Chiara: Federico, mi devi ancora 35 euro della quota."],
   ["28 set",1,"Te li porto, promesso."],
   ["30 set",0,"Prof.ssa Gotti: Cari ragazzi, grazie dell'invito. Il latino non vi ha rovinati, vedo."]]},
  {id:"marika",name:"Marika",sub:"",m:[
   ["mar 10:00",0,"Lunedì consegniamo il progetto del ponte? Io nel fine settimana sono a Londra da mia sorella, non contare su di me."],
   ["mar 10:05",1,"Tranquilla, è quasi finito."]]},
  {id:"giada",name:"Giada",sub:"",m:[
   ["lun 18:00",0,"Fede domani alle 7 gambe! Ti restano 4 lezioni del pacchetto da 10."],
   ["lun 18:05",1,"Ci sono. Devo essere in forma per sabato."],
   ["lun 18:06",0,"Per il convegno? 😂"]]},
  {id:"sonia",name:"Sonia",sub:"",m:[
   ["dom 12:00",0,"Fratello, a Natale da me o da mamma? Porta Silvia, che non la vedo da mesi."],
   ["dom 12:10",1,"Da te. Ti faccio sapere."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Albergo La Darsena",sub:"Conferma di prenotazione",meta:"12 novembre",body:"Camera matrimoniale vista lago, 2 adulti.\nArrivo sabato 22, partenza domenica 23 novembre.\nSarnico, lago d'Iseo.\nCaparra versata: 70,00 €. Saldo all'arrivo: 110,00 €."},
   {id:"m2",title:"Ordine degli Ingegneri",sub:"Calendario eventi",meta:"3 novembre",body:"Eventi di novembre: giovedì 13 a Bergamo, giovedì 27 a Milano.\nNessun evento in programma nel fine settimana del 22 e 23 novembre."},
   {id:"m3",title:"Elisa, Albergo La Darsena",sub:"Richiesta speciale",meta:"13 novembre",body:"Gentile sig. Locatelli, confermo la bottiglia in camera all'arrivo e il tavolo per due alle 20:30.\nElisa, ricevimento"}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Albergo La Darsena, Sarnico",sub:"Salvato il 12 novembre",meta:"Salvato",body:"46 minuti in auto da casa."},
   {id:"g2",g:"Ricerche recenti",title:"Brescia, centro congressi",sub:"Nessuna ricerca",body:"Nessuna ricerca per Brescia in cronologia."}],
  bank:[
   {id:"b1",g:"Novembre",title:"Camiceria del Sentierone",sub:"18 nov · − 69,00 €"},
   {id:"b2",g:"Novembre",title:"Albergo La Darsena, caparra",sub:"12 nov · − 70,00 €"},
   {id:"b3",g:"Novembre",title:"Palestra, pacchetto 10 lezioni",sub:"3 nov · − 250,00 €"},
   {id:"b4",g:"Settembre",title:"Ristorante, quota cena di classe",sub:"27 set · − 10,00 €"}],
  cal:[
   {id:"c1",g:"Novembre",title:"Sab 22 - dom 23 · Convegno Brescia",sub:"Tutto il giorno",body:"Nessun invitato. Nessun link."},
   {id:"c2",g:"Novembre",title:"Lun 24 · Consegna ponte",sub:"09:00",body:"Con Marika."},
   {id:"c3",g:"Settembre",title:"Sab 27 · Cena 5ªB",sub:"20:30",body:"Vent'anni dal diploma."}],
  web:[
   {id:"w1",g:"Cronologia",title:"albergo romantico lago d'iseo",sub:"11 nov"},
   {id:"w2",g:"Cronologia",title:"modello programma convegno da compilare",sub:"12 nov"},
   {id:"w3",g:"Cronologia",title:"è tradimento se ci si conosce da vent'anni",sub:"4 nov"}],
  note:[
   {id:"n1",title:"Da fare",body:"35 euro a Chiara.\nAlbum privato: giorno e mese della cena di classe.\nLa nota qui sotto: il giorno di ottobre in cui è cambiato tutto, e poi in quanti eravamo alla cena."},
   {id:"n2",title:"Senza titolo",lock:"note",body:"Non so che cosa sto facendo.\nSilvia non se lo merita.\nSabato vado lo stesso."}],
  social:[
   {id:"s1",g:"Feed",title:"@vale.rota",sub:"Certe persone tornano",meta:"Post · 21 ott",body:"«Certe persone tornano quando non le aspetti più.»\nProfilo: Valentina Rota, Bergamo. «Separata, due gatti, 5ªB per sempre.»"},
   {id:"s2",g:"Feed",title:"@marika.ing",sub:"Londra sto arrivando",meta:"Post · mar",body:"«Fine settimana a Londra da mia sorella. Niente ponti per 48 ore.»"},
   {id:"s3",g:"Feed",title:"@chiara.5b",sub:"Le foto della cena",meta:"Post · 28 set",body:"«In 19 dopo vent'anni. La Gotti ci ha interrogati in latino al dolce.»"}],
  drive:[
   {id:"d1",title:"Programma_convegno_Brescia.pdf",sub:"PDF",meta:"Creato da te",body:"Convegno Ingegneria Sostenibile, Brescia, 22 - 23 novembre.\nAutore del file: Federico Locatelli.\nCreato il 12 novembre alle 23:10. Nessun logo, nessun contatto."},
   {id:"d2",title:"Ponte_relazione_finale.docx",sub:"Documento",meta:"Condiviso con Marika",body:"Consegna lunedì 24."}],
  tel:[
   {id:"t1",title:"Vale 5B",sub:"mer 23:10 · in uscita, 31 min"},
   {id:"t2",title:"Albergo La Darsena",sub:"13 nov · in uscita, 4 min"},
   {id:"t3",title:"Silvia",sub:"mer 13:00 · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"27 set",title:"La cena",sc:"din"},
  {id:"p2",t:"lun",title:"Palestra",sc:"gym"},
  {id:"p3",t:"mag",title:"Con Silvia",sc:"fam"},
  {id:"p4",t:"12 nov",title:"Programma",sc:"prog"},
  {id:"h1",t:"8 ott",title:"Da Vale",sc:"cls",lock:"album"},
  {id:"h2",t:"mer 23:40",title:"Recuperata",sc:"lake",lock:"album"}],
 pins:{note:"2019",album:"2709"},
 qs:[
  {t:"27",q:"Tutto parte dalla cena di classe. In quale giorno di settembre c'è stata?",all:["27"],show:"Sabato 27 settembre",hint:"È in calendario e nelle foto.",news:"Vent'anni dal diploma. Da quella sera Federico e una ex compagna non hanno più smesso di scriversi."},
  {t:"19",q:"In quanti erano a quella cena?",a:["19","diciannove","in 19"],show:"In 19",hint:"Lo scrive l'organizzatrice nel gruppo.",news:"Chiara ha organizzato tutto e aspetta ancora 35 euro. La professoressa Gotti insegnava latino. Due nomi da togliere subito."},
  {t:"Valentina Rota",q:"Chi è «Vale 5B»? Scrivi nome e cognome.",all:["valentina","rota"],show:"Valentina Rota",hint:"Il nome intero è sul suo profilo Scatto.",news:"Separata, vive a Bergamo. Ora che sai chi è, hai recuperato i 6 messaggi eliminati: la chat non finiva dove Silvia ha smesso di leggere.",unlock:"val"},
  {t:"20",q:"Fino all'8 ottobre parlano di scuola. In quale giorno di ottobre il tono cambia?",a:["20","il 20","20 ottobre","il 20 ottobre","lunedì 20","lunedì 20 ottobre"],show:"Il 20 ottobre",hint:"Leggi i messaggi recuperati in ordine di data.",news:"«Mi sei mancato.» Il giorno dopo lei pubblica: «Certe persone tornano quando non le aspetti più.»"},
  {t:"Sarnico",q:"Chi propone il lago è lui. In quale località ha prenotato?",any:["sarnico"],show:"A Sarnico, sul lago d'Iseo",hint:"C'è la conferma di un albergo.",news:"Albergo La Darsena, camera matrimoniale vista lago, con bottiglia in camera all'arrivo."},
  {t:"180",q:"Quanto costa in tutto la camera?",a:["180","180,00","180 euro","180€"],show:"180 €",hint:"Somma la caparra già versata e il saldo all'arrivo.",news:"Settanta li ha già pagati. Più una camicia nuova da 69."},
  {t:"Brescia",q:"A Silvia ha parlato di un convegno. In quale città dovrebbe essere?",any:["brescia"],show:"A Brescia",hint:"Glielo ha scritto mercoledì.",news:"Brescia è dalla stessa parte del lago. Una bugia comoda: la strada è quasi la stessa."},
  {t:"12",q:"Nel Drive c'è il programma del convegno. In quale giorno di novembre è stato creato il file?",all:["12"],show:"Il 12 novembre, alle 23:10",hint:"Guarda i dettagli del PDF.",news:"L'autore del file è Federico. Lo ha scritto lui, lo stesso giorno in cui ha prenotato l'albergo."},
  {t:"nessuno",q:"Quanti eventi ha in programma l'Ordine degli Ingegneri nel fine settimana del 22 e 23? Se nessuno, scrivi NESSUNO.",any:["nessun","zero"],a:["0"],show:"Nessuno",hint:"L'Ordine manda il calendario per posta elettronica.",news:"Il convegno non esiste."},
  {t:"Londra",q:"Ha detto che va con Marika. Dove sarà davvero Marika nel fine settimana?",any:["londra"],show:"A Londra, dalla sorella",hint:"Lo scrive lei, in chat e su Scatto.",news:"Marika è la collega del progetto del ponte, e non sa di essere un alibi."},
  {t:"4",q:"Giada lo vuole «in forma». Quante lezioni gli restano del pacchetto?",a:["4","quattro","4 lezioni"],show:"Quattro",hint:"Lo scrive lei.",news:"Giada è l'istruttrice della palestra. Ride del convegno senza sapere perché."},
  {t:"sorella",q:"E Sonia? Chi è per Federico?",any:["sorella"],show:"Sua sorella",hint:"Guarda come lo chiama.",news:"Sonia vuole Silvia a Natale. Elisa invece lavora al ricevimento dell'albergo: ha preparato il tavolo per due."},
  {t:"2005",q:"Nell'album privato c'è la foto che Valentina gli ha mandato. Quale anno c'è scritto?",a:["2005"],show:"2005",hint:"Il codice dell'album è la data della cena di classe, giorno e mese.",news:"La 5ªB a giugno del 2005. Nell'album c'è anche la foto che lei ha inviato e poi cancellato: «Il nostro lago»."},
  {t:"Silvia",q:"Nella nota protetta c'è una frase su qualcuno che «non se lo merita». Chi?",any:["silvia","moglie"],show:"Silvia",hint:"Il codice è fatto di due numeri: il giorno in cui il tono è cambiato e i presenti alla cena.",news:"«Sabato vado lo stesso.» Lo sa benissimo, che cosa sta facendo."},
  {t:"Valentina",q:"Valentina, Chiara, la prof.ssa Gotti, Marika, Giada, Sonia, Elisa. Chi è l'amante di Federico? Se nessuna, scrivi NESSUNA.",any:["valentina","vale","rota"],show:"Valentina Rota",hint:"Chi sarà con lui a Sarnico?",news:"Chi ha letto solo le prime settimane ha sbagliato verdetto."},
  {t:"t",q:"Il verdetto per Silvia.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"t",show:"Tradisce",hint:"C'è un'altra persona.",news:""}],
 win:{title:"Federico tradisce Silvia. Con Valentina Rota.",
  steps:["Fino all'8 ottobre la chat con «Vale 5B» parla solo di scuola. Dal 20 ottobre cambia tutto, e quei messaggi sono stati eliminati.","Il 3 novembre è lui a proporre il lago. Il 12 prenota una matrimoniale a Sarnico.","Lo stesso giorno scrive da solo il programma di un convegno a Brescia che l'Ordine non ha in calendario.","Marika, l'alibi, nel fine settimana è a Londra.","Chiara ha organizzato la cena, la Gotti insegnava latino, Giada è l'istruttrice, Sonia la sorella, Elisa il ricevimento dell'albergo."],
  end:"Silvia scorre la chat fino in fondo, stavolta. «Mi ero fermata all'8 ottobre», dice. «Dodici giorni troppo presto.» Poi chiede l'indirizzo dell'albergo di Sarnico."}
};
LIB.tune(8,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 const m1=e.lists.mail.find(x=>x.id==="m1");m1.lock="dar";m1.body+="\nCamera 18.";
 e.pins={album:"2709",dar:"2223",note:"0518"};
 e.locks={album:{hint:"Il giorno e il mese della cena di classe."},dar:{name:"Mail protetta",hint:"I giorni del convegno che non esiste."},note:{hint:"La fine dell'anno di quella foto, poi il numero della camera."}};
 e.spots=[
  {id:"s1",x:316,y:192,label:"La Darsena",title:"Albergo La Darsena",sub:"Sarnico · ★ 4,6",body:"Recensione: «Camere vista lago perfette per una fuga di coppia. Bottiglia di benvenuto su richiesta.»"},
  {id:"s2",x:170,y:170,label:"Ufficio",title:"Studio di ingegneria",sub:"",body:"Lunedì 24 consegna della relazione sul ponte, con Marika."},
  {id:"s3",x:60,y:170,label:"Casa",title:"Casa di Federico e Silvia",sub:"",body:"Sabato 22 Silvia sarà a casa da sola."}];
 LIB.hints(e,["Tutto parte da una cena di vecchi compagni.","Quanti erano?","Un soprannome di scuola.","Un giorno di ottobre cambia il tono.","Chi propone il lago?","Un albergo, chiuso a chiave.","A Silvia ha raccontato un viaggio di lavoro.","Il programma ha delle date.","L'Ordine degli Ingegneri pubblica gli eventi.","La collega sarà altrove.","Un pacchetto di lezioni.","Un nome affettuoso che non è quello che sembra.","Una vecchia foto nascosta.","Una frase in una nota chiusa.","Ripassa chi sono tutte.","Il verdetto."]);
});
})();
