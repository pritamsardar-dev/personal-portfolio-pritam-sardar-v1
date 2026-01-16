import React from "react";
import clsx from "clsx";
import Button from "../../../atoms/button/Button";
import Text from "../../../atoms/text/Text";

const outerContainerClasses = `
    w-full flex flex-wrap justify-center
`;

const innerContainerClasses = `
    flex flex-wrap
    gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const disabledButtonClasses = `
    pointer-events-none
    opacity-60
`;

const Pagination = ({
    currentPage,
    totalPages = 10,
    maxVisiblePages = 3,
    showPrevNext = true,
    showEllipsis = true,
    prevLabel = "Prev",
    nextLabel = "Next",
    onPageChange,
    className,
    ...props
}) => {
    const half = Math.floor(maxVisiblePages / 2);
    const start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    const pages = Array.from(
        { length: end - start + 1 },
        (_, index) => start + index
    );

    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;

    return (
        <div
            className={clsx(outerContainerClasses, className)}
            {...props}
        >
            <div className={clsx(innerContainerClasses)}>
                {showPrevNext && (
                    <Button
                        variant="overlay"
                        label={prevLabel}
                        aria-disabled={isPrevDisabled}
                        disabled={isPrevDisabled}
                        className={clsx(isPrevDisabled && disabledButtonClasses)}
                        onClick={() =>
                            !isPrevDisabled && onPageChange(currentPage - 1)
                        }
                    />
                )}

                {showEllipsis && start > 1 && (
                    <Text variant="bodyLarge" text="..." />
                )}

                {pages.map((page) => {
                    const isActive = page === currentPage;

                    return (
                        <Button
                            key={page}
                            variant="overlay"
                            label={page}
                            aria-current={isActive ? "page" : undefined}
                            className={clsx(
                                isActive &&
                                    "bg-[var(--color-button-overlay-background-active)] text-[var(--color-button-overlay-text-active)]"
                            )}
                            onClick={() => onPageChange(page)}
                        />
                    );
                })}

                {showEllipsis && end < totalPages && (
                    <Text variant="bodyLarge" text="..." />
                )}

                {showPrevNext && (
                    <Button
                        variant="overlay"
                        label={nextLabel}
                        aria-disabled={isNextDisabled}
                        disabled={isNextDisabled}
                        className={clsx(isNextDisabled && disabledButtonClasses)}
                        onClick={() =>
                            !isNextDisabled && onPageChange(currentPage + 1)
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Pagination;
