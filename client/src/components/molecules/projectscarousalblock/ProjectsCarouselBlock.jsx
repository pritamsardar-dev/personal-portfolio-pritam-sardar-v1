import React, { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import Button from "../../atoms/button/Button";
import { homeProjectsCarousel } from "../../../data/home/homeProjectsCarousel";

const outerContainerBaseClasses = `
    flex flex-col w-full h-auto relative
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
`;

const outerContainerFullscreenClasses = `
    flex flex-col w-full h-auto relative
    max-w-(--size-section-wrapper-mobile-max-width)
    sm:max-w-(--size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)
    transition-all duration-500 ease-in-out
    transform
`;

const slidesViewportContainerClasses = `
    relative w-full h-auto overflow-hidden aspect-16/9
    rounded-(--radius-image-base)
    shadow-(--color-carousal-viewport-shadow)
    focus:outline-none focus-visible:outline-none
    transition-all duration-500 ease-in-out
    transform scale-105
`;

const slidesViewportFullscreenContainerClasses = `
    relative w-full h-[100dvh] overflow-hidden 
    rounded-(--radius-image-base)
    shadow-(--color-carousal-viewport-shadow)
    focus:outline-none focus-visible:outline-none
`;

const slidesTrackBaseClasses = `
    w-full flex
    will-change-transform
    transform-gpu
`;

const slidesTrackBaseFullscreenClasses = `
    absolute top-1/2 -translate-y-1/2
    w-full h-auto flex 
    will-change-transform
    transform-gpu 
`;

const carouselDotContainerClasses = `
    flex absolute
    left-1/2 -translate-x-1/2
    gap-(--spacing-carousel-dot-mobile-gap)
    sm:gap-(--spacing-carousel-dot-tablet-gap)
    lg:gap-(--spacing-carousel-dot-desktop-gap)
    bottom-(--spacing-carousel-dot-mobile-offset)
    sm:bottom-(--spacing-carousel-dot-tablet-offset)
    lg:bottom-(--spacing-carousel-dot-desktop-offset)
`;

const carouselArrowContainerBaseClasses = `
    absolute inset-0
    flex items-center justify-between
    pointer-events-none
`;

const carouselArrowContainerFullscreenClasses = `
    pointer-events-none
    absolute flex flex-wrap left-1/2 -translate-x-1/2
    bottom-(--spacing-carousel-arrow-fullscreen-mobile-offset)
    sm:bottom-(--spacing-carousel-arrow-fullscreen-tablet-offset)
    lg:bottom-(--spacing-carousel-arrow-fullscreen-desktop-offset)
   
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const carouselCtaContainerBaseClasses = `
    w-[70%]
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    flex flex-wrap
    items-center justify-center
    pointer-events-none
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const carouselCtaContainerFullscreenClasses = `
    absolute flex flex-wrap flex-col sm:flex-row lg:flex-row
    pointer-events-none
    left-(--spacing-carousel-cta-fullscreen-mobile-offset)
    sm:left-(--spacing-carousel-cta-fullscreen-tablet-offset)
    lg:left-(--spacing-carousel-cta-fullscreen-desktop-offset)
    top-(--spacing-carousel-cta-fullscreen-mobile-offset)
    sm:top-(--spacing-carousel-cta-fullscreen-tablet-offset)
    lg:top-(--spacing-carousel-cta-fullscreen-desktop-offset)
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const carouselUtilityContainerClasses = `
    absolute flex
    pointer-events-none
    right-(--spacing-carousel-utility-mobile-offset)
    sm:right-(--spacing-carousel-utility-tablet-offset)
    lg:right-(--spacing-carousel-utility-desktop-offset)
    top-(--spacing-carousel-utility-mobile-offset)
    sm:top-(--spacing-carousel-utility-tablet-offset)
    lg:top-(--spacing-carousel-utility-desktop-offset)
`;

const layerSlides = "z-0";
const layerControls = "z-10";
const layerUtility = "z-20";
// const layerFullscreen = "z-30";

const ProjectsCarouselBlock = ({ 
    slides = homeProjectsCarousel.slides, 
    buttonProps = homeProjectsCarousel.buttonProps, 
    className, 
    ...props 
}) => {
    const prevBtn = buttonProps.find(b => b.id === "arrow-left");
    const nextBtn = buttonProps.find(b => b.id === "arrow-right");
    const downBtn = buttonProps.find(b => b.id === "arrow-down");
    const ctaButtons = buttonProps.filter(b => b.role === "cta");
    const fullscreenBtn = buttonProps.find(b => b.id === "fullscreen");
    const fullscreenCloseBtn = buttonProps.find(b => b.id === "close-fullscreen");

    const SLIDE_TRANSITION_DURATION = 650;
    const SLIDE_ANIMATION_REST = 2200;
    const SLIDE_ANIMATION_INTERVAL = SLIDE_TRANSITION_DURATION + SLIDE_ANIMATION_REST;
    const ARROW_AUTO_HIDE_DEALY = 2500;
    const SLIDE_ANIMATION_RESUME_DELAY = 3000;
    const CONTROLS_IDLE_HIDE_DELAY = 2500;
    const SWIPE_THRESHOLD = 50; // px

    const [activeIndex, setActiveIndex] = useState(0); 
    const [transitionMode, setTransitionMode] = useState("slide");
    const [isHovered, setIsHovered] = useState(false);
    const [areArrowsPinned, setAreArrowsPinned] = useState(false);
    const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
    const [isInteractingWithControls, setIsInteractingWithControls] = useState(false);
    const [toggleFullscreen, setToggleFullscreen] = useState(false);
    const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
    const [areControlsVisible, setAreControlsVisible] = useState(true);
    const [areDotsVisible, setAreDotsVisible] = useState(true);

    const autoHideTimeoutRef = useRef(null);
    const resumeTimeoutRef = useRef(null);
    const isTouchPrimedRef = useRef(false);
    const swipeStartRef = useRef({ x: 0, y: 0 });
    const controlsIdleHideTimerRef = useRef(null);
    const viewportRef = useRef(null);

    const showArrows = isHovered || areArrowsPinned || isKeyboardFocus;
    const showDots = isHovered || areDotsVisible;
    const showCTA = (isHovered || isKeyboardFocus) && !isInteractingWithControls;
    const showUtility = (isHovered || isKeyboardFocus) && !isInteractingWithControls;

    const toggleFullscreenBtn = toggleFullscreen ? fullscreenCloseBtn : fullscreenBtn;

    const resolvedCtaButtons  = toggleFullscreen
    ? [...ctaButtons].sort((a, b) => (a.orderFullscreen ?? 0) - (b.orderFullscreen ?? 0))
    : ctaButtons;

    const arrowVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showArrows && areControlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    );

    const ctaVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showCTA && areControlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    );

    const utilityVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showUtility && areControlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    );

    const dotsVisiblityClasses = clsx(
        "transition-opacity duration-300",
        showDots && areControlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    );

    const handleDotClick = (index) => {
        if (index === activeIndex) return;
        const diff = Math.abs(index - activeIndex);
        (diff > 1) ? setTransitionMode("none") : setTransitionMode("slide");
        setActiveIndex(index);
    }

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

    useEffect(() => {
        if (transitionMode === "none") {
            requestAnimationFrame(() => {
                setTransitionMode("slide");
            });
        }
    }, [transitionMode]);

    useEffect(() => {
        if (!isAutoPlayEnabled) return;
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

        return () => clearInterval(interval);
        }, [isAutoPlayEnabled, slides.length, SLIDE_ANIMATION_INTERVAL]);

    const startAutoHideTimer = () => {
        if(autoHideTimeoutRef.current) {
            clearTimeout(autoHideTimeoutRef.current);
        }

        autoHideTimeoutRef.current = setTimeout(() => {
            setAreArrowsPinned(false);
        }, ARROW_AUTO_HIDE_DEALY);
    };

    useEffect(() => {
        return () => {
            if(autoHideTimeoutRef.current) {
                clearTimeout(autoHideTimeoutRef.current);
            }
        };
    }, []);

    const pauseAutoPlay = useCallback(() => {
        setIsAutoPlayEnabled(false);
    }, []);

    const resumeAutoPlay = () => {
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }

        resumeTimeoutRef.current = setTimeout(() => {
            setIsAutoPlayEnabled(true);
        }, SLIDE_ANIMATION_RESUME_DELAY);
    };

    useEffect(() => {
        return () => {
            if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
            }
        };
    }, []);

    const triggerNext = useCallback(() => {
        pauseAutoPlay();
        setAreArrowsPinned(true);
        handleNext();
        startAutoHideTimer();
    }, [pauseAutoPlay, handleNext]);

    const triggerPrev = useCallback(() => {
        pauseAutoPlay();
        setAreArrowsPinned(true);
        handlePrev();
        startAutoHideTimer();
    }, [pauseAutoPlay, handlePrev]);

    const triggerDown = useCallback(() => {
        pauseAutoPlay();
        setAreArrowsPinned(true);
        downBtn.onClick();
        startAutoHideTimer();
    }, [pauseAutoPlay, downBtn]);

    const isTouchDevice =
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches;

    const touchGuard = useCallback(
        (fn) => (e) => {
            if (!isTouchDevice) {
            fn?.(e);
            return;
            }

            // First touch -> reveal only
            if (!isTouchPrimedRef.current) {
            e.preventDefault();
            e.stopPropagation();

            pauseAutoPlay();
            setIsHovered(true);
            isTouchPrimedRef.current = true;

            return;
            }

            // Second touch -> allow action
            fn?.(e);
        },
        [isTouchDevice, pauseAutoPlay]
    );

    const guardedPrev = useCallback(
        (e) => touchGuard(triggerPrev)(e),
        [touchGuard, triggerPrev]
    );

    const guardedNext = useCallback(
        (e) => touchGuard(triggerNext)(e),
        [touchGuard, triggerNext]
    );

    const guardedDown = useCallback(
        (e) => touchGuard(triggerDown)(e),
        [touchGuard, triggerDown]
    );
 
    useEffect(() => {
        if (!isHovered && !showCTA) {
            isTouchPrimedRef.current = false;
        }
    }, [isHovered, showCTA]);

    const createGuardedCtaHandler = useCallback(
        (onClick) => (e) => {
            if (!onClick) return;
            touchGuard(() => onClick(e))(e);
        },
        [touchGuard]
    );

    const triggerFullscreenToggle = useCallback(() => {
        pauseAutoPlay();
        setToggleFullscreen(u => !u);
    }, [pauseAutoPlay]);

    const guardedFullscreenToggle = useCallback(
        (e) => touchGuard(triggerFullscreenToggle)(e),
        [touchGuard, triggerFullscreenToggle]
    );

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

        if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
            deltaX > 0 ? handlePrev() : handleNext();
        }

        swipeStartRef.current = { x: 0, y: 0 };
    };

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

    useEffect(() => {
        return () => {
            if (controlsIdleHideTimerRef.current) {
                clearTimeout(controlsIdleHideTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isTouchDevice) return;

        const handleTouchOutside = (e) => {
            // check if touch is outside the viewport
            if (!viewportRef.current?.contains(e.target)) {
                clearTimeout(controlsIdleHideTimerRef.current);
                setAreDotsVisible(true);
                setAreControlsVisible(true);
            }
        }
            document.addEventListener("touchstart", handleTouchOutside);

            return () => {
                document.removeEventListener("touchstart", handleTouchOutside);
            }
    }, [isTouchDevice]);

    return (
        <div className={clsx(
                toggleFullscreen ? outerContainerFullscreenClasses 
                : outerContainerBaseClasses,
                layerSlides,
            )}
       
            >
            <div className={clsx(
                    toggleFullscreen ? slidesViewportFullscreenContainerClasses 
                    : slidesViewportContainerClasses,
                    className,
                 )} 
                 ref={viewportRef}
                 {...props}
                 onMouseEnter={() => {
                    pauseAutoPlay();
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
                    resumeAutoPlay();
                    clearTimeout(controlsIdleHideTimerRef.current);
                 }}
                 tabIndex={-1}
                 onFocus={() => {
                    setIsKeyboardFocus(true);
                    pauseAutoPlay();
                }}
                onBlur={() => {
                    setIsKeyboardFocus(false);
                    resumeAutoPlay();
                }}
                 onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                        e.preventDefault();
                        triggerNext();
                    }

                    if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        triggerPrev();
                    }

                    if (e.key === "Escape" && toggleFullscreen) {
                        e.preventDefault();
                        setToggleFullscreen(false);
                    }
                }}
                onTouchStart={() => {
                    if (!isTouchDevice) return;

                    pauseAutoPlay();
                    setIsHovered(true);
                    showControlsOnInteraction
                }}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                style={{ touchAction: "pan-y" }}
                onMouseMove={showControlsOnInteraction}
                >
                 
                <div
                    className={clsx(
                        toggleFullscreen ? slidesTrackBaseFullscreenClasses 
                        : slidesTrackBaseClasses,
                        transitionMode === "slide" 
                        && "transition-transform ease-[cubic-bezier(0.4,0,0.2,1)]",
                        transitionMode === "none" && "transition-none",
                        "flex transition-transform duration-500 ease-in-out",
                        toggleFullscreen ? "scale-105" : "scale-100"
                    )}
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                            transitionDuration:
                            transitionMode === "slide"
                                ? `${SLIDE_TRANSITION_DURATION}ms`
                                : "0ms",
                        }}
                >
                    {slides.map((slide) => (
                        <img
                            key={slide.id}
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full flex-shrink-0 object-cover object-center"
                        />
                    ))}
                </div>

                <div className={clsx(
                    toggleFullscreen ? carouselCtaContainerFullscreenClasses : carouselCtaContainerBaseClasses,
                    ctaVisiblityClasses,
                    layerControls  
                    )}>
                        {resolvedCtaButtons.map(btn => (
                            <Button
                                key={btn.id}
                                variant={btn.variant}
                                label={btn.label}
                                iconLeft={btn.iconLeft}
                                className="cursor-pointer pointer-events-auto"
                                onClick={createGuardedCtaHandler(btn.onClick)}
                            />
                        ))}
                </div>
                
                <div className={clsx(
                    toggleFullscreen ?  carouselArrowContainerFullscreenClasses : carouselArrowContainerBaseClasses,
                    arrowVisiblityClasses,
                    layerControls 
                    )}
                    onMouseEnter={() => setIsInteractingWithControls(true)}
                    onMouseLeave={() => setIsInteractingWithControls(false)}
                    onFocusCapture={() => setIsInteractingWithControls(true)}
                    onBlurCapture={() => setIsInteractingWithControls(false)}
                    >
                        <Button
                            {...prevBtn}
                            onClick={guardedPrev}
                            className="cursor-pointer pointer-events-auto"
                        />

                        {toggleFullscreen && <Button
                            {...downBtn}
                            onClick={guardedDown}
                            className="cursor-pointer pointer-events-auto"
                        />}

                        <Button
                            {...nextBtn}
                            onClick={guardedNext}
                            className="cursor-pointer pointer-events-auto"
                        />
                </div>

                <div className={clsx(
                    carouselUtilityContainerClasses,
                    utilityVisiblityClasses,
                    layerUtility 
                    )}>
                        <Button
                            {...toggleFullscreenBtn}
                            className="cursor-pointer pointer-events-auto"
                            onClick={guardedFullscreenToggle}
                        />
                </div>

                <div className={clsx(
                    carouselDotContainerClasses,
                    dotsVisiblityClasses,
                    layerControls 
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
                            className={clsx(
                                index === activeIndex && "bg-[var(--color-carousal-dot-active)]"
                            )}
                            onClick={() => {
                                pauseAutoPlay();
                                handleDotClick(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsCarouselBlock;
