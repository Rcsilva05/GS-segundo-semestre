import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

// Mock data - será substituído pela API
const popularCourses = [
  {
    id: '1',
    title: 'Desenvolvimento Full Stack',
    description: 'Aprenda a criar aplicações web completas com React e Node.js',
    image: '/api/placeholder/300/200',
    duration: '12 semanas',
    level: 'Intermediário' as const,
    rating: 4.8,
    students: 1247,
    price: 497
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Domine os conceitos essenciais de ciência de dados e machine learning',
    image: '/api/placeholder/300/200',
    duration: '10 semanas',
    level: 'Iniciante' as const,
    rating: 4.6,
    students: 893,
    price: 397
  },
  {
    id: '3',
    title: 'UX/UI Design Avançado',
    description: 'Crie interfaces incríveis e experiências memoráveis para usuários',
    image: '/api/placeholder/300/200',
    duration: '8 semanas',
    level: 'Avançado' as const,
    rating: 4.9,
    students: 567,
    price: 347
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#477BBC] via-[#5a68c5] to-[#9359D8] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme Sua Carreira com 
              <span className="block text-yellow-300">Tecnologia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Cursos online de alta qualidade para impulsionar seu futuro profissional
            </p>
            <Link to="/criar-conta">
              <Button variant="secondary" size="lg" className="text-lg">
                Comece Sua Jornada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-16 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Título */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Por que a SkillBridge?
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {/* Card 1 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Trilhas Personalizadas com IA
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {/* Insira o texto explicativo aqui */}
          Consulte trilhas, quais restrições e acompanhe seu desenvolvimento com transparência.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="text-4xl mb-4">🤝</div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Recrutamento Ético
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {/* Insira o texto explicativo aqui */}
          Proporciona conexões justas e responsáveis entre empresas e candidatos.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="text-4xl mb-4">💻</div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Interface Inteligente e Responsiva
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {/* Insira o texto explicativo aqui */}
          Design moderno e adaptável para uma experiência de uso fluida e acessível.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="text-4xl mb-4">🌿</div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Bem-estar Corporativo
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {/* Insira o texto explicativo aqui */}
          Apoiamos o equilíbrio entre qualificação profissional e saúde mental.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Instruções do Site */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como Funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Crie Sua Conta', desc: 'Registre-se gratuitamente' },
              { step: '2', title: 'Escolha Seu Curso', desc: 'Selecione entre diversas opções' },
              { step: '3', title: 'Aprenda na Prática', desc: 'Aulas interativas e projetos' },
              { step: '4', title: 'Certifique-se', desc: 'Receba seu certificado' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#477BBC] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Populares */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Cursos Populares
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Os cursos mais buscados por nossos alunos
              </p>
            </div>
            <Link to="/cursos">
              <Button variant="outline">Ver Todos os Cursos</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-[#477BBC] to-[#9359D8]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <span className="bg-[#9359D8] text-white px-2 py-1 rounded text-sm">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>⭐ {course.rating}</span>
                    <span>👥 {course.students}</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#477BBC] dark:text-blue-400">
                      R$ {course.price}
                    </span>
                    <Button variant="primary" size="sm">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};