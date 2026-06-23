import React, { useState, useEffect, useRef, useCallback, useContext } from "react";

import clsx from "clsx";

import { projectsCarouselBlockLayoutConfig } from "./projectsCarouselBlockLayout.config";
import { useScrolling } from "../../../hooks/useScrolling";

import { useLinkCTAHandler } from "./utils/useLinkCTAHandler";
import { useTheme } from "../../../hooks/useTheme";
import {
  CarouselCoordinationContext,
  registerCarousel,
  unregisterCarousel,
  subscribeSerialAnimation,
  notifyViewportChange,
  notifyInteraction,
  notifyCycleComplete,
} from "../../../hooks/useSerialCarouselCoordination";
import { normalizeImage } from "./utils/normalizeImage";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MaximizeIcon,
  XIcon,
  BrandFigmaIcon,
  BrandGithubIcon,
  PlayerPlayIcon,
  PlayerPauseIcon,
} from "../../../assets/icons/system";

import Button from "../../atoms/button/Button";
import TooltipButton from "../../atoms/tooltip/TooltipButton";

// CMS driven interactive media carousel block.
// Renders image slides with autoplay, manual navigation, and swipe support.
// Manages hover, focus, keyboard, and touch interaction states.
// Controls fullscreen lifecycle with play, pause, and feedback overlay.
// Auto hides controls based on user activity and viewport visibility.
const ProjectsCarouselBlock = ({
  variant,
  size = "default", // default / compact
  data,
  section,
  row,
  block,
  handlers,
  state,
}) => {
  const { id, enabled = true, images: rawImages } = data;
  const theme = useTheme();
  const images = (rawImages || []).map((img) => normalizeImage(img, theme));

  const buttonProps = section?.carouselBlockButtonProps;

  const isCollapsedMode = variant === "collapsed";
  const isCompactSize = size === "compact";
  const isFullScreenMode = state?.renderMode === "fullscreen";

  // Button configs resolved from CMS props with icon bindings
  const prevBtn = { ...buttonProps.find((b) => b.id === "arrow-left"), iconLeft: ChevronLeftIcon };
  const nextBtn = { ...buttonProps.find((b) => b.id === "arrow-right"), iconLeft: ChevronRightIcon };
  // Maps cta button ids to the corresponding key in row.links
  const ctaLinkKeyMap = {
    "live-demo-link": "liveDemo",
    "source-code-link": "sourceCode",
    "design-file-link": "designFile",
  };

  const ctaButtons = buttonProps
    .filter((b) => b.role === "cta")
    .map((b) => {
      const linkKey = ctaLinkKeyMap[b.id];
      const linkData = linkKey ? row?.links?.[linkKey] : null;
      const isLinkActive = Boolean(linkData?.url) || Boolean(linkData?.active);

      return {
        ...b,
        iconLeft:
          b.id === "live-demo-link"
            ? PlayerPlayIcon
            : b.id === "source-code-link"
              ? BrandGithubIcon
              : b.id === "design-file-link"
                ? BrandFigmaIcon
                : b.iconLeft,
        isLinkActive,
      };
    });
  const fullscreenBtn = {
    ...buttonProps.find((b) => b.id === "fullscreen"),
    iconLeft: MaximizeIcon,
  };
  const fullscreenCloseBtn = {
    ...buttonProps.find((b) => b.id === "close-fullscreen"),
    iconLeft: XIcon,
  };
  const playBtn = { ...buttonProps.find((b) => b.id === "play"), iconLeft: PlayerPlayIcon };
  const pauseBtn = { ...buttonProps.find((b) => b.id === "pause"), iconLeft: PlayerPauseIcon };

  // Timing constants
  const SLIDE_TRANSITION_DURATION = 650;
  const SLIDE_ANIMATION_REST = 2200;
  const SLIDE_ANIMATION_INTERVAL = SLIDE_TRANSITION_DURATION + SLIDE_ANIMATION_REST;
  const ARROW_AUTO_HIDE_DEALY = 3000;
  const CONTROLS_IDLE_HIDE_DELAY = 3500;
  const SWIPE_THRESHOLD = 50;
  const FEEDBACK_DURATION = 420;

  // State
  const [activeIndex, setActiveIndex] = useState(state?.initialIndex ?? 0);
  const [transitionMode, setTransitionMode] = useState("slide");
  const [isHovered, setIsHovered] = useState(false);
  const [areArrowsPinned, setAreArrowsPinned] = useState(false);
  const [isSeriallyActive, setIsSeriallyActive] = useState(false);
  const [isInteractingWithControls, setIsInteractingWithControls] = useState(false);
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const [areControlsVisible, setAreControlsVisible] = useState(true);
  const [areDotsVisible, setAreDotsVisible] = useState(true);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [showCenterFeedback, setShowCenterFeedback] = useState(false);
  const [feedbackAction, setFeedbackAction] = useState(null);
  const isScrolling = useScrolling(150);

  const { handleLinkCTA } = useLinkCTAHandler(row);

  // Refs
  const autoHideTimeoutRef = useRef(null);
  const swipeStartRef = useRef({ x: 0, y: 0 });
  const controlsIdleHideTimerRef = useRef(null);
  const viewportRef = useRef(null);
  const blockRef = useRef(null);
  const wasVisibleRef = useRef(null);
  const justWrappedRef = useRef(false);

  const { sectionId, serialAnimationEnabled } = useContext(CarouselCoordinationContext);

  // Derived visibility flags
  const showArrows = isHovered || areArrowsPinned || isKeyboardFocus;
  const showDots = isHovered || areDotsVisible;
  const showCTA = (isHovered || isKeyboardFocus) && !isInteractingWithControls;
  const showUtility = (isHovered || isKeyboardFocus) && !isInteractingWithControls;

  const toggleFullscreenBtn = isFullScreenMode ? fullscreenCloseBtn : fullscreenBtn;
  const togglePlayBtn = isFullScreenMode ? (isManuallyPaused ? playBtn : pauseBtn) : null;

  const shouldAutoPlay = isManuallyPaused
    ? false
    : isFullScreenMode || (serialAnimationEnabled && isSeriallyActive);

  const {
    outerContainer,
    slidesViewport,
    slidesTrack,
    carouselCtaContainer,
    carouselArrowContainer,
    carouselDotContainer,
    carouselUtilityContainer,
  } = projectsCarouselBlockLayoutConfig;

  // Layout classes
  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-button-overlay-default-blur)";

  const outerContainerClasses = isFullScreenMode
    ? outerContainer.fullscreen
    : isCollapsedMode
      ? outerContainer.collapsed[size] || outerContainer.collapsed.default
      : outerContainer.base;

  const slidesViewportClasses = isFullScreenMode ? slidesViewport.fullscreen : slidesViewport.base;

  const slidesTrackClasses = clsx(
    isFullScreenMode ? slidesTrack.fullscreen : slidesTrack.base,
    transitionMode === "slide" && "transition-transform ease-[cubic-bezier(0.4,0,0.2,1)]",
    transitionMode === "none" && "transition-none",
    "flex transition-transform duration-500 ease-in-out",
    "scale-100",
  );

  const carouselArrowContainerClasses = isFullScreenMode
    ? carouselArrowContainer.fullscreen
    : carouselArrowContainer.base;

  const carouselCtaContainerClasses = clsx(
    isFullScreenMode ? carouselCtaContainer.fullscreen : carouselCtaContainer.base.base,
    isCompactSize && isCollapsedMode
      ? carouselCtaContainer.base.compact
      : carouselCtaContainer.base.default,
  );

  const carouselDotContainerClasses = clsx(
    carouselDotContainer.base,
    isCompactSize && isCollapsedMode ? carouselDotContainer.compact : carouselDotContainer.default,
  );

  const carouselUtilityContainerClasses = clsx(
    carouselUtilityContainer.base,
    isCompactSize && isCollapsedMode
      ? carouselUtilityContainer.compact
      : carouselUtilityContainer.default,
  );

  // Visibility transition classes
  const arrowVisiblityClasses = clsx(
    "transition-opacity duration-300",
    showArrows && areControlsVisible
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none",
  );

  const ctaVisiblityClasses = clsx(
    "transition-opacity duration-300",
    showCTA && areControlsVisible
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none",
  );

  const utilityVisiblityClasses = clsx(
    "transition-opacity duration-300",
    showUtility && areControlsVisible
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none",
  );

  const dotsVisiblityClasses = clsx(
    "transition-opacity duration-300",
    showDots && areControlsVisible
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none",
  );

  const isTouchDevice =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  // Handlers
  const pauseByUserInteraction = useCallback(() => {
    if (serialAnimationEnabled && sectionId) {
      notifyInteraction(sectionId);
    }
    if (isFullScreenMode) {
      setIsManuallyPaused(true);
    }
  }, [serialAnimationEnabled, sectionId, isFullScreenMode]);

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    const diff = Math.abs(index - activeIndex);
    diff > 1 ? setTransitionMode("none") : setTransitionMode("slide");
    setActiveIndex(index);
  };

  const handleCtaClick = (item) => {
    handleLinkCTA(item);
  };

  const handleNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i === images.length - 1) {
        setTransitionMode("none");
        return 0;
      }
      setTransitionMode("slide");
      return i + 1;
    });
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === 0) {
        setTransitionMode("none");
        return images.length - 1;
      }
      setTransitionMode("slide");
      return i - 1;
    });
  }, [images.length]);

  const startAutoHideTimer = () => {
    if (autoHideTimeoutRef.current) {
      clearTimeout(autoHideTimeoutRef.current);
    }
    autoHideTimeoutRef.current = setTimeout(() => {
      setAreArrowsPinned(false);
    }, ARROW_AUTO_HIDE_DEALY);
  };

  const triggerNext = useCallback(() => {
    pauseByUserInteraction();
    setAreArrowsPinned(true);
    handleNext();
    startAutoHideTimer();
  }, [handleNext, pauseByUserInteraction]);

  const triggerPrev = useCallback(() => {
    pauseByUserInteraction();
    setAreArrowsPinned(true);
    handlePrev();
    startAutoHideTimer();
  }, [handlePrev, pauseByUserInteraction]);

  // Shows controls and resets the idle hide timer on user activity
  const showControlsOnInteraction = useCallback(() => {
    setAreControlsVisible(true);
    setAreDotsVisible(true);

    if (controlsIdleHideTimerRef.current) {
      clearTimeout(controlsIdleHideTimerRef.current);
    }

    controlsIdleHideTimerRef.current = setTimeout(() => {
      setAreControlsVisible(false);
      setAreDotsVisible(false);
    }, CONTROLS_IDLE_HIDE_DELAY);
  }, []);

  // Requests or exits fullscreen; preserves current slide state on open
  const triggerFullscreenToggle = useCallback(() => {
    const rect = blockRef.current.getBoundingClientRect();

    if (isFullScreenMode) {
      handlers?.onExitFullscreen?.();
    } else {
      setIsManuallyPaused(false);
      if (serialAnimationEnabled && sectionId) {
        notifyInteraction(sectionId);
      }
      handlers?.onRequestFullscreen?.({
        variant,
        section,
        row,
        block,
        originRect: rect,
        initialIndex: activeIndex,
      });
    }
  }, [
    isFullScreenMode,
    handlers,
    serialAnimationEnabled,
    sectionId,
    variant,
    section,
    row,
    block,
    activeIndex,
  ]);

  const onPointerDown = (e) => {
    swipeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const onPointerUp = (e) => {
    const { x, y } = swipeStartRef.current;
    const deltaX = e.clientX - x;
    const deltaY = e.clientY - y;

    // Horizontal swipe navigates carousel slides
    if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
      pauseByUserInteraction();
      deltaX > 0 ? handlePrev() : handleNext();
    }

    // Vertical swipe down closes fullscreen
    if (isFullScreenMode && deltaY > SWIPE_THRESHOLD && Math.abs(deltaY) > Math.abs(deltaX)) {
      triggerFullscreenToggle();
    }

    swipeStartRef.current = { x: 0, y: 0 };
  };

  // Toggles play and pause in fullscreen and shows a brief center feedback icon
  const handleFullscreenPlayToggle = useCallback(() => {
    if (!isFullScreenMode) return;

    setIsManuallyPaused((prev) => {
      const isPausing = !prev;
      setFeedbackAction(isPausing ? "pause" : "play");
      setShowCenterFeedback(true);
      return isPausing;
    });

    setTimeout(() => {
      setShowCenterFeedback(false);
    }, FEEDBACK_DURATION);
  }, [isFullScreenMode]);

  // Notifies serial coordinator of viewport changes; manages hover and control visibility
  const handleViewportChange = useCallback(
    (isVisible) => {
      const wasVisible = wasVisibleRef.current;

      // null means first observation after mount treat as initial state, no transition yet
      if (wasVisible === null) {
        wasVisibleRef.current = isVisible;
        if (isVisible && serialAnimationEnabled && sectionId && !isFullScreenMode) {
          // Already visible on mount/reload: register position but do NOT trigger animation
          notifyViewportChange(id, sectionId, false);
        }
        return;
      }

      if (isVisible && !wasVisible) {
        setIsHovered(true);
        showControlsOnInteraction();
        if (serialAnimationEnabled && sectionId && !isFullScreenMode) {
          notifyViewportChange(id, sectionId, true);
        }
      }

      if (!isVisible && wasVisible) {
        setIsHovered(false);
        setAreControlsVisible(false);
        if (serialAnimationEnabled && sectionId && !isFullScreenMode) {
          notifyViewportChange(id, sectionId, false);
        }
      }

      wasVisibleRef.current = isVisible;
    },
    [showControlsOnInteraction, serialAnimationEnabled, sectionId, id, isFullScreenMode],
  );

  // Effects
  useEffect(() => {
    if (isFullScreenMode && viewportRef.current) {
      viewportRef.current.focus();
    }
  }, [isFullScreenMode]);

  // Resets transition mode to slide after a no transition jump
  useEffect(() => {
    if (transitionMode === "none") {
      requestAnimationFrame(() => {
        setTransitionMode("slide");
      });
    }
  }, [transitionMode]);

  useEffect(() => {
    if (!blockRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        handleViewportChange(entry.intersectionRatio >= 0.85);
      },
      { threshold: [0.85] },
    );

    observer.observe(blockRef.current);

    return () => observer.disconnect();
  }, [handleViewportChange]);

  // Drives autoplay interval; marks wrap for cycle-complete notification.
  // In fullscreen, fires an initial short-delay tick so play feels immediate
  // rather than waiting a full 2850ms before the first visible movement.
  useEffect(() => {
    if (!shouldAutoPlay) return;

    const advance = () => {
      setActiveIndex((i) => {
        if (i === images.length - 1) {
          setTransitionMode("none");
          justWrappedRef.current = true;
          return 0;
        }
        setTransitionMode("slide");
        return i + 1;
      });
    };

    let firstTick;
    let interval;

    if (isFullScreenMode) {
      firstTick = setTimeout(() => {
        advance();
        interval = setInterval(advance, SLIDE_ANIMATION_INTERVAL);
      }, SLIDE_ANIMATION_INTERVAL);
    } else {
      interval = setInterval(advance, SLIDE_ANIMATION_INTERVAL);
    }

    return () => {
      clearTimeout(firstTick);
      clearInterval(interval);
    };
  }, [shouldAutoPlay, images.length, SLIDE_ANIMATION_INTERVAL, isFullScreenMode]);

  useEffect(() => {
    return () => {
      if (autoHideTimeoutRef.current) {
        clearTimeout(autoHideTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (controlsIdleHideTimerRef.current) {
        clearTimeout(controlsIdleHideTimerRef.current);
      }
    };
  }, []);

  // Register with the section coordinator (skipped for fullscreen instances —
  // portals keep React tree context but we don't want fullscreen to interfere)
  useEffect(() => {
    if (!serialAnimationEnabled || !sectionId || isFullScreenMode) return;
    registerCarousel(id, sectionId, blockRef);
    return () => unregisterCarousel(id, sectionId);
  }, [id, sectionId, serialAnimationEnabled, isFullScreenMode]);

  // Subscribe to activation signal from coordinator
  // On activation: always reset to slide 1 before starting, then begin animating
  useEffect(() => {
    if (!serialAnimationEnabled || !sectionId || isFullScreenMode) return;
    const unsubscribe = subscribeSerialAnimation(id, sectionId, (signal) => {
      if (signal === true) {
        // Intro: glide from slide 2 → 1 so first visible movement lands on hero
        if (images.length > 1) {
          setTransitionMode("none");
          setActiveIndex(1);
          requestAnimationFrame(() => {
            setTimeout(() => {
              setTransitionMode("slide");
              setActiveIndex(0);
              setTimeout(() => setIsSeriallyActive(true), SLIDE_TRANSITION_DURATION + 100);
            }, 80);
          });
        } else {
          setTransitionMode("none");
          setActiveIndex(0);
          requestAnimationFrame(() => setIsSeriallyActive(true));
        }
      } else if (signal === "continue") {
        // Serial handoff: no intro, start clean from slide 1
        setTransitionMode("none");
        setActiveIndex(0);
        requestAnimationFrame(() => setIsSeriallyActive(true));
      } else {
        setIsSeriallyActive(false);
      }
    });
    return unsubscribe;
  }, [id, sectionId, serialAnimationEnabled, isFullScreenMode, images.length]);

  // After a full cycle wraps back to slide 1, hand off to the next card
  useEffect(() => {
    if (justWrappedRef.current && serialAnimationEnabled && sectionId && isSeriallyActive) {
      justWrappedRef.current = false;
      notifyCycleComplete(id, sectionId);
    }
  }, [activeIndex, id, isSeriallyActive, sectionId, serialAnimationEnabled]);

  if (!enabled) return null;

  return (
    <div
      ref={blockRef}
      id={id}
      className={clsx(outerContainerClasses)}
      onMouseEnter={() => {
        setIsHovered(true);
        if (autoHideTimeoutRef.current) {
          clearTimeout(autoHideTimeoutRef.current);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (areArrowsPinned) {
          startAutoHideTimer();
        }
        clearTimeout(controlsIdleHideTimerRef.current);
      }}
    >
      {/* Viewport Container */}
      <div
        className={clsx(slidesViewportClasses)}
        tabIndex={isFullScreenMode ? 0 : -1}
        ref={viewportRef}
        onFocus={() => {
          if (isFullScreenMode) return;
          setIsKeyboardFocus(true);
          pauseByUserInteraction();
        }}
        onBlur={() => {
          if (isFullScreenMode) return;
          setIsKeyboardFocus(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            pauseByUserInteraction();
            e.preventDefault();
            triggerNext();
          }

          if (e.key === "ArrowLeft") {
            pauseByUserInteraction();
            e.preventDefault();
            triggerPrev();
          }

          if ((e.key === " " || e.key === "Spacebar") && isFullScreenMode) {
            e.preventDefault();
            handleFullscreenPlayToggle();
          }
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ touchAction: isFullScreenMode ? "none" : "pan-y" }}
        onMouseMove={showControlsOnInteraction}
      >
        {/* Slides Track */}
        {Array.isArray(images) && images?.length > 0 && (
          <div
            className={clsx(slidesTrackClasses)}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transitionDuration:
                transitionMode === "slide" ? `${SLIDE_TRANSITION_DURATION}ms` : "0ms",
            }}
          >
            {images.map((slide) => (
              <div
                key={slide.id}
                className={clsx("w-full h-full flex-shrink-0", "flex items-center justify-center")}
                onClick={!isTouchDevice ? handleFullscreenPlayToggle : undefined}
              >
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        )}

        {/* Center Play Toggle Feedback */}
        {showCenterFeedback && (
          <div
            className={clsx(
              "absolute inset-0 z-40",
              "flex items-center justify-center",
              "pointer-events-none",
            )}
          >
            <Button
              {...(feedbackAction === "pause" ? pauseBtn : playBtn)}
              className="u-feedback-bubbly-pop"
            />
          </div>
        )}

        {/* CTA Buttons */}
        {Array.isArray(ctaButtons) && ctaButtons.length > 0 && (
          <div className={clsx(carouselCtaContainerClasses, ctaVisiblityClasses)}>
            {ctaButtons.map((btn) => (
              <div key={btn.id} className="relative inline-flex">
                <Button
                  variant={btn.variant}
                  size={size}
                  label={btn.label}
                  iconLeft={btn.iconLeft}
                  className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                  onClick={() => handleCtaClick(btn)}
                />
                <span
                  className={clsx(
                    "absolute top-1 right-1 sm:top-1.5 sm:right-1.5 z-10",
                    "w-1.5 h-1.5 rounded-full pointer-events-none",
                  )}
                  style={{
                    background: btn.isLinkActive
                      ? "linear-gradient(135deg, #86efac, #4ade80)"
                      : "rgba(255, 255, 255, 0.3)",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Arrow Buttons and Play Toggle — fullscreen only inside viewport */}
        {isFullScreenMode && (prevBtn || nextBtn) && (
          <div
            className={clsx(carouselArrowContainerClasses, arrowVisiblityClasses)}
            onMouseEnter={() => setIsInteractingWithControls(true)}
            onMouseLeave={() => setIsInteractingWithControls(false)}
            onFocusCapture={() => setIsInteractingWithControls(true)}
            onBlurCapture={() => setIsInteractingWithControls(false)}
          >
            {prevBtn && (
              <TooltipButton label="Previous" position="top">
                <Button
                  {...prevBtn}
                  size={size}
                  onClick={triggerPrev}
                  className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                />
              </TooltipButton>
            )}
            {togglePlayBtn && (
              <TooltipButton label={isManuallyPaused ? "Play" : "Pause"} position="top">
                <Button
                  {...togglePlayBtn}
                  onClick={handleFullscreenPlayToggle}
                  className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                />
              </TooltipButton>
            )}
            {nextBtn && (
              <TooltipButton label="Next" position="top">
                <Button
                  {...nextBtn}
                  size={size}
                  onClick={triggerNext}
                  className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                />
              </TooltipButton>
            )}
          </div>
        )}

        {/* Fullscreen Toggle Button */}
        {toggleFullscreenBtn && (
          <div className={clsx(carouselUtilityContainerClasses, utilityVisiblityClasses)}>
            <TooltipButton label={isFullScreenMode ? "Exit full screen" : "Full screen"} position="left">
              <Button
                {...toggleFullscreenBtn}
                size={size}
                className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                onClick={triggerFullscreenToggle}
              />
            </TooltipButton>
          </div>
        )}

        {/* Dot Navigation */}
        {Array.isArray(images) && images.length > 0 && (
          <div
            className={clsx(carouselDotContainerClasses, isFullScreenMode && dotsVisiblityClasses)}
            onMouseEnter={() => setIsInteractingWithControls(true)}
            onMouseLeave={() => setIsInteractingWithControls(false)}
            onFocusCapture={() => setIsInteractingWithControls(true)}
            onBlurCapture={() => setIsInteractingWithControls(false)}
          >
            {images.map((_, index) => (
              <Button
                key={index}
                variant="carouselDot"
                size={size}
                className={clsx(
                  backdropBlur,
                  "flex transition-all scale-100 duration-300 ease-out",
                  index === activeIndex && ["bg-[var(--color-carousal-dot-active)]", "scale-105"],
                )}
                onClick={() => {
                  pauseByUserInteraction();
                  handleDotClick(index);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Arrow Buttons — non-fullscreen: outside viewport so overflow-hidden never clips them */}
      {!isFullScreenMode && (prevBtn || nextBtn) && (
        <div
          className={clsx(carouselArrowContainerClasses, arrowVisiblityClasses)}
          onMouseEnter={() => setIsInteractingWithControls(true)}
          onMouseLeave={() => setIsInteractingWithControls(false)}
          onFocusCapture={() => setIsInteractingWithControls(true)}
          onBlurCapture={() => setIsInteractingWithControls(false)}
        >
          {prevBtn && (
            <TooltipButton label="Previous" position="top">
              <Button
                {...prevBtn}
                size={size}
                onClick={triggerPrev}
                className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
              />
            </TooltipButton>
          )}
          {nextBtn && (
            <TooltipButton label="Next" position="top">
              <Button
                {...nextBtn}
                size={size}
                onClick={triggerNext}
                className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
              />
            </TooltipButton>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsCarouselBlock;
