import Image from "next/image";
import { ScrollReveal, RevealGroup } from "./scroll-reveal";

export function CtaSection() {
  return (
    <section className="bg-white">
      <RevealGroup className="flex flex-col md:flex-row gap-4 lg:gap-5 2xl:gap-6" stagger={200} variant="scale">
        <div className="relative w-full md:w-1/2 aspect-[16/9] overflow-hidden">
          <Image
            src="/images/Rectangle 3.webp"
            alt="Anastasya Terenkova performing on piano"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative w-full md:w-1/2 aspect-[16/9] overflow-hidden">
          <Image
            src="/images/Rectangle 4.webp"
            alt="John Malkovich on stage"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </RevealGroup>

      <ScrollReveal variant="fade-up" duration={900}>
        <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-8 2xl:gap-10 py-10 sm:py-12 lg:py-14 2xl:py-20 px-6 md:px-10 lg:pl-[200px] 2xl:pl-[300px] lg:pr-12 2xl:pr-20">
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-6 2xl:gap-8 shrink-0">
            <h3 className="text-[22px] sm:text-[36px] lg:text-[46px] 2xl:text-[61px] font-bold leading-[0.9] text-[#3E3E3E]">
              Arterra<br />Project
            </h3>
            <div className="w-[1.5px] sm:w-[2px] self-stretch bg-[#3E3E3E]" />
          </div>
          <p className="text-[13px] sm:text-[18px] lg:text-[22px] 2xl:text-[27px] font-light leading-[1.3] text-[#3E3E3E] max-w-[776px]">
            embodies their philosophy of artistic collaboration as a living form
            and exists to nurture their exploration of the synthesis of literature,
            theater, and classical music.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
