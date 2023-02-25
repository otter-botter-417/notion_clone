import axiosClient from "./axiosCient";

const memoApi = {
  create: () => axiosClient.post("memo"),
  getAll: () => axiosClient.get("memo"),
};

export default memoApi;
