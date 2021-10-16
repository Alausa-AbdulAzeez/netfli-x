import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logOut } from "./AuthActions";
const axiosInstance = axios.create({
  baseURL: "https://netfli-x.herokuapp.com/api/",
});

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const logOutFunction = (dispatch) => {
  dispatch(logOut());
};
