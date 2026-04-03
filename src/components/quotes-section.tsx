import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

interface QuoteProps {
  avatar: string;
  quote: string;
  author: string;
  align?: "left" | "right";
}

function Quote({ avatar, quote, author, align = "left" }: QuoteProps) {
  return (
    <ScrollReveal variant={align === "right" ? "fade-left" : "fade-right"} duration={900}>
      <div
        className={`flex gap-8 lg:gap-10 2xl:gap-16 items-start max-w-[700px] ${
          align === "right" ? "lg:ml-auto" : ""
        }`}
      >
        <div className="relative w-14 h-14 lg:w-14 2xl:w-16 lg:h-14 2xl:h-16 rounded-full overflow-hidden shrink-0 bg-white">
          <Image
            src={avatar}
            alt={author}
            fill
            className="object-cover object-top"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 2xl:gap-10">
          <p className="text-lg lg:text-[21px] 2xl:text-[25px] font-medium leading-[1.25] text-dark-alt">
            {quote}
          </p>
          <p className="text-base lg:text-lg 2xl:text-[21px] font-bold leading-none text-dark-alt/40">
            {author}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function QuotesSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-16 lg:py-20 2xl:py-28 flex flex-col gap-16 lg:gap-16 2xl:gap-24">
      <Quote
        avatar="/images/avatar-malkovich.webp"
        quote={`\u201cI find the combination of story, text, and live music \u2013 almost always classical \u2013 is a powerful, fascinating and under-explored medium.\u201d`}
        author="John Malkovich"
        align="left"
      />
      <Quote
        avatar="/images/avatar-terenkova.webp"
        quote={`\u201cThe synthesis of music and text takes us beyond the field of consciousness. Music always draws us into a dialogue, which ultimately becomes a conversation with ourselves.\u201d`}
        author="Anastasya Terenkova"
        align="right"
      />
    </section>
  );
}
