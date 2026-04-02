"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "./overview";

interface ArtistData {
  src: string;
  drawerSrc: string;
  name: string;
  role: string;
  roleShort: string;
  quote?: string;
  quoteSource?: string;
  bio: string[];
}

const ARTISTS: ArtistData[] = [
  {
    src: "/images/artist-1.webp",
    drawerSrc: "/images/artist-1.webp",
    name: "John Malkovich",
    role: "Co-founder and narrator",
    roleShort: "Co-founder, narrator",
    bio: [
      "John Malkovich is considered to be one of today\u2019s most distinguished actors, known for portraying complex, idiosyncratic, highly-intelligent characters. He has embodied an astounding range of characters, from loveable rogues to failed intellectuals to unscrupulous schemers who personify pure evil.",
      "Malkovich began his career on stage with Chicago\u2019s legendary Steppenwolf Theatre. He appeared first in the Broadway version of Death of a Salesman, then in the film, both with Dustin Hoffman. He received Academy Award nominations for Places in the Heart and In the Line of Fire. Other acclaimed films include Spielberg\u2019s Empire of the Sun, The Killing Fields, Dangerous Liaisons, Of Mice and Men, and Being John Malkovich. Malkovich has collaborated with a long list of highly-regarded film directors, including Michelangelo Antonioni, Bernardo Bertolucci, Stephen Frears, Volker Schl\u00f6ndorff, Clint Eastwood, Luc Besson, Joel and Ethan Coen, Spike Jonze and Steven Spielberg. He is the recipient of numerous awards, including the Zurich Film Festival Lifetime Achievement Honor award and the Donostia Lifetime Achievement Award (San Sebastian Film Festival), where he joined the ranks of Gregory Peck, Francis Ford Coppola and Woody Allen.",
      "Malkovich works extensively in theatre, opera and television, not only as an actor, but as a director, producer and writer. He won both France\u2019s Moli\u00e8re and London\u2019s Evening Standard awards for Best Director for the play The Good Canary. In the past decade, he has been involved with a number of productions that revolve around classical music, including Casanova Variations, The Music Critic, The Infernal Comedy and Report on the Blind. He has toured extensively with the Viennese conductor Martin Haselb\u00f6ck and frequent collaborator writer/director Michael Sturminger.",
      "John and Anastasya collaborated previously on another piece of narrative/music theater, Report on the Blind, distilled from a chapter in the novel On Heroes and Tombs by celebrated Argentine writer and social activist Ernesto Sabato. A tour-de-force of primordial paranoia, it soars on the richly varied music of the acclaimed Concerto for Piano and Strings by avant-garde composer Alfred Schnittke, a leading figure in Russian non-conformist music.",
    ],
  },
  {
    src: "/images/artist-2.webp",
    drawerSrc: "/images/artist-2.webp",
    name: "Anastasya Terenkova",
    role: "Co-founder and pianist",
    roleShort: "Co-founder, pianist",
    quote: "\u00BB A ravishing pianist. \u00AB",
    quoteSource: "Diapason",
    bio: [
      "Born in Moscow and based in Paris, Anastasya has received international critical acclaim and numerous awards, including first prize at the Cincinnati World Piano Competition, the Dorothy MacKenzie Artist Recognition Competition (New York), and the Gawon International Music Award (South Korea).",
      "Anastasya graduated from the renowned Gnessin Special Music School in Moscow, then went on to complete her education with Jacques Rouvier at the National Superior Conservatory of Music and Dance in Paris, training which included the prestigious postgraduate courses Perfectionnement de Piano and Artist Diploma.",
      "Anastasya\u2019s performances are in demand around the world. She has played such illustrious halls as the Salle Gaveau in Paris, the Bozar in Brussels, the Auditorio Nacional de Madrid, The Kings Place in London, Lisinski Hall in Zagreb, Budapest Congress Hall, Helsinki Art Center, Palau de les Arts Reina Sofia in Valencia, Seoul Arts Center, Teatro Coliseo in Buenos Aires. She also regularly records for radio and television (Arte, Medici TV, France Musique, France Culture, Radio Classique etc). In addition to her work as a soloist, Anastasya has a passion for chamber music. She is regularly invited to the major music festivals such as the Menton Music Festival, Piano aux Jacobins, IKIF (New York), Ljubljana Music Festival, Emilia Romagna Festival, Mittelfest and Le Printemps des Arts de Monte-Carlo and many others.",
      "She also has been giving piano master classes, including International piano master classes, Yamaha, Paris; Pretoria University, South Africa. Since 2014 Anastasya is a member of the piano faculty of the \u201CInternational Keyboard Festival and Institute/ the IKIF\u201D at Mannes College, New York, USA.",
      "Alongside her classical music activities, Anastasya actively collaborates with artists from other genres - photographers, artists, contemporary composers, electronic music composers. She regularly records music for film.",
      "In January 2016, Anastasya was invited by John Malkovich to perform in Report on the Blind. Upon joining the project, she became his collaborator in developing, presenting and performing the piece around the world.",
    ],
  },
  {
    src: "/images/artist-3.webp",
    drawerSrc: "/images/artist-3.webp",
    name: "Andrej Bielow",
    role: "Violin",
    roleShort: "Violin",
    quote: "\u00BB \u2026Bielow creating a rich vein of fantasy through his ability to balance cheekiness with lyricism as if inventing an eloquent commedia dell\u2019arte ballet\u2026 \u00AB",
    quoteSource: "The Strad",
    bio: [
      "Born in 1981 in the Ukraine, Andrej has developed as one of the leading Ukrainian musicians of his generation. As a soloist and chamber musician he has recorded over 20 CD albums for Naxos, CPO, H\u00e4nssler Classics, H\u00e4nssler-Profil, Guttingi, Solo Musica, Hyperion and others.",
      "As a soloist, he collaborated with such renowned orchestras as the New Japan Philharmonic, Orchestra National de Radio France, NDR Radiophilharmonie, Sinfonieorchester des Bayerischen Rundfunks, under the baton of established conductors such as Kurt Masur, Yan Pascal Tortelier, Gianandrea Noseda, Miguel Gomez-Martinez, Junichi Hirokami und Christoph Poppen, to name a few of them. He received his first violin lessons at the age of five and in 1993 attended the special music boarding school in Kiev.",
      "At the age of 15, Andrej settled in Germany to study with Prof. Krzysztof Wegrzyn at the University of Music and Drama in Hannover. Further study followed with Gerard Poulet in Paris, Herman Krebbers, Ida Haendel, Ana Chumachenko and more recently Alfred Brendel.",
      "Andrej Bielow won several major prizes at international competitions such as the Long-Thibaut Paris, ARD Munich, Hanover (Joachim), Citta di Brescia and others. Andrej Bielow has devoted much of his career to chamber music, of which he is a passionate advocate. He has appeared at the following Festivals: Schleswig-Holstein, Klavierfestival Ruhr, Rheingau, Young Euro Classic Berlin, Schubertiade Schwarzenberg, and many others. At the Kronberg Academy he performed with Gidon Kremer, Juri Bashmet and the Beaux Arts Trio. He joined the Szymanowski Quartett as leader from 2005 until 2014. Since 2014 Andrej joined the violin faculty at the University of Arts in Graz and regularly gives masterclasses in Europe, Asia and USA. Since 2013, Andrej Bielow has become a regular visiting teacher delivering classes at the Royal Academy of Music in London, he is also a professor at Robert Schumann Hochschule in Dusseldorf. Andrej plays the violin \u201Cex Flesch\u201D, built in 1745 by Lorenzo Guadagnini.",
    ],
  },
  {
    src: "/images/artist-4.webp",
    drawerSrc: "/images/artist-4.webp",
    name: "Fabrizio Colombo",
    role: "Bandoneon",
    roleShort: "Bandoneon",
    bio: [
      "Colombo is a bandoneonist, composer and arranger born in 1994 in Mendoza, Argentina, currently based in Paris, France. From the bandoneon he has found a versatility that has led him to move through various musical genres such as tango, jazz and classical music.",
      "He has performed as a soloist on stages in South America, the United States, Asia and Europe; interpreting works such as the \u201CConcierto Aconcagua for Bandone\u00f3n, String Orchestra and Percussion\u201D (Astor Piazzolla), the opera-tango \u201CMar\u00eda de Buenos Aires\u201D (Astor Piazzolla/Horacio Ferrer), the \u201CConcierto para Bandone\u00f3n y Guitarra\u201D (Astor Piazzolla), the \u201CMisa a Buenos Aires\u201D (Mart\u00edn Palmeri), among others.",
      "In 2019 he won the first prize at the \u201CChe Bandone\u00f3n\u201D International Competition in Vermont, USA. In 2024, he was invited on tour to Switzerland and South Korea as bandoneonist with the Quinteto Revolucionario, the official quintet of the Fundaci\u00f3n Astor Piazzolla, led by Astor Piazzolla\u2019s widow, Laura Escalada.",
      "He has shared the stage with renowned musicians such as N\u00e9stor Marconi, Alexis C\u00e1rdenas, Francisco \u201CPacho\u201D Flores, Carlos Aguirre, Leo Sujatovich, Oscar Giunta, Minino Garay and others. He has participated as a sessionist in numerous record productions, among them, it is notable his participation in the song \u201CNunca M\u00e1s\u201D for the soundtrack of the film \u201C1985\u201D by Santiago Mitre, which was nominated for the Oscar Awards. He has also been part of the bandoneon section of the prestigious Orquesta del Tango de la Ciudad de Buenos Aires under the direction of N\u00e9stor Marconi and Juan Carlos Cuacci, next to the most outstanding bandoneonists of Argentina.",
      "Born into a musical family devoted to classical music and tango, Fabrizio received these influences from the very beginning. He started as a violinist at the age of eight, being his father his teacher; and, at the same time, he began his choral activity with his mother, a lyric singer. Finally, he decided to dedicate his professional career to the bandoneon, following in the footsteps of his grandfather, the bandoneonist Francisco Colombo and director of his own typical orchestra, who was a main reference of tango in Mendoza.",
    ],
  },
];

function ArtistCard({ artist, onClick }: { artist: ArtistData; onClick: () => void }) {
  return (
    <div
      className="relative w-full aspect-[379/505] rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={artist.src}
        alt={artist.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 p-8 pb-11">
        <div className="text-center w-full font-medium">
          <p className="text-white text-xl lg:text-2xl leading-[1.4] whitespace-nowrap">
            {artist.name}
          </p>
          <p className="text-white/50 text-sm leading-[1.4]">{artist.role}</p>
        </div>
        <span className="inline-flex items-center justify-center px-6 h-9 rounded-[52px] backdrop-blur-[14px] bg-[rgba(242,242,242,0.16)] text-white text-[15px] font-medium group-hover:bg-[#9a7145] transition-colors">
          Read Biography
        </span>
      </div>
    </div>
  );
}

function ArtistDrawer({ artist, onClose }: { artist: ArtistData | null; onClose: () => void }) {
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

  const content = (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/70 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-[60] h-full w-full sm:w-[480px] lg:w-[560px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {artist && (
          <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-6 lg:pt-8">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-8 lg:mb-10">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
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
                src={artist.drawerSrc}
                alt={artist.name}
                fill
                className="object-cover object-top"
                sizes="560px"
              />
            </div>

            {artist.quote && (
              <div className="text-center mb-10 lg:mb-12">
                <p className="text-xl lg:text-2xl leading-[1.3] text-[#3E3E3E] mb-2">
                  {artist.quote}
                </p>
                <p className="text-sm lg:text-base text-[#9A7145]">
                  {artist.quoteSource}
                </p>
              </div>
            )}

            <h2 className="text-[28px] lg:text-[32px] leading-[1.1] text-black tracking-[-0.02em] mb-6 lg:mb-8">
              {artist.name}.
            </h2>

            <p className="text-sm font-medium text-black/50 mb-4">
              {artist.roleShort}
            </p>

            <div className="flex flex-col gap-4">
              {artist.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] lg:text-base leading-[1.6] text-black/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}

export function ArtistsSection() {
  const [selectedArtist, setSelectedArtist] = useState<ArtistData | null>(null);

  return (
    <>
      <section className="bg-white px-6 md:px-10 lg:px-20 py-12 lg:py-20">
        <SectionHeader title="Artists" />
        <div className="flex flex-wrap gap-4 lg:gap-6">
          {ARTISTS.map((artist, i) => (
            <ScrollReveal
              key={artist.name}
              variant="fade-up"
              delay={i * 120}
              className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)]"
            >
              <ArtistCard
                artist={artist}
                onClick={() => setSelectedArtist(artist)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ArtistDrawer
        artist={selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </>
  );
}
