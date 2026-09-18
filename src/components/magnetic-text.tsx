"use client";
import { useEffect, useRef, useState } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    // Direct DOM manipulation for maximum performance and foolproof rendering
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const letters = containerRef.current.children;
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i] as HTMLSpanElement;
        const rect = letter.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from cursor center to letter center
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        
        // If within cursor radius (approx 40px to cover the 32px radius + letter bounds), turn White
        if (dist < 40) {
          letter.style.color = "#ffffff";
        } else {
          letter.style.color = "#A855F7";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fallback for mobile or non-string children
  if (typeof children !== "string" || !isDesktop) {
    return <span className={`text-[#A855F7] ${className}`}>{children}</span>;
  }

  // Render each character as an individual span to be manipulated
  return (
    <span ref={containerRef} className={`inline-flex ${className}`}>
      {children.split("").map((char, i) => (
        <span 
          key={i} 
          className="transition-colors duration-150 text-[#A855F7]"
          style={{ whiteSpace: 'pre' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
