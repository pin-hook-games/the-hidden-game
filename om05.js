(function(){
/* Omicidi 5: La badante (Padova). Soluzione: il nipote Carlo. Ha scambiato una compressa nel portapillole mentre Oksana era a fare la spesa. */
const SC={
 box1:()=>LIB.doc("Portapillole · lunedì sera","#2f6b4f",["Scomparto SERA","2 bianche rotonde","1 rosa rotonda","Foto delle 20:00"]),
 box2:()=>LIB.doc("Portapillole · mercoledì sera","#a02822",["Scomparto SERA","2 bianche rotonde","1 bianca allungata","Foto delle 20:00"]),
 lina:()=>LIB.two("#f0d9a0","#7a3b5a","#777","Con la signora Lina, Prato della Valle"),
 dau:()=>LIB.obj("#cfe0ea","🎓","Katia, primo anno a Leopoli"),
 rec:()=>LIB.doc("Supermercato · scontrino","#55606b",["Mercoledì ore 15:22","Latte, pane, mele, detersivo","Totale 18,40 €","Carta della sig.ra Lina"]),
 pha:()=>LIB.doc("Farmacia al Santo · ritiri","#33658a",["Martedì ore 17:40","Sonnifero, 30 compresse","Ritirato da: Carlo M.","Ricetta: non del dott. Rizzi"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Padova",
 water:[["M0 60Q120 40 200 70Q300 100 400 60",9],["M250 90Q270 160 240 260",7]],
 parks:[`<ellipse cx="170" cy="210" rx="34" ry="24" fill="#d7e2c9"/>`],
 roads:["M40 120H360","M100 30V240","M180 80V180","M300 100V240","M60 180H330"],
 labels:[[200,30,"Stazione"],[104,20,"Arcella"],[306,94,"Portello"],[190,112,"Centro"],[140,250,"Prato della Valle"],[190,150,"Il Santo"],[30,236,"Guizza"]],
 pins:[[130,160,"#d43d55","casa di Lina",9,-8],[210,170,"#56666e","farmacia",9,16],[90,200,"#56666e","supermercato",9,16]]});

LIB.add(25,["La badante","Il legale di Oksana vuole dimostrare che non è stata lei","Padova"],{
 map:MAP,scenes:SC,owner:"Oksana Kovalenko",time:"15:40",date:"lun 24 nov",homeDate:"lunedì 24 novembre",
 appIds:"msg tel mail gal map cal note bank",extraApps:[["farm","Farmacia","fitness_center","#4fb3a5,#22705f"],["rec","Registratore","mic","#e2574c,#a02822"]],
 late:"Il magistrato ha chiesto il telefono per l'interrogatorio. Il legale ha dovuto portarlo via.",
 brief:"Il legale ti ha portato il telefono di Oksana Kovalenko, 47 anni, badante della signora Lina Marchetti, morta nel sonno a 84 anni nella notte tra giovedì e venerdì. Gli esami hanno trovato nel sangue un sonnifero che Lina non doveva prendere. I nipoti accusano Oksana, che oggi viene interrogata.",
 quote:"«Oksana preparava le medicine, era sola in casa con lei e aveva ricevuto un bonifico di tremila euro dalla signora. Per i nipoti è tutto chiaro. Lei dice di non aver mai visto quel farmaco. Ha un'abitudine, però: fotografa tutto. Guardi lei.»",
 chats:[
  {id:"paola",name:"Paola (figlia di Lina)",sub:"Toronto",m:[
   ["lun 20:01",1,"[foto del portapillole] Sera di lunedì, tutto preso."],
   ["lun 20:30",0,"Grazie Oksana. Da Toronto mi sembra di essere lì. Due foto al giorno, alle 8 e alle 20: non saltarne una."],
   ["mer 20:02",1,"[foto del portapillole] Sera di mercoledì. La signora dice che una pastiglia è diversa, ma le ho preparate io lunedì come sempre."],
   ["mer 20:40",0,"Sarà un'altra marca. Dagliela pure."]]},
  {id:"carlo",name:"Carlo (nipote)",sub:"",m:[
   ["mar 19:00",0,"Oksana, domani alle 15 passo dalla zia. Tu vai pure a fare la spesa con calma, resto io."],
   ["mar 19:05",1,"Va bene signor Carlo. Torno per le 16."],
   ["ven 08:30",0,"Che cosa le hai dato ieri sera?? Rispondi!"],
   ["ven 08:31",0,"Lo sanno tutti del bonifico. Non credere di cavartela."]]},
  {id:"fede",name:"Federica (nipote)",sub:"",m:[
   ["dom 16 · 18:00",0,"Oksana, da Milano non riesco a scendere prima di Natale. Come sta la nonna?"],
   ["dom 16 · 18:10",1,"Bene. Mangia, cammina, litiga con la televisione."],
   ["ven 10:00",0,"Mio fratello dice cose terribili su di lei. Io non so che cosa pensare."]]},
  {id:"rizzi",name:"Dott. Rizzi",sub:"",m:[
   ["ven 07:40",1,"Dottore la signora non si sveglia. Venga subito."],
   ["ven 07:42",0,"Arrivo. Chiami il 118."],
   ["ven 15:00",0,"Oksana, per la cronaca: io a Lina un sonnifero non l'ho mai prescritto. Con le sue medicine per il cuore era vietato, e lei lo sapeva."]]},
  {id:"bort",name:"Sig. Bortolin",sub:"",m:[
   ["lun 11:00",0,"Buongiorno, confermo alla signora Lina il sopralluogo di lunedì prossimo per la vendita della casa. Poi la accompagno io a vedere Villa Serena."],
   ["lun 11:05",1,"Glielo riferisco. È molto contenta."],
   ["mar 10:30",0,"Stamattina sul vialetto ho incrociato il nipote Carlo e gli ho accennato del sopralluogo. Ha fatto una faccia. Spero di non aver sbagliato."]]},
  {id:"tono",name:"Sig. Tono (vicino)",sub:"",m:[
   ["8 nov",0,"Dica alla signora che la siepe la taglio quando torno. Dal 10 sono ricoverato per l'anca, tre settimane."],
   ["8 nov",1,"Auguri signor Tono."]]}
 ],
 lists:{
  farm:[
   {id:"x1",g:"Conto famiglia Marchetti · ritiri",title:"Sonnifero, 30 compresse",sub:"mar 17:40 · ritirato da Carlo M.",meta:"Con delega",body:"Ritirato martedì alle 17:40 da Carlo Marchetti, con la delega di famiglia.\nRicetta di una guardia medica, non del dott. Rizzi.\nCompressa bianca allungata."},
   {id:"x2",g:"Conto famiglia Marchetti · ritiri",title:"Terapia del cuore, mensile",sub:"3 nov · ritirato da Oksana K.",meta:"Ricetta dott. Rizzi",body:"Due compresse bianche rotonde e una rosa rotonda ogni sera."}],
  rec:[
   {id:"r0",g:"Memo",title:"1 registrazione protetta",sub:"«Per Paola»",meta:"Da aprire",body:"Registrata lunedì su richiesta della signora Lina.\nPer ascoltarla bisogna sapere di che cosa parla."},
   {id:"r1",g:"Memo recuperato",u:"casa",title:"Lina · lunedì 11:20",sub:"0:24",body:"«Oksana, registra, così mia figlia sente la mia voce. Paola: la casa la vendo e vado a Villa Serena, ho deciso. Carlo ha quarantacinque anni e sta sopra di me senza pagare un euro: è ora che si arrangi. Glielo dico domenica a pranzo.»"}],
  mail:[
   {id:"m1",title:"Villa Serena",sub:"Lista d'attesa",meta:"lunedì",body:"Gentile signora Marchetti, c'è una stanza singola libera da gennaio.\nRetta mensile: 2.400 €."}],
  map:[
   {id:"g1",g:"Cronologia · mercoledì",title:"Casa della signora Lina",sub:"fino alle 15:05",meta:"Permanenza",body:"In casa fino alle 15:05."},
   {id:"g2",g:"Cronologia · mercoledì",title:"Supermercato",sub:"15:12 - 15:40",meta:"Permanenza",body:"Ventotto minuti."},
   {id:"g3",g:"Cronologia · mercoledì",title:"Casa della signora Lina",sub:"dalle 15:52",meta:"Rientro",body:"Rientro alle 15:52. Il campanello intelligente registra: «Carlo, ingresso 15:10, uscita 15:44»."}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Marchetti Lina, prestito per Katia",sub:"2 set · + 3.000,00 €"},
   {id:"b2",g:"Movimenti",title:"Restituzione prestito, rata 1",sub:"1 ott · − 750,00 €"},
   {id:"b3",g:"Movimenti",title:"Restituzione prestito, rata 2",sub:"1 nov · − 750,00 €"},
   {id:"b4",g:"Movimenti",title:"Università di Leopoli, retta",sub:"5 set · − 2.900,00 €"}],
  cal:[
   {id:"c1",g:"Ogni giorno",title:"Foto portapillole",sub:"08:00 e 20:00",body:"A Paola."},
   {id:"c2",g:"Questa settimana",title:"Mer · Spesa",sub:"15:00",body:"Resta il signor Carlo."},
   {id:"c3",g:"Prossima settimana",title:"Lun · Sig. Bortolin",sub:"10:00",body:"Sopralluogo."}],
  note:[
   {id:"n1",title:"Promemoria",body:"Preparo il portapillole il lunedì per tutta la settimana.\nAlbum riservato: l'ora in cui il campanello segna l'ingresso del signor Carlo mercoledì.\nNota sotto: le due ore delle foto, attaccate."},
   {id:"n2",title:"Venerdì mattina",lock:"note",body:"Alle 7:40 la signora non si svegliava. Ho chiamato il dottore.\nNon ho toccato niente, il portapillole è sul comodino.\nHo paura che non mi credano: sono straniera e c'è il prestito.\nMa io le foto le ho tutte."}],
  tel:[
   {id:"t1",title:"Dott. Rizzi",sub:"ven 07:40 · in uscita, 2 min"},
   {id:"t2",title:"Agenzia Bortolin",sub:"lun 10:40 · in uscita, 9 min (per la signora)"}]
 },
 photos:[
  {id:"p1",t:"lun 20:00",title:"Lunedì sera",sc:"box1"},
  {id:"p2",t:"ott",title:"Passeggiata",sc:"lina"},
  {id:"p3",t:"set",title:"Katia",sc:"dau"},
  {id:"p4",t:"mer 15:22",title:"Spesa",sc:"rec"},
  {id:"h1",t:"mer 20:00",title:"Mercoledì sera",sc:"box2",lock:"album"},
  {id:"h2",t:"ven 16:00",title:"Dalla farmacia",sc:"pha",lock:"album"}],
 pins:{note:"0820",album:"1510"},
 events:[{id:"a",q:4,kind:"call",from:"Carlo (nipote)",lines:["«Avvocato? Mi dicono che ha lei il telefono della badante.»","«Lì dentro ci sono foto della casa di mia zia, roba privata di famiglia. Le cancelli, sono inutili.»","«Mi ha sentito?»"]},
         {id:"b",q:10,kind:"sms",from:"Federica (nipote)",text:"Avvocato, una cosa sola: Carlo abita sopra la nonna da quindici anni e non ha mai pagato un affitto. Non so se serve."}],
 qs:[
  {t:"2",q:"Oksana fotografa il portapillole. Quante foto al giorno manda alla figlia di Lina?",a:["2","due","2 foto","due foto"],show:"Due, alle 8 e alle 20",hint:"Lo dice Paola in chat, ed è in calendario.",news:"Ogni giorno, da mesi. Chi vuole avvelenare qualcuno di solito non documenta le dosi."},
  {t:"rosa",q:"Lunedì sera, di che colore è la terza compressa dello scomparto serale?",any:["rosa"],show:"Rosa",hint:"La foto di lunedì è in Galleria.",news:"Due bianche rotonde e una rosa: la terapia del cuore, come da ricetta."},
  {t:"15:10",q:"Mercoledì pomeriggio qualcuno è entrato in casa. A che ora lo registra il campanello?",all:["1510"],show:"Alle 15:10",hint:"Mappe riporta anche il campanello intelligente.",news:"Carlo, il nipote, dalle 15:10 alle 15:44. Trentaquattro minuti da solo con la zia e con il comodino."},
  {t:"al supermercato",q:"Dov'era Oksana in quei minuti?",any:["supermercat","spesa"],show:"Al supermercato",hint:"Cronologia di mercoledì e uno scontrino in Galleria.",news:"Scontrino delle 15:22, pagato con la carta di Lina. È rientrata alle 15:52."},
  {t:"Carlo",q:"Chi le aveva detto di uscire «con calma»?",any:["carlo"],show:"Carlo",hint:"Messaggio di martedì sera.",news:"Ha scelto lui l'ora e l'ha mandata fuori."},
  {t:"bianca allungata",q:"Nell'album riservato c'è la foto di mercoledì sera. Com'è la terza compressa?",any:["allungat","bianca","oblung"],show:"Bianca e allungata",hint:"Il codice dell'album è l'ora dell'ingresso di Carlo.",news:"Non è più rosa. Lina se n'era accorta, e Paola da Toronto ha risposto di dargliela lo stesso."},
  {t:"sonnifero",q:"Nell'app della farmacia c'è un ritiro di martedì. Che tipo di farmaco?",any:["sonnifer"],show:"Un sonnifero, 30 compresse",hint:"Apri l'app Farmacia.",news:"Compressa bianca allungata. Ritirata il giorno prima della visita."},
  {t:"Carlo",q:"Chi lo ha ritirato?",any:["carlo"],show:"Carlo Marchetti",hint:"È nella stessa riga.",news:"Con la delega di famiglia e la ricetta di una guardia medica."},
  {t:"n",q:"Il dott. Rizzi aveva prescritto quel farmaco a Lina?",o:[["s","Sì, da tempo"],["n","No: con le sue medicine era vietato"],["x","Non si sa"]],a:"n",show:"No: era vietato",hint:"Rizzi lo scrive venerdì pomeriggio.",news:"Il medico di famiglia non c'entra. E adesso serve il perché."},
  {t:"1500",q:"Prima il bonifico che accusa Oksana. Quanti euro ha già restituito?",a:["1500","1.500","1500 euro","1.500 euro","1.500 €"],show:"1.500 €, in due rate",hint:"Guarda i movimenti in Banca.",news:"Un prestito per l'università della figlia, restituito a rate. Non un regalo, non un movente."},
  {t:"Milano",q:"La nipote Federica dove vive?",any:["milano"],show:"A Milano",hint:"Lo scrive lei.",news:"Non scende prima di Natale. E il vicino Tono è ricoverato dal 10 per l'anca."},
  {t:"venderla",q:"Che cosa voleva fare Lina con la casa?",any:["vend"],show:"Venderla",hint:"Chat con il signor Bortolin.",news:"Un sopralluogo fissato per lunedì. Ora che sai della vendita, hai aperto la registrazione protetta nel Registratore.",unlock:"casa"},
  {t:"Villa Serena",q:"Dove voleva andare a vivere?",any:["serena"],show:"A Villa Serena",hint:"Chat, mail e registrazione.",news:"Una stanza da gennaio, 2.400 euro al mese: per pagarla serviva vendere."},
  {t:"domenica",q:"Nella registrazione Lina dice quando lo avrebbe detto a Carlo. In quale giorno?",any:["domenica"],show:"Domenica, a pranzo",hint:"Ascolta il memo recuperato.",news:"Ma Carlo lo ha saputo martedì mattina dall'agente, sul vialetto. Martedì alle 17:40 era in farmacia."},
  {t:"niente",q:"Quanto paga d'affitto Carlo per stare al piano di sopra? Se niente, scrivi NIENTE.",any:["niente","nulla","zero","gratis"],a:["0"],show:"Niente",hint:"Lo dice Lina nel memo.",news:"Con la vendita perdeva la casa in cui vive gratis da quindici anni."},
  {t:"7:40",q:"Nella nota protetta Oksana racconta venerdì mattina. A che ora ha chiamato il dottore?",all:["740"],show:"Alle 7:40",hint:"Il codice sono le due ore delle foto, attaccate.",news:"«Non ho toccato niente.» Il portapillole sul comodino è rimasto come lo aveva lasciato qualcun altro."},
  {t:"c",q:"Chi è stato?",o:[["o","Oksana, la badante"],["c","Carlo, il nipote"],["f","Federica, la nipote"],["r","Il dott. Rizzi"],["b","Il signor Bortolin"],["t","Il signor Tono"],["n","Nessuno: è stato un errore"]],a:"c",show:"Carlo, il nipote",hint:"Chi ha ritirato il sonnifero ed è rimasto solo con il portapillole?",news:""}],
 win:{title:"È stato Carlo, il nipote. Oksana è innocente.",
  steps:["Lunedì sera nel portapillole c'erano due compresse bianche e una rosa. Mercoledì sera la rosa era diventata bianca e allungata.","Martedì alle 17:40 Carlo ha ritirato in farmacia un sonnifero in compresse bianche allungate.","Mercoledì ha mandato Oksana a fare la spesa ed è rimasto in casa dalle 15:10 alle 15:44.","Martedì mattina aveva saputo che Lina vendeva la casa in cui lui vive senza pagare.","Il bonifico a Oksana era un prestito, già restituito per metà."],
  end:"Il legale mette in fila le due foto del portapillole, lunedì e mercoledì. «Due volte al giorno, per mesi», dice. «L'hanno accusata perché fotografava le medicine. È l'unico motivo per cui oggi torna a casa.»"}
});
LIB.tune(25,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.farm.find(x=>x.id==="x1").lock="far";
 e.pins={album:"1510",far:"1505",note:"2840"};
 e.locks={album:{hint:"Il minuto in cui qualcuno è entrato mentre io non c'ero."},far:{name:"Ritiro protetto",hint:"L'ora in cui sono uscita per la spesa."},note:{hint:"I minuti che sono stata fuori, poi i minuti di un ritiro in farmacia."}};
 e.spots=[
  {id:"s1",x:130,y:160,label:"Casa di Lina",title:"Casa della signora Lina",sub:"Piano terra",body:"Al piano di sopra abita il nipote Carlo. Il campanello intelligente registra chi entra."},
  {id:"s2",x:210,y:170,label:"Farmacia",title:"Farmacia Centrale",sub:"★ 4,0",body:"Recensione: «Con la delega di famiglia ti danno qualsiasi cosa. Anche troppo.»"},
  {id:"s3",x:90,y:200,label:"Supermercato",title:"Supermercato",sub:"★ 3,9",body:"Mercoledì alle 15:30 Oksana alla cassa 3, con il carrello pieno. La cassiera la conosce."}];
 LIB.hints(e,["Oksana fotografa il portapillole.","Guarda bene i colori, lunedì sera.","Qualcuno è entrato mercoledì pomeriggio.","Dov'era Oksana?","Qualcuno le aveva detto di non avere fretta.","La foto di mercoledì sera è nascosta.","La farmacia registra i ritiri, ma uno è chiuso.","…e chi l'ha ritirato.","Il medico ha scritto la terapia.","Il bonifico che accusa Oksana ha una storia.","La nipote vive lontano.","Lina ha registrato la sua voce.","…e dove voleva andare.","…e quando l'avrebbe detto.","Il nipote paga l'affitto?","Oksana ha scritto di venerdì mattina.","Chi ci perdeva se la casa veniva venduta?"]);
});
})();
