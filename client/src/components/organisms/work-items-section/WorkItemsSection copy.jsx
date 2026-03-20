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

import React, { useState, useMemo, } from "react";
import clsx from "clsx"
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import FilterBarSection from "../filterbar-section/FilterBarSection";
import Pagination from "../../molecules/pagination/Paginaton";
import Modal from "../../overlays/modal/Modal";
import { useScrolling } from "../../../hooks/useScrolling";
import { workItemsSectionLayoutConfig } from "./workItemsSectionLayout.config";
import { resolveProps } from "../../../utils/resolveProps";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import CaseStudyNavigation from "./CaseStudyNavigation";
import { useCTA } from "../../../hooks/useCTA";
import { buildFilterOptions } from "./utils/buildFilterOptions";
import { filterWorkItems } from "./utils/filterWorkItems";
import { getWorkItemsDisplayRows } from "./utils/getWorkItemsDisplayRows";
import { paginateRows } from "./utils/paginateRows";
import { useFiltersPagination } from "../../../hooks/useFiltersPagination";

const WorkItemsSection = ({
    variant = "projectsHomePage", // projectsHomePage / projectsPage / fullscreenProjectsHomePage /fullscreenProjectsPage / caseStudyPage / fullscreenCaseStudyPage / fullscreenCaseStudyPageRead
    data = {},
}) => {

  const isScrolling = useScrolling(150);

  const [modal, setModal] = useState({
      open: false,
      isFullscreen: false,
      variant: "",
      content: null,
      originRect: null,
    });

  const [visibleRelatedCount, setVisibleRelatedCount] = useState(3);
  
  const { fullscreenRowId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { handleCTA } = useCTA();
    
  const query = new URLSearchParams(location.search);
  const source = query.get("source");

  function resolveMainPage(pathname, searchParams) {
    const segment = pathname.split("/")[1] || "home";

    const detailPages = ["full-case-study", "view-details"];

    if (detailPages.includes(segment)) {
      const source = searchParams.get("source");
      return source || segment;
    }

    return segment;
  }

  let overrideVariant = null;

  if (fullscreenRowId) {
    if (location.pathname.includes("/full-case-study")) {
      overrideVariant = "fullscreenCaseStudyPageRead";
    }

    else {
      switch (source) {
        case "home":
          overrideVariant = "fullscreenProjectsHomePage";
          break;

        case "projects":
          overrideVariant = "fullscreenProjectsPage";
          break;

        case "case-studies":
          overrideVariant = "fullscreenCaseStudyPage";
          break;
      }
    }
  }

  const resolvedVariant = overrideVariant ?? variant;

  const mode =
    resolvedVariant === "projectsHomePage" ||
    resolvedVariant === "projectsPage" ||
    resolvedVariant === "fullscreenProjectsHomePage" ||
    resolvedVariant === "fullscreenProjectsPage"
      ? "project"
      : "caseStudy";

  const resolvedData = (data, resolvedVariant) => {
      if (!data) return null;

      switch (resolvedVariant) {
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

    const {
      id,
      heading,
      filters,
      alignment = {
        heading: "center",
        cta: "center",
        pagination: "center",
      },
      projectsHomeCtaProps,
      relatedWorkItemsCtas,
      rows,
    } = resolvedData(data, resolvedVariant);

    const { page, filters: filtersPayload, setPage, setFilters } =
      useFiltersPagination(
        {
          scope: "all",
          primary: "all",
          secondary: [],
          sort: "top",
        },
        `${id}-${resolvedVariant}`,
        resolveMainPage
    );

    const isFullScreenMode = 
        resolvedVariant === "fullscreenProjectsHomePage" || 
        resolvedVariant === "fullscreenProjectsPage" || 
        resolvedVariant === "fullscreenCaseStudyPage";

      let headingVariant;

      switch (resolvedVariant) {
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

    // Resolve row items based on selector (Filter rows)
    const viewDetailsRow = (rows
      ?.filter(row => row?.enabled !== false)
      .find(row => row.id === fullscreenRowId)); 

    const baseRows = getWorkItemsDisplayRows({
      rows,
      currentItem: viewDetailsRow,
      isFullScreenMode,
      resolvedVariant
    });

    const filteredRows = filterWorkItems(baseRows, filtersPayload);

    const isRelatedItemsMode =
      resolvedVariant === "fullscreenProjectsHomePage" ||
      resolvedVariant === "fullscreenProjectsPage" ||
      resolvedVariant === "fullscreenCaseStudyPage";

    const visibleRelatedRows = isRelatedItemsMode
      ? filteredRows.slice(0, visibleRelatedCount)
      : filteredRows;

    const currentIndex = filteredRows.findIndex(
      (row) => row.id === viewDetailsRow?.id
    );

    const previousItem =
      currentIndex > 0 ? filteredRows[currentIndex - 1] : null;

    const nextItem =
      currentIndex < filteredRows.length - 1
        ? filteredRows[currentIndex + 1]
        : null;

    const shouldPaginate =
      resolvedVariant === "projectsPage" ||
      resolvedVariant === "caseStudyPage";

    const { data: paginatedRows, pagination } = shouldPaginate
      ? paginateRows(visibleRelatedRows, page, 4)
      : { data: visibleRelatedRows, pagination: null };

    const filterOptions = buildFilterOptions({
      rows,
      filtersPayload
    });

    const resolvedFilters = {
        ...filters, 
        primaryFiltersProps: filterOptions.primary,
        secondaryFiltersProps: filterOptions.secondary, 
        scopeFiltersProps: resolvedVariant === "caseStudyPage" && filterOptions.scope
    }

    const handleFilterChange = (payload) => {
      setFilters(payload);
    };

    const handleLoadMore = () => {
      setVisibleRelatedCount(prev => prev + 3);
    };

    const handleReturnToSource = () => {
      const path =
        source === "home"
          ? "/"
          : source === "projects"
          ? "/projects"
          : source === "case-studies"
          ? "/case-studies"
          : "/";

      navigate(path);
    };

    const handlePrevious = () => {
      if (!previousItem) return;

      navigate(
        `/full-case-study/${previousItem.id}?source=${source}`
      );
    };

    const handleNext = () => {
      if (!nextItem) return;

      navigate(
        `/full-case-study/${nextItem.id}?source=${source}`
      );
    };

    const canLoadMore =
      isRelatedItemsMode &&
      visibleRelatedRows.length < filteredRows.length;

    const {
      sectionContainer,
      sectionBlockContainer,
      headingWrapper,
      rowsContainer,
      blocksContainer,
      textAlignMap,
      flexAlignMap,
      interactiveToInteractive
    } = workItemsSectionLayoutConfig;
    
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
      onRequestFullscreen: ({ variant, imageid, section, row, block, originRect }) => {
        // Mount modal at origin position
        setModal({
          open: true,
          isFullscreen: false,
          imageid: imageid,
          variant: variant,
          content: block,
          row: row,
          section: section,
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

    const handleReturnToSourceLabel = (item, source) => {
      if (item.id !== "return-to-source" || !source) return item.label;

      const formattedSource = source
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return `← Return to ${formattedSource}`;
    };

    return (
      <section
        id={`${id}-${resolvedVariant}`}
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
              section={modal.section}
              row={modal.row}
              block={modal.content}
              variant={modal.variant}
              state={{ renderMode: "fullscreen" }}
              handlers={modalHandlers}
            />
          </Modal>
        )}

        {/* Optional viewDetails block */}
          {(isFullScreenMode || resolvedVariant === "fullscreenCaseStudyPageRead") && rows &&
          <div 
            className={clsx(resolvedVariant !== "fullscreenCaseStudyPageRead" && blocksContainerRelatedProjectsClasses)}
            style={overlayFadeStyle}
          >
            {Array.isArray(viewDetailsRow?.blocks) &&
              viewDetailsRow.blocks 
                .filter(block => block?.enabled !== false && block.id !== "work-experience-meta-info")
                .map(block => (
                  <BlockRenderer
                      customView={block.id === "work-experience-highlights" ? "workItemsTextBlock" : null}
                      key={block.id}
                      section={resolvedData(data, resolvedVariant)}
                      row={viewDetailsRow}
                      block={block}
                      variant={getBlockVariant(block, resolvedVariant === "fullscreenCaseStudyPageRead" ? "full" : "expanded")}
                      mode={mode}
                      handlers={modalHandlers}
                  />
                ))}

            {/* Optional Navigation for full case study page */}
            {resolvedVariant === "fullscreenCaseStudyPageRead" &&
                <CaseStudyNavigation
                  previous={previousItem}
                  next={nextItem}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onBack={handleReturnToSource}
                  backLabel={handleReturnToSourceLabel(relatedWorkItemsCtas?.find(item => item.id === "return-to-source"), source)}
                />
            }
          </div>}

        {/* Collapsed projects section / Related projects block */}
        {resolvedVariant !== "fullscreenCaseStudyPageRead" && <div className={clsx(
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
            {(resolvedVariant === "projectsPage" || resolvedVariant === "caseStudyPage") && 
              <div className={clsx()}>
                <FilterBarSection
                  filtersPayload={filtersPayload}
                  data={resolvedFilters}
                  onFilterChange={handleFilterChange}
                />
              </div>}

            {/* Row blocks */}
            {Array.isArray(paginatedRows) && paginatedRows.length > 0 && 
              <div className={clsx(
                isFullScreenMode 
                  ? rowsContainerRelatedProjectsClasses 
                  : rowsContainerClasses,
                  "z-0"
                )}
                >
                  {paginatedRows
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
                                  section={resolvedData(data, resolvedVariant)}
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

                  {/* Optional cta block for related work items */}
                  {Array.isArray(relatedWorkItemsCtas) && 
                    relatedWorkItemsCtas.length > 0 && 
                    isFullScreenMode &&
                    <div className={clsx(interactiveToInteractive, "pt-4")}>
                        {relatedWorkItemsCtas.map((item) => {

                          // Hide Load More button when no more items
                          if (item.id === "load-more" && !canLoadMore) return null;

                          return (
                            <Button
                              key={item.id}
                              variant={item.variant}
                              label={handleReturnToSourceLabel(item, source)}
                              onClick={() => {
                                item.id === "return-to-source" && handleReturnToSource();
                                item.id === "load-more" && handleLoadMore();
                              }}
                            />
                          );
                        })}
                    </div>}
              </div>}

            {/* Optional Section CTA */}
            {resolvedVariant === "projectsHomePage" && projectsHomeCtaProps && (
              <div
                className={clsx(
                  "w-full flex",
                  flexAlignMap[alignment.cta]
                )}
              >
                <Button
                  variant={projectsHomeCtaProps.variant}
                  label={projectsHomeCtaProps.label}
                  onClick={() => handleCTA(projectsHomeCtaProps)}
                />
              </div>
            )}

            {/* Pagination */}
            {(resolvedVariant === "projectsPage" || resolvedVariant === "caseStudyPage") && <div className={clsx(
                  "w-full flex",
                  flexAlignMap[alignment.pagination]
                )}
                >
              <Pagination
                currentPage={page}
                totalPages={pagination.totalPages}
                onPageChange={setPage}
              />
            </div>}
          </div>
      </div>}
    </section>
  );
};

export default WorkItemsSection;