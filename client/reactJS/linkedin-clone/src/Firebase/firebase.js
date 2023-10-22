import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBy-cDiuuDDeWppreOCSQr2-ModbWr-AtY",
  authDomain: "linkedin-clone-ec96b.firebaseapp.com",
  projectId: "linkedin-clone-ec96b",
  storageBucket: "linkedin-clone-ec96b.appspot.com",
  messagingSenderId: "504046015111",
  appId: "1:504046015111:web:e9c2aacd72b24d2b8c9e22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
