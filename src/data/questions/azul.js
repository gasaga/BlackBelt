import { getRandomTechniques } from '../techniques';
import techniques from '../techniques/tecnicas-azul.js';
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
 generateQuestion(techniques.okgorroAreMaki),
  generateQuestion(techniques.gechoAreMaki),
  generateQuestion(techniques.batangsonMontongMaki),
  generateQuestion(techniques.batangsonMontongAnMaki),
  generateQuestion(techniques.batangsonGoduroMontongAnMaki),
  generateQuestion(techniques.yopJirugui),
  generateQuestion(techniques.dungChumokBakatChigui),
  generateQuestion(techniques.duChechoJirugi),
  generateQuestion(techniques.bomSogui),
  generateQuestion(techniques.moaSogui),
  generateQuestion(techniques.naranjiSogui),
  generateQuestion(techniques.gawiMaki),
  generateQuestion(techniques.biturroJansonnalOlgulMaki),
  generateQuestion(techniques.dangkioOllioMurupChigui),
  generateQuestion(techniques.bochumokChumbi),
  generateQuestion(techniques.piochokChagui),
  generateQuestion(techniques.tuitChagui),
  generateQuestion(techniques.furioChagui),
  generateQuestion(techniques.monDollioYopChagui),
  generateQuestion(techniques.momDollioNakoChagui),
   // ... más técnicas
].filter(Boolean); // Elimina preguntas inválidas