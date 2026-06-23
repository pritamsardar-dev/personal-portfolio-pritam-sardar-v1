import clsx from "clsx";

import { aboutCardBlockLayoutConfig } from "../aboutCardBlockLayout.config";

const { blockContainer, bodyItemsContainer, animatedHeightWrapper } = aboutCardBlockLayoutConfig;

const AboutCardBlockSkeleton = () => {
  return (
    <div className={clsx(blockContainer)}>
      {/* Heading */}
      <div className="skeleton h-5 w-48 ml-2 rounded" />

      {/* Cards */}
      <div className={clsx(animatedHeightWrapper)}>
        <div className={clsx(bodyItemsContainer)}>
          {[1, 2].map((card) => (
            <div key={card} className={clsx("skeleton-card", "flex flex-col gap-4", "p-5")}>
              {/* Card Title */}
              <div className="skeleton h-5 w-2/3 rounded" />

              {/* Meta */}
              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-40 rounded" />
                <div className="skeleton h-4 w-52 rounded" />
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-11/12 rounded" />
                <div className="skeleton h-4 w-4/5 rounded" />
              </div>

              {/* Score */}
              <div className="skeleton h-4 w-24 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-(--spacing-card-wrapper-buffer-padding-x)">
        <div className="skeleton h-10 w-32 rounded-full" />
      </div>
    </div>
  );
};

export default AboutCardBlockSkeleton;
