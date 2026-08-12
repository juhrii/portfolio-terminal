"use client";

import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 pt-32">
      {/* Background Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      <Navbar />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12 md:py-20 flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] mb-2">
            <img src="/assets/images/profile.jpg" alt="Saifudin Juhri" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Saifudin <span className="text-gradient-gold">Juhri</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            Crafting elegant digital experiences through code and design.
          </p>
        </div>

        {/* Bento Grid / Glass Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About Me Card (Span 3 cols for wider look now) */}
          <div id="about" className="glass-panel p-8 md:p-10 md:col-span-3 flex flex-col justify-center transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-2xl font-semibold mb-4 text-gradient-gold">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a Software Engineering student with a deep passion for creating beautiful, high-performance mobile and web applications. Currently interning at Universal Big Data (UBIG), I specialize in transforming complex problems into simple, elegant solutions.
            </p>
          </div>

          {/* Expertise Card */}
          <div className="glass-panel p-8 md:p-10 md:col-span-3 transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-gold">Technical Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 bg-black/40 rounded-xl border border-white/5 text-center text-gray-200 font-medium">Flutter</div>
              <div className="p-5 bg-black/40 rounded-xl border border-white/5 text-center text-gray-200 font-medium">React / Next.js</div>
              <div className="p-5 bg-black/40 rounded-xl border border-white/5 text-center text-gray-200 font-medium">Laravel</div>
              <div className="p-5 bg-black/40 rounded-xl border border-white/5 text-center text-gray-200 font-medium">Supabase</div>
            </div>
          </div>

          {/* Featured Projects Card */}
          <div id="projects" className="glass-panel p-8 md:p-10 md:col-span-3 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-gold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nobox.Chat */}
              <div className="group p-6 bg-black/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                  <img src="/assets/images/nobox-logo.png" alt="Nobox.Chat" className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Nobox.Chat</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">A fast, secure, and modern chat application built with Flutter and Firebase.</p>
                <div className="flex gap-3 items-center mt-2">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Mobile</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Firebase</span>
                  <a href="https://github.com/juhrii/nobox-chat" target="_blank" className="ml-auto flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" title="View Source on GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Nobox.Ai - Chat */}
              <div className="group p-6 bg-black/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                  <img src="/assets/images/nobox-logo.png" alt="Nobox.Ai - Chat" className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500 opacity-80" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Nobox.Ai - Chat</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">Intelligent conversational application integrated with advanced AI models.</p>
                <div className="flex gap-3 items-center mt-2">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Flutter</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">AI API</span>
                  <a href="https://github.com/juhrii/nobox-ai" target="_blank" className="ml-auto flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" title="View Source on GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Absensiku */}
              <div className="group p-6 bg-black/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                  <img src="/assets/images/app_icon_new.png" alt="Absensiku" className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Absensiku</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">Employee attendance tracking system utilizing location services.</p>
                <div className="flex gap-3 items-center mt-2">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Mobile</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Location API</span>
                  <a href="https://github.com/juhrii/absensiku" target="_blank" className="ml-auto flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" title="View Source on GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Juresep */}
              <div className="group p-6 bg-black/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                  <img src="/assets/images/juresep-logo.jpg" alt="Juresep" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Juresep</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">Digital recipe book and cooking assistant with an elegant UI.</p>
                <div className="flex gap-3 items-center mt-2">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Flutter</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">REST API</span>
                  <a href="https://github.com/juhrii/juresep" target="_blank" className="ml-auto flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" title="View Source on GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Jurnal Mengajar */}
              <div className="group p-6 bg-black/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 cursor-pointer flex flex-col md:col-span-2 max-w-2xl mx-auto w-full">
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                  <img src="/assets/images/logo_ikon.png.png" alt="Jurnal Mengajar" className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-[#D4AF37] transition-colors text-center">Jurnal Mengajar</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1 text-center">A digital journal system for teachers to manage daily teaching activities efficiently.</p>
                <div className="flex gap-3 justify-center items-center mt-2">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Frontend</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-white/10 text-gray-300">Database</span>
                  <a href="https://github.com/juhrii/jurnal-mengajar" target="_blank" className="ml-4 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" title="View Source on GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Contact Section at the Bottom */}
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

      </div>
    </main>
  );
}
