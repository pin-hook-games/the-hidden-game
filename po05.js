(function(){
/* Intrighi 5: La variante (Borgoverde, comune inventato). Soluzione: il consigliere di opposizione Ugo Mauri.
   Ha saputo dei lotti in commissione riservata e li ha fatti comprare alla suocera, poi ha votato contro per non dare nell'occhio. */
const SC={
 pra:()=>LIB.obj("#cfe3c9","🌾","Prato Lungo, i quattro lotti"),
 vis:()=>LIB.doc("Visure · lotti A - D","#55606b",["Acquirente: Cattaneo Ines","Rogito: 12 settembre","Prezzo: 60.000 € in tutto","Destinazione allora: agricola"]),
 aug:()=>LIB.two("#f3e3e8","#7a3b5a","#777","Post di Marisa Mauri · «Auguri mamma Ines, 81!»"),
 com:()=>LIB.group(5,"Commissione urbanistica · 5 settembre","#33658a"),
 pag:()=>LIB.doc("Visura · pagamento","#a02822",["Bonifico per il rogito","Conto cointestato:","Cattaneo Ines e Mauri Marisa","12 settembre, 60.000 €"]),
 let:()=>LIB.doc("Lettera all'ufficio tecnico","#2f6b4f",["Chiedo che il mio terreno","(lotto E, ereditato nel 1987)","resti escluso dalla variante","P. Fontana, 5 settembre"])
};
const MAP=LIB.prov([[180,120,"#33658a","municipio",9,-12],[232,150,"#d43d55","Prato Lungo, lotti A - D",-60,26],[250,138,"#56666e","lotto E",9,-6]]);

LIB.add(65,["La variante","Lisa Ferrante indaga su chi ha comprato i terreni prima della variante","Borgoverde"],{
 map:MAP,scenes:SC,owner:"Piero Fontana",time:"14:30",date:"mer 12 nov",homeDate:"mercoledì 12 novembre",
 appIds:"msg tel mail gal map cal note social",
 late:"Piero ha bisogno del telefono per il consiglio comunale delle tre. Lisa deve restituirglielo.",
 brief:"La giornalista Lisa Ferrante ti ha portato il telefono di Piero Fontana, 55 anni, consigliere di maggioranza a Borgoverde. Qualcuno ha comprato quattro terreni agricoli un mese prima che il consiglio li rendesse edificabili. Piero gliel'ha prestato per un'ora: dice che dentro c'è tutto quello che sa.",
 quote:"«Ho ricevuto una soffiata anonima che indica proprio lui: ha un campo che confina con quei lotti. Piero giura di essere pulito e mi ha dato il telefono per dimostrarlo. Io voglio un nome, non un bersaglio comodo. Mi aiuti a capire chi sapeva prima.»",
 chats:[
  {id:"lisa",name:"Lisa Ferrante",sub:"",m:[
   ["mar 18:00",0,"Consigliere, mi è arrivata una soffiata: dice che dietro i terreni di Prato Lungo c'è lei."],
   ["mar 18:10",1,"Venga domani e le do il mio telefono per un'ora. Guardi tutto."]]},
  {id:"mauri",name:"Ugo Mauri",sub:"Opposizione",m:[
   ["5 set 20:00",0,"Piero, quello che ci siamo detti oggi in commissione resta tra noi, eh. Nemmeno a casa."],
   ["5 set 20:05",1,"Certo. È riservato apposta."],
   ["",2,"2 messaggi eliminati il 13 ottobre."],
   ["13 ott 22:10",0,"Domani in aula voto contro la variante. Non prenderla sul personale: per noi è una questione di immagine.","mau"],
   ["13 ott 22:12",0,"Faccio il discorso sul cemento, quello funziona sempre.","mau"]]},
  {id:"arch",name:"Arch. Rizzi",sub:"Ufficio tecnico",m:[
   ["5 set 18:30",0,"Consigliere, ricevuta la sua lettera: il lotto E resta fuori dalla variante come chiede. Le confesso che è il primo che chiede di non guadagnarci."],
   ["5 set 18:35",1,"Era il campo di mio nonno. Ci voglio piantare gli ulivi, non i palazzi."]]},
  {id:"galli",name:"Sandra Galli",sub:"Commissione",m:[
   ["dom 11:00",0,"Piero, mi hanno chiesto della commissione del 5 settembre. Io dopo quel giorno sono partita per l'Argentina da mia figlia, sono tornata a ottobre. Non ho detto niente a nessuno, giuro."]]},
  {id:"rizzo",name:"Tullio Rizzo",sub:"Commissione",m:[
   ["dom 12:00",0,"Fontana, io quella mappa non l'ho nemmeno capita. A ottantatré anni la commissione la faccio per abitudine. E i soldi li ho tutti in Posta, puoi controllare."]]}
 ],
 lists:{
  social:[
   {id:"s1",g:"Feed",title:"@marisa.mauri",sub:"Auguri mamma Ines!",meta:"Post · 2 ottobre",body:"«Auguri mamma Ines, 81 anni e ancora più in gamba di noi!»\nNella foto: Marisa, il marito Ugo Mauri e la signora Ines Cattaneo."},
   {id:"s2",g:"Feed",title:"@ugomauri_consigliere",sub:"Il discorso sul cemento",meta:"Post · 14 ottobre",body:"«Stasera ho votato contro la variante di Prato Lungo. Borgoverde non è in vendita.»"}],
  mail:[
   {id:"m1",title:"Consiglio comunale",sub:"Esito della votazione",meta:"14 ottobre",body:"Variante di Prato Lungo: approvata.\nLotti A, B, C e D passano da agricoli a edificabili. Il lotto E resta agricolo.\nContrari: 4, tra cui il consigliere Mauri."},
   {id:"m2",title:"Commissione urbanistica",sub:"Verbale riservato",meta:"5 settembre",body:"Seduta riservata del 5 settembre.\nPresenti: Fontana, Mauri, Galli, Rizzo e l'arch. Rizzi.\nIllustrata la mappa dei lotti da rendere edificabili. Il contenuto non è pubblico fino al voto."},
   {id:"m3",title:"Soffiata anonima inoltrata da Lisa",sub:"«Cercate Fontana»",meta:"martedì",body:"«Dietro i terreni di Prato Lungo c'è il consigliere Fontana: il suo campo confina.»\nInviata da un indirizzo creato il giorno stesso."}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Prato Lungo, lotti A - D",sub:"Edificabili dal 14 ottobre",body:"Quattro lotti, circa 6 ettari."},
   {id:"g2",g:"Luoghi salvati",title:"Lotto E",sub:"Agricolo",body:"Terreno di famiglia Fontana dal 1987. Escluso dalla variante."}],
  cal:[
   {id:"c1",g:"Settembre",title:"5 set · Commissione urbanistica",sub:"16:00",body:"Riservata."},
   {id:"c2",g:"Ottobre",title:"14 ott · Consiglio comunale",sub:"18:00",body:"Voto variante."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese dei rogiti, quattro cifre.\nNota sotto: il giorno e il mese della commissione riservata, quattro cifre."},
   {id:"n2",title:"Prato Lungo",lock:"note",body:"Sette giorni dopo la commissione qualcuno ha comprato tutto.\nIn quella stanza eravamo in cinque. Galli era partita, Rizzo non ha capito la mappa, l'architetto è un funzionario serio.\nResta uno. E vota sempre contro."}],
  tel:[
   {id:"t1",title:"Ugo Mauri",sub:"mar 18:20 · persa"},
   {id:"t2",title:"Arch. Rizzi",sub:"5 set · in uscita, 4 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Prato Lungo",sc:"pra"},
  {id:"p2",t:"ott",title:"Visure",sc:"vis"},
  {id:"p3",t:"2 ott",title:"Salvato da Scatto",sc:"aug"},
  {id:"p4",t:"5 set",title:"Commissione",sc:"com"},
  {id:"h1",t:"ott",title:"Il pagamento",sc:"pag",lock:"album"},
  {id:"h2",t:"5 set",title:"La mia lettera",sc:"let",lock:"album"}],
 pins:{note:"0509",album:"1209"},
 events:[{id:"a",q:3,kind:"call",from:"Ugo Mauri",lines:["«Piero? Ah, mi scusi, è la giornalista. Mi hanno detto che ha il telefono di Fontana.»","«Le do un consiglio da amico: guardi il suo campo, quello che confina con i lotti. Non perda tempo con il resto.»","«Pronto?»"]},
         {id:"b",q:10,kind:"sms",from:"Numero sconosciuto",text:"Sono Ines Cattaneo, ho saputo che fate domande. Io di terreni non so niente. Ha fatto tutto mio genero, io ho solo firmato dal notaio dove mi diceva lui."}],
 qs:[
  {t:"4",q:"Quanti lotti sono diventati edificabili con la variante?",a:["4","quattro","4 lotti","quattro lotti"],show:"Quattro, dalla A alla D",hint:"Esito della votazione nella Mail.",news:"Circa sei ettari a Prato Lungo. Il lotto E è rimasto agricolo."},
  {t:"14 ottobre",q:"In quale giorno è stata approvata la variante?",all:["14","ott"],show:"Il 14 ottobre",hint:"Stessa mail, e Calendario.",news:"Da quella sera i terreni valgono molte volte tanto."},
  {t:"12 settembre",q:"Quando sono stati comprati i quattro lotti? Giorno e mese.",all:["12","sett"],show:"Il 12 settembre",hint:"Le visure sono in Galleria.",news:"Trentadue giorni prima del voto, a prezzo da terreno agricolo."},
  {t:"60000",q:"Quanto è stato pagato in tutto?",a:["60000","60.000","60000 euro","60.000 euro","60.000 €","60mila"],show:"60.000 €",hint:"Stesse visure.",news:"Come campi. Adesso sono aree da costruire."},
  {t:"Ines Cattaneo",q:"A chi sono intestati i lotti? Nome e cognome.",all:["ines","cattaneo"],show:"A Ines Cattaneo",hint:"Visure.",news:"Una pensionata. Che cosa ci fa una signora con sei ettari da costruire?"},
  {t:"81",q:"Quanti anni ha Ines Cattaneo?",a:["81","ottantuno","81 anni"],show:"81",hint:"C'è un post di auguri su Scatto.",news:"Il post è di sua figlia, Marisa."},
  {t:"Ugo Mauri",q:"Nella foto degli auguri c'è anche il marito di Marisa. Chi è? Nome e cognome.",all:["ugo","mauri"],show:"Ugo Mauri, il consigliere di opposizione",hint:"Leggi la descrizione del post.",news:"Ines è la suocera di Mauri. Ora che lo sai, hai recuperato i due messaggi che Mauri ha mandato a Piero e poi cancellato.",unlock:"mau"},
  {t:"5 settembre",q:"In quale giorno la commissione riservata ha visto la mappa dei lotti?",all:["5","sett"],show:"Il 5 settembre",hint:"Verbale nella Mail e Calendario.",news:"Sette giorni prima dei rogiti. In quella stanza erano in cinque, e Mauri c'era."},
  {t:"contro",q:"Come ha votato Mauri in consiglio?",any:["contro","contrar"],a:["no"],show:"Contro",hint:"Esito della votazione e post di Mauri.",news:"«Non prenderla sul personale: per noi è una questione di immagine.» Il voto contrario era la copertura."},
  {t:"Argentina",q:"La commissaria Sandra Galli: dove si trovava dopo il 5 settembre?",any:["argentina"],show:"In Argentina, dalla figlia",hint:"Messaggio di domenica.",news:"Tornata a ottobre. Il commissario Rizzo, ottantatré anni, tiene i soldi alla Posta e dice di non aver capito la mappa."},
  {t:"Piero",q:"Chi ha chiesto di escludere il lotto E dalla variante?",any:["piero","fontana","luistesso","sestesso"],show:"Piero stesso",hint:"Chat con l'arch. Rizzi.",news:"Il campo del nonno, dal 1987: lo ha voluto lasciare agricolo. La soffiata contro di lui arriva da un indirizzo nato il giorno stesso."},
  {t:"Marisa",q:"Nell'album privato c'è la visura del pagamento. Con chi è cointestato il conto da cui sono partiti i soldi?",any:["marisa"],show:"Con Marisa Mauri",hint:"Il codice dell'album è la data dei rogiti, giorno e mese.",news:"I soldi non sono della suocera. Sono della famiglia Mauri."},
  {t:"cinque",q:"Nella nota protetta Piero conta quante persone c'erano nella stanza della commissione. Quante?",a:["5","cinque","in cinque","5 persone","cinque persone"],show:"Cinque",hint:"Il codice è la data della commissione, giorno e mese.",news:"«Resta uno. E vota sempre contro.»"},
  {t:"m",q:"Chi ha comprato i terreni sapendo della variante?",o:[["p","Piero Fontana, il consigliere"],["m","Ugo Mauri, tramite la suocera"],["i","Ines Cattaneo, da sola"],["g","Sandra Galli"],["r","Tullio Rizzo"],["a","L'arch. Rizzi"],["c","Nessuno: è una coincidenza"]],a:"m",show:"Ugo Mauri, tramite la suocera",hint:"Chi sapeva il 5, pagava il 12 e votava contro il 14?",news:""}],
 win:{title:"I terreni li ha comprati Ugo Mauri, a nome della suocera.",
  steps:["Il 5 settembre la commissione riservata ha visto la mappa dei lotti da rendere edificabili. Mauri era presente.","Il 12 settembre i lotti A - D sono stati comprati per 60.000 € a nome di Ines Cattaneo, 81 anni, sua suocera.","I soldi sono partiti da un conto cointestato con Marisa Mauri, la moglie.","Il 14 ottobre Mauri ha votato contro la variante «per immagine», e poi ha fatto arrivare una soffiata contro Fontana.","Piero aveva chiesto di escludere il suo campo. Galli era in Argentina, Rizzo non aveva capito la mappa."],
  end:"Lisa riconsegna il telefono a Piero cinque minuti prima del consiglio. «Il pezzo esce venerdì», dice. «Con il nome giusto.» Si tiene una copia della visura del pagamento. In un quaderno, accanto a «Mauri», scrive anche un altro nome che ha visto girare in queste settimane: Arrighi."}
});
LIB.tune(65,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m2").lock="com";
 e.pins={album:"1209",com:"0604",note:"6005"};
 e.locks={album:{hint:"Quando qualcuno ha comprato tutto."},com:{name:"Mail protetta",hint:"Gli ettari della variante, poi i lotti, con gli zeri."},note:{hint:"Le migliaia pagate, poi il giorno della stanza chiusa."}};
 e.spots=[
  {id:"s1",x:204,y:142,label:"Prato Lungo",title:"Prato Lungo, lotti A-D",sub:"Edificabili da ottobre",body:"Quattro lotti, circa 6 ettari. Fino a settembre erano campi di grano."},
  {id:"s2",x:222,y:158,label:"Lotto E",title:"Lotto E",sub:"Famiglia Fontana dal 1987",body:"L'unico rimasto agricolo, su richiesta del proprietario."},
  {id:"s3",x:162,y:104,label:"Studio notarile",title:"Studio notarile",sub:"Borgoverde",body:"Recensione: «A settembre una signora anziana è venuta a firmare con il genero. Parlava lui, firmava lei.»"}];
 LIB.hints(e,["Il consiglio ha votato e scritto l'esito.","…e la data.","Qualcuno ha comprato i lotti prima: le visure lo dicono.","Stesse visure: quanto?","A chi sono intestati?","Una festa di compleanno, in pubblico.","Chi c'è nella foto, oltre alla festeggiata?","La commissione riservata ha un verbale, chiuso.","Come ha votato, e come l'ha raccontato?","Una commissaria era lontana.","Un architetto ha ricevuto una richiesta.","Il conto da cui sono partiti i soldi è nascosto.","Piero ha contato le persone in quella stanza.","Chi sapeva, chi pagava, chi votava contro?"]);
});
})();
