import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectHero } from "@/components/project-hero";

export const metadata: Metadata = {
  title: "The Infamous Ramirez Hoffman — Arterra Projects",
  description:
    "The Infamous Ramirez Hoffman — based on a novel by Roberto Bolaño. An Arterra Projects production.",
};

export default function RamirezHoffmanPage() {
  return (
    <>
      <ProjectHero
        title="The Infamous Ramirez Hoffman"
        subtitle="Based on a novel by Roberto Bolaño"
        imageSrc="/images/project-hoffman.jpg"
        bgColor="#070605"
      />

      <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 lg:mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-[28px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] text-black mb-6">
                About the Production
              </h2>
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                Drawn from Roberto Bolaño&apos;s &ldquo;Nazi Literature in the
                Americas,&rdquo; &ldquo;The Infamous Ramirez Hoffman&rdquo;
                tells the chilling story of a Chilean air force pilot and poet
                whose artistic ambitions take a dark, terrifying turn under
                Pinochet&apos;s dictatorship.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                John Malkovich inhabits Bolaño&apos;s narrator with
                characteristic intensity, while Anastasya Terenkova&apos;s
                piano accompaniment creates a soundscape that oscillates
                between beauty and menace, mirroring the story&apos;s
                exploration of art corrupted by ideology.
              </p>
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                This production is a meditation on the relationship between
                art and evil, beauty and horror — themes that resonate
                deeply in Bolaño&apos;s literary universe and find new
                expression through the combined artistry of music and
                dramatic narration.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="divider text-black mb-3" />
          <p className="font-medium text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-black mb-8 lg:mb-12">
            Gallery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-dark-card">
              <Image
                src="/images/project-hoffman.jpg"
                alt="The Infamous Ramirez Hoffman — performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-dark">
              <Image
                src="/images/footer-bg.jpg"
                alt="The Infamous Ramirez Hoffman — rehearsal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 lg:mt-24 text-center">
            <Link
              href="/tour-dates"
              className="inline-flex items-center justify-center px-8 py-3 rounded-3xl bg-gold text-white text-base lg:text-lg hover:bg-gold/80 transition-colors"
            >
              Upcoming Tour Dates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
