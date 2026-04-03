"use client";

import { services } from "@/lib/landing-data";
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
            Interior Services
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Comprehensive design services tailored to your vision
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
            From full interior design to styling and finishing touches, we offer 
            services that transform your space into something extraordinary.
          </p>
        </FadeUp>

        {/* Services Cards */}
        <StaggerContainer className="mt-16 space-y-6 lg:mt-20" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={service.id}>
              <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-all hover:shadow-lg">
                <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Visual Side */}
                  <div className={`relative min-h-[300px] bg-gradient-to-br ${service.accent} p-6 lg:min-h-[400px] lg:p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="absolute inset-6 lg:inset-8">
                      <div className={`h-3/5 rounded-xl bg-gradient-to-br ${service.panel} opacity-80 transition-transform duration-500 group-hover:scale-105`} />
                      <div className="absolute right-0 bottom-0 w-2/3 rounded-xl border border-white/40 bg-white/60 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-4px]">
                        <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
                          Visual Direction
                        </p>
                        <p className="mt-2 text-sm text-[var(--foreground)]">
                          Clean forms, layered neutrals, and warm material depth.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <p className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                      {service.id}
                    </p>
                    <h3 className="mt-4 text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                      {service.description}
                    </p>

                    <div className="mt-8 space-y-3">
                      {service.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <p className="text-sm text-[var(--muted)]">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
