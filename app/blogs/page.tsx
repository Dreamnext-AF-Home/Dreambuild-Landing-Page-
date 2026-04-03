import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Blogs | Dreambuild",
  description: "Dreambuild blog posts on interiors, styling, and renovation.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-8 text-[var(--foreground)] sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col gap-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(40,31,24,0.05)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/DreambuildBanner.jpg"
                alt="Dreambuild Design Studio"
                width={240}
                height={84}
                className="h-10 w-auto rounded-md object-contain"
                priority
              />
            </Link>
            <p className="mt-4 text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
              Interior Blogs
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-5xl">
              Articles and ideas to help clients design with more clarity.
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
          >
            Back to Home
          </Link>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="rounded-[1.9rem] border border-stone-200 bg-white p-5 shadow-[0_20px_60px_rgba(40,31,24,0.05)]"
            >
              <div
                className={`h-56 rounded-[1.6rem] ${
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
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-stone-950">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {post.excerpt}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
