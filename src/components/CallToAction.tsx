"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section id="waitlist" className="container py-24 md:py-32">
      <motion.div
        className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-r from-primary/20 via-indigo-500/15 to-cyan-400/20 p-10 text-center md:p-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_65%)]" />
        <div className="relative mx-auto max-w-3xl space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Request access
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
            Join the wave of teams crafting unforgettable product stories with Aurora
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            The invite-only beta unlocks dedicated strategy sessions, custom prompt libraries, and
            priority co-creation rituals with our product team.
          </p>
          <form className="mx-auto flex max-w-xl flex-col gap-4 text-left sm:flex-row sm:items-center">
            <label className="flex-1">
              <span className="sr-only">Work email</span>
              <input
                type="email"
                placeholder="Work email"
                required
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Request invite
            </Link>
          </form>
          <p className="text-xs uppercase tracking-[0.32em] text-white/50">
            Respond within 48 hours · Enterprise pilots available
          </p>
        </div>
      </motion.div>
    </section>
  );
}
