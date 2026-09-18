"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0914]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight text-white hover:text-[#A855F7] transition-colors flex items-center gap-2">
            <span className="text-[#A855F7]/50">&lt;</span>
            Saifudin
            <span className="text-[#A855F7]/50">/&gt;</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-lg font-medium text-white/70">
            <Link href="/#services" className="hover:text-white transition-colors relative group">
              Services
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#A855F7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/#experience" className="hover:text-white transition-colors relative group">
              Experience
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#A855F7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/#projects" className="hover:text-white transition-colors relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#A855F7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/guestbook" className="hover:text-white transition-colors relative group">
              Guestbook
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#A855F7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#A855F7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0B0914] transition-transform duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold text-white hover:text-[#A855F7] transition-colors">Services</Link>
        <Link href="/#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold text-white hover:text-[#A855F7] transition-colors">Experience</Link>
        <Link href="/#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold text-white hover:text-[#A855F7] transition-colors">Projects</Link>
        <Link href="/guestbook" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold text-white hover:text-[#A855F7] transition-colors">Guestbook</Link>
        <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold text-white hover:text-[#A855F7] transition-colors">Contact</Link>
      </div>
    </>
  );
}
