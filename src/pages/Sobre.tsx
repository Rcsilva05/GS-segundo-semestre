import React from 'react';

const Sobre: React.FC = () => {
  const tecnologias = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
  ];

  const features = [
    {
      icon: '🚀',
      title: 'Missão',
      description: 'Conectar talentos a oportunidades através da educação tecnológica acessível e de qualidade.'
    },
    {
      icon: '🎯',
      title: 'Visão',
      description: 'Ser a principal plataforma de requalificação profissional do Brasil, transformando vidas através da tecnologia.'
    },
    {
      icon: '💡',
      title: 'Valores',
      description: 'Inovação, inclusão, qualidade educacional e impacto social positivo.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-[#477BBC]">SkillBridge</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            Conectando talentos a oportunidades através da educação tecnológica inclusiva
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 sm:mb-12">
          <div className="p-6 sm:p-8 lg:p-12">
            
            {/* Introdução */}
            <div className="mb-8 sm:mb-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A <strong className="text-[#477BBC]">SkillBridge</strong> é uma plataforma inovadora desenvolvida como 
                projeto acadêmico integrando <strong>Front-End Design Engineering</strong> com 
                <strong> Domain Driven Design Using Java</strong>, criada para fechar o abismo entre 
                pessoas que precisam de oportunidade e empresas que precisam de talentos.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos <strong>Inteligência Artificial</strong>, trilhas de capacitação personalizadas 
                e um sistema de match inteligente para conectar, de forma eficiente, pessoas em situação 
                de vulnerabilidade com vagas reais do mercado.
              </p>
            </div>

            {/* Cards de Missão, Visão e Valores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#477BBC] to-[#9359D8] text-white rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Tecnologias */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                Tecnologias Utilizadas
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {tecnologias.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow group"
                  >
                    <div className="text-gray-900 font-semibold text-sm sm:text-base mb-1 group-hover:text-[#477BBC] transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {tech.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nossos Diferenciais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#477BBC] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trilhas Personalizadas com IA</h3>
                    <p className="text-gray-600 text-sm">
                      Jornadas de aprendizado únicas baseadas no seu perfil, experiência e objetivos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#9359D8] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    🤝
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Match Inteligente</h3>
                    <p className="text-gray-600 text-sm">
                      Conexão automática com vagas que combinam com suas habilidades e perfil.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#477BBC] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    💼
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Parcerias Corporativas</h3>
                    <p className="text-gray-600 text-sm">
                      Rede de empresas comprometidas com a inclusão e diversidade de talentos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#9359D8] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    📈
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Acompanhamento Contínuo</h3>
                    <p className="text-gray-600 text-sm">
                      Suporte desde o primeiro curso até a conquista da vaga e crescimento profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Pronto para Transformar sua Carreira?
          </h2>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto opacity-90">
            Junte-se a milhares de pessoas que já encontraram sua oportunidade através da SkillBridge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#477BBC] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Agora
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#477BBC] transition-colors">
              Conhecer Trilhas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;