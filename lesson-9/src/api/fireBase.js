import firebase from "firebase/compat"

const firebaseConfig = {
   apiKey: "AIzaSyBpaZvYEQZS-90wYtkc4ux_0YjX6NWOyIk",
   authDomain: "reactchat-d98f6.firebaseapp.com",
   databaseURL: "https://reactchat-d98f6-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "reactchat-d98f6",
   storageBucket: "reactchat-d98f6.appspot.com",
   messagingSenderId: "691450059968",
   appId: "1:691450059968:web:54e16fd2927b64428b2125",
   measurementId: "G-9J7XY66YDP"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebase.database();