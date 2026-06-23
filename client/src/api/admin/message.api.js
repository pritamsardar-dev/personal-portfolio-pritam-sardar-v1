import axiosInstance from "../axios";

export const getMessages = async ({ filter = "all", page = 1, limit = 10 } = {}) => {
  const res = await axiosInstance.get("/admin/messages", {
    params: { filter, page, limit },
  });
  return res.data;
};

// Marks message as read on fetch
export const getMessage = async (id) => {
  const res = await axiosInstance.get(`/admin/messages/${id}`);
  return res.data;
};

export const updateReadStatus = async (id, isRead) => {
  const res = await axiosInstance.patch(`/admin/messages/${id}/read`, { isRead });
  return res.data;
};

export const updateSpamStatus = async (id, isSpam) => {
  const res = await axiosInstance.patch(`/admin/messages/${id}/spam`, { isSpam });
  return res.data;
};

export const updateRespondedStatus = async (id, isResponded) => {
  const res = await axiosInstance.patch(`/admin/messages/${id}/responded`, { isResponded });
  return res.data;
};

export const deleteMessage = async (id) => {
  const res = await axiosInstance.delete(`/admin/messages/${id}`);
  return res.data;
};
