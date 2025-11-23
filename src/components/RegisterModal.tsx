import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

const HABILIDADES = [
  { id: 1, nome: "Comunicação Não-Violenta" },
  { id: 2, nome: "Resolução de Conflitos e Mediação" },
  { id: 3, nome: "Pensamento Crítico e Análise" },
  { id: 4, nome: "Negociação e Persuasão" },
  { id: 5, nome: "Inteligência Emocional" },
  { id: 6, nome: "Colaboração Remota" },
  { id: 7, nome: "Gestão do Tempo" },
  { id: 8, nome: "Liderança Situacional" },
  { id: 9, nome: "Adaptabilidade e Resiliência" },
  { id: 10, nome: "Oratória e Apresentação" },
];

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
    empresa: "",
  });

  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMsg("");

    if (form.senha !== form.confirmarSenha)
      return setErrorMsg("As senhas não coincidem.");

    if (selected.length === 0)
      return setErrorMsg("Selecione ao menos uma habilidade.");

    if (form.cpf.length !== 11)
      return setErrorMsg("CPF inválido (11 números).");

    // ⛔ ANTES (errado)
    // habilidade: { id }

    // ✅ AGORA (correto para API + types.ts)
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      sexo: form.sexo,
      cpf: Number(form.cpf),
      dataNascimento: form.dataNascimento,
      idEmpresa: form.empresa ? Number(form.empresa) : undefined,
      habilidadesUsuario: selected.map((id) => ({
        nivel: "iniciante",
        idHabilidade: id, // <-- CORRETO
      })),
    };

    console.log("📤 Payload final:", payload);

    setLoading(true);
    const ok = await register(payload);
    setLoading(false);

    if (!ok) return setErrorMsg("Erro ao cadastrar. Tente novamente.");
    onSuccess();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#477BBC]">
            Criar Conta
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {errorMsg && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm mb-4 text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <Field label="Nome Completo *">
            <input
              className="input"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
          </Field>

          <Field label="E-mail *">
            <input
              className="input"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </Field>

          <Field label="Senha *">
            <input
              className="input"
              type="password"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
              required
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
            />
          </Field>

          <Field label="CPF *">
            <input
              className="input"
              maxLength={11}
              placeholder="Apenas números"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
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

          <Field label="Empresa (opcional)">
            <input
              className="input"
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
            />
          </Field>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Habilidades *
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HABILIDADES.map((h) => (
                <label key={h.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(h.id)}
                    onChange={() => toggle(h.id)}
                  />
                  {h.nome}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#477BBC] text-white py-3 rounded-lg font-semibold hover:bg-[#3a6a9d] transition disabled:bg-[#7b9dcc]"
          >
            {loading ? "Cadastrando..." : "Criar Conta"}
          </button>

          <p className="text-center text-sm">
            Já tem conta?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#477BBC] hover:underline"
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
