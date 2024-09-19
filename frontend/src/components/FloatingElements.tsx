import React from 'react';
import { motion } from 'framer-motion';
import "../styles/FloatingElements.css";

// Import your custom-designed symbol images
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import greaterThan from '../assets/greaterThan.svg';
import lessThan from '../assets/lessThan.svg';
import leftRound from "../assets/leftRound.svg"
import rightRound from "../assets/rightRound.svg"
import rightSquare from "../assets/rightSquare.svg"
import leftSquare from "../assets/leftSquare.svg"
// Continue importing other SVGs...

const FloatingElements: React.FC = () => {
  const floatingVariants = {
    float: {
      y: ["0%", "10%", "-10%", "0%"],
      x: ["0%", "5%", "-5%", "0%"],
      // Adding Z motion to create depth effect
      scale: [1, 1.2, 1, 0.8, 1], 
      rotate: [0, 10, -10, 0], // Adding rotation to simulate 3D movement
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Array of imported images for your symbols
  const symbols = [plus, minus, greaterThan, lessThan,leftRound,rightRound,leftSquare,rightSquare/* ...other symbols */];

  return (
    <div className="floating-container">
      {[...Array(30)].map((_, index) => (
        <motion.img
          key={index}
          src={symbols[Math.floor(Math.random() * symbols.length-2)]}
          className="floating-symbol"
          variants={floatingVariants}
          animate="float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 30}px`, // Adjust size for variety
            opacity: Math.random() * 0.5 + 0.3,
            transform: `translateZ(${Math.random() * 100 - 50}px)`, // Random Z-axis positioning
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
