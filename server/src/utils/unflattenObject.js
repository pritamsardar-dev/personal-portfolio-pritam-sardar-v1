const unflattenObject = (data) => {
  const result = {};

  for (const key in data) {
    const keys = key.split(".");
    let current = result;

    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        current[k] = data[key];
      } else {
        if (!current[k]) {
          current[k] = isNaN(keys[i + 1]) ? {} : [];
        }
        current = current[k];
      }
    });
  }

  return result;
};

export default unflattenObject;
