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
  //const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Controlamos el botón

  // Lista de cinturones con colores y nombres
  // Puedes añadir más cinturones si es necesario
  // Los colores se definen en el CSS GLOBAL
  // Asegúrate de que los nombres coincidan con los usados en el quiz

  const belts = [
  { id: 'blanco', name: 'Blanco', color: 'var(--complementario-blanco)' },
  { id: 'amarillo', name: 'Amarillo', color: 'var(--complementario-amarillo)' },
  { id: 'naranja', name: 'Naranja', color: 'var(--complementario-naranja)' },
  { id: 'verde', name: 'Verde', color: 'var(--complementario-verde)' },
  { id: 'azul', name: 'Azul', color: 'var(--complementario-azul)' },
  { id: 'rojo', name: 'Rojo', color: 'var(--complementario-rojo)' },
];

  // Función para manejar la selección del cinturón
  // Esta función actualiza el estado del cinturón seleccionado y habilita el botón

  const handleBeltSelect = (beltId) => {
    setSelectedBelt(beltId); // Actualiza el cinturón seleccionado
    //setIsButtonDisabled(false); // ¡Aquí activamos el botón!
  };

  // Función para iniciar el quiz
  // Navega a la ruta del quiz del cinturón seleccionado

  const startQuiz = () => {
    if (selectedBelt) {
      navigate(`/quiz/${selectedBelt}`);
    }
  };

  // Encontrar el objeto del cinturón seleccionado para sacar su color
  const activeBeltData = belts.find(b => b.id === selectedBelt);

  // Renderiza el selector de cinturones y el botón
  // El botón está deshabilitado hasta que se seleccione un cinturón
  // Los cinturones se muestran como círculos con el color correspondiente


   return (
    <div 
      className={styles.container} 
      style={{ backgroundColor: activeBeltData ? activeBeltData.color : 'var(--secundario-color)' }}
    >
      <h1 className={selectedBelt ? styles.titleSelected : styles.titleInitial}>
  {selectedBelt 
    ? `Cinturón ${activeBeltData?.name || ''}` 
    : 'Selecciona tu cinturón'}
</h1>

      {/* Círculo Grande Central: Aparece con animación cuando seleccionas */}
      {selectedBelt && (
        <div className={styles.mainDisplay}>
          <div 
            className={styles.bigCircle}
            style={{ '--belt-color': activeBeltData.color }}
          ></div>
          <button onClick={startQuiz} className="btn-primario">
            Comenzar Quiz
          </button>
        </div>
      )}

      {/* Contenedor de cinturones: Cambia de Grid a Row dinámicamente */}
      <div className={selectedBelt ? styles.beltRowBottom : styles.beltGridInitial}>
        {belts.map((belt) => (
          <div
            key={belt.id}
            onClick={() => handleBeltSelect(belt.id)}
            className={`${styles.beltCircle} ${selectedBelt === belt.id ? styles.activeSmall : ''}`}
            style={{ '--belt-color': belt.color }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeltSelector;