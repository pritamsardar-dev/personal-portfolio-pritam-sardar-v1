import React from "react";

import clsx from "clsx";

import { useCTA } from "../../../hooks/useCTA";

import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const blockContainerClasses = `
    flex flex-col w-full h-auto min-w-0

    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)

    px-(--spacing-text-container-mobile-padding-x)
    sm:pl-(--spacing-text-container-tablet-padding-x)
    lg:pl-(--spacing-text-container-desktop-padding-x)

    gap-(--spacing-hero-text-block-button-mobile-gap)
    sm:gap-(--spacing-hero-text-block-button-tablet-gap)
    lg:gap-(--spacing-hero-text-block-button-desktop-gap)
`;

const buttonContainerClasses = `
    flex flex-row flex-wrap
    gap-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const heroIntroHeadingClasses = `
    w-full flex flex-col 
    gap-(--spacing-hero-intro-heading-mobile-gap)
    sm:gap-(--spacing-hero-intro-heading-tablet-gap)
    lg:gap-(--spacing-hero-intro-heading-desktop-gap)
`;

const heroHeadingTaglineClasses = `
    w-full flex flex-col 
    gap-(--spacing-hero-heading-tagline-mobile-gap)
    sm:gap-(--spacing-hero-heading-tagline-tablet-gap)
    lg:gap-(--spacing-hero-heading-tagline-desktop-gap)
`;

const bodyItemsContainerClasses = `
    flex flex-col w-full
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const alignmentClassesMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// Only these two hero pages need a shorter secondary CTA label on mobile
const MOBILE_SHORT_LABEL_VARIANTS = ["workExperienceHero", "caseStudyHero"];

// Drops the first word of a label, used only for the mobile-short case below
const getMobileShortLabel = (label) => {
  if (typeof label !== "string") return label;
  const words = label.trim().split(" ");
  if (words.length <= 1) return label;
  return words.slice(1).join(" ");
};

// True only for the secondary CTA on the work experience / case study heroes
const shouldShortenLabelOnMobile = (heroVariant, btnProps) =>
  MOBILE_SHORT_LABEL_VARIANTS.includes(heroVariant) && btnProps.variant === "secondary";

const HeroTextBlock = ({ data, variant, className, ...props }) => {
  const { heroIntro, heroHeading, heroTagline, heroStatus, cta, alignment } = data;

  const { handleCTA } = useCTA();

  const alignmentClass = alignmentClassesMap[alignment] || alignmentClassesMap.left;

  return (
    <div className={clsx(blockContainerClasses, alignmentClass, className)} {...props}>
      <div className={clsx(heroHeadingTaglineClasses)}>
        <div className={clsx(heroIntroHeadingClasses)}>
          <Text {...heroIntro} />
          <Text {...heroHeading} />
        </div>

        {Array.isArray(heroTagline.text) && heroTagline.text.length > 0 ? (
          <div className={bodyItemsContainerClasses}>
            {heroTagline.text.map((text, index) => (
              <Text key={index} variant={heroTagline.variant} text={text} />
            ))}
          </div>
        ) : (
          <Text {...heroTagline} />
        )}

        {heroStatus && <Text {...heroStatus} />}
      </div>

      <div className={clsx(buttonContainerClasses)}>
        {cta.map((btnProps, index) => {
          const isShortenable = shouldShortenLabelOnMobile(variant, btnProps);

          return (
            <Button
              key={index}
              variant={btnProps.variant}
              label={btnProps.label}
              iconRight={btnProps.icon ? ctaIconMap[btnProps.icon] : null}
              onClick={() => handleCTA(btnProps)}
              className={clsx(variant === "caseStudyHero" ? "pl-[7px] pr-[5px]" : "px-[10px]")}
            >
              {isShortenable && (
                <>
                  <span className="hidden sm:inline">{btnProps.label}</span>
                  <span className="inline sm:hidden">{getMobileShortLabel(btnProps.label)}</span>
                </>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTextBlock;
