"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
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
      
      // Interactive elements or text elements will trigger the enlarged glowing state
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('h1') || 
        target.closest('h2') || 
        target.closest('h3') || 
        target.closest('p')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
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
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] mix-blend-screen"
      animate={{
        x: mousePosition.x - (isHovering ? 40 : 12),
        y: mousePosition.y - (isHovering ? 40 : 12),
        width: isHovering ? 80 : 24,
        height: isHovering ? 80 : 24,
        opacity: isVisible ? 1 : 0,
        backgroundColor: "#A855F7",
        boxShadow: isHovering ? "0 0 40px 10px rgba(168, 85, 247, 0.6)" : "0 0 15px 5px rgba(168, 85, 247, 0.4)",
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
}
