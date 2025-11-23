import React from 'react';
import { Link } from 'react-router-dom';

const AdicionarTrilhas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Adicionar Trilhas</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-6">
            Para adicionar trilhas ao seu perfil, visite a página de trilhas disponíveis.
          </p>
          <Link
            to="/trilhas"
            className="bg-[#477BBC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors"
          >
            Explorar Trilhas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdicionarTrilhas;