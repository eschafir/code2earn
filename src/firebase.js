// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyAfCx0wGNS6EvO3E2w8J9-f9T88M18NCl0",
//     authDomain: "genial-beaker-339403.firebaseapp.com",
//     projectId: "genial-beaker-339403",
//     storageBucket: "genial-beaker-339403.appspot.com",
//     messagingSenderId: "728702184518",
//     appId: "1:728702184518:web:5327d19faa138347ddee47",
//     measurementId: "G-0703XKHMD2"
//   });

export const auth = app.auth()
export default app