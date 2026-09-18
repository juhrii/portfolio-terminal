import { MagneticText } from '@/components/magnetic-text';
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05040a] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-[#A855F7] transition-colors flex items-center gap-2">
            <MagneticText className="opacity-50">&lt;</MagneticText>
            Juhri
            <MagneticText className="opacity-50">/&gt;</MagneticText>
          </Link>
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
            Crafting digital experiences with thoughtful design and robust engineering.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <span className="text-white font-medium uppercase tracking-widest text-xs mb-2">Socials</span>
            <a href="https://github.com/juhrii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm">Twitter</a>
          </div>
          
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <span className="text-white font-medium uppercase tracking-widest text-xs mb-2">Menu</span>
            <Link href="/#services" className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm">Services</Link>
            <Link href="/#projects" className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm">Projects</Link>
            <Link href="/guestbook" className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm">Guestbook</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs text-center md:text-left">
          &copy; {currentYear} Saifudin Juhri. All rights reserved.
        </p>
        <div className="flex gap-4">
          <span className="text-gray-600 text-xs">Built with Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
