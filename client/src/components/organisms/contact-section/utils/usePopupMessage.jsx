import useModal from "../../../../hooks/useModal";
import PopupMessageContainer from "../../../molecules/popup-message/PopupMessageContainer";

/**
 * Simplified hook to show a popup message modal
 * - Only shows title, message, and default close button
 * - Accepts variant: "success" | "error" | "info"
 * - Auto-close optional (default 0 = no auto-close)
 */
export const usePopupMessage = () => {
  const { openModal, closeModal } = useModal();

  const showMessage = ({ title = "", message = "", variant = "info", autoCloseMs = 0 }) => {
    openModal({
      variant: "dialog",
      content: (
        <PopupMessageContainer
          variant={variant}
          title={{ variant: "heading1Subpage", text: title }}
          message={{ variant: "bodyLarge", text: message }}
          onClose={closeModal}  // only close button
        />
      ),
    });

    if (autoCloseMs > 0) {
      setTimeout(() => closeModal(), autoCloseMs);
    }
  };

  return { showMessage, closeModal };
};