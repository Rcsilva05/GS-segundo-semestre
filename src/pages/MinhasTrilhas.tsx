import React from 'react';

const MinhasTrilhas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Minhas Trilhas</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Aqui você verá todas as trilhas que está cursando.</p>
          {/* Conteúdo será carregado da API quando estiver funcionando */}
        </div>
      </div>
    </div>
  );
};

export default MinhasTrilhas;