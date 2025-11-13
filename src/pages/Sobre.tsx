import React from 'react';

export const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre o Projeto
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A SkillBrigde é uma plataforma de educação tecnológica desenvolvida como 
            parte de um projeto acadêmico integrando Front-End Design Engineering com 
            Domain Driven Design Using Java.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Nossa Proposta
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Oferecemos cursos de alta qualidade em tecnologia, focados nas demandas 
            atuais do mercado. Nossa missão é capacitar profissionais para as carreiras 
            do futuro através de uma educação acessível e de excelência.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'].map((tech) => (
              <div key={tech} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center">
                <span className="text-gray-900 dark:text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};