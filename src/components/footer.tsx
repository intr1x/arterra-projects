import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="reveal-footer bg-dark text-white relative overflow-hidden h-[600px] lg:h-[768px]">
      {/* Background concert image — fills entire footer */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[1285px] h-full rounded-t-lg overflow-hidden">
          <Image
            src="/images/footer-bg.jpg"
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 768px) 90vw, 1285px"
          />
        </div>
      </div>

      {/* Dark gradient overlay for text readability at top */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-dark via-dark/90 to-transparent" />

      {/* Content grid — Figma: starts at y≈120 in 768px footer */}
      <div className="relative z-10 px-6 md:px-10 lg:px-20 pt-12 lg:pt-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[637px_1fr_1fr_1fr] gap-y-8 gap-x-6">
          {/* Quote */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <blockquote className="text-lg lg:text-2xl leading-[1.2] text-white">
              &ldquo;Music, more than any other medium &ndash;
              <br className="hidden lg:block" />
              including film &ndash; goes into the bones.&rdquo;
            </blockquote>
            <cite className="not-italic text-base font-medium text-gold">
              John Malkovich
            </cite>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <p className="text-base font-medium text-gold leading-[0.9]">
              Navigation
            </p>
            <div className="text-lg lg:text-xl leading-[1.3] text-white space-y-0.5">
              <Link href="/" className="block hover:text-gold transition-colors w-fit">Home</Link>
              <Link href="/about" className="block hover:text-gold transition-colors w-fit">About</Link>
              <Link href="/contact" className="block hover:text-gold transition-colors w-fit">Contact</Link>
            </div>
          </div>

          {/* Artists */}
          <div className="flex flex-col gap-6">
            <p className="text-base font-medium text-gold leading-[0.9]">
              Artists
            </p>
            <div className="text-lg lg:text-xl leading-[1.3] text-white space-y-0.5">
              <Link href="/about" className="block hover:text-gold transition-colors w-fit">John Malkovich</Link>
              <Link href="/about" className="block hover:text-gold transition-colors w-fit">Anastasya Terenkova</Link>
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-6">
            <p className="text-base font-medium text-gold leading-[0.9]">
              Projects
            </p>
            <div className="text-lg lg:text-xl leading-[1.3] text-white space-y-0.5">
              <Link href="/projects/report-on-the-blind" className="block hover:text-gold transition-colors w-fit">
                Report On The Blind
              </Link>
              <Link href="/projects/the-infamous-ramirez-hoffman" className="block hover:text-gold transition-colors w-fit">
                The Infamous Ramirez Hoffman
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 lg:px-20 pb-8">
        <div className="w-full h-px bg-white/10 mb-6" />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm lg:text-base font-medium text-white/60">
          <span>Arterra Projects LLC &copy; 2024</span>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Legal Notice</Link>
        </div>
      </div>
    </footer>
  );
}
