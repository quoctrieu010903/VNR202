// src/components/QuizPage.tsx
import React from "react";
import "./QuizPage.css"; // Chúng ta sẽ tạo file CSS này ngay sau đây

const QuizPage: React.FC = () => {
  return (
    <div className="quiz-page-container">
      <iframe
        src="/quiz.html" // Trỏ tới file trong thư mục /public
        className="quiz-iframe"
        title="Quiz Hành Trình Ra Đời Của Đảng"
      />
    </div>
  );
};

export default QuizPage;
