import clsx from "clsx";

import { journeySectionLayoutConfig } from "../journeySectionLayout.config";

import { SectionHeadingSkeleton } from "../../../../skeletons/sharedSkeletons";
import DeveloperJourneyBlockSkeleton from "./DeveloperJourneyBlockSkeleton";
import AcademicJourneyBlockSkeleton from "./AcademicJourneyBlockSkeleton";

const { sectionContainer, sectionHeadingWrapper, blocksContainer } = journeySectionLayoutConfig;

const JourneySectionSkeleton = ({ className = "" }) => {
  return (
    <section className={clsx(sectionContainer, className)}>
      <div className={clsx(sectionHeadingWrapper)}>
        {/* Section Heading */}
        <SectionHeadingSkeleton />

        {/* Blocks Container */}
        <div className={clsx(blocksContainer)}>
          <DeveloperJourneyBlockSkeleton />
          <AcademicJourneyBlockSkeleton />
        </div>
      </div>
    </section>
  );
};

export default JourneySectionSkeleton;
