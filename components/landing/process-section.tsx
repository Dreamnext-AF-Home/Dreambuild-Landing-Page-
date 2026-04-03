import { processSteps } from "@/lib/landing-data";

export function ProcessSection() {
  return (
    <section id="process" className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-[#171311] px-6 py-8 text-white shadow-[0_35px_90px_rgba(18,12,8,0.28)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-400 uppercase">
              Our Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl">
              Clear design direction before the build stage gets expensive.
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone-300 sm:text-base">
              This darker section mirrors the contrast break in your reference,
              but gives it a more polished presentation with stronger card
              design and tighter hierarchy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-sm tracking-[0.28em] text-stone-500 uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
