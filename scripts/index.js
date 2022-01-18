import { initializeApp } from  'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCOPrRvfLVNLneTfOG_R9BHqvq1kplU5sM",
  authDomain: "gamer-guides-e10c8.firebaseapp.com",
  projectId: "gamer-guides-e10c8",
  storageBucket: "gamer-guides-e10c8.appspot.com",
  messagingSenderId: "224130285102",
  appId: "1:224130285102:web:a5e375545f1e0d36cb69bf",
  measurementId: "G-QXVR69N991"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db,collection('todos').getDocs();
const todoCol = collection(db, 'todos');
const snapshot = await getDocs(todoCol);

// Detect auth state
auth.onAuthStateChanged(user => {

});
onAuthStateChange(auth, user => {
  if(user == null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });