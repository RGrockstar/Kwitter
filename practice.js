
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCghaSs3QVhIY2PVmWMlzXbqW-lVDM68CQ",
    authDomain: "pathways-noida-htra.firebaseapp.com",
    databaseURL: "https://pathways-noida-htra-default-rtdb.firebaseio.com",
    projectId: "pathways-noida-htra",
    storageBucket: "pathways-noida-htra.appspot.com",
    messagingSenderId: "395911950688",
    appId: "1:395911950688:web:27e5e4c6d21c89d5c26e05",
    measurementId: "G-WFCQNYK0J4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function Add(){
      user_name = document.getElementById("User_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "addinguser"});
  }