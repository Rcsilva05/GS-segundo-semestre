
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

  const navigation = [
    { name: 'Pagina 1', href: '/' },
    { name: 'Pagina 2', href: '/trilhas' },
    { name: 'Pagina 3', href: '/empresas' },
  ];

  const userNavigation = [
    { name: 'Minhas Trilhas', href: '/minhas-trilhas' },
    { name: 'Adicionar Trilhas', href: '/adicionar-trilhas' },
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
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-[#477BBC]">SkillBridge</span>
              </Link>
            </div>

            {/* Desktop Navigation - Centralizado */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#477BBC] font-semibold'
                      : 'text-gray-700 hover:text-[#477BBC]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Buttons - Lado direito */}
            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-gray-700 hover:text-[#477BBC] font-medium transition-colors"
                  >
                    Login
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="text-gray-700 hover:text-[#477BBC] font-medium transition-colors"
                  >
                    Criar Conta
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  {/* Menu do Usuário Logado */}
                  <div className="relative">
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-[#477BBC] transition-colors"
                    >
                      <div className="w-8 h-8 bg-[#477BBC] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user?.nome?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <span>Olá, {user?.nome?.split(' ')[0] || 'Usuário'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-700 hover:text-[#477BBC] focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href
                        ? 'text-[#477BBC] bg-[#477BBC]/10'
                        : 'text-gray-700 hover:text-[#477BBC] hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Menu do usuário logado no mobile */}
                {isAuthenticated && (
                  <>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Logado como: {user?.nome}
                      </div>
                      {userNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#477BBC] hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <button
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                      >
                        Sair
                      </button>
                    </div>
                  </>
                )}
                
                {!isAuthenticated && (
                  <div className="border-t border-gray-200 pt-2">
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#477BBC] hover:bg-gray-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setShowRegister(true);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#477BBC] hover:bg-gray-100"
                    >
                      Criar Conta
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