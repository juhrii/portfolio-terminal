"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { supabase } from "@/lib/supabase";

export default function Guestbook() {
  const [messages, setMessages] = useState<{id: number, name: string, message: string, created_at: string}[]>([]);
  const [newName, setNewName] = useState("");
  const [newMsg, setNewMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching messages:", error);
    } else if (data) {
      setMessages(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMsg.trim()) return;

    setIsLoading(true);

    const { data, error } = await supabase
      .from('guestbook')
      .insert([{ name: newName, message: newMsg }])
      .select();

    if (error) {
      console.error("Error inserting message:", error);
      alert("Gagal mengirim pesan.");
    } else if (data) {
      setMessages([data[0], ...messages]);
      setNewName("");
      setNewMsg("");
    }
    
    setIsLoading(false);
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', { 
      day: '2-digit', month: 'short', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    }).format(date);
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50">
              {isLoading ? "Sending..." : "Sign Guestbook"}
            </button>
          </form>
        </div>

        {/* Message List */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {messages.length === 0 && (
            <p className="text-center text-gray-500 italic">No messages yet. Be the first to sign!</p>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-yellow-200 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  {msg.name}
                </h4>
                <span className="text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                  {formatDate(msg.created_at)}
                </span>
              </div>
              <p className="text-gray-300 pl-12 leading-relaxed">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
