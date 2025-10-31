// src/components/Footer.tsx

import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Đảng Cộng sản Việt Nam</h3>
          <p className="footer-quote">
            "Đoàn kết là sức mạnh. Đoàn kết là thắng lợi."
            <br />— Chủ tịch Hồ Chí Minh
          </p>
        </div>

        <div className="footer-nav">
          <h4>Sự kiện tiêu biểu</h4>
          <ul>
            <li>Cách mạng Tháng Tám 1945</li>
            <li>Chiến thắng Điện Biên Phủ 1954</li>
            <li>Giải phóng miền Nam 1975</li>
          </ul>
        </div>

        <div className="footer-info">
          <h4>Thông tin dự án</h4>
          <p>
            Sản phẩm thiết kế từ dự án Hành trình ra đời của Đảng Cộng Sản Việt
            Nam{" "}
          </p>
          <p>Nguồn tư liệu: Lịch sử Đảng Cộng sản Việt Nam, Báo Nhân Dân.</p>
          <p className="copyright">&copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
