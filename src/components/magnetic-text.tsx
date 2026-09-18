"use client";
import { useEffect, useRef, useState } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <span
      ref={textRef}
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle 32px at ${mousePos.x}px ${mousePos.y}px, #ffffff 32px, #A855F7 34px)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}
