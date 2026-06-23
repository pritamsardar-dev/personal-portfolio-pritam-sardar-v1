import clsx from "clsx";

import { skillOverviewBlockLayoutConfig } from "../skillOverviewBlockLayout.config";

const { blockContainer, subHeadingContainer, bodyItemContainer, bodyItemsContainer } =
  skillOverviewBlockLayoutConfig;

const SkillOverviewBlockSkeleton = () => (
  <div className={clsx(blockContainer)}>
    <div className={clsx(bodyItemsContainer)}>
      {[1].map((item) => (
        <div key={item} className={clsx(bodyItemContainer)}>
          {/* Item Heading and Scope Tags */}
          <div className={clsx(subHeadingContainer)}>
            <div className="skeleton h-4 w-48 rounded" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((t) => (
                <div key={t} className="skeleton h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>

          {/* Narrative Items */}
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-11/12 rounded" />
            <div className="skeleton h-4 w-4/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillOverviewBlockSkeleton;
