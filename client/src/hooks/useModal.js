import { useContext } from "react";

import { ModalContext } from "../context/ModalContext";

// Provides access to modal open/close state and controls
const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return context;
};

export default useModal;
