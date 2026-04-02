import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

interface TrackProps {
  composer: string;
  piece: string;
}

const REPERTOIRE: TrackProps[] = [
  { composer: "Astor Piazzolla", piece: "Libertango" },
  { composer: "Astor Piazzolla", piece: "Oblivion" },
  { composer: "Leonid Desyatnikov", piece: "Death of Absalom" },
  { composer: "Antonio Vivaldi", piece: "Cello Sonata RV 44 (Allegro poco)" },
  { composer: "Yéfim Rosenfeld /\nLeonid Desyatnikov", piece: "My Happiness" },
  { composer: "Astor Piazzolla", piece: "Milonga del Angel" },
  { composer: "Johann Paul von Westhoff", piece: "Imitazione delle Campane" },
  { composer: "Max Richter", piece: "Mercy" },
  { composer: "Fazil Say", piece: "Hopa (from 'Four Cities'\nsonata for cello and piano)" },
  { composer: "Johann Paul von Westhoff", piece: "Imitazione delle Campane" },
  { composer: "Astor Piazzolla", piece: "Vuelvo Al Sur /excerpt/" },
  { composer: "Lera Auerbach", piece: "The Mirror With Three Faces' trio  /excerpt/" },
  { composer: "Alfred Schnittke", piece: "Tango in a Madhouse" },
  { composer: "Alberto Iglesias", piece: "Blackout" },
  { composer: "Astor Piazzolla", piece: "Adiós Nonino' piano cadenza" },
  { composer: "The Doors", piece: "Riders on the Storm" },
  { composer: "Lera Auerbach", piece: "The Mirror With Three Faces' trio /excerpt/" },
  { composer: "Sergey Akhunov", piece: "Big Elegy to John Cage" },
  { composer: "Alberto Iglesias", piece: "The Dancer Upstairs. Broken piano" },
  { composer: "Giovanni Sollima", piece: "Il Bell'Antonio" },
];

function Track({ composer, piece }: TrackProps) {
  return (
    <>
      <div className="flex items-center gap-6 text-base lg:text-lg tracking-[0.01em] leading-[1.4] py-2.5">
        <p className="font-bold text-[#3E3E3E] w-[200px] lg:w-[241px] shrink-0 whitespace-pre-line">
          {composer}
        </p>
        <p className="font-medium text-[#b8b8b8] whitespace-pre-line">
          {piece}
        </p>
      </div>
      <div className="h-px bg-black/20 w-full" />
    </>
  );
}

export function ComposersSection() {
  return (
    <section className="bg-white pr-6 md:pr-10 lg:pr-20 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <ScrollReveal variant="fade-right" duration={1000} className="relative bg-[#eddbd7] lg:rounded-r-lg overflow-hidden w-full lg:w-1/2 shrink-0 aspect-[851/899] mx-6 md:mx-10 lg:mx-0">
          <Image
            src="/images/Frame 278.webp"
            alt="Performance rehearsal"
            fill
            className="object-cover mix-blend-multiply opacity-[0.93]"
            sizes="(max-width: 1024px) 100vw, 851px"
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200} duration={900} className="flex-1 lg:-mt-[42px]">
          <p className="font-bold text-[#b8b8b8] text-base lg:text-lg uppercase tracking-[0.01em] leading-[1.4] mb-4">
            Repertoire
          </p>
          <div className="h-px bg-black/20 w-full mb-1" />

          {REPERTOIRE.map((track, i) => (
            <Track key={`${track.composer}-${track.piece}-${i}`} {...track} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
