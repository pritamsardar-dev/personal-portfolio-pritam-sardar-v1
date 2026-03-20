import { SECTION_MAP } from "./sectionMap";

const SectionRenderer = ({
  section,
  view,
  variant,
  mode,
  size,
  imageid,
  ui,
  handlers,
  state,
}) => {

  const viewKey = view || section.type;
  const Component = SECTION_MAP[viewKey];

  if (!Component) {
    console.warn(
      `[SectionRenderer] Unknown section type: ${section.type}`
    );
    return null;
  }

  return (
    <Component
      variant={variant}
      mode={mode}
      size={size}
      imageid={imageid}
      data={section}
      ui={ui}
      handlers={handlers}
      state={state}
    />
  );
};

export default SectionRenderer;