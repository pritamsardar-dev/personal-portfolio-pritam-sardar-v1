/**
 * Role: CMS-driven Projects & Case Study section
 * Used by: Home page, Projects page, Case Study page, and fullscreen variants
 *
 * Responsibilities:
 *   - Resolve section data based on high-level variant (project / caseStudy / preview / full)
 *   - Render heading with variant-specific typography, text, and icons
 *   - Orchestrate rows and nested blocks via BlockRenderer
 *   - Control section-scoped fullscreen modal lifecycle for image blocks
 *   - Pass fullscreen handlers and renderMode state to child blocks
 *   - Support collapsed, expanded, related, and read-full-case-study flows
 *   - Render optional filter bar, CTA, and pagination depending on page variant
 *   - Handle compact sizing when in fullscreen preview mode
 *   - Apply scroll-based visual effects (backdrop blur, overlay fade)
 *
 * Notes:
 *   - Data is resolved through layered `resolveProps` calls (domain + view mode)
 *   - Row and block rendering is filtered by `enabled` flags
 *   - Section manages modal state but does not mutate row or block data
 */

import React, { useState, useMemo } from "react";
import clsx from "clsx"
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import FilterBarSection from "../filterbar-section/FilterBarSection";
import Pagination from "../../molecules/pagination/Paginaton";
import Modal from "../../overlays/modal/Modal";
import { useScrolling } from "../../../hooks/useScrolling";
import { caseStudySectionLayoutConfig } from "./caseStudySectionLayout.config";
import { resolveProps } from "../../../utils/resolveProps";

const WorkItemsSection = ({
    variant = "projectsHomePage", // projectsHomePage / projectsPage / fullscreenProjectsHomePage /fullscreenProjectsPage / caseStudyPage / fullscreenCaseStudyPage readFullCaseStudyPage
    data = {},
}) => {

  const mode = (variant === "projectsHomePage" || variant === "projectsPage" || variant === "fullscreenProjectsHomePage" || variant === "fullscreenProjectsPage") ? "project" : "caseStudy"

  const resolvedData = (data, variant) => {
      if (!data) return null;

      switch (variant) {
          case "projectsHomePage":
          case "projectsPage":
          case "fullscreenProjectsHomePage":
          case "fullscreenProjectsPage":
          return resolveProps(resolveProps(data, "project"), "preview");

          case "caseStudyPage":
          return resolveProps(resolveProps(data, "caseStudy"), "preview");

          case "fullscreenCaseStudyPage":
          return resolveProps(resolveProps(data, "caseStudy"), "preview");

          case "fullscreenCaseStudyPageRead":
          return resolveProps(resolveProps(data, "caseStudy"), "full");

          default:
          return null;
      }
  };

  // console.log(resolvedData(data, variant))

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
  } = resolvedData(data, variant);

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
      flexAlignMap
    } = caseStudySectionLayoutConfig;
    
    const backdropBlur = 
      isScrolling ? "backdrop-blur-none" 
      : "backdrop-blur-(--effect-button-overlay-default-blur)";
    
    const sectionContainerClasses = clsx(
      sectionContainer
    );
    const sectionBlockContainerClasses = clsx(
      sectionBlockContainer
    );
    const sectionHeadingWrapperClasses = clsx(
      headingWrapper.section
    );
    const blockHeadingWrapperClasses = clsx(
      headingWrapper.block
    );
    const rowsContainerClasses = clsx(
      rowsContainer.default
    );
    const rowsContainerRelatedProjectsClasses = clsx(
      rowsContainer.relatedProjects
    );
    const blocksContainerClasses = clsx(
      blocksContainer.base,
      blocksContainer.default,
      backdropBlur
    );
    const blocksContainerRelatedProjectsClasses = clsx(
      blocksContainer.base,
      blocksContainer.relatedProjects,
      backdropBlur
    );

    const modalHandlers = useMemo(() => ({
      onRequestFullscreen: ({ variant, imageid, block, originRect }) => {
        // Mount modal at origin position
        setModal({
          open: true,
          isFullscreen: false,
          imageid: imageid,
          variant: variant,
          content: block,
          originRect,
        });

        // NEXT FRAME → expand to fullscreen
        requestAnimationFrame(() => {
          setModal(prev => ({
            ...prev,
            isFullscreen: true,
          }));
        });
      },

      onExitFullscreen: () => {
        requestAnimationFrame(() => {
          setModal(prev => ({
            ...prev,
            isFullscreen: false,
          }));
        });
      }
    }), []);

    if (!enabled) return null;

    const getBlockVariant = (block, variant) => {
      switch (block?.type) {
        case "imageBlock":
          return "cover";
        default:
          return variant;
      }
    };

    const overlayFadeStyle = {
      opacity: modal.open ? 0.75 : 1,
      pointerEvents: modal.open ? "none" : "auto",
      transition: "opacity 260ms ease-in",
      willChange: modal.open ? "opacity" : "auto",
    };

    const isFullScreenMode = variant === "fullscreenProjectsHomePage" || 
      variant === "fullscreenProjectsPage" || variant === "fullscreenCaseStudyPage";

    let headingVariant;

    switch (variant) {
      case "projectsPage":
      case "caseStudyPage":
        headingVariant = heading?.variants?.subPage;
        break;

      case "projectsHomePage":
        headingVariant = heading?.variants?.homePage;
        break;

      case "fullscreenProjectsHomePage":
      case "fullscreenProjectsPage":
      case "fullscreenCaseStudyPage":
        headingVariant = heading?.variants?.fullScreenPage;
        break;

      default:
        headingVariant = heading?.variants?.default;
    }

    // const homePageRows = rows
    //   .filter(row => row?.enabled !== false)
    //   .filter(row => typeof row?.topOrder === "number")
    //   .sort((a, b) => a.topOrder - b.topOrder)
    //   .slice(0, 4);

    const viewDetailsRow = (rows
      ?.filter(row => row?.enabled !== false)
      .find(row => row.id === "tech-nova-solutions")); 

      // tech-nova-solutions / project-row-devfolio

      // console.log(rows)

    return (
      <section
        id={id}
        className={clsx(
          sectionContainerClasses,
        )}
      >
        {/* Render fullscreen Modal */}
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
                imageid: null,
                variant: "",
                content: null,
                originRect: null,
              });
            }}
          >
            <BlockRenderer
              imageid={modal.imageid}
              block={modal.content}
              variant={modal.variant}
              state={{ renderMode: "fullscreen" }}
              handlers={modalHandlers}
            />
          </Modal>
        )}

        {/* Optional viewDetails block */}
          {(isFullScreenMode || variant === "fullscreenCaseStudyPageRead") && rows &&
          <div 
            className={clsx( variant !== "fullscreenCaseStudyPageRead" && blocksContainerRelatedProjectsClasses)}
            style={overlayFadeStyle}
          >
            {Array.isArray(viewDetailsRow?.blocks) &&
              viewDetailsRow.blocks 
                .filter(block => block?.enabled !== false && block.id !== "work-experience-meta-info")
                .map(block => (
                  <BlockRenderer
                      customView={block.id === "work-experience-highlights" ? "workItemsTextBlock" : null}
                      key={block.id}
                      row={viewDetailsRow}
                      block={block}
                      variant={getBlockVariant(block, variant === "fullscreenCaseStudyPageRead" ? "full" : "expanded")}
                      mode={mode}
                      handlers={modalHandlers}
                  />
                ))}
          </div>}

        {/* Collapsed projects section / Related projects block */}
        {variant !== "fullscreenCaseStudyPageRead" && <div className={clsx(
              isFullScreenMode ? blockHeadingWrapperClasses 
              : sectionHeadingWrapperClasses 
          )}
          >
          {/* Section heading */}
          {heading && 
            <div className={clsx(textAlignMap[alignment.heading])}>
              <Text 
                {...heading} 
                variant={headingVariant}
                text={
                  isFullScreenMode ? heading?.texts?.fullScreenPage 
                    : heading.texts.default
                }
                icon={
                  isFullScreenMode ? heading?.icons?.fullscreenPage 
                    : heading.icons.default
                }
              />
            </div>}

          <div 
            className={clsx(sectionBlockContainerClasses)}
            style={overlayFadeStyle}
          >
            {/* Filter Section */}
            {(variant === "projectsPage" || variant === "caseStudyPage") && 
              <div className={clsx()}>
                <FilterBarSection data={filters}/>
              </div>}

            {/* Row blocks */}
            {Array.isArray(rows) && rows.length > 0 && 
              <div className={clsx(
                isFullScreenMode 
                  ? rowsContainerRelatedProjectsClasses 
                  : rowsContainerClasses,
                  "z-0"
                )}
                >
                  {rows
                    .filter(row => row?.enabled !== false)
                    .map((row) => (
                      <div
                        key={row.id}
                        className={clsx(blocksContainerClasses)}
                      >
                        {Array.isArray(row.blocks) &&
                          row.blocks 
                            .filter(block => block?.enabled !== false && block.id !== "work-experience-meta-info")
                            .map(block => (
                              <BlockRenderer
                                  customView={block.id === "work-experience-highlights" ? "workItemsTextBlock" : null}
                                  key={block.id}
                                  imageid={block?.data?.coverImageId}
                                  row={row}
                                  block={block}
                                  variant={getBlockVariant(block, "collapsed")}
                                  mode={mode}
                                  size={isFullScreenMode ? "compact" : "default"}
                                  handlers={modalHandlers}
                                />
                            ))}
                      </div>
                  ))}
              </div>}

            {/* Optional Section CTA */}
            {variant === "projectsHomePage" && buttonProps && (
              <div
                className={clsx(
                  "w-full flex",
                  flexAlignMap[alignment.cta]
                )}
              >
                <Button {...buttonProps} />
              </div>
            )}

            {/* Pagination */}
            {(variant === "projectsPage" || variant === "caseStudyPage") && <div className={clsx(
                  "w-full flex",
                  flexAlignMap[alignment.pagination]
                )}
                >
              <Pagination />
            </div>}
          </div>
      </div>}
    </section>
  );
};

export default WorkItemsSection;