import axiosInstance from "../axios";

export const updateHeader = async (data) => {
  const res = await axiosInstance.post("/admin/globals/header/update", data);
  return res.data;
};

export const resetHeader = async () => {
  const res = await axiosInstance.post("/admin/globals/header/reset");
  return res.data;
};

export const updateFooter = async (data) => {
  const res = await axiosInstance.post("/admin/globals/footer/update", data);
  return res.data;
};

export const resetFooter = async () => {
  const res = await axiosInstance.post("/admin/globals/footer/reset");
  return res.data;
};

export const updateSiteConfig = async (data) => {
  const res = await axiosInstance.post("/admin/globals/site-config/update", data);
  return res.data;
};

export const resetSiteConfig = async () => {
  const res = await axiosInstance.post("/admin/globals/site-config/reset");
  return res.data;
};
