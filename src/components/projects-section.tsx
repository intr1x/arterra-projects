import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  href?: string;
  src: string;
  title: string;
  subtitle: string;
  bgColor: string;
  showButton?: boolean;
  buttonDisabled?: boolean;
  buttonLabel?: string;
  gradient?: boolean;
  imageClassName?: string;
  objectPosition?: string;
}

function ProjectCard({
  href,
  src,
  title,
  subtitle,
  bgColor,
  showButton = true,
  buttonDisabled = false,
  buttonLabel = "Read more",
  gradient = false,
  imageClassName,
  objectPosition = "center",
}: ProjectCardProps) {
  const cardClassName =
    "relative block w-full lg:w-1/2 aspect-[772/923] rounded-lg overflow-hidden group";

  const inner = (
    <>
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

      {gradient && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)",
          }}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center px-6 lg:px-12 h-[230px] pb-[40px]">
        <div className="text-center w-full shrink-0">
          <p className="text-white font-bold text-[22px] lg:text-[32px] leading-[1.4]">
            {title}
          </p>
          <p className="text-white/50 text-[12px] lg:text-[15px] font-medium leading-[1.2] whitespace-pre-line mt-[10px]">
            {subtitle}
          </p>
        </div>
        <div className="flex-1 min-h-0" />
        {showButton && (
          <span
            role="button"
            aria-disabled={buttonDisabled}
            className={`shrink-0 inline-flex items-center justify-center px-6 py-2 rounded-3xl text-[13px] lg:text-[15px] font-medium ${
              buttonDisabled
                ? "cursor-not-allowed bg-neutral-500/80 text-white/90"
                : "cursor-pointer bg-gold text-white hover:bg-gold/80 transition-colors"
            }`}
          >
            {buttonLabel}
          </span>
        )}
      </div>
    </>
  );

  if (buttonDisabled || !href) {
    return (
      <div className={cardClassName} style={{ backgroundColor: bgColor }}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cardClassName}
      style={{ backgroundColor: bgColor }}
    >
      {inner}
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 pt-12 lg:pt-20">
      <div className="flex items-center gap-4 mb-6 lg:mb-10">
        <p className="font-bold text-lg lg:text-xl leading-[1.3] tracking-[0.01em] text-[#3E3E3E] shrink-0">
          Projects
        </p>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
        <ProjectCard
          src="/images/project-rob.webp"
          title="Report On The Blind"
          subtitle={`Text - Ernesto Sabato - "On Heroes and Tombs"\nMusic - Alfred Schnittke - "Concerto for piano and strings"`}
          bgColor="#EDDBD7"
          buttonDisabled
          buttonLabel="Coming soon"
          imageClassName="mix-blend-multiply"
          objectPosition="center 15%"
        />
        <ProjectCard
          href="/projects/the-infamous-ramirez-hoffman"
          src="/images/project-irh.webp"
          title="The Infamous Ramirez Hoffman"
          subtitle={`Based on a novel by Roberto Bolaño\nMusic by Astor Piazzolla, Alfred Schnittke, Leonid Desyatnikov,\nJohann Paul von Westhoff, Alberto Iglesias, The Doors,\nMax Richter, Giovanni Sollima`}
          bgColor="#070605"
          gradient
          objectPosition="center 20%"
        />
      </div>
    </section>
  );
}
