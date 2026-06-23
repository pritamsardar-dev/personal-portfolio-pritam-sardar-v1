export const flattenObject = (obj, parentKey = "", res = {}) => {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    // Array
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemKey = `${newKey}.${index}`;

        // Only recurse if object
        if (typeof item === "object" && item !== null) {
          flattenObject(item, itemKey, res);
        } else {
          // Direct assign for primitives (string, number, boolean)
          res[itemKey] = item;
        }
      });
    }

    // Object
    else if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, res);
    }

    // Primitive
    else {
      res[newKey] = value;
    }
  }

  return res;
};
