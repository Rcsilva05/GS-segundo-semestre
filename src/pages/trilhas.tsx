import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { trilhaService } from '../services/api';
import { trilhasData, Trilha as TrilhaLocal } from '../data/coursesData';
import { Trilha as TrilhaAPI } from '../types';

const Trilhas: React.FC = () => {
  const [trilhasAPI, setTrilhasAPI] = useState<TrilhaAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  // Combinar dados da API com dados locais
  const trilhasCompletas = trilhasData.map(trilhaLocal => {
    const trilhaAPI = trilhasAPI.find(t => t.id === trilhaLocal.id);
    return {
      ...trilhaLocal,
      descricao: trilhaAPI?.descricao || trilhaLocal.descricao,
      areaProfissional: trilhaAPI?.areaProfissional || trilhaLocal.areaProfissional
    };
  });

  useEffect(() => {
    const fetchTrilhas = async () => {
      try {
        const response = await trilhaService.getAll();
        setTrilhasAPI(response.data);
      } catch (err) {
        console.log('API offline, usando dados locais');
        setError('API offline - Mostrando dados de demonstração');
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
            <div className="mt-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
        </div>

        {/* Lista de Trilhas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {trilhasCompletas.map((trilha) => (
            <div
              key={trilha.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-[#477BBC] to-[#9359D8]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{trilha.icone}</span>
                  <h3 className="text-xl font-bold text-gray-900">{trilha.nome}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{trilha.descricao}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duração:</span>
                    <span className="font-medium text-gray-700">{trilha.duracaoTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Nível:</span>
                    <span className="font-medium text-gray-700">{trilha.nivel}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cursos:</span>
                    <span className="font-medium text-gray-700">{trilha.cursos.length} cursos</span>
                  </div>
                </div>

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