// src/components/KhungHoangSection.tsx

import React from "react";
// Giữ nguyên import motion và Variants
import { motion } from "framer-motion";
import "./KhungHoangSection.css"; // Dùng CSS đã đặt tên

// Loại bỏ hằng số containerVariants không dùng tới.

export const KhungHoangSection: React.FC = () => {
  return (
    // Sử dụng ID cho Navigation
    <section id="section-2" className="boicanh-container">
      <div className="boicanh-content">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CUỘC KHỦNG HOẢNG VỀ ĐƯỜNG LỐI CỨU NƯỚC
        </motion.h2>
        {/* Đoạn mô tả 1 */}
        <motion.p
          className="boicanh-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cuối những năm 1920, các phong trào yêu nước theo khuynh hướng dân chủ
          tư sản hoặc tiểu tư sản đều lần lượt thất bại. Cách mạng Việt Nam rơi
          vào tình trạng "đen tối như không có đường ra".
        </motion.p>
        {/* --- PHẦN SO SÁNH XU HƯỚNG TƯ SẢN --- */}
        <h5 className="xu-huong-title">
          Các phong trào yêu nước tiêu biểu trước khi có Đảng
        </h5>
        <div className="xu-huong-container">
          {/* Cột 1: Cải cách (Trái) */}
          <motion.div
            className="xu-huong-col"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Xu hướng cải cách</h3>
            <img
              src="/images/phan-chau-trinh.jpg"
              alt="Phan Châu Trinh"
              className="xu-huong-image"
            />
            <h4>Phan Châu Trinh</h4>
            <p>"Bất bạo động, bạo động tắc tử"</p>
            <p>"Khai dân trí, chấn dân khí, hậu dân sinh"</p>
          </motion.div>
          {/* Vòng tròn ở giữa */}
          <motion.div
            className="xu-huong-trungtam"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trào lưu <br />
            dân chủ <br /> tư sản
          </motion.div>
          {/* Cột 2: Bạo động (Phải) */}
          <motion.div
            className="xu-huong-col"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Xu hướng bạo động</h3>
            <img
              src="/images/phan-boi-chau.jpg"
              alt="Phan Bội Châu"
              className="xu-huong-image"
            />
            <h4>Phan Bội Châu</h4>
            <p>Phong trào Đông Du</p>
            <p>Việt Nam Quang phục Hội</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
