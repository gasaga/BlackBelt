/*
    Componente de Registro de Usuario por email y contraseña.
*/

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from "../firebase";
import styles from './Login.module.css'; // Reutilizamos estilos

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("¡Cuenta creada con éxito!");
      navigate('/BeltSelector');
    } catch (error) {
      alert("Error al registrar: " + error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleRegister}>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.inputGroup}>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className={styles.loginButton}>Registrarse</button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login" style={{ color: 'blue', fontWeight: 'bold', textDecoration: 'none' }}>
          Inicia sesión
        </Link>
      </p>
    </div>
  );
};

export default Register;