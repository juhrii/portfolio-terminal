"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[64px] h-[64px] rounded-full pointer-events-none z-[10000] backdrop-invert backdrop-hue-rotate-180"
      animate={{
        x: mousePosition.x - 32,
        y: mousePosition.y - 32,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        backgroundColor: "transparent",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    />
  );
}
