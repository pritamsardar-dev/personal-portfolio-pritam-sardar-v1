import clsx from "clsx";

import { skillsSectionLayoutConfig } from "../skillsSectionLayout.config";

import { SectionHeadingSkeleton, SectionCTASkeleton } from "../../../../skeletons/sharedSkeletons";
import SkillsCardBlockSkeleton from "./SkillsCardBlockSkeleton";
import SkillsTextBlockSkeleton from "./SkillsTextBlockSkeleton";

const { sectionContainer, sectionHeadingWrapper, blocksContainer } = skillsSectionLayoutConfig;

const SkillsSectionSkeleton = ({ className = "" }) => {
  return (
    <section className={clsx(sectionContainer, className)}>
      <div className={clsx(sectionHeadingWrapper)}>
        {/* Section Heading */}
        <SectionHeadingSkeleton />

        {/* Blocks Container */}
        <div className={clsx(blocksContainer)}>
          <SkillsCardBlockSkeleton />
          <SkillsTextBlockSkeleton />
        </div>
      </div>

      {/* Section CTA */}
      <SectionCTASkeleton />
    </section>
  );
};

export default SkillsSectionSkeleton;
