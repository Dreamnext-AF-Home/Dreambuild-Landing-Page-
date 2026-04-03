"use client";

import Link from "next/link";
import { projects } from "@/lib/landing-data";
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
              Featured Projects
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Spaces we have shaped and styled
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              A selection of residential interiors that showcase our approach to 
              refined, livable design.
            </p>
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <Link
                href="/projects"
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-shadow hover:shadow-lg"
                >
                  <div
                    className={`overflow-hidden ${
                      project.size === "tall" ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`h-full w-full ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-[#e8e0d4] via-[#d4c8b8] to-[#c0b0a0]"
                          : "bg-gradient-to-br from-[#d8cec0] via-[#e8e0d4] to-[#ccc0b0]"
                      }`}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
                      {project.tag}
                    </p>
                    <h3 className="mt-2 text-base font-medium text-[var(--foreground)]">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <FadeUp delay={0.3} className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-8 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--foreground)] hover:scale-105"
          >
            View All Projects
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
