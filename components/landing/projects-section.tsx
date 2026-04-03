import Link from "next/link";
import { projects } from "@/lib/landing-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
              Featured Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-4xl lg:text-5xl">
              An editorial gallery that feels more curated than template-like.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Your reference has a gallery section already. This version makes it
            feel sharper through varied heights, cleaner captions, and stronger
            spacing rhythm.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href="/projects"
              className="group rounded-[1.8rem] border border-stone-200/80 bg-white/82 p-4 shadow-[0_24px_70px_rgba(65,41,25,0.06)] backdrop-blur-sm"
            >
              <div
                className={`overflow-hidden rounded-[1.5rem] ${
                  project.size === "tall" ? "h-84" : "h-64"
                }`}
              >
                <div
                  className={`h-full w-full rounded-[1.5rem] transition duration-500 group-hover:scale-[1.04] ${
                    index % 2 === 0
                      ? "bg-[linear-gradient(160deg,#f5eee8_0%,#d7c2b1_50%,#af917b_100%)]"
                      : "bg-[linear-gradient(160deg,#cfb6a2_0%,#f6f0ea_46%,#ddd0c2_100%)]"
                  }`}
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] tracking-[0.28em] text-stone-400 uppercase">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-stone-950">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-500">
                  2026
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
