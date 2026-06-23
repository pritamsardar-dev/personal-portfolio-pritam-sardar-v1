import axiosInstance from "../axios";

export const getPageOptions = async () => {
  const res = await axiosInstance.get("/admin/pages/options");
  return res.data;
};

export const getPageBySlug = async (slug) => {
  const res = await axiosInstance.get(`/admin/pages/${slug}`);
  return res.data;
};

// Updates metadata only
export const updatePage = async (slug, data) => {
  const res = await axiosInstance.post(`/admin/pages/${slug}/update`, data);
  return res.data;
};

export const resetPage = async (slug) => {
  const res = await axiosInstance.post(`/admin/pages/${slug}/reset`);
  return res.data;
};
