import { baseService } from "../../services/baseService";

export const getSignUp = () => {
  return baseService.get("http://localhost:5500/", "signup");
};

export const postSignUp = (newUser) => {
  return baseService.postAuth("http://localhost:5500/", "signup", newUser);
};

export const postAuth = (newUser) => {
  return baseService.postAuth("http://localhost:5500/", "auth", newUser);
};

export const fetchMe = () => {
  return baseService.get("http://localhost:5500/", "me");
};

export const fetchLogout = async () => {
  return baseService.postLogout("http://localhost:5500/", "logout");
};


