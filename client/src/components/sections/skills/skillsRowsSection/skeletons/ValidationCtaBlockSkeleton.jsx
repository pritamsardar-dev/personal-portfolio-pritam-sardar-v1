import clsx from "clsx";

import { validationCtaBlockLayoutConfig } from "../validationCtaBlockLayout.config";

const {
  blockContainer,
  subHeadingContainer,
  buttonsContainer,
  bodyItemContainer,
  bodyItemsContainer,
} = validationCtaBlockLayoutConfig;

const ValidationCtaBlockSkeleton = ({ variant = "atAGlance" }) => {
  const resolvedBlockContainer = clsx(
    blockContainer.base,
    variant === "atAGlance" ? blockContainer.atAGlance : blockContainer.skillsRow,
  );

  return (
    <div className={resolvedBlockContainer}>
      <div className={clsx(bodyItemsContainer)}>
        {[1].map((item) => (
          <div key={item} className={clsx(bodyItemContainer)}>
            {/* Subheading */}
            {variant === "atAGlance" && <div className={clsx(subHeadingContainer)}>
              <div className="skeleton h-4 w-40 rounded" />
              <div className="skeleton h-4 w-120 rounded" />
            </div>}

            {/* CTA Buttons */}
            <div className={clsx(buttonsContainer)}>
              <div className="skeleton h-9 w-32 rounded-full" />
              <div className="skeleton h-9 w-28 rounded-full" />
              <div className="skeleton h-9 w-32 rounded-full" />
              <div className="skeleton h-9 w-28 rounded-full" />
              <div className="skeleton h-9 w-28 rounded-full" />
              <div className="skeleton h-9 w-28 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidationCtaBlockSkeleton;
