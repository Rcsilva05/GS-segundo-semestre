import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Trilhas', href: '/trilhas' },
    { name: 'Empresas', href: '/empresas' },
    { name: 'Contato', href: '/contato' },
    { name: 'Integrantes', href: '/integrantes' },
  ];

  const handleLoginSuccess = () => {
    setShowLogin(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#477BBC]">SkillBridge</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#477BBC] border-b-2 border-[#477BBC]'
                      : 'text-gray-700 hover:text-[#477BBC]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Auth Buttons */}
              {!isAuthenticated ? (
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-[#477BBC] hover:text-[#3a6a9d] font-medium transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="bg-[#477BBC] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3a6a9d] transition-colors"
                  >
                    Criar Conta
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Olá, {user?.nome}</span>
                  <button
                    onClick={logout}
                    className="text-red-600 hover:text-red-800 font-medium transition-colors"
                  >
                    Sair
                  </button>
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
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
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
                {!isAuthenticated && (
                  <>
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
                  </>
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