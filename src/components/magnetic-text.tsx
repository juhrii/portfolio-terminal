"use client";
import { useEffect, useRef } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) return;

    const updateRect = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        textRef.current.style.setProperty('--elem-left', `${rect.left}px`);
        textRef.current.style.setProperty('--elem-top', `${rect.top}px`);
      }
    };
    
    // Initial calculation
    updateRect();
    
    // Delay one frame to ensure layout is completely settled
    requestAnimationFrame(updateRect);
    
    // Recalculate on scroll or resize
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className={`inline-block ${className}`}
      style={{
        // The gradient coordinates dynamically use the global spring cursor position minus the element's position on screen
        backgroundImage: `radial-gradient(circle 32px at calc(var(--cursor-x, -1000px) - var(--elem-left, 0px)) calc(var(--cursor-y, -1000px) - var(--elem-top, 0px)), #ffffff 32px, #A855F7 34px)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}
