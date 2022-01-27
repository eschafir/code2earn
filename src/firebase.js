// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: process.env.REACT_CODE2EARN_FIREBASE_API_KEY,
    authDomain: process.env.REACT_CODE2EARN_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_CODE2EARN_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_CODE2EARN_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_CODE2EARN_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_CODE2EARN_FIREBASE_APP_ID,
    measurementId: process.env.REACT_CODE2EARN_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth()
export default app