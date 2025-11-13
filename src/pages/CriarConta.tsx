import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const CriarConta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de criação de conta
    console.log('Create account:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-lg"></div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">SkillBridge</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Crie sua conta
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Ou{' '}
            <Link
              to="/login"
              className="font-medium text-[#477BBC] dark:text-blue-400 hover:text-[#3a6aa8]"
            >
              entre na sua conta existente
            </Link>
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
                placeholder="Sua senha"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
                placeholder="Confirme sua senha"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#477BBC] focus:ring-[#477BBC] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Eu concordo com os{' '}
                <a href="#" className="text-[#477BBC] dark:text-blue-400 hover:text-[#3a6aa8]">
                  Termos de Serviço
                </a>{' '}
                e{' '}
                <a href="#" className="text-[#477BBC] dark:text-blue-400 hover:text-[#3a6aa8]">
                  Política de Privacidade
                </a>
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Criar Conta
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};