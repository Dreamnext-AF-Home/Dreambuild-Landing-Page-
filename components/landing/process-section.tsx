"use client";

import { processSteps } from "@/lib/landing-data";
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="overflow-hidden rounded-3xl bg-[var(--dark)]">
            <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left Column */}
                <SlideInLeft>
                  <p className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                    Our Process
                  </p>
                  <h2 className="mt-4 text-3xl font-medium tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                    Clear design direction before the build stage
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-neutral-400">
                    We follow a structured process to ensure every project is 
                    thoughtfully planned and executed to perfection.
                  </p>
                </SlideInLeft>

                {/* Right Column - Steps */}
                <StaggerContainer className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1" staggerDelay={0.15}>
                  {processSteps.map((step, index) => (
                    <StaggerItem key={step.title}>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                        <div className="flex items-start gap-4">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-medium text-[var(--dark)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-lg font-medium text-white">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
