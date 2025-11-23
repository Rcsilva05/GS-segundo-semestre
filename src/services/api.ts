import axios from 'axios';
import { Usuario, Empresa, Habilidade, Trilha, Curso, TrilhaUsuario, HabilidadeUsuario } from '../types';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor para logging
api.interceptors.request.use(
  (config) => {
    console.log(`🔄 Fazendo requisição ${config.method?.toUpperCase()} para: ${config.url}`);
    console.log('Dados:', config.data);
    return config;
  },
  (error) => {
    console.error('❌ Erro na requisição:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ Resposta recebida: ${response.status}`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta:', error);
    if (error.code === 'ECONNREFUSED') {
      console.error('🔌 Servidor não está respondendo. Verifique se a API está rodando.');
    } else if (error.code === 'NETWORK_ERROR') {
      console.error('🌐 Erro de rede. Verifique sua conexão.');
    }
    return Promise.reject(error);
  }
);

// Usuários
export const usuarioService = {
  getAll: () => api.get<Usuario[]>('/usuario'),
  getById: (id: number) => api.get<Usuario>(`/usuario/${id}`),
  create: (usuario: Omit<Usuario, 'codigo' | 'id'>) => {
    console.log('📤 Criando usuário com dados:', usuario);
    return api.post<Usuario>('/usuario', usuario);
  },
  update: (id: number, usuario: Partial<Usuario>) => api.put<Usuario>(`/usuario/${id}`, usuario),
};

// Empresas
export const empresaService = {
  getAll: () => api.get<Empresa[]>('/empresa'),
  getById: (id: number) => api.get<Empresa>(`/empresa/${id}`),
};

// Habilidades
export const habilidadeService = {
  getAll: () => api.get<Habilidade[]>('/habilidade'),
  getUsuarioHabilidades: (id: number) => api.get<HabilidadeUsuario[]>(`/usuario/${id}/habilidade_usuario`),
  deleteHabilidadeUsuario: (id: number) => api.delete(`/habilidade_usuario/${id}`),
};

// Trilhas - CORRIGIDO: estava faltando export
export const trilhaService = {
  getAll: () => api.get<Trilha[]>('/trilha'),
  getById: (id: number) => api.get<Trilha>(`/trilha/${id}`),
  getUsuarioTrilhas: (id: number) => api.get<TrilhaUsuario[]>(`/usuario/${id}/trilha_usuario`),
  addTrilhaUsuario: (id: number, trilhaId: number) => 
    api.post<TrilhaUsuario>(`/usuario/${id}/trilha_usuario`, { idTrilha: trilhaId }),
  deleteTrilhaUsuario: (id: number) => api.delete(`/trilha_usuario/${id}`),
  getTrilhaCursos: (id: number) => api.get<Curso[]>(`/trilha/${id}/curso`),
};

// Cursos
export const cursoService = {
  getById: (id: number) => api.get<Curso>(`/curso/${id}`),
};

// Exportação padrão também
export default api;