import clsx from "clsx";

import { atAGlanceToolbeltBlockLayoutConfig } from "../atAGlanceToolbeltBlockLayout.config";

const {
  blockContainer,
  subHeadingContainer,
  skillsetContainer,
  bodyItemContainer,
  bodyItemsContainer,
} = atAGlanceToolbeltBlockLayoutConfig;

const AtAGlanceToolbeltBlockSkeleton = () => (
  <div className={clsx(blockContainer)}>
    <div className={clsx(bodyItemsContainer)}>
      {[1].map((item) => (
        <div key={item} className={clsx(bodyItemContainer)}>
          {/* Subheading */}
          <div className={clsx(subHeadingContainer)}>
            <div className="skeleton h-4 w-36 rounded" />
            <div className="skeleton h-4 w-80 rounded" />
          </div>

          {/* Skill Tags */}
          <div className={clsx(skillsetContainer)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((tag) => (
              <div key={tag} className="skeleton h-8 w-20 rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AtAGlanceToolbeltBlockSkeleton;
