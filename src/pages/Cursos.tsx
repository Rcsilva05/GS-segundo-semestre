import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const allCourses = [
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
  },
  {
    id: '4',
    title: 'Mobile Development com React Native',
    description: 'Desenvolva apps nativos para iOS e Android usando React Native',
    image: '/api/placeholder/300/200',
    duration: '14 semanas',
    level: 'Intermediário' as const,
    rating: 4.7,
    students: 723,
    price: 547
  },
  {
    id: '5',
    title: 'DevOps e Cloud Computing',
    description: 'Aprenda a deployar e gerenciar aplicações em nuvem',
    image: '/api/placeholder/300/200',
    duration: '16 semanas',
    level: 'Avançado' as const,
    rating: 4.8,
    students: 445,
    price: 597
  },
  {
    id: '6',
    title: 'Python para Análise de Dados',
    description: 'Use Python e suas bibliotecas para análise e visualização de dados',
    image: '/api/placeholder/300/200',
    duration: '8 semanas',
    level: 'Iniciante' as const,
    rating: 4.5,
    students: 1102,
    price: 297
  }
];

export const Cursos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todos os Cursos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Escolha entre nossa variedade de cursos e comece sua jornada na tecnologia
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="px-4 py-2 bg-[#477BBC] text-white rounded-lg">Todos</button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            Iniciante
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            Intermediário
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            Avançado
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-[#477BBC] to-[#9359D8]"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-sm ${
                    course.level === 'Iniciante' ? 'bg-green-500' :
                    course.level === 'Intermediário' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white`}>
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
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};