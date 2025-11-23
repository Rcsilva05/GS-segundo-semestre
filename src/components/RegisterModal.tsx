import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { empresaService, habilidadeService } from "../services/api";
import { Empresa, Habilidade } from "../types";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onSwitchToLogin,
}) => {
  const { register } = useAuth();
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingEmpresas, setLoadingEmpresas] = useState(false);
  const [loadingHabilidades, setLoadingHabilidades] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    cpf: "",
    sexo: "M",
    dataNascimento: "",
    empresa: "",
  });

  const [selected, setSelected] = useState<number[]>([]);

  // 🔄 BUSCAR EMPRESAS E HABILIDADES DA API
  useEffect(() => {
    const fetchData = async () => {
      if (!isOpen) return;
      
      setLoadingEmpresas(true);
      try {
        const responseEmpresas = await empresaService.getAll();
        console.log("🏢 Empresas carregadas:", responseEmpresas.data);
        setEmpresas(responseEmpresas.data);
      } catch (error) {
        console.error("❌ Erro ao carregar empresas:", error);
        setErrorMsg("Erro ao carregar lista de empresas");
      } finally {
        setLoadingEmpresas(false);
      }

      setLoadingHabilidades(true);
      try {
        const responseHabilidades = await habilidadeService.getAll();
        console.log("🧩 Habilidades carregadas:", responseHabilidades.data);
        setHabilidades(responseHabilidades.data);
      } catch (error) {
        console.error("❌ Erro ao carregar habilidades:", error);
        setErrorMsg("Erro ao carregar lista de habilidades");
      } finally {
        setLoadingHabilidades(false);
      }
    };

    fetchData();
  }, [isOpen]);

  // Agrupar habilidades por categoria
  const habilidadesPorCategoria = habilidades.reduce((acc, habilidade) => {
    if (!acc[habilidade.categoria]) {
      acc[habilidade.categoria] = [];
    }
    acc[habilidade.categoria].push(habilidade);
    return acc;
  }, {} as { [categoria: string]: Habilidade[] });

  const toggleHabilidade = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validações
    if (form.senha !== form.confirmarSenha)
      return setErrorMsg("As senhas não coincidem.");

  if (form.cpf.length !== 11)
    return setErrorMsg("CPF inválido (11 números).");

    if (form.cpf.length !== 11)
      return setErrorMsg("CPF inválido (11 números).");

    // ✅ Payload CORRETO para API Java - conforme seus tipos
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      sexo: form.sexo,
      cpf: Number(form.cpf), // ✅ Convertendo para number
      dataNascimento: form.dataNascimento,
      idEmpresa: form.empresa ? Number(form.empresa) : undefined, // ✅ undefined em vez de null
      habilidadesUsuario: selected.map((id) => ({
        nivel: "iniciante",
        idHabilidade: id,
      })),
    };

    console.log("📤 Enviando para API Java:", payload);

    setLoading(true);
    const ok = await register(payload);
    setLoading(false);

    if (!ok) return setErrorMsg("Erro ao cadastrar. Tente novamente.");
    
    onSuccess();
    onClose();
  };

  // Reset form quando modal abrir/fechar
  useEffect(() => {
    if (isOpen) {
      setForm({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        cpf: "",
        sexo: "M",
        dataNascimento: "",
        empresa: "",
      });
      setSelected([]);
      setErrorMsg("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-10 max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-[#477BBC]">
            Criar Conta
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* ERROR */}
        {errorMsg && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-5 py-3 rounded text-sm mb-6 text-center">
            {errorMsg}
          </div>
        )}
        

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Field label="Nome Completo *">
              <input
                className="input"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
                placeholder="Seu nome completo"
              />
            </Field>

            <Field label="E-mail *">
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="seu@email.com"
              />
            </Field>

            <Field label="Senha *">
              <input
                className="input"
                type="password"
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                required
                placeholder="Mínimo 6 caracteres"
                minLength={6}
              />
            </Field>

            <Field label="Confirmar Senha *">
              <input
                className="input"
                type="password"
                value={form.confirmarSenha}
                onChange={(e) =>
                  setForm({ ...form, confirmarSenha: e.target.value })
                }
                required
                placeholder="Digite a senha novamente"
              />
            </Field>

            <Field label="CPF *">
              <input
                className="input"
                maxLength={11}
                placeholder="Apenas números (11 dígitos)"
                value={form.cpf}
                onChange={(e) => setForm({ ...form, cpf: e.target.value.replace(/\D/g, '') })}
                required
              />
            </Field>

            <Field label="Data de Nascimento *">
              <input
                className="input"
                type="date"
                value={form.dataNascimento}
                onChange={(e) =>
                  setForm({ ...form, dataNascimento: e.target.value })
                }
                required
              />
            </Field>

            <Field label="Sexo *">
              <select
                className="input"
                value={form.sexo}
                onChange={(e) => setForm({ ...form, sexo: e.target.value })}
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
              </select>
            </Field>

            <Field label="Empresa ">
              <select
                className="input"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                disabled={loadingEmpresas}
              >
                <option value="">{loadingEmpresas ? "Carregando empresas..." : "Selecione uma empresa"}</option>
                {empresas.map((empresa) => (
                  <option key={empresa.id} value={empresa.id}>
                    {empresa.nome}
                  </option>
                ))}
              </select>
              {loadingEmpresas && (
                <p className="text-xs text-gray-500 mt-1">Buscando empresas disponíveis...</p>
              )}
            </Field>
          </div>

          {/* HABILIDADES ORGANIZADAS POR CATEGORIA */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Habilidades *
              {loadingHabilidades && (
                <span className="text-xs text-gray-500 ml-2">(Carregando...)</span>
              )}
            </label>

            {loadingHabilidades ? (
              <div className="text-center py-4">
                <p className="text-gray-500">Carregando habilidades...</p>
              </div>
            ) : habilidades.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-gray-500">Nenhuma habilidade disponível</p>
              </div>
            ) : (
              <div className="space-y-6 max-h-80 overflow-y-auto p-4 border border-gray-200 rounded">
                {Object.entries(habilidadesPorCategoria).map(([categoria, habs]) => (
                  <div key={categoria} className="space-y-3">
                    <h4 className="font-medium text-gray-800 border-b pb-1">
                      {categoria}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {habs.map((habilidade) => (
                        <label key={habilidade.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition">
                          <input
                            type="checkbox"
                            checked={selected.includes(habilidade.id!)}
                            onChange={() => toggleHabilidade(habilidade.id!)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{habilidade.nome}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {selected.length > 0 && (
              <p className="text-xs text-gray-500 mt-3 text-center">
                {selected.length} habilidade(s) selecionada(s)
              </p>
            )}
          </div>

          {/* BOTÃO SUBMIT */}
          <button
            type="submit"
            disabled={loading || loadingEmpresas || loadingHabilidades}
            className="w-full bg-[#477BBC] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#3a6a9d] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Cadastrando..." : "Criar Conta"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Já tem conta?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#477BBC] font-medium hover:underline"
            >
              Fazer login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);

export default RegisterModal;