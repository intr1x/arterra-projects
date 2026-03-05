import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Arterra Projects",
  description:
    "Learn about Arterra Projects, an artist collective by actor John Malkovich and pianist Anastasya Terenkova.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] max-h-[800px] bg-dark overflow-hidden">
        <Image
          src="/images/project-hoffman.jpg"
          alt="Arterra Projects"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/20" />
        <div className="absolute bottom-12 lg:bottom-20 left-6 md:left-10 lg:left-20">
          <h1 className="text-white text-[40px] lg:text-[80px] leading-[1] tracking-[0.01em] uppercase">
            About Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 lg:mb-32">
            <div className="lg:w-1/2">
              <p className="text-[28px] lg:text-5xl leading-[1.2] tracking-[-0.01em] text-black">
                Arterra Projects is an artist collective by{" "}
                <em className="italic">actor John Malkovich</em> and{" "}
                <em className="italic">pianist Anastasya Terenkova.</em>
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                The collective explores the powerful intersection of spoken word
                and classical music, creating immersive theatrical experiences
                that bring literary masterpieces to life through the combined
                artistry of dramatic narration and live musical performance.
              </p>
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                Founded on a shared passion for storytelling through multiple
                artistic mediums, Arterra Projects has captivated audiences
                across Europe and beyond with performances that transcend
                traditional boundaries between music, theater, and literature.
              </p>
            </div>
          </div>

          {/* Artists */}
          <div className="divider text-black mb-3" />
          <p className="font-medium text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-black mb-10 lg:mb-16">
            The Artists
          </p>

          <div className="flex flex-col gap-20 lg:gap-28">
            {/* John Malkovich */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/images/artist-malkovich.jpg"
                  alt="John Malkovich"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl lg:text-5xl leading-[1.1] text-black">
                  John Malkovich
                </h2>
                <p className="text-base font-medium text-gold">
                  Co-founder and narrator
                </p>
                <blockquote className="text-xl lg:text-[28px] leading-[1.3] text-dark-alt/80 max-w-[520px]">
                  &ldquo;I find the combination of story, text, and live music
                  &ndash; almost always classical &ndash; is a powerful,
                  fascinating and under-explored medium.&rdquo;
                </blockquote>
                <p className="text-base lg:text-lg leading-[1.5] text-black/70 max-w-[500px]">
                  An Academy Award-nominated actor, producer, and director,
                  John Malkovich has appeared in over 70 films and is known
                  for his powerful stage and screen presence. With Arterra
                  Projects, he brings literary texts to life through his
                  distinctive and compelling narrative style.
                </p>
              </div>
            </div>

            {/* Anastasya Terenkova */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-start">
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/images/artist-terenkova.jpg"
                  alt="Anastasya Terenkova"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl lg:text-5xl leading-[1.1] text-black">
                  Anastasya Terenkova
                </h2>
                <p className="text-base font-medium text-gold">
                  Co-founder and pianist
                </p>
                <blockquote className="text-xl lg:text-[28px] leading-[1.3] text-dark-alt/80 max-w-[520px]">
                  &ldquo;The synthesis of music and text takes us beyond the
                  field of consciousness. Music always draws us into a
                  dialogue, which ultimately becomes a conversation with
                  ourselves.&rdquo;
                </blockquote>
                <p className="text-base lg:text-lg leading-[1.5] text-black/70 max-w-[500px]">
                  A classically trained pianist of exceptional talent,
                  Anastasya Terenkova brings depth and sensitivity to each
                  Arterra Projects performance. Her interpretations of
                  classical masterworks create an emotional landscape that
                  elevates the spoken word to new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
