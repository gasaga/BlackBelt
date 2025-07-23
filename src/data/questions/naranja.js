import { getRandomTechniques } from '../techniques';
import techniques from '../techniques/tecnicas-naranja.js';
import { shuffleArray } from '../../utils/arrayHelpers';

// Función segura para generar preguntas
const generateQuestion = (technique) => {
  if (!technique || !technique.name) {
    console.error('Técnica inválida:', technique);
    return null;
  }
  const wrongOptions = getRandomTechniques(technique.id)
    .map(t => t?.name) // Protección adicional
    .filter(Boolean); // Filtra nombres undefined

  const options = shuffleArray([
    technique.name,
    ...wrongOptions.slice(0, 2) // Solo 2 opciones incorrectas
  ]);

  return {
    techniqueId: technique.id,
    image: technique.image,
    question: `¿Cómo se llama esta técnica?`,
    options,
    correctAnswer: options.indexOf(technique.name),
    explanation: technique.description
  };
};


// Filtra preguntas nulas al final
export default [
  generateQuestion(techniques.janSonnalMontongMaki),
  generateQuestion(techniques.montongDubonJirugui),
  generateQuestion(techniques.olgulBandeJirugui),
  generateQuestion(techniques.sonnalMontongMaki),
  generateQuestion(techniques.sonnalAnChigui),
  generateQuestion(techniques.tuitKubiSogui),
  generateQuestion(techniques.tuitKubiSogui),
  generateQuestion(techniques.chumchumSogui),
  generateQuestion(techniques.bakatDariFurigi),
  generateQuestion(techniques.andariFurigi),
  generateQuestion(techniques.miroChagui),
  generateQuestion(techniques.bandalChagui),
  // ... más técnicas
].filter(Boolean); // Elimina preguntas inválidas