import { useState, useRef } from "react";
import type { QuizState } from "../types/Question";
import { useAudio } from "../hooks/useAudio";
import { QUESTIONS } from "../constants/questions";
import { startConfetti } from "../ultils/confetti";
import { StartScreen } from "./StartScreen";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { ExplanationModal } from "./ExplanationModal";
import { FinalScore } from "./FinalScore";

export default function QuestionStart() {
  const [gameState, setGameState] = useState<"start" | "playing" | "finished">(
    "start"
  );
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    isMuted: false,
  });
  const [showModal, setShowModal] = useState(false);
  const backgroundMusicRef = useRef<HTMLAudioElement>(null);
  const { playSound, isMuted, setIsMuted } = useAudio();

  const handleStart = async () => {
    setGameState("playing");
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = 0.5;
      try {
        await backgroundMusicRef.current.play();
      } catch (e) {
        console.error("Lỗi phát nhạc nền:", e);
      }
    }
  };

  /* ====================================
     SỬA LỖI LOGIC CHÍNH LÀ Ở ĐÂY
     ==================================== */
  const handleAnswer = (selectedIndex: number) => {
    const currentQ = QUESTIONS[quizState.currentQuestion];
    if (!currentQ) return;

    const isCorrect = selectedIndex === currentQ.correct;

    if (isCorrect) {
      // 1. Trả lời ĐÚNG
      playSound("correct");
      setQuizState((p) => ({ ...p, score: p.score + 1 }));

      // 2. CHỈ HIỆN MODAL KHI TRẢ LỜI ĐÚNG
      setShowModal(true);
    } else {
      // 1. Trả lời SAI
      playSound("incorrect");

      // 2. KHÔNG HIỆN MODAL, TỰ ĐỘNG CHUYỂN CÂU TIẾP THEO
      handleNext();
    }

    // Đã XÓA 'setShowModal(true);' ở đây
  };
  /* ====================================
     HẾT PHẦN SỬA
     ==================================== */

  const handleNext = () => {
    setShowModal(false); // Dòng này vẫn OK, nó sẽ ẩn modal (nếu đang hiện)
    if (quizState.currentQuestion < QUESTIONS.length - 1) {
      setQuizState((p) => ({ ...p, currentQuestion: p.currentQuestion + 1 }));
    } else {
      setGameState("finished");
      startConfetti();
    }
  };

  const handleRestart = () => {
    setGameState("start");
    setQuizState({ currentQuestion: 0, score: 0, isMuted: false });
  };

  const toggleMute = () => {
    if (backgroundMusicRef.current) {
      const next = !isMuted;
      backgroundMusicRef.current.muted = next;
      setIsMuted(next);
    }
  };

  if (QUESTIONS.length === 0) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        LỖI: Mảng QUESTIONS đang bị rỗng. Vui lòng kiểm tra file
        'constants/questions.ts' và đảm bảo bạn đã LƯU (Save) file.
      </div>
    );
  }

  const currentQuestion = QUESTIONS[quizState.currentQuestion];
  console.log("Current Question:", currentQuestion);
  const progress =
    QUESTIONS.length > 0
      ? ((quizState.currentQuestion + 1) / QUESTIONS.length) * 100
      : 0;

  console.log("Progress:", progress);
  console.log("Quiz State:", quizState);
  console.log("Game State:", gameState);
  return (
    <section id="questions" className="quiz-app-wrapper">
      <div className="quiz-app-wrapper">
        <audio
          ref={backgroundMusicRef}
          src="/src/assets/chao-mung-dang.mp3"
          loop
        />
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? "🔈" : "🔊"}
        </button>

        {gameState === "start" && <StartScreen onStart={handleStart} />}

        {gameState === "playing" && (
          <div className="quiz-container">
            {!currentQuestion ? (
              <div style={{ padding: "20px" }}>
                <p>Lỗi: Không tìm thấy câu hỏi.</p>
                <p>
                  Có thể bạn đã trả lời hết? Đang ở index:{" "}
                  {quizState.currentQuestion}
                </p>
              </div>
            ) : (
              <>
                <ProgressBar progress={progress} />
                <QuestionCard
                  question={currentQuestion}
                  questionNumber={quizState.currentQuestion + 1}
                  totalQuestions={QUESTIONS.length}
                  onAnswer={handleAnswer}
                />
                <ExplanationModal
                  isVisible={showModal}
                  imageUrl={currentQuestion.explain_image}
                  explanation={currentQuestion.explain}
                  isLastQuestion={
                    quizState.currentQuestion === QUESTIONS.length - 1
                  }
                  onNext={handleNext}
                />
              </>
            )}
          </div>
        )}

        {gameState === "finished" && (
          <FinalScore
            score={quizState.score}
            totalQuestions={QUESTIONS.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </section>
  );
}
