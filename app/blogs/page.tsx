import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { blogPosts } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Blog | Dreambuild Design Studio",
  description: "Interior design insights, styling guides, and helpful reads for planning and designing your space.",
};

export default function BlogsPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
              Interior Insights
            </p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl text-balance">
              Helpful reads for planning and styling your space
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              Explore our collection of design insights, styling guides, and practical 
              tips to help you create spaces that feel both beautiful and livable.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="group">
            <Link href={`/blogs/${featuredPost.id}`} className="block">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#e8e0d4] via-[#d4c8b8] to-[#c0b0a0] transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                    <span className="text-xs text-[var(--muted)]">{featuredPost.date}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] sm:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
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
                    <span className="text-sm text-[var(--muted)]">{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
            All Articles
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {otherPosts.map((post, index) => (
              <article key={post.id} className="group">
                <Link href={`/blogs/${post.id}`} className="block">
                  <div className="overflow-hidden rounded-2xl">
                    <div
                      className={`aspect-[16/10] transition-transform duration-500 group-hover:scale-105 ${
                        index % 3 === 0
                          ? "bg-gradient-to-br from-[#d8cec0] via-[#e8e0d4] to-[#ccc0b0]"
                          : index % 3 === 1
                            ? "bg-gradient-to-br from-[#f5f0e8] via-[#e8e0d4] to-[#d8cec0]"
                            : "bg-gradient-to-br from-[#e0d8cc] via-[#d0c4b4] to-[#c4b8a8]"
                      }`}
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                        {post.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                      <span className="text-xs text-[var(--muted)]">{post.date}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-medium tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
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
                      <span className="text-xs text-[var(--muted)]">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-[var(--border)] bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
            Stay inspired
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
            Subscribe to our newsletter for the latest design insights, project reveals, 
            and styling tips delivered to your inbox.
          </p>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--foreground)] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--dark)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--dark-muted)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--background)] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[var(--muted)]">
              &copy; {new Date().getFullYear()} Dreambuild Design Studio. All rights reserved.
            </p>
            <Link
              href="/"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
