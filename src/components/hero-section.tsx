"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { VideoPlayerCard } from "./video-player-card";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onCanPlay() {
      setHasVideo(true);
    }
    function onError() {
      setHasVideo(false);
    }

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1133px] w-full overflow-hidden bg-dark">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/artist-malkovich.jpg"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          hasVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/ART-bts-small.mp4" type="video/mp4" />
      </video>

      {/* Fallback poster image */}
      <Image
        src="/images/artist-malkovich.jpg"
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

      {/* Content */}
      <div className="absolute bottom-12 lg:bottom-20 left-6 md:left-10 lg:left-20 right-6 md:right-10 lg:right-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
        <h1 className="text-white text-[40px] sm:text-[56px] lg:text-[80px] leading-[1] tracking-[0.01em] uppercase max-w-[1000px]">
          A fusion of music
          <br />
          and literature
        </h1>

        <VideoPlayerCard videoRef={videoRef} />
      </div>
    </section>
  );
}
