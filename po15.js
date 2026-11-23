(function(){
/* Intrighi 15: La talpa (Castelnuovo, comune inventato). Soluzione: la talpa è Bianca, la figlia del cliente.
   Ha scoperto le firme false del padre (incarico 7 di questa serie) e porta le registrazioni a un magistrato. La talpa ha ragione. */
const SC={
 sez:()=>LIB.group(4,"Sezione di Alleanza Civica · riunione ristretta","#7a3b5a"),
 pap:()=>LIB.two("#8fb3c9","#55606b","#7a3b5a","Con papà, la mia laurea"),
 kev:()=>LIB.shot("Kevin",["Scusate, devo andare","attacco il turno di notte alle 22"]),
 ami:()=>LIB.two("#f0d9a0","#7a3b5a","#2f6b4f","Con Giulia, praticante avvocata"),
 not:()=>LIB.doc("Sezione · 10 novembre, 23:45","#a02822",["Papà al computer della sezione","Sullo schermo: Elenco iscritti 2015","Accanto: i moduli delle firme","e una penna verde"]),
 pro:()=>LIB.doc("Procura · appuntamento","#33658a",["Dott.ssa Melis","Martedì 25 novembre, ore 10:00","Portare: registrazioni originali","e foto"])
};
const MAP=LIB.prov([[320,84,"#d43d55","sezione",9,-14],[180,120,"#56666e","procura",9,-12]]);

LIB.add(75,["La talpa","Renato Olmi cerca chi registra le riunioni riservate della sua lista","Castelnuovo"],{
 map:MAP,scenes:SC,owner:"Bianca Olmi",time:"21:00",date:"lun 24 nov",homeDate:"lunedì 24 novembre",
 appIds:"msg tel mail gal cal note",extraApps:[["rec","Registratore","mic","#e2574c,#a02822"]],
 late:"Bianca è tornata a casa e ha chiesto il suo telefono. Renato non può più tenerlo.",
 brief:"Renato Olmi, segretario di Alleanza Civica a Castelnuovo, ti ha portato il telefono della figlia Bianca, 26 anni, che tiene i verbali delle riunioni della lista. Qualcuno registra le riunioni riservate: in procura è arrivata una frase che Renato ha detto solo a quattro persone. Bianca è al cinema e non sa niente.",
 quote:"«C'è un traditore in sezione. Da quando è scoppiata la storia delle firme qualcuno porta fuori le nostre riunioni. Il primo che penso è il ragazzo nuovo, quello che è venuto da Insieme. Mia figlia mi ha prestato il telefono per la musica in macchina: lei c'è a tutte le riunioni, avrà visto qualcosa. Mi trovi il nome.»",
 chats:[
  {id:"papa",name:"Papà",sub:"",m:[
   ["dom 20:00",0,"Bianca, in procura sanno una cosa che ho detto martedì sera in riunione ristretta. C'è una talpa. Ti fidi di qualcuno?"],
   ["dom 20:10",1,"No, papà. Di nessuno."],
   ["dom 20:11",0,"Neanche io. Tranne te."]]},
  {id:"giu",name:"Giulia",sub:"Amica avvocata",m:[
   ["dom 22:00",1,"Martedì alle dieci vado. Ho paura."],
   ["dom 22:05",0,"Porta le registrazioni originali, non tagliate, e le foto della notte del 10. La dottoressa Melis è seria."],
   ["dom 22:06",1,"E se poi papà non mi parla più?"],
   ["dom 22:10",0,"Glielo hai chiesto tu, di andarci da solo. Hai fatto tutto il possibile."]]},
  {id:"grp",name:"Riunione ristretta",sub:"Gruppo · 4",m:[
   ["mar 18 · 20:50",0,"Renato: Stasera alle nove in sezione, solo noi quattro. Bianca verbalizza."],
   ["mar 18 · 21:10",0,"Kevin: Scusate, devo andare, attacco il turno di notte alle 22. Ci aggiornate voi."],
   ["mar 18 · 22:10",0,"Mura: Buonanotte. Io domani non ci sono, vado a Cagliari dal cardiologo."]]},
  {id:"kev",name:"Kevin",sub:"",m:[
   ["sab",0,"Bianca, tuo padre mi guarda come se fossi una spia perché vengo da Insieme. Io ho cambiato lista perché ci credo. Martedì sono andato via alle dieci meno cinquanta, lo sai."],
   ["sab",1,"Lo so, Kevin. Non sei tu."]]},
  {id:"rita",name:"Rita Bassi",sub:"",m:[
   ["mer 12 · 23:15",0,"Bianca, tesoro, grazie per avermelo detto. Non è colpa tua."],
   ["ven",0,"In prefettura ho detto la verità. Se ti serve una testimone, io ci sono."]]}
 ],
 lists:{
  rec:[
   {id:"r0",g:"Memo",title:"3 registrazioni protette",sub:"10, 14 e 18 novembre",meta:"Da aprire",body:"Tre registrazioni di riunioni.\nPer aprirle bisogna sapere di che cosa parla la frase arrivata in procura."},
   {id:"r1",g:"Registrazioni · recuperate",u:"reg",title:"Riunione 18 novembre",sub:"21:00 - 22:05",body:"Minuto 40, ore 21:40. Renato: «Le quaranta firme le ho messe io, ma nessuno può provarlo. Rita ha firmato l'autentica, la responsabilità è sua.»"},
   {id:"r2",g:"Registrazioni · recuperate",u:"reg",title:"Riunione 14 novembre",sub:"20:30 - 21:15",body:"Renato: «Se la prefettura chiede, diciamo che le firme le ha raccolte tutte Rita.»"},
   {id:"r3",g:"Registrazioni · recuperate",u:"reg",title:"Nota vocale 10 novembre",sub:"23:50 · 0:15",body:"Bianca, sottovoce: «Papà è ancora in sezione, al computer. Ha aperto l'elenco del 2015. Non so che cosa fare.»"}],
  mail:[
   {id:"m1",title:"Procura",sub:"Conferma appuntamento",meta:"venerdì",body:"Gentile sig.ra Olmi, la attende la dott.ssa Melis martedì 25 novembre alle 10:00.\nPorti il materiale in originale."},
   {id:"m2",title:"Bianca a papà",sub:"Bozza non inviata",meta:"sabato",body:"«Papà, ti chiedo di andare in procura tu, prima di me...» (bozza)"}],
  cal:[
   {id:"c1",g:"Questa settimana",title:"Mar 25 · Dott.ssa Melis",sub:"10:00",body:""},
   {id:"c2",g:"Questa settimana",title:"Lun · Cinema con Giulia",sub:"20:30",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese della notte in sezione, quattro cifre.\nNota sotto: il giorno e il mese dell'appuntamento in procura, quattro cifre."},
   {id:"n2",title:"Lettera a papà",lock:"note",body:"Papà,\nho visto quella notte, e ti ho sentito dare la colpa a Rita.\nNon lo faccio contro di te. Ti chiedo di andare in procura tu, prima di me, e dire la verità da solo.\nSe non lo fai, martedì ci vado io. Ti voglio bene lo stesso."}],
  tel:[
   {id:"t1",title:"Giulia",sub:"dom 22:15 · in uscita, 40 min"},
   {id:"t2",title:"Papà",sub:"dom 20:12 · in entrata, 3 min"}]
 },
 photos:[
  {id:"p1",t:"18 nov",title:"Riunione",sc:"sez"},
  {id:"p2",t:"2023",title:"Con papà",sc:"pap"},
  {id:"p3",t:"18 nov 21:10",title:"Kevin",sc:"kev"},
  {id:"p4",t:"set",title:"Con Giulia",sc:"ami"},
  {id:"h1",t:"10 nov 23:45",title:"Dalla finestra",sc:"not",lock:"album"},
  {id:"h2",t:"ven",title:"Martedì",sc:"pro",lock:"album"}],
 pins:{note:"2511",album:"1011"},
 events:[{id:"a",q:4,kind:"sms",from:"Giulia",text:"Bianca, ti ricordo domani: originali, non tagliati. E stasera goditi il film, che tanto non lo seguirai."},
         {id:"b",q:9,kind:"call",from:"Rita Bassi",lines:["«Bianca? Sono Rita.»","«Volevo dirti che martedì ti accompagno io, se vuoi. Non devi entrare da sola.»","«...Bianca? Ah, scusi, chi è lei?»"]}],
 qs:[
  {t:"18 novembre",q:"La frase arrivata in procura è stata detta in una riunione ristretta. In quale giorno? Giorno e mese.",all:["18","nov"],show:"Martedì 18 novembre",hint:"Chat con il padre e gruppo della riunione.",news:"Riunione delle nove di sera, in sezione."},
  {t:"4",q:"In quanti erano?",a:["4","quattro","in quattro","4 persone","quattro persone"],show:"Quattro",hint:"Gruppo «Riunione ristretta».",news:"Renato, Bianca che verbalizzava, il tesoriere Mura e Kevin, il ragazzo arrivato da Insieme."},
  {t:"21:10",q:"A che ora Kevin è andato via?",all:["2110"],show:"Alle 21:10",hint:"Lo scrive lui nel gruppo, e c'è una foto.",news:"Turno di notte alle 22. Il sospettato preferito di Renato."},
  {t:"le firme",q:"Di che cosa parla la frase arrivata in procura?",any:["firm"],show:"Delle firme false",hint:"Il padre lo accenna appena. Rita Bassi è la persona che ha raccolto le firme.",news:"Ora che sai di che cosa si parla, hai aperto le tre registrazioni protette nel Registratore.",unlock:"reg"},
  {t:"21:40",q:"A che ora Renato ha detto la frase, nella registrazione del 18 novembre?",all:["2140"],show:"Alle 21:40",hint:"Prima registrazione recuperata.",news:"Mezz'ora dopo che Kevin era uscito. Non può averla registrata lui."},
  {t:"Rita",q:"A chi dà la colpa Renato nella registrazione?",any:["rita","bassi"],show:"A Rita Bassi",hint:"Stessa registrazione.",news:"«Ha firmato l'autentica, la responsabilità è sua.» La donna che le firme le ha raccolte davvero."},
  {t:"Bianca",q:"Le registrazioni sono nel telefono di Bianca. Chi le ha fatte?",any:["bianca"],a:["lei"],show:"Bianca",hint:"La nota vocale del 10 novembre è con la sua voce.",news:"La talpa che Renato cerca è sua figlia."},
  {t:"10 novembre",q:"In quale notte Bianca ha visto il padre al computer della sezione? Giorno e mese.",all:["10","nov"],show:"La notte del 10 novembre",hint:"Nota vocale recuperata.",news:"La notte prima della consegna delle firme. Lei lo ha fotografato dalla finestra."},
  {t:"2015",q:"Nell'album privato c'è quella foto. Quale file era aperto sullo schermo? L'elenco iscritti di quale anno?",a:["2015","del 2015"],show:"L'elenco iscritti 2015",hint:"Il codice dell'album è la data di quella notte, giorno e mese.",news:"Accanto, i moduli e una penna verde."},
  {t:"Melis",q:"Con chi ha appuntamento Bianca in procura?",any:["melis"],show:"Con la dott.ssa Melis",hint:"Mail e Calendario.",news:"Martedì 25 alle 10. L'amica avvocata le ha detto di portare gli originali."},
  {t:"prima di lei",q:"Nella lettera protetta Bianca chiede al padre di andare in procura. Quando, rispetto a lei?",any:["prima"],show:"Prima di lei, da solo",hint:"Il codice è la data dell'appuntamento in procura, giorno e mese.",news:"«Ti voglio bene lo stesso.»"},
  {t:"b",q:"Chi è la talpa, e perché registra?",o:[["k","Kevin, per conto di Insieme"],["m","Mura, il tesoriere, per vendetta"],["b","Bianca: ha scoperto le firme false del padre e vuole proteggere Rita"],["r","Rita Bassi, per difendersi"],["n","Non c'è nessuna talpa"]],a:"b",show:"Bianca, e ha ragione",hint:"Di chi è la voce nelle registrazioni, e che cosa ha visto il 10 novembre?",news:""}],
 win:{title:"La talpa è Bianca. E ha ragione.",
  steps:["La frase arrivata in procura è stata detta il 18 novembre alle 21:40. Kevin era uscito alle 21:10.","Le registrazioni sono nel telefono di Bianca, che verbalizzava. Nella nota del 10 novembre c'è la sua voce.","Quella notte aveva visto il padre aprire l'elenco degli iscritti del 2015 accanto ai moduli: le firme false dell'incarico di Rita Bassi.","In riunione Renato ha detto che le firme le aveva messe lui e che la colpa era di Rita.","Martedì 25 Bianca va dalla dott.ssa Melis. Nella lettera chiede al padre di andarci prima lui."],
  end:"Non dai a Renato un nome. Gli restituisci il telefono di Bianca aperto sulla lettera. Lui la legge in piedi, poi si siede. «Mi ha fatto da talpa mia figlia», dice. Martedì alle 9:30, mezz'ora prima di lei, Renato Olmi suona al campanello della procura."}
});
LIB.tune(75,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 e.lists.mail.find(x=>x.id==="m1").lock="pro";
 e.lists.cal.find(x=>x.id==="c1").title="Mar 25 · Procura";
 e.pins={album:"1011",pro:"1040",note:"2510"};
 e.locks={album:{hint:"La notte in cui ho visto papà dalla finestra."},pro:{name:"Mail protetta",hint:"I minuti in cui Kevin è uscito, poi quelli della frase."},note:{hint:"Il giorno dell'appuntamento, poi l'ora."}};
 e.spots=[
  {id:"s1",x:320,y:84,label:"Sezione",title:"Sezione di Alleanza Civica",sub:"Castelnuovo",body:"La finestra della segreteria dà sul vicolo. Da lì si vede lo schermo del computer."},
  {id:"s2",x:180,y:120,label:"Procura",title:"Procura della Repubblica",sub:"Borgoverde",body:"Ricevimento su appuntamento, al secondo piano."},
  {id:"s3",x:344,y:100,label:"Cinema Astra",title:"Cinema Astra",sub:"Castelnuovo",body:"Stasera alle 20:30 un film francese. Due biglietti prenotati a nome Olmi."}];
 LIB.hints(e,["Quando è stata detta quella frase?","Chi c'era, in quella riunione?","Qualcuno se n'è andato prima.","Di cosa si parla, a Castelnuovo, da settimane?","La prima registrazione ha un minuto preciso.","Renato dà la colpa a qualcuno.","Di chi è la voce, nelle registrazioni?","Una nota vocale ha una data.","Una foto dalla finestra, nascosta.","La procura ha scritto, chiuso.","Bianca ha scritto al padre.","Di chi è la voce, e che cosa ha visto?"]);
});
})();
