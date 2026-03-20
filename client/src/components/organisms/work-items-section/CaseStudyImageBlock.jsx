/**
 * Role: CMS-driven media image block for Case Study sections
 * Used by: BlockRenderer via `block.type`
 *
 * Responsibilities:
 *   - Render a single responsive image resolved by `imageid`
 *   - Support layout variants (cover / content)
 *   - Pass size mode to interactive atoms (e.g., fullscreen button)
 *   - Handle fullscreen toggle via external handlers
 *   - Provide originRect for fullscreen transition animations
 *   - Render optional caption as semantic figcaption
 *   - Support alternative render paths via `block.view` and custom render types
 *
 * Notes:
 *   - Fullscreen state is controlled externally via `state.renderMode`
 *   - Button behavior and configuration are driven by CMS `buttonProps`
 */

import React, { useRef, useCallback } from "react";
import clsx from "clsx";
import Button from "../../atoms/button/Button";
import { caseStudyImageBlockLayoutConfig } from "./caseStudyImageBlockLayout.config";
import Text from "../../atoms/text/Text";

const CaseStudyImageBlock = ({
  variant = "cover", // cover / content
  size = "default", // default / compact
  imageid,
  data,
  section,
  block,
  handlers,
  state,
}) => {
  const {
    id,
    enabled = true,
    images,
  } = data;

  const buttonProps = section?.carouselBlockButtonProps;

  const image = images.find(img => img?.id === imageid);
  const fullscreenBtn = buttonProps?.find(b => b.id === "fullscreen");
  const fullscreenCloseBtn = buttonProps?.find(b => b.id === "close-fullscreen");

  const blockRef = useRef(null);
  const isCompact = size === "compact";
  const isFullScreenMode = state?.renderMode === "fullscreen";

  const toggleFullscreenBtn = isFullScreenMode ? fullscreenCloseBtn : fullscreenBtn;

  const {
    outerContainerPaddingX,
    outerContainer,
    imageWrapper,
    utilityContainer,
    captionWrapper,
  } = caseStudyImageBlockLayoutConfig;

  const outerClasses = clsx(
    isFullScreenMode
      ? outerContainer.fullscreen
      : outerContainer.base,
      
    !isFullScreenMode && variant === "cover" && outerContainerPaddingX,
    
    isCompact && outerContainer.compact
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
      <div
        ref={blockRef}
        id={id}
        className={outerClasses}
        onClick={handleFullscreenToggle}
      >
        {/* Image container */}
        <div className={clsx(
          imageWrapper, 
          !isFullScreenMode && "relative"
          )}>
          <img
            src={image.src}
            alt={image.alt || ""}
            className="w-full h-full object-contain"
          />

          {/* Toggle fullscreen button */}
          {toggleFullscreenBtn && (
            <div className={clsx(utilityContainer)}>
              <Button
                {...toggleFullscreenBtn}
                size={size}
                onClick={handleFullscreenToggle}
                className="pointer-events-auto"
              />
            </div>
          )}
        </div>
      </div>
      {image.caption && 
        <div className={clsx(
          captionWrapper, 
          variant === "cover" && outerContainerPaddingX,
          )}>
            <Text 
              variant="labelDefault" 
              as="figcaption" 
              text={image.caption} 
            />
        </div>}
    </div>
  );
};

export default CaseStudyImageBlock;
