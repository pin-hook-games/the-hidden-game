(function(){
/* Furti 16: Il trattore (Cuneo). Soluzione: il rivenditore Aimar.
   Cinque furti, tutti a clienti di Aimar Macchine, tutti con il GPS disturbato a pochi metri dalla cascina. In officina Aimar fattura ricambi per il telaio del trattore rubato a Beppe l'anno prima. Il camion visto dalla telecamera del caseificio ha il logo coperto male. Falsa pista: il vicino Giraudo. */
const SC={
 tra:()=>LIB.obj("#b7c48a","🚜","Il trattore nuovo, in leasing"),
 gps:()=>LIB.doc("Localizzatore · ultimo segnale","#33658a",["Dom 2:40, cascina Bruno","«disturbo del segnale»","a 15 metri dal fienile","poi niente"]),
 lis:()=>LIB.doc("Consorzio · furti dell'anno","#55606b",["5 trattori rubati","tutti acquistati da Aimar Macchine","tutti con «disturbo del segnale»","tutti con leasing in corso"]),
 fat:()=>LIB.doc("Fattura ricambi · Aimar Macchine","#a02822",["Telaio n. 7741","cabina e pompa idraulica","emessa a ottobre","(il trattore rubato a Beppe nel 2024)"]),
 cam:()=>LIB.doc("Telecamera caseificio Valle · 2:52","#2f6b4f",["Camion con rimorchio basso","logo sul fianco coperto da un telo","si legge «...MAR MACCH...»","direzione Saluzzo"]),
 gir:()=>LIB.two("#b7c48a","#55606b","#7a3b5a","Giraudo e la moglie in Liguria, domenica")
};
const MAP=LIB.city("Cuneo",[[40,52,"Cuneo"],[132,132,"Cascina Bruno"],[276,132,"Caseificio Valle"],[40,232,"Saluzzo"],[300,40,"Montagne"],[200,200,"Statale"]],
 [[150,140,"#d43d55","cascina",9,-10],[280,150,"#33658a","caseificio",9,-8],[60,226,"#2f6b4f","Aimar Macchine",9,-8]],[["M0 100Q200 80 400 120",8]]);

LIB.add(56,["Il trattore","Il consorzio vuole sapere chi porta via i trattori della valle","Cuneo"],{
 map:MAP,scenes:SC,owner:"Beppe Bruno",time:"14:00",date:"mar 18 nov",homeDate:"martedì 18 novembre",
 appIds:"msg tel mail gal map cal note",
 late:"Beppe deve andare a mungere. Si riprende il telefono.",
 brief:"A Beppe Bruno, 46 anni, agricoltore della provincia di Cuneo, domenica notte hanno portato via il secondo trattore in un anno. È il quinto furto nella valle. Il consorzio agrario ti ha passato il telefono di Beppe, che ha già fatto sei denunce in vita sua e nessuna è servita.",
 quote:"«Il primo trattore me l'hanno rubato l'anno scorso, il secondo domenica. Con il vicino Giraudo sono in causa per un confine da tre anni, e lui sa dove tengo le chiavi. Ma due trattori? Ci vuole un camion, ci vuole gente che sa. Mi trovi chi è.»",
 chats:[
  {id:"gir",name:"Giraudo",sub:"Vicino",m:[
   ["dom",0,"Bruno, ho saputo del trattore. Noi abbiamo litigato per il confine, ma queste cose no. Io domenica ero in Liguria da mia figlia, con mia moglie. Ti mando la foto."]]},
  {id:"aim",name:"Aimar Macchine",sub:"Rivenditore",m:[
   ["mar 2024",0,"Beppe, il trattore nuovo te lo do con un leasing comodo. E ti metto pure il localizzatore, così dormi tranquillo."],
   ["lun",0,"Beppe, che sfortuna. Se vuoi ti trovo un usato buono, ti faccio un prezzo da amico."]]},
  {id:"con",name:"Consorzio agrario",sub:"",m:[
   ["lun",0,"Beppe, siamo a cinque furti. Tutti trattori comprati da Aimar, tutti con il segnale disturbato. Ti giro l'elenco."]]},
  {id:"cas",name:"Caseificio Valle",sub:"Marisa",m:[
   ["lun",0,"Beppe, la nostra telecamera sulla strada ha ripreso un camion alle 2:52 di domenica. Logo coperto da un telo, ma si legge un pezzo. Ti mando la foto."]]},
  {id:"mec",name:"Tonino",sub:"Meccanico in pensione",m:[
   ["",2,"1 messaggio eliminato."],
   ["mar 9:00",0,"Beppe, mio nipote lavora da Aimar in magazzino. Ha visto una fattura di ricambi per il telaio 7741. Non è il tuo vecchio trattore, quello rubato l'anno scorso? Lo stanno rimontando con un'altra cabina.","mec"]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Leasing agricolo",sub:"Contratto",meta:"2024",body:"Trattore acquistato da Aimar Macchine. Leasing in 48 rate. Telaio: 9120."},
   {id:"m2",title:"Carabinieri",sub:"Denuncia 2024",meta:"2024",body:"Furto trattore, telaio n. 7741, acquistato da Aimar Macchine nel 2021."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Caseificio Valle",sub:"Sulla statale",body:"Tre chilometri dalla cascina, verso Saluzzo."},
   {id:"g2",g:"Luoghi",title:"Aimar Macchine",sub:"Saluzzo",body:""}],
  cal:[
   {id:"c1",g:"Domenica",title:"Cena dai cugini",sub:"20:00",body:"Rientro all'una."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: l'ora in cui si è perso il segnale, quattro cifre con lo zero davanti.\nNota sotto: il numero di telaio del trattore rubato nel 2024."},
   {id:"n2",title:"Per il consorzio",lock:"note",body:"Aimar ci vende il trattore, ci mette lui il localizzatore e sa dove sta.\nQuando il leasing è a metà, il trattore sparisce. Lo smonta e lo rivende.\nIl mio vecchio 7741 è nella sua officina con una cabina nuova.\nGiraudo domenica era in Liguria."}],
  tel:[
   {id:"t1",title:"Caseificio Valle",sub:"lun · in entrata, 4 min"}]
 },
 photos:[
  {id:"p1",t:"2024",title:"Il trattore",sc:"tra"},
  {id:"p2",t:"lun",title:"Elenco",sc:"lis"},
  {id:"p3",t:"dom",title:"Da Giraudo",sc:"gir"},
  {id:"p4",t:"lun",title:"Caseificio",sc:"cam"},
  {id:"h1",t:"dom",title:"Segnale",sc:"gps",lock:"album"},
  {id:"h2",t:"mar",title:"Fattura",sc:"fat",lock:"album"}],
 pins:{note:"7741",album:"0240"},
 events:[{id:"a",q:3,kind:"call",from:"Aimar Macchine",lines:["«Beppe? Ah, non è lui.»","«Gli dica che ho un trattore usato perfetto per lui. Prezzo da amico, eh.»","«E che non perda tempo con i carabinieri, tanto non trovano mai niente.»"]},
         {id:"b",q:7,kind:"sms",from:"Marisa, caseificio",text:"Beppe, ho riguardato il video: il camion è passato anche ad agosto, la notte del furto dai Ghigo. Stesso telo, stesso rimorchio."}],
 qs:[
  {t:"Liguria",q:"Dov'era il vicino Giraudo domenica notte?",any:["liguri","figlia"],show:"In Liguria, dalla figlia",hint:"Chat con Giraudo.",news:"La falsa pista cade."},
  {t:"5",q:"Quanti trattori sono stati rubati nella valle quest'anno?",a:["5","cinque"],show:"Cinque",hint:"Chat del consorzio e Galleria.",news:"Tutti comprati dallo stesso rivenditore."},
  {t:"Aimar",q:"Da quale rivenditore?",any:["aimar"],show:"Aimar Macchine",hint:"Elenco del consorzio.",news:"Che monta anche il localizzatore."},
  {t:"2:40",q:"A che ora si è perso il segnale del trattore di Beppe?",all:["240"],show:"Alle 2:40",hint:"Galleria o elenco: tutti con «disturbo del segnale». Il codice dell'album è quest'ora.",news:"A 15 metri dal fienile. Qualcuno sapeva dov'era il localizzatore."},
  {t:"2:52",q:"A che ora la telecamera del caseificio ha ripreso il camion?",all:["252"],show:"Alle 2:52",hint:"Chat con il caseificio.",news:"Dodici minuti dopo."},
  {t:"MAR MACCH",q:"Che cosa si legge sotto il telo del camion?",any:["marmacch","macch"],show:"«...MAR MACCH...»",hint:"Foto del caseificio.",news:"AIMAR MACCHINE. Ora hai recuperato il messaggio di Tonino.",unlock:"mec"},
  {t:"7741",q:"Il telaio della fattura di ricambi da Aimar: quale numero?",a:["7741"],show:"7741",hint:"Messaggio di Tonino.",news:"Il trattore rubato a Beppe nel 2024."},
  {t:"Saluzzo",q:"In che direzione andava il camion?",any:["saluzz"],show:"Verso Saluzzo",hint:"Foto del caseificio e Mappe.",news:"Dove ha sede Aimar Macchine."},
  {t:"leasing",q:"Nella nota protetta: quando spariscono i trattori, secondo Beppe?",any:["leasing","meta","rate"],show:"A metà del leasing",hint:"Il codice: il telaio del 2024.",news:"Aimar li vende, li fa sparire e li rivende."},
  {t:"a",q:"Chi porta via i trattori?",o:[["g","Giraudo, il vicino"],["a","Aimar, il rivenditore"],["c","Il caseificio"],["b","Beppe, per l'assicurazione"],["t","Tonino"]],a:"a",show:"Aimar",hint:"Chi vende, chi sa dove è il localizzatore, di chi è il camion?",news:""}],
 win:{title:"I trattori li porta via Aimar, il rivenditore.",
  steps:["Cinque furti nella valle, tutti trattori venduti da Aimar e tutti con il segnale disturbato.","Il localizzatore lo monta Aimar. Quello di Beppe si è spento alle 2:40 a 15 metri dal fienile.","Alle 2:52 un camion con la scritta «...MAR MACCH...» coperta male passa davanti al caseificio, verso Saluzzo.","Nell'officina di Aimar si rimonta il telaio 7741, il trattore rubato a Beppe nel 2024.","Giraudo era in Liguria."],
  end:"I carabinieri entrano da Aimar Macchine con il consorzio. Nel capannone dietro trovano tre trattori smontati, uno è di Beppe. Giraudo passa alla cascina con una bottiglia di vino: «Per il confine, facciamo metà e metà?» Beppe ci pensa, poi apre la bottiglia."}
});
LIB.tune(56,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const m1=e.lists.mail.find(x=>x.id==="m1");m1.lock="lea";
 m1.body="Trattore acquistato da Aimar Macchine. Leasing in 48 rate: pagata la 24 a ottobre, siamo a metà.\nClausola 9: in caso di furto, la quota residua viene liquidata dall'assicurazione direttamente al rivenditore, Aimar Macchine.";
 e.pins={album:"0240",lea:"9120",note:"2452"};
 e.locks={album:{hint:"Quando il trattore ha smesso di dire dov'era."},lea:{name:"Mail protetta",hint:"Il numero di telaio del trattore che avevo adesso."},note:{hint:"A che punto ero con le rate, poi i minuti del camion."}};
 e.spots=[
  {id:"s1",x:150,y:140,label:"Cascina Bruno",title:"Cascina Bruno",sub:"Azienda agricola",body:"Fienile a quindici metri dalla strada. Il trattore rubato domenica aveva il telaio 9120."},
  {id:"s2",x:280,y:150,label:"Caseificio Valle",title:"Caseificio Valle",sub:"Formaggi · ★ 4,9",body:"Telecamera sulla statale, accesa tutta la notte.\nRecensione: «Toma buonissima, e Marisa vede tutto quello che passa.»"},
  {id:"s3",x:60,y:226,label:"Aimar Macchine",title:"Aimar Macchine",sub:"Trattori nuovi e usati · ★ 4,0",body:"Recensione: «Ti installano loro il localizzatore e ti fanno il leasing. Assistenza completa, anche troppo.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"Aimar Macchine",q:"Secondo il contratto di leasing, chi incassa l'assicurazione se il trattore viene rubato?",any:["aimar","rivendit"],show:"Il rivenditore, Aimar Macchine",hint:"",news:"Aimar incassa due volte: dall'assicurazione, e rivendendo il trattore smontato."});
 LIB.hints(e,["Il vicino si è difeso con una foto.","Il consorzio tiene il conto.","Che cosa hanno in comune quei trattori?","L'ultima volta che il trattore si è fatto sentire.","Una telecamera sulla strada, qualche minuto dopo.","Il telo non copre tutto.","Un vecchio meccanico ha un nipote che parla.","Dove porta quella strada?","Beppe ha scritto al consorzio.","Il contratto ha una clausola, chiusa con il telaio di adesso.","Chi vende, chi sa del localizzatore, chi incassa?"]);
});
})();
