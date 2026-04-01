import Image from "next/image";
import type { ReactNode } from "react";

interface QuoteCardProps {
  avatar: string;
  children: ReactNode;
  author: string;
}

function QuoteCard({ avatar, children, author }: QuoteCardProps) {
  return (
    <div className="flex gap-6 lg:gap-8 items-start flex-1 min-w-0">
      <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden shrink-0 bg-light-gray">
        <Image
          src={avatar}
          alt={author}
          fill
          className="object-cover object-top"
          sizes="56px"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 max-w-[494px]">
        <div className="text-[16px] lg:text-[23px] leading-[1.2] text-dark-alt">
          {children}
        </div>
        <p className="text-[14px] lg:text-[16px] font-medium leading-none text-dark-alt/40">
          {author}
        </p>
      </div>
    </div>
  );
}

export function QuotesSection2() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <QuoteCard
          avatar="/images/avatar-malkovich.webp"
          author="John Malkovich"
        >
          <p>
            &raquo; There is something truthful about music that life can
            replicate. <strong className="text-gold">Music is a higher truth.</strong> I was just
            fascinated by the various ways in which music could be used and what
            sort of text fills in the gaps in music. It&apos;s possible in my
            mind that the two together can create something very strong and
            separate to either one alone. &laquo;
          </p>
        </QuoteCard>
        <QuoteCard
          avatar="/images/avatar-terenkova.webp"
          author="Anastasya Terenkova"
        >
          <p>
            &raquo; Music holds a power like no other - it can lead a story in
            any direction it chooses, which is both its beauty and its
            unspeakable, sometimes intimidating strength. &laquo;
          </p>
        </QuoteCard>
      </div>
    </section>
  );
}
