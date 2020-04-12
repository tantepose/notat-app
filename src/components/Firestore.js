import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAKqMg7ZfIqEpM0mUFasFuHG17OzqMrT7E",
    authDomain: "notat-app.firebaseapp.com",
    databaseURL: "https://notat-app.firebaseio.com",
    projectId: "notat-app",
    storageBucket: "notat-app.appspot.com",
    messagingSenderId: "257706087352",
    appId: "1:257706087352:web:71080de3e038190cd4b54d"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  console.log("✨ Database online!")

  export default firebase;