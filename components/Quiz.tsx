
import React, { useState } from 'react';
import { QuizAnswer } from '../types';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_NAME } from '../constants';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: QuizAnswer[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = {
      question: QUIZ_QUESTIONS[currentStep].text,
      answer: option
    };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-4">
      {/* Background Overlay Hint of the Site */}
      <div className="absolute inset-0 -z-10 bg-gray-900/10"></div>

      {/* Main Compact Container */}
      <div className="relative w-full max-w-md flex flex-col">
        
        {/* Compact Header with Floating Expert Photo */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-white">
              <img src={IMAGES.floating} alt={EXPERT_NAME} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-0.5 rounded-full shadow-md">
              <div className="w-3 h-3 bg-white rounded-full animate-ping absolute inset-0 opacity-30"></div>
            </div>
          </div>
          <h2 className="text-white text-lg font-bold serif text-center mt-2 drop-shadow-md">{EXPERT_NAME}</h2>
          <p className="text-gray-200 text-[10px] tracking-[0.2em] uppercase mt-0.5 opacity-80">Avaliação Personalizada</p>
        </div>

        {/* Compact Quiz Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-2xl flex flex-col relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
            <div 
              className="h-full bg-amber-500 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex-1">
            <div className="mb-6 mt-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-amber-600 font-bold text-[10px] uppercase tracking-widest">Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="text-gray-400 text-[10px] font-medium">{Math.round(progress)}%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight">
                {QUIZ_QUESTIONS[currentStep].text}
              </h3>
            </div>

            <div className="space-y-3">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-400 hover:bg-amber-50 transition-all active:scale-[0.98] group flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-700 text-sm group-hover:text-gray-900">{option}</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
            <button 
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(currentStep - 1)}
              className={`flex items-center gap-1 text-xs font-bold uppercase tracking-tighter ${currentStep === 0 ? 'text-gray-300' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <ChevronLeft size={14} /> Voltar
            </button>
            <button 
              onClick={onSkip}
              className="text-[10px] text-gray-400 hover:text-amber-600 font-medium uppercase tracking-widest underline underline-offset-4"
            >
              Pular Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
