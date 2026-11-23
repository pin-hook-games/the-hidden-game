/* Tradisce o no? Dati comuni: stagione, registro degli episodi, icone. */
const SEASON=[
 ["Sempre in palestra","Chiara sospetta del marito Marco","Bologna"],
 ["Salvato come Idraulico","Pietro sospetta della moglie Sara","Torino"],
 ["Lei cancella le chat","Luca sospetta della fidanzata Giorgia","Firenze"],
 ["Trasferta a Milano","Irene sospetta del marito Davide","Milano e Bologna"],
 ["L'account segreto","Nicola sospetta della moglie Elisa","Verona"],
 ["Il regalo sbagliato","Anna sospetta del marito Paolo","Roma"],
 ["Turno di notte","Stefano sospetta della moglie Marta","Padova"],
 ["Il compagno di liceo","Silvia sospetta del marito Federico","Bergamo"],
 ["Due telefoni","Laura sospetta del compagno Antonio","Napoli"],
 ["La babysitter","Roberta sospetta del marito Michele","Bari"],
 ["L'app di incontri","Giulia sospetta del fidanzato Matteo","Rimini"],
 ["Lezioni private","Enrico sospetta della moglie Paola","Cagliari"],
 ["Il capo scrive di notte","Alessio sospetta della fidanzata Noemi","Milano"],
 ["Ritorno di fiamma","Elena sospetta del marito Simone","Palermo"],
 ["Il calcetto del giovedì","Bea sospetta del fidanzato Andrea","Catania"],
 ["La collega nuova","Vittoria sospetta della compagna Ilaria","Trieste"],
 ["Il bonifico del 5","Teresa sospetta del marito Giovanni","Perugia"],
 ["Tutte le storie viste","Diego sospetta della fidanzata Alessia","Lecce"],
 ["Il profumo","Lidia sospetta del marito Tommaso","Parma"],
 ["Doppia vita","Camilla sospetta del promesso sposo Riccardo","Genova e Livorno"]
];
/* Tipi di storia. Ogni tipo occupa 20 numeri di fila: i tradimenti da 1 a 20, il tipo successivo da 21 a 40, e così via.
   Per aggiungere un caso basta registrarlo in EPISODES con il suo numero e mettere titolo, cliente e città in SEASON alla stessa posizione. */
const CATS=[
 {id:"trad",from:1,name:"Tradimenti",brand:["Tradisce","o no?"],desc:"Un cliente sospetta del partner e ti affida il suo telefono. Tre verdetti possibili: tradisce, non tradisce, nasconde altro."},
 {id:"omi",from:21,name:"Omicidi",brand:["Chi è","stato?"],desc:"Il telefono della vittima, o di chi è sospettato. Ricostruisci le ultime ore e indica il colpevole."},
 {id:"furti",from:41,name:"Furti",brand:["Chi l'ha","preso?"],desc:"Gioielli, casseforti, auto sparite nella notte. Il telefono giusto racconta chi sapeva e chi c'era."},
 {id:"pol",from:61,name:"Intrighi politici",brand:["Chi","manovra?"],desc:"Campagne elettorali, appalti, dossier. Segui i soldi e i messaggi cancellati."}
];
const EPISODES={};
/* icone delle app: disegnate qui, nessun file esterno */
const IC={
 forum:`<path d="M4 4.5h16a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H10.5L5 21v-4H4a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2z" fill="#fff"/>`,
 call:`<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.4 2.3.6 3.6.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" fill="#fff"/>`,
 mail:`<rect x="2" y="5" width="20" height="14" rx="2.5" fill="#fff"/><path d="M3.5 7.5l8.5 6 8.5-6" fill="none" stroke="rgba(0,0,0,.4)" stroke-width="1.8" stroke-linecap="round"/>`,
 public:`<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2"/><path d="M3 12h18M12 3c3.6 3 3.6 15 0 18M12 3c-3.6 3-3.6 15 0 18" fill="none" stroke="#fff" stroke-width="2"/>`,
 photo_library:`<rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="#fff" stroke-width="2"/><circle cx="8.5" cy="10" r="1.8" fill="#fff"/><path d="M4.5 18l5-4.8 3.4 3 3-2.6 3.8 4.4z" fill="#fff"/>`,
 map:`<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" fill="#fff"/><circle cx="12" cy="9" r="2.6" fill="rgba(0,0,0,.4)"/>`,
 calendar_month:`<rect x="3" y="4.5" width="18" height="16.5" rx="3" fill="#fff"/><rect x="3" y="4.5" width="18" height="5" rx="2.5" fill="rgba(0,0,0,.3)"/><text x="12" y="18.6" text-anchor="middle" font-size="8.5" font-weight="700" font-family="sans-serif" fill="#d93a3a">17</text>`,
 sticky_note_2:`<rect x="4" y="3" width="16" height="18" rx="2.5" fill="#fff"/><path d="M7.5 8h9M7.5 12h9M7.5 16h5.5" fill="none" stroke="rgba(0,0,0,.4)" stroke-width="1.8" stroke-linecap="round"/>`,
 photo_camera:`<rect x="2.5" y="7" width="19" height="13" rx="3" fill="#fff"/><rect x="8" y="4" width="8" height="5" rx="1.5" fill="#fff"/><circle cx="12" cy="13.5" r="4" fill="rgba(0,0,0,.4)"/><circle cx="12" cy="13.5" r="1.9" fill="#fff"/>`,
 account_balance:`<path d="M12 3l9 5v2H3V8z" fill="#fff"/><path d="M6 11v6M10 11v6M14 11v6M18 11v6" stroke="#fff" stroke-width="2.2"/><rect x="3" y="18" width="18" height="2.6" rx="1" fill="#fff"/>`,
 two_wheeler:`<circle cx="6" cy="17" r="3" fill="none" stroke="#fff" stroke-width="2"/><circle cx="18" cy="17" r="3" fill="none" stroke="#fff" stroke-width="2"/><path d="M6 17h7l3-8h3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="8" width="6.5" height="5.5" rx="1.2" fill="#fff"/>`,
 work:`<rect x="3" y="8" width="18" height="12" rx="2.5" fill="#fff"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" fill="none" stroke="#fff" stroke-width="2"/><path d="M3 13h18" stroke="rgba(0,0,0,.35)" stroke-width="1.6"/>`,
 folder:`<path d="M3 7a2 2 0 0 1 2-2h4.5l2 2.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#fff"/>`,
 fitness_center:`<rect x="8.5" y="11" width="7" height="2" fill="#fff"/><rect x="5.2" y="7" width="3.3" height="10" rx="1.2" fill="#fff"/><rect x="15.5" y="7" width="3.3" height="10" rx="1.2" fill="#fff"/><rect x="2.4" y="9.5" width="2.4" height="5" rx="1" fill="#fff"/><rect x="19.2" y="9.5" width="2.4" height="5" rx="1" fill="#fff"/>`
};
const icon=n=>`<svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">${IC[n]||""}</svg>`;

