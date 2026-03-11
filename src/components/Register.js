/*
    Componente de Registro de Usuario por email y contraseña.
*/

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword, signOut } from "../firebase";
import styles from './Login.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Forzamos el cierre de sesión para que no entre directo
      await signOut(auth);
      alert("¡Cuenta creada! Por favor, inicia sesión.");
      navigate('/login');
    } catch (error) {
      alert("Error en el registro: " + error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit" className={styles.loginButton}>Registrarse</button>
      </form>

      <p className={styles.footerText}>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default Register;