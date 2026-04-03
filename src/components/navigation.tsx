"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isProjectPage = pathname.startsWith("/projects/");

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

  useEffect(() => {
    function onMuteChange(e: Event) {
      const detail = (e as CustomEvent).detail;
      setIsMuted(detail.muted);
    }
    window.addEventListener("mute-change", onMuteChange);
    return () => window.removeEventListener("mute-change", onMuteChange);
  }, []);

  const toggleMute = useCallback(() => {
    window.dispatchEvent(new CustomEvent("mute-toggle"));
  }, []);

  const showScrolledBar = isScrolled && !isMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        showScrolledBar
          ? "bg-white border-b border-black/10 py-3 lg:py-4"
          : "bg-transparent py-10 lg:py-12 2xl:py-16 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-12 2xl:px-20">
        <div className="flex items-center gap-4">
          {!isProjectPage && (
            <button
              onClick={toggleMute}
              className={`w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                showScrolledBar
                  ? "opacity-100 pointer-events-auto text-dark-alt hover:text-gold"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="-1 138 49 50" fill="currentColor">
                  <path d="M46 144.282L42.4678 140.729L0 183.447L3.53216 187L16.4528 174.004L22.9974 183.414C24.0395 184.661 25.3934 185.224 26.8096 185.224C27.4644 185.224 28.1129 185.095 28.7184 184.844C30.5943 184.065 31.8059 182.238 31.8059 180.198V158.56L46 144.282ZM26.8146 180.138L20.0421 170.396L26.8146 163.583V180.138ZM9.32302 166.96V157.583H18.1186L26.8097 145.086V149.371L31.7186 144.433C31.5086 142.639 30.4094 141.076 28.7184 140.374C26.8722 139.606 24.684 140.045 23.2774 141.465L15.516 152.557H9.32302C6.56758 152.557 4.32667 154.813 4.32667 157.583V167.634C4.32667 168.848 4.77399 169.948 5.48852 170.82L9.32302 166.96Z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 -1 48 47" fill="currentColor">
                  <path d="M29.5823 45.1555C28.1599 45.1555 26.7972 44.5937 25.7533 43.3489L18.2388 32.6101H12.0184C9.25082 32.6101 7 30.3593 7 27.5917V17.5552C7 14.7898 9.25082 12.5368 12.0184 12.5368H18.2388L26.0345 1.46158C27.4473 0.0460716 29.6453 -0.392754 31.4996 0.372221C33.3838 1.15013 34.6007 2.96942 34.6007 5.00936V40.1375C34.6007 42.1775 33.3837 44.0015 31.4996 44.7769C30.8914 45.0274 30.24 45.1561 29.5823 45.1555ZM12.0184 17.5552V27.5917H20.853L29.585 40.0773L29.5823 5.07687L20.853 17.5552H12.0184ZM39.6192 30.1006V25.0827C41.0017 25.0827 42.1282 23.9584 42.1282 22.5732C42.1282 21.1908 41.0017 20.0642 39.6192 20.0642V15.0458C43.7693 15.0458 47.1466 18.4231 47.1466 22.5732C47.1466 26.7233 43.7693 30.1006 39.6192 30.1006Z"/>
                </svg>
              )}
            </button>
          )}
        </div>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
        >
          <Image
            src="/images/logo-new.webp"
            alt="Arterra Projects"
            width={128}
            height={128}
            className={`h-auto transition-all duration-300 ${
              showScrolledBar
                ? "w-0 opacity-0"
                : "w-20 lg:w-[100px] 2xl:w-[128px] opacity-100"
            }`}
            priority
          />
          <Image
            src="/images/logo-text.svg"
            alt="Arterra Projects"
            width={190}
            height={70}
            className={`h-auto transition-all duration-300 invert ${
              showScrolledBar
                ? "w-20 lg:w-22 2xl:w-24 opacity-100"
                : "w-0 opacity-0"
            }`}
          />
        </Link>

        <button
          className={`flex items-center gap-2 text-sm lg:text-sm 2xl:text-base leading-[1.1] cursor-pointer transition-colors duration-500 z-50 menu-toggle pointer-events-auto ${
            showScrolledBar
              ? "text-dark-alt hover:text-gold"
              : "text-white hover:opacity-70"
          }`}
          aria-label="Toggle menu"
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span className="relative w-2.5 h-2.5">
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                showScrolledBar ? "bg-dark-alt" : "bg-white"
              } ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            />
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
