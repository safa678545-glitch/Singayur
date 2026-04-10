import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds the IntersectionObserver-based
 * "fade-up" scroll animation to any element.
 */
export function useFadeUp<T extends HTMLElement>(
  threshold: number = 0.12,
  delay?: string
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const style = delay ? { transitionDelay: delay } : undefined;

  return { ref, style };
}
