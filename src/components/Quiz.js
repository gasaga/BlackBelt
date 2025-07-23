// src/components/Quiz.js
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate,  } from 'react-router-dom';
import styles from './Quiz.module.css'; // Crea este archivo CSS

const Quiz = ({ questions = {} }) => { // Valor por defecto como objeto vacío
  const { beltId } = useParams();
  const navigate = useNavigate();
 // const location = useLocation();
 // const allQuestions = location.state?.questions || [];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);


  // Protección contra questions undefined
  // Memoizamos las preguntas seguras (solo depende de beltId
  const safeQuestions = useMemo(() => questions?.[beltId] || [], [questions, beltId]);
  const currentQuestion = safeQuestions[currentQuestionIndex] || {};

  

  // Redirige si no hay preguntas
   // 5. Redirigir si no hay preguntas
  useEffect(() => {
    if (safeQuestions.length === 0) {
      navigate('/');
    }
  }, [safeQuestions, navigate]);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (index === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < safeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      
      navigate('/results', { 
        state: { 
          score, 
          totalQuestions: safeQuestions.length,
          belt: beltId,
        } 
      });
    }
  };

  // Render condicional si no hay pregunta actual
  if (!currentQuestion.question) {
    return <div className={styles.quizContainer}>Cargando...</div>;
  }

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
              className={`${styles.optionButton} ${
                selectedAnswer === index 
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