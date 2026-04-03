import Link from "next/link";
import { galleryItems } from "@/lib/landing-data";

export function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
              Interior Gallery
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl lg:text-5xl">
              A visual gallery section for the interior looks and mood direction.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-black/15 bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--brand-deep)]"
          >
            See Full Projects
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Link
              key={item.title}
              href="/projects"
              className="group overflow-hidden rounded-[1.9rem] border border-yellow-200 bg-white p-4 shadow-[0_20px_60px_rgba(18,18,18,0.06)]"
            >
              <div
                className={`rounded-[1.5rem] ${
                  index % 3 === 0 ? "h-80" : "h-64"
                } ${
                  item.tone === "dark"
                    ? "bg-[linear-gradient(160deg,#121212_0%,#4a4a4a_42%,#f4d524_100%)]"
                    : item.tone === "gold"
                      ? "bg-[linear-gradient(160deg,#fff7cc_0%,#f4d524_55%,#c9ab00_100%)]"
                      : item.tone === "soft"
                        ? "bg-[linear-gradient(160deg,#fffef8_0%,#f1e7be_52%,#e2cf74_100%)]"
                        : "bg-[linear-gradient(160deg,#ffffff_0%,#fff2a8_48%,#ead66b_100%)]"
                } transition duration-500 group-hover:scale-[1.03]`}
              />
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] tracking-[0.28em] text-stone-500 uppercase">
                    Gallery View
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-black">
                    {item.title}
                  </h3>
                </div>
                <span className="rounded-full border border-yellow-200 px-3 py-1 text-xs text-stone-600">
                  Dreambuild
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
