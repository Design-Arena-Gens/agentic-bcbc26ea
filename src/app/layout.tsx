import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Aurora - Intelligent Creative Co-pilot",
  description:
    "Aurora helps teams ideate, plan, and launch dazzling product experiences with the power of AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#050610] scroll-smooth">
      <body className={`${inter.variable} font-sans bg-transparent`}>{children}</body>
    </html>
  );
}
