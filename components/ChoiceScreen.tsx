
import React from 'react';
import { ChevronRight, ClipboardCheck, Globe } from 'lucide-react';
import { EXPERT_NAME, IMAGES } from '../constants';

interface ChoiceScreenProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center relative" 
         style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${IMAGES.hero})` }}>
      
      <div className="text-center z-10 w-full max-w-md space-y-8">
        <div className="space-y-4">
          <h2 className="text-white text-xl font-light tracking-widest uppercase mb-2">Seja Bem-Vinda</h2>
          <h1 className="text-4xl md:text-5xl text-white font-bold serif">{EXPERT_NAME}</h1>
          <p className="text-gray-200 text-sm md:text-base px-4">
            Escolha como deseja iniciar sua jornada de transformação personalizada e exclusiva.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-white text-gray-900 py-6 px-8 rounded-2xl flex items-center justify-between shadow-2xl hover:bg-gray-100 transition-all group animate-pulse-gold"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <ClipboardCheck size={28} />
              </div>
              <div>
                <span className="block font-bold text-lg leading-none">Avaliação Gratuita</span>
                <span className="text-xs text-gray-500 font-medium">Quiz personalizado de 30s</span>
              </div>
            </div>
            <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={onGoToSite}
            className="w-full bg-black/40 backdrop-blur-md text-white border border-white/30 py-6 px-8 rounded-2xl flex items-center justify-between shadow-xl hover:bg-black/60 transition-all group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="bg-white/10 p-3 rounded-full text-white">
                <Globe size={28} />
              </div>
              <div>
                <span className="block font-bold text-lg leading-none">Acessar Site Direto</span>
                <span className="text-xs text-white/60 font-medium">Ver fotos e resultados</span>
              </div>
            </div>
            <ChevronRight className="text-white/40 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 text-white/40 text-[10px] tracking-[0.2em] uppercase">
        Itaquera - SP • Estética de Resultados
      </div>
    </div>
  );
};

export default ChoiceScreen;
