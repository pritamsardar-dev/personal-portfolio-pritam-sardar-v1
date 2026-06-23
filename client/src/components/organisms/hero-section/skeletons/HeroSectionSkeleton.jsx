import React from "react";

import clsx from "clsx";

import { heroSectionShellClasses } from "../heroSectionLayout.config";

import HeroTextBlockSkeleton from "./HeroTextBlockSkeleton";
import HeroImageBlockSkeleton from "./HeroImageBlockSkeleton";

const HeroSectionSkeleton = ({ imageFirst = false, className = "" }) => {
  return (
    <section className={clsx(heroSectionShellClasses, className)}>
      {imageFirst ? (
        <>
          <HeroImageBlockSkeleton />
          <HeroTextBlockSkeleton />
        </>
      ) : (
        <>
          <HeroTextBlockSkeleton />
          <HeroImageBlockSkeleton />
        </>
      )}
    </section>
  );
};

export default HeroSectionSkeleton;
