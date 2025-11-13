import React from 'react';
import { Card } from '../components/ui/Card';

const teamMembers = [
  {
    name: 'João Silva',
    role: 'Desenvolvedor Full Stack',
    email: 'SkillBridge.com',
    avatar: '/api/placeholder/100/100',
    skills: ['React', 'Node.js', 'TypeScript']
  },
  {
    name: 'Maria Santos',
    role: 'UX/UI Designer',
    email: 'maria@SkillBrigde.com',
    avatar: '/api/placeholder/100/100',
    skills: ['Figma', 'UI Design', 'User Research']
  },
  {
    name: 'Pedro Oliveira',
    role: 'Data Scientist',
    email: 'pedro@SkillBridge.com',
    avatar: '/api/placeholder/100/100',
    skills: ['Python', 'Machine Learning', 'Data Analysis']
  },
  {
    name: 'Ana Costa',
    role: 'DevOps Engineer',
    email: 'SkillBrigde.com',
    avatar: '/api/placeholder/100/100',
    skills: ['AWS', 'Docker', 'Kubernetes']
  }
];

export const Integrantes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça os talentosos profissionais por trás da SkillBridge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#477BBC] to-[#9359D8] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-[#477BBC] dark:text-blue-400 mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{member.email}</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-[#9359D8] text-white text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};