import { unflattenObject } from "./unflattenObject";

// Strips non-editable fields before loading into editor
export const cleanPageForEditor = (page) => {
  if (!page) return null;

  return {
    ...page,
    sections: page.sections.map((section) => {
      const copy = { ...section };
      delete copy.ref;
      return copy;
    }),
  };
};

// Restores backend-required fields before API call
export const buildPagePayload = (form, originalPage) => {
  const updated = unflattenObject(form);

  return {
    ...originalPage,
    ...updated,
    sections: updated.sections.map((section) => {
      const match = originalPage.sections.find((s) => {
        const keyA = s.variant || s.view;
        const keyB = section.variant || section.view;
        return keyA === keyB;
      });

      return {
        ...section,
        ref: match?.ref,
        refModel: match?.refModel,
      };
    }),
  };
};
