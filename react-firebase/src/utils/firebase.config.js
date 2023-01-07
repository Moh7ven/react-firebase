import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-7703c.firebaseapp.com",
  projectId: "react-firebase-redux-7703c",
  storageBucket: "react-firebase-redux-7703c.appspot.com",
  messagingSenderId: "530318269665",
  appId: "1:530318269665:web:b3afc5e8e19b60a780aba0",
});

export const auth = app.auth();
export default app;
