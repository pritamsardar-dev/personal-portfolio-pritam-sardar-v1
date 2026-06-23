import axiosInstance from "../axios";

export const getSection = async (slug, sectionKey) => {
  const res = await axiosInstance.get(`/admin/pages/${slug}/sections/${sectionKey}`);
  return res.data;
};

export const updateSection = async (slug, sectionKey, formData) => {
  const res = await axiosInstance.post(
    `/admin/pages/${slug}/sections/${sectionKey}/update`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } },
  );
  return res.data;
};

export const resetSection = async (slug, sectionKey) => {
  const res = await axiosInstance.post(`/admin/pages/${slug}/sections/${sectionKey}/reset`);
  return res.data;
};
