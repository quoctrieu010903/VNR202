// src/App.tsx

import "./App.css";
import { Navigation } from "./components/Navigation";
import { ReadingProgressBar } from "./components/ReadingProgressBar";
import { HeroSection } from "./components/HeroSection";
import { KhungHoangSection } from "./components/KhungHoangSection"; // Component mới 1
import { HopNhatSection } from "./components/HopNhatSection"; // Component mới 2
import { HoiNghiSection } from "./components/HoiNghiSection";
import { YnghiaSection } from "./components/YnghiaSection";
import { Footer } from "./components/Footer";
import QuestionStart from "./components/QuestionStart";

function App() {
  return (
    <>
      <ReadingProgressBar />
      <Navigation />

      <main>
        <HeroSection />
        {/* THỨ TỰ MỚI: Tách Bối cảnh ra làm 2 phần */}
        <KhungHoangSection /> {/* Thất bại các phong trào tư sản */}
        <HopNhatSection /> {/* Chia rẽ 3 tổ chức cộng sản */}
        <HoiNghiSection />
        <YnghiaSection />
        {/* <QuestionStart/> */}
        <QuestionStart />
      </main>

      <Footer />
    </>
  );
}

export default App;
