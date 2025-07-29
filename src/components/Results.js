/*
  Vemos la pantalla de resultados del quiz.js
  en esta pantalla nos muestra el valor de preguntas acertadas y el % de acertadas
  ademas sale un mensaje si hacemos puntuacion perfecta, o si fallamos todas.
  -------> Quiz ------> Results
*/

// src/Results.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Results.module.css'; // Importa el CSS Module de resultados

// Objeto con nombres formateados de cinturones para poder iniciar el array
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
  const state = location.state || {}; 
  const score = state.score || 0;
  const totalQuestions = Math.max(state.totalQuestions || 1, 1); // Evita división por 0
  const belt = state.belt || 'blanco'; // ver el estado del cinturon empezando con el blanco
  const percentage = Math.round((score / totalQuestions) * 100); // percentaje de preguntas acertadas

  //Render de la pagina
  // H2 -> CUESTIONARIO FINALIZADO
  // H3 -> CINTURON (COLOR)
  // P -> ACIERTOS, PORCENTAJE
  // BTN -> BOTON DE VOLVER
  
  return (
    <div className={styles.resultsContainer}>
      <h2>¡CUESTIONARIO COMPLETADO!</h2>
      <h3 className={styles.beltTitle}>Cinturón: {beltNames[belt] || belt}</h3>

      <div className={styles.scoreContainer}>

        <p className={styles.scoreText}>
          Aciertos: <strong>{score}/{totalQuestions}</strong></p>
        <p className={styles.scoreText}>Porcentaje: <strong>{percentage}%</strong></p>{score === totalQuestions && (
          <p className={styles.perfectScore}>¡Perfecto! Dominas este cinturón 🥋</p>
        )}
        {score === 0 && (
          <p className={styles.failScore}>¡Sigue practicando! 💪</p>
        )}
      </div>

      <button
        className={styles.button}
        onClick={() => navigate('/BeltSelector')}
      >
        Volver a cinturones
      </button>
    </div>
  );
};

export default Results;