export function WhoWeAreSection() {
  return (
    <section id="about" className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-yellow-200 bg-white p-6 shadow-[0_24px_70px_rgba(18,18,18,0.06)] sm:p-8">
          <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl">
            A design studio focused on calm, modern, and highly livable interiors.
          </h2>
          <p className="mt-5 text-sm leading-8 text-stone-700 sm:text-base">
            Dreambuild creates residential interiors that balance softness,
            structure, and clarity. We work on spaces that need a more refined
            material story, stronger visual consistency, and a design direction
            that feels elegant without looking overdone.
          </p>
          <p className="mt-4 text-sm leading-8 text-stone-700 sm:text-base">
            From planning and styling to presentation-ready concepts, we shape
            homes that feel intentional, warm, and easy to live in every day.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-yellow-200 bg-[linear-gradient(160deg,#fff9d9_0%,#f4d524_100%)] p-6 shadow-[0_24px_70px_rgba(18,18,18,0.05)]">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-700 uppercase">
              Studio Values
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Thoughtful space planning",
                "Refined material combinations",
                "Clean luxury visual language",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/75 px-4 py-4 text-sm text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-yellow-300/35 bg-black p-6 text-white shadow-[0_24px_70px_rgba(18,18,18,0.16)]">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-yellow-300 uppercase">
              Why Clients Choose Us
            </p>
            <div className="mt-6 grid gap-4">
              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-yellow-300">01</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  We turn scattered inspiration into one cohesive direction.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-yellow-300">02</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  We keep the interiors elevated while still practical and warm.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-yellow-300">03</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  We present ideas clearly enough for confident next-step decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
