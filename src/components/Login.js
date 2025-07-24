// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
      navigate('/');
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error de autenticación: " + error.message);
    }
  };

  

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
      </form>
    </div>
  );
};

export default Login;