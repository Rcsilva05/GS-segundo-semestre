import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Usuario, AuthContextType } from "../types";
import { usuarioService } from "../services/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Carregar usuário salvo no navegador
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
      setIsAuthenticated(true);
    }
  }, []);

  // LOGIN
  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      console.log("🔍 Buscando usuário...");

      const response = await usuarioService.getAll();
      const usuarios = response.data;

      console.log("👥 Usuários encontrados:", usuarios);

      // Senha NÃO é retornada pelo GET da API → apenas valida email
      const found = usuarios.find((u) => u.email === email);

      if (!found) {
        console.log("❌ Usuário não encontrado");
        return false;
      }

      console.log("✅ Login bem-sucedido:", found);

      setUser(found);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(found));

      return true;
    } catch (err) {
      console.error("❌ Erro no login:", err);
      return false;
    }
  };

  // REGISTER
  const register = async (
    userData: Omit<Usuario, "codigo" | "id">
  ): Promise<boolean> => {
    try {
      console.log("📤 Registrando usuário:", userData);

      // Garantir que a API está respondendo
      try {
        await usuarioService.getAll();
      } catch {
        throw new Error("API offline");
      }

      const response = await usuarioService.create(userData);
      const created = response.data;

      console.log("🎉 Usuário criado:", created);

      setUser(created);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(created));

      return true;
    } catch (err: any) {
      console.error("❌ Erro no cadastro:", err);
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// HOOK PARA USO DO CONTEXTO
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
