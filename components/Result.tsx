
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
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="max-w-sm w-full bg-white rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden border border-amber-100">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full -mr-12 -mt-12 opacity-60"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-amber-500 p-0.5 mb-4 shadow-lg">
            <img 
              src={IMAGES.floating} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex items-center gap-1.5 text-green-600 font-bold text-[10px] tracking-widest uppercase mb-2 bg-green-50 px-3 py-1 rounded-full">
            <CheckCircle size={12} /> Perfil Analisado
          </div>

          <h2 className="text-2xl font-bold text-gray-900 serif mb-1">Diagnóstico Concluído</h2>
          <p className="text-gray-500 text-xs mb-6 leading-relaxed px-4">
            Você possui o perfil ideal para o protocolo de naturalidade da <span className="font-bold text-gray-800">{EXPERT_NAME}</span>.
          </p>

          <div className="w-full flex flex-col gap-2">
            <a 
              href={formatAnswersForWhatsApp()} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] animate-pulse-gold text-sm"
            >
              <Send size={18} />
              Enviar Avaliação p/ Dra
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-all border border-gray-100 text-[10px]"
              >
                <MessageCircle size={16} className="text-green-500" />
                WhatsApp
              </a>
              <button 
                onClick={onGoToSite}
                className="bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-all text-[10px]"
              >
                <ArrowRight size={16} className="text-amber-400" />
                Ver Site
              </button>
            </div>
          </div>

          <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-tighter font-medium">
            Atendimento Exclusivo em Itaquera - SP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
