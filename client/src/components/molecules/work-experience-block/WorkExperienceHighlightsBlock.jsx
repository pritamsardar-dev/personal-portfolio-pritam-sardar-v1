import React from "react";

import clsx from "clsx";
import { useNavigate, useLocation } from "react-router-dom";

import { isEnabled } from "../../../utils/normalizeEnabledState/isEnabled";
import { workExperienceHighlightsBlockLayoutConfig } from "./workExperienceHighlightsBlockLayout.config";
import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import ListContentBlock from "../../molecules/list-content-block/ListContentBlock";

const {
  blockContainer,
  blockHeading: blockHeadingClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer,
  ctaClass,
  alignmentMap,
} = workExperienceHighlightsBlockLayoutConfig;

// CMS driven Work Experience highlights block.
// Renders rich body items with highlights, case study notes, and an optional CTA.
// Layout adapts per variant (home / work-experience / caseStudy).
const WorkExperienceHighlightsBlock = ({
  variant = "home",
  data = {},
  row,
  section,
  className,
  ...props
}) => {
  const {
    id,
    enabled = true,
    heading,
    bodyItems = [],
    alignment = {
      heading: "left",
      body: "left",
    },
  } = data;

  const navigate = useNavigate();
  const location = useLocation();

  // Reads the current page source from the URL query string or pathname
  const getPageSource = () => {
    const query = new URLSearchParams(location.search);

    const existingSource = query.get("source");

    if (existingSource) return existingSource;

    const path = location.pathname;

    if (path === "/") return "home";
    if (path.startsWith("/work-experience")) return "work-experience";
    return "unknown";
  };

  const resolveButtonAction = () => {
    const source = getPageSource();
    navigate(`/full-case-study/${row?.id}?source=${source}`);
  };

  const buttonProps = section?.workExperienceHighlightsCtaProps;

  const isCaseStudy = variant === "caseStudy";

  const blockContainerClasses = clsx(
    blockContainer.base,
    variant === "home" ? blockContainer.home : blockContainer.workExperience,
  );

  const resolvedbodyItemContainerClasses = clsx(
    bodyItemContainer.base,
    variant === "home" ? bodyItemContainer.home : bodyItemContainer.workExperience,
  );

  if (!enabled) return null;

  return (
    <div
      id={id}
      className={clsx(
        blockContainerClasses,
        alignmentMap[alignment.body] || alignmentMap.left,
        className,
      )}
      {...props}
    >
      <div className={blockHeadingClasses}>
        {/* Block Heading */}
        {heading && (
          <div className={alignmentMap[alignment.heading] || alignmentMap.left}>
            <Text {...heading} />
          </div>
        )}

        {/* Body Items */}
        {bodyItems.length > 0 && (
          <div className={bodyItemsContainerClasses}>
            {bodyItems
              .filter((item) => isEnabled(item?.enabled))
              .map((item) => (
                <div key={item.id} className={bodyItemsContainerClasses}>
                  <div className={resolvedbodyItemContainerClasses}>
                    {item.heading && <Text {...item.heading} />}

                    {item.overview?.text && <Text {...item.overview} />}

                    <ListContentBlock items={item.highlights} />

                    {item.caseStudyAtAGlance?.text && <Text {...item.caseStudyAtAGlance} />}
                  </div>
                </div>
              ))}

            {/* CTA Hidden On Case Study Variant */}
            {buttonProps && !isCaseStudy && (
              <div className={ctaClass}>
                <Button
                  variant={buttonProps.variant}
                  label={buttonProps.label}
                  iconRight={buttonProps.icon ? ctaIconMap[buttonProps.icon] : null}
                  onClick={resolveButtonAction}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceHighlightsBlock;
