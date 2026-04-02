import { ScrollReveal } from "@/components/scroll-reveal";

function SectionHeader({ title }: { title: string }) {
  return (
    <ScrollReveal variant="fade-up" duration={700}>
      <div className="flex items-center gap-4 mb-8 lg:mb-12">
        <p className="font-bold text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-[#3E3E3E] shrink-0">
          {title}
        </p>
        <div className="flex-1 h-px bg-black/20" />
      </div>
    </ScrollReveal>
  );
}

export { SectionHeader };

export function OverviewSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-12 lg:py-20">
      <SectionHeader title="Overview" />

      <div className="lg:px-[155px] max-w-none text-[#3E3E3E] text-xl lg:text-[26px] leading-[1.34] text-justify space-y-4">
        <ScrollReveal variant="fade-up" delay={100}>
          <p>
            <span className="font-light">
              Drawn from a book by one of the giants of contemporary literature, Chilean
            </span>{" "}
            <strong>Roberto Bolaño</strong>
            <span className="font-light">,</span>{" "}
            <strong className="text-[#9A7145]">THE INFAMOUS RAMIREZ HOFFMAN</strong>{" "}
            <span className="font-light">
              is the latest collaboration between
            </span>{" "}
            <strong>John Malkovich</strong>{" "}
            <span className="font-light">and</span>{" "}
            <strong>Anastasya Terenkova</strong>
            <span className="font-light">.</span>
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={200}>
          <p className="font-light">
            An innovative piece of storytelling,{" "}
            <strong className="font-bold">The Infamous Ramirez Hoffman</strong>{" "}
            combines a gripping spoken narrative with the drama and passionate soul of Tango. For 90 minutes, this music-literature dialogue has the audience on the edge of their seats, struggling along with the narrator to discover who Ramirez Hoffman really is: a fearless pilot who writes poems in the sky with airplane smoke or a cold-blooded murderer.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={300}>
          <p className="font-light">
            <strong className="font-bold">The Infamous Ramirez Hoffman</strong>{" "}
            is a profoundly involving exploration of the complexity and appeal of evil, the nature of free will, the limits of personal responsibility, the state of our society.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
