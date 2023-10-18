import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import Cadastro from './pages/Cadastro';



function App() {
  const auth = useContext (AuthContext);

  return (
    <div className="App">
      <header>
        <h1>SITE DE FINANÇAS</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Private">Página Privada</Link>
          {auth.user && <a href='javascript:;'>Sair</a>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Private" element={<RequireAuth><Private /></RequireAuth>} />
        <Route path="/Cadastro" element={<RequireAuth><Cadastro /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
