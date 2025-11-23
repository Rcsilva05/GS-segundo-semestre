import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { habilidadeService } from '../services/api';
import { HabilidadeUsuario, Habilidade } from '../types';

const MinhasHabilidades: React.FC = () => {
  const { user } = useAuth();
  const [habilidadesUsuario, setHabilidadesUsuario] = useState<HabilidadeUsuario[]>([]);
  const [todasHabilidades, setTodasHabilidades] = useState<Habilidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [novaHabilidade, setNovaHabilidade] = useState({
    habilidadeId: '',
    nivel: 'iniciante'
  });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    carregarHabilidades();
    carregarTodasHabilidades();
  }, [user]);

  const carregarHabilidades = async () => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    try {
      const response = await habilidadeService.getUsuarioHabilidades(user.id);
      setHabilidadesUsuario(response.data);
    } catch (err) {
      console.error('Erro ao carregar habilidades:', err);
      setError('Erro ao carregar habilidades');
    } finally {
      setLoading(false);
    }
  };

  const carregarTodasHabilidades = async () => {
    try {
      const response = await habilidadeService.getAll();
      setTodasHabilidades(response.data);
    } catch (err) {
      console.error('Erro ao carregar todas as habilidades:', err);
    }
  };

  const handleExcluirHabilidade = async (habilidadeUsuarioId: number) => {
    if (!window.confirm('Tem certeza?')) {
      return;
    }

    try {
      await habilidadeService.deleteHabilidadeUsuario(habilidadeUsuarioId);
      setHabilidadesUsuario(habilidadesUsuario.filter(h => h.id !== habilidadeUsuarioId));
      alert('Habilidade removida com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir habilidade:', err);
      alert('Erro ao remover habilidade');
    }
  };

  const handleAdicionarHabilidade = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || !novaHabilidade.habilidadeId) return;

    setAdding(true);
    try {
      const response = await habilidadeService.addHabilidadeUsuario(
        user.id,
        parseInt(novaHabilidade.habilidadeId),
        novaHabilidade.nivel
      );
      setHabilidadesUsuario([...habilidadesUsuario, response.data]);
      setShowAddModal(false);
      setNovaHabilidade({ habilidadeId: '', nivel: 'iniciante' });
      alert('Habilidade adicionada com sucesso!');
    } catch (err: any) {
      console.error('Erro ao adicionar habilidade:', err);
      console.error('Detalhes do erro:', err.response?.data);
      alert('Erro ao adicionar habilidade. Tente novamente.');
    } finally {
      setAdding(false);
    }
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'iniciante': return 'bg-green-100 text-green-800';
      case 'intermediario': return 'bg-yellow-100 text-yellow-800';
      case 'avancado': return 'bg-orange-100 text-orange-800';
      case 'especialista': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNivelText = (nivel: string) => {
    switch (nivel) {
      case 'iniciante': return 'Iniciante';
      case 'intermediario': return 'Intermediário';
      case 'avancado': return 'Avançado';
      case 'especialista': return 'Especialista';
      default: return nivel;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#477BBC] mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando habilidades...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Minhas Habilidades</h1>
              <p className="text-gray-600 mt-2">
                Gerencie suas habilidades e competências
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-[#477BBC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors flex items-center"
            >
              <span className="mr-2">+</span>
              Adicionar Habilidade
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-[#477BBC]">{habilidadesUsuario.length}</div>
              <div className="text-gray-600">Habilidades</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {habilidadesUsuario.filter(h => h.nivel === 'avancado' || h.nivel === 'especialista').length}
              </div>
              <div className="text-gray-600">Avançadas</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {habilidadesUsuario.filter(h => h.nivel === 'intermediario').length}
              </div>
              <div className="text-gray-600">Intermediárias</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-[#9359D8]">
                {Array.from(new Set(habilidadesUsuario.map(h => h.habilidade?.categoria))).filter(Boolean).length}
              </div>
              <div className="text-gray-600">Categorias</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {habilidadesUsuario.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma habilidade cadastrada</h3>
              <p className="text-gray-500 mb-6">
                Adicione suas habilidades para mostrar suas competências.
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-[#477BBC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors"
              >
                Adicionar Primeira Habilidade
              </button>
            </div>
          ) : (
            <div className="grid gap-6">
              {habilidadesUsuario.map((habilidadeUsu) => (
                <div
                  key={habilidadeUsu.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-gray-900 mr-4">
                          {habilidadeUsu.habilidade?.nome || 'Habilidade'}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getNivelColor(habilidadeUsu.nivel)}`}>
                          {getNivelText(habilidadeUsu.nivel)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {habilidadeUsu.habilidade?.categoria || 'Categoria não informada'}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>
                          Adicionada em: {new Date(habilidadeUsu.dataCriacao || '').toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => habilidadeUsu.id && handleExcluirHabilidade(habilidadeUsu.id)}
                      className="text-red-600 hover:text-red-800 font-medium text-sm ml-4 px-3 py-1 border border-red-200 rounded hover:bg-red-50 transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Adicionar Habilidade</h2>
                  <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
                </div>
                <form onSubmit={handleAdicionarHabilidade} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Selecione uma Habilidade *</label>
                    <select
                      value={novaHabilidade.habilidadeId}
                      onChange={(e) => setNovaHabilidade({ ...novaHabilidade, habilidadeId: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">Escolha uma habilidade</option>
                      {todasHabilidades.map((habilidade) => (
                        <option key={habilidade.id} value={habilidade.id}>
                          {habilidade.nome} - {habilidade.categoria}
                        </option>
                      ))}
                    </select>
                    <p className="text-gray-500 text-sm mt-2">
                      Escolha entre {todasHabilidades.length} habilidades disponíveis
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Seu Nível na Habilidade *</label>
                    <select
                      value={novaHabilidade.nivel}
                      onChange={(e) => setNovaHabilidade({ ...novaHabilidade, nivel: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="iniciante">🎯 Iniciante</option>
                      <option value="intermediario">🚀 Intermediário</option>
                      <option value="avancado">💪 Avançado</option>
                      <option value="especialista">🏆 Especialista</option>
                    </select>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button type="submit" disabled={adding} className="flex-1 bg-[#477BBC] text-white py-3 rounded-lg font-semibold">
                      {adding ? 'Adicionando...' : 'Adicionar Habilidade'}
                    </button>
                    <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MinhasHabilidades;
