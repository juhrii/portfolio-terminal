"use client";
import { useEffect, useRef } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) return;

    let animationFrameId: number;

    const updateGradient = () => {
      if (textRef.current) {
        let cursorX = (window as any).__cursorX;
        let cursorY = (window as any).__cursorY;
        
        // Fallback if cursor hasn't moved yet
        if (cursorX === undefined || cursorY === undefined) {
          cursorX = -1000;
          cursorY = -1000;
        }
        
        const rect = textRef.current.getBoundingClientRect();
        
        // Math.round to prevent subpixel decimal parsing errors in older WebKit engines
        const localX = Math.round(cursorX - rect.left);
        const localY = Math.round(cursorY - rect.top);
        
        textRef.current.style.backgroundImage = `radial-gradient(circle 32px at ${localX}px ${localY}px, #ffffff 32px, #A855F7 33px)`;
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
        backgroundImage: `radial-gradient(circle 32px at -1000px -1000px, #ffffff 32px, #A855F7 33px)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}
