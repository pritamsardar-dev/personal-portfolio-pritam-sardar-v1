import { useRef, useMemo } from "react";

import { RefsContext } from "../context/RefsContext";

const RefsProvider = ({ children }) => {
  const formToggleInProgressRef = useRef(false);

  // Memoized to prevent unnecessary re-renders of context consumers
  const contextValue = useMemo(
    () => ({
      formToggleInProgressRef,
    }),
    [],
  );

  return <RefsContext.Provider value={contextValue}>{children}</RefsContext.Provider>;
};

export default RefsProvider;
