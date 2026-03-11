// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from "../firebase";
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Si llegamos aquí, el login fue exitoso
      const user = result.user;
      console.log("Usuario logueado:", user.displayName);
      
      // Redirigimos al selector de cinturones
      navigate('/BeltSelector'); 
    } catch (error) {
      console.error("Error en Google Login:", error.code);
      
      // Manejo de errores comunes
      if (error.code === 'auth/popup-closed-by-user') {
        alert("Cerraste la ventana antes de terminar el login.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.log("Solicitud cancelada por el navegador.");
      } else {
        alert("Ocurrió un error al entrar con Google: " + error.message);
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* ... resto de tu formulario de email/password ... */}

      <button
        type="button"
        className={styles.googleButton}
        onClick={handleGoogleLogin}
      >
        <img src="/assets/google-icon.png" alt="" style={{width: '20px', marginRight: '10px'}} />
        Entrar con Google
      </button>
    </div>
  );
};

export default Login;