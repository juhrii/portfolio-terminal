"use client";
import { useEffect, useRef, useState } from "react";

export function MagneticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  // Reverted to a simple span to ensure a uniform, glitch-free mix-blend-difference effect (Green)
  // as requested by the user to avoid "selang seling" (alternating) glitches.
  return (
    <span className={`text-[#A855F7] ${className}`}>
      {children}
    </span>
  );
}
