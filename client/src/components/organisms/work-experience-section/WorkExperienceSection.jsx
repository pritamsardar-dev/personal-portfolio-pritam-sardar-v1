import React from "react";

import clsx from "clsx";

import { useScrolling } from "../../../hooks/useScrolling";
import { useCTA } from "../../../hooks/useCTA";

import { resolveProps } from "../../../utils/resolveProps";
import { workExperienceSectionLayoutConfig } from "./workExperienceSectionLayout.config";
import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import FilterBarSection from "../filterbar-section/FilterBarSection";
import WorkExperienceSectionSkeleton from "./skeletons/WorkExperienceSectionSkeleton";

const {
  sectionContainer: sectionContainerClasses,
  sectionHeadingWrapper: sectionHeadingWrapperClasses,
  rowsContainer: rowsContainerClasses,
  blocksContainer,
  textAlignMap,
  flexAlignMap,
} = workExperienceSectionLayoutConfig;

// CMS driven Work Experience section.
// Renders heading and blocks with variant and domain prop resolution.
const WorkExperienceSection = ({
  variant = "home", // Variants: home / workExperience
  data = {},
  isLoading,
  apiData,
  className,
}) => {
  const domain = "experience";
  const resolvedByDomain = resolveProps(data, domain);
  const resolvedData = resolveProps(resolvedByDomain, variant);

  const rawRows =
    variant === "home" ? apiData?.experienceFeaturedRows || [] : apiData?.experienceAllRows || [];

  const resolvedRowsByDomain = resolveProps(rawRows, domain);
  const rows = resolveProps(resolvedRowsByDomain, variant);

  const {
    id,
    heading,
    WorkExperienceHomeCtaProps,
    alignment = {
      heading: "center",
      cta: "center",
    },
  } = resolvedData;

  const isScrolling = useScrolling(150);
  const { handleCTA } = useCTA();

  // Disable backdrop blur while scrolling to reduce paint cost
  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-card-container-background-blur)";

  const blocksContainerClasses = clsx(
    blocksContainer.base,
    variant === "home" ? blocksContainer.home : blocksContainer.workExperience,
  );

  const headingAlignClass = textAlignMap[alignment.heading] || textAlignMap.center;
  const ctaAlignClass = flexAlignMap[alignment.cta] || flexAlignMap.center;

  if (isLoading) {
    return <WorkExperienceSectionSkeleton variant={variant} rowCount={1} />;
  }

  return (
    <section id={id} className={clsx(sectionContainerClasses, className)}>
      <div className={sectionHeadingWrapperClasses}>
        {/* Section Heading */}
        {heading && (
          <div className={clsx(headingAlignClass)}>
            <Text {...heading} />
          </div>
        )}

        {/* CMS Driven Blocks */}
        {Array.isArray(rows) && rows.length > 0 && (
          <div className={rowsContainerClasses}>
            {rows
              .filter((row) => row?.enabled !== false && row?.domain === domain)
              .map((row) => (
                <div
                  id={row.id}
                  key={row.id}
                  className={clsx(blocksContainerClasses, backdropBlur)}
                >
                  {Array.isArray(row.blocks) &&
                    row.blocks
                      .filter((block) => block?.enabled !== false)
                      .map((block) => (
                        <BlockRenderer
                          key={block.id}
                          variant={variant}
                          section={resolvedData}
                          row={row}
                          block={block}
                        />
                      ))}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Section CTA */}
      {variant === "home" && WorkExperienceHomeCtaProps && (
        <div className={clsx("w-full flex", ctaAlignClass)}>
          <Button
            variant={WorkExperienceHomeCtaProps.variant}
            label={WorkExperienceHomeCtaProps.label}
            iconRight={
              WorkExperienceHomeCtaProps.icon ? ctaIconMap[WorkExperienceHomeCtaProps.icon] : null
            }
            onClick={() => handleCTA(WorkExperienceHomeCtaProps)}
          />
        </div>
      )}
    </section>
  );
};

export default WorkExperienceSection;
