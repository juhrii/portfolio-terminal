"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface HistoryLine {
  id: number;
  type: "command" | "output";
  content: ReactNode;
}

const ASCII_ART = `
   _____       _  __           ___         
  / ___/____ _(_)/ /__  __  __/ (_)___     
  \\__ \\/ __ \`/ / / __ \\/ / / / / / __ \\    
 ___/ / /_/ / / / / / / /_/ / / / / / /    
/____/\\__,_/_/_/_/ /_/\\__,_/_/_/_/ /_/     
                                         
          J U H R I   V 1.0              

-----------------------------------------
OS: Next.js/React (Web)
Host: Universal Big Data (UBIG) Intern
Kernel: Frontend & Mobile Dev
Uptime: 24/7 Available
Packages: Flutter, React Native, Laravel
Shell: Retro Bash
Terminal: Portofolio
-----------------------------------------
`;

export default function Home() {
  const [history, setHistory] = useState<HistoryLine[]>([
    {
      id: 0,
      type: "output",
      content: (
        <div className="whitespace-pre-wrap text-green-500 mb-4">
          {ASCII_ART}
          <br />
          Welcome to Saifudin Juhri's Interactive Terminal.
          <br />
          Type <span className="text-white font-bold">'help'</span> to see available commands.
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    document.addEventListener("click", focusInput);
    focusInput();
    return () => document.removeEventListener("click", focusInput);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    setHistory((prev) => [
      ...prev,
      { id: Date.now(), type: "command", content: `visitor@juhri:~$ ${cmd}` },
    ]);

    if (trimmed === "") return;

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    let output: ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="ml-4 mt-2 mb-4 space-y-1">
            <p><span className="text-white font-bold w-20 inline-block">about</span> - Who is Saifudin Juhri?</p>
            <p><span className="text-white font-bold w-20 inline-block">skills</span> - View technical stack</p>
            <p><span className="text-white font-bold w-20 inline-block">projects</span> - Browse portfolio projects</p>
            <p><span className="text-white font-bold w-20 inline-block">contact</span> - Get in touch</p>
            <p><span className="text-white font-bold w-20 inline-block">clear</span> - Clear terminal window</p>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="ml-4 mt-2 mb-4 max-w-2xl">
            <p className="mb-2">Hi, I'm <span className="text-white font-bold">Saifudin Juhri</span>.</p>
            <p className="mb-2">I am a 12th-grade Software Engineering student at SMKN 1 PASURUAN with a deep passion for mobile app development and UI/UX design.</p>
            <p>I am currently doing my internship (PKL) at Universal Big Data (UBIG), where I actively build and contribute to real-world applications. As I approach graduation, I am actively seeking full-time opportunities.</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="ml-4 mt-2 mb-4">
            <p className="text-white mb-2">Technical Arsenal:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><span className="text-white">Mobile:</span> Flutter, Dart, React Native</li>
              <li><span className="text-white">Backend:</span> Supabase, Firebase, PHP, Laravel, C#, MySQL, REST API</li>
              <li><span className="text-white">Tools:</span> Git, GitHub, Figma, Android Studio, Postman, Antigravity</li>
            </ul>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="ml-4 mt-2 mb-4 space-y-4">
            <div>
              <p className="text-white font-bold text-lg">▶ Nobox.Chat</p>
              <p>A fast, secure, and modern chat application for seamless daily communication.</p>
              <p className="text-green-700">[Flutter] [Dart] [Firebase]</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">▶ Nobox.Ai - Chat</p>
              <p>Intelligent conversational application integrated with advanced AI models.</p>
              <p className="text-green-700">[Flutter] [AI API] [Dart]</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">▶ Absensiku</p>
              <p>Employee attendance tracking system utilizing location services.</p>
              <p className="text-green-700">[Mobile] [Location API] [Database]</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">▶ Juresep</p>
              <p>A digital recipe book and cooking assistant application.</p>
              <p className="text-green-700">[Mobile] [Frontend] [API]</p>
            </div>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="ml-4 mt-2 mb-4 space-y-1">
            <p>Email: <a href="mailto:hello@example.com" className="text-blue-400 hover:underline">hello@example.com</a></p>
            <p>GitHub: <a href="https://github.com/juhrii" target="_blank" className="text-blue-400 hover:underline">github.com/juhrii</a></p>
            <p>Instagram: <a href="https://instagram.com/jubhanjirr" target="_blank" className="text-blue-400 hover:underline">@jubhanjirr</a></p>
            <p>WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" className="text-blue-400 hover:underline">+62 812 3456 7890</a></p>
          </div>
        );
        break;
      default:
        output = (
          <div className="ml-4 mt-2 mb-4 text-red-400">
            Command not found: {trimmed}. Type 'help' to see available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now() + 1, type: "output", content: output },
    ]);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 w-full max-w-4xl mx-auto flex flex-col font-mono text-sm md:text-base crt glow">
      <div className="flex-1 pb-10 relative">
        {history.map((line) => (
          <div key={line.id} className={line.type === "command" ? "font-bold text-white mt-4" : ""}>
            {line.content}
          </div>
        ))}
        
        <div className="flex items-center mt-4">
          <span className="font-bold mr-2 text-green-400 whitespace-nowrap">visitor@juhri:~$</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
              setInput("");
            }}
            className="flex-1 flex items-center relative"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-transparent font-mono caret-transparent absolute inset-0 z-10"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
            {/* Custom Block Cursor */}
            <span className="text-green-500 whitespace-pre">
              {input}
              <span className="blink inline-block w-[0.6em] h-[1.1em] bg-green-500 align-middle ml-[1px]"></span>
            </span>
          </form>
        </div>
        <div ref={endRef} className="h-10" />
      </div>
    </main>
  );
}
