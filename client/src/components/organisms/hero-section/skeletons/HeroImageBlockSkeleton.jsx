import clsx from "clsx";

const HeroImageBlockSkeleton = () => {
  return (
    <div
      className={clsx(
        "w-full lg:w-auto",
        "px-(--spacing-text-container-mobile-padding-x)",
        "sm:px-(--spacing-text-container-tablet-padding-x)",
        "lg:px-(--spacing-text-container-desktop-padding-x)",
      )}
    >
      <div
        className={clsx("skeleton", "w-full h-[300px]", "rounded-(--radius-hero-image-block-base)")}
      />
    </div>
  );
};

export default HeroImageBlockSkeleton;
