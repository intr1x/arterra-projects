"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface VideoPlayerCardProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoPlayerCard({ videoRef }: VideoPlayerCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(46);
  const [isSeeking, setIsSeeking] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onPlay() { setIsPlaying(true); }
    function onPause() { setIsPlaying(false); }
    function onTimeUpdate() {
      if (!isSeeking) setCurrentTime(video!.currentTime);
    }
    function onLoaded() {
      if (video!.duration && isFinite(video!.duration)) {
        setDuration(video!.duration);
      }
    }

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("durationchange", onLoaded);

    if (video.duration && isFinite(video.duration)) {
      setDuration(video.duration);
    }
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("durationchange", onLoaded);
    };
  }, [videoRef, isSeeking]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }, [videoRef]);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      const bar = progressRef.current;
      if (!video || !bar) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = ratio * duration;
      setCurrentTime(ratio * duration);
    },
    [videoRef, duration],
  );

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="backdrop-blur-[14px] bg-gradient-to-r from-white/30 to-white/10 rounded-lg p-4 w-full max-w-[374px] flex flex-col gap-3">
      {/* Title row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Play / Pause button */}
          <button
            onClick={togglePlay}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="1" y="1" width="3" height="8" rx="0.5" fill="#fffded" />
                <rect x="6" y="1" width="3" height="8" rx="0.5" fill="#fffded" />
              </svg>
            ) : (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M1 1.5V10.5L9 6L1 1.5Z" fill="#fffded" />
              </svg>
            )}
          </button>
          <span className="font-medium text-off-white text-sm leading-[1.1]">
            Behind the Scenes
          </span>
        </div>
        <span className="font-medium text-off-white text-sm leading-[1.1] tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      {/* Progress bar */}
      <div
        ref={progressRef}
        className="relative h-1 bg-white/20 rounded-full cursor-pointer group"
        onClick={seek}
        onMouseDown={() => setIsSeeking(true)}
        onMouseUp={() => setIsSeeking(false)}
      >
        <div
          className="absolute left-0 top-0 h-full bg-white/80 rounded-full transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
          style={{ left: `calc(${progress}% - 5px)` }}
        />
      </div>

      {/* Description */}
      <p className="text-off-white text-sm leading-[1.2] opacity-80 ml-[38px]">
        Report on the Blind
        <br />
        John Malkovich &amp; Anastasya Terenkova
        <br />
        Festival Les Atheneennes
      </p>
    </div>
  );
}
