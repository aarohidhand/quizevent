// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyDr0bNa6y1_aE8jNqfX4Al2Hir0DoulXzw",
    authDomain: "quiz-event.firebaseapp.com",
    projectId: "quiz-event",
    storageBucket: "quiz-event.appspot.com",
    messagingSenderId: "1059717312574",
    appId: "1:1059717312574:web:4237b2b46b3d340ea3216f",
    measurementId: "G-88K8K322T0"
  };
  
  firebase.initializeApp(firebaseConfig); // This must run before anything else
  const auth = firebase.auth();
  const db = firebase.firestore();
  