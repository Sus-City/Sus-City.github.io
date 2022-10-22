//Importing the firebase methods
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD5JexZ6OxSuoM4Jc8ufcOduQXvPlOf2eQ",
  authDomain: "sus-city.firebaseapp.com",
  databaseURL:
    "https://sus-city-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sus-city",
  storageBucket: "sus-city.appspot.com",
  messagingSenderId: "437535689858",
  appId: "1:437535689858:web:488f322361325fb311b89b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth(app);
let userUID = localStorage.getItem("UID");
console.log(userUID);
