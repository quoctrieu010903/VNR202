// src/components/MainPage.tsx
// File này gom tất cả các section của trang chủ lại
import React from "react";
// Đã xóa 'Link' vì nó không được dùng trong file này

// Import các component (với dấu { } vì là named export)
// Sửa lỗi: Quay lại sử dụng đường dẫn import chuẩn (không có đuôi file .tsx)
// Môi trường Vite của bạn sẽ tự động tìm file .tsx
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { KhungHoangSection } from "./KhungHoangSection";
import { HopNhatSection } from "./HopNhatSection";
import { HoiNghiSection } from "./HoiNghiSection";
import { YnghiaSection } from "./YnghiaSection";
import { ReadingProgressBar } from "./ReadingProgressBar";

const MainPage: React.FC = () => {
  return (
    <>
      {/* Đặt Navigation và Footer ở đây để chúng chỉ xuất hiện ở trang chủ */}
      <Navigation />

      <ReadingProgressBar />

      <main>
        <HeroSection />
        <KhungHoangSection />
        <HopNhatSection />
        <HoiNghiSection />
        <YnghiaSection />
      </main>

      <Footer />
    </>
  );
};

// Đây là default export, nên App.tsx có thể import không cần {}
export default MainPage;
