(function(){
/* Furti 8: La Vespa del '63 (Roma). Soluzione: Franco Lanza, il vecchio amico del padre, che la Vespa l'aveva restaurata con lui.
   Il 9 novembre è passato «a salutarla» in cortile con la sua chiave del portone e ha fatto le foto dell'annuncio. Ha venduto la Vespa a un collezionista con una delega falsa firmata «Giorgo»: lo stesso errore del biglietto d'auguri del 1998.
   False piste: il meccanico Sandro (a Napoli) e il fratello Paolo (voleva la sua metà, ma il 14 era a Bari).
   Codici: album = 9 novembre = 0911; copia delega = 1998; nota = 09 (prezzo in migliaia) + 27 (civico di Lanza, nella delega) = 0927. */
const SC={
 ves:()=>LIB.obj("#9cc7d6","🛵","La Vespa di papà, 1963"),
 pap:()=>LIB.two("#f0d9a0","#55606b","#7a3b5a","Papà e Franco con la Vespa rifatta, 1990"),
 ann:()=>LIB.doc("Annuncio · screenshot","#a02822",["Vespa 150 del 1963, originale","Prezzo: 9.000 €","Foto: cortile con bouganville","Pubblicato e rimosso in 1 giorno"]),
 cor:()=>LIB.obj("#e2a0c0","🌺","La bouganville del cortile"),
 bia:()=>LIB.doc("Biglietto d'auguri · 1998","#7a3b5a",["Al piccolo Giorgo","per i suoi 7 anni","un giro in Vespa promesso","zio Franco"]),
 fra:()=>LIB.two("#e2a0c0","#55606b","#9cc7d6","9 novembre: Franco «saluta» la Vespa in cortile"),
 bon:()=>LIB.doc("Ricevuta del collezionista","#2f6b4f",["Da: G. Venturi","A: F. Lanza","9.000,00 €","causale: Vespa 150"])
};
const MAP=LIB.city("Roma",[[40,52,"Prati"],[132,132,"Trastevere"],[276,132,"San Lorenzo"],[40,232,"Testaccio"],[300,40,"Villa Ada"],[200,200,"Tevere"]],[]);

LIB.add(48,["La Vespa del '63","Giorgio vuole ritrovare la Vespa del padre, sparita dal cortile","Roma"],{
 map:MAP,scenes:SC,owner:"Giorgio Ricci",time:"19:00",date:"gio 20 nov",homeDate:"giovedì 20 novembre",
 appIds:"msg tel mail gal map cal note web",
 late:"Giorgio va a cena da sua madre e si riprende il telefono.",
 brief:"Dal cortile del palazzo di Trastevere dove abita Giorgio Ricci, 34 anni, è sparita la Vespa 150 del 1963 del padre, morto in primavera. Giorgio sospetta il meccanico del quartiere, che gli aveva offerto 3.000 euro. Sua madre, a bassa voce, sospetta il fratello Paolo. Giorgio ti ha dato il suo telefono.",
 quote:"«Sandro me l'aveva chiesta tre volte. Paolo vuole la sua metà di tutto, da quando papà non c'è più. Non so quale delle due cose mi fa più male. La Vespa non si vende: ritrovala.»",
 locks:{
  album:{hint:"Il giorno in cui qualcuno è venuto a salutarla."},
  agz:{name:"Copia della delega",hint:"L'anno in cui qualcuno sbagliava già il mio nome."},
  note:{hint:"Quanto chiedevano, in migliaia, poi un numero civico."}},
 chats:[
  {id:"fam",name:"Famiglia Ricci",sub:"Gruppo",m:[
   ["mag",0,"Paolo: La Vespa la teniamo a metà, come tutto il resto. È anche mia."],
   ["mag",1,"La tengo io in cortile, ma è di tutti e due. Non si vende."],
   ["ott",0,"Paolo: Io ho bisogno di soldi, lo sapete. Metà della Vespa sono quattro, cinquemila euro."],
   ["ott",0,"Mamma: Paolo, non si vende niente di papà."]]},
  {id:"fra",name:"Franco",sub:"Amico di papà",m:[
   ["9 nov",0,"Giorgio caro, posso passare in cortile a salutare la Vespa? L'abbiamo rifatta io e tuo padre, pezzo per pezzo, nel '90."],
   ["9 nov",1,"Certo Franco. La chiave del portone ce l'hai ancora?"],
   ["9 nov",0,"Quella che mi diede tuo padre. Non l'ho mai tolta dal mazzo."],
   ["dom",0,"Che dolore, Giorgio. Chi può fare una cosa così?"],
   ["",2,"1 messaggio eliminato."],
   ["dom 23:40",0,"Tuo padre me l'aveva promessa, sai. «Quando non ci sarò, la Vespa va a Franco.» Era mia quanto vostra.","fra"]]},
  {id:"san",name:"Sandro",sub:"Meccanico",m:[
   ["sett",0,"Giorgio, per la Vespa ti do 3.000, contanti. Pensaci."],
   ["dom",0,"Ho saputo. Io il 15 ero a Napoli dai miei, chiedi a chi vuoi. Ti dico una cosa: una 150 del '63 è passata su un sito di annunci, mercoledì. Rimossa la sera stessa."]]},
  {id:"pao",name:"Paolo",sub:"Fratello",m:[
   ["dom",0,"Ma dai, che peccato. Hai fatto denuncia?"],
   ["dom",1,"Sì. Tu non ne sai niente, vero?"],
   ["dom",0,"Giorgio, la mia metà la voglio, è vero. Ma alla luce del sole. Venerdì 14 ero a Bari per lavoro, ti mando il biglietto del treno se vuoi."]]},
  {id:"pra",name:"Agenzia pratiche auto",sub:"",m:[
   ["lun",0,"Sig. Ricci, il passaggio di proprietà della Vespa è stato fatto venerdì 14 con una sua delega. La firma è «Giorgo», senza la i. Le abbiamo mandato per mail la copia della delega."]]}
 ],
 lists:{
  web:[
   {id:"w1",g:"Cronologia",title:"Vespa 150 1963 · annuncio rimosso",sub:"mercoledì 12",body:"Prezzo 9.000 €. Foto: la Vespa davanti a una bouganville viola, su piastrelle a scacchi. Rimosso alle 22."},
   {id:"w2",g:"Cronologia",title:"G. Venturi collezionista",sub:"Club Vespa d'epoca",body:"Giulio Venturi, collezionista di Vespe, Bologna."}],
  mail:[
   {id:"m1",title:"Carabinieri",sub:"Denuncia di furto",meta:"sabato",body:"Denuncia del 15 novembre: Vespa 150 del 1963, sparita dal cortile."},
   {id:"m2",title:"Agenzia pratiche auto",sub:"Copia della delega",meta:"lunedì",lock:"agz",body:"Il sottoscritto Giorgo Ricci delega il sig. Franco Lanza, via dei Genovesi 27, Roma, alla vendita del veicolo Vespa 150 del 1963.\nFirma: Giorgo Ricci."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Cortile, via della Lungara",sub:"Casa",body:""}],
  cal:[
   {id:"c1",g:"Novembre",title:"Ven 14 · Lavoro a Firenze",sub:"tutto il giorno",body:""},
   {id:"c2",g:"Novembre",title:"Dom 9 · Franco passa in cortile",sub:"16:00",body:""}],
  note:[
   {id:"n1",title:"Da fare",body:"Chiedere alla mamma chi ha ancora le chiavi del portone"},
   {id:"n2",title:"Non lo dico alla mamma",lock:"note",body:"Non è stato Paolo. Non è stato Sandro.\nÈ stato Franco, che mi teneva in braccio sulla Vespa quando avevo sette anni.\nMi chiamava già «Giorgo».\nNon voglio i soldi indietro. Voglio la Vespa di papà. E poi, forse, voglio che Franco ci faccia un ultimo giro, con me dietro."}],
  tel:[
   {id:"t1",title:"Agenzia pratiche auto",sub:"lun · in entrata, 6 min"}]
 },
 spots:[
  {id:"s1",x:150,y:150,label:"Il cortile",title:"Cortile di via della Lungara",sub:"Portone con chiave antica",body:"Una chiave che nessuno ha mai cambiato in trent'anni. Le copie in giro sono tante: amici di famiglia, vicini, vecchi inquilini."},
  {id:"s2",x:270,y:120,label:"Officina Sandro",title:"Officina Sandro",sub:"Moto e scooter · ★ 4,2",body:"Recensione: «Sandro ti fa un'offerta per qualsiasi cosa con due ruote. Poi però non insiste.»"},
  {id:"s3",x:70,y:70,label:"Lanza Vespe d'epoca",title:"Lanza · Vespe d'epoca",sub:"Restauro · chiuso per pensione",body:"Recensione: «Il signor Franco ha rimesso a nuovo mezza Roma. Diceva sempre che la Vespa più bella l'aveva fatta con un amico, nel '90.»"}],
 photos:[
  {id:"p1",t:"mag",title:"La Vespa",sc:"ves"},
  {id:"p2",t:"1990",title:"Papà e Franco",sc:"pap"},
  {id:"p3",t:"giugno",title:"Il cortile",sc:"cor"},
  {id:"p4",t:"dom",title:"Da Sandro",sc:"ann"},
  {id:"p5",t:"1998",title:"Biglietto",sc:"bia"},
  {id:"h1",t:"9 nov",title:"Franco in cortile",sc:"fra",lock:"album"},
  {id:"h2",t:"mar",title:"Dal collezionista",sc:"bon",lock:"album"}],
 pins:{album:"0911",agz:"1998",note:"0927"},
 events:[{id:"a",q:3,kind:"sms",from:"Mamma",text:"Giorgio, ho chiesto in giro chi ha ancora le chiavi del portone. Tuo padre le dava a tutti. Anche a Franco, ovviamente."},
         {id:"b",q:9,kind:"call",from:"Giulio Venturi",lines:["«Buonasera, sono Venturi, di Bologna. Ho comprato una Vespa del '63 da un signore anziano, molto distinto.»","«L'agenzia mi ha chiamato per la delega. Io ho pagato in buona fede, novemila euro.»","«Se la Vespa è di vostro padre, ve la riporto io. Non voglio una cosa rubata in garage.»"]}],
 qs:[
  {t:"3000",q:"Quanto aveva offerto il meccanico Sandro?",a:["3000","3.000","tremila","3000 euro","3.000 euro","3.000 €"],show:"3.000 €",hint:"Il meccanico era stato insistente.",news:"La pista di Giorgio."},
  {t:"Napoli",q:"Dov'era Sandro il 15?",any:["napoli"],show:"A Napoli, dai suoi",hint:"Si è difeso da solo.",news:"E ti indica un annuncio."},
  {t:"9000",q:"Prezzo dell'annuncio della Vespa?",a:["9000","9.000","novemila","9000 euro","9.000 euro","9.000 €"],show:"9.000 €",hint:"Qualcuno ha cercato l'annuncio in rete.",news:"Rimosso la sera stessa."},
  {t:"bouganville",q:"Che pianta si vede dietro la Vespa nelle foto dell'annuncio?",any:["bougan","buganv"],show:"Una bouganville viola",hint:"Confronta con le foto di casa.",news:"E le piastrelle a scacchi. Le foto sono state fatte nel cortile di Giorgio, da qualcuno che ci è entrato."},
  {t:"Franco",q:"Chi è entrato in cortile pochi giorni prima, «per salutarla»?",any:["franco","lanza","amico"],show:"Franco, l'amico di papà, il 9 novembre",hint:"Un vecchio amico ha chiesto un permesso.",news:"Con la sua chiave del portone, mai tolta dal mazzo."},
  {t:"14 novembre",q:"Quando è stato fatto il passaggio di proprietà? Giorno e mese.",all:["14","nov"],show:"Venerdì 14 novembre",hint:"C'è chi si occupa di passaggi e ha scritto.",news:"Con una delega a nome di Giorgio."},
  {t:"Firenze",q:"Dov'era Giorgio quel giorno?",any:["firenz"],show:"A Firenze, per lavoro",hint:"Giorgio aveva un impegno segnato.",news:"Non può aver firmato niente."},
  {t:"Bari",q:"E Paolo, il fratello, dov'era il 14?",any:["bari"],show:"A Bari, per lavoro",hint:"Paolo si è difeso da solo.",news:"La sua metà la vuole, ma «alla luce del sole»."},
  {t:"Giorgo",q:"Come è scritto il nome nella firma della delega?",any:["giorgo"],show:"«Giorgo», senza la i",hint:"L'agenzia l'ha notato subito.",news:"Un errore che qualcuno faceva già tanti anni fa."},
  {t:"1998",q:"In che anno qualcuno scriveva già «Giorgo»?",a:["1998","nel 1998","98"],show:"Nel 1998, nel biglietto d'auguri di «zio Franco»",hint:"Una vecchia foto di carta.",news:"Il biglietto per i sette anni di Giorgio. Firmato zio Franco."},
  {t:"Franco Lanza",q:"Chi è il delegato nella copia della delega?",all:["lanza"],show:"Franco Lanza, via dei Genovesi 27",hint:"L'agenzia ha mandato una copia, chiusa a chiave.",news:"Ora hai recuperato il messaggio che Franco ha mandato domenica sera e poi cancellato.",unlock:"fra"},
  {t:"Venturi",q:"Chi ha comprato la Vespa?",any:["venturi","giulio","collezion"],show:"Giulio Venturi, collezionista di Bologna",hint:"Chi compra paga, e chi paga lascia una ricevuta.",news:"Ha pagato 9.000 € a F. Lanza, in buona fede."},
  {t:"f",q:"Chi ha preso la Vespa?",o:[["s","Sandro, il meccanico"],["p","Paolo, il fratello"],["f","Franco, l'amico di papà, con una delega falsa"],["v","Venturi, il collezionista"],["m","La madre"]],a:"f",show:"Franco, l'amico di papà",hint:"Chi è entrato in cortile, e chi scriveva «Giorgo»?",news:""}],
 win:{title:"La Vespa l'ha venduta Franco, l'amico di papà.",
  steps:["Sandro il 15 era a Napoli, Paolo il 14 a Bari.","Le foto dell'annuncio da 9.000 € sono state fatte nel cortile: il 9 novembre Franco era entrato «a salutare la Vespa», con la sua vecchia chiave.","La delega è firmata «Giorgo», come il biglietto d'auguri di «zio Franco» del 1998.","Nella delega il delegato è Franco Lanza. Il collezionista Venturi gli ha pagato 9.000 €.","Franco era convinto che il padre gliel'avesse promessa."],
  end:"Venturi riporta la Vespa da Bologna con un carrello. Giorgio non denuncia Franco. Una domenica di dicembre lo va a prendere sotto casa e gli lancia il casco: «Guidi tu. Io sto dietro, come quando avevo sette anni.»"}
});
})();
