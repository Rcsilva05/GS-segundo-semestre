import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Trilhas from './pages/Trilhas';
import Empresas from './pages/Empresas';
import Contato from './pages/Contato';
import Integrantes from './pages/Integrantes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/trilhas" element={<Trilhas />} />
              <Route path="/empresas" element={<Empresas />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/integrantes" element={<Integrantes />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;