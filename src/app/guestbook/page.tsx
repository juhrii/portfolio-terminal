"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";

export default function Guestbook() {
  const [messages, setMessages] = useState<{id: number, name: string, text: string, date: string}[]>([]);

  const [newName, setNewName] = useState("");
  const [newMsg, setNewMsg] = useState("");

  // Load from local storage on initial mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("portfolio_guestbook");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Failed to parse guestbook messages");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMsg.trim()) return;

    const newMessages = [
      { id: Date.now(), name: newName, text: newMsg, date: new Date().toLocaleDateString('en-GB') },
      ...messages,
    ];

    setMessages(newMessages);
    // Save to local storage automatically
    localStorage.setItem("portfolio_guestbook", JSON.stringify(newMessages));

    setNewName("");
    setNewMsg("");
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] bg-[url('/assets/images/noise.png')] selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Guest<span className="text-gradient-gold">book</span>
          </h1>
          <p className="text-gray-400 text-lg">Leave a message for me! Feel free to say hi or share your thoughts.</p>
        </div>

        {/* Input Form */}
        <div className="glass-panel p-8 rounded-3xl mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Your Name" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea 
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                rows={3} 
                placeholder="What's on your mind?" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                required
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity">
              Sign Guestbook
            </button>
          </form>
        </div>

        {/* Message List */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {messages.map((msg) => (
            <div key={msg.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-yellow-200 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  {msg.name}
                </h4>
                <span className="text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full border border-white/5">{msg.date}</span>
              </div>
              <p className="text-gray-300 pl-12 leading-relaxed">{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
