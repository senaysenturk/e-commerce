import { baseService } from "../../services/baseService";

export const getSignUp = () => {
  return baseService.get("http://localhost:5500/", "signup");
};

export const postSignUp = (newUser) => {
  return baseService.postAuth("http://localhost:5500/", "signup", newUser);
};

export const deleteSignUp = async (userId) => {
  return baseService.delete("http://localhost:5500/", "signup/", userId);
};

export const getUsers = () => {
  return baseService.get("http://localhost:5500/", "users");
};

export const postUser = (newUser) => {
  return baseService.post("http://localhost:5500/", "users", newUser);
};

export const deleteUser = async (userId) => {
  return baseService.delete("http://localhost:5500/", "users/", userId);
};

export const patchUser = (id, newUser) => {
  return baseService.patch("http://localhost:5500/", "users/", id, newUser);
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
