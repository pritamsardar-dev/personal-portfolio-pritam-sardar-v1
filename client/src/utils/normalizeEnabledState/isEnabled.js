// Resolves an enabled flag to a boolean, defaulting to true if absent
export const isEnabled = (val) => {
  if (val === undefined || val === null) return true;
  if (typeof val === "boolean") return val;
  if (typeof val === "string") return val !== "false" && val !== "0";
  return Boolean(val);
};
