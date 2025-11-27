import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/components/providers/Web3Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MemeMinter AI | Text-to-Memecoin Generator",
  description: "Generate and deploy unique memecoins on Polygon with AI-powered branding. Type a prompt, get a logo, deploy in one click.",
  keywords: ["memecoin", "polygon", "AI", "crypto", "token", "web3", "DALL-E"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
