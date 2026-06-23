import useModal from "../../../../hooks/useModal";

import PopupMessageContainer from "../../../molecules/popup-message/PopupMessageContainer";

const getAvailableLinks = (links) => {
  if (!links) return [];

  const map = [
    { key: "liveDemo", label: "Live Demo" },
    { key: "sourceCode", label: "Source Code" },
    { key: "designFile", label: "Design File" },
  ];

  return map
    .map((item) => ({
      label: item.label,
      url: links[item.key]?.url,
    }))
    .filter((link) => link.url);
};

const resolveCtaTarget = (row, ctaId) => {
  if (!row?.links) return null;

  switch (ctaId) {
  case "live-demo-link":
    return row.links.liveDemo;

  case "source-code-link":
    return row.links.sourceCode;

  case "design-file-link":
    return row.links.designFile;

  default:
    return null;
  }
};

export const useLinkCTAHandler = (row) => {
  const { openModal, closeModal } = useModal();

  // Open a dialog popup with optional actions and auto-close timer
  const handlePopupMessage = (title, message, actions = [], autoCloseMs = 10000) => {
    openModal({
      variant: "dialog",
      content: (
        <PopupMessageContainer
          variant="info"
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
  };

  const handleLinkCTA = (item) => {
    const target = resolveCtaTarget(row, item.id);
    if (!target) return;

    const { url, message } = target;

    // Open link directly if available
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // Show popup with fallback links when target URL is missing
    const availableLinks = getAvailableLinks(row?.links);

    const actions = availableLinks.map((link, index) => ({
      id: index + 1,
      variant: index === 0 ? "primary" : "secondary",
      label: link.label,
      onClick: () => window.open(link.url, "_blank"),
    }));

    handlePopupMessage(
      message?.title || "Link Not Available",
      message?.text || "This resource is not available.",
      actions,
    );
  };

  return { handleLinkCTA };
};
