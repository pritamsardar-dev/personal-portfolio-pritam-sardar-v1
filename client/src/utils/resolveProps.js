export const resolveProps = (value, context) => {
  // 1. Primitives & functions (boolean, string, number, null, undefined)
  if (
    value === null ||
    typeof value !== "object" ||
    value instanceof Date
  ) {
    return value;
  }

  // 2. Arrays → resolve each item
  if (Array.isArray(value)) {
    return value.map((item) => resolveProps(item, context));
  }

  // 3. Context object → collapse
  if (context in value) {
    return resolveProps(value[context], context);
  }

  // 4. Normal object → recurse
  const resolved = {};

  for (const key in value) {
    resolved[key] = resolveProps(value[key], context);
  }

  return resolved;
};
