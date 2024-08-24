import "../styles/globals.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTjzhmBGnidKNTo8Vost9FY6EFTKyMrTE",
  authDomain: "portfolio-5f28f.firebaseapp.com",
  projectId: "portfolio-5f28f",
  storageBucket: "portfolio-5f28f.appspot.com",
  messagingSenderId: "521111422515",
  appId: "1:521111422515:web:36e9cba4cb6538cc1d0546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);