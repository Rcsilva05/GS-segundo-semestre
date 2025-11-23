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
    { name: 'Pagina 1', href: '/' },
    { name: 'Pagina 2', href: '/trilhas' },
    { name: 'Pagina 3', href: '/empresas' },
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

            {/* Desktop Navigation - Centralizado igual na imagem */}
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
                  <span className="text-gray-700">Olá, {user?.nome}</span>
                  <button
                    onClick={logout}
                    className="text-red-600 hover:text-red-800 text-sm transition-colors"
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