(function(){
const SC={
 bag:()=>`<rect width="400" height="300" fill="#3a3f47"/><path d="M0 210h400v90H0z" fill="#23262b"/><path d="M30 210Q200 150 370 210z" fill="#2d3138"/><rect x="130" y="92" width="140" height="130" rx="10" fill="#e8552f"/><rect x="130" y="92" width="140" height="34" rx="10" fill="#c9431f"/><circle cx="200" cy="170" r="30" fill="#fff"/><text x="200" y="183" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="38" fill="#e8552f">R</text><path d="M150 92v-20h100v20" stroke="#222" stroke-width="6" fill="none"/>`,
 roses:()=>`<rect width="400" height="300" fill="#e9e2d6"/><path d="M200 300L150 170h100z" fill="#7a9a5a"/><path d="M165 190h70l-12 60h-46z" fill="#c9b79a"/><g fill="#c8324a"><circle cx="160" cy="130" r="30"/><circle cx="215" cy="105" r="32"/><circle cx="250" cy="150" r="28"/><circle cx="195" cy="160" r="30"/></g><g fill="#8f1f33"><circle cx="160" cy="130" r="11"/><circle cx="215" cy="105" r="12"/><circle cx="250" cy="150" r="10"/><circle cx="195" cy="160" r="11"/></g><rect x="262" y="196" width="78" height="46" fill="#fff" stroke="#bbb"/><text x="270" y="216" font-family="serif" font-size="13" fill="#333">Auguri,</text><text x="270" y="233" font-family="serif" font-size="13" fill="#333">con affetto</text>`,
 earn:()=>`<rect width="400" height="300" fill="#fff"/><rect width="400" height="56" fill="#e8552f"/><text x="20" y="36" font-family="sans-serif" font-weight="800" font-size="20" fill="#fff">Rapido · Guadagni</text><g font-family="monospace" font-size="16" fill="#231a1e"><text x="20" y="100">Settimana 6-12 ottobre</text><text x="20" y="140">Turni          3</text><text x="20" y="170">Consegne      41</text><text x="20" y="200">Mance      24,50 €</text></g><text x="20" y="256" font-family="sans-serif" font-weight="800" font-size="34" fill="#e8552f">286,50 €</text>`,
 gym:()=>`<rect width="400" height="300" fill="#cfd6dc"/><rect y="220" width="400" height="80" fill="#8b949c"/><g fill="#5c6670"><rect x="40" y="40" width="70" height="180"/><rect x="118" y="40" width="70" height="180"/><rect x="196" y="40" width="70" height="180"/><rect x="274" y="40" width="70" height="180"/></g><g fill="#2f353b"><rect x="96" y="120" width="6" height="22"/><rect x="174" y="120" width="6" height="22"/><rect x="252" y="120" width="6" height="22"/><rect x="330" y="120" width="6" height="22"/></g><text x="153" y="74" text-anchor="middle" font-family="monospace" font-size="16" fill="#fff">27</text><rect x="150" y="238" width="100" height="14" rx="7" fill="#2f353b"/><rect x="138" y="228" width="16" height="34" rx="4" fill="#2f353b"/><rect x="246" y="228" width="16" height="34" rx="4" fill="#2f353b"/>`,
 paper:()=>`<rect width="400" height="300" fill="#8a7a6a"/><rect x="60" y="20" width="280" height="270" fill="#fff" transform="rotate(-3 200 150)"/><g transform="rotate(-3 200 150)" font-family="serif" fill="#231a1e"><text x="80" y="60" font-size="20" font-weight="700">CREDIFIN</text><text x="80" y="88" font-size="14">Contratto di prestito personale</text><text x="80" y="124" font-size="14">Importo finanziato: 8.000,00 €</text><text x="80" y="148" font-size="14">Durata: 36 rate da 262,00 €</text><text x="80" y="172" font-size="14">Decorrenza: 15 giugno</text><text x="80" y="208" font-size="14">Intestatario unico: M. Berti</text><path d="M80 250q30-22 50 0t50 0" stroke="#33658a" stroke-width="2" fill="none"/></g>`
,
 transfer:()=>`<rect width="400" height="300" fill="#eef2f5"/><rect x="40" y="24" width="320" height="252" rx="10" fill="#fff" stroke="#d5dbe0"/><rect x="40" y="24" width="320" height="46" rx="10" fill="#33658a"/><text x="60" y="54" font-family="sans-serif" font-weight="800" font-size="18" fill="#fff">Bonifico eseguito</text><g font-family="monospace" font-size="13.5" fill="#231a1e"><text x="60" y="104">Data: 16 giugno</text><text x="60" y="134">Beneficiario:</text><text x="60" y="154">Officina Berti di Daniele Berti</text><text x="60" y="190">Importo: 8.000,00 EUR</text><text x="60" y="226">Causale: prestito a Dani,</text><text x="60" y="246">da restituire</text></g>`
};
const MAP_BOLOGNA=`<svg viewBox="0 0 400 260" role="img" aria-label="Mappa stilizzata di Bologna">
<rect width="400" height="260" fill="#ece8e1"/><path d="M0 232Q120 205 200 222T400 214V260H0Z" fill="#d7e2c9"/>
<ellipse cx="262" cy="207" rx="22" ry="13" fill="#b9d3a5"/>
<g stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"><path d="M0 152L122 143L278 138L400 126"/><path d="M200 140V70"/><path d="M238 86L300 6"/><path d="M262 106L384 36"/><path d="M252 182L334 252"/><path d="M142 172L58 218"/><path d="M212 62L226 8"/></g>
<ellipse cx="200" cy="140" rx="80" ry="63" fill="#f7f4ef" stroke="#fff" stroke-width="8"/><ellipse cx="200" cy="140" rx="80" ry="63" fill="none" stroke="#cfc8bd" stroke-width="1"/>
<g stroke="#e3ddd3" stroke-width="5" fill="none" stroke-linecap="round"><path d="M122 143L278 138"/><path d="M200 140V78"/></g>
<path d="M0 60L400 68" stroke="#7d756b" stroke-width="2" stroke-dasharray="7 4"/>
<rect x="186" y="56" width="30" height="12" rx="2" fill="#7d756b"/>
<g font-family="sans-serif" font-size="9.5" fill="#6b5d62"><text x="170" y="50">Stazione Centrale</text><text x="166" y="158">Piazza Maggiore</text><text x="150" y="24">Bolognina</text><text x="318" y="96">San Donato</text><text x="344" y="170">Roveri</text><text x="268" y="170">Santo Stefano</text><text x="36" y="200">Saragozza</text><text x="6" y="138">Via Emilia</text><text x="284" y="26" transform="rotate(-52 284 26)">Via Stalingrado</text><text x="300" y="240">Via Murri</text><text x="238" y="226">Giardini Margherita</text><text x="150" y="250">Colli</text></g>
<circle cx="200" cy="140" r="4" fill="#6b5d62"/>
<g font-family="sans-serif" font-size="10" font-weight="700" fill="#231a1e"><circle cx="318" cy="74" r="6" fill="#33658a"/><text x="328" y="72">Casa</text><circle cx="372" cy="138" r="6" fill="#d43d55"/><text x="326" y="150">sosta 19:58</text><circle cx="232" cy="34" r="6" fill="#d43d55"/><text x="242" y="38">sosta 22:40</text><circle cx="240" cy="178" r="6" fill="#33658a"/><text x="196" y="194">FitClub</text></g></svg>`;
/* ---------------- episodio 1 ----------------
   Soluzione: Nasconde altro. Vale è Valerio Conte, responsabile dei turni; la sera Marco fa il rider;
   nasconde un prestito di 8.000 € chiesto per l'officina del fratello Dani. Stava per dirlo a Chiara il 25 ottobre. */
const EP1={
 scenes:SC,
 n:1,timer:1800,map:MAP_BOLOGNA,owner:"Marco Berti",time:"09:12",date:"ven 17 ott",homeDate:"venerdì 17 ottobre",
 brief:"Chiara ti ha consegnato il telefono del marito Marco, 34 anni, magazziniere a Bologna. Lo ha preso stamattina mentre lui dormiva: deve tornare sul comodino prima che si svegli.",
 quote:"«Esce tre sere a settimana per la palestra. Torna dopo mezzanotte, è sempre distrutto e cancella le chat. E ci sono troppe donne in quel telefono: Vale, Giada, una che gli scrive alle due di notte. Voglio sapere chi è l'amante.»",
 apps:[["msg","Messaggi","forum","linear-gradient(160deg,#58d5c9,#1f8fd1)"],["tel","Telefono","call","linear-gradient(160deg,#6fd47a,#1f9a4d)"],["mail","Mail","mail","linear-gradient(160deg,#5aa9ff,#2563d8)"],["web","Browser","public","linear-gradient(160deg,#8fd3ff,#3b82c4)"],
  ["gal","Galleria","photo_library","linear-gradient(160deg,#ffb86b,#e0527a)"],["map","Mappe","map","linear-gradient(160deg,#7fd08a,#2f8f9d)"],["cal","Calendario","calendar_month","linear-gradient(160deg,#ff7b6b,#d93a3a)"],["note","Note","sticky_note_2","linear-gradient(160deg,#ffd76a,#f0a020)"],
  ["social","Scatto","photo_camera","linear-gradient(160deg,#a47bff,#5a3fd0)"],["bank","Banca","account_balance","linear-gradient(160deg,#4a5d7a,#1f2c44)"],["rider","Rapido","two_wheeler","linear-gradient(160deg,#ff8a5c,#e8552f)"],["gym","FitClub","fitness_center","linear-gradient(160deg,#55575c,#17181b)"]],
 names:{msg:"Messaggi",social:"Scatto",gal:"Galleria",mail:"Mail",map:"Mappe",bank:"Banca",rider:"Rapido",gym:"FitClub",cal:"Calendario",web:"Browser",note:"Note",tel:"Telefono"},
 chats:[
  {id:"chiara",name:"Chiara",sub:"Moglie",m:[
   ["lun 09:14",0,"Il 12 settembre abbiamo fatto 6 anni e non hai nemmeno prenotato. Dove hai la testa in questo periodo?"],
   ["lun 09:20",1,"Hai ragione. Recupero, promesso."],
   ["mer 12:02",0,"Ha chiamato a casa una finanziaria, cercavano te. Cosa vogliono?"],
   ["mer 12:10",1,"Niente, pubblicità. Riattacca."],
   ["mer 12:11",0,"Sabato pranzo da mia madre in Via Murri, compie 70 anni. Ai fiori pensi tu?"],
   ["mer 12:15",1,"Già ordinati."],
   ["gio 18:40",0,"Stasera palestra anche oggi?"],
   ["gio 18:42",1,"Sì, gambe. Torno tardi, non aspettarmi sveglia."],
   ["ven 00:21",1,"Sto rientrando."]]},
  {id:"vale",name:"Vale",sub:"",m:[
   ["",2,"Marco ha eliminato 37 messaggi da questa chat"],
   ["",2,"Recuperati 4 messaggi eliminati","vale"],
   ["2 giu 10:12",0,"Benvenuto in Rapido. Contratto firmato, parti stasera.","vale"],
   ["2 giu 10:15",1,"Grazie Valerio. Una cosa: nessuno in magazzino deve saperlo. Il mio contratto vieta il secondo lavoro.","vale"],
   ["2 giu 10:16",0,"Tranquillo. Cancella le chat, se ti fa stare sereno.","vale"],
   ["9 set 21:40",0,"Zaino rotto? Te lo cambio, ma sono 40 € sulla prossima paga.","vale"],
   ["lun 17:05",0,"Mar e gio ti metto dalle 20 alle 24. Sabato ci sei?"],
   ["lun 17:09",1,"Sabato no, ho un pranzo di famiglia."],
   ["lun 17:10",0,"Peccato. Va bene campione ❤️"],
   ["gio 19:44",0,"Messaggio vocale, 0:12. Trascrizione automatica: «Marco, sono Valerio. Stasera ricordati lo zaino nuovo, quello vecchio lo ritiro io al deposito.»"],
   ["gio 19:50",0,"Stasera zona stazione e centro. Piove: 2 € in più a consegna."],
   ["gio 19:51",1,"Arrivo."]]},
  {id:"teo",name:"Teo",sub:"Amico",m:[
   ["mar 13:30",1,"Se Chiara ti chiede, martedì ero in palestra con te."],
   ["mar 13:41",0,"Ancora? Diglielo e basta, non stai facendo niente di male."],
   ["mar 13:43",1,"Non posso. Se scopre che ho firmato senza dirglielo, è finita."],
   ["mar 13:44",0,"È peggio se lo scopre da sola."]]},
  {id:"dani",name:"Dani",sub:"Fratello",m:[
   ["dom 20:15",0,"Marco scusami, anche questo mese non riesco a darti niente. L'officina è ferma."],
   ["dom 20:31",1,"Dani, la sto pagando io da cinque mesi. Da solo."],
   ["dom 20:33",0,"Lo so. Ti giuro che recupero."]]},
  {id:"giada",name:"Giada",sub:"",m:[
   ["mer 16:20",0,"Ciao Marco! Ci manchi tanto 😊 Passi a trovarmi? Questo mese per te c'è una sorpresa."],
   ["mer 16:48",1,"Grazie Giada, appena riesco passo."],
   ["mer 16:49",0,"Ti aspetto, non farti desiderare!"]]},
  {id:"ilenia",name:"Ilenia",sub:"Collega",m:[
   ["lun 19:02",0,"Marco mi salvi? Ho la macchina dal meccanico fino a mercoledì."],
   ["lun 19:05",1,"Ti porto io, esco alle 19:30."],
   ["mar 08:10",0,"Grazie per ieri sera, sei stato un tesoro 😘"],
   ["mar 08:12",1,"Figurati, ero di strada."]]},
  {id:"bea",name:"Bea",sub:"",m:[
   ["sab 23:48",0,"Ho sognato di te stanotte. Ti penso ancora, lo sai."],
   ["dom 00:30",0,"Mi rispondi? Solo un caffè, come ai vecchi tempi."],
   ["dom 09:15",1,"Bea, sono sposato. Non scrivermi più, per favore."],
   ["dom 09:40",0,"Come vuoi. Ma so che ci pensi anche tu."]]},
  {id:"mamma",name:"Mamma",sub:"",m:[
   ["dom 18:02",0,"Hai sentito tuo fratello? A me dice che va tutto bene."],
   ["dom 18:30",1,"Sì mamma. Tutto bene."]]},
  {id:"mag",name:"Magazzino turno B",sub:"Gruppo",m:[
   ["gio 17:50",0,"Ivan: Berti, anche stasera scappi alle 19:30 in punto?"],
   ["gio 17:52",1,"Ho un impegno."],
   ["gio 17:53",0,"Ivan: Tre sere a settimana. Beata lei, chiunque sia."],
   ["gio 17:55",0,"Paola: Lasciatelo stare, ha la faccia di uno che non dorme."]]}
 ],
 lists:{
  social:[
   {id:"s0",g:"Il tuo profilo",title:"@marco.brt",sub:"212 follower · 3 post",body:"Bio: «Bologna. Magazzino di giorno.»\nUltimo post: 8 marzo, foto di gruppo a un battesimo."},
   {id:"s1",g:"Feed",title:"@giada_fit",sub:"Nuovo mese, nuove promo!",meta:"Post · mar",body:"«Nuovo mese, nuove promo! Vi aspetto in reception. Chi torna dopo l'estate ha una sorpresa.»\nBio del profilo: «Reception @ FitClub Santo Stefano. Sorrido per contratto.»"},
   {id:"s2",g:"Feed",title:"@sere.berti",sub:"I miei tre uomini",meta:"Post · dom",body:"«I miei tre uomini.» Nella foto è taggato @dani.officina, con due bambini in braccio.\nBio del profilo: «Mamma di Leo e Tommy.»"},
   {id:"s3",g:"Feed",title:"@chiara.bo",sub:"Sei anni",meta:"Post · 12 set",body:"«Sei anni. Qualcuno se n'è dimenticato.»\n31 mi piace. Marco non ha messo mi piace."},
   {id:"s4",g:"Feed",title:"@dani.officina",sub:"Chiusi fino a nuova comunicazione",meta:"Post · 20 giu",body:"«Officina Berti: chiusi per inventario fino a nuova comunicazione.»\nNessun post successivo."},
   {id:"s5",g:"Messaggi privati",title:"@sere.berti",sub:"Sei sveglio?",meta:"mer 02:10",body:"02:10 · lei: «Marco, sei sveglio? Io non dormo più.»\n02:14 · Marco: «Sono appena rientrato. Dimmi.»\n02:15 · lei: «Non so come ringraziarti. Senza di te saremmo per strada.»\n02:16 · lei: «Ti prego, non dirlo a Chiara. Mi vergogno troppo.»\n02:18 · Marco: «Tranquilla. Resta tra noi.»"},
   {id:"s6",g:"Messaggi privati",title:"@giada_fit",sub:"Ti ho visto ieri!",meta:"ven 08:20",body:"lei: «Ti ho visto ieri sera davanti alla stazione con uno zaino arancione enorme! Ma fai le consegne?»\nMarco: «Shh. Non dirlo in giro.»\nlei: «Muta come un pesce. Però in palestra torna, eh.»"},
   {id:"s7",g:"Messaggi privati",title:"@laura_m_88",sub:"Ciao bello",meta:"lun 23:02",body:"«Ciao bello, ci conosciamo?»\nMarco non ha mai risposto. Il profilo ha 2 follower e nessuna foto."}],
  mail:[
   {id:"m1",title:"FitClub",sub:"Il tuo abbonamento è scaduto",meta:"1 luglio",body:"Ciao Marco,\nil tuo abbonamento è scaduto il 30 giugno e non è stato rinnovato.\nRiattivalo in reception: a ottobre il primo mese è in omaggio."},
   {id:"m2",title:"Credifin",sub:"Promemoria rata n. 5 di 36",meta:"10 ottobre",body:"Gentile Marco Berti,\nle ricordiamo la rata n. 5 di 36 del prestito personale n. 40718: 262,00 € in scadenza il 15 ottobre."},
   {id:"m3",title:"Rapido",sub:"Il tuo riepilogo settimanale",meta:"13 ottobre",body:"Settimana dal 6 al 12 ottobre.\nTurni completati: 3. Consegne: 41. Mance: 24,50 €.\nAccredito sul tuo conto: 286,50 €."},
   {id:"m4",title:"Fiori Lella",sub:"Conferma ordine n. 2291",meta:"12 ottobre",body:"Mazzo di rose rosse.\nConsegna sabato 18 ottobre, ore 12:30, in Via Murri.\nBiglietto: «Auguri, con affetto»."},
   {id:"m6",title:"Studio Monti",sub:"Promemoria appuntamento",meta:"8 ottobre",body:"Gentile Marco,\nle ricordo il nostro incontro di giovedì 9 ottobre alle 18:00 per la revisione del piano di rientro.\nPorti le ultime buste paga.\nDott.ssa Elena Monti, consulente del debito."},
   {id:"m5",title:"Trattoria ai Colli",sub:"Prenotazione confermata",meta:"14 ottobre",body:"Tavolo per due, sabato 25 ottobre alle 20:30.\nNota del cliente: «Tavolo tranquillo, devo parlare di una cosa importante.»"}],
  map:[
   {id:"g1",g:"Cronologia · giovedì 16",title:"Zona industriale Roveri",sub:"19:58 · 9 minuti",meta:"Sosta",body:"Capannoni e depositi. Nessun nome registrato per questa sosta.\nDa casa: 12 minuti in scooter."},
   {id:"g2",g:"Cronologia · giovedì 16",title:"Stazione Centrale e centro storico",sub:"20:10 - 23:48",meta:"15 soste brevi",body:"15 soste da 2 a 5 minuti, tutte a indirizzi diversi: Via dell'Indipendenza, Piazza Maggiore, i viali, la Bolognina."},
   {id:"g3",g:"Cronologia · giovedì 16",title:"Bolognina, vicino a Via Matteotti",sub:"22:40 · 24 minuti",meta:"Sosta",body:"La sosta più lunga della serata. Zona residenziale, con locali al piano terra."},
   {id:"g4",g:"Cronologia · giovedì 16",title:"Casa, quartiere San Donato",sub:"00:19",meta:"Arrivo",body:"Rientro a casa alle 00:19."},
   {id:"g6",g:"Cronologia · lunedì 13",title:"Casalecchio di Reno",sub:"19:52 · 4 minuti",meta:"Sosta",body:"Sosta di quattro minuti in una zona residenziale, poi rientro diretto verso San Donato."},
   {id:"g5",g:"Luoghi salvati",title:"FitClub, quartiere Santo Stefano",sub:"Ultima visita: 28 giugno",meta:"Salvato",body:"Ultima visita registrata: 28 giugno."}],
  bank:[
   {id:"b1",g:"Ottobre",title:"Credifin, rata",sub:"15 ott · − 262,00 €"},
   {id:"b2",g:"Ottobre",title:"Rapido Srl, accredito",sub:"14 ott · + 286,50 €"},
   {id:"b3",g:"Ottobre",title:"Fiori Lella",sub:"12 ott · − 35,00 €"},
   {id:"b3b",g:"Ottobre",title:"Studio Monti, consulenza",sub:"9 ott · − 60,00 €"},
   {id:"b4",g:"Ottobre",title:"Rapido Srl, accredito",sub:"7 ott · + 301,00 €"},
   {id:"b5",g:"Ottobre",title:"Logistica Nord, stipendio",sub:"5 ott · + 1.540,00 €"},
   {id:"b6",g:"Settembre",title:"Rapido Srl, accredito",sub:"30 set · + 274,00 €"},
   {id:"b6b",g:"Settembre",title:"Rapido Srl, accredito",sub:"23 set · + 292,00 €"},
   {id:"b6c",g:"Settembre",title:"Logistica Nord, stipendio",sub:"19 set · + 1.540,00 €"},
   {id:"b6d",g:"Settembre",title:"Rapido Srl, accredito",sub:"16 set · + 255,50 €"},
   {id:"b7",g:"Settembre",title:"Credifin, rata",sub:"15 set · − 262,00 €"},
   {id:"b7b",g:"Settembre",title:"Rapido Srl, sostituzione zaino",sub:"9 set · − 40,00 €"},
   {id:"b8",g:"Giugno",title:"Credifin, accredito",sub:"15 giu · + 8.000,00 €"},
   {id:"b9",g:"Giugno",title:"Officina Berti di D. Berti, bonifico",sub:"16 giu · − 8.000,00 €"},
   {id:"b10",g:"Giugno",title:"FitClub, ultima mensilità",sub:"1 giu · − 39,00 €"}],
  rider:[
   {id:"r1",title:"Il tuo profilo",sub:"Rider attivo",meta:"Rapido · consegne a domicilio",body:"Marco B. Rider dal 2 giugno. Valutazione 4,9.\nMezzo: scooter. Zaino termico n. 318.\nResponsabile di zona: V. Conte."},
   {id:"r2",title:"Turni di ottobre",sub:"Martedì, giovedì e una sera a scelta",meta:"Calendario",body:"Martedì 14: dalle 20 alle 24, 14 consegne.\nGiovedì 16: dalle 20 alle 24, 15 consegne.\nDeposito: zona industriale Roveri."},
   {id:"r4",title:"Messaggi dei clienti",sub:"Camilla R., Via Saragozza",meta:"Chat",body:"Camilla R., quarto piano · mar 21:14: «Sempre tu, il mio rider preferito! La prossima volta sali per un caffè?»\nMarco · mar 21:15: «Grazie, ma ho altre tre consegne. Buona serata.»\nCamilla R. · gio 21:02: «Mancia doppia se sali 😉»\nNessuna risposta. Consegna successiva ritirata alle 21:06."},
   {id:"r3",title:"Ordini di giovedì 16",sub:"15 consegne",meta:"Storico",body:"Ritiro delle 22:40 alla Pizzeria La Luna Storta, in Bolognina vicino a Via Matteotti: ordine in ritardo, 24 minuti di attesa.\nGli altri 14 ordini sono stati ritirati senza attese."}],
  gym:[
   {id:"y1",title:"Abbonamento",sub:"Non attivo",meta:"FitClub",body:"Stato: scaduto.\nUltimo ingresso: 28 giugno, ore 19:10."},
   {id:"y2",title:"Assistenza",sub:"Scrivi alla tua sede",meta:"FitClub",body:"Per rinnovi e promozioni rivolgiti alla reception della sede di Santo Stefano."}],
  cal:[
   {id:"c0",g:"Ottobre",title:"Gio 9 · M.",sub:"18:00",body:"Evento che si ripete ogni due settimane.\nNota: «Portare le buste paga. Non dirlo a nessuno.»"},
   {id:"c1",g:"Ottobre",title:"Mar 14 · Palestra",sub:"20:00 - 24:00",body:"Evento ricorrente: ogni martedì e giovedì, dalle 20 alle 24.\nCreato il 2 giugno."},
   {id:"c2",g:"Ottobre",title:"Mer 15 · R.",sub:"Promemoria",body:"Promemoria mensile, ogni 15 del mese: «R. 262»."},
   {id:"c3",g:"Ottobre",title:"Sab 18 · Pranzo da Franca",sub:"13:00",body:"Via Murri, ore 13.\nPortare i fiori."},
   {id:"c4",g:"Ottobre",title:"Sab 25 · Cena con C.",sub:"20:30",body:"Nota dell'evento: «Dirle tutto. La firma, Dani, le sere fuori. Dopo il compleanno di sua madre, non prima.»"},
   {id:"c5",g:"Ricorrenze",title:"12 settembre · Anniversario",sub:"Ogni anno",body:"Matrimonio con Chiara."},
   {id:"c6",g:"Ricorrenze",title:"3 marzo · Compleanno di Leo",sub:"Ogni anno",body:"Leo, il nipote più grande."}],
  web:[
   {id:"w1",g:"Cronologia",title:"come dire alla moglie di un debito",sub:"mer 23:41"},
   {id:"w2",g:"Cronologia",title:"prestito personale estinzione anticipata costi",sub:"mer 23:35"},
   {id:"w3",g:"Cronologia",title:"ristorante romantico Bologna colli",sub:"mar 12:50"},
   {id:"w4",g:"Cronologia",title:"regalo anniversario 6 anni in ritardo",sub:"lun 09:31"},
   {id:"w5",g:"Cronologia",title:"consegne a domicilio quante all'ora per guadagnare",sub:"dom 22:10"},
   {id:"w6",g:"Cronologia",title:"dormire 5 ore a notte conseguenze",sub:"sab 01:12"}],
  note:[
   {id:"n1",title:"Spesa",body:"Latte, uova, detersivo.\nAlbum nascosto: stesso codice del compleanno di Leo, giorno e mese."},
   {id:"n2",title:"Privata",lock:"note",body:"Rata 262 per 36 mesi. Con tre sere a settimana la chiudo in 14 mesi in tutto, non in 36.\nDani non può restituire niente.\nIl codice di questa nota lo sa solo chi ricorda il nostro anniversario."}],
  tel:[
   {id:"t1",title:"Vale",sub:"gio 19:46 · in uscita, 1 min"},
   {id:"t6",title:"Ilenia",sub:"lun 19:28 · in entrata, 1 min"},
   {id:"t7",title:"Bea",sub:"sab 23:50 · persa"},
   {id:"t8",title:"Studio Monti",sub:"mar 7 ott · in uscita, 3 min"},
   {id:"t2",title:"Credifin, numero verde",sub:"mer 11:50 · persa, 2 volte"},
   {id:"t3",title:"Giada",sub:"mer 16:10 · in entrata, 2 min"},
   {id:"t4",title:"Chiara",sub:"gio 13:05 · in entrata, 4 min"},
   {id:"t5",title:"Dani",sub:"dom 20:10 · in entrata, 6 min"}]
 },
 photos:[
  {id:"p1",t:"gio 19:56",title:"Bagagliaio",sc:"bag"},
  {id:"p2",t:"lun 08:30",title:"Screenshot",sc:"earn"},
  {id:"p3",t:"dom 11:02",title:"Fiori",sc:"roses"},
  {id:"p4",t:"28 giu",title:"Armadietto 27",sc:"gym"},
  {id:"h1",t:"15 giu",title:"Documento",sc:"paper",lock:"album"},
  {id:"h2",t:"16 giu",title:"Ricevuta",sc:"transfer",lock:"album"}],
 pins:{note:"1209",album:"0303"},lockName:{note:"Nota protetta",album:"Album nascosto"},
 qs:[
  {q:"A che ora Marco è uscito di casa giovedì sera? Scrivi ora e minuti.",all:["1946"],show:"Alle 19:46",hint:"In Mappe c'è l'ora di arrivo alla prima sosta e quanto dista da casa.",news:"Alle 19:46 Marco non stava andando in palestra: la prima tappa della serata è una zona di capannoni, dall'altra parte della città."},
  {q:"A quell'ora aveva già mentito a Chiara. A che ora le ha scritto la bugia di giovedì? Ora e minuti.",all:["1842"],show:"Alle 18:42: «Sì, gambe»",hint:"Rileggi la chat con Chiara di giovedì, sapendo dove è andato davvero.",news:"Un'ora prima di uscire le ha scritto che andava ad allenarsi. La bugia è certa. Resta da capire che cosa copre."},
  {q:"Giovedì alle 19:46 Marco ha chiamato Vale. Qual è il nome e cognome di Vale?",all:["valerio","conte"],show:"Valerio Conte",hint:"Il nome si sente in un vocale. Il cognome sta in un'altra app, dove compare con la sola iniziale del nome.",news:"Vale è un uomo, ed è il suo responsabile. Sapendo chi cercare, hai recuperato 4 dei 37 messaggi eliminati dalla chat con lui: riaprila.",unlock:"vale"},
  {q:"Nei messaggi recuperati Marco spiega perché cancella le chat. Quale azienda non deve scoprire nulla?",all:["logistica","nord"],show:"Logistica Nord, il suo datore di lavoro",hint:"Marco parla di un contratto. Cerca chi gli paga lo stipendio.",news:"Marco rischia il posto: il contratto con Logistica Nord vieta il secondo lavoro. La segretezza non riguarda solo Chiara."},
  {q:"Un secondo lavoro, quindi. Come si chiama il locale dove giovedì è rimasto fermo 24 minuti?",all:["luna","storta"],show:"Pizzeria La Luna Storta",hint:"Mappe dice dove e quando. Un'altra app dice che cosa stava facendo a quell'ora.",news:"La sosta più sospetta della serata era un ordine in ritardo. In Bolognina non abita nessuna amante."},
  {q:"Quanti euro ha incassato in tutto da quel lavoro tra settembre e ottobre? Somma gli accrediti in Banca.",a:["1409","1.409","1409,00","1.409,00","1409 euro","1.409 euro","1409€"],show:"1.409,00 €",hint:"Gli accrediti sono cinque. Non contare lo stipendio né l'addebito.",news:"In sei settimane ha messo insieme 1.409 €, dormendo cinque ore a notte. Questi soldi gli servono per qualcosa di preciso."},
  {q:"Dove finisce una parte di quei soldi ogni 15 del mese? Scrivi il nome della società.",any:["credifin"],show:"Credifin, una finanziaria",hint:"In Banca c'è un'uscita che si ripete identica ogni mese.",news:"Marco sta restituendo un prestito di cui Chiara non sa nulla. È la finanziaria che ha chiamato a casa mercoledì."},
  {q:"Quanti giorni dopo aver cominciato le consegne Marco ha ricevuto quel prestito?",a:["13","13 giorni","tredici","tredici giorni"],show:"13 giorni: dal 2 al 15 giugno",hint:"La data di inizio è nel profilo dell'app di lavoro. L'altra è il primo movimento della finanziaria.",news:"Ha cominciato a lavorare di sera prima ancora di ricevere i soldi. Sapeva già che avrebbe dovuto restituirli da solo."},
  {q:"I soldi sono ripartiti il giorno dopo. Come si chiama per esteso, nome e cognome, chi li ha ricevuti?",all:["daniele","berti"],show:"Daniele Berti, il fratello",hint:"Il nome completo sta su un documento nell'album nascosto. Per il codice servono una nota e una ricorrenza.",news:"Gli 8.000 € sono andati all'officina del fratello Dani. Marco non ha tenuto niente per sé."},
  {q:"Ora che sai chi è Dani: chi è per Marco la donna che gli scrive alle due di notte? Scrivi il grado di parentela.",any:["cognata","mogliedelfratello","mogliedisuofratello","mogliedidani"],show:"La cognata Serena, moglie di Dani",hint:"Guarda chi è taggato nella sua foto e come Marco chiama Leo nel Calendario.",news:"Serena lo ringrazia di nascosto e lo prega di tacere. Il «non dirlo a Chiara» riguarda il prestito."},
  {q:"Dopo la rata del 15 ottobre, quanti euro deve ancora versare in totale alla finanziaria?",a:["8122","8.122","8122,00","8.122,00","8122 euro","8.122 euro","8122€"],show:"8.122 €: 31 rate da 262",hint:"La mail della finanziaria dice quante rate sono in tutto, a quale è arrivato e quanto vale ciascuna.",news:"Con gli interessi il debito supera la somma ricevuta. Al ritmo del contratto pagherebbe fino a metà del 2028."},
  {q:"Marco però ha un piano. Se riesce, quante rate mensili in meno pagherà rispetto al contratto?",a:["22","22 rate","ventidue","ventidue rate","22 mesi"],show:"22 rate in meno: 14 invece di 36",hint:"Il piano è in una nota protetta. Il codice è una data che Chiara gli rinfaccia.",news:"Lavora tre sere a settimana per chiudere in 14 mesi. Qualcuno però lo sta aiutando a fare i conti."},
  {q:"Chi è la «M.» che Marco incontra il giovedì alle 18? Scrivi il cognome.",all:["monti"],show:"La dottoressa Monti, consulente del debito",hint:"L'iniziale è nel Calendario. Il cognome compare in una mail, in una chiamata e in un pagamento.",news:"Gli appuntamenti segreti del giovedì sono con una consulente che lo aiuta a rientrare. Un'altra donna da togliere dalla lista."},
  {q:"Restano le colleghe. Che cosa ha dato Marco a Ilenia lunedì sera, per meritarsi quel «sei stato un tesoro»?",any:["passaggio","strappo","accompagnat","portataacasa","riportataacasa"],show:"Un passaggio fino a casa",hint:"Ilenia spiega il suo problema in chat. La cronologia di lunedì in Mappe dice il resto.",news:"Ilenia aveva la macchina dal meccanico. Marco l'ha lasciata a Casalecchio ed è ripartito dopo quattro minuti."},
  {q:"Tra le donne che gli scrivono, a quale Marco ha risposto di essere sposato? Scrivi il nome.",any:["bea"],show:"Bea, una ex",hint:"Cerca nei Messaggi chi gli propone un caffè «come ai vecchi tempi».",news:"Bea ci riprova da sabato notte. Marco l'ha respinta con una riga e non ha più risposto."},
  {q:"E la cliente del quarto piano? Che cosa ha fatto Marco giovedì, quando gli ha offerto la mancia doppia per salire?",o:[["a","È salito"],["b","Ha rifiutato con un messaggio"],["c","Non ha risposto e ha proseguito il giro"],["d","Ha chiesto di cambiare zona"]],a:"c",show:"Non ha risposto",hint:"La conversazione è nell'app delle consegne, non nei Messaggi.",news:"Camilla lo invita da due sere. Martedì ha rifiutato con garbo, giovedì non ha nemmeno risposto."},
  {q:"Per chi sono allora le rose rosse? Scrivi il nome della persona e gli anni che compie.",all:["franca","70"],show:"Per Franca, la madre di Chiara: 70 anni",hint:"Segui l'indirizzo e il giorno della consegna. Il nome è in un'app, l'età in un'altra.",news:"Le rose sono per la suocera. È l'unica cosa che Chiara gli aveva chiesto, e l'ha fatta."},
  {q:"Chi ha visto Marco giovedì sera con lo zaino delle consegne? Scrivi il nome.",any:["giada"],show:"Giada, la receptionist della palestra",hint:"Non è nei Messaggi. Cerca tra le conversazioni private di un'altra app.",news:"Giada sa delle consegne e nient'altro. I suoi messaggi affettuosi sono quelli di chi vuole rivendergli un abbonamento."},
  {q:"Chi è l'unica persona fuori dalla famiglia a sapere che Marco ha firmato qualcosa di nascosto?",a:["teo","l'amico teo","amico teo","il suo amico teo"],show:"Teo, l'amico che lo copre",hint:"Qualcuno gli fa da alibi e gli dice di parlare.",news:"Teo lo copre e insiste perché dica la verità. Marco, alla fine, gli ha dato retta."},
  {q:"Quando e dove Marco ha deciso di dire tutto a Chiara? Scrivi il giorno e il nome del locale.",all:["25","colli"],show:"Sabato 25 ottobre, alla Trattoria ai Colli",hint:"Un evento nel Calendario e una prenotazione nella Mail parlano della stessa sera.",news:"Il tavolo per due non era per un'altra. Era per confessare tutto a Chiara, dopo il compleanno di sua madre."},
  {q:"Vale, Giada, Serena, la dottoressa Monti, Ilenia, Bea, Camilla. Chi di loro è l'amante di Marco? Se nessuna, scrivi NESSUNA.",a:["nessuna","nessuno","nessuna di loro","nessun amante","non c'è","non ce","non ha amanti","non ha un'amante"],show:"Nessuna",hint:"Per ognuna hai già scoperto chi è e che cosa vuole da lui.",news:"Sette nomi, sette spiegazioni. Nella vita di Marco non c'è un'altra donna."},
  {q:"Il verdetto per Chiara.",o:[["t","Tradisce"],["n","Non tradisce"],["a","Nasconde altro"]],a:"a",show:"Nasconde altro",hint:"Non c'è un'altra persona, ma c'è qualcosa che Chiara non sa.",news:""}],
 win:{title:"Marco non tradisce. Nasconde un debito.",
  steps:["Dal 30 giugno non mette piede in palestra. Da giugno fa il rider per Rapido tre sere a settimana, e Vale è Valerio Conte, il responsabile dei turni.","Il 15 giugno ha chiesto 8.000 € a una finanziaria e il giorno dopo li ha girati all'officina del fratello Dani, che non restituisce nulla.","La donna delle due di notte è Serena, la cognata. Giada è la receptionist della palestra, la dottoressa Monti una consulente del debito, Ilenia una collega a cui ha dato un passaggio. Bea è una ex che ha respinto, Camilla una cliente a cui non ha risposto. Le rose sono per la suocera.","La sosta di 24 minuti in Bolognina era un ordine in ritardo in pizzeria.","Marco aveva già prenotato un tavolo per sabato 25 ottobre: voleva dirle tutto."],
  end:"Chiara legge il rapporto senza dire una parola. Poi: «Ottomila euro. E per cinque mesi ha preferito lasciarmi credere il peggio.» Rimette il telefono sul comodino. Sabato 25, a cena, lascerà parlare lui per primo."}
};
EPISODES[1]=EP1;
LIB.tune(1,e=>{
 LIB.clean(e);
 e.map=LIB.city("Bologna",[[40,52,"Bolognina"],[132,132,"Centro"],[276,132,"San Donato"],[40,232,"Casalecchio"],[300,40,"Roveri"],[200,200,"Santo Stefano"]],[]);
 e.lists.rider.find(x=>x.id==="r3").lock="rid";
 e.pins={album:"0303",rid:"0318",note:"2640"};
 e.locks={album:{hint:"Il compleanno del nipote più grande."},rid:{name:"Ordini protetti",hint:"Il numero del mio zaino, con lo zero davanti."},note:{hint:"Le decine della rata, poi i minuti di quel ritiro in pizzeria."}};
 e.spots=[
  {id:"s1",x:62,y:70,label:"La Luna Storta",title:"Pizzeria La Luna Storta",sub:"Bolognina · ★ 3,9",body:"Recensione: «Pizze buone, ma i rider aspettano fuori anche venti minuti. Poveri ragazzi.»"},
  {id:"s2",x:160,y:120,label:"Studio Monti",title:"Studio Monti",sub:"Consulenza debiti e finanziamenti · ★ 4,8",body:"Recensione: «La dottoressa mi ha aiutato a uscire da un prestito senza che mia moglie lo sapesse. Poi gliel'ho detto io.»"},
  {id:"s3",x:200,y:212,label:"FitClub",title:"FitClub",sub:"Santo Stefano · ★ 4,2",body:"Ingresso con badge. Aperto fino alle 23."},
  {id:"s4",x:300,y:150,label:"Officina Berti",title:"Officina Berti",sub:"Chiusa",body:"Saracinesca abbassata. Un cartello: «Chiusi per inventario fino a nuova comunicazione»."}];
 LIB.hints(e,["Il telefono si ricorda dove si è fermato, e quando.","Che cosa ha raccontato a casa, quella sera?","Una voce, e un cognome in un posto dove si lavora.","Qualcuno gli paga uno stipendio diverso.","Dove è rimasto più a lungo, e a fare che cosa?","Conta solo quello che arriva da quel lavoro.","Ogni mese, lo stesso giorno, esce la stessa cifra.","Confronta due date: quando ha cominciato e quando è arrivato il prestito.","Il giorno dopo i soldi sono ripartiti verso qualcuno della famiglia.","Una foto di famiglia dice chi è chi.","La finanziaria tiene il conto.","Marco ha un piano, scritto e chiuso.","Un'iniziale ogni due settimane.","Una collega ha chiesto aiuto.","Una vecchia amica gli ha proposto un caffè.","Una cliente ci ha provato.","Rose rosse, ma per chi?","Qualcuno l'ha visto con lo zaino.","Qualcuno gli fa da alibi.","Una sera prenotata per dire tutto.","Ripassa chi sono tutte.","Che cosa nasconde Marco a Chiara?"]);
});
})();
