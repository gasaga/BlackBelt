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
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          console.log("Redirect login exitoso:", result.user.email);
          navigate('/BeltSelector');
        }
      } catch (error) {
        console.error("Error en redirect result:", error);
      }
    };

    handleRedirectResult();

    // Verificar si ya hay sesión activa
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario ya autenticado:", user.email);
        navigate('/BeltSelector');
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
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