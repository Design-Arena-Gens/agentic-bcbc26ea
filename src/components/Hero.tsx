"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Product teams accelerated", value: "2.3k+" },
  { label: "Average time saved weekly", value: "14 hrs" },
  { label: "Launch success uplift", value: "38%" }
];

export function Hero() {
  return (
    <section className="container relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="animate-pulse-slow absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/25 mix-blend-screen" />
        <div className="animate-pulse-slow absolute right-0 top-48 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 mix-blend-screen" />
      </div>
      <div className="mx-auto grid max-w-5xl gap-16 text-center md:text-left lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/70">
            Introducing Aurora 3.0
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Design, orchestrate, and launch remarkable products with an{" "}
            <span className="gradient-text">intelligent creative co-pilot</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
            Aurora turns raw ideas into polished product roadmaps, interactive prototypes, and
            launch campaigns. Collaborate live with AI sparring partners that understand your brand,
            your goals, and your teams.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 px-8 py-3 text-base font-semibold text-white shadow-brand transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get early access
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#showcase"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Watch live demo
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-3xl px-6 py-5 text-left">
                <dt className="text-xs uppercase tracking-[0.32em] text-white/60">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          className="relative flex flex-col gap-5 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-3xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between text-sm font-medium text-white/75">
            <span>Brand Experience Canvas</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live collaboration
            </span>
          </div>
          <div className="relative flex flex-1 flex-col gap-4 rounded-3xl border border-white/10 bg-[#0b1120]/70 p-5">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>Storyboard</span>
              <span>Session #21</span>
            </div>
            <div className="grid gap-3">
              {[
                { heading: "North Star", body: "Craft a guided onboarding ritual that feels cinematic and deeply personal." },
                { heading: "Key Moments", body: "Highlight adaptive UI that mirrors user tone, context, and preferred cadence." },
                { heading: "Launch Narrative", body: "Frame the release as a collaborative leap between human creativity and AI intuition." }
              ].map((card) => (
                <div key={card.heading} className="rounded-2xl bg-white/5 p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">{card.heading}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Team alignment pulse</p>
              <div className="mt-3 flex items-center gap-3">
                <Image
                  src="https://avatars.dicebear.com/api/identicon/aurora-1.svg"
                  alt="Avatar"
                  width={36}
                  height={36}
                  className="rounded-full bg-white/10"
                />
                <div className="text-sm text-white/80">
                  Product strategy sync happening now. Design director dropped 3 annotated suggestions.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-4 text-xs text-white/60">
              <span>Next: Generate launch playbook</span>
              <span>ETA 28s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
