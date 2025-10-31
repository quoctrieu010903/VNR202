import React from "react";
import type { Question } from "../types/Question";
// Import file CSS (tên file phải khớp)
import "./Question.css";
interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  console.log("Rendering QuestionCard:", { questionNumber, question });
  console.log("Question data:", question.question, question.answers);
  return (
    <div className="question-header">
      <div className="question-counter">
        {" "}
        {/* Đã có CSS */}
        Câu {questionNumber} / {totalQuestions}
      </div>
      <div className="question-text">{question.question}</div> {/* Đã có CSS */}
      <div className="answers-grid">
        {" "}
        {/* Đã có CSS */}
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button" /* Đã có CSS */
            onClick={() => onAnswer(index)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
