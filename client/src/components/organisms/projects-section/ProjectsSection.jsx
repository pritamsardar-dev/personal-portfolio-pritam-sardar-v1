import React, { useState, useMemo } from "react";

import clsx from "clsx";

import { useScrolling } from "../../../hooks/useScrolling";

import { projectsSectionLayoutConfig } from "./projectsSectionLayout.config";
import { resolveProps } from "../../../utils/resolveProps";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import FilterBarSection from "../filterbar-section/FilterBarSection";
import Pagination from "../../molecules/pagination/Paginaton";
import Modal from "../../overlays/modal/Modal";

// CMS driven Projects section.
// Orchestrates project rows, filter bar, fullscreen modal, and pagination.
// Modal lifecycle and block expansion state are scoped to this section.
const ProjectsSection = ({
  variant = "fullscreenProjectsPage", // Variants: homePage / projectsPage / fullscreenHomePage / fullscreenProjectsPage
  data = {},
}) => {
  const domain = "project";
  const resolvedData = resolveProps(data, domain);

  const {
    id,
    enabled = true,
    heading,
    filters,
    alignment = {
      heading: "center",
      cta: "center",
      pagination: "center",
    },
    buttonProps,
    rows,
  } = resolvedData;

  const [modal, setModal] = useState({
    open: false,
    isFullscreen: false,
    variant: "",
    content: null,
    originRect: null,
  });

  const isScrolling = useScrolling(150);

  const {
    sectionContainer,
    sectionBlockContainer,
    headingWrapper,
    rowsContainer,
    blocksContainer,
    textAlignMap,
    flexAlignMap,
  } = projectsSectionLayoutConfig;

  // Disable backdrop blur while scrolling to reduce paint cost
  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-button-overlay-default-blur)";

  const sectionContainerClasses = clsx(sectionContainer);
  const sectionBlockContainerClasses = clsx(sectionBlockContainer);
  const sectionHeadingWrapperClasses = clsx(headingWrapper.section);
  const blockHeadingWrapperClasses = clsx(headingWrapper.block);
  const rowsContainerClasses = clsx(rowsContainer.default);
  const rowsContainerRelatedProjectsClasses = clsx(rowsContainer.relatedProjects);

  const blocksContainerClasses = clsx(blocksContainer.base, blocksContainer.default, backdropBlur);

  const blocksContainerRelatedProjectsClasses = clsx(
    blocksContainer.base,
    blocksContainer.relatedProjects,
    backdropBlur,
  );

  // Open modal at origin position then expand to fullscreen on next frame
  const modalHandlers = useMemo(
    () => ({
      onRequestFullscreen: (variant, block, originRect) => {
        setModal({
          open: true,
          isFullscreen: false,
          variant: variant,
          content: block,
          originRect,
        });

        requestAnimationFrame(() => {
          setModal((prev) => ({ ...prev, isFullscreen: true }));
        });
      },

      onExitFullscreen: () => {
        requestAnimationFrame(() => {
          setModal((prev) => ({ ...prev, isFullscreen: false }));
        });
      },
    }),
    [],
  );

  if (!enabled) return null;

  const overlayFadeStyle = {
    opacity: modal.open ? 0.75 : 1,
    pointerEvents: modal.open ? "none" : "auto",
    transition: "opacity 260ms ease-in",
    willChange: modal.open ? "opacity" : "auto",
  };

  const isFullScreenMode = variant === "fullscreenHomePage" || variant === "fullscreenProjectsPage";

  let headingVariant;

  switch (variant) {
  case "projectsPage":
    headingVariant = heading.variants.projectsPage;
    break;
  case "homePage":
    headingVariant = heading.variants.homePage;
    break;
  case "fullscreenHomePage":
  case "fullscreenProjectsPage":
    headingVariant = heading.variants.fullScreenPage;
    break;
  default:
    headingVariant = heading.variants.default;
  }

  const viewDetailsRow = rows
    .filter((row) => row?.enabled !== false && row?.domain === domain)
    .find((row) => row.id === "project-row-devfolio");

  return (
    <section id={id} className={clsx(sectionContainerClasses)}>
      {/* Fullscreen Modal */}
      {modal.open && modal.content && (
        <Modal
          open={modal.open}
          isFullscreen={modal.isFullscreen}
          originRect={modal.originRect}
          variant="fullscreen"
          onClose={modalHandlers.onExitFullscreen}
          onExited={() => {
            setModal({
              open: false,
              isFullscreen: false,
              variant: "",
              content: null,
              originRect: null,
            });
          }}
        >
          <BlockRenderer
            block={modal.content}
            variant={modal.variant}
            state={{ renderMode: "fullscreen" }}
            handlers={modalHandlers}
          />
        </Modal>
      )}

      {/* View Details Block */}
      {isFullScreenMode && rows && (
        <div className={clsx(blocksContainerRelatedProjectsClasses)} style={overlayFadeStyle}>
          {Array.isArray(viewDetailsRow.blocks) &&
            viewDetailsRow.blocks
              .filter((block) => block?.enabled !== false)
              .map((block) => (
                <BlockRenderer
                  key={block.id}
                  block={block}
                  variant="expanded"
                  handlers={modalHandlers}
                />
              ))}
        </div>
      )}

      {/* Section Heading and Content */}
      <div
        className={clsx(
          isFullScreenMode ? blockHeadingWrapperClasses : sectionHeadingWrapperClasses,
        )}
      >
        {/* Section Heading */}
        {heading && (
          <div className={clsx(textAlignMap[alignment.heading])}>
            <Text
              {...heading}
              variant={headingVariant}
              text={isFullScreenMode ? heading.texts.fullScreenPage : heading.texts.default}
              icon={isFullScreenMode ? heading.icons.fullscreenPage : heading.icons.default}
            />
          </div>
        )}

        <div className={clsx(sectionBlockContainerClasses)} style={overlayFadeStyle}>
          {/* Filter Bar */}
          {variant === "projectsPage" && (
            <div className={clsx()}>
              <FilterBarSection data={filters} />
            </div>
          )}

          {/* Project Rows */}
          {Array.isArray(rows) && rows.length > 0 && (
            <div
              className={clsx(
                isFullScreenMode ? rowsContainerRelatedProjectsClasses : rowsContainerClasses,
                "z-0",
              )}
            >
              {rows
                .filter((row) => row?.enabled !== false && row?.domain === domain)
                .map((row) => (
                  <div key={row.id} className={clsx(blocksContainerClasses)}>
                    {Array.isArray(row.blocks) &&
                      row.blocks
                        .filter((block) => block?.enabled !== false)
                        .map((block) => (
                          <BlockRenderer
                            key={block.id}
                            block={block}
                            variant="collapsed"
                            size={isFullScreenMode ? "compact" : "default"}
                            handlers={modalHandlers}
                          />
                        ))}
                  </div>
                ))}
            </div>
          )}

          {/* Section CTA */}
          {variant === "homePage" && buttonProps && (
            <div className={clsx("w-full flex", flexAlignMap[alignment.cta])}>
              <Button {...buttonProps} />
            </div>
          )}

          {/* Pagination */}
          {variant === "projectsPage" && (
            <div className={clsx("w-full flex", flexAlignMap[alignment.pagination])}>
              <Pagination />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
