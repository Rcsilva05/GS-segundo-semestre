import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      pergunta: "O que é a SkillBridge?",
      resposta: "A SkillBridge é uma plataforma digital que utiliza inteligência artificial para recomendar trilhas de aprendizado personalizadas e conectar profissionais requalificados a oportunidades de trabalho, promovendo inclusão produtiva e diversidade."
    },
    {
      pergunta: "Quem pode usar a plataforma?",
      resposta: "Qualquer pessoa interessada em se requalificar profissionalmente pode se cadastrar. A plataforma é especialmente voltada para trabalhadores em situação de vulnerabilidade, como jovens, mulheres, pessoas com baixa escolaridade e profissionais em setores em risco de automação."
    },
    {
      pergunta: "Como funciona a análise de perfil com IA?",
      resposta: "Ao se cadastrar, o usuário fornece informações sobre sua trajetória, habilidades e objetivos. A IA analisa esses dados e recomenda trilhas de aprendizado alinhadas ao perfil, promovendo uma jornada personalizada e eficiente"
    },
    {
      pergunta: "A SkillBridge oferece cursos próprios?",
      resposta: "Não. A plataforma integra cursos de instituições parceiras, como ONGs, universidades e plataformas de ensino online. Os cursos são organizados em trilhas temáticas que facilitam a progressão do usuário."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const popularCourses = [
    {
      title: "Digital Marketing",
      description: "Domine as estratégias de marketing digital mais eficazes para alavancar negócios.",
      instructor: "Lucas Silva",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Science",
      description: "Aprenda análise de dados, machine learning e visualização de dados interativa.",
      instructor: "Ana Costa",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Development",
      description: "Desenvolva websites modernos usando as mais recentes tecnologias do mercado.",
      instructor: "Carlos Santos",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Requalificação Profissional */}
      <section className="bg-gradient-to-r from-[#477BBC] to-[#9359D8] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Requalificação Profissional e Inclusão Produtiva
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conectamos talentos e oportunidades por meio de soluções inovadoras e inclusivas.
            </p>
            <Link
              to="/trilhas"
              className="bg-white text-[#477BBC] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Comece Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Por que a SkillBridge? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que a SkillBridge?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trilhas Personalizadas com IA</h3>
              <p className="text-gray-600">
                Conteúdo crítico, aprendizado adaptativo e estruturação personalizada para seu desenvolvimento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recrutamento Ético</h3>
              <p className="text-gray-600">
                Processo transparente e inclusivo que valoriza o potencial e as competências de cada candidato.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interface Inteligente e Responsiva</h3>
              <p className="text-gray-600">
                Experiência do usuário otimizada para diferentes dispositivos e necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bem-Estar Corporativo</h3>
              <p className="text-gray-600">
                Acompanhamento contínuo e suporte para garantir o sucesso na jornada profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - Cursos Populares */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Cursos Populares
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra as trilhas de aprendizado mais procuradas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Instrutor: {course.instructor}</span>
                    <button className="bg-[#477BBC] text-white px-4 py-2 rounded-lg hover:bg-[#3a6a9d] transition-colors">
                      Ver Curso
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/trilhas"
              className="inline-flex items-center text-[#477BBC] hover:text-[#3a6a9d] font-semibold text-lg"
            >
              Acessar Todas as Trilhas/Cursos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Penúltima seção */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre a SkillBridge
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{item.pergunta}</span>
                  <span className="text-[#477BBC] text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comece Sua Jornada - Última seção */}
      <section className="py-20 bg-gradient-to-r from-[#477BBC] to-[#9359D8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Comece Sua Jornada
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sobre a empresa</h3>
                <p className="text-white/80">Conheça nossa missão e valores</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instruções do Site</h3>
                <p className="text-white/80">Aprenda a usar a plataforma</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cursos Populares</h3>
                <p className="text-white/80">Explore nossas trilhas em alta</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link
                to="/trilhas"
                className="bg-white text-[#477BBC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explorar Trilhas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
