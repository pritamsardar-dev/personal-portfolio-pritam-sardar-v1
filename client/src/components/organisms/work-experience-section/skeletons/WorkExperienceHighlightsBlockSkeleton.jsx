import clsx from "clsx";

import { workExperienceHighlightsBlockLayoutConfig } from "../../../molecules/work-experience-block/workExperienceHighlightsBlockLayout.config";

const { blockContainer, blockHeading, bodyItemsContainer, bodyItemContainer, ctaClass } =
  workExperienceHighlightsBlockLayoutConfig;

const WorkExperienceHighlightsBlockSkeleton = ({ variant = "home", showCTA = false }) => {
  const resolvedBlockContainer = clsx(
    blockContainer.base,
    variant === "home" ? blockContainer.home : blockContainer.workExperience,
  );

  const resolvedBodyItemContainer = clsx(
    bodyItemContainer.base,
    variant === "home" ? bodyItemContainer.home : bodyItemContainer.workExperience,
  );

  return (
    <div className={resolvedBlockContainer}>
      <div className={clsx(blockHeading)}>
        <div className={clsx(bodyItemsContainer)}>
          <div className={clsx(bodyItemsContainer)}>
            <div className={resolvedBodyItemContainer}>
              <div className="skeleton h-4 w-52 rounded" />

              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-11/12 rounded" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-10/12 rounded" />
                <div className="skeleton h-4 w-4/5 rounded" />
                <div className="skeleton h-4 w-3/4 rounded" />
              </div>
            </div>
          </div>

          {/* CTA */}
          {showCTA && (
            <div className={clsx(ctaClass)}>
              <div className="skeleton h-10 w-36 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceHighlightsBlockSkeleton;
