"use client";

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-panel px-6 py-4 flex justify-between items-center rounded-2xl animate-fade-in-scale">
        
        {/* Left Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-start gap-8 text-sm font-medium text-gray-300">
          <Link href="/#about" className="hover:text-[#D4AF37] transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-[#D4AF37] transition-colors">Projects</Link>
        </div>

        {/* Center Logo */}
        <div className="flex-1 md:flex-none flex justify-start md:justify-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold tracking-wider text-white whitespace-nowrap hover:scale-105 transition-transform cursor-pointer block">
            Saifudin <span className="text-gradient-gold">Juhri</span>
          </Link>
        </div>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end gap-6 text-sm font-medium text-gray-300 items-center">
          <Link href="/guestbook" className="hover:text-[#D4AF37] transition-colors">Guestbook</Link>
          <Link href="/#contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          <a href="#" className="hover:text-white px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/5">Resume</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-[#D4AF37] transition-colors">About</Link>
          <Link href="/#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-[#D4AF37] transition-colors">Projects</Link>
          <Link href="/guestbook" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-[#D4AF37] transition-colors">Guestbook</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-[#D4AF37] transition-colors">Contact</Link>
          <a href="#" className="text-xl text-black bg-[#D4AF37] px-8 py-3 rounded-full mt-4 font-bold">Resume</a>
        </div>
      )}
    </>
  );
}
