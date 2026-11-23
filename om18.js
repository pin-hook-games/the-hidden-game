(function(){
/* Omicidi 18: L'eredità di zia Pia (Lecce). Soluzione: non è un omicidio. Pia è morta nel sonno. Il cliente Raffaele vuole un'accusa contro la cugina per bloccare il testamento. */
const SC={
 pia:()=>LIB.two("#f0d9a0","#7a3b5a","#777","Con Daniela, il caffè delle cinque"),
 ulivi:()=>LIB.obj("#cfe3c9","🫒","L'uliveto di famiglia"),
 tetto:()=>LIB.doc("Ricevuta del muratore","#55606b",["Riparazione tegole","Pagato in contanti","450,00 €","Lunedì, firmato"]),
 raf:()=>LIB.shot("Raffaele",["Zia a Natale vengo, promesso","(inviato nel 2022, 2023 e 2024)"]),
 fiori:()=>LIB.doc("Fioraio · ricevuta","#b0764a",["Fiori per la cappella","150,00 €","Lunedì ore 17:30","Ritirati da Daniela per Pia"]),
 brac:()=>LIB.doc("Braccialetto salvavita","#2f6b4f",["Notte tra lunedì e martedì","Nessuna caduta, nessun allarme","Battito in calo dalle 03:10","Fermo dalle 03:40"])
};
const MAP=LIB.map({name:"Mappa stilizzata di Lecce",
 water:[],
 parks:[`<ellipse cx="320" cy="60" rx="50" ry="30" fill="#d7e2c9"/>`],
 roads:["M200 130m-70 0a70 70 0 1 0 140 0a70 70 0 1 0 -140 0","M200 130H380","M200 130V20","M200 130L60 220","M200 130L330 230"],
 extra:`<rect x="192" y="122" width="16" height="16" rx="3" fill="#b0764a"/>`,
 labels:[[212,126,"Sant'Oronzo"],[206,30,"Stazione"],[300,120,"San Lazzaro"],[60,214,"verso Gallipoli"],[300,50,"uliveto"],[290,236,"verso Otranto"]],
 pins:[[170,160,"#d43d55","casa di Pia",9,16],[240,100,"#33658a","casa di Daniela",9,-8]]});

LIB.add(38,["L'eredità di zia Pia","Raffaele è convinto che la cugina abbia ucciso la zia","Lecce"],{
 map:MAP,scenes:SC,owner:"Pia De Giorgi",time:"11:15",date:"sab 22 nov",homeDate:"sabato 22 novembre",
 appIds:"msg tel mail web gal map cal note bank",extraApps:[["sal","Salvavita","fitness_center","#4fb3a5,#22705f"],["rec","Registratore","mic","#e2574c,#a02822"]],
 late:"Raffaele è tornato a riprendersi il telefono: ha fretta di andare dall'avvocato.",
 brief:"Raffaele ti ha portato il telefono della zia Pia De Giorgi, 88 anni, morta nel sonno nella notte tra lunedì e martedì. Lui è convinto che non sia stata una morte naturale e vuole una relazione scritta da portare a un avvocato entro oggi.",
 quote:"«Mia cugina Daniela era lì tutti i giorni, sola con lei. Due giorni prima ha prelevato seicento euro dal conto della zia. E il testamento le lascia la casa. Faccia due più due. Mi serve che lei lo scriva nero su bianco: Daniela ha avuto l'occasione e il movente.»",
 chats:[
  {id:"dani",name:"Daniela",sub:"Nipote",m:[
   ["sab 15 · 09:00",1,"Dani prelevami 600 euro: lunedì viene il muratore per le tegole e voglio i fiori per la cappella di tuo nonno."],
   ["sab 15 · 09:10",0,"Vado io in banca zia. Ti porto anche le ricevute, così stai tranquilla."],
   ["lun 20:20",0,"Zia sono a casa. Ti ho lasciato la tisana sul comodino e la luce del corridoio accesa. A domattina alle otto."],
   ["lun 20:30",1,"Grazie, figlia mia. Dormi bene."],
   ["gio 12:00",0,"Scrivo qui perché non so dove altro. Raffaele ha voluto prendere lui il telefono della zia, oggi. Io non ho niente da nascondere."]]},
  {id:"raf",name:"Raffaele",sub:"Nipote",m:[
   ["2 nov",0,"Zia dovresti rivedere il testamento. La casa a Daniela e a me solo gli ulivi non è giusto."],
   ["2 nov",1,"Gli ulivi valgono più della casa, Raffaele. E tu non vieni a trovarmi dal 2022."],
   ["2 nov",0,"Te ne pentirai."],
   ["3 nov",0,"Scusa zia, ero nervoso. A Natale vengo."]]},
  {id:"greco",name:"Dott. Greco",sub:"",m:[
   ["5 nov",0,"Signora Pia, glielo dico con affetto: il cuore è stanco. Può succedere in qualunque momento, anche nel sonno, senza dolore. Non cambi le sue abitudini."],
   ["5 nov",1,"Dottore, a ottantotto anni l'ho messo in conto. Purché sia nel mio letto."]]},
  {id:"lucia",name:"Lucia",sub:"Vicina",m:[
   ["dom 16 · 11:00",0,"Pia vieni a messa? Passo io a prenderti."],
   ["dom 16 · 11:05",1,"Vengo. Daniela mi porta la domenica, ma oggi le ho detto di riposare: viene tutti i giorni, quella figlia."]]},
  {id:"notaio",name:"Notaio Rizzo",sub:"",m:[
   ["3 nov",1,"Notaio, il mio testamento del 2023 resta com'è. Glielo scrivo perché resti agli atti: mio nipote mi ha chiesto di cambiarlo e ho detto di no."],
   ["3 nov",0,"Ne prendo nota, signora. Casa a Daniela, uliveto a Raffaele, come da sua volontà."]]},
  {id:"pino",name:"Don Pino",sub:"",m:[
   ["lun 18:00",0,"Pia, i fiori per la cappella sono arrivati, bellissimi. Li ha portati Daniela. Dio ti benedica."]]}
 ],
 lists:{
  sal:[
   {id:"x1",g:"Sensore della porta di casa",title:"Porta chiusa",sub:"lun 20:15",body:"Daniela esce e chiude."},
   {id:"x2",g:"Sensore della porta di casa",title:"Aperture durante la notte",sub:"Nessuna",body:"Tra le 20:15 di lunedì e le 08:02 di martedì la porta non si è mai aperta."},
   {id:"x3",g:"Sensore della porta di casa",title:"Porta aperta",sub:"mar 08:02",body:"Entra Daniela, con le sue chiavi."},
   {id:"x4",g:"Braccialetto",title:"Notte tra lunedì e martedì",sub:"Nessuna caduta · nessun allarme",body:"Nessuna caduta, nessun allarme premuto.\nBattito regolare fino alle 03:10, poi in calo lento.\nFermo dalle 03:40."}],
  rec:[
   {id:"r0",g:"Memo",title:"1 appunto protetto",sub:"«Non si sa mai»",meta:"Da aprire",body:"Appunto vocale del 3 novembre.\nPer ascoltarlo bisogna sapere se quella notte è entrato qualcuno."},
   {id:"r1",g:"Memo recuperato",u:"memo",title:"Pia · 3 novembre",sub:"0:19",body:"«Lo dico a questo coso perché non si sa mai. Raffaele mi ha chiesto di cambiare il testamento e gli ho detto di no. Mi ha risposto che me ne pentirò. Se un giorno dovesse dire cose brutte su Daniela, non credetegli.»"}],
  mail:[
   {id:"m1",title:"Azienda sanitaria",sub:"Certificato",meta:"martedì",body:"Decesso per cause naturali: arresto cardiaco nel sonno, in paziente di 88 anni con cardiopatia nota.\nNessun elemento per ulteriori accertamenti.\nDott. Greco"}],
  web:[
   {id:"w1",g:"Cronologia · venerdì",title:"come impugnare un testamento",sub:"ven 09:12"},
   {id:"w2",g:"Cronologia · venerdì",title:"erede indegno se accusato di omicidio",sub:"ven 09:20"},
   {id:"w3",g:"Cronologia · venerdì",title:"investigatore privato lecce relazione scritta prezzi",sub:"ven 09:31"},
   {id:"w4",g:"Cronologia · novembre",title:"ricetta pasticciotto senza strutto",sub:"10 nov"}],
  map:[
   {id:"g1",g:"Posizione del telefono",title:"Casa di Pia",sub:"fino a giovedì",meta:"Poi in movimento",body:"Il telefono è rimasto in casa fino a giovedì alle 12.\nDa giovedì a oggi: a casa di Raffaele, a quaranta minuti da Lecce."}],
  bank:[
   {id:"b1",g:"Movimenti",title:"Prelievo in contanti",sub:"sab 15 nov · − 600,00 €"},
   {id:"b2",g:"Movimenti",title:"Pensione",sub:"1 nov · + 1.180,00 €"}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Lun · Muratore",sub:"10:00",body:"Tegole."},
   {id:"c2",g:"Ogni giorno",title:"Daniela",sub:"08:00 e 17:00",body:"Caffè."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui Daniela chiude la porta la sera, quattro cifre.\nNota sotto: l'ora in cui la riapre la mattina, quattro cifre."},
   {id:"n2",title:"Per chi resta",lock:"note",body:"Daniela viene ogni giorno e non chiede niente.\nRaffaele chiede e non viene mai.\nIl testamento resta com'è. Volersi bene non si eredita."}],
  tel:[
   {id:"t1",title:"Daniela",sub:"lun 20:18 · in entrata, 2 min"},
   {id:"t2",title:"Raffaele",sub:"2 nov · in entrata, 11 min"}]
 },
 photos:[
  {id:"p1",t:"lun 17:00",title:"Il caffè",sc:"pia"},
  {id:"p2",t:"ott",title:"Gli ulivi",sc:"ulivi"},
  {id:"p3",t:"lun",title:"Tetto",sc:"tetto"},
  {id:"p4",t:"3 nov",title:"Promesse",sc:"raf"},
  {id:"h1",t:"lun 17:30",title:"Fiori",sc:"fiori",lock:"album"},
  {id:"h2",t:"mar",title:"Quella notte",sc:"brac",lock:"album"}],
 pins:{note:"0802",album:"2015"},
 events:[{id:"a",q:4,kind:"call",from:"Raffaele",lines:["«Allora, la relazione è pronta? L'avvocato mi aspetta alle due.»","«Non serve che guardi tutto. Scriva che Daniela era sola con lei e che ha preso i soldi. Il resto sono dettagli.»","«Mi ha capito?»"]},
         {id:"b",q:10,kind:"sms",from:"Daniela",text:"Se qualcuno legge: la zia mi ha cresciuta. Le ricevute dei seicento euro sono nel primo cassetto della credenza. Non ho altro da dire."}],
 qs:[
  {t:"20:15",q:"La casa di Pia ha un sensore sulla porta. A che ora Daniela è uscita lunedì sera?",all:["2015"],show:"Alle 20:15",hint:"Apri l'app Salvavita.",news:"Cinque minuti dopo ha scritto alla zia di essere arrivata a casa. Pia ha risposto alle 20:30: era viva e tranquilla."},
  {t:"nessuna",q:"Quante volte si è aperta la porta durante la notte? Se nessuna, scrivi NESSUNA.",any:["nessun","zero","mai"],a:["0"],show:"Nessuna",hint:"Seconda riga del sensore.",news:"Nessuno è entrato tra le 20:15 e le 08:02. Ora che lo sai, hai aperto l'appunto vocale protetto nel Registratore.",unlock:"memo"},
  {t:"03:10",q:"Il braccialetto salvavita registra il battito. A che ora comincia a rallentare?",all:["310"],show:"Alle 03:10",hint:"Ultima riga dell'app.",news:"Nessuna caduta, nessun allarme premuto. Un calo lento, nel sonno, e poi più niente."},
  {t:"nel sonno",q:"Che cosa le aveva detto il dott. Greco due settimane prima? Che poteva succedere anche...",any:["sonno"],show:"Nel sonno, senza dolore",hint:"Chat del 5 novembre.",news:"«Il cuore è stanco.» Pia lo sapeva e lo aveva messo in conto."},
  {t:"cause naturali",q:"Che cosa dice il certificato dell'azienda sanitaria? Decesso per cause...",any:["natural"],show:"Naturali",hint:"È nella Mail.",news:"Arresto cardiaco nel sonno, nessun elemento per altri accertamenti. Fin qui non c'è un delitto. Resta il «movente» di Raffaele."},
  {t:"Pia",q:"Il prelievo da 600 euro: chi lo ha chiesto?",any:["pia","zia"],show:"Pia stessa",hint:"Chat con Daniela di sabato 15.",news:"«Prelevami 600 euro.» Lo ha scritto lei, con il motivo."},
  {t:"450",q:"Quanto è andato al muratore?",a:["450","450 euro","450€","450,00"],show:"450 €",hint:"C'è una ricevuta in Galleria.",news:"Tegole riparate lunedì, ricevuta firmata."},
  {t:"150",q:"Nell'album privato c'è l'altra ricevuta. Quanto sono costati i fiori per la cappella?",a:["150","150 euro","150€","150,00"],show:"150 €",hint:"Il codice dell'album è l'ora in cui Daniela chiude la porta la sera.",news:"Quattrocentocinquanta più centocinquanta: seicento esatti. Don Pino conferma che i fiori sono arrivati."},
  {t:"l'uliveto",q:"Che cosa lascia il testamento a Raffaele?",any:["ulivet","ulivi"],show:"L'uliveto",hint:"Lo conferma il notaio.",news:"Che secondo Pia vale più della casa. Raffaele non è stato escluso: voleva di più."},
  {t:"2022",q:"Da quale anno Raffaele non va a trovare la zia?",a:["2022","dal 2022"],show:"Dal 2022",hint:"Glielo rinfaccia lei il 2 novembre.",news:"E quel giorno, quando lei ha rifiutato di cambiare il testamento, le ha scritto: «Te ne pentirai»."},
  {t:"venerdì",q:"Nel Browser ci sono ricerche fatte dopo la morte di Pia. In quale giorno?",any:["venerdi"],show:"Venerdì",hint:"Guarda le date della cronologia.",news:"«Come impugnare un testamento.» «Erede indegno se accusato di omicidio.» «Investigatore privato, relazione scritta.»"},
  {t:"Raffaele",q:"Chi aveva in mano il telefono venerdì?",any:["raffaele","cliente"],show:"Raffaele",hint:"Lo dicono Daniela e la posizione del telefono.",news:"Lo ha preso giovedì. Le ricerche sono sue: cercava il modo di togliere la casa a Daniela, e tu sei quel modo."},
  {t:"non credetegli",q:"Nell'appunto vocale Pia lascia un'istruzione, se Raffaele dovesse parlare male di Daniela. Quale?",any:["credete","creder"],show:"«Non credetegli»",hint:"Ascolta il memo recuperato.",news:"Lo aveva previsto tre settimane fa."},
  {t:"Raffaele",q:"Nella nota protetta Pia scrive di qualcuno che «chiede e non viene mai». Chi?",any:["raffaele"],show:"Raffaele",hint:"Il codice è l'ora in cui Daniela riapre la porta la mattina.",news:"«Volersi bene non si eredita.»"},
  {t:"n",q:"Che cosa scrivi nella relazione?",o:[["d","Daniela ha ucciso la zia"],["g","Il dott. Greco ha sbagliato la terapia"],["l","La vicina Lucia era in casa"],["n","Non c'è stato nessun omicidio: il cliente vuole un'accusa per bloccare il testamento"]],a:"n",show:"Nessun omicidio",hint:"Nessuno è entrato, il cuore si è fermato nel sonno, i soldi tornano al centesimo.",news:""}],
 win:{title:"Nessuno ha ucciso zia Pia. Il cliente voleva usarti.",
  steps:["Tra le 20:15 di lunedì e le 08:02 di martedì la porta non si è mai aperta. Il battito è calato lentamente dalle 03:10.","Il medico aveva avvertito Pia due settimane prima. Il certificato parla di cause naturali.","I 600 € li aveva chiesti Pia: 450 al muratore e 150 al fioraio, con le ricevute.","Il 2 novembre Raffaele aveva chiesto di cambiare il testamento. Pia aveva detto no, e lo aveva fatto mettere agli atti.","Venerdì, con il telefono in mano, Raffaele ha cercato come far dichiarare «indegno» un erede accusato di omicidio."],
  end:"Scrivi la relazione, ma non quella che Raffaele ha ordinato. Una copia la mandi al notaio Rizzo, insieme all'appunto vocale di Pia. Quando Raffaele la legge diventa rosso. «Non la pago», dice. Non importa. Daniela terrà la casa, e lui i suoi ulivi."}
});
LIB.tune(38,e=>{
 LIB.clean(e);e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="asl";
 e.pins={album:"2015",asl:"0310",note:"1588"};
 e.locks={album:{hint:"L'ora in cui Daniela chiude, la sera."},asl:{name:"Mail protetta",hint:"Quando il cuore ha cominciato a rallentare."},note:{hint:"Le decine dei fiori, poi i suoi anni."}};
 e.spots=[
  {id:"s1",x:170,y:160,label:"Casa di Pia",title:"Casa di zia Pia",sub:"",body:"Sensore sulla porta e braccialetto salvavita. Nessuno può entrare senza che resti scritto."},
  {id:"s2",x:240,y:100,label:"Casa di Daniela",title:"Casa di Daniela",sub:"",body:"Ogni sera alle 20:15 Daniela chiude la porta di Pia e torna qui, a due strade."},
  {id:"s3",x:300,y:60,label:"Uliveto",title:"Uliveto di famiglia",sub:"",body:"La parte che il testamento lascia a Raffaele. Non ci viene da anni."}];
 LIB.hints(e,["La porta ha un sensore.","Si è aperta, di notte?","Il braccialetto registra il battito.","Il medico l'aveva avvertita.","L'azienda sanitaria ha scritto, ma la mail è chiusa.","Chi ha chiesto il prelievo?","Il muratore ha avuto la sua parte.","Un'altra ricevuta è nascosta.","Che cosa lascia il testamento?","Da quanto non la vede?","Ricerche fatte dopo.","Chi aveva il telefono?","Pia ha lasciato un appunto vocale.","Pia ha scritto di chi resta.","Che cosa è successo davvero?"]);
});
})();
