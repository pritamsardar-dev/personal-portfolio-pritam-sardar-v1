import React, { useState, useMemo, useEffect } from "react";

import clsx from "clsx";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { useScrolling } from "../../../hooks/useScrolling";
import {
  CarouselCoordinationContext,
  notifyInteraction,
} from "../../../hooks/useSerialCarouselCoordination";
import { useCTA } from "../../../hooks/useCTA";
import { useFiltersPagination } from "../../../hooks/useFiltersPagination";
import { resolveProps } from "../../../utils/resolveProps";
import { buildFilterOptions } from "./utils/buildFilterOptions";
import { markRowViewed } from "./utils/markRowViewed";
import { workItemsSectionLayoutConfig } from "./workItemsSectionLayout.config";
import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import FilterBarSection from "../filterbar-section/FilterBarSection";
import Pagination from "../../molecules/pagination/Paginaton";
import Modal from "../../overlays/modal/Modal";
import CaseStudyNavigation from "./CaseStudyNavigation";
import WorkItemsSectionSkeleton from "./skeletons/WorkItemsSectionSkeleton";

// CMS driven Projects and Case Study section.
// Resolves data per variant (project, caseStudy, preview, full).
// Supports collapsed, expanded, related, and read full case study flows.
// Renders heading, filter bar, CTA, and pagination based on active variant.
// Controls fullscreen modal lifecycle and passes handlers to child blocks.
// Applies scroll based backdrop blur and overlay fade effects.
const WorkItemsSection = ({
  variant = "projectsHomePage", // projectsHomePage / projectsPage / fullscreenProjectsHomePage / fullscreenProjectsPage / caseStudyPage / fullscreenCaseStudyPage / fullscreenCaseStudyPageRead
  data = {},
  isLoading,
  isFilterLoading = false,
  apiData = {},
}) => {
  const isScrolling = useScrolling(150);

  // State
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

  // Helpers
  function resolveMainPage(pathname, searchParams) {
    const segment = pathname.split("/")[1] || "home";
    const detailPages = ["full-case-study", "view-details"];

    if (detailPages.includes(segment)) {
      const source = searchParams.get("source");
      return source || segment;
    }

    return segment;
  }

  // Derives the active variant from URL params when in fullscreen or read mode
  let overrideVariant = null;

  if (fullscreenRowId) {
    if (location.pathname.includes("/full-case-study")) {
      overrideVariant = "fullscreenCaseStudyPageRead";
    } else {
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

  // Applies domain and view mode resolveProps layers based on variant
  const resolveByVariant = (payload, resolvedVariant) => {
    if (!payload) return null;

    switch (resolvedVariant) {
    case "projectsHomePage":
    case "projectsPage":
    case "fullscreenProjectsHomePage":
    case "fullscreenProjectsPage":
      return resolveProps(resolveProps(payload, "project"), "preview");

    case "caseStudyPage":
    case "fullscreenCaseStudyPage":
      return resolveProps(resolveProps(payload, "caseStudy"), "preview");

    case "fullscreenCaseStudyPageRead":
      return resolveProps(resolveProps(payload, "caseStudy"), "full");

    default:
      return null;
    }
  };

  const resolvedSectionData = resolveByVariant(data, resolvedVariant);

  // Selects the correct row source based on variant
  const resolvedRows = (() => {
    switch (resolvedVariant) {
    case "projectsHomePage":
      return resolveByVariant(apiData?.projectFeaturedRows || [], resolvedVariant);

    case "projectsPage":
    case "caseStudyPage":
      return resolveByVariant(apiData?.paginatedWorkItemsRows?.data || [], resolvedVariant);

    case "fullscreenProjectsHomePage":
    case "fullscreenProjectsPage":
    case "fullscreenCaseStudyPage":
      return resolveByVariant(
        (apiData?.workItemRowByIdWithRelatedRows?.related || []).slice(0, visibleRelatedCount),
        resolvedVariant,
      );

    default:
      return [];
    }
  })();

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
  } = resolvedSectionData || {};

  const sectionCoordId = `${id}-${resolvedVariant}`;
  const isSerialAnimEnabled =
    resolvedVariant === "projectsHomePage" ||
    resolvedVariant === "projectsPage" ||
    resolvedVariant === "caseStudyPage";

  const carouselCoordContextValue = useMemo(
    () => ({ sectionId: sectionCoordId, serialAnimationEnabled: isSerialAnimEnabled }),
    [sectionCoordId, isSerialAnimEnabled],
  );

  const {
    page,
    filters: filtersPayload,
    setPage,
    setFilters,
  } = useFiltersPagination(
    {
      scope: "all",
      primary: "all",
      secondary: [],
      sort: "top",
    },
    `${id}-${resolvedVariant}`,
    resolveMainPage,
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

  const viewDetailsRow = resolveByVariant(
    apiData?.workItemRowByIdWithRelatedRows?.current,
    resolvedVariant,
  );

  // Opening a row's detail view counts as a view for that row
  useEffect(() => {
    if (viewDetailsRow?.id) {
      markRowViewed(viewDetailsRow.id);
    }
  }, [viewDetailsRow?.id]);

  const isRelatedItemsMode =
    resolvedVariant === "fullscreenProjectsHomePage" ||
    resolvedVariant === "fullscreenProjectsPage" ||
    resolvedVariant === "fullscreenCaseStudyPage";

  const pagination = apiData?.paginatedWorkItemsRows?.pagination || null;
  const relatedItems = apiData?.workItemRowByIdWithRelatedRows?.related || [];

  const navigationRows = relatedItems.filter((row) => row?.id);

  const currentIndex = navigationRows.findIndex((row) => row.id === viewDetailsRow?.id);

  const previousItem = currentIndex > 0 ? navigationRows[currentIndex - 1] : null;

  const nextItem =
    currentIndex >= 0 && currentIndex < navigationRows.length - 1
      ? navigationRows[currentIndex + 1]
      : null;

  const filterRows = (() => {
    if (resolvedVariant === "projectsPage") {
      return (rows || []).filter((row) => row?.domain === "project");
    }
    return rows || [];
  })();

  const filterOptions = buildFilterOptions({ rows: filterRows, filtersPayload });

  const resolvedFilters = {
    ...filters,
    primaryFiltersProps: filterOptions.primary,
    secondaryFiltersProps: filterOptions.secondary,
    scopeFiltersProps: resolvedVariant === "caseStudyPage" && filterOptions.scope,
  };

  // Handlers
  const handleFilterChange = (payload) => {
    setFilters(payload);
  };

  const handleLoadMore = () => {
    setVisibleRelatedCount((prev) => prev + 3);
  };

  const handleReturnToSource = () => {
    const path =
      source === "home"
        ? "/"
        : source === "projects"
          ? "/projects"
          : source === "case-studies"
            ? "/case-studies"
            : source === "work-experience"
              ? "/work-experience"
              : "/";

    navigate(path);
  };

  const handlePrevious = () => {
    if (!previousItem) return;
    navigate(`/full-case-study/${previousItem.id}?source=${source}`);
  };

  const handleNext = () => {
    if (!nextItem) return;
    navigate(`/full-case-study/${nextItem.id}?source=${source}`);
  };

  // Formats the return to source label with a capitalized source name
  const handleReturnToSourceLabel = (item, source) => {
    if (item.id !== "return-to-source" || !source) return item.label;

    const formattedSource = source.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return `Return to ${formattedSource}`;
  };

  // Resolves a CTA item's chevron icon component from its CMS icon key
  const resolveCtaIcon = (item) => (item?.icon ? ctaIconMap[item.icon] : null);

  const canLoadMore = isRelatedItemsMode && resolvedRows.length < relatedItems.length;

  const {
    sectionContainer,
    sectionBlockContainer,
    headingWrapper,
    rowsContainer,
    blocksContainer,
    textAlignMap,
    flexAlignMap,
    interactiveToInteractive,
  } = workItemsSectionLayoutConfig;

  // Layout classes
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

  // Memoized modal handlers to avoid re renders in child blocks
  const modalHandlers = useMemo(
    () => ({
      onRequestFullscreen: ({
        variant,
        imageid,
        section,
        row,
        block,
        originRect,
        initialIndex,
      }) => {
        setModal({
          open: true,
          isFullscreen: false,
          imageid: imageid,
          variant: variant,
          content: block,
          row: row,
          section: section,
          originRect,
          initialIndex: initialIndex ?? 0,
        });

        // Expand to fullscreen on the next frame after mount at origin
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

  if (isLoading) {
    return (
      <WorkItemsSectionSkeleton
        variant={resolvedVariant}
        rowCount={
          resolvedVariant === "projectsHomePage"
            ? 4
            : resolvedVariant === "projectsPage"
              ? 4
              : resolvedVariant === "caseStudyPage"
                ? 4
                : isFullScreenMode
                  ? 3
                  : 1
        }
      />
    );
  }

  return (
    <CarouselCoordinationContext.Provider value={carouselCoordContextValue}>
      <section id={`${id}-${resolvedVariant}`} className={clsx(sectionContainerClasses)}>
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
              state={{ renderMode: "fullscreen", initialIndex: modal.initialIndex ?? 0 }}
              handlers={modalHandlers}
            />
          </Modal>
        )}

        {/* View Details Block */}
        {(isFullScreenMode || resolvedVariant === "fullscreenCaseStudyPageRead") && rows && (
          <div
            className={clsx(
              resolvedVariant !== "fullscreenCaseStudyPageRead" &&
                blocksContainerRelatedProjectsClasses,
            )}
            style={overlayFadeStyle}
          >
            {Array.isArray(viewDetailsRow?.blocks) &&
              viewDetailsRow.blocks
                .filter(
                  (block) => block?.enabled !== false && block.id !== "work-experience-meta-info",
                )
                .map((block) => (
                  <BlockRenderer
                    customView={
                      block.id === "work-experience-highlights" ? "workItemsTextBlock" : null
                    }
                    key={block.id}
                    section={resolveByVariant(data, resolvedVariant)}
                    row={viewDetailsRow}
                    block={block}
                    variant={getBlockVariant(
                      block,
                      resolvedVariant === "fullscreenCaseStudyPageRead" ? "full" : "expanded",
                    )}
                    mode={mode}
                    handlers={modalHandlers}
                  />
                ))}

            {/* Case Study Navigation */}
            {resolvedVariant === "fullscreenCaseStudyPageRead" && (
              <CaseStudyNavigation
                previous={previousItem}
                next={nextItem}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onBack={handleReturnToSource}
                backLabel={handleReturnToSourceLabel(
                  relatedWorkItemsCtas?.find((item) => item.id === "return-to-source"),
                  source,
                )}
                backIconLeft={resolveCtaIcon(
                  relatedWorkItemsCtas?.find((item) => item.id === "return-to-source"),
                )}
              />
            )}
          </div>
        )}

        {/* Collapsed Projects and Related Projects Block */}
        {resolvedVariant !== "fullscreenCaseStudyPageRead" && (
          <div
            className={clsx(
              !isFullScreenMode && "flex-1 min-w-0",
              isFullScreenMode ? blockHeadingWrapperClasses : sectionHeadingWrapperClasses,
            )}
          >
            {/* Section Heading */}
            {heading && (
              <div className={clsx(textAlignMap[alignment.heading])}>
                <Text
                  {...heading}
                  variant={headingVariant}
                  text={isFullScreenMode ? heading?.texts?.fullScreenPage : heading.texts.default}
                  icon={isFullScreenMode ? heading?.icons?.fullscreenPage : heading.icons.default}
                />
                {/* <Text
                {...heading}
                variant={headingVariant}
                text={isFullScreenMode ? heading?.texts?.fullScreenPage : heading.texts.default}
                icon={{ src: ``, type: "stroke" }}
              /> */}
              </div>
            )}

            <div
              className={clsx(sectionBlockContainerClasses, !isFullScreenMode && "flex-1 min-w-0")}
              style={overlayFadeStyle}
            >
              {/* Filter Bar */}
              {(resolvedVariant === "projectsPage" || resolvedVariant === "caseStudyPage") && (
                <div className={clsx()}>
                  <FilterBarSection
                    filtersPayload={filtersPayload}
                    data={resolvedFilters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              )}

              {/* Empty State */}
              {isFullScreenMode && resolvedRows.length === 0 && (
                <div
                  className={clsx(
                    "w-full flex flex-col items-center gap-4",
                    "px-(--spacing-text-container-mobile-padding-x)",
                    "py-(--spacing-text-container-mobile-padding-y)",
                    "sm:py-(--spacing-text-container-tablet-padding-y)",
                    textAlignMap.center,
                  )}
                >
                  <Text variant="bodyDefault" text="No more related work items to show for this." />
                  {Array.isArray(relatedWorkItemsCtas) &&
                    relatedWorkItemsCtas
                      .filter((item) => item.id === "return-to-source")
                      .map((item) => (
                        <Button
                          key={item.id}
                          variant={item.variant}
                          label={handleReturnToSourceLabel(item, source)}
                          iconLeft={item?.icon ? ctaIconMap[item.icon] : null}
                          onClick={handleReturnToSource}
                        />
                      ))}
                </div>
              )}

              {/* Row Blocks */}
              {isFilterLoading ? (
                <WorkItemsSectionSkeleton
                  variant={resolvedVariant}
                  rowCount={4}
                  loadingMode="contentOnly"
                />
              ) : Array.isArray(resolvedRows) &&
                resolvedRows.length === 0 &&
                (resolvedVariant === "projectsPage" || resolvedVariant === "caseStudyPage") ? (
                  <div
                    className="
                    w-full flex flex-col items-center text-center
                    gap-(--spacing-heading-2-body-mobile-gap)
                    sm:gap-(--spacing-heading-2-body-tablet-gap)
                    lg:gap-(--spacing-heading-2-body-desktop-gap)
                    px-(--spacing-text-container-mobile-padding-x)
                    py-(--spacing-section-wrapper-mobile-padding-y)
                    sm:py-(--spacing-section-wrapper-tablet-padding-y)
                    lg:py-(--spacing-section-wrapper-desktop-padding-y)
                  "
                  >
                    <div
                      className="
                      font-mono select-none leading-none
                      text-(--color-text-primary) opacity-10
                      text-7xl sm:text-8xl lg:text-9xl
                      font-(--font-weight-bold)
                    "
                    >
                      {"{ }"}
                    </div>
                    <div
                      className="
                      flex flex-col items-center max-w-sm
                      gap-(--spacing-heading-3-body-mobile-gap)
                      sm:gap-(--spacing-heading-3-body-tablet-gap)
                    "
                    >
                      <Text variant="heading2" text="No Results Found" />
                      <Text
                        variant="bodyLarge"
                        text="Nothing matches the current filters. Try adjusting or clearing your search to explore all available content."
                      />
                    </div>
                    <div
                      className="
                      flex flex-wrap items-center justify-center
                      gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
                      sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
                      gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
                    "
                    >
                      <Button
                        variant="primary"
                        label="Clear Filters"
                        onClick={() =>
                          handleFilterChange({
                            scope: "all",
                            primary: "all",
                            secondary: [],
                            sort: "top",
                          })
                        }
                      />
                      <Button
                        variant="overlay"
                        label="Home"
                        iconLeft={ctaIconMap["ChevronLeft"]}
                        onClick={() => navigate("/")}
                      />
                    </div>
                  </div>
                ) : (
                  Array.isArray(resolvedRows) &&
                resolvedRows.length > 0 && (
                    <div
                      className={clsx(
                        isFullScreenMode
                          ? rowsContainerRelatedProjectsClasses
                          : rowsContainerClasses,
                        "z-0",
                      )}
                    >
                      {resolvedRows
                        .filter((row) => row?.enabled !== false)
                        .map((row) => (
                          <div
                            key={row.id}
                            className={clsx(blocksContainerClasses)}
                            onMouseEnter={() => {
                              if (isSerialAnimEnabled) notifyInteraction(sectionCoordId);
                            }}
                            onClick={() => markRowViewed(row.id)}
                          >
                            {Array.isArray(row.blocks) &&
                            row.blocks
                              .filter(
                                (block) =>
                                  block?.enabled !== false &&
                                  block.id !== "work-experience-meta-info",
                              )
                              .map((block) => {
                                const renderer = (
                                  <BlockRenderer
                                    customView={
                                      block.id === "work-experience-highlights"
                                        ? "workItemsTextBlock"
                                        : null
                                    }
                                    imageid={block?.data?.coverImageId}
                                    section={resolveByVariant(data, resolvedVariant)}
                                    row={row}
                                    block={block}
                                    variant={getBlockVariant(block, "collapsed")}
                                    mode={mode}
                                    size={isFullScreenMode ? "compact" : "default"}
                                    handlers={modalHandlers}
                                  />
                                );

                                // Non image blocks get flex-1 so text blocks fill
                                // remaining card height and CTAs align to the bottom
                                if (!isFullScreenMode && block.type !== "imageBlock") {
                                  return (
                                    <div key={block.id} className="flex-1 flex flex-col">
                                      {renderer}
                                    </div>
                                  );
                                }

                                return <React.Fragment key={block.id}>{renderer}</React.Fragment>;
                              })}
                          </div>
                        ))}

                      {/* Related Work Items CTAs */}
                      {Array.isArray(relatedWorkItemsCtas) &&
                      relatedWorkItemsCtas.length > 0 &&
                      isFullScreenMode && (
                        <div className={clsx(interactiveToInteractive, "pt-4")}>
                          {relatedWorkItemsCtas.map((item) => {
                            if (item.id === "load-more" && !canLoadMore) return null;

                            const iconComponent = item?.icon ? ctaIconMap[item.icon] : null;
                            const isLeftIcon = item?.icon?.toLowerCase().includes("left");

                            return (
                              <Button
                                key={item.id}
                                variant={item.variant}
                                label={handleReturnToSourceLabel(item, source)}
                                iconLeft={isLeftIcon ? iconComponent : null}
                                iconRight={!isLeftIcon ? iconComponent : null}
                                onClick={() => {
                                  item.id === "return-to-source" && handleReturnToSource();
                                  item.id === "load-more" && handleLoadMore();
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )
                )}

              {/* Section CTA */}
              {resolvedVariant === "projectsHomePage" && projectsHomeCtaProps && (
                <div className={clsx("w-full flex", flexAlignMap[alignment.cta])}>
                  <Button
                    variant={projectsHomeCtaProps.variant}
                    label={projectsHomeCtaProps.label}
                    iconRight={resolveCtaIcon(projectsHomeCtaProps)}
                    onClick={() => handleCTA(projectsHomeCtaProps)}
                  />
                </div>
              )}

              {/* Pagination */}
              {!isFilterLoading &&
                (resolvedVariant === "projectsPage" || resolvedVariant === "caseStudyPage") &&
                Array.isArray(resolvedRows) &&
                resolvedRows.length > 0 && (
                <div className={clsx("w-full flex", flexAlignMap[alignment.pagination])}>
                  <Pagination
                    currentPage={page}
                    totalPages={pagination?.totalPages}
                    onPageChange={setPage}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </CarouselCoordinationContext.Provider>
  );
};

export default WorkItemsSection;
