"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    heading: "Narrative Engine",
    description:
      "Craft launch stories, pitch decks, and campaign scripts that stay on-brand with a shared tone library and AI-assisted revisions.",
    badge: "Storytelling"
  },
  {
    heading: "Intent-driven Canvas",
    description:
      "Storyboard flows, wireframes, and motion sequences using natural language. Aurora translates intent into interactive Figma-ready layers.",
    badge: "Design Systems"
  },
  {
    heading: "Scenario Simulator",
    description:
      "Prototype multi-channel launches, simulate adoption, and stress test messaging with live feedback from AI personas tuned to your ICP.",
    badge: "Growth"
  },
  {
    heading: "Team Resonance Map",
    description:
      "Visualize alignment, decisions, and next steps across product, design, GTM, and leadership in a unified collaboration surface.",
    badge: "Collaboration"
  }
];

export function FeatureSection() {
  return (
    <section id="platform" className="container py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          Platform
        </span>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
          An adaptive creative OS engineered for product teams
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
          Aurora fuses intelligence, storytelling, and systems thinking into one collaborative space.
          Spin up a strategy sprint, storyboard immersive experiences, then orchestrate high-impact
          launches without breaking flow.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.article
            key={feature.heading}
            className={cn(
              "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-left transition duration-500 hover:border-white/25",
              "shadow-[0_35px_60px_-35px_rgba(31,41,55,0.65)]"
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-20 translate-x-20 rounded-full bg-gradient-to-br from-primary/40 to-cyan-400/30 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-white/60">
              {feature.badge}
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-white">{feature.heading}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">{feature.description}</p>
            <motion.button
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1"
              whileHover={{ scale: 1.02 }}
            >
              Explore capability
              <span aria-hidden>↗</span>
            </motion.button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
