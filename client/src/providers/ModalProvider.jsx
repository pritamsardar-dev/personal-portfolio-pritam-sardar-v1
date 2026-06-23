import { useState, useCallback } from "react";

import { ModalContext } from "../context/ModalContext";

import Modal from "../components/overlays/modal/Modal";

const ModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = useCallback((config) => {
    setModalConfig(config);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const handleExited = () => {
    setModalConfig(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modalConfig && (
        <Modal
          variant={modalConfig.variant || "dialog"}
          open={open}
          onClose={closeModal}
          onExited={handleExited}
        >
          {modalConfig.content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
