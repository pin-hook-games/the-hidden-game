(function(){
/* Intrighi 19: Il candidato perfetto (Castelnuovo, comune inventato). Soluzione: il dossier è falso.
   La laurea di Andrea Fabbri è vera; il dossier usa il certificato di un omonimo (Andrea Fabbri nato nel 1979, non laureato).
   L'impaginazione è dello stesso grafico del fotomontaggio (incarico 3 di questa serie), pagato da Rete Ascolto srl (Arrighi).
   Falsa pista: il «master» gonfiato nel curriculum, che in realtà era un corso di 40 ore. */
const SC={
 com:()=>LIB.group(6,"Comizio in piazza, Castelnuovo","#2f6b4f"),
 lau:()=>LIB.doc("Pergamena di laurea","#33658a",["Università di Sassari","Andrea Fabbri, nato il 12/04/1988","Laurea in Ingegneria civile","110/110, luglio 2013"]),
 dos:()=>LIB.doc("DOSSIER · arrivato in redazione","#a02822",["«Fabbri non è laureato»","Allegato: certificato anagrafico","Andrea Fabbri, nato il 03/02/1979","nessun titolo di studio universitario"]),
 cv:()=>LIB.doc("Curriculum 2019","#55606b",["Master in Gestione","delle opere pubbliche","(corso di 40 ore, Ordine Ingegneri)","Ingegnere dal 2013"]),
 met:()=>LIB.doc("Proprietà file · dossier.pdf","#7a3b5a",["Autore: studio_grafica_ML","Creato: 9 nov, 23:40","Stesso autore del file","«foto_spiaggia_finale»"]),
 fat:()=>LIB.doc("Fattura n. 41","#2f6b4f",["Studio grafico M.L.","a: Rete Ascolto srl","«impaginazione dossier»","950,00 € · 10 novembre"])
};
const MAP=LIB.prov([[320,84,"#33658a","comitato",9,-14],[300,100,"#d43d55","redazione",-62,10]]);

LIB.add(79,["Il candidato perfetto","Un dossier dice che la laurea di Andrea Fabbri è falsa","Castelnuovo"],{
 map:MAP,scenes:SC,owner:"Andrea Fabbri",time:"10:00",date:"sab 22 nov",homeDate:"sabato 22 novembre",
 appIds:"msg tel mail web gal cal note drive",
 late:"Fabbri deve salire sul palco del confronto in piazza. Il telefono gli serve per gli appunti.",
 brief:"Andrea Fabbri, 38 anni, ingegnere, è il candidato sindaco di Insieme alle elezioni suppletive di Castelnuovo. Ieri sera a tutti i giornali è arrivato un dossier anonimo: «Fabbri non è laureato». Il suo portavoce ti ha passato il telefono di Andrea: oggi alle 18 c'è il confronto in piazza.",
 quote:"«Io la laurea ce l'ho, è appesa in salotto. Ma loro hanno un certificato, e un certificato in un giornale fa più paura di una pergamena in casa mia. E poi c'è quella storia del master nel curriculum... lo so che l'ho scritto un po' grande. Mi trovi chi ha fatto questo dossier, prima delle sei.»",
 chats:[
  {id:"por",name:"Marco",sub:"Portavoce",m:[
   ["ven 22:00",0,"Andrea, è arrivato a tutti. Un PDF con un certificato. Dicono che non sei laureato."],
   ["ven 22:05",1,"Ma è assurdo. Ho la pergamena!"],
   ["ven 22:30",0,"Guarda bene il certificato: la data di nascita non è la tua."]]},
  {id:"gia",name:"Giada Pes",sub:"Giornalista",m:[
   ["sab 8:00",0,"Fabbri, le mando le proprietà del PDF che è arrivato a noi. L'autore è lo stesso del fotomontaggio di San Leone dell'anno scorso, quello della consigliera in spiaggia. Coincidenza?"],
   ["sab 8:10",1,"Grazie. Le mando anche io una cosa appena posso."]]},
  {id:"uni",name:"Segreteria Università",sub:"",m:[
   ["sab 9:00",0,"Confermiamo: Andrea Fabbri, nato il 12/04/1988, laureato in Ingegneria civile il 18 luglio 2013, 110/110. Il certificato ufficiale le arriva via PEC."]]},
  {id:"oli",name:"Olga",sub:"Ordine Ingegneri",m:[
   ["sab 9:30",0,"Andrea, il «master» del 2019 era il nostro corso di 40 ore. Chiamarlo master è un po' troppo, eh. Ma la laurea è un'altra cosa."],
   ["sab 9:31",1,"Lo so, Olga. Oggi lo dico io, prima che me lo chiedano."]]},
  {id:"anon",name:"Numero sconosciuto",sub:"",m:[
   ["sab 9:45",0,"Ingegnere, sono il grafico. Non sapevo che fosse una cosa così. Mi hanno detto che era satira. Ho la fattura, se le serve. Non voglio finire come l'altra volta.","gra"]]}
 ],
 lists:{
  drive:[
   {id:"d1",g:"Documenti",title:"Laurea.pdf",sub:"Pergamena",body:"Andrea Fabbri, nato il 12/04/1988. Ingegneria civile, 110/110, luglio 2013."},
   {id:"d2",g:"Documenti",title:"Dossier ricevuto.pdf",sub:"Da Marco",body:"Certificato anagrafico allegato: Andrea Fabbri, nato il 03/02/1979, nessun titolo universitario."}],
  web:[
   {id:"w1",g:"Ricerca",title:"«Andrea Fabbri» 1979",sub:"Annuario sportivo",body:"Andrea Fabbri, nato nel 1979, ex portiere della Polisportiva Castelnuovo, oggi titolare di un'officina. Omonimo."},
   {id:"w2",g:"Ricerca",title:"Rete Ascolto srl",sub:"Registro imprese",body:"Ricerche di mercato e sondaggi. Amministratore unico: Nicola Arrighi."}],
  mail:[
   {id:"m1",title:"Marco",sub:"Il dossier",meta:"ven 21:58",body:"In allegato il PDF arrivato a tutte le redazioni alle 21:30."},
   {id:"m2",title:"PEC Università",sub:"Certificato di laurea",meta:"sab 9:40",body:"Si certifica il conseguimento della laurea in Ingegneria civile da parte di Andrea Fabbri, nato il 12/04/1988."}],
  cal:[
   {id:"c1",g:"Oggi",title:"Confronto in piazza",sub:"18:00",body:""}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il giorno e il mese della mia nascita, quattro cifre.\nNota sotto: quanto è stato pagato il grafico, con uno zero davanti."},
   {id:"n2",title:"Per stasera",lock:"note",body:"1. Mostro la pergamena e la PEC dell'università.\n2. Ammetto il master: era un corso di 40 ore, ho esagerato. Mi scuso.\n3. Il dossier è stato pagato da Rete Ascolto srl. Chi l'ha pagato, lo spieghi lui."}],
  tel:[
   {id:"t1",title:"Marco",sub:"ven 22:10 · in uscita, 30 min"},
   {id:"t2",title:"Numero sconosciuto",sub:"sab 9:50 · in uscita, 6 min"}]
 },
 photos:[
  {id:"p1",t:"ott",title:"Comizio",sc:"com"},
  {id:"p2",t:"2013",title:"Pergamena",sc:"lau"},
  {id:"p3",t:"ven",title:"Il dossier",sc:"dos"},
  {id:"p4",t:"2019",title:"CV",sc:"cv"},
  {id:"h1",t:"sab 8:05",title:"Da Giada",sc:"met",lock:"album"},
  {id:"h2",t:"sab 9:52",title:"Dal grafico",sc:"fat",lock:"album"}],
 pins:{note:"0950",album:"1204"},
 events:[{id:"a",q:3,kind:"sms",from:"Marco",text:"Andrea, sui social girano già i meme con la tua faccia e un cappello da laureato di cartone. Abbiamo fino alle sei."},
         {id:"b",q:9,kind:"call",from:"Giada Pes",lines:["«Fabbri? No, non è lui... Gli dica una cosa.»","«Ho chiamato Rete Ascolto per un commento. Mi hanno risposto che non conoscono nessun grafico. Ma la fattura ce l'ha lui, giusto?»","«Stasera sono in prima fila.»"]}],
 qs:[
  {t:"1979",q:"Di quale anno è nato l'Andrea Fabbri del certificato nel dossier?",a:["1979","nel 1979","03/02/1979","3 febbraio 1979"],show:"Del 1979",hint:"Il dossier, in Galleria o nel Drive.",news:"Andrea, il candidato, è del 1988."},
  {t:"12/04/1988",q:"E quando è nato il candidato? Data completa.",all:["12","04","1988"],show:"12 aprile 1988",hint:"Pergamena e PEC dell'università.",news:"Due persone diverse con lo stesso nome."},
  {t:"omonimo",q:"Chi è l'Andrea Fabbri del 1979?",any:["omonim","portier","officin","meccanic"],show:"Un omonimo: ex portiere, oggi ha un'officina",hint:"Browser.",news:"Non è mai andato all'università, e non c'entra niente con la politica."},
  {t:"2013",q:"In che anno si è laureato il candidato?",a:["2013","nel 2013","luglio 2013","18 luglio 2013"],show:"Nel 2013, 110/110",hint:"Segreteria dell'università.",news:"La laurea è vera, certificata via PEC."},
  {t:"40",q:"Il «master» nel curriculum: di quante ore era il corso?",a:["40","40 ore","quaranta"],show:"40 ore",hint:"Chat con Olga dell'Ordine.",news:"Questa è l'unica esagerazione vera. Andrea ha deciso di ammetterla lui."},
  {t:"fotomontaggio",q:"Secondo Giada Pes, l'autore del PDF ha già fatto quale altro lavoro?",any:["fotomontag","spiaggi","sanleone","consiglier"],show:"Il fotomontaggio di San Leone",hint:"Chat con Giada. Il codice dell'album: il giorno e il mese di nascita del candidato.",news:"«foto_spiaggia_finale»: stesso autore, studio_grafica_ML. Ora che sai chi è, hai recuperato il messaggio del grafico.",unlock:"gra"},
  {t:"satira",q:"Che cosa dice il grafico che gli avevano raccontato?",any:["satir"],show:"Che era satira",hint:"Messaggio recuperato.",news:"Ha la fattura. «Non voglio finire come l'altra volta.»"},
  {t:"Rete Ascolto",q:"Chi ha pagato la fattura del grafico?",all:["rete","ascolto"],show:"Rete Ascolto srl",hint:"Fattura nell'album privato.",news:"La società di Arrighi."},
  {t:"950",q:"Quanto?",a:["950","950 euro","950,00","950 €","950,00 €"],show:"950 €",hint:"Stessa fattura.",news:"Il 10 novembre, il giorno dopo la creazione del file."},
  {t:"Arrighi",q:"Di chi è Rete Ascolto srl?",any:["arrighi"],show:"Di Arrighi",hint:"Cercala nel Browser.",news:"Il suo nome torna di nuovo."},
  {t:"il master",q:"Nella nota per stasera, che cosa ammetterà Andrea?",any:["master","cors","esager"],show:"Il master gonfiato",hint:"Il codice: quanto è stato pagato il grafico, con uno zero davanti.",news:"Prima che glielo chiedano."},
  {t:"f",q:"Che cos'è il dossier?",o:[["v","Vero: la laurea è falsa"],["m","Una vendetta dell'omonimo"],["f","Falso: certificato di un omonimo, pagato da Rete Ascolto (Arrighi)"],["g","Uno scherzo del grafico"],["o","Un'iniziativa dell'Ordine degli ingegneri"]],a:"f",show:"Falso, e porta ad Arrighi",hint:"Date di nascita, autore del file, fattura.",news:""}],
 win:{title:"Il dossier è falso, e porta di nuovo ad Arrighi.",
  steps:["Il certificato del dossier è di un omonimo nato nel 1979, ex portiere con un'officina. Andrea è nato il 12 aprile 1988.","L'università conferma via PEC: laurea in Ingegneria civile nel 2013, 110/110.","L'unica cosa vera è il «master» del curriculum: un corso di 40 ore, e Andrea lo ammetterà.","Il PDF è dello stesso grafico del fotomontaggio di San Leone. Gli avevano detto che era satira.","La fattura da 950 € è intestata a Rete Ascolto srl, la società di Arrighi."],
  end:"Alle 18 Andrea sale sul palco con la pergamena, la PEC e la fattura. Comincia dal master: «Ho esagerato, e mi scuso.» Poi alza il foglio della fattura. In prima fila, Giada Pes scrive senza alzare la testa."}
});
LIB.tune(79,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const w2=e.lists.web.find(x=>x.id==="w2");w2.lock="rea";w2.body+=" Costituita ad agosto.";
 e.pins={album:"1204",rea:"4013",note:"1008"};
 e.locks={album:{hint:"Il giorno e il mese in cui sono nato."},rea:{name:"Pagina salvata",hint:"Le ore del corso che ho chiamato master, poi la fine dell'anno della laurea."},note:{hint:"Il giorno della fattura, poi il mese in cui è nata quella società."}};
 e.spots=[
  {id:"s1",x:320,y:84,label:"Comitato Insieme",title:"Comitato di Insieme",sub:"Castelnuovo",body:"Stasera il confronto. Marco, il portavoce, non dorme da ieri."},
  {id:"s2",x:300,y:66,label:"Piazza",title:"Piazza del confronto",sub:"Ore 18:00",body:"Il palco è già montato. Due leggii, due microfoni."},
  {id:"s3",x:344,y:104,label:"Officina Fabbri",title:"Officina Fabbri",sub:"Meccanico · ★ 4,6",body:"Recensione: «Andrea, l'ex portiere, è un mago dei motori. Di università non vuole sentir parlare.»"}];
 LIB.hints(e,["Leggi bene il certificato del dossier.","Il candidato ha una pergamena e una PEC.","Cerca chi altro si chiama così.","L'università ha risposto.","L'Ordine degli ingegneri ricorda quel corso.","Una giornalista ha guardato le proprietà del file.","Qualcuno ha scritto da un numero sconosciuto.","Chi ha pagato il grafico?","…e quanto.","Di chi è quella società? La pagina è chiusa.","Andrea ha preparato la serata.","Date di nascita, autore del file, fattura."]);
});
})();
