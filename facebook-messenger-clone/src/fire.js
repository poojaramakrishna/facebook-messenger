import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC06VjKxht-T_jNqNvSLavFQ6_i5vzL1mE",
  authDomain: "facebook-messenger-clone-e7726.firebaseapp.com",
  projectId: "facebook-messenger-clone-e7726",
  storageBucket: "facebook-messenger-clone-e7726.appspot.com",
  messagingSenderId: "426636076520",
  appId: "1:426636076520:web:91c173bb34f6f0b044f05d",
  measurementId: "G-MSB7LBFY5C"
});

const db = firebase.firestore();
export default db;