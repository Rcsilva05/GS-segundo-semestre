import axios from 'axios';
import {
  Usuario,
  Empresa,
  Habilidade,
  Trilha,
  Curso,
  TrilhaUsuario,
  HabilidadeUsuario,
} from '../types';

/* ============================================================
   🔗 BASE DA API (Render) - COM PROXY VITE
============================================================= */
// ✅ MUDANÇA CRÍTICA: Use o proxy do Vite
const API_BASE_URL = '/api'; // ✅ AGORA USA O PROXY

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    console.log(`🔄 Request: ${config.method?.toUpperCase()} ${config.url}`);
    console.log('📤 Data enviada:', config.data);
    console.log('🎯 Base URL:', config.baseURL); // ✅ Verifique se está usando /api
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response: ${response.status}`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta', error.response?.data);
    console.error('🔧 Config do erro:', {
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      data: error.config?.data
    });
    return Promise.reject(error);
  }
);

// ... o resto do código permanece igual
export const usuarioService = {
  getAll: () => api.get<Usuario[]>('/usuario'),
  getById: (id: number) => api.get<Usuario>(`/usuario/${id}`),
  create: (usuario: Omit<Usuario, 'codigo' | 'id'>) =>
    api.post<Usuario>('/usuario', usuario),
  update: (id: number, usuario: Partial<Usuario>) =>
    api.put<Usuario>(`/usuario/${id}`, usuario),
};

export const empresaService = {
  getAll: () => api.get<Empresa[]>('/empresa'),
  getById: (id: number) => api.get<Empresa>(`/empresa/${id}`),
};

export const habilidadeService = {
  getAll: () => api.get<Habilidade[]>('/habilidade'),
  getUsuarioHabilidades: (usuarioId: number) =>
    api.get<HabilidadeUsuario[]>(`/usuario/${usuarioId}/habilidade_usuario`),
  addHabilidadeUsuario: (usuarioId: number, habilidadeId: number, nivel: string) =>
    api.post<HabilidadeUsuario>(`/usuario/${usuarioId}/habilidade_usuario`, {
      nivel: nivel,
      idHabilidade: habilidadeId,
      idUsuario: usuarioId
    }),
  deleteHabilidadeUsuario: (habilidadeUsuarioId: number) =>
    api.delete(`/habilidade_usuario/${habilidadeUsuarioId}`),
};

export const trilhaService = {
  getAll: () => api.get<Trilha[]>('/trilha'),
  getById: (id: number) => api.get<Trilha>(`/trilha/${id}`),
  getUsuarioTrilhas: (usuarioId: number) =>
    api.get<TrilhaUsuario[]>(`/usuario/${usuarioId}/trilha_usuario`),
  addTrilhaUsuario: (usuarioId: number, trilhaId: number) =>
    api.post(`/usuario/${usuarioId}/trilha_usuario`, { idTrilha: trilhaId }),
  deleteTrilhaUsuario: (trilhaUsuarioId: number) =>
    api.delete(`/trilha_usuario/${trilhaUsuarioId}`),
  getTrilhaCursos: (trilhaId: number) =>
    api.get<Curso[]>(`/trilha/${trilhaId}/curso`),
};

export const cursoService = {
  getById: (id: number) => api.get<Curso>(`/curso/${id}`),
};

export default api;