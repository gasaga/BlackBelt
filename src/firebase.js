// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut 
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMv6rkLoCpdrrr2PQ1Yr67riR8nGVn34",
  authDomain: "blackbelt-9520.firebaseapp.com",
  projectId: "blackbelt-9520",
  storageBucket: "blackbelt-9520.firebasestorage.app",
  messagingSenderId: "387253271137",
  appId: "1:387253271137:web:b04dac4a2abe46035c0820",
  measurementId: "G-HNSY9V2XF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Detectar si es móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Función unificada para login con Google
const signInWithGoogle = async () => {
  try {
    if (isMobile) {
      // En móvil usar redirect
      await signInWithRedirect(auth, googleProvider);
      // No navegues aquí, el redirect manejará la vuelta
    } else {
      // En desktop usar popup
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    }
  } catch (error) {
    console.error("Error en signInWithGoogle:", error);
    throw error;
  }
};

export { 
  auth, 
  googleProvider, 
  signInWithGoogle,
  getRedirectResult,
  signOut 
};