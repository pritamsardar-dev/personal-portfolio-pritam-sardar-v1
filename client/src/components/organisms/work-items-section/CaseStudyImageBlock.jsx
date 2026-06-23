import React, { useRef, useCallback } from "react";

import clsx from "clsx";

import { normalizeImage } from "./utils/normalizeImage";
import { useTheme } from "../../../hooks/useTheme";

import { caseStudyImageBlockLayoutConfig } from "./caseStudyImageBlockLayout.config";

import { MaximizeIcon, XIcon } from "../../../assets/icons/system";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import TooltipButton from "../../atoms/tooltip/TooltipButton";

// CMS driven Case Study image block.
// Renders a single responsive image resolved by imageid.
// Supports cover and content variants, compact size mode,
// and fullscreen toggle with originRect animation support.
const CaseStudyImageBlock = ({
  variant = "cover", // Variants: cover / content
  size = "default", // Variants: default / compact
  imageid,
  data,
  section,
  block,
  handlers,
  state,
}) => {
  const { id, enabled = true, images: rawImages } = data;
  const theme = useTheme();
  const images = (rawImages || []).map((img) => normalizeImage(img, theme));

  const buttonProps = section?.carouselBlockButtonProps;

  const image = images.find((img) => img?.id === imageid);

  const fullscreenBtn = {
    ...buttonProps?.find((b) => b.id === "fullscreen"),
    iconLeft: MaximizeIcon,
  };

  const fullscreenCloseBtn = {
    ...buttonProps?.find((b) => b.id === "close-fullscreen"),
    iconLeft: XIcon,
  };

  const blockRef = useRef(null);
  const isCompact = size === "compact";
  const isFullScreenMode = state?.renderMode === "fullscreen";
  const toggleFullscreenBtn = isFullScreenMode ? fullscreenCloseBtn : fullscreenBtn;

  const { outerContainerPaddingX, outerContainer, imageWrapper, utilityContainer, captionWrapper } =
    caseStudyImageBlockLayoutConfig;

  const outerClasses = clsx(
    isFullScreenMode ? outerContainer.fullscreen : outerContainer.base,
    !isFullScreenMode && variant === "cover" && outerContainerPaddingX,
    isCompact && outerContainer.compact,
  );

  const handleFullscreenToggle = useCallback(() => {
    if (!blockRef.current) return;

    const rect = blockRef.current.getBoundingClientRect();

    if (isFullScreenMode) {
      handlers?.onExitFullscreen?.();
    } else {
      handlers?.onRequestFullscreen?.({
        variant,
        imageid,
        section,
        block,
        originRect: rect,
      });
    }
  }, [handlers, variant, imageid, section, block, isFullScreenMode]);

  if (!enabled || !image?.src) return null;

  return (
    <div>
      <div ref={blockRef} id={id} className={outerClasses} onClick={handleFullscreenToggle}>
        {/* Image and Fullscreen Toggle */}
        <div
          className={clsx(
            isFullScreenMode ? "w-full h-full overflow-hidden" : imageWrapper,
            !isFullScreenMode && "relative",
          )}
        >
          <img src={image.src} alt={image.alt || ""} className="w-full h-full object-contain" />

          {toggleFullscreenBtn && (
            <div
              className={clsx(
                utilityContainer,
                !isFullScreenMode &&
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
              )}
            >
              <TooltipButton label={isFullScreenMode ? "Minimize" : "Expand"} position="left">
                <Button
                  {...toggleFullscreenBtn}
                  size={size}
                  onClick={handleFullscreenToggle}
                  className="pointer-events-auto"
                />
              </TooltipButton>
            </div>
          )}
        </div>
      </div>

      {/* Caption shown for content images in the full case study read, never for the hero */}
      {image.caption && variant === "content" && imageid !== data.coverImageId && (
        <div className={clsx(captionWrapper, variant === "cover" && outerContainerPaddingX)}>
          <Text variant="labelDefault" as="figcaption" text={image.caption} />
        </div>
      )}
    </div>
  );
};

export default CaseStudyImageBlock;
