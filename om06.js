(function(){
/* Omicidi 6: Diretta interrotta (Milano). Soluzione: il manager Fabrizio. Tratteneva 2.250 € al mese dallo sponsor e Niko stava per portare i contratti a un commercialista. */
const SC={
 set:()=>LIB.obj("#231a2e","🎮","La postazione, venerdì 20:55"),
 mum:()=>LIB.two("#8fb3c9","#7a3b5a","#2f6b4f","Con mamma, laurea mancata ma felice"),
 cup:()=>LIB.obj("#f0d9a0","🏆","Torneo di primavera, primo posto"),
 hate:()=>LIB.shot("xX_Reaper",["Ti trovo e ti spengo la diretta","Sei finito Niko"]),
 can:()=>LIB.obj("#1c1c20","🥫","«Per il campione. F.» · 20:31"),
 con:()=>LIB.doc("ThunderCan · contratto","#a02822",["Creator: Niko","Compenso: 6.000 € al mese","Pagato a: agenzia F. Riva","Inviato da Giada, giovedì"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Milano",
 water:[["M70 226Q110 200 150 176",7],["M150 176V250",7]],
 parks:[`<ellipse cx="120" cy="100" rx="26" ry="16" fill="#d7e2c9"/>`],
 roads:["M160 60A70 70 0 1 1 159 60","M160 130L40 50","M160 130H340","M160 130V20","M160 130L230 240","M160 130L60 220"],
 labels:[[172,126,"Duomo"],[170,28,"Centrale"],[86,96,"Sempione"],[90,212,"Navigli"],[236,236,"Porta Romana"],[262,120,"Città Studi"],[250,60,"Isola"]],
 pins:[[280,140,"#d43d55","casa di Niko",-76,-8],[100,196,"#56666e","pub di Tommy",9,-8]]});

LIB.add(26,["Diretta interrotta","La madre di Niko vuole sapere che cosa è successo in diretta","Milano"],{
 map:MAP,scenes:SC,owner:"Niko Ferri",time:"09:30",date:"lun 17 nov",homeDate:"lunedì 17 novembre",
 appIds:"msg tel mail gal map cal note bank",extraApps:[["live","Stream","photo_camera","#a47bff,#5a3fd0"]],
 late:"La polizia postale è passata a ritirare il telefono. La madre di Niko ha dovuto consegnarlo.",
 brief:"La madre ti ha portato il telefono di Niko Ferri, 24 anni, streamer. Venerdì sera è crollato davanti a quattromila spettatori ed è morto in ambulanza. Nella lattina che stava bevendo c'era una sostanza che non doveva esserci.",
 quote:"«Lo hanno visto tutti cadere dalla sedia. C'è un utente che lo minacciava da mesi, e su di lui stanno indagando. Ma Niko quella sera era nervoso per altro: mi aveva detto «mamma, sabato sistemo una cosa di soldi». Sabato non è arrivato.»",
 chats:[
  {id:"mamma",name:"Mamma",sub:"",m:[
   ["ven 18:10",1,"Mamma sabato sistemo una cosa di soldi e poi ti porto a pranzo fuori."],
   ["ven 18:12",0,"Che cosa di soldi? Mi fai preoccupare."],
   ["ven 18:13",1,"Niente di grave. Ho solo capito una cosa."]]},
  {id:"fab",name:"Fabrizio",sub:"Manager",m:[
   ["ven 17:00",0,"A che ora vai live stasera?"],
   ["ven 17:02",1,"Alle 21 come sempre."],
   ["ven 17:05",0,"Passo prima a portarti una cosa dallo sponsor. Edizione speciale, la apri in diretta."],
   ["",2,"3 messaggi eliminati giovedì notte."],
   ["gio 23:40",0,"Chi ti ha mandato quel contratto?","fab"],
   ["gio 23:42",1,"Lo sponsor. Sono 6.000, non 3.750. Sabato porto tutto a un commercialista.","fab"],
   ["gio 23:45",0,"Non andare da nessuno. Sono quattordici mesi che ti faccio da fratello maggiore. Domani passo e ne parliamo io e te.","fab"]]},
  {id:"giada",name:"Giada ThunderCan",sub:"",m:[
   ["gio 16:00",0,"Ciao Niko, ecco la copia del contratto che mi hai chiesto. Come sai sono 6.000 al mese, bonificati alla tua agenzia."],
   ["gio 16:10",1,"All'agenzia. Certo. Grazie Giada."],
   ["sab 09:00",0,"Abbiamo saputo. Siamo sconvolti. Una cosa per chi indaga: noi venerdì non abbiamo mandato nessuna lattina. L'edizione nera esce a gennaio e non esiste ancora in magazzino."]]},
  {id:"tommy",name:"Tommy",sub:"Coinquilino",m:[
   ["ven 17:30",0,"Bro l'affitto te lo do lunedì, giuro. Stasera sono al pub fino alle 2, non aspettarmi."],
   ["ven 17:31",1,"Lunedì, Tommy. È il terzo mese."]]},
  {id:"sara",name:"Sara",sub:"",m:[
   ["mer 22:00",0,"Ho visto la tua live da Barcellona. Sei migliorato da quando non stiamo più insieme, mi dà quasi fastidio."],
   ["mer 22:05",1,"Torna dall'Erasmus e te lo dico in faccia."]]},
  {id:"vyper",name:"Vyper",sub:"",m:[
   ["ven 12:00",0,"Stasera mentre tu fai il fenomeno io sono a Colonia a vincere il torneo vero."],
   ["ven 12:05",1,"Portami una calamita."]]},
  {id:"pini",name:"Dott. Pini",sub:"",m:[
   ["gio 18:00",1,"Buonasera dottore, mi serve un controllo su due contratti che non coincidono. Posso passare sabato?"],
   ["gio 18:20",0,"Sabato alle 10 in studio. Porti entrambe le copie e gli estratti conto."]]}
 ],
 lists:{
  live:[
   {id:"x1",g:"Ultima diretta",title:"Venerdì sera",sub:"Inizio 21:00 · interrotta alle 21:47",meta:"4.112 spettatori",body:"Inizio alle 21:00.\nAlle 21:20 Niko apre in diretta una lattina nera: «regalo dello sponsor».\nAlle 21:47 la diretta si interrompe."},
   {id:"x2",g:"Moderazione",title:"Utente xX_Reaper",sub:"Account sospeso",meta:"Segnalazioni: 11",body:"Risposta della piattaforma alla segnalazione di Niko: «L'account appartiene a un minore di 14 anni residente a Lecce. È stato sospeso e i genitori sono stati avvisati.»"}],
  mail:[
   {id:"m1",title:"Agenzia F. Riva",sub:"Rendiconto mensile",meta:"1 novembre",body:"Compenso sponsor ThunderCan come da contratto: 3.750 €.\nCommissione agenzia 20%: 750 €.\nNetto a Niko: 3.000 €.\nMensilità pagate finora: 14."},
   {id:"m2",title:"ThunderCan",sub:"Calendario uscite",meta:"ottobre",body:"Edizione nera: lancio a gennaio. Nessun campione disponibile prima di dicembre."}],
  map:[
   {id:"g1",g:"Venerdì",title:"Casa, Città Studi",sub:"Tutto il giorno",meta:"Permanenza",body:"Il telefono non ha lasciato casa. Il citofono intelligente registra un ingresso alle 20:30 e un'uscita alle 20:38: «Fabrizio»."}],
  bank:[
   {id:"b1",g:"Entrate",title:"Agenzia F. Riva, netto sponsor",sub:"1 nov · + 3.000,00 €"},
   {id:"b2",g:"Entrate",title:"Agenzia F. Riva, netto sponsor",sub:"1 ott · + 3.000,00 €"},
   {id:"b3",g:"Uscite",title:"Affitto, quota di Tommy anticipata",sub:"5 nov · − 450,00 €"}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Ven · Live",sub:"21:00",body:""},
   {id:"c2",g:"Questa settimana",title:"Sab · Dott. Pini",sub:"10:00",body:"Due contratti. Estratti conto."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui si è interrotta l'ultima diretta, quattro cifre.\nNota sotto: gli anni dell'utente che mi minaccia e i mesi di contratto, attaccati."},
   {id:"n2",title:"Conti",lock:"note",body:"Lo sponsor paga 6.000. Fabrizio mi ha sempre mostrato 3.750.\nSono 2.250 al mese che non ho mai visto.\nMi ha trovato lui quando avevo duecento spettatori. Per questo fa così male."}],
  tel:[
   {id:"t1",title:"Fabrizio",sub:"gio 23:50 · in entrata, 14 min"},
   {id:"t2",title:"Dott. Pini",sub:"gio 17:55 · in uscita, 3 min"}]
 },
 photos:[
  {id:"p1",t:"ven 20:55",title:"Pronti",sc:"set"},
  {id:"p2",t:"giu",title:"Mamma",sc:"mum"},
  {id:"p3",t:"apr",title:"Coppa",sc:"cup"},
  {id:"p4",t:"ott",title:"Il solito",sc:"hate"},
  {id:"h1",t:"ven 20:31",title:"Da Fabri",sc:"can",lock:"album"},
  {id:"h2",t:"gio 16:05",title:"Quello vero",sc:"con",lock:"album"}],
 pins:{note:"1414",album:"2147"},
 events:[{id:"a",q:4,kind:"call",from:"Fabrizio",lines:["«Signora, sono Fabrizio. Come sta?»","«Senta, nel telefono di Niko ci sono contratti e cose dell'agenzia. Li gestisco io, non si preoccupi: me lo porti e sistemo tutto.»","«Signora?»"]},
         {id:"b",q:9,kind:"sms",from:"Dott. Pini",text:"Signora, sono il commercialista. Suo figlio sabato doveva portarmi due contratti. Se li trova, li tenga lei e nessun altro."}],
 qs:[
  {t:"21:47",q:"A che ora si è interrotta la diretta di venerdì?",all:["2147"],show:"Alle 21:47",hint:"Apri l'app Stream.",news:"Quarantasette minuti dopo l'inizio, ventisette dopo aver aperto una lattina nera."},
  {t:"14",q:"L'utente che lo minacciava si chiama xX_Reaper. Quanti anni ha?",a:["14","quattordici","14 anni"],show:"14 anni",hint:"La piattaforma ha risposto alla segnalazione di Niko.",news:"Un ragazzino di Lecce, sospeso e segnalato ai genitori. Fa paura solo per iscritto."},
  {t:"le 2",q:"Il coinquilino Tommy gli deve tre mesi di affitto. Fino a che ora lavorava venerdì?",a:["2","le 2","alle 2","02:00","2:00","le due","due"],show:"Fino alle 2, al pub",hint:"Lo scrive lui.",news:"Era dietro un bancone ai Navigli. Nome da togliere."},
  {t:"Barcellona",q:"La ex, Sara: da quale città gli scrive?",any:["barcellona","barcelona"],show:"Da Barcellona",hint:"Messaggio di mercoledì.",news:"In Erasmus. E il rivale Vyper era a Colonia per un torneo."},
  {t:"Fabrizio",q:"Chi è entrato in casa di Niko mezz'ora prima della diretta?",any:["fabrizio","manager"],show:"Fabrizio, il manager",hint:"Mappe riporta il citofono.",news:"Dalle 20:30 alle 20:38. Otto minuti, per portare «una cosa dallo sponsor»."},
  {t:"gennaio",q:"Lo sponsor ha scritto sabato. In quale mese esce davvero la lattina nera?",any:["gennaio"],show:"A gennaio",hint:"Messaggio di Giada e mail del calendario uscite.",news:"Venerdì quella lattina non esisteva in nessun magazzino. Qualcuno l'ha preparata. Ora che lo sai, hai recuperato i tre messaggi eliminati nella chat con Fabrizio.",unlock:"fab"},
  {t:"6000",q:"Quanto paga davvero lo sponsor ogni mese?",a:["6000","6.000","6000 euro","6.000 euro","6.000 €"],show:"6.000 €",hint:"Lo scrive Giada giovedì.",news:"Bonificati all'agenzia, non a Niko."},
  {t:"3750",q:"E quale cifra riporta il rendiconto dell'agenzia?",a:["3750","3.750","3750 euro","3.750 euro","3.750 €"],show:"3.750 €",hint:"C'è una mail con il rendiconto mensile.",news:"Su quella cifra Fabrizio si prendeva anche il 20% di commissione."},
  {t:"31500",q:"Quanti euro non sono mai arrivati a Niko in tutte le mensilità pagate finora?",a:["31500","31.500","31500 euro","31.500 euro","31.500 €"],show:"31.500 €",hint:"La differenza mensile per il numero di mensilità indicato nel rendiconto.",news:"Duemiladuecentocinquanta euro al mese, per quattordici mesi."},
  {t:"sabato",q:"In quale giorno Niko doveva portare i due contratti al commercialista?",any:["sabato"],show:"Sabato alle 10",hint:"Chat con il dott. Pini e Calendario.",news:"«Sabato sistemo una cosa di soldi.» Fabrizio lo ha saputo giovedì notte."},
  {t:"domani",q:"Nei messaggi recuperati, quando dice Fabrizio che sarebbe passato?",any:["domani","venerd"],show:"«Domani passo»: cioè venerdì",hint:"Ultimo messaggio recuperato.",news:"«Non andare da nessuno.» E il giorno dopo è passato davvero, con una lattina."},
  {t:"F",q:"Nell'album privato c'è la foto della lattina. Con quale lettera è firmato il biglietto?",a:["f","f."],show:"«F.»",hint:"Il codice dell'album è l'ora in cui si è interrotta la diretta.",news:"«Per il campione. F.» Niko l'ha fotografata alle 20:31, appena ricevuta."},
  {t:"2250",q:"Nella nota protetta Niko fa i conti. Di quanti euro al mese parla?",a:["2250","2.250","2250 euro","2.250 euro","2.250 €"],show:"2.250 € al mese",hint:"Il codice: gli anni dell'utente che lo minacciava e i mesi di contratto, attaccati.",news:"«Mi ha trovato lui quando avevo duecento spettatori. Per questo fa così male.»"},
  {t:"f",q:"Chi è stato?",o:[["r","xX_Reaper, l'utente che lo minacciava"],["f","Fabrizio, il manager"],["t","Tommy, il coinquilino"],["s","Sara, la ex"],["v","Vyper, il rivale"],["g","Giada, dello sponsor"],["n","Nessuno: è stato un malore"]],a:"f",show:"Fabrizio, il manager",hint:"Chi ha portato la lattina e aveva tutto da perdere sabato?",news:""}],
 win:{title:"È stato Fabrizio, il manager.",
  steps:["Lo sponsor pagava 6.000 € al mese. Fabrizio ne dichiarava 3.750 e tratteneva la differenza: 31.500 € in quattordici mesi.","Giovedì Niko ha ricevuto il contratto vero e ha fissato un appuntamento con un commercialista per sabato.","Giovedì notte Fabrizio gli ha scritto «non andare da nessuno, domani passo».","Venerdì alle 20:30 è entrato in casa con una lattina «dello sponsor» che lo sponsor non ha mai prodotto.","L'utente che lo minacciava ha 14 anni e vive a Lecce. Tommy era al pub, Sara a Barcellona, Vyper a Colonia."],
  end:"La madre guarda la foto della lattina con il biglietto. «Per il campione», legge. «Veniva a cena da noi a Natale.» Stringe il telefono. «I due contratti li porto io al dottor Pini. E poi in questura.»"}
});
LIB.tune(26,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="age";
 e.pins={album:"2147",age:"2100",note:"6020"};
 e.locks={album:{hint:"Il minuto in cui la diretta si è spenta."},age:{name:"Mail protetta",hint:"L'ora in cui la diretta è cominciata."},note:{hint:"Le centinaia vere dello sponsor, poi la percentuale dell'agenzia."}};
 e.spots=[
  {id:"s1",x:280,y:140,label:"Casa di Niko",title:"Casa di Niko",sub:"Città Studi",body:"Il citofono intelligente registra nome e ora di chi entra con il codice."},
  {id:"s2",x:100,y:196,label:"Pub di Tommy",title:"Pub dove lavora Tommy",sub:"Chiude alle 2 · ★ 4,2",body:"Recensione: «Il barista riccio non si ferma un attimo, dalle sette alle due.»"},
  {id:"s3",x:190,y:100,label:"Dott. Pini",title:"Studio del dott. Pini",sub:"Commercialista",body:"Sabato mattina Niko aveva appuntamento qui, con due contratti."}];
 LIB.hints(e,["La piattaforma sa quando si è interrotta.","La piattaforma ha risposto su quell'utente.","Il coinquilino ha un turno lungo.","La ex scrive da lontano.","Il citofono si ricorda chi entra.","Lo sponsor ha scritto sabato.","Quanto paga davvero lo sponsor?","Il rendiconto dell'agenzia è chiuso.","Fai il conto dei mesi.","Un appuntamento in calendario.","Messaggi recuperati.","La foto della lattina è nascosta.","Niko ha fatto i conti.","Chi era in casa prima della diretta, e chi ci perdeva?"]);
});
})();
