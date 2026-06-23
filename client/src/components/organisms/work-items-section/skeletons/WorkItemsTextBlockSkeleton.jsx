import clsx from "clsx";

import { workItemsTextBlockLayoutConfig } from "../workItemsTextBlockLayout.config";

const {
  textBlockHeading2ToHeading3,
  headerBlock,
  textBlockToBlock,
  textBlockItemToItem,
  textBlockInteractiveToInteractive,
  tagContainer,
} = workItemsTextBlockLayoutConfig;

const WorkItemsTextBlockSkeleton = ({ variant = "collapsed", size = "default" }) => {
  const isCompact = size === "compact";
  const isCollapsed = variant === "collapsed";
  const sizeVariant = isCompact && isCollapsed ? "compact" : "default";

  const resolvedHeading2ToHeading3 = clsx(
    textBlockHeading2ToHeading3.base,
    textBlockHeading2ToHeading3[sizeVariant],
  );
  const resolvedHeaderBlock = clsx(headerBlock.base, headerBlock[sizeVariant]);
  const resolvedTextBlockToBlock = clsx(textBlockToBlock.base, textBlockToBlock[sizeVariant]);
  const resolvedTextBlockItemToItem = clsx(
    textBlockItemToItem.base,
    textBlockItemToItem[sizeVariant],
  );
  const resolvedInteractiveToInteractive = clsx(
    textBlockInteractiveToInteractive.base,
    textBlockInteractiveToInteractive[sizeVariant],
  );
  const resolvedTagContainer = clsx(tagContainer.base, tagContainer[sizeVariant]);

  const paddingClasses = isCompact
    ? "px-(--spacing-text-container-mobile-padding-x)"
    : [
      "px-(--spacing-text-container-mobile-padding-x)",
      "sm:px-(--spacing-text-container-tablet-padding-x)",
      "lg:px-(--spacing-text-container-desktop-padding-x)",
    ];

  return (
    <div
      className={clsx("relative w-full flex flex-col", paddingClasses, resolvedTextBlockToBlock)}
    >
      <div className={resolvedHeading2ToHeading3}>
        {/* Heading */}
        <div className={resolvedHeaderBlock}>
          <div className="skeleton h-5 w-3/4 rounded" />
        </div>

        <div className={resolvedTextBlockToBlock}>
          <div className={resolvedTextBlockItemToItem}>
            {/* Tags */}
            <div className={resolvedTagContainer}>
              {[1, 2, 3].map((tag) => (
                <div key={tag} className="skeleton h-7 w-20 rounded-full shrink-0" />
              ))}
            </div>

            {/* Overview */}
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-10/12 rounded" />
              <div className="skeleton h-4 w-4/5 rounded" />
            </div>
          </div>

          {/* View Details and Full Case Study CTAs */}
          <div className={resolvedInteractiveToInteractive}>
            <div className="skeleton h-9 w-28 rounded-full" />
            <div className="skeleton h-9 w-32 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItemsTextBlockSkeleton;
