import clsx from "clsx";

import { skillsCardBlockLayoutConfig } from "../skillsCardBlockLayout.config";

const {
  blockContainer: blockContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  skillsetContainer: skillsetContainerClasses,
} = skillsCardBlockLayoutConfig;

const SkillsCardBlockSkeleton = () => {
  return (
    <div className={clsx(blockContainerClasses)}>
      {/* Block Heading */}
      <div className="skeleton h-5 w-40 rounded" />

      {/* Skill Groups */}
      <div className={clsx(bodyItemsContainerClasses)}>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item} className={clsx(bodyItemContainerClasses)}>
            {/* Category Heading */}
            <div className="skeleton h-4 w-36 rounded" />
            {/* Tags */}
            <div className={clsx(skillsetContainerClasses)}>
              {[1, 2, 3, 4, 5].map((tag) => (
                <div key={tag} className="skeleton h-8 w-20 rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCardBlockSkeleton;
