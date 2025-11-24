import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    cpf: "",
    sexo: "M",
    dataNascimento: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validações básicas
    if (!form.nome || !form.email || !form.senha || !form.confirmarSenha || !form.cpf || !form.dataNascimento) {
      return setErrorMsg("Preencha todos os campos obrigatórios.");
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return setErrorMsg("E-mail inválido.");
    }

    if (form.senha !== form.confirmarSenha) {
      return setErrorMsg("As senhas não coincidem.");
    }

    if (form.cpf.replace(/\D/g, "").length !== 11) {
      return setErrorMsg("CPF inválido (11 números).");
    }

    // Payload pronto para o backend
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      sexo: form.sexo,
      cpf: form.cpf.replace(/\D/g, ""), // mantém string de 11 dígitos
      dataNascimento: form.dataNascimento,
    };

    console.log("🧪 PAYLOAD:", JSON.stringify(payload, null, 2));

    setLoading(true);
    const ok = await register(payload);
    setLoading(false);

    if (!ok) return setErrorMsg("Erro ao cadastrar. Verifique os dados e tente novamente.");

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
      });
      setErrorMsg("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-[#477BBC]">Criar Conta</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
        </div>

        {/* Error */}
        {errorMsg && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-5 py-3 rounded text-sm mb-6 text-center">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
                minLength={6}
                placeholder="Mínimo 6 caracteres"
              />
            </Field>

            <Field label="Confirmar Senha *">
              <input
                className="input"
                type="password"
                value={form.confirmarSenha}
                onChange={(e) => setForm({ ...form, confirmarSenha: e.target.value })}
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
                onChange={(e) => setForm({ ...form, cpf: e.target.value.replace(/\D/g, "") })}
                required
              />
            </Field>

            <Field label="Data de Nascimento *">
              <input
                className="input"
                type="date"
                value={form.dataNascimento}
                onChange={(e) => setForm({ ...form, dataNascimento: e.target.value })}
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

            {/* Campo vazio para manter o grid */}
            <div></div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#477BBC] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#3a6a9d] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Cadastrando..." : "Criar Conta"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Já tem conta?{" "}
            <button type="button" onClick={onSwitchToLogin} className="text-[#477BBC] font-medium hover:underline">
              Fazer login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {children}
  </div>
);

export default RegisterModal;
