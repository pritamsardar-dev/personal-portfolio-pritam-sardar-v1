import clsx from "clsx";

import { skillsRowsSectionLayoutConfig } from "../skillsRowsSectionLayout.config";

import { SectionHeadingSkeleton } from "../../../../skeletons/sharedSkeletons";
import SkillOverviewBlockSkeleton from "./SkillOverviewBlockSkeleton";
import SkillDetailsBlockSkeleton from "./SkillDetailsBlockSkeleton";
import ValidationCtaBlockSkeleton from "./ValidationCtaBlockSkeleton";
import AtAGlanceHighlightsBlockSkeleton from "./AtAGlanceHighlightsBlockSkeleton";
import AtAGlanceEffectivenessBlockSkeleton from "./AtAGlanceEffectivenessBlockSkeleton";
import AtAGlanceToolbeltBlockSkeleton from "./AtAGlanceToolbeltBlockSkeleton";

const {
  sectionContainer,
  sectionHeadingWrapper,
  subHeadingContainer,
  rowsContainer,
  blocksContainer,
  atAGlanceBlocksColumn,
} = skillsRowsSectionLayoutConfig;

const SkillsRowsSectionSkeleton = ({ rowCount = 9, className = "" }) => {
  return (
    <section className={clsx(sectionContainer, className)}>
      <div className={clsx(sectionHeadingWrapper)}>
        {/* Section Heading */}
        <SectionHeadingSkeleton />

        {/* At a Glance Block */}
        <div className={clsx(blocksContainer)}>
          {/* Subheading */}
          <div
            className={clsx(
              subHeadingContainer,
              "flex flex-col items-start justify-start text-left self-start",
            )}
          >
            <div className="skeleton h-5 w-28 rounded" />
            <div className="skeleton h-4 w-120 rounded" />
          </div>

          {/* Highlights */}
          <AtAGlanceHighlightsBlockSkeleton />

          {/* Effectiveness and Toolbelt */}
          <div className={clsx(atAGlanceBlocksColumn)}>
            <AtAGlanceEffectivenessBlockSkeleton />
            <AtAGlanceToolbeltBlockSkeleton />
          </div>

          {/* Validation CTA */}
          <ValidationCtaBlockSkeleton variant="atAGlance" />
        </div>

        {/* CMS Rows */}
        <div className={clsx(rowsContainer)}>
          {Array.from({ length: rowCount }).map((_, i) => (
            <div key={i} className={clsx(blocksContainer)}>
              <SkillOverviewBlockSkeleton />

              {/* Show only for first 4 rows */}
              {i < 4 && <SkillDetailsBlockSkeleton />}

              {/* Show only on last row */}
              {i === rowCount - 1 && <ValidationCtaBlockSkeleton variant="skillsRow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsRowsSectionSkeleton;
