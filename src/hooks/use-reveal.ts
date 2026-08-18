import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Inline style helper for staggering a reveal.
 *
 * Stagger sits in the 30–80ms range: enough that items read as a cascade,
 * short enough that the last item doesn't feel late.
 *
 * @param delayMs  when this element starts, relative to the section
 * @param travel   how far it rises (defaults to the 20px base)
 */
export const reveal = (delayMs = 0, travel?: string): CSSProperties =>
  ({
    "--reveal-delay": `${delayMs}ms`,
    ...(travel ? { "--reveal-y": travel } : {}),
  }) as CSSProperties;

interface RevealOptions {
  /** Fraction of the element that must be visible. 0 = as soon as any part enters. */
  threshold?: number;
  /** Shifts the trigger line. Negative bottom margin delays until the element is properly on screen. */
  rootMargin?: string;
}

/**
 * Scroll-reveal for a whole section.
 *
 * Attach the returned ref to a section container; every descendant carrying
 * `data-reveal` fades and rises into place as it enters the viewport. Stagger
 * with an inline `--reveal-delay`, and tune travel with `--reveal-y`.
 *
 * Two deliberate safety properties, because motion must never hide content:
 *   1. Elements are unobserved after revealing, so nothing is ever re-hidden.
 *   2. If IntersectionObserver is unavailable, everything reveals immediately.
 *
 * Reduced-motion handling lives in CSS (`[data-reveal]` keeps the fade, drops
 * the travel), so this hook stays motion-preference agnostic.
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const { threshold = 0, rootMargin = "0px 0px 50px 0px" } = options;
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (targets.length === 0) return;

    const revealAll = () =>
      targets.forEach((el) => el.classList.add("is-revealed"));

    // Fail open rather than leaving content at opacity 0
    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return containerRef;
}

export default useRevealOnScroll;
