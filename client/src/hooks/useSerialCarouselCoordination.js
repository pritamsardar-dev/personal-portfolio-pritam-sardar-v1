import { createContext } from "react";

export const CarouselCoordinationContext = createContext({
  sectionId: null,
  serialAnimationEnabled: false,
});

const sections = new Map();
const INTRO_PHASE_DURATION = 900;

function getSection(sectionId) {
  if (!sections.has(sectionId)) {
    sections.set(sectionId, {
      carousels: new Map(),
      activeId: null,
      interacted: false,
      inIntro: false,
      listeners: new Map(),
      scheduleTimer: null,
      introTimer: null,
    });
  }
  return sections.get(sectionId);
}

function getSortedViewportIds(section) {
  return [...section.carousels.entries()]
    .filter(([, c]) => c.inViewport)
    .sort(([, a], [, b]) => {
      const ra = a.elementRef?.current?.getBoundingClientRect();
      const rb = b.elementRef?.current?.getBoundingClientRect();
      if (!ra || !rb) return 0;
      return Math.abs(ra.top - rb.top) > 20 ? ra.top - rb.top : ra.left - rb.left;
    })
    .map(([id]) => id);
}

// Always fires intro for all viewport cards ignores interacted state
// After INTRO_PHASE_DURATION, hands serial control to first card (or stops if interacted)
function startIntro(sectionId) {
  const section = sections.get(sectionId);
  if (!section) return;
  if (section.scheduleTimer) {
    clearTimeout(section.scheduleTimer);
    section.scheduleTimer = null;
  }

  section.scheduleTimer = setTimeout(() => {
    section.scheduleTimer = null;
    const order = getSortedViewportIds(section);
    if (order.length === 0) return;

    section.inIntro = true;
    section.activeId = null;

    order.forEach((id) => section.listeners.get(id)?.(true));

    section.introTimer = setTimeout(() => {
      section.introTimer = null;
      section.inIntro = false;
      const currentOrder = getSortedViewportIds(section);

      if (section.interacted || currentOrder.length === 0) {
        currentOrder.forEach((id) => section.listeners.get(id)?.(false));
        section.activeId = null;
        return;
      }

      const firstId = currentOrder[0];
      currentOrder.slice(1).forEach((id) => section.listeners.get(id)?.(false));
      section.activeId = firstId;
      // firstId already animating from intro no re-signal needed
    }, INTRO_PHASE_DURATION);
  }, 100);
}

// Serial continuation only picks the next card, respects interacted state
function scheduleSerial(sectionId) {
  const section = sections.get(sectionId);
  if (!section) return;
  if (section.scheduleTimer) clearTimeout(section.scheduleTimer);
  section.scheduleTimer = setTimeout(() => {
    section.scheduleTimer = null;
    if (section.interacted || section.activeId || section.inIntro) return;
    const order = getSortedViewportIds(section);
    if (order.length === 0) return;
    section.activeId = order[0];
    section.listeners.get(order[0])?.("continue");
  }, 100);
}

export function registerCarousel(id, sectionId, elementRef) {
  const section = getSection(sectionId);
  section.carousels.set(id, { elementRef, inViewport: false });
}

export function unregisterCarousel(id, sectionId) {
  const section = sections.get(sectionId);
  if (!section) return;
  section.carousels.delete(id);
  section.listeners.delete(id);
  if (section.activeId === id) section.activeId = null;
  if (section.carousels.size === 0) sections.delete(sectionId);
}

export function subscribeSerialAnimation(id, sectionId, callback) {
  const section = getSection(sectionId);
  section.listeners.set(id, callback);
  return () => {
    const s = sections.get(sectionId);
    if (s) s.listeners.delete(id);
  };
}

export function notifyViewportChange(id, sectionId, inViewport) {
  const section = sections.get(sectionId);
  if (!section) return;
  const carousel = section.carousels.get(id);
  if (!carousel) return;

  const wasInViewport = carousel.inViewport;
  carousel.inViewport = inViewport;

  const anyInViewport = [...section.carousels.values()].some((c) => c.inViewport);

  if (!anyInViewport) {
    // All cards scrolled away full reset
    if (section.scheduleTimer) {
      clearTimeout(section.scheduleTimer);
      section.scheduleTimer = null;
    }
    if (section.introTimer) {
      clearTimeout(section.introTimer);
      section.introTimer = null;
    }
    section.listeners.forEach((cb) => cb(false));
    section.interacted = false;
    section.activeId = null;
    section.inIntro = false;
    return;
  }

  if (inViewport && !wasInViewport) {
    // Mid animation viewport fluctuation don't interrupt a running intro or serial cycle
    if (section.inIntro || section.activeId) return;
    section.interacted = false;
    section.activeId = null;
    if (section.introTimer) {
      clearTimeout(section.introTimer);
      section.introTimer = null;
    }
    section.inIntro = false;
    startIntro(sectionId);
    return;
  }

  if (!inViewport && wasInViewport && section.activeId === id) {
    section.listeners.get(id)?.(false);
    section.activeId = null;
    if (!section.interacted) scheduleSerial(sectionId);
  }
}

export function notifyInteraction(sectionId) {
  const section = sections.get(sectionId);
  if (!section || section.interacted) return;
  section.interacted = true;
  if (section.scheduleTimer) {
    clearTimeout(section.scheduleTimer);
    section.scheduleTimer = null;
  }
  // Only stop the active card if in serial intro cards run to completion naturally
  if (!section.inIntro && section.activeId) {
    section.listeners.get(section.activeId)?.(false);
    section.activeId = null;
  }
}

export function notifyCycleComplete(id, sectionId) {
  const section = sections.get(sectionId);
  if (!section || section.interacted || section.activeId !== id) return;

  const order = getSortedViewportIds(section);
  section.listeners.get(id)?.(false);

  if (order.length === 0) {
    section.activeId = null;
    return;
  }

  const nextId = order[(order.indexOf(id) + 1) % order.length];
  section.activeId = nextId;
  section.listeners.get(nextId)?.("continue");
}
