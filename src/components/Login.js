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
  // Handle Google redirect result (for mobile)
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        console.log('getRedirectResult result:', result);
        if (result && result.user) {
          navigate('/BeltSelector');
        }
      })
      .catch((error) => {
        console.error('getRedirectResult error:', error);
      });
    // Also check if user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/BeltSelector');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Google login handler (now inside component)
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/BeltSelector');
    } catch (error) {
      console.error("Google Auth Error:", error.message);
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

// Modifica handleSubmit:
 const handleSubmit = async (e) => {
    e.preventDefault();
   if (!validateForm()) return; // Usa la función o elimínala
    
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