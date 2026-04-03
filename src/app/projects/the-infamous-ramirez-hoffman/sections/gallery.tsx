"use client";

import Image from "next/image";
import { useState, useCallback, useRef } from "react";

const GALLERY_IMAGES = [
  "/images/Rectangle 18.webp",
  "/images/Rectangle 23.webp",
  "/images/Rectangle 17.webp",
  "/images/Rectangle 8.webp",
  "/images/Rectangle 20.webp",
  "/images/Rectangle 11.webp",
  "/images/Rectangle 19.webp",
  "/images/Rectangle 9.webp",
  "/images/Rectangle 12.webp",
  "/images/Rectangle 21.webp",
  "/images/dl-136-1.webp",
  "/images/dl-136-2.webp",
];

export function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const dragStart = useRef(0);
  const isDragging = useRef(false);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrent(index);
    setDragOffset(0);
    setTimeout(() => setIsTransitioning(false), 400);
  }, []);

  const prev = useCallback(() => {
    goTo(current === 0 ? GALLERY_IMAGES.length - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current === GALLERY_IMAGES.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    dragStart.current = e.clientX;
    isDragging.current = true;
    setIsTransitioning(false);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setDragOffset(e.clientX - dragStart.current);
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragOffset < -80) next();
    else if (dragOffset > 80) prev();
    else {
      setIsTransitioning(true);
      setDragOffset(0);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  }, [dragOffset, next, prev]);

  const translateX = -current * 100;
  const dragPercent = (dragOffset / (typeof window !== "undefined" ? window.innerWidth : 1728)) * 100;

  return (
    <section
      className="relative w-full aspect-[1728/975] bg-black overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${GALLERY_IMAGES.length * 100}%`,
          transform: `translateX(${(translateX + dragPercent) / GALLERY_IMAGES.length}%)`,
          transition: isTransitioning ? "transform 400ms ease-out" : "none",
        }}
      >
        {GALLERY_IMAGES.map((src, i) => (
          <div key={src} className="relative shrink-0" style={{ width: `${100 / GALLERY_IMAGES.length}%`, height: "100%" }}>
            <Image
              src={src}
              alt={`Gallery photo ${i + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="100vw"
              priority={i === 0}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-6 lg:left-10 2xl:left-12 top-1/2 -translate-y-1/2 z-10 w-[34px] h-[95px] text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Previous"
      >
        <svg width="34" height="95" viewBox="0 0 34 95" fill="none">
          <path d="M32 2L4 47.5L32 93" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-6 lg:right-10 2xl:right-12 top-1/2 -translate-y-1/2 z-10 w-[34px] h-[95px] text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Next"
      >
        <svg width="34" height="95" viewBox="0 0 34 95" fill="none">
          <path d="M2 2L30 47.5L2 93" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
    </section>
  );
}
