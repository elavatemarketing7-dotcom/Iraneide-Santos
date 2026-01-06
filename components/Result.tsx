
import React from 'react';
import { QuizAnswer } from '../types';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { CheckCircle, Send, MessageCircle, ArrowRight } from 'lucide-react';

interface ResultProps {
  answers: QuizAnswer[];
  onGoToSite: () => void;
}

const Result: React.FC<ResultProps> = ({ answers, onGoToSite }) => {
  const formatAnswersForWhatsApp = () => {
    let text = `Ol%c3%a1%20Dra%20Iraneide!%20Acabei%20de%20finalizar%20minha%20avalia%c3%a7%c3%a3o%20no%20site.%0A%0A`;
    answers.forEach((item, idx) => {
      text += `*${idx + 1}.%20${item.question}*%0A${item.answer}%0A%0A`;
    });
    text += `Gostaria%20de%20um%20agendamento%20personalizado!`;
    return WHATSAPP_URL.split('&text=')[0] + '&text=' + text;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-4 border-amber-500 p-1 mb-6">
            <img 
              src={IMAGES.floating} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex items-center gap-2 text-green-600 font-bold text-xs tracking-widest uppercase mb-4">
            <CheckCircle size={14} /> Perfil Compatível
          </div>

          <h2 className="text-3xl font-bold text-gray-900 serif mb-2">Você é a Paciente ideal</h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed px-2">
            Com base nas suas respostas, o Método da <span className="font-semibold text-gray-800">{EXPERT_NAME}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>

          <div className="w-full flex flex-col gap-3">
            <a 
              href={formatAnswersForWhatsApp()} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-200 transition-all animate-pulse-gold"
            >
              <Send size={20} />
              Enviar minha avaliação a Dra
            </a>

            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp sem compromisso
            </a>

            <button 
              onClick={onGoToSite}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all mt-2"
            >
              Ver detalhes e Continuar no Site
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
