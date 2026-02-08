import api from "./axios";

export const login = async (data: { email: string; password: string }) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};
