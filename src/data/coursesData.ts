export interface Course {
  id: number;
  nome: string;
  nivel: string;
  descricao: string;
  instrutor: string;
  duracao: string;
  conteudoPrincipal: string;
  dataCriacao: string;
  preRequisitos: string[];
}

export interface Trilha {
  id: number;
  nome: string;
  descricao: string;
  areaProfissional: string;
  cursos: Course[];
  duracaoTotal: string;
  nivel: string;
  icone: string;
}

export const trilhasData: Trilha[] = [
  {
    id: 1,
    nome: "Marketing Digital Completo",
    descricao: "Domine todas as estratégias de marketing digital para alavancar negócios e construir marcas fortes.",
    areaProfissional: "Marketing",
    duracaoTotal: "6 meses",
    nivel: "Iniciante ao Avançado",
    icone: "📱",
    cursos: [
      {
        id: 1,
        nome: "Fundamentos do Marketing Digital",
        nivel: "Iniciante",
        descricao: "Aprenda os conceitos básicos e estratégias essenciais do marketing digital.",
        instrutor: "Lucas Silva",
        duracao: "4 semanas",
        conteudoPrincipal: "Introdução ao marketing digital, funil de vendas, persona, jornada do consumidor",
        dataCriacao: "2024-01-15",
        preRequisitos: ["Nenhum"]
      },
      {
        id: 2,
        nome: "Google Ads e Meta Ads",
        nivel: "Intermediário",
        descricao: "Domine as plataformas de publicidade paga mais importantes do mercado.",
        instrutor: "Lucas Silva",
        duracao: "6 semanas",
        conteudoPrincipal: "Campanhas Search, Display, Video, Remarketing, Otimização de Anúncios",
        dataCriacao: "2024-02-01",
        preRequisitos: ["Fundamentos do Marketing Digital"]
      },
      {
        id: 3,
        nome: "SEO e Growth Marketing",
        nivel: "Avançado",
        descricao: "Estratégias avançadas de otimização para mecanismos de busca e crescimento escalável.",
        instrutor: "Lucas Silva",
        duracao: "8 semanas",
        conteudoPrincipal: "SEO técnico, link building, analytics, estratégias de crescimento",
        dataCriacao: "2024-03-01",
        preRequisitos: ["Google Ads e Meta Ads"]
      }
    ]
  },
  {
    id: 2,
    nome: "Data Science & Analytics",
    descricao: "Torne-se um especialista em análise de dados, machine learning e visualização de dados.",
    areaProfissional: "Dados",
    duracaoTotal: "7 meses",
    nivel: "Iniciante ao Avançado",
    icone: "📊",
    cursos: [
      {
        id: 4,
        nome: "Python para Data Science",
        nivel: "Iniciante",
        descricao: "Aprenda Python do zero focado em análise de dados e ciência de dados.",
        instrutor: "Ana Costa",
        duracao: "5 semanas",
        conteudoPrincipal: "Python básico, Pandas, NumPy, Jupyter Notebooks",
        dataCriacao: "2024-01-20",
        preRequisitos: ["Lógica de programação"]
      },
      {
        id: 5,
        nome: "Análise Estatística e Machine Learning",
        nivel: "Intermediário",
        descricao: "Domine técnicas estatísticas e algoritmos de machine learning.",
        instrutor: "Ana Costa",
        duracao: "8 semanas",
        conteudoPrincipal: "Estatística descritiva, regressão, classificação, clustering",
        dataCriacao: "2024-02-15",
        preRequisitos: ["Python para Data Science"]
      },
      {
        id: 6,
        nome: "Visualização de Dados e Dashboard",
        nivel: "Avançado",
        descricao: "Crie visualizações interativas e dashboards profissionais.",
        instrutor: "Ana Costa",
        duracao: "6 semanas",
        conteudoPrincipal: "Tableau, Power BI, Plotly, Storytelling com dados",
        dataCriacao: "2024-03-10",
        preRequisitos: ["Análise Estatística e Machine Learning"]
      }
    ]
  },
  {
    id: 3,
    nome: "Desenvolvimento Full Stack",
    descricao: "Torne-se um desenvolvedor completo, dominando frontend e backend com tecnologias modernas.",
    areaProfissional: "Tecnologia",
    duracaoTotal: "8 meses",
    nivel: "Iniciante ao Avançado",
    icone: "💻",
    cursos: [
      {
        id: 7,
        nome: "HTML, CSS e JavaScript Moderno",
        nivel: "Iniciante",
        descricao: "Domine as bases do desenvolvimento web frontend.",
        instrutor: "Carlos Santos",
        duracao: "6 semanas",
        conteudoPrincipal: "HTML5, CSS3, JavaScript ES6+, Flexbox, Grid",
        dataCriacao: "2024-01-10",
        preRequisitos: ["Nenhum"]
      },
      {
        id: 8,
        nome: "React.js e Next.js",
        nivel: "Intermediário",
        descricao: "Desenvolva aplicações web modernas com React e Next.js.",
        instrutor: "Carlos Santos",
        duracao: "7 semanas",
        conteudoPrincipal: "React Hooks, Context API, Next.js, SSR, SSG",
        dataCriacao: "2024-02-20",
        preRequisitos: ["HTML, CSS e JavaScript Moderno"]
      },
      {
        id: 9,
        nome: "Node.js e Banco de Dados",
        nivel: "Avançado",
        descricao: "Crie APIs robustas e trabalhe com bancos de dados relacionais e não-relacionais.",
        instrutor: "Carlos Santos",
        duracao: "8 semanas",
        conteudoPrincipal: "Node.js, Express, MongoDB, PostgreSQL, APIs REST",
        dataCriacao: "2024-03-25",
        preRequisitos: ["React.js e Next.js"]
      }
    ]
  }
];