import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description: "Modern personal portfolio showcasing my journey and projects as a Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-black text-green-500 selection:bg-green-500/30 font-mono">
        {children}
      </body>
    </html>
  );
}
