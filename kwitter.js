const firebaseConfig = {
    apiKey: "AIzaSyCtGYO35ycQmjt4bwZgiK_4_tnhYCh2nIk",
    authDomain: "lets-chat-168ea.firebaseapp.com",
    databaseURL: "https://lets-chat-168ea-default-rtdb.firebaseio.com",
    projectId: "lets-chat-168ea",
    storageBucket: "lets-chat-168ea.appspot.com",
    messagingSenderId: "196409660585",
    appId: "1:196409660585:web:204da2e325ec3eb3e845b8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
