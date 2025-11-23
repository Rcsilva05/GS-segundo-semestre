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
      console.log('Tentando login com:', { email });
      const response = await usuarioService.getAll();
      const users = response.data;
      
      console.log('Usuários encontrados:', users);
      
      const foundUser = users.find(u => u.email === email && u.senha === senha);
      
      if (foundUser) {
        console.log('Usuário encontrado:', foundUser);
        setUser(foundUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return true;
      }
      console.log('Usuário não encontrado ou senha incorreta');
      return false;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  };

  const register = async (userData: Omit<Usuario, 'codigo' | 'id'>): Promise<boolean> => {
    try {
      console.log('Enviando dados para cadastro:', userData);
      
      // Verificar se a API está respondendo
      const testResponse = await usuarioService.getAll();
      console.log('Teste da API - Status:', testResponse.status);
      
      const response = await usuarioService.create(userData);
      console.log('Resposta da API:', response);
      console.log('Dados do usuário criado:', response.data);
      
      setUser(response.data);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(response.data));
      return true;
    } catch (error: any) {
      console.error('Erro completo no cadastro:', error);
      console.error('Mensagem do erro:', error.message);
      console.error('Response data:', error.response?.data);
      console.error('Response status:', error.response?.status);
      console.error('Response headers:', error.response?.headers);
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
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};