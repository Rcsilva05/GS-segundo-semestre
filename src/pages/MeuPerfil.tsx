import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const MeuPerfil: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Meu Perfil</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {user && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <p className="mt-1 text-lg text-gray-900">{user.nome}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-lg text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CPF</label>
                <p className="mt-1 text-lg text-gray-900">{user.cpf}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeuPerfil;