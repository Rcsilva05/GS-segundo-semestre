import React, { useState } from 'react';
import { Card } from '../components/ui/Card';

const faqs = [
  {
    question: "Como me inscrevo em um curso?",
    answer: "Basta criar uma conta, escolher o curso desejado e clicar em 'Inscrever-se'. O pagamento pode ser feito via cartão de crédito ou PIX."
  },
  {
    question: "Os cursos possuem certificado?",
    answer: "Sim, todos os nossos cursos emitem certificado digital upon conclusão, válido em todo território nacional."
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer: "O acesso é vitalício! Uma vez inscrito, você pode acessar o conteúdo do curso para sempre, incluindo atualizações futuras."
  },
  {
    question: "Posso assistir as aulas pelo celular?",
    answer: "Sim, nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Encontre respostas para as dúvidas mais comuns
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-[#477BBC] dark:text-blue-400 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Formulário de Contato */}
        <Card className="p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Não encontrou o que procurava?
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-[#477BBC] focus:border-[#477BBC] dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#477BBC] text-white py-2.5 px-4 rounded-md hover:bg-[#3a6aa8] transition-colors font-semibold"
            >
              Enviar Mensagem
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};