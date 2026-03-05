import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Arterra Projects",
  description: "Get in touch with Arterra Projects for booking inquiries, press, and general information.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] max-h-[600px] bg-dark flex items-end">
        <div className="px-6 md:px-10 lg:px-20 pb-12 lg:pb-20">
          <h1 className="text-white text-[40px] lg:text-[80px] leading-[1] tracking-[0.01em] uppercase">
            Contact
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 md:px-10 lg:px-20 py-16 lg:py-28">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            {/* Left */}
            <div className="lg:w-1/2">
              <p className="text-[28px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] text-black mb-8">
                We&apos;d love to hear from you
              </p>
              <p className="text-base lg:text-lg leading-[1.5] text-black/70 mb-10">
                For booking inquiries, press requests, or general
                information about Arterra Projects and our productions,
                please get in touch using the contact details below.
              </p>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:info@arterraprojects.com"
                    className="text-lg lg:text-xl text-black hover:text-gold transition-colors"
                  >
                    info@arterraprojects.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                    Booking &amp; Management
                  </p>
                  <a
                    href="mailto:booking@arterraprojects.com"
                    className="text-lg lg:text-xl text-black hover:text-gold transition-colors"
                  >
                    booking@arterraprojects.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                    Press
                  </p>
                  <a
                    href="mailto:press@arterraprojects.com"
                    className="text-lg lg:text-xl text-black hover:text-gold transition-colors"
                  >
                    press@arterraprojects.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:w-1/2">
              <form className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black/60 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-0 py-3 border-b border-black/10 bg-transparent text-black text-lg focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black/60 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-0 py-3 border-b border-black/10 bg-transparent text-black text-lg focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black/60 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-0 py-3 border-b border-black/10 bg-transparent text-black text-lg focus:outline-none focus:border-gold transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black/60 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-0 py-3 border-b border-black/10 bg-transparent text-black text-lg focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-3xl bg-gold text-white text-base hover:bg-gold/80 transition-colors w-fit mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
