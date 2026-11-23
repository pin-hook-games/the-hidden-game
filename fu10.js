(function(){
/* Furti 10: Il reliquiario (Assisi). Soluzione: il restauratore Ruggeri.
   L'ha ritirato il 30 ottobre «per un intervento» che non c'è nell'elenco approvato dalla curia, con una ricevuta senza timbro. L'antiquario Lenzi lo ha fotografato già senza il granato. Falsa pista: il sagrestano Gino e l'auto nuova (presa a rate). */
const SC={
 rel:()=>LIB.obj("#c9b79c","⛪","Il reliquiario d'argento, sull'altare"),
 ric:()=>LIB.doc("Ricevuta di ritiro","#55606b",["Reliquiario d'argento","ritirato per intervento","30 ottobre · firma: M. Ruggeri","(senza timbro della curia)"]),
 ele:()=>LIB.doc("Interventi approvati 2025","#33658a",["1. Pala d'altare · pulitura","2. Crocifisso ligneo","3. Candelieri","(il reliquiario non c'è)"]),
 len:()=>LIB.doc("Foto dall'antiquario · 4 novembre","#a02822",["Reliquiario d'argento","manca il granato centrale","«Lo offre un restauratore»","Antichità Lenzi, Perugia"]),
 aut:()=>LIB.car("#9a1c1c","L'auto nuova di Gino"),
 gin:()=>LIB.doc("Contratto finanziamento · Gino","#2f6b4f",["Auto usata","60 rate da 180 €","firmato a settembre","(foto mandata da Gino)"])
};
const MAP=LIB.city("Assisi",[[40,52,"Basilica"],[132,132,"Piazza del Comune"],[276,132,"Santa Maria"],[40,232,"Perugia →"],[300,40,"Rocca"],[200,200,"Valle"]],
 [[170,120,"#d43d55","la chiesa",9,-10],[70,226,"#33658a","laboratorio Ruggeri",9,-8]]);

LIB.add(50,["Il reliquiario","La curia vuole sapere dov'è il reliquiario d'argento di don Sergio","Assisi"],{
 map:MAP,scenes:SC,owner:"don Sergio",time:"17:00",date:"sab 22 nov",homeDate:"sabato 22 novembre",
 appIds:"msg tel mail gal map cal note",
 late:"Don Sergio deve celebrare la messa delle 18. Gli serve il telefono per le letture.",
 brief:"Da una chiesa di Assisi è sparito un reliquiario d'argento del Seicento. Il parroco, don Sergio, 70 anni, dice che l'ha dato al restauratore «per un piccolo intervento», ma la curia non ne sa niente. In paese tutti guardano il sagrestano, che si è appena comprato un'auto. Don Sergio ti ha affidato il suo telefono.",
 quote:"«Il restauratore Ruggeri lavora per noi da dieci anni, mi ha detto che la curia era d'accordo. Io l'ho creduto. Poi il sagrestano Gino si è presentato con una macchina rossa, e la gente parla. Io non voglio accusare nessuno. Voglio che il reliquiario torni sull'altare per Natale.»",
 chats:[
  {id:"rug",name:"Ruggeri",sub:"Restauratore",m:[
   ["29 ott",0,"Don Sergio, domani passo a prendere il reliquiario per sistemare il castone del granato. La curia lo sa, ho già l'autorizzazione."],
   ["30 ott",1,"Va bene, le firmo la ricevuta."],
   ["20 nov",0,"Don Sergio, ancora qualche settimana. L'argento è delicato."]]},
  {id:"cur",name:"Curia · ufficio beni culturali",sub:"",m:[
   ["lun",0,"Don Sergio, nel nostro elenco 2025 non c'è nessun intervento sul reliquiario. Chi l'ha autorizzato?"]]},
  {id:"gin",name:"Gino",sub:"Sagrestano",m:[
   ["dom",0,"Don Sergio, in paese dicono che ho rubato io perché ho la macchina. È usata e la pago a rate, cinque anni. Le mando il contratto."],
   ["dom",0,"E le dico un'altra cosa: il 4 novembre a Perugia, da Lenzi, l'antiquario, c'era Ruggeri con una borsa. L'ho visto io, aspettavo il bus.","gin"]]},
  {id:"len",name:"Antichità Lenzi",sub:"",m:[
   ["mer",0,"Reverendo, mi hanno girato il suo numero. Il 4 novembre un restauratore mi ha offerto un reliquiario. Gli ho fatto delle foto e ho detto che ci pensavo. Quando ho letto della chiesa, ho capito. Le mando le foto."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Curia",sub:"Elenco interventi approvati 2025",meta:"gennaio",body:"1. Pala d'altare, pulitura.\n2. Crocifisso ligneo, consolidamento.\n3. Candelieri, lucidatura.\nNessun altro intervento autorizzato."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Laboratorio Ruggeri",sub:"Strada per Perugia",body:""}],
  cal:[
   {id:"c1",g:"Ottobre",title:"Gio 30 · Ritiro reliquiario",sub:"Ruggeri, 10:00",body:""},
   {id:"c2",g:"Dicembre",title:"24 dic · Messa di mezzanotte",sub:"",body:"Reliquiario sull'altare."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese in cui ho consegnato il reliquiario, quattro cifre.\nNota sotto: il giorno e il mese in cui è stato visto a Perugia, quattro cifre."},
   {id:"n2",title:"Esame di coscienza",lock:"note",body:"Ho firmato senza chiedere il timbro. È colpa mia la fiducia.\nNelle foto di Lenzi il granato non c'è già più. Ruggeri diceva di dover sistemare il castone: il castone è vuoto.\nGino paga 180 euro al mese per quella macchina. Gli devo delle scuse."}],
  tel:[
   {id:"t1",title:"Curia",sub:"lun · in entrata, 10 min"}]
 },
 photos:[
  {id:"p1",t:"Pasqua",title:"Sull'altare",sc:"rel"},
  {id:"p2",t:"30 ott",title:"Ricevuta",sc:"ric"},
  {id:"p3",t:"gennaio",title:"Elenco",sc:"ele"},
  {id:"p4",t:"dom",title:"Da Gino",sc:"gin"},
  {id:"h1",t:"ott",title:"L'auto di Gino",sc:"aut",lock:"album"},
  {id:"h2",t:"mer",title:"Da Lenzi",sc:"len",lock:"album"}],
 pins:{note:"0411",album:"3010"},
 events:[{id:"a",q:3,kind:"sms",from:"Ruggeri",text:"Don Sergio, ho sentito che la curia fa domande. Non si preoccupi, è un malinteso burocratico, sistemo tutto io la settimana prossima."},
         {id:"b",q:7,kind:"call",from:"Gualtieri",lines:["«Reverendo, sono Gualtieri, perito. La curia mi ha chiamato per la stima del reliquiario.»","«Mi dice che porta e che serratura ha la sagrestia? Me lo segno per la pratica.»","«Grazie. E auguri per Natale.»"]}],
 qs:[
  {t:"Ruggeri",q:"A chi ha consegnato il reliquiario don Sergio?",any:["ruggeri","restaurat"],show:"Al restauratore Ruggeri",hint:"Chat e ricevuta.",news:"«La curia lo sa, ho l'autorizzazione.»"},
  {t:"30 ottobre",q:"Quando? Giorno e mese.",all:["30","ott"],show:"Il 30 ottobre",hint:"Calendario e ricevuta.",news:"Ricevuta firmata, senza timbro della curia."},
  {t:"no",q:"Nell'elenco degli interventi approvati c'è il reliquiario?",a:["no","non c'e","nonce","manca","non c'è"],show:"No",hint:"Mail della curia.",news:"L'autorizzazione non è mai esistita."},
  {t:"rate",q:"Come ha pagato Gino la sua auto?",any:["rat","finanz"],show:"A rate, 60 rate da 180 €",hint:"Chat con Gino e Galleria.",news:"Un'auto usata. La falsa pista cade."},
  {t:"Perugia",q:"In quale città Gino ha visto Ruggeri con una borsa?",any:["perugia"],show:"A Perugia, da un antiquario",hint:"Chat con Gino.",news:"Il 4 novembre."},
  {t:"Lenzi",q:"Come si chiama l'antiquario?",any:["lenzi"],show:"Antichità Lenzi",hint:"Chat.",news:"Ora che sai chi è, hai il secondo messaggio di Gino.",unlock:"gin"},
  {t:"granato",q:"Che cosa manca al reliquiario nelle foto dell'antiquario?",any:["granat","pietr"],show:"Il granato centrale",hint:"Album privato: il codice è il giorno e il mese della consegna.",news:"Ruggeri diceva di dover sistemare il castone. Il castone è vuoto."},
  {t:"4 novembre",q:"Quando Ruggeri ha offerto il reliquiario all'antiquario? Giorno e mese.",all:["4","nov"],show:"Il 4 novembre",hint:"Chat con Lenzi.",news:"Cinque giorni dopo averlo ritirato."},
  {t:"scuse",q:"Nella nota protetta, che cosa pensa di dovere don Sergio a Gino?",any:["scus"],show:"Delle scuse",hint:"Il codice: il giorno e il mese di Perugia.",news:"«È colpa mia la fiducia.»"},
  {t:"r",q:"Chi ha preso il reliquiario?",o:[["g","Gino, il sagrestano"],["r","Ruggeri, il restauratore"],["l","Lenzi, l'antiquario"],["d","Don Sergio"],["c","La curia"]],a:"r",show:"Ruggeri",hint:"Autorizzazione, foto di Lenzi.",news:""}],
 win:{title:"Il reliquiario l'ha preso Ruggeri, il restauratore.",
  steps:["Il 30 ottobre Ruggeri l'ha ritirato con una ricevuta senza timbro, parlando di un'autorizzazione.","Nell'elenco della curia il reliquiario non c'è.","Il 4 novembre l'ha offerto all'antiquario Lenzi a Perugia, già senza il granato.","Gino ha comprato un'auto usata, a rate: 60 da 180 €."],
  end:"I carabinieri trovano il reliquiario nel laboratorio di Ruggeri, avvolto in un panno. Il granato è in una scatolina di latta, pronto per un altro compratore. A Natale il reliquiario è di nuovo sull'altare. Gino lo lucida per due ore, e non vuole aiuto."}
});
LIB.tune(50,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.push({id:"m2",title:"Antichità Lenzi",sub:"Offerta",meta:"5 novembre",lock:"len",body:"Reverendo, le scrivo per onestà. Il 4 novembre al restauratore ho offerto 28.000 € per il reliquiario, senza pietra. Gli ho detto che ci pensavo. Ora so che non era suo."});
 e.pins={album:"3010",len:"1638",note:"0428"};
 e.locks={album:{hint:"Il giorno in cui l'ho affidato, con fiducia."},len:{name:"Mail protetta",hint:"L'anno in cui è stato fatto il reliquiario."},note:{hint:"Il giorno di Perugia, poi le migliaia di un'offerta."}};
 e.spots=[
  {id:"s1",x:170,y:120,label:"San Felice",title:"Chiesa di San Felice",sub:"Chiesa parrocchiale",body:"Sull'altare maggiore, di solito, il reliquiario d'argento del 1638. Ora c'è un panno di velluto."},
  {id:"s2",x:70,y:226,label:"Restauri Ruggeri",title:"Restauri Ruggeri",sub:"Restauratore · ★ 4,5",body:"Recensione: «Bravo, ma tiene le cose per mesi. E non sempre torna tutto.»"},
  {id:"s3",x:96,y:244,label:"Antichità Lenzi",title:"Antichità Lenzi, Perugia",sub:"Antiquario",body:"Recensione: «Onesto. Se una cosa non lo convince, non la compra.»"}];
 e.qs.splice(e.qs.length-1,0,{t:"28000",q:"Quanto ha offerto l'antiquario per il reliquiario?",a:["28000","28.000","28 mila","ventottomila","28000 euro","28.000 euro","28.000 €"],show:"28.000 €, senza pietra",hint:"",news:"E poi ha avvisato don Sergio."});
 LIB.hints(e,["Una ricevuta firmata.","…e datata.","La curia ha un elenco.","Il sagrestano ha mandato un contratto.","Il sagrestano ha visto qualcosa aspettando il bus.","L'antiquario si è fatto vivo lui.","Guarda bene le foto dell'antiquario.","Quando gliel'ha proposto?","Don Sergio ha scritto il suo esame di coscienza.","L'antiquario ha messo una cifra per iscritto, chiusa con l'età del reliquiario.","Autorizzazione, foto, offerta."]);
});
})();
