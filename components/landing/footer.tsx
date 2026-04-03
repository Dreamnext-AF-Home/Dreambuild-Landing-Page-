import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-yellow-200 bg-[linear-gradient(180deg,#fffdf7_0%,#fff4ba_100%)] px-6 py-8 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Image
            src="/Images/DreambuildBanner.jpg"
            alt="Dreambuild Design Studio"
            width={220}
            height={77}
            className="h-10 w-auto rounded-md object-contain"
          />
          <p className="mt-3 max-w-md text-sm leading-7 text-stone-700">
            Interior design studio crafting modern residential spaces with
            cleaner layouts, refined finishes, and a Dreambuild-led identity.
          </p>
        </div>

        <div className="grid gap-2 text-sm text-stone-700">
          <Link href="#about" className="transition hover:text-black">
            Who We Are
          </Link>
          <Link href="#services" className="transition hover:text-black">
            Services
          </Link>
          <Link href="/projects" className="transition hover:text-black">
            Projects
          </Link>
          <Link href="/blogs" className="transition hover:text-black">
            Blogs
          </Link>
          <Link href="#contact" className="transition hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
