import React from "react";
import "./Question.css";
interface ExplanationModalProps {
  isVisible: boolean;
  imageUrl: string;
  explanation: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({
  isVisible,
  imageUrl,
  explanation,
  isLastQuestion,
  onNext,
}) => {
  return (
    <div className={`modal-backdrop ${isVisible ? "visible" : ""}`}>
      <div className="modal-content">
        <img src={imageUrl} alt="Hình ảnh giải thích" />
        <p>👉 Giải thích: {explanation}</p>
        <button className="start-button" onClick={onNext}>
          {isLastQuestion ? "Xem kết quả 🎖️" : "Câu tiếp theo →"}
        </button>
      </div>
    </div>
  );
};
