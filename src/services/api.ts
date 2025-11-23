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
   🔗 BASE DA API (Render)
============================================================= */
const API_BASE_URL = 'https://gs-skillbridge.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 
    'Content-Type': 'application/json',
  },
  timeout: 30000, // Aumentei o timeout
});

/* ============================================================
<<<<<<< HEAD
   🔍 LOGS PARA DEBUG MELHORADO
=======
   🔍 LOGS PARA DEBUG
>>>>>>> 80cb55b66ba8ffd969f538331fd3056d5f01e99c
============================================================= */
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    console.log('📤 Headers:', config.headers);
    console.log('📦 Data enviada:', JSON.stringify(config.data, null, 2));
    console.log('🔧 Config completa:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      timeout: config.timeout
    });
    return config;
  },
  (error) => {
    console.error('❌ Erro na configuração da requisição:', error);
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
api.interceptors.response.use(
  (response) => {
    console.log(`✅ Sucesso [${response.status}]:`, {
      url: response.config.url,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  (error) => {
    console.error('💥 ERRO COMPLETO NA RESPOSTA:', {
      message: error.message,
      code: error.code,
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      headers: error.response?.headers,
      config: {
        data: error.config?.data,
        headers: error.config?.headers
      }
    });
    
    // Log mais detalhado do erro 400
    if (error.response?.status === 400) {
      console.error('🔍 DETALHES DO ERRO 400:');
      console.error('Payload enviado:', error.config?.data);
      console.error('Resposta do servidor:', error.response?.data);
    }
    
    return Promise.reject(error);
  }
);

=======
>>>>>>> 80cb55b66ba8ffd969f538331fd3056d5f01e99c
/* ============================================================
   👤 USUÁRIO
============================================================= */
export const usuarioService = {
  getAll: () => api.get<Usuario[]>('/usuario'),

  getById: (id: number) => api.get<Usuario>(`/usuario/${id}`),

<<<<<<< HEAD
  create: (usuario: Omit<Usuario, 'codigo' | 'id'>) => {
    console.log('🎯 Criando usuário com dados:', JSON.stringify(usuario, null, 2));
    return api.post<Usuario>('/usuario', usuario);
  },
=======
  create: (usuario: Omit<Usuario, 'codigo' | 'id'>) =>
    api.post<Usuario>('/usuario', usuario),
>>>>>>> 80cb55b66ba8ffd969f538331fd3056d5f01e99c

  update: (id: number, usuario: Partial<Usuario>) =>
    api.put<Usuario>(`/usuario/${id}`, usuario),
};

/* ============================================================
   🏢 EMPRESA
============================================================= */
export const empresaService = {
  getAll: () => api.get<Empresa[]>('/empresa'),

  getById: (id: number) => api.get<Empresa>(`/empresa/${id}`),
};

/* ============================================================
   🧩 HABILIDADE
============================================================= */
export const habilidadeService = {
  getAll: () => api.get<Habilidade[]>('/habilidade'),

  getUsuarioHabilidades: (usuarioId: number) =>
    api.get<HabilidadeUsuario[]>(`/usuario/${usuarioId}/habilidade_usuario`),

<<<<<<< HEAD
  addHabilidadeUsuario: (usuarioId: number, habilidadeId: number, nivel: string) => {
    const payload = {
      nivel: nivel,
      idHabilidade: habilidadeId,
      idUsuario: usuarioId
    };
    console.log('🎯 Adicionando habilidade:', payload);
    return api.post<HabilidadeUsuario>(`/usuario/${usuarioId}/habilidade_usuario`, payload);
  },
=======
  addHabilidadeUsuario: (usuarioId: number, habilidadeId: number, nivel: string) =>
    api.post<HabilidadeUsuario>(`/usuario/${usuarioId}/habilidade_usuario`, {
      nivel,
      idHabilidade: habilidadeId,
    }),
>>>>>>> 80cb55b66ba8ffd969f538331fd3056d5f01e99c

  deleteHabilidadeUsuario: (habilidadeUsuarioId: number) =>
    api.delete(`/habilidade_usuario/${habilidadeUsuarioId}`),
};

/* ============================================================
   📚 TRILHA
============================================================= */
export const trilhaService = {
  getAll: () => api.get<Trilha[]>('/trilha'),

  getById: (id: number) => api.get<Trilha>(`/trilha/${id}`),

  getUsuarioTrilhas: (usuarioId: number) =>
    api.get<TrilhaUsuario[]>(`/usuario/${usuarioId}/trilha_usuario`),

  addTrilhaUsuario: (usuarioId: number, trilhaId: number) =>
    api.post(`/usuario/${usuarioId}/trilha_usuario`, {
      idTrilha: trilhaId,
    }),

  deleteTrilhaUsuario: (trilhaUsuarioId: number) =>
    api.delete(`/trilha_usuario/${trilhaUsuarioId}`),

  getTrilhaCursos: (trilhaId: number) =>
    api.get<Curso[]>(`/trilha/${trilhaId}/curso`),
};

/* ============================================================
   🎓 CURSO
============================================================= */
export const cursoService = {
  getById: (id: number) => api.get<Curso>(`/curso/${id}`),
};

// Função de teste direto
export const testApiConnection = async () => {
  try {
    console.log('🧪 Testando conexão com a API...');
    const response = await api.get('/usuario');
    console.log('✅ Conexão OK - Usuários encontrados:', response.data.length);
    return true;
  } catch (error) {
    console.error('❌ Falha na conexão com a API:', error);
    return false;
  }
};

// Função para teste de criação de usuário
export const testCreateUser = async (testData: any) => {
  try {
    console.log('🧪 TESTE CRIAR USUÁRIO:', JSON.stringify(testData, null, 2));
    const response = await api.post('/usuario', testData);
    console.log('✅ TESTE SUCESSO:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('❌ TESTE FALHOU:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    throw error;
  }
};

export default api;