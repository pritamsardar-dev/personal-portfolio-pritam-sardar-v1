import clsx from "clsx";

const gapClasses = `
  gap-(--spacing-navigation-link-group-mobile-gap-vertical)
  sm:gap-(--spacing-navigation-link-group-tablet-gap)
  lg:gap-(--spacing-navigation-link-group-desktop-gap)
`;

const NavigationListSkeleton = ({ splitLastItem = true }) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col sm:flex-row lg:flex-row",
        "sm:items-center lg:items-center",
        gapClasses,
      )}
    >
      {/* Main Nav Items */}
      <ul
        className={clsx(
          "flex flex-col sm:flex-row lg:flex-row",
          "sm:items-center lg:items-center",
          "sm:flex-1 sm:justify-center",
          gapClasses,
        )}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <li key={i}>
            <div className="skeleton h-8 w-20 rounded-full" />
          </li>
        ))}
      </ul>

      {/* CTA Last Item */}
      {splitLastItem && (
        <div className="flex">
          <div className="skeleton h-9 w-24 rounded-xl" />
        </div>
      )}
    </div>
  );
};

export default NavigationListSkeleton;
