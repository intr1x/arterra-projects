interface PressQuoteProps {
  quote: string;
  source: string;
}

function PressQuote({ quote, source }: PressQuoteProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg lg:text-2xl leading-[1.2] tracking-[-0.01em] text-dark-alt">
        {quote}
      </p>
      <p className="text-base lg:text-xl leading-none text-dark-alt/40">
        {source}
      </p>
    </div>
  );
}

export function PressSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 pb-20 lg:pb-32">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        <div className="md:w-1/2 lg:w-[40%]">
          <PressQuote
            quote="&laquo; The two complexities, musical and textual, could have been condemned to follow their separate paths, but it was the generosity of those two extra-ordinary artists involved that triggered the game of exchanges and references. &raquo;"
            source="teatroecritica.net"
          />
        </div>
        <div className="md:w-1/2 lg:w-[35%] flex flex-col gap-10 lg:gap-12">
          <PressQuote
            quote="&laquo; A little gem to be cherished. &raquo;"
            source="teatroecritica.net"
          />
          <PressQuote
            quote="&laquo; A real sound drama &raquo;"
            source="teatroecritica.net"
          />
        </div>
      </div>
    </section>
  );
}
