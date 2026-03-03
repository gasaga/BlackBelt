// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Manejar redirect (para móvil)
  useEffect(() => {
  const initAuth = async () => {
    try {
      // 1. Verificamos si venimos de una redirección de Google
      const result = await getRedirectResult(auth);
      if (result?.user) {
        navigate('/BeltSelector');
        return; // Salimos para evitar doble ejecución
      }

      // 2. Si no es redirección, escuchamos el cambio de estado normal
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate('/BeltSelector');
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error en Auth:", error);
      setLoading(false);
    }
  };

  initAuth();
}, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      // En móvil, esto hará redirect y no llegará a la siguiente línea
      // En desktop, esperará el resultado del popup
      await signInWithGoogle();
      
      // Solo para desktop (popup) navegamos aquí
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (!isMobile) {
        navigate('/BeltSelector');
      }
      // En móvil, la navegación ocurre después del redirect
    } catch (error) {
      console.error("Google Auth Error:", error);
      alert("Error de autenticación con Google: " + error.message);
    }
  };

  const validateForm = () => {
    if (!email.includes('@')) {
      alert('Email no válido');
      return false;
    }
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/BeltSelector');
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error de autenticación: " + error.message);
    }
  };

  if (loading) {
    return <div className={styles.loginContainer}>Cargando...</div>;
  }
   

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Ingresar
        </button>
        <button
          type="button"
          className={styles.loginButton}
          style={{ background: '#4285F4', color: 'white', marginTop: '10px' }}
          onClick={handleGoogleLogin}
        >
          Ingresar con Google
        </button>
      </form>
    </div>
  );
};

export default Login;