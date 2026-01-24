import React from "react";
import Text from "../../../atoms/text/Text";
import { useScrolling } from "../../../../hooks/useScrolling";
import clsx from "clsx";

const cardContainerClasses = `
  flex flex-col w-full h-auto
  bg-(--color-card-wrapper-fill)
  border-(length:--border-card-wrapper-base-width)
  border-(--color-card-wrapper-stroke)
  shadow-(--shadow-card-wrapper)
  rounded-(--radius-card-wrapper-base)
  transform-gpu
  will-change-transform
  contain-layout contain-paint
  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)
  py-(--spacing-text-container-mobile-padding-y)
  sm:py-(--spacing-text-container-tablet-padding-y)
  lg:py-(--spacing-text-container-desktop-padding-y)
  gap-(--spacing-list-item-mobile-gap)
  sm:gap-(--spacing-list-item-tablet-gap)
  lg:gap-(--spacing-list-item-desktop-gap)
`;

const listItemClasses = `
  list-disc
  list-outside
  pl-(--spacing-list-item-text-indent-mobile)
  sm:pl-(--spacing-list-item-text-indent-tablet)
  lg:pl-(--spacing-list-item-text-indent-desktop)
  space-y-(--spacing-list-item-text-gap-y-mobile)
  sm:space-y-(--spacing-list-item-text-gap-y-tablet)
  lg:space-y-(--spacing-list-item-text-gap-y-desktop)
`;

const CardRenderer = ({ item }) => {
  const {heading} = item;
  const {timeline, institute, board, highlights, score} = item.body;

  const isScrolling = useScrolling(150);

  const backdropBlur = 
    isScrolling ? "backdrop-blur-none" 
    : "backdrop-blur-(--effect-card-wrapper-background-blur)";

  return (
    <div className={clsx(cardContainerClasses, backdropBlur)}>
      {timeline && <Text {...timeline} />}

      {heading && <Text {...heading} />}

      {institute && <Text {...institute} />}

      {board && <Text {...board} />}

      {Array.isArray(highlights?.text) && highlights.text.length > 0 && (
        <ul className={listItemClasses}>
          {highlights.text.map((text, idx) => (
            <Text
              key={idx}
              variant={highlights.variant}
              as={highlights.as}
              text={text}
            />
          ))}
        </ul>
      )}

      {score && <Text {...score} />}
    </div>
  );
};

export default CardRenderer;
