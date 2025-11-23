import React, { useState } from 'react';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com a API depois
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Fale conosco! Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envie sua Mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="parceria">Parceria</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white transition-colors resize-none"
                  placeholder="Descreva sua dúvida, sugestão ou mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">E-mail</h3>
                    <p className="text-gray-600 dark:text-gray-300">contato@skillbridge.com</p>
                    <p className="text-gray-600 dark:text-gray-300">suporte@skillbridge.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-secondary text-lg">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Telefone</h3>
                    <p className="text-gray-600 dark:text-gray-300">(11) 9999-9999</p>
                    <p className="text-gray-600 dark:text-gray-300">(11) 8888-8888</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Endereço</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rua das Oportunidades, 123<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-secondary text-lg">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Horário de Atendimento</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Perguntas Frequentes
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Como me cadastrar na plataforma?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Basta acessar nossa página de cadastro e preencher suas informações. O processo é gratuito e rápido.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    A SkillBridge é realmente gratuita?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sim! Nossa missão é conectar talentos a oportunidades sem custo para os candidatos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Como funciona o match com as empresas?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Usamos IA para analisar seu perfil e conectar você com vagas que combinam com suas habilidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;