"use client";
import { useEffect, useRef } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) return;

    let animationFrameId: number;

    const updateGradient = () => {
      if (textRef.current) {
        // Read the exact spring coordinates set by CustomCursor
        const cursorXStr = document.documentElement.style.getPropertyValue('--cursor-x');
        const cursorYStr = document.documentElement.style.getPropertyValue('--cursor-y');
        
        const cursorX = cursorXStr ? parseFloat(cursorXStr) : -1000;
        const cursorY = cursorYStr ? parseFloat(cursorYStr) : -1000;
        
        // Calculate local element coordinates manually to avoid CSS calc() compatibility issues
        const rect = textRef.current.getBoundingClientRect();
        const localX = cursorX - rect.left;
        const localY = cursorY - rect.top;
        
        // Directly apply the computed values
        textRef.current.style.backgroundImage = `radial-gradient(circle 32px at ${localX}px ${localY}px, #ffffff 32px, #A855F7 34px)`;
      }
      
      animationFrameId = requestAnimationFrame(updateGradient);
    };

    updateGradient();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle 32px at -1000px -1000px, #ffffff 32px, #A855F7 34px)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}
