
export enum AppState {
  CHOICE = 'CHOICE',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULT = 'RESULT',
  SITE = 'SITE'
}

export interface QuizAnswer {
  question: string;
  answer: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}
