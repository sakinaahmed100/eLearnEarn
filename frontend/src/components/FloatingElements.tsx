import React from 'react';
import { motion } from 'framer-motion';
import "../styles/FloatingElements.css"

const FloatingElements: React.FC = () => {
  const floatingVariants = {
    float: {
      y: ["0%", "5%", "-5%", "0%"], // Subtle Y-axis movement
      x: ["0%", "3%", "-3%", "0%"], // Subtle X-axis movement
      transition: {
        duration: 8, // Longer duration for more subtle movement
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Array of symbols relevant to coding
  const symbols = ['<', '>', '/', '\\', '{', '}', '[', ']', '&', '|', ':', '=', '*', '+', '-', '_', '~', '`'];

  return (
    <div className="floating-container">
      {/* More densely populated floating coding symbols */}
      {[...Array(30)].map((_, index) => (
        <motion.div
          key={index}
          className="floating-symbol"
          variants={floatingVariants}
          animate="float"
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal positions
            top: `${Math.random() * 100}%`, // Random vertical positions
            fontSize: `${Math.random() * 24 + 12}px`, // Random font size between 12px and 36px
            color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`, // Slightly random opacity for variety
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
