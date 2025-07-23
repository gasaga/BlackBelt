// Función para mezclar arrays (Fisher-Yates algorithm)
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Opcional: Otras funciones útiles
export const getRandomItems = (array, count) => {
  return shuffleArray(array).slice(0, count);
};