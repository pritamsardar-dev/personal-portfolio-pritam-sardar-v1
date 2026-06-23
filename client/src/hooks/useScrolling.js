import { useState, useEffect } from "react";

// Tracks whether the user is actively scrolling.
// Returns false after the given idle delay (ms) with no scroll events.
export function useScrolling(idleDelay = 150) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), idleDelay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, [idleDelay]);

  return isScrolling;
}
