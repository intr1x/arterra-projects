import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Dates — Arterra Projects",
  description: "Upcoming performance dates for Arterra Projects productions.",
};

const TOUR_DATES = [
  {
    date: "March 15, 2025",
    venue: "Théâtre de Paris",
    city: "Paris, France",
    project: "Report On The Blind",
    status: "sold-out" as const,
  },
  {
    date: "April 3, 2025",
    venue: "Teatro della Pergola",
    city: "Florence, Italy",
    project: "The Infamous Ramirez Hoffman",
    status: "available" as const,
  },
  {
    date: "April 18, 2025",
    venue: "Wiener Konzerthaus",
    city: "Vienna, Austria",
    project: "Report On The Blind",
    status: "available" as const,
  },
  {
    date: "May 7, 2025",
    venue: "Barbican Centre",
    city: "London, UK",
    project: "The Infamous Ramirez Hoffman",
    status: "available" as const,
  },
  {
    date: "May 22, 2025",
    venue: "Concertgebouw",
    city: "Amsterdam, Netherlands",
    project: "Report On The Blind",
    status: "few-left" as const,
  },
  {
    date: "June 10, 2025",
    venue: "Philharmonie de Paris",
    city: "Paris, France",
    project: "The Infamous Ramirez Hoffman",
    status: "available" as const,
  },
];

const STATUS_MAP = {
  available: { label: "Get Tickets", className: "bg-gold hover:bg-gold/80 text-white" },
  "few-left": { label: "Few Left", className: "bg-gold hover:bg-gold/80 text-white" },
  "sold-out": { label: "Sold Out", className: "bg-black/10 text-black/40 cursor-not-allowed" },
};

export default function TourDatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] max-h-[600px] bg-dark overflow-hidden">
        <Image
          src="/images/cta-bg.jpg"
          alt="Arterra Projects live"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/20" />
        <div className="absolute bottom-12 lg:bottom-20 left-6 md:left-10 lg:left-20">
          <h1 className="text-white text-[40px] lg:text-[80px] leading-[1] tracking-[0.01em] uppercase">
            Tour Dates
          </h1>
        </div>
      </section>

      {/* Tour dates list */}
      <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
        <div className="max-w-[1200px] mx-auto">
          {TOUR_DATES.map((event, i) => (
            <div key={i}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 py-6 lg:py-8">
                <div className="lg:w-[200px] shrink-0">
                  <p className="text-lg lg:text-xl font-medium text-black leading-[1.3]">
                    {event.date}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg lg:text-2xl leading-[1.3] text-black">
                    {event.venue}
                  </p>
                  <p className="text-base text-black/50">{event.city}</p>
                </div>
                <div className="lg:w-[280px] shrink-0 lg:text-right">
                  <p className="text-sm text-black/50 mb-2">{event.project}</p>
                  <button
                    className={`inline-flex items-center justify-center px-6 py-2 rounded-3xl text-sm transition-colors ${
                      STATUS_MAP[event.status].className
                    }`}
                    disabled={event.status === "sold-out"}
                  >
                    {STATUS_MAP[event.status].label}
                  </button>
                </div>
              </div>
              <div className="divider text-black" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
