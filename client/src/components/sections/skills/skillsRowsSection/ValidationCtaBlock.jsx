import React from "react";

import clsx from "clsx";

import { resolveProps } from "../../../../utils/resolveProps";
import { useCTA } from "../../../../hooks/useCTA";
import { validationCtaBlockLayoutConfig } from "./validationCtaBlockLayout.config";
import { ctaIconMap } from "../../../../assets/icons/system/ctaIconMap";

import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";

const {
  blockContainer,
  subHeadingContainer: subHeadingContainerClasses,
  buttonsContainer: buttonsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  alignmentMap,
} = validationCtaBlockLayoutConfig;

// CMS driven validation CTA block.
// Renders an optional heading, supporting copy, and CTA button groups.
// Layout adapts per variant (atAGlance / skillsRow) via resolveProps.
const ValidationCtaBlock = ({
  variant = "atAGlance", // atAGlance / skillsRow
  data = {},
  className,
  ...props
}) => {
  const { handleCTA } = useCTA();

  const resolvedData = resolveProps(data, variant);
  const {
    id,
    enabled = true,
    heading,
    bodyItems = {},
    alignment = {
      heading: "left",
      body: "left",
    },
  } = resolvedData;

  const blockContainerClasses = clsx(
    blockContainer.base,
    variant === "atAGlance" ? blockContainer.atAGlance : blockContainer.skillsRow,
  );

  if (!enabled) return null;

  return (
    <div
      id={id}
      className={clsx(
        blockContainerClasses,
        alignmentMap[alignment.heading] || alignmentMap.left,
        className,
      )}
      {...props}
    >
      {/* Block Heading */}
      {heading && <Text {...heading} />}

      {/* Body Items */}
      {Array.isArray(bodyItems) && bodyItems.length > 0 && (
        <div
          className={clsx(
            bodyItemsContainerClasses,
            alignmentMap[alignment.body] || alignmentMap.left,
          )}
        >
          {bodyItems.map((item) => (
            <div key={item.id} className={clsx(bodyItemContainerClasses)}>
              {/* Subheading and Description */}
              {variant === "atAGlance" && (item.heading || item.description) && (
                <div className={clsx(
                  subHeadingContainerClasses, 
                  "max-w-(--size-block-wrapper-single-desktop-max-width)")}
                >
                  {item.heading && <Text {...item.heading} />}
                  {item.description && <Text {...item.description} />}
                </div>
              )}

              {/* CTA Buttons */}
              {Array.isArray(item?.ctaButtons) && item.ctaButtons.length > 0 && (
                <div className={clsx(buttonsContainerClasses, 
                  "max-w-(--size-block-wrapper-single-desktop-max-width)")}
                >
                  {item.ctaButtons.map((button, index) => (
                    <Button
                      key={index}
                      variant={button.variant}
                      label={button.label}
                      iconRight={button.icon ? ctaIconMap[button.icon] : null}
                      onClick={() => handleCTA(button)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ValidationCtaBlock;
