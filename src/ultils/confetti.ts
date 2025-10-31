import { CONFETTI_COLORS } from "../constants/questions";


export const startConfetti = () => {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.height = `${Math.random() * 10 + 10}px`;
    confetti.style.width = `${Math.random() * 5 + 5}px`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 3500);
  }
};