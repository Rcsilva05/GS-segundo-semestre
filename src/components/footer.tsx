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
              Conectando talentos a oportunidades através da requalificação profissional e inclusão produtiva.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Página 1
                </Link>
              </li>
              <li>
                <Link to="/trilhas" className="text-gray-300 hover:text-white transition-colors">
                  Página 2
                </Link>
              </li>
              <li>
                <Link to="/empresas" className="text-gray-300 hover:text-white transition-colors">
                  Página 3
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li>contato@skillbridge.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 SkillBridge. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;