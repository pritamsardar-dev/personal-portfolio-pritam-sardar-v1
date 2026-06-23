import clsx from "clsx";

import { skillDetailsBlockLayoutConfig } from "../skillDetailsBlockLayout.config";

const { blockContainer, subHeadingContainer, bodyItemContainer, bodyItemsContainer } =
  skillDetailsBlockLayoutConfig;

const SkillDetailsBlockSkeleton = () => (
  <div className={clsx(blockContainer)}>
    <div className={clsx(bodyItemsContainer)}>
      {[1].map((item) => (
        <div key={item} className={clsx(bodyItemContainer)}>
          {/* Item Heading and Description */}
          <div className={clsx(subHeadingContainer)}>
            <div className="skeleton h-4 w-48 rounded" />
            <div className="skeleton h-4 w-full rounded" />
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-10/12 rounded" />
            <div className="skeleton h-4 w-4/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillDetailsBlockSkeleton;
