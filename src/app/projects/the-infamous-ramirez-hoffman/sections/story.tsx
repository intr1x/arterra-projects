import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "./overview";

export function StorySection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-12 lg:py-14 2xl:py-20">
      <SectionHeader title="Story" />

      <ScrollReveal variant="fade-up" duration={900}>
        <div className="flex gap-6 lg:gap-8 2xl:gap-10 items-start lg:pl-[80px] 2xl:pl-[130px] lg:pr-[180px] 2xl:pr-[270px]">
          <div className="relative w-[60px] h-[60px] lg:w-[80px] 2xl:w-[100px] lg:h-[80px] 2xl:h-[100px] rounded-full overflow-hidden shrink-0 bg-[#10110c] -mt-5">
            <Image
              src="/images/avatar-malkovich.webp"
              alt="John Malkovich"
              fill
              className="object-cover object-top"
              sizes="100px"
            />
          </div>

          <div className="max-w-[1034px]">
            <div className="text-[#3E3E3E] text-lg lg:text-[21px] 2xl:text-[25px] font-medium leading-[1.26] text-justify space-y-4">
              <p>
                &ldquo;The piece is adapted from the novel Nazi Literature in the Americas by Roberto Bolaño. The book features fictional histories of imaginary Nazis, most all of whom have some connection, however tenuous, to the literary world - both the real one and Bolaño&rsquo;s completely invented one.
              </p>
              <p>
                The characters of Bolaño&rsquo;s &ldquo;Nazi Literature in the Americas&rdquo; are lost souls, filled with boundless potential in some cases, and equally filled with boundless hatreds and certainties.&rdquo;
              </p>
            </div>
            <p className="text-[#9A7145] font-bold text-lg lg:text-lg 2xl:text-[21px] leading-none mt-6">
              John Malkovich
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
