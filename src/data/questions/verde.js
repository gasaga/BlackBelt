import { getRandomTechniques } from '../techniques';
import techniques from '../techniques/tecnicas-verde.js';
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
  generateQuestion(techniques.montongBakatMaki),
  generateQuestion(techniques.olgulBakatMaki),
  generateQuestion(techniques.pionsonKutSeuoChirugui),
  generateQuestion(techniques.palkupDolioChigui),
  generateQuestion(techniques.mechumokNeryoYopChigui),
  generateQuestion(techniques.dungChumokApChigui),
  generateQuestion(techniques.uenSogui),
  generateQuestion(techniques.orunSogui),
  generateQuestion(techniques.pionjiSogui),
  generateQuestion(techniques.tuitKoaSogui),
  generateQuestion(techniques.chebipumMokChigui),
  generateQuestion(techniques.palkupPiochokChigui),
  generateQuestion(techniques.bituroChagui),
  generateQuestion(techniques.neryoChagui),
  generateQuestion(techniques.momDolioTuitChagui),
  generateQuestion(techniques.nakoChagui),
  // ... más técnicas
].filter(Boolean); // Elimina preguntas inválidas