import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Trilhas from './pages/trilhas';
import Empresas from './pages/Empresas';
import Contato from './pages/Contato';
import Integrantes from './pages/Integrantes';
import MinhasTrilhas from './pages/MinhasTrilhas';
import MinhasHabilidades from './pages/MinhasHabilidades';
import MeusCursos from './pages/MeusCursos';
import MeuPerfil from './pages/MeuPerfil';
import TrilhaDetalhes from './pages/TrilhaDetalhes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/trilhas" element={<Trilhas />} />
              <Route path="/empresas" element={<Empresas />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/integrantes" element={<Integrantes />} />
              
              {/* Rotas de detalhes */}
              <Route path="/trilha/:id" element={<TrilhaDetalhes />} />
              
              {/* Rotas do usuário logado */}
              <Route path="/minhas-trilhas" element={<MinhasTrilhas />} />
              <Route path="/minhas-habilidades" element={<MinhasHabilidades />} />
              <Route path="/meus-cursos" element={<MeusCursos />} />
              <Route path="/meu-perfil" element={<MeuPerfil />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;