import { useEffect, useState, RefObject } from 'react';

export default function useInView(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      {
        root: null,
        threshold: 0.5,
        rootMargin: '-50% 0px -50% 0px', // activates at center of screen
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref]);

  return isIntersecting;
}
