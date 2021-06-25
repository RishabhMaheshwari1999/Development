import firebase from "firebase";



let firebaseConfig = {
    apiKey: "AIzaSyAWOfIrTaHfNzhf38va89dhswawiaBwNJQ",
    authDomain: "react-login-3d75c.firebaseapp.com",
    projectId: "react-login-3d75c",
    storageBucket: "react-login-3d75c.appspot.com",
    messagingSenderId: "140604785417",
    appId: "1:140604785417:web:ff3fd7198a6d2a2374c9d8"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

export default firebaseAuth;