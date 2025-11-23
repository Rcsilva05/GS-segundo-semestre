import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-[#477BBC] mb-4 block">
              SkillBridge
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Conectando talentos a oportunidades. Transformando vidas através da educação e tecnologia, 
              fechando o abismo entre pessoas que precisam de oportunidade e empresas que precisam de talentos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/trilhas" className="text-gray-300 hover:text-white transition-colors">
                  Trilhas de Aprendizado
                </Link>
              </li>
              <li>
                <Link to="/empresas" className="text-gray-300 hover:text-white transition-colors">
                  Empresas Parceiras
                </Link>
              </li>
              <li>
                <Link to="/integrantes" className="text-gray-300 hover:text-white transition-colors">
                  Nossa Equipe
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <div>
                  <div>contato@skillbridge.com</div>
                  <div>suporte@skillbridge.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <div>
                  <div>(11) 9999-9999</div>
                  <div>(11) 8888-8888</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <div>São Paulo - SP, Brasil</div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 SkillBridge. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contato" className="text-gray-300 hover:text-white text-sm transition-colors">
              Contato
            </Link>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;