import React from "react";

import clsx from "clsx";

import { heroSectionShellClasses } from "./heroSectionLayout.config";

import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import HeroSectionSkeleton from "./skeletons/HeroSectionSkeleton";

const HeroSection = ({ variant = "homeHero", data, isLoading, className }) => {
  if (isLoading) {
    return <HeroSectionSkeleton />;
  }

  const resolvedRow = data?.rows?.find((row) => row?.type === variant);
  const blocks = resolvedRow?.blocks;

  return (
    <div id={data?.id} className={clsx(heroSectionShellClasses, className)}>
      {/* Blocks */}
      {Array.isArray(blocks) &&
        blocks.length > 0 &&
        blocks
          .filter((block) => block.enabled)
          .sort((a, b) => a.order - b.order)
          .map((block) => <BlockRenderer key={block.id} block={block} variant={variant} />)}
    </div>
  );
};

export default HeroSection;
