"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { VideoPlayerCard } from "@/components/video-player-card";
import { SectionHeader } from "./overview";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onCanPlay() {
      setHasVideo(true);
    }

    video.addEventListener("canplaythrough", onCanPlay);
    if (video.readyState >= 4) setHasVideo(true);

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
    };
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 pt-12 lg:pt-0 pb-12 lg:pb-20">
      <div className="lg:mb-[100px]">
        <SectionHeader title="Video" />
      </div>

      <div className="lg:px-[135px]">
      <div className="relative w-full aspect-[1302/854] rounded-lg overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hasVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/5th Horizontal (Fragment from 1st) v1.mp4" type="video/mp4" />
        </video>

        <button
          onClick={toggleMute}
          className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-white/70 transition-colors cursor-pointer"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="-1 138 49 50" fill="currentColor">
              <path d="M46 144.282L42.4678 140.729L0 183.447L3.53216 187L16.4528 174.004L22.9974 183.414C24.0395 184.661 25.3934 185.224 26.8096 185.224C27.4644 185.224 28.1129 185.095 28.7184 184.844C30.5943 184.065 31.8059 182.238 31.8059 180.198V158.56L46 144.282ZM26.8146 180.138L20.0421 170.396L26.8146 163.583V180.138ZM9.32302 166.96V157.583H18.1186L26.8097 145.086V149.371L31.7186 144.433C31.5086 142.639 30.4094 141.076 28.7184 140.374C26.8722 139.606 24.684 140.045 23.2774 141.465L15.516 152.557H9.32302C6.56758 152.557 4.32667 154.813 4.32667 157.583V167.634C4.32667 168.848 4.77399 169.948 5.48852 170.82L9.32302 166.96Z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 -1 48 47" fill="currentColor">
              <path d="M29.5823 45.1555C28.1599 45.1555 26.7972 44.5937 25.7533 43.3489L18.2388 32.6101H12.0184C9.25082 32.6101 7 30.3593 7 27.5917V17.5552C7 14.7898 9.25082 12.5368 12.0184 12.5368H18.2388L26.0345 1.46158C27.4473 0.0460716 29.6453 -0.392754 31.4996 0.372221C33.3838 1.15013 34.6007 2.96942 34.6007 5.00936V40.1375C34.6007 42.1775 33.3837 44.0015 31.4996 44.7769C30.8914 45.0274 30.24 45.1561 29.5823 45.1555ZM12.0184 17.5552V27.5917H20.853L29.585 40.0773L29.5823 5.07687L20.853 17.5552H12.0184ZM39.6192 30.1006V25.0827C41.0017 25.0827 42.1282 23.9584 42.1282 22.5732C42.1282 21.1908 41.0017 20.0642 39.6192 20.0642V15.0458C43.7693 15.0458 47.1466 18.4231 47.1466 22.5732C47.1466 26.7233 43.7693 30.1006 39.6192 30.1006Z" />
            </svg>
          )}
        </button>

        <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 z-10">
          <VideoPlayerCard videoRef={videoRef} />
        </div>
      </div>
      </div>
    </section>
  );
}
