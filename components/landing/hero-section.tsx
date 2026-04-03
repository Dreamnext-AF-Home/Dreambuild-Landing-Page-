"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation, stats } from "@/lib/landing-data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/DreambuildBanner.jpg"
                alt="Dreambuild Design Studio"
                width={180}
                height={60}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="hidden rounded-full bg-[var(--dark)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--dark-muted)] sm:inline-flex"
                >
                  Book Consult
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1">
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="h-0.5 w-4 bg-[var(--foreground)]"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-0.5 w-4 bg-[var(--foreground)]"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="h-0.5 w-4 bg-[var(--foreground)]"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-t border-[var(--border)] bg-[var(--background)] px-6 overflow-hidden md:hidden"
            >
              <nav className="flex flex-col gap-3 py-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 rounded-full bg-[var(--dark)] px-5 py-2.5 text-center text-sm font-medium text-white block"
                  >
                    Book Consult
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left Column */}
          <div className="max-w-2xl">
            <FadeUp delay={0.2}>
              <p className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--muted)] uppercase">
                Interior Design Studio
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <h1 className="mt-8 text-4xl font-medium leading-tight tracking-tight text-[var(--foreground)] text-balance sm:text-5xl lg:text-6xl">
                Refined interiors for homes that seek clarity and character
              </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                Dreambuild creates calm, polished interiors through thoughtful planning, 
                clean material stories, and a modern design language that feels elevated 
                without becoming cold.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--dark)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--dark-muted)] hover:scale-105"
                >
                  Explore Services
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--foreground)] hover:scale-105"
                >
                  View Projects
                </Link>
              </div>
            </FadeUp>

            {/* Stats */}
            <StaggerContainer className="mt-16 grid grid-cols-3 gap-8" staggerDelay={0.15}>
              {stats.map((item) => (
                <StaggerItem key={item.label}>
                  <p className="text-3xl font-medium tracking-tight text-[var(--foreground)] lg:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {item.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column - Visual */}
          <SlideInRight delay={0.4} className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="overflow-hidden rounded-2xl bg-[#e8e3db]"
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#d4cdc3] via-[#c9bfb2] to-[#b8a99a]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="rounded-2xl bg-[var(--dark)] p-6 text-white"
                >
                  <p className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                    Design Philosophy
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Elegant, clean, and presentation-ready layouts with a modern studio tone.
                  </p>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8 sm:pt-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="overflow-hidden rounded-2xl bg-[#f0ebe3]"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#e6dfd5] via-[#d9cfc2] to-[#ccc0b0]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="overflow-hidden rounded-2xl bg-[#e2dbd1]"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#d6cdc1] via-[#cbbfb1] to-[#bfb1a0]" />
                </motion.div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 bottom-16 max-w-[200px] rounded-xl border border-[var(--border)] bg-white p-4 shadow-lg sm:bottom-24 sm:max-w-[220px]"
            >
              <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
                Signature Style
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
                Warm neutrals with refined, modern polish
              </p>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
