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

api.interceptors.request.use(
  (config) => {
    console.log(`🔄 Request ${config.method?.toUpperCase()} → ${config.url}`);
    console.log('Payload:', config.data);
    return config;
  },
  (error) => {
    console.error('❌ Erro na requisição:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response ${response.status}:`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta:', error);
    return Promise.reject(error);
  }
);

// Usuário — IMPORTANTE: Enviar exatamente o que a API exige
export const usuarioService = {
  getAll: () => api.get<Usuario[]>('/usuario'),
  getById: (id: number) => api.get<Usuario>(`/usuario/${id}`),

  create: (usuario: any) => {
    console.log('📤 Criando usuário:', usuario);
    return api.post<Usuario>('/usuario', usuario);
  },

  update: (id: number, usuario: Partial<Usuario>) =>
    api.put<Usuario>(`/usuario/${id}`, usuario),
};

export const empresaService = {
  getAll: () => api.get<Empresa[]>('/empresa'),
  getById: (id: number) => api.get<Empresa>(`/empresa/${id}`),
};

export const habilidadeService = {
  getAll: () => api.get<Habilidade[]>('/habilidade'),
  getUsuarioHabilidades: (id: number) =>
    api.get<HabilidadeUsuario[]>(`/usuario/${id}/habilidade_usuario`),
  deleteHabilidadeUsuario: (id: number) => api.delete(`/habilidade_usuario/${id}`),
};

export const trilhaService = {
  getAll: () => api.get<Trilha[]>('/trilha'),
  getById: (id: number) => api.get<Trilha>(`/trilha/${id}`),
  getUsuarioTrilhas: (id: number) =>
    api.get<TrilhaUsuario[]>(`/usuario/${id}/trilha_usuario`),
  addTrilhaUsuario: (id: number, trilhaId: number) =>
    api.post(`/usuario/${id}/trilha_usuario`, { idTrilha: trilhaId }),
  deleteTrilhaUsuario: (id: number) => api.delete(`/trilha_usuario/${id}`),
  getTrilhaCursos: (id: number) => api.get<Curso[]>(`/trilha/${id}/curso`),
};

export const cursoService = {
  getById: (id: number) => api.get<Curso>(`/curso/${id}`),
};

export default api;
