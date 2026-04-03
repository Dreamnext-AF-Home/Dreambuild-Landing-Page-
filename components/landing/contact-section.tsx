"use client";

import Link from "next/link";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--accent-soft)]">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left Column - Content */}
              <SlideInLeft className="flex flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
                  Start Your Project
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Ready to transform your space?
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                  Let&apos;s discuss your vision and create a home that reflects your 
                  style, needs, and aspirations.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--dark)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--dark-muted)] hover:scale-105"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--foreground)] hover:scale-105"
                  >
                    Browse Portfolio
                  </Link>
                </div>
              </SlideInLeft>

              {/* Right Column - Contact Info */}
              <SlideInRight delay={0.2} className="bg-[var(--dark)] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                <p className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                  Get in Touch
                </p>

                <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 hover:border-white/20">
                      <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                        Email
                      </p>
                      <p className="mt-2 text-base font-medium">
                        hello@dreambuild.studio
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 hover:border-white/20">
                      <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                        Specialty
                      </p>
                      <p className="mt-2 text-base font-medium">
                        Modern residential interiors with refined character
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 hover:border-white/20">
                      <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                        Deliverables
                      </p>
                      <p className="mt-2 text-base font-medium">
                        Concepts, selections, layouts, and presentation-ready designs
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </SlideInRight>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
