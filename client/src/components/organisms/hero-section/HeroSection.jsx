import React from "react";
import clsx from "clsx";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";

const heroSectionShellClasses = `
    overflow-hidden items-center justify-center
    w-full flex flex-col sm:flex-row lg:flex-row 
    sm:max-w-(--size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)

    px-(--spacing-section-wrapper-mobile-padding-x)
    sm:px-(--spacing-section-wrapper-tablet-padding-x)
    lg:px-(--spacing-section-wrapper-desktop-padding-x)

    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const HeroSecion = ({
    variant = "homeHero", // homeHero / aboutHero / ..
    data,
    className,
    ...props
}) => {
    const resolvedRow = data.rows.find(row => row?.type === variant);
    const blocks = resolvedRow.blocks;

    return (
        <div
            className={clsx(
                heroSectionShellClasses,
                className
            )}
            {...props}
        >

            {/* Blocks */}
            {Array.isArray(blocks) && blocks.length > 0 && (
                blocks
                    .filter(block => block.enabled)
                    .sort((a, b) => a.order - b.order)
                    .map(block => (<BlockRenderer key={block.id} block={block} />))
            )}
        </div>
    );
};

export default HeroSecion;