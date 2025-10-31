// src/App.tsx

import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage"; // Trang chủ (trang cuộn)
import QuizPage from "./components/QuizPage"; // Trang Quiz mới
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* App.tsx chỉ định tuyến.
        - Khi người dùng vào "/", nó sẽ tải <MainPage />
        - Khi người dùng vào "/quiz", nó sẽ tải <QuizPage />
      */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
