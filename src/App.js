// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeltSelector from './components/BeltSelector'; // importar el componente BeltSelector
import Quiz from './components/Quiz'; // importar el componente Quiz
import Results from './components/Results'; // importar el componente Results
import questions from './data/questions'; // Ruta corregida
import Login from './components/Login'; // Importa el componente Login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Nueva ruta para Login */}
        <Route path="/" element={<BeltSelector />} /> {/* Ruta para el selector de cinturones */}
        <Route path="/quiz/:beltId" element={<Quiz questions={questions} />} />  {/* Ruta para el quiz */}
        <Route path="/results" element={<Results />} /> {/* Ruta para resultados */}
      </Routes>
    </Router>
  );
}

export default App;