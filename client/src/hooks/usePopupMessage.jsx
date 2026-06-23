import { useCallback } from "react";

import useModal from "./useModal";

import PopupMessageContainer from "../components/molecules/popup-message/PopupMessageContainer";

// Simplified hook to show a popup message modal.
// Accepts variant (success, error, info) with optional auto close delay.
export const usePopupMessage = () => {
  const { openModal, closeModal } = useModal();

  const showMessage = useCallback(
    ({ title = "", message = "", variant = "info", actions, autoCloseMs = 0 }) => {
      openModal({
        variant: "dialog",
        content: (
          <PopupMessageContainer
            variant={variant}
            title={{ variant: "heading1Subpage", text: title }}
            message={{ variant: "bodyLarge", text: message }}
            actions={actions}
            onClose={closeModal}
          />
        ),
      });

      if (autoCloseMs > 0) {
        setTimeout(() => closeModal(), autoCloseMs);
      }
    },
    [closeModal, openModal],
  );

  return { showMessage, closeModal };
};
