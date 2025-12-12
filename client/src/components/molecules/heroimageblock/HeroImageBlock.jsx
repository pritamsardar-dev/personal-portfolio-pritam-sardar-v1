import React from "react";
import clsx from "clsx";

const HeroImageBlock = ({
    src,
    alt="",
    aspect="auto",
    loading="lazy",
    className="",
    ...props
}) => {
    const blockClasses = `
        w-full
        h-auto
        max-w-(--size-block-wrapper-mobile-max-width)
        sm:max-w-(--size-block-wrapper-tablet-max-width)
        lg:max-w-(--size-block-wrapper-desktop-max-width)
        rounded-(--radius-hero-image-block-base)
        overflow-hidden
        relative
        `;

    return (
        <div
        className={clsx(
            blockClasses,
            aspect !== "auto" && `aspect-${aspect}`,
            className,
        )}
        {...props}
        >
            <img
            src={src}
            alt={alt}
            className={clsx(
                "w-full h-full object-cover"
            )}
            loading={loading}
            />
        </div>
    );
};

export default HeroImageBlock;