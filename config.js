import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDa_uzyfPyc0Mt5cMpBdXLvcXTwXhYPofU",
  authDomain: "project-73-c0485.firebaseapp.com",
  projectId: "project-73-c0485",
  storageBucket: "project-73-c0485.appspot.com",
  messagingSenderId: "184908541096",
  appId: "1:184908541096:web:250c4e8edfe45cd1e8669d",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
