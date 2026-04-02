"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import { VideoPlayerCard } from "./video-player-card";
import { ScrollReveal } from "./scroll-reveal";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    const el: HTMLVideoElement = videoRef.current;

    function onCanPlay() {
      setHasVideo(true);
    }
    function onError() {
      setHasVideo(false);
    }

    el.addEventListener("canplaythrough", onCanPlay);
    el.addEventListener("error", onError);

    if (el.readyState >= 4) setHasVideo(true);

    function broadcastMute(muted: boolean) {
      setIsMuted(muted);
      window.dispatchEvent(
        new CustomEvent("mute-change", { detail: { muted } }),
      );
    }

    function enableSoundOnInteraction() {
      const unmute = () => {
        el.muted = false;
        broadcastMute(false);
        document.removeEventListener("click", unmute);
        document.removeEventListener("touchstart", unmute);
        document.removeEventListener("keydown", unmute);
      };
      document.addEventListener("click", unmute, { once: true });
      document.addEventListener("touchstart", unmute, { once: true });
      document.addEventListener("keydown", unmute, { once: true });
    }

    async function startPlayback() {
      // Step 1: try unmuted play (works in Chrome if MEI is high enough)
      try {
        el.muted = false;
        await el.play();
        broadcastMute(false);
        return;
      } catch { /* blocked — expected on most browsers */ }

      // Step 2: muted autoplay (works everywhere with HTML muted attr)
      el.muted = true;
      broadcastMute(true);
      try {
        await el.play();
        enableSoundOnInteraction();
      } catch {
        // Step 3: even muted blocked (rare) — start on first interaction
        const resume = () => {
          el.muted = false;
          el.play().then(() => broadcastMute(false)).catch(() => {
            el.muted = true;
            el.play();
            broadcastMute(true);
            enableSoundOnInteraction();
          });
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      }
    }

    startPlayback();

    return () => {
      el.removeEventListener("canplaythrough", onCanPlay);
      el.removeEventListener("error", onError);
    };
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    window.dispatchEvent(
      new CustomEvent("mute-change", { detail: { muted: video.muted } }),
    );
  }, []);

  useEffect(() => {
    function onMuteToggle() {
      toggleMute();
    }
    window.addEventListener("mute-toggle", onMuteToggle);
    return () => window.removeEventListener("mute-toggle", onMuteToggle);
  }, [toggleMute]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1133px] w-full overflow-hidden bg-dark">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/artist-malkovich.webp"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          hasVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/5th Horizontal (Fragment from 1st) v1.mp4" type="video/mp4" />
      </video>

      {/* Fallback poster image */}
      <Image
        src="/images/artist-malkovich.webp"
        alt=""
        fill
        className={`object-cover object-[center_20%] transition-opacity duration-1000 ${
          hasVideo ? "opacity-0" : "opacity-100"
        }`}
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Mute/unmute button — top-left */}
      <button
        onClick={toggleMute}
        className="absolute top-8 lg:top-14 left-6 md:left-10 lg:left-20 z-50 w-8 h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors cursor-pointer"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="-1 138 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46 144.282L42.4678 140.729L0 183.447L3.53216 187L16.4528 174.004L22.9974 183.414C24.0395 184.661 25.3934 185.224 26.8096 185.224C27.4644 185.224 28.1129 185.095 28.7184 184.844C30.5943 184.065 31.8059 182.238 31.8059 180.198V158.56L46 144.282ZM26.8146 180.138L20.0421 170.396L26.8146 163.583V180.138ZM9.32302 166.96V157.583H18.1186L26.8097 145.086V149.371L31.7186 144.433C31.5086 142.639 30.4094 141.076 28.7184 140.374C26.8722 139.606 24.684 140.045 23.2774 141.465L15.516 152.557H9.32302C6.56758 152.557 4.32667 154.813 4.32667 157.583V167.634C4.32667 168.848 4.77399 169.948 5.48852 170.82L9.32302 166.96Z" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 -1 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5823 45.1555C28.1599 45.1555 26.7972 44.5937 25.7533 43.3489L18.2388 32.6101H12.0184C9.25082 32.6101 7 30.3593 7 27.5917V17.5552C7 14.7898 9.25082 12.5368 12.0184 12.5368H18.2388L26.0345 1.46158C27.4473 0.0460716 29.6453 -0.392754 31.4996 0.372221C33.3838 1.15013 34.6007 2.96942 34.6007 5.00936V40.1375C34.6007 42.1775 33.3837 44.0015 31.4996 44.7769C30.8914 45.0274 30.24 45.1561 29.5823 45.1555ZM12.0184 17.5552V27.5917H20.853L29.585 40.0773L29.5823 5.07687L20.853 17.5552H12.0184ZM39.6192 30.1006V25.0827C41.0017 25.0827 42.1282 23.9584 42.1282 22.5732C42.1282 21.1908 41.0017 20.0642 39.6192 20.0642V15.0458C43.7693 15.0458 47.1466 18.4231 47.1466 22.5732C47.1466 26.7233 43.7693 30.1006 39.6192 30.1006Z" fill="currentColor"/>
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="absolute bottom-12 lg:bottom-20 left-6 md:left-10 lg:left-20 right-6 md:right-10 lg:right-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
        <div className="flex flex-col gap-10 lg:gap-[100px] max-w-[800px]">
          <ScrollReveal variant="fade-up" delay={300} duration={1000}>
            <p className="text-gold text-[22px] sm:text-[28px] lg:text-[35px] font-bold leading-[0.9] tracking-[-0.02em]">
              John Malkovich
              <br />
              <span className="lowercase">&amp;</span> Anastasya Terenkova
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={600} duration={1100}>
            <h1 className="text-white text-[40px] sm:text-[60px] lg:text-[90px] font-bold leading-[0.9] tracking-[-0.02em]">
              <span className="uppercase">F</span>antastic{" "}
              <em className="italic">fusion</em>
              <br />
              of literature
              <br />
              and music
            </h1>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up" delay={800} duration={1000}>
          <VideoPlayerCard videoRef={videoRef} />
        </ScrollReveal>
      </div>
    </section>
  );
}
