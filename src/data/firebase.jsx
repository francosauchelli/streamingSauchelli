// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMpkPl-S-ALoCxv754QnT-cdQ734e4gxo",
    authDomain: "streaming-31120.firebaseapp.com",
    projectId: "streaming-31120",
    storageBucket: "streaming-31120.appspot.com",
    messagingSenderId: "408706159570",
    appId: "1:408706159570:web:a8c599c823dd807cbe6e0b"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

const firestoreDB = getFirestore( app );

export default firestoreDB;

