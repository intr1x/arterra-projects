import Image from "next/image";

export function CtaSection() {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
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
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 py-12 lg:py-20 px-6 md:px-10 lg:pl-[300px] lg:pr-20">
        <div className="flex items-center gap-6 lg:gap-8 shrink-0">
          <h3 className="text-[36px] lg:text-[61px] font-bold leading-[0.9] text-[#3E3E3E]">
            Arterra<br />Project
          </h3>
          <div className="w-px self-stretch bg-black/15" />
        </div>
        <p className="text-[18px] lg:text-[27px] font-light leading-[1.3] text-[#3E3E3E] max-w-[776px]">
          embodies their philosophy of artistic collaboration as a living form
          and exists to nurture their exploration of the synthesis of literature,
          theater, and classical music.
        </p>
      </div>
    </section>
  );
}
