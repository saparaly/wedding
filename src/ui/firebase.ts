// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Конфигурация из Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAZeblGmLmchH5hFzE0-FiMmfKVIPOPpxw",
    authDomain: "wedding-45ac1.firebaseapp.com",
    projectId: "wedding-45ac1",
    storageBucket: "wedding-45ac1.firebasestorage.app",
    messagingSenderId: "421371677206",
    appId: "1:421371677206:web:debc3a9a7b329b0f454337"
};  

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
// Инициализация Firestore
const db = getFirestore(app);

export { db };
