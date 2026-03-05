import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  src: string;
  title: string;
  subtitle: string;
  bgColor: string;
  imageClassName?: string;
  objectPosition?: string;
}

function ProjectCard({
  href,
  src,
  title,
  subtitle,
  bgColor,
  imageClassName,
  objectPosition = "center",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="relative block w-full lg:w-1/2 aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden group"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${imageClassName ?? ""}`}
          style={{ objectPosition }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 lg:gap-6 px-6 lg:px-12 py-10 lg:py-16 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="text-center text-white w-full">
          <p className="text-2xl lg:text-[32px] leading-[1.4]">{title}</p>
          <p className="text-sm lg:text-base leading-[1.4] opacity-50 whitespace-pre-line">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex items-center justify-center px-6 py-2 rounded-3xl bg-gold text-white text-sm lg:text-base hover:bg-gold/80 transition-colors">
          Read more
        </span>
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 pt-12 lg:pt-20">
      <div className="flex items-center gap-4 mb-6 lg:mb-10">
        <p className="font-medium text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-black shrink-0">
          Projects
        </p>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
        <ProjectCard
          href="/projects/report-on-the-blind"
          src="/images/project-blind.jpg"
          title="Report On The Blind"
          subtitle={"Based on a book by Ernesto Sabato\nand music by Alfred Schittke"}
          bgColor="#f2f2f2"
          imageClassName="mix-blend-multiply"
          objectPosition="center 15%"
        />
        <ProjectCard
          href="/projects/the-infamous-ramirez-hoffman"
          src="/images/project-hoffman.jpg"
          title="The Infamous Ramirez Hoffman"
          subtitle="Based on a novel by Roberto Bolaño"
          bgColor="#070605"
          objectPosition="center 20%"
        />
      </div>
    </section>
  );
}
