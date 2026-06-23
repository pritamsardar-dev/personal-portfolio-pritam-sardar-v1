import clsx from "clsx";

const WorkItemsCarouselBlockSkeleton = ({ size = "default" }) => {
  return (
    <div
      className={clsx(
        "relative w-full z-0",
        size === "compact"
          ? "px-(--spacing-text-container-mobile-padding-x)"
          : [
            "px-(--spacing-text-container-mobile-padding-x)",
            "sm:px-(--spacing-text-container-tablet-padding-x)",
            "lg:px-(--spacing-text-container-desktop-padding-x)",
          ],
      )}
    >
      <div className="skeleton w-full aspect-16/9 rounded-(--radius-image-base)" />
    </div>
  );
};

export default WorkItemsCarouselBlockSkeleton;
