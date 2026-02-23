// ============================================================
//  CONFIG.JS — Centrale configuratie
// ============================================================

// ── FIREBASE CONFIGURATIE ──
// Plak hier je Firebase config (zie FIREBASE_SETUP.md stap 4)
const firebaseConfig = {
  apiKey: "AIzaSyBx8DsPTO-Jk4xg_-9Qno6hzmfZwbgy0YE",
  authDomain: "rekenvaardigheden-v01.firebaseapp.com",
  projectId: "rekenvaardigheden-v01",
  storageBucket: "rekenvaardigheden-v01.firebasestorage.app",
  messagingSenderId: "628547232535",
  appId: "1:628547232535:web:8b1725cee146410b538d52"
};

// ── ADMIN INSTELLINGEN ──
const ADMIN_EMAIL = "maarten.arts@labsintniklaas.be";
const ADMIN_CODE = "852874179639";

// ── OEFENINGEN CONFIGURATIE ──
// Volgorde hier bepaalt: type-nummering, volgorde knoppen, volgorde groei-tabel
// Voeg toe/verwijder naar wens — het systeem past zich automatisch aan
const OEFENINGEN = [
  {
    type: 1,
    naam: "Hoofdbewerkingen met gehele getallen",
    beschrijving: "Bereken som, verschil, product en quotiënt van gehele getallen.",
    url: "hoofdbewerkingen_gehele_getallen.html",
    kleur: "#4A90D9",
    icon: "🧮"
  },
  {
    type: 2,
    naam: "Breuken gelijknamig maken",
    beschrijving: "Maak twee breuken gelijknamig.",
    url: "breuken_gelijknamig_maken.html",
    kleur: "#4A90D9",
    icon: "🧩"
  },
  {
    type: 3,
    naam: "Breuken optellen & aftrekken",
    beschrijving: "Tel ongelijknamige breuken op of trek ze af.",
    url: "breuken_optellen_en_aftrekken.html",
    kleur: "#4A90D9",
    icon: "➕➖"
  },
  {
    type: 4,
    naam: "Breuken vermenigvuldigen",
    beschrijving: "Vermenigvuldig twee breuken.",
    url: "breuken_vermenigvuldigen.html",
    kleur: "#E8A838",
    icon: "✖️"
  }
];

// ── FIREBASE INITIALISATIE ──
// Wordt automatisch geladen door alle pagina's
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export voor gebruik in andere bestanden
export { db, ADMIN_EMAIL, ADMIN_CODE, OEFENINGEN };
