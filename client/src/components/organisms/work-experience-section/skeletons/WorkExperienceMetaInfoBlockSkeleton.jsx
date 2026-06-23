import clsx from "clsx";

import { workExperienceMetaInfoBlockLayoutConfig } from "../../../molecules/work-experience-block/workExperienceMetaInfoBlockLayout.config";

const { blockContainer, bodyItemsContainer, cardContainer, techStackContainer } =
  workExperienceMetaInfoBlockLayoutConfig;

const WorkExperienceMetaInfoBlockSkeleton = ({ variant = "home" }) => {
  const resolvedBlockContainer = clsx(
    blockContainer.base,
    variant === "home" ? blockContainer.home : blockContainer.workExperience,
  );

  // Home gets card shadow and border; workExperience is plain with no card chrome
  const resolvedCardContainer = clsx(
    cardContainer.base,
    variant === "home" ? cardContainer.home : cardContainer.workExperience,
  );

  const cardCount = 1;

  return (
    <div className={resolvedBlockContainer}>
      <div className={clsx(bodyItemsContainer)}>
        {Array.from({ length: cardCount }).map((_, i) => (
          <div key={i} className={resolvedCardContainer}>
            <div className="skeleton h-4 w-48 rounded" />
            <div className="skeleton h-4 w-36 rounded" />

            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-5/6 rounded" />
              <div className="skeleton h-4 w-4/6 rounded" />
            </div>

            <div className={clsx(techStackContainer)}>
              {[1, 2, 3, 4, 5].map((tag) => (
                <div key={tag} className="skeleton h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceMetaInfoBlockSkeleton;
