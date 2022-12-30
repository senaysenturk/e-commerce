import { baseService } from "../services/baseService";

export const postSignUp = (newUser) => {
  return baseService.post("http://localhost:5500/", "signup", newUser);
};

export const postAuth = (newUser) => {
  return baseService.post("http://localhost:5500/", "auth", newUser);
};
