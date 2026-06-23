import clsx from "clsx";

import { currentSkillsSnapshotSectionLayoutConfig } from "../currentSkillsSnapshotSectionLayout.config";

import { SectionHeadingSkeleton } from "../../../../skeletons/sharedSkeletons";
import CurrentSkillsSnapshotOverviewBlockSkeleton from "./CurrentSkillsSnapshotOverviewBlockSkeleton";
import CurrentSkillsSnapshotSkillsBlockSkeleton from "./CurrentSkillsSnapshotSkillsBlockSkeleton";

const { sectionContainer, sectionHeadingWrapper, blocksContainer, flexAlignMap } =
  currentSkillsSnapshotSectionLayoutConfig;

const CurrentSkillsSnapshotSectionSkeleton = ({ className = "" }) => {
  return (
    <section className={clsx(sectionContainer, className)}>
      <div className={clsx(sectionHeadingWrapper)}>
        {/* Section Heading */}
        {/* <SectionHeadingSkeleton /> */}

        {/* Blocks Container */}
        <div className={clsx(blocksContainer)}>
          <CurrentSkillsSnapshotOverviewBlockSkeleton />
          {/* <CurrentSkillsSnapshotSkillsBlockSkeleton /> */}
        </div>
      </div>

      {/* Section CTA */}
      <div className={clsx("w-full flex", flexAlignMap.center)}>
        <div className="skeleton h-10 w-36 rounded-full" />
      </div>
    </section>
  );
};

export default CurrentSkillsSnapshotSectionSkeleton;
