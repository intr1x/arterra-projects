"use client";

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale"
  | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  stagger?: number;
}

const INITIAL_STYLES: Record<Variant, CSSProperties> = {
  "fade-up": { opacity: 0, transform: "translateY(40px)" },
  "fade-down": { opacity: 0, transform: "translateY(-40px)" },
  "fade-left": { opacity: 0, transform: "translateX(-40px)" },
  "fade-right": { opacity: 0, transform: "translateX(40px)" },
  fade: { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.95)" },
  blur: { opacity: 0, filter: "blur(8px)" },
};

const VISIBLE_STYLES: Record<Variant, CSSProperties> = {
  "fade-up": { opacity: 1, transform: "translateY(0)" },
  "fade-down": { opacity: 1, transform: "translateY(0)" },
  "fade-left": { opacity: 1, transform: "translateX(0)" },
  "fade-right": { opacity: 1, transform: "translateX(0)" },
  fade: { opacity: 1 },
  scale: { opacity: 1, transform: "scale(1)" },
  blur: { opacity: 1, filter: "blur(0)" },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  once = true,
  className = "",
  as: Tag = "div",
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

  const style: CSSProperties = {
    transition: baseTransition,
    willChange: "opacity, transform",
    ...(isVisible ? VISIBLE_STYLES[variant] : INITIAL_STYLES[variant]),
  };

  const Component = Tag as React.ElementType;

  if (stagger > 0) {
    return (
      <Component ref={ref} className={className} style={{ ...style }}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div
                key={i}
                style={{
                  transition: baseTransition.replace(
                    new RegExp(`${delay}ms`, "g"),
                    `${delay + i * stagger}ms`,
                  ),
                  ...(isVisible
                    ? VISIBLE_STYLES[variant]
                    : INITIAL_STYLES[variant]),
                }}
              >
                {child}
              </div>
            ))
          : children}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  stagger?: number;
  variant?: Variant;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function RevealGroup({
  children,
  stagger = 120,
  variant = "fade-up",
  duration = 800,
  threshold = 0.1,
  className = "",
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            const delay = i * stagger;
            const style: CSSProperties = {
              transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              willChange: "opacity, transform",
              ...(isVisible ? VISIBLE_STYLES[variant] : INITIAL_STYLES[variant]),
            };
            return (
              <div key={i} style={style}>
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
