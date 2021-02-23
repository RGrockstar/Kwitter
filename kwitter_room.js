
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCghaSs3QVhIY2PVmWMlzXbqW-lVDM68CQ",
      authDomain: "pathways-noida-htra.firebaseapp.com",
      databaseURL: "https://pathways-noida-htra-default-rtdb.firebaseio.com",
      projectId: "pathways-noida-htra",
      storageBucket: "pathways-noida-htra.appspot.com",
      messagingSenderId: "395911950688",
      appId: "1:395911950688:web:27e5e4c6d21c89d5c26e05",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    function Add(){
        user_name = document.getElementById("User_name").value;
      firebase.database().ref("/").child(user_name).update({purpose : "addinguser"});
    }
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name;
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}