import authApi from "../api/authApi";

export const authUtuls = {
  //JWTチェック
  isAuthenticated: async () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
      const res = await authApi.verifytoken();
      return res.user;
    } catch (err) {
      return false;
    }
  },
};
