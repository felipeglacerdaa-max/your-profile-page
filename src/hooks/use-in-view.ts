import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit;

export const useInView = (options: Options = { threshold: 0.1 }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView } as const;
};
