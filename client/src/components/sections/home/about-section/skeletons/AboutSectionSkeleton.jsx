import clsx from "clsx";

import { aboutSectionLayoutConfig } from "../aboutSectionLayout.config";

import { SectionHeadingSkeleton, SectionCTASkeleton } from "../../../../skeletons/sharedSkeletons";
import AboutTextBlockSkeleton from "./AboutTextBlockSkeleton";
import AboutCardBlockSkeleton from "./AboutCardBlockSkeleton";

const { sectionContainer, sectionHeadingWrapper, blocksContainer } = aboutSectionLayoutConfig;

const AboutSectionSkeleton = ({ className = "" }) => {
  return (
    <section className={clsx(sectionContainer, className)}>
      <div className={clsx(sectionHeadingWrapper)}>
        {/* Section Heading */}
        <SectionHeadingSkeleton />

        {/* Blocks Container */}
        <div className={clsx(blocksContainer)}>
          <AboutTextBlockSkeleton />
          <AboutCardBlockSkeleton />
        </div>
      </div>

      {/* Section CTA */}
      <SectionCTASkeleton />
    </section>
  );
};

export default AboutSectionSkeleton;
