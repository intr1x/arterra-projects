import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "./overview";

export function MusicSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-12 lg:py-20">
      <SectionHeader title="Music" />

      <ScrollReveal variant="fade-right" duration={900}>
        <div className="flex gap-6 lg:gap-10 items-start lg:px-[135px] mb-16 lg:mb-20">
          <div className="relative w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden shrink-0 bg-[#10110c] -mt-5">
            <Image
              src="/images/avatar-malkovich.webp"
              alt="John Malkovich"
              fill
              className="object-cover object-top"
              sizes="100px"
            />
          </div>

          <div className="max-w-[1206px]">
            <p className="text-[#3E3E3E] text-lg lg:text-[27px] font-medium leading-[1.25] mb-6">
              &ldquo;There are so many stories in the world or ideas in the world that don&rsquo;t necessarily lend themselves to a play or a concert, but they lend themselves to this kind of collaborative form.&rdquo;
            </p>
            <p className="text-[#b8b8b8] font-bold text-lg lg:text-[21px] leading-none">
              John Malkovich
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={150} duration={900}>
        <div className="lg:px-[155px]">
          <p className="text-[#3E3E3E] text-lg lg:text-[25px] font-light leading-[1.4] text-justify max-w-[1302px]">
            <strong className="font-bold">John</strong> and{" "}
            <strong className="font-bold">Anastasya</strong> have created an evocative musical soundscape for piano, bandoneon and violin from compositions that are extremely varied in genre, but which all capture the drama and soul of tango. It offers a passionate counterpoint to the understated prose and pared-down poetry of{" "}
            <strong className="font-bold">Bolaño</strong>&rsquo;s writing and includes pieces by{" "}
            <strong className="font-bold">Astor Piazzolla</strong>,{" "}
            <strong className="font-bold">Leonid Desyatnikov</strong>,{" "}
            <strong className="font-bold">Antonio Vivaldi</strong>,{" "}
            <strong className="font-bold">Alfred Schnittke</strong>,{" "}
            <strong className="font-bold">Max Richter</strong>, and many others. The score skillfully propels us from one emotion to another, from scene to scene, over the course of 20 years. The programme ventures into the Baroque, minimalism, the avant-garde, post-minimalism experimental and compositions from contemporary classical and film-score composers from around the world.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
