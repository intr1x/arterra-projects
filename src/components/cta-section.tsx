import Image from "next/image";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 pb-12 lg:pb-20">
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[557px] rounded-lg overflow-hidden bg-black">
        <div className="absolute left-0 top-0 w-full lg:w-[55%] h-full">
          <Image
            src="/images/cta-bg.jpg"
            alt="Arterra Projects live performance"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 lg:block hidden" />
          <div className="absolute inset-0 bg-black/40 lg:hidden" />
        </div>

        <div className="relative lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 flex flex-col gap-6 p-8 lg:p-0 max-w-[426px] h-full lg:h-auto justify-center lg:justify-start">
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-[1.3] text-white tracking-[-0.01em]">
            Experience Arterra Projects live
          </h2>
          <Link
            href="/tour-dates"
            className="inline-flex items-center justify-center px-6 py-2 rounded-3xl bg-gold text-white text-base hover:bg-gold/80 transition-colors w-fit"
          >
            Upcoming Tour Dates
          </Link>
        </div>
      </div>
    </section>
  );
}
