(function(){
/* Furti 5: Il violino (Cremona). Soluzione: il liutaio Ottavio Morandi.
   Durante la manutenzione di luglio ha sostituito il violino della fondazione con una copia. Il suono cambia nelle registrazioni dopo il 22 luglio, la tavola ha una venatura diversa, un annuncio riservato a Lucerna. Falsa pista: il compagno Davide. */
const SC={
 vec:()=>LIB.doc("Tavola armonica · maggio","#7a3b5a",["Foto ravvicinata","Nodo scuro sotto la f destra","Venatura stretta","(foto di Agnese)"]),
 nuo:()=>LIB.doc("Tavola armonica · settembre","#55606b",["Foto ravvicinata","Nessun nodo sotto la f destra","Venatura larga","(foto di Agnese)"]),
 aul:()=>LIB.group(4,"Classe di violino, conservatorio","#33658a"),
 sch:()=>LIB.doc("Scheda manutenzione","#2f6b4f",["Liuteria Morandi","Ritiro: 8 luglio","Riconsegna: 22 luglio","Firma: O. Morandi"]),
 ann:()=>LIB.doc("Annuncio riservato · Lucerna","#a02822",["Violino cremonese, primo Settecento","Trattativa privata","Contatto: O.M.","pubblicato 2 settembre"]),
 con:()=>LIB.obj("#231a2e","🎻","Il concerto di sabato")
};
const MAP=LIB.city("Cremona",[[40,52,"Torrazzo"],[132,132,"Conservatorio"],[276,132,"Po"],[40,232,"Via Platina"],[300,40,"Parco"],[200,200,"Stazione"]],
 [[170,130,"#d43d55","sala concerti",9,-10],[60,226,"#33658a","Liuteria Morandi",9,-8]]);

LIB.add(45,["Il violino","La fondazione vuole sapere dov'è il violino affidato ad Agnese","Cremona"],{
 map:MAP,scenes:SC,owner:"Agnese Corti",time:"12:00",date:"mer 19 nov",homeDate:"mercoledì 19 novembre",
 appIds:"msg tel mail gal map cal note web",extraApps:[["rec","Registratore","mic","#e2574c,#a02822"]],
 late:"Agnese deve andare a lezione. Si riprende il telefono per il metronomo.",
 brief:"La fondazione Arcieri affida da due anni ad Agnese Corti, 22 anni, studentessa di conservatorio, un violino d'autore del primo Settecento. Sabato sera, dopo un concerto, nella custodia c'era ancora uno strumento. Il perito Gualtieri, chiamato per la stima, ha detto che non è l'originale. La fondazione ti ha dato il telefono di Agnese.",
 quote:"«La ragazza giura che non l'ha mai lasciato. Il perito dice che quello nella custodia vale duemila euro. Qualcuno sabato è entrato in camerino, e il suo compagno Davide era l'ultimo in aula. Trovi il violino.»",
 chats:[
  {id:"ott",name:"Maestro Morandi",sub:"Liutaio",m:[
   ["8 lug",0,"Agnese, lo porti pure. Tavola da controllare e un'anima nuova. Due settimane."],
   ["22 lug",0,"Pronto. Suona ancora meglio di prima, vedrai."],
   ["",2,"1 messaggio eliminato."],
   ["sab 23:00",0,"Agnese, se il perito fa domande, digli che la tavola l'ho dovuta ripulire. Il legno cambia colore, capita.","ott"]]},
  {id:"dav",name:"Davide",sub:"Compagno di corso",m:[
   ["sab",0,"Agnese, mi hanno chiesto se ero in camerino. Io sono uscito con te alle 22, ti ho aiutata con la custodia."],
   ["sab",1,"Lo so, Davide. Il violino in mano l'avevo io."]]},
  {id:"mae",name:"Prof.ssa Sala",sub:"Insegnante",m:[
   ["set",0,"Agnese, da quest'estate il tuo violino ha un suono più chiuso. Hai cambiato le corde?"],
   ["set",1,"No, prof. Solo la manutenzione di luglio."]]},
  {id:"fon",name:"Fondazione Arcieri",sub:"",m:[
   ["dom",0,"Agnese, il perito Gualtieri dice che lo strumento nella custodia è una copia moderna. Ci serve tutto ciò che hai: foto, registrazioni, date."]]}
 ],
 lists:{
  rec:[
   {id:"r1",g:"Registrazioni",title:"Bach, Partita 2",sub:"maggio",body:"Nota: «suono aperto, il Mi canta tantissimo»."},
   {id:"r2",g:"Registrazioni",title:"Bach, Partita 2",sub:"agosto",body:"Nota: «suono più chiuso. Colpa del caldo?»"},
   {id:"r3",g:"Registrazioni",title:"Concerto sabato",sub:"sabato",body:"Nota: «mi sembra un altro violino, da mesi»."}],
  web:[
   {id:"w1",g:"Cronologia",title:"Annunci riservati strumenti, Lucerna",sub:"cercato domenica",body:"«Violino cremonese, primo Settecento. Trattativa privata. Contatto: O.M.» Pubblicato il 2 settembre."}],
  mail:[
   {id:"m1",title:"Perito Gualtieri",sub:"Esito stima",meta:"domenica",body:"Lo strumento esaminato è una copia moderna di buona fattura, valore circa 2.000 €. Per la pratica mi annoto il nome del liutaio di fiducia e quello della sala dove si tengono i concerti."}],
  map:[
   {id:"g1",g:"Luoghi salvati",title:"Liuteria Morandi",sub:"Via Platina",body:""}],
  cal:[
   {id:"c1",g:"Luglio",title:"8 lug · Violino da Morandi",sub:"",body:""},
   {id:"c2",g:"Luglio",title:"22 lug · Ritiro violino",sub:"",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: giorno e mese della riconsegna, quattro cifre.\nNota sotto: giorno e mese dell'annuncio a Lucerna, quattro cifre."},
   {id:"n2",title:"Non mi ero sbagliata",lock:"note",body:"Il violino che suono da luglio non è il mio. Il nodo sotto la f destra non c'è più.\nPensavo di essere io a suonare peggio.\nIl Maestro mi ha scritto la notte del concerto, prima che il perito parlasse con me. Come faceva a sapere che avrebbe guardato la tavola?"}],
  tel:[
   {id:"t1",title:"Maestro Morandi",sub:"sab 23:02 · in entrata, 1 min"}]
 },
 photos:[
  {id:"p1",t:"maggio",title:"La tavola",sc:"vec"},
  {id:"p2",t:"lezione",title:"Classe",sc:"aul"},
  {id:"p3",t:"sab",title:"Concerto",sc:"con"},
  {id:"p4",t:"8 lug",title:"Scheda",sc:"sch"},
  {id:"h1",t:"settembre",title:"La tavola",sc:"nuo",lock:"album"},
  {id:"h2",t:"dom",title:"Lucerna",sc:"ann",lock:"album"}],
 pins:{note:"0209",album:"2207"},
 events:[{id:"a",q:3,kind:"sms",from:"Maestro Morandi",text:"Agnese cara, sono sconvolto. Se vuoi ti presto io uno strumento per le lezioni, finché non si chiarisce."},
         {id:"b",q:7,kind:"call",from:"Gualtieri",lines:["«Sono il perito. Signorina, una domanda sola: in camerino c'era una telecamera?»","«No? Bene. Me lo segno.»","«Per la sua pratica non serve, ma a me interessa.»"]}],
 qs:[
  {t:"2000",q:"Quanto vale, secondo il perito, lo strumento trovato nella custodia?",a:["2000","2.000","duemila","2000 euro","2.000 euro","2.000 €"],show:"Circa 2.000 €: una copia moderna",hint:"Mail del perito.",news:"Il violino vero vale molto di più."},
  {t:"22",q:"A che ora Davide è uscito con Agnese, sabato?",a:["22","alle 22","22:00","le 22"],show:"Alle 22, insieme",hint:"Chat con Davide.",news:"Il violino era sempre in mano ad Agnese."},
  {t:"agosto",q:"Da quale registrazione il suono di Agnese cambia? Dimmi il mese.",any:["agost"],show:"Da agosto",hint:"Registratore.",news:"A maggio «suono aperto», ad agosto «più chiuso». Anche la professoressa se n'è accorta."},
  {t:"manutenzione",q:"Che cosa è successo al violino tra maggio e agosto?",any:["manutenz","liutai","morandi"],show:"La manutenzione dal liutaio",hint:"Calendario e chat con l'insegnante.",news:"Dal Maestro Morandi, a luglio."},
  {t:"22 luglio",q:"Quando gliel'ha riconsegnato? Giorno e mese.",all:["22","lug"],show:"Il 22 luglio",hint:"Scheda di manutenzione.",news:"Il codice dell'album: dentro c'è la foto della tavola di settembre."},
  {t:"nodo",q:"Che cosa manca sulla tavola nella foto di settembre?",any:["nodo"],show:"Il nodo scuro sotto la f destra",hint:"Confronta la foto di maggio con quella di settembre.",news:"Non è lo stesso legno. Ora hai recuperato il messaggio che il Maestro ha mandato la notte del concerto.",unlock:"ott"},
  {t:"ripulire",q:"Che cosa le dice di raccontare al perito, il Maestro, a proposito della tavola?",any:["pulit","ripulir","colore"],show:"Che l'aveva dovuta ripulire",hint:"Messaggio recuperato.",news:"Alle 23 di sabato. Prima che qualcuno avesse parlato con lei della tavola."},
  {t:"Lucerna",q:"In quale città è stato pubblicato l'annuncio riservato del violino?",any:["lucerna"],show:"Lucerna",hint:"Browser.",news:"Contatto: O.M. Il 2 settembre."},
  {t:"Davide",q:"La falsa pista: chi era l'ultimo in aula?",any:["davide"],show:"Davide",hint:"Brief e chat.",news:"Ma il violino era già una copia da luglio."},
  {t:"o",q:"Chi ha preso il violino?",o:[["d","Davide, in camerino"],["o","Il Maestro Morandi, durante la manutenzione"],["a","Agnese, per venderlo"],["f","La fondazione, per l'assicurazione"],["g","Il perito"]],a:"o",show:"Il Maestro Morandi",hint:"Quando è cambiato il suono, e chi aveva il violino in quei giorni?",news:""}],
 win:{title:"Il violino l'ha sostituito il Maestro Morandi, a luglio.",
  steps:["Nella custodia c'era una copia moderna da 2.000 €.","Dalla registrazione di agosto il suono cambia. Il violino era stato dal liutaio dall'8 al 22 luglio.","Nella foto di settembre il nodo sotto la f destra non c'è più: è un'altra tavola.","La notte del concerto Morandi ha suggerito ad Agnese di parlare di una «ripulitura».","Il 2 settembre un annuncio riservato a Lucerna offriva un violino cremonese del primo Settecento. Contatto: O.M."],
  end:"La fondazione manda l'annuncio alla polizia svizzera. Il violino viene trovato in una cassetta di sicurezza a Lucerna, ancora senza compratore. Agnese lo riprende in mano a dicembre e suona la Partita di maggio. Il Mi canta di nuovo."}
});
LIB.tune(45,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.chats.find(c=>c.id==="fon").m.push(["dom",0,"Ricordati che è il violino Arcieri del 1720: la fondazione ha una sola stella, ed è quella."]);
 e.lists.rec.push({id:"r4",g:"Registrazioni",title:"Liuteria, 8 luglio",sub:"Registrata per sbaglio · protetta",lock:"mae",body:"Agnese aveva lasciato il registratore acceso nella custodia.\nVoce del Maestro, al telefono: «La copia è pronta, la cambio domani. Il cliente di Lucerna paga trecentoottanta, ma la cassa la voglio entro il 30 agosto.»"});
 e.pins={album:"2207",mae:"1720",note:"0238"};
 e.locks={album:{hint:"Il giorno in cui me l'hanno restituito, e non era più lui."},mae:{name:"Registrazione protetta",hint:"L'anno in cui è nato il mio violino."},note:{hint:"Il giorno dell'annuncio, poi le prime due cifre di una cifra detta al telefono."}};
 e.spots=[
  {id:"s1",x:60,y:226,label:"Liuteria Morandi",title:"Liuteria Morandi",sub:"Liutaio · ★ 4,9",body:"Recensione: «Un maestro. Ti restituisce lo strumento che sembra un altro.»"},
  {id:"s2",x:170,y:130,label:"Sala concerti",title:"Sala concerti",sub:"Camerini al piano di sotto",body:"Nessuna telecamera nei camerini. La custodia di Agnese è rimasta lì venti minuti, mentre salutava il pubblico."},
  {id:"s3",x:300,y:150,label:"Arte Sicura",title:"Arte Sicura · trasporti",sub:"Trasporto strumenti verso la Svizzera",body:"Recensione: «A fine agosto hanno ritirato un violino da via Platina. Imballo perfetto, consegna a Lucerna in un giorno.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"380000",q:"Nella registrazione dell'8 luglio, quanto paga il cliente di Lucerna?",a:["380000","380.000","380 mila","trecentoottantamila","380000 euro","380.000 euro","380.000 €","380"],show:"380.000 €",hint:"",news:"La copia era pronta prima ancora che il violino entrasse in liuteria."});
 LIB.hints(e,["Un esperto ha messo un prezzo per iscritto.","Il compagno ha un alibi: era con lei.","Ascolta come suonava, mese dopo mese.","D'estate, qualcuno ha avuto il violino tra le mani.","C'è una scheda con due date.","Due foto ravvicinate, a mesi di distanza.","Qualcuno le ha scritto di notte, poi ci ha ripensato.","Agnese ha cercato qualcosa, domenica.","Chi era l'ultimo in aula?","Una registrazione fatta per sbaglio, chiusa con l'età del violino.","Quando è cambiato il suono, e chi aveva il violino?"]);
});
})();
