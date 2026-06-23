import clsx from "clsx";

import { academicJourneyBlockLayoutConfig } from "../academicJourneyBlockLayout.config";

const { blockOuterContainer, blockInnerContainer, bodyItemsContainer, bodyItemContainer } =
  academicJourneyBlockLayoutConfig;

const AcademicJourneyBlockSkeleton = () => {
  return (
    <div className={clsx(blockOuterContainer)}>
      <div className={clsx(blockInnerContainer)}>
        {/* Block Heading */}
        <div className="skeleton h-5 w-48 rounded" />

        {/* Academic Entries */}
        <div className={clsx(bodyItemsContainer)}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={clsx(bodyItemContainer)}>
              {/* Timeline */}
              <div className="skeleton h-4 w-28 rounded" />
              {/* Degree Heading */}
              <div className="skeleton h-5 w-56 rounded" />
              {/* Institute */}
              <div className="skeleton h-4 w-44 rounded" />
              {/* Board */}
              <div className="skeleton h-4 w-36 rounded" />
              {/* Highlights */}
              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-11/12 rounded" />
                <div className="skeleton h-4 w-4/5 rounded" />
              </div>
              {/* Score */}
              <div className="skeleton h-4 w-24 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicJourneyBlockSkeleton;
