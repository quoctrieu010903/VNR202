// src/components/HopNhatSection.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";
import "./HopNhatSection.css"; // Sẽ tạo CSS mới, hoặc dùng lại BoiCanh.css

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const HopNhatSection: React.FC = () => {
  return (
    <section id="section-2-1" className="hopnhat-container">
      <div className="hopnhat-content">
        <motion.p
          className="hopnhat-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Sau khi các phong trào tư sản thất bại, chủ nghĩa Mác-Lênin bắt đầu du
          nhập. Tuy nhiên, nội bộ phong trào cộng sản lại rơi vào tình trạng
          chia rẽ sâu sắc:
        </motion.p>

        {/* --- KHU VỰC 3 TỔ CHỨC CỘNG SẢN --- */}
        <motion.div
          className="tochuc-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="tochuc-card" variants={cardVariants}>
            <img
              src="/images/symbol-1.png"
              alt="Đông Dương Cộng sản Đảng"
              className="card-image"
            />
            <div className="card-content">
              <h4>Đông Dương Cộng sản Đảng</h4>
              <span>(Thành lập 6/1929)</span>
            </div>
          </motion.div>
          <motion.div className="tochuc-card" variants={cardVariants}>
            <img
              src="/images/symbol-2.png"
              alt="An Nam Cộng sản Đảng"
              className="card-image"
            />
            <div className="card-content">
              <h4>An Nam Cộng sản Đảng</h4>
              <span>(Thành lập 8/1929)</span>
            </div>
          </motion.div>
          <motion.div className="tochuc-card" variants={cardVariants}>
            <img
              src="/images/symbol-3.png"
              alt="Đông Dương Cộng sản Liên đoàn"
              className="card-image"
            />
            <div className="card-content">
              <h4>Đông Dương Cộng sản Liên đoàn</h4>
              <span>(Thành lập 9/1929)</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="hopnhat-description-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Sự chia rẽ này làm giảm sút sức mạnh và lòng tin của quần chúng. **Yêu
          cầu cấp bách lúc này là phải có một Đảng thống nhất** để dẫn dắt cách
          mạng.
        </motion.p>
      </div>
    </section>
  );
};
