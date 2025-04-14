// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAregQ2iA9MaLoO3kuFs4UiUPGy8FUHeUo",
    authDomain: "sandaweddinginvitations.firebaseapp.com",
    projectId: "sandaweddinginvitations",
    storageBucket: "sandaweddinginvitations.firebasestorage.app",
    messagingSenderId: "701211383429",
    appId: "1:701211383429:web:46b0c94b018932c7ebfbec"
  };
  
    
// Инициализация Firebase
const app = initializeApp(firebaseConfig);
// Инициализация Firestore
const db = getFirestore(app);

export { db };
