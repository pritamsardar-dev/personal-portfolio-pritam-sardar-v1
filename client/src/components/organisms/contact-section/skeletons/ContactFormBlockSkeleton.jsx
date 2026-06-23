import clsx from "clsx";

import { contactFormBlockLayoutConfig } from "../contactFormBlockLayout.config";

const { outerContainer, container, heading2ToBody, itemToItem, buttons } =
  contactFormBlockLayoutConfig;

const ContactFormBlockSkeleton = () => {
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

      {/* Form Card */}
      <div className={clsx(container)}>
        {/* Form Fields */}
        <div className={clsx(itemToItem)}>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-20 rounded" />
            <div className="skeleton h-10 w-full rounded-(--radius-card-wrapper-base)" />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-20 rounded" />
            <div className="skeleton h-10 w-full rounded-(--radius-card-wrapper-base)" />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-20 rounded" />
            <div className="skeleton h-10 w-full rounded-(--radius-card-wrapper-base)" />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-20 rounded" />
            <div className="skeleton h-28 w-full rounded-(--radius-card-wrapper-base)" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="skeleton h-10 w-full rounded-full sm:w-36" />

        {/* Alt Contact Label */}
        <div className="skeleton h-4 w-40 rounded" />

        {/* Alt Contact Buttons */}
        <div className={clsx(buttons)}>
          <div className="skeleton h-10 w-36 rounded-full" />
          <div className="skeleton h-10 w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactFormBlockSkeleton;
