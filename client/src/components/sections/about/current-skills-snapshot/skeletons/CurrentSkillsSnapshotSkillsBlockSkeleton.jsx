import clsx from "clsx";

import { currentSkillsSnapshotSkillsBlockLayoutConfig } from "../currentSkillsSnapshotSkillsBlockLayout.config";

const { blockContainer, bodyItemsContainer, bodyItemContainer, skillsetContainer, skillsTagStyle } =
  currentSkillsSnapshotSkillsBlockLayoutConfig;

const CurrentSkillsSnapshotSkillsBlockSkeleton = () => {
  return (
    <div className={clsx(blockContainer)}>
      {/* Skill Groups */}
      <div className={clsx(bodyItemsContainer)}>
        {[
          { label: 32, tags: 6 },
          { label: 28, tags: 5 },
          { label: 36, tags: 4 },
        ].map((group, i) => (
          <div key={i} className={clsx(bodyItemContainer)}>
            <div className={clsx(skillsetContainer)}>
              {Array.from({ length: group.tags }).map((_, j) => (
                <div key={j} className={clsx(skillsTagStyle, "skeleton h-8 w-20 rounded-full")} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentSkillsSnapshotSkillsBlockSkeleton;
