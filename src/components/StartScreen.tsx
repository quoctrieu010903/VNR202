import React from "react";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="container">
      <div className="flag-symbol" />
      <h1 className="main-title">HÀNH TRÌNH RA ĐỜI CỦA ĐẢNG</h1>
      <p className="subtitle">
        Khám phá Hội nghị thành lập Đảng Cộng sản Việt Nam năm 1930 qua 10 câu
        hỏi thú vị!
      </p>
      <button className="start-button" onClick={onStart}>
        Bắt đầu trò chơi
      </button>
    </div>
  );
};
