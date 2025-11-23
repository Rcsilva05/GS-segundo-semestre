import React, { useState, useEffect } from 'react';
import { trilhaService } from '../services/api'; // Import correto
import { Trilha } from '../types';

const Trilhas: React.FC = () => {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrilhas = async () => {
      try {
        console.log('Buscando trilhas da API...');
        const response = await trilhaService.getAll();
        console.log('Trilhas recebidas:', response.data);
        setTrilhas(response.data);
      } catch (err) {
        console.error('Erro ao carregar trilhas:', err);
        setError('Erro ao carregar trilhas. Verifique se a API está rodando.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrilhas();
  }, []);

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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold">{error}</p>
          <p className="text-sm mt-2">Verifique se o servidor está rodando em http://localhost:8080</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Trilhas de Aprendizado
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha sua jornada e transforme seu futuro profissional com trilhas personalizadas
          </p>
        </div>

        {/* Lista de Trilhas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {trilhas.map((trilha) => (
            <div
              key={trilha.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-[#477BBC] to-[#9359D8]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{trilha.nome}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{trilha.descricao}</p>
                
                <div className="mb-6">
                  <span className="inline-block bg-[#477BBC]/10 text-[#477BBC] px-3 py-1 rounded-full text-sm font-medium">
                    {trilha.areaProfissional}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-[#477BBC] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors text-center">
                    Começar Agora
                  </button>
                  <button className="flex-1 border border-[#477BBC] text-[#477BBC] py-2 px-4 rounded-lg font-semibold hover:bg-[#477BBC] hover:text-white transition-colors text-center">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {trilhas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhuma trilha disponível no momento.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Verifique se a API está retornando dados.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-2xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não sabe por onde começar?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Nossa IA analisa seu perfil e recomenda a trilha perfeita para seus objetivos.
          </p>
          <button className="bg-white text-[#477BBC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Descobrir Minha Trilha Ideal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trilhas;