// src/components/Navigation.tsx

import React, { useState, useEffect } from "react";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Thêm hiệu ứng thay đổi nền khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navigation-bar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <a href="#section-1" onClick={() => handleClickScroll("section-1")}>
          ĐCSVN
          <span className="logo-year"> 1930</span>
        </a>
      </div>
      <ul className="nav-links">
        {/* THAY ĐỔI: Đổi tên và trỏ link Bối cảnh tới phần Khủng hoảng (section-2) */}
        <li>
          <a onClick={() => handleClickScroll("section-2")}>Khủng Hoảng</a>
        </li>
        {/* THÊM: Link trực tiếp đến phần Chia rẽ/Hợp nhất */}
        <li>
          {" "}
          <a onClick={() => handleClickScroll("section-2-1")}>Chia Rẽ</a>
        </li>
        <li>
          <a onClick={() => handleClickScroll("section-3")}>Hội Nghị 1930</a>
        </li>
        <li>
          <a onClick={() => handleClickScroll("section-4")}>Ý Nghĩa</a>
        </li>
      </ul>
    </nav>
  );
};
