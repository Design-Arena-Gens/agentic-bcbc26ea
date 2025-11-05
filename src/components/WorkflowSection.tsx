"use client";

import { motion } from "framer-motion";

const workflows = [
  {
    title: "Ideate with living canvases",
    description:
      "Seed Aurora with your brand voice, product constraints, and surface area. Generate multi-modal artifacts, then remix collaboratively in real time.",
    steps: ["Upload context", "Tune creative guardrails", "Spawn multi-track explorations"]
  },
  {
    title: "Co-design with your AI partner",
    description:
      "Sketch flows using natural language, auto-sync assets to Figma, and run instant usability critiques with AI researchers.",
    steps: ["Describe desired outcomes", "Receive stitched prototypes", "Stress test with personas"]
  },
  {
    title: "Launch with confidence",
    description:
      "Distill milestones, orchestrate cross-functional rituals, and generate playbooks tailored to marketing, enablement, and leadership.",
    steps: ["Define go-to-market rhythm", "Auto-generate collateral", "Activate live dashboards"]
  }
];

export function WorkflowSection() {
  return (
    <section id="workflows" className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          Workflows
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Built for teams moving from idea to launch in days, not months
        </h2>
      </div>
      <div className="mt-16 space-y-8">
        {workflows.map((flow, idx) => (
          <motion.article
            key={flow.title}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-white/5 via-transparent to-white/5 p-8 sm:p-10"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-indigo-500 to-transparent" />
            <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-white">{flow.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">{flow.description}</p>
              </div>
              <ul className="relative grid gap-3 text-sm text-white/70 sm:grid-cols-3 lg:grid-cols-1">
                {flow.steps.map((step, stepIdx) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/70">
                      {String(stepIdx + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
