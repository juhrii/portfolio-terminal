"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 32);
      cursorY.set(e.clientY - 32);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[64px] h-[64px] rounded-full pointer-events-none z-[10000] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
        backgroundColor: "#ffffff"
      }}
    />
  );
}
