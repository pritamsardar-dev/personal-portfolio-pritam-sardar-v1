import React from "react";
import clsx from "clsx";

const HeroImageBlock = ({
    data,
    className="",
    ...props
}) => {
    const {
        src,
        alt="",
        aspect="auto",
        loading="lazy",
    } = data;

    const outerClasses = `
        w-full
        px-(--spacing-text-container-mobile-padding-x)
        sm:px-(--spacing-text-container-tablet-padding-x)
        lg:px-(--spacing-text-container-desktop-padding-x)
    `;

    const outerShellClasses = `
        overflow-hidden
        relative w-full flex justify-center
        sm:max-w-(--size-block-wrapper-tablet-max-width)
        lg:max-w-(--size-block-wrapper-desktop-max-width)

        rounded-(--radius-hero-image-block-base)
    `;

    const imageClasses = `
        w-full
        lg:max-h-[50vh]
        sm:max-w-(--size-image-tablet-max-width)
        lg:max-w-(--size-image-desktop-max-width)
        object-cover
    `;

    return (
        <div className={outerClasses}>
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
        </div>
    );
};

export default HeroImageBlock;