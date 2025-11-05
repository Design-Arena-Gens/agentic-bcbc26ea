"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Aurora feels like dropping a narrative strategist, senior product designer, and launch producer into every brainstorm. We ship with more conviction and charisma.",
    name: "Maya Chen",
    title: "VP Product, Luma Labs",
    avatar: "https://avatars.dicebear.com/api/initials/Maya%20Chen.svg"
  },
  {
    quote:
      "The workflows accelerate our entire GTM loop. Aurora translated hypotheses into live prototypes, validated them, and auto-generated the launch play within hours.",
    name: "Samir Patel",
    title: "Head of Growth, Nova",
    avatar: "https://avatars.dicebear.com/api/initials/Samir%20Patel.svg"
  },
  {
    quote:
      "Our design rituals are transformed. We show up with richer concepts, data-backed narratives, and interactive storyboards tuned to leadership priorities.",
    name: "Alina Duarte",
    title: "Design Director, Orbit Health",
    avatar: "https://avatars.dicebear.com/api/initials/Alina%20Duarte.svg"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Teams energized by Aurora&apos;s creative intelligence
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <motion.blockquote
            key={testimonial.name}
            className="glass relative flex h-full flex-col gap-6 rounded-[2rem] p-8 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <span className="absolute left-8 top-4 text-5xl text-white/15">“</span>
            <p className="mt-8 text-base leading-relaxed text-white/80">{testimonial.quote}</p>
            <div className="mt-auto flex items-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                width={48}
                height={48}
                className="rounded-full border border-white/20 bg-white/10 p-1"
              />
              <div>
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
