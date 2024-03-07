import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCzuIGq0L3Cq_G00aTQjH7wZAtFYk0b4bY',
  authDomain: 'rockstar-efa35.firebaseapp.com',
  projectId: 'rockstar-efa35',
  storageBucket: 'rockstar-efa35.appspot.com',
  messagingSenderId: '510809606086',
  appId: '1:510809606086:web:37c769dc38d9b5493e54c7',
  measurementId: 'G-B3GTR6DE2F',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const db = getFirestore(app);

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('Logged in!');
  } else {
    console.log('No user!');
  }
});
