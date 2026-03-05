import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectHero } from "@/components/project-hero";

export const metadata: Metadata = {
  title: "Report On The Blind — Arterra Projects",
  description:
    "Report On The Blind — based on a book by Ernesto Sabato and music by Alfred Schittke. An Arterra Projects production.",
};

export default function ReportOnTheBlindPage() {
  return (
    <>
      <ProjectHero
        title="Report On The Blind"
        subtitle="Based on a book by Ernesto Sabato and music by Alfred Schittke"
        imageSrc="/images/project-blind.jpg"
        bgColor="#f2f2f2"
        imageClassName="mix-blend-multiply"
      />

      <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 lg:mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-[28px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] text-black mb-6">
                About the Production
              </h2>
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                &ldquo;Report On The Blind&rdquo; is drawn from Ernesto
                Sabato&apos;s seminal novel &ldquo;On Heroes and Tombs&rdquo;
                (1961). This haunting chapter follows Fernando Vidal
                Olmos&apos;s obsessive investigation into a secret conspiracy
                of blind people who, he believes, control the world from the
                shadows.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                John Malkovich&apos;s mesmerizing narration interweaves with
                Alfred Schnittke&apos;s emotionally charged compositions,
                performed live by Anastasya Terenkova. The result is a
                profound theatrical experience that blurs the lines between
                reality, paranoia, and the unseen forces that shape our
                existence.
              </p>
              <p className="text-base lg:text-lg leading-[1.5] text-black/80">
                The production has been performed at major venues across
                Europe, receiving critical acclaim for its innovative fusion
                of dramatic narration and classical music performance.
              </p>
            </div>
          </div>

          {/* Press */}
          <div className="divider text-black mb-3" />
          <p className="font-medium text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-black mb-8 lg:mb-12">
            Press
          </p>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mb-16 lg:mb-24">
            <blockquote className="md:w-1/2 text-xl lg:text-2xl leading-[1.2] tracking-[-0.01em] text-dark-alt">
              &laquo; The two complexities, musical and textual, could have
              been condemned to follow their separate paths, but it was the
              generosity of those two extra-ordinary artists involved that
              triggered the game of exchanges and references. &raquo;
              <cite className="block mt-4 text-base lg:text-lg not-italic text-dark-alt/40">
                teatroecritica.net
              </cite>
            </blockquote>
            <div className="md:w-1/2 flex flex-col gap-8">
              <blockquote className="text-xl lg:text-2xl leading-[1.2] tracking-[-0.01em] text-dark-alt">
                &laquo; A little gem to be cherished. &raquo;
                <cite className="block mt-4 text-base lg:text-lg not-italic text-dark-alt/40">
                  teatroecritica.net
                </cite>
              </blockquote>
              <blockquote className="text-xl lg:text-2xl leading-[1.2] tracking-[-0.01em] text-dark-alt">
                &laquo; A real sound drama &raquo;
                <cite className="block mt-4 text-base lg:text-lg not-italic text-dark-alt/40">
                  teatroecritica.net
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Gallery */}
          <div className="divider text-black mb-3" />
          <p className="font-medium text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-black mb-8 lg:mb-12">
            Gallery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/project-blind.jpg"
                alt="Report On The Blind — performance"
                fill
                className="object-cover mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-dark">
              <Image
                src="/images/cta-bg.jpg"
                alt="Report On The Blind — rehearsal"
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
