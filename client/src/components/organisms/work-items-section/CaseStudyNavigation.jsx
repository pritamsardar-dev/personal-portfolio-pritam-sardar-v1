import React from "react";

import clsx from "clsx";

import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import Button from "../../atoms/button/Button";

const outerContainerClasses = `
    w-full flex flex-wrap justify-center
`;

const innerContainerClasses = `
    flex flex-wrap
    py-(--spacing-section-wrapper-mobile-padding-y)
    sm:py-(--spacing-section-wrapper-tablet-padding-y)
    lg:py-(--spacing-section-wrapper-desktop-padding-y)

    gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const disabledButtonClasses = `
    pointer-events-none
    opacity-60
`;

const CaseStudyNavigation = ({
  previous,
  next,
  onPrevious,
  onNext,
  onBack,
  backLabel = "Return to Source",
  backIconLeft = null,
  className,
  ...props
}) => {
  const isPrevDisabled = !previous;
  const isNextDisabled = !next;

  return (
    <div className={clsx(outerContainerClasses, className)} {...props}>
      <div className={clsx(innerContainerClasses)}>
        {/* Previous */}
        <Button
          variant="overlay"
          label={previous?.title ? previous.title : "Previous"}
          iconLeft={ctaIconMap["ChevronLeft"]}
          disabled={isPrevDisabled}
          aria-disabled={isPrevDisabled}
          className={clsx(isPrevDisabled && disabledButtonClasses)}
          onClick={() => !isPrevDisabled && onPrevious()}
        />

        {/* Back */}
        <Button
          variant="overlay"
          label={backLabel}
          iconLeft={backIconLeft ?? ctaIconMap["ChevronLeft"]}
          onClick={onBack}
        />

        {/* Next */}
        <Button
          variant="overlay"
          label={next?.title ? next.title : "Next"}
          iconRight={ctaIconMap["ChevronRight"]}
          disabled={isNextDisabled}
          aria-disabled={isNextDisabled}
          className={clsx(isNextDisabled && disabledButtonClasses)}
          onClick={() => !isNextDisabled && onNext()}
        />
      </div>
    </div>
  );
};

export default CaseStudyNavigation;
