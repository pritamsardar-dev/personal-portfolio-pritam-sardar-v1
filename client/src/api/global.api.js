import axiosInstance from "./axios";

export const getHeader = async () => {
  const res = await axiosInstance.get("/globals/header");
  return res.data;
};

export const getFooter = async () => {
  const res = await axiosInstance.get("/globals/footer");
  return res.data;
};

export const getSiteConfig = async () => {
  const res = await axiosInstance.get("/globals/site-config");
  return res.data;
};
