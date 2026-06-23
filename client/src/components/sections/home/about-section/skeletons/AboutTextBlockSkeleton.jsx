import clsx from "clsx";

import { aboutTextBlockLayoutConfig } from "../aboutTextBlockLayout.config";

const { blockContainer, bodyItemsContainer, bodyItemContainer } = aboutTextBlockLayoutConfig;

const AboutTextBlockSkeleton = () => {
  return (
    <div className={clsx(blockContainer)}>
      {/* Heading */}
      <div className="skeleton h-5 w-40 rounded" />

      {/* Body Items */}
      <div className={clsx(bodyItemsContainer)}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className={clsx(bodyItemContainer)}>
            {/* Item Heading */}
            <div className="skeleton h-4 w-52 rounded" />

            {/* Paragraph */}
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-11/12 rounded" />
              <div className="skeleton h-4 w-4/5 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTextBlockSkeleton;
