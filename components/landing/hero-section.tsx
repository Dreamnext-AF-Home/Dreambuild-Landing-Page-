import Image from "next/image";
import Link from "next/link";
import { navigation, stats } from "@/lib/landing-data";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-6 pb-[4.5rem] sm:px-10 lg:px-14 lg:pt-8 lg:pb-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(244,213,36,0.24),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(18,18,18,0.08),transparent_24%),linear-gradient(180deg,#fffef8_0%,#fff8d9_56%,#fffdf7_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),transparent)]" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-14 flex items-center justify-between rounded-full border border-yellow-200 bg-white/92 px-5 py-3 shadow-[0_10px_35px_rgba(18,18,18,0.08)] backdrop-blur-md">
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/DreambuildBanner.jpg"
              alt="Dreambuild Design Studio"
              width={240}
              height={84}
              className="h-10 w-auto rounded-md object-contain sm:h-11"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full border border-black/10 bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--ink-soft)]"
          >
            Book Consult
          </Link>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-yellow-300 bg-[var(--brand-soft)] px-4 py-2 text-[0.72rem] font-medium tracking-[0.32em] text-black uppercase shadow-sm">
              Hero Section • Interior Services
            </p>
            <h1 className="mt-6 text-5xl leading-none font-semibold tracking-[-0.06em] text-black text-balance sm:text-6xl lg:text-7xl">
              Refined interior design for homes that want clarity and character.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              Dreambuild creates calm, polished interiors through thoughtful
              planning, clean material stories, and a modern design language
              that feels elevated without becoming cold.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--brand-deep)]"
              >
                Explore Services
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[var(--brand-soft)]"
              >
                View Interior Projects
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-yellow-200 bg-white p-5 shadow-[0_18px_45px_rgba(18,18,18,0.06)]"
                >
                  <div className="text-2xl font-semibold tracking-[-0.05em] text-black">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-14 h-32 w-32 rounded-full bg-[var(--brand-soft)] blur-3xl" />
            <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-yellow-200 blur-3xl" />

            <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-[2rem] border border-yellow-200 bg-white p-4 shadow-[0_24px_70px_rgba(18,18,18,0.08)]">
                  <div className="h-[21rem] rounded-[1.5rem] bg-[linear-gradient(155deg,#121212_0%,#4e4e4e_18%,#f4d524_100%)]" />
                </div>
                <div className="rounded-[1.7rem] border border-yellow-300/35 bg-black p-5 text-white shadow-[0_20px_50px_rgba(18,18,18,0.2)]">
                  <p className="text-[0.68rem] tracking-[0.28em] uppercase text-yellow-300">
                    Interior Request
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-200">
                    Elegant, clean, and presentation-ready layouts with a more
                    modern studio tone and stronger visual hierarchy.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-8 sm:pt-12">
                <div className="overflow-hidden rounded-[2rem] border border-yellow-200 bg-white p-4 shadow-[0_24px_70px_rgba(18,18,18,0.08)]">
                  <div className="h-52 rounded-[1.4rem] bg-[linear-gradient(160deg,#fff9d3_0%,#f4d524_52%,#121212_100%)]" />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-yellow-200 bg-white p-4 shadow-[0_24px_70px_rgba(18,18,18,0.08)]">
                  <div className="h-64 rounded-[1.4rem] bg-[linear-gradient(155deg,#fffef8_0%,#fff1a0_44%,#cab000_100%)]" />
                </div>
              </div>
            </div>

            <div className="absolute -left-3 bottom-10 max-w-[16rem] rounded-[1.6rem] border border-yellow-200 bg-white p-5 shadow-[0_22px_60px_rgba(18,18,18,0.08)]">
              <p className="text-[0.68rem] tracking-[0.28em] uppercase text-stone-500">
                Signature Theme
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-black">
                Dreambuild yellow, charcoal contrast, and cleaner modern polish
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
