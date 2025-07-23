// Results.js con clases CSS
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Results.module.css'; // Importa el CSS Module

// Objeto con nombres formateados de cinturones
const beltNames = {
  blanco: 'Blanco',
  amarillo: 'Amarillo',
  naranja: 'Naranja',
  verde: 'Verde',
  azul: 'Azul',
  rojo: 'Rojo',
  // Añade más si es necesario
};


const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extracción con valores por defecto robustos
  const state = location.state || {};
  const score = state.score || 0;
  const totalQuestions = Math.max(state.totalQuestions || 1, 1); // Evita división por 0
  const belt = state.belt || 'blanco';

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className={styles.resultsContainer}>
      <h2>¡CUESTIONARIO COMPLETADO!</h2>
      <h3 className={styles.beltTitle}>Cinturón: {beltNames[belt] || belt}</h3>

      <div className={styles.scoreContainer}>

        <p className={styles.scoreText}>
          Aciertos: <strong>{score}/{totalQuestions}</strong></p>
        <p className={styles.scoreText}>Porcentaje: <strong>{percentage}%</strong></p>
      </div>

      <button
        className={styles.button}
        onClick={() => navigate('/')}
      >
        Volver a cinturones
      </button>
    </div>
  );
};

export default Results;