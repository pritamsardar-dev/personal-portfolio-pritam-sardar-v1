import clsx from "clsx";

const HeroTextBlockSkeleton = () => {
  return (
    <div
      className={clsx(
        "flex flex-col w-full gap-4",
        "px-(--spacing-text-container-mobile-padding-x)",
        "sm:px-(--spacing-text-container-tablet-padding-x)",
        "lg:px-(--spacing-text-container-desktop-padding-x)",
      )}
    >
      <div className="skeleton h-4 w-32 rounded" />

      <div className="flex flex-col gap-3">
        <div className="skeleton h-8 w-3/4 rounded" />
        <div className="skeleton h-8 w-2/3 rounded" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-5/6 rounded" />
      </div>

      <div className="flex gap-3 mt-2">
        <div className="skeleton h-10 w-28 rounded-full" />
        <div className="skeleton h-10 w-28 rounded-full" />
      </div>
    </div>
  );
};

export default HeroTextBlockSkeleton;
