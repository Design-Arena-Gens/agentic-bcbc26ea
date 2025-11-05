"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Interactive flows",
    description:
      "Generate navigable prototypes with branded motion primitives that sync straight to Figma.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Campaign orchestrator",
    description:
      "Spin up omni-channel launch sequences with messaging, assets, and timing tuned to your ICP.",
    src: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Insight dashboards",
    description:
      "Get continuous feedback loops with AI-generated sentiment, friction points, and lift predictions.",
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="container py-24 md:py-32">
      <div className="mb-12 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Showcase
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            A glimpse into the Aurora creation studio
          </h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-white/70">
          Curated snapshots from teams that ship standout product reveals with Aurora&apos;s creative
          engine. Each gallery updates live as artifacts evolve.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            <div className="relative h-64">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
