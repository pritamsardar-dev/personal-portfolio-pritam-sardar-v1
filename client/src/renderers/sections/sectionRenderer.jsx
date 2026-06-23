import { useAuth } from "../../hooks/useAuth";
import useAdminEditor from "../../hooks/useAdminEditor";

import { SECTION_MAP } from "./sectionMap";

const SectionRenderer = ({
  section,
  apiData,
  view,
  variant,
  isLoading,
  isFilterLoading,
  mode,
  size,
  imageid,
  ui,
  handlers,
  state,
}) => {
  const { isAuthenticated } = useAuth();
  const { isPreviewMode, activeSection, draftData } = useAdminEditor();

  if (!section) return null;

  const viewKey = view || section?.type;
  const Component = SECTION_MAP[viewKey];

  if (!Component) {
    console.warn(`[SectionRenderer] Unknown section type: ${viewKey}`);
    return null;
  }

  // Apply live draft override when preview mode is active for this section
  let finalData = section;

  if (isAuthenticated && isPreviewMode && activeSection && activeSection === section?.id) {
    finalData = draftData || section;
  }

  return (
    <Component
      variant={variant}
      mode={mode}
      size={size}
      imageid={imageid}
      data={finalData}
      apiData={apiData}
      isLoading={isLoading}
      isFilterLoading={isFilterLoading}
      ui={ui}
      handlers={handlers}
      state={state}
    />
  );
};

export default SectionRenderer;
