export interface Question {
    question: string;
    answers: string[];
    correct: number;
    explain: string;
    explain_image: string;
  }
  
  export interface QuizState {
    currentQuestion: number;
    score: number;
    isMuted: boolean;
  }