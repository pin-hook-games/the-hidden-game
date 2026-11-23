(function(){
/* Furti 19: Le buste degli sposi (Sorrento). Soluzione: Dario Sorrentino, il fotografo ufficiale.
   Durante il taglio della torta (23:10) smette di scattare dalle 23:09 alle 23:21 (la torta la riprende l'assistente), porta la scatola nel furgone dello studio (uscita 23:12, rientro 23:19). A settembre, stesso fotografo, stessa villa, era sparita un'altra scatola.
   False piste: il cameriere Gaetano (uscito alle 22:30) e il cugino Lello (debiti di gioco; assente alla torta perché era andato in farmacia per le medicine della zia).
   Codici: album = 2255; registro parcheggio = 24 tavoli + tavolo 01 = 2401; nota = 09 (ultimo scatto prima del buco) + 19 (rientro del furgone) = 0919. */
const SC={
 tav:()=>LIB.obj("#f0d9a0","🎁","La scatola delle buste, tavolo all'ingresso · 22:55"),
 tor:()=>LIB.group(6,"Foto degli invitati · 23:10 · il taglio della torta","#7a3b5a"),
 sps:()=>LIB.two("#9cc7d6","#f2f2f2","#2b3a55","Io e Antonio, il sì"),
 vuo:()=>LIB.obj("#c9b79c","🪑","Il tavolo all'ingresso · 23:40 · vuoto"),
 far:()=>LIB.doc("Scontrino · mandato da Lello","#2f6b4f",["Farmacia di turno","sabato 23:20","medicinali da banco","(per zia Carmela)"]),
 gal:()=>LIB.doc("Anteprima foto ufficiali · Studio Sorrentino","#33658a",["DSC_0411 · 23:08","DSC_0412 · 23:09","DSC_0413 · 23:21","(nessuna foto del taglio della torta)"]),
 cam:()=>LIB.doc("Cameriere a chiamata · turno","#55606b",["Gaetano","fine turno: 22:30","firma e uscita","(foglio della sala)"])
};
const MAP=LIB.city("Sorrento",[[40,52,"Centro"],[132,132,"Villa Le Terrazze"],[276,132,"Marina"],[40,232,"Statale"],[300,40,"Colline"],[200,200,"Golfo"]],[],[["M0 214Q200 176 400 226",60]]);

LIB.add(59,["Le buste degli sposi","Francesca e Antonio vogliono sapere chi ha preso la scatola con le buste","Sorrento"],{
 map:MAP,scenes:SC,owner:"Francesca De Luca",time:"13:00",date:"dom 23 nov",homeDate:"domenica 23 novembre",
 appIds:"msg tel mail gal map cal note web",
 late:"Francesca e Antonio partono per il viaggio di nozze. Il telefono le serve per i biglietti.",
 brief:"Sabato, al matrimonio di Francesca e Antonio in una villa di Sorrento, è sparita la scatola con le buste degli invitati. Nessuno sa dire quando. Francesca, 30 anni, ti ha dato il suo telefono: dentro ci sono centinaia di foto della serata, mandate da tutti.",
 quote:"«Tutti dicono il cameriere a chiamata, quello che se n'è andato prima della fine. Antonio invece ha paura che sia stato suo cugino Lello, che ha debiti di gioco e alla torta non c'era. Io non voglio accusare nessuno. Le foto ci sono, minuto per minuto. Guardale tu.»",
 locks:{
  album:{hint:"L'ultima volta che qualcuno l'ha fotografata sul tavolo."},
  par:{name:"Registro del parcheggio",hint:"Quanti tavoli c'erano, poi il nostro."},
  note:{hint:"Quando ha smesso di scattare, poi quando è rientrato il suo furgone."}},
 chats:[
  {id:"inv",name:"Foto matrimonio",sub:"Gruppo invitati",m:[
   ["sab 22:55",0,"Zia Rita: La scatola delle buste che bella! (foto)"],
   ["sab 23:10",0,"Mamma: IL TAGLIO DELLA TORTA ❤️ (foto)"],
   ["sab 23:40",0,"Zia Rita: Ma la scatola dov'è?"]]},
  {id:"lel",name:"Lello",sub:"Cugino di Antonio",m:[
   ["sab 21:30",0,"Franci, mi presti il telefono un attimo? Il mio è scarico, devo guardare una cosa."],
   ["sab 23:13",0,"Franci scusa, vado al volo in farmacia per zia Carmela, ha lasciato le medicine a casa. Torno subito, mi perdo la torta, perdonami."],
   ["dom",0,"Ti mando lo scontrino della farmacia, così non pensate male. Lo so cosa si dice di me."]]},
  {id:"dar",name:"Dario · fotografo",sub:"Studio Sorrentino",m:[
   ["dom 10:00",0,"Francesca, ecco l'anteprima delle foto! Le definitive entro un mese."],
   ["dom 10:05",1,"Dario, ma il taglio della torta? Non c'è nemmeno una foto!"],
   ["",2,"1 messaggio eliminato."],
   ["dom 10:20",0,"La torta l'ha ripresa Ciro, il mio assistente, col video. Io in quel momento ho dovuto spostare il furgone, mi bloccava l'uscita.","dar"]]},
  {id:"vil",name:"Villa Le Terrazze",sub:"",m:[
   ["dom",0,"Sig.ra De Luca, il cameriere Gaetano ha finito il turno alle 22:30 e ha firmato l'uscita. Le mandiamo anche il registro del parcheggio custodito, per mail."]]},
  {id:"ant",name:"Antonio",sub:"Marito",m:[
   ["dom",0,"Amore, Lello deve soldi a mezza Napoli per le scommesse. Ho paura che sia stato lui."]]}
 ],
 lists:{
  web:[
   {id:"w1",g:"Cronologia · sabato",title:"debiti scommesse cosa succede se non pago",sub:"21:32",body:"Ricerca fatta sul tuo telefono alle 21:32."},
   {id:"w2",g:"Cronologia · sabato",title:"farmacia di turno Sorrento",sub:"23:12",body:"Ricerca fatta sul tuo telefono: lo stava usando ancora Lello."}],
  mail:[
   {id:"m1",title:"Villa Le Terrazze",sub:"Programma serata",meta:"ottobre",body:"22:30 fine servizio camerieri a chiamata.\n23:10 taglio della torta.\n23:30 fuochi."},
   {id:"m2",title:"Villa Le Terrazze",sub:"Registro parcheggio custodito",meta:"domenica",lock:"par",body:"Sabato sera:\n23:12 · uscita · furgone Studio Sorrentino\n23:14 · uscita · auto R. Esposito (Lello)\n23:19 · rientro · furgone Studio Sorrentino\n23:31 · rientro · auto R. Esposito"}],
  map:[
   {id:"g1",g:"Luoghi",title:"Villa Le Terrazze",sub:"Sorrento",body:"Parcheggio custodito sotto la villa."}],
  cal:[
   {id:"c1",g:"Sabato",title:"Il nostro matrimonio",sub:"",body:""}],
  note:[
   {id:"n1",title:"Da fare",body:"Pagare il saldo al fotografo\nRingraziare zia Rita per le foto"},
   {id:"n2",title:"Scritta da Antonio stanotte",lock:"note",body:"Ho sbagliato a pensare a Lello. Era in farmacia per zia Carmela, c'è lo scontrino.\nIl fotografo ha smesso di scattare alle 23:09 e ha ricominciato alle 23:21: proprio la torta, la foto più importante.\nIl suo furgone esce alle 23:12 e rientra alle 23:19.\nE a settembre, stessa villa, stesso fotografo, è sparita un'altra scatola.\nIl saldo non glielo paghiamo."}],
  tel:[
   {id:"t1",title:"Antonio",sub:"dom 9:00 · in entrata, 20 min"}]
 },
 spots:[
  {id:"s1",x:150,y:140,label:"Villa Le Terrazze",title:"Villa Le Terrazze",sub:"Location per matrimoni · ★ 4,5",body:"24 tavoli, tavolo degli sposi n. 1.\nRecensione di settembre: «Al nostro matrimonio è sparita la scatola delle buste durante il taglio della torta. Nessuno ha capito come. Il fotografo era lo stesso che lavora sempre qui.»"},
  {id:"s2",x:60,y:226,label:"Parcheggio",title:"Parcheggio custodito",sub:"Sotto la villa",body:"Il custode registra ogni entrata e ogni uscita, targa e orario."},
  {id:"s3",x:276,y:120,label:"Farmacia di turno",title:"Farmacia di turno",sub:"Aperta tutta la notte · ★ 4,8",body:"Recensione: «Sabato verso le 23:20 c'era un ragazzo in giacca e cravatta, di corsa, per una zia. Gentilissimo.»"},
  {id:"s4",x:310,y:40,label:"Studio Sorrentino",title:"Studio Sorrentino",sub:"Fotografo matrimoni · ★ 3,6",body:"Recensione: «Foto belle, ma consegnate con un anno di ritardo. Dice sempre che ha problemi di soldi.»"}],
 photos:[
  {id:"p1",t:"18:00",title:"Il sì",sc:"sps"},
  {id:"p2",t:"22:55",title:"Le buste",sc:"tav"},
  {id:"p3",t:"23:10",title:"La torta",sc:"tor"},
  {id:"p4",t:"23:40",title:"Vuoto",sc:"vuo"},
  {id:"p5",t:"dom",title:"Turno",sc:"cam"},
  {id:"h1",t:"dom",title:"Da Lello",sc:"far",lock:"album"},
  {id:"h2",t:"dom",title:"Anteprima",sc:"gal",lock:"album"}],
 pins:{album:"2255",par:"2401",note:"0919"},
 events:[{id:"a",q:3,kind:"sms",from:"Dario · fotografo",text:"Francesca, per il saldo nessuna fretta, eh. Godetevi il viaggio. E non pensate troppo a quella scatola, magari salta fuori."},
         {id:"b",q:8,kind:"call",from:"Ciro",lines:["«Buongiorno, sono Ciro, l'assistente del fotografo. Volevo mandarvi il video della torta.»","«Dario? No, durante la torta non c'era. Mi ha detto di riprendere tutto io, che lui doveva fare una cosa al furgone.»","«Strano, è il momento che lui non si perde mai.»"]}],
 qs:[
  {t:"22:55",q:"A che ora la scatola è stata fotografata sul tavolo, l'ultima volta?",all:["2255"],show:"Alle 22:55",hint:"Gli invitati fotografano tutto.",news:"Alle 23:40 non c'era più."},
  {t:"22:30",q:"A che ora il cameriere Gaetano ha finito il turno?",all:["2230"],show:"Alle 22:30",hint:"La villa ha un foglio firmato.",news:"Prima che la scatola sparisse. Una falsa pista cade."},
  {t:"23:10",q:"A che ora il taglio della torta?",all:["2310"],show:"Alle 23:10",hint:"La serata aveva un programma.",news:"Tutti attorno alla torta, gli occhi da una parte sola."},
  {t:"Lello",q:"Chi manca nelle foto degli invitati al taglio della torta?",any:["lello","cugin"],show:"Lello, il cugino di Antonio",hint:"Guarda chi non sorride in quella foto.",news:"Quello con i debiti. Ma dov'era?"},
  {t:"farmacia",q:"Dov'era andato Lello?",any:["farmac","medicin"],show:"In farmacia, per le medicine di zia Carmela",hint:"Ha scritto lui stesso, e poi ha mandato una prova.",news:"Scontrino delle 23:20. La seconda falsa pista cade."},
  {t:"23:09",q:"Nell'anteprima delle foto ufficiali, a che ora è l'ultimo scatto prima del buco?",all:["2309"],show:"Alle 23:09. Il successivo è delle 23:21",hint:"Il fotografo ha mandato un'anteprima. Manca proprio il momento più importante.",news:"Dodici minuti senza scatti, durante la torta. Ora hai recuperato il messaggio che Dario ha mandato e poi corretto.",unlock:"dar"},
  {t:"Ciro",q:"Chi ha ripreso il taglio della torta al posto del fotografo?",any:["ciro","assistent","video"],show:"Ciro, il suo assistente",hint:"Il fotografo si è giustificato.",news:"«Io ho dovuto spostare il furgone.»"},
  {t:"23:12",q:"A che ora il furgone dello studio è uscito dal parcheggio?",all:["2312"],show:"Alle 23:12, rientrato alle 23:19",hint:"Chi custodisce le auto tiene un registro, chiuso.",news:"Sette minuti. Il tempo di portare una scatola e tornare."},
  {t:"settembre",q:"Quando era già sparita un'altra scatola di buste nella stessa villa, con lo stesso fotografo?",any:["settembr"],show:"A settembre",hint:"Gli sposi di prima hanno lasciato una recensione.",news:"Stesso momento: il taglio della torta."},
  {t:"saldo",q:"Nella nota protetta, che cosa decidono di non pagare?",any:["sald","fotograf"],show:"Il saldo al fotografo",hint:"Antonio ha scritto quella notte.",news:""},
  {t:"d",q:"Chi ha preso le buste?",o:[["g","Gaetano, il cameriere"],["l","Lello, il cugino"],["d","Dario, il fotografo ufficiale"],["r","Zia Rita"],["v","Il personale della villa"]],a:"d",show:"Dario, il fotografo",hint:"Chi c'è sempre ma non compare mai nelle foto?",news:""}],
 win:{title:"Le buste le ha prese Dario, il fotografo.",
  steps:["Alle 22:55 la scatola era sul tavolo. Gaetano era uscito alle 22:30.","Lello alla torta non c'era: era in farmacia per la zia, scontrino delle 23:20.","Il fotografo non ha scattato dalle 23:09 alle 23:21, proprio durante il taglio della torta: l'ha ripreso il suo assistente.","Il furgone dello studio è uscito alle 23:12 ed è rientrato alle 23:19.","A settembre, stessa villa e stesso fotografo, era sparita un'altra scatola."],
  end:"Prima di partire, Antonio va allo Studio Sorrentino con l'avvocato. Nel furgone c'è ancora la scatola, chiusa, sotto un telo. In un cassetto dello studio ce n'è un'altra, quella di settembre. Gli sposi partono. Lello accompagna zia Carmela a riconsegnare la scatola di settembre ai legittimi proprietari."}
});
})();
