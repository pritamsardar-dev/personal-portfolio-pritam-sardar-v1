import React, { useEffect } from "react";
import clsx from "clsx";
import FormField from "../../atoms/formfield/FormField";
import Button from "../../atoms/button/Button";
import ScrollableFilterRow from "./ScrollableFilterRow";
import { useForm } from "react-hook-form";

const outerShellClasses = `
    w-full flex flex-col sm:flex-row lg:flex-row justify-between

    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)

    sm:max-w-(--size-section-wrapper-tablet-max-width);
    lg:max-w-(--size-section-wrapper-desktop-max-width);

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
  data,
  filtersPayload,
  className,
  onFilterChange,
  ...props
}) => {

  const {
    selectProps,
    clearButtonProps,
    scopeFiltersProps,
    primaryFiltersProps,
    secondaryFiltersProps,
  } = data;

  const { control, reset } = useForm({
    defaultValues: {
      sort: filtersPayload?.sort ?? "top"
    }
  });

  const defaultPrimaryKey = primaryFiltersProps?.[0]?.key;
  const defaultScopeKey = scopeFiltersProps?.[0]?.key;

  // Derived state (no useState needed)
  const scopeActiveKeys = filtersPayload?.scope ? [filtersPayload.scope] : [];
  const primaryActiveKeys = filtersPayload?.primary ? [filtersPayload.primary] : [];
  const secondaryActiveKeys = filtersPayload?.secondary ?? [];

  const activePrimaryDomain =
    primaryFiltersProps?.find(p => p.key === filtersPayload?.primary)?.domain ??
    null;

  const emitFilterChange = (override = {}) => {
    onFilterChange?.({
      scope: override.scope ?? scopeActiveKeys?.[0] ?? "all",
      primary: override.primary ?? primaryActiveKeys?.[0] ?? "all",
      secondary: override.secondary ?? secondaryActiveKeys,
      sort: override.sort ?? filtersPayload?.sort ?? "top"
    });
  };

  // Scope change handler
  const handleScopeChange = (keys) => {
    const newScopeKey = keys?.[0] ?? "all";

    emitFilterChange({
      scope: newScopeKey,
      primary: defaultPrimaryKey ?? "all",
      secondary: []
    });
  };

  // Primary change handler
  const handlePrimaryChange = (keys) => {
    const newPrimaryKey = keys?.[0] ?? "all";

    const newPrimaryDomain =
      newPrimaryKey === "all"
        ? "all"
        : primaryFiltersProps.find(p => p.key === newPrimaryKey)?.domain;

    let newSecondary = secondaryActiveKeys;

    if (
      activePrimaryDomain &&
      newPrimaryDomain &&
      activePrimaryDomain !== "all" &&
      newPrimaryDomain !== "all" &&
      activePrimaryDomain !== newPrimaryDomain
    ) {
      newSecondary = [];
    }

    emitFilterChange({
      primary: newPrimaryKey,
      secondary: newPrimaryDomain !== "all" ? [] : newSecondary
    });
  };

  const handleClearFilters = () => {
    reset();

    emitFilterChange({
      scope: defaultScopeKey ?? "all",
      primary: defaultPrimaryKey ?? "all",
      secondary: [],
      sort: "top"
    });
  };

  // Sync react-hook-form with URL state
  useEffect(() => {
    reset({
      sort: filtersPayload?.sort ?? "top"
    });
  }, [filtersPayload?.sort, reset]);

  return (
    <div className={clsx(outerShellClasses, className)} {...props}>
      <div className={clsx(interactiveVerticalClasses)}>

        {scopeFiltersProps && (
          <ScrollableFilterRow
            items={scopeFiltersProps}
            selectionMode="single"
            activeKeys={scopeActiveKeys}
            onChange={handleScopeChange}
          />
        )}

        {primaryFiltersProps && (
          <ScrollableFilterRow
            items={primaryFiltersProps}
            selectionMode="single"
            activeKeys={primaryActiveKeys}
            onChange={handlePrimaryChange}
          />
        )}

        {secondaryFiltersProps && (
          <ScrollableFilterRow
            items={secondaryFiltersProps}
            selectionMode="multiple"
            activeKeys={secondaryActiveKeys}
            onChange={(keys) => {
              emitFilterChange({ secondary: keys });
            }}
          />
        )}

      </div>

      {(selectProps || clearButtonProps) && (
        <div className={clsx(interactiveRowClasses)}>
          {selectProps &&
            <FormField
              {...selectProps}
              control={control}
              name="sort"
              onChange={(value) => {
                emitFilterChange({ sort: value });
              }}
            />
          }

          {clearButtonProps &&
            <Button
              {...clearButtonProps}
              onClick={handleClearFilters}
            />
          }
        </div>
      )}
    </div>
  );
};

export default FilterBarSection;