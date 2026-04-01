"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", disabled: true },
  { href: "/projects/report-on-the-blind", label: "Report On The Blind", disabled: true },
  { href: "/projects/the-infamous-ramirez-hoffman", label: "The Infamous Ramirez Hoffman" },
  { href: "/tour-dates", label: "Tour Dates", disabled: true },
  { href: "/contact", label: "Contact", disabled: true },
];

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    window.dispatchEvent(new Event("menu-toggle"));
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(".menu-toggle")) {
        toggle();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [toggle]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-30 bg-dark flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-32">
          <nav className="flex flex-col gap-3 lg:gap-5 mb-12 lg:mb-0">
            <p className="text-gold text-sm lg:text-base font-medium uppercase tracking-wider mb-2">
              Navigation
            </p>
            {NAV_LINKS.map((link, i) => {
              if (link.disabled) {
                return (
                  <span
                    key={link.href}
                    className={`text-white/30 text-[28px] lg:text-[56px] leading-[1.15] cursor-default transition-all duration-400 ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${80 + i * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                  </span>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-white text-[28px] lg:text-[56px] leading-[1.15] hover:text-gold transition-all duration-400 ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${80 + i * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div
            className={`flex flex-col gap-8 lg:mt-8 transition-opacity duration-500 ${
              isOpen ? "opacity-100 delay-400" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-gold text-sm lg:text-base font-medium uppercase tracking-wider mb-3">
                Artists
              </p>
              <p className="text-white/80 text-base lg:text-xl leading-[1.4]">
                John Malkovich
                <br />
                Anastasya Terenkova
              </p>
            </div>

            <div>
              <p className="text-gold text-sm lg:text-base font-medium uppercase tracking-wider mb-3">
                Contact
              </p>
              <a
                href="mailto:info@arterraprojects.com"
                className="text-white/80 text-base lg:text-xl leading-[1.4] hover:text-white transition-colors"
              >
                info@arterraprojects.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
