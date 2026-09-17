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
          if (entry.target) observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-[#050505] text-[#f5f5f5]">
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden">
        {/* Animated Gradient Background Orbs (Simulating Video Background) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#D4AF37]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Top Bar: Socials & Stats */}
          <Reveal delay={100}>
            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8 mb-16 w-full">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://github.com/juhrii" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://wa.me/6281325145566" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="mailto:juhri@ubig.co.id" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-6 divide-x divide-white/10">
                <div className="flex flex-col items-center px-4">
                  <span className="text-4xl md:text-5xl font-bold">+2</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Years Experience</span>
                </div>
                <div className="flex flex-col items-center px-4">
                  <span className="text-4xl md:text-5xl font-bold">+7</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Projects Done</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Huge Typography Name */}
          <Reveal delay={200}>
            {/* SVG Signature Scribble */}
            <div className="flex justify-center mb-[-6vw] relative z-20 pointer-events-none opacity-80">
              <svg viewBox="0 0 340 140" className="w-[50vw] max-w-[350px] signature-draw drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <g>
                  <path style={{fill:'none', stroke:'#D4AF37', strokeWidth:3, strokeLinecap:'round', strokeLinejoin:'round'}} d="M8,96 C8,96 22,14 36,14 C46,14 34,96 48,96 C52,96 52,44 58,40 C64,36 62,96 72,96 C76,96 74,48 80,44 C86,40 84,96 92,96 C96,96 94,50 98,46 C102,42 100,90 108,88 C112,86 108,38 114,34 C120,30 116,88 128,84"></path>
                  <path style={{fill:'none', stroke:'#D4AF37', strokeWidth:3, strokeLinecap:'round', strokeLinejoin:'round'}} d="M148,92 C148,32 156,26 162,28 C174,34 150,64 156,68 C162,72 172,94 178,92 C184,90 178,54 186,50 C194,46 188,92 192,90 C196,88 194,56 198,92 C202,128 182,136 178,116 C174,100 208,50 216,48 C224,46 216,90 222,88 C226,86 222,36 228,30 C234,24 230,90 242,82"></path>
                  <path style={{fill:'none', stroke:'#D4AF37', strokeWidth:3, strokeLinecap:'round', strokeLinejoin:'round'}} d="M22,54 C28,50 42,48 50,52"></path>
                  <path style={{fill:'none', stroke:'#D4AF37', strokeWidth:3, strokeLinecap:'round', strokeLinejoin:'round'}} d="M18,108 C60,118 180,116 256,90 C268,86 274,82 280,78"></path>
                </g>
              </svg>
            </div>
            
            <div className="text-center w-full leading-[0.85] tracking-tighter">
              <h1 className="text-[12vw] md:text-[10vw] font-bold text-white uppercase block relative z-10">
                Saifudin
              </h1>
              <h1 className="text-[12vw] md:text-[10vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700] uppercase block relative z-10">
                Juhri
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8 w-full px-4">
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-md text-center md:text-left">
                Software Engineer <br/> based in Indonesia.
              </p>
              
              <a href="#" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10">DOWNLOAD CV</span>
                <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
              </a>
            </div>
          </Reveal>

        </div>
      </section>

      {/* --- SCROLLING MARQUEE SECTION --- */}
      <section className="bg-[#D4AF37] text-black py-4 md:py-6 overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-5xl md:text-7xl font-bold uppercase mx-8">Software Engineer</span>
              <svg className="w-12 h-12 md:w-16 md:h-16 mx-4" viewBox="0 0 100 101" fill="currentColor"><path d="M49.8234 1.99099C49.4293 9.09696 46.8886 17.4122 43.0707 24.0426C35.0272 38.01 21.1141 47.4665 5.21739 49.7899C4.1712 49.9394 2.55435 50.1024 1.65761 50.1567C0.747283 50.1975 0 50.279 0 50.3334C0 50.3877 0.747283 50.4692 1.65761 50.51C2.55435 50.5644 4.1712 50.7274 5.21739 50.8769C21.1141 53.2002 35.0272 62.6567 43.0707 76.6241C46.8886 83.2546 49.4293 91.5698 49.8234 98.6758C49.8641 99.5861 49.9457 100.333 50 100.333C50.0543 100.333 50.1359 99.5861 50.1766 98.6758C50.5707 91.5698 53.1114 83.2546 56.9293 76.6241C64.9728 62.6567 78.8859 53.2002 94.7826 50.8769C95.8288 50.7274 97.4456 50.5644 98.3424 50.51C99.2527 50.4692 100 50.3877 100 50.3334C100 50.279 99.2527 50.1975 98.3424 50.1567C97.4456 50.1024 95.8288 49.9394 94.7826 49.7899C78.8859 47.4665 64.9728 38.01 56.9293 24.0426C53.1114 17.4122 50.5707 9.09696 50.1766 1.99099C50.1359 1.08066 50.0543 0.333377 50 0.333377C49.9457 0.333377 49.8641 1.08066 49.8234 1.99099Z"/></svg>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES / WHAT I DO --- */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">What I <span className="text-[#D4AF37]">Do /</span></h2>
            <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-lg">( SERVICES )<br/>I build digital experiences with a balance of thoughtful design, solid engineering, and real-world performance.</p>
          </div>
        </Reveal>

        <div className="space-y-0">
          {[
            { num: "01", title: "Mobile Apps", desc: "Building fast, native-feeling mobile applications for iOS and Android using Flutter, focusing on seamless user experience and performance.", items: ["Cross-platform Apps", "Custom UI/UX", "API Integration"] },
            { num: "02", title: "Web Development", desc: "Developing modern, responsive websites and web applications using React, Next.js, and modern CSS frameworks like Tailwind.", items: ["Frontend Architecture", "Landing Pages", "Dashboards"] },
            { num: "03", title: "Backend Systems", desc: "Designing and implementing robust backend APIs and services using C#, Laravel, or Supabase to power your applications.", items: ["RESTful APIs", "Database Design", "Authentication"] }
          ].map((srv, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="sticky top-[10vh] border-t border-white/10 bg-[#050505] py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <span className="md:col-span-2 text-xl text-gray-500 font-mono">( {srv.num} )</span>
                <h3 className="md:col-span-4 text-3xl md:text-4xl font-bold">{srv.title}</h3>
                <div className="md:col-span-6 space-y-6">
                  <p className="text-gray-400 text-lg leading-relaxed">{srv.desc}</p>
                  <ul className="space-y-3 border-t border-white/5 pt-6">
                    {srv.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-center text-white font-medium text-lg">
                        <span className="text-xs text-[#D4AF37] font-mono">0{i+1}</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- EXPERIENCE TIMELINE --- */}
      <section id="experience" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-24 text-center">
              Career & <span className="text-[#D4AF37]">Experience</span>
            </h2>
          </Reveal>

          <div className="relative border-l border-white/10 md:border-none space-y-20">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
            
            {[
              { year: "2023 - Present", role: "Software Engineer Intern", company: "Universal Big Data (UBIG)", desc: "Working on real-world projects like Nobox.Chat and Absensiku. Collaborating with senior developers to build scalable mobile apps and backend services." },
              { year: "2021 - 2023", role: "Freelance Developer", company: "Self-Employed", desc: "Developed various custom web and mobile applications for local businesses, including inventory systems and landing pages." },
            ].map((exp, idx) => (
              <Reveal key={idx} delay={100}>
                <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                  {/* Glowing Node */}
                  <div className="absolute left-[-5px] top-2 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37]"></div>
                  
                  <div className={`${idx % 2 !== 0 ? 'md:col-start-2' : ''} pl-8 md:pl-0 space-y-2`}>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-[#D4AF37] font-mono text-sm tracking-widest">{exp.company}</p>
                    <p className="text-gray-400 mt-4 leading-relaxed">{exp.desc}</p>
                  </div>
                  <div className={`hidden md:block ${idx % 2 !== 0 ? 'md:col-start-1 md:row-start-1 md:text-right' : ''}`}>
                    <span className="text-5xl font-bold text-white/10">{exp.year.split(' - ')[0]}</span>
                  </div>
                  {/* Mobile Year */}
                  <div className="md:hidden pl-8">
                    <span className="text-sm font-mono text-white/40">{exp.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col mb-20 text-center items-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">Selected <span className="text-[#D4AF37]">Projects</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl">( WORKS ) A showcase of my recent developments</p>
          </div>
        </Reveal>

        <div className="space-y-32">
          {[
            { title: "Nobox.Chat", desc: "A fast, secure, and modern chat application built with Flutter and Firebase. Features real-time messaging, end-to-end encryption, and a sleek user interface.", tags: ["Flutter", "Server", "C#"], img: "/assets/images/nobox-logo.png", link: "https://github.com/juhrii/nobox" },
            { title: "Absensiku", desc: "Employee attendance tracking system utilizing location services. Simplifies time tracking, leave requests, and generates comprehensive reports.", tags: ["Flutter", "Dart", "DB"], img: "/assets/images/app_icon_new.png", link: "https://github.com/juhrii/Absensimassal", reverse: true },
            { title: "Juresep", desc: "Digital recipe book and cooking assistant with an elegant UI. Browse recipes, save favorites, and follow step-by-step guides.", tags: ["Flutter", "REST API"], img: "/assets/images/juresep-logo.jpg", link: "https://github.com/juhrii" }
          ].map((project, idx) => (
            <Reveal key={idx}>
              <div className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}>
                <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5">
                  <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-4xl font-bold">{project.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(t => <span key={t} className="px-4 py-2 border border-white/20 rounded-full text-sm font-mono text-gray-300 uppercase">{t}</span>)}
                  </div>
                  <div className="pt-6">
                     <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-white pb-1 border-b border-[#D4AF37] hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-sm font-bold">
                       View Source 
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                     </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">Let's <span className="text-[#D4AF37]">Talk</span></h2>
              <p className="text-xl text-gray-400">Have a project in mind? Feel free to drop a message.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal delay={100}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white/50">Direct Links</h3>
                  <div className="space-y-6">
                    <a href="mailto:juhri@ubig.co.id" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all">📧</div>
                      <span className="text-2xl font-medium group-hover:text-[#D4AF37] transition-colors">juhri@ubig.co.id</span>
                    </a>
                    <a href="https://wa.me/6281325145566" target="_blank" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all">💬</div>
                      <span className="text-2xl font-medium group-hover:text-[#D4AF37] transition-colors">+62 813-2514-5566</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                <input type="hidden" name="access_key" value="75a6a81e-dd4f-4a87-9a9b-d2b1ba460399" />
                <input type="hidden" name="subject" value="New Message from Portfolio" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <div className="border-b border-white/20 pb-2">
                  <input type="text" name="name" placeholder="YOUR NAME" required className="w-full bg-transparent text-white text-xl placeholder-white/30 focus:outline-none focus:border-[#D4AF37]" />
                </div>
                <div className="border-b border-white/20 pb-2">
                  <input type="email" name="email" placeholder="YOUR EMAIL" required className="w-full bg-transparent text-white text-xl placeholder-white/30 focus:outline-none focus:border-[#D4AF37]" />
                </div>
                <div className="border-b border-white/20 pb-2">
                  <textarea rows={4} name="message" placeholder="MESSAGE..." required className="w-full bg-transparent text-white text-xl placeholder-white/30 focus:outline-none focus:border-[#D4AF37] resize-none"></textarea>
                </div>
                
                <button type="submit" className="group relative w-full flex items-center justify-center px-8 py-6 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-[1.02]">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}
