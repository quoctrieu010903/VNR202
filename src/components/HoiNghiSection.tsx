// src/components/HoiNghiSection.tsx

import React from "react";
import "./HoiNghiSection.css";
import { motion } from "framer-motion";

export const HoiNghiSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Các mục sẽ xuất hiện lần lượt
        delayChildren: 0.5,
      },
    },
  };

  return (
    <section id="section-3" className="hoinghi-container">
      <div className="hoinghi-content">
        {/* --- KHU VỰC CHÍNH: HỘI NGHỊ THỐNG NHẤT --- */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          HỘI NGHỊ THÀNH LẬP ĐẢNG: ÁNH SÁNG XUẤT HIỆN
        </motion.h2>

        <motion.div
          className="nguyen-ai-quoc-intro"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src="/images/nguyen-ai-quoc-profile.jpg"
            alt="Nguyễn Ái Quốc"
            className="naq-image"
          />
          <div className="naq-text">
            <p className="naq-quote">
              "Tình hình đòi hỏi phải có một Đảng duy nhất lãnh đạo, để thống
              nhất lực lượng của toàn thể giai cấp vô sản Đông Dương."
            </p>
            <p className="naq-role">
              — Nguyễn Ái Quốc, Phái viên Quốc tế Cộng sản.
            </p>
          </div>
        </motion.div>

        <div className="tong-quan-box">
          <p>
            Trước nguy cơ tan rã của phong trào cộng sản, Nguyễn Ái Quốc với tư
            cách là Phái viên của Quốc tế Cộng sản, đã triệu tập đại biểu các tổ
            chức về Cửu Long (Hương Cảng, Trung Quốc)để giải quyết mâu thuẫn.
          </p>
          <div className="thong-tin-chinh">
            <motion.div variants={itemVariants} className="info-card">
              <div className="info-image">
                <img src="/images/hoi-nghi.jpg" alt="Hội nghị thành lập Đảng" />
              </div>
              <div className="info-content">
                <h4>Thời gian:</h4>
                <p>06/01 - 07/02/1930</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="info-card">
              <div className="info-image">
                <img src="/images/huong-cang.jpg" alt="Hương Cảng" />
              </div>
              <div className="info-content">
                <h4>Địa điểm:</h4>
                <p>Cửu Long (Hương Cảng, Trung Quốc)</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="info-card">
              <div className="info-image">
                <img
                  src="/images/dang-cong-san.jpg"
                  alt="Đảng Cộng sản Việt Nam"
                />
              </div>
              <div className="info-content">
                <h4>Kết quả:</h4>
                <p>
                  Thống nhất các tổ chức cộng sản thành một Đảng duy nhất, lấy
                  tên là Đảng Cộng sản Việt Nam.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- KHU VỰC CƯƠNG LĨNH VẮN TẮT (NỘI DUNG) --- */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Cương lĩnh chính trị đầu tiên: Đường lối đúng đắn
        </motion.h3>

        <motion.div
          className="cuonglinh-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mục tiêu Chiến lược */}
          <motion.div className="cuonglinh-card" variants={itemVariants}>
            <div className="cuonglinh-icon">🚩</div>
            <h4>Mục tiêu chiến lược (Cơ bản)</h4>
            <p>
              Đánh đổ đế quốc Pháp và phong kiến, làm cho nước Nam được hoàn
              toàn **độc lập**, lập chính phủ công nông binh.
            </p>
          </motion.div>

          {/* Nhiệm vụ Sách lược */}
          <motion.div className="cuonglinh-card" variants={itemVariants}>
            <div className="cuonglinh-icon">🔨</div>
            <h4>Nhiệm vụ hàng đầu (Sách lược)</h4>
            <p>
              Thâu hết ruộng đất của đế quốc và địa chủ phản cách mạng chia cho
              dân cày nghèo. Tổ chức quân đội công nông.
            </p>
          </motion.div>

          {/* Lực lượng Lãnh đạo */}
          <motion.div className="cuonglinh-card" variants={itemVariants}>
            <div className="cuonglinh-icon">⭐</div>
            <h4>Lực lượng lãnh đạo</h4>
            <p>
              Đảng là đội tiên phong của giai cấp vô sản, phải thu phục đại đa
              số dân cày, liên lạc với các dân tộc bị áp bức và vô sản thế giới.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
