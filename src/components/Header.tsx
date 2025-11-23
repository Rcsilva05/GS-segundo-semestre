import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  // Menu principal de navegação
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Trilhas', href: '/trilhas' },
    { name: 'Empresas', href: '/empresas' },
    { name: 'Integrantes', href: '/integrantes' },
    { name: 'Contato', href: '/contato' },
  ];

  // Menu do usuário logado
  const userNavigation = [
    { name: 'Minhas Trilhas', href: '/minhas-trilhas' },
    { name: 'Minhas Habilidades', href: '/minhas-habilidades' },
    { name: 'Meus Cursos', href: '/meus-cursos' },
    { name: 'Meu Perfil', href: '/meu-perfil' },
  ];

  const handleLoginSuccess = () => {
    setShowLogin(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b relative z-50">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-[#477BBC]">SkillBridge</span>
              </Link>
            </div>

            {/* Desktop Navigation - Centralizado */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-4 xl:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-2 py-1 xl:px-3 xl:py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'text-[#477BBC] font-semibold border-b-2 border-[#477BBC]'
                        : 'text-gray-700 hover:text-[#477BBC]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Auth Buttons - Lado direito */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {!isAuthenticated ? (
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-gray-700 hover:text-[#477BBC] font-medium transition-colors text-sm sm:text-base px-2 py-1"
                  >
                    Login
                  </button>
                  <span className="text-gray-300 hidden sm:block">|</span>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="bg-[#477BBC] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-[#3a6a9d] transition-colors text-sm sm:text-base"
                  >
                    Criar Conta
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2 sm:space-x-4">
                  {/* Menu do Usuário Logado */}
                  <div className="relative">
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-[#477BBC] transition-colors p-1 sm:p-2"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#477BBC] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                        {user?.nome?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <span className="hidden sm:block text-sm">Olá, {user?.nome?.split(' ')[0] || 'Usuário'}</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu do Usuário */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsUserMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#477BBC] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-200 my-1"></div>
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          Sair
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-[#477BBC] focus:outline-none focus:ring-2 focus:ring-[#477BBC] focus:ring-offset-2"
                  aria-label="Menu"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white absolute top-full left-0 right-0 shadow-lg">
              <div className="px-2 pt-2 pb-4 space-y-1">
                {/* Menu Principal Mobile */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-[#477BBC] bg-[#477BBC]/10 border-l-4 border-[#477BBC]'
                        : 'text-gray-700 hover:text-[#477BBC] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Menu do usuário logado no mobile */}
                {isAuthenticated && (
                  <>
                    <div className="border-t border-gray-200 pt-3 mt-2">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Minha Conta
                      </div>
                      {userNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#477BBC] hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <button
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Sair
                      </button>
                    </div>
                  </>
                )}
                
                {/* Menu de autenticação mobile */}
                {!isAuthenticated && (
                  <div className="border-t border-gray-200 pt-3 mt-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Entrar na Plataforma
                    </div>
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#477BBC] hover:bg-gray-50 transition-colors"
                    >
                      Fazer Login
                    </button>
                    <button
                      onClick={() => {
                        setShowRegister(true);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-white bg-[#477BBC] hover:bg-[#3a6a9d] transition-colors mt-2"
                    >
                      Criar Conta Gratuita
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Modals */}
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onSuccess={handleLoginSuccess}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSuccess={handleRegisterSuccess}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default Header;