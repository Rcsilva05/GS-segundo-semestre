import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { trilhasData } from '../data/coursesData';

const TrilhaDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  
  const trilhaId = parseInt(id || '0');
  const trilha = trilhasData.find(t => t.id === trilhaId);

  if (!trilha) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Trilha não encontrada</h1>
          <Link to="/trilhas" className="text-[#477BBC] hover:text-[#3a6a9d]">
            Voltar para as trilhas
          </Link>
        </div>
      </div>
    );
  }

  const handleAddTrilha = () => {
    if (!isAuthenticated) {
      alert('Faça login para adicionar esta trilha ao seu perfil!');
      return;
    }
    alert(`Trilha "${trilha.nome}" adicionada ao seu perfil!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">{trilha.icone}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{trilha.nome}</h1>
              <p className="text-xl text-gray-600 mt-2">{trilha.descricao}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#477BBC]">{trilha.cursos.length}</div>
              <div className="text-gray-600">Cursos</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#9359D8]">{trilha.duracaoTotal}</div>
              <div className="text-gray-600">Duração</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#477BBC]">{trilha.nivel}</div>
              <div className="text-gray-600">Nível</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#9359D8]">{trilha.areaProfissional}</div>
              <div className="text-gray-600">Área</div>
            </div>
          </div>

          <button
            onClick={handleAddTrilha}
            className="bg-[#477BBC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors"
          >
            {isAuthenticated ? 'Adicionar à Minhas Trilhas' : 'Fazer Login para Começar'}
          </button>
        </div>

        {/* Cursos da Trilha */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cursos da Trilha</h2>
          <div className="space-y-6">
            {trilha.cursos.map((curso, index) => (
              <div key={curso.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-[#477BBC] text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                        Módulo {index + 1}
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {curso.nivel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{curso.nome}</h3>
                    <p className="text-gray-600 mt-1">{curso.descricao}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {curso.duracao}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Conteúdo Principal:</h4>
                    <p className="text-gray-600 text-sm">{curso.conteudoPrincipal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Instrutor:</h4>
                    <p className="text-gray-600 text-sm">{curso.instrutor}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pré-requisitos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {curso.preRequisitos.map((req, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="bg-[#9359D8] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7a4bb5] transition-colors">
                    Ver Curso
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voltar */}
        <div className="mt-8 text-center">
          <Link
            to="/trilhas"
            className="text-[#477BBC] hover:text-[#3a6a9d] font-semibold"
          >
            ← Voltar para todas as trilhas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrilhaDetalhes;