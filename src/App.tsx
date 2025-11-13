import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CriarConta } from './pages/CriarConta';
import { Integrantes } from './pages/Integrantes';
import { Sobre } from './pages/Sobre';
import { FAQ } from './pages/FAQ';
import { Cursos } from './pages/Cursos.tsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/criar-conta" element={<CriarConta />} />
              <Route path="/integrantes" element={<Integrantes />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cursos" element={<Cursos />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;