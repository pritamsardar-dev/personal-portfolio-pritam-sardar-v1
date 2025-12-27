import React, { useState } from "react";
import clsx from "clsx";
import FormField from "../../atoms/formfield/FormField";
import Button from "../../atoms/button/Button";
import ScrollableFilterRow from "./ScrollableFilterRow";
import { DropdownIcon } from "../../../assets/icons/system";
import { useForm } from "react-hook-form";

const outerShellClasses = `
    w-full flex flex-col sm:flex-row lg:flex-row justify-between 
    max-w-(--size-section-wrapper-mobile-max-width);
    sm:max-w-(--size-section-wrapper-tablet-max-width);
    lg:max-w-(--size-section-wrapper-desktop-max-width);
    px-(--spacing-section-wrapper-mobile-padding-x);
    sm:px-(--spacing-section-wrapper-tablet-padding-x);
    lg:px-(--spacing-section-wrapper-desktop-padding-x);
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const interactiveRowClasses = `
    flex shrink-0
    gap-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const interactiveVerticalClasses = `
    relative flex flex-col flex-1 min-w-0
    gap-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const FilterBarSection = ({
    config,
    className,
    ...props
}) => {
    const {
        selectProps,
        clearButtonProps,
        primaryFiltersProps,
        secondaryFiltersProps,
    } = config;
    const { control } = useForm();

    const defaultPrimaryId = primaryFiltersProps?.[0]?.id;
    const [primaryActiveIds, setPrimaryActiveIds] = useState(
        defaultPrimaryId ? [defaultPrimaryId] : []
    );
    const [secondaryActiveIds, setSecondaryActiveIds] = useState([]);

    return (
      <div className={clsx(outerShellClasses, className)} {...props}>
        <div className={clsx(interactiveVerticalClasses)}>
  
          <ScrollableFilterRow
            items={primaryFiltersProps}
            selectionMode="single"
            activeIds={primaryActiveIds}
            onChange={setPrimaryActiveIds}
          />

          <ScrollableFilterRow
            items={secondaryFiltersProps}
            selectionMode="multiple"
            activeIds={secondaryActiveIds}
            onChange={setSecondaryActiveIds}
          />
        </div>

        <div className={clsx(interactiveRowClasses)}>
          <FormField {...selectProps} control={control} />
          <Button {...clearButtonProps} />
        </div>
      </div>
  );
};

export default FilterBarSection;