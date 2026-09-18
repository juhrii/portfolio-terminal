"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a touch device / mobile
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements (links, buttons)
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setIsTextHover(false);
      } 
      // Check for large text elements to trigger the text-inversion effect
      else if (target.closest('h1') || target.closest('h2') || target.closest('h3') || target.closest('p')) {
        setIsHovering(false);
        setIsTextHover(true);
      } 
      // Default state
      else {
        setIsHovering(false);
        setIsTextHover(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Inner Dot / Text Inverter */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isTextHover ? 40 : 4),
          y: mousePosition.y - (isTextHover ? 40 : 4),
          width: isTextHover ? 80 : 8,
          height: isTextHover ? 80 : 8,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isTextHover ? "#ffffff" : "#A855F7",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Outer Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#A855F7]/50 rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-transparent"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : (isTextHover ? 0 : 1),
          opacity: isVisible ? (isTextHover ? 0 : 1) : 0,
          backgroundColor: isHovering ? "rgba(168, 85, 247, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
