import React from 'react';

const Empresas: React.FC = () => {
  const empresasParceiras = [
    {
      nome: "Academia Ninja da Folha",
      setor: "Educação e Treinamento",
      descricao: "Líder em formação de talentos ninja e desenvolvimento de habilidades especiais.",
      vagas: 15
    },
    {
      nome: "Corporação Cápsula Brasil",
      setor: "Tecnologia e Engenharia",
      descricao: "Inovação em tecnologia de compactação e desenvolvimento de equipamentos avançados.",
      vagas: 8
    },
    {
      nome: "Namekusei Consultoria",
      setor: "Consultoria Estratégica",
      descricao: "Consultoria especializada em estratégias intergalácticas e desenvolvimento sustentável.",
      vagas: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Empresas Parceiras
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça as empresas que acreditam no potencial dos talentos da SkillBridge
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">Empresas Parceiras</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-gray-600">Vagas Preenchidas</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </div>
        </div>

        {/* Lista de Empresas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {empresasParceiras.map((empresa, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{empresa.nome}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {empresa.vagas} vagas
                  </span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Setor:</strong> {empresa.setor}
                </p>
                <p className="text-gray-600 mb-4">
                  {empresa.descricao}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Ver Vagas
                  </button>
                  <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                    Conhecer Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção para Empresas */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mt-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sua empresa também pode fazer parte!
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Junte-se às empresas que estão transformando vidas e encontrando os melhores talentos.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Seja uma Empresa Parceira
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresas;