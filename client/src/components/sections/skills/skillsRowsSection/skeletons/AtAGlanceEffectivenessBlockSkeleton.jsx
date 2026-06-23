import clsx from "clsx";

import { atAGlanceEffectivenessBlockLayoutConfig } from "../atAGlanceEffectivenessBlockLayout.config";

const {
  blockContainer,
  subHeadingContainer,
  itemListStyle,
  bodyItemContainer,
  itemListContainer,
  bodyItemsContainer,
} = atAGlanceEffectivenessBlockLayoutConfig;

const AtAGlanceEffectivenessBlockSkeleton = () => (
  <div className={clsx(blockContainer)}>
    <div className={clsx(bodyItemsContainer)}>
      {[1].map((item) => (
        <div key={item} className={clsx(bodyItemContainer)}>
          {/* Subheading */}
          <div className={clsx(subHeadingContainer)}>
            <div className="skeleton h-4 w-40 rounded" />
            <div className="skeleton h-4 w-80 rounded" />
          </div>

          {/* Item List */}
          <div className={clsx(itemListContainer)}>
            {[1, 2, 3, 4, 5].map((line) => (
              <div key={line} className={clsx(itemListStyle)}>
                <div className="skeleton h-4 w-full rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AtAGlanceEffectivenessBlockSkeleton;
