import { BlogsSection } from "@/components/landing/blogs-section";
import { Footer } from "@/components/landing/footer";
import { GallerySection } from "@/components/landing/gallery-section";
import { ContactSection } from "@/components/landing/contact-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WhoWeAreSection } from "@/components/landing/who-we-are-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <GallerySection />
      <ProjectsSection />
      <BlogsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
