import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 pt-10 pb-20 sm:px-10 lg:px-14 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-yellow-200 bg-[linear-gradient(135deg,#fffef7_0%,#fff3a6_40%,#ffffff_100%)] shadow-[0_30px_90px_rgba(18,18,18,0.07)]">
        <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
              Start Your Project
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl lg:text-5xl">
              A landing page that feels premium and now matches the Dreambuild brand.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-700 sm:text-base">
              The layout now carries the same yellow and charcoal identity as
              your banner while keeping the interior-design feel clean and modern.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--brand-deep)]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
              >
                Browse Portfolio
              </Link>
            </div>
          </div>

          <div className="rounded-[1.8rem] bg-black p-6 text-white">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-yellow-300 uppercase">
              Studio Notes
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm text-stone-400">Email</p>
                <p className="mt-1 text-base font-medium">hello@dreambuild.studio</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm text-stone-400">Specialty</p>
                <p className="mt-1 text-base font-medium">
                  Modern residential interiors with stronger brand character
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm text-stone-400">Deliverables</p>
                <p className="mt-1 text-base font-medium">
                  Concepts, selections, layout, projects, and interior content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
