
import React, { useEffect, useState } from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';
import { Sparkles } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Completa em aproximadamente 2.5 - 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-sm space-y-8">
        {/* Avatar Animado */}
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-ping"></div>
          <div className="relative w-24 h-24 rounded-full border-2 border-amber-500 p-1 bg-gray-800">
            <img 
              src={IMAGES.floating} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover rounded-full opacity-80"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold tracking-[0.2em] uppercase text-xs animate-pulse">
            <Sparkles size={16} />
            Analisando seu perfil
          </div>
          
          <h2 className="text-2xl font-bold text-white serif">Buscando a melhor abordagem para você...</h2>
        </div>

        {/* Barra de Progresso Customizada */}
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <span>Sincronizando</span>
            <span>{progress}%</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm italic">
          "A beleza personalizada exige precisão e cuidado."
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
