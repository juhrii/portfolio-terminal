import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-signature" });

export const metadata: Metadata = {
  title: "about-me | Saifudin Juhri",
  description: "Modern personal portfolio showcasing my journey and projects as a Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${grotesk.variable} ${caveat.variable} antialiased scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-black text-[#e5e5e5] font-sans overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
