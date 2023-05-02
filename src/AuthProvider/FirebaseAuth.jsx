// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// firebase auth config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERI,
  appId: import.meta.env.VITE_APPID
};


// env.local auth config

// const firebaseConfig = {
//   apiKey: "AIzaSyD_Se9ceQXSTub_ZTmEtXZKs1YZEqE1ZrU",
//   authDomain: "bd-chef-recipe-world-reactauth.firebaseapp.com",
//   projectId: "bd-chef-recipe-world-reactauth",
//   storageBucket: "bd-chef-recipe-world-reactauth.appspot.com",
//   messagingSenderId: "548296814243",
//   appId: "1:548296814243:web:1b35fcbfe2e1786d625916"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;