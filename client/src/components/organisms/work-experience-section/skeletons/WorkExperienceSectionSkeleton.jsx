import clsx from "clsx";

import { workExperienceSectionLayoutConfig } from "../workExperienceSectionLayout.config";

import WorkExperienceHighlightsBlockSkeleton from "./WorkExperienceHighlightsBlockSkeleton";
import WorkExperienceMetaInfoBlockSkeleton from "./WorkExperienceMetaInfoBlockSkeleton";
import { SectionHeadingSkeleton, SectionCTASkeleton } from "../../../skeletons/sharedSkeletons";

const { sectionContainer, sectionHeadingWrapper, rowsContainer, blocksContainer } =
  workExperienceSectionLayoutConfig;

const WorkExperienceSectionSkeleton = ({ variant = "home", rowCount = 1, className = "" }) => {
  const resolvedBlocksContainer = clsx(
    blocksContainer.base,
    variant === "home" ? blocksContainer.home : blocksContainer.workExperience,
  );

  return (
    <section className={clsx(sectionContainer, className)}>
      <div className={clsx(sectionHeadingWrapper)}>
        <SectionHeadingSkeleton />

        <div className={clsx(rowsContainer)}>
          {Array.from({ length: rowCount }).map((_, i) => (
            <div key={i} className={resolvedBlocksContainer}>
              {variant === "home" ? (
                <>
                  <WorkExperienceMetaInfoBlockSkeleton variant={variant} />
                  <WorkExperienceHighlightsBlockSkeleton variant={variant} showCTA />
                </>
              ) : (
                <>
                  <WorkExperienceMetaInfoBlockSkeleton variant={variant} />
                  <WorkExperienceHighlightsBlockSkeleton variant={variant} />
                  <WorkExperienceHighlightsBlockSkeleton variant={variant} showCTA />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {variant === "home" && <SectionCTASkeleton />}
    </section>
  );
};

export default WorkExperienceSectionSkeleton;
