import React, { useState } from 'react';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    // Simular envio do formulário
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
    }, 2000);
  };

  const informacoesContato = [
    {
      icone: '📧',
      titulo: 'Email',
      detalhes: ['contato@skillbridge.com', 'suporte@skillbridge.com'],
      descricao: 'Respondemos em até 24 horas'
    },
    {
      icone: '📞',
      titulo: 'Telefone',
      detalhes: ['(11) 9999-9999', '(11) 8888-8888'],
      descricao: 'Segunda a Sexta, 8h às 18h'
    },
    {
      icone: '📍',
      titulo: 'Endereço',
      detalhes: ['Rua das Oportunidades, 123', 'São Paulo - SP, 01234-567'],
      descricao: 'Escritório principal'
    },
    {
      icone: '🕒',
      titulo: 'Horário de Atendimento',
      detalhes: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h'],
      descricao: 'Atendimento presencial com agendamento'
    }
  ];

  const perguntasFrequentes = [
    {
      pergunta: "Como me cadastrar na plataforma?",
      resposta: "Basta clicar em 'Criar Conta' no canto superior direito e preencher suas informações. O processo é gratuito e rápido."
    },
    {
      pergunta: "A SkillBridge é realmente gratuita?",
      resposta: "Sim! Nossa missão é conectar talentos a oportunidades sem custo para os candidatos."
    },
    {
      pergunta: "Como funciona o match com as empresas?",
      resposta: "Usamos IA para analisar seu perfil e conectar você com vagas que combinam com suas habilidades e experiência."
    },
    {
      pergunta: "Posso fazer mais de uma trilha ao mesmo tempo?",
      resposta: "Sim! Você pode se inscrever em quantas trilhas quiser e progredir no seu próprio ritmo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Fale conosco! Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Formulário de Contato */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h2>
            
            {enviado && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#477BBC] focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#477BBC] focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#477BBC] focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#477BBC] focus:border-transparent transition-colors"
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
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#477BBC] focus:border-transparent transition-colors resize-none"
                  placeholder="Descreva sua dúvida, sugestão ou mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-[#477BBC] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3a6a9d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Informações de Contato e FAQ */}
          <div className="space-y-8">
            
            {/* Informações de Contato */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {informacoesContato.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#477BBC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{info.icone}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{info.titulo}</h3>
                      <div className="space-y-1">
                        {info.detalhes.map((detalhe, i) => (
                          <p key={i} className="text-gray-600">{detalhe}</p>
                        ))}
                      </div>
                      <p className="text-gray-500 text-sm mt-2">{info.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Perguntas Frequentes
              </h2>
              
              <div className="space-y-4">
                {perguntasFrequentes.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.pergunta}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {faq.resposta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mapa (Placeholder) */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Onde Estamos
          </h2>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <span className="text-4xl mb-2 block">🗺️</span>
              <p>Mapa da localização</p>
              <p className="text-sm">São Paulo - SP, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;