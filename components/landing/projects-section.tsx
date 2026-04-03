import Link from "next/link";
import { projects } from "@/lib/landing-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href="/projects"
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-all hover:shadow-lg">
                <div
                  className={`overflow-hidden ${
                    project.size === "tall" ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <div
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
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
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-8 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--foreground)]"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
