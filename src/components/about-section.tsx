import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  src: string;
  name: string;
  role: string;
}

function ArtistCard({ src, name, role }: ArtistCardProps) {
  return (
    <div className="flex flex-col items-start gap-px group cursor-pointer">
      <div className="relative w-full max-w-[241px] aspect-[241/322] rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="241px"
        />
      </div>
      <div className="px-4 py-2">
        <p className="text-xl lg:text-2xl leading-[1.4] text-black">
          {name}
        </p>
        <p className="text-sm lg:text-base leading-[1.4] text-black/50">
          {role}
        </p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-12 lg:py-20">
      <div className="divider text-black mb-3" />
      <p className="font-medium text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-black mb-10 lg:mb-14">
        About Us
      </p>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex flex-row gap-4 lg:gap-6 shrink-0">
          <ArtistCard
            src="/images/artist-terenkova.jpg"
            name="Anastasya Terenkova"
            role="Co-founder and pianist"
          />
          <ArtistCard
            src="/images/artist-malkovich.jpg"
            name="John Malkovich"
            role="Co-founder and narrator"
          />
        </div>

        <div className="flex flex-col justify-between gap-8 lg:gap-0 lg:min-h-[448px] max-w-[703px]">
          <p className="text-[28px] lg:text-5xl leading-[1.2] text-black tracking-[-0.01em]">
            Arterra Projects is an artist collective by{" "}
            <em className="italic">actor John Malkovich</em> and{" "}
            <em className="italic">pianist Anastasya Terenkova.</em>
          </p>

          <p className="text-base lg:text-lg leading-[1.4] text-black/80 tracking-[0.01em] max-w-[378px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-cream text-gold text-base backdrop-blur-[14px] hover:bg-gold hover:text-white transition-colors duration-300 w-fit"
          >
            More About Us
          </Link>
        </div>
      </div>

      <div className="divider text-black mt-12 lg:mt-20" />
    </section>
  );
}
