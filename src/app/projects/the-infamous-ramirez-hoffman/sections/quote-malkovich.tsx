import Image from "next/image";

export function QuoteMalkovich() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
      <div className="flex items-start gap-6 lg:gap-10 max-w-[1206px] mx-auto">
        <div className="relative w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden shrink-0 bg-[#10110c]">
          <Image
            src="/images/avatar-malkovich.webp"
            alt="John Malkovich"
            fill
            className="object-cover object-top"
            sizes="100px"
          />
        </div>
        <div>
          <p className="text-[#3E3E3E] text-xl lg:text-[27px] font-medium leading-[1.25]">
            &ldquo;There are so many stories in the world or ideas in the world that don&rsquo;t necessarily lend themselves to a play or a concert, but they lend themselves to this kind of collaborative form.&rdquo;
          </p>
          <p className="text-[#b8b8b8] font-bold text-lg lg:text-[21px] leading-none mt-6 tracking-[-0.01em]">
            John Malkovich
          </p>
        </div>
      </div>
    </section>
  );
}
