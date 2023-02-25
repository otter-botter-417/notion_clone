import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { authUtuls } from "../../utils/authUtuls";
import Sideber from "../common/Sideber";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/futures/userSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //JWTを持っているのか確認する
    const checkAuth = async () => {
      //認証チェック
      const user = await authUtuls.isAuthenticated();
      if (!user) {
        navigate("/login");
      } else {
        //ユーザーを保存する
        dispatch(setUser(user));
      }
    };
    checkAuth();
  }, [navigate]);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sideber />
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AppLayout;
