import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import AdminView from './components/AdminView';
import UserView from './components/UserView';
import Documentation from './components/Documentation';
import RepartoAct from './components/RepartoAct'; // Importa el componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/user" element={<UserView />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/reparto" element={<RepartoAct />} /> {/* Agrega la nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
