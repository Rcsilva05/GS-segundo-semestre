import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conectando <span className="text-yellow-300">talento</span> a <span className="text-yellow-300">oportunidade</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A SkillBridge existe para fechar o abismo entre pessoas que precisam de oportunidade e empresas que precisam de talentos.
            </p>
            <div className="space-x-4">
              <Link
                to="/trilhas"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Começar Agora
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como a SkillBridge Transforma Vidas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Usamos tecnologia inteligente para criar pontes reais entre talento e oportunidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Trilhas Personalizadas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                IA que entende seu perfil e cria jornadas de aprendizado únicas, do seu nível atual até onde o mercado espera que você esteja.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Match Inteligente</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conectamos você com vagas reais baseadas nas habilidades que desenvolveu, considerando sua situação socioeconômica.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Acompanhamento Contínuo</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Suporte durante toda a jornada, desde o primeiro curso até a conquista da vaga e crescimento profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Pessoas Impactadas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Empresas Parceiras</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300">Taxa de Empregabilidade</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Trilhas Concluídas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;