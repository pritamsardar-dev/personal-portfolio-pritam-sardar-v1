import { useNavigate } from "react-router-dom";

export const useCTA = () => {
  const navigate = useNavigate();

  /**
   * cta: { action, target, type?, phone?, email? }
   * dynamicValue: optional string to append for navigate/other actions
   * payload: optional object (e.g., { name, email, subject, message }) for external links
   */
  const handleCTA = (cta, dynamicValue, payload) => {
    switch (cta.action) {

      case "scroll": {
        const el = document.getElementById(cta.target);
        if (!el) return;

        // mandatory small offset
        const offset = 16; // 16px above the element

        // get element position relative to document
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;

        // scroll to element minus offset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });

        break;
      }

      case "navigate": {
        const target = dynamicValue
          ? `${cta.target}/${dynamicValue}`
          : cta.target;

        navigate(target);
        break;
      }

      case "download": {
        window.open(cta.target, "_blank");
        break;
      }

      case "external": {
        let target;

        // Handle optional payload for dynamic messages
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

              // Use %0A for line breaks (more reliable across clients)
              const emailBody = bodyParts.join("%0A");

              target = `mailto:${cta.email}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
            } else {
            // fallback for external links with dynamicValue
            target = dynamicValue || cta.target;
          }
        } else {
          target = dynamicValue || cta.target;
        }

        if (!target) return; // still guard if target is undefined

        if (target.startsWith("tel:") || target.startsWith("mailto:")) {
          window.location.href = target;
        } else {
          // WP link, external web links
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