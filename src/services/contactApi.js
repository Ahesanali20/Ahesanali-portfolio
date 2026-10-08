import api from "./api";

export const submitContactForm = async (formData) => {
  const response = await api.post("/contact", formData);
  return response.data;
};
