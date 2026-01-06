
import React, { useState, useEffect } from 'react';
import { AppState, QuizAnswer } from './types';
import ChoiceScreen from './components/ChoiceScreen';
import Quiz from './components/Quiz';
import Result from './components/Result';
import MainSite from './components/MainSite';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.CHOICE);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);

  // Scroll to top on state change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appState]);

  const handleStartQuiz = () => setAppState(AppState.QUIZ);
  const handleGoToSite = () => setAppState(AppState.SITE);
  const handleFinishQuiz = (answers: QuizAnswer[]) => {
    setQuizAnswers(answers);
    setAppState(AppState.RESULT);
  };

  return (
    <div className="min-h-screen bg-luxury overflow-x-hidden">
      {appState === AppState.CHOICE && (
        <ChoiceScreen onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}
      {appState === AppState.QUIZ && (
        <Quiz onFinish={handleFinishQuiz} onSkip={handleGoToSite} />
      )}
      {appState === AppState.RESULT && (
        <Result answers={quizAnswers} onGoToSite={handleGoToSite} />
      )}
      {appState === AppState.SITE && (
        <MainSite />
      )}
    </div>
  );
};

export default App;
