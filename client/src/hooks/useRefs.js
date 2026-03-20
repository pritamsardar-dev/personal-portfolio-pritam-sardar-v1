import { useContext } from "react";
import { RefsContext } from "../context/RefsContext";

const useRefs = () => {
  const context = useContext(RefsContext);

  if (!context) {
    throw new Error("useRefs must be used inside a RefsProvider");
  }

  return context;
};

export default useRefs;