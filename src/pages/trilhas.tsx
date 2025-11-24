import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { trilhaService } from '../services/api';
import { Trilha as TrilhaAPI } from '../types';

const Trilhas: React.FC = () => {
  const [trilhas, setTrilhas] = useState<TrilhaAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchTrilhas = async () => {
      try {
        const response = await trilhaService.getAll();
        console.log('📡 Trilhas carregadas da API:', response.data);
        setTrilhas(response.data);
        setError(null);
      } catch (err) {
        console.error('❌ Erro ao carregar trilhas:', err);
        setError('Erro ao carregar trilhas. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrilhas();
  }, []);

  const handleAddTrilha = (trilhaId: number) => {
    if (!isAuthenticated) {
      alert('Faça login para adicionar trilhas ao seu perfil!');
      return;
    }
    alert(`Trilha ${trilhaId} adicionada ao seu perfil!`);
    // Aqui você integraria com a API: trilhaService.addTrilhaUsuario(userId, trilhaId)
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#477BBC] mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando trilhas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Trilhas de Aprendizado
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha sua jornada e transforme seu futuro profissional
          </p>
          {error && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
        </div>

        {/* Lista de Trilhas */}
        {trilhas.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma trilha disponível</h3>
            <p className="text-gray-500">
              {error ? 'Erro ao carregar trilhas' : 'Aguarde enquanto as trilhas são carregadas...'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {trilhas.map((trilha) => (
              <div
                key={trilha.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-2 bg-gradient-to-r from-[#477BBC] to-[#9359D8]"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">📚</span>
                    <h3 className="text-xl font-bold text-gray-900">{trilha.nome}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{trilha.descricao}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-[#477BBC]/10 text-[#477BBC] px-3 py-1 rounded-full text-sm font-medium">
                      {trilha.areaProfissional}
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleAddTrilha(trilha.id)}
                      className="flex-1 bg-[#477BBC] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors text-center"
                    >
                      {isAuthenticated ? 'Adicionar à Minha Trilha' : 'Fazer Login'}
                    </button>
                    <Link
                      to={`/trilha/${trilha.id}`}
                      className="flex-1 border border-[#477BBC] text-[#477BBC] py-2 px-4 rounded-lg font-semibold hover:bg-[#477BBC] hover:text-white transition-colors text-center flex items-center justify-center"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            {isAuthenticated 
              ? 'Escolha uma trilha acima e comece sua transformação profissional hoje mesmo!'
              : 'Faça login ou crie uma conta gratuita para começar suas trilhas de aprendizado.'
            }
          </p>
          {!isAuthenticated && (
            <Link
              to="/"
              className="bg-white text-[#477BBC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Fazer Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trilhas;