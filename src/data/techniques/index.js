/*
  importamos las tecnicas de cinturones y obtenemos las tecnicas random
*/

import cinturonBlanco from './tecnicas-blanco.js';
import cinturonAmarillo from './tecnicas-amarillo.js';
import cinturonNaranja from './tecnicas-naranja.js';
import cinturonVerde from './tecnicas-verde.js';
import cinturonAzul from './tecnicas-azul.js';
import cinturonRojo from './tecnicas-rojo.js';

// Exportamos los cinturones
const allTechniques = {
  ...cinturonBlanco,
    ...cinturonAmarillo,
    ...cinturonNaranja,
    ...cinturonVerde,
    ...cinturonAzul,
    ...cinturonRojo,
};

// Función para obtener técnicas aleatorias, 2 respuestas por pregunta
// para cambiar nº respuestas, cambiar valor de count
// para cambiar el % de tecnicas de ese cinturon hay que cambiar el valor de .sort

export const getRandomTechniques = (currentId, count = 2) => {
  const techniques = Object.values(allTechniques)
    .filter(tech => tech.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
  
  return techniques;
};

export default allTechniques;
