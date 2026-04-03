import { testimonials } from "@/lib/landing-data";

export function TestimonialsSection() {
  return (
    <section className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
            Client Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-4xl lg:text-5xl">
            Proof that the calm luxury direction lands well in real homes.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="rounded-[1.9rem] border border-stone-200/80 bg-white/82 p-6 shadow-[0_24px_70px_rgba(65,41,25,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-14 w-14 rounded-2xl ${
                    index === 0
                      ? "bg-[linear-gradient(160deg,#c2a893,#f3e9de)]"
                      : "bg-[linear-gradient(160deg,#967967,#d9c3b4)]"
                  }`}
                />
                <div>
                  <h3 className="font-semibold text-stone-950">{item.name}</h3>
                  <p className="text-sm text-stone-500">{item.role}</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-stone-700">
                &ldquo;{item.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
