import React, { useState } from "react";

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
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
    dataNascimento: "",
    documento: "",
    habilidades: "",
    desenvolver: "",
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);

    onSuccess(); // fecha o modal após cadastro (como antes)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 animate-fadeIn">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Criar Conta</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              placeholder="(00) 99999-9999"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              E-mail *
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Empresa (opcional)
            </label>
            <input
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nome da empresa"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Data de Nascimento *
            </label>
            <input
              name="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Documento *
            </label>
            <input
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              required
              placeholder="CPF ou RG (somente números)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Habilidades que tenho
            </label>
            <textarea
              name="habilidades"
              value={formData.habilidades}
              onChange={handleChange}
              rows={3}
              placeholder="Ex: Comunicação, Excel, etc..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Gostaria de desenvolver
            </label>
            <textarea
              name="desenvolver"
              value={formData.desenvolver}
              onChange={handleChange}
              rows={3}
              placeholder="Ex: Programação, liderança..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Criar Conta
          </button>

          {/* Alternar para Login */}
          <p className="text-center mt-4 text-sm">
            Já tem uma conta?{" "}
            <button
              onClick={onSwitchToLogin}
              type="button"
              className="text-blue-600 hover:underline"
            >
              Fazer login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
