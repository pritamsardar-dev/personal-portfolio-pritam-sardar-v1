import { useState, useEffect } from "react";

// Persists state to localStorage and rehydrates on mount.
// Returns a hydrated flag to prevent premature renders before storage is read.
const usePersistentState = (key, defaultValue, enabled = true) => {
  const [state, setState] = useState(defaultValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        requestAnimationFrame(() => setState(JSON.parse(stored)));
      }
    } catch {
      /* empty */
    }

    requestAnimationFrame(() => setHydrated(true));
  }, [key, enabled]);

  useEffect(() => {
    if (!enabled || !hydrated) return;

    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* empty */
    }
  }, [key, state, enabled, hydrated]);

  return [state, setState, hydrated];
};

export default usePersistentState;
