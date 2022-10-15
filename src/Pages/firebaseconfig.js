import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC95KRmdTAYoi32jj6b0rz1Yuf_GH1hdpM",
    authDomain: "weather-app-779bf.firebaseapp.com",
    projectId: "weather-app-779bf",
    storageBucket: "weather-app-779bf.appspot.com",
    messagingSenderId: "948468951456",
    appId: "1:948468951456:web:3353557f5d141926f99cc5",
    measurementId: "G-X4GBL660HF"
  };

  const app =initializeApp(firebaseConfig)

  export const auth= getAuth(app)