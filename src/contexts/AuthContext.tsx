import React, { createContext, useContext, useState, useEffect } from 'react';
import { Usuario, AuthContextType } from '../types';
import { usuarioService } from '../services/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      const response = await usuarioService.getAll();
      const users = response.data;

      const found = users.find(u => u.email === email && u.senha === senha);

      if (found) {
        setUser(found);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(found));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  };

  const register = async (formUser: any): Promise<boolean> => {
    try {
      const payload = {
        ...formUser,

        // OBRIGATÓRIO pela API
        idEmpresa: 1,

        habilidadesUsuario: [
          {
            nivel: "iniciante",
            habilidade: { id: 1 }
          }
        ]
      };

      const response = await usuarioService.create(payload);

      setUser(response.data);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(response.data));

      return true;
    } catch (error: any) {
      console.error('Erro no registro:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};
