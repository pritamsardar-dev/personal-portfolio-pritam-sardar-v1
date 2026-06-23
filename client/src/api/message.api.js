import axiosInstance from "./axios";

export const createMessage = async (data) => {
  const res = await axiosInstance.post("/messages", data);
  return res.data;
};
