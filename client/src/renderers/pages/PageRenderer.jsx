import React from "react";
import SectionRenderer from "../sections/sectionRenderer";

const sectionGapClasses = `
  flex flex-col w-full items-center justify-center
  gap-(--spacing-section-wrapper-mobile-padding-y)
  sm:gap-(--spacing-section-wrapper-tablet-padding-y)
  lg:gap-(--spacing-section-wrapper-desktop-padding-y)
`;

const PageRenderer = ({
  data,
  mode,
  size,
  imageid,
  ui,
  handlers,
  state,
}) => {
  // Safety guard
  if (!data || !data.enabled) return null;

  // Resolve sections safely
  const sections = Array.isArray(data.sections)
    ? data.sections
        .filter(section => section?.enabled && section?.ref)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    : [];

  return (
    <main id={data.id} className={sectionGapClasses}>
      {sections.map((sectionWrapper) => (
        <SectionRenderer
          key={`${sectionWrapper.ref.id}-${sectionWrapper.order}`}
          section={sectionWrapper.ref}
          view={sectionWrapper.view}
          variant={sectionWrapper.variant}
          mode={mode}
          size={size}
          imageid={imageid}
          ui={ui}
          handlers={handlers}
          state={state}
        />
      ))}
    </main>
  );
};

export default PageRenderer;