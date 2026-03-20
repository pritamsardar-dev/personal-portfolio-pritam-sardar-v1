import { useRef, useMemo } from "react";
import { RefsContext } from "../context/RefsContext";

const RefsProvider = ({ children }) => {
  const formToggleInProgressRef = useRef(false);

  // Memoize the value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({
    formToggleInProgressRef,
  }), []);

  return (
    <RefsContext.Provider value={contextValue}>
      {children}
    </RefsContext.Provider>
  );
};

export default RefsProvider;