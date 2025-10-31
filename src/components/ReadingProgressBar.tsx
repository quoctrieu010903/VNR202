// src/components/ReadingProgressBar.tsx

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ReadingProgressBar.css"; // Đảm bảo CSS file này tồn tại

export const ReadingProgressBar: React.FC = () => {
  // Lấy tiến trình cuộn (0 đến 1)
  const { scrollYProgress } = useScroll();

  // Chuyển đổi tiến trình cuộn thành giá trị mượt mà hơn
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX }} // Dùng scaleX để điều khiển chiều rộng
    />
  );
};
