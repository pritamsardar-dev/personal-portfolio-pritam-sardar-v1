// Recursively resolves a config object by collapsing context-keyed variants.
// Used to extract the correct variant (e.g. "home", "caseStudy") from CMS props.
export const resolveProps = (value, context) => {
  if (value === null || typeof value !== "object" || value instanceof Date) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveProps(item, context));
  }

  if (context in value) {
    return resolveProps(value[context], context);
  }

  const resolved = {};

  for (const key in value) {
    resolved[key] = resolveProps(value[key], context);
  }

  return resolved;
};
