import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "./overview";

export function AuthorSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 pt-12 lg:pt-14 2xl:pt-20 pb-12 lg:pb-[100px] 2xl:pb-[155px]">
      <SectionHeader title="Author" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 2xl:gap-20 lg:pl-[180px] 2xl:pl-[265px]">
        <ScrollReveal variant="fade-up" duration={900} className="w-full lg:w-[380px] 2xl:w-[475px] shrink-0 text-[#3E3E3E] text-[15px] lg:text-[15px] 2xl:text-[17px] font-medium leading-[1.5] text-justify space-y-4">
          <p>
            <strong>Roberto Bolaño</strong>, a Chilean novelist, short-story writer, poet and essayist, was born in Chile in 1953. After moving to Mexico when he was young, he returned to Chile in 1973 to &ldquo;help build the revolution&rdquo; by supporting Allende.
          </p>
          <p>
            After the right-wing coup toppled the socialist government, Bolaño was arrested for being a terrorist. He spent 8 days in jail, ultimately being freed by former classmates who were now detectives. Bolaño moved to Europe in 1977, finally ending up in Spain, where he married and settled near Barcelona. There, he worked as a dishwasher, campground custodian, bellhop, and garbage collector.
          </p>
          <p>
            <strong>Literatura Nazi de las Americas (Nazi Literature in the Americas)</strong> was published in 1996, though the events of the book take place from the late 19th century up to 2010. The last chapter, <strong>&ldquo;The Infamous Ramirez Hoffman&rdquo;</strong>, was later expanded into a novel Estrella Distante (Distant Star). In 1999, he won the Rómulo Gallegos Prize for his novel Los Detectives Salvajes (The Savage Detectives). In 2008, he was posthumously awarded the National Book Critics Circle Award for Fiction for his novel 2666.
          </p>
          <p>
            Six weeks before Bolanõ&rsquo;s death in 2003, at an international conference in Seville, his fellow Latin American novelists hailed him as the most important figure of his generation.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={200} duration={900} className="lg:w-[360px] 2xl:w-[455px] shrink-0">
          <div className="relative bg-[#eddbd7] rounded-lg overflow-hidden w-full lg:w-[280px] 2xl:w-[340px] lg:h-[380px] 2xl:h-[460px] aspect-[340/460] mb-8">
            <Image
              src="/images/roberto.webp"
              alt="Roberto Bolaño"
              fill
              className="object-cover mix-blend-multiply opacity-[0.93]"
              sizes="338px"
            />
          </div>
          <p className="text-[#3E3E3E] text-xl lg:text-[21px] 2xl:text-[25px] font-medium leading-[1.2] max-w-[340px]">
            &ldquo;[Roberto Bolaño] The most significant Latin American literary voice of his generation.&rdquo;
          </p>
          <p className="text-[#b8b8b8] font-bold text-lg lg:text-lg 2xl:text-[21px] leading-none mt-6">
            The New York Times
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
