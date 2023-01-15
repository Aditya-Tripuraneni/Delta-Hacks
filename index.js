
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_fE4cWZGsqqPCNgNeJx31kjM1KCYmQk4",
  authDomain: "rbc-bizmatch.firebaseapp.com",
  databaseURL: "https://rbc-bizmatch-default-rtdb.firebaseio.com",
  projectId: "rbc-bizmatch",
  storageBucket: "rbc-bizmatch.appspot.com",
  messagingSenderId: "833487295155",
  appId: "1:833487295155:web:b0192829bb527c5c3256c6",
  measurementId: "G-WSF92NTLQR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const auth = firebase.auth()
const database = firebase.database();



//registers the user to the data base
function registerUser(){ 
  email = document.getElementById("email").value 
  password = document.getElementById("password").value
  console.log(email)
  auth.createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    // Save user data to Firebase
    var databaseRef = database.ref();
    var userData = {
        email: email,
        password: password
    }
    databaseRef.child('users/'+ user.uid).set(userData);
    console.log("USER ADDED");
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMsg = error.message;
    console.log(errorCode, errorMsg);
});


}

function checkEmail(email){
  expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (expression.test(email) == true){
    return true
  }
  return false
}


function checkPasswordLength(password){
  if (password < 8){
    return false
  }
  return true
}

function matchPasswordCheck(password){
  if (field == null  || field.length <= 0 ){
    return false
  }
  return true

}






