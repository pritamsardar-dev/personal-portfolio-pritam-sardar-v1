import clsx from "clsx";

import ContactTextBlockSkeleton from "./ContactTextBlockSkeleton";
import ContactFormBlockSkeleton from "./ContactFormBlockSkeleton";
import { contactSectionLayoutConfig } from "../contactSectionLayout.config";
import { SectionHeadingSkeleton } from "../../../skeletons/sharedSkeletons";

const {
  sectionContainer,
  sectionHeadingContainer,
  blockWrapperSingle,
  blocksContainer,
  flexAlignMap,
} = contactSectionLayoutConfig;

const ContactSectionSkeleton = ({ className = "" }) => {
  return (
    <section className={clsx(sectionContainer, className)}>
      {/* Section Heading and Overview */}
      <div className={clsx(sectionHeadingContainer, flexAlignMap.center)}>
        <SectionHeadingSkeleton />
        <div className={clsx(blockWrapperSingle)}>
          <div className="flex flex-col gap-2 w-full">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-10/12 rounded" />
          </div>
        </div>
      </div>

      {/* Contact Blocks Row */}
      <div className={clsx(blocksContainer, "flex-col sm:flex-row")}>
        <ContactTextBlockSkeleton />
        <ContactFormBlockSkeleton />
      </div>
    </section>
  );
};

export default ContactSectionSkeleton;
