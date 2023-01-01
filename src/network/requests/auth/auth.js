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

export const postMe = (newUser) => {
  return baseService.postAuth("http://localhost:5500/", "me", newUser);
};

export const fetchMe = () => {
  return baseService.get("http://localhost:5500/", "me");
};

export const fetchLogout = async (id) => {
  return baseService.delete("http://localhost:5500/", "me/", id);
};

