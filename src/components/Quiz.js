/*
  BeltSelector ---> Quiz
  En este componente vemos el quiz de los cinturones seleccionados
  le pasamos las preguntas que tenemos en data almacenadas 
  Aqui pasamos los componentes de la pregunta tanto de la imagen como la respuesta de esta, 
  además tambien pasamos el nombre de 2 tecnicas aleatorias para hacer el quiz.
  Nos muestra si la respuesta esta bien o no y nos enseña el hint de la tecnica.
  Tambien cuenta con un boton para pasar a la siguiente pregunta y ver los resultados finales,
  nos muestra hasta un maximo de 10 preguntas.
  Quiz ----> Results
*/

// src/components/Quiz.js

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import styles from './Quiz.module.css'; // importamos el modulo del quiz css

const Quiz = ({ questions = {} }) => { // Valor por defecto como objeto vacío
  const { beltId } = useParams(); // utilizamos la id del cinturon
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // vemos el indice de la pregunta
  const [selectedAnswer, setSelectedAnswer] = useState(null);  // vemos cual es la pregunta seleccionada
  const [showFeedback, setShowFeedback] = useState(false);    // vemos el hint de la pregunta
  const [score, setScore] = useState(0);    // guardamos la puntuacion
  
  // Protección contra questions undefined
  // Memoizamos las preguntas seguras (solo depende de beltId)
  const safeQuestions = useMemo(() => questions?.[beltId] || [], [questions, beltId]);
  const currentQuestion = safeQuestions[currentQuestionIndex] || {};

  /*
  archivos utilizados anteriormente que no borro porsi
    const location = useLocation();
    const allQuestions = location.state?.questions || [];
  */

  // Redirige si no hay preguntas
  // -------------------------------
  useEffect(() => {
    if (safeQuestions.length === 0) {
      navigate('/');
    }
  }, [safeQuestions, navigate]);
  // -------------------------------

  // Funcion para sumar puntuacion si la respuesta es correcta
  // -------------------------------
  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowFeedback(true);

    if (index === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
  };
  // -------------------------------

  //Funcion para pasar a la siguiente pregunta
  // -------------------------------
  const handleNext = () => {
    if (currentQuestionIndex < safeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {

      navigate('/results', {    //pasa a la pagina de resultados devolviendo los estados de puntuacion, preguntas totales, y id del cinturon
        state: {
          score,
          totalQuestions: safeQuestions.length,
          belt: beltId,
        }
      });
    }
  };
  // -------------------------------

  // Render condicional si no hay pregunta actual
  // -------------------------------
  if (!currentQuestion.question) {
    return <div className={styles.quizContainer}>Cargando...</div>;
  }
  // -------------------------------

  // Render de la pagina
  // H1 -> CUESTIONARIO
  // H3 -> COLOR CINTURON MEDIANTE SU ID
  // IMG -> IMAGEN DE LA PREGUNTA
  // H3 -> PREGUNTA
  // BTN -> 3 BOTONES RESPUESTAS
  // TXT -> HINT O FEEDBACK
  // BTN -> SIGUIENTE PREGUNTA

  return (
    <div className={styles.quizContainer}>
      <h1>CUESTIONARIO</h1>
      <h3>Cinturón {beltId}</h3>

      <div className={styles.questionContainer}>
        <img
          src={currentQuestion.image}
          alt="Técnica demostrativa"
          className={styles.techniqueImage}
        />

        <h3 className={styles.questionText}>{currentQuestion.question}</h3>

        <div className={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && handleAnswer(index)}
              className={`${styles.optionButton} ${selectedAnswer === index
                  ? index === currentQuestion.correctAnswer
                    ? styles.correct
                    : styles.incorrect
                  : ''
                } ${showFeedback && index === currentQuestion.correctAnswer ? styles.showCorrect : ''}`}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={styles.feedbackContainer}>
            <p className={selectedAnswer === currentQuestion.correctAnswer ? styles.feedbackCorrect : styles.feedbackIncorrect}>
              {selectedAnswer === currentQuestion.correctAnswer ? '✓ Correcto!' : '✗ Incorrecto'}
            </p>
            <p className={styles.explanation}>
              {currentQuestion.explanation || "Explicación técnica breve..."}
            </p>
          </div>
        )}
      </div>

      <div className={styles.navigationContainer}>
        <button
          onClick={handleNext}
          className={styles.nextButton}
          disabled={!showFeedback}
        >
          {currentQuestionIndex < safeQuestions.length - 1 ? 'Siguiente' : 'Ver resultados'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;