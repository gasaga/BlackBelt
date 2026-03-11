// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from "../firebase";
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Login con Email y Password
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/BeltSelector');
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  // Login con Google (El que ya te funciona)
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/BeltSelector');
    } catch (error) {
      console.error("Error en Google Login:", error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar Sesión</h2>
      
      <form onSubmit={handleEmailLogin}>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className={styles.loginButton}>Entrar</button>
      </form>

      <div className={styles.divider}><span>O</span></div>

      <button type="button" className={styles.googleButton} onClick={handleGoogleLogin}>
        Entrar con Google
      </button>

      <p className={styles.footerText}>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;