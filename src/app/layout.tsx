import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-signature" });

export const metadata: Metadata = {
  title: "about-me | Saifudin Juhri",
  description: "Portfolio of Saifudin Juhri - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${grotesk.variable} ${caveat.variable} antialiased scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#0B0914] text-[#e5e5e5] font-sans overflow-x-hidden selection:bg-[#A855F7]/30 selection:text-white cursor-default">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
