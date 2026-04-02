import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProjectHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dark">
      <Image
        src="/images/dl-136-2.webp"
        alt="The Infamous Ramirez Hoffman"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-10 lg:px-20">
        <ScrollReveal variant="fade-down" delay={300} duration={1000}>
          <div className="pt-[240px] lg:pt-[50px] max-w-[324px]">
            <p className="text-white font-bold text-sm lg:text-xl leading-[1.2] mb-3 lg:mb-4">
              &ldquo;If you behave badly in this life, you&rsquo;ll become a Chilean in the next.&rdquo;
            </p>
            <p className="text-white font-bold text-xl lg:text-[28px] leading-none mb-0.5 lg:mb-1">
              Raul Ruiz
            </p>
            <p className="text-white text-xs lg:text-sm font-medium leading-[1.4]">
              Chilean filmmaker &amp; writer
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 pb-12 lg:pb-20">
          <ScrollReveal variant="fade-up" delay={500} duration={1100}>
            <h1 className="text-white text-[40px] sm:text-[60px] lg:text-[90px] font-bold leading-[0.9] tracking-[0.01em]">
              The <span className="italic">Infamous</span>
              <br />
              Ramirez Hofmann
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={700} duration={1000}>
            <p className="text-white text-xl font-light leading-[1.3] text-left shrink-0">
              Performance in English
              <br />
              Duration 90 minutes
              <br />
              No intermission
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
