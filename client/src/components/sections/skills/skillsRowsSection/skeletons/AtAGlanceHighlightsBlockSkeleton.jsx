import clsx from "clsx";

import { atAGlanceHighlightsBlockLayoutConfig } from "../atAGlanceHighlightsBlockLayout.config";

const { blockContainer, cardContainer, bodyItemsContainer } = atAGlanceHighlightsBlockLayoutConfig;

const AtAGlanceHighlightsBlockSkeleton = () => (
  <div className={clsx(blockContainer)}>
    {/* Highlight Cards */}
    <div className={clsx(bodyItemsContainer)}>
      {[1, 2, 3].map((item) => (
        <div key={item} className={clsx(cardContainer)}>
          <div className="skeleton h-4 w-32 rounded" />
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-10/12 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AtAGlanceHighlightsBlockSkeleton;
