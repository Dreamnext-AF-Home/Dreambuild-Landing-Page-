"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
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
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--foreground)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden rounded-full bg-[var(--dark)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--dark-muted)] sm:inline-flex"
            >
              Book Consult
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span className={`h-0.5 w-4 bg-[var(--foreground)] transition-all ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`h-0.5 w-4 bg-[var(--foreground)] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-4 bg-[var(--foreground)] transition-all ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--foreground)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-[var(--dark)] px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Book Consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
