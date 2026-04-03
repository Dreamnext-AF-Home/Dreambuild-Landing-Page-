import Link from "next/link";
import { blogPosts } from "@/lib/landing-data";

export function BlogsSection() {
  return (
    <section className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
              Interior Blogs
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-4xl lg:text-5xl">
              Helpful reads for planning, styling, and refining your space.
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
          >
            View All Blogs
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="rounded-[1.8rem] border border-stone-200 bg-white p-5 shadow-[0_20px_60px_rgba(40,31,24,0.05)]"
            >
              <div
                className={`h-52 rounded-[1.5rem] ${
                  index === 0
                    ? "bg-[linear-gradient(160deg,#ece5dd_0%,#cdbdaf_100%)]"
                    : index === 1
                      ? "bg-[linear-gradient(160deg,#faf7f2_0%,#d8cbc0_100%)]"
                      : "bg-[linear-gradient(160deg,#d7c7ba_0%,#f1ebe4_100%)]"
                }`}
              />
              <p className="mt-5 text-[0.72rem] font-medium tracking-[0.28em] text-stone-500 uppercase">
                {post.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-stone-950">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {post.excerpt}
              </p>
              <Link
                href="/blogs"
                className="mt-6 inline-flex text-sm font-medium text-stone-950 transition hover:text-stone-700"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
