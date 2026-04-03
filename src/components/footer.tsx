import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "./scroll-reveal";

export function Footer() {
  return (
    <footer className="reveal-footer bg-dark text-white relative overflow-hidden h-[600px] lg:h-[640px] 2xl:h-[768px]">
      <div className="absolute inset-0">
        <Image
          src="/images/L1002783-Edit copy-3 7.webp"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-[75%] bg-gradient-to-b from-dark via-dark/80 via-60% to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-dark/80 to-transparent" />

      <div className="relative z-10 px-6 md:px-10 lg:px-12 2xl:px-20 pt-12 lg:pt-[100px] 2xl:pt-[160px]">
        <RevealGroup className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-14 2xl:gap-20 sm:justify-end" stagger={150} variant="fade-up">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-[#A2784B] leading-none">
              Navigation
            </p>
            <div className="text-base lg:text-base 2xl:text-lg leading-[1.4] text-white space-y-0.5">
              <Link href="/" className="block hover:text-gold transition-colors w-fit">Home</Link>
              <span className="block text-white/30 cursor-default">About</span>
              <span className="block text-white/30 cursor-default">Tour Dates</span>
              <span className="block text-white/30 cursor-default">Contact</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-[#A2784B] leading-none">
              Artists
            </p>
            <div className="text-base lg:text-base 2xl:text-lg leading-[1.4] text-white space-y-0.5">
              <span className="block text-white/80">John Malkovich</span>
              <span className="block text-white/80">Anastasya Terenkova</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-[#A2784B] leading-none">
              Projects
            </p>
            <div className="text-base lg:text-base 2xl:text-lg leading-[1.4] text-white space-y-0.5">
              <span className="block text-white/30 cursor-default">Report On The Blind</span>
              <Link href="/projects/the-infamous-ramirez-hoffman" className="block hover:text-gold transition-colors w-fit">
                The Infamous Ramirez Hoffman
              </Link>
            </div>
          </div>
        </RevealGroup>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 lg:px-12 2xl:px-20 pb-8">
        <div className="w-full h-px bg-white/10 mb-6" />
        <div className="flex items-end justify-between">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm lg:text-sm 2xl:text-base font-medium text-white/60">
            <span>Arterra Projects &copy; 2026 All rights reserved</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Legal Notice</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" aria-label="YouTube">
              <svg width="28" height="24" viewBox="0 0 28 20" fill="currentColor">
                <path d="M27.42 3.16a3.5 3.5 0 00-2.46-2.48C22.76 0 14 0 14 0S5.24 0 3.04.68A3.5 3.5 0 00.58 3.16 36.6 36.6 0 000 10a36.6 36.6 0 00.58 6.84 3.5 3.5 0 002.46 2.48C5.24 20 14 20 14 20s8.76 0 10.96-.68a3.5 3.5 0 002.46-2.48A36.6 36.6 0 0028 10a36.6 36.6 0 00-.58-6.84zM11.2 14.28V5.72L18.48 10l-7.28 4.28z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
