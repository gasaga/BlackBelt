// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
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

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Google Sign-In function
const signInWithGoogle = async () => {
  try {
    // Simple mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      await signInWithRedirect(auth, provider);
      // On mobile, result is handled after redirect
      return null;
    } else {
      const result = await signInWithPopup(auth, provider);
      // You can access user info with result.user
      return result;
    }
  } catch (error) {
    throw error;
  }
};

export { auth, signInWithGoogle }; // Exporta auth y Google login