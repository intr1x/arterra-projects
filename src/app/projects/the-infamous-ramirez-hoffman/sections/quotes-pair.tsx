import Image from "next/image";

export function QuotesPair() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="flex-1">
          <div className="flex items-start gap-6 lg:gap-10">
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
              <p className="text-[#3E3E3E] text-lg lg:text-[25px] font-medium leading-[1.2]">
                &raquo; I find the combination of story, text, and live music - almost always classical - is a powerful, fascinating and underexplored medium. &laquo;
              </p>
              <p className="text-[#b8b8b8] font-bold text-lg lg:text-[21px] leading-none mt-6">
                John Malkovich
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-[#3E3E3E] text-lg lg:text-[25px] font-medium leading-[1.2]">
            &raquo; She [Anastasya Terenkova] combines French poise and her native spirit with &ldquo;the speed and passion of a Formula One driver.&rdquo; &laquo;
          </p>
          <p className="text-[#b8b8b8] font-bold text-lg lg:text-[21px] leading-none mt-6">
            New York Times
          </p>
        </div>
      </div>
    </section>
  );
}
