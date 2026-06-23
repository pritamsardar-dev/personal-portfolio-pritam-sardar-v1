import { useState, useCallback, useMemo } from "react";

import { SectionNavWriteContext, SectionNavReadContext } from "../context/SectionNavContext";

export const SectionNavProvider = ({ children }) => {
  const [navSections, setNavSectionsState] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const setNavSections = useCallback((sections) => {
    setNavSectionsState(sections);
    setActiveId(null);
  }, []);

  const writeValue = useMemo(() => ({ setNavSections }), [setNavSections]);

  const readValue = useMemo(
    () => ({ navSections, activeId, setActiveId }),
    [navSections, activeId],
  );

  return (
    <SectionNavWriteContext.Provider value={writeValue}>
      <SectionNavReadContext.Provider value={readValue}>
        {children}
      </SectionNavReadContext.Provider>
    </SectionNavWriteContext.Provider>
  );
};