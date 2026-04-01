import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { QuotesSection } from "@/components/quotes-section";
import { CtaSection } from "@/components/cta-section";
import { QuotesSection2 } from "@/components/quotes-section-2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <QuotesSection />
      <CtaSection />
      <div className="relative w-full aspect-[21/9] bg-black">
        <Image
          src="/images/IRH stills_2.28.6 4.webp"
          alt="Performance still"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <QuotesSection2 />
    </>
  );
}
