import clsx from "clsx";

import { footerLayoutConfig } from "../footerLayout.config";

const { listToList: listToListClasses } = footerLayoutConfig;

const FooterNavigationListSkeleton = ({ itemCount = 7 }) => {
  return (
    <div className={clsx(listToListClasses)}>
      {Array.from({ length: itemCount }).map((_, i) => (
        <div key={i} className="skeleton h-4 w-28 rounded" />
      ))}
    </div>
  );
};

export default FooterNavigationListSkeleton;
