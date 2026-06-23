import React, { useId } from "react";

import clsx from "clsx";

const HOME_HERO_VARIANT = "homeHero";

// Width of the circular fade band at the home hero image edge, in px.
const HOME_HERO_MASK_FADE_PX = 30;

const HERO_VISUAL_CONFIG = {
  homeHero: { glow: true, scale: 1.20},
  aboutHero: { glow: true, scale: 1.20 },
  workExperienceHero: { glow: true, scale: 1.20 },
  skillsHero: { glow: true, scale: 1.20 },
  projectsHero: { glow: true, scale: 1.20 },
  caseStudyHero: { glow: true, scale: 1.20 },
  contactHero: { glow: true, scale: 1.20 },
};

const DEFAULT_HERO_VISUAL_CONFIG = { glow: false, scale: 1 };

const outerClasses = `
    w-full
    sm:w-auto lg:w-auto
    aspect-video sm:aspect-auto lg:aspect-auto
    flex items-center justify-center
    px-(--spacing-text-container-mobile-padding-x)
    sm:pr-(--spacing-text-container-tablet-padding-x)
    lg:pr-(--spacing-text-container-desktop-padding-x)
`;

const outerShellClasses = `
    relative isolate overflow-hidden
    w-full
    sm:h-full lg:h-full
    flex items-center justify-center
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    rounded-(--radius-hero-image-block-base)
`;

const imageFrameClasses = `
    relative
    w-full h-auto
    sm:absolute lg:absolute
    sm:inset-0 lg:inset-0
    p-(--spacing-hero-image-frame-mobile-inset)
    sm:p-(--spacing-hero-image-frame-tablet-inset)
    lg:p-(--spacing-hero-image-frame-desktop-inset)
    box-border
`;

const imageClasses = `
    w-full h-auto
    sm:w-full sm:h-full
    lg:w-full lg:h-full
    object-contain
`;

const HeroImageBlock = ({ data, variant, className = "", ...props }) => {
  const { src, alt = "", aspect = "auto", loading = "lazy" } = data;

  const { glow: showGlow, scale: imageScale } =
    HERO_VISUAL_CONFIG[variant] || DEFAULT_HERO_VISUAL_CONFIG;

  const isHomeHero = variant === HOME_HERO_VARIANT;

  const animId = useId().replace(/:/g, "");

  return (
    <div className={outerClasses}>
      <div
        className={clsx(outerShellClasses, aspect !== "auto" && `aspect-${aspect}`, className)}
        {...props}
      >
        {(showGlow || isHomeHero) && (
          <style>{`
            @keyframes heroGlow-${animId} {
              0% { opacity: 0; transform: scale(0.85); }
              100% { opacity: 0.16; transform: scale(1); }
            }
            @keyframes heroImageIn-${animId} {
              0% { opacity: 0; transform: translateY(18px) scale(0.97); }
              100% { opacity: 1; transform: translateY(0) scale(${imageScale}); }
            }
          `}</style>
        )}

        {showGlow && (
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(
                circle,
                var(--color-text-primary) 0%,
                var(--color-text-primary) 40%,
                color-mix(in srgb, var(--color-text-primary) 40%, transparent) 70%,
                color-mix(in srgb, var(--color-text-primary) 8%, transparent) 95%,
                transparent 100%
              )
              `,
              animation: `heroGlow-${animId} 850ms cubic-bezier(0.33, 1, 0.68, 1) both`,
            }}
          />
        )}

        <div className={imageFrameClasses}>
          {isHomeHero && (
            <span
              aria-hidden="true"
              className="absolute -z-10"
              style={{
                left: "10%",
                right: "10%",
                bottom: "0%",
                height: "35%",
                background: `radial-gradient(
                  ellipse at center bottom,
                  color-mix(in srgb, var(--color-text-primary) 40%, transparent) 0%,
                  color-mix(in srgb, var(--color-text-primary) 30%, transparent) 25%,
                  color-mix(in srgb, var(--color-text-primary) 18%, transparent) 50%,
                  color-mix(in srgb, var(--color-text-primary) 8%, transparent) 70%,
                  transparent 90%
                )`,
                filter: "blur(8px)",
              }}
            />
          )}
          <img
            src={src}
            alt={alt}
            className={imageClasses}
            loading={loading}
            style={
              isHomeHero
                ? {
                  animation: `heroImageIn-${animId} 1500ms 60ms cubic-bezier(0.16, 1, 0.3, 1) both`,
                  WebkitMaskImage: `
                    radial-gradient(
                      circle closest-side at center,
                      #000 0%,
                      #000 calc(100% - ${HOME_HERO_MASK_FADE_PX}px),
                      rgba(0,0,0,0.85) calc(100% - ${HOME_HERO_MASK_FADE_PX * 0.7}px),
                      rgba(0,0,0,0.5) calc(100% - ${HOME_HERO_MASK_FADE_PX * 0.4}px),
                      rgba(0,0,0,0.15) calc(100% - ${HOME_HERO_MASK_FADE_PX * 0.15}px),
                      transparent 100%
                    )
                  `,
                  maskImage: `
                    radial-gradient(
                      circle closest-side at center,
                      #000 0%,
                      #000 calc(100% - ${HOME_HERO_MASK_FADE_PX}px),
                      rgba(0,0,0,0.85) calc(100% - ${HOME_HERO_MASK_FADE_PX * 0.7}px),
                      rgba(0,0,0,0.5) calc(100% - ${HOME_HERO_MASK_FADE_PX * 0.4}px),
                      rgba(0,0,0,0.15) calc(100% - ${HOME_HERO_MASK_FADE_PX * 0.15}px),
                      transparent 100%
                    )
                  `,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                }
                : imageScale !== 1
                  ? { transform: `scale(${imageScale})` }
                  : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImageBlock;