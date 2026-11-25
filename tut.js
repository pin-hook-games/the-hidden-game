(function(){
/* Caso tutorial (n. 81): «La torta sparita». Breve, guidato, insegna le basi:
   leggere le chat, trovare un codice, aprire l'album nascosto, toccare la mappa, rispondere a una chiamata, scartare una falsa pista.
   Soluzione: nessun furto. Dario ha spostato la torta nel frigo della sala riunioni B per la festa a sorpresa di Luca. */
const SC={
 cake:()=>LIB.obj("#f3d9c4","🎂","La torta di Luca, consegnata alle 9:30"),
 team:()=>LIB.group(5,"L'ufficio al completo","#33658a"),
 kit:()=>LIB.obj("#cfd8dc","🧊","Cucina, 11:00: il frigo è vuoto"),
 dario:()=>LIB.obj("#e9e2d6","🚪","10:52 · Dario con un vassoio, verso la sala B"),
 sign:()=>LIB.doc("Biglietto sul frigo della sala B","#2f6b4f",["«NON APRIRE»","«Riunione importante alle 16»","D."])
};
const MAP=LIB.city("Ufficio",[[60,60,"Ingresso"],[200,70,"Open space"],[320,90,"Cucina"],[90,220,"Sala riunioni B"],[280,220,"Scrivania di Pietro"]],[]);
LIB.add(81,["La torta sparita","Il tuo primo incarico: due minuti per imparare","Ufficio"],{
 map:MAP,scenes:SC,owner:"Chiara · telefono dell'ufficio",time:"11:05",date:"ven 14 nov",homeDate:"venerdì 14 novembre",
 appIds:"msg tel mail gal map note",timer:0,
 brief:"Benvenuto. Questo è un caso di prova per imparare come si gioca. Chiara ti presta il telefono dell'ufficio: oggi è il compleanno di Luca e la torta è sparita dal frigo della cucina. Tutti accusano Pietro, il goloso dell'ufficio. In basso hai due schede: «Telefono», dove frughi, e «Indagine», dove rispondi alle domande una alla volta.",
 quote:"«Scopri dov'è finita la torta prima delle quattro, quando arriva Luca. E non accusare nessuno senza prove.»",
 locks:{album:{hint:"L'ora in cui è arrivata la torta, senza i due punti. La trovi nella chat con la pasticceria."}},
 chats:[
  {id:"pas",name:"Pasticceria Dolce Vita",sub:"",m:[["ven 9:31",0,"Buongiorno! Torta consegnata alle 9:30, l'abbiamo messa nel frigo della cucina come chiesto."],["ven 9:32",1,"Grazie mille!"]]},
  {id:"pie",name:"Pietro",sub:"Collega",m:[["ven 11:01",1,"Pietro, sei stato tu a mangiare la torta di Luca?"],["ven 11:02",0,"Io?? Sono in riunione col cliente dalle 10, chiedi a Gianna!"]]},
  {id:"gia",name:"Gianna",sub:"Collega",m:[["ven 11:03",0,"Pietro è con me e con il cliente dalle 10, non si è mai mosso. Poverino 😂"]]},
  {id:"dar",name:"Dario",sub:"Collega",m:[["ven 10:50",0,"Chiara, per la cosa di oggi pomeriggio ci penso io. Tu fai finta di niente 😉"],["ven 11:04",0,"(vocale) Non preoccuparti per la torta, è tutto sotto controllo! A dopo!"]]}
 ],
 lists:{
  mail:[{id:"m1",title:"Dario",sub:"Festa a sorpresa per Luca",meta:"giovedì",body:"Ciao a tutti, domani alle 16 festa a sorpresa per Luca in sala riunioni B. Mi raccomando: lui non deve sapere niente!"}],
  note:[{id:"n1",title:"Come si gioca",body:"1. Leggi chat, mail e note.\n2. I contenuti protetti si aprono con un codice: il suggerimento ti dice dove cercarlo.\n3. Tocca i punti della mappa per scoprire cosa c'è.\n4. Nella scheda «Indagine» rispondi alle domande: ogni risposta giusta sblocca la successiva.\n5. Se ti blocchi, chiedi un suggerimento."}],
  tel:[{id:"t1",title:"Pasticceria Dolce Vita",sub:"ven 9:28 · in entrata, 1 min"}]
 },
 spots:[
  {id:"s1",x:320,y:98,label:"Cucina",title:"Cucina",sub:"Frigo grande",body:"Nel frigo c'è solo il latte. Sul pavimento, nessuna briciola: la torta non è stata mangiata qui."},
  {id:"s2",x:90,y:228,label:"Sala B",title:"Sala riunioni B",sub:"Frigo piccolo",body:"Il frigo piccolo della sala B è chiuso con un biglietto: «NON APRIRE». Dentro si intravede una scatola bianca con un fiocco."},
  {id:"s3",x:280,y:228,label:"Pietro",title:"Scrivania di Pietro",sub:"",body:"Scrivania in ordine. Pietro è in riunione dalle 10."}],
 photos:[
  {id:"p1",t:"ven 9:35",title:"La torta",sc:"cake"},
  {id:"p2",t:"set",title:"L'ufficio",sc:"team"},
  {id:"p3",t:"ven 11:00",title:"Il frigo",sc:"kit"},
  {id:"h1",t:"ven 10:52",title:"Dalla telecamera del corridoio",sc:"dario",lock:"album"},
  {id:"h2",t:"ven 10:58",title:"Il frigo della sala B",sc:"sign",lock:"album"}],
 pins:{album:"0930"},
 events:[{id:"a",q:3,kind:"call",from:"Dario",lines:["«Chiara! Sono Dario, ti chiamo di nascosto.»","«La torta l'ho spostata io nel frigo della sala B, così Luca non la vede!»","«Che bello, sarà una sorpresa perfetta. A dopo!»"]}],
 qs:[
  {t:"9:30",q:"A che ora è stata consegnata la torta? Suggerimento: apri l'app Messaggi.",all:["930"],show:"Alle 9:30",hint:"Apri Messaggi e leggi la chat con la Pasticceria Dolce Vita.",news:"Brava, hai letto la chat giusta. Ora sai anche il codice dell'album nascosto: prova ad aprirlo nella Galleria."},
  {t:"Pietro",q:"Tutti accusano Pietro. Era in riunione dalle 10? Rispondi sì o no.",a:["si","sì","yes"],show:"Sì, con Gianna e il cliente",hint:"Leggi la chat con Gianna: conferma dove era Pietro.",news:"Pietro ha un alibi: è una falsa pista. Nei casi veri ce ne saranno tante."},
  {t:"Dario",q:"Apri l'album nascosto della Galleria (codice: l'ora della consegna). Chi va verso la sala B con un vassoio alle 10:52?",any:["dario"],show:"Dario",hint:"Galleria → Album nascosto → codice 0930.",news:"Tra poco potrebbe arrivare una chiamata: rispondi e ascolta."},
  {t:"sala B",q:"Tocca i punti della mappa. Dove si trova adesso la scatola con il fiocco?",any:["sala b","riunion","frigo piccolo","sala"],show:"Nel frigo della sala riunioni B",hint:"Apri Mappe e tocca il punto «Sala B».",news:"La mail di Dario spiega tutto: alle 16 c'è una festa a sorpresa."},
  {t:"d",q:"Che cosa è successo alla torta?",o:[["p","L'ha mangiata Pietro"],["d","L'ha nascosta Dario per la festa a sorpresa"],["c","L'ha portata via il corriere"]],a:"d",show:"L'ha nascosta Dario per la festa",hint:"Metti insieme la foto, la mappa e la mail di Dario.",news:""}],
 win:{title:"Nessun furto: la torta è al sicuro.",
  steps:["La pasticceria l'ha consegnata alle 9:30: da lì hai preso il codice dell'album.","Pietro era in riunione: falsa pista scartata grazie a Gianna.","La telecamera mostra Dario con un vassoio verso la sala B, e la mappa conferma la scatola nel frigo piccolo.","La mail di Dario spiega il motivo: festa a sorpresa alle 16."],
  end:"Hai imparato le basi: leggere, trovare i codici, usare la mappa, ascoltare le chiamate e scartare le false piste. Nei casi veri gli indizi saranno nascosti meglio, ci saranno più codici e più persone che mentono. Buona indagine."}
});
})();
