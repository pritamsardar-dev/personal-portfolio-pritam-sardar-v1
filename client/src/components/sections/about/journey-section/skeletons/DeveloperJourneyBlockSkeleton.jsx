import clsx from "clsx";

import { developerJourneyBlockLayoutConfig } from "../developerJourneyBlockLayout.config";

const { blockOuterContainer, blockInnerContainer, bodyItemsContainer, bodyItemContainer } =
  developerJourneyBlockLayoutConfig;

const DeveloperJourneyBlockSkeleton = () => {
  return (
    <div className={clsx(blockOuterContainer)}>
      <div className={clsx(blockInnerContainer)}>
        {/* Block Heading */}
        <div className="skeleton h-5 w-48 rounded" />

        {/* Body Items */}
        <div className={clsx(bodyItemsContainer)}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={clsx(bodyItemContainer)}>
              {/* Item Subheading */}
              <div className="skeleton h-4 w-40 rounded" />
              {/* Body Text */}
              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-11/12 rounded" />
                <div className="skeleton h-4 w-4/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperJourneyBlockSkeleton;
