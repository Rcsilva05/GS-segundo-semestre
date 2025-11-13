export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  rating: number;
  students: number;
  price: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}