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
        // Use Circle-Rectangle intersection to handle massive font sizes correctly
        const closestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const closestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
        
        const distanceX = e.clientX - closestX;
        const distanceY = e.clientY - closestY;
        const distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
        
        // Cursor radius is 32px. We use 40px (1600 squared) for a slight margin so it snaps right before touching
        if (distanceSquared < 1600) {
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
          className="text-[#A855F7]"
          style={{ whiteSpace: 'pre' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
