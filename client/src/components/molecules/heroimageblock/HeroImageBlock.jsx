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
    const outerShellClasses = `
        overflow-hidden
        relative w-full flex justify-center
        max-w-(--size-block-wrapper-mobile-max-width)
        sm:max-w-(--size-block-wrapper-tablet-max-width)
        lg:max-w-(--size-block-wrapper-desktop-max-width)
        rounded-(--radius-hero-image-block-base)
       
        `;

        const imageClasses = `
        w-full
        max-w-(--size-image-mobile-max-width)
        sm:max-w-(--size-image-tablet-max-width)
        lg:max-w-(--size-image-desktop-max-width)
        object-cover
        `;

    return (
        <div
        className={clsx(
            outerShellClasses,
            aspect !== "auto" && `aspect-${aspect}`,
            className,
        )}
        {...props}
        >
            <img
            src={src}
            alt={alt}
            className={clsx(imageClasses)}
            loading={loading}
            />
        </div>
    );
};

export default HeroImageBlock;