import { useNavigate } from "react-router-dom";

// Handles CTA actions including scroll, navigate, download, and external links.
// Supports dynamic WhatsApp and mailto construction from optional payload.
export const useCTA = () => {
  const navigate = useNavigate();

  const handleCTA = (cta, dynamicValue, payload) => {
    switch (cta.action) {
    case "scroll": {
      const el = document.getElementById(cta.target);
      if (!el) return;

      // 16px above the element
      const offset = 16;

      // Get element position relative to document
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;

      // Scroll to element minus offset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      break;
    }

    case "navigate": {
      const target = dynamicValue ? `${cta.target}/${dynamicValue}` : cta.target;

      navigate(target);
      break;
    }

    case "download": {
      window.open(cta.src || cta.target, "_blank");
      break;
    }

    case "external": {
      let target;

      // Build dynamic message for WhatsApp or mailto from payload
      if (payload) {
        if (cta.type === "whatsapp" && cta.phone) {
          const messageParts = [];
          if (payload.name) messageParts.push(`Name: ${payload.name}`);
          if (payload.email) messageParts.push(`Email: ${payload.email}`);
          if (payload.subject) messageParts.push(`Subject: ${payload.subject}`);
          if (payload.message) messageParts.push(`Message: ${payload.message}`);
          const combinedMessage = messageParts.join("\n");
          target = `https://wa.me/${cta.phone}?text=${encodeURIComponent(combinedMessage)}`;
        } else if (cta.type === "email" && cta.email) {
          const emailSubject = payload.subject || "No Subject";

          const bodyParts = [];
          if (payload.name) bodyParts.push(`Name: ${payload.name}`);
          if (payload.email) bodyParts.push(`Email: ${payload.email}`);
          if (payload.message) bodyParts.push(`Message: ${payload.message}`);

          // Use %0A for line breaks for broader email client compatibility
          const emailBody = bodyParts.join("%0A");

          target = `mailto:${cta.email}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
        } else {
          // Fallback for external links with dynamicValue
          target = dynamicValue || cta.target;
        }
      } else {
        target = dynamicValue || cta.target;
      }

      if (!target) return;

      // Tel and mailto open in same window, all others open in new tab
      if (target.startsWith("tel:") || target.startsWith("mailto:")) {
        window.location.href = target;
      } else {
        window.open(target, "_blank", "noopener,noreferrer");
      }

      break;
    }

    default:
      break;
    }
  };

  return { handleCTA };
};
