import { services } from "@/lib/landing-data";

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-[4.5rem] sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-t border-stone-300/80 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium tracking-[0.32em] text-stone-500 uppercase">
              Interior Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-4xl lg:text-5xl">
              Built like a studio presentation, not a basic services grid.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            This section keeps the calm luxury tone from your reference but
            adds more structure, contrast, and visual storytelling so the page
            feels more premium and modern.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="grid gap-6 rounded-[2rem] border border-stone-200/80 bg-white/80 p-5 shadow-[0_24px_70px_rgba(65,41,25,0.07)] backdrop-blur-sm lg:grid-cols-[1.02fr_0.98fr] lg:p-6"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`relative h-full min-h-[20rem] overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${service.accent} p-5`}
                >
                  <div
                    className={`absolute inset-x-5 top-5 h-[58%] rounded-[1.5rem] bg-gradient-to-br ${service.panel}`}
                  />
                  <div className="absolute right-5 bottom-5 h-24 w-24 rounded-[1.4rem] border border-white/50 bg-white/30 backdrop-blur-sm" />
                  <div className="absolute left-5 bottom-5 w-[58%] rounded-[1.4rem] border border-white/50 bg-white/55 p-4 backdrop-blur-sm">
                    <p className="text-[0.68rem] tracking-[0.28em] uppercase text-stone-600">
                      Visual Direction
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      Clean forms, layered neutrals, and warm material depth.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col justify-between rounded-[1.7rem] bg-[#fcfaf7] p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div>
                  <p className="text-sm tracking-[0.32em] text-stone-400 uppercase">
                    {service.id}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-3">
                  {service.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm leading-6 text-stone-700"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
