import axiosInstance from "./axios";

// Get featured experience rows
export const getExperienceFeaturedRows = async (limit = 1) => {
  const res = await axiosInstance.get(`/work-items/experience/featured?limit=${limit}`);
  return res.data;
};

// Get all experience rows
export const getExperienceAllRows = async () => {
  const res = await axiosInstance.get("/work-items/experience");
  return res.data;
};

// Get featured work items for homepage
export const getProjectFeaturedRows = async (limit = 4) => {
  const res = await axiosInstance.get(`/work-items/featured?limit=${limit}`);
  return res.data;
};

// Get paginated work items (projects + case studies)
export const getPaginatedWorkItemsRows = async ({
  page = 1,
  limit = 6,
  scope = "all",
  primary = "all",
  secondary = [],
  sort = "top",
}) => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("limit", limit);
  params.append("scope", scope);
  params.append("primary", primary);
  params.append("sort", sort);

  if (Array.isArray(secondary) && secondary.length > 0) {
    params.append("secondary", secondary.join(","));
  }

  const res = await axiosInstance.get(`/work-items?${params.toString()}`);
  return res.data;
};

// Get single work item with related rows for fullscreen page
export const getWorkItemRowByIdWithRelatedRows = async (rowId, includeCurrent = false) => {
  const res = await axiosInstance.get(`/work-items/${rowId}?includeCurrent=${includeCurrent}`);
  return res.data;
};

// Records a view for a work item row, deduplicated by IP on the server
export const recordRowView = async (rowId) => {
  const res = await axiosInstance.post(`/work-items/${rowId}/view`);
  return res.data;
};