// Import the Firebase modules
// import * as firebase from "firebase/app";
// import "firebase/database";

const apiKey = process.env.FIREBASE_API_KEY;


// Initialize Firebase
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "rbc-bizmatch.firebaseapp.com",
    projectId: "rbc-bizmatch",
    storageBucket: "rbc-bizmatch.appspot.com",
    messagingSenderId: "833487295155",
    appId: "1:833487295155:web:b0192829bb527c5c3256c6",
    measurementId: "G-WSF92NTLQR"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();



//registers the user to the data base
function registerUser(){ 
  console.log("Hellow world")
}

function he(){
  console.log("aosdubgfoadb")
}

//login the user to the databse
function loginUser(){
}


