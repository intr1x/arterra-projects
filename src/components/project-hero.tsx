import Image from "next/image";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  bgColor?: string;
  imageClassName?: string;
}

export function ProjectHero({
  title,
  subtitle,
  imageSrc,
  bgColor = "#070605",
  imageClassName,
}: ProjectHeroProps) {
  return (
    <section
      className="relative h-[70vh] min-h-[500px] max-h-[900px] overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className={`object-cover ${imageClassName ?? ""}`}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      <div className="absolute bottom-12 lg:bottom-20 left-6 md:left-10 lg:left-20 right-6 md:right-10 lg:right-20">
        <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[72px] leading-[1.05] tracking-[-0.01em] max-w-[900px] mb-3 lg:mb-4">
          {title}
        </h1>
        <p className="text-white/60 text-base lg:text-xl leading-[1.4] max-w-[500px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
