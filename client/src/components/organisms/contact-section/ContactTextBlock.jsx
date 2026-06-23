import { useState, useEffect, useRef } from "react";

import clsx from "clsx";

import { useCTA } from "../../../hooks/useCTA";

import {
  MailIcon,
  MailIconType,
  BrandGithubIcon,
  BrandGithubIconType,
  BrandLinkedinIcon,
  BrandLinkedinIconType,
  MapPinIcon,
  MapPinIconType,
  PhoneIcon,
  PhoneIconType,
  FileCvIcon,
  FileCvIconType,
  BrandWhatsappIcon,
  BrandWhatsappIconType,
  CopyIcon,
  CopyIconType,
  CheckIcon,
} from "../../../assets/icons/system";
import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import { contactTextBlockLayoutConfig } from "./contactTextBlockLayout.config";

import TooltipButton from "../../atoms/tooltip/TooltipButton";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const {
  outerContainer: outerContainerClasses,
  heading2ToBody: heading2ToBodyClasses,
  itemToItem: itemToItemClasses,
  listItem: listItemClasses,
} = contactTextBlockLayoutConfig;

const contactIcons = {
  "contact-phone": {
    svg: PhoneIcon,
    type: PhoneIconType,
  },
  "contact-email": {
    svg: MailIcon,
    type: MailIconType,
  },
  "contact-whatsapp": {
    svg: BrandWhatsappIcon,
    type: BrandWhatsappIconType,
  },
  "contact-github": {
    svg: BrandGithubIcon,
    type: BrandGithubIconType,
  },
  "contact-linkedin": {
    svg: BrandLinkedinIcon,
    type: BrandLinkedinIconType,
  },
  "contact-resume": {
    svg: FileCvIcon,
    type: FileCvIconType,
  },
  "contact-location": {
    svg: MapPinIcon,
    type: MapPinIconType,
  },
};

// CMS driven contact information block.
// Renders contact links with copy to clipboard and scroll into view highlight.
const ContactTextBlock = ({ data = {}, className, ...props }) => {
  const { id, enabled = true, alignment, heading, description, contactLinks } = data;

  const blockRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [copiedItems, setCopiedItems] = useState({});

  // Briefly highlight links when block enters viewport
  useEffect(() => {
    if (!blockRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          setIsInView(true);
          setTimeout(() => setIsInView(false), 3000);
        }
      },
      { threshold: [0.5] },
    );

    observer.observe(blockRef.current);

    return () => observer.disconnect();
  }, []);

  const { handleCTA } = useCTA();

  const handleCopy = async (item) => {
    // Use label for phone/email, target for others
    const textToCopy =
      item.id === "contact-phone" || item.id === "contact-email" ? item.label : item.target;

    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);

      setCopiedItems((prev) => ({ ...prev, [item.id]: true }));

      setTimeout(() => {
        setCopiedItems((prev) => ({ ...prev, [item.id]: false }));
      }, 1200);
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  };

  if (!enabled) return null;

  return (
    <div ref={blockRef} id={id} className={clsx(outerContainerClasses, className)} {...props}>
      {/* Heading and Description */}
      <div className={heading2ToBodyClasses}>
        {heading && <Text {...heading} className={`text-${alignment?.heading}`} />}
        {description && <Text {...description} className={`text-${alignment?.body}`} />}
      </div>

      {/* Contact Links */}
      {((Array.isArray(contactLinks) && contactLinks.length > 0) || description) && (
        <div className={clsx(itemToItemClasses)}>
          {contactLinks.map((item) => (
            <div key={item.id} className={listItemClasses}>
              {/* Main CTA Button */}
              <TooltipButton label={item?.tooltip} position="right">
                <Button
                  variant={item?.variant}
                  iconLeft={contactIcons[item?.id]?.svg}
                  iconLeftType={contactIcons[item?.id]?.type}
                  iconRight={item?.icon ? ctaIconMap[item.icon] : null}
                  onClick={() => handleCTA(item)}
                  className={clsx(
                    isInView && [
                      "!decoration-(--color-text-primary)",
                      "!text-(--color-text-primary)",
                      "transition-all duration-3000 ease-in-out",
                    ],
                  )}
                >
                  <span className="select-text">{item?.label}</span>
                </Button>
              </TooltipButton>

              {/* Copy Button and Feedback */}
              <div
                className="relative flex items-center transition-all duration-300"
                onClick={() => handleCopy(item)}
              >
                {copiedItems[item.id] ? (
                  <div className="flex items-center gap-1">
                    <CheckIcon className="shrink-0 w-4 h-4 fill-none stroke-current stroke-(length:--border-icon-base-width) text-(--color-feedback-success-icon)" />
                    <Text variant="labelDefault" text={`${item?.copyMessage}`} />
                  </div>
                ) : (
                  <TooltipButton label="Copy" position="right">
                    <Button
                      variant="linkSmall"
                      size="compact"
                      iconLeft={CopyIcon}
                      iconLeftType={CopyIconType}
                    />
                  </TooltipButton>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactTextBlock;
