"use client";
import { useEffect, useRef, useState } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) return;

    // Use a direct mousemove listener to track local coordinates
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        
        // Update state directly for the clip-path
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Base Layer: Normal Purple Text */}
      <span className="text-[#A855F7]">
        {children}
      </span>

      {/* Top Layer: White Text masked by a circle following the mouse */}
      <span 
        className="absolute inset-0 text-white pointer-events-none"
        aria-hidden="true"
        style={{
          clipPath: `circle(32px at ${mousePos.x}px ${mousePos.y}px)`,
          WebkitClipPath: `circle(32px at ${mousePos.x}px ${mousePos.y}px)`
        }}
      >
        {children}
      </span>
    </span>
  );
}
