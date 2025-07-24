/*
  Archivo para seleccionar el cinturón, en la primera pantalla
  Contiene un selector de cinturones y un botón para iniciar el quiz
  Este componente usa React Router para navegar al quiz del cinturón seleccionado
  Estilos aplicados desde un CSS Module
  Este componente también maneja el estado del cinturón seleccionado y la habilitación del botón
  Se usa useState para manejar el estado del cinturón seleccionado y si el botón está habilitado
  Se usa useNavigate de React Router para navegar a la ruta del quiz

*/
// src/components/BeltSelector.js

import React, { useState } from 'react'; // Añade useState aquí
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import styles from './BeltSelector.module.css'; // Import del CSS Module

// Componente BeltSelector
// Este componente muestra un selector de cinturones y un botón para iniciar el quiz

const BeltSelector = () => {
  const navigate = useNavigate();
  const [selectedBelt, setSelectedBelt] = useState(null); // Estado para el cinturón seleccionado
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Controlamos el botón

  // Lista de cinturones con colores y nombres
  // Puedes añadir más cinturones si es necesario
  // Los colores se definen en el CSS GLOBAL
  // Asegúrate de que los nombres coincidan con los usados en el quiz

  const belts = [
    { id: 'blanco', color: 'var(--complementario-blanco)' },
    { id: 'amarillo', color: 'var(--complementario-amarillo)' },
    { id: 'naranja', color: 'var(--complementario-naranja)' },
    { id: 'verde', color: 'var(--complementario-verde)' },
    { id: 'azul', color: 'var(--complementario-azul)' },
    { id: 'rojo', color: 'var(--complementario-rojo)' },

  ];

  // Función para manejar la selección del cinturón
  // Esta función actualiza el estado del cinturón seleccionado y habilita el botón

  const handleBeltSelect = (beltId) => {
    setSelectedBelt(beltId); // Actualiza el cinturón seleccionado
    setIsButtonDisabled(false); // ¡Aquí activamos el botón!
  };

  // Función para iniciar el quiz
  // Navega a la ruta del quiz del cinturón seleccionado

  const startQuiz = () => {
    if (selectedBelt) {
      navigate(`/quiz/${selectedBelt}`);
    }
  };

  // Renderiza el selector de cinturones y el botón
  // El botón está deshabilitado hasta que se seleccione un cinturón
  // Los cinturones se muestran como círculos con el color correspondiente


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