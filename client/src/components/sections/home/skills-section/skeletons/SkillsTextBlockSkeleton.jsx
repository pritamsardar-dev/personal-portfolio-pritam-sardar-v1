import clsx from "clsx";

import { skillsTextBlockLayoutConfig } from "../skillsTextBlockLayout.config";

const {
  blockContainerOuter: blockContainerOuterClasses,
  blockContainer: blockContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
} = skillsTextBlockLayoutConfig;

const SkillsTextBlockSkeleton = () => {
  return (
    <div className={clsx(blockContainerOuterClasses)}>
      <div className={clsx(blockContainerClasses)}>
        {/* Block Heading */}
        <div className="skeleton h-5 w-40 rounded" />

        {/* Body Items */}
        <div className={clsx(bodyItemsContainerClasses)}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={clsx(bodyItemContainerClasses)}>
              {/* Item Heading */}
              <div className="skeleton h-4 w-48 rounded" />
              {/* Item Body */}
              <div className="flex flex-col gap-2">
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

export default SkillsTextBlockSkeleton;
