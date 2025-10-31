// src/components/HeroSection.tsx

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Import thêm useScroll, useTransform
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll(); // Lấy giá trị cuộn Y của cửa sổ

  // Ảnh nền: Mờ dần từ 1.0 (rõ) về 0.2 (mờ) khi cuộn
  const opacityImage = useTransform(scrollY, [0, 500], [1, 0.2]);
  // Tiêu đề: Trượt lên từ 0 (vị trí ban đầu) lên 300px khi cuộn
  const yContent = useTransform(scrollY, [0, 500], [0, 300]);
  // Nội dung: Mờ dần từ 1.0 (rõ) về 0 (biến mất) khi cuộn
  const opacityContent = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="section-1" className="hero-container">
      {/* Ảnh nền có hiệu ứng mờ (opacityImage) */}
      <motion.div
        style={{ opacity: opacityImage }}
        className="hero-background-overlay"
      ></motion.div>

      {/* Nội dung có hiệu ứng trượt lên và mờ dần */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="hero-content"
      >
        <h1>BƯỚC NGOẶT VĨ ĐẠI</h1>
        <h2>Hội nghị thành lập Đảng Cộng sản Việt Nam (3/2/1930)</h2>
        <a href="#section-2" className="hero-cta-button">
          Tìm hiểu ngay
        </a>
      </motion.div>
    </section>
  );
};
