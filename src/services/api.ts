import axios from 'axios';
import { Usuario, Empresa, Habilidade, Trilha, Curso, TrilhaUsuario, HabilidadeUsuario } from '../types';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Usuários
export const usuarioService = {
  getAll: () => api.get<Usuario[]>('/usuario'),
  getById: (id: number) => api.get<Usuario>(`/usuario/${id}`),
  create: (usuario: Omit<Usuario, 'codigo' | 'id'>) => api.post<Usuario>('/usuario', usuario),
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

// Trilhas
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

export default api;