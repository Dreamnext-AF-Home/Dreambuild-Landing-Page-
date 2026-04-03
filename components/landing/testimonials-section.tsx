"use client";

import { testimonials } from "@/lib/landing-data";
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
            Client Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            What our clients say about working with us
          </h2>
        </FadeUp>

        {/* Testimonials Grid */}
        <StaggerContainer className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2" staggerDelay={0.15}>
          {testimonials.map((item, index) => (
            <StaggerItem key={item.name}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 lg:p-10 h-full transition-shadow hover:shadow-lg"
              >
                {/* Quote Icon */}
                <svg
                  className="h-8 w-8 text-[var(--accent)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote */}
                <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]">
                  {item.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-full ${
                      index === 0
                        ? "bg-gradient-to-br from-[#d4c8b8] to-[#e8e0d4]"
                        : "bg-gradient-to-br from-[#c0b0a0] to-[#d8cec0]"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
