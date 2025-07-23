// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeltSelector from './components/BeltSelector';
import Quiz from './components/Quiz';
import Results from './components/Results';
import questions from './data/questions'; // Ruta corregida

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeltSelector />} />
        <Route
          path="/quiz/:beltId"
          element={<Quiz questions={questions} />}
        />
        <Route path="/results" element={<Results />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;