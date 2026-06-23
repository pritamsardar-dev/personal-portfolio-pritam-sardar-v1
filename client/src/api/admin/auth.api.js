import axiosInstance from "../axios";

export const loginAdmin = async (data) => {
  const res = await axiosInstance.post("/admin/auth/login", data);
  return res.data;
};

export const logoutAdmin = async () => {
  const res = await axiosInstance.post("/admin/auth/logout");
  return res.data;
};

export const getMe = async () => {
  const res = await axiosInstance.get("/admin/auth/me");
  return res.data;
};
