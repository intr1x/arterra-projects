import { RevealGroup } from "@/components/scroll-reveal";

export function QuoteBolano() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-16 lg:py-20 2xl:py-28">
      <RevealGroup className="flex flex-col md:flex-row gap-12 lg:gap-14 2xl:gap-20 lg:pl-[150px] 2xl:pl-[220px] lg:pr-[100px] 2xl:pr-[160px]" stagger={200} variant="fade-up">
        <div className="flex-1 max-w-[480px]">
          <p className="text-[#3E3E3E] text-xl lg:text-[21px] 2xl:text-[25px] font-medium leading-[1.2] mb-6">
            &raquo; She [Anastasya Terenkova] combines French poise and her native spirit with &ldquo;the speed and passion of a Formula One driver. &laquo;
          </p>
          <p className="text-[#b8b8b8] font-bold text-lg lg:text-lg 2xl:text-[21px] leading-none">
            New York Times
          </p>
        </div>

        <div className="flex-1 max-w-[530px]">
          <p className="text-[#3E3E3E] text-xl lg:text-[21px] 2xl:text-[25px] font-medium leading-[1.2] tracking-[-0.01em] mb-6">
            &raquo; I find the combination of story, text, and live music - almost always classical - is a powerful, fascinating and underexplored medium. &laquo;
          </p>
          <p className="text-[#b8b8b8] font-bold text-lg lg:text-lg 2xl:text-[21px] leading-none">
            John Malkovich
          </p>
        </div>
      </RevealGroup>
    </section>
  );
}
