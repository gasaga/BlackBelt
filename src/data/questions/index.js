// data/questions/index.js
import blanco from './blanco';
import amarillo from './amarillo';
import verde from './verde'; // Asegúrate de que este archivo exista y tenga las preguntas del cinturón verde
import naranja from './naranja'; // Asegúrate de que este archivo exista y tenga las preguntas del cinturón naranja
import rojo from './rojo'; // Asegúrate de que este archivo exista y tenga las preguntas del cinturón rojo
import azul from './azul'; // Asegúrate de que este archivo exista y tenga las preguntas del cinturón azul

// 1. Definimos el orden de los cinturones
const beltOrder = ['blanco','amarillo', 'naranja', 'verde', 'azul', 'rojo'];

// 2. Mapeamos los arrays de preguntas en el mismo orden
const beltArrays = {
  blanco: blanco,
  amarillo: amarillo,
  naranja: naranja,
  verde: verde,
  azul: azul,
  rojo: rojo
};

// 3. Función para mezclar preguntas con ponderación
const getWeightedQuestions = (beltName) => {
  // Protección contra undefined
  const currentLevelQuestions = Array.isArray(beltArrays[beltName]) ? beltArrays[beltName] : [];
  const previousQuestions = beltOrder
    .slice(0, beltOrder.indexOf(beltName))
    .flatMap(level => Array.isArray(beltArrays[level]) ? beltArrays[level] : []);

  console.log(`Debug ${beltName}:`, {
    current: currentLevelQuestions.length,
    previous: previousQuestions.length
  });

  // Selección segura
  const allQuestions = [
    ...currentLevelQuestions.sort(() => 0.5 - Math.random()),
    ...previousQuestions.sort(() => 0.5 - Math.random())
  ];

  return allQuestions.slice(0, 10);
};

// 4. Generamos el objeto final
const beltQuestions = beltOrder.reduce((acc, beltName) => {
  acc[beltName] = getWeightedQuestions(beltName);
  return acc;
}, {});

export default beltQuestions;