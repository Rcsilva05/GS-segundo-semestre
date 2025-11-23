import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Usuario, AuthContextType } from "../types";
import { usuarioService } from "../services/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed: Usuario = JSON.parse(stored);
      if (!parsed.habilidadesUsuario) {
        parsed.habilidadesUsuario = [];
      }
      setUser(parsed);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      const response = await usuarioService.getAll();
      const usuarios = response.data;
      
      // Busca usuário por email E senha
      const found = usuarios.find((u) => u.email === email && u.senha === senha);
      if (!found) {
        return false;
      }

      if (!found.habilidadesUsuario) {
        found.habilidadesUsuario = [];
      }

      setUser(found);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(found));
      return true;
    } catch (err) {
      console.error("Erro no login:", err);
      return false;
    }
  };

  const register = async (
  userData: Omit<Usuario, "codigo" | "id">
): Promise<boolean> => {
  try {
    console.log("🎯 DADOS QUE SERÃO ENVIADOS:", {
      url: '/usuario',
      method: 'POST',
      data: userData
    });

    console.log("📦 PAYLOAD COMPLETO:", JSON.stringify(userData, null, 2));

    const response = await usuarioService.create(userData);
    
    console.log("✅ RESPOSTA DA API:", response.data);
    
    const created = response.data;
    
    if (!created.habilidadesUsuario) {
      created.habilidadesUsuario = [];
    }
    
    setUser(created);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(created));
    return true;
  } catch (err: any) {
    console.error("❌ ERRO DETALHADO NO CADASTRO:", {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
      headers: err.response?.headers,
      config: err.config
    });
    return false;
  }
};

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};