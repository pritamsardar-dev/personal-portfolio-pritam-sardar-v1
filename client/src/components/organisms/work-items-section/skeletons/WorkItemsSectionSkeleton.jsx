import clsx from "clsx";

import { workItemsSectionLayoutConfig } from "../workItemsSectionLayout.config";
import { workItemsTextBlockLayoutConfig } from "../workItemsTextBlockLayout.config";
import { caseStudyImageBlockLayoutConfig } from "../caseStudyImageBlockLayout.config";

import WorkItemsCarouselBlockSkeleton from "./WorkItemsCarouselBlockSkeleton";
import WorkItemsTextBlockSkeleton from "./WorkItemsTextBlockSkeleton";
import { SectionHeadingSkeleton, SectionCTASkeleton } from "../../../skeletons/sharedSkeletons";

const {
  sectionContainer,
  sectionBlockContainer,
  headingWrapper,
  rowsContainer,
  blocksContainer,
  interactiveToInteractive,
} = workItemsSectionLayoutConfig;

const {
  textBlockToBlock,
  textBlockItemToItem,
  textBlockInteractiveToInteractive,
  headerBlock,
  tagContainer,
  textBlockHeading3ToBody,
} = workItemsTextBlockLayoutConfig;

const { imageWrapper } = caseStudyImageBlockLayoutConfig;

const WorkItemCardSkeleton = ({ size = "default" }) => (
  <div
    className={clsx(
      blocksContainer.base,
      blocksContainer.default,
    )}
  >
    <WorkItemsCarouselBlockSkeleton size={size} />
    <WorkItemsTextBlockSkeleton variant="collapsed" size={size} />
  </div>
);

const FilterBarSkeleton = ({ variant }) => {
  const isCaseStudy = variant === "caseStudyPage";

  return (
    <div
      className={clsx(
        "w-full flex flex-col sm:flex-row gap-3",
        "px-(--spacing-text-container-mobile-padding-x)",
        "sm:px-(--spacing-text-container-tablet-padding-x)",
        "lg:px-(--spacing-text-container-desktop-padding-x)",
      )}
    >
      <div className="flex flex-col flex-1 gap-3">
        {isCaseStudy && (
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton h-9 w-28 rounded-full" />
            ))}
          </div>
        )}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-9 w-20 rounded-full" />
          ))}
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton h-9 w-24 rounded-full" />
          ))}
        </div>
      </div>
      <div className="flex gap-2 shrink-0">
        <div className="skeleton h-9 w-28 rounded" />
        <div className="skeleton h-9 w-20 rounded-full" />
      </div>
    </div>
  );
};

const PaginationSkeleton = () => (
  <div className="w-full flex justify-center">
    <div className="flex gap-2 py-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="skeleton h-9 w-9 rounded-full" />
      ))}
    </div>
  </div>
);

const CaseStudyNavigationSkeleton = () => (
  <div className="w-full flex justify-center">
    <div className="flex gap-3 py-4">
      <div className="skeleton h-9 w-28 rounded-full" />
      <div className="skeleton h-9 w-36 rounded-full" />
      <div className="skeleton h-9 w-28 rounded-full" />
    </div>
  </div>
);

const ExpandedWorkItemTextSkeleton = ({ isCaseStudyFullscreen = false }) => {
  const paddingX = `
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
  `;
  const blockGap = `
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
  `;
  const itemGap = `
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
  `;
  const interactiveGap = `
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
  `;

  return (
    <div className={clsx("relative w-full flex flex-col", paddingX, blockGap)}>
      <div className="w-full flex items-start gap-3">
        <div className="skeleton h-6 w-3/4 rounded" />
      </div>

      <div className={clsx("w-full flex flex-col", blockGap)}>
        <div className={clsx("flex flex-wrap", interactiveGap)}>
          {[1, 2, 3, 4, 5].map((t) => (
            <div key={t} className="skeleton h-7 w-20 rounded-full shrink-0" />
          ))}
        </div>

        <div className={clsx("w-full flex flex-col", itemGap)}>
          {isCaseStudyFullscreen && (
            <div className="w-full aspect-16/9 skeleton rounded-(--radius-image-base)" />
          )}

          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-11/12 rounded" />
            <div className="skeleton h-4 w-4/5 rounded" />
          </div>

          {[{ bullets: 3 }, { bullets: 3 }, { bullets: 2 }, { bullets: 3 }, { bullets: 2 }].map(
            (section, i) => (
              <div key={i} className={clsx("w-full flex flex-col", itemGap)}>
                <div className="skeleton h-4 w-40 rounded" />
                <div className="flex flex-col gap-2">
                  {Array.from({ length: section.bullets }).map((_, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="skeleton h-3 w-3 rounded-full mt-1 shrink-0" />
                      <div className="skeleton h-4 w-full rounded" />
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className={clsx("w-full flex flex-wrap", interactiveGap)}>
        <div className="skeleton h-9 w-28 rounded-full" />
        <div className="skeleton h-9 w-32 rounded-full" />
        <div className="skeleton h-9 w-28 rounded-full" />
        <div className="skeleton h-9 w-36 rounded-full" />
      </div>

      <div>
        <div className="skeleton h-9 w-28 rounded-full" />
      </div>
    </div>
  );
};

const FullCaseStudyReadSkeleton = () => {
  const paddingX = `
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
  `;
  const outerWidth = `
    relative w-full flex flex-col
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
  `;

  const blockGap = clsx(textBlockToBlock.base, textBlockToBlock.default);
  const itemGap = clsx(textBlockItemToItem.base, textBlockItemToItem.default);
  const interactiveGap = clsx(
    textBlockInteractiveToInteractive.base,
    textBlockInteractiveToInteractive.default,
  );
  const headingRowGap = clsx(headerBlock.base, headerBlock.default);
  const heading3ToBodyGap = clsx(textBlockHeading3ToBody.base, textBlockHeading3ToBody.default);
  const tagRowGap = clsx(tagContainer.base, tagContainer.default);

  return (
    <div className={clsx(outerWidth, paddingX, blockGap)}>
      <div className={clsx(headingRowGap, "flex-col items-start")}>
        <div className="skeleton h-7 w-3/4 rounded" />
        {/* <div className="skeleton h-9 w-32 rounded-full" /> */}
      </div>

      <div className={blockGap}>
        <div className={tagRowGap}>
          {[1, 2, 3, 4, 5].map((t) => (
            <div key={t} className="skeleton h-7 w-20 rounded-full shrink-0" />
          ))}
        </div>

        <div className={itemGap}>
          <div className={clsx(imageWrapper, "skeleton")} />

          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-11/12 rounded" />
            <div className="skeleton h-4 w-4/5 rounded" />
            <div className="skeleton h-4 w-10/12 rounded" />
          </div>

          {[
            { lines: 3 },
            { lines: 4 },
            { lines: 3 },
            { lines: 5 },
            { lines: 3 },
            { lines: 4 },
            { lines: 2 },
            { lines: 3 },
            { lines: 4 },
          ].map((section, i) => (
            <div key={i} className={clsx(heading3ToBodyGap)}>
              <div className="skeleton h-5 w-48 rounded" />
              <div className="flex flex-col gap-2">
                {Array.from({ length: section.lines }).map((_, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="skeleton h-3 w-3 rounded-full mt-1 shrink-0" />
                    <div className="skeleton h-4 w-full rounded" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={clsx(interactiveGap)}>
          <div className="skeleton h-9 w-28 rounded-full" />
          <div className="skeleton h-9 w-32 rounded-full" />
          <div className="skeleton h-9 w-28 rounded-full" />
          <div className="skeleton h-9 w-36 rounded-full" />
        </div>
      </div>

      <CaseStudyNavigationSkeleton />
    </div>
  );
};

// Variants: projectsHomePage / projectsPage / caseStudyPage
// fullscreenProjectsHomePage / fullscreenProjectsPage
// fullscreenCaseStudyPage / fullscreenCaseStudyPageRead
const WorkItemsSectionSkeleton = ({
  variant = "projectsHomePage",
  rowCount = 4,
  loadingMode = "full",
  className = "",
}) => {
  const isFullscreenMode =
    variant === "fullscreenProjectsHomePage" ||
    variant === "fullscreenProjectsPage" ||
    variant === "fullscreenCaseStudyPage";

  const isReadMode = variant === "fullscreenCaseStudyPageRead";
  const isPageMode = variant === "projectsPage" || variant === "caseStudyPage";
  const isCaseStudyFullscreen = variant === "fullscreenCaseStudyPage";

  // Renders directly inside the parent's sectionBlockContainer without a section wrapper
  if (loadingMode === "contentOnly") {
    return (
      <div className="flex flex-col flex-1 min-w-0 gap-3">
        <div className={clsx(rowsContainer.default)}>
          {Array.from({ length: rowCount }).map((_, i) => (
            <WorkItemCardSkeleton key={i} size="default" />
          ))}
        </div>
        {isPageMode && <PaginationSkeleton />}
      </div>
    );
  }

  return (
    <section className={clsx(sectionContainer, className)}>
      {/* Read Mode */}
      {isReadMode && <FullCaseStudyReadSkeleton />}

      {/* Fullscreen View Details */}
      {isFullscreenMode && (
        <>
          <div
            className={clsx(
              "flex-1 min-w-0",
              blocksContainer.base,
              blocksContainer.relatedProjects,
            )}
          >
            {!isCaseStudyFullscreen && <WorkItemsCarouselBlockSkeleton size="default" />}
            <ExpandedWorkItemTextSkeleton isCaseStudyFullscreen={isCaseStudyFullscreen} />
          </div>

          <div className={clsx(headingWrapper.block)}>
            <SectionHeadingSkeleton />
            <div className={clsx(sectionBlockContainer)}>
              <div className={clsx(rowsContainer.relatedProjects)}>
                {Array.from({ length: rowCount }).map((_, i) => (
                  <div
                    key={i}
                    className={clsx(blocksContainer.base, blocksContainer.relatedProjects)}
                  >
                    <WorkItemsCarouselBlockSkeleton size="compact" />
                    <WorkItemsTextBlockSkeleton variant="collapsed" size="compact" />
                  </div>
                ))}
              </div>
              <div className={clsx(interactiveToInteractive)}>
                <div className="skeleton h-9 w-28 rounded-full" />
                <div className="skeleton h-9 w-36 rounded-full" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* All Other Variants */}
      {!isReadMode && !isFullscreenMode && (
        <div className={clsx("flex-1 min-w-0", headingWrapper.section)}>
          {loadingMode === "full" && <SectionHeadingSkeleton />}

          <div className={clsx(sectionBlockContainer, "flex-1 min-w-0")}>
            {loadingMode === "full" && isPageMode && <FilterBarSkeleton variant={variant} />}

            <div className={clsx(rowsContainer.default)}>
              {Array.from({ length: rowCount }).map((_, i) => (
                <WorkItemCardSkeleton key={i} size="default" />
              ))}
            </div>

            {variant === "projectsHomePage" && <SectionCTASkeleton />}
            {isPageMode && <PaginationSkeleton />}
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkItemsSectionSkeleton;
