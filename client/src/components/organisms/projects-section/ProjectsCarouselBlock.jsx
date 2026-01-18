/**
 * Role: CMS-driven, interactive media carousel for Projects section
 * Used by: BlockRenderer via `block.type`
 * Responsibilities:
 *   - Render image slides with autoplay, manual navigation, and swipe support
 *   - Manage interaction states (hover, focus, keyboard, touch)
 *   - Control fullscreen lifecycle (enter/exit, play/pause, feedback overlay)
 *   - Auto-hide and reveal controls based on user activity and viewport visibility
 * Guardrails:
 *   - Fully data-driven (slides, buttons, behaviors from CMS config)
 *   - Viewport-aware and performance-safe (IntersectionObserver, timers cleanup)
 *   - No page-specific logic; layout & behavior governed by tokenized config
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import Button from "../../atoms/button/Button";
import { projectsCarouselBlockLayoutConfig } from "./projectsCarouselBlockLayout.config";
import { useScrolling } from "../../../hooks/useScrolling";

const ProjectsCarouselBlock = ({
    variant,
    size = "default",  // default / compact
    data,
    block,
    handlers,
    state,
}) => {
    const {
        id,
        enabled = true,
        slides,
        buttonProps, 
    } = data;

    const isCollapsedMode = variant === "collapsed";
    const isCompactSize = size === "compact";
    const isFullScreenMode = state?.renderMode === "fullscreen";

    const prevBtn = buttonProps.find(b => b.id === "arrow-left");
    const nextBtn = buttonProps.find(b => b.id === "arrow-right");
    const ctaButtons = buttonProps.filter(b => b.role === "cta");
    const fullscreenBtn = buttonProps.find(b => b.id === "fullscreen");
    const fullscreenCloseBtn = buttonProps.find(b => b.id === "close-fullscreen");
    const playBtn = buttonProps.find(b => b.id === "play");
    const pauseBtn = buttonProps.find(b => b.id === "pause");

    const SLIDE_TRANSITION_DURATION = 650;
    const SLIDE_ANIMATION_REST = 2200;
    const SLIDE_ANIMATION_INTERVAL = SLIDE_TRANSITION_DURATION + SLIDE_ANIMATION_REST;
    const ARROW_AUTO_HIDE_DEALY = 3000;
    const CONTROLS_IDLE_HIDE_DELAY = 3500;
    const SWIPE_THRESHOLD = 50; // px
    const FEEDBACK_DURATION = 420;

    const [activeIndex, setActiveIndex] = useState(0); 
    const [transitionMode, setTransitionMode] = useState("slide");
    const [isHovered, setIsHovered] = useState(false);
    const [areArrowsPinned, setAreArrowsPinned] = useState(false);
    const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
    const [isInteractingWithControls, setIsInteractingWithControls] = useState(false);
    const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
    const [areControlsVisible, setAreControlsVisible] = useState(true);
    const [areDotsVisible, setAreDotsVisible] = useState(true);
    const [isInViewport, setIsInViewport] = useState(false);
    const [isManuallyPaused, setIsManuallyPaused] = useState(false);
    const [showCenterFeedback, setShowCenterFeedback] = useState(false);
    const [feedbackAction, setFeedbackAction] = useState(null);
    const isScrolling = useScrolling(150);

    const autoHideTimeoutRef = useRef(null);
    const swipeStartRef = useRef({ x: 0, y: 0 });
    const controlsIdleHideTimerRef = useRef(null);
    const viewportRef = useRef(null);
    const blockRef = useRef(null);
    const wasVisibleRef = useRef(false);

    const showArrows = isHovered || areArrowsPinned || isKeyboardFocus;
    const showDots = isHovered || areDotsVisible;
    
    const showCTA = (isHovered || isKeyboardFocus) && !isInteractingWithControls;
    const showUtility = (isHovered || isKeyboardFocus) && !isInteractingWithControls;

    const toggleFullscreenBtn = isFullScreenMode ? fullscreenCloseBtn : fullscreenBtn;
    const togglePlayBtn = isFullScreenMode ? isManuallyPaused ? playBtn : pauseBtn : null;

    const shouldAutoPlay = isAutoPlayEnabled && !isManuallyPaused && (isFullScreenMode || isInViewport);

    const {
        outerContainer,
        slidesViewport,
        slidesTrack,
        carouselCtaContainer,
        carouselArrowContainer,
        carouselDotContainer,
        carouselUtilityContainer,
    } = projectsCarouselBlockLayoutConfig;

    const backdropBlur = 
      isScrolling ? "backdrop-blur-none" 
      : "backdrop-blur-(--effect-button-overlay-default-blur)";

    const outerContainerClasses = isFullScreenMode
        ? outerContainer.fullscreen
        : isCollapsedMode
        ? outerContainer.collapsed[size] || outerContainer.collapsed.default
        : outerContainer.base;

    const slidesViewportClasses = isFullScreenMode
        ? slidesViewport.fullscreen
        : slidesViewport.base;

    const slidesTrackClasses = clsx(
        isFullScreenMode ? slidesTrack.fullscreen : slidesTrack.base,
        transitionMode === "slide" &&
            "transition-transform ease-[cubic-bezier(0.4,0,0.2,1)]",
        transitionMode === "none" && "transition-none",
        "flex transition-transform duration-500 ease-in-out",
        isFullScreenMode ? "scale-105" : "scale-100"
    );

    const carouselArrowContainerClasses = isFullScreenMode
        ? carouselArrowContainer.fullscreen
        : carouselArrowContainer.base;

    const carouselCtaContainerClasses = clsx(
        isFullScreenMode
        ? carouselCtaContainer.fullscreen
        : carouselCtaContainer.base.base,
            isCompactSize && isCollapsedMode ?
            carouselCtaContainer.base.compact 
            : carouselCtaContainer.base.default
    );

    const carouselDotContainerClasses = clsx(
        carouselDotContainer.base,
        isCompactSize && isCollapsedMode ?
        carouselDotContainer.compact 
        : carouselDotContainer.default
    );

    const carouselUtilityContainerClasses = clsx(
        carouselUtilityContainer.base,
        isCompactSize && isCollapsedMode ?
        carouselUtilityContainer.compact 
        : carouselUtilityContainer.default
    );

    const arrowVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showArrows && areControlsVisible
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
    );

    const ctaVisiblityClasses = clsx(
       "transition-opacity duration-300",
        showCTA && areControlsVisible
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
    );

    const utilityVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showUtility && areControlsVisible
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
    );

    const dotsVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showDots && areControlsVisible
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
    );

    const isTouchDevice =
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches;
    
    const pauseByUserInteraction = useCallback(() => {
        setIsManuallyPaused(true);
        setIsAutoPlayEnabled(false);
    }, []);

    const handleDotClick = (index) => {
        if (index === activeIndex) return;
        const diff = Math.abs(index - activeIndex);
        (diff > 1) ? setTransitionMode("none") : setTransitionMode("slide");
        setActiveIndex(index);
    }

    const handleCtaClick = (e) => {
        e.preventDefault();

        // testing purpose
        window.open("https://www.google.com", "_blank");
    };

    const handleNext = useCallback(() => {
        setActiveIndex((i) => {
            if (i === slides.length - 1) {
            setTransitionMode("none");
            return 0;
            }

            setTransitionMode("slide");
            return i + 1;
        });
    }, [slides.length]);

    const handlePrev = useCallback(() => {
        setActiveIndex((i) => {
            if (i === 0) {
            setTransitionMode("none");
            return slides.length - 1;
            }

            setTransitionMode("slide");
            return i - 1;
        });
    }, [slides.length]);

    const advanceSlide = useCallback(() => {
        setActiveIndex(i => {
            if (i === slides.length - 1) {
            setTransitionMode("none");
            return 0;
            }
            setTransitionMode("slide");
            return i + 1;
        });
    }, [slides.length]);

    const startAutoHideTimer = () => {
        if(autoHideTimeoutRef.current) {
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

    const triggerFullscreenToggle = useCallback(() => {
 
        const rect = blockRef.current.getBoundingClientRect();

        if (isFullScreenMode) {
            handlers?.onExitFullscreen?.();
        } else {
            setIsAutoPlayEnabled(true);
            setIsManuallyPaused(false); 
            handlers?.onRequestFullscreen?.(variant, block, rect);
        }

    }, [handlers, variant, block, isFullScreenMode, blockRef]);

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

        // HORIZONTAL swipe → carousel
        if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
            pauseByUserInteraction();

            deltaX > 0 ? handlePrev() : handleNext();
        }

        // VERTICAL swipe DOWN → close fullscreen
        if (isFullScreenMode && deltaY > SWIPE_THRESHOLD && Math.abs(deltaY) > Math.abs(deltaX)) {
            triggerFullscreenToggle();
        }
        
        swipeStartRef.current = { x: 0, y: 0 };
    };

    const handleFullscreenPlayToggle = useCallback(() => {
        if (!isFullScreenMode) return;

        setIsManuallyPaused(prev => {
            const isPausing  = !prev;

            // Show the action 
            setFeedbackAction(isPausing ? "pause" : "play");
            setShowCenterFeedback(true);
            
            if (!isPausing) {
                setIsAutoPlayEnabled(true); // resume
            }
            return isPausing;
        });

    // Auto-hide overlay
    setTimeout(() => {
        setShowCenterFeedback(false);
        }, FEEDBACK_DURATION);
    }, [isFullScreenMode]);

    const handleViewportChange = useCallback((isVisible) => {
        // ENTER viewport
        if (isVisible && !wasVisibleRef.current) {
            setIsInViewport(true);
            setIsAutoPlayEnabled(true);
            setIsManuallyPaused(false);

            // UI defaults on entry
            setIsHovered(true);
            showControlsOnInteraction();
        }

        // EXIT viewport
        if (!isVisible && wasVisibleRef.current) {
            setIsInViewport(false);
            setIsAutoPlayEnabled(false);
            setIsHovered(false);
            setAreControlsVisible(false);
        }

        wasVisibleRef.current = isVisible;
    }, [showControlsOnInteraction]);

    useEffect(() => {
        if (isFullScreenMode && viewportRef.current) {
            viewportRef.current.focus();
        }
    }, [isFullScreenMode]);

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
            {
                threshold: [0.85], 
            }
        );

        observer.observe(blockRef.current);

        return () => observer.disconnect();
    }, [handleViewportChange]);

    // Auto play animation
    useEffect(() => {
        if (!shouldAutoPlay) return;

        // Skip initial delay
        const rafId = requestAnimationFrame(() => {
            if(!isFullScreenMode) advanceSlide(); 
        });

        const interval = setInterval(() => {
            setActiveIndex(i => {
            if (i === slides.length - 1) {
                setTransitionMode("none");
                return 0;
            }
            setTransitionMode("slide");
            return i + 1;
            });
        }, SLIDE_ANIMATION_INTERVAL);

        return () => {
            cancelAnimationFrame(rafId);
            clearInterval(interval);
        };
    }, [
        shouldAutoPlay,
        slides.length,
        advanceSlide,
        SLIDE_ANIMATION_INTERVAL,
        isFullScreenMode
    ]);

    useEffect(() => {
        return () => {
            if(autoHideTimeoutRef.current) {
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

    if(!enabled) return null;

    return (
        <div
            ref={blockRef}
            id={id}
            className={clsx(outerContainerClasses)}>
            
            {/* Viewport container */}
            <div className={clsx(
                    slidesViewportClasses,
                 )}
                 tabIndex={isFullScreenMode ? 0 : -1}
                 ref={viewportRef}
                 onMouseEnter={() => {
                    if(!isFullScreenMode) {
                        pauseByUserInteraction();
                    }
                    setIsHovered(true);
                    if(autoHideTimeoutRef.current) {
                        clearTimeout(autoHideTimeoutRef.current);
                    };
                }}
                 onMouseLeave={() => {
                    setIsHovered(false);
                    if(areArrowsPinned) {
                        startAutoHideTimer();
                    };
                    clearTimeout(controlsIdleHideTimerRef.current);
                 }}
        
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
                 
                {/* Track container */}
                {Array.isArray(slides) && slides?.length > 0 && <div
                    className={clsx(slidesTrackClasses)}
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                            transitionDuration:
                            transitionMode === "slide"
                                ? `${SLIDE_TRANSITION_DURATION}ms`
                                : "0ms",
                        }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="
                            w-full h-full
                            flex-shrink-0
                            flex items-center justify-center
                            bg-(--color-surface-media-dark)
                            "
                            onClick={!isTouchDevice ? handleFullscreenPlayToggle : undefined}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className={clsx(
                                    "max-w-full max-h-full object-contain"
                                )}
                            />
                        </div>
                    ))}
                </div>}

                {/* Center Play toggle feedback on fullscreen */}
                {showCenterFeedback && (
                    <div
                        className="
                            absolute inset-0 z-40
                            flex items-center justify-center
                            pointer-events-none
                        "
                    >
                        <Button
                            {...(feedbackAction === "pause" ? pauseBtn : playBtn)}
                            className={"u-feedback-bubbly-pop"}
                        />
                    </div>
                )}

                {/* Cta buttons container */}
                { Array.isArray(ctaButtons) && ctaButtons.length > 0 && 
                    <div className={clsx(
                        carouselCtaContainerClasses,
                        ctaVisiblityClasses,
                        )}
                    >
                        {ctaButtons.map(btn => (
                            <Button
                                key={btn.id}
                                variant={btn.variant}
                                size={size}
                                label={btn.label}
                                iconLeft={btn.iconLeft}
                                className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                                onClick={handleCtaClick}
                            />
                        ))}
                </div>}
                
                {/* Arrow buttons and fullscreen toggle play buttion container */}
                {(prevBtn || nextBtn) && 
                    <div className={clsx(
                            carouselArrowContainerClasses,
                            arrowVisiblityClasses,
                        )}
                        onMouseEnter={() => setIsInteractingWithControls(true)}
                        onMouseLeave={() => setIsInteractingWithControls(false)}
                        onFocusCapture={() => setIsInteractingWithControls(true)}
                        onBlurCapture={() => setIsInteractingWithControls(false)}
                    >
                        {prevBtn && <Button
                            {...prevBtn}
                            size={size}
                            onClick={triggerPrev}
                            className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                        />}
                        {togglePlayBtn && <Button
                            {...togglePlayBtn}
                            onClick={handleFullscreenPlayToggle}
                            className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                        />}

                        {nextBtn && <Button
                            {...nextBtn}
                            size={size}
                            onClick={triggerNext}
                            className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                        />}
                </div>}

                {/* Toggle fullscreen button */}
                {toggleFullscreenBtn && <div className={clsx(
                        carouselUtilityContainerClasses,
                        utilityVisiblityClasses,
                    )}>
                        {toggleFullscreenBtn && <Button
                            {...toggleFullscreenBtn}
                            size={size}
                            className={clsx(backdropBlur, "cursor-pointer pointer-events-auto")}
                            onClick={triggerFullscreenToggle}
                        />}
                </div>}

                {/* Dot buttons container */}
                {Array.isArray(slides) && slides.length > 0 && 
                    <div className={clsx(
                            carouselDotContainerClasses,
                            isFullScreenMode && dotsVisiblityClasses,
                        )}
                        onMouseEnter={() => setIsInteractingWithControls(true)}
                        onMouseLeave={() => setIsInteractingWithControls(false)}
                        onFocusCapture={() => setIsInteractingWithControls(true)}
                        onBlurCapture={() => setIsInteractingWithControls(false)}
                    >
                    {slides.map((_, index) => (
                        <Button
                            key={index}
                            variant="carouselDot"
                            size={size}
                            className={clsx(
                                backdropBlur,
                                "flex transition-all scale-100 duration-300 ease-out",
                                index === activeIndex && "bg-[var(--color-carousal-dot-active)] scale-105"
                            )}
                            onClick={() => {
                                pauseByUserInteraction();
                                handleDotClick(index);
                            }}
                        />
                    ))}
                </div>}
            </div>
        </div>
    );
};

export default ProjectsCarouselBlock;
