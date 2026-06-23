import clsx from "clsx";

import { contactTextBlockLayoutConfig } from "../contactTextBlockLayout.config";

const { outerContainer, heading2ToBody, itemToItem, listItem } = contactTextBlockLayoutConfig;

const ContactTextBlockSkeleton = () => {
  return (
    <div className={clsx(outerContainer)}>
      {/* Heading and Description */}
      <div className={clsx(heading2ToBody)}>
        <div className="skeleton h-5 w-40 rounded" />
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-10/12 rounded" />
        </div>
      </div>

      {/* Contact Links */}
      <div className={clsx(itemToItem)}>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item} className={clsx(listItem)}>
            <div className="skeleton h-8 w-48 rounded-full" />
            <div className="skeleton h-6 w-6 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTextBlockSkeleton;
