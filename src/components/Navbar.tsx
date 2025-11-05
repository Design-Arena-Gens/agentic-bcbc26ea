"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Workflows", href: "#workflows" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" }
];

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 flex items-center justify-center bg-[#050610]/75 backdrop-blur-2xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between py-4 text-sm">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
          aria-label="Aurora home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-cyan-400 text-lg font-bold text-white shadow-brand">
            A
          </span>
          Aurora
        </Link>
        <nav className="hidden items-center gap-10 text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-white"
            >
              {item.label}
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full mt-1 h-[2px] w-full bg-gradient-to-r from-primary to-cyan-400"
                initial={{ opacity: 0, scaleX: 0 }}
                whileHover={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-white/30 hover:text-white md:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="#waitlist"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-brand transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Join waitlist
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
