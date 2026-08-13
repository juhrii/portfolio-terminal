"use client";

import { Navbar } from "@/components/navbar";
import { useEffect, useRef, useState, ReactNode } from "react";

// Scroll Animation Wrapper
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Hentikan observasi setelah elemen terlihat agar tidak lag saat di-scroll berulang kali
          if (entry.target) observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Lebih responsif (10%)
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`transition-opacity duration-1000 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 pt-32">
      {/* Background Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      <Navbar />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Hero Section */}
        <Reveal delay={100}>
          <div className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] shrink-0">
              <img src="/assets/images/profile.jpg" alt="Saifudin Juhri" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            
            {/* Text Content */}
            <div className="text-center md:text-left space-y-4 md:space-y-6 max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Saifudin <span className="text-gradient-gold">Juhri</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                Building scalable software solutions and high-performance digital experiences.
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- ABOUT SECTION --- */}
        <Reveal delay={150}>
          <div id="about" className="pt-24 scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-gradient-gold">Me</span></h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a Software Engineering student with a deep passion for creating beautiful, high-performance mobile and web applications. Currently interning at Universal Big Data (UBIG), I specialize in transforming complex problems into simple, elegant solutions.
                </p>
                <div className="flex gap-6 pt-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1 backdrop-blur-md">
                    <h4 className="text-[#D4AF37] text-4xl font-bold mb-2">2+</h4>
                    <p className="text-gray-400 text-sm font-medium">Years Experience</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1 backdrop-blur-md">
                    <h4 className="text-[#D4AF37] text-4xl font-bold mb-2">7</h4>
                    <p className="text-gray-400 text-sm font-medium">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-square rounded-[2.5rem] bg-gradient-to-tr from-[#D4AF37]/20 to-black/50 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                   <div className="absolute inset-0 bg-[url('/assets/images/profile.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay blur-[2px] transition-transform duration-700 hover:scale-110"></div>
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                   <div className="relative z-10 text-center space-y-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37]/50 backdrop-blur-md">
                        <svg className="w-12 h-12 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                      </div>
                      <div>
                        <p className="text-white font-mono tracking-widest text-sm font-semibold">CODE & DESIGN</p>
                        <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Crafting Digital Experiences</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- TECHNICAL EXPERTISE --- */}
        <Reveal delay={200}>
          <div id="expertise" className="pt-32 scroll-mt-24">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Technical <span className="text-gradient-gold">Expertise</span></h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full mx-auto"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-4">The core tools and technologies I use to build scalable, high-performance applications.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {/* Flutter */}
                <div className="group p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">Flutter</h3>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-bold">Mobile App</p>
                  </div>
                </div>

                {/* React / Next.js */}
                <div className="group p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">Next.js</h3>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-bold">Frontend</p>
                  </div>
                </div>

                {/* Laravel */}
                <div className="group p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">Laravel</h3>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-bold">Backend</p>
                  </div>
                </div>

                {/* Supabase */}
                <div className="group p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">Supabase</h3>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-bold">Database</p>
                  </div>
                </div>

                {/* C# */}
                <div className="group p-8 bg-black/40 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">C#</h3>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-bold">Enterprise</p>
                  </div>
                </div>

            </div>
          </div>
        </Reveal>

        {/* --- FEATURED PROJECTS --- */}
        <Reveal delay={250}>
          <div id="projects" className="pt-32 scroll-mt-24">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Featured <span className="text-gradient-gold">Projects</span></h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full mx-auto"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-4">A selection of my recent work, showcasing my skills in frontend, backend, and mobile development.</p>
            </div>
            
            <div className="space-y-32">
              
              {/* Nobox.Chat (Image Left) */}
              <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
                <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <img src="/assets/images/nobox-logo.png" alt="Nobox.Chat" className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">Nobox.Chat</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    A fast, secure, and modern chat application built with Flutter and Firebase. Features real-time messaging, end-to-end encryption, and a sleek user interface designed for optimal user experience.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Flutter</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Server</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">C#</span>
                  </div>
                  <div className="pt-4">
                    <a href="https://github.com/juhrii/nobox" target="_blank" className="inline-flex items-center gap-3 text-white bg-white/10 hover:bg-[#D4AF37] hover:text-black px-6 py-3.5 rounded-full transition-all font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Nobox.Ai - Chat (Image Right) */}
              <div className="group flex flex-col md:flex-row-reverse gap-8 lg:gap-16 items-center">
                <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <img src="/assets/images/nobox-logo.png" alt="Nobox.Ai - Chat" className="w-32 h-32 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">Nobox.Ai - Chat</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Intelligent conversational application integrated with advanced AI models. Provides seamless AI assistance wrapped in a beautiful, responsive mobile interface.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Flutter</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Server</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">C#</span>
                  </div>
                  <div className="pt-4">
                    <a href="https://github.com/juhrii/aplikasi-kirim-pesan-sederhana" target="_blank" className="inline-flex items-center gap-3 text-white bg-white/10 hover:bg-[#D4AF37] hover:text-black px-6 py-3.5 rounded-full transition-all font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Absensiku (Image Left) */}
              <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
                <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <img src="/assets/images/app_icon_new.png" alt="Absensiku" className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">Absensiku</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Employee attendance tracking system utilizing location services. Simplifies time tracking, leave requests, and generates comprehensive reports for HR departments.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Flutter</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Dart</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Database</span>
                  </div>
                  <div className="pt-4">
                    <a href="https://github.com/juhrii/Absensimassal" target="_blank" className="inline-flex items-center gap-3 text-white bg-white/10 hover:bg-[#D4AF37] hover:text-black px-6 py-3.5 rounded-full transition-all font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Juresep (Image Right) */}
              <div className="group flex flex-col md:flex-row-reverse gap-8 lg:gap-16 items-center">
                <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
                  <img src="/assets/images/juresep-logo.jpg" alt="Juresep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none opacity-50"></div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">Juresep</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Digital recipe book and cooking assistant with an elegant UI. Browse recipes, save favorites, and follow step-by-step guides to prepare delicious meals at home.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Flutter</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">REST API</span>
                  </div>
                  <div className="pt-4">
                    <a href="https://github.com/juhrii" target="_blank" className="inline-flex items-center gap-3 text-white bg-white/10 hover:bg-[#D4AF37] hover:text-black px-6 py-3.5 rounded-full transition-all font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Jurnal Mengajar (Image Left) */}
              <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
                <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <img src="/assets/images/logo_ikon.png.png" alt="Jurnal Mengajar" className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">Jurnal Mengajar</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    A digital journal system for teachers to manage daily teaching activities efficiently. Replaces paper-based journals with a seamless, cloud-synced digital experience.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Frontend</span>
                    <span className="text-sm font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Database</span>
                  </div>
                  <div className="pt-4">
                    <a href="https://github.com/juhrii" target="_blank" className="inline-flex items-center gap-3 text-white bg-white/10 hover:bg-[#D4AF37] hover:text-black px-6 py-3.5 rounded-full transition-all font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Contact Section at the Bottom */}
        <Reveal delay={150}>
          <div id="contact" className="pt-20 pb-10 scroll-mt-10">
            <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Let's <span className="text-gradient-gold">Connect</span>
            </h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto">
              Have a project in mind, a question, or just want to say hi? Feel free to drop a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Social Links Panel */}
            <div className="glass-panel p-8 md:p-10 space-y-6">
              <h3 className="text-2xl font-semibold text-gradient-gold mb-6">Direct Links</h3>
              
              <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-xl">📧</div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-sm text-gray-400">hello@example.com</p>
                </div>
              </a>

              <a href="https://wa.me/6281325145566" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xl">💬</div>
                <div>
                  <h4 className="text-white font-medium">WhatsApp</h4>
                  <p className="text-sm text-gray-400">+62 813-2514-5566</p>
                </div>
              </a>

              <a href="https://github.com/juhrii" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl">💻</div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <p className="text-sm text-gray-400">@juhrii</p>
                </div>
              </a>
            </div>

            {/* Contact Form Panel */}
            <div className="glass-panel p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-gradient-gold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Ini masih berupa desain UI. Nanti bisa kita hubungkan ke pengirim email!'); }}>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea rows={4} placeholder="Your message here..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
        </Reveal>

      </div>
    </main>
  );
}
