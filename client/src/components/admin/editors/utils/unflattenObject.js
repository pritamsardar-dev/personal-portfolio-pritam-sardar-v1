export const unflattenObject = (flatObj) => {
  const result = {};

  for (let key in flatObj) {
    const keys = key.split(".");
    let current = result;

    keys.forEach((k, i) => {
      const nextKey = keys[i + 1];
      const isIndex = !isNaN(nextKey);

      if (i === keys.length - 1) {
        current[k] = flatObj[key];
      } else {
        if (!current[k]) {
          current[k] = isIndex ? [] : {};
        }
        current = current[k];
      }
    });
  }

  return result;
};
