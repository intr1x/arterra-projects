"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ScrollReveal, RevealGroup } from "./scroll-reveal";

interface ArtistBio {
  name: string;
  role: string;
  src: string;
  quote: string;
  quoteSource: string;
  sections: { title: string; paragraphs: string[] }[];
}

const ARTISTS: ArtistBio[] = [
  {
    name: "Anastasya Terenkova",
    role: "Co-founder, pianist",
    src: "/images/artist-terenkova.webp",
    quote: "\u00BB A ravishing pianist. \u00AB",
    quoteSource: "Diapason",
    sections: [
      {
        title: "Education and recognition",
        paragraphs: [
          "Born in Moscow and based in Paris, Anastasya has received international critical acclaim and numerous awards, including first prize at the Cincinnati World Piano Competition, the Dorothy MacKenzie Artist Recognition Competition (New York), and the Gawon International Music Award (South Korea).",
          "Anastasya graduated from the renowned Gnessin Special Music School in Moscow, then went on to complete her education with Jacques Rouvier at the National Superior Conservatory of Music and Dance in Paris, training which included the prestigious post-graduate courses Perfectionnement de Piano and Artist Diploma.",
          "Anastasya\u2019s performances are in demand around the world. She has played such illustrious halls as the Salle Gaveau in Paris, the Bozar in Brussels, the Auditorio Nacional de Madrid, The Kings Place in London, Lisinski Hall in Zagreb, Budapest Congress Hall, Helsinki Art Center, Palau de les Arts Reina Sofia in Valencia, Seoul Arts Center, Teatro Coliseo in Buenos Aires. She also regularly records for radio and television (Arte, Medici TV, France Musique, France Culture, Radio Classique etc).",
        ],
      },
    ],
  },
  {
    name: "John Malkovich",
    role: "Co-founder, narrator",
    src: "/images/artist-malkovich.webp",
    quote: "\u00BB One of the most original actors of his generation. \u00AB",
    quoteSource: "The New York Times",
    sections: [
      {
        title: "Career and achievements",
        paragraphs: [
          "John Malkovich is an acclaimed American actor, director, and producer with a career spanning over four decades. He has appeared in more than 70 motion pictures and has received numerous accolades, including two Academy Award nominations.",
          "A founding member of the Steppenwolf Theatre Company in Chicago, Malkovich has been instrumental in shaping American theatre. His stage work has earned him critical acclaim and established him as one of the most versatile performers of his generation.",
          "Beyond acting, Malkovich is a passionate advocate for the arts and has directed several theatrical and operatic productions across Europe. His collaboration with Anastasya Terenkova in Arterra Projects represents his deep commitment to exploring the intersection of literature and music.",
        ],
      },
    ],
  },
];

interface ArtistCardProps {
  artist: ArtistBio;
  onClick: () => void;
}

function ArtistCard({ artist, onClick }: ArtistCardProps) {
  return (
    <div
      className="flex flex-col items-start group cursor-pointer flex-1 sm:flex-initial min-w-0"
      onClick={onClick}
    >
      <div className="relative w-full sm:w-[200px] lg:w-[200px] 2xl:w-[241px] aspect-[3/4] rounded-lg overflow-hidden">
        <Image
          src={artist.src}
          alt={artist.name}
          fill
          className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          sizes="241px"
        />
      </div>
      <div className="pt-3 pl-2">
        <p className="text-[17px] sm:text-[23px] lg:text-xl 2xl:text-2xl font-medium leading-[1.15] tracking-[-0.01em] text-[#3E3E3E]">
          {artist.name}
        </p>
        <p className="text-[12px] sm:text-[15px] lg:text-sm 2xl:text-base leading-[1.4] text-black/50">
          {artist.role}
        </p>
      </div>
    </div>
  );
}

interface ArtistDrawerProps {
  artist: ArtistBio | null;
  onClose: () => void;
}

function ArtistDrawer({ artist, onClose }: ArtistDrawerProps) {
  const isOpen = artist !== null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const drawerContent = (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/20 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-[60] h-full w-full sm:w-[480px] lg:w-[480px] 2xl:w-[560px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {artist && (
          <div className="px-6 lg:px-6 2xl:px-8 pb-6 lg:pb-6 2xl:pb-8 pt-6 lg:pt-6 2xl:pt-8">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-8 lg:mb-8 2xl:mb-10">
              <button
                onClick={onClose}
                className="lg:hidden absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M2 2L16 16M16 2L2 16" />
                </svg>
              </button>
              <Image
                src={artist.src}
                alt={artist.name}
                fill
                className="object-cover object-top"
                sizes="500px"
              />
            </div>

            <div className="text-center mb-10 lg:mb-10 2xl:mb-12">
              <p className="text-xl lg:text-xl 2xl:text-2xl leading-[1.3] text-dark-alt mb-2">
                {artist.quote}
              </p>
              <p className="text-sm lg:text-sm 2xl:text-base text-gold">
                {artist.quoteSource}
              </p>
            </div>

            <h2 className="text-[28px] lg:text-[26px] 2xl:text-[32px] leading-[1.1] text-black tracking-[-0.02em] mb-6 lg:mb-6 2xl:mb-8">
              {artist.name}.
            </h2>

            {artist.sections.map((section) => (
              <div key={section.title} className="mb-8">
                <p className="text-sm font-medium text-black/50 mb-4">
                  {section.title}
                </p>
                <div className="flex flex-col gap-4">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15px] lg:text-[15px] 2xl:text-base leading-[1.6] text-black/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (!mounted) return null;
  return createPortal(drawerContent, document.body);
}

export function AboutSection() {
  const [selectedArtist, setSelectedArtist] = useState<ArtistBio | null>(null);

  return (
    <>
      <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-12 lg:py-14 2xl:py-20">
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="flex items-center gap-4 mb-10 lg:mb-10 2xl:mb-14">
            <p className="font-bold text-lg lg:text-lg 2xl:text-xl leading-[1.3] tracking-[0.01em] text-[#3E3E3E] shrink-0">
              About Us
            </p>
            <div className="flex-1 h-px bg-black/20" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 2xl:gap-16">
          <RevealGroup className="grid grid-cols-2 sm:flex sm:flex-row gap-4 lg:gap-5 2xl:gap-6 shrink-0" stagger={150} variant="fade-up">
            {ARTISTS.map((artist) => (
              <ArtistCard
                key={artist.name}
                artist={artist}
                onClick={() => setSelectedArtist(artist)}
              />
            ))}
          </RevealGroup>

          <ScrollReveal variant="fade-up" delay={200} className="flex flex-col gap-8 lg:gap-8 2xl:gap-10 max-w-[717px] justify-start">
            <p className="text-[24px] sm:text-[30px] lg:text-[30px] 2xl:text-[38px] font-bold leading-[1.21] text-[#3E3E3E]">
              Arterra Projects{" "}
              <span className="font-normal">
                is an artist collective founded by two creative partners -
                pianist{" "}
              </span>
              <span className="text-[#9A7145]">Anastasya Terenkova</span>{" "}
              <span className="font-normal">and acclaimed actor </span>
              <span className="text-[#9A7145]">John Malkovich</span>{" "}
              <span className="font-normal">
                - to support and promote their collaborative work.
              </span>
            </p>

            {/* TODO: вернуть кнопку когда будет готов дизайн About
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-cream text-gold text-sm font-bold backdrop-blur-[14px] hover:bg-gold hover:text-white transition-colors duration-300 w-fit"
            >
              More About Us
            </Link>
            */}
          </ScrollReveal>
        </div>
      </section>

      <ArtistDrawer
        artist={selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </>
  );
}
