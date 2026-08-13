"use client";

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-panel px-6 py-4 flex justify-between items-center rounded-2xl animate-fade-in-scale">
      
      {/* Left Links */}
      <div className="hidden md:flex flex-1 justify-start gap-8 text-sm font-medium text-gray-300">
        <Link href="/#about" className="hover:text-[#D4AF37] transition-colors">About</Link>
        <Link href="/#projects" className="hover:text-[#D4AF37] transition-colors">Projects</Link>
      </div>

      {/* Center Logo */}
      <Link href="/" className="text-xl font-bold tracking-wider text-white whitespace-nowrap text-center hover:scale-105 transition-transform cursor-pointer block">
        Saifudin <span className="text-gradient-gold">Juhri</span>
      </Link>

      {/* Right Links */}
      <div className="hidden md:flex flex-1 justify-end gap-8 text-sm font-medium text-gray-300 items-center">
        <Link href="/#contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
        <a href="#" className="hover:text-white px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/5">Resume</a>
      </div>

    </nav>
  );
}
