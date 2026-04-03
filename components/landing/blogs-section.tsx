"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/landing-data";
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

export function BlogsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
              Interior Insights
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Helpful reads for planning and styling your space
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--foreground)] hover:scale-105"
          >
            View All Articles
          </Link>
        </FadeUp>

        {/* Blog Posts Grid */}
        <StaggerContainer className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3" staggerDelay={0.1}>
          {blogPosts.slice(0, 3).map((post, index) => (
            <StaggerItem key={post.title}>
              <article className="group">
                <Link href={`/blogs/${post.id}`} className="block">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className={`aspect-[16/10] ${
                          index === 0
                            ? "bg-gradient-to-br from-[#e8e0d4] via-[#d4c8b8] to-[#c0b0a0]"
                            : index === 1
                              ? "bg-gradient-to-br from-[#f5f0e8] via-[#e8e0d4] to-[#d8cec0]"
                              : "bg-gradient-to-br from-[#d8cec0] via-[#e8e0d4] to-[#f0ebe3]"
                        }`}
                      />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                        <span className="font-medium tracking-widest text-[var(--accent)] uppercase">
                          {post.category}
                        </span>
                        <span>-</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-medium tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--muted)]">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                        Read article
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
