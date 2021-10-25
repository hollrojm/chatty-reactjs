import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyA04_gQo5fCPkQWDER3MPmfQ_SqX1ayk0o",
    authDomain: "chatty-5e586.firebaseapp.com",
    databaseURL: "https://chatty-5e586-default-rtdb.firebaseio.com",
    projectId: "chatty-5e586",
    storageBucket: "chatty-5e586.appspot.com",
    messagingSenderId: "853975319282",
    appId: "1:853975319282:web:30a2d0cab8a586acf5466b",
  };

  
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();