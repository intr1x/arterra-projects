import { ScrollReveal } from "@/components/scroll-reveal";

export function BottomTitle() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-16 lg:py-20 2xl:py-28">
      <div className="w-full h-px bg-black/20 mb-12 lg:mb-14 2xl:mb-20" />

      <ScrollReveal variant="blur" duration={1200}>
        <div className="text-center">
          <p className="text-[#3E3E3E] text-[40px] sm:text-[60px] lg:text-[66px] 2xl:text-[90px] leading-none tracking-[0.01em] capitalize">
            <span className="font-thin">The </span>
            <span className="font-bold italic">Infamous</span>
            <br />
            <span className="font-thin">Ramirez Hofmann</span>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
