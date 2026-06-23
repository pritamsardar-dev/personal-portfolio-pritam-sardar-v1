import axiosInstance from "../axios";

export const updateRow = async (slug, sectionKey, rowId, formData) => {
  const res = await axiosInstance.patch(
    `/admin/pages/${slug}/sections/${sectionKey}/rows/${rowId}/update`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } },
  );
  return res.data;
};

export const resetRow = async (slug, sectionKey, rowId) => {
  const res = await axiosInstance.patch(
    `/admin/pages/${slug}/sections/${sectionKey}/rows/${rowId}/reset`,
  );
  return res.data;
};
