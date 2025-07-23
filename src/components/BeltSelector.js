// src/components/BeltSelector.js
import React, { useState } from 'react'; // Añade useState aquí
import { useNavigate } from 'react-router-dom';
import styles from './BeltSelector.module.css'; // Import del CSS Module
//import '../styles/globals.css'; // Importa el CSS global si es necesario

const BeltSelector = () => {
  const navigate = useNavigate();
  const [selectedBelt, setSelectedBelt] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Controlamos el botón



  const belts = [
    { id: 'blanco', color: 'var(--complementario-blanco)' },
    { id: 'amarillo', color: 'var(--complementario-amarillo)' },
    { id: 'naranja', color: 'var(--complementario-naranja)' },
    { id: 'verde', color: 'var(--complementario-verde)' },
    { id: 'azul', color: 'var(--complementario-azul)' },
    { id: 'rojo', color: 'var(--complementario-rojo)' },
  //{ id: 'rojo', name: 'Rojo', color: 'var(--complementario-rojo)' },

  ];

  const handleBeltSelect = (beltId) => {
    setSelectedBelt(beltId);
    setIsButtonDisabled(false); // ¡Aquí activamos el botón!
  };


  const startQuiz = () => {
    if (selectedBelt) {
      navigate(`/quiz/${selectedBelt}`);
    }
  };

   return (
    <div className={styles.container}>
      <h1>Selecciona tu cinturón</h1>
      
      <div className={styles.grid}>
        {belts.map((belt) => (
          <div
            key={belt.id}
            onClick={() => handleBeltSelect(belt.id)}
            className={`${styles.beltCircle} ${selectedBelt === belt.id ? styles.selected : ''}`}
            style={{ '--belt-color': belt.color }}
          >
            {belt.name}
          </div>
        ))}
      </div>

       <button
        onClick={startQuiz}
        className={`btn-primario ${styles.startButton}`}
        disabled={isButtonDisabled} // Controlado por estado
      >
        Siguiente
      </button>
    </div>
  );
};

export default BeltSelector;