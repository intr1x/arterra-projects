"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function onMenuChange() {
      setIsMenuOpen((prev) => !prev);
    }
    window.addEventListener("menu-toggle", onMenuChange);
    return () => window.removeEventListener("menu-toggle", onMenuChange);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled && !isMenuOpen
          ? "bg-white border-b border-black/10 py-3 lg:py-4"
          : "bg-transparent py-5 lg:py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-20">
        <Link
          href="/tour-dates"
          className={`text-sm lg:text-base leading-[1.1] transition-colors duration-500 ${
            isScrolled && !isMenuOpen
              ? "text-dark-alt hover:text-gold"
              : "text-white hover:opacity-70"
          }`}
        >
          Tour Dates
        </Link>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/logo.svg"
            alt="Arterra Projects"
            width={128}
            height={128}
            className={`h-auto transition-all duration-300 ${
              isScrolled && !isMenuOpen
                ? "w-0 opacity-0"
                : "w-20 lg:w-[128px] opacity-100"
            }`}
            priority
          />
          <Image
            src="/images/logo-text.svg"
            alt="Arterra Projects"
            width={190}
            height={70}
            className={`h-auto transition-all duration-300 invert ${
              isScrolled && !isMenuOpen
                ? "w-20 lg:w-24 opacity-100"
                : "w-0 opacity-0"
            }`}
          />
        </Link>

        <button
          className={`flex items-center gap-2 text-sm lg:text-base leading-[1.1] cursor-pointer transition-colors duration-500 z-50 menu-toggle ${
            isScrolled && !isMenuOpen
              ? "text-dark-alt hover:text-gold"
              : "text-white hover:opacity-70"
          }`}
          aria-label="Toggle menu"
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span className="relative w-2.5 h-2.5">
            {/* Dot */}
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isScrolled && !isMenuOpen ? "bg-dark-alt" : "bg-white"
              } ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            />
            {/* Cross */}
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 1L9 9M9 1L1 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
