import { ScrollReveal } from "@/components/scroll-reveal";

export function QuoteVillage() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-16 lg:py-20 2xl:py-28 flex justify-center">
      <ScrollReveal variant="fade-up" duration={900} className="max-w-[910px] w-full">
        <p className="text-[#3E3E3E] text-xl lg:text-[22px] 2xl:text-[28px] font-medium leading-[1.2] text-center">
          &raquo; [Roberto Bolaño] An unsettling mix of overt satire and covert elegy. &laquo;
        </p>
        <p className="text-[#b8b8b8] font-bold text-lg lg:text-lg 2xl:text-[21px] leading-none mt-6 lg:pl-[35px] 2xl:pl-[45px]">
          The Village Voice
        </p>
      </ScrollReveal>
    </section>
  );
}
