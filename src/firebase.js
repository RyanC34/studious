const firebase = require("firebase");
require("firebase/firestore");
require("firebase/auth");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvpgk8obO0PmX3wPi1beGJWT1J1Q1-YLk",
    authDomain: "studious-23398.firebaseapp.com",
    projectId: "studious-23398",
    storageBucket: "studious-23398.appspot.com",
    messagingSenderId: "253657713488",
    appId: "1:253657713488:web:99bf1a49d83e5fef123a55",
    measurementId: "G-778N2EHRLD"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const db = fire.firestore();
module.exports = { auth, db }