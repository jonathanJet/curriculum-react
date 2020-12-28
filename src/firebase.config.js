import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAYqmiG4DhDiKkWHTUU10XAN_5d2RD-VFw",
  authDomain: "curriculum-back.firebaseapp.com",
  databaseURL: "https://curriculum-back-default-rtdb.firebaseio.com",
  projectId: "curriculum-back",
  storageBucket: "curriculum-back.appspot.com",
  messagingSenderId: "178770035184",
  appId: "1:178770035184:web:3138f1d84e779b388fdd35"
};
// Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
