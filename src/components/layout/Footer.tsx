import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-lg"></div>
              <span className="text-xl font-bold">SkillBridge</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Transformando vidas através da educação tecnológica. Oferecemos cursos de alta qualidade 
              para capacitar profissionais do futuro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/cursos" className="hover:text-white transition-colors">Cursos</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/integrantes" className="hover:text-white transition-colors">Integrantes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>email@globalsolution.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GlobalSolution. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};