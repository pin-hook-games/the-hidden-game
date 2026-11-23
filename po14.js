(function(){
/* Intrighi 14: La discarica (Monteforte, comune inventato). Soluzione: il funzionario regionale Sergio Barra, d'accordo con Arrighi, consulente di Ecoval.
   Il parere contrario del tecnico comunale Ivo Marras è sparito dal fascicolo: il protocollo salta un numero. */
const SC={
 dis:()=>LIB.obj("#cfd8df","🏭","La discarica di Valle Scura"),
 par:()=>LIB.doc("Parere tecnico · foto di Ivo","#2f6b4f",["Protocollo n. 2231","Ampliamento discarica: PARERE CONTRARIO","Falda a 4 metri, pozzi a 600 metri","Geom. Ivo Marras, 21 ottobre"]),
 com:()=>LIB.group(6,"Comitato Valle Scura · assemblea","#2f6b4f"),
 sin:()=>LIB.two("#8fb3c9","#55606b","#1f3a66","Il sindaco Ferrara alla conferenza sui rifiuti"),
 fas:()=>LIB.doc("Fascicolo regionale · indice","#a02822",["Prot. 2229: domanda di Ecoval","Prot. 2230: relazione Ecoval","Prot. 2232: parere favorevole Regione","Prot. 2231: assente"]),
 inc:()=>LIB.doc("Incarico di consulenza","#55606b",["Ecoval spa - Arrighi","«Relazioni istituzionali»","Pratica: ampliamento Valle Scura","dal 1° ottobre"])
};
const MAP=LIB.prov([[70,56,"#33658a","municipio",9,-12],[110,90,"#d43d55","discarica Valle Scura",9,14],[124,108,"#56666e","pozzi",9,16]]);

LIB.add(74,["La discarica","Il comitato dei residenti vuole sapere chi ha fatto sparire il parere contrario","Monteforte"],{
 map:MAP,scenes:SC,owner:"Ivo Marras",time:"18:00",date:"mer 19 nov",homeDate:"mercoledì 19 novembre",
 appIds:"msg tel mail gal map cal note",
 late:"Ivo è stato richiamato in ufficio per una «verifica urgente» e ha bisogno del telefono.",
 brief:"La portavoce del comitato Valle Scura ti ha portato il telefono di Ivo Marras, 53 anni, geometra dell'ufficio tecnico di Monteforte. A ottobre Ivo ha dato parere contrario all'ampliamento della discarica. La Regione ha approvato lo stesso: nel fascicolo il suo parere non c'è.",
 quote:"«Il sindaco ha detto in pubblico che è favorevole all'ampliamento, e tutti pensano che sia stato lui a far sparire il parere. Ivo dice che non è così, ma ha paura per il posto. Ci ha dato il telefono per un'ora. Lì dentro c'è la verità sui nostri pozzi.»",
 chats:[
  {id:"barra",name:"Dott. Barra",sub:"Regione",m:[
   ["2 nov",0,"Geometra Marras, passo da lei lunedì per una visita di cortesia sulla pratica Valle Scura. Niente di formale."],
   ["3 nov 11:30",0,"Grazie del caffè. Ci pensi: il suo parere è molto severo. A volte le cose si possono rivedere."],
   ["3 nov 11:40",1,"Il parere è quello, dottore. La falda è a quattro metri."],
   ["",2,"2 messaggi eliminati il 5 novembre."],
   ["5 nov 21:00",0,"Il suo parere non è più nel fascicolo, geometra. Si risparmi la fatica di cercarlo.","bar"],
   ["5 nov 21:02",0,"Sono cose che si decidono più in alto. Arrighi la saluta.","bar"]]},
  {id:"sind",name:"Sindaco Ferrara",sub:"",m:[
   ["4 nov",0,"Marras, io in pubblico ho detto che sono favorevole all'ampliamento perché la Regione me lo chiede. Ma il suo parere l'ho protocollato e mandato io stesso, il 21 ottobre. Se è sparito non è passato da me."],
   ["4 nov",1,"Lo so, sindaco. C'è la sua firma sulla lettera di trasmissione."]]},
  {id:"arr",name:"Arrighi",sub:"",m:[
   ["30 ott",0,"Geometra, sono un consulente di Ecoval. Le andrebbe un incarico privato, ben pagato, su un'altra pratica?"],
   ["30 ott",1,"No grazie. Sono un dipendente pubblico."]]},
  {id:"com",name:"Comitato Valle Scura",sub:"Gruppo",m:[
   ["mer 12:00",0,"Portavoce: Ivo, ci hai dato tanto. Stasera ti restituiamo il telefono, promesso."]]},
  {id:"moglie",name:"Grazia",sub:"Moglie",m:[
   ["mer 07:00",0,"Ivo, il nostro pozzo è a seicento metri da quella discarica. Fai quello che è giusto."]]}
 ],
 lists:{
  mail:[
   {id:"m1",title:"Protocollo del Comune",sub:"Trasmissione alla Regione",meta:"21 ottobre",body:"Parere tecnico del geom. Marras, protocollo n. 2231, trasmesso alla Regione con lettera firmata dal sindaco.\nRicevuta di consegna: 21 ottobre, 16:10."},
   {id:"m2",title:"Regione · ufficio ambiente",sub:"Responsabile del procedimento",meta:"ottobre",body:"Pratica Valle Scura: responsabile del procedimento dott. Sergio Barra.\nÈ l'unico con accesso in scrittura al fascicolo."}],
  map:[
   {id:"g1",g:"Luoghi",title:"Discarica di Valle Scura",sub:"Ampliamento approvato",body:"Falda a 4 metri di profondità."},
   {id:"g2",g:"Luoghi",title:"Pozzi delle case",sub:"A 600 metri",body:"Una trentina di famiglie bevono acqua di pozzo."}],
  cal:[
   {id:"c1",g:"Ottobre",title:"21 ott · Parere Valle Scura",sub:"",body:"Contrario."},
   {id:"c2",g:"Novembre",title:"3 nov · Visita Barra",sub:"11:00",body:"«Di cortesia»."}],
  note:[
   {id:"n1",title:"Codici",body:"Album privato: il numero di protocollo del mio parere.\nNota sotto: la profondità della falda e la distanza dei pozzi, attaccate: una cifra, poi tre."},
   {id:"n2",title:"Il parere",lock:"note",body:"Ho fotografato il parere prima di consegnarlo. Lo faccio sempre, da quando ho cominciato.\nSe lo togli dal fascicolo, il numero di protocollo resta vuoto.\nI numeri non si possono comprare."}],
  tel:[
   {id:"t1",title:"Dott. Barra",sub:"5 nov · 21:05 · persa"},
   {id:"t2",title:"Sindaco Ferrara",sub:"4 nov · in entrata, 7 min"}]
 },
 photos:[
  {id:"p1",t:"set",title:"Valle Scura",sc:"dis"},
  {id:"p2",t:"21 ott",title:"Prima di consegnarlo",sc:"par"},
  {id:"p3",t:"ott",title:"Assemblea",sc:"com"},
  {id:"p4",t:"ott",title:"Il sindaco",sc:"sin"},
  {id:"h1",t:"6 nov",title:"Fascicolo",sc:"fas",lock:"album"},
  {id:"h2",t:"mer",title:"Mandato dal comitato",sc:"inc",lock:"album"}],
 pins:{note:"4600",album:"2231"},
 events:[{id:"a",q:3,kind:"call",from:"Dott. Barra",lines:["«Geometra? Non è lei... capisco. Chi parla?»","«Le dico solo questo: le foto di documenti d'ufficio su un telefono privato sono una violazione grave. Chi le ha, farebbe bene a cancellarle.»","«Pronto?»"]},
         {id:"b",q:8,kind:"sms",from:"Sindaco Ferrara",text:"Portavoce, se il parere di Marras è sparito in Regione lo voglio sapere anch'io. Ho la ricevuta di consegna del 21 ottobre. Ve la mando."}],
 qs:[
  {t:"contrario",q:"Che parere aveva dato Ivo sull'ampliamento?",any:["contrari","negativ"],a:["no"],show:"Contrario",hint:"C'è la sua foto del parere in Galleria.",news:"Falda a quattro metri, pozzi a seicento."},
  {t:"2231",q:"Con quale numero di protocollo è partito il parere?",a:["2231","n. 2231","numero 2231"],show:"2231",hint:"Foto del parere e mail del protocollo.",news:"Trasmesso alla Regione il 21 ottobre alle 16:10, con ricevuta."},
  {t:"il sindaco",q:"Chi ha firmato la lettera che trasmetteva il parere alla Regione?",any:["sindaco","ferrara"],show:"Il sindaco Ferrara",hint:"Mail del protocollo e chat con il sindaco.",news:"Il sindaco favorevole in pubblico ha mandato lui stesso il parere contrario. Non è passato da lui."},
  {t:"assente",q:"Nell'album privato c'è l'indice del fascicolo regionale. Che cosa risulta per il protocollo 2231?",any:["assent","manca","vuoto","sparit","nonce"],show:"Assente",hint:"Il codice dell'album è il numero di protocollo.",news:"Dopo il 2230 viene il 2232. Il numero è rimasto vuoto."},
  {t:"Sergio Barra",q:"Chi ha accesso in scrittura al fascicolo in Regione? Nome e cognome.",all:["sergio","barra"],show:"Il dott. Sergio Barra",hint:"Mail dell'ufficio ambiente.",news:"Il responsabile del procedimento. Ora che sai chi è, hai recuperato i due messaggi che Barra ha mandato a Ivo e poi cancellato.",unlock:"bar"},
  {t:"3 novembre",q:"Quando Barra è passato da Ivo per la «visita di cortesia»? Giorno e mese.",all:["3","nov"],show:"Il 3 novembre",hint:"Chat e Calendario.",news:"«Il suo parere è molto severo. A volte le cose si possono rivedere.»"},
  {t:"Arrighi",q:"Chi «saluta» Ivo nel messaggio cancellato di Barra?",any:["arrighi"],show:"Arrighi",hint:"Messaggi recuperati del 5 novembre.",news:"«Il suo parere non è più nel fascicolo. Si risparmi la fatica di cercarlo.»"},
  {t:"Ecoval",q:"Arrighi si era presentato a Ivo come consulente di quale azienda?",any:["ecoval"],show:"Ecoval",hint:"Chat del 30 ottobre.",news:"L'azienda che gestisce la discarica e ha chiesto l'ampliamento. A Ivo aveva offerto un incarico privato."},
  {t:"relazioni istituzionali",q:"Nell'album c'è anche l'incarico di Arrighi per Ecoval. Per che cosa è pagato?",any:["relazion","istituzional"],show:"«Relazioni istituzionali» sulla pratica Valle Scura",hint:"Seconda foto dell'album.",news:"Dal 1° ottobre, tre settimane prima del parere."},
  {t:"600",q:"A quanti metri dalla discarica ci sono i pozzi delle case?",a:["600","600 metri","seicento","seicento metri"],show:"A 600 metri",hint:"Mappe e il parere di Ivo.",news:"Una trentina di famiglie bevono quell'acqua, anche quella di Ivo."},
  {t:"i numeri",q:"Nella nota protetta Ivo scrive che cosa non si può comprare.",any:["numer"],show:"«I numeri non si possono comprare»",hint:"Il codice: la profondità della falda e la distanza dei pozzi, attaccate.",news:"Il protocollo 2231 resta lì, vuoto, a dire che il parere c'era."},
  {t:"b",q:"Chi ha fatto sparire il parere?",o:[["s","Il sindaco Ferrara"],["i","Ivo Marras, per paura"],["b","Il dott. Barra, d'accordo con Arrighi"],["c","Il comitato, per creare un caso"],["e","Un errore dell'archivio regionale"]],a:"b",show:"Il dott. Barra, con Arrighi",hint:"Chi poteva scrivere nel fascicolo e chi lo ha detto per messaggio?",news:""}],
 win:{title:"Il parere l'ha fatto sparire il dott. Barra, d'accordo con Arrighi.",
  steps:["Il 21 ottobre Ivo ha dato parere contrario, protocollo 2231, trasmesso alla Regione con la firma del sindaco.","Nel fascicolo regionale dopo il 2230 c'è il 2232: il parere manca.","Solo il responsabile del procedimento, il dott. Barra, può scrivere nel fascicolo. Il 3 novembre era andato da Ivo a chiedergli di «rivedere».","Il 5 novembre gli ha scritto che il parere non c'era più, e che «Arrighi la saluta».","Arrighi è pagato da Ecoval dal 1° ottobre per «relazioni istituzionali» sulla stessa pratica. Il sindaco aveva spedito il parere lui stesso."],
  end:"La portavoce del comitato restituisce il telefono a Ivo con un'ora di ritardo e una copia di tutto. «Due e due trentuno», dice, e lui quasi ride. Il giorno dopo il comitato deposita un esposto con la foto del parere, l'indice del fascicolo e due messaggi cancellati."}
});
LIB.tune(74,e=>{
 LIB.drop(e,"note","n1");e.map=LIB.nopins(e.map);
 const m2=e.lists.mail.find(x=>x.id==="m2");m2.lock="reg";m2.body+="\nPratica assegnata a lui il 5 ottobre.";
 e.pins={album:"2231",reg:"0311",note:"0605"};
 e.locks={album:{hint:"Il numero che il mio parere aveva sul registro."},reg:{name:"Mail protetta",hint:"Il giorno della visita di cortesia, poi il mese."},note:{hint:"Le centinaia di metri dei pozzi, poi il giorno in cui la pratica è passata a lui."}};
 e.spots=[
  {id:"s1",x:100,y:36,label:"Valle Scura",title:"Discarica di Valle Scura",sub:"Ecoval spa",body:"La falda è a 4 metri. L'ampliamento chiesto da Ecoval raddoppierebbe la superficie."},
  {id:"s2",x:76,y:76,label:"Pozzi",title:"Case con pozzo",sub:"Località Valle Scura",body:"Una trentina di famiglie beve acqua di pozzo, a seicento metri dalla discarica."},
  {id:"s3",x:180,y:120,label:"Uffici regionali",title:"Regione · ufficio ambiente",sub:"Borgoverde · ★ 2,8",body:"Recensione: «Il dottor Barra riceve solo su appuntamento. Tranne certi consulenti, che entrano quando vogliono.»"}];
 LIB.hints(e,["Ivo fotografa sempre i suoi pareri.","…e il numero che gli hanno dato.","Chi l'ha mandato alla Regione?","Nel fascicolo regionale manca qualcosa.","Chi può scrivere in quel fascicolo? La risposta è chiusa.","Una visita «di cortesia».","Messaggi recuperati del 5 novembre.","Per chi lavora quel consulente?","Un documento nascosto.","Quanto sono lontani i pozzi?","Ivo ha scritto cosa conta davvero.","Chi poteva scrivere nel fascicolo, e chi gli diceva cosa fare?"]);
});
})();
