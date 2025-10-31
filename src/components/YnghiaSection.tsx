// src/components/YnghiaSection.tsx

import React, { useRef } from "react"; // THAY ĐỔI: Thêm useRef
import "./YnghiaSection.css";
// Giữ nguyên import Variants và thêm useInView
import { motion, type Variants, useInView } from "framer-motion";

const yNghiaData = [
  {
    icon: "🧩",
    title: "Chấm dứt khủng hoảng lãnh đạo",
    description:
      "Việc thống nhất các tổ chức cộng sản đã chấm dứt tình trạng chia rẽ, phân tán, và khủng hoảng đường lối cứu nước kéo dài suốt thế kỷ 19 và đầu thế kỷ 20.",
  },
  {
    icon: "🧭",
    title: "Vạch ra con đường đúng đắn",
    description:
      "Cương lĩnh chính trị đầu tiên đã xác định con đường cách mạng vô sản: độc lập dân tộc gắn liền với chủ nghĩa xã hội. Đây là kim chỉ nam cho mọi hành động sau này.",
  },
  {
    icon: "⭐",
    title: "Bước ngoặt vĩ đại",
    description:
      "Đảng Cộng sản Việt Nam ra đời đã đánh dấu bước ngoặt căn bản trong lịch sử dân tộc, chấm dứt thời kỳ mò mẫm, tìm đường và mở ra kỷ nguyên mới.",
  },
  {
    icon: "✊",
    title: "Lực lượng lãnh đạo thống nhất",
    description:
      "Cách mạng Việt Nam có một đội tiên phong duy nhất, chặt chẽ, có đủ năng lực và uy tín để lãnh đạo toàn dân tộc đi tới thắng lợi, đỉnh cao là Cách mạng tháng Tám 1945.",
  },
];

// Khai báo rõ ràng kiểu Variants cho staggerContainer
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Khai báo rõ ràng kiểu Variants cho cardVariants
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// ----------------------------------------------------------------
// Component con cho Dòng thời gian
// ----------------------------------------------------------------

interface TimelineItemProps {
  year: string;
  event: string;
  delay: number;
  isHighlight?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  event,
  delay,
  isHighlight,
  isStart,
  isEnd,
}) => (
  <motion.div
    className={`timeline-item ${isHighlight ? "highlight" : ""} ${
      isStart ? "start" : ""
    } ${isEnd ? "end" : ""}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <p className="timeline-year">{year}</p>
      <p className="timeline-event">{event}</p>
    </div>
  </motion.div>
);

// ----------------------------------------------------------------
// Component chính
// ----------------------------------------------------------------

export const YnghiaSection: React.FC = () => {
  // THAY ĐỔI: Khai báo Ref và useInView
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.5 }); // Kiểm tra khi 50% element trong view

  return (
    <section id="section-4" className="ynghia-container">
      <div className="ynghia-content">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ý NGHĨA LỊCH SỬ: NỀN TẢNG CỦA MỌI THẮNG LỢI
        </motion.h2>

        {/* --- KHU VỰC 4 Ý NGHĨA (Animations Hover đã được thêm vào CSS) --- */}
        <motion.div
          className="ynghia-cards-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {yNghiaData.map((item, index) => (
            <motion.div
              key={index}
              className="ynghia-card"
              variants={cardVariants}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- DÒNG THỜI GIAN (Timeline) --- */}
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HÀNH TRÌNH TỪ MÙA XUÂN 1930
        </motion.h2>

        {/* THAY ĐỔI: Thêm ref và class động để kích hoạt hiệu ứng vẽ (CSS) */}
        <div
          ref={timelineRef}
          className={`timeline-wrapper ${isTimelineInView ? "in-view" : ""}`}
        >
          <TimelineItem
            year="1930"
            event="Thành lập Đảng"
            delay={0.3}
            isStart={true}
          />
          <TimelineItem
            year="1930-1931"
            event="Cao trào Xô Viết Nghệ Tĩnh"
            delay={0.5}
          />
          <TimelineItem
            year="1945"
            event="Cách mạng tháng Tám thắng lợi"
            delay={0.7}
            isHighlight={true}
          />
          <TimelineItem
            year="1954"
            event="Chiến thắng Điện Biên Phủ"
            delay={0.9}
          />
          <TimelineItem
            year="1975"
            event="Giải phóng miền Nam, Thống nhất đất nước"
            delay={1.1}
            isEnd={true}
            isHighlight={true}
          />
        </div>
      </div>
    </section>
  );
};
