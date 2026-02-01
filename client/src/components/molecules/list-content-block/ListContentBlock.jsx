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
  text-(--color-text-body)
  [&>*]:inline 
  [&>*+*]:ml-(--spacing-inline-text-gap)
`

/* ------------------ component ------------------ */

const ListContentBlock = ({
  items = {},
  labelValueItems = {},
  inlineItems = {},
  className,
}) => {
  const hasListItems =
    Array.isArray(items?.texts) && items.texts.length > 0;

  const hasLabelValueItems =
    Array.isArray(labelValueItems?.texts) &&
    labelValueItems.texts.length > 0;

  const hasInlineItems =
    Array.isArray(inlineItems?.texts) &&
    inlineItems.texts.length > 0;


  if (!hasListItems && !hasLabelValueItems && !hasInlineItems) return null;

  return (
    <div className={clsx(containerClasses, className)}>
      {/* Label / Value rows */}
      {hasLabelValueItems && (
        <ul className={listClasses}>
          {labelValueItems.texts.map((pair, idx) => (
            <li key={idx} className={labelValueRowClasses}>
              {pair.label && 
                <Text 
                  variant={labelValueItems.variant} 
                  modifiers={labelValueItems.modifiers}
                  text= {pair.label}
                />
              }
              {pair.value && 
                <Text
                  variant={labelValueItems.variant} 
                  text={pair.value}
                />
              }
            </li>
          ))}
        </ul>
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

      {/* Inline delimited list */}
      {hasInlineItems && (
        <div>
          {inlineItems.texts.map((text, idx) => (
            <React.Fragment key={idx}>
              <Text
                variant={inlineItems.variant}
                text={text}
                className="inline"
              />
              {idx < inlineItems.texts.length - 1 && (
                <Text
                  text={inlineItems.separator ?? " · "}
                  className="inline"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListContentBlock;
