import Link from "next/link";
import { galleryItems } from "@/lib/landing-data";

const toneStyles = {
  dark: "bg-gradient-to-br from-[#3a3a3a] via-[#4a4a4a] to-[#2a2a2a]",
  gold: "bg-gradient-to-br from-[#e8dcc8] via-[#d4c4a8] to-[#c0aa8a]",
  soft: "bg-gradient-to-br from-[#f5f0e8] via-[#e8e0d4] to-[#d8cec0]",
  light: "bg-gradient-to-br from-[#f8f5f0] via-[#ede6dc] to-[#e0d6c8]",
};

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
              Interior Gallery
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              A curated collection of our design aesthetics
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--foreground)]"
          >
            See All Projects
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Link
              key={item.title}
              href="/projects"
              className="group relative overflow-hidden rounded-2xl"
            >
              <div
                className={`${toneStyles[item.tone as keyof typeof toneStyles]} transition-transform duration-500 group-hover:scale-105 ${
                  index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/4]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs font-medium tracking-widest text-white/70 uppercase">
                  Gallery
                </p>
                <h3 className="mt-1 text-lg font-medium text-white">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
