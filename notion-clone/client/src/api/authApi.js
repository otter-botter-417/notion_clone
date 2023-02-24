import axiosClient from "./axiosCient";

const authApi = {
  register: (params) => axiosClient.post("auth/register", params),
  login: (params) => axiosClient.post("auth/login", params),
  verifytoken: () => axiosClient.post("auth/verify-token"),
};

export default authApi;
