/**
 * Role: CMS-driven contact information block
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render an optional block heading and description
 *   - Render a list of contact/action links as buttons
 *   - Respect CMS enable/disable and content ordering
 * Guardrails:
 *   - Fully data-driven, no hardcoded contact logic
 *   - Presentation-only (no navigation or side effects)
 *   - Safe for reuse across pages and layouts
 */

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import { useCTA } from "../../../hooks/useCTA";
import { CopyClipboardIcon, CopyClipboardIconType } from "../../../assets/icons/system";

const outerContainerClasses = `
    relative  flex flex-col
    w-full
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const heading2ToBodyClasses = `
    w-full flex flex-col 
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const itemToItemClasses = `
    w-full flex flex-col 
    gap-(--spacing-item-item-desktop-gap)
    sm:gap-(--spacing-item-item-desktop-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const listItemClasses = `
    relative flex items-center gap-2 
    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
`

const ContactTextBlock = ({
    data = {},
    className,
    ...props
}) => {
    const {
        id,
        enabled = true,
        alignment,
        heading, 
        description, 
        contactLinks
    } = data;

    const blockRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    console.log(isInView)

    useEffect(() => {
        if (!blockRef.current) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio >= 0.50) {
            setIsInView(true);

            // Reset after 3000ms
            setTimeout(() => setIsInView(false), 3000);
            }
        },
        { threshold: [0.50] }
        );

        observer.observe(blockRef.current);

        return () => observer.disconnect();
    }, []);

    const { handleCTA } = useCTA();

    const [copiedItems, setCopiedItems] = useState({});

    const handleCopy = async (item) => {
        // Use label for phone/email, target for others
        const textToCopy =
            item.id === "contact-phone" || item.id === "contact-email"
                ? item.label
                : item.target;

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
        <div
            ref={blockRef}
            id={id}
            className={clsx(
                outerContainerClasses,
                className
            )}
            {...props}
        > 
            <div className={heading2ToBodyClasses}>
                {/* Block title */}
                {heading && <Text {...heading} className={`text-${alignment?.heading}`} />}
                {/* Block desciptions */}
                {description && <Text {...description} className={`text-${alignment?.body}`} />}
            </div>

            {(Array.isArray(contactLinks) && contactLinks.length > 0 || description) &&
                <div className={clsx(itemToItemClasses)}>
                    {contactLinks.map((item) => (
                        <div key={item.id} className={listItemClasses}>
                            {/* Main CTA button */}
                            <Button
                                variant={item?.variant}
                                iconLeft={item?.iconLeft}
                                iconLeftType={item?.iconLeftType}
                                onClick={() => handleCTA(item)}
                                className={clsx(
                                    isInView 
                                        ? `!decoration-(--color-text-primary) 
                                        !text-(--color-text-primary)
                                        transition-all duration-3000 ease-in-out
                                        `
                                        : ""
                                )}
                            >
                                <span className="select-text">
                                    {item?.label}
                                </span>
                            </Button>

                            {/* Copy icon / feedback */}
                            <div className="relative flex items-center transition-all duration-300"
                            onClick={() => handleCopy(item)}
                            >
                                {copiedItems[item.id] ? 
                                    <Text
                                        variant="labelDefault"
                                        text={`✅ ${item?.copyMessage}`} 
                                    /> 

                                    : <Button
                                        variant="linkSmall"
                                        size="compact"
                                        iconLeft={CopyClipboardIcon}
                                        iconLeftType={CopyClipboardIconType}
                                        /> 
                                }
                            </div>
                        </div>
                        ))}
                </div>
            }
        </div>
    );
};

export default ContactTextBlock;