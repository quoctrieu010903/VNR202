import React from "react";

interface FinalScoreProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const FinalScore: React.FC<FinalScoreProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  return (
    <div className="final-score-container">
      <h2>🎖️ Chúc mừng bạn đã hoàn thành!</h2>
      <p>
        Bạn đã hoàn thành Hành trình ra đời của Đảng với điểm số:
        <span className="score">
          {score} / {totalQuestions}
        </span>
      </p>
      <p>Cảm ơn bạn đã tìm hiểu về lịch sử vẻ vang của Đảng!</p>
      <button className="start-button" onClick={onRestart}>
        Chơi lại
      </button>
    </div>
  );
};
