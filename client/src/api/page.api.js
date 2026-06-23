import axiosInstance from "./axios";

export const getPageBySlug = async (slug) => {
  const res = await axiosInstance.get(`/pages/${slug}`);
  return res.data;
};
