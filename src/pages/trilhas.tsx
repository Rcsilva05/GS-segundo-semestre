import React, { useState, useEffect } from 'react';
import { trilhaService } from '../services/api';
import { Trilha } from '../types';

const Trilhas: React.FC = () => {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrilhas = async () => {
      try {
        const response = await trilhaService.getAll();
        setTrilhas(response.data);
      } catch (err) {
        setError('Erro ao carregar trilhas');
        console.error('Error fetching trilhas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrilhas();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Carregando trilhas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center text-red-600 dark:text-red-400">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nossas Trilhas de Aprendizado</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Escolha sua jornada e transforme seu futuro profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trilhas.map((trilha) => (
            <div
              key={trilha.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{trilha.nome}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{trilha.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {trilha.areaProfissional}
                  </span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {trilhas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Nenhuma trilha disponível no momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trilhas;