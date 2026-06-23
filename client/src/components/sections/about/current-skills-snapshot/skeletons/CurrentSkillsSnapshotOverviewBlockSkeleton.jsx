import clsx from "clsx";

import { currentSkillsSnapshotOverviewBlockLayoutConfig } from "../currentSkillsSnapshotOverviewBlockLayout.config";

const { blockInnerContainer, bodyItemsContainer, bodyItemContainer } =
  currentSkillsSnapshotOverviewBlockLayoutConfig;

const CurrentSkillsSnapshotOverviewBlockSkeleton = () => {
  return (
    <div className={clsx(blockInnerContainer)}>
      {/* Body Items */}
      <div className={clsx(bodyItemsContainer)}>
        {[1].map((item) => (
          <div key={item} className={clsx(bodyItemContainer)}>
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
};

export default CurrentSkillsSnapshotOverviewBlockSkeleton;
