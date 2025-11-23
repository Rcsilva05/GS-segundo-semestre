export interface Usuario {
  codigo?: number;
  id?: number;
  nome: string;
  email: string;
  senha: string | null;
  sexo: string;
  dataNascimento: string;
  cpf: number;  // ← AJUSTADO
  idEmpresa?: number;
  habilidadesUsuario?: HabilidadeUsuario[];
}


export interface HabilidadeUsuario {
  id?: number;
  nivel: string;
  dataCriacao?: string;
  idUsuario?: number;
  idHabilidade?: number;
  habilidade?: Habilidade;
}

export interface Habilidade {
  id?: number;
  codigo?: number;
  nome: string;
  categoria: string;
}

export interface Empresa {
  id: number;
  nome: string;
  email: string;
  setor: string;
}

export interface Trilha {
  id: number;
  nome: string;
  descricao: string;
  areaProfissional: string;
}

export interface Curso {
  id: number;
  nome: string;
  nivel: string;
  conteudoPrincipal: string;
  dataCriacao: string;
}

export interface TrilhaUsuario {
  id: number;
  progresso: number;
  status: string;
  idUsuario: number;
  idTrilha: number;
  dataCriacao: string;
  trilha?: Trilha;
}

export interface LoginData {
  email: string;
  senha: string;
}

export interface AuthContextType {
  user: Usuario | null;
  login: (email: string, senha: string) => Promise<boolean>;
  register: (userData: Omit<Usuario, 'codigo' | 'id'>) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}