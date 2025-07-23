import { getRandomTechniques } from '../techniques';
import techniques from '../techniques/tecnicas-rojo.js';
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
  generateQuestion(techniques.sonnalAreMaki),
  generateQuestion(techniques.gechioMontongMaki),
  generateQuestion(techniques.goduroMontongMaki),
  generateQuestion(techniques.goduroAreMaki),
  generateQuestion(techniques.oeSantulMaki),
  generateQuestion(techniques.dangkioTokJirugui),
  generateQuestion(techniques.momDolioFurioChagui),
  // ... más técnicas
].filter(Boolean); // Elimina preguntas inválidas