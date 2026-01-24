import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";

/* ------------------ classes ------------------ */
const containerClasses = `
  flex flex-col w-full
`;

const listClasses = `
  list-disc
  list-outside
  pl-(--spacing-list-item-text-indent-mobile)
  sm:pl-(--spacing-list-item-text-indent-tablet)
  lg:pl-(--spacing-list-item-text-indent-desktop)
  space-y-(--spacing-list-item-text-gap-y-mobile)
  sm:space-y-(--spacing-list-item-text-gap-y-tablet)
  lg:space-y-(--spacing-list-item-text-gap-y-desktop)
`;

const labelValueRowClasses = `
  [&>*]:inline 
  [&>*+*]:ml-(--spacing-inline-text-gap)
`

/* ------------------ component ------------------ */

const ListContentBlock = ({
  items = {},
  labelValueItems = {},
  className,
}) => {
  const hasListItems =
    Array.isArray(items?.texts) && items.texts.length > 0;

  const hasLabelValueItems =
    Array.isArray(labelValueItems?.texts) &&
    labelValueItems.texts.length > 0;

  if (!hasListItems && !hasLabelValueItems) return null;

  return (
    <div className={clsx(containerClasses, className)}>
      {/* Label / Value rows */}
      {hasLabelValueItems && (
        <div className={listClasses}>
          {labelValueItems.texts.map((pair, idx) => (
            <div key={idx} className={labelValueRowClasses}>
              {pair.label && <Text {...pair.label} />}
              {pair.value && <Text {...pair.value} />}
            </div>
          ))}
        </div>
      )}

      {/* List items */}
      {hasListItems && (
        <ul className={listClasses}>
          {items.texts.map((text, idx) => (
            <Text
              key={idx}
              variant={items.variant}
              as={items.as}
              text={text}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListContentBlock;
