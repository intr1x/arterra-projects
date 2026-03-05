import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { QuotesSection } from "@/components/quotes-section";
import { CtaSection } from "@/components/cta-section";
import { PressSection } from "@/components/press-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <QuotesSection />
      <CtaSection />
      <PressSection />
    </>
  );
}
