"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring configuration for the cursor
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a touch device / mobile
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    // Subscribe to spring changes to update global CSS variables for MagneticText
    const unsubscribeX = cursorXSpring.on("change", (latestX) => {
      document.documentElement.style.setProperty('--cursor-x', `${latestX + 32}px`);
    });
    const unsubscribeY = cursorYSpring.on("change", (latestY) => {
      document.documentElement.style.setProperty('--cursor-y', `${latestY + 32}px`);
    });

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
      unsubscribeX();
      unsubscribeY();
    };
  }, [isVisible, cursorX, cursorY, cursorXSpring, cursorYSpring]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[64px] h-[64px] rounded-full pointer-events-none z-[10000] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        backgroundColor: "#ffffff"
      }}
    />
  );
}
