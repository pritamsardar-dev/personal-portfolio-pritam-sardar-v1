import { useContext } from "react";

import { SectionNavReadContext, SectionNavWriteContext } from "../context/SectionNavContext";

export const useSectionNavRead = () => {
  const context = useContext(SectionNavReadContext);
  if (!context) {
    throw new Error("useSectionNavRead must be used inside SectionNavProvider");
  }
  return context;
};

export const useSectionNavWrite = () => {
  const context = useContext(SectionNavWriteContext);
  if (!context) {
    throw new Error("useSectionNavWrite must be used inside SectionNavProvider");
  }
  return context;
};